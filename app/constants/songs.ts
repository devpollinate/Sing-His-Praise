export type Song = {
  id: string;
  title: string;
  key: string;
  theme: string;
  duration: string;
  description: string;
  lyrics: string[];
};

export const songs: Song[] = [
  {
    id: "amazing-grace",
    title: "Amazing Grace",
    key: "G",
    theme: "Grace",
    duration: "4:00",
    description: "A timeless reminder of redemption and hope.",
    lyrics: [
      "Amazing grace, how sweet the sound",
      "That saved a wretch like me",
      "I once was lost, but now am found",
      "Was blind, but now I see.",
      "'Twas grace that taught my heart to fear",
      "And grace my fears relieved",
      "How precious did that grace appear",
      "The hour I first believed.",
    ],
  },
  {
    id: "how-great-is-our-god",
    title: "How Great Is Our God",
    key: "D",
    theme: "Worship",
    duration: "4:30",
    description: "A declaration of the majesty and love of God.",
    lyrics: [
      "The splendor of the King",
      "Clothed in majesty",
      "Let all the earth rejoice",
      "All the earth rejoice",
      "He wraps Himself in light",
      "And darkness tries to hide",
      "It trembles at His voice",
      "How great is our God.",
    ],
  },
  {
    id: "thousand-reasons",
    title: "10,000 Reasons",
    key: "E",
    theme: "Praise",
    duration: "5:10",
    description: "A heartfelt anthem of gratitude and worship.",
    lyrics: [
      "The sun comes up, it's a new day dawning",
      "It's time to sing Your song again",
      "Whatever may pass, and whatever lies before me",
      "Let me be singing when the evening comes.",
      "Bless the Lord, O my soul",
      "O my soul, worship His holy name.",
    ],
  },
  {
    id: "beautiful-name",
    title: "What a Beautiful Name",
    key: "A",
    theme: "Adoration",
    duration: "4:45",
    description: "An intimate reflection on the beauty of Christ.",
    lyrics: [
      "You were the Word at the beginning",
      "One with God the Lord most high",
      "Your hidden glory in creation",
      "Now revealed in You our Christ",
      "What a beautiful Name it is",
      "What a beautiful Name it is",
      "The Name of Jesus Christ my King.",
    ],
  },
];
