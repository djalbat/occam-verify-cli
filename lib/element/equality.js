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
const _assign = require("../process/assign");
const _default = (0, _elements.define)(class Equality extends _occamlanguages.Element {
    constructor(context, string, node, leftTerm, rightTerm){
        super(context, string, node);
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
    validate(stated, context) {
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
                this.assign(stated, context);
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
    assign(stated, context) {
        const equality = this, equalityAssignment = (0, _assign.equalityAssignmentFromEquality)(equality, context), leftVariableAssignment = (0, _assign.leftVariableAssignmentFromEquality)(equality, context), rightVariableAssignment = (0, _assign.rightVariableAssignmentFromEquality)(equality, context);
        let assignment;
        assignment = equalityAssignment; ///
        context.addAssignment(assignment);
        if (leftVariableAssignment !== null) {
            assignment = leftVariableAssignment; ///
            context.addAssignment(assignment);
        }
        if (rightVariableAssignment !== null) {
            assignment = rightVariableAssignment; ///
            context.addAssignment(assignment);
        }
    }
    static name = "Equality";
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static fromJSON(json, context) {
        const equality = (0, _context.literally)((context)=>{
            const { string } = json, equalityNode = (0, _instantiate.instantiateEquality)(string, context), node = equalityNode, leftTerm = leftTermFromEqualityNode(equalityNode, context), rightTerm = rightTermFromEqualityNode(equalityNode, context);
            context = null;
            const equality = new Equality(context, string, node, leftTerm, rightTerm);
            return equality;
        }, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgZXF1YXRlVGVybXMgfSBmcm9tIFwiLi4vcHJvY2Vzcy9lcXVhdGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRXF1YWxpdHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5LCBsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5LCByaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1YWxpdHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlOZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eU5kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YocmlnaHRUZXJtVHlwZSksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSA9IHJpZ2h0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIGNvbnN0IHRlcm1zID0gW1xuICAgICAgdGhpcy5sZWZ0VGVybSxcbiAgICAgIHRoaXMucmlnaHRUZXJtXG4gICAgXTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIG1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBlcXVhbGl0eU5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgaXNSZWZsZXhpdmUoKSB7XG4gICAgY29uc3QgbGVmdFRlcm1TdHJpbmcgPSB0aGlzLmxlZnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHJpZ2h0VGVybVN0cmluZyA9IHRoaXMucmlnaHRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHJlZmxleGl2ZSA9IChsZWZ0VGVybVN0cmluZyA9PT0gcmlnaHRUZXJtU3RyaW5nKTtcblxuICAgIHJldHVybiByZWZsZXhpdmU7XG4gIH1cblxuICBpc0VxdWFsVG8oZXF1YWxpdHkpIHtcbiAgICBjb25zdCBlcXVhbGl0eU5vZGUgPSBlcXVhbGl0eS5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gZXF1YWxpdHlOb2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBpc0VxdWFsKGNvbnRleHQpIHtcbiAgICBsZXQgZXF1YWwgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1zRXF1YXRlID0gZXF1YXRlVGVybXModGhpcy5sZWZ0VGVybSwgdGhpcy5yaWdodFRlcm0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRlcm1zRXF1YXRlKSB7XG4gICAgICBlcXVhbCA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsO1xuICB9XG5cbiAgZmluZFZhbGlkRXF1YWxpdHkoY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IHRoaXMuZ2V0RXF1YWxpdHlOb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBjb250ZXh0LmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgdmFsaWRFcXVhbGl0eSA9IGVxdWFsaXR5OyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRFcXVhbGl0eTtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRFcXVhbGl0eSA9IHRoaXMuZmluZFZhbGlkRXF1YWxpdHkoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRFcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgZXF1YWxpdHkgPSB2YWxpZEVxdWFsaXR5OyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtc1ZhbGlkYXRlID0gdGhpcy52YWxpZGF0ZVRlcm1zKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybXNWYWxpZGF0ZSkge1xuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgZXF1YWxpdHkgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgdGhpcy5hc3NpZ24oc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5KTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtcyhjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmFsaWRhdGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGxldCBsZWZ0VGVybSxcbiAgICAgICAgcmlnaHRUZXJtO1xuXG4gICAgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChsZWZ0VGVybSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgICByaWdodFRlcm0gPSB0aGlzLnJpZ2h0VGVybS52YWxpZGF0ZShjb250ZXh0LCAocmlnaHRUZXJtKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSBsZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmlnaHRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICBpZiAobGVmdFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcblxuICAgICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG5cbiAgICAgIHRlcm1zVmFsaWRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7ICAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVxdWFsaXR5QXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgbGVmdFZhcmlhYmxlQXNzaWdubWVudCA9IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpO1xuXG4gICAgbGV0IGFzc2lnbm1lbnQ7XG5cbiAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcblxuICAgIGlmIChsZWZ0VmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICBhc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICBhc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVhbGl0eVwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGVxdWFsaXR5Tm9kZSA9IGluc3RhbnRpYXRlRXF1YWxpdHkoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICByZXR1cm4gZXF1YWxpdHk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShsZWZ0VGVybU5vZGUpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUocmlnaHRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFcXVhbGl0eSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRFcXVhbGl0eU5vZGUiLCJnZXROb2RlIiwiZXF1YWxpdHlOZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJnZXRUZXJtcyIsInRlcm1zIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImVxdWFsaXR5Tm9kZU1hdGNoZXMiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwicmVmbGV4aXZlIiwiaXNFcXVhbFRvIiwiZXF1YWxpdHkiLCJlcXVhbFRvIiwiaXNFcXVhbCIsImVxdWFsIiwidGVybXNFcXVhdGUiLCJlcXVhdGVUZXJtcyIsImZpbmRWYWxpZEVxdWFsaXR5IiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJ2YWxpZEVxdWFsaXR5IiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJlcXVhbGl0eVN0cmluZyIsInRyYWNlIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ0ZXJtc1ZhbGlkYXRlIiwidmFsaWRhdGVUZXJtcyIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJhZGRFcXVhbGl0eSIsInZhbGlkYXRlc0ZvcndhcmRzIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwibGVmdFZhcmlhYmxlQXNzaWdubWVudCIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudCIsInJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwiYXNzaWdubWVudCIsImFkZEFzc2lnbm1lbnQiLCJuYW1lIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVFcXVhbGl0eSIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsInJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjswQkFFRDt5QkFDRzt3QkFDRTs2QkFDUTt3QkFDb0Y7TUFFeEgsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxDQUFFO1FBQ3RELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLGtCQUFrQjtRQUNoQixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsY0FBY1AsTUFBTSxHQUFHO1FBRTdCLE9BQU9PO0lBQ1Q7SUFFQUMsa0JBQWtCO1FBQ2hCLE1BQU1DLGVBQWUsSUFB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