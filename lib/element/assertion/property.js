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
    constructor(context, string, node, lineIndex, term, propertyRelation){
        super(context, string, node, lineIndex);
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
    getType() {
        return this.propertyRelation.getType();
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
    validate(context) {
        let propertyAssertion = null;
        const propertyAssertionString = this.getString(); ///
        context.trace(`Validating the '${propertyAssertionString}' property assertion...`);
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            propertyAssertion = validAssertion; ///
            context.debug(`...the '${propertyAssertionString}' property assertion is already valid.`);
        } else {
            let validates = false;
            const propertyRelationVerifies = this.validatePropertyRelation(context);
            if (propertyRelationVerifies) {
                const termValidates = this.validateTerm(context);
                if (termValidates) {
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
            }
            if (validates) {
                const assertion = this; ///
                propertyAssertion = assertion; ///
                this.assign(context);
                context.addAssertion(assertion);
                context.debug(`...validated the '${propertyAssertionString}' property assertion.`);
            }
        }
        return propertyAssertion;
    }
    validateTerm(context) {
        let termValidates = false;
        const propertyAssertionString = this.getString(); ///
        context.trace(`Validating the '${propertyAssertionString}' property assertion's term...`);
        const type = this.getType(), term = this.term.validate(context, (term)=>{
            let validatesForwards = false;
            const termType = term.getType(), termTypeEqualToSubTypeOrSuperTypeOfType = termType.isEqualToSubTypeOrSuperTypeOf(type);
            if (termTypeEqualToSubTypeOrSuperTypeOfType) {
                validatesForwards = true;
            }
            return validatesForwards;
        });
        if (term !== null) {
            this.term = term;
            termValidates = true;
        }
        if (termValidates) {
            context.debug(`...validated the '${propertyAssertionString}' property assertion's term...`);
        }
        return termValidates;
    }
    validateWhenStated(context) {
        let validatesWhenStated;
        const propertyAssertionString = this.getString(); ///
        context.trace(`Validating the '${propertyAssertionString}' stated property assertion...`);
        validatesWhenStated = true;
        if (validatesWhenStated) {
            context.debug(`...verified the '${propertyAssertionString}' stated property assertion.`);
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
    validatePropertyRelation(context) {
        let propertyRelationValidates = false;
        const propertyAssertionString = this.getString(); ///
        context.trace(`Validating the '${propertyAssertionString}' property assertion's property relation...`);
        const propertyRelation = this.propertyRelation.validate(context);
        if (propertyRelation !== null) {
            propertyRelationValidates = true;
        }
        if (propertyRelationValidates) {
            context.debug(`...validated the '${propertyAssertionString}' property assertion's property relation.`);
        }
        return propertyRelationValidates;
    }
    assign(context) {
        const stated = context.isStated();
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
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, propertyAssertionNode = (0, _instantiate.instantiatePropertyAssertion)(string, context), node = propertyAssertionNode, term = (0, _element.termFromPropertyAssertionNode)(propertyAssertionNode, context), propertyRelation = (0, _element.propertyRelationFromPropertyAssertionNode)(propertyAssertionNode, context);
                context = null;
                propertyAssertion = new PropertyAssertion(context, string, node, lineIndex, term, propertyRelation);
            }, context);
        }
        return propertyAssertion;
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), propertyAssertion = (0, _element.propertyAssertionFromStatementNode)(statementNode, context);
        return propertyAssertion;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSwgcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5QXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb24uZ2V0VHlwZSgpOyB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLFxuICAgICAgICAgIHRlcm1CID0gdGhpcy50ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5pc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbjsgIC8vL1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMgPSB0aGlzLnZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbihjb250ZXh0KTtcblxuICAgICAgaWYgKHByb3BlcnR5UmVsYXRpb25WZXJpZmllcykge1xuICAgICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgIHRoaXMuYXNzaWduKGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24ncyB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0eXBlID0gdGhpcy5nZXRUeXBlKCksXG4gICAgICAgICAgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgICAgICAgbGV0IHZhbGlkYXRlc0ZvcndhcmRzID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCksXG4gICAgICAgICAgICAgICAgICB0ZXJtVHlwZUVxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZlR5cGUgPSB0ZXJtVHlwZS5pc0VxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZih0eXBlKTtcblxuICAgICAgICAgICAgaWYgKHRlcm1UeXBlRXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mVHlwZSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgICB9KTtcblxuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzIHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5UmVsYXRpb25WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzIHByb3BlcnR5IHJlbGF0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBwcm9wZXJ0eVJlbGF0aW9uID0gdGhpcy5wcm9wZXJ0eVJlbGF0aW9uLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb3BlcnR5UmVsYXRpb24gIT09IG51bGwpIHtcbiAgICAgIHByb3BlcnR5UmVsYXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgcHJvcGVydHkgcmVsYXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICBhc3NpZ24oY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgIGlmICghc3RhdGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICB2YXJpYWJsZUFzc2lnbWVudCA9IHZhcmlhYmxlQXNzaWdubWVudEZyb21QcmVwZXJ0eUFzc2VydGlvbihwcm9wZXJ0eUFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0LmFkZEFzc2lnbm1lbnQodmFyaWFibGVBc3NpZ21lbnQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByb3BlcnR5QXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvcGVydHlBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgICAgcHJvcGVydHlBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVQcm9wZXJ0eUFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gcHJvcGVydHlBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZShwcm9wZXJ0eUFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uID0gcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IG5ldyBQcm9wZXJ0eUFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgcHJvcGVydHlSZWxhdGlvbik7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvbiA9IHByb3BlcnR5QXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJvcGVydHlBc3NlcnRpb247XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByb3BlcnR5QXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0ZXJtIiwicHJvcGVydHlSZWxhdGlvbiIsImdldFRlcm0iLCJnZXRQcm9wZXJ0eVJlbGF0aW9uIiwiZ2V0UHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsInByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldFR5cGUiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwicHJvcGVydHlSZWxhdGlvblN0cmluZyIsInByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJ0ZXJtQSIsInRlcm1CIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJwcm9wZXJ0eVJlbGF0aW9uRXF1YWxUb1Byb3BlcnR5UmVsYXRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlIiwicHJvcGVydHlBc3NlcnRpb24iLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsInZhbGlkYXRlcyIsInByb3BlcnR5UmVsYXRpb25WZXJpZmllcyIsInZhbGlkYXRlUHJvcGVydHlSZWxhdGlvbiIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NlcnRpb24iLCJhc3NpZ24iLCJhZGRBc3NlcnRpb24iLCJ0eXBlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0ZXJtVHlwZSIsInRlcm1UeXBlRXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mVHlwZSIsImlzRXF1YWxUb1N1YlR5cGVPclN1cGVyVHlwZU9mIiwicHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcyIsInZhcmlhYmxlQXNzaWdtZW50IiwidmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uIiwiYWRkQXNzaWdubWVudCIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJvcGVydHlBc3NlcnRpb24iLCJ0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsInByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztrRUFSc0I7MEJBRUM7eUJBQ0s7NkJBQ2lCO3dCQUNXO3lCQUNxRTs7Ozs7O01BRTdILFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMEJBQTBCQyxrQkFBUztJQUM3RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRUMsZ0JBQWdCLENBQUU7UUFDcEUsS0FBSyxDQUFDTCxTQUFTQyxRQUFR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