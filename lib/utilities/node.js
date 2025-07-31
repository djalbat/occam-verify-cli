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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
function isNodeRuleNodeByRuleName(node, ruleName) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGRvbSBmcm9tIFwiLi4vZG9tXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vZG9tL3R5cGVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVGcm9tVHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgbGV0IHR5cGU7XG5cbiAgaWYgKHR5cGVOb2RlID09PSBudWxsKSB7XG4gICAgdHlwZSA9IG9iamVjdFR5cGU7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgeyBUeXBlIH0gPSBkb20sXG4gICAgICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpLFxuICAgICAgICAgIG5hbWUgPSB0eXBlTmFtZSwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IG5hbWUsICAvLy9cbiAgICAgICAgICBzdXBlclR5cGVzID0gbnVsbCxcbiAgICAgICAgICBwcm9wZXJ0aWVzID0gbnVsbCxcbiAgICAgICAgICBwcm92aXNpb25hbCA9IG51bGw7XG5cbiAgICB0eXBlID0gbmV3IFR5cGUoc3RyaW5nLCBuYW1lLCBzdXBlclR5cGVzLCBwcm9wZXJ0aWVzLCBwcm92aXNpb25hbCk7XG4gIH1cblxuICByZXR1cm4gdHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRlcm1Gcm9tVGVybU5vZGUodGVybU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBUZXJtIH0gPSBkb20sXG4gICAgICAgIG5vZGUgPSB0ZXJtTm9kZSwgIC8vL1xuICAgICAgICBzdHJpbmcgPSBjb250ZXh0Lm5vZGVBc1N0cmluZyhub2RlKSxcbiAgICAgICAgdHlwZSA9IG51bGwsXG4gICAgICAgIHRlcm0gPSBuZXcgVGVybShzdHJpbmcsIG5vZGUsIHR5cGUpO1xuXG4gIHJldHVybiB0ZXJtO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFN0YXRlbWVudCB9ID0gZG9tLFxuICAgICAgICBub2RlID0gc3RhdGVtZW50Tm9kZSwgLy8vXG4gICAgICAgIHRva2VucyA9IGNvbnRleHQubm9kZUFzVG9rZW5zKG5vZGUpLFxuICAgICAgICBzdHJpbmcgPSBjb250ZXh0LnRva2Vuc0FzU3RyaW5nKHRva2VucyksXG4gICAgICAgIHN0YXRlbWVudCA9IG5ldyBTdGF0ZW1lbnQoc3RyaW5nLCBub2RlLCB0b2tlbnMpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzTm9kZVJ1bGVOb2RlQnlSdWxlTmFtZShub2RlLCBydWxlTmFtZSkge1xuICBsZXQgbm9kZVJ1bGVOb2RlID0gZmFsc2U7XG5cbiAgY29uc3Qgbm9kZU5vblRlcm1pbmFsTm9kZSA9IG5vZGUuaXNOb25UZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZU5vblRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lID0gbm9uVGVybWluYWxOb2RlLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgbm9uVGVybWluYWxOb2RlUnVsZU5hbWVSdWxlTmFtZSA9IChub25UZXJtaW5hbE5vZGVSdWxlTmFtZSA9PT0gcnVsZU5hbWUpO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lUnVsZU5hbWUpIHtcbiAgICAgIG5vZGVSdWxlTm9kZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5vZGVSdWxlTm9kZTtcbn1cbiJdLCJuYW1lcyI6WyJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1Gcm9tVGVybU5vZGUiLCJ0eXBlRnJvbVR5cGVOb2RlIiwidHlwZU5vZGUiLCJ0eXBlIiwib2JqZWN0VHlwZSIsIlR5cGUiLCJkb20iLCJ0eXBlTmFtZSIsImdldFR5cGVOYW1lIiwibmFtZSIsInN0cmluZyIsInN1cGVyVHlwZXMiLCJwcm9wZXJ0aWVzIiwicHJvdmlzaW9uYWwiLCJ0ZXJtTm9kZSIsImNvbnRleHQiLCJUZXJtIiwibm9kZSIsIm5vZGVBc1N0cmluZyIsInRlcm0iLCJzdGF0ZW1lbnROb2RlIiwiU3RhdGVtZW50IiwidG9rZW5zIiwibm9kZUFzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJzdGF0ZW1lbnQiLCJpc05vZGVSdWxlTm9kZUJ5UnVsZU5hbWUiLCJydWxlTmFtZSIsIm5vZGVSdWxlTm9kZSIsIm5vZGVOb25UZXJtaW5hbE5vZGUiLCJpc05vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZSIsIm5vblRlcm1pbmFsTm9kZVJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJub25UZXJtaW5hbE5vZGVSdWxlTmFtZVJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFvQ2dCQTtlQUFBQTs7UUFWQUM7ZUFBQUE7O1FBcEJBQztlQUFBQTs7OzBEQUpBO29CQUVXOzs7Ozs7QUFFcEIsU0FBU0EsaUJBQWlCQyxRQUFRO0lBQ3ZDLElBQUlDO0lBRUosSUFBSUQsYUFBYSxNQUFNO1FBQ3JCQyxPQUFPQyxnQkFBVTtJQUNuQixPQUFPO1FBQ0wsSUFBTSxBQUFFQyxPQUFTQyxZQUFHLENBQVpELE1BQ0ZFLFdBQVdMLFNBQVNNLFdBQVcsSUFDL0JDLE9BQU9GLFVBQ1BHLFNBQVNELE1BQ1RFLGFBQWEsTUFDYkMsYUFBYSxNQUNiQyxjQUFjO1FBRXBCVixPQUFPLElBQUlFLEtBQUtLLFFBQVFELE1BQU1FLFlBQVlDLFlBQVlDO0lBQ3hEO0lBRUEsT0FBT1Y7QUFDVDtBQUVPLFNBQVNILGlCQUFpQmMsUUFBUSxFQUFFQyxPQUFPO0lBQ2hELElBQU0sQUFBRUMsT0FBU1YsWUFBRyxDQUFaVSxNQUNGQyxPQUFPSCxVQUNQSixTQUFTSyxRQUFRRyxZQUFZLENBQUNELE9BQzlCZCxPQUFPLE1BQ1BnQixPQUFPLElBQUlILEtBQUtOLFFBQVFPLE1BQU1kO0lBRXBDLE9BQU9nQjtBQUNUO0FBRU8sU0FBU3BCLDJCQUEyQnFCLGFBQWEsRUFBRUwsT0FBTztJQUMvRCxJQUFNLEFBQUVNLFlBQWNmLFlBQUcsQ0FBakJlLFdBQ0ZKLE9BQU9HLGVBQ1BFLFNBQVNQLFFBQVFRLFlBQVksQ0FBQ04sT0FDOUJQLFNBQVNLLFFBQVFTLGNBQWMsQ0FBQ0YsU0FDaENHLFlBQVksSUFBSUosVUFBVVgsUUFBUU8sTUFBTUs7SUFFOUMsT0FBT0c7QUFDVDtBQUVBLFNBQVNDLHlCQUF5QlQsSUFBSSxFQUFFVSxRQUFRO0lBQzlDLElBQUlDLGVBQWU7SUFFbkIsSUFBTUMsc0JBQXNCWixLQUFLYSxpQkFBaUI7SUFFbEQsSUFBSUQscUJBQXFCO1FBQ3ZCLElBQU1FLGtCQUFrQmQsTUFDbEJlLDBCQUEwQkQsZ0JBQWdCRSxXQUFXLElBQ3JEQyxrQ0FBbUNGLDRCQUE0Qkw7UUFFckUsSUFBSU8saUNBQWlDO1lBQ25DTixlQUFlO1FBQ2pCO0lBQ0Y7SUFFQSxPQUFPQTtBQUNUIn0=