"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.User = void 0;
var bcrypt_1 = require("bcrypt");
var mongoose_1 = __importDefault(require("mongoose"));
var saltRounds = 10;
var userSchema = new mongoose_1["default"].Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String },
    username: { type: String, required: true, unique: true },
    avatar: { type: String },
    provider: { type: String, "default": null },
    providerAccountId: { type: String, "default": null }
}, { timestamps: true });
userSchema.pre('save', function save(next) {
    if (!this.isModified('password') || !this.password) {
        next();
        return;
    }
    this.password = (0, bcrypt_1.hashSync)(this.password, saltRounds);
    next();
});
exports.User = mongoose_1["default"].model('User', userSchema);
