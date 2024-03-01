"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var config_1 = __importDefault(require("./config"));
var auth_1 = __importDefault(require("./routes/auth"));
var salary_1 = __importDefault(require("./routes/salary"));
var employee_1 = __importDefault(require("./routes/employee"));
var advance_1 = __importDefault(require("./routes/advance"));
var expenses_1 = __importDefault(require("./routes/expenses"));
var morgan_1 = __importDefault(require("morgan"));
var app = (0, express_1.default)();
var corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174', 'https://expence-tracker-hackdspring.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'authorization'],
    credentials: true
};
// app.use(express.json());
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.urlencoded({
    extended: true
}));
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use('/auth', auth_1.default);
app.use('/salary', salary_1.default);
app.use('/employees', employee_1.default);
app.use('/advance', advance_1.default);
app.use('/expenses', expenses_1.default);
app.listen(config_1.default.port, function () {
    console.log("Server listening on ".concat(config_1.default.port));
});
