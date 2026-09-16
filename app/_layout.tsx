import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#eef2ff" },
        headerTintColor: "#0f172a",
        headerTitleStyle: { fontWeight: "700" },
      }}
    />
  );
}
