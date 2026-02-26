"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return VariableDeclarationNode;
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
class VariableDeclarationNode extends _declaration.default {
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
    getVariableIdentifier() {
        const variableNode = this.getVariableNode(), variableIdentifier = variableNode.getVariableIdentifier();
        return variableIdentifier;
    }
    getTypeNode() {
        const ruleName = _ruleNames.TYPE_RULE_NAME, typeNode = this.getNodeByRuleName(ruleName);
        return typeNode;
    }
    getVariableNode() {
        const ruleName = _ruleNames.VARIABLE_RULE_NAME, variableNode = this.getNodeByRuleName(ruleName);
        return variableNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _declaration.default.fromRuleNameChildNodesOpacityAndPrecedence(VariableDeclarationNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3ZhcmlhYmxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMTFkgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBUWVBFX1JVTEVfTkFNRSwgVkFSSUFCTEVfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYXJpYWJsZURlY2xhcmF0aW9uTm9kZSBleHRlbmRzIERlY2xhcmF0aW9uTm9kZSB7XG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLCAvLy9cbiAgICAgICAgICAgICAgY29udGVudCA9IHRlcm1pbmFsTm9kZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgICAgIGNvbnRlbnRQcm92aXNpb25hbGx5ID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMTFkpO1xuXG4gICAgICAgIGlmIChjb250ZW50UHJvdmlzaW9uYWxseSkge1xuICAgICAgICAgIHByb3Zpc2lvbmFsID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvdmlzaW9uYWw7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGhpcy5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVJZGVudGlmaWVyO1xuICB9XG5cbiAgZ2V0VHlwZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBUWVBFX1JVTEVfTkFNRSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOb2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVkFSSUFCTEVfUlVMRV9OQU1FLFxuICAgICAgICAgIHZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIERlY2xhcmF0aW9uTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoVmFyaWFibGVEZWNsYXJhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlZhcmlhYmxlRGVjbGFyYXRpb25Ob2RlIiwiRGVjbGFyYXRpb25Ob2RlIiwiaXNQcm92aXNpb25hbCIsInByb3Zpc2lvbmFsIiwic29tZUNoaWxkTm9kZSIsImNoaWxkTm9kZSIsImNoaWxkTm9kZVRlcm1pbmFsTm9kZSIsImlzVGVybWluYWxOb2RlIiwidGVybWluYWxOb2RlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50UHJvdmlzaW9uYWxseSIsIlBST1ZJU0lPTkFMTFkiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZU5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRUeXBlTm9kZSIsInJ1bGVOYW1lIiwiVFlQRV9SVUxFX05BTUUiLCJ0eXBlTm9kZSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiVkFSSUFCTEVfUlVMRV9OQU1FIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O29FQUxPOzJCQUVFOzJCQUNxQjs7Ozs7O0FBRXBDLE1BQU1BLGdDQUFnQ0Msb0JBQWU7SUFDbEVDLGdCQUFnQjtRQUNkLElBQUlDLGNBQWM7UUFFbEIsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQ0M7WUFDbEIsTUFBTUMsd0JBQXdCRCxVQUFVRSxjQUFjO1lBRXRELElBQUlELHVCQUF1QjtnQkFDekIsTUFBTUUsZUFBZUgsV0FDZkksVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MsdUJBQXdCRixZQUFZRyx3QkFBYTtnQkFFdkQsSUFBSUQsc0JBQXNCO29CQUN4QlIsY0FBYztvQkFFZCxPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQVUsd0JBQXdCO1FBQ3RCLE1BQU1DLGVBQWUsSUFBSSxDQUFDQyxlQUFlLElBQ25DQyxxQkFBcUJGLGFBQWFELHFCQUFxQjtRQUU3RCxPQUFPRztJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkMsV0FBVyxJQUFJLENBQUNDLGlCQUFpQixDQUFDSDtRQUV4QyxPQUFPRTtJQUNUO0lBRUFMLGtCQUFrQjtRQUNoQixNQUFNRyxXQUFXSSw2QkFBa0IsRUFDN0JSLGVBQWUsSUFBSSxDQUFDTyxpQkFBaUIsQ0FBQ0g7UUFFNUMsT0FBT0o7SUFDVDtJQUVBLE9BQU9TLDJDQUEyQ0wsUUFBUSxFQUFFTSxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT3pCLG9CQUFlLENBQUNzQiwwQ0FBMEMsQ0FBQ3ZCLHlCQUF5QmtCLFVBQVVNLFlBQVlDLFNBQVNDO0lBQWE7QUFDeE8ifQ==