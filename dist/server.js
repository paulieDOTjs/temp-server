"use strict";
/* eslint-disable no-console */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_1 = require("./apollo");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || "4000";
app.set("port", port);
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/public", express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/health", (_req, res) => {
    res.send("Ok");
});
app.get("/", (_req, res) => {
    res.redirect(301, "/graphql");
});
app.post("/", (_req, res) => {
    res.redirect(308, "/graphql");
});
async function start() {
    app.listen({ port }, () => {
        console.log("🌟 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌟 ");
        console.log("🌟".padEnd(81, " ") + "🌟");
        console.log(`🌟      Now browse to http://localhost:${port}${apollo_1.apollo.graphqlPath} for GraphQL Playground`.padEnd(81, " ") + "🌟");
        console.log(`🌟       or http://localhost:${port}/public/visualizer.html for visualizer`.padEnd(81, " ") + "🌟");
        console.log("🌟".padEnd(81, " ") + "🌟");
        console.log("🌟 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌘 🚀 ☄️ 🪐 ✨ 🌟 ");
    });
    await apollo_1.apollo.start();
    apollo_1.apollo.applyMiddleware({ app });
}
start();
