"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PremiseNode;
    }
});
const _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../../node/proofAssertion"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PremiseNode extends _proofAssertion.default {
    getProcedureCallNode() {
        const ruleName = _ruleNames.PROCEDURE_CALL_RULE_NAME, procedureCallNode = this.getNodeByRuleName(ruleName);
        return procedureCallNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _proofAssertion.default.fromRuleNameChildNodesOpacityAndPrecedence(PremiseNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgUFJPQ0VEVVJFX0NBTExfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVtaXNlTm9kZSBleHRlbmRzIFByb29mQXNzZXJ0aW9uTm9kZSB7XG4gIGdldFByb2NlZHVyZUNhbGxOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUFJPQ0VEVVJFX0NBTExfUlVMRV9OQU1FLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGxOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBQcm9vZkFzc2VydGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFByZW1pc2VOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJQcmVtaXNlTm9kZSIsIlByb29mQXNzZXJ0aW9uTm9kZSIsImdldFByb2NlZHVyZUNhbGxOb2RlIiwicnVsZU5hbWUiLCJQUk9DRURVUkVfQ0FMTF9SVUxFX05BTUUiLCJwcm9jZWR1cmVDYWxsTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFNQTs7O2VBQXFCQTs7O3VFQUpVOzJCQUVVOzs7Ozs7QUFFMUIsTUFBTUEsb0JBQW9CQyx1QkFBa0I7SUFDekRDLHVCQUF1QjtRQUNyQixNQUFNQyxXQUFXQyxtQ0FBd0IsRUFDbkNDLG9CQUFvQixJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtRQUVqRCxPQUFPRTtJQUNUO0lBRUEsT0FBT0UsMkNBQTJDSixRQUFRLEVBQUVLLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPVCx1QkFBa0IsQ0FBQ00sMENBQTBDLENBQUNQLGFBQWFHLFVBQVVLLFlBQVlDLFNBQVNDO0lBQWE7QUFDL04ifQ==