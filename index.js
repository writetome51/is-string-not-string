"use strict";
Object.defineProperty(exports, "__esModule", { value: true });


function isString(arg) {
    return (typeof arg === 'string');
}
exports.isString = isString;


function notString(arg) {
    return !(isString(arg));
}
exports.notString = notString;
