"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ConstructorDeclarationNode;
    }
});
const _declaration = /*#__PURE__*/ _interop_require_default(require("../../node/declaration"));
const _constants = require("../../constants");
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class ConstructorDeclarationNode extends _declaration.default {
    isProvisional() {
        let provisional = false;
        this.someChildNode((childNode)=>{
            const childNodeTerminalNode = childNode.isTerminalNode();
            if (childNodeTerminalNode) {
                const terminalNode = childNode, content = terminalNode.getContent(), contentProvisionally = content === _constants.PROVISIONALLY;
                if (contentProvisionally) {
                    provisional = true;
                    return true;
                }
            }
        });
        return provisional;
    }
    getTypeNode() {
        const ruleName = _ruleNames.TYPE_RULE_NAME, typeNode = this.getNodeByRuleName(ruleName);
        return typeNode;
    }
    getConstructorNode() {
        const ruleName = _ruleNames.CONSTRUCTOR_RULE_NAME, constructorNode = this.getNodeByRuleName(ruleName);
        return constructorNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _declaration.default.fromRuleNameChildNodesOpacityAndPrecedence(ConstructorDeclarationNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbnN0cnVjdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMTFkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBDT05TVFJVQ1RPUl9SVUxFX05BTUUsIFRZUEVfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSBleHRlbmRzIERlY2xhcmF0aW9uTm9kZSB7XG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLFxuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsbHkgPSAoY29udGVudCA9PT0gUFJPVklTSU9OQUxMWSk7XG5cbiAgICAgICAgaWYgKGNvbnRlbnRQcm92aXNpb25hbGx5KSB7XG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVFlQRV9SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9yTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IENPTlNUUlVDVE9SX1JVTEVfTkFNRSxcbiAgICAgICAgICBjb25zdHJ1Y3Rvck5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBjb25zdHJ1Y3Rvck5vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBEZWNsYXJhdGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENvbnN0cnVjdG9yRGVjbGFyYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb25zdHJ1Y3RvckRlY2xhcmF0aW9uTm9kZSIsIkRlY2xhcmF0aW9uTm9kZSIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbCIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsbHkiLCJQUk9WSVNJT05BTExZIiwiZ2V0VHlwZU5vZGUiLCJydWxlTmFtZSIsIlRZUEVfUlVMRV9OQU1FIiwidHlwZU5vZGUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldENvbnN0cnVjdG9yTm9kZSIsIkNPTlNUUlVDVE9SX1JVTEVfTkFNRSIsImNvbnN0cnVjdG9yTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBT0E7OztlQUFxQkE7OztvRUFMTzsyQkFFRTsyQkFDd0I7Ozs7OztBQUV2QyxNQUFNQSxtQ0FBbUNDLG9CQUFlO0lBQ3JFQyxnQkFBZ0I7UUFDZCxJQUFJQyxjQUFjO1FBRWxCLElBQUksQ0FBQ0MsYUFBYSxDQUFDLENBQUNDO1lBQ2xCLE1BQU1DLHdCQUF3QkQsVUFBVUUsY0FBYztZQUV0RCxJQUFJRCx1QkFBdUI7Z0JBQ3pCLE1BQU1FLGVBQWVILFdBQ2ZJLFVBQVVELGFBQWFFLFVBQVUsSUFDakNDLHVCQUF3QkYsWUFBWUcsd0JBQWE7Z0JBRXZELElBQUlELHNCQUFzQjtvQkFDeEJSLGNBQWM7b0JBRWQsT0FBTztnQkFDVDtZQUNGO1FBQ0Y7UUFFQSxPQUFPQTtJQUNUO0lBRUFVLGNBQWM7UUFDWixNQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsV0FBVyxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtRQUV4QyxPQUFPRTtJQUNUO0lBRUFFLHFCQUFxQjtRQUNuQixNQUFNSixXQUFXSyxnQ0FBcUIsRUFDaENDLGtCQUFrQixJQUFJLENBQUNILGlCQUFpQixDQUFDSDtRQUUvQyxPQUFPTTtJQUNUO0lBRUEsT0FBT0MsMkNBQTJDUCxRQUFRLEVBQUVRLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPdkIsb0JBQWUsQ0FBQ29CLDBDQUEwQyxDQUFDckIsNEJBQTRCYyxVQUFVUSxZQUFZQyxTQUFTQztJQUFhO0FBQzNPIn0=