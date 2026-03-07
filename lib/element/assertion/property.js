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
const _assertion = /*#__PURE__*/ _interop_require_default(require("../assertion"));
const _elements = require("../../elements");
const _context = require("../../utilities/context");
const _instantiate = require("../../process/instantiate");
const _assign = require("../../process/assign");
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class PropertyAssertion extends _assertion.default {
    constructor(context, string, node, term, propertyRelation){
        super(context, string, node);
        this.term = term;
        this.propertyRelation = propertyRelation;
    }
    getTerm() {
        return this.term;
    }
    getPropertyRelation() {
        return this.propertyRelation;
    }
    getPropertyAssertionNode() {
        const node = this.getNode(), propertyAssertionNode = node; ///
        return propertyAssertionNode;
    }
    compareTermAndPropertyRelation(term, propertyRelation, context) {
        let comparesToTermAndPropertyRelation = false;
        const termString = term.getString(), propertyRelationString = propertyRelation.getString(), propertyAssertionString = this.getString(); ///
        context.trace(`Comparing the '${propertyAssertionString}' property assertion to the '${termString}' term and '${propertyRelationString}' property relation...`);
        const termA = term, termB = this.term, termAEqualToTermB = termA.isEqualTo(termB);
        if (termAEqualToTermB) {
            const propertyRelationEqualToPropertyRelation = this.propertyRelation.isEqualTo(propertyRelation);
            comparesToTermAndPropertyRelation = propertyRelationEqualToPropertyRelation; ///
        }
        if (comparesToTermAndPropertyRelation) {
            context.debug(`...compared the '${propertyAssertionString}' property assertion to the '${termString}' term and '${propertyRelationString}' property relation.`);
        }
        return comparesToTermAndPropertyRelation;
    }
    validate(stated, context) {
        let propertyAssertion = null;
        const propertyAssertionString = this.getString(); ///
        context.trace(`Validating the '${propertyAssertionString}' property assertion...`);
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            propertyAssertion = validAssertion; ///
            context.debug(`...the '${propertyAssertionString}' property assertion is already valid.`);
        } else {
            let validates = false;
            const termValidates = this.validateTerm(stated, context);
            if (termValidates) {
                const propertyRelationVerifies = this.validatePropertyRelation(stated, context);
                if (propertyRelationVerifies) {
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
            }
            if (validates) {
                const assertion = this; ///
                propertyAssertion = assertion; ///
                this.assign(stated, context);
                context.addAssertion(assertion);
                context.debug(`...validated the '${propertyAssertionString}' property assertion.`);
            }
        }
        return propertyAssertion;
    }
    validateTerm(stated, context) {
        let termValidates = false;
        const termString = this.term.getString();
        context.trace(`Validating the '${termString}' term...`);
        const term = this.term.validate(context, ()=>{
            const validatesForwards = true;
            return validatesForwards;
        });
        if (term !== null) {
            this.term = term;
            termValidates = true;
        }
        if (termValidates) {
            context.debug(`...validated the '${termString}' term.`);
        }
        return termValidates;
    }
    validatePropertyRelation(stated, context) {
        let propertyRelationValidates = false;
        const propertyRelationString = this.propertyRelation.getString();
        context.trace(`Validating the '${propertyRelationString}' property relation...`);
        const propertyRelation = this.propertyRelation.validate(context);
        if (propertyRelation !== null) {
            propertyRelationValidates = true;
        }
        if (propertyRelationValidates) {
            context.debug(`...validated the '${propertyRelationString}' property relation.`);
        }
        return propertyRelationValidates;
    }
    validateWhenStated(context) {
        let validatesWhenStated;
        const propertyAssertionString = this.getString(); ///
        context.trace(`Validating the '${propertyAssertionString}' stated property assertion...`);
        validatesWhenStated = true;
        if (validatesWhenStated) {
            context.debug(`...validated the '${propertyAssertionString}' stated property assertion.`);
        }
        return validatesWhenStated;
    }
    validateWhenDerived(context) {
        let validatesWhenDerived;
        const propertyAssertionString = this.getString(); ///
        context.trace(`Validating the '${propertyAssertionString}' derived property assertion...`);
        validatesWhenDerived = true;
        if (validatesWhenDerived) {
            context.debug(`...validated the '${propertyAssertionString}' derived property assertion.`);
        }
        return validatesWhenDerived;
    }
    assign(stated, context) {
        if (!stated) {
            return;
        }
        const propertyAssertion = this, variableAssigment = (0, _assign.variableAssignmentFromPrepertyAssertion)(propertyAssertion, context), assignment = variableAssigment; ///
        context.addAssignment(assignment);
    }
    static name = "PropertyAssertion";
    static fromJSON(json, context) {
        let propertyAssertion = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.literally)((context)=>{
                const { string } = json, propertyAssertionNode = (0, _instantiate.instantiatePropertyAssertion)(string, context), node = propertyAssertionNode, term = (0, _element.termFromPropertyAssertionNode)(propertyAssertion, context), propertyRelation = (0, _element.propertyRelationFromPropertyAssertionNode)(propertyAssertionNode, context);
                context = null;
                propertyAssertion = new PropertyAssertion(context, string, node, term, propertyRelation);
            }, context);
        }
        return propertyAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5QXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlQXNzaWdubWVudEZyb21QcmVwZXJ0eUFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2Fzc2lnblwiO1xuaW1wb3J0IHsgdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUsIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eUFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHByb3BlcnR5UmVsYXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gdG8gdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFuZCAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1BID0gdGVybSxcbiAgICAgICAgICB0ZXJtQiA9IHRoaXMudGVybSwgLy8vXG4gICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb24gPSB0aGlzLnByb3BlcnR5UmVsYXRpb24uaXNFcXVhbFRvKHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb247ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gdG8gdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFuZCAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVByb3BlcnR5UmVsYXRpb24oc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvcGVydHlSZWxhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICgodGVybSAhPT0gbnVsbCkpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wZXJ0eVJlbGF0aW9uKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9uVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5UmVsYXRpb24gIT09IG51bGwpIHtcbiAgICAgIHByb3BlcnR5UmVsYXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICBhc3NpZ24oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgaWYgKCFzdGF0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHZhcmlhYmxlQXNzaWdtZW50ID0gdmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uKHByb3BlcnR5QXNzZXJ0aW9uLCBjb250ZXh0KSxcbiAgICAgICAgICBhc3NpZ25tZW50ID0gdmFyaWFibGVBc3NpZ21lbnQ7IC8vL1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5QXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZVByb3BlcnR5QXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvcGVydHlBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0VGVybSIsImdldFByb3BlcnR5UmVsYXRpb24iLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXROb2RlIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJwcm9wZXJ0eUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidGVybUEiLCJ0ZXJtQiIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHJvcGVydHlSZWxhdGlvbkVxdWFsVG9Qcm9wZXJ0eVJlbGF0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInByb3BlcnR5QXNzZXJ0aW9uIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJ2YWxpZGF0ZXMiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwicHJvcGVydHlSZWxhdGlvblZlcmlmaWVzIiwidmFsaWRhdGVQcm9wZXJ0eVJlbGF0aW9uIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2VydGlvbiIsImFzc2lnbiIsImFkZEFzc2VydGlvbiIsInZhbGlkYXRlc0ZvcndhcmRzIiwicHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcyIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uIiwiYXNzaWdubWVudCIsImFkZEFzc2lnbm1lbnQiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVQcm9wZXJ0eUFzc2VydGlvbiIsInRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2tFQVJzQjswQkFFQzt5QkFDRzs2QkFDbUI7d0JBQ1c7eUJBQ2lDOzs7Ozs7TUFFekYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywwQkFBMEJDLGtCQUFTO0lBQzdELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsZ0JBQWdCLENBQUU7UUFDekQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtJQUMxQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFF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