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
var _query = require("../utilities/query");
var _name = require("../utilities/name");
var _metaTypeNames = require("../metaTypeNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
function verifyStatementGivenMetaType(statementNode, metaType, assignments, stated, localContext) {
    var statementVerifiedGivenMetaType;
    var metaTypeName = metaType.getName();
    switch(metaTypeName){
        case _metaTypeNames.FRAME_META_TYPE_NAME:
        case _metaTypeNames.REFERENCE_META_TYPE_NAME:
            {
                statementVerifiedGivenMetaType = false;
                var metavariableNode = metavariableNodeQuery(statementNode);
                if (metavariableNode !== null) {
                    var metavariableName = (0, _name.metavariableNameFromMetavariableNode)(metavariableNode), metavariable = localContext.findMetavariableByMetavariableName(metavariableName);
                    if (metavariable !== null) {
                        var metavariableMetaType = metavariable.getMetaType();
                        if (metavariableMetaType === metaType) {
                            statementVerifiedGivenMetaType = true;
                        }
                    }
                }
                break;
            }
        case _metaTypeNames.STATEMENT_META_TYPE_NAME:
            {
                var verifyStatement = _shim.default.verifyStatement, statementVerified = verifyStatement(statementNode, assignments, stated, localContext);
                statementVerifiedGivenMetaType = statementVerified; ///
                break;
            }
    }
    return statementVerifiedGivenMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50R2l2ZW5NZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBGUkFNRV9NRVRBX1RZUEVfTkFNRSwgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEdpdmVuTWV0YVR5cGUoc3RhdGVtZW50Tm9kZSwgbWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuXG4gIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICBzd2l0Y2ggKG1ldGFUeXBlTmFtZSkge1xuICAgIGNhc2UgRlJBTUVfTUVUQV9UWVBFX05BTUU6XG4gICAgY2FzZSBSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGUoKTtcblxuICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVNZXRhVHlwZSA9PT0gbWV0YVR5cGUpIHtcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBjb25zdCB7IHZlcmlmeVN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dClcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gc3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnRHaXZlbk1ldGFUeXBlIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsIm1ldGFUeXBlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJSRUZFUkVOQ0VfTUVUQV9UWVBFX05BTUUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZSIsImdldE1ldGFUeXBlIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidmVyaWZ5U3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudFZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzJEQVJQO3FCQUVTO29CQUMyQjs2QkFDb0M7Ozs7OztBQUV6RixJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsU0FBU0YsNkJBQTZCRyxhQUFhLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7SUFDN0csSUFBSUM7SUFFSixJQUFNQyxlQUFlTCxTQUFTTSxPQUFPO0lBRXJDLE9BQVFEO1FBQ04sS0FBS0UsbUNBQW9CO1FBQ3pCLEtBQUtDLHVDQUF3QjtZQUFFO2dCQUM3QkosaUNBQWlDO2dCQUVqQyxJQUFNSyxtQkFBbUJaLHNCQUFzQkU7Z0JBRS9DLElBQUlVLHFCQUFxQixNQUFNO29CQUM3QixJQUFNQyxtQkFBbUJDLElBQUFBLDBDQUFvQyxFQUFDRixtQkFDeERHLGVBQWVULGFBQWFVLGtDQUFrQyxDQUFDSDtvQkFFckUsSUFBSUUsaUJBQWlCLE1BQU07d0JBQ3pCLElBQU1FLHVCQUF1QkYsYUFBYUcsV0FBVzt3QkFFckQsSUFBSUQseUJBQXlCZCxVQUFVOzRCQUNyQ0ksaUNBQWlDO3dCQUNuQztvQkFDRjtnQkFDRjtnQkFFQTtZQUNGO1FBRUEsS0FBS1ksdUNBQXdCO1lBQUU7Z0JBQzdCLElBQU0sQUFBRUMsa0JBQW9CQyxhQUFJLENBQXhCRCxpQkFDRkUsb0JBQW9CRixnQkFBZ0JsQixlQUFlRSxhQUFhQyxRQUFRQztnQkFFOUVDLGlDQUFpQ2UsbUJBQW1CLEdBQUc7Z0JBRXZEO1lBQ0Y7SUFDRjtJQUVBLE9BQU9mO0FBQ1QifQ==