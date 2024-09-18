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
                var verifyStatement = _shim.default.verifyStatement, statementVerified = verifyStatement(statementNode, assignments, stated, localContext);
                statementVerifiedGivenMetaType = statementVerified; ///
                break;
            }
    }
    return statementVerifiedGivenMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50R2l2ZW5NZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgRlJBTUVfTUVUQV9UWVBFX05BTUUsIFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRSwgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIH0gZnJvbSBcIi4uL21ldGFUeXBlTmFtZXNcIjtcblxuY29uc3QgbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3N0YXRlbWVudC9tZXRhdmFyaWFibGUhXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdGF0ZW1lbnRHaXZlbk1ldGFUeXBlKHN0YXRlbWVudE5vZGUsIG1ldGFUeXBlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHN0YXRlbWVudFZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcblxuICBjb25zdCBtZXRhVHlwZU5hbWUgPSBtZXRhVHlwZS5nZXROYW1lKCk7XG5cbiAgc3dpdGNoIChtZXRhVHlwZU5hbWUpIHtcbiAgICBjYXNlIEZSQU1FX01FVEFfVFlQRV9OQU1FOlxuICAgIGNhc2UgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGUgPT09IG1ldGFUeXBlKSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgY29uc3QgeyB2ZXJpZnlTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgc3RhdGVkLCBsb2NhbENvbnRleHQpXG5cbiAgICAgIHN0YXRlbWVudFZlcmlmaWVkR2l2ZW5NZXRhVHlwZSA9IHN0YXRlbWVudFZlcmlmaWVkOyAvLy9cblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkR2l2ZW5NZXRhVHlwZTtcbn0iXSwibmFtZXMiOlsidmVyaWZ5U3RhdGVtZW50R2l2ZW5NZXRhVHlwZSIsIm1ldGF2YXJpYWJsZU5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJtZXRhVHlwZSIsImFzc2lnbm1lbnRzIiwic3RhdGVkIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlIiwibWV0YVR5cGVOYW1lIiwiZ2V0TmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZSIsImdldE1ldGFUeXBlIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidmVyaWZ5U3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudFZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQXdCQTs7OzJEQVBQO3FCQUVTOzZCQUMrRDs7Ozs7O0FBRXpGLElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQztBQUV6QixTQUFTRiw2QkFBNkJHLGFBQWEsRUFBRUMsUUFBUSxFQUFFQyxXQUFXLEVBQUVDLE1BQU0sRUFBRUMsWUFBWTtJQUM3RyxJQUFJQztJQUVKLElBQU1DLGVBQWVMLFNBQVNNLE9BQU87SUFFckMsT0FBUUQ7UUFDTixLQUFLRSxtQ0FBb0I7UUFDekIsS0FBS0MsdUNBQXdCO1lBQUU7Z0JBQzdCSixpQ0FBaUM7Z0JBRWpDLElBQU1LLG1CQUFtQlosc0JBQXNCRTtnQkFFL0MsSUFBSVUscUJBQXFCLE1BQU07b0JBQzdCLElBQU1DLGVBQWVQLGFBQWFRLGtDQUFrQyxDQUFDRjtvQkFFckUsSUFBSUMsaUJBQWlCLE1BQU07d0JBQ3pCLElBQU1FLHVCQUF1QkYsYUFBYUcsV0FBVzt3QkFFckQsSUFBSUQseUJBQXlCWixVQUFVOzRCQUNyQ0ksaUNBQWlDO3dCQUNuQztvQkFDRjtnQkFDRjtnQkFFQTtZQUNGO1FBRUEsS0FBS1UsdUNBQXdCO1lBQUU7Z0JBQzdCLElBQU0sQUFBRUMsa0JBQW9CQyxhQUFJLENBQXhCRCxpQkFDRkUsb0JBQW9CRixnQkFBZ0JoQixlQUFlRSxhQUFhQyxRQUFRQztnQkFFOUVDLGlDQUFpQ2EsbUJBQW1CLEdBQUc7Z0JBRXZEO1lBQ0Y7SUFDRjtJQUVBLE9BQU9iO0FBQ1QifQ==