"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKline = void 0;
const bybit_api_1 = require("bybit-api");
const getKline = async (params) => {
    try {
        const client = new bybit_api_1.RestClientV5({});
        const res = await client.getKline(params);
        if (res.retMsg !== 'OK') {
            console.error(res);
            throw new Error('Что то пошло не так!!!');
        }
        return {
            ...res.result,
            list: res.result.list.map((data) => ({
                startTimeInMs: new Date(Number(data[0])).toString(),
                openPrice: data[1],
                highPrice: data[2],
                lowPrice: data[3],
                closePrice: data[4],
                volumeInBaseCoin: data[5],
                turnoverInUSDT: data[6],
            })),
        };
    }
    catch (error) {
        console.error(error);
    }
};
exports.getKline = getKline;
