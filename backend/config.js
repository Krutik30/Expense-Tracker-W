'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var assert_1 = __importDefault(require("assert"));
dotenv_1.default.config();
var _a = process.env, PORT = _a.PORT, HOST = _a.HOST, HOST_URL = _a.HOST_URL, DATABASE_URL = _a.DATABASE_URL;
(0, assert_1.default)(PORT, 'PORT is Required');
(0, assert_1.default)(HOST, 'HOST is Required');
var config = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    database_url: DATABASE_URL
};
exports.default = config;
