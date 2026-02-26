"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PropertyDeclarationNode;
    }
});
const _declaration = /*#__PURE__*/ _interop_require_default(require("../../node/declaration"));
const _ruleNames = require("../../ruleNames");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class PropertyDeclarationNode extends _declaration.default {
    getPropertyName() {
        const propertyNode = this.getPropertyNode(), propertyName = propertyNode.getPropertyName();
        return propertyName;
    }
    getNominalTypeName() {
        let nominalTypeName = null;
        const typeNode = this.getTypeNode();
        if (typeNode !== null) {
            nominalTypeName = typeNode.getNominalTypeName();
        }
        return nominalTypeName;
    }
    getTypeNode() {
        const ruleName = _ruleNames.TYPE_RULE_NAME, typeNode = this.getNodeByRuleName(ruleName);
        return typeNode;
    }
    getPropertyNode() {
        const ruleName = _ruleNames.PROPERTY_RULE_NAME, propertyNode = this.getNodeByRuleName(ruleName);
        return propertyNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _declaration.default.fromRuleNameChildNodesOpacityAndPrecedence(PropertyDeclarationNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3Byb3BlcnR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IFRZUEVfUlVMRV9OQU1FLCBQUk9QRVJUWV9SVUxFX05BTUUgfSBmcm9tIFwiLi4vLi4vcnVsZU5hbWVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgRGVjbGFyYXRpb25Ob2RlIHtcbiAgZ2V0UHJvcGVydHlOYW1lKCkge1xuICAgIGNvbnN0IHByb3BlcnR5Tm9kZSA9IHRoaXMuZ2V0UHJvcGVydHlOb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlOYW1lID0gcHJvcGVydHlOb2RlLmdldFByb3BlcnR5TmFtZSgpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5TmFtZTtcbiAgfVxuXG4gIGdldE5vbWluYWxUeXBlTmFtZSgpIHtcbiAgICBsZXQgbm9taW5hbFR5cGVOYW1lID0gbnVsbDtcblxuICAgIGNvbnN0IHR5cGVOb2RlID0gdGhpcy5nZXRUeXBlTm9kZSgpO1xuXG4gICAgaWYgKHR5cGVOb2RlICE9PSBudWxsKSB7XG4gICAgICBub21pbmFsVHlwZU5hbWUgPSB0eXBlTm9kZS5nZXROb21pbmFsVHlwZU5hbWUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgZ2V0VHlwZU5vZGUoKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBUWVBFX1JVTEVfTkFNRSxcbiAgICAgICAgICB0eXBlTm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHR5cGVOb2RlO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUFJPUEVSVFlfUlVMRV9OQU1FLFxuICAgICAgICAgIHByb3BlcnR5Tm9kZSA9IHRoaXMuZ2V0Tm9kZUJ5UnVsZU5hbWUocnVsZU5hbWUpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5Tm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIG9wYWNpdHksIHByZWNlZGVuY2UpIHsgcmV0dXJuIERlY2xhcmF0aW9uTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzT3BhY2l0eUFuZFByZWNlZGVuY2UoUHJvcGVydHlEZWNsYXJhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuIl0sIm5hbWVzIjpbIlByb3BlcnR5RGVjbGFyYXRpb25Ob2RlIiwiRGVjbGFyYXRpb25Ob2RlIiwiZ2V0UHJvcGVydHlOYW1lIiwicHJvcGVydHlOb2RlIiwiZ2V0UHJvcGVydHlOb2RlIiwicHJvcGVydHlOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZU5vZGUiLCJnZXRUeXBlTm9kZSIsInJ1bGVOYW1lIiwiVFlQRV9SVUxFX05BTUUiLCJnZXROb2RlQnlSdWxlTmFtZSIsIlBST1BFUlRZX1JVTEVfTkFNRSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNPcGFjaXR5QW5kUHJlY2VkZW5jZSIsImNoaWxkTm9kZXMiLCJvcGFjaXR5IiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBTUE7OztlQUFxQkE7OztvRUFKTzsyQkFFdUI7Ozs7OztBQUVwQyxNQUFNQSxnQ0FBZ0NDLG9CQUFlO0lBQ2xFQyxrQkFBa0I7UUFDaEIsTUFBTUMsZUFBZSxJQUFJLENBQUNDLGVBQWUsSUFDbkNDLGVBQWVGLGFBQWFELGVBQWU7UUFFakQsT0FBT0c7SUFDVDtJQUVBQyxxQkFBcUI7UUFDbkIsSUFBSUMsa0JBQWtCO1FBRXRCLE1BQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXO1FBRWpDLElBQUlELGFBQWEsTUFBTTtZQUNyQkQsa0JBQWtCQyxTQUFTRixrQkFBa0I7UUFDL0M7UUFFQSxPQUFPQztJQUNUO0lBRUFFLGNBQWM7UUFDWixNQUFNQyxXQUFXQyx5QkFBYyxFQUN6QkgsV0FBVyxJQUFJLENBQUNJLGlCQUFpQixDQUFDRjtRQUV4QyxPQUFPRjtJQUNUO0lBRUFKLGtCQUFrQjtRQUNoQixNQUFNTSxXQUFXRyw2QkFBa0IsRUFDN0JWLGVBQWUsSUFBSSxDQUFDUyxpQkFBaUIsQ0FBQ0Y7UUFFNUMsT0FBT1A7SUFDVDtJQUVBLE9BQU9XLDJDQUEyQ0osUUFBUSxFQUFFSyxVQUFVLEVBQUVDLE9BQU8sRUFBRUMsVUFBVSxFQUFFO1FBQUUsT0FBT2hCLG9CQUFlLENBQUNhLDBDQUEwQyxDQUFDZCx5QkFBeUJVLFVBQVVLLFlBQVlDLFNBQVNDO0lBQWE7QUFDeE8ifQ==