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
        case _metaTypeNames.STATEMENT_META_TYPE_NAME:
            {
                var verifyStatement = _shim.default.verifyStatement, statementVerified = verifyStatement(statementNode, assignments, stated, localContext);
                statementVerifiedGivenMetaType = statementVerified; ///
                break;
            }
        case _metaTypeNames.REFERENCE_META_TYPE_NAME:
        case _metaTypeNames.DECLARATION_META_TYPE_NAME:
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
    }
    return statementVerifiedGivenMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy92ZXJpZnkvc3RhdGVtZW50R2l2ZW5NZXRhVHlwZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4uL3NoaW1cIjtcblxuaW1wb3J0IHsgbm9kZVF1ZXJ5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbWV0YXZhcmlhYmxlTmFtZUZyb21NZXRhdmFyaWFibGVOb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9uYW1lXCI7XG5pbXBvcnQgeyBERUNMQVJBVElPTl9NRVRBX1RZUEVfTkFNRSwgUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVN0YXRlbWVudEdpdmVuTWV0YVR5cGUoc3RhdGVtZW50Tm9kZSwgbWV0YVR5cGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgc3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xuXG4gIGNvbnN0IG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmdldE5hbWUoKTtcblxuICBzd2l0Y2ggKG1ldGFUeXBlTmFtZSkge1xuICAgIGNhc2UgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBjb25zdCB7IHZlcmlmeVN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZlcmlmaWVkID0gdmVyaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGFzc2lnbm1lbnRzLCBzdGF0ZWQsIGxvY2FsQ29udGV4dClcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlID0gc3RhdGVtZW50VmVyaWZpZWQ7IC8vL1xuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFJFRkVSRU5DRV9NRVRBX1RZUEVfTkFNRTpcbiAgICBjYXNlIERFQ0xBUkFUSU9OX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBzdGF0ZW1lbnRWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSBmYWxzZTtcblxuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZU5vZGVRdWVyeShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbG9jYWxDb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgaWYgKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU1ldGFUeXBlID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlKCk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGUgPT09IG1ldGFUeXBlKSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEdpdmVuTWV0YVR5cGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGVtZW50VmVyaWZpZWRHaXZlbk1ldGFUeXBlO1xufSJdLCJuYW1lcyI6WyJ2ZXJpZnlTdGF0ZW1lbnRHaXZlbk1ldGFUeXBlIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsIm1ldGFUeXBlIiwiYXNzaWdubWVudHMiLCJzdGF0ZWQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZEdpdmVuTWV0YVR5cGUiLCJtZXRhVHlwZU5hbWUiLCJnZXROYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidmVyaWZ5U3RhdGVtZW50Iiwic2hpbSIsInN0YXRlbWVudFZlcmlmaWVkIiwiUkVGRVJFTkNFX01FVEFfVFlQRV9OQU1FIiwiREVDTEFSQVRJT05fTUVUQV9UWVBFX05BTUUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVGcm9tTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZSIsImdldE1ldGFUeXBlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzJEQVJQO3FCQUVTO29CQUMyQjs2QkFDMEM7Ozs7OztBQUUvRixJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUM7QUFFekIsU0FBU0YsNkJBQTZCRyxhQUFhLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFlBQVk7SUFDN0csSUFBSUM7SUFFSixJQUFNQyxlQUFlTCxTQUFTTSxPQUFPO0lBRXJDLE9BQVFEO1FBQ04sS0FBS0UsdUNBQXdCO1lBQUU7Z0JBQzdCLElBQU0sQUFBRUMsa0JBQW9CQyxhQUFJLENBQXhCRCxpQkFDRkUsb0JBQW9CRixnQkFBZ0JULGVBQWVFLGFBQWFDLFFBQVFDO2dCQUU5RUMsaUNBQWlDTSxtQkFBbUIsR0FBRztnQkFFdkQ7WUFDRjtRQUVBLEtBQUtDLHVDQUF3QjtRQUM3QixLQUFLQyx5Q0FBMEI7WUFBRTtnQkFDL0JSLGlDQUFpQztnQkFFakMsSUFBTVMsbUJBQW1CaEIsc0JBQXNCRTtnQkFFL0MsSUFBSWMscUJBQXFCLE1BQU07b0JBQzdCLElBQU1DLG1CQUFtQkMsSUFBQUEsMENBQW9DLEVBQUNGLG1CQUN4REcsZUFBZWIsYUFBYWMsa0NBQWtDLENBQUNIO29CQUVyRSxJQUFJRSxpQkFBaUIsTUFBTTt3QkFDekIsSUFBTUUsdUJBQXVCRixhQUFhRyxXQUFXO3dCQUVyRCxJQUFJRCx5QkFBeUJsQixVQUFVOzRCQUNyQ0ksaUNBQWlDO3dCQUNuQztvQkFDRjtnQkFDRjtnQkFFQTtZQUNGO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=