import { Resolvers, User } from "../../models/graphql";

import { externalUrlResolve } from "./externalUrl";
import { missionResolve } from "./mission";
import { userResolve } from "./user";

export const resolvers: Resolvers = {
  Query: {
    me: async () => {
      const prom = new Promise<User>((res) => {
        const user = {} as User;
        setTimeout(() => {
          res(user);
        }, 5000);
      });
      return prom;
    },
  },
  User: userResolve,
  Mission: missionResolve,
  ExternalUrl: externalUrlResolve,
};
