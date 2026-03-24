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
const _default = (0, _elements.define)(class ContainedAssertion extends _assertion.default {
    constructor(context, string, node, term, frame, negated, statement){
        super(context, string, node);
        this.term = term;
        this.frame = frame;
        this.negated = negated;
        this.statement = statement;
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
    getStatement() {
        return this.statement;
    }
    getContainedAssertionNode() {
        const node = this.getNode(), containedAssertionNode = node; ///
        return containedAssertionNode;
    }
    validate(context) {
        let containedAssertion = null;
        const containedAssertionString = this.getString(); ///
        context.trace(`Validating the '${containedAssertionString}' contained assertion...`);
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion !== null) {
            containedAssertion = validAssertion; ///
            context.debug(`...the '${containedAssertionString}' contained assertion is already valid.`);
        } else {
            let validates = false;
            const termValidates = this.validateTerm(context), frameValidates = this.validateFrame(context), statementValidates = this.validateStatement(context);
            if (termValidates || frameValidates || statementValidates) {
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
                containedAssertion = assertion; ///
                context.addAssertion(assertion);
                context.debug(`...validated the '${containedAssertionString}' contained assertion.`);
            }
        }
        return containedAssertion;
    }
    validateTerm(context) {
        let termValidates = false;
        if (this.term !== null) {
            const termString = this.term.getString(), containedAssertionString = this.getString(); ///
            context.trace(`Validating the '${containedAssertionString}' contained assertion's '${termString}' term...`);
            const termSingular = this.term.isSingular();
            if (!termSingular) {
                context.debug(`The '${termString}' term is not singular.`);
            } else {
                const term = this.term.validate(context, (term)=>{
                    const validatesForwards = true;
                    return validatesForwards;
                });
                if (term !== null) {
                    this.term = term;
                    termValidates = true;
                }
                if (termValidates) {
                    context.debug(`...validated the '${containedAssertionString}' contained assertion's '${termString}' term.`);
                }
            }
        }
        return termValidates;
    }
    validateFrame(context) {
        let frameValidates = false;
        if (this.frame !== null) {
            const frameString = this.frame.getString(), containedAssertionString = this.getString(); ///
            context.trace(`Validating the '${containedAssertionString}' contained assertion's '${frameString}' frame...`);
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
                context.debug(`...validated the '${containedAssertionString}' contained assertion's '${frameString}' frame.`);
            }
        }
        return frameValidates;
    }
    validateStatement(context) {
        let statementValidates = false;
        if (this.statement !== null) {
            const statementString = this.statement.getString();
            context.trace(`Validating the '${statementString}' statement...`);
            const statement = this.statement.validate(context);
            if (statement !== null) {
                statementValidates = true;
            }
            if (statementValidates) {
                context.debug(`...validated the '${statementString}' statement.`);
            }
        }
        return statementValidates;
    }
    validateWhenStated(context) {
        let validatesWhenStated;
        const containedAssertionString = this.getString(); ///
        context.trace(`Validating the '${containedAssertionString}' stated contained assertion...`);
        validatesWhenStated = true;
        if (validatesWhenStated) {
            context.debug(`...validated the '${containedAssertionString}' stated contained assertion.`);
        }
        return validatesWhenStated;
    }
    validateWhenDerived(context) {
        let validatesWhenDerived;
        const containedAssertionString = this.getString(); ///
        context.trace(`Validating the '${containedAssertionString}' derived contained assertion...`);
        const generalCotnext = null, specificContext = context; ///
        validatesWhenDerived = validateWhenDerived(this.term, this.frame, this.statement, this.negated, generalCotnext, specificContext);
        if (validatesWhenDerived) {
            context.debug(`...validated the '${containedAssertionString}' derived contained assertion.`);
        }
        return validatesWhenDerived;
    }
    unifyIndependently(generalContext, specificContext) {
        let unifiesIndependently = false;
        const context = specificContext, containedAssertionString = this.getString(); ///
        context.trace(`Unifying the '${containedAssertionString}' contained assertion independently...`);
        const term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, generalContext, specificContext), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, generalContext, specificContext), statement = (0, _substitutions.statementFromStatementAndSubstitutions)(this.statement, generalContext, specificContext), validatesWhenDerived = validateWhenDerived(term, frame, statement, this.negated, generalContext, specificContext);
        if (validatesWhenDerived) {
            unifiesIndependently = true;
        }
        if (unifiesIndependently) {
            context.debug(`...unified the '${containedAssertionString}' contained assertion independently.`);
        }
        return unifiesIndependently;
    }
    static name = "ContainedAssertion";
    static fromJSON(json, context) {
        let containedAssertion = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.instantiate)((context)=>{
                const { string } = json, containedAssertionNode = (0, _instantiate.instantiateContainedAssertion)(string, context), node = containedAssertionNode, term = (0, _element.termFromContainedAssertionNode)(containedAssertionNode, context), frame = (0, _element.frameFromContainedAssertionNode)(containedAssertionNode, context), negated = (0, _element.negatedFromContainedAssertionNode)(containedAssertionNode, context), statement = (0, _element.statementFromContainedAssertionNode)(containedAssertionNode, context);
                context = null;
                containedAssertion = new ContainedAssertion(context, string, node, term, frame, negated, statement);
            }, context);
        }
        return containedAssertion;
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), containedAssertion = (0, _element.containedAssertionFromStatementNode)(statementNode, context);
        return containedAssertion;
    }
});
function validateWhenDerived(term, frame, statement, negated, generalContext, specificContext) {
    let validatesWhenDerived = false;
    const context = specificContext; ///
    if (statement !== null) {
        if (term !== null) {
            const termContained = statement.isTermContained(term, context);
            if (!negated && termContained) {
                validatesWhenDerived = true;
            }
            if (negated && !termContained) {
                validatesWhenDerived = true;
            }
        }
        if (frame !== null) {
            const frameContained = statement.isFrameContained(frame, context);
            if (!negated && frameContained) {
                validatesWhenDerived = true;
            }
            if (negated && !frameContained) {
                validatesWhenDerived = true;
            }
        }
    }
    return validatesWhenDerived;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9jb250YWluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbnRhaW5lZEFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUsXG4gICAgICAgICBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlLFxuICAgICAgICAgbmVnYXRlZEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlLFxuICAgICAgICAgc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUsXG4gICAgICAgICBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29udGFpbmVkQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGVybSA9IHRlcm07XG4gICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuICAgIHRoaXMubmVnYXRlZCA9IG5lZ2F0ZWQ7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRlcm07XG4gIH1cblxuICBnZXRGcmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZTtcbiAgfVxuXG4gIGlzTmVnYXRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5uZWdhdGVkO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uTm9kZTtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVGcmFtZShjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dClcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMgfHwgZnJhbWVWYWxpZGF0ZXMgfHwgc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1TdHJpbmcgPSB0aGlzLnRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLi4uYCk7XG5cbiAgICAgIGNvbnN0IHRlcm1TaW5ndWxhciA9IHRoaXMudGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghdGVybVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0ZXJtKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudGVybSA9IHRlcm07XG5cbiAgICAgICAgICB0ZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0ZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlRnJhbWUoY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbidzICcke2ZyYW1lU3RyaW5nfScgZnJhbWUuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZyYW1lVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBzdGF0ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ290bmV4dCA9IG51bGwsXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRoaXMudGVybSwgdGhpcy5mcmFtZSwgdGhpcy5zdGF0ZW1lbnQsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvdG5leHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHRoaXMuc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb250YWluZWRBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZUNvbnRhaW5lZEFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0ZXJtLCBmcmFtZSwgbmVnYXRlZCwgc3RhdGVtZW50KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBzdGF0ZW1lbnQsIG5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudC5pc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiB0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQgJiYgIXRlcm1Db250YWluZWQpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnQuaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiBmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICFmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xufSJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb250YWluZWRBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsImNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJmcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlRnJhbWUiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsInRlcm1TdHJpbmciLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJmcmFtZVN0cmluZyIsImZyYW1lU2luZ3VsYXIiLCJzdGF0ZW1lbnRTdHJpbmciLCJnZW5lcmFsQ290bmV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsImdlbmVyYWxDb250ZXh0IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJ0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zIiwiZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnMiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUNvbnRhaW5lZEFzc2VydGlvbiIsInRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJuZWdhdGVkRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUiLCJ0ZXJtQ29udGFpbmVkIiwiaXNUZXJtQ29udGFpbmVkIiwiZnJhbWVDb250YWluZWQiLCJpc0ZyYW1lQ29udGFpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFjQTs7O2VBQUE7OztrRUFac0I7MEJBRUM7eUJBQ0s7NkJBQ2tCOytCQUN1RTt5QkFLakU7Ozs7OztNQUVwRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDJCQUEyQkMsa0JBQVM7SUFDOUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxDQUFFO1FBQ2xFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQ0osSUFBSTtJQUNsQjtJQUVBSyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNKLEtBQUs7SUFDbkI7SUFFQUssWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSixPQUFPO0lBQ3JCO0lBRUFLLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0osU0FBUztJQUN2QjtJQUVBSyw0QkFBNEI7UUFDMUIsTUFBTVQsT0FBTyxJQUFJLENBQUNVLE9BQU8sSUFDbkJDLHlCQUF5QlgsTUFBTyxHQUFHO1FBRXpDLE9BQU9XO0lBQ1Q7SUFFQUMsU0FBU2QsT0FBTyxFQUFFO1FBQ2hCLElBQUllLHFCQUFxQjtRQUV6QixNQUFNQywyQkFBMkIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV0RGpCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYseUJBQXlCLHdCQUF3QixDQUFDO1FBRW5GLE1BQU1HLGlCQUFpQixJQUFJLENBQUNDLGtCQUFrQixDQUFDcEI7UUFFL0MsSUFBSW1CLG1CQUFtQixNQUFNO1lBQzNCSixxQkFBcUJJLGdCQUFpQixHQUFHO1lBRXpDbkIsUUFBUXFCLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRUwseUJBQXlCLHVDQUF1QyxDQUFDO1FBQzVGLE9BQU87WUFDTCxJQUFJTSxZQUFZO1lBRWhCLE1BQU1DLGdCQUFnQixJQUFJLENBQUNDLFlBQVksQ0FBQ3hCLFVBQ2xDeUIsaUJBQWlCLElBQUksQ0FBQ0MsYUFBYSxDQUFDMUIsVUFDcEMyQixxQkFBcUIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQzVCO1lBRWxELElBQUl1QixpQkFBaUJFLGtCQUFrQkUsb0JBQW9CO2dCQUN6RCxNQUFNRSxTQUFTN0IsUUFBUThCLFFBQVE7Z0JBRS9CLElBQUlDLHNCQUFzQixPQUN0QkMsdUJBQXVCO2dCQUUzQixJQUFJSCxRQUFRO29CQUNWRSxzQkFBc0IsSUFBSSxDQUFDRSxrQkFBa0IsQ0FBQ2pDO2dCQUNoRCxPQUFPO29CQUNMZ0MsdUJBQXVCLElBQUksQ0FBQ0UsbUJBQW1CLENBQUNsQztnQkFDbEQ7Z0JBRUEsSUFBSStCLHVCQUF1QkMsc0JBQXNCO29CQUMvQ1YsWUFBWTtnQkFDZDtZQUNGO1lBRUEsSUFBSUEsV0FBVztnQkFDYixNQUFNYSxZQUFZLElBQUksRUFBRSxHQUFHO2dCQUUzQnBCLHFCQUFxQm9CLFdBQVksR0FBRztnQkFFcENuQyxRQUFRb0MsWUFBWSxDQUFDRDtnQkFFckJuQyxRQUFRcUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVMLHlCQUF5QixzQkFBc0IsQ0FBQztZQUNyRjtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBUyxhQUFheEIsT0FBTyxFQUFFO1FBQ3BCLElBQUl1QixnQkFBZ0I7UUFFcEIsSUFBSSxJQUFJLENBQUNwQixJQUFJLEtBQUssTUFBTTtZQUN0QixNQUFNa0MsYUFBYSxJQUFJLENBQUNsQyxJQUFJLENBQUNjLFNBQVMsSUFDaENELDJCQUEyQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1lBRXREakIsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRix5QkFBeUIseUJBQXlCLEVBQUVxQixXQUFXLFNBQVMsQ0FBQztZQUUxRyxNQUFNQyxlQUFlLElBQUksQ0FBQ25DLElBQUksQ0FBQ29DLFVBQVU7WUFFekMsSUFBSSxDQUFDRCxjQUFjO2dCQUNqQnRDLFFBQVFxQixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVnQixXQUFXLHVCQUF1QixDQUFDO1lBQzNELE9BQU87Z0JBQ0wsTUFBTWxDLE9BQU8sSUFBSSxDQUFDQSxJQUFJLENBQUNXLFFBQVEsQ0FBQ2QsU0FBUyxDQUFDRztvQkFDeEMsTUFBTXFDLG9CQUFvQjtvQkFFMUIsT0FBT0E7Z0JBQ1Q7Z0JBRUEsSUFBSXJDLFNBQVMsTUFBTTtvQkFDakIsSUFBSSxDQUFDQSxJQUFJLEdBQUdBO29CQUVab0IsZ0JBQWdCO2dCQUNsQjtnQkFFQSxJQUFJQSxlQUFlO29CQUNqQnZCLFFBQVFxQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwseUJBQXlCLHlCQUF5QixFQUFFcUIsV0FBVyxPQUFPLENBQUM7Z0JBQzVHO1lBQ0Y7UUFDRjtRQUVBLE9BQU9kO0lBQ1Q7SUFFQUcsY0FBYzFCLE9BQU8sRUFBRTtRQUNyQixJQUFJeUIsaUJBQWlCO1FBRXJCLElBQUksSUFBSSxDQUFDckIsS0FBSyxLQUFLLE1BQU07WUFDdkIsTUFBTXFDLGNBQWMsSUFBSSxDQUFDckMsS0FBSyxDQUFDYSxTQUFTLElBQ2xDRCwyQkFBMkIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztZQUV0RGpCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYseUJBQXlCLHlCQUF5QixFQUFFeUIsWUFBWSxVQUFVLENBQUM7WUFFNUcsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ3RDLEtBQUssQ0FBQ21DLFVBQVU7WUFFM0MsSUFBSUcsZUFBZTtnQkFDakIsTUFBTXRDLFFBQVEsSUFBSSxDQUFDQSxLQUFLLENBQUNVLFFBQVEsQ0FBQ2Q7Z0JBRWxDLElBQUlJLFVBQVUsTUFBTTtvQkFDbEIsSUFBSSxDQUFDQSxLQUFLLEdBQUdBO29CQUVicUIsaUJBQWlCO2dCQUNuQjtZQUNGLE9BQU87Z0JBQ0x6QixRQUFRcUIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFb0IsWUFBWSx3QkFBd0IsQ0FBQztZQUM3RDtZQUVBLElBQUloQixnQkFBZ0I7Z0JBQ2xCekIsUUFBUXFCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTCx5QkFBeUIseUJBQXlCLEVBQUV5QixZQUFZLFFBQVEsQ0FBQztZQUM5RztRQUNGO1FBRUEsT0FBT2hCO0lBQ1Q7SUFFQUcsa0JBQWtCNUIsT0FBTyxFQUFFO1FBQ3pCLElBQUkyQixxQkFBcUI7UUFFekIsSUFBSSxJQUFJLENBQUNyQixTQUFTLEtBQUssTUFBTTtZQUMzQixNQUFNcUMsa0JBQWtCLElBQUksQ0FBQ3JDLFNBQVMsQ0FBQ1csU0FBUztZQUVoRGpCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRXlCLGdCQUFnQixjQUFjLENBQUM7WUFFaEUsTUFBTXJDLFlBQVksSUFBSSxDQUFDQSxTQUFTLENBQUNRLFFBQVEsQ0FBQ2Q7WUFFMUMsSUFBSU0sY0FBYyxNQUFNO2dCQUN0QnFCLHFCQUFxQjtZQUN2QjtZQUVBLElBQUlBLG9CQUFvQjtnQkFDdEIzQixRQUFRcUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVzQixnQkFBZ0IsWUFBWSxDQUFDO1lBQ2xFO1FBQ0Y7UUFFQSxPQUFPaEI7SUFDVDtJQUVBTSxtQkFBbUJqQyxPQUFPLEVBQUU7UUFDMUIsSUFBSStCO1FBRUosTUFBTWYsMkJBQTJCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFdERqQixRQUFRa0IsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHlCQUF5QiwrQkFBK0IsQ0FBQztRQUUxRmUsc0JBQXNCO1FBRXRCLElBQUlBLHFCQUFxQjtZQUN2Qi9CLFFBQVFxQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUwseUJBQXlCLDZCQUE2QixDQUFDO1FBQzVGO1FBRUEsT0FBT2U7SUFDVDtJQUVBRyxvQkFBb0JsQyxPQUFPLEVBQUU7UUFDM0IsSUFBSWdDO1FBRUosTUFBTWhCLDJCQUEyQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXREakIsUUFBUWtCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRix5QkFBeUIsZ0NBQWdDLENBQUM7UUFFM0YsTUFBTTRCLGlCQUFpQixNQUNqQkMsa0JBQWtCN0MsU0FBVSxHQUFHO1FBRXJDZ0MsdUJBQXVCRSxvQkFBb0IsSUFBSSxDQUFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQ0UsU0FBUyxFQUFFLElBQUksQ0FBQ0QsT0FBTyxFQUFFdUMsZ0JBQWdCQztRQUVoSCxJQUFJYixzQkFBc0I7WUFDeEJoQyxRQUFRcUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVMLHlCQUF5Qiw4QkFBOEIsQ0FBQztRQUM3RjtRQUVBLE9BQU9nQjtJQUNUO0lBRUFjLG1CQUFtQkMsY0FBYyxFQUFFRixlQUFlLEVBQUU7UUFDbEQsSUFBSUcsdUJBQXVCO1FBRTNCLE1BQU1oRCxVQUFVNkMsaUJBQ1Y3QiwyQkFBMkIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV0RGpCLFFBQVFrQixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVGLHlCQUF5QixzQ0FBc0MsQ0FBQztRQUUvRixNQUFNYixPQUFPOEMsSUFBQUEsMkNBQTRCLEVBQUMsSUFBSSxDQUFDOUMsSUFBSSxFQUFFNEMsZ0JBQWdCRixrQkFDL0R6QyxRQUFROEMsSUFBQUEsNkNBQThCLEVBQUMsSUFBSSxDQUFDOUMsS0FBSyxFQUFFMkMsZ0JBQWdCRixrQkFDbkV2QyxZQUFZNkMsSUFBQUEscURBQXNDLEVBQUMsSUFBSSxDQUFDN0MsU0FBUyxFQUFFeUMsZ0JBQWdCRixrQkFDbkZiLHVCQUF1QkUsb0JBQW9CL0IsTUFBTUMsT0FBT0UsV0FBVyxJQUFJLENBQUNELE9BQU8sRUFBRTBDLGdCQUFnQkY7UUFFdkcsSUFBSWIsc0JBQXNCO1lBQ3hCZ0IsdUJBQXVCO1FBQ3pCO1FBRUEsSUFBSUEsc0JBQXNCO1lBQ3hCaEQsUUFBUXFCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFTCx5QkFBeUIsb0NBQW9DLENBQUM7UUFDakc7UUFFQSxPQUFPZ0M7SUFDVDtJQUVBLE9BQU9JLE9BQU8scUJBQXFCO0lBRW5DLE9BQU9DLFNBQVNDLElBQUksRUFBRXRELE9BQU8sRUFBRTtRQUM3QixJQUFJZSxxQkFBcUI7UUFFekIsTUFBTSxFQUFFcUMsSUFBSSxFQUFFLEdBQUdFO1FBRWpCLElBQUksSUFBSSxDQUFDRixJQUFJLEtBQUtBLE1BQU07WUFDdEJHLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ3ZEO2dCQUNYLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdxRCxNQUNiekMseUJBQXlCMkMsSUFBQUEsMENBQTZCLEVBQUN2RCxRQUFRRCxVQUMvREUsT0FBT1csd0JBQ1BWLE9BQU9zRCxJQUFBQSx1Q0FBOEIsRUFBQzVDLHdCQUF3QmIsVUFDOURJLFFBQVFzRCxJQUFBQSx3Q0FBK0IsRUFBQzdDLHdCQUF3QmIsVUFDaEVLLFVBQVVzRCxJQUFBQSwwQ0FBaUMsRUFBQzlDLHdCQUF3QmIsVUFDcEVNLFlBQVlzRCxJQUFBQSw0Q0FBbUMsRUFBQy9DLHdCQUF3QmI7Z0JBRTlFQSxVQUFVO2dCQUVWZSxxQkFBcUIsSUFBSWpCLG1CQUFtQkUsU0FBU0MsUUFBUUMsTUFBTUMsTUFBTUMsT0FBT0MsU0FBU0M7WUFDM0YsR0FBR047UUFDTDtRQUVBLE9BQU9lO0lBQ1Q7SUFFQSxPQUFPOEMsY0FBY3ZELFNBQVMsRUFBRU4sT0FBTyxFQUFFO1FBQ3ZDLE1BQU04RCxnQkFBZ0J4RCxVQUFVTSxPQUFPLElBQ2pDRyxxQkFBcUJnRCxJQUFBQSw0Q0FBbUMsRUFBQ0QsZUFBZTlEO1FBRTlFLE9BQU9lO0lBQ1Q7QUFDRjtBQUVBLFNBQVNtQixvQkFBb0IvQixJQUFJLEVBQUVDLEtBQUssRUFBRUUsU0FBUyxFQUFFRCxPQUFPLEVBQUUwQyxjQUFjLEVBQUVGLGVBQWU7SUFDM0YsSUFBSWIsdUJBQXVCO0lBRTNCLE1BQU1oQyxVQUFVNkMsaUJBQWtCLEdBQUc7SUFFckMsSUFBSXZDLGNBQWMsTUFBTTtRQUN0QixJQUFJSCxTQUFTLE1BQU07WUFDakIsTUFBTTZELGdCQUFnQjFELFVBQVUyRCxlQUFlLENBQUM5RCxNQUFNSDtZQUV0RCxJQUFJLENBQUNLLFdBQVcyRCxlQUFlO2dCQUM3QmhDLHVCQUF1QjtZQUN6QjtZQUVBLElBQUkzQixXQUFXLENBQUMyRCxlQUFlO2dCQUM3QmhDLHVCQUF1QjtZQUN6QjtRQUNGO1FBRUEsSUFBSTVCLFVBQVUsTUFBTTtZQUNsQixNQUFNOEQsaUJBQWlCNUQsVUFBVTZELGdCQUFnQixDQUFDL0QsT0FBT0o7WUFFekQsSUFBSSxDQUFDSyxXQUFXNkQsZ0JBQWdCO2dCQUM5QmxDLHVCQUF1QjtZQUN6QjtZQUVBLElBQUkzQixXQUFXLENBQUM2RCxnQkFBZ0I7Z0JBQzlCbEMsdUJBQXVCO1lBQ3pCO1FBQ0Y7SUFDRjtJQUVBLE9BQU9BO0FBQ1QifQ==