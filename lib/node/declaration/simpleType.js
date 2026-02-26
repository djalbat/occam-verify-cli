"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SimpleTypeDeclarationNode;
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
class SimpleTypeDeclarationNode extends _declaration.default {
    isProvisional() {
        let provisional = false;
        this.someChildNode((childNode)=>{
            const childNodeTerminalNode = childNode.isTerminalNode();
            if (childNodeTerminalNode) {
                const terminalNode = childNode, content = terminalNode.getContent(), contentProvisional = content === _constants.PROVISIONAL;
                if (contentProvisional) {
                    provisional = true;
                    return true;
                }
            }
        });
        return provisional;
    }
    getTypePrefixName() {
        const typeNode = this.getTypeNode(), typePrefixName = typeNode.getTypePrefixName();
        return typePrefixName;
    }
    getSuperTypeNodes() {
        let superTypeNodes = [];
        const typesNode = this.getTypesNode();
        if (typesNode !== null) {
            const typeNodes = typesNode.getTypeNodes();
            superTypeNodes = typeNodes; ///
        }
        return superTypeNodes;
    }
    getNominalTypeName() {
        const typeNode = this.getTypeNode(), nominalTypeName = typeNode.getNominalTypeName();
        return nominalTypeName;
    }
    getTypeName() {
        let typeName = null;
        const typeNode = this.getTypeNode();
        if (typeNode !== null) {
            typeName = typeNode.getTypeName();
        }
        return typeName;
    }
    getTypeNode() {
        const ruleName = _ruleNames.TYPE_RULE_NAME, typeNode = this.getNodeByRuleName(ruleName);
        return typeNode;
    }
    getTypesNode() {
        const ruleName = _ruleNames.TYPES_RULE_NAME, typesNode = this.getNodeByRuleName(ruleName);
        return typesNode;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _declaration.default.fromRuleNameChildNodesOpacityAndPrecedence(SimpleTypeDeclarationNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL3NpbXBsZVR5cGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBEZWNsYXJhdGlvbk5vZGUgZnJvbSBcIi4uLy4uL25vZGUvZGVjbGFyYXRpb25cIjtcblxuaW1wb3J0IHsgUFJPVklTSU9OQUwgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBUWVBFX1JVTEVfTkFNRSwgVFlQRVNfUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW1wbGVUeXBlRGVjbGFyYXRpb25Ob2RlIGV4dGVuZHMgRGVjbGFyYXRpb25Ob2RlIHtcbiAgaXNQcm92aXNpb25hbCgpIHtcbiAgICBsZXQgcHJvdmlzaW9uYWwgPSBmYWxzZTtcblxuICAgIHRoaXMuc29tZUNoaWxkTm9kZSgoY2hpbGROb2RlKSA9PiB7XG4gICAgICBjb25zdCBjaGlsZE5vZGVUZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICAgICAgaWYgKGNoaWxkTm9kZVRlcm1pbmFsTm9kZSkge1xuICAgICAgICBjb25zdCB0ZXJtaW5hbE5vZGUgPSBjaGlsZE5vZGUsXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSB0ZXJtaW5hbE5vZGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgICBjb250ZW50UHJvdmlzaW9uYWwgPSAoY29udGVudCA9PT0gUFJPVklTSU9OQUwpO1xuXG4gICAgICAgIGlmIChjb250ZW50UHJvdmlzaW9uYWwpIHtcbiAgICAgICAgICBwcm92aXNpb25hbCA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb3Zpc2lvbmFsO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeE5hbWUoKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0aGlzLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgdHlwZVByZWZpeE5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlUHJlZml4TmFtZSgpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhOYW1lO1xuICB9XG5cbiAgZ2V0U3VwZXJUeXBlTm9kZXMoKSB7XG4gICAgbGV0IHN1cGVyVHlwZU5vZGVzID0gW107XG5cbiAgICBjb25zdCB0eXBlc05vZGUgPSB0aGlzLmdldFR5cGVzTm9kZSgpO1xuXG4gICAgaWYgKHR5cGVzTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZU5vZGVzID0gdHlwZXNOb2RlLmdldFR5cGVOb2RlcygpO1xuXG4gICAgICBzdXBlclR5cGVOb2RlcyA9IHR5cGVOb2RlczsgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cGVyVHlwZU5vZGVzO1xuICB9XG5cbiAgZ2V0Tm9taW5hbFR5cGVOYW1lKCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdGhpcy5nZXRUeXBlTm9kZSgpLFxuICAgICAgICAgIG5vbWluYWxUeXBlTmFtZSA9IHR5cGVOb2RlLmdldE5vbWluYWxUeXBlTmFtZSgpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxUeXBlTmFtZTtcbiAgfVxuXG4gIGdldFR5cGVOYW1lKCkge1xuICAgIGxldCB0eXBlTmFtZSA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlTm9kZSA9IHRoaXMuZ2V0VHlwZU5vZGUoKTtcblxuICAgIGlmICh0eXBlTm9kZSAhPT0gbnVsbCkge1xuICAgICAgdHlwZU5hbWUgPSB0eXBlTm9kZS5nZXRUeXBlTmFtZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlTmFtZTtcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVFlQRV9SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVzTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRZUEVTX1JVTEVfTkFNRSxcbiAgICAgICAgICB0eXBlc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlc05vZGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBEZWNsYXJhdGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKFNpbXBsZVR5cGVEZWNsYXJhdGlvbk5vZGUsIHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKTsgfVxufVxuXG4iXSwibmFtZXMiOlsiU2ltcGxlVHlwZURlY2xhcmF0aW9uTm9kZSIsIkRlY2xhcmF0aW9uTm9kZSIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbCIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsIiwiUFJPVklTSU9OQUwiLCJnZXRUeXBlUHJlZml4TmFtZSIsInR5cGVOb2RlIiwiZ2V0VHlwZU5vZGUiLCJ0eXBlUHJlZml4TmFtZSIsImdldFN1cGVyVHlwZU5vZGVzIiwic3VwZXJUeXBlTm9kZXMiLCJ0eXBlc05vZGUiLCJnZXRUeXBlc05vZGUiLCJ0eXBlTm9kZXMiLCJnZXRUeXBlTm9kZXMiLCJnZXROb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJnZXRUeXBlTmFtZSIsInR5cGVOYW1lIiwicnVsZU5hbWUiLCJUWVBFX1JVTEVfTkFNRSIsImdldE5vZGVCeVJ1bGVOYW1lIiwiVFlQRVNfUlVMRV9OQU1FIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O29FQUxPOzJCQUVBOzJCQUNvQjs7Ozs7O0FBRWpDLE1BQU1BLGtDQUFrQ0Msb0JBQWU7SUFDcEVDLGdCQUFnQjtRQUNkLElBQUlDLGNBQWM7UUFFbEIsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQ0M7WUFDbEIsTUFBTUMsd0JBQXdCRCxVQUFVRSxjQUFjO1lBRXRELElBQUlELHVCQUF1QjtnQkFDekIsTUFBTUUsZUFBZUgsV0FDZkksVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MscUJBQXNCRixZQUFZRyxzQkFBVztnQkFFbkQsSUFBSUQsb0JBQW9CO29CQUN0QlIsY0FBYztvQkFFZCxPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQVUsb0JBQW9CO1FBQ2xCLE1BQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxpQkFBaUJGLFNBQVNELGlCQUFpQjtRQUVqRCxPQUFPRztJQUNUO0lBRUFDLG9CQUFvQjtRQUNsQixJQUFJQyxpQkFBaUIsRUFBRTtRQUV2QixNQUFNQyxZQUFZLElBQUksQ0FBQ0MsWUFBWTtRQUVuQyxJQUFJRCxjQUFjLE1BQU07WUFDdEIsTUFBTUUsWUFBWUYsVUFBVUcsWUFBWTtZQUV4Q0osaUJBQWlCRyxXQUFXLEdBQUc7UUFDakM7UUFFQSxPQUFPSDtJQUNUO0lBRUFLLHFCQUFxQjtRQUNuQixNQUFNVCxXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQlMsa0JBQWtCVixTQUFTUyxrQkFBa0I7UUFFbkQsT0FBT0M7SUFDVDtJQUVBQyxjQUFjO1FBQ1osSUFBSUMsV0FBVztRQUVmLE1BQU1aLFdBQVcsSUFBSSxDQUFDQyxXQUFXO1FBRWpDLElBQUlELGFBQWEsTUFBTTtZQUNyQlksV0FBV1osU0FBU1csV0FBVztRQUNqQztRQUVBLE9BQU9DO0lBQ1Q7SUFFQVgsY0FBYztRQUNaLE1BQU1ZLFdBQVdDLHlCQUFjLEVBQ3pCZCxXQUFXLElBQUksQ0FBQ2UsaUJBQWlCLENBQUNGO1FBRXhDLE9BQU9iO0lBQ1Q7SUFFQU0sZUFBZTtRQUNiLE1BQU1PLFdBQVdHLDBCQUFlLEVBQzFCWCxZQUFZLElBQUksQ0FBQ1UsaUJBQWlCLENBQUNGO1FBRXpDLE9BQU9SO0lBQ1Q7SUFFQSxPQUFPWSwyQ0FBMkNKLFFBQVEsRUFBRUssVUFBVSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRTtRQUFFLE9BQU9qQyxvQkFBZSxDQUFDOEIsMENBQTBDLENBQUMvQiwyQkFBMkIyQixVQUFVSyxZQUFZQyxTQUFTQztJQUFhO0FBQzFPIn0=