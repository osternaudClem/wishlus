"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cors_1 = __importDefault(require("cors"));
var express_1 = __importStar(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var routes_1 = require("./routes");
var app = (0, express_1["default"])();
var port = 4200;
app.use((0, cors_1["default"])({ origin: 'http://localhost:3000' }));
app.use((0, cookie_parser_1["default"])());
app.use((0, express_1.urlencoded)({ extended: true }));
app.use((0, express_1.json)());
var mongooseOptions = {};
mongoose_1["default"]
    .connect('mongodb://localhost:27017/wishlus', mongooseOptions)
    .then(function () {
    console.warn('Connected to MongoDB');
})["catch"](function (error) {
    console.error('Error connecting to MongoDB:', error);
});
app.get('/ping', function (_, response) {
    response.json({ response: 'pong' });
});
app.use('/auth', routes_1.authRouter);
app.use('/user', routes_1.userRouter);
app.listen(port, function () {
    console.warn("Listening on http://localhost:".concat(port));
});
