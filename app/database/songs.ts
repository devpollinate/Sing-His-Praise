import * as SQLite from "expo-sqlite";

import { Song, songs as seedSongs } from "../constants/songs";

const memorySongs: Song[] = [...seedSongs];

const db = (() => {
  try {
    return SQLite.openDatabaseSync("sing_his_praise.db");
  } catch {
    return null;
  }
})();

function initializeDatabase() {
  if (!db) {
    return;
  }

  db.execSync(`
    CREATE TABLE IF NOT EXISTS songs (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      key TEXT,
      theme TEXT,
      duration TEXT,
      description TEXT,
      lyrics TEXT,
      updated_at TEXT
    );
  `);
}

initializeDatabase();

function parseLyrics(value: string | null): string[] {
  if (!value) {
    return [];
  }

  try {
    const parsed = JSON.parse(value) as string[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function mapRow(row: Record<string, any>): Song {
  return {
    id: String(row.id),
    title: String(row.title),
    key: String(row.key ?? ""),
    theme: String(row.theme ?? ""),
    duration: String(row.duration ?? ""),
    description: String(row.description ?? ""),
    lyrics: parseLyrics(row.lyrics ?? "[]"),
  };
}

export function loadSongs(): Song[] {
  if (!db) {
    return [...memorySongs];
  }

  const rows = db.getAllSync("SELECT * FROM songs ORDER BY title");

  if (rows.length > 0) {
    return rows.map(mapRow);
  }

  for (const song of seedSongs) {
    db.runSync(
      `
        INSERT OR IGNORE INTO songs (id, title, key, theme, duration, description, lyrics, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        song.id,
        song.title,
        song.key,
        song.theme,
        song.duration,
        song.description,
        JSON.stringify(song.lyrics),
        new Date().toISOString(),
      ],
    );
  }

  return [...seedSongs];
}

export async function syncSongsFromBackend(backendSongs: Song[]) {
  if (!backendSongs || backendSongs.length === 0) {
    return loadSongs();
  }

  if (!db) {
    memorySongs.splice(0, memorySongs.length, ...backendSongs);
    return [...memorySongs];
  }

  for (const song of backendSongs) {
    db.runSync(
      `
        INSERT OR REPLACE INTO songs (id, title, key, theme, duration, description, lyrics, updated_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      [
        song.id,
        song.title,
        song.key,
        song.theme,
        song.duration,
        song.description,
        JSON.stringify(song.lyrics),
        new Date().toISOString(),
      ],
    );
  }

  return db.getAllSync("SELECT * FROM songs ORDER BY title").map(mapRow);
}

export function getSongById(id: string): Song | undefined {
  if (!db) {
    return memorySongs.find((song) => song.id === id);
  }

  const row = db.getFirstSync("SELECT * FROM songs WHERE id = ?", [
    id,
  ]) as Record<string, any> | null;

  return row ? mapRow(row) : undefined;
}
