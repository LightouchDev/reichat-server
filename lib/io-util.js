'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var EForwardedHeaderType;
(function (EForwardedHeaderType) {
    EForwardedHeaderType[EForwardedHeaderType["XFF"] = 0] = "XFF";
})(EForwardedHeaderType = exports.EForwardedHeaderType || (exports.EForwardedHeaderType = {}));
function getRemoteAddr(socket, forwardedHeaderType) {
    if (forwardedHeaderType === EForwardedHeaderType.XFF) {
        return socket.client.request.headers['x-forwarded-for'] || socket.client.conn.remoteAddress;
    }
    else {
        return socket.client.conn.remoteAddress;
    }
}
exports.getRemoteAddr = getRemoteAddr;
