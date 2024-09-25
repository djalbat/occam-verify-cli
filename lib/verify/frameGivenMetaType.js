"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyFrameGivenMetaType;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _metaTypeNames = require("../metaTypeNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyFrameGivenMetaType(frameNode, metaType, assignments, stated, localContext) {
    var frameVerifiedGivenMetaType;
    var metaTypeName = metaType.getName();
    switch(metaTypeName){
        case _metaTypeNames.FRAME_META_TYPE_NAME:
            {
                var verifyFrame = _shim.default.verifyFrame, frames = [], frameVerified = verifyFrame(frameNode, frames, stated, localContext);
                frameVerifiedGivenMetaType = frameVerified; ///
                break;
            }
        default:
            {
                debugger;
                break;
            }
    }
    return frameVerifiedGivenMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvZnJhbWVHaXZlbk1ldGFUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeUZyYW1lR2l2ZW5NZXRhVHlwZShmcmFtZU5vZGUsIG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IGZyYW1lVmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuXG4gIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICBzd2l0Y2ggKG1ldGFUeXBlTmFtZSkge1xuICAgIGNhc2UgRlJBTUVfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIGNvbnN0IHsgdmVyaWZ5RnJhbWUgfSA9IHNoaW0sXG4gICAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICAgIGZyYW1lVmVyaWZpZWQgPSB2ZXJpZnlGcmFtZShmcmFtZU5vZGUsIGZyYW1lcywgc3RhdGVkLCBsb2NhbENvbnRleHQpXG5cbiAgICAgIGZyYW1lVmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZnJhbWVWZXJpZmllZDsgLy8vXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGRlYnVnZ2VyXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmcmFtZVZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbn0iXSwibmFtZXMiOlsidmVyaWZ5RnJhbWVHaXZlbk1ldGFUeXBlIiwiZnJhbWVOb2RlIiwibWV0YVR5cGUiLCJhc3NpZ25tZW50cyIsInN0YXRlZCIsImxvY2FsQ29udGV4dCIsImZyYW1lVmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwidmVyaWZ5RnJhbWUiLCJzaGltIiwiZnJhbWVzIiwiZnJhbWVWZXJpZmllZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUF3QkE7OzsyREFKUDs2QkFFb0I7Ozs7OztBQUV0QixTQUFTQSx5QkFBeUJDLFNBQVMsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUNyRyxJQUFJQztJQUVKLElBQU1DLGVBQWVMLFNBQVNNLE9BQU87SUFFckMsT0FBUUQ7UUFDTixLQUFLRSxtQ0FBb0I7WUFBRTtnQkFDekIsSUFBTSxBQUFFQyxjQUFnQkMsYUFBSSxDQUFwQkQsYUFDRkUsU0FBUyxFQUFFLEVBQ1hDLGdCQUFnQkgsWUFBWVQsV0FBV1csUUFBUVIsUUFBUUM7Z0JBRTdEQyw2QkFBNkJPLGVBQWUsR0FBRztnQkFFL0M7WUFDRjtRQUVBO1lBQVM7Z0JBQ1AsUUFBUTtnQkFFUjtZQUNGO0lBQ0Y7SUFFQSxPQUFPUDtBQUNUIn0=