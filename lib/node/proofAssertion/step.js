"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return StepNode;
    }
});
const _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../../node/proofAssertion"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class StepNode extends _proofAssertion.default {
    isStepNode() {
        const stepNode = true;
        return stepNode;
    }
    isSubproofNode() {
        const subproofNode = false;
        return subproofNode;
    }
    getReferenceNode() {
        let referenceNode = null;
        const qualificationNode = this.getQualificationNode();
        if (qualificationNode !== null) {
            referenceNode = qualificationNode.getReferenceNode();
        }
        return referenceNode;
    }
    getSatisfiedAssertionNode() {
        let satisfiedAssertionNode = null;
        const qualificationNode = this.getQualificationNode();
        if (qualificationNode !== null) {
            satisfiedAssertionNode = qualificationNode.getSatisfiedAssertionNode();
        }
        return satisfiedAssertionNode;
    }
    getQualificationNode() {
        const ruleName = _ruleNames.QUALIFICATION_RULE_NAME, qualificationNode = this.getNodeByRuleName(ruleName);
        return qualificationNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _proofAssertion.default.fromRuleNameChildNodesOpacityAndPrecedence(StepNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3Byb29mQXNzZXJ0aW9uL3N0ZXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgUVVBTElGSUNBVElPTl9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0ZXBOb2RlIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb25Ob2RlIHtcbiAgaXNTdGVwTm9kZSgpIHtcbiAgICBjb25zdCBzdGVwTm9kZSA9IHRydWU7XG5cbiAgICByZXR1cm4gc3RlcE5vZGU7XG4gIH1cblxuICBpc1N1YnByb29mTm9kZSgpIHtcbiAgICBjb25zdCBzdWJwcm9vZk5vZGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdWJwcm9vZk5vZGU7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VOb2RlKCkge1xuICAgIGxldCByZWZlcmVuY2VOb2RlID0gbnVsbDtcblxuICAgIGNvbnN0IHF1YWxpZmljYXRpb25Ob2RlID0gdGhpcy5nZXRRdWFsaWZpY2F0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHF1YWxpZmljYXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICByZWZlcmVuY2VOb2RlID0gcXVhbGlmaWNhdGlvbk5vZGUuZ2V0UmVmZXJlbmNlTm9kZSgpO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VOb2RlO1xuICB9XG5cbiAgZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBsZXQgc2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSA9ICBudWxsO1xuXG4gICAgY29uc3QgcXVhbGlmaWNhdGlvbk5vZGUgPSB0aGlzLmdldFF1YWxpZmljYXRpb25Ob2RlKCk7XG5cbiAgICBpZiAocXVhbGlmaWNhdGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIHNhdGlzZmllZEFzc2VydGlvbk5vZGUgPSBxdWFsaWZpY2F0aW9uTm9kZS5nZXRTYXRpc2ZpZWRBc3NlcnRpb25Ob2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhdGlzZmllZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICBnZXRRdWFsaWZpY2F0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFFVQUxJRklDQVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHF1YWxpZmljYXRpb25Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gcXVhbGlmaWNhdGlvbk5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBQcm9vZkFzc2VydGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFN0ZXBOb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJTdGVwTm9kZSIsIlByb29mQXNzZXJ0aW9uTm9kZSIsImlzU3RlcE5vZGUiLCJzdGVwTm9kZSIsImlzU3VicHJvb2ZOb2RlIiwic3VicHJvb2ZOb2RlIiwiZ2V0UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJxdWFsaWZpY2F0aW9uTm9kZSIsImdldFF1YWxpZmljYXRpb25Ob2RlIiwiZ2V0U2F0aXNmaWVkQXNzZXJ0aW9uTm9kZSIsInNhdGlzZmllZEFzc2VydGlvbk5vZGUiLCJydWxlTmFtZSIsIlFVQUxJRklDQVRJT05fUlVMRV9OQU1FIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBcUJBOzs7dUVBSlU7MkJBRVM7Ozs7OztBQUV6QixNQUFNQSxpQkFBaUJDLHVCQUFrQjtJQUN0REMsYUFBYTtRQUNYLE1BQU1DLFdBQVc7UUFFakIsT0FBT0E7SUFDVDtJQUVBQyxpQkFBaUI7UUFDZixNQUFNQyxlQUFlO1FBRXJCLE9BQU9BO0lBQ1Q7SUFFQUMsbUJBQW1CO1FBQ2pCLElBQUlDLGdCQUFnQjtRQUVwQixNQUFNQyxvQkFBb0IsSUFBSSxDQUFDQyxvQkFBb0I7UUFFbkQsSUFBSUQsc0JBQXNCLE1BQU07WUFDOUJELGdCQUFnQkMsa0JBQWtCRixnQkFBZ0I7UUFDcEQ7UUFFQSxPQUFPQztJQUNUO0lBRUFHLDRCQUE0QjtRQUMxQixJQUFJQyx5QkFBMEI7UUFFOUIsTUFBTUgsb0JBQW9CLElBQUksQ0FBQ0Msb0JBQW9CO1FBRW5ELElBQUlELHNCQUFzQixNQUFNO1lBQzlCRyx5QkFBeUJILGtCQUFrQkUseUJBQXlCO1FBQ3RFO1FBRUEsT0FBT0M7SUFDVDtJQUVBRix1QkFBdUI7UUFDckIsTUFBTUcsV0FBV0Msa0NBQXVCLEVBQ2xDTCxvQkFBb0IsSUFBSSxDQUFDTSxpQkFBaUIsQ0FBQ0Y7UUFFakQsT0FBT0o7SUFDVDtJQUVBLE9BQU9PLDJDQUEyQ0gsUUFBUSxFQUFFSSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT2pCLHVCQUFrQixDQUFDYywwQ0FBMEMsQ0FBQ2YsVUFBVVksVUFBVUksWUFBWUMsU0FBU0M7SUFBYTtBQUM1TiJ9