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
        const term = this.term.validate(context, (term)=>{
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
            (0, _context.instantiate)((context)=>{
                const { string } = json, propertyAssertionNode = (0, _instantiate.instantiatePropertyAssertion)(string, context), node = propertyAssertionNode, term = (0, _element.termFromPropertyAssertionNode)(propertyAssertion, context), propertyRelation = (0, _element.propertyRelationFromPropertyAssertionNode)(propertyAssertionNode, context);
                context = null;
                propertyAssertion = new PropertyAssertion(context, string, node, term, propertyRelation);
            }, context);
        }
        return propertyAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5QXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5wcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFByb3BlcnR5UmVsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIGdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLFxuICAgICAgICAgIHRlcm1CID0gdGhpcy50ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5pc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbjsgIC8vL1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbikge1xuICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgIHRoaXMuYXNzaWduKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbihzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uICE9PSBudWxsKSB7XG4gICAgICBwcm9wZXJ0eVJlbGF0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21QcmVwZXJ0eUFzc2VydGlvbihwcm9wZXJ0eUFzc2VydGlvbiwgY29udGV4dCksXG4gICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdtZW50OyAvLy9cblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eUFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZVByb3BlcnR5QXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBwcm9wZXJ0eUFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvcGVydHlBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0VGVybSIsImdldFByb3BlcnR5UmVsYXRpb24iLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXROb2RlIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJwcm9wZXJ0eUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidGVybUEiLCJ0ZXJtQiIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHJvcGVydHlSZWxhdGlvbkVxdWFsVG9Qcm9wZXJ0eVJlbGF0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInByb3BlcnR5QXNzZXJ0aW9uIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJ2YWxpZGF0ZXMiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwicHJvcGVydHlSZWxhdGlvblZlcmlmaWVzIiwidmFsaWRhdGVQcm9wZXJ0eVJlbGF0aW9uIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2VydGlvbiIsImFzc2lnbiIsImFkZEFzc2VydGlvbiIsInZhbGlkYXRlc0ZvcndhcmRzIiwicHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcyIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uIiwiYXNzaWdubWVudCIsImFkZEFzc2lnbm1lbnQiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVByb3BlcnR5QXNzZXJ0aW9uIiwidGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7a0VBUnNCOzBCQUVDO3lCQUNLOzZCQUNpQjt3QkFDVzt5QkFDaUM7Ozs7OztNQUV6RixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDBCQUEwQkMsa0JBQVM7SUFDN0QsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxnQkFBZ0IsQ0FBRTtRQUN6RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsZ0JBQWdCLEdBQUdBO0lBQzFCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0YsSUFBSTtJ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