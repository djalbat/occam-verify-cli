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
var _occamfurtle = require("occam-furtle");
var _constants = require("./constants");
var baseType = null;
function baseTypeFromNothing() {
    if (baseType === null) {
        var Type = _occamfurtle.elements.Type, name = _constants.BASE_TYPE_SYMBOL, context = null, provisional = false;
        baseType = Type.fromNameAndProvisional(name, provisional, context);
    }
    return baseType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90eXBlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZWxlbWVudHMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IEJBU0VfVFlQRV9TWU1CT0wgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxubGV0IGJhc2VUeXBlID0gbnVsbDtcblxuZXhwb3J0IGZ1bmN0aW9uIGJhc2VUeXBlRnJvbU5vdGhpbmcoKSB7XG4gIGlmIChiYXNlVHlwZSA9PT0gbnVsbCkge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgbmFtZSA9IEJBU0VfVFlQRV9TWU1CT0wsICAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IGZhbHNlO1xuXG4gICAgYmFzZVR5cGUgPSBUeXBlLmZyb21OYW1lQW5kUHJvdmlzaW9uYWwobmFtZSwgcHJvdmlzaW9uYWwsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIGJhc2VUeXBlO1xufVxuIl0sIm5hbWVzIjpbImJhc2VUeXBlRnJvbU5vdGhpbmciLCJiYXNlVHlwZSIsIlR5cGUiLCJlbGVtZW50cyIsIm5hbWUiLCJCQVNFX1RZUEVfU1lNQk9MIiwiY29udGV4dCIsInByb3Zpc2lvbmFsIiwiZnJvbU5hbWVBbmRQcm92aXNpb25hbCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUWdCQTs7O2VBQUFBOzs7MkJBTlM7eUJBRVE7QUFFakMsSUFBSUMsV0FBVztBQUVSLFNBQVNEO0lBQ2QsSUFBSUMsYUFBYSxNQUFNO1FBQ3JCLElBQU0sQUFBRUMsT0FBU0MscUJBQVEsQ0FBakJELE1BQ0ZFLE9BQU9DLDJCQUFnQixFQUN2QkMsVUFBVSxNQUNWQyxjQUFjO1FBRXBCTixXQUFXQyxLQUFLTSxzQkFBc0IsQ0FBQ0osTUFBTUcsYUFBYUQ7SUFDNUQ7SUFFQSxPQUFPTDtBQUNUIn0=