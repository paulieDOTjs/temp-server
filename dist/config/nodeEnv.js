"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentEnv = exports.NODE_ENV = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var NODE_ENV;
(function (NODE_ENV) {
    NODE_ENV["DEV"] = "development";
    NODE_ENV["STAGE"] = "stage";
    NODE_ENV["PROD"] = "production";
})(NODE_ENV = exports.NODE_ENV || (exports.NODE_ENV = {}));
exports.currentEnv = process.env.NODE_ENV;
