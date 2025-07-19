"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get isNodePropertyDeclarationNode () {
        return isNodePropertyDeclarationNode;
    },
    get isNodePropertyNode () {
        return isNodePropertyNode;
    },
    get isNodeTypeNode () {
        return isNodeTypeNode;
    },
    get isNodeVariableNode () {
        return isNodeVariableNode;
    },
    get typeFromTypeNode () {
        return typeFromTypeNode;
    }
});
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _type = require("../dom/type");
var _ruleNames = require("../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function isNodeTypeNode(node) {
    return isNodeRuleNode(node, _ruleNames.TYPE_RULE_NAME);
}
function isNodeVariableNode(node) {
    return isNodeRuleNode(node, _ruleNames.VARIABLE_RULE_NAME);
}
function isNodePropertyNode(node) {
    return isNodeRuleNode(node, _ruleNames.PROPERTY_RULE_NAME);
}
function isNodePropertyDeclarationNode(node) {
    return isNodeRuleNode(node, _ruleNames.PROPERTY_DECLARATION_RULE_NAME);
}
function typeFromTypeNode(typeNode) {
    var type;
    if (typeNode === null) {
        type = _type.objectType;
    } else {
        var Type = _dom.default.Type, typeName = typeNode.getTypeName(), name = typeName, string = name, superTypes = null, properties = null, provisional = null;
        type = new Type(string, name, superTypes, properties, provisional);
    }
    return type;
}
function isNodeRuleNode(node, ruleName) {
    var nodeRuleNode = false;
    var nodeNonTerminalNode = node.isNonTerminalNode();
    if (nodeNonTerminalNode) {
        var nonTerminalNode = node, nonTerminalNodeRuleName = nonTerminalNode.getRuleName(), nonTerminalNodeRuleNameRuleName = nonTerminalNodeRuleName === ruleName;
        if (nonTerminalNodeRuleNameRuleName) {
            nodeRuleNode = true;
        }
    }
    return nodeRuleNode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcbmltcG9ydCB7IFRZUEVfUlVMRV9OQU1FLCBWQVJJQUJMRV9SVUxFX05BTUUsIFBST1BFUlRZX1JVTEVfTkFNRSwgUFJPUEVSVFlfREVDTEFSQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlVHlwZU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGUobm9kZSwgVFlQRV9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVWYXJpYWJsZU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGUobm9kZSwgVkFSSUFCTEVfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlUHJvcGVydHlOb2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlKG5vZGUsIFBST1BFUlRZX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlKG5vZGUsIFBST1BFUlRZX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZnVuY3Rpb24gaXNOb2RlUnVsZU5vZGUobm9kZSwgcnVsZU5hbWUpIHtcbiAgbGV0IG5vZGVSdWxlTm9kZSA9IGZhbHNlO1xuXG4gIGNvbnN0IG5vZGVOb25UZXJtaW5hbE5vZGUgPSBub2RlLmlzTm9uVGVybWluYWxOb2RlKCk7XG5cbiAgaWYgKG5vZGVOb25UZXJtaW5hbE5vZGUpIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9IG5vblRlcm1pbmFsTm9kZS5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lUnVsZU5hbWUgPSAobm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPT09IHJ1bGVOYW1lKTtcblxuICAgIGlmIChub25UZXJtaW5hbE5vZGVSdWxlTmFtZVJ1bGVOYW1lKSB7XG4gICAgICBub2RlUnVsZU5vZGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBub2RlUnVsZU5vZGU7XG59XG4iXSwibmFtZXMiOlsiaXNOb2RlUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUiLCJpc05vZGVQcm9wZXJ0eU5vZGUiLCJpc05vZGVUeXBlTm9kZSIsImlzTm9kZVZhcmlhYmxlTm9kZSIsInR5cGVGcm9tVHlwZU5vZGUiLCJub2RlIiwiaXNOb2RlUnVsZU5vZGUiLCJUWVBFX1JVTEVfTkFNRSIsIlZBUklBQkxFX1JVTEVfTkFNRSIsIlBST1BFUlRZX1JVTEVfTkFNRSIsIlBST1BFUlRZX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSIsInR5cGVOb2RlIiwidHlwZSIsIm9iamVjdFR5cGUiLCJUeXBlIiwiZG9tIiwidHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsIm5hbWUiLCJzdHJpbmciLCJzdXBlclR5cGVzIiwicHJvcGVydGllcyIsInByb3Zpc2lvbmFsIiwicnVsZU5hbWUiLCJub2RlUnVsZU5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBYWdCQTtlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOztRQUVBQztlQUFBQTs7UUFNQUM7ZUFBQUE7OzswREFiQTtvQkFFVzt5QkFDNEU7Ozs7OztBQUVoRyxTQUFTRixlQUFlRyxJQUFJO0lBQUksT0FBT0MsZUFBZUQsTUFBTUUseUJBQWM7QUFBRztBQUU3RSxTQUFTSixtQkFBbUJFLElBQUk7SUFBSSxPQUFPQyxlQUFlRCxNQUFNRyw2QkFBa0I7QUFBRztBQUVyRixTQUFTUCxtQkFBbUJJLElBQUk7SUFBSSxPQUFPQyxlQUFlRCxNQUFNSSw2QkFBa0I7QUFBRztBQUVyRixTQUFTVCw4QkFBOEJLLElBQUk7SUFBSSxPQUFPQyxlQUFlRCxNQUFNSyx5Q0FBOEI7QUFBRztBQUU1RyxTQUFTTixpQkFBaUJPLFFBQVE7SUFDdkMsSUFBSUM7SUFFSixJQUFJRCxhQUFhLE1BQU07UUFDckJDLE9BQU9DLGdCQUFVO0lBQ25CLE9BQU87UUFDTCxJQUFNLEFBQUVDLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRkUsV0FBV0wsU0FBU00sV0FBVyxJQUMvQkMsT0FBT0YsVUFDUEcsU0FBU0QsTUFDVEUsYUFBYSxNQUNiQyxhQUFhLE1BQ2JDLGNBQWM7UUFFcEJWLE9BQU8sSUFBSUUsS0FBS0ssUUFBUUQsTUFBTUUsWUFBWUMsWUFBWUM7SUFDeEQ7SUFFQSxPQUFPVjtBQUNUO0FBRUEsU0FBU04sZUFBZUQsSUFBSSxFQUFFa0IsUUFBUTtJQUNwQyxJQUFJQyxlQUFlO0lBRW5CLElBQU1DLHNCQUFzQnBCLEtBQUtxQixpQkFBaUI7SUFFbEQsSUFBSUQscUJBQXFCO1FBQ3ZCLElBQU1FLGtCQUFrQnRCLE1BQ2xCdUIsMEJBQTBCRCxnQkFBZ0JFLFdBQVcsSUFDckRDLGtDQUFtQ0YsNEJBQTRCTDtRQUVyRSxJQUFJTyxpQ0FBaUM7WUFDbkNOLGVBQWU7UUFDakI7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==