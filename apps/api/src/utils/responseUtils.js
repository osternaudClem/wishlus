"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.sendErrorBadRequest = exports.sendErrorForbidden = exports.sendErrorNotFound = exports.sendErrorServer = exports.sendSuccessCache = exports.sendSuccess = void 0;
var sendSuccess = function (_a) {
    var res = _a.res, _b = _a.datas, datas = _b === void 0 ? null : _b, _c = _a.other, other = _c === void 0 ? null : _c;
    return send({ res: res, status: 200, datas: datas, other: other });
};
exports.sendSuccess = sendSuccess;
var sendSuccessCache = function (_a) {
    var res = _a.res, _b = _a.datas, datas = _b === void 0 ? null : _b, _c = _a.other, other = _c === void 0 ? null : _c;
    return send({ res: res, status: 202, datas: datas, other: other });
};
exports.sendSuccessCache = sendSuccessCache;
var sendErrorServer = function (_a) {
    var res = _a.res, _b = _a.error, error = _b === void 0 ? '' : _b;
    return send({ res: res, error: true, status: 500, errorMessage: error });
};
exports.sendErrorServer = sendErrorServer;
var sendErrorNotFound = function (_a) {
    var res = _a.res, _b = _a.error, error = _b === void 0 ? '' : _b;
    return send({ res: res, error: true, status: 404, errorMessage: error });
};
exports.sendErrorNotFound = sendErrorNotFound;
var sendErrorForbidden = function (_a) {
    var res = _a.res, _b = _a.error, error = _b === void 0 ? '' : _b;
    return send({ res: res, error: true, status: 403, errorMessage: error });
};
exports.sendErrorForbidden = sendErrorForbidden;
var sendErrorBadRequest = function (_a) {
    var res = _a.res, _b = _a.error, error = _b === void 0 ? '' : _b;
    return send({ res: res, error: true, status: 400, errorMessage: error });
};
exports.sendErrorBadRequest = sendErrorBadRequest;
var send = function (_a) {
    var res = _a.res, _b = _a.error, error = _b === void 0 ? false : _b, _c = _a.status, status = _c === void 0 ? 200 : _c, _d = _a.datas, datas = _d === void 0 ? null : _d, _e = _a.other, other = _e === void 0 ? null : _e, _f = _a.errorMessage, errorMessage = _f === void 0 ? null : _f;
    var response = {
        error: error,
        status: status
    };
    if (error) {
        response.errorMessage = errorMessage;
    }
    else {
        response.datas = datas;
    }
    if (other) {
        response = __assign(__assign({}, response), other);
    }
    return res.status(status).json(response);
};
