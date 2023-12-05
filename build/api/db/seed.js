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
const _1 = require(".");
require("dotenv").config();
const postSeed = [
    {
        content: "You're doing great!",
        author: "author1",
    },
    {
        content: "Keep going!",
        author: "author2",
    },
    {
        content: "Almost there!",
        author: "author3",
    }
];
const seed = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield _1.db.createCollection('posts');
        const seedPosts = yield _1.db
            .collection("posts")
            .insertMany(postSeed);
        console.log("Database seeded 🌱");
        return { seedMsg: seedPosts };
    }
    catch (x) {
        console.error(x);
        return { error: x };
    }
});
seed();
