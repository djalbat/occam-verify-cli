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
const _breakPoint = require("../utilities/breakPoint");
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
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
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
            const { string } = json, equalityNode = (0, _instantiate.instantiateEquality)(string, context), node = equalityNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), leftTerm = leftTermFromEqualityNode(equalityNode, context), rightTerm = rightTermFromEqualityNode(equalityNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVxdWF0ZVRlcm1zIH0gZnJvbSBcIi4uL3Byb2Nlc3MvZXF1YXRlXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVFcXVhbGl0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHksIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBFcXVhbGl0eSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGxlZnRUZXJtLCByaWdodFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFRlcm07XG4gIH1cblxuICBnZXRSaWdodFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmlnaHRUZXJtO1xuICB9XG5cbiAgZ2V0RXF1YWxpdHlOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5TmRlO1xuICB9XG5cbiAgZ2V0TGVmdFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IGxlZnRUZXJtTm9kZSA9IHRoaXMubGVmdFRlcm0uZ2V0Tm9kZSgpO1xuXG4gICAgcmV0dXJuIGxlZnRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFJpZ2h0VGVybU5vZGUoKSB7XG4gICAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiByaWdodFRlcm1Ob2RlO1xuICB9XG5cbiAgZ2V0VHlwZSgpIHtcbiAgICBsZXQgdHlwZTtcblxuICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IHRoaXMubGVmdFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSB0aGlzLnJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihyaWdodFRlcm1UeXBlKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mTGVmdFRlcm1UeXBlID0gcmlnaHRUZXJtVHlwZS5pc0VxdWFsVG9PclN1YlR5cGVPZihsZWZ0VGVybVR5cGUpO1xuXG4gICAgaWYgKGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSBsZWZ0VGVybVR5cGU7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAocmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSkge1xuICAgICAgdHlwZSA9IHJpZ2h0VGVybVR5cGU7IC8vL1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgY29uc3QgdGVybXMgPSBbXG4gICAgICB0aGlzLmxlZnRUZXJtLFxuICAgICAgdGhpcy5yaWdodFRlcm1cbiAgICBdO1xuXG4gICAgcmV0dXJuIHRlcm1zO1xuICB9XG5cbiAgbWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGVxdWFsaXR5Tm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gdGhpcy5yaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmbGV4aXZlID0gKGxlZnRUZXJtU3RyaW5nID09PSByaWdodFRlcm1TdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhlcXVhbGl0eSkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5LmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBlcXVhbGl0eU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGxldCBlcXVhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybXNFcXVhdGUgPSBlcXVhdGVUZXJtcyh0aGlzLmxlZnRUZXJtLCB0aGlzLnJpZ2h0VGVybSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNFcXVhdGUpIHtcbiAgICAgIGVxdWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICBmaW5kVmFsaWRFcXVhbGl0eShjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gdGhpcy5nZXRFcXVhbGl0eU5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB2YWxpZEVxdWFsaXR5ID0gZXF1YWxpdHk7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEVxdWFsaXR5O1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBlcXVhbGl0eSA9IG51bGw7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRFcXVhbGl0eSA9IHRoaXMuZmluZFZhbGlkRXF1YWxpdHkoY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRFcXVhbGl0eSAhPT0gbnVsbCkge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgZXF1YWxpdHkgPSB2YWxpZEVxdWFsaXR5OyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybXNWYWxpZGF0ZSA9IHRoaXMudmFsaWRhdGVUZXJtcyhjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1zVmFsaWRhdGUpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBlcXVhbGl0eSA9IHRoaXM7ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEVxdWFsaXR5KGVxdWFsaXR5KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtcyhjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1zVmFsaWRhdGUgPSBmYWxzZTtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5J3MgdGVybXMuLi5gKTtcblxuICAgIGxldCBsZWZ0VGVybSxcbiAgICAgICAgcmlnaHRUZXJtO1xuXG4gICAgbGVmdFRlcm0gPSB0aGlzLmxlZnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChsZWZ0VGVybSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgICByaWdodFRlcm0gPSB0aGlzLnJpZ2h0VGVybS52YWxpZGF0ZShjb250ZXh0LCAocmlnaHRUZXJtKSA9PiB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgICAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSBsZWZ0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgcmlnaHRUZXJtVHlwZSA9IHJpZ2h0VGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgbGVmdFRlcm1UeXBlRXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0VxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZihyaWdodFRlcm1UeXBlKTtcblxuICAgICAgICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmlnaHRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICBpZiAobGVmdFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcblxuICAgICAgdGhpcy5yaWdodFRlcm0gPSByaWdodFRlcm07XG5cbiAgICAgIHRlcm1zVmFsaWRhdGUgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7ICAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMsICAvLy9cbiAgICAgICAgICBlcXVhbGl0eUFzc2lnbm1lbnQgPSBlcXVhbGl0eUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpLFxuICAgICAgICAgIGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQgPSBsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KSxcbiAgICAgICAgICByaWdodFZhcmlhYmxlQXNzaWdubWVudCA9IHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5KGVxdWFsaXR5LCBjb250ZXh0KTtcblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChlcXVhbGl0eUFzc2lnbm1lbnQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGxlZnRWYXJpYWJsZUFzc2lnbm1lbnQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OKGJyZWFrUG9pbnQpO1xuXG4gICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgc3RyaW5nLFxuICAgICAgYnJlYWtQb2ludFxuICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVhbGl0eVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGVxdWFsaXR5Tm9kZSA9IGluc3RhbnRpYXRlRXF1YWxpdHkoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICBsZWZ0VGVybSA9IGxlZnRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcmlnaHRUZXJtID0gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgY29uc3QgZXF1YWxpdHkgPSBuZXcgRXF1YWxpdHkoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBsZWZ0VGVybSwgcmlnaHRUZXJtKTtcblxuICAgICAgcmV0dXJuIGVxdWFsaXR5O1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG59KTtcblxuZnVuY3Rpb24gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCkge1xuICBjb25zdCBsZWZ0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIGxlZnRUZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUobGVmdFRlcm1Ob2RlKTtcblxuICByZXR1cm4gbGVmdFRlcm07XG59XG5cbmZ1bmN0aW9uIHJpZ2h0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSBlcXVhbGl0eU5vZGUuZ2V0TGVmdFRlcm1Ob2RlKCksXG4gICAgICAgIHJpZ2h0VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHJpZ2h0VGVybU5vZGUpO1xuXG4gIHJldHVybiByaWdodFRlcm07XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRXF1YWxpdHkiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwibGVmdFRlcm0iLCJyaWdodFRlcm0iLCJnZXRMZWZ0VGVybSIsImdldFJpZ2h0VGVybSIsImdldEVxdWFsaXR5Tm9kZSIsImdldE5vZGUiLCJlcXVhbGl0eU5kZSIsImdldExlZnRUZXJtTm9kZSIsImxlZnRUZXJtTm9kZSIsImdldFJpZ2h0VGVybU5vZGUiLCJyaWdodFRlcm1Ob2RlIiwiZ2V0VHlwZSIsInR5cGUiLCJsZWZ0VGVybVR5cGUiLCJyaWdodFRlcm1UeXBlIiwibGVmdFRlcm1UeXBlRXF1YWxUb09yU3ViVHlwZU9mUmlnaHRUZXJtVHlwZSIsImlzRXF1YWxUb09yU3ViVHlwZU9mIiwicmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSIsImdldFRlcm1zIiwidGVybXMiLCJtYXRjaEVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZXF1YWxpdHlOb2RlTWF0Y2hlcyIsImlzUmVmbGV4aXZlIiwibGVmdFRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJyaWdodFRlcm1TdHJpbmciLCJyZWZsZXhpdmUiLCJpc0VxdWFsVG8iLCJlcXVhbGl0eSIsImVxdWFsVG8iLCJpc0VxdWFsIiwiZXF1YWwiLCJ0ZXJtc0VxdWF0ZSIsImVxdWF0ZVRlcm1zIiwiZmluZFZhbGlkRXF1YWxpdHkiLCJmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZSIsInZhbGlkRXF1YWxpdHkiLCJ2YWxpZGF0ZSIsImVxdWFsaXR5U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJkZWJ1ZyIsInRlcm1zVmFsaWRhdGUiLCJ2YWxpZGF0ZVRlcm1zIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzaWduIiwiYWRkRXF1YWxpdHkiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsImxlZnRUZXJtVHlwZUVxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZiIsImVxdWFsaXR5QXNzaWdubWVudCIsImVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eSIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSIsImFkZEFzc2lnbm1lbnQiLCJ0b0pTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRXF1YWxpdHkiLCJicmVha1BvaW50RnJvbUpTT04iLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJlcXVhbGl0eUZyb21TdGF0ZW1lbnROb2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztnQ0FWd0I7MEJBRUQ7d0JBQ0s7eUJBQ0E7NkJBQ1E7eUJBQ007NEJBQ3FCO3dCQUN5RDtNQUV4SCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGlCQUFpQkMsdUJBQU87SUFDbEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsQ0FBRTtRQUNsRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxrQkFBa0I7UUFDaEIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLGNBQWNSLE1BQU0sR0FBRztRQUU3QixPQUFPUTtJQUNUO0lBRUFDLGtCQUFrQjtRQUNoQixNQUFNQyxlQUFlLElBQUksQ0FBQ1IsUUFBUSxDQUFDSyxPQUFPO1FBRTFDLE9BQU9HO0lBQ1Q7SUFFQUMsbUJBQW1CO1FBQ2pCLE1BQU1DLGdCQUFnQixJQUFJLENBQUNULFNBQVMsQ0FBQ0ksT0FBTztRQUU1QyxPQUFPSztJQUNUO0lBRUFDLFVBQVU7UUFDUixJQUFJQztRQUVKLE1BQU1DLGVBQWUsSUFBSSxDQUFDYixRQUFRLENBQUNXLE9BQU8sSUFDcENHLGdCQUFn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