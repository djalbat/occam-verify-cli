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
            if (!frameSingular) {
                context.debug(`The '${frameString}' frame is not singular.`);
            } else {
                stated = true; ///
                const frame = this.frame.validate(stated, context);
                if (frame !== null) {
                    this.frame = frame;
                    frameValidates = true;
                }
                if (frameValidates) {
                    context.debug(`...validates the'${definedAssertionString}' defined assertion's '${frameString}' frame.`);
                }
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
            (0, _context.literally)((context)=>{
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9kZWZpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRGVmaW5lZEFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlLCBmcmFtZUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUsIG5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBEZWZpbmVkQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWU9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEFzc2VydGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGRlZmluZWRBc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oc3RhdGVkLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzIHx8IGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmVyaWZpZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZXJpZmllc1doZW5TdGF0ZWQgfHwgdmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghdGVybVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSB0aGlzLmZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKCFmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZlcmlmaWVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gbnVsbCxcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVzIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB2ZXJpZmllc1doZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkRlZmluZWRBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBkZWZpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZURlZmluZWRBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIG5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpLFxuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIGlmICghbmVnYXRlZCAmJiB2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFtZSE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFuZWdhdGVkICYmIG1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICFtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbn1cblxuZnVuY3Rpb24gaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgY29uc3QgdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5zb21lKChkZWZpbmVkVmFyaWFibGUpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGUuY29tcGFyZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgICBpZiAoZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID09PSB2YXJpYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdmFyaWFibGVEZWZpbmVkID0gdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlOyAvLy9cblxuICByZXR1cm4gdmFyaWFibGVEZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBqdWRnZW1lbnRQcmVzZW50OyAvLy9cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlRGVmaW5lZFxufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkRlZmluZWRBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwic3RhdGVkIiwiZGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwidmVyaWZpZXNXaGVuU3RhdGVkIiwidmVyaWZpZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJ0ZXJtU3RyaW5nIiwidGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZhbGlkYXRlc0ZvcndhcmRzIiwiZnJhbWVTdHJpbmciLCJmcmFtZVNpbmd1bGFyIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwibGl0ZXJhbGx5IiwiaW5zdGFudGlhdGVEZWZpbmVkQXNzZXJ0aW9uIiwidGVybUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJuZWdhdGVkRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJlcXVpdmFsZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJncm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJ2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUiLCJzb21lIiwiZGVmaW5lZFZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlIiwiY29tcGFyZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2tFQVJzQjswQkFFQzt5QkFDRzs2QkFDa0I7K0JBQ2lDO3lCQUNtQzs7Ozs7O01BRWhILFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMseUJBQXlCQyxrQkFBUztJQUM1RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxDQUFFO1FBQ3ZELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUVBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNILEtBQUs7SUFDbkI7SUFFQUksWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSCxPQUFPO0lBQ3JCO0lBRUFJLDBCQUEwQjtRQUN4QixNQUFNUCxPQUFPLElBQUksQ0FBQ1EsT0FBTyxJQUNuQkMsdUJBQXVCVCxNQUFPLEdBQUc7UUFFdkMsT0FBT1M7SUFDVDtJQUVBQyxTQUFTQyxNQUFNLEVBQUViLE9BQU8sRUFBRTtRQUN4QixJQUFJYyxtQkFBbUI7UUFFdkIsTUFBTUMseUJBQXlCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFcERoQixRQUFRaUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHVCQUF1QixzQkFBc0IsQ0FBQztRQUUvRSxNQUFNRyxpQkFBaUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ25CO1FBRS9DLElBQUlrQixtQkFBbUIsTUFBTTtZQUMzQkosbUJBQW1CSSxnQkFBaUIsR0FBRztZQUV2Q2xCLFFBQVFvQixLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVMLHVCQUF1Qiw0Q0FBNEMsQ0FBQztRQUMvRixPQUFPO1lBQ0wsSUFBSU0sWUFBWTtZQUVoQixNQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxZQUFZLENBQUNWLFFBQVFiLFVBQzFDd0IsaUJBQWlCLElBQUksQ0FBQ0MsYUFBYSxDQUFDWixRQUFRYjtZQUVsRCxJQUFJc0IsaUJBQWlCRSxnQkFBZ0I7Z0JBQ25DLElBQUlFLHFCQUFxQixPQUNyQkMsc0JBQXNCO2dCQUUxQixJQUFJZCxRQUFRO29CQUNWYSxxQkFBcUIsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQzVCO2dCQUMvQyxPQUFPO29CQUNMMkIsc0JBQXNCLElBQUksQ0FBQ0UsbUJBQW1CLENBQUM3QjtnQkFDakQ7Z0JBRUEsSUFBSTBCLHNCQUFzQkMscUJBQXFCO29CQUM3Q04sWUFBWTtnQkFDZDtZQUNGO1lBRUEsSUFBSUEsV0FBVztnQkFDYixNQUFNUyxZQUFZLElBQUksRUFBRSxHQUFHO2dCQUUzQmhCLG1CQUFtQmdCLFdBQVcsR0FBRztnQkFFakM5QixRQUFRK0IsWUFBWSxDQUFDRDtnQkFFckI5QixRQUFRb0IsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVMLHVCQUF1QixvQkFBb0IsQ0FBQztZQUNqRjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBUyxhQUFhVixNQUFNLEVBQUViLE9BQU8sRUFBRTtRQUM1QixJQUFJc0IsZ0JBQWdCO1FBRXBCLElBQUksSUFBSSxDQUFDbkIsSUFBSSxLQUFLLE1BQU07WUFDdEIsTUFBTTZCLGFBQWEsSUFBSSxDQUFDN0IsSUFBSSxDQUFDYSxTQUFTLElBQ2hDRCx5QkFBeUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztZQUVyRGhCLFFBQVFpQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsdUJBQXVCLHVCQUF1QixFQUFFaUIsV0FBVyxTQUFTLENBQUM7WUFFdEcsTUFBTUMsZUFBZSxJQUFJLENBQUM5QixJQUFJLENBQUMrQixVQUFVO1lBRXpDLElBQUksQ0FBQ0QsY0FBYztnQkFDakJqQyxRQUFRb0IsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFWSxXQUFXLHVCQUF1QixDQUFDO1lBQzNELE9BQU87Z0JBQ0wsTUFBTTdCLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNTLFFBQVEsQ0FBQ1osU0FBUyxDQUFDRztvQkFDbEMsTUFBTWdDLG9CQUFvQjtvQkFFMUIsT0FBT0E7Z0JBQ1Q7Z0JBRU4sSUFBSWhDLFNBQVMsTUFBTTtvQkFDakIsSUFBSSxDQUFDQSxJQUFJLEdBQUdBLE1BQU0sR0FBRztvQkFFckJtQixnQkFBZ0I7Z0JBQ2xCO2dCQUVBLElBQUlBLGVBQWU7b0JBQ2pCdEIsUUFBUW9CLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFTCx1QkFBdUIsdUJBQXVCLEVBQUVpQixXQUFXLE9BQU8sQ0FBQztnQkFDdkc7WUFDRjtRQUNGO1FBRUEsT0FBT1Y7SUFDVDtJQUVBRyxjQUFjWixNQUFNLEVBQUViLE9BQU8sRUFBRTtRQUM3QixJQUFJd0IsaUJBQWlCO1FBRXJCLElBQUksSUFBSSxDQUFDcEIsS0FBSyxLQUFLLE1BQU07WUFDdkIsTUFBTWdDLGNBQWMsSUFBSSxDQUFDaEMsS0FBSyxDQUFDWSxTQUFTLElBQ2xDRCx5QkFBeUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztZQUVyRGhCLFFBQVFpQixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLHVCQUF1Qix1QkFBdUIsRUFBRXFCLFlBQVksVUFBVSxDQUFDO1lBRXZHLE1BQU1DLGdCQUFnQixJQUFJLENBQUNqQyxLQUFLLENBQUM4QixVQUFVO1lBRTNDLElBQUksQ0FBQ0csZUFBZTtnQkFDbEJyQyxRQUFRb0IsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFZ0IsWUFBWSx3QkFBd0IsQ0FBQztZQUM3RCxPQUFPO2dCQUNMdkIsU0FBUyxNQUFPLEdBQUc7Z0JBRW5CLE1BQU1ULFFBQVEsSUFBSSxDQUFDQSxLQUFLLENBQUNRLFFBQVEsQ0FBQ0MsUUFBUWI7Z0JBRTFDLElBQUlJLFVBQVUsTUFBTTtvQkFDbEIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO29CQUVib0IsaUJBQWlCO2dCQUNuQjtnQkFFQSxJQUFJQSxnQkFBZ0I7b0JBQ2xCeEIsUUFBUW9CLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFTCx1QkFBdUIsdUJBQXVCLEVBQUVxQixZQUFZLFFBQVEsQ0FBQztnQkFDekc7WUFDRjtRQUNGO1FBRUEsT0FBT1o7SUFDVDtJQUVBSSxtQkFBbUI1QixPQUFPLEVBQUU7UUFDMUIsSUFBSTBCO1FBRUosTUFBTVgseUJBQXlCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFcERoQixRQUFRaUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHVCQUF1Qiw2QkFBNkIsQ0FBQztRQUV0RlcscUJBQXFCO1FBRXJCLElBQUlBLG9CQUFvQjtZQUN0QjFCLFFBQVFvQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwsdUJBQXVCLDJCQUEyQixDQUFDO1FBQ3hGO1FBRUEsT0FBT1c7SUFDVDtJQUVBRyxvQkFBb0I3QixPQUFPLEVBQUU7UUFDM0IsSUFBSTJCO1FBRUosTUFBTVoseUJBQXlCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFcERoQixRQUFRaUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHVCQUF1Qiw4QkFBOEIsQ0FBQztRQUV2RixNQUFNdUIsaUJBQWlCLE1BQ2pCQyxrQkFBa0J2QyxTQUFVLEdBQUc7UUFFckMyQixzQkFBc0JFLG9CQUFvQixJQUFJLENBQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDQyxPQUFPLEVBQUVpQyxnQkFBZ0JDO1FBRS9GLElBQUlaLHFCQUFxQjtZQUN2QjNCLFFBQVFvQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwsdUJBQXVCLDRCQUE0QixDQUFDO1FBQ3pGO1FBRUEsT0FBT1k7SUFDVDtJQUVBYSxtQkFBbUJGLGNBQWMsRUFBRUMsZUFBZSxFQUFFO1FBQ2xELElBQUlFO1FBRUosTUFBTXpDLFVBQVV1QyxpQkFDVnhCLHlCQUF5QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXBEaEIsUUFBUWlCLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUYsdUJBQXVCLG9DQUFvQyxDQUFDO1FBRTNGLE1BQU1aLE9BQU91QyxJQUFBQSwyQ0FBNEIsRUFBQyxJQUFJLENBQUN2QyxJQUFJLEVBQUVtQyxnQkFBZ0JDLGtCQUMvRG5DLFFBQVF1QyxJQUFBQSw2Q0FBOEIsRUFBQyxJQUFJLENBQUN2QyxLQUFLLEVBQUVrQyxnQkFBZ0JDLGtCQUNuRVosc0JBQXNCRSxvQkFBb0IxQixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxFQUFFaUMsZ0JBQWdCQztRQUUzRkUsdUJBQXVCZCxxQkFBcUIsR0FBRztRQUUvQyxJQUFJYyxzQkFBc0I7WUFDeEJ6QyxRQUFRb0IsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVMLHVCQUF1QixrQ0FBa0MsQ0FBQztRQUM3RjtRQUVBLE9BQU8wQjtJQUNUO0lBRUEsT0FBT0csT0FBTyxtQkFBbUI7SUFFakMsT0FBT0MsU0FBU0MsSUFBSSxFQUFFOUMsT0FBTyxFQUFFO1FBQzdCLElBQUljLG1CQUFtQjtRQUV2QixNQUFNLEVBQUU4QixJQUFJLEVBQUUsR0FBR0U7UUFFakIsSUFBSSxJQUFJLENBQUNGLElBQUksS0FBS0EsTUFBTTtZQUN0QkcsSUFBQUEsa0JBQVMsRUFBQyxDQUFDL0M7Z0JBQ1QsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBRzZDLE1BQ2JuQyx1QkFBdUJxQyxJQUFBQSx3Q0FBMkIsRUFBQy9DLFFBQVFELFVBQzNERSxPQUFPUyxzQkFDUFIsT0FBTzhDLElBQUFBLHNDQUE2QixFQUFDdEMsc0JBQXNCWCxVQUMzREksUUFBUThDLElBQUFBLHVDQUE4QixFQUFDdkMsc0JBQXNCWCxVQUM3REssVUFBVThDLElBQUFBLHlDQUFnQyxFQUFDeEMsc0JBQXNCWDtnQkFFdkVBLFVBQVU7Z0JBRVZjLG1CQUFtQixJQUFJaEIsaUJBQWlCRSxTQUFTQyxRQUFRQyxNQUFNQyxNQUFNQyxPQUFPQztZQUM5RSxHQUFHTDtRQUNMO1FBRUEsT0FBT2M7SUFDVDtBQUNGO0FBRUEsU0FBU2Usb0JBQW9CMUIsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRWlDLGNBQWMsRUFBRUMsZUFBZTtJQUNoRixJQUFJWixzQkFBc0I7SUFFMUIsTUFBTTNCLFVBQVV1QyxpQkFBa0IsR0FBRztJQUVyQyxJQUFJcEMsU0FBUyxNQUFNO1FBQ2pCLE1BQU1pRCxxQkFBcUJqRCxLQUFLa0QscUJBQXFCLElBQy9DQyxXQUFXdEQsUUFBUXVELGdDQUFnQyxDQUFDSCxxQkFDcERJLGtCQUFrQkMsa0JBQWtCSCxVQUFVdEQ7UUFFcEQsSUFBSSxDQUFDSyxXQUFXbUQsaUJBQWlCO1lBQy9CN0Isc0JBQXNCO1FBQ3hCO1FBRUEsSUFBSXRCLFdBQVcsQ0FBQ21ELGlCQUFpQjtZQUMvQjdCLHNCQUFzQjtRQUN4QjtJQUNGO0lBRUEsSUFBSXZCLFVBQVMsTUFBTTtRQUNqQixNQUFNc0QsbUJBQW1CdEQsTUFBTXVELG1CQUFtQixJQUM1Q0MsZUFBZTVELFFBQVE2RCxrQ0FBa0MsQ0FBQ0gsbUJBQzFESSxzQkFBc0JDLHNCQUFzQkgsY0FBYzVEO1FBRWhFLElBQUksQ0FBQ0ssV0FBV3lELHFCQUFxQjtZQUNuQ25DLHNCQUFzQjtRQUN4QjtRQUVBLElBQUl0QixXQUFXLENBQUN5RCxxQkFBcUI7WUFDbkNuQyxzQkFBc0I7UUFDeEI7SUFDRjtJQUVBLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTOEIsa0JBQWtCSCxRQUFRLEVBQUV0RCxPQUFPO0lBQzFDLE1BQU1nRSxlQUFlaEUsUUFBUWlFLGVBQWUsSUFDdENDLGdCQUFnQixFQUFFLEVBQ2xCQyxtQkFBbUIsRUFBRTtJQUUzQkgsYUFBYUksd0NBQXdDLENBQUNGLGVBQWVDLGtCQUFrQm5FO0lBRXZGLE1BQU1xRSxpQ0FBaUNGLGlCQUFpQkcsSUFBSSxDQUFDLENBQUNDO1FBQ3RELE1BQU1DLGlDQUFpQ0QsZ0JBQWdCRSxPQUFPLENBQUNuQjtRQUUvRCxJQUFJa0IsbUNBQW1DbEIsVUFBVTtZQUMvQyxPQUFPO1FBQ1Q7SUFDRixJQUNBRSxrQkFBa0JhLGdDQUFnQyxHQUFHO0lBRTNELE9BQU9iO0FBQ1Q7QUFFQSxTQUFTTyxzQkFBc0JILFlBQVksRUFBRTVELE9BQU87SUFDbEQsTUFBTTBELG1CQUFtQkUsYUFBYWxELE9BQU8sSUFDdkNnRSxtQkFBbUIxRSxRQUFRMkUsb0NBQW9DLENBQUNqQixtQkFDaEVJLHNCQUFzQlksa0JBQWtCLEdBQUc7SUFFakQsT0FBT1o7QUFDVCJ9