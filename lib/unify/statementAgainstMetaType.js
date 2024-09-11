"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unifyStatementAgainstMetaType;
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
var metavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable"), metaTypeTerminalNodeQuery = (0, _query.nodeQuery)("/metaType/@meta-type!");
function unifyStatementAgainstMetaType(statementNode, metaTypeNode, localContext) {
    var statementVerifiedAgainstMetaType = false;
    var metaTypeTerminalNode = metaTypeTerminalNodeQuery(metaTypeNode), metaTypeTerminalNodeContent = metaTypeTerminalNode.getContent(), metaTypeName = metaTypeTerminalNodeContent; ///
    switch(metaTypeName){
        case _metaTypeNames.FRAME_META_TYPE_NAME:
            {
                var metavariableNode = metavariableNodeQuery(statementNode);
                if (metavariableNode !== null) {
                    var metavariable = localContext.findMetavariableByMetavariableNode(metavariableNode);
                    if (metavariable !== null) {
                        var metavariableMetaTypeName = metavariable.getMetaTypeName();
                        if (metavariableMetaTypeName === metaTypeName) {
                            statementVerifiedAgainstMetaType = true;
                        }
                    }
                }
                break;
            }
        case _metaTypeNames.STATEMENT_META_TYPE_NAME:
            {
                var verifyStatement = _shim.default.verifyStatement, derived = false, assignments = [], statementVerified = verifyStatement(statementNode, assignments, derived, localContext);
                statementVerifiedAgainstMetaType = statementVerified;
                break;
            }
    }
    return statementVerifiedAgainstMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS9zdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGUvQG1ldGEtdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlKHN0YXRlbWVudE5vZGUsIG1ldGFUeXBlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhVHlwZSA9IGZhbHNlO1xuXG4gIGNvbnN0IG1ldGFUeXBlVGVybWluYWxOb2RlID0gbWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeShtZXRhVHlwZU5vZGUpLFxuICAgICAgICBtZXRhVHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQgPSBtZXRhVHlwZVRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgIG1ldGFUeXBlTmFtZSA9IG1ldGFUeXBlVGVybWluYWxOb2RlQ29udGVudDsgLy8vXG5cbiAgc3dpdGNoIChtZXRhVHlwZU5hbWUpIHtcbiAgICBjYXNlIEZSQU1FX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlTm9kZVF1ZXJ5KHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBsb2NhbENvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICBpZiAobWV0YXZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTWV0YVR5cGVOYW1lID0gbWV0YXZhcmlhYmxlLmdldE1ldGFUeXBlTmFtZSgpO1xuXG4gICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU1ldGFUeXBlTmFtZSA9PT0gbWV0YVR5cGVOYW1lKSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhVHlwZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNhc2UgU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FOiB7XG4gICAgICBjb25zdCB7IHZlcmlmeVN0YXRlbWVudCB9ID0gc2hpbSxcbiAgICAgICAgICAgIGRlcml2ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBzdGF0ZW1lbnRWZXJpZmllZCA9IHZlcmlmeVN0YXRlbWVudChzdGF0ZW1lbnROb2RlLCBhc3NpZ25tZW50cywgZGVyaXZlZCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VmVyaWZpZWRBZ2FpbnN0TWV0YVR5cGUgPSBzdGF0ZW1lbnRWZXJpZmllZDtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFZlcmlmaWVkQWdhaW5zdE1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbInVuaWZ5U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJtZXRhVHlwZU5vZGUiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRWZXJpZmllZEFnYWluc3RNZXRhVHlwZSIsIm1ldGFUeXBlVGVybWluYWxOb2RlIiwibWV0YVR5cGVUZXJtaW5hbE5vZGVDb250ZW50IiwiZ2V0Q29udGVudCIsIm1ldGFUeXBlTmFtZSIsIkZSQU1FX01FVEFfVFlQRV9OQU1FIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVNZXRhVHlwZU5hbWUiLCJnZXRNZXRhVHlwZU5hbWUiLCJTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUiLCJ2ZXJpZnlTdGF0ZW1lbnQiLCJzaGltIiwiZGVyaXZlZCIsImFzc2lnbm1lbnRzIiwic3RhdGVtZW50VmVyaWZpZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBd0JBOzs7MkRBUlA7cUJBRVM7NkJBQ3FDOzs7Ozs7QUFFL0QsSUFBTUMsd0JBQXdCQyxJQUFBQSxnQkFBUyxFQUFDLDRCQUNsQ0MsNEJBQTRCRCxJQUFBQSxnQkFBUyxFQUFDO0FBRTdCLFNBQVNGLDhCQUE4QkksYUFBYSxFQUFFQyxZQUFZLEVBQUVDLFlBQVk7SUFDN0YsSUFBSUMsbUNBQW1DO0lBRXZDLElBQU1DLHVCQUF1QkwsMEJBQTBCRSxlQUNqREksOEJBQThCRCxxQkFBcUJFLFVBQVUsSUFDN0RDLGVBQWVGLDZCQUE2QixHQUFHO0lBRXJELE9BQVFFO1FBQ04sS0FBS0MsbUNBQW9CO1lBQUU7Z0JBQ3pCLElBQU1DLG1CQUFtQlosc0JBQXNCRztnQkFFL0MsSUFBSVMscUJBQXFCLE1BQU07b0JBQzdCLElBQU1DLGVBQWVSLGFBQWFTLGtDQUFrQyxDQUFDRjtvQkFFckUsSUFBSUMsaUJBQWlCLE1BQU07d0JBQ3pCLElBQU1FLDJCQUEyQkYsYUFBYUcsZUFBZTt3QkFFN0QsSUFBSUQsNkJBQTZCTCxjQUFjOzRCQUM3Q0osbUNBQW1DO3dCQUNyQztvQkFDRjtnQkFDRjtnQkFFQTtZQUNGO1FBRUEsS0FBS1csdUNBQXdCO1lBQUU7Z0JBQzdCLElBQU0sQUFBRUMsa0JBQW9CQyxhQUFJLENBQXhCRCxpQkFDRkUsVUFBVSxPQUNWQyxjQUFjLEVBQUUsRUFDaEJDLG9CQUFvQkosZ0JBQWdCZixlQUFla0IsYUFBYUQsU0FBU2Y7Z0JBRS9FQyxtQ0FBbUNnQjtnQkFFbkM7WUFDRjtJQUNGO0lBRUEsT0FBT2hCO0FBQ1QifQ==