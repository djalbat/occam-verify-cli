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
    validate(context) {
        let definedAssertion = null;
        const definedAssertionString = this.getString(); ///
        context.trace(`Validating the '${definedAssertionString}' defined assertion...`);
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion !== null) {
            definedAssertion = validAssertion; ///
            context.debug(`...the '${definedAssertionString}' defined definedAssertion is already valid.`);
        } else {
            let validates = false;
            const termValidates = this.validateTerm(context), frameValidates = this.validateFrame(context);
            if (termValidates || frameValidates) {
                const stated = context.isStated();
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
    validateTerm(context) {
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
    validateFrame(context) {
        let frameValidates = false;
        if (this.frame !== null) {
            const frameString = this.frame.getString(), definedAssertionString = this.getString(); ///
            context.trace(`Validating the'${definedAssertionString}' defined assertion's '${frameString}' frame...`);
            const frameSingular = this.frame.isSingular();
            if (frameSingular) {
                (0, _context.descend)((context)=>{
                    const frame = this.frame.validate(context);
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
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), definedAssertion = (0, _element.definedAssertionFromStatementNode)(statementNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9kZWZpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBkZXNjZW5kLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVEZWZpbmVkQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IHsgdGVybUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUsIGZyYW1lRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbmVnYXRlZEZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUsIGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVmaW5lZEFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmZyYW1lPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldERlZmluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGRlZmluZWRBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgZGVmaW5lZEFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcyB8fCBmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgbGV0IHZlcmlmaWVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCB8fCB2ZXJpZmllc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBhc3NlcnRpb247IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghdGVybVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcblxuICAgICAgICAgICAgZnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2ZXJpZmllc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVzIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IG51bGwsXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgdmVyaWZpZXNXaGVuRGVyaXZlZCA9IHZhbGlkYXRlV2hlbkRlcml2ZWQodGhpcy50ZXJtLCB0aGlzLmZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyh0aGlzLmZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgdGhpcy5uZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdmVyaWZpZXNXaGVuRGVyaXZlZDsgLy8vXG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWZpbmVkQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZURlZmluZWRBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIG5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHZlcmlmaWVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgIHZhcmlhYmxlID0gY29udGV4dC5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpLFxuICAgICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIGlmICghbmVnYXRlZCAmJiB2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFtZSE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFuZWdhdGVkICYmIG1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZlcmlmaWVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICFtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2ZXJpZmllc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmVyaWZpZXNXaGVuRGVyaXZlZDtcbn1cblxuZnVuY3Rpb24gaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgY29uc3QgdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5zb21lKChkZWZpbmVkVmFyaWFibGUpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGUuY29tcGFyZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgICBpZiAoZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID09PSB2YXJpYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdmFyaWFibGVEZWZpbmVkID0gdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlOyAvLy9cblxuICByZXR1cm4gdmFyaWFibGVEZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBqdWRnZW1lbnRQcmVzZW50OyAvLy9cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlRGVmaW5lZFxufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkRlZmluZWRBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwiZGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2ZXJpZmllc1doZW5TdGF0ZWQiLCJ2ZXJpZmllc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsInRlcm1TdHJpbmciLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJmcmFtZVN0cmluZyIsImZyYW1lU2luZ3VsYXIiLCJkZXNjZW5kIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZURlZmluZWRBc3NlcnRpb24iLCJ0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIm5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVEZWZpbmVkIiwiaXNWYXJpYWJsZURlZmluZWQiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVEZWZpbmVkIiwiaXNNZXRhdmFyaWFibGVEZWZpbmVkIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZ3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzIiwidmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlIiwic29tZSIsImRlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZUVxdWFsVG9WYXJpYWJsZSIsImNvbXBhcmUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OztrRUFSc0I7MEJBRUM7eUJBQ2M7NkJBQ087K0JBQ2lDO3lCQUNzRTs7Ozs7O01BRW5KLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMseUJBQXlCQyxrQkFBUztJQUM1RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxDQUFFO1FBQ3ZELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUVBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNILEtBQUs7SUFDbkI7SUFFQUksWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSCxPQUFPO0lBQ3JCO0lBRUFJLDBCQUEwQjtRQUN4QixNQUFNUCxPQUFPLElBQUksQ0FBQ1EsT0FBTyxJQUNuQkMsdUJBQXVCVCxNQUFPLEdBQUc7UUFFdkMsT0FBT1M7SUFDVDtJQUVBQyxTQUFTWixPQUFPLEVBQUU7UUFDaEIsSUFBSWEsbUJBQW1CO1FBRXZCLE1BQU1DLHlCQUF5QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXBEZixRQUFRZ0IsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHVCQUF1QixzQkFBc0IsQ0FBQztRQUUvRSxNQUFNRyxpQkFBaUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ2xCO1FBRS9DLElBQUlpQixtQkFBbUIs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