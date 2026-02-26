"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ComplexTypeDeclarationNode;
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
class ComplexTypeDeclarationNode extends _declaration.default {
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
    getTypeName() {
        const typeNode = this.getTypeNode(), typeName = typeNode.getTypeName();
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
    getSuperTypeNodes() {
        let superTypeNodes = [];
        const typesNode = this.getTypesNode();
        if (typesNode !== null) {
            const typeNodes = typesNode.getTypeNodes();
            superTypeNodes = typeNodes; ///
        }
        return superTypeNodes;
    }
    getTypePrefixName() {
        const typeNode = this.getTypeNode(), typePrefixName = typeNode.getTypePrefixName();
        return typePrefixName;
    }
    getNominalTypeName() {
        const typeNode = this.getTypeNode(), nominalTypeName = typeNode.getNominalTypeName();
        return nominalTypeName;
    }
    getPropertyDeclarationNodes() {
        const ruleName = _ruleNames.PROPERTY_DECLARATION_RULE_NAME, propertyDeclarationNodes = this.getNodesByRuleName(ruleName);
        return propertyDeclarationNodes;
    }
    static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) {
        return _declaration.default.fromRuleNameChildNodesOpacityAndPrecedence(ComplexTypeDeclarationNode, ruleName, childNodes, opacity, precedence);
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL2RlY2xhcmF0aW9uL2NvbXBsZXhUeXBlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgRGVjbGFyYXRpb25Ob2RlIGZyb20gXCIuLi8uLi9ub2RlL2RlY2xhcmF0aW9uXCI7XG5cbmltcG9ydCB7IFBST1ZJU0lPTkFMIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgVFlQRV9SVUxFX05BTUUsIFRZUEVTX1JVTEVfTkFNRSwgUFJPUEVSVFlfREVDTEFSQVRJT05fUlVMRV9OQU1FIH0gZnJvbSBcIi4uLy4uL3J1bGVOYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSBleHRlbmRzIERlY2xhcmF0aW9uTm9kZSB7XG4gIGlzUHJvdmlzaW9uYWwoKSB7XG4gICAgbGV0IHByb3Zpc2lvbmFsID0gZmFsc2U7XG5cbiAgICB0aGlzLnNvbWVDaGlsZE5vZGUoKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgY29uc3QgY2hpbGROb2RlVGVybWluYWxOb2RlID0gY2hpbGROb2RlLmlzVGVybWluYWxOb2RlKCk7XG5cbiAgICAgIGlmIChjaGlsZE5vZGVUZXJtaW5hbE5vZGUpIHtcbiAgICAgICAgY29uc3QgdGVybWluYWxOb2RlID0gY2hpbGROb2RlLFxuICAgICAgICAgICAgICBjb250ZW50ID0gdGVybWluYWxOb2RlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgICAgY29udGVudFByb3Zpc2lvbmFsID0gKGNvbnRlbnQgPT09IFBST1ZJU0lPTkFMKTtcblxuICAgICAgICBpZiAoY29udGVudFByb3Zpc2lvbmFsKSB7XG4gICAgICAgICAgcHJvdmlzaW9uYWwgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm92aXNpb25hbDtcbiAgfVxuXG4gIGdldFR5cGVOYW1lKCkge1xuICAgIGNvbnN0IHR5cGVOb2RlID0gdGhpcy5nZXRUeXBlTm9kZSgpLFxuICAgICAgICAgIHR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0VHlwZU5hbWUoKTtcblxuICAgIHJldHVybiB0eXBlTmFtZTtcbiAgfVxuXG4gIGdldFR5cGVOb2RlKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gVFlQRV9SVUxFX05BTUUsXG4gICAgICAgICAgdHlwZU5vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlTm9kZTtcbiAgfVxuXG4gIGdldFR5cGVzTm9kZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IFRZUEVTX1JVTEVfTkFNRSxcbiAgICAgICAgICB0eXBlc05vZGUgPSB0aGlzLmdldE5vZGVCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiB0eXBlc05vZGU7XG4gIH1cblxuICBnZXRTdXBlclR5cGVOb2RlcygpIHtcbiAgICBsZXQgc3VwZXJUeXBlTm9kZXMgPSBbXTtcblxuICAgIGNvbnN0IHR5cGVzTm9kZSA9IHRoaXMuZ2V0VHlwZXNOb2RlKCk7XG5cbiAgICBpZiAodHlwZXNOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0eXBlTm9kZXMgPSB0eXBlc05vZGUuZ2V0VHlwZU5vZGVzKCk7XG5cbiAgICAgIHN1cGVyVHlwZU5vZGVzID0gdHlwZU5vZGVzOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gc3VwZXJUeXBlTm9kZXM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4TmFtZSgpIHtcbiAgICBjb25zdCB0eXBlTm9kZSA9IHRoaXMuZ2V0VHlwZU5vZGUoKSxcbiAgICAgICAgICB0eXBlUHJlZml4TmFtZSA9IHR5cGVOb2RlLmdldFR5cGVQcmVmaXhOYW1lKCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeE5hbWU7XG4gIH1cblxuICBnZXROb21pbmFsVHlwZU5hbWUoKSB7XG4gICAgY29uc3QgdHlwZU5vZGUgPSB0aGlzLmdldFR5cGVOb2RlKCksXG4gICAgICAgICAgbm9taW5hbFR5cGVOYW1lID0gdHlwZU5vZGUuZ2V0Tm9taW5hbFR5cGVOYW1lKCk7XG5cbiAgICByZXR1cm4gbm9taW5hbFR5cGVOYW1lO1xuICB9XG5cbiAgZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lID0gUFJPUEVSVFlfREVDTEFSQVRJT05fUlVMRV9OQU1FLFxuICAgICAgICAgIHByb3BlcnR5RGVjbGFyYXRpb25Ob2RlcyA9IHRoaXMuZ2V0Tm9kZXNCeVJ1bGVOYW1lKHJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBwcm9wZXJ0eURlY2xhcmF0aW9uTm9kZXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKHJ1bGVOYW1lLCBjaGlsZE5vZGVzLCBvcGFjaXR5LCBwcmVjZWRlbmNlKSB7IHJldHVybiBEZWNsYXJhdGlvbk5vZGUuZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlKENvbXBsZXhUeXBlRGVjbGFyYXRpb25Ob2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcywgb3BhY2l0eSwgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJDb21wbGV4VHlwZURlY2xhcmF0aW9uTm9kZSIsIkRlY2xhcmF0aW9uTm9kZSIsImlzUHJvdmlzaW9uYWwiLCJwcm92aXNpb25hbCIsInNvbWVDaGlsZE5vZGUiLCJjaGlsZE5vZGUiLCJjaGlsZE5vZGVUZXJtaW5hbE5vZGUiLCJpc1Rlcm1pbmFsTm9kZSIsInRlcm1pbmFsTm9kZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwiY29udGVudFByb3Zpc2lvbmFsIiwiUFJPVklTSU9OQUwiLCJnZXRUeXBlTmFtZSIsInR5cGVOb2RlIiwiZ2V0VHlwZU5vZGUiLCJ0eXBlTmFtZSIsInJ1bGVOYW1lIiwiVFlQRV9SVUxFX05BTUUiLCJnZXROb2RlQnlSdWxlTmFtZSIsImdldFR5cGVzTm9kZSIsIlRZUEVTX1JVTEVfTkFNRSIsInR5cGVzTm9kZSIsImdldFN1cGVyVHlwZU5vZGVzIiwic3VwZXJUeXBlTm9kZXMiLCJ0eXBlTm9kZXMiLCJnZXRUeXBlTm9kZXMiLCJnZXRUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwiZ2V0Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwiZ2V0UHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiUFJPUEVSVFlfREVDTEFSQVRJT05fUlVMRV9OQU1FIiwicHJvcGVydHlEZWNsYXJhdGlvbk5vZGVzIiwiZ2V0Tm9kZXNCeVJ1bGVOYW1lIiwiZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc09wYWNpdHlBbmRQcmVjZWRlbmNlIiwiY2hpbGROb2RlcyIsIm9wYWNpdHkiLCJwcmVjZWRlbmNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFPQTs7O2VBQXFCQTs7O29FQUxPOzJCQUVBOzJCQUNvRDs7Ozs7O0FBRWpFLE1BQU1BLG1DQUFtQ0Msb0JBQWU7SUFDckVDLGdCQUFnQjtRQUNkLElBQUlDLGNBQWM7UUFFbEIsSUFBSSxDQUFDQyxhQUFhLENBQUMsQ0FBQ0M7WUFDbEIsTUFBTUMsd0JBQXdCRCxVQUFVRSxjQUFjO1lBRXRELElBQUlELHVCQUF1QjtnQkFDekIsTUFBTUUsZUFBZUgsV0FDZkksVUFBVUQsYUFBYUUsVUFBVSxJQUNqQ0MscUJBQXNCRixZQUFZRyxzQkFBVztnQkFFbkQsSUFBSUQsb0JBQW9CO29CQUN0QlIsY0FBYztvQkFFZCxPQUFPO2dCQUNUO1lBQ0Y7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQVUsY0FBYztRQUNaLE1BQU1DLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCQyxXQUFXRixTQUFTRCxXQUFXO1FBRXJDLE9BQU9HO0lBQ1Q7SUFFQUQsY0FBYztRQUNaLE1BQU1FLFdBQVdDLHlCQUFjLEVBQ3pCSixXQUFXLElBQUksQ0FBQ0ssaUJBQWlCLENBQUNGO1FBRXhDLE9BQU9IO0lBQ1Q7SUFFQU0sZUFBZTtRQUNiLE1BQU1ILFdBQVdJLDBCQUFlLEVBQzFCQyxZQUFZLElBQUksQ0FBQ0gsaUJBQWlCLENBQUNGO1FBRXpDLE9BQU9LO0lBQ1Q7SUFFQUMsb0JBQW9CO1FBQ2xCLElBQUlDLGlCQUFpQixFQUFFO1FBRXZCLE1BQU1GLFlBQVksSUFBSSxDQUFDRixZQUFZO1FBRW5DLElBQUlFLGNBQWMsTUFBTTtZQUN0QixNQUFNRyxZQUFZSCxVQUFVSSxZQUFZO1lBRXhDRixpQkFBaUJDLFdBQVcsR0FBRztRQUNqQztRQUVBLE9BQU9EO0lBQ1Q7SUFFQUcsb0JBQW9CO1FBQ2xCLE1BQU1iLFdBQVcsSUFBSSxDQUFDQyxXQUFXLElBQzNCYSxpQkFBaUJkLFNBQVNhLGlCQUFpQjtRQUVqRCxPQUFPQztJQUNUO0lBRUFDLHFCQUFxQjtRQUNuQixNQUFNZixXQUFXLElBQUksQ0FBQ0MsV0FBVyxJQUMzQmUsa0JBQWtCaEIsU0FBU2Usa0JBQWtCO1FBRW5ELE9BQU9DO0lBQ1Q7SUFFQUMsOEJBQThCO1FBQzVCLE1BQU1kLFdBQVdlLHlDQUE4QixFQUN6Q0MsMkJBQTJCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUNqQjtRQUV6RCxPQUFPZ0I7SUFDVDtJQUVBLE9BQU9FLDJDQUEyQ2xCLFFBQVEsRUFBRW1CLFVBQVUsRUFBRUMsT0FBTyxFQUFFQyxVQUFVLEVBQUU7UUFBRSxPQUFPckMsb0JBQWUsQ0FBQ2tDLDBDQUEwQyxDQUFDbkMsNEJBQTRCaUIsVUFBVW1CLFlBQVlDLFNBQVNDO0lBQWE7QUFDM08ifQ==