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
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
const _constants = require("../constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
let baseType = null;
function baseTypeFromNothing() {
    if (baseType === null) {
        const { Type } = _elements.default, name = _constants.BASE_TYPE_SYMBOL, context = null;
        baseType = Type.fromName(name, context);
    }
    return baseType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvdHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBCQVNFX1RZUEVfU1lNQk9MIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5sZXQgYmFzZVR5cGUgPSBudWxsO1xuXG5leHBvcnQgZnVuY3Rpb24gYmFzZVR5cGVGcm9tTm90aGluZygpIHtcbiAgaWYgKGJhc2VUeXBlID09PSBudWxsKSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBuYW1lID0gQkFTRV9UWVBFX1NZTUJPTCwgIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgYmFzZVR5cGUgPSBUeXBlLmZyb21OYW1lKG5hbWUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJhc2VUeXBlO1xufVxuIl0sIm5hbWVzIjpbImJhc2VUeXBlRnJvbU5vdGhpbmciLCJiYXNlVHlwZSIsIlR5cGUiLCJlbGVtZW50cyIsIm5hbWUiLCJCQVNFX1RZUEVfU1lNQk9MIiwiY29udGV4dCIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRZ0JBOzs7ZUFBQUE7OztpRUFOSzsyQkFFWTs7Ozs7O0FBRWpDLElBQUlDLFdBQVc7QUFFUixTQUFTRDtJQUNkLElBQUlDLGFBQWEsTUFBTTtRQUNyQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHQyxpQkFBUSxFQUNuQkMsT0FBT0MsMkJBQWdCLEVBQ3ZCQyxVQUFVO1FBRWhCTCxXQUFXQyxLQUFLSyxRQUFRLENBQUNILE1BQU1FO0lBQ2pDO0lBRUEsT0FBT0w7QUFDVCJ9