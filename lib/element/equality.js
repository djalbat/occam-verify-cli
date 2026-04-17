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
    constructor(context, string, node, breakPoint, leftTerm, rightTerm){
        super(context, string, node, breakPoint);
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
        const string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = breakPoint.toJSON();
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static name = "Equality";
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, breakPoint } = json, equalityNode = (0, _instantiate.instantiateEquality)(string, context), node = equalityNode, leftTerm = leftTermFromEqualityNode(equalityNode, context), rightTerm = rightTermFromEqualityNode(equalityNode, context);
            context = null;
            const equality = new Equality(context, string, node, breakPoint, leftTerm, rightTerm);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVxdWF0ZVRlcm1zIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVFcXVhbGl0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5TmRlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICB0aGlzLmxlZnRUZXJtLFxuICAgICAgdGhpcy5yaWdodFRlcm1cbiAgICBdO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgbWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gdGhpcy5yaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmbGV4aXZlID0gKGxlZnRUZXJtU3RyaW5nID09PSByaWdodFRlcm1TdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhlcXVhbGl0eSkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5LmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBlcXVhbGl0eU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGxldCBlcXVhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybXNFcXVhdGUgPSBlcXVhdGVUZXJtcyh0aGlzLmxlZnRUZXJtLCB0aGlzLnJpZ2h0VGVybSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNFcXVhdGUpIHtcbiAgICAgIGVxdWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICBmaW5kVmFsaWRFcXVhbGl0eShjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gdGhpcy5nZXRFcXVhbGl0eU5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB2YWxpZEVxdWFsaXR5ID0gZXF1YWxpdHk7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEVxdWFsaXR5O1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRFcXVhbGl0eSA9IHRoaXMuZmluZFZhbGlkRXF1YWxpdHkoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRFcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgZXF1YWxpdHkgPSB2YWxpZEVxdWFsaXR5OyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybXNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVUZXJtcyhjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1zVmFsaWRhdGUpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBlcXVhbGl0eSA9IHRoaXM7ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtcyhjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmFsaWRhdGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGxldCBsZWZ0VGVybSxcbiAgICAgICAgcmlnaHRUZXJtO1xuXG4gICAgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChsZWZ0VGVybSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgICByaWdodFRlcm0gPSB0aGlzLnJpZ2h0VGVybS52YWxpZGF0ZShjb250ZXh0LCAocmlnaHRUZXJtKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSBsZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZihyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmlnaHRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICBpZiAobGVmdFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcblxuICAgICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG5cbiAgICAgIHRlcm1zVmFsaWRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7ICAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBlcXVhbGl0eUFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQgPSBsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSxcbiAgICAgICAgICByaWdodFZhcmlhYmxlQXNzaWdubWVudCA9IHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChlcXVhbGl0eUFzc2lnbm1lbnQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnQudG9KU09OKCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICBzdHJpbmcsXG4gICAgICBicmVha1BvaW50XG4gICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkVxdWFsaXR5XCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICByZXR1cm4gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nLCBicmVha1BvaW50IH0gPSBqc29uLFxuICAgICAgICAgICAgZXF1YWxpdHlOb2RlID0gaW5zdGFudGlhdGVFcXVhbGl0eShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgIC8vL1xuICAgICAgICAgICAgbGVmdFRlcm0gPSBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHJpZ2h0VGVybSA9IHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgIGNvbnN0IGVxdWFsaXR5ID0gbmV3IEVxdWFsaXR5KGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbGVmdFRlcm0sIHJpZ2h0VGVybSk7XG5cbiAgICAgIHJldHVybiBlcXVhbGl0eTtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gZXF1YWxpdHlGcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbGVmdFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICBsZWZ0VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKGxlZnRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIGxlZnRUZXJtO1xufVxuXG5mdW5jdGlvbiByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCByaWdodFRlcm1Ob2RlID0gZXF1YWxpdHlOb2RlLmdldExlZnRUZXJtTm9kZSgpLFxuICAgICAgICByaWdodFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShyaWdodFRlcm1Ob2RlKTtcblxuICByZXR1cm4gcmlnaHRUZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkVxdWFsaXR5IiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRFcXVhbGl0eU5vZGUiLCJnZXROb2RlIiwiZXF1YWxpdHlOZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJnZXRUZXJtcyIsInRlcm1zIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImVxdWFsaXR5Tm9kZU1hdGNoZXMiLCJpc1JlZmxleGl2ZSIsImxlZnRUZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwicmlnaHRUZXJtU3RyaW5nIiwicmVmbGV4aXZlIiwiaXNFcXVhbFRvIiwiZXF1YWxpdHkiLCJlcXVhbFRvIiwiaXNFcXVhbCIsImVxdWFsIiwidGVybXNFcXVhdGUiLCJlcXVhdGVUZXJtcyIsImZpbmRWYWxpZEVxdWFsaXR5IiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJ2YWxpZEVxdWFsaXR5IiwidmFsaWRhdGUiLCJlcXVhbGl0eVN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwiZGVidWciLCJ0ZXJtc1ZhbGlkYXRlIiwidmFsaWRhdGVUZXJtcyIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2lnbiIsImFkZEVxdWFsaXR5IiwidmFsaWRhdGVzRm9yd2FyZHMiLCJsZWZ0VGVybVR5cGVFcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlIiwiaXNFcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2YiLCJlcXVhbGl0eUFzc2lnbm1lbnQiLCJlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJsZWZ0VmFyaWFibGVBc3NpZ25tZW50IiwibGVmdFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSIsInJpZ2h0VmFyaWFibGVBc3NpZ25tZW50IiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkiLCJhZGRBc3NpZ25tZW50IiwidG9KU09OIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVFcXVhbGl0eSIsImxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZSIsInJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImVxdWFsaXR5RnJvbVN0YXRlbWVudE5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVR3QjswQkFFRDt3QkFDSzt5QkFDQTs2QkFDUTt5QkFDTTt3QkFDOEU7TUFFeEgsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxpQkFBaUJDLHVCQUFPO0lBQ2xELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxTQUFTLENBQUU7UUFDbEUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0YsUUFBUTtJQUN0QjtJQUVBRyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsa0JBQWtCO1FBQ2hCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyxjQUFjUixNQUFNLEdBQUc7UUFFN0IsT0FBT1E7SUFDVDtJQUVBQyxrQkFBa0I7UUFDaEIsTUFBTUMsZUFBZSxJQUFJLENBQUNSLFFBQVEsQ0FBQ0ssT0FBTztRQUUxQyxPQUFPRztJQUNUO0lBRUFDLG1CQUFtQjtRQUNqQixNQUFNQyxnQkFBZ0IsSUFBSSxDQUFDVCxTQUFTLENBQUNJLE9BQU87UUFFNUMsT0FBT0s7SUFDVDtJQUVBQyxVQUFVO1FBQ1IsSUFBSUM7UUFFSixNQUFNQyxlQUFlLElBQUksQ0FBQ2IsUUFBUSxDQUFDVyxPQUFPLElBQ3BDRyxnQkFBZ0IsSUFBSSxDQUFDYixTQUFTLENBQUNVLE9BQU8sSUFDdENJLDhDQUE4Q0YsYUFBYUcsb0JBQW9CLENBQUNGLGdCQUNoRkcsOENBQThDSCxjQUFjRSxvQkFBb0IsQ0FBQ0g7UUFFdkYsSUFBSUUsNkNBQTZDO1lBQy9DSCxPQUFPQyxjQUFlLEdBQUc7UUFDM0I7UUFFQSxJQUFJSSw2Q0FBNkM7WUFDL0NMLE9BQU9FLGVBQWUsR0FBRztRQUMzQjtRQUVBLE9BQU9GO0lBQ1Q7SUFFQU0sV0FBVztRQUNULE1BQU1DLFFBQVE7WUFDWixJQUFJLENBQUNuQixRQUFRO1lBQ2IsSUFBSSxDQUFDQyxTQUFTO1NBQ2Y7UUFFRCxPQUFPa0I7SUFDVDtJQUVBQyxrQkFBa0JDLFlBQVksRUFBRTtRQUM5QixNQUFNdkIsT0FBT3VCLGNBQ1BDLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUN6QixPQUM3QjBCLHNCQUFzQkYsYUFBYSxHQUFHO1FBRTVDLE9BQU9FO0lBQ1Q7SUFFQUMsY0FBYztRQUNaLE1BQU1DLGlCQUFpQixJQUFJLENBQUMxQixRQUFRLENBQUMyQixTQUFTLElBQ3hDQyxrQkFBa0IsSUFBSSxDQUFDM0IsU0FBUyxDQUFDMEIsU0FBUyxJQUMxQ0UsWUFBYUgsbUJBQW1CRTtRQUV0QyxPQUFPQztJQUNUO0lBRUFDLFVBQVVDLFFBQVEsRUFBRTtRQUNsQixNQUFNVixlQUFlVSxTQUFTMUIsT0FBTyxJQUMvQm1CLHNCQUFzQixJQUFJLENBQUNKLGlCQUFpQixDQUFDQyxlQUM3Q1csVUFBVVIscUJBQXNCLEdBQUc7UUFFekMsT0FBT1E7SUFDVDtJQUVBQyxRQUFRckMsT0FBTyxFQUFFO1FBQ2YsSUFBSXNDLFFBQVE7UUFFWixNQUFNQyxjQUFjQyxJQUFBQSxtQkFBVyxFQUFDLElBQUksQ0FBQ3BDLFFBQVEsRUFBRSxJQUFJLENBQUNDLFNBQVMsRUFBRUw7UUFFL0QsSUFBSXVDLGFBQWE7WUFDZkQsUUFBUTtRQUNWO1FBRUEsT0FBT0E7SUFDVDtJQUVBRyxrQkFBa0J6QyxPQUFPLEVBQUU7UUFDekIsTUFBTXlCLGVBQWUsSUFBSSxDQUFDakIsZUFBZSxJQUNuQzJCLFdBQVduQyxRQUFRMEMsMEJBQTBCLENBQUNqQixlQUM5Q2tCLGdCQUFnQlIsVUFBVyxHQUFHO1FBRXBDLE9BQU9RO0lBQ1Q7SUFFQUMsU0FBUzVDLE9BQU8sRUFBRTtRQUNoQixJQUFJbUMsV0FBVztRQUVmLE1BQU1VLGlCQUFpQixJQUFJLENBQUNkLFNBQVMsSUFBSSxHQUFHO1FBRTVDL0IsUUFBUThDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRCxlQUFlLGFBQWEsQ0FBQztRQUU5RCxJQUFJRSxZQUFZO1FBRWhCLE1BQU1KLGdCQUFnQixJQUFJLENBQUNGLGlCQUFpQixDQUFDekM7UUFFN0MsSUFBSTJDLGtCQUFrQixNQUFNO1lBQzFCSSxZQUFZO1lBRVpaLFdBQVdRLGVBQWUsR0FBRztZQUU3QjNDLFFBQVFnRCxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVILGVBQWUsNEJBQTRCLENBQUM7UUFDdkUsT0FBTztZQUNMLE1BQU1JLGdCQUFnQixJQUFJLENBQUNDLGFBQWEsQ0FBQ2xEO1lBRXpDLElBQUlpRCxlQUFlO2dCQUNqQixNQUFNRSxTQUFTbkQsUUFBUW9ELFFBQVE7Z0JBRS9CLElBQUlDLHNCQUFzQixPQUN0QkMsdUJBQXVCO2dCQUUzQixJQUFJSCxRQUFRO29CQUNWRSxzQkFBc0IsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQ3ZEO2dCQUNoRCxPQUFPO29CQUNMc0QsdUJBQXVCLElBQUksQ0FBQ0UsbUJBQW1CLENBQUN4RDtnQkFDbEQ7Z0JBRUEsSUFBSXFELHVCQUF1QkMsc0JBQXNCO29CQUMvQ1AsWUFBWTtnQkFDZDtZQUNGO1lBRUEsSUFBSUEsV0FBVztnQkFDYlosV0FBVyxJQUFJLEVBQUcsR0FBRztnQkFFckIsSUFBSSxDQUFDc0IsTUFBTSxDQUFDekQ7Z0JBRVpBLFFBQVEwRCxXQUFXLENBQUN2QjtZQUN0QjtRQUNGO1FBRUEsSUFBSVksV0FBVztZQUNiL0MsUUFBUWdELEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFSCxlQUFlLFdBQVcsQ0FBQztRQUNoRTtRQUVBLE9BQU9WO0lBQ1Q7SUFFQWUsY0FBY2xELE9BQU8sRUFBRTtRQUNyQixJQUFJaUQsZ0JBQWdCO1FBRXBCLE1BQU1KLGlCQUFpQixJQUFJLENBQUNkLFNBQVMsSUFBSSxHQUFHO1FBRTVDL0IsUUFBUThDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRCxlQUFlLHFCQUFxQixDQUFDO1FBRXRFLElBQUl6QyxVQUNBQztRQUVKRCxXQUFXLElBQUksQ0FBQ0EsUUFBUSxDQUFDd0MsUUFBUSxDQUFDNUMsU0FBUyxDQUFDSTtZQUN4QyxJQUFJdUQsb0JBQW9CO1lBRXhCdEQsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ3VDLFFBQVEsQ0FBQzVDLFNBQVMsQ0FBQ0s7Z0JBQzVDLElBQUlzRCxvQkFBb0I7Z0JBRXhCLE1BQU0xQyxlQUFlYixTQUFTVyxPQUFPLElBQy9CRyxnQkFBZ0JiLFVBQVVVLE9BQU8sSUFDakM2Qyx1REFBdUQzQyxhQUFhNEMsNkJBQTZCLENBQUMzQztnQkFFeEcsSUFBSTBDLHNEQUFzRDtvQkFDeERELG9CQUFvQjtnQkFDdEI7Z0JBRUEsT0FBT0E7WUFDVDtZQUVBLElBQUl0RCxjQUFjLE1BQU07Z0JBQ3RCc0Qsb0JBQW9CO1lBQ3RCO1lBRUEsT0FBT0E7UUFDVDtRQUVGLElBQUl2RCxhQUFhLE1BQU07WUFDckIsSUFBSSxDQUFDQSxRQUFRLEdBQUdBO1lBRWhCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtZQUVqQjRDLGdCQUFnQjtRQUNsQjtRQUVBLElBQUlBLGVBQWU7WUFDakJqRCxRQUFRZ0QsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVILGVBQWUsbUJBQW1CLENBQUM7UUFDeEU7UUFFQSxPQUFPSTtJQUNUO0lBRUFNLG1CQUFtQnZELE9BQU8sRUFBRTtRQUMxQixJQUFJcUQ7UUFFSixNQUFNUixpQkFBaUIsSUFBSSxDQUFDZCxTQUFTLElBQUksR0FBRztRQUU1Qy9CLFFBQVE4QyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUQsZUFBZSxvQkFBb0IsQ0FBQztRQUVyRVEsc0JBQXNCO1FBRXRCLElBQUlBLHFCQUFxQjtZQUN2QnJELFFBQVFnRCxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUgsZUFBZSxrQkFBa0IsQ0FBQztRQUN2RTtRQUVBLE9BQU9RO0lBQ1Q7SUFFQUcsb0JBQW9CeEQsT0FBTyxFQUFFO1FBQzNCLElBQUlzRDtRQUVKLE1BQU1ULGlCQUFpQixJQUFJLENBQUNkLFNBQVMsSUFBSSxHQUFHO1FBRTVDL0IsUUFBUThDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRCxlQUFlLHFCQUFxQixDQUFDO1FBRXRFUyx1QkFBdUIsTUFBTyxHQUFHO1FBRWpDLElBQUlBLHNCQUFzQjtZQUN4QnRELFFBQVFnRCxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUgsZUFBZSxtQkFBbUIsQ0FBQztRQUN4RTtRQUVBLE9BQU9TO0lBQ1Q7SUFFQUcsT0FBT3pELE9BQU8sRUFBRTtRQUNkLE1BQU1tQyxXQUFXLElBQUksRUFDZjJCLHFCQUFxQkMsSUFBQUEsc0NBQThCLEVBQUM1QixVQUFVbkMsVUFDOURnRSx5QkFBeUJDLElBQUFBLDBDQUFrQyxFQUFDOUIsVUFBVW5DLFVBQ3RFa0UsMEJBQTBCQyxJQUFBQSwyQ0FBbUMsRUFBQ2hDLFVBQVVuQztRQUU5RUEsUUFBUW9FLGFBQWEsQ0FBQ047UUFFdEI5RCxRQUFRb0UsYUFBYSxDQUFDSjtRQUV0QmhFLFFBQVFvRSxhQUFhLENBQUNGO0lBQ3hCO0lBRUFHLFNBQVM7UUFDUCxNQUFNcEUsU0FBUyxJQUFJLENBQUM4QixTQUFTO1FBRTdCLElBQUk1QjtRQUVKQSxhQUFhLElBQUksQ0FBQ21FLGFBQWE7UUFFL0IsTUFBTUMsaUJBQWlCcEUsV0FBV2tFLE1BQU07UUFFeENsRSxhQUFhb0UsZ0JBQWlCLEdBQUc7UUFFakMsTUFBTUMsT0FBTztZQUNYdkU7WUFDQUU7UUFDRjtRQUVBLE9BQU9xRTtJQUNUO0lBRUEsT0FBT0MsT0FBTyxXQUFXO0lBRXpCLE9BQU9DLFNBQVNGLElBQUksRUFBRXhFLE9BQU8sRUFBRTtRQUM3QixPQUFPMkUsSUFBQUEsb0JBQVcsRUFBQyxDQUFDM0U7WUFDbEIsTUFBTSxFQUFFQyxNQUFNLEVBQUVFLFVBQVUsRUFBRSxHQUFHcUUsTUFDekIvQyxlQUFlbUQsSUFBQUEsZ0NBQW1CLEVBQUMzRSxRQUFRRCxVQUMzQ0UsT0FBT3VCLGNBQ1ByQixXQUFXeUUseUJBQXlCcEQsY0FBY3pCLFVBQ2xESyxZQUFZeUUsMEJBQTBCckQsY0FBY3pCO1lBRTFEQSxVQUFVO1lBRVYsTUFBTW1DLFdBQVcsSUFBSXJDLFNBQVNFLFNBQVNDLFFBQVFDLE1BQU1DLFlBQVlDLFVBQVVDO1lBRTNFLE9BQU84QjtRQUNULEdBQUduQztJQUNMO0lBRUEsT0FBTytFLGNBQWNDLFNBQVMsRUFBRWhGLE9BQU8sRUFBRTtRQUN2QyxNQUFNaUYsZ0JBQWdCRCxVQUFVdkUsT0FBTyxJQUNqQzBCLFdBQVcrQyxJQUFBQSxrQ0FBeUIsRUFBQ0QsZUFBZWpGO1FBRTFELE9BQU9tQztJQUNUO0FBQ0Y7QUFFQSxTQUFTMEMseUJBQXlCcEQsWUFBWSxFQUFFekIsT0FBTztJQUNyRCxNQUFNWSxlQUFlYSxhQUFhZCxlQUFlLElBQzNDUCxXQUFXSixRQUFRbUYsa0JBQWtCLENBQUN2RTtJQUU1QyxPQUFPUjtBQUNUO0FBRUEsU0FBUzBFLDBCQUEwQnJELFlBQVksRUFBRXpCLE9BQU87SUFDdEQsTUFBTWMsZ0JBQWdCVyxhQUFhZCxlQUFlLElBQzVDTixZQUFZTCxRQUFRbUYsa0JBQWtCLENBQUNyRTtJQUU3QyxPQUFPVDtBQUNUIn0=