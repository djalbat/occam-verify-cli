"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ContainedAssertionNode;
    }
});
const _assertion = /*#__PURE__*/ _interop_require_default(require("../../node/assertion"));
const _constants = require("../../constants");
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ContainedAssertionNode extends _assertion.default {
    isNegated() {
        let negated = false;
        this.someChildNode((childNode)=>{
            const childNodeTerminalNode = childNode.isTerminalNode();
            if (childNodeTerminalNode) {
                const terminalNode = childNode, content = terminalNode.getContent(), contentMessing = content === _constants.MISSING;
                if (contentMessing) {
                    negated = true;
                    return true;
                }
            }
        });
        return negated;
    }
    getTermNode() {
        const ruleName = _ruleNames.TERM_RULE_NAME, termNode = this.getNodeByRuleName(ruleName);
        return termNode;
    }
    getFrameNode() {
        const ruleName = _ruleNames.FRAME_RULE_NAME, frameNode = this.getNodeByRuleName(ruleName);
        return frameNode;
    }
    getStatementNode() {
        const ruleName = _ruleNames.STATEMENT_RULE_NAME, statementNode = this.getNodeByRuleName(ruleName);
        return statementNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _assertion.default.fromRuleNameChildNodesOpacityAndPrecedence(ContainedAssertionNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Fzc2VydGlvbi9jb250YWluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBNSVNTSU5HIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVEVSTV9SVUxFX05BTUUsIEZSQU1FX1JVTEVfTkFNRSwgU1RBVEVNRU5UX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSBleHRlbmRzIEFzc2VydGlvbk5vZGUge1xuICBpc05lZ2F0ZWQoKSB7XG4gICAgbGV0IG5lZ2F0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsIC8vL1xuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudE1lc3NpbmcgPSAoY29udGVudCA9PT0gTUlTU0lORyk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRNZXNzaW5nKSB7XG4gICAgICAgICAgbmVnYXRlZCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRFUk1fUlVMRV9OQU1FLFxuICAgICAgICAgIHRlcm1Ob2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gdGVybU5vZGU7XG4gIH1cblxuICBnZXRGcmFtZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBGUkFNRV9SVUxFX05BTUUsXG4gICAgICAgICAgZnJhbWVOb2RlID0gdGhpcy5nZXROb2RlQnlSdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgICByZXR1cm4gZnJhbWVOb2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFNUQVRFTUVOVF9SVUxFX05BTUUsXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBBc3NlcnRpb25Ob2RlLmZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZShDb250YWluZWRBc3NlcnRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiQXNzZXJ0aW9uTm9kZSIsImlzTmVnYXRlZCIsIm5lZ2F0ZWQiLCJzb21lQ2hpbGROb2RlIiwiY2hpbGROb2RlIiwiY2hpbGROb2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsImNvbnRlbnRNZXNzaW5nIiwiTUlTU0lORyIsImdldFRlcm1Ob2RlIiwicnVsZU5hbWUiLCJURVJNX1JVTEVfTkFNRSIsInRlcm1Ob2RlIiwiZ2V0Tm9kZUJ5UnVsZU5hbWUiLCJnZXRGcmFtZU5vZGUiLCJGUkFNRV9SVUxFX05BTUUiLCJmcmFtZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiU1RBVEVNRU5UX1JVTEVfTkFNRSIsInN0YXRlbWVudE5vZGUiLCJmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UiLCJjaGlsZE5vZGVzIiwib3BhY2l0eSIsInByZWNlZGVuY2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU9BOzs7ZUFBcUJBOzs7a0VBTEs7MkJBRUY7MkJBQzZDOzs7Ozs7QUFFdEQsTUFBTUEsK0JBQStCQyxrQkFBYTtJQUMvREMsWUFBWTtRQUNWLElBQUlDLFVBQVU7UUFFZCxJQUFJLENBQUNDLGFBQWEsQ0FBQyxDQUFDQztZQUNsQixNQUFNQyx3QkFBd0JELFVBQVVFLGNBQWM7WUFFdEQsSUFBSUQsdUJBQXVCO2dCQUN6QixNQUFNRSxlQUFlSCxXQUNmSSxVQUFVRCxhQUFhRSxVQUFVLElBQ2pDQyxpQkFBa0JGLFlBQVlHLGtCQUFPO2dCQUUzQyxJQUFJRCxnQkFBZ0I7b0JBQ2xCUixVQUFVO29CQUVWLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBVSxjQUFjO1FBQ1osTUFBTUMsV0FBV0MseUJBQWMsRUFDekJDLFdBQVcsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0g7UUFFeEMsT0FBT0U7SUFDVDtJQUVBRSxlQUFlO1FBQ2IsTUFBTUosV0FBV0ssMEJBQWUsRUFDMUJDLFlBQVksSUFBSSxDQUFDSCxpQkFBaUIsQ0FBQ0g7UUFFekMsT0FBT007SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTVAsV0FBV1EsOEJBQW1CLEVBQzlCQyxnQkFBZ0IsSUFBSSxDQUFDTixpQkFBaUIsQ0FBQ0g7UUFFN0MsT0FBT1M7SUFDVDtJQUVBLE9BQU9DLDJDQUEyQ1YsUUFBUSxFQUFFVyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBTzFCLGtCQUFhLENBQUN1QiwwQ0FBMEMsQ0FBQ3hCLHdCQUF3QmMsVUFBVVcsWUFBWUMsU0FBU0M7SUFBYTtBQUNyTyJ9