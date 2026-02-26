"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SubproofAssertionNode;
    }
});
const _assertion = /*#__PURE__*/ _interop_require_default(require("../../node/assertion"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SubproofAssertionNode extends _assertion.default {
    getStatementNodes() {
        const ruleName = _ruleNames.STATEMENT_RULE_NAME, statementNodes = this.getNodesByRuleName(ruleName);
        return statementNodes;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _assertion.default.fromRuleNameChildNodesOpacityAndPrecedence(SubproofAssertionNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Fzc2VydGlvbi9zdWJwcm9vZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFzc2VydGlvbk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IFNUQVRFTUVOVF9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1YnByb29mQXNzZXJ0aW9uTm9kZSBleHRlbmRzIEFzc2VydGlvbk5vZGUge1xuICBnZXRTdGF0ZW1lbnROb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZXMgPSB0aGlzLmdldE5vZGVzQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBBc3NlcnRpb25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShTdWJwcm9vZkFzc2VydGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlN1YnByb29mQXNzZXJ0aW9uTm9kZSIsIkFzc2VydGlvbk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlcyIsInJ1bGVOYW1lIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInN0YXRlbWVudE5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O2tFQUpLOzJCQUVVOzs7Ozs7QUFFckIsTUFBTUEsOEJBQThCQyxrQkFBYTtJQUM5REMsb0JBQW9CO1FBQ2xCLE1BQU1DLFdBQVdDLDhCQUFtQixFQUM5QkMsaUJBQWlCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNIO1FBRS9DLE9BQU9FO0lBQ1Q7SUFFQSxPQUFPRSwyQ0FBMkNKLFFBQVEsRUFBRUssVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9ULGtCQUFhLENBQUNNLDBDQUEwQyxDQUFDUCx1QkFBdUJHLFVBQVVLLFlBQVlDLFNBQVNDO0lBQWE7QUFDcE8ifQ==