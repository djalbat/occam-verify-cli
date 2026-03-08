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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2VxdWFsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxpdGVyYWxseSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgZXF1YXRlVGVybXMgfSBmcm9tIFwiLi4vcHJvY2Vzcy9lcXVhdGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRXF1YWxpdHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgZXF1YWxpdHlBc3NpZ25tZW50RnJvbUVxdWFsaXR5LCBsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5LCByaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSB9IGZyb20gXCIuLi9wcm9jZXNzL2Fzc2lnblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRXF1YWxpdHkgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsZWZ0VGVybSwgcmlnaHRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubGVmdFRlcm0gPSBsZWZ0VGVybTtcbiAgICB0aGlzLnJpZ2h0VGVybSA9IHJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldExlZnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLmxlZnRUZXJtO1xuICB9XG5cbiAgZ2V0UmlnaHRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJpZ2h0VGVybTtcbiAgfVxuXG4gIGdldEVxdWFsaXR5Tm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZXF1YWxpdHlOZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0eU5kZTtcbiAgfVxuXG4gIGdldExlZnRUZXJtTm9kZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybU5vZGUgPSB0aGlzLmxlZnRUZXJtLmdldE5vZGUoKTtcblxuICAgIHJldHVybiBsZWZ0VGVybU5vZGU7XG4gIH1cblxuICBnZXRSaWdodFRlcm1Ob2RlKCkge1xuICAgIGNvbnN0IHJpZ2h0VGVybU5vZGUgPSB0aGlzLnJpZ2h0VGVybS5nZXROb2RlKCk7XG5cbiAgICByZXR1cm4gcmlnaHRUZXJtTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgbGV0IHR5cGU7XG5cbiAgICBjb25zdCBsZWZ0VGVybVR5cGUgPSB0aGlzLmxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICByaWdodFRlcm1UeXBlID0gdGhpcy5yaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgIGxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUgPSBsZWZ0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YocmlnaHRUZXJtVHlwZSksXG4gICAgICAgICAgcmlnaHRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZkxlZnRUZXJtVHlwZSA9IHJpZ2h0VGVybVR5cGUuaXNFcXVhbFRvT3JTdWJUeXBlT2YobGVmdFRlcm1UeXBlKTtcblxuICAgIGlmIChsZWZ0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZSaWdodFRlcm1UeXBlKSB7XG4gICAgICB0eXBlID0gbGVmdFRlcm1UeXBlOyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUpIHtcbiAgICAgIHR5cGUgPSByaWdodFRlcm1UeXBlOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIGNvbnN0IHRlcm1zID0gW1xuICAgICAgdGhpcy5sZWZ0VGVybSxcbiAgICAgIHRoaXMucmlnaHRUZXJtXG4gICAgXTtcblxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIG1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZUEgPSBlcXVhbGl0eU5vZGU7IC8vL1xuXG4gICAgZXF1YWxpdHlOb2RlID0gdGhpcy5nZXRFcXVhbGl0eU5vZGUoKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZUIgPSBlcXVhbGl0eU5vZGUsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5Tm9kZUFBTWF0Y2hlc0VxdWFsaXR5Qk5vZGVCID0gZXF1YWxpdHlOb2RlQS5tYXRjaChlcXVhbGl0eU5vZGVCKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gZXF1YWxpdHlOb2RlQUFNYXRjaGVzRXF1YWxpdHlCTm9kZUI7IC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5Tm9kZU1hdGNoZXM7XG4gIH1cblxuICBpc1JlZmxleGl2ZSgpIHtcbiAgICBjb25zdCBsZWZ0VGVybVN0cmluZyA9IHRoaXMubGVmdFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmlnaHRUZXJtU3RyaW5nID0gdGhpcy5yaWdodFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcmVmbGV4aXZlID0gKGxlZnRUZXJtU3RyaW5nID09PSByaWdodFRlcm1TdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZmxleGl2ZTtcbiAgfVxuXG4gIGlzRXF1YWxUbyhlcXVhbGl0eSkge1xuICAgIGNvbnN0IGVxdWFsaXR5Tm9kZSA9IGVxdWFsaXR5LmdldE5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eU5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsVG8gPSBlcXVhbGl0eU5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGlzRXF1YWwoY29udGV4dCkge1xuICAgIGxldCBlcXVhbCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybXNFcXVhdGUgPSBlcXVhdGVUZXJtcyh0aGlzLmxlZnRUZXJtLCB0aGlzLnJpZ2h0VGVybSwgY29udGV4dCk7XG5cbiAgICBpZiAodGVybXNFcXVhdGUpIHtcbiAgICAgIGVxdWFsID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWw7XG4gIH1cblxuICBmaW5kVmFsaWRFcXVhbGl0eShjb250ZXh0KSB7XG4gICAgY29uc3QgZXF1YWxpdHlOb2RlID0gdGhpcy5nZXRFcXVhbGl0eU5vZGUoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGNvbnRleHQuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICB2YWxpZEVxdWFsaXR5ID0gZXF1YWxpdHk7ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEVxdWFsaXR5O1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGVxdWFsaXR5ID0gbnVsbDtcblxuICAgIGNvbnN0IGVxdWFsaXR5U3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5Li4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEVxdWFsaXR5ID0gdGhpcy5maW5kVmFsaWRFcXVhbGl0eShjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEVxdWFsaXR5ICE9PSBudWxsKSB7XG4gICAgICBlcXVhbGl0eSA9IHZhbGlkRXF1YWxpdHk7IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1zVmFsaWRhdGUgPSB0aGlzLnZhbGlkYXRlVGVybXMoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBlcXVhbGl0eSA9IHRoaXM7ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkRXF1YWxpdHkoZXF1YWxpdHkpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICB2YWxpZGF0ZVRlcm1zKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybXNWYWxpZGF0ZSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZXF1YWxpdHlTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy4uLmApO1xuXG4gICAgbGV0IGxlZnRUZXJtLFxuICAgICAgICByaWdodFRlcm07XG5cbiAgICBsZWZ0VGVybSA9IHRoaXMubGVmdFRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRhdGVzRm9yd2FyZHMgPSBmYWxzZTtcblxuICAgICAgICByaWdodFRlcm0gPSB0aGlzLnJpZ2h0VGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmlnaHRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICBpZiAobGVmdFRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxlZnRUZXJtVHlwZSA9IGxlZnRUZXJtLmdldFR5cGUoKSxcbiAgICAgICAgICAgIHJpZ2h0VGVybVR5cGUgPSByaWdodFRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgbGVmdFRlcm1UeXBlQ29tcGFyYWJsZVRvUmlnaHRUZXJtVHlwZSA9IGxlZnRUZXJtVHlwZS5pc0NvbXBhcmFibGVUbyhyaWdodFRlcm1UeXBlKTtcblxuICAgICAgaWYgKGxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUpIHtcbiAgICAgICAgdGhpcy5sZWZ0VGVybSA9IGxlZnRUZXJtO1xuXG4gICAgICAgIHRoaXMucmlnaHRUZXJtID0gcmlnaHRUZXJtO1xuXG4gICAgICAgIHRlcm1zVmFsaWRhdGUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXJtc1ZhbGlkYXRlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkncyB0ZXJtcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybXNWYWxpZGF0ZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBzdGF0ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBlcXVhbGl0eVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBkZXJpdmVkIGVxdWFsaXR5Li4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7ICAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGRlcml2ZWQgZXF1YWxpdHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcywgIC8vL1xuICAgICAgICAgIGVxdWFsaXR5QXNzaWdubWVudCA9IGVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eShlcXVhbGl0eSwgY29udGV4dCksXG4gICAgICAgICAgbGVmdFZhcmlhYmxlQXNzaWdubWVudCA9IGxlZnRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpLFxuICAgICAgICAgIHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnRGcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpO1xuXG4gICAgbGV0IGFzc2lnbm1lbnQ7XG5cbiAgICBhc3NpZ25tZW50ID0gZXF1YWxpdHlBc3NpZ25tZW50OyAvLy9cblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcblxuICAgIGlmIChsZWZ0VmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICBhc3NpZ25tZW50ID0gbGVmdFZhcmlhYmxlQXNzaWdubWVudDsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0VmFyaWFibGVBc3NpZ25tZW50ICE9PSBudWxsKSB7XG4gICAgICBhc3NpZ25tZW50ID0gcmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQ7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJFcXVhbGl0eVwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGVxdWFsaXR5Tm9kZSA9IGluc3RhbnRpYXRlRXF1YWxpdHkoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBlcXVhbGl0eU5vZGUsICAvLy9cbiAgICAgICAgICAgIGxlZnRUZXJtID0gbGVmdFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICByaWdodFRlcm0gPSByaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICBjb25zdCBlcXVhbGl0eSA9IG5ldyBFcXVhbGl0eShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxlZnRUZXJtLCByaWdodFRlcm0pO1xuXG4gICAgICByZXR1cm4gZXF1YWxpdHk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGxlZnRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgbGVmdFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShsZWZ0VGVybU5vZGUpO1xuXG4gIHJldHVybiBsZWZ0VGVybTtcbn1cblxuZnVuY3Rpb24gcmlnaHRUZXJtRnJvbUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmlnaHRUZXJtTm9kZSA9IGVxdWFsaXR5Tm9kZS5nZXRMZWZ0VGVybU5vZGUoKSxcbiAgICAgICAgcmlnaHRUZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUocmlnaHRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHJpZ2h0VGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJFcXVhbGl0eSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxlZnRUZXJtIiwicmlnaHRUZXJtIiwiZ2V0TGVmdFRlcm0iLCJnZXRSaWdodFRlcm0iLCJnZXRFcXVhbGl0eU5vZGUiLCJnZXROb2RlIiwiZXF1YWxpdHlOZGUiLCJnZXRMZWZ0VGVybU5vZGUiLCJsZWZ0VGVybU5vZGUiLCJnZXRSaWdodFRlcm1Ob2RlIiwicmlnaHRUZXJtTm9kZSIsImdldFR5cGUiLCJ0eXBlIiwibGVmdFRlcm1UeXBlIiwicmlnaHRUZXJtVHlwZSIsImxlZnRUZXJtVHlwZUVxdWFsVG9PclN1YlR5cGVPZlJpZ2h0VGVybVR5cGUiLCJpc0VxdWFsVG9PclN1YlR5cGVPZiIsInJpZ2h0VGVybVR5cGVFcXVhbFRvT3JTdWJUeXBlT2ZMZWZ0VGVybVR5cGUiLCJnZXRUZXJtcyIsInRlcm1zIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGVBIiwiZXF1YWxpdHlOb2RlQiIsImVxdWFsaXR5Tm9kZUFBTWF0Y2hlc0VxdWFsaXR5Qk5vZGVCIiwibWF0Y2giLCJlcXVhbGl0eU5vZGVNYXRjaGVzIiwiaXNSZWZsZXhpdmUiLCJsZWZ0VGVybVN0cmluZyIsImdldFN0cmluZyIsInJpZ2h0VGVybVN0cmluZyIsInJlZmxleGl2ZSIsImlzRXF1YWxUbyIsImVxdWFsaXR5IiwiZXF1YWxUbyIsImlzRXF1YWwiLCJlcXVhbCIsInRlcm1zRXF1YXRlIiwiZXF1YXRlVGVybXMiLCJmaW5kVmFsaWRFcXVhbGl0eSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwidmFsaWRFcXVhbGl0eSIsInZhbGlkYXRlIiwic3RhdGVkIiwiZXF1YWxpdHlTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwidGVybXNWYWxpZGF0ZSIsInZhbGlkYXRlVGVybXMiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzaWduIiwiYWRkRXF1YWxpdHkiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsImxlZnRUZXJtVHlwZUNvbXBhcmFibGVUb1JpZ2h0VGVybVR5cGUiLCJpc0NvbXBhcmFibGVUbyIsImVxdWFsaXR5QXNzaWdubWVudCIsImVxdWFsaXR5QXNzaWdubWVudEZyb21FcXVhbGl0eSIsImxlZnRWYXJpYWJsZUFzc2lnbm1lbnQiLCJsZWZ0VmFyaWFibGVBc3NpZ25tZW50RnJvbUVxdWFsaXR5IiwicmlnaHRWYXJpYWJsZUFzc2lnbm1lbnQiLCJyaWdodFZhcmlhYmxlQXNzaWdubWVudEZyb21FcXVhbGl0eSIsImFzc2lnbm1lbnQiLCJhZGRBc3NpZ25tZW50IiwibmFtZSIsInRvSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlRXF1YWxpdHkiLCJsZWZ0VGVybUZyb21FcXVhbGl0eU5vZGUiLCJyaWdodFRlcm1Gcm9tRXF1YWxpdHlOb2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztnQ0FSd0I7MEJBRUQ7eUJBQ0c7d0JBQ0U7NkJBQ1E7d0JBQ29GO01BRXhILFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsaUJBQWlCQyx1QkFBTztJQUNsRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsQ0FBRTtRQUN0RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDRixRQUFRO0lBQ3RCO0lBRUFHLGVBQWU7UUFDYixP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