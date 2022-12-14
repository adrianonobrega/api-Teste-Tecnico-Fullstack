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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactCreateServices = void 0;
var database_1 = require("../../database");
var contact_entity_1 = require("../../entities/contact.entity");
var user_entity_1 = require("../../entities/user.entity");
var appError_1 = __importDefault(require("../../errors/appError"));
var contactCreateServices = function (_a) {
    var user_id = _a.user_id, email = _a.email, phone = _a.phone, name = _a.name;
    return __awaiter(void 0, void 0, void 0, function () {
        var contactRepository, userRepository, user, contacts, alreadyExistsEmail, phoneExistsEmail, contact, result;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    contactRepository = database_1.AppDataSource.getRepository(contact_entity_1.Contact);
                    userRepository = database_1.AppDataSource.getRepository(user_entity_1.User);
                    return [4 /*yield*/, userRepository.findOne({
                            where: {
                                id: user_id
                            }
                        })];
                case 1:
                    user = _b.sent();
                    return [4 /*yield*/, contactRepository.find()];
                case 2:
                    contacts = _b.sent();
                    alreadyExistsEmail = contacts.find(function (contact) { return contact.email === email; });
                    phoneExistsEmail = contacts.find(function (contact) { return contact.phone === phone; });
                    if (!user) {
                        throw new appError_1.default("User not found");
                    }
                    if (alreadyExistsEmail) {
                        throw new appError_1.default("Email already exists");
                    }
                    if (phoneExistsEmail) {
                        throw new appError_1.default("Phone already exists");
                    }
                    contact = new contact_entity_1.Contact();
                    contact.id = contact.id;
                    contact.name = name;
                    contact.email = email;
                    contact.phone = phone;
                    contact.user = user;
                    return [4 /*yield*/, contactRepository.save(contact)];
                case 3:
                    _b.sent();
                    result = {
                        id: contact.id,
                        name: contact.name,
                        email: contact.email,
                        phone: contact.phone,
                        user: {
                            id: user.id,
                            name: user.name,
                            created_at: user.created_at,
                            updated_at: user.updated_at
                        },
                        created_at: contact.created_at,
                        updated_at: contact.updated_at
                    };
                    return [2 /*return*/, result];
            }
        });
    });
};
exports.contactCreateServices = contactCreateServices;
