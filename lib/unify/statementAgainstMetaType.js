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
    var statementUnifiedAgainstMetaType = false;
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
                            statementUnifiedAgainstMetaType = true;
                        }
                    }
                }
                break;
            }
        case _metaTypeNames.STATEMENT_META_TYPE_NAME:
            {
                var verifyStatement = _shim.default.verifyStatement, derived = false, assignments = [], statementVerified = verifyStatement(statementNode, assignments, derived, localContext);
                statementUnifiedAgainstMetaType = statementVerified;
                break;
            }
    }
    return statementUnifiedAgainstMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS9zdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuLi9zaGltXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGUvQG1ldGEtdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50QWdhaW5zdE1ldGFUeXBlKHN0YXRlbWVudE5vZGUsIG1ldGFUeXBlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVkQWdhaW5zdE1ldGFUeXBlID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YVR5cGVUZXJtaW5hbE5vZGUgPSBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KG1ldGFUeXBlTm9kZSksXG4gICAgICAgIG1ldGFUeXBlVGVybWluYWxOb2RlQ29udGVudCA9IG1ldGFUeXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICBzd2l0Y2ggKG1ldGFUeXBlTmFtZSkge1xuICAgIGNhc2UgRlJBTUVfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVNZXRhVHlwZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGVOYW1lKCk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGVOYW1lID09PSBtZXRhVHlwZU5hbWUpIHtcbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRToge1xuICAgICAgY29uc3QgeyB2ZXJpZnlTdGF0ZW1lbnQgfSA9IHNoaW0sXG4gICAgICAgICAgICBkZXJpdmVkID0gZmFsc2UsXG4gICAgICAgICAgICBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgc3RhdGVtZW50VmVyaWZpZWQgPSB2ZXJpZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgYXNzaWdubWVudHMsIGRlcml2ZWQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGUgPSBzdGF0ZW1lbnRWZXJpZmllZDtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGU7XG59XG4iXSwibmFtZXMiOlsidW5pZnlTdGF0ZW1lbnRBZ2FpbnN0TWV0YVR5cGUiLCJtZXRhdmFyaWFibGVOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5Iiwic3RhdGVtZW50Tm9kZSIsIm1ldGFUeXBlTm9kZSIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWRBZ2FpbnN0TWV0YVR5cGUiLCJtZXRhVHlwZVRlcm1pbmFsTm9kZSIsIm1ldGFUeXBlVGVybWluYWxOb2RlQ29udGVudCIsImdldENvbnRlbnQiLCJtZXRhVHlwZU5hbWUiLCJGUkFNRV9NRVRBX1RZUEVfTkFNRSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTWV0YVR5cGVOYW1lIiwiZ2V0TWV0YVR5cGVOYW1lIiwiU1RBVEVNRU5UX01FVEFfVFlQRV9OQU1FIiwidmVyaWZ5U3RhdGVtZW50Iiwic2hpbSIsImRlcml2ZWQiLCJhc3NpZ25tZW50cyIsInN0YXRlbWVudFZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQXdCQTs7OzJEQVJQO3FCQUVTOzZCQUNxQzs7Ozs7O0FBRS9ELElBQU1DLHdCQUF3QkMsSUFBQUEsZ0JBQVMsRUFBQyw0QkFDbENDLDRCQUE0QkQsSUFBQUEsZ0JBQVMsRUFBQztBQUU3QixTQUFTRiw4QkFBOEJJLGFBQWEsRUFBRUMsWUFBWSxFQUFFQyxZQUFZO0lBQzdGLElBQUlDLGtDQUFrQztJQUV0QyxJQUFNQyx1QkFBdUJMLDBCQUEwQkUsZUFDakRJLDhCQUE4QkQscUJBQXFCRSxVQUFVLElBQzdEQyxlQUFlRiw2QkFBNkIsR0FBRztJQUVyRCxPQUFRRTtRQUNOLEtBQUtDLG1DQUFvQjtZQUFFO2dCQUN6QixJQUFNQyxtQkFBbUJaLHNCQUFzQkc7Z0JBRS9DLElBQUlTLHFCQUFxQixNQUFNO29CQUM3QixJQUFNQyxlQUFlUixhQUFhUyxrQ0FBa0MsQ0FBQ0Y7b0JBRXJFLElBQUlDLGlCQUFpQixNQUFNO3dCQUN6QixJQUFNRSwyQkFBMkJGLGFBQWFHLGVBQWU7d0JBRTdELElBQUlELDZCQUE2QkwsY0FBYzs0QkFDN0NKLGtDQUFrQzt3QkFDcEM7b0JBQ0Y7Z0JBQ0Y7Z0JBRUE7WUFDRjtRQUVBLEtBQUtXLHVDQUF3QjtZQUFFO2dCQUM3QixJQUFNLEFBQUVDLGtCQUFvQkMsYUFBSSxDQUF4QkQsaUJBQ0ZFLFVBQVUsT0FDVkMsY0FBYyxFQUFFLEVBQ2hCQyxvQkFBb0JKLGdCQUFnQmYsZUFBZWtCLGFBQWFELFNBQVNmO2dCQUUvRUMsa0NBQWtDZ0I7Z0JBRWxDO1lBQ0Y7SUFDRjtJQUVBLE9BQU9oQjtBQUNUIn0=