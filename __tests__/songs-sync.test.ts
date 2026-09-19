import { syncSongsFromBackend } from "../app/database/songs";

describe("song sync", () => {
  it("stores backend songs locally and returns them", async () => {
    const songs = await syncSongsFromBackend([
      {
        id: "test-song",
        title: "Test Song",
        key: "C",
        theme: "Praise",
        duration: "3:20",
        description: "A test song",
        lyrics: ["Hello world"],
      },
    ]);

    expect(songs).toHaveLength(1);
    expect(songs[0].title).toBe("Test Song");
  });
});
