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
        const propertyAssertion = this, variableAssigment = (0, _assign.variableAssignmentFromPrepertyAssertion)(propertyAssertion, context);
        context.addAssignment(variableAssigment);
    }
    static name = "PropertyAssertion";
    static fromJSON(json, context) {
        let propertyAssertion = null;
        const { name } = json;
        if (this.name === name) {
            propertyAssertion = (0, _context.instantiate)((context)=>{
                const { string } = json, propertyAssertionNode = (0, _instantiate.instantiatePropertyAssertion)(string, context), node = propertyAssertionNode, term = (0, _element.termFromPropertyAssertionNode)(propertyAssertionNode, context), propertyRelation = (0, _element.propertyRelationFromPropertyAssertionNode)(propertyAssertionNode, context);
                context = null;
                const propertyAssertion = new PropertyAssertion(context, string, node, term, propertyRelation);
                return propertyAssertion;
            }, context);
        }
        return propertyAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5QXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5wcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFByb3BlcnR5UmVsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIGdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLFxuICAgICAgICAgIHRlcm1CID0gdGhpcy50ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5pc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbjsgIC8vL1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbikge1xuICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgIHRoaXMuYXNzaWduKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbihzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uICE9PSBudWxsKSB7XG4gICAgICBwcm9wZXJ0eVJlbGF0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21QcmVwZXJ0eUFzc2VydGlvbihwcm9wZXJ0eUFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQodmFyaWFibGVBc3NpZ21lbnQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5QXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVQcm9wZXJ0eUFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvbiA9IG5ldyBQcm9wZXJ0eUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuXG4gICAgICAgIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJvcGVydHlBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0VGVybSIsImdldFByb3BlcnR5UmVsYXRpb24iLCJnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXROb2RlIiwicHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJwcm9wZXJ0eUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidGVybUEiLCJ0ZXJtQiIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHJvcGVydHlSZWxhdGlvbkVxdWFsVG9Qcm9wZXJ0eVJlbGF0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInByb3BlcnR5QXNzZXJ0aW9uIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJ2YWxpZGF0ZXMiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwicHJvcGVydHlSZWxhdGlvblZlcmlmaWVzIiwidmFsaWRhdGVQcm9wZXJ0eVJlbGF0aW9uIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2VydGlvbiIsImFzc2lnbiIsImFkZEFzc2VydGlvbiIsInZhbGlkYXRlc0ZvcndhcmRzIiwicHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcyIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uIiwiYWRkQXNzaWdubWVudCIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJvcGVydHlBc3NlcnRpb24iLCJ0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztrRUFSc0I7MEJBRUM7eUJBQ0s7NkJBQ2lCO3dCQUNXO3lCQUNpQzs7Ozs7O01BRXpGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMEJBQTBCQyxrQkFBUztJQUM3RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLGdCQUFnQixDQUFFO1FBQ3pELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxnQkFBZ0IsR0FBR0E7SUFDMUI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFB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