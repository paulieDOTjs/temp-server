"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missionResolve = exports.sampleMissions = void 0;
const mock_1 = require("./mock");
const badge_1 = require("./badge");
exports.sampleMissions = new Array(15).fill("").map((_, i) => ({
    completed: (0, mock_1.getRandomBoolean)(),
    description: (0, mock_1.getRandomMockLongString)(),
    expiringDate: new Date(),
    expiringSoon: (0, mock_1.getRandomBoolean)(),
    featured: (0, mock_1.getRandomBoolean)(20),
    id: "MISSION" + i,
    imageUrl: "https://via.placeholder.com/350x150",
    inProgress: (0, mock_1.getRandomBoolean)(),
    lockedStatus: getLockedStatus(),
    name: `${(0, mock_1.getRandomMockShortString)()} ${(0, mock_1.getRandomMockShortString)()} ${(0, mock_1.getRandomMockShortString)()}`,
    point: { category: "dollars", count: Math.floor(Math.random() * 10) * 100 },
    repeats: (0, mock_1.getRandomBoolean)(),
    thumbUrl: "https://via.placeholder.com/350x150",
}));
function getLockedStatus() {
    const locked = (0, mock_1.getRandomBoolean)(20);
    if (locked) {
        return { locked, reason: (0, mock_1.getRandomMockLongString)() };
    }
    else {
        return { locked };
    }
}
exports.missionResolve = {
    earns: (root) => getBadge(root.id),
};
function getBadge(missionID) {
    if (missionID) {
        const foundBadge = badge_1.sampleBadges.find((badge) => badge.missionID === missionID);
        if (foundBadge)
            return foundBadge;
    }
    return null;
}
