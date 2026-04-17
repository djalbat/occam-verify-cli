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
const _breakPoint = require("../../utilities/breakPoint");
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
    constructor(context, string, node, breakPoint, term, frame, negated){
        super(context, string, node, breakPoint);
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
        const term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, context), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, context), validatesWhenDerived = validateWhenDerived(term, frame, this.negated, context);
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
                const { string } = json, definedAssertionNode = (0, _instantiate.instantiateDefinedAssertion)(string, context), node = definedAssertionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), term = (0, _element.termFromJDefinedAssertionNode)(definedAssertionNode, context), frame = (0, _element.frameFromJDefinedAssertionNode)(definedAssertionNode, context), negated = (0, _element.negatedFromJDefinedAssertionNode)(definedAssertionNode, context);
                context = null;
                definedAssertion = new DefinedAssertion(context, string, node, breakPoint, term, frame, negated);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9kZWZpbmVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgQXNzZXJ0aW9uIGZyb20gXCIuLi9hc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZURlZmluZWRBc3NlcnRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZXF1aXZhbGVuY2VzXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N1YnN0aXR1dGlvbnNcIjtcbmltcG9ydCB7IHRlcm1Gcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlLCBmcmFtZUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUsIG5lZ2F0ZWRGcm9tSkRlZmluZWRBc3NlcnRpb25Ob2RlLCBkZWZpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIERlZmluZWRBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRlcm0sIGZyYW1lLCBuZWdhdGVkKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZT0gZnJhbWU7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICBnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgZGVmaW5lZEFzc2VydGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZEFzc2VydGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzZXJ0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGRlZmluZWRBc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKGNvbnRleHQpLFxuICAgICAgICAgICAgZnJhbWVWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlRnJhbWUoY29udGV4dCk7XG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzIHx8IGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgZGVmaW5lZEFzc2VydGlvbiA9IGFzc2VydGlvbjsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVmaW5lZEFzc2VydGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uJ3MgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtU2luZ3VsYXIgPSB0aGlzLnRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50ZXJtID0gdGVybTsgLy8vXG5cbiAgICAgICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVzIHRoZScke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbidzIHRlcm0uYCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUZyYW1lKGNvbnRleHQpIHtcbiAgICBsZXQgZnJhbWVWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZVN0cmluZyA9IHRoaXMuZnJhbWUuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgICAgZGVmaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24ncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLi4uYCk7XG5cbiAgICAgIGNvbnN0IGZyYW1lU2luZ3VsYXIgPSB0aGlzLmZyYW1lLmlzU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKGZyYW1lU2luZ3VsYXIpIHtcbiAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLmZyYW1lLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcblxuICAgICAgICAgIGZyYW1lVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZnJhbWVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVzIHRoZScke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZWZpbmVkIGFzc2VydGlvbidzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgZGVmaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlcyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIHN0YXRlZCBkZWZpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGRlZmluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHZhbGlkYXRlV2hlbkRlcml2ZWQodGhpcy50ZXJtLCB0aGlzLmZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXMgdGhlICcke2RlZmluZWRBc3NlcnRpb25TdHJpbmd9JyBkZXJpdmVkIGRlZmluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7ZGVmaW5lZEFzc2VydGlvblN0cmluZ30nIGRlZmluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRoaXMudGVybSwgY29udGV4dCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnModGhpcy5mcmFtZSwgY29udGV4dCksXG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCB0aGlzLm5lZ2F0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtkZWZpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVmaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiRGVmaW5lZEFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZmluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIGRlZmluZWRBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVEZWZpbmVkQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUoZGVmaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZShkZWZpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgZGVmaW5lZEFzc2VydGlvbiA9IG5ldyBEZWZpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBkZWZpbmVkQXNzZXJ0aW9uID0gZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZmluZWRBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBpc1ZhcmlhYmxlRGVmaW5lZCh2YXJpYWJsZSwgY29udGV4dCkge1xuICBjb25zdCBlcXVpdmFsZW5jZXMgPSBjb250ZXh0LmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICBncm91bmRlZFRlcm1zID0gW10sXG4gICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICBzZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGVxdWl2YWxlbmNlcywgZ3JvdW5kZWRUZXJtcywgZGVmaW5lZFZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgY29uc3QgdmFyaWFibGVNYXRjaGVzRGVmaW5lZFZhcmlhYmxlID0gZGVmaW5lZFZhcmlhYmxlcy5zb21lKChkZWZpbmVkVmFyaWFibGUpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWZpbmVkVmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGUgPSBkZWZpbmVkVmFyaWFibGUuY29tcGFyZVZhcmlhYmxlKHZhcmlhYmxlKTtcblxuICAgICAgICAgIGlmIChkZWZpbmVkVmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGUgPT09IHZhcmlhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB2YXJpYWJsZURlZmluZWQgPSB2YXJpYWJsZU1hdGNoZXNEZWZpbmVkVmFyaWFibGU7IC8vL1xuXG4gIHJldHVybiB2YXJpYWJsZURlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzTWV0YXZhcmlhYmxlRGVmaW5lZChtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IG1ldGF2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgIGRlY2xhcmVkSnVkZ2VtZW50UHJlc2VudCA9IGNvbnRleHQuaXNEZWNsYXJlZEp1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgIG1ldGF2YXJpYWJsZURlZmluZWQgPSBkZWNsYXJlZEp1ZGdlbWVudFByZXNlbnQ7IC8vL1xuXG4gIHJldHVybiBtZXRhdmFyaWFibGVEZWZpbmVkXG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIG5lZ2F0ZWQsIGNvbnRleHQpIHtcbiAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB0ZXJtLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgIGRlY2xhcmVkRGFyaWFibGUgPSBjb250ZXh0LmZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSxcbiAgICAgICAgICBkZWNsYXJlZERhcmlhYmxlRGVmaW5lZCA9IGlzVmFyaWFibGVEZWZpbmVkKGRlY2xhcmVkRGFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKCFuZWdhdGVkICYmIGRlY2xhcmVkRGFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKG5lZ2F0ZWQgJiYgIWRlY2xhcmVkRGFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKGZyYW1lIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lID0gZnJhbWUuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gY29udGV4dC5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVEZWZpbmVkID0gaXNNZXRhdmFyaWFibGVEZWZpbmVkKGRlY2xhcmVkTWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIGlmICghbmVnYXRlZCAmJiBkZWNsYXJlZE1ldGF2YXJpYWJsZURlZmluZWQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmVnYXRlZCAmJiAhZGVjbGFyZWRNZXRhdmFyaWFibGVEZWZpbmVkKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xufVxuXG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiRGVmaW5lZEFzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXREZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJkZWZpbmVkQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwiZGVmaW5lZEFzc2VydGlvbiIsImRlZmluZWRBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYWRkQXNzZXJ0aW9uIiwidGVybVN0cmluZyIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVTaW5ndWxhciIsInVuaWZ5SW5kZXBlbmRlbnRseSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVEZWZpbmVkQXNzZXJ0aW9uIiwiYnJlYWtQb2ludEZyb21KU09OIiwidGVybUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21KRGVmaW5lZEFzc2VydGlvbk5vZGUiLCJuZWdhdGVkRnJvbUpEZWZpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiZGVmaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiaXNWYXJpYWJsZURlZmluZWQiLCJ2YXJpYWJsZSIsImVxdWl2YWxlbmNlcyIsImdldEVxdWl2YWxlbmNlcyIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInZhcmlhYmxlTWF0Y2hlc0RlZmluZWRWYXJpYWJsZSIsInNvbWUiLCJkZWZpbmVkVmFyaWFibGUiLCJkZWZpbmVkVmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGUiLCJjb21wYXJlVmFyaWFibGUiLCJ2YXJpYWJsZURlZmluZWQiLCJpc01ldGF2YXJpYWJsZURlZmluZWQiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZGVjbGFyZWRKdWRnZW1lbnRQcmVzZW50IiwiaXNEZWNsYXJlZEp1ZGdlbWVudFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVEZWZpbmVkIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwiZGVjbGFyZWREYXJpYWJsZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJkZWNsYXJlZERhcmlhYmxlRGVmaW5lZCIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiZGVjbGFyZWRNZXRhdmFyaWFibGUiLCJmaW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZURlZmluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O2tFQVZzQjswQkFFQzt5QkFDSzs0QkFDTzs2QkFDUzs4QkFDYTsrQkFDb0I7eUJBQ3NFOzs7Ozs7TUFFbkosV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx5QkFBeUJDLGtCQUFTO0lBQzVELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sQ0FBRTtRQUNuRSxLQUFLLENBQUNOLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFFQTtRQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtJQUNqQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNILElBQUk7SUFDbEI7SUFFQUksV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDSCxLQUFLO0lBQ25CO0lB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