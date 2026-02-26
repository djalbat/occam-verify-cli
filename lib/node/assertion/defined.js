"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DefinedAssertionNode;
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
class DefinedAssertionNode extends _assertion.default {
    isNegated() {
        let negated = false;
        this.someChildNode((childNode)=>{
            const childNodeTerminalNode = childNode.isTerminalNode();
            if (childNodeTerminalNode) {
                const terminalNode = childNode, content = terminalNode.getContent(), contentUndefined = content === _constants.UNDEFINED;
                if (contentUndefined) {
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
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _assertion.default.fromRuleNameChildNodesOpacityAndPrecedence(DefinedAssertionNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2Fzc2VydGlvbi9kZWZpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgVU5ERUZJTkVEIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRlJBTUVfUlVMRV9OQU1FLCBURVJNX1JVTEVfTkFNRSB9IGZyb20gXCIuLi8uLi9ydWxlTmFtZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmaW5lZEFzc2VydGlvbk5vZGUgZXh0ZW5kcyBBc3NlcnRpb25Ob2RlIHtcbiAgaXNOZWdhdGVkKCkge1xuICAgIGxldCBuZWdhdGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgIGNvbnRlbnRVbmRlZmluZWQgPSAoY29udGVudCA9PT0gVU5ERUZJTkVEKTtcblxuICAgICAgICBpZiAoY29udGVudFVuZGVmaW5lZCkge1xuICAgICAgICAgIG5lZ2F0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBuZWdhdGVkO1xuICB9XG5cbiAgZ2V0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBURVJNX1JVTEVfTkFNRSxcbiAgICAgICAgICB0ZXJtTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0RnJhbWVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gRlJBTUVfUlVMRV9OQU1FLFxuICAgICAgICAgIGZyYW1lTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIGZyYW1lTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIEFzc2VydGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKERlZmluZWRBc3NlcnRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIkFzc2VydGlvbk5vZGUiLCJpc05lZ2F0ZWQiLCJuZWdhdGVkIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50VW5kZWZpbmVkIiwiVU5ERUZJTkVEIiwiZ2V0VGVybU5vZGUiLCJydWxlTmFtZSIsIlRFUk1fUlVMRV9OQU1FIiwidGVybU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldEZyYW1lTm9kZSIsIkZSQU1FX1JVTEVfTkFNRSIsImZyYW1lTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztrRUFMSzsyQkFFQTsyQkFDc0I7Ozs7OztBQUVqQyxNQUFNQSw2QkFBNkJDLGtCQUFhO0lBQzdEQyxZQUFZO1FBQ1YsSUFBSUMsVUFBVTtRQUVkLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUNDO1lBQ2xCLE1BQU1DLHdCQUF3QkQsVUFBVUUsY0FBYztZQUV0RCxJQUFJRCx1QkFBdUI7Z0JBQ3pCLE1BQU1FLGVBQWVILFdBQ2ZJLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLG1CQUFvQkYsWUFBWUcsb0JBQVM7Z0JBRS9DLElBQUlELGtCQUFrQjtvQkFDcEJSLFVBQVU7b0JBRVYsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7UUFFQSxPQUFPQTtJQUNUO0lBRUFVLGNBQWM7UUFDWixNQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsV0FBVyxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtRQUV4QyxPQUFPRTtJQUNUO0lBRUFFLGVBQWU7UUFDYixNQUFNSixXQUFXSywwQkFBZSxFQUMxQkMsWUFBWSxJQUFJLENBQUNILGlCQUFpQixDQUFDSDtRQUV6QyxPQUFPTTtJQUNUO0lBRUEsT0FBT0MsMkNBQTJDUCxRQUFRLEVBQUVRLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPdkIsa0JBQWEsQ0FBQ29CLDBDQUEwQyxDQUFDckIsc0JBQXNCYyxVQUFVUSxZQUFZQyxTQUFTQztJQUFhO0FBQ25PIn0=