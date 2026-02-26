"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleBodyNode;
    }
});
const _body = /*#__PURE__*/ _interop_require_default(require("../../node/body"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class RuleBodyNode extends _body.default {
    getProofNode() {
        const ruleName = _ruleNames.PROOF_RULE_NAME, proofNode = this.getNodeByRuleName(ruleName);
        return proofNode;
    }
    getPremiseNodes() {
        const ruleName = _ruleNames.PREMISE_RULE_NAME, premiseNodes = this.getNodesByRuleName(ruleName);
        return premiseNodes;
    }
    getConclusionNode() {
        const ruleName = _ruleNames.CONCLUSION_RULE_NAME, conclusionNode = this.getNodeByRuleName(ruleName);
        return conclusionNode;
    }
    getDeductionNode() {
        const deductionNode = null;
        return deductionNode;
    }
    getSuppositionNodes() {
        const suppositionNodes = null;
        return suppositionNodes;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _body.default.fromRuleNameChildNodesOpacityAndPrecedence(RuleBodyNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2JvZHkvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEJvZHlOb2RlIGZyb20gXCIuLi8uLi9ub2RlL2JvZHlcIjtcblxuaW1wb3J0IHsgUFJPT0ZfUlVMRV9OQU1FLCBQUkVNSVNFX1JVTEVfTkFNRSwgQ09OQ0xVU0lPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGVCb2R5Tm9kZSBleHRlbmRzIEJvZHlOb2RlIHtcbiAgZ2V0UHJvb2ZOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUFJPT0ZfUlVMRV9OQU1FLFxuICAgICAgICAgIHByb29mTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb29mTm9kZTtcbiAgfVxuXG4gIGdldFByZW1pc2VOb2RlcygpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFBSRU1JU0VfUlVMRV9OQU1FLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwcmVtaXNlTm9kZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTkNMVVNJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvbk5vZGU7XG4gIH1cblxuICBnZXREZWR1Y3Rpb25Ob2RlKCkge1xuICAgIGNvbnN0IGRlZHVjdGlvbk5vZGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbk5vZGVzKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTm9kZXMgPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBCb2R5Tm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUnVsZUJvZHlOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJSdWxlQm9keU5vZGUiLCJCb2R5Tm9kZSIsImdldFByb29mTm9kZSIsInJ1bGVOYW1lIiwiUFJPT0ZfUlVMRV9OQU1FIiwicHJvb2ZOb2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRQcmVtaXNlTm9kZXMiLCJQUkVNSVNFX1JVTEVfTkFNRSIsInByZW1pc2VOb2RlcyIsImdldE5vZGVzQnlSdWxlTmFtZSIsImdldENvbmNsdXNpb25Ob2RlIiwiQ09OQ0xVU0lPTl9SVUxFX05BTUUiLCJjb25jbHVzaW9uTm9kZSIsImdldERlZHVjdGlvbk5vZGUiLCJkZWR1Y3Rpb25Ob2RlIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZXMiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7NkRBSkE7MkJBRW9EOzs7Ozs7QUFFMUQsTUFBTUEscUJBQXFCQyxhQUFRO0lBQ2hEQyxlQUFlO1FBQ2IsTUFBTUMsV0FBV0MsMEJBQWUsRUFDMUJDLFlBQVksSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7UUFFekMsT0FBT0U7SUFDVDtJQUVBRSxrQkFBa0I7UUFDaEIsTUFBTUosV0FBV0ssNEJBQWlCLEVBQzVCQyxlQUFlLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNQO1FBRTdDLE9BQU9NO0lBQ1Q7SUFFQUUsb0JBQW9CO1FBQ2xCLE1BQU1SLFdBQVdTLCtCQUFvQixFQUMvQkMsaUJBQWlCLElBQUksQ0FBQ1AsaUJBQWlCLENBQUNIO1FBRTlDLE9BQU9VO0lBQ1Q7SUFFQUMsbUJBQW1CO1FBQ2pCLE1BQU1DLGdCQUFnQjtRQUV0QixPQUFPQTtJQUNUO0lBRUFDLHNCQUFzQjtRQUNwQixNQUFNQyxtQkFBbUI7UUFFekIsT0FBT0E7SUFDVDtJQUVBLE9BQU9DLDJDQUEyQ2YsUUFBUSxFQUFFZ0IsVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9wQixhQUFRLENBQUNpQiwwQ0FBMEMsQ0FBQ2xCLGNBQWNHLFVBQVVnQixZQUFZQyxTQUFTQztJQUFhO0FBQ3ROIn0=