import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

import { Song } from "../constants/songs";

type SongCardProps = {
  song: Song;
};

export function SongCard({ song }: SongCardProps) {
  return (
    <Link href={{ pathname: "/song/[id]", params: { id: song.id } }} asChild>
      <Pressable style={styles.card}>
        <View style={styles.row}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{song.key}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.meta}>
              {song.theme} • {song.duration}
            </Text>
          </View>
        </View>
        <Text style={styles.description}>{song.description}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    shadowColor: "#0f172a",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  badge: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: "#eef2ff",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    color: "#312e81",
    fontWeight: "700",
    fontSize: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0f172a",
  },
  meta: {
    color: "#475569",
    marginTop: 4,
    fontSize: 13,
  },
  description: {
    color: "#475569",
    fontSize: 14,
    marginTop: 12,
    lineHeight: 20,
  },
});
