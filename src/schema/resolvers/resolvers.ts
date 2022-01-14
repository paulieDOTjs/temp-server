import { Resolvers, User } from "../../models/graphql";

// import { externalUrlResolve } from "./externalUrl";
import { missionResolve } from "./mission";
import { userResolve } from "./user";

export const resolvers: Resolvers = {
  Query: {
    me: async () => {
      const prom = new Promise<User>((res) => {
        const user = {
          links: {
            badges: "https://www.google.com",
            games: "https://www.google.com",
            messages: "https://www.google.com",
            privacyPolicy: "https://www.google.com",
          },
        } as User;
        setTimeout(() => {
          res(user);
        }, 1000);
      });
      return prom;
    },
  },
  User: userResolve,
  Mission: missionResolve,
  ExternalUrl: () => [],
};
