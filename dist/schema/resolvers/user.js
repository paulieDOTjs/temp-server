"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolve = void 0;
const axios_1 = __importDefault(require("axios"));
const mock_1 = require("./mock");
const badge_1 = require("./badge");
const mission_1 = require("./mission");
exports.userResolve = {
    photoUrl: () => getPhoto(),
    missions: (_, args) => {
        if (args.flag === "IN_PROGRESS") {
            return mission_1.sampleMissions.filter((mission) => mission.inProgress);
        }
        if (args.flag === "FEATURED") {
            return mission_1.sampleMissions.filter((mission) => mission.featured);
        }
        return [];
    },
    badges: () => badge_1.sampleBadges,
    level: () => ({
        currentLevel: (0, mock_1.getRandomMockShortString)(),
        currentPoints: 1000 * Math.floor(Math.random() * 100),
        nextLevelPoints: 100 * Math.floor(Math.random() * 10),
    }),
    games: () => Math.floor(Math.random() * 10),
    notificationCount: () => Math.floor(Math.random() * 10),
    points: () => 100 * Math.floor(Math.random() * 10),
};
async function getPhoto() {
    var _a;
    const response = await axios_1.default.get("https://randomuser.me/api/");
    return (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.results[0].picture.thumbnail;
}
