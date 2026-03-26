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
        const variableNode = term.getVariableNode(), variable = context.findVariableByVariableNode(variableNode), variableDefined = isVariableDefined(variable, context);
        if (!negated && variableDefined) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9kZWZpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVEZWZpbmVkQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMsIGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IHsgdGVybUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUsIGZyYW1lRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSwgbmVnYXRlZEZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUsIGRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgRGVmaW5lZEFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmZyYW1lPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldERlZmluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGRlZmluZWRBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgZGVmaW5lZEFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcyB8fCBmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBhc3NlcnRpb247IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghdGVybVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBudWxsLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyh0aGlzLmZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWZpbmVkQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZURlZmluZWRBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGRlZmluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gbmV3IERlZmluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIG5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybS5nZXRWYXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSxcbiAgICAgICAgICB2YXJpYWJsZURlZmluZWQgPSBpc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICBpZiAoIW5lZ2F0ZWQgJiYgdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0ZWQgJiYgIXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChmcmFtZSE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZSA9IGZyYW1lLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBpc01ldGF2YXJpYWJsZURlZmluZWQoZGVjbGFyZWRNZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFuZWdhdGVkICYmIG1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCAmJiAhbWV0YXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbn1cblxuZnVuY3Rpb24gaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKSxcbiAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgZXF1aXZhbGVuY2VzLnNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgY29uc3QgdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5zb21lKChkZWZpbmVkVmFyaWFibGUpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVFcXVhbFRvVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGUuY29tcGFyZSh2YXJpYWJsZSk7XG5cbiAgICAgICAgICBpZiAoZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlID09PSB2YXJpYWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgdmFyaWFibGVEZWZpbmVkID0gdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlOyAvLy9cblxuICByZXR1cm4gdmFyaWFibGVEZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc01ldGF2YXJpYWJsZURlZmluZWQobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBqdWRnZW1lbnRQcmVzZW50OyAvLy9cblxuICByZXR1cm4gbWV0YXZhcmlhYmxlRGVmaW5lZFxufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkRlZmluZWRBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwiZGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYWRkQXNzZXJ0aW9uIiwidGVybVN0cmluZyIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVTaW5ndWxhciIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVEZWZpbmVkQXNzZXJ0aW9uIiwidGVybUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJuZWdhdGVkRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidmFyaWFibGVOb2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlRGVmaW5lZCIsImlzVmFyaWFibGVEZWZpbmVkIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJlcXVpdmFsZW5jZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJncm91bmRlZFRlcm1zIiwiZGVmaW5lZFZhcmlhYmxlcyIsInNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMiLCJ2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUiLCJzb21lIiwiZGVmaW5lZFZhcmlhYmxlIiwiZGVmaW5lZFZhcmlhYmxlRXF1YWxUb1ZhcmlhYmxlIiwiY29tcGFyZSIsIm1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2tFQVJzQjswQkFFQzt5QkFDSzs2QkFDZ0I7K0JBQ2lDO3lCQUNzRTs7Ozs7O01BRW5KLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMseUJBQXlCQyxrQkFBUztJQUM1RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxDQUFFO1FBQ3ZELEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUVBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtJQUNsQjtJQUVBSSxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNILEtBQUs7SUFDbkI7SUFFQUksWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSCxPQUFPO0lBQ3JCO0lBRUFJLDBCQUEwQjtRQUN4QixNQUFNUCxPQUFPLElBQUksQ0FBQ1EsT0FBTyxJQUNuQkMsdUJBQXVCVCxNQUFPLEdBQUc7UUFFdkMsT0FBT1M7SUFDVDtJQUVBQyxTQUFTWixPQUFPLEVBQUU7UUFDaEIsSUFBSWEsbUJBQW1CO1FBRXZCLE1BQU1DLHlCQUF5QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXBEZixRQUFRZ0IsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHVCQUF1QixzQkFBc0IsQ0FBQztRQUUvRSxNQUFNRyxpQkFBaUIsSUFBSSxDQUFDQyxrQkFBa0IsQ0FBQ2xCO1FBRS9DLElBQUlpQixtQkFBbUIsTUFBTTtZQUMzQkosbUJB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