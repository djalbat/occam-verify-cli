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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcbmltcG9ydCB7IFRZUEVfUlVMRV9OQU1FLCBWQVJJQUJMRV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVUeXBlTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZShub2RlLCBUWVBFX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVZhcmlhYmxlTm9kZShub2RlKSB7IHJldHVybiBpc05vZGVSdWxlTm9kZShub2RlLCBWQVJJQUJMRV9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiB0eXBlRnJvbVR5cGVOb2RlKHR5cGVOb2RlKSB7XG4gIGxldCB0eXBlO1xuXG4gIGlmICh0eXBlTm9kZSA9PT0gbnVsbCkge1xuICAgIHR5cGUgPSBvYmplY3RUeXBlO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHsgVHlwZSB9ID0gZG9tLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKSxcbiAgICAgICAgICBuYW1lID0gdHlwZU5hbWUsICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSBuYW1lLCAgLy8vXG4gICAgICAgICAgc3VwZXJUeXBlcyA9IG51bGwsXG4gICAgICAgICAgcHJvcGVydGllcyA9IG51bGwsXG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSBudWxsO1xuXG4gICAgdHlwZSA9IG5ldyBUeXBlKHN0cmluZywgbmFtZSwgc3VwZXJUeXBlcywgcHJvcGVydGllcywgcHJvdmlzaW9uYWwpO1xuICB9XG5cbiAgcmV0dXJuIHR5cGU7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZVJ1bGVOb2RlKG5vZGUsIHJ1bGVOYW1lKSB7XG4gIGxldCBub2RlUnVsZU5vZGUgPSBmYWxzZTtcblxuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZVJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSBydWxlTmFtZSk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSkge1xuICAgICAgbm9kZVJ1bGVOb2RlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZVJ1bGVOb2RlO1xufVxuIl0sIm5hbWVzIjpbImlzTm9kZVR5cGVOb2RlIiwiaXNOb2RlVmFyaWFibGVOb2RlIiwidHlwZUZyb21UeXBlTm9kZSIsIm5vZGUiLCJpc05vZGVSdWxlTm9kZSIsIlRZUEVfUlVMRV9OQU1FIiwiVkFSSUFCTEVfUlVMRV9OQU1FIiwidHlwZU5vZGUiLCJ0eXBlIiwib2JqZWN0VHlwZSIsIlR5cGUiLCJkb20iLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwibmFtZSIsInN0cmluZyIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJydWxlTmFtZSIsIm5vZGVSdWxlTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZVJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFPZ0JBO2VBQUFBOztRQUVBQztlQUFBQTs7UUFFQUM7ZUFBQUE7OzswREFUQTtvQkFFVzt5QkFDd0I7Ozs7OztBQUU1QyxTQUFTRixlQUFlRyxJQUFJO0lBQUksT0FBT0MsZUFBZUQsTUFBTUUseUJBQWM7QUFBRztBQUU3RSxTQUFTSixtQkFBbUJFLElBQUk7SUFBSSxPQUFPQyxlQUFlRCxNQUFNRyw2QkFBa0I7QUFBRztBQUVyRixTQUFTSixpQkFBaUJLLFFBQVE7SUFDdkMsSUFBSUM7SUFFSixJQUFJRCxhQUFhLE1BQU07UUFDckJDLE9BQU9DLGdCQUFVO0lBQ25CLE9BQU87UUFDTCxJQUFNLEFBQUVDLE9BQVNDLFlBQUcsQ0FBWkQsTUFDRkUsV0FBV0wsU0FBU00sV0FBVyxJQUMvQkMsT0FBT0YsVUFDUEcsU0FBU0QsTUFDVEUsYUFBYSxNQUNiQyxhQUFhLE1BQ2JDLGNBQWM7UUFFcEJWLE9BQU8sSUFBSUUsS0FBS0ssUUFBUUQsTUFBTUUsWUFBWUMsWUFBWUM7SUFDeEQ7SUFFQSxPQUFPVjtBQUNUO0FBRUEsU0FBU0osZUFBZUQsSUFBSSxFQUFFZ0IsUUFBUTtJQUNwQyxJQUFJQyxlQUFlO0lBRW5CLElBQU1DLHNCQUFzQmxCLEtBQUttQixpQkFBaUI7SUFFbEQsSUFBSUQscUJBQXFCO1FBQ3ZCLElBQU1FLGtCQUFrQnBCLE1BQ2xCcUIsMEJBQTBCRCxnQkFBZ0JFLFdBQVcsSUFDckRDLGtDQUFtQ0YsNEJBQTRCTDtRQUVyRSxJQUFJTyxpQ0FBaUM7WUFDbkNOLGVBQWU7UUFDakI7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==