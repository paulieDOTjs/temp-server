"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apollo = void 0;
const nodeEnv_1 = require("./config/nodeEnv");
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = require("./schema/schema");
exports.apollo = new apollo_server_express_1.ApolloServer({
    schema: schema_1.schema,
    introspection: true,
    debug: nodeEnv_1.currentEnv === nodeEnv_1.NODE_ENV.DEV,
    formatError: (err) => {
        if (err.message.startsWith("Database Error: ") &&
            nodeEnv_1.currentEnv !== nodeEnv_1.NODE_ENV.DEV) {
            return new Error("Internal server error");
        }
        ``;
        return err;
    },
});
