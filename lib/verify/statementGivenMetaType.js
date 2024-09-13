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
var _metaTypeNames = require("../metaTypeNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var metavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable!");
function verifyStatementGivenMetaType(statementNode, metaType, assignments, derived, localContext) {
    var statementVerifiedGivenMetaType;
    var metaTypeName = metaType.getName();
    switch(metaTypeName){
        case _metaTypeNames.FRAME_META_TYPE_NAME:
        case _metaTypeNames.REFERENCE_META_TYPE_NAME:
            {
                statementVerifiedGivenMetaType = false;
                var metavariableNode = metavariableNodeQuery(statementNode);
                if (metavariableNode !== null) {
                    var metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
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
                var verifyStatement = _shim.default.verifyStatement, statementVerified = verifyStatement(statementNode, assignments, derived, localContext);
                statementVerifiedGivenMetaType = statementVerified; ///
                break;
            }
    }
    return statementVerifiedGivenMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50R2l2ZW5NZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUsIFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSwgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRHaXZlbk1ldGFUeXBlKHN0YXRlbWVudE5vZGUsIG1ldGFUeXBlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEdpdmVuTWV0YVR5cGU7XG5cbiAgY29uc3QgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGUuZ2V0TmFtZSgpO1xuXG4gIHN3aXRjaCAobWV0YVR5cGVOYW1lKSB7XG4gICAgY2FzZSBGUkFNRV9NRVRBX1RZUEVfTkFNRTpcbiAgICBjYXNlIFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgc3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVNZXRhVHlwZSA9IG1ldGF2YXJpYWJsZS5nZXRNZXRhVHlwZSgpO1xuXG4gICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlID09PSBtZXRhVHlwZSkge1xuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY2FzZSBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIGNvbnN0IHsgdmVyaWZ5U3RhdGVtZW50IH0gPSBzaGltLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dClcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gc3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnRHaXZlbk1ldGFUeXBlIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsIm1ldGFUeXBlIiwiYXNzaWdubWVudHMiLCJkZXJpdmVkIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZSIsImdldE1ldGFUeXBlIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidmVyaWZ5U3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudFZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7OzJEQVBQO3FCQUVTOzZCQUMrRDs7Ozs7O0FBRXpGLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixTQUFTRiw2QkFBNkJHLGFBQWEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsWUFBWTtJQUM5RyxJQUFJQztJQUVKLElBQU1DLGVBQWVMLFNBQVNNLE9BQU87SUFFckMsT0FBUUQ7UUFDTixLQUFLRSxtQ0FBb0I7UUFDekIsS0FBS0MsdUNBQXdCO1lBQUU7Z0JBQzdCSixpQ0FBaUM7Z0JBRWpDLElBQU1LLG1CQUFtQlosc0JBQXNCRTtnQkFFL0MsSUFBSVUscUJBQXFCLE1BQU07b0JBQzdCLElBQU1DLGVBQWVQLGFBQWFRLGtDQUFrQyxDQUFDRjtvQkFFckUsSUFBSUMsaUJBQWlCLE1BQU07d0JBQ3pCLElBQU1FLHVCQUF1QkYsYUFBYUcsV0FBVzt3QkFFckQsSUFBSUQseUJBQXlCWixVQUFVOzRCQUNyQ0ksaUNBQWlDO3dCQUNuQztvQkFDRjtnQkFDRjtnQkFFQTtZQUNGO1FBRUEsS0FBS1UsdUNBQXdCO1lBQUU7Z0JBQzdCLElBQU0sQUFBRUMsa0JBQW9CQyxhQUFJLENBQXhCRCxpQkFDRkUsb0JBQW9CRixnQkFBZ0JoQixlQUFlRSxhQUFhQyxTQUFTQztnQkFFL0VDLGlDQUFpQ2EsbUJBQW1CLEdBQUc7Z0JBRXZEO1lBQ0Y7SUFDRjtJQUVBLE9BQU9iO0FBQ1QifQ==