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
        let propertyRelationVerifies;
        const propertyRelationString = this.propertyRelation.getString();
        context.trace(`Validating the '${propertyRelationString}' property relation...`);
        propertyRelationVerifies = this.propertyRelation.validate(context);
        if (propertyRelationVerifies) {
            context.debug(`...validated the '${propertyRelationString}' property relation.`);
        }
        return propertyRelationVerifies;
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
    toJSON() {
        const { name } = this.constructor, string = this.getString(), json = {
            name,
            string
        };
        return json;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByb3BlcnR5QXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHZhcmlhYmxlQXNzaWdubWVudEZyb21QcmVwZXJ0eUFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2Fzc2lnblwiO1xuaW1wb3J0IHsgdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUsIHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcm9wZXJ0eUFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgcHJvcGVydHlSZWxhdGlvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHByb3BlcnR5UmVsYXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gdG8gdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFuZCAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRlcm1BID0gdGVybSxcbiAgICAgICAgICB0ZXJtQiA9IHRoaXMudGVybSwgLy8vXG4gICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb24gPSB0aGlzLnByb3BlcnR5UmVsYXRpb24uaXNFcXVhbFRvKHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb247ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gdG8gdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGFuZCAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVByb3BlcnR5UmVsYXRpb24oc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvcGVydHlSZWxhdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICgodGVybSAhPT0gbnVsbCkpIHtcbiAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wZXJ0eVJlbGF0aW9uKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlSZWxhdGlvblN0cmluZ30nIHByb3BlcnR5IHJlbGF0aW9uLi4uYCk7XG5cbiAgICBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMgPSB0aGlzLnByb3BlcnR5UmVsYXRpb24udmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocHJvcGVydHlSZWxhdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIGFzc2lnbihzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBpZiAoIXN0YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ21lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tUHJlcGVydHlBc3NlcnRpb24ocHJvcGVydHlBc3NlcnRpb24sIGNvbnRleHQpLFxuICAgICAgICAgIGFzc2lnbm1lbnQgPSB2YXJpYWJsZUFzc2lnbWVudDsgLy8vXG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJvcGVydHlBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlUHJvcGVydHlBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb24sIGNvbnRleHQpLFxuICAgICAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IG5ldyBQcm9wZXJ0eUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eUFzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJnZXRUZXJtIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsInByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtQSIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlIiwic3RhdGVkIiwicHJvcGVydHlBc3NlcnRpb24iLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsInZhbGlkYXRlcyIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMiLCJ2YWxpZGF0ZVByb3BlcnR5UmVsYXRpb24iLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYXNzaWduIiwiYWRkQXNzZXJ0aW9uIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ2YXJpYWJsZUFzc2lnbWVudCIsInZhcmlhYmxlQXNzaWdubWVudEZyb21QcmVwZXJ0eUFzc2VydGlvbiIsImFzc2lnbm1lbnQiLCJhZGRBc3NpZ25tZW50IiwidG9KU09OIiwibmFtZSIsImpzb24iLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlUHJvcGVydHlBc3NlcnRpb24iLCJ0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztrRUFSc0I7MEJBRUM7eUJBQ0c7NkJBQ21CO3dCQUNXO3lCQUNpQzs7Ozs7O01BRXpGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMEJBQTBCQyxrQkFBUztJQUM3RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLGdCQUFnQixDQUFFO1FBQ3pELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1os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