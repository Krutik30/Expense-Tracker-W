"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var router = (0, express_1.Router)();
router.post('/createEmployees', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, FirstName, LastName, Email, ContactNumber, EmploymentStartDate, newEmployee, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, FirstName = _a.FirstName, LastName = _a.LastName, Email = _a.Email, ContactNumber = _a.ContactNumber, EmploymentStartDate = _a.EmploymentStartDate;
                console.log(req.body);
                // Check if all required fields are present
                if (!FirstName || !LastName || !Email || !ContactNumber || !EmploymentStartDate) {
                    return [2 /*return*/, res.status(400).json({ error: 'Missing required fields' })];
                }
                return [4 /*yield*/, prisma.employee.create({
                        data: {
                            FirstName: FirstName,
                            LastName: LastName,
                            Email: Email,
                            ContactNumber: ContactNumber,
                            EmploymentStartDate: EmploymentStartDate
                        }
                    })];
            case 1:
                newEmployee = _b.sent();
                res.status(201).json({ message: 'Employee created successfully', data: newEmployee });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error('Error creating employee:', error_1);
                res.status(500).json({ error: 'Internal server error' });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
// all Employess are Listed
router.get('/getEmployees', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var employees, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                console.log('object');
                return [4 /*yield*/, prisma.employee.findMany({
                        include: {
                            Advance: true,
                            Expense: true,
                            Salary: true
                        }
                    })];
            case 1:
                employees = _a.sent();
                res.json({ message: 'All Employee Data', status: 200, payload: employees });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                console.error('Error retrieving employees:', error_2);
                throw error_2;
            case 3: return [2 /*return*/];
        }
    });
}); });
exports.default = router;
