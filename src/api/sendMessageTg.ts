import dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';

const BOT_API_KEY = process.env.BOT_API_KEY;
const CHAT_ID = process.env.CHAT_ID;

export async function sendMessage(message: string) {
  try {
    const response = await axios.post(`https://api.telegram.org/bot${BOT_API_KEY}/sendMessage`, {
      chat_id: CHAT_ID,
      text: message,
      parse_mode: 'Markdown',
    });

    // console.log('Ответ Telegram:', response.data);
  } catch (error: any) {
    console.error('Ошибка при отправке:', error.response ? error.response.data : error.message);
  }
}
