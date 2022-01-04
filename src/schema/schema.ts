import { buildSubgraphSchema } from "@apollo/subgraph";
import { resolvers } from "./resolvers/resolvers";
import { typeDefs } from "./typeDefs";

export const schema = buildSubgraphSchema([{ typeDefs, resolvers }]);
