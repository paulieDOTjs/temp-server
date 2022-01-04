"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const externalUrl_1 = require("./externalUrl");
const mission_1 = require("./mission");
const user_1 = require("./user");
exports.resolvers = {
    Query: {
        me: async () => {
            const prom = new Promise((res) => {
                const user = {};
                setTimeout(() => {
                    res(user);
                }, 5000);
            });
            return prom;
        },
    },
    User: user_1.userResolve,
    Mission: mission_1.missionResolve,
    ExternalUrl: externalUrl_1.externalUrlResolve,
};
