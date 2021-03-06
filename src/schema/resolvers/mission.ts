import {
  getRandomBoolean,
  getRandomMockLongString,
  getRandomMockShortString,
} from "./mock";

import { MissionResolvers } from "../../models/graphql";
import { sampleBadges } from "./badge";

export const sampleMissions = new Array(15).fill("").map((_, i) => ({
  completed: getRandomBoolean(),
  description: getRandomMockLongString(),
  expiringDate: new Date(),
  expiringSoon: getRandomBoolean(),
  featured: getRandomBoolean(20),
  id: "MISSION" + i,
  imageUrl: "https://via.placeholder.com/350x150",
  inProgress: getRandomBoolean(),
  lockedStatus: getLockedStatus(),
  name: `${getRandomMockShortString()} ${getRandomMockShortString()} ${getRandomMockShortString()}`,
  point: { category: "dollars", count: Math.floor(Math.random() * 10) * 100 },
  repeats: getRandomBoolean(),
  thumbUrl: "https://via.placeholder.com/350x150",
  tasks: [],
}));

function getLockedStatus() {
  const locked = getRandomBoolean(20);
  if (locked) {
    return { locked, reason: getRandomMockLongString() };
  } else {
    return { locked };
  }
}

export const missionResolve: MissionResolvers = {
  earnBadges: (root) => getBadges(root.id),
};

function getBadges(missionID: string | null | undefined) {
  if (missionID) {
    const foundBadges = sampleBadges.filter(
      (badge) => badge.missionID === missionID
    );
    if (foundBadges) return foundBadges;
  }
  return [];
}
