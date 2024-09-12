"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return unifyStatementWithMetaType;
    }
});
var _query = require("../utilities/query");
var _metaTypeNames = require("../metaTypeNames");
var metavariableNodeQuery = (0, _query.nodeQuery)("/statement/metavariable"), metaTypeTerminalNodeQuery = (0, _query.nodeQuery)("/metaType/@meta-type!");
function unifyStatementWithMetaType(statementNode, metaTypeNode, localContext) {
    var statementUnifiedWithMetaType = false;
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
                            statementUnifiedWithMetaType = true;
                        }
                    }
                }
                break;
            }
        case _metaTypeNames.STATEMENT_META_TYPE_NAME:
            {
                debugger;
                statementUnifiedWithMetaType = statementVerified;
                break;
            }
    }
    return statementUnifiedWithMetaType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91bmlmeS9zdGF0ZW1lbnRXaXRoTWV0YVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IEZSQU1FX01FVEFfVFlQRV9OQU1FLCBTVEFURU1FTlRfTUVUQV9UWVBFX05BTUUgfSBmcm9tIFwiLi4vbWV0YVR5cGVOYW1lc1wiO1xuXG5jb25zdCBtZXRhdmFyaWFibGVOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvc3RhdGVtZW50L21ldGF2YXJpYWJsZVwiKSxcbiAgICAgIG1ldGFUeXBlVGVybWluYWxOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvbWV0YVR5cGUvQG1ldGEtdHlwZSFcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVuaWZ5U3RhdGVtZW50V2l0aE1ldGFUeXBlKHN0YXRlbWVudE5vZGUsIG1ldGFUeXBlTm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBzdGF0ZW1lbnRVbmlmaWVkV2l0aE1ldGFUeXBlID0gZmFsc2U7XG5cbiAgY29uc3QgbWV0YVR5cGVUZXJtaW5hbE5vZGUgPSBtZXRhVHlwZVRlcm1pbmFsTm9kZVF1ZXJ5KG1ldGFUeXBlTm9kZSksXG4gICAgICAgIG1ldGFUeXBlVGVybWluYWxOb2RlQ29udGVudCA9IG1ldGFUeXBlVGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgbWV0YVR5cGVOYW1lID0gbWV0YVR5cGVUZXJtaW5hbE5vZGVDb250ZW50OyAvLy9cblxuICBzd2l0Y2ggKG1ldGFUeXBlTmFtZSkge1xuICAgIGNhc2UgRlJBTUVfTUVUQV9UWVBFX05BTUU6IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGVOb2RlUXVlcnkoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IGxvY2FsQ29udGV4dC5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgIGlmIChtZXRhdmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVNZXRhVHlwZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TWV0YVR5cGVOYW1lKCk7XG5cbiAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTWV0YVR5cGVOYW1lID09PSBtZXRhVHlwZU5hbWUpIHtcbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoTWV0YVR5cGUgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjYXNlIFNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRToge1xuXG4gICAgICBkZWJ1Z2dlclxuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aE1ldGFUeXBlID0gc3RhdGVtZW50VmVyaWZpZWQ7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkV2l0aE1ldGFUeXBlO1xufVxuIl0sIm5hbWVzIjpbInVuaWZ5U3RhdGVtZW50V2l0aE1ldGFUeXBlIiwibWV0YXZhcmlhYmxlTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibWV0YVR5cGVUZXJtaW5hbE5vZGVRdWVyeSIsInN0YXRlbWVudE5vZGUiLCJtZXRhVHlwZU5vZGUiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aE1ldGFUeXBlIiwibWV0YVR5cGVUZXJtaW5hbE5vZGUiLCJtZXRhVHlwZVRlcm1pbmFsTm9kZUNvbnRlbnQiLCJnZXRDb250ZW50IiwibWV0YVR5cGVOYW1lIiwiRlJBTUVfTUVUQV9UWVBFX05BTUUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU1ldGFUeXBlTmFtZSIsImdldE1ldGFUeXBlTmFtZSIsIlNUQVRFTUVOVF9NRVRBX1RZUEVfTkFNRSIsInN0YXRlbWVudFZlcmlmaWVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQXdCQTs7O3FCQU5FOzZCQUNxQztBQUUvRCxJQUFNQyx3QkFBd0JDLElBQUFBLGdCQUFTLEVBQUMsNEJBQ2xDQyw0QkFBNEJELElBQUFBLGdCQUFTLEVBQUM7QUFFN0IsU0FBU0YsMkJBQTJCSSxhQUFhLEVBQUVDLFlBQVksRUFBRUMsWUFBWTtJQUMxRixJQUFJQywrQkFBK0I7SUFFbkMsSUFBTUMsdUJBQXVCTCwwQkFBMEJFLGVBQ2pESSw4QkFBOEJELHFCQUFxQkUsVUFBVSxJQUM3REMsZUFBZUYsNkJBQTZCLEdBQUc7SUFFckQsT0FBUUU7UUFDTixLQUFLQyxtQ0FBb0I7WUFBRTtnQkFDekIsSUFBTUMsbUJBQW1CWixzQkFBc0JHO2dCQUUvQyxJQUFJUyxxQkFBcUIsTUFBTTtvQkFDN0IsSUFBTUMsZUFBZVIsYUFBYVMsa0NBQWtDLENBQUNGO29CQUVyRSxJQUFJQyxpQkFBaUIsTUFBTTt3QkFDekIsSUFBTUUsMkJBQTJCRixhQUFhRyxlQUFlO3dCQUU3RCxJQUFJRCw2QkFBNkJMLGNBQWM7NEJBQzdDSiwrQkFBK0I7d0JBQ2pDO29CQUNGO2dCQUNGO2dCQUVBO1lBQ0Y7UUFFQSxLQUFLVyx1Q0FBd0I7WUFBRTtnQkFFN0IsUUFBUTtnQkFFUlgsK0JBQStCWTtnQkFFL0I7WUFDRjtJQUNGO0lBRUEsT0FBT1o7QUFDVCJ9