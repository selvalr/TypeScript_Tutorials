"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var port = 3000;
app.get("/", function (_, res) {
    res.send("Hello, TypeScript with Express!");
});
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
