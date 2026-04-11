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
        let validates = false;
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion) {
            validates = true;
            propertyAssertion = validAssertion; ///
            context.debug(`...the '${propertyAssertionString}' property assertion is already valid.`);
        } else {
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
            }
        }
        if (validates) {
            context.debug(`...validated the '${propertyAssertionString}' property assertion.`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9wcm9wZXJ0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEFzc2VydGlvbiBmcm9tIFwiLi4vYXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlUHJvcGVydHlBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdmFyaWFibGVBc3NpZ25tZW50RnJvbVByZXBlcnR5QXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvYXNzaWduXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgcHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSwgcHJvcGVydHlSZWxhdGlvbkZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByb3BlcnR5QXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMucHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBnZXRQcm9wZXJ0eUFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7IHJldHVybiB0aGlzLnByb3BlcnR5UmVsYXRpb24uZ2V0VHlwZSgpOyB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eVJlbGF0aW9uU3RyaW5nID0gcHJvcGVydHlSZWxhdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLFxuICAgICAgICAgIHRlcm1CID0gdGhpcy50ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgIGNvbnN0IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi5pc0VxdWFsVG8ocHJvcGVydHlSZWxhdGlvbik7XG5cbiAgICAgIGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25FcXVhbFRvUHJvcGVydHlSZWxhdGlvbjsgIC8vL1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbiB0byB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gYW5kICcke3Byb3BlcnR5UmVsYXRpb25TdHJpbmd9JyBwcm9wZXJ0eSByZWxhdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eUFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHByb3BlcnR5QXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvcGVydHlSZWxhdGlvblZlcmlmaWVzID0gdGhpcy52YWxpZGF0ZVByb3BlcnR5UmVsYXRpb24oY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICB0aGlzLmFzc2lnbihjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgcHJvcGVydHkgYXNzZXJ0aW9uJ3MgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZ2V0VHlwZSgpLFxuICAgICAgICAgIHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGxldCB2YWxpZGF0ZXNGb3J3YXJkcyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpLFxuICAgICAgICAgICAgICAgICAgdGVybVR5cGVFcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2ZUeXBlID0gdGVybVR5cGUuaXNFcXVhbFRvU3ViVHlwZU9yU3VwZXJUeXBlT2YodHlwZSk7XG5cbiAgICAgICAgICAgIGlmICh0ZXJtVHlwZUVxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZlR5cGUpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24ncyB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgcHJvcGVydHlBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHByb3BlcnR5IGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3Byb3BlcnR5QXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgcHJvcGVydHkgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIHByb3BlcnR5IGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVByb3BlcnR5UmVsYXRpb24oY29udGV4dCkge1xuICAgIGxldCBwcm9wZXJ0eVJlbGF0aW9uVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9wZXJ0eUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJvcGVydHlBc3NlcnRpb25TdHJpbmd9JyBwcm9wZXJ0eSBhc3NlcnRpb24ncyBwcm9wZXJ0eSByZWxhdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvcGVydHlSZWxhdGlvbiA9IHRoaXMucHJvcGVydHlSZWxhdGlvbi52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChwcm9wZXJ0eVJlbGF0aW9uICE9PSBudWxsKSB7XG4gICAgICBwcm9wZXJ0eVJlbGF0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvcGVydHlSZWxhdGlvblZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcm9wZXJ0eUFzc2VydGlvblN0cmluZ30nIHByb3BlcnR5IGFzc2VydGlvbidzIHByb3BlcnR5IHJlbGF0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0eVJlbGF0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgYXNzaWduKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICBpZiAoIXN0YXRlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHByb3BlcnR5QXNzZXJ0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVBc3NpZ21lbnQgPSB2YXJpYWJsZUFzc2lnbm1lbnRGcm9tUHJlcGVydHlBc3NlcnRpb24ocHJvcGVydHlBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dC5hZGRBc3NpZ25tZW50KHZhcmlhYmxlQXNzaWdtZW50KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcm9wZXJ0eUFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb3BlcnR5QXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIHByb3BlcnR5QXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlUHJvcGVydHlBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUocHJvcGVydHlBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcHJvcGVydHlSZWxhdGlvbiA9IHByb3BlcnR5UmVsYXRpb25Gcm9tUHJvcGVydHlBc3NlcnRpb25Ob2RlKHByb3BlcnR5QXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBuZXcgUHJvcGVydHlBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIHByb3BlcnR5UmVsYXRpb24pO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgcHJvcGVydHlBc3NlcnRpb24gPSBwcm9wZXJ0eUFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByb3BlcnR5QXNzZXJ0aW9uO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcm9wZXJ0eUFzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidGVybSIsInByb3BlcnR5UmVsYXRpb24iLCJnZXRUZXJtIiwiZ2V0UHJvcGVydHlSZWxhdGlvbiIsImdldFByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJwcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJnZXRUeXBlIiwiY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInByb3BlcnR5UmVsYXRpb25TdHJpbmciLCJwcm9wZXJ0eUFzc2VydGlvblN0cmluZyIsInRyYWNlIiwidGVybUEiLCJ0ZXJtQiIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHJvcGVydHlSZWxhdGlvbkVxdWFsVG9Qcm9wZXJ0eVJlbGF0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZSIsInByb3BlcnR5QXNzZXJ0aW9uIiwidmFsaWRhdGVzIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uVmVyaWZpZXMiLCJ2YWxpZGF0ZVByb3BlcnR5UmVsYXRpb24iLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYXNzaWduIiwiYWRkQXNzZXJ0aW9uIiwidHlwZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidGVybVR5cGUiLCJ0ZXJtVHlwZUVxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZlR5cGUiLCJpc0VxdWFsVG9TdWJUeXBlT3JTdXBlclR5cGVPZiIsInByb3BlcnR5UmVsYXRpb25WYWxpZGF0ZXMiLCJ2YXJpYWJsZUFzc2lnbWVudCIsInZhcmlhYmxlQXNzaWdubWVudEZyb21QcmVwZXJ0eUFzc2VydGlvbiIsImFkZEFzc2lnbm1lbnQiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVByb3BlcnR5QXNzZXJ0aW9uIiwidGVybUZyb21Qcm9wZXJ0eUFzc2VydGlvbk5vZGUiLCJwcm9wZXJ0eVJlbGF0aW9uRnJvbVByb3BlcnR5QXNzZXJ0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwicHJvcGVydHlBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7a0VBUnNCOzBCQUVDO3lCQUNLOzZCQUNpQjt3QkFDVzt5QkFDcUU7Ozs7OztNQUU3SCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDBCQUEwQkMsa0JBQVM7SUFDN0QsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFF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