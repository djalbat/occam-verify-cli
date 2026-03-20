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
        context.addAssignment(equalityAssignment);
        context.addAssignment(leftVariableAssignment);
        context.addAssignment(rightVariableAssignment);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBlcXVhdGVUZXJtcyB9IGZyb20gXCIuLi9wcm9jZXNzL2VxdWF0ZVwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVFcXVhbGl0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5TmRlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICB0aGlzLmxlZnRUZXJtLFxuICAgICAgdGhpcy5yaWdodFRlcm1cbiAgICBdO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgbWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gdGhpcy5yaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmbGV4aXZlID0gKGxlZnRUZXJtU3RyaW5nID09PSByaWdodFRlcm1TdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhlcXVhbGl0eSkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5LmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBlcXVhbGl0eU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGxldCBlcXVhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybXNFcXVhdGUgPSBlcXVhdGVUZXJtcyh0aGlzLmxlZnRUZXJtLCB0aGlzLnJpZ2h0VGVybSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNFcXVhdGUpIHtcbiAgICAgIGVxdWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICBmaW5kVmFsaWRFcXVhbGl0eShjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gdGhpcy5nZXRFcXVhbGl0eU5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB2YWxpZEVxdWFsaXR5ID0gZXF1YWxpdHk7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEVxdWFsaXR5O1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEVxdWFsaXR5ID0gdGhpcy5maW5kVmFsaWRFcXVhbGl0eShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBlcXVhbGl0eSA9IHZhbGlkRXF1YWxpdHk7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBlcXVhbGl0eSA9IHRoaXM7ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm1zKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWYWxpZGF0ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy4uLmApO1xuXG4gICAgbGV0IGxlZnRUZXJtLFxuICAgICAgICByaWdodFRlcm07XG5cbiAgICBsZWZ0VGVybSA9IHRoaXMubGVmdFRlcm0udmFsaWRhdGUoY29udGV4dCwgKGxlZnRUZXJtKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICAgIHJpZ2h0VGVybSA9IHRoaXMucmlnaHRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChyaWdodFRlcm0pID0+IHtcbiAgICAgICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICByaWdodFRlcm1UeXBlID0gcmlnaHRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgICAgICBsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlID0gbGVmdFRlcm1UeXBlLmlzQ29tcGFyYWJsZVRvKHJpZ2h0VGVybVR5cGUpO1xuXG4gICAgICAgICAgaWYgKGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyaWdodFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgIGlmIChsZWZ0VGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuXG4gICAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcblxuICAgICAgdGVybXNWYWxpZGF0ZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1zVmFsaWRhdGUpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSdzIHRlcm1zLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtc1ZhbGlkYXRlO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIHN0YXRlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZGVyaXZlZCBlcXVhbGl0eS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLCAgLy8vXG4gICAgICAgICAgZXF1YWxpdHlBc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSxcbiAgICAgICAgICBsZWZ0VmFyaWFibGVBc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQgPSByaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoZXF1YWxpdHlBc3NpZ25tZW50KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChsZWZ0VmFyaWFibGVBc3NpZ25tZW50KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChyaWdodFZhcmlhYmxlQXNzaWdubWVudCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRXF1YWxpdHlcIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgZXF1YWxpdHlOb2RlID0gaW5zdGFudGlhdGVFcXVhbGl0eShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgICAgIHJldHVybiBlcXVhbGl0eTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5mdW5jdGlvbiByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShyaWdodFRlcm1Ob2RlKTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkVxdWFsaXR5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImdldEVxdWFsaXR5Tm9kZSIsImdldE5vZGUiLCJlcXVhbGl0eU5kZSIsImdldExlZnRUZXJtTm9kZSIsImxlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwicmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSIsImdldFRlcm1zIiwidGVybXMiLCJtYXRjaEVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZXF1YWxpdHlOb2RlTWF0Y2hlcyIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJyaWdodFRlcm1TdHJpbmciLCJyZWZsZXhpdmUiLCJpc0VxdWFsVG8iLCJlcXVhbGl0eSIsImVxdWFsVG8iLCJpc0VxdWFsIiwiZXF1YWwiLCJ0ZXJtc0VxdWF0ZSIsImVxdWF0ZVRlcm1zIiwiZmluZFZhbGlkRXF1YWxpdHkiLCJmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZSIsInZhbGlkRXF1YWxpdHkiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsImVxdWFsaXR5U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInRlcm1zVmFsaWRhdGUiLCJ2YWxpZGF0ZVRlcm1zIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2lnbiIsImFkZEVxdWFsaXR5IiwidmFsaWRhdGVzRm9yd2FyZHMiLCJsZWZ0VGVybVR5cGVDb21wYXJhYmxlVG9SaWdodFRlcm1UeXBlIiwiaXNDb21wYXJhYmxlVG8iLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJsZWZ0VmFyaWFibGVBc3NpZ25tZW50IiwibGVmdFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSIsInJpZ2h0VmFyaWFibGVBc3NpZ25tZW50IiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJhZGRBc3NpZ25tZW50IiwibmFtZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVFcXVhbGl0eSIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsInJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjswQkFFRDt5QkFDSzt3QkFDQTs2QkFDUTt3QkFDb0Y7TUFFeEgsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsU0FBUyxDQUFFO1FBQ3RELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNGLFFBQVE7SUFDdEI7SUFFQUcsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLGtCQUFrQjtRQUNoQixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsY0FBY1AsTUFBTSxHQUFHO1FBRTdCLE9BQU9PO0lBQ1Q7SUFFQUMsa0JBQWtCO1FBQ2hCLE1BQU1DLGVBQWUsSUFBSSxDQUFDUixRQUFRLENBQUNLLE9BQU87UUFFMUMsT0FBT0c7SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ1QsU0FBUyxDQUFDSSxPQUFPO1FBRTVDLE9BQU9LO0lBQ1Q7SUFFQUMsVUFBVTtRQUNSLElBQUlDO1FBRUosTUFBTUMsZUFBZSxJQUFJLENBQUNiLFFBQVEsQ0FBQ1csT0FBTyxJQUNwQ0csZ0JBQWdCLElBQUksQ0FBQ2IsU0FBUyxDQUFDVSxPQUFPLElBQ3RDSSw4Q0FBOENGLGFBQWFHLG9CQUFvQixDQUFDRixnQkFDaEZHLDhDQUE4Q0gsY0FBY0Usb0JBQW9C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