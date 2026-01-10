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
var _elements = /*#__PURE__*/ _interop_require_default(require("./elements"));
var _constants = require("./constants");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var baseType = null;
function baseTypeFromNothing() {
    if (baseType === null) {
        var Type = _elements.default.Type, name = _constants.BASE_TYPE_SYMBOL; ///
        baseType = Type.fromName(name);
    }
    return baseType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IEJBU0VfVFlQRV9TWU1CT0wgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxubGV0IGJhc2VUeXBlID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGJhc2VUeXBlRnJvbU5vdGhpbmcoKSB7XG4gIGlmIChiYXNlVHlwZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbmFtZSA9IEJBU0VfVFlQRV9TWU1CT0w7ICAvLy9cblxuICAgIGJhc2VUeXBlID0gVHlwZS5mcm9tTmFtZShuYW1lKTtcbiAgfVxuXG4gIHJldHVybiBiYXNlVHlwZTtcbn1cbiJdLCJuYW1lcyI6WyJiYXNlVHlwZUZyb21Ob3RoaW5nIiwiYmFzZVR5cGUiLCJUeXBlIiwiZWxlbWVudHMiLCJuYW1lIiwiQkFTRV9UWVBFX1NZTUJPTCIsImZyb21OYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRZ0JBOzs7ZUFBQUE7OzsrREFOSzt5QkFFWTs7Ozs7O0FBRWpDLElBQUlDLFdBQVc7QUFFUixTQUFTRDtJQUNkLElBQUlDLGFBQWEsTUFBTTtRQUNyQixJQUFNLEFBQUVDLE9BQVNDLGlCQUFRLENBQWpCRCxNQUNGRSxPQUFPQywyQkFBZ0IsRUFBRyxHQUFHO1FBRW5DSixXQUFXQyxLQUFLSSxRQUFRLENBQUNGO0lBQzNCO0lBRUEsT0FBT0g7QUFDVCJ9