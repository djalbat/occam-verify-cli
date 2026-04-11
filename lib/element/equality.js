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
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVxdWF0ZVRlcm1zIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVFcXVhbGl0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbGVmdFRlcm0sIHJpZ2h0VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlOZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eU5kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YocmlnaHRUZXJtVHlwZSksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSA9IHJpZ2h0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIGNvbnN0IHRlcm1zID0gW1xuICAgICAgdGhpcy5sZWZ0VGVybSxcbiAgICAgIHRoaXMucmlnaHRUZXJtXG4gICAgXTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIG1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBlcXVhbGl0eU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSB0aGlzLmxlZnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IHRoaXMucmlnaHRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmxleGl2ZSA9IChsZWZ0VGVybVN0cmluZyA9PT0gcmlnaHRUZXJtU3RyaW5nKTtcblxuICAgIHJldHVybiByZWZsZXhpdmU7XG4gIH1cblxuICBpc0VxdWFsVG8oZXF1YWxpdHkpIHtcbiAgICBjb25zdCBlcXVhbGl0eU5vZGUgPSBlcXVhbGl0eS5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gZXF1YWxpdHlOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0VxdWFsKGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1zRXF1YXRlID0gZXF1YXRlVGVybXModGhpcy5sZWZ0VGVybSwgdGhpcy5yaWdodFRlcm0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1zRXF1YXRlKSB7XG4gICAgICBlcXVhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgZmluZFZhbGlkRXF1YWxpdHkoY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHRoaXMuZ2V0RXF1YWxpdHlOb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBjb250ZXh0LmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdmFsaWRFcXVhbGl0eSA9IGVxdWFsaXR5OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRFcXVhbGl0eTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWxpdHkgPSBudWxsO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkRXF1YWxpdHkgPSB0aGlzLmZpbmRWYWxpZEVxdWFsaXR5KGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkRXF1YWxpdHkgIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGVxdWFsaXR5ID0gdmFsaWRFcXVhbGl0eTsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgZXF1YWxpdHkgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybXMoY29udGV4dCkge1xuICAgIGxldCB0ZXJtc1ZhbGlkYXRlID0gZmFsc2U7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLi4uYCk7XG5cbiAgICBsZXQgbGVmdFRlcm0sXG4gICAgICAgIHJpZ2h0VGVybTtcblxuICAgIGxlZnRUZXJtID0gdGhpcy5sZWZ0VGVybS52YWxpZGF0ZShjb250ZXh0LCAobGVmdFRlcm0pID0+IHtcbiAgICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgICAgcmlnaHRUZXJtID0gdGhpcy5yaWdodFRlcm0udmFsaWRhdGUoY29udGV4dCwgKHJpZ2h0VGVybSkgPT4ge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICAgICAgY29uc3QgbGVmdFRlcm1UeXBlID0gbGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSByaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2YocmlnaHRUZXJtVHlwZSk7XG5cbiAgICAgICAgICBpZiAobGVmdFRlcm1UeXBlRXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSkge1xuICAgICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJpZ2h0VGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgaWYgKGxlZnRUZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmxlZnRUZXJtID0gbGVmdFRlcm07XG5cbiAgICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuXG4gICAgICB0ZXJtc1ZhbGlkYXRlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybXNWYWxpZGF0ZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1zVmFsaWRhdGU7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgc3RhdGVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHlBc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSxcbiAgICAgICAgICBsZWZ0VmFyaWFibGVBc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoZXF1YWxpdHlBc3NpZ25tZW50KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChsZWZ0VmFyaWFibGVBc3NpZ25tZW50KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChyaWdodFZhcmlhYmxlQXNzaWdubWVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXF1YWxpdHlcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgIGVxdWFsaXR5Tm9kZSA9IGluc3RhbnRpYXRlRXF1YWxpdHkoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgICAgIHJldHVybiBlcXVhbGl0eTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5mdW5jdGlvbiByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShyaWdodFRlcm1Ob2RlKTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkVxdWFsaXR5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImdldEVxdWFsaXR5Tm9kZSIsImdldE5vZGUiLCJlcXVhbGl0eU5kZSIsImdldExlZnRUZXJtTm9kZSIsImxlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwicmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSIsImdldFRlcm1zIiwidGVybXMiLCJtYXRjaEVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZXF1YWxpdHlOb2RlTWF0Y2hlcyIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJyaWdodFRlcm1TdHJpbmciLCJyZWZsZXhpdmUiLCJpc0VxdWFsVG8iLCJlcXVhbGl0eSIsImVxdWFsVG8iLCJpc0VxdWFsIiwiZXF1YWwiLCJ0ZXJtc0VxdWF0ZSIsImVxdWF0ZVRlcm1zIiwiZmluZFZhbGlkRXF1YWxpdHkiLCJmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZSIsInZhbGlkRXF1YWxpdHkiLCJ2YWxpZGF0ZSIsImVxdWFsaXR5U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJkZWJ1ZyIsInRlcm1zVmFsaWRhdGUiLCJ2YWxpZGF0ZVRlcm1zIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzaWduIiwiYWRkRXF1YWxpdHkiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsImxlZnRUZXJtVHlwZUVxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZiIsImVxdWFsaXR5QXNzaWdubWVudCIsImVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eSIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSIsImFkZEFzc2lnbm1lbnQiLCJ0b0pTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUVxdWFsaXR5IiwibGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwicmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCOzBCQUVEO3dCQUNLO3lCQUNBOzZCQUNRO3lCQUNNO3dCQUM4RTtNQUV4SCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFD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