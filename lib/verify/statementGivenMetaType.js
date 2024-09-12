"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return verifyStatementGivenMetaType;
    }
});
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _metaTypeNames = require("../metaTypeNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function verifyStatementGivenMetaType(statementNode, metaType, assignments, derived, localContext) {
    var statementVerifiedGivenMetaType;
    var metaTypeName = metaType.getName();
    switch(metaTypeName){
        case _metaTypeNames.FRAME_META_TYPE_NAME:
            {
                debugger;
                break;
            }
        case _metaTypeNames.STATEMENT_META_TYPE_NAME:
            {
                var verifyStatement = _shim.default.verifyStatement, statementVerified = verifyStatement(statementNode, assignments, derived, localContext);
                statementVerifiedGivenMetaType = statementVerified;
                break;
            }
        default:
            {
                debugger;
            }
    }
    return statementVerifiedGivenMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50R2l2ZW5NZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUsIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSB9IGZyb20gXCIuLi9tZXRhVHlwZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEdpdmVuTWV0YVR5cGUoc3RhdGVtZW50Tm9kZSwgbWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcblxuICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgc3dpdGNoIChtZXRhVHlwZU5hbWUpIHtcbiAgICBjYXNlIEZSQU1FX01FVEFfVFlQRV9OQU1FOiB7XG5cbiAgICAgIGRlYnVnZ2VyXG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBjb25zdCB7IHZlcmlmeVN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBkZXJpdmVkLCBsb2NhbENvbnRleHQpXG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHN0YXRlbWVudFZlcmlmaWVkO1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWZhdWx0OiB7XG5cbiAgICAgIGRlYnVnZ2VyXG5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnRHaXZlbk1ldGFUeXBlIiwic3RhdGVtZW50Tm9kZSIsIm1ldGFUeXBlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidmVyaWZ5U3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudFZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXdCQTs7OzJEQUpQOzZCQUU4Qzs7Ozs7O0FBRWhELFNBQVNBLDZCQUE2QkMsYUFBYSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFQyxZQUFZO0lBQzlHLElBQUlDO0lBRUosSUFBTUMsZUFBZUwsU0FBU00sT0FBTztJQUVyQyxPQUFRRDtRQUNOLEtBQUtFLG1DQUFvQjtZQUFFO2dCQUV6QixRQUFRO2dCQUVSO1lBQ0Y7UUFFQSxLQUFLQyx1Q0FBd0I7WUFBRTtnQkFDN0IsSUFBTSxBQUFFQyxrQkFBb0JDLGFBQUksQ0FBeEJELGlCQUNGRSxvQkFBb0JGLGdCQUFnQlYsZUFBZUUsYUFBYUMsU0FBU0M7Z0JBRS9FQyxpQ0FBaUNPO2dCQUVqQztZQUNGO1FBRUE7WUFBUztnQkFFUCxRQUFRO1lBRVY7SUFDRjtJQUVBLE9BQU9QO0FBQ1QifQ==