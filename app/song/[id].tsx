import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { songs } from "../constants/songs";

export default function SongDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const song = songs.find((item) => item.id === id);

  if (!song) {
    return (
      <View style={styles.emptyState}>
        <Text style={styles.emptyTitle}>Song not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>{song.theme}</Text>
      <Text style={styles.title}>{song.title}</Text>
      <Text style={styles.meta}>
        Key: {song.key} • {song.duration}
      </Text>
      <Text style={styles.description}>{song.description}</Text>

      <View style={styles.lyricsBox}>
        {song.lyrics.map((line, index) => (
          <Text key={`${song.id}-${index}`} style={styles.lyricLine}>
            {line}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
  },
  content: {
    padding: 20,
    paddingTop: 36,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.3,
    textTransform: "uppercase",
    color: "#4f46e5",
    fontWeight: "700",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#0f172a",
    marginTop: 8,
  },
  meta: {
    color: "#475569",
    fontSize: 15,
    marginTop: 10,
  },
  description: {
    color: "#334155",
    fontSize: 16,
    marginTop: 14,
    lineHeight: 24,
  },
  lyricsBox: {
    marginTop: 22,
    backgroundColor: "#ffffff",
    borderRadius: 18,
    padding: 18,
    shadowColor: "#0f172a",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 1,
  },
  lyricLine: {
    color: "#1e293b",
    fontSize: 18,
    lineHeight: 32,
    marginBottom: 6,
  },
  emptyState: {
    flex: 1,
    backgroundColor: "#f8fafc",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0f172a",
  },
});
