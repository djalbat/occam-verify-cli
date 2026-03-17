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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5QXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5wcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldFByb3BlcnR5UmVsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvcGVydHlSZWxhdGlvbjtcbiAgfVxuXG4gIGdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLFxuICAgICAgICAgIHRlcm1CID0gdGhpcy50ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5pc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbjsgIC8vL1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbikge1xuICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbihzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgIHRoaXMuYXNzaWduKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eUFzc2VydGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbihzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblN0cmluZyA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uICE9PSBudWxsKSB7XG4gICAgICBwcm9wZXJ0eVJlbGF0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nfScgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgYXNzaWduKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21QcmVwZXJ0eUFzc2VydGlvbihwcm9wZXJ0eUFzc2VydGlvbiwgY29udGV4dCksXG4gICAgICAgICAgYXNzaWdubWVudCA9IHZhcmlhYmxlQXNzaWdtZW50OyAvLy9cblxuICAgIGNvbnRleHQuYWRkQXNzaWdubWVudChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eUFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlUHJvcGVydHlBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKTtcblxuICAgICAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFRlcm0iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsImNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nIiwicHJvcGVydHlBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsInRlcm1BIiwidGVybUIiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsImlzRXF1YWxUbyIsInByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbiIsImRlYnVnIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJwcm9wZXJ0eUFzc2VydGlvbiIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwidmFsaWRhdGVzIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsInByb3BlcnR5UmVsYXRpb25WZXJpZmllcyIsInZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbiIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NlcnRpb24iLCJhc3NpZ24iLCJhZGRBc3NlcnRpb24iLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInByb3BlcnR5UmVsYXRpb25WYWxpZGF0ZXMiLCJ2YXJpYWJsZUFzc2lnbWVudCIsInZhcmlhYmxlQXNzaWdubWVudEZyb21QcmVwZXJ0eUFzc2VydGlvbiIsImFzc2lnbm1lbnQiLCJhZGRBc3NpZ25tZW50IiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVQcm9wZXJ0eUFzc2VydGlvbiIsInRlcm1Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwicHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2tFQVJzQjswQkFFQzt5QkFDSzs2QkFDaUI7d0JBQ1c7eUJBQ2lDOzs7Ozs7TUFFekYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywwQkFBMEJDLGtCQUFTO0lBQzdELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsZ0JBQWdCLENBQUU7UUFDekQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLGdCQUFnQixHQUFHQTtJQUMxQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNGLElBQUk7SUFDbEI7SUFFQUcsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDRixnQkFBZ0I7SUFDOUI7SUFFQUcsMkJBQTJCO1FBQ3pCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyx3QkFBd0JQLE1BQU0sR0FBRztRQUV2QyxPQUFPTztJQUNUO0lBRUFDLCtCQUErQlAsSUFBSSxFQUFFQyxnQkFBZ0IsRUFBRUosT0FBTyxFQUFFO1FBQzlELElBQUlXLG9DQUFvQztRQUV4QyxNQUFNQyxhQUFhVCxLQUFLVSxTQUFTLElBQzNCQyx5QkFBeUJWLGlCQUFpQlMsU0FBUyxJQUNuREUsMEJBQTBCLElBQUksQ0FBQ0YsU0FBUyxJQUFJLEdBQUc7UUFFckRiLFFBQVFnQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVELHdCQUF3Qiw2QkFBNkIsRUFBRUgsV0FBVyxZQUFZLEVBQUVFLHVCQUF1QixzQkFBc0IsQ0FBQztRQUU5SixNQUFNRyxRQUFRZCxNQUNSZSxRQUFRLElBQUksQ0FBQ2YsSUFBSSxFQUNqQmdCLG9CQUFvQkYsTUFBTUcsU0FBUyxDQUFDRjtRQUUxQyxJQUFJQyxtQkFBbUI7WUFDckIsTUFBTUUsMENBQTBDLElBQUksQ0FBQ2pCLGdCQUFnQixDQUFDZ0IsU0FBUyxDQUFDaEI7WUFFaEZPLG9DQUFvQ1UseUNBQTBDLEdBQUc7UUFDbkY7UUFFQSxJQUFJVixtQ0FBbUM7WUFDckNYLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVAsd0JBQXdCLDZCQUE2QixFQUFFSCxXQUFXLFlBQVksRUFBRUUsdUJBQXVCLG9CQUFvQixDQUFDO1FBQ2hLO1FBRUEsT0FBT0g7SUFDVDtJQUVBWSxTQUFTQyxNQUFNLEVBQUV4QixPQUFPLEVBQUU7UUFDeEIsSUFBSXlCLG9CQUFvQjtRQUV4QixNQUFNViwwQkFBMEIsSUFBSSxDQUFDRixTQUFTLElBQUksR0FBRztRQUVyRGIsUUFBUWdCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRCx3QkFBd0IsdUJBQXVCLENBQUM7UUFFakYsTUFBTVcsaUJBQWlCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMzQjtRQUUvQyxJQUFJMEIsZ0JBQWdCO1lBQ2xCRCxvQkFBb0JDLGdCQUFnQixHQUFHO1lBRXZDMUIsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRVAsd0JBQXdCLHNDQUFzQyxDQUFDO1FBQzFGLE9BQU87WUFDTCxJQUFJYSxZQUFZO1lBRWhCLE1BQU1DLGdCQUFnQixJQUFJLENBQUNDLFlBQVksQ0FBQ04sUUFBUXhCO1lBRWhELElBQUk2QixlQUFlO2dCQUNqQixNQUFNRSwyQkFBMkIsSUFBSSxDQUFDQyx3QkFBd0IsQ0FBQ1IsUUFBUXhCO2dCQUV2RSxJQUFJK0IsMEJBQTBCO29CQUM1QixJQUFJRSxzQkFBc0IsT0FDdEJDLHVCQUF1QjtvQkFFM0IsSUFBSVYsUUFBUTt3QkFDVlMsc0JBQXNCLElBQUksQ0FBQ0Usa0JBQWtCLENBQUNuQztvQkFDaEQsT0FBTzt3QkFDTGtDLHVCQUF1QixJQUFJLENBQUNFLG1CQUFtQixDQUFDcEM7b0JBQ2xEO29CQUVBLElBQUlpQyx1QkFBdUJDLHNCQUFzQjt3QkFDL0NOLFlBQVk7b0JBQ2Q7Z0JBQ0Y7WUFDRjtZQUVBLElBQUlBLFdBQVc7Z0JBQ2IsTUFBTVMsWUFBWSxJQUFJLEVBQUUsR0FBRztnQkFFM0JaLG9CQUFvQlksV0FBWSxHQUFHO2dCQUVuQyxJQUFJLENBQUNDLE1BQU0sQ0FBQ2QsUUFBUXhCO2dCQUVwQkEsUUFBUXVDLFlBQVksQ0FBQ0Y7Z0JBRXJCckMsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFUCx3QkFBd0IscUJBQXFCLENBQUM7WUFDbkY7UUFDRjtRQUVBLE9BQU9VO0lBQ1Q7SUFFQUssYUFBYU4sTUFBTSxFQUFFeEIsT0FBTyxFQUFFO1FBQzVCLElBQUk2QixnQkFBZ0I7UUFFcEIsTUFBTWpCLGFBQWEsSUFBSSxDQUFDVCxJQUFJLENBQUNVLFNBQVM7UUFFdENiLFFBQVFnQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUosV0FBVyxTQUFTLENBQUM7UUFFdEQsTUFBTVQsT0FBTyxJQUFJLENBQUNBLElBQUksQ0FBQ29CLFFBQVEsQ0FBQ3ZCLFNBQVMsQ0FBQ0c7WUFDeEMsTUFBTXFDLG9CQUFvQjtZQUUxQixPQUFPQTtRQUNUO1FBRUEsSUFBSXJDLFNBQVMsTUFBTTtZQUNqQixJQUFJLENBQUNBLElBQUksR0FBR0E7WUFFWjBCLGdCQUFnQjtRQUNsQjtRQUVBLElBQUlBLGVBQWU7WUFDakI3QixRQUFRc0IsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVWLFdBQVcsT0FBTyxDQUFDO1FBQ3hEO1FBRUEsT0FBT2lCO0lBQ1Q7SUFFQUcseUJBQXlCUixNQUFNLEVBQUV4QixPQUFPLEVBQUU7UUFDeEMsSUFBSXlDLDRCQUE0QjtRQUVoQyxNQUFNM0IseUJBQXlCLElBQUksQ0FBQ1YsZ0JBQWdCLENBQUNTLFNBQVM7UUFFOURiLFFBQVFnQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsdUJBQXVCLHNCQUFzQixDQUFDO1FBRS9FLE1BQU1WLG1CQUFtQixJQUFJLENBQUNBLGdCQUFnQixDQUFDbUIsUUFBUSxDQUFDdkI7UUFFeEQsSUFBSUkscUJBQXFCLE1BQU07WUFDN0JxQyw0QkFBNEI7UUFDOUI7UUFFQSxJQUFJQSwyQkFBMkI7WUFDN0J6QyxRQUFRc0IsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVSLHVCQUF1QixvQkFBb0IsQ0FBQztRQUNqRjtRQUVBLE9BQU8yQjtJQUNUO0lBRUFOLG1CQUFtQm5DLE9BQU8sRUFBRTtRQUMxQixJQUFJaUM7UUFFSixNQUFNbEIsMEJBQTBCLElBQUksQ0FBQ0YsU0FBUyxJQUFJLEdBQUc7UUFFckRiLFFBQVFnQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUQsd0JBQXdCLDhCQUE4QixDQUFDO1FBRXhGa0Isc0JBQXNCO1FBRXRCLElBQUlBLHFCQUFxQjtZQUN2QmpDLFFBQVFzQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRVAsd0JBQXdCLDRCQUE0QixDQUFDO1FBQzFGO1FBRUEsT0FBT2tCO0lBQ1Q7SUFFQUcsb0JBQW9CcEMsT0FBTyxFQUFFO1FBQzNCLElBQUlrQztRQUVKLE1BQU1uQiwwQkFBMEIsSUFBSSxDQUFDRixTQUFTLElBQUksR0FBRztRQUVyRGIsUUFBUWdCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRCx3QkFBd0IsK0JBQStCLENBQUM7UUFFekZtQix1QkFBdUI7UUFFdkIsSUFBSUEsc0JBQXNCO1lBQ3hCbEMsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFUCx3QkFBd0IsNkJBQTZCLENBQUM7UUFDM0Y7UUFFQSxPQUFPbUI7SUFDVDtJQUVBSSxPQUFPZCxNQUFNLEVBQUV4QixPQUFPLEVBQUU7UUFDdEIsSUFBSSxDQUFDd0IsUUFBUTtZQUNYO1FBQ0Y7UUFFQSxNQUFNQyxvQkFBb0IsSUFBSSxFQUN4QmlCLG9CQUFvQkMsSUFBQUEsK0NBQXVDLEVBQUNsQixtQkFBbUJ6QixVQUMvRTRDLGFBQWFGLG1CQUFtQixHQUFHO1FBRXpDMUMsUUFBUTZDLGFBQWEsQ0FBQ0Q7SUFDeEI7SUFFQSxPQUFPRSxPQUFPLG9CQUFvQjtJQUVsQyxPQUFPQyxTQUFTQyxJQUFJLEVBQUVoRCxPQUFPLEVBQUU7UUFDN0IsSUFBSXlCLG9CQUFvQjtRQUV4QixNQUFNLEVBQUVxQixJQUFJLEVBQUUsR0FBR0U7UUFFakIsSUFBSSxJQUFJLENBQUNGLElBQUksS0FBS0EsTUFBTTtZQUN0QnJCLG9CQUFvQndCLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ2pEO2dCQUMvQixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHK0MsTUFDYnZDLHdCQUF3QnlDLElBQUFBLHlDQUE0QixFQUFDakQsUUFBUUQsVUFDN0RFLE9BQU9PLHVCQUNQTixPQUFPZ0QsSUFBQUEsc0NBQTZCLEVBQUMxQyx1QkFBdUJULFVBQzVESSxtQkFBbUJnRCxJQUFBQSxrREFBeUMsRUFBQzNDLHVCQUF1QlQ7Z0JBRTFGQSxVQUFVO2dCQUVWLE1BQU15QixvQkFBb0IsSUFBSTNCLGtCQUFrQkUsU0FBU0MsUUFBUUMsTUFBTUMsTUFBTUM7Z0JBRTdFLE9BQU9xQjtZQUNULEdBQUd6QjtRQUNMO1FBRUEsT0FBT3lCO0lBQ1Q7QUFDRiJ9