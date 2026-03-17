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
        return (0, _context.instantiate)((context)=>{
            const { string } = json, equalityNode = (0, _instantiate.instantiateEquality)(string, context), node = equalityNode, leftTerm = leftTermFromEqualityNode(equalityNode, context), rightTerm = rightTermFromEqualityNode(equalityNode, context);
            context = null;
            const equality = new Equality(context, string, node, leftTerm, rightTerm);
            return equality;
        }, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBlcXVhdGVUZXJtcyB9IGZyb20gXCIuLi9wcm9jZXNzL2VxdWF0ZVwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVFcXVhbGl0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5TmRlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICB0aGlzLmxlZnRUZXJtLFxuICAgICAgdGhpcy5yaWdodFRlcm1cbiAgICBdO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgbWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gdGhpcy5yaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmbGV4aXZlID0gKGxlZnRUZXJtU3RyaW5nID09PSByaWdodFRlcm1TdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhlcXVhbGl0eSkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5LmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBlcXVhbGl0eU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGxldCBlcXVhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybXNFcXVhdGUgPSBlcXVhdGVUZXJtcyh0aGlzLmxlZnRUZXJtLCB0aGlzLnJpZ2h0VGVybSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNFcXVhdGUpIHtcbiAgICAgIGVxdWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICBmaW5kVmFsaWRFcXVhbGl0eShjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gdGhpcy5nZXRFcXVhbGl0eU5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB2YWxpZEVxdWFsaXR5ID0gZXF1YWxpdHk7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEVxdWFsaXR5O1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEVxdWFsaXR5ID0gdGhpcy5maW5kVmFsaWRFcXVhbGl0eShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBlcXVhbGl0eSA9IHZhbGlkRXF1YWxpdHk7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBlcXVhbGl0eSA9IHRoaXM7ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm1zKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWYWxpZGF0ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy4uLmApO1xuXG4gICAgbGV0IGxlZnRUZXJtLFxuICAgICAgICByaWdodFRlcm07XG5cbiAgICBsZWZ0VGVybSA9IHRoaXMubGVmdFRlcm0udmFsaWRhdGUoY29udGV4dCwgKGxlZnRUZXJtKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChyaWdodFRlcm0pID0+IHtcbiAgICAgICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgICAgaWYgKGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyaWdodFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgIGlmIChsZWZ0VGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuXG4gICAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcblxuICAgICAgdGVybXNWYWxpZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZhbGlkYXRlO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHlBc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSxcbiAgICAgICAgICBsZWZ0VmFyaWFibGVBc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCk7XG5cbiAgICBsZXQgYXNzaWdubWVudDtcblxuICAgIGFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnQ7IC8vL1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpO1xuXG4gICAgaWYgKGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIGFzc2lnbm1lbnQgPSBsZWZ0VmFyaWFibGVBc3NpZ25tZW50OyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgICB9XG5cbiAgICBpZiAocmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgIT09IG51bGwpIHtcbiAgICAgIGFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkVxdWFsaXR5XCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGVxdWFsaXR5Tm9kZSA9IGluc3RhbnRpYXRlRXF1YWxpdHkoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICByZXR1cm4gZXF1YWxpdHk7XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShsZWZ0VGVybU5vZGUpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUocmlnaHRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFcXVhbGl0eSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRFcXVhbGl0eU5vZGUiLCJnZXROb2RlIiwiZXF1YWxpdHlOZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJnZXRUZXJtcyIsInRlcm1zIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImVxdWFsaXR5Tm9kZU1hdGNoZXMiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwicmVmbGV4aXZlIiwiaXNFcXVhbFRvIiwiZXF1YWxpdHkiLCJlcXVhbFRvIiwiaXNFcXVhbCIsImVxdWFsIiwidGVybXNFcXVhdGUiLCJlcXVhdGVUZXJtcyIsImZpbmRWYWxpZEVxdWFsaXR5IiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJ2YWxpZEVxdWFsaXR5IiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJlcXVhbGl0eVN0cmluZyIsInRyYWNlIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ0ZXJtc1ZhbGlkYXRlIiwidmFsaWRhdGVUZXJtcyIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NpZ24iLCJhZGRFcXVhbGl0eSIsInZhbGlkYXRlc0ZvcndhcmRzIiwibGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSIsImlzQ29tcGFyYWJsZVRvIiwiZXF1YWxpdHlBc3NpZ25tZW50IiwiZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwibGVmdFZhcmlhYmxlQXNzaWdubWVudCIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudCIsInJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwiYXNzaWdubWVudCIsImFkZEFzc2lnbm1lbnQiLCJuYW1lIiwidG9KU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUVxdWFsaXR5IiwibGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwicmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7Z0NBUndCOzBCQUVEO3lCQUNLO3dCQUNBOzZCQUNRO3dCQUNvRjtNQUV4SCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxTQUFTLENBQUU7UUFDdEQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsa0JBQWtCO1FBQ2hCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxjQUFjUCxNQUFNLEdBQUc7UUFFN0IsT0FBT087SUFDVDtJQUVBQyxrQkFBa0I7UUFDaEIsTUFBTUMsZUFBZSxJQUFJLENBQUNSLFFBQVEsQ0FBQ0ssT0FBTztRQUUx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