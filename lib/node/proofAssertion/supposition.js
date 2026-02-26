"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SuppositionNode;
    }
});
const _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../../node/proofAssertion"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class SuppositionNode extends _proofAssertion.default {
    getProcedureCallNode() {
        const ruleName = _ruleNames.PROCEDURE_CALL_RULE_NAME, procedureCallNode = this.getNodeByRuleName(ruleName);
        return procedureCallNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _proofAssertion.default.fromRuleNameChildNodesOpacityAndPrecedence(SuppositionNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IFBST0NFRFVSRV9DQUxMX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3VwcG9zaXRpb25Ob2RlIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb25Ob2RlIHtcbiAgZ2V0UHJvY2VkdXJlQ2FsbE5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBQUk9DRURVUkVfQ0FMTF9SVUxFX05BTUUsXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbE5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIFByb29mQXNzZXJ0aW9uTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoU3VwcG9zaXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdXBwb3NpdGlvbk5vZGUiLCJQcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRQcm9jZWR1cmVDYWxsTm9kZSIsInJ1bGVOYW1lIiwiUFJPQ0VEVVJFX0NBTExfUlVMRV9OQU1FIiwicHJvY2VkdXJlQ2FsbE5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7Ozt1RUFKVTsyQkFFVTs7Ozs7O0FBRTFCLE1BQU1BLHdCQUF3QkMsdUJBQWtCO0lBQzdEQyx1QkFBdUI7UUFDckIsTUFBTUMsV0FBV0MsbUNBQXdCLEVBQ25DQyxvQkFBb0IsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7UUFFakQsT0FBT0U7SUFDVDtJQUVBLE9BQU9FLDJDQUEyQ0osUUFBUSxFQUFFSyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT1QsdUJBQWtCLENBQUNNLDBDQUEwQyxDQUFDUCxpQkFBaUJHLFVBQVVLLFlBQVlDLFNBQVNDO0lBQWE7QUFDbk8ifQ==