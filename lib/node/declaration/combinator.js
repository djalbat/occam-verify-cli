"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContainedDeclarationNode;
    }
});
const _declaration = /*#__PURE__*/ _interop_require_default(require("../../node/declaration"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContainedDeclarationNode extends _declaration.default {
    getCombinatorNode() {
        const ruleName = _ruleNames.COMBINATOR_RULE_NAME, combinatorNode = this.getNodeByRuleName(ruleName);
        return combinatorNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _declaration.default.fromRuleNameChildNodesOpacityAndPrecedence(ContainedDeclarationNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbWJpbmF0b3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgQ09NQklOQVRPUl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhaW5lZERlY2xhcmF0aW9uTm9kZSBleHRlbmRzIERlY2xhcmF0aW9uTm9kZSB7XG4gIGdldENvbWJpbmF0b3JOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gQ09NQklOQVRPUl9SVUxFX05BTUUsXG4gICAgICAgICAgY29tYmluYXRvck5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBjb21iaW5hdG9yTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIERlY2xhcmF0aW9uTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoQ29udGFpbmVkRGVjbGFyYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb250YWluZWREZWNsYXJhdGlvbk5vZGUiLCJEZWNsYXJhdGlvbk5vZGUiLCJnZXRDb21iaW5hdG9yTm9kZSIsInJ1bGVOYW1lIiwiQ09NQklOQVRPUl9SVUxFX05BTUUiLCJjb21iaW5hdG9yTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O29FQUpPOzJCQUVTOzs7Ozs7QUFFdEIsTUFBTUEsaUNBQWlDQyxvQkFBZTtJQUNuRUMsb0JBQW9CO1FBQ2xCLE1BQU1DLFdBQVdDLCtCQUFvQixFQUMvQkMsaUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNIO1FBRTlDLE9BQU9FO0lBQ1Q7SUFFQSxPQUFPRSwyQ0FBMkNKLFFBQVEsRUFBRUssVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9ULG9CQUFlLENBQUNNLDBDQUEwQyxDQUFDUCwwQkFBMEJHLFVBQVVLLFlBQVlDLFNBQVNDO0lBQWE7QUFDek8ifQ==