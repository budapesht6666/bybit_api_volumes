"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const state_1 = require("./state");
const init_1 = require("./init");
const app = (0, express_1.default)();
const port = 3000;
// TODO riuting в отдельную папку
app.get('/', (req, res) => {
    const state = (0, state_1.getState)();
    res.send({ some: state });
});
// value2++
app.get('/value', (req, res) => {
    const state = (0, state_1.getState)();
    (0, state_1.setState)({ value2: state.value2++ });
    res.send({ some: state });
});
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
    (0, init_1.init)();
});
