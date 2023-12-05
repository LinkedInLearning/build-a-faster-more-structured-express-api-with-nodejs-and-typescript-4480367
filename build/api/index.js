"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.get("/", (req, res) => {
    try {
        res.json({
            msg: "It's workin'!",
        });
    }
    catch (x) {
        console.error(x);
        res.json({ error: x });
    }
});
app.listen(process.env.PORT || PORT, () => {
    console.log("And we're rolling! 🎥");
});
exports.default = app;
