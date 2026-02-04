"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "baseTypeFromNothing", {
    enumerable: true,
    get: function() {
        return baseTypeFromNothing;
    }
});
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseType = null;
function baseTypeFromNothing() {
    if (baseType === null) {
        var Type = _elements.default.Type, name = _constants.BASE_TYPE_SYMBOL, context = null, provisional = false;
        baseType = Type.fromNameAndProvisional(name, provisional, context);
    }
    return baseType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCQVNFX1RZUEVfU1lNQk9MIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5sZXQgYmFzZVR5cGUgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gYmFzZVR5cGVGcm9tTm90aGluZygpIHtcbiAgaWYgKGJhc2VUeXBlID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBuYW1lID0gQkFTRV9UWVBFX1NZTUJPTCwgIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSBudWxsLFxuICAgICAgICAgIHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICBiYXNlVHlwZSA9IFR5cGUuZnJvbU5hbWVBbmRQcm92aXNpb25hbChuYW1lLCBwcm92aXNpb25hbCwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gYmFzZVR5cGU7XG59XG4iXSwibmFtZXMiOlsiYmFzZVR5cGVGcm9tTm90aGluZyIsImJhc2VUeXBlIiwiVHlwZSIsImVsZW1lbnRzIiwibmFtZSIsIkJBU0VfVFlQRV9TWU1CT0wiLCJjb250ZXh0IiwicHJvdmlzaW9uYWwiLCJmcm9tTmFtZUFuZFByb3Zpc2lvbmFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRZ0JBOzs7ZUFBQUE7OzsrREFOSzt5QkFFWTs7Ozs7O0FBRWpDLElBQUlDLFdBQVc7QUFFUixTQUFTRDtJQUNkLElBQUlDLGFBQWEsTUFBTTtRQUNyQixJQUFNLEFBQUVDLE9BQVNDLGlCQUFRLENBQWpCRCxNQUNGRSxPQUFPQywyQkFBZ0IsRUFDdkJDLFVBQVUsTUFDVkMsY0FBYztRQUVwQk4sV0FBV0MsS0FBS00sc0JBQXNCLENBQUNKLE1BQU1HLGFBQWFEO0lBQzVEO0lBRUEsT0FBT0w7QUFDVCJ9