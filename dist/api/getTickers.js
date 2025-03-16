"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTickers = void 0;
const bybit_api_1 = require("bybit-api");
const getTickers = async (params) => {
    try {
        const client = new bybit_api_1.RestClientV5({});
        const res = await client.getTickers(params);
        if (res.retMsg !== 'OK') {
            console.error(res);
            throw new Error('Что то пошло не так!!!');
        }
        return res.result;
    }
    catch (error) {
        console.error(error);
    }
};
exports.getTickers = getTickers;
