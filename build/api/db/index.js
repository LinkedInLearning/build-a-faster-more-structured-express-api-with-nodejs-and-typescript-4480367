"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = exports.client = void 0;
const mongoose_1 = require("mongoose");
const mongodb_1 = require("mongodb");
require('dotenv').config();
const postSchema = new mongoose_1.Schema({
    content: { type: String, required: true },
    author: { type: String, required: true }
});
const Post = (0, mongoose_1.model)('Post', postSchema);
exports.client = new mongodb_1.MongoClient(process.env.MONGO_URI);
exports.db = exports.client.db('node-ts-api');
const connectToMongoDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connect)(process.env.MONGO_URI);
        const post = new Post({
            content: "First post!",
            author: "author0"
        });
        yield post.save();
        // console.log("post added")
        return { status: 200, msg: 'OK - Connected' };
    }
    catch (err) {
        console.error(err);
        return { status: 400, msg: 'Bad Request - Could Not Connect' };
    }
});
exports.default = connectToMongoDb;
