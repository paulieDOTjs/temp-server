import { getRandomMockShortString, imageUrl } from "./mock";

export const sampleBadges = new Array(15).fill("").map((_, i) => ({
  title: getRandomMockShortString(),
  thumbUrl: imageUrl,
  lastEarnedTime: new Date(),
  missionID: "MISSION" + i,
}));
