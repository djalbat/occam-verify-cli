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
const _equivalences = require("../../utilities/equivalences");
const _substitutions = require("../../utilities/substitutions");
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class DefinedAssertion extends _assertion.default {
    constructor(context, string, node, lineIndex, term, frame, negated){
        super(context, string, node, lineIndex);
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
                const { string, lineIndex } = json, definedAssertionNode = (0, _instantiate.instantiateDefinedAssertion)(string, context), node = definedAssertionNode, term = (0, _element.termFromJDefinedAssertionNode)(definedAssertionNode, context), frame = (0, _element.frameFromJDefinedAssertionNode)(definedAssertionNode, context), negated = (0, _element.negatedFromJDefinedAssertionNode)(definedAssertionNode, context);
                context = null;
                definedAssertion = new DefinedAssertion(context, string, node, lineIndex, term, frame, negated);
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
        if (negated && !declaredDariableDefined) {
            validatesWhenDerived = true;
        }
    }
    if (frame !== null) {
        const metavariableName = frame.getMetavariableName(), declaredMetavariable = context.findDeclaredMetavariableByMetavariableName(metavariableName), declaredMetavariableDefined = isMetavariableDefined(declaredMetavariable, context);
        if (!negated && declaredMetavariableDefined) {
            validatesWhenDerived = true;
        }
        if (negated && !declaredMetavariableDefined) {
            validatesWhenDerived = true;
        }
    }
    return validatesWhenDerived;
}
function isVariableDefined(variable, context) {
    const equivalences = context.getEquivalences(), groundedTerms = [], definedVariables = [];
    (0, _equivalences.separateGroundedTermsAndDefinedVariables)(equivalences, groundedTerms, definedVariables, context);
    const variableMatchesDefinedVariable = definedVariables.some((definedVariable)=>{
        const definedVariableComparesToVariable = definedVariable.compareVariable(variable);
        if (definedVariableComparesToVariable === variable) {
            return true;
        }
    }), variableDefined = variableMatchesDefinedVariable; ///
    return variableDefined;
}
function isMetavariableDefined(metavariable, context) {
    const metavariableNode = metavariable.getNode(), declaredJudgementPresent = context.isDeclaredJudgementPresentByMetavariableNode(metavariableNode), metavariableDefined = declaredJudgementPresent; ///
    return metavariableDefined;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9kZWZpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVEZWZpbmVkQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VxdWl2YWxlbmNlc1wiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucywgZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSwgZnJhbWVGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlLCBuZWdhdGVkRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSwgZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBEZWZpbmVkQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmZyYW1lPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldERlZmluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGRlZmluZWRBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgZGVmaW5lZEFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKGNvbnRleHQpO1xuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcyB8fCBmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBhc3NlcnRpb247IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRlcm0oY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghdGVybVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudGVybSA9IHRlcm07IC8vL1xuXG4gICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBudWxsLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyh0aGlzLmZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWZpbmVkQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlRGVmaW5lZEFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBuZXcgRGVmaW5lZEFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllciA9IHRlcm0uZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgZGVjbGFyZWREYXJpYWJsZSA9IGNvbnRleHQuZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpLFxuICAgICAgICAgIGRlY2xhcmVkRGFyaWFibGVEZWZpbmVkID0gaXNWYXJpYWJsZURlZmluZWQoZGVjbGFyZWREYXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICBpZiAoIW5lZ2F0ZWQgJiYgZGVjbGFyZWREYXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCAmJiAhZGVjbGFyZWREYXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoZnJhbWUhPT0gbnVsbCkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBmcmFtZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZURlZmluZWQgPSBpc01ldGF2YXJpYWJsZURlZmluZWQoZGVjbGFyZWRNZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFuZWdhdGVkICYmIGRlY2xhcmVkTWV0YXZhcmlhYmxlRGVmaW5lZCkge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChuZWdhdGVkICYmICFkZWNsYXJlZE1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG59XG5cbmZ1bmN0aW9uIGlzVmFyaWFibGVEZWZpbmVkKHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgZGVmaW5lZFZhcmlhYmxlcyA9IFtdO1xuXG4gIHNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMoZXF1aXZhbGVuY2VzLCBncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICBjb25zdCB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGVzLnNvbWUoKGRlZmluZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlZmluZWRWYXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZSA9IGRlZmluZWRWYXJpYWJsZS5jb21wYXJlVmFyaWFibGUodmFyaWFibGUpO1xuXG4gICAgICAgICAgaWYgKGRlZmluZWRWYXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZSA9PT0gdmFyaWFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHZhcmlhYmxlRGVmaW5lZCA9IHZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZTsgLy8vXG5cbiAgcmV0dXJuIHZhcmlhYmxlRGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNNZXRhdmFyaWFibGVEZWZpbmVkKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gbWV0YXZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgZGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50ID0gY29udGV4dC5pc0RlY2xhcmVkSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlRGVmaW5lZCA9IGRlY2xhcmVkSnVkZ2VtZW50UHJlc2VudDsgLy8vXG5cbiAgcmV0dXJuIG1ldGF2YXJpYWJsZURlZmluZWRcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJEZWZpbmVkQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJ0ZXJtIiwiZnJhbWUiLCJuZWdhdGVkIiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwiZ2V0RGVmaW5lZEFzc2VydGlvbk5vZGUiLCJnZXROb2RlIiwiZGVmaW5lZEFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsImRlZmluZWRBc3NlcnRpb24iLCJkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsImZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVGcmFtZSIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsInRlcm1TdHJpbmciLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJmcmFtZVN0cmluZyIsImZyYW1lU2luZ3VsYXIiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlRGVmaW5lZEFzc2VydGlvbiIsInRlcm1Gcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlIiwibmVnYXRlZEZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImRlZmluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImRlY2xhcmVkRGFyaWFibGUiLCJmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwiZGVjbGFyZWREYXJpYWJsZURlZmluZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZGVjbGFyZWRNZXRhdmFyaWFibGUiLCJmaW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJ2YXJpYWJsZSIsImVxdWl2YWxlbmNlcyIsImdldEVxdWl2YWxlbmNlcyIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSIsInNvbWUiLCJkZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGUiLCJjb21wYXJlVmFyaWFibGUiLCJ2YXJpYWJsZURlZmluZWQiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50IiwiaXNEZWNsYXJlZEp1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVEZWZpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztrRUFUc0I7MEJBRUM7eUJBQ0s7NkJBQ2dCOzhCQUNhOytCQUNvQjt5QkFDc0U7Ozs7OztNQUVuSixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHlCQUF5QkMsa0JBQVM7SUFDNUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxDQUFFO1FBQ2xFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUVBO1FBQ1osSUFBSSxDQUFDQyxPQUFPLEdBQUdBO0lBQ2pCO0lBRUFDLFVB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