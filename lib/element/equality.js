"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _occamlanguages = require("occam-languages");
const _elements = require("../elements");
const _context = require("../utilities/context");
const _equate = require("../process/equate");
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
const _assign = require("../process/assign");
const _default = (0, _elements.define)(class Equality extends _occamlanguages.Element {
    constructor(context, string, node, lineIndex, leftTerm, rightTerm){
        super(context, string, node, lineIndex);
        this.leftTerm = leftTerm;
        this.rightTerm = rightTerm;
    }
    getLeftTerm() {
        return this.leftTerm;
    }
    getRightTerm() {
        return this.rightTerm;
    }
    getEqualityNode() {
        const node = this.getNode(), equalityNde = node; ///
        return equalityNde;
    }
    getLeftTermNode() {
        const leftTermNode = this.leftTerm.getNode();
        return leftTermNode;
    }
    getRightTermNode() {
        const rightTermNode = this.rightTerm.getNode();
        return rightTermNode;
    }
    getType() {
        let type;
        const leftTermType = this.leftTerm.getType(), rightTermType = this.rightTerm.getType(), leftTermTypeEqualToOrSubTypeOfRightTermType = leftTermType.isEqualToOrSubTypeOf(rightTermType), rightTermTypeEqualToOrSubTypeOfLeftTermType = rightTermType.isEqualToOrSubTypeOf(leftTermType);
        if (leftTermTypeEqualToOrSubTypeOfRightTermType) {
            type = leftTermType; ///
        }
        if (rightTermTypeEqualToOrSubTypeOfLeftTermType) {
            type = rightTermType; ///
        }
        return type;
    }
    getTerms() {
        const terms = [
            this.leftTerm,
            this.rightTerm
        ];
        return terms;
    }
    matchEqualityNode(equalityNode) {
        const node = equalityNode, nodeMatches = this.matchNode(node), equalityNodeMatches = nodeMatches; ///
        return equalityNodeMatches;
    }
    isReflexive() {
        const leftTermString = this.leftTerm.getString(), rightTermString = this.rightTerm.getString(), reflexive = leftTermString === rightTermString;
        return reflexive;
    }
    isEqualTo(equality) {
        const equalityNode = equality.getNode(), equalityNodeMatches = this.matchEqualityNode(equalityNode), equalTo = equalityNodeMatches; ///
        return equalTo;
    }
    isEqual(context) {
        let equal = false;
        const termsEquate = (0, _equate.equateTerms)(this.leftTerm, this.rightTerm, context);
        if (termsEquate) {
            equal = true;
        }
        return equal;
    }
    findValidEquality(context) {
        const equalityNode = this.getEqualityNode(), equality = context.findEqualityByEqualityNode(equalityNode), validEquality = equality; ///
        return validEquality;
    }
    validate(context) {
        let equality = null;
        const equalityString = this.getString(); ///
        context.trace(`Validating the '${equalityString}' equality...`);
        const validEquality = this.findValidEquality(context);
        if (validEquality !== null) {
            equality = validEquality; ///
            context.debug(`...the '${equalityString}' equality is already valid.`);
        } else {
            let validates = false;
            const termsValidate = this.validateTerms(context);
            if (termsValidate) {
                const stated = context.isStated();
                let validatesWhenStated = false, validatesWhenDerived = false;
                if (stated) {
                    validatesWhenStated = this.validateWhenStated(context);
                } else {
                    validatesWhenDerived = this.validateWhenDerived(context);
                }
                if (validatesWhenStated || validatesWhenDerived) {
                    validates = true;
                }
            }
            if (validates) {
                equality = this; ///
                this.assign(context);
                context.addEquality(equality);
                context.debug(`...validated the '${equalityString}' equality.`);
            }
        }
        return equality;
    }
    validateTerms(context) {
        let termsValidate = false;
        const equalityString = this.getString(); ///
        context.trace(`Validating the '${equalityString}' equality's terms...`);
        let leftTerm, rightTerm;
        leftTerm = this.leftTerm.validate(context, (leftTerm)=>{
            let validatesForwards = false;
            rightTerm = this.rightTerm.validate(context, (rightTerm)=>{
                let validatesForwards = false;
                const leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
                if (leftTermTypeComparableToRightTermType) {
                    validatesForwards = true;
                }
                return validatesForwards;
            });
            if (rightTerm !== null) {
                validatesForwards = true;
            }
            return validatesForwards;
        });
        if (leftTerm !== null) {
            this.leftTerm = leftTerm;
            this.rightTerm = rightTerm;
            termsValidate = true;
        }
        if (termsValidate) {
            context.debug(`...validated the '${equalityString}' equality's terms.`);
        }
        return termsValidate;
    }
    validateWhenStated(context) {
        let validatesWhenStated;
        const equalityString = this.getString(); ///
        context.trace(`Validating the '${equalityString}' stated equality...`);
        validatesWhenStated = true;
        if (validatesWhenStated) {
            context.debug(`...validated the '${equalityString}' stated equality.`);
        }
        return validatesWhenStated;
    }
    validateWhenDerived(context) {
        let validatesWhenDerived;
        const equalityString = this.getString(); ///
        context.trace(`Validating the '${equalityString}' derived equality...`);
        validatesWhenDerived = true; ///
        if (validatesWhenDerived) {
            context.debug(`...validated the '${equalityString}' derived equality.`);
        }
        return validatesWhenDerived;
    }
    assign(context) {
        const equality = this, equalityAssignment = (0, _assign.equalityAssignmentFromEquality)(equality, context), leftVariableAssignment = (0, _assign.leftVariableAssignmentFromEquality)(equality, context), rightVariableAssignment = (0, _assign.rightVariableAssignmentFromEquality)(equality, context);
        context.addAssignment(equalityAssignment);
        context.addAssignment(leftVariableAssignment);
        context.addAssignment(rightVariableAssignment);
    }
    static name = "Equality";
    toJSON() {
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, equalityNode = (0, _instantiate.instantiateEquality)(string, context), node = equalityNode, leftTerm = leftTermFromEqualityNode(equalityNode, context), rightTerm = rightTermFromEqualityNode(equalityNode, context);
            context = null;
            const equality = new Equality(context, string, node, lineIndex, leftTerm, rightTerm);
            return equality;
        }, context);
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), equality = (0, _element.equalityFromStatementNode)(statementNode, context);
        return equality;
    }
});
function leftTermFromEqualityNode(equalityNode, context) {
    const leftTermNode = equalityNode.getLeftTermNode(), leftTerm = context.findTermByTermNode(leftTermNode);
    return leftTerm;
}
function rightTermFromEqualityNode(equalityNode, context) {
    const rightTermNode = equalityNode.getLeftTermNode(), rightTerm = context.findTermByTermNode(rightTermNode);
    return rightTerm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBlcXVhdGVUZXJtcyB9IGZyb20gXCIuLi9wcm9jZXNzL2VxdWF0ZVwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVFcXVhbGl0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlOZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eU5kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YocmlnaHRUZXJtVHlwZSksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSA9IHJpZ2h0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIGNvbnN0IHRlcm1zID0gW1xuICAgICAgdGhpcy5sZWZ0VGVybSxcbiAgICAgIHRoaXMucmlnaHRUZXJtXG4gICAgXTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIG1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBlcXVhbGl0eU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSB0aGlzLmxlZnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IHRoaXMucmlnaHRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmxleGl2ZSA9IChsZWZ0VGVybVN0cmluZyA9PT0gcmlnaHRUZXJtU3RyaW5nKTtcblxuICAgIHJldHVybiByZWZsZXhpdmU7XG4gIH1cblxuICBpc0VxdWFsVG8oZXF1YWxpdHkpIHtcbiAgICBjb25zdCBlcXVhbGl0eU5vZGUgPSBlcXVhbGl0eS5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gZXF1YWxpdHlOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0VxdWFsKGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1zRXF1YXRlID0gZXF1YXRlVGVybXModGhpcy5sZWZ0VGVybSwgdGhpcy5yaWdodFRlcm0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1zRXF1YXRlKSB7XG4gICAgICBlcXVhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgZmluZFZhbGlkRXF1YWxpdHkoY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHRoaXMuZ2V0RXF1YWxpdHlOb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBjb250ZXh0LmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdmFsaWRFcXVhbGl0eSA9IGVxdWFsaXR5OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRFcXVhbGl0eTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkRXF1YWxpdHkgPSB0aGlzLmZpbmRWYWxpZEVxdWFsaXR5KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkRXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIGVxdWFsaXR5ID0gdmFsaWRFcXVhbGl0eTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybXNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVUZXJtcyhjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1zVmFsaWRhdGUpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBlcXVhbGl0eSA9IHRoaXM7ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtcyhjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmFsaWRhdGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGxldCBsZWZ0VGVybSxcbiAgICAgICAgcmlnaHRUZXJtO1xuXG4gICAgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChsZWZ0VGVybSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgICByaWdodFRlcm0gPSB0aGlzLnJpZ2h0VGVybS52YWxpZGF0ZShjb250ZXh0LCAocmlnaHRUZXJtKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSBsZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmlnaHRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICBpZiAobGVmdFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcblxuICAgICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG5cbiAgICAgIHRlcm1zVmFsaWRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7ICAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBlcXVhbGl0eUFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQgPSBsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSxcbiAgICAgICAgICByaWdodFZhcmlhYmxlQXNzaWdubWVudCA9IHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChlcXVhbGl0eUFzc2lnbm1lbnQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVhbGl0eVwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgZXF1YWxpdHlOb2RlID0gaW5zdGFudGlhdGVFcXVhbGl0eShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICAgICAgcmV0dXJuIGVxdWFsaXR5O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59KTtcblxuZnVuY3Rpb24gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUobGVmdFRlcm1Ob2RlKTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmZ1bmN0aW9uIHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIHJpZ2h0VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXF1YWxpdHkiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJsZWZ0VGVybSIsInJpZ2h0VGVybSIsImdldExlZnRUZXJtIiwiZ2V0UmlnaHRUZXJtIiwiZ2V0RXF1YWxpdHlOb2RlIiwiZ2V0Tm9kZSIsImVxdWFsaXR5TmRlIiwiZ2V0TGVmdFRlcm1Ob2RlIiwibGVmdFRlcm1Ob2RlIiwiZ2V0UmlnaHRUZXJtTm9kZSIsInJpZ2h0VGVybU5vZGUiLCJnZXRUeXBlIiwidHlwZSIsImxlZnRUZXJtVHlwZSIsInJpZ2h0VGVybVR5cGUiLCJsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvT3JTdWJUeXBlT2YiLCJyaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsIm1hdGNoRXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJlcXVhbGl0eU5vZGVNYXRjaGVzIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybVN0cmluZyIsImdldFN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsInJlZmxleGl2ZSIsImlzRXF1YWxUbyIsImVxdWFsaXR5IiwiZXF1YWxUbyIsImlzRXF1YWwiLCJlcXVhbCIsInRlcm1zRXF1YXRlIiwiZXF1YXRlVGVybXMiLCJmaW5kVmFsaWRFcXVhbGl0eSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwidmFsaWRFcXVhbGl0eSIsInZhbGlkYXRlIiwiZXF1YWxpdHlTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwidGVybXNWYWxpZGF0ZSIsInZhbGlkYXRlVGVybXMiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJhZGRFcXVhbGl0eSIsInZhbGlkYXRlc0ZvcndhcmRzIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwibGVmdFZhcmlhYmxlQXNzaWdubWVudCIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudCIsInJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwiYWRkQXNzaWdubWVudCIsIm5hbWUiLCJ0b0pTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRXF1YWxpdHkiLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7eUJBQ0s7d0JBQ0E7NkJBQ1E7eUJBQ007d0JBQzhFO01BRXhILFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxDQUFFO1FBQ2pFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxR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