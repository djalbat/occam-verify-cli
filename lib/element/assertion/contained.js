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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9jb250YWluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbnRhaW5lZEFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUsXG4gICAgICAgICBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlLFxuICAgICAgICAgbmVnYXRlZEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlLFxuICAgICAgICAgc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUsXG4gICAgICAgICBjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQ29udGFpbmVkQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IHZhbGlkQXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGVybShjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KVxuXG4gICAgICBpZiAodGVybVZhbGlkYXRlcyB8fCBmcmFtZVZhbGlkYXRlcyB8fCBzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uJ3MgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtU2luZ3VsYXIgPSB0aGlzLnRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAodGVybVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50ZXJtID0gdGVybTtcblxuICAgICAgICAgIHRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24ncyB0ZXJtLmApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVGcmFtZShjb250ZXh0KSB7XG4gICAgbGV0IGZyYW1lVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5mcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVTdHJpbmcgPSB0aGlzLmZyYW1lLmdldFN0cmluZygpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24ncyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmIChmcmFtZVNpbmd1bGFyKSB7XG4gICAgICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG5cbiAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZyYW1lVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbidzIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5zdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvdG5leHQgPSBudWxsLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMuc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb3RuZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyh0aGlzLmZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyh0aGlzLnN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBzdGF0ZW1lbnQsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29udGFpbmVkQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbk5vZGUgPSBpbnN0YW50aWF0ZUNvbnRhaW5lZEFzc2VydGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtID0gdGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIG5lZ2F0ZWQgPSBuZWdhdGVkRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUoY29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IG5ldyBDb250YWluZWRBc3NlcnRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IGNvbnRhaW5lZEFzc2VydGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlV2hlbkRlcml2ZWQodGVybSwgZnJhbWUsIHN0YXRlbWVudCwgbmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgIGlmICh0ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtQ29udGFpbmVkID0gc3RhdGVtZW50LmlzVGVybUNvbnRhaW5lZCh0ZXJtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFuZWdhdGVkICYmIHRlcm1Db250YWluZWQpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhdGVybUNvbnRhaW5lZCkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmcmFtZUNvbnRhaW5lZCA9IHN0YXRlbWVudC5pc0ZyYW1lQ29udGFpbmVkKGZyYW1lLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCFuZWdhdGVkICYmIGZyYW1lQ29udGFpbmVkKSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQgJiYgIWZyYW1lQ29udGFpbmVkKSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG59Il0sIm5hbWVzIjpbImRlZmluZSIsIkNvbnRhaW5lZEFzc2VydGlvbiIsIkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwidGVybSIsImZyYW1lIiwibmVnYXRlZCIsInN0YXRlbWVudCIsImdldFRlcm0iLCJnZXRGcmFtZSIsImlzTmVnYXRlZCIsImdldFN0YXRlbWVudCIsImdldENvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJnZXROb2RlIiwiY29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInZhbGlkYXRlIiwiY29udGFpbmVkQXNzZXJ0aW9uIiwiY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZEFzc2VydGlvbiIsImZpbmRWYWxpZEFzc2VydGlvbiIsImRlYnVnIiwidGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGVybSIsImZyYW1lVmFsaWRhdGVzIiwidmFsaWRhdGVGcmFtZSIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYWRkQXNzZXJ0aW9uIiwidGVybVN0cmluZyIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVTaW5ndWxhciIsInN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxDb3RuZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZnlJbmRlcGVuZGVudGx5IiwiZ2VuZXJhbENvbnRleHQiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQ29udGFpbmVkQXNzZXJ0aW9uIiwidGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIm5lZ2F0ZWRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsInRlcm1Db250YWluZWQiLCJpc1Rlcm1Db250YWluZWQiLCJmcmFtZUNvbnRhaW5lZCIsImlzRnJhbWVDb250YWluZWQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWNBOzs7ZUFBQTs7O2tFQVpzQjswQkFFQzt5QkFDSzs2QkFDa0I7K0JBQ3VFO3lCQUtqRTs7Ozs7O01BRXBELFdBQWVBLElBQUFBLGdCQUFN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