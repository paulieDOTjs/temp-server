"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleBadges = void 0;
const mock_1 = require("./mock");
exports.sampleBadges = new Array(15).fill("").map((_, i) => ({
    title: (0, mock_1.getRandomMockShortString)(),
    thumbUrl: mock_1.imageUrl,
    lastEarnedTime: new Date(),
    missionID: "MISSION" + i,
}));
