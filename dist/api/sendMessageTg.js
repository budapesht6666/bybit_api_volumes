"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = sendMessage;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const axios_1 = __importDefault(require("axios"));
const BOT_API_KEY = process.env.BOT_API_KEY;
const CHAT_ID = process.env.CHAT_ID;
async function sendMessage(message) {
    try {
        const response = await axios_1.default.post(`https://api.telegram.org/bot${BOT_API_KEY}/sendMessage`, {
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
        });
        // console.log('Ответ Telegram:', response.data);
    }
    catch (error) {
        console.error('Ошибка при отправке:', error.response ? error.response.data : error.message);
    }
}
