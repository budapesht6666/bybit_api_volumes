"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setState = exports.getState = void 0;
const state = { value1: 0, value2: 0, value3: 0 };
const getState = () => state;
exports.getState = getState;
const setState = (newState) => ({ ...state, ...newState });
exports.setState = setState;
