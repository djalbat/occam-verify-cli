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
    constructor(context, string, node, lineIndex, term, frame, negated, statement){
        super(context, string, node, lineIndex);
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
        let validates = false;
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion !== null) {
            validates = true;
            containedAssertion = validAssertion; ///
            context.debug(`...the '${containedAssertionString}' contained assertion is already valid.`);
        } else {
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
            }
        }
        if (validates) {
            context.debug(`...validated the '${containedAssertionString}' contained assertion.`);
        }
        return containedAssertion;
    }
    validateTerm(context) {
        let termValidates = false;
        if (this.term !== null) {
            const termString = this.term.getString(), containedAssertionString = this.getString(); ///
            context.trace(`Validating the '${containedAssertionString}' contained assertion's term...`);
            const termSingular = this.term.isSingular();
            if (termSingular) {
                const term = this.term.validate(context, (term)=>{
                    const validatesForwards = true;
                    return validatesForwards;
                });
                if (term !== null) {
                    this.term = term;
                    termValidates = true;
                }
                if (termValidates) {
                    context.debug(`...validated the '${containedAssertionString}' contained assertion's term.`);
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
            const frameString = this.frame.getString(), containedAssertionString = this.getString(); ///
            context.trace(`Validating the '${containedAssertionString}' contained assertion's frame...`);
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
                context.debug(`...validated the '${containedAssertionString}' contained assertion's frame.`);
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
        validatesWhenDerived = validateWhenDerived(this.term, this.frame, this.statement, this.negated, context);
        if (validatesWhenDerived) {
            context.debug(`...validated the '${containedAssertionString}' derived contained assertion.`);
        }
        return validatesWhenDerived;
    }
    unifyIndependently(generalContext, specificContext) {
        let unifiesIndependently = false;
        const context = specificContext, containedAssertionString = this.getString(); ///
        context.trace(`Unifying the '${containedAssertionString}' contained assertion independently...`);
        const term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, context), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, context), statement = (0, _substitutions.statementFromStatementAndSubstitutions)(this.statement, context), validatesWhenDerived = validateWhenDerived(term, frame, statement, this.negated, context);
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
                const { string, lineIndex } = json, containedAssertionNode = (0, _instantiate.instantiateContainedAssertion)(string, context), node = containedAssertionNode, term = (0, _element.termFromContainedAssertionNode)(containedAssertionNode, context), frame = (0, _element.frameFromContainedAssertionNode)(containedAssertionNode, context), negated = (0, _element.negatedFromContainedAssertionNode)(containedAssertionNode, context), statement = (0, _element.statementFromContainedAssertionNode)(containedAssertionNode, context);
                context = null;
                containedAssertion = new ContainedAssertion(context, string, node, lineIndex, term, frame, negated, statement);
            }, context);
        }
        return containedAssertion;
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), containedAssertion = (0, _element.containedAssertionFromStatementNode)(statementNode, context);
        return containedAssertion;
    }
});
function validateWhenDerived(term, frame, statement, negated, context) {
    let validatesWhenDerived = false;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9jb250YWluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbnRhaW5lZEFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUsXG4gICAgICAgICBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlLFxuICAgICAgICAgbmVnYXRlZEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlLFxuICAgICAgICAgc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUsXG4gICAgICAgICBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29udGFpbmVkQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IHZhbGlkQXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KVxuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcyB8fCBmcmFtZVZhbGlkYXRlcyB8fCBzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uJ3MgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtU2luZ3VsYXIgPSB0aGlzLnRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24ncyB0ZXJtLmApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24ncyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbidzIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRoaXMudGVybSwgdGhpcy5mcmFtZSwgdGhpcy5zdGF0ZW1lbnQsIHRoaXMubmVnYXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtID0gdGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyh0aGlzLnRlcm0sIGNvbnRleHQpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tRnJhbWVBbmRTdWJzdGl0dXRpb25zKHRoaXMuZnJhbWUsIGNvbnRleHQpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zKHRoaXMuc3RhdGVtZW50LCBjb250ZXh0KSxcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgdGhpcy5uZWdhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJDb250YWluZWRBc3NlcnRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBjb250YWluZWRBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcsIGxpbmVJbmRleCB9ID0ganNvbixcbiAgICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IGluc3RhbnRpYXRlQ29udGFpbmVkQXNzZXJ0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBjb250YWluZWRBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm0gPSB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIGZyYW1lID0gZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgY29udGV4dCA9IG51bGw7XG5cbiAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gbmV3IENvbnRhaW5lZEFzc2VydGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gY29udGFpbmVkQXNzZXJ0aW9uRnJvbVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCBuZWdhdGVkLCBjb250ZXh0KSB7XG4gIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudC5pc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiB0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQgJiYgIXRlcm1Db250YWluZWQpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnQuaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiBmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICFmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xufSJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb250YWluZWRBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsImNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJmcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlRnJhbWUiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFzc2VydGlvbiIsImFkZEFzc2VydGlvbiIsInRlcm1TdHJpbmciLCJ0ZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJmcmFtZVN0cmluZyIsImZyYW1lU2luZ3VsYXIiLCJzdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVDb250YWluZWRBc3NlcnRpb24iLCJ0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwibmVnYXRlZEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlIiwidGVybUNvbnRhaW5lZCIsImlzVGVybUNvbnRhaW5lZCIsImZyYW1lQ29udGFpbmVkIiwiaXNGcmFtZUNvbnRhaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBY0E7OztlQUFBOzs7a0VBWnNCOzBCQUVDO3lCQUNLOzZCQUNrQjsrQkFDdUU7eUJBS2pFOzs7Ozs7TUFFcEQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywyQkFBMkJDLGtCQUFTO0lBQzlELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxDQUFFO1FBQzdFLEtBQUssQ0FBQ1AsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLFVB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