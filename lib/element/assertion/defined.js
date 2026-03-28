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
                const frame = this.frame.validate(context);
                if (frame !== null) {
                    this.frame = frame;
                    frameValidates = true;
                }
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
        let validatesWhenStated;
        const definedAssertionString = this.getString(); ///
        context.trace(`Validating the '${definedAssertionString}' stated defined assertion...`);
        validatesWhenStated = true;
        if (validatesWhenStated) {
            context.debug(`...validates the '${definedAssertionString}' stated defined assertion.`);
        }
        return validatesWhenStated;
    }
    validateWhenDerived(context) {
        let validatesWhenDerived;
        const definedAssertionString = this.getString(); ///
        context.trace(`Validating the '${definedAssertionString}' derived defined assertion...`);
        const generalContext = null, specificContext = context; ///
        validatesWhenDerived = validateWhenDerived(this.term, this.frame, this.negated, generalContext, specificContext);
        if (validatesWhenDerived) {
            context.debug(`...validates the '${definedAssertionString}' derived defined assertion.`);
        }
        return validatesWhenDerived;
    }
    unifyIndependently(generalContext, specificContext) {
        let unifiesIndependently = false;
        const context = specificContext, definedAssertionString = this.getString(); ///
        context.trace(`Unifying the '${definedAssertionString}' defined assertion independently...`);
        const term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, generalContext, specificContext), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, generalContext, specificContext), validatesWhenDerived = validateWhenDerived(term, frame, this.negated, generalContext, specificContext);
        if (validatesWhenDerived) {
            unifiesIndependently = true;
        }
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
    let validatesWhenDerived = false;
    const context = specificContext; ///
    if (term !== null) {
        const variableIdentifier = term.getVariableIdentifier(), declaredDariable = context.findDeclaredVariableByVariableIdentifier(variableIdentifier), declaredDariableDefined = isVariableDefined(declaredDariable, context);
        if (!negated && declaredDariableDefined) {
            validatesWhenDerived = true;
        }
        if (negated && !variableDefined) {
            validatesWhenDerived = true;
        }
    }
    if (frame !== null) {
        const metavariableName = frame.getMetavariableName(), declaredMetavariable = context.findDeclaredMetavariableByMetavariableName(metavariableName), metavariableDefined = isMetavariableDefined(declaredMetavariable, context);
        if (!negated && metavariableDefined) {
            validatesWhenDerived = true;
        }
        if (negated && !metavariableDefined) {
            validatesWhenDerived = true;
        }
    }
    return validatesWhenDerived;
}
function isVariableDefined(variable, context) {
    const equivalences = context.getEquivalences(), groundedTerms = [], definedVariables = [];
    equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);
    const variableMatchesDefinedVariable = definedVariables.some((definedVariable)=>{
        const definedVariableComparesToVariable = definedVariable.compareVariable(variable);
        if (definedVariableComparesToVariable === variable) {
            return true;
        }
    }), variableDefined1 = variableMatchesDefinedVariable; ///
    return variableDefined1;
}
function isMetavariableDefined(metavariable, context) {
    const metavariableNode = metavariable.getNode(), judgementPresent = context.isJudgementPresentByMetavariableNode(metavariableNode), metavariableDefined = judgementPresent; ///
    return metavariableDefined;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9kZWZpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVEZWZpbmVkQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IHsgdGVybUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUsIGZyYW1lRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbmVnYXRlZEZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUsIGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVmaW5lZEFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmZyYW1lPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldERlZmluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGRlZmluZWRBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgZGVmaW5lZEFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcyB8fCBmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBhc3NlcnRpb247IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghdGVybVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBudWxsLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyh0aGlzLmZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWZpbmVkQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZURlZmluZWRBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIG5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdGVybS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKSxcbiAgICAgICAgICBkZWNsYXJlZERhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciksXG4gICAgICAgICAgZGVjbGFyZWREYXJpYWJsZURlZmluZWQgPSBpc1ZhcmlhYmxlRGVmaW5lZChkZWNsYXJlZERhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIGlmICghbmVnYXRlZCAmJiBkZWNsYXJlZERhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhbWUhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVEZWZpbmVkID0gaXNNZXRhdmFyaWFibGVEZWZpbmVkKGRlY2xhcmVkTWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIGlmICghbmVnYXRlZCAmJiBtZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0ZWQgJiYgIW1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG59XG5cbmZ1bmN0aW9uIGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gIGNvbnN0IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZXMuc29tZSgoZGVmaW5lZFZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVmaW5lZFZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlLmNvbXBhcmVWYXJpYWJsZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgICBpZiAoZGVmaW5lZFZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlID09PSB2YXJpYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdmFyaWFibGVEZWZpbmVkID0gdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlOyAvLy9cblxuICByZXR1cm4gdmFyaWFibGVEZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBqdWRnZW1lbnRQcmVzZW50OyAvLy9cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlRGVmaW5lZFxufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkRlZmluZWRBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwiZGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYWRkQXNzZXJ0aW9uIiwidGVybVN0cmluZyIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVTaW5ndWxhciIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVEZWZpbmVkQXNzZXJ0aW9uIiwidGVybUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJuZWdhdGVkRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwiZGVjbGFyZWREYXJpYWJsZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJkZWNsYXJlZERhcmlhYmxlRGVmaW5lZCIsImlzVmFyaWFibGVEZWZpbmVkIiwidmFyaWFibGVEZWZpbmVkIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJ2YXJpYWJsZSIsImVxdWl2YWxlbmNlcyIsImdldEVxdWl2YWxlbmNlcyIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSIsInNvbWUiLCJkZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGUiLCJjb21wYXJlVmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7a0VBUnNCOzBCQUVDO3lCQUNLOzZCQUNnQjsrQkFDaUM7eUJBQ3NFOzs7Ozs7TUFFbkosV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx5QkFBeUJDLGtCQUFTO0lBQzVELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLENBQUU7UUFDdkQsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBRUE7UUFDWixJQUFJLENBQUNDLE9BQU8sR0FBR0E7SUFDakI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSCxJQUFJO0lBQ2xCO0lBRUFJLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0gsS0FBSztJQUNuQjtJQUVBSSxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNILE9BQU87SUFDckI7SUFFQUksMEJBQTBCO1FBQ3hCLE1BQU1QLE9BQU8sSUFBSSxDQUFDUSxPQUFPLElBQ25CQyx1QkFBdUJULE1BQU8sR0FBRztRQUV2QyxPQUFPUztJQUNUO0lBRUFDLFNBQVNaLE9BQU8sRUFBRTtRQUNoQixJQUFJYSxtQkFBbUI7UUFFdkIs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