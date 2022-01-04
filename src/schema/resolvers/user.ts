import { UserResolvers } from "../../models/graphql";
import axios from "axios";
import { getRandomMockShortString } from "./mock";
import { sampleBadges } from "./badge";
import { sampleMissions } from "./mission";

export const userResolve: UserResolvers = {
  photoUrl: () => getPhoto(),
  missions: (_, args) => {
    if (args.flag === "IN_PROGRESS") {
      return sampleMissions.filter((mission) => mission.inProgress);
    }
    if (args.flag === "FEATURED") {
      return sampleMissions.filter((mission) => mission.featured);
    }
    return [];
  },
  badges: () => sampleBadges,
  level: () => ({
    currentLevel: getRandomMockShortString(),
    currentPoints: 1000 * Math.floor(Math.random() * 100),
    nextLevelPoints: 100 * Math.floor(Math.random() * 10),
  }),
  games: () => Math.floor(Math.random() * 10),
  notificationCount: () => Math.floor(Math.random() * 10),
  points: () => 100 * Math.floor(Math.random() * 10),
};

async function getPhoto() {
  const response = await axios.get("https://randomuser.me/api/");
  return response?.data?.results[0].picture.thumbnail;
}
