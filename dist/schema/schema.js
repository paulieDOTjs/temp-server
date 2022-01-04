"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const subgraph_1 = require("@apollo/subgraph");
const resolvers_1 = require("./resolvers/resolvers");
const typeDefs_1 = require("./typeDefs");
exports.schema = (0, subgraph_1.buildSubgraphSchema)([{ typeDefs: typeDefs_1.typeDefs, resolvers: resolvers_1.resolvers }]);
