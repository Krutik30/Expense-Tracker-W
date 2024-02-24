"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var body_parser_1 = require("body-parser");
var config_1 = require("./config");
var auth_1 = require("./routes/auth"); // Import the auth routes
var salary_1 = require("./routes/salary");
var employee_1 = require("./routes/employee");
var app = (0, express_1.default)();
// app.use(express.json());
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(express_1.default.json());
// Add the auth routes to the '/auth' endpoint
app.use('/auth', auth_1.default);
app.use('/salary', salary_1.default);
app.use('/employees', employee_1.default);
app.listen(config_1.default.port, function () {
    console.log("Server listening on ".concat(config_1.default.port));
});
