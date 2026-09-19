import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SongCard } from "./components/SongCard";
import { loadSongs } from "./database/songs";

const songs = loadSongs();

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>Sing His Praise</Text>
          <Text style={styles.title}>Worship songs</Text>
          <Text style={styles.subtitle}>
            A simple collection of songs for prayer, worship, and reflection.
          </Text>
        </View>

        <FlatList
          data={songs}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => <SongCard song={item} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#eef2ff",
  },
  container: {
    flex: 1,
    backgroundColor: "#eef2ff",
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 28,
    paddingBottom: 18,
  },
  eyebrow: {
    fontSize: 12,
    letterSpacing: 1.4,
    color: "#4f46e5",
    textTransform: "uppercase",
    fontWeight: "700",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#0f172a",
    marginTop: 6,
  },
  subtitle: {
    color: "#475569",
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
    maxWidth: 360,
  },
  listContent: {
    paddingBottom: 30,
  },
});
