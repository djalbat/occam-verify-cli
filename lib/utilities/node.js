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
    get statementFromStatementNode () {
        return statementFromStatementNode;
    },
    get termFromTermNode () {
        return termFromTermNode;
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
function termFromTermNode(termNode, context) {
    var Term = _dom.default.Term, node = termNode, string = context.nodeAsString(node), type = null, term = new Term(string, node, type);
    return term;
}
function statementFromStatementNode(statementNode, context) {
    var Statement = _dom.default.Statement, node = statementNode, tokens = context.nodeAsTokens(node), string = context.tokensAsString(tokens), statement = new Statement(string, node, tokens);
    return statement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcbmltcG9ydCB7IFRZUEVfUlVMRV9OQU1FLCBWQVJJQUJMRV9SVUxFX05BTUUsIFBST1BFUlRZX1JVTEVfTkFNRSwgUFJPUEVSVFlfREVDTEFSQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlVHlwZU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGUobm9kZSwgVFlQRV9SVUxFX05BTUUpOyB9XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vZGVWYXJpYWJsZU5vZGUobm9kZSkgeyByZXR1cm4gaXNOb2RlUnVsZU5vZGUobm9kZSwgVkFSSUFCTEVfUlVMRV9OQU1FKTsgfVxuXG5leHBvcnQgZnVuY3Rpb24gaXNOb2RlUHJvcGVydHlOb2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlKG5vZGUsIFBST1BFUlRZX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzTm9kZVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlKG5vZGUpIHsgcmV0dXJuIGlzTm9kZVJ1bGVOb2RlKG5vZGUsIFBST1BFUlRZX0RFQ0xBUkFUSU9OX1JVTEVfTkFNRSk7IH1cblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZVJ1bGVOb2RlKG5vZGUsIHJ1bGVOYW1lKSB7XG4gIGxldCBub2RlUnVsZU5vZGUgPSBmYWxzZTtcblxuICBjb25zdCBub2RlTm9uVGVybWluYWxOb2RlID0gbm9kZS5pc05vblRlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlTm9uVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWUgPSBub25UZXJtaW5hbE5vZGUuZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBub25UZXJtaW5hbE5vZGVSdWxlTmFtZVJ1bGVOYW1lID0gKG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID09PSBydWxlTmFtZSk7XG5cbiAgICBpZiAobm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSkge1xuICAgICAgbm9kZVJ1bGVOb2RlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbm9kZVJ1bGVOb2RlO1xufVxuIl0sIm5hbWVzIjpbImlzTm9kZVByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiaXNOb2RlUHJvcGVydHlOb2RlIiwiaXNOb2RlVHlwZU5vZGUiLCJpc05vZGVWYXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwibm9kZSIsImlzTm9kZVJ1bGVOb2RlIiwiVFlQRV9SVUxFX05BTUUiLCJWQVJJQUJMRV9SVUxFX05BTUUiLCJQUk9QRVJUWV9SVUxFX05BTUUiLCJQUk9QRVJUWV9ERUNMQVJBVElPTl9SVUxFX05BTUUiLCJ0eXBlTm9kZSIsInR5cGUiLCJvYmplY3RUeXBlIiwiVHlwZSIsImRvbSIsInR5cGVOYW1lIiwiZ2V0VHlwZU5hbWUiLCJuYW1lIiwic3RyaW5nIiwic3VwZXJUeXBlcyIsInByb3BlcnRpZXMiLCJwcm92aXNpb25hbCIsInRlcm1Ob2RlIiwiY29udGV4dCIsIlRlcm0iLCJub2RlQXNTdHJpbmciLCJ0ZXJtIiwic3RhdGVtZW50Tm9kZSIsIlN0YXRlbWVudCIsInRva2VucyIsIm5vZGVBc1Rva2VucyIsInRva2Vuc0FzU3RyaW5nIiwic3RhdGVtZW50IiwicnVsZU5hbWUiLCJub2RlUnVsZU5vZGUiLCJub2RlTm9uVGVybWluYWxOb2RlIiwiaXNOb25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGUiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZSIsImdldFJ1bGVOYW1lIiwibm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBYWdCQTtlQUFBQTs7UUFGQUM7ZUFBQUE7O1FBSkFDO2VBQUFBOztRQUVBQztlQUFBQTs7UUFvQ0FDO2VBQUFBOztRQVZBQztlQUFBQTs7UUFwQkFDO2VBQUFBOzs7MERBYkE7b0JBRVc7eUJBQzRFOzs7Ozs7QUFFaEcsU0FBU0osZUFBZUssSUFBSTtJQUFJLE9BQU9DLGVBQWVELE1BQU1FLHlCQUFjO0FBQUc7QUFFN0UsU0FBU04sbUJBQW1CSSxJQUFJO0lBQUksT0FBT0MsZUFBZUQsTUFBTUcsNkJBQWtCO0FBQUc7QUFFckYsU0FBU1QsbUJBQW1CTSxJQUFJO0lBQUksT0FBT0MsZUFBZUQsTUFBTUksNkJBQWtCO0FBQUc7QUFFckYsU0FBU1gsOEJBQThCTyxJQUFJO0lBQUksT0FBT0MsZUFBZUQsTUFBTUsseUNBQThCO0FBQUc7QUFFNUcsU0FBU04saUJBQWlCTyxRQUFRO0lBQ3ZDLElBQUlDO0lBRUosSUFBSUQsYUFBYSxNQUFNO1FBQ3JCQyxPQUFPQyxnQkFBVTtJQUNuQixPQUFPO1FBQ0wsSUFBTSxBQUFFQyxPQUFTQyxZQUFHLENBQVpELE1BQ0ZFLFdBQVdMLFNBQVNNLFdBQVcsSUFDL0JDLE9BQU9GLFVBQ1BHLFNBQVNELE1BQ1RFLGFBQWEsTUFDYkMsYUFBYSxNQUNiQyxjQUFjO1FBRXBCVixPQUFPLElBQUlFLEtBQUtLLFFBQVFELE1BQU1FLFlBQVlDLFlBQVlDO0lBQ3hEO0lBRUEsT0FBT1Y7QUFDVDtBQUVPLFNBQVNULGlCQUFpQm9CLFFBQVEsRUFBRUMsT0FBTztJQUNoRCxJQUFNLEFBQUVDLE9BQVNWLFlBQUcsQ0FBWlUsTUFDRnBCLE9BQU9rQixVQUNQSixTQUFTSyxRQUFRRSxZQUFZLENBQUNyQixPQUM5Qk8sT0FBTyxNQUNQZSxPQUFPLElBQUlGLEtBQUtOLFFBQVFkLE1BQU1PO0lBRXBDLE9BQU9lO0FBQ1Q7QUFFTyxTQUFTekIsMkJBQTJCMEIsYUFBYSxFQUFFSixPQUFPO0lBQy9ELElBQU0sQUFBRUssWUFBY2QsWUFBRyxDQUFqQmMsV0FDRnhCLE9BQU91QixlQUNQRSxTQUFTTixRQUFRTyxZQUFZLENBQUMxQixPQUM5QmMsU0FBU0ssUUFBUVEsY0FBYyxDQUFDRixTQUNoQ0csWUFBWSxJQUFJSixVQUFVVixRQUFRZCxNQUFNeUI7SUFFOUMsT0FBT0c7QUFDVDtBQUVBLFNBQVMzQixlQUFlRCxJQUFJLEVBQUU2QixRQUFRO0lBQ3BDLElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsc0JBQXNCL0IsS0FBS2dDLGlCQUFpQjtJQUVsRCxJQUFJRCxxQkFBcUI7UUFDdkIsSUFBTUUsa0JBQWtCakMsTUFDbEJrQywwQkFBMEJELGdCQUFnQkUsV0FBVyxJQUNyREMsa0NBQW1DRiw0QkFBNEJMO1FBRXJFLElBQUlPLGlDQUFpQztZQUNuQ04sZUFBZTtRQUNqQjtJQUNGO0lBRUEsT0FBT0E7QUFDVCJ9