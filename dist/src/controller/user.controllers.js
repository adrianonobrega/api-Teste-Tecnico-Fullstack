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
        while (_) try {
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
exports.userLoginController = exports.userDeleteController = exports.userUpdateController = exports.userListOneController = exports.userListController = exports.userCreateController = void 0;
var userCreate_services_1 = require("../services/user/userCreate.services");
var userList_services_1 = require("../services/user/userList.services");
var userOneList_services_1 = require("../services/user/userOneList.services");
var userUpdate_services_1 = require("../services/user/userUpdate.services");
var userDelete_services_1 = require("../services/user/userDelete.services");
var userLogin_services_1 = require("../services/user/userLogin.services");
var userCreateController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, phone, password, newUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, email = _a.email, phone = _a.phone, password = _a.password;
                return [4 /*yield*/, (0, userCreate_services_1.userCreateServices)({ name: name_1, email: email, phone: phone, password: password })];
            case 1:
                newUser = _b.sent();
                res.status(201).json(newUser);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                if (error_1 instanceof Error) {
                    return [2 /*return*/, res.status(400).json({
                            message: error_1.message
                        })];
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userCreateController = userCreateController;
var userListController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, (0, userList_services_1.userListService)()];
            case 1:
                users = _a.sent();
                res.status(200).json(users);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _a.sent();
                if (error_2 instanceof Error) {
                    return [2 /*return*/, res.status(400).json({
                            message: error_2.message
                        })];
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userListController = userListController;
var userListOneController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, users, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, userOneList_services_1.userOneListService)(id)];
            case 2:
                users = _a.sent();
                res.status(200).json(users);
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                if (error_3 instanceof Error) {
                    return [2 /*return*/, res.status(400).json({
                            message: error_3.message
                        })];
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.userListOneController = userListOneController;
var userUpdateController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, email, phone, password, newUser, error_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                id = req.params.id;
                _a = req.body, email = _a.email, phone = _a.phone, password = _a.password;
                return [4 /*yield*/, (0, userUpdate_services_1.userUpdateService)({ id: id, email: email, phone: phone, password: password })];
            case 1:
                newUser = _b.sent();
                res.status(201).json(newUser);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _b.sent();
                if (error_4 instanceof Error) {
                    return [2 /*return*/, res.status(400).json({
                            message: error_4.message
                        })];
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userUpdateController = userUpdateController;
var userDeleteController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, users, error_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, (0, userDelete_services_1.userDeleteService)(id)];
            case 2:
                users = _a.sent();
                res.status(200).json(users);
                return [3 /*break*/, 4];
            case 3:
                error_5 = _a.sent();
                if (error_5 instanceof Error) {
                    return [2 /*return*/, res.status(400).json({
                            message: error_5.message
                        })];
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.userDeleteController = userDeleteController;
var userLoginController = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, contact, error_6;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, (0, userLogin_services_1.userLoginServices)({ email: email, password: password })];
            case 1:
                contact = _b.sent();
                res.status(201).json(contact);
                return [3 /*break*/, 3];
            case 2:
                error_6 = _b.sent();
                if (error_6 instanceof Error) {
                    return [2 /*return*/, res.status(400).json({
                            message: error_6.message
                        })];
                }
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userLoginController = userLoginController;