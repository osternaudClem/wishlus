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
exports.__esModule = true;
exports.registration = exports.login = exports.loginWithGoogle = void 0;
var user_1 = require("../models/user");
var responseUtils_1 = require("../utils/responseUtils");
var loginWithGoogle = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, name, picture, provider, providerAccountId, user, newUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, name = _a.name, picture = _a.picture, provider = _a.provider, providerAccountId = _a.providerAccountId;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, , 6]);
                return [4 /*yield*/, user_1.User.findOne({ email: email })];
            case 2:
                user = _b.sent();
                if (!!user) return [3 /*break*/, 4];
                newUser = new user_1.User({
                    email: email,
                    username: name,
                    avatar: picture,
                    provider: provider,
                    providerAccountId: providerAccountId
                });
                return [4 /*yield*/, newUser.save()];
            case 3:
                _b.sent();
                (0, responseUtils_1.sendSuccessCache)({ res: res, datas: newUser });
                return [2 /*return*/];
            case 4:
                if (user.provider !== provider ||
                    user.providerAccountId !== providerAccountId) {
                    (0, responseUtils_1.sendErrorForbidden)({
                        res: res,
                        error: "this account is not linked to ".concat(provider)
                    });
                    return [2 /*return*/];
                }
                (0, responseUtils_1.sendSuccessCache)({ res: res, datas: user });
                return [3 /*break*/, 6];
            case 5:
                error_1 = _b.sent();
                (0, responseUtils_1.sendErrorServer)({ res: res, error: error_1 });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.loginWithGoogle = loginWithGoogle;
var login = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, isValidPass, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                if (!email || !password) {
                    (0, responseUtils_1.sendErrorBadRequest)({ res: res, error: 'email or password missing' });
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, user_1.User.findOne({ email: email }).select('+password')];
            case 2:
                user = _b.sent();
                if (!user) {
                    (0, responseUtils_1.sendErrorNotFound)({ res: res, error: 'user not found' });
                }
                isValidPass = (user === null || user === void 0 ? void 0 : user.password) === password;
                if (!isValidPass) {
                    (0, responseUtils_1.sendErrorForbidden)({ res: res, error: 'invalid password' });
                }
                (0, responseUtils_1.sendSuccessCache)({ res: res, datas: user });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _b.sent();
                (0, responseUtils_1.sendErrorServer)({ res: res, error: error_2 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var registration = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                user = new user_1.User(req.body);
                return [4 /*yield*/, user.save()];
            case 1:
                _a.sent();
                (0, responseUtils_1.sendSuccess)({ res: res, datas: user });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _a.sent();
                res.status(500).send(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.registration = registration;
exports["default"] = { login: exports.login, loginWithGoogle: exports.loginWithGoogle, registration: exports.registration };
