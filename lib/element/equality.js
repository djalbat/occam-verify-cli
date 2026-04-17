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
const _equate = require("../process/equate");
const _context = require("../utilities/context");
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
        let validates = false;
        const validEquality = this.findValidEquality(context);
        if (validEquality !== null) {
            validates = true;
            equality = validEquality; ///
            context.debug(`...the '${equalityString}' equality is already valid.`);
        } else {
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
            }
        }
        if (validates) {
            context.debug(`...validated the '${equalityString}' equality.`);
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
                const leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType(), leftTermTypeEqualToSubTypeOrSuperTypeOfRightTermType = leftTermType.isEqualToSubTypeOrSuperTypeOf(rightTermType);
                if (leftTermTypeEqualToSubTypeOrSuperTypeOfRightTermType) {
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
    toJSON() {
        const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static name = "Equality";
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVxdWF0ZVRlcm1zIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVFcXVhbGl0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlOZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eU5kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YocmlnaHRUZXJtVHlwZSksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSA9IHJpZ2h0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIGNvbnN0IHRlcm1zID0gW1xuICAgICAgdGhpcy5sZWZ0VGVybSxcbiAgICAgIHRoaXMucmlnaHRUZXJtXG4gICAgXTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIG1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBlcXVhbGl0eU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSB0aGlzLmxlZnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IHRoaXMucmlnaHRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmxleGl2ZSA9IChsZWZ0VGVybVN0cmluZyA9PT0gcmlnaHRUZXJtU3RyaW5nKTtcblxuICAgIHJldHVybiByZWZsZXhpdmU7XG4gIH1cblxuICBpc0VxdWFsVG8oZXF1YWxpdHkpIHtcbiAgICBjb25zdCBlcXVhbGl0eU5vZGUgPSBlcXVhbGl0eS5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gZXF1YWxpdHlOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0VxdWFsKGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1zRXF1YXRlID0gZXF1YXRlVGVybXModGhpcy5sZWZ0VGVybSwgdGhpcy5yaWdodFRlcm0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1zRXF1YXRlKSB7XG4gICAgICBlcXVhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgZmluZFZhbGlkRXF1YWxpdHkoY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHRoaXMuZ2V0RXF1YWxpdHlOb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBjb250ZXh0LmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdmFsaWRFcXVhbGl0eSA9IGVxdWFsaXR5OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRFcXVhbGl0eTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkRXF1YWxpdHkgPSB0aGlzLmZpbmRWYWxpZEVxdWFsaXR5KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkRXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGVxdWFsaXR5ID0gdmFsaWRFcXVhbGl0eTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgZXF1YWxpdHkgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLi4uYCk7XG5cbiAgICBsZXQgbGVmdFRlcm0sXG4gICAgICAgIHJpZ2h0VGVybTtcblxuICAgIGxlZnRUZXJtID0gdGhpcy5sZWZ0VGVybS52YWxpZGF0ZShjb250ZXh0LCAobGVmdFRlcm0pID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgICAgcmlnaHRUZXJtID0gdGhpcy5yaWdodFRlcm0udmFsaWRhdGUoY29udGV4dCwgKHJpZ2h0VGVybSkgPT4ge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgbGVmdFRlcm1UeXBlID0gbGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSByaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgICBpZiAobGVmdFRlcm1UeXBlRXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJpZ2h0VGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgaWYgKGxlZnRUZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG5cbiAgICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuXG4gICAgICB0ZXJtc1ZhbGlkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHlBc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSxcbiAgICAgICAgICBsZWZ0VmFyaWFibGVBc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoZXF1YWxpdHlBc3NpZ25tZW50KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChsZWZ0VmFyaWFibGVBc3NpZ25tZW50KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChyaWdodFZhcmlhYmxlQXNzaWdubWVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldEJyZWFrUG9pbnQoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkVxdWFsaXR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICBlcXVhbGl0eU5vZGUgPSBpbnN0YW50aWF0ZUVxdWFsaXR5KHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gZXF1YWxpdHlOb2RlLCAgLy8vXG4gICAgICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICByZXR1cm4gZXF1YWxpdHk7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShsZWZ0VGVybU5vZGUpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUocmlnaHRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFcXVhbGl0eSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRFcXVhbGl0eU5vZGUiLCJnZXROb2RlIiwiZXF1YWxpdHlOZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJnZXRUZXJtcyIsInRlcm1zIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImVxdWFsaXR5Tm9kZU1hdGNoZXMiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwicmVmbGV4aXZlIiwiaXNFcXVhbFRvIiwiZXF1YWxpdHkiLCJlcXVhbFRvIiwiaXNFcXVhbCIsImVxdWFsIiwidGVybXNFcXVhdGUiLCJlcXVhdGVUZXJtcyIsImZpbmRWYWxpZEVxdWFsaXR5IiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJ2YWxpZEVxdWFsaXR5IiwidmFsaWRhdGUiLCJlcXVhbGl0eVN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwiZGVidWciLCJ0ZXJtc1ZhbGlkYXRlIiwidmFsaWRhdGVUZXJtcyIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2lnbiIsImFkZEVxdWFsaXR5IiwidmFsaWRhdGVzRm9yd2FyZHMiLCJsZWZ0VGVybVR5cGVFcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2YiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJsZWZ0VmFyaWFibGVBc3NpZ25tZW50IiwibGVmdFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSIsInJpZ2h0VmFyaWFibGVBc3NpZ25tZW50IiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJhZGRBc3NpZ25tZW50IiwidG9KU09OIiwiZ2V0QnJlYWtQb2ludCIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRXF1YWxpdHkiLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7d0JBQ0s7eUJBQ0E7NkJBQ1E7eUJBQ007d0JBQzhFO01BRXhILFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJ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