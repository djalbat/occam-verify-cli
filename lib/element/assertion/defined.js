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
const _substitutions = require("../../utilities/substitutions");
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class DefinedAssertion extends _assertion.default {
    constructor(context, string, node, term, frame, negated){
        super(context, string, node);
        this.term = term;
        this.frame = frame;
        this.negated = negated;
    }
    getTerm() {
        return this.term;
    }
    getFrame() {
        return this.frame;
    }
    isNegated() {
        return this.negated;
    }
    getDefinedAssertionNode() {
        const node = this.getNode(), definedAssertionNode = node; ///
        return definedAssertionNode;
    }
    validate(stated, context) {
        let definedAssertion = null;
        const definedAssertionString = this.getString(); ///
        context.trace(`Validating the '${definedAssertionString}' defined assertion...`);
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion !== null) {
            definedAssertion = validAssertion; ///
            context.debug(`...the '${definedAssertionString}' defined definedAssertion is already valid.`);
        } else {
            let validates = false;
            const termValidates = this.validateTerm(stated, context), frameValidates = this.validateFrame(stated, context);
            if (termValidates || frameValidates) {
                let verifiesWhenStated = false, verifiesWhenDerived = false;
                if (stated) {
                    verifiesWhenStated = this.validateWhenStated(context);
                } else {
                    verifiesWhenDerived = this.validateWhenDerived(context);
                }
                if (verifiesWhenStated || verifiesWhenDerived) {
                    validates = true;
                }
            }
            if (validates) {
                const assertion = this; ///
                definedAssertion = assertion; ///
                context.addAssertion(assertion);
                context.debug(`...validated the '${definedAssertionString}' defined assertion.`);
            }
        }
        return definedAssertion;
    }
    validateTerm(stated, context) {
        let termValidates = false;
        if (this.term !== null) {
            const termString = this.term.getString(), definedAssertionString = this.getString(); ///
            context.trace(`Validating the '${definedAssertionString}' defined assertion's '${termString}' term...`);
            const termSingular = this.term.isSingular();
            if (!termSingular) {
                context.debug(`The '${termString}' term is not singular.`);
            } else {
                const term = this.term.validate(context, (term)=>{
                    const validatesForwards = true;
                    return validatesForwards;
                });
                if (term !== null) {
                    this.term = term; ///
                    termValidates = true;
                }
                if (termValidates) {
                    context.debug(`...validates the'${definedAssertionString}' defined assertion's '${termString}' term.`);
                }
            }
        }
        return termValidates;
    }
    validateFrame(stated, context) {
        let frameValidates = false;
        if (this.frame !== null) {
            const frameString = this.frame.getString(), definedAssertionString = this.getString(); ///
            context.trace(`Validating the'${definedAssertionString}' defined assertion's '${frameString}' frame...`);
            const frameSingular = this.frame.isSingular();
            if (frameSingular) {
                (0, _context.descend)((stated, context)=>{
                    const frame = this.frame.validate(stated, context);
                    if (frame !== null) {
                        this.frame = frame;
                        frameValidates = true;
                    }
                }, context);
            } else {
                context.debug(`The '${frameString}' frame is not singular.`);
            }
            if (frameValidates) {
                context.debug(`...validates the'${definedAssertionString}' defined assertion's '${frameString}' frame.`);
            }
        }
        return frameValidates;
    }
    validateWhenStated(context) {
        let verifiesWhenStated;
        const definedAssertionString = this.getString(); ///
        context.trace(`Validating the '${definedAssertionString}' stated defined assertion...`);
        verifiesWhenStated = true;
        if (verifiesWhenStated) {
            context.debug(`...validates the '${definedAssertionString}' stated defined assertion.`);
        }
        return verifiesWhenStated;
    }
    validateWhenDerived(context) {
        let verifiesWhenDerived;
        const definedAssertionString = this.getString(); ///
        context.trace(`Validating the '${definedAssertionString}' derived defined assertion...`);
        const generalContext = null, specificContext = context; ///
        verifiesWhenDerived = validateWhenDerived(this.term, this.frame, this.negated, generalContext, specificContext);
        if (verifiesWhenDerived) {
            context.debug(`...validates the '${definedAssertionString}' derived defined assertion.`);
        }
        return verifiesWhenDerived;
    }
    unifyIndependently(generalContext, specificContext) {
        let unifiesIndependently;
        const context = specificContext, definedAssertionString = this.getString(); ///
        context.trace(`Unifying the '${definedAssertionString}' defined assertion independently...`);
        const term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, generalContext, specificContext), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, generalContext, specificContext), verifiesWhenDerived = validateWhenDerived(term, frame, this.negated, generalContext, specificContext);
        unifiesIndependently = verifiesWhenDerived; ///
        if (unifiesIndependently) {
            context.debug(`...unified the '${definedAssertionString}' defined assertion independently.`);
        }
        return unifiesIndependently;
    }
    static name = "DefinedAssertion";
    static fromJSON(json, context) {
        let definedAssertion = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.instantiate)((context)=>{
                const { string } = json, definedAssertionNode = (0, _instantiate.instantiateDefinedAssertion)(string, context), node = definedAssertionNode, term = (0, _element.termFromJDefinedAssertionNode)(definedAssertionNode, context), frame = (0, _element.frameFromJDefinedAssertionNode)(definedAssertionNode, context), negated = (0, _element.negatedFromJDefinedAssertionNode)(definedAssertionNode, context);
                context = null;
                definedAssertion = new DefinedAssertion(context, string, node, term, frame, negated);
            }, context);
        }
        return definedAssertion;
    }
});
function validateWhenDerived(term, frame, negated, generalContext, specificContext) {
    let verifiesWhenDerived = false;
    const context = specificContext; ///
    if (term !== null) {
        const variableIdentifier = term.getVariableIdentifier(), variable = context.findVariableByVariableIdentifier(variableIdentifier), variableDefined = isVariableDefined(variable, context);
        if (!negated && variableDefined) {
            verifiesWhenDerived = true;
        }
        if (negated && !variableDefined) {
            verifiesWhenDerived = true;
        }
    }
    if (frame !== null) {
        const metavariableName = frame.getMetavariableName(), metavariable = context.findMetavariableByMetavariableName(metavariableName), metavariableDefined = isMetavariableDefined(metavariable, context);
        if (!negated && metavariableDefined) {
            verifiesWhenDerived = true;
        }
        if (negated && !metavariableDefined) {
            verifiesWhenDerived = true;
        }
    }
    return verifiesWhenDerived;
}
function isVariableDefined(variable, context) {
    const equivalences = context.getEquivalences(), groundedTerms = [], definedVariables = [];
    equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);
    const variableMatchesDefinedVariable = definedVariables.some((definedVariable)=>{
        const definedVariableEqualToVariable = definedVariable.compare(variable);
        if (definedVariableEqualToVariable === variable) {
            return true;
        }
    }), variableDefined = variableMatchesDefinedVariable; ///
    return variableDefined;
}
function isMetavariableDefined(metavariable, context) {
    const metavariableName = metavariable.getNode(), judgementPresent = context.isJudgementPresentByMetavariableName(metavariableName), metavariableDefined = judgementPresent; ///
    return metavariableDefined;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9kZWZpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBkZXNjZW5kLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVEZWZpbmVkQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IHsgdGVybUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUsIGZyYW1lRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbmVnYXRlZEZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlZmluZWRBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZT0gZnJhbWU7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICBnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGRlZmluZWRBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgZGVmaW5lZEFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShzdGF0ZWQsIGNvbnRleHQpLFxuICAgICAgICAgICAgZnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlRnJhbWUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMgfHwgZnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCB8fCB2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBhc3NlcnRpb247IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgICAgY29uc3QgdGVybVNpbmd1bGFyID0gdGhpcy50ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKCF0ZXJtU2luZ3VsYXIpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50ZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVzIHRoZScke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUZyYW1lKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZScke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbidzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgICAgY29uc3QgZnJhbWVTaW5ndWxhciA9IHRoaXMuZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgICBkZXNjZW5kKChzdGF0ZWQsIGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuXG4gICAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVzIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB2ZXJpZmllc1doZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlZmluZWRBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBkZWZpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlRGVmaW5lZEFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBuZXcgRGVmaW5lZEFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRlcm0uZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgdmFyaWFibGUgPSBjb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciksXG4gICAgICAgICAgdmFyaWFibGVEZWZpbmVkID0gaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFuZWdhdGVkICYmIHZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0ZWQgJiYgIXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYW1lIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWZpbmVkID0gaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICBpZiAoIW5lZ2F0ZWQgJiYgbWV0YXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0ZWQgJiYgIW1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJpZmllc1doZW5EZXJpdmVkO1xufVxuXG5mdW5jdGlvbiBpc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSwgY29udGV4dCkge1xuICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICBjb25zdCB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLnNvbWUoKGRlZmluZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZS5jb21wYXJlKHZhcmlhYmxlKTtcblxuICAgICAgICAgIGlmIChkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPT09IHZhcmlhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB2YXJpYWJsZURlZmluZWQgPSB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGU7IC8vL1xuXG4gIHJldHVybiB2YXJpYWJsZURlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSBjb250ZXh0LmlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGp1ZGdlbWVudFByZXNlbnQ7IC8vL1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVEZWZpbmVkXG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRGVmaW5lZEFzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGVybSIsImZyYW1lIiwibmVnYXRlZCIsImdldFRlcm0iLCJnZXRGcmFtZSIsImlzTmVnYXRlZCIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJkZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJmcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlRnJhbWUiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsInRlcm1TdHJpbmciLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJmcmFtZVN0cmluZyIsImZyYW1lU2luZ3VsYXIiLCJkZXNjZW5kIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZURlZmluZWRBc3NlcnRpb24iLCJ0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIm5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlRGVmaW5lZCIsImlzVmFyaWFibGVEZWZpbmVkIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCIsImVxdWl2YWxlbmNlcyIsImdldEVxdWl2YWxlbmNlcyIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSIsInNvbWUiLCJkZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUiLCJjb21wYXJlIiwianVkZ2VtZW50UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7a0VBUnNCOzBCQUVDO3lCQUNjOzZCQUNPOytCQUNpQzt5QkFDbUM7Ozs7OztNQUVoSCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHlCQUF5QkMsa0JBQVM7SUFDNUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFL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