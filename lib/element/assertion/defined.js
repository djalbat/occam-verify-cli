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
        let validates = false;
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion !== null) {
            validates = true;
            definedAssertion = validAssertion; ///
            context.debug(`...the '${definedAssertionString}' defined definedAssertion is already valid.`);
        } else {
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
            }
        }
        if (validates) {
            context.debug(`...validated the '${definedAssertionString}' defined assertion.`);
        }
        return definedAssertion;
    }
    validateTerm(context) {
        let termValidates = false;
        if (this.term !== null) {
            const termString = this.term.getString(), definedAssertionString = this.getString(); ///
            context.trace(`Validating the '${definedAssertionString}' defined assertion's term...`);
            const termSingular = this.term.isSingular();
            if (termSingular) {
                const term = this.term.validate(context, (term)=>{
                    const validatesForwards = true;
                    return validatesForwards;
                });
                if (term !== null) {
                    this.term = term; ///
                    termValidates = true;
                }
                if (termValidates) {
                    context.debug(`...validates the'${definedAssertionString}' defined assertion's term.`);
                }
            } else {
                context.debug(`The '${termString}' term is not singular.`);
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
        validatesWhenDerived = validateWhenDerived(this.term, this.frame, this.negated, context);
        if (validatesWhenDerived) {
            context.debug(`...validates the '${definedAssertionString}' derived defined assertion.`);
        }
        return validatesWhenDerived;
    }
    unifyIndependently(generalContext, specificContext) {
        let unifiesIndependently = false;
        const context = specificContext, definedAssertionString = this.getString(); ///
        context.trace(`Unifying the '${definedAssertionString}' defined assertion independently...`);
        const term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, generalContext, specificContext), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, generalContext, specificContext), validatesWhenDerived = validateWhenDerived(term, frame, this.negated, context);
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
function validateWhenDerived(term, frame, negated, context) {
    let validatesWhenDerived = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9kZWZpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVEZWZpbmVkQXNzZXJ0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHNlcGFyYXRlR3JvdW5kZWRUZXJtc0FuZERlZmluZWRWYXJpYWJsZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VxdWl2YWxlbmNlc1wiO1xuaW1wb3J0IHsgdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucywgZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSwgZnJhbWVGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlLCBuZWdhdGVkRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSwgZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBEZWZpbmVkQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmZyYW1lPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldERlZmluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGRlZmluZWRBc3NlcnRpb24gPSB2YWxpZEFzc2VydGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgZGVmaW5lZEFzc2VydGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVGcmFtZShjb250ZXh0KTtcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMgfHwgZnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWZpbmVkQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICh0ZXJtU2luZ3VsYXIpIHtcbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnRlcm0gPSB0ZXJtOyAvLy9cblxuICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgdGVybS5gKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlRnJhbWUoY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZScke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbidzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuLi5gKTtcblxuICAgICAgY29uc3QgZnJhbWVTaW5ndWxhciA9IHRoaXMuZnJhbWUuaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAoZnJhbWVTaW5ndWxhcikge1xuICAgICAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuXG4gICAgICAgICAgZnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnJhbWVWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVzIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGRlZmluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMubmVnYXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgZGVmaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyh0aGlzLmZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHRoaXMubmVnYXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJEZWZpbmVkQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZGVmaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlRGVmaW5lZEFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gZGVmaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlKGRlZmluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIGRlZmluZWRBc3NlcnRpb24gPSBuZXcgRGVmaW5lZEFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBpc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSwgY29udGV4dCkge1xuICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICBzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGVxdWl2YWxlbmNlcywgZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgY29uc3QgdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5zb21lKChkZWZpbmVkVmFyaWFibGUpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGUuY29tcGFyZVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICAgIGlmIChkZWZpbmVkVmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGUgPT09IHZhcmlhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB2YXJpYWJsZURlZmluZWQgPSB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGU7IC8vL1xuXG4gIHJldHVybiB2YXJpYWJsZURlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZEp1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBkZWNsYXJlZEp1ZGdlbWVudFByZXNlbnQ7IC8vL1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVEZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIG5lZ2F0ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgIGRlY2xhcmVkRGFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSxcbiAgICAgICAgICBkZWNsYXJlZERhcmlhYmxlRGVmaW5lZCA9IGlzVmFyaWFibGVEZWZpbmVkKGRlY2xhcmVkRGFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFuZWdhdGVkICYmIGRlY2xhcmVkRGFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0ZWQgJiYgIWRlY2xhcmVkRGFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYW1lIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVEZWZpbmVkID0gaXNNZXRhdmFyaWFibGVEZWZpbmVkKGRlY2xhcmVkTWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIGlmICghbmVnYXRlZCAmJiBkZWNsYXJlZE1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCAmJiAhZGVjbGFyZWRNZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xufVxuXG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRGVmaW5lZEFzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidGVybSIsImZyYW1lIiwibmVnYXRlZCIsImdldFRlcm0iLCJnZXRGcmFtZSIsImlzTmVnYXRlZCIsImdldERlZmluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsImRlZmluZWRBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJkZWZpbmVkQXNzZXJ0aW9uIiwiZGVmaW5lZEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJmcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlRnJhbWUiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJ0ZXJtU3RyaW5nIiwidGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZhbGlkYXRlc0ZvcndhcmRzIiwiZnJhbWVTdHJpbmciLCJmcmFtZVNpbmd1bGFyIiwidW5pZnlJbmRlcGVuZGVudGx5IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZURlZmluZWRBc3NlcnRpb24iLCJ0ZXJtRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsIm5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInZhcmlhYmxlIiwiZXF1aXZhbGVuY2VzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZ3JvdW5kZWRUZXJtcyIsImRlZmluZWRWYXJpYWJsZXMiLCJzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzIiwidmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlIiwic29tZSIsImRlZmluZWRWYXJpYWJsZSIsImRlZmluZWRWYXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZSIsImNvbXBhcmVWYXJpYWJsZSIsInZhcmlhYmxlRGVmaW5lZCIsImlzTWV0YXZhcmlhYmxlRGVmaW5lZCIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJkZWNsYXJlZEp1ZGdlbWVudFByZXNlbnQiLCJpc0RlY2xhcmVkSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZURlZmluZWQiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJkZWNsYXJlZERhcmlhYmxlIiwiZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsImRlY2xhcmVkRGFyaWFibGVEZWZpbmVkIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlRGVmaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7a0VBVHNCOzBCQUVDO3lCQUNLOzZCQUNnQjs4QkFDYTsrQkFDb0I7eUJBQ3NFOzs7Ozs7TUFFbkosV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx5QkFBeUJDLGtCQUFTO0lBQzVELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sQ0FBRTtRQUNsRSxLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFFQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtJQUNqQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO0lBQ25CO0lBRUFJLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0gsT0FBTztJQUNyQjtJQUVBSSwwQkFBMEI7UUFDeEIsTUFBTVIsT0FBTyxJQUFJLENBQUNTLE9BQU8sSUFDbkJD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