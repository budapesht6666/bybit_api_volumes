"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = init;
const getTickers_1 = require("./api/getTickers");
const sendMessageTg_1 = require("./api/sendMessageTg");
const checkTradingVolumes_1 = require("./helpers/checkTradingVolumes");
function init() {
    console.log(`вызов функции инициализации`);
    setInterval(async () => {
        console.log(`interval 1000+++++++++++++++++`);
        // const getKlineRes = await getKline({
        //   category: 'linear',
        //   symbol: 'BTCUSDT',
        //   interval: 'D',
        //   limit: 3,
        // });
        // console.log('getKlineRes:', getKlineRes);
        const getTickersRes = await (0, getTickers_1.getTickers)({
            category: 'linear',
        });
        if (!getTickersRes)
            return;
        const message = (0, checkTradingVolumes_1.checkTradingVolumes)(getTickersRes.list);
        if (!!message) {
            await (0, sendMessageTg_1.sendMessage)(message);
        }
        console.log(`interval 1000------------------`);
        // TODO далее чатGPT
    }, 5000);
}
