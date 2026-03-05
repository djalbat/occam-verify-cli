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
        const equalityNodeA = equalityNode; ///
        equalityNode = this.getEqualityNode();
        const equalityNodeB = equalityNode, equalityNodeAAMatchesEqualityBNodeB = equalityNodeA.match(equalityNodeB), equalityNodeMatches = equalityNodeAAMatchesEqualityBNodeB; ///
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
        const leftTermNode = this.leftTerm.getNode(), rightTermNode = this.rightTerm.getNode(), termsEquate = (0, _equate.equateTerms)(leftTermNode, rightTermNode, context);
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
        leftTerm = this.leftTerm.validate(context, ()=>{
            let validatesForwards = false;
            rightTerm = this.rightTerm.validate(context, ()=>{
                const validatesForwards = true;
                return validatesForwards;
            });
            if (rightTerm !== null) {
                validatesForwards = true;
            }
            return validatesForwards;
        });
        if (leftTerm !== null) {
            const leftTermType = leftTerm.getType(), rightTermType = rightTerm.getType(), leftTermTypeComparableToRightTermType = leftTermType.isComparableTo(rightTermType);
            if (leftTermTypeComparableToRightTermType) {
                this.leftTerm = leftTerm;
                this.rightTerm = rightTerm;
                termsValidate = true;
            }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgZXF1YXRlVGVybXMgfSBmcm9tIFwiLi4vcHJvY2Vzcy9lcXVhdGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRXF1YWxpdHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5LCBsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5LCByaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1YWxpdHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlOZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eU5kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YocmlnaHRUZXJtVHlwZSksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSA9IHJpZ2h0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIGNvbnN0IHRlcm1zID0gW1xuICAgICAgdGhpcy5sZWZ0VGVybSxcbiAgICAgIHRoaXMucmlnaHRUZXJtXG4gICAgXTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIG1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZUEgPSBlcXVhbGl0eU5vZGU7IC8vL1xuXG4gICAgZXF1YWxpdHlOb2RlID0gdGhpcy5nZXRFcXVhbGl0eU5vZGUoKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZUIgPSBlcXVhbGl0eU5vZGUsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5Tm9kZUFBTWF0Y2hlc0VxdWFsaXR5Qk5vZGVCID0gZXF1YWxpdHlOb2RlQS5tYXRjaChlcXVhbGl0eU5vZGVCKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gZXF1YWxpdHlOb2RlQUFNYXRjaGVzRXF1YWxpdHlCTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gdGhpcy5yaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmbGV4aXZlID0gKGxlZnRUZXJtU3RyaW5nID09PSByaWdodFRlcm1TdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhlcXVhbGl0eSkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5LmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBlcXVhbGl0eU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGxldCBlcXVhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGVmdFRlcm1Ob2RlID0gdGhpcy5sZWZ0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmlnaHRUZXJtTm9kZSA9IHRoaXMucmlnaHRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtc0VxdWF0ZSA9IGVxdWF0ZVRlcm1zKGxlZnRUZXJtTm9kZSwgcmlnaHRUZXJtTm9kZSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNFcXVhdGUpIHtcbiAgICAgIGVxdWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICBmaW5kVmFsaWRFcXVhbGl0eShjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gdGhpcy5nZXRFcXVhbGl0eU5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB2YWxpZEVxdWFsaXR5ID0gZXF1YWxpdHk7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEVxdWFsaXR5O1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEVxdWFsaXR5ID0gdGhpcy5maW5kVmFsaWRFcXVhbGl0eShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBlcXVhbGl0eSA9IHZhbGlkRXF1YWxpdHk7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBlcXVhbGl0eSA9IHRoaXM7ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm1zKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWYWxpZGF0ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy4uLmApO1xuXG4gICAgbGV0IGxlZnRUZXJtLFxuICAgICAgICByaWdodFRlcm07XG5cbiAgICBsZWZ0VGVybSA9IHRoaXMubGVmdFRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgICByaWdodFRlcm0gPSB0aGlzLnJpZ2h0VGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmlnaHRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICBpZiAobGVmdFRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSByaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgICAgaWYgKGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuXG4gICAgICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuXG4gICAgICAgIHRlcm1zVmFsaWRhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7ICAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVxdWFsaXR5QXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgbGVmdFZhcmlhYmxlQXNzaWdubWVudCA9IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpO1xuXG4gICAgbGV0IGFzc2lnbm1lbnQ7XG5cbiAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcblxuICAgIGlmIChsZWZ0VmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICBhc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICBhc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVhbGl0eVwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGVxdWFsaXR5Tm9kZSA9IGluc3RhbnRpYXRlRXF1YWxpdHkoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICByZXR1cm4gZXF1YWxpdHk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShsZWZ0VGVybU5vZGUpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUocmlnaHRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFcXVhbGl0eSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRFcXVhbGl0eU5vZGUiLCJnZXROb2RlIiwiZXF1YWxpdHlOZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJnZXRUZXJtcyIsInRlcm1zIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGVBIiwiZXF1YWxpdHlOb2RlQiIsImVxdWFsaXR5Tm9kZUFBTWF0Y2hlc0VxdWFsaXR5Qk5vZGVCIiwibWF0Y2giLCJlcXVhbGl0eU5vZGVNYXRjaGVzIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybVN0cmluZyIsImdldFN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsInJlZmxleGl2ZSIsImlzRXF1YWxUbyIsImVxdWFsaXR5IiwiZXF1YWxUbyIsImlzRXF1YWwiLCJlcXVhbCIsInRlcm1zRXF1YXRlIiwiZXF1YXRlVGVybXMiLCJmaW5kVmFsaWRFcXVhbGl0eSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwidmFsaWRFcXVhbGl0eSIsInZhbGlkYXRlIiwic3RhdGVkIiwiZXF1YWxpdHlTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwidGVybXNWYWxpZGF0ZSIsInZhbGlkYXRlVGVybXMiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzaWduIiwiYWRkRXF1YWxpdHkiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyIsImVxdWFsaXR5QXNzaWdubWVudCIsImVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eSIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSIsImFzc2lnbm1lbnQiLCJhZGRBc3NpZ25tZW50IiwibmFtZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlRXF1YWxpdHkiLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7eUJBQ0c7d0JBQ0U7NkJBQ1E7d0JBQ29GO01BRXhILFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsQ0FBRTtRQUN0RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsUUFB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