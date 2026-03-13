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
    validate(stated, context) {
        let containedAssertion = null;
        const containedAssertionString = this.getString(); ///
        context.trace(`Validating the '${containedAssertionString}' contained assertion...`);
        const validAssertion = this.findValidAssertion(context);
        if (validAssertion !== null) {
            containedAssertion = validAssertion; ///
            context.debug(`...the '${containedAssertionString}' contained assertion is already valid.`);
        } else {
            let validates = false;
            const termValidates = this.validateTerm(stated, context), frameValidates = this.validateFrame(stated, context), statementValidates = this.validateStatement(stated, context);
            if (termValidates || frameValidates || statementValidates) {
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
    validateTerm(stated, context) {
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
    validateFrame(stated, context) {
        let frameValidates = false;
        if (this.frame !== null) {
            const frameString = this.frame.getString(), containedAssertionString = this.getString(); ///
            context.trace(`Validating the '${containedAssertionString}' contained assertion's '${frameString}' frame...`);
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
            }
            if (frameValidates) {
                context.debug(`...validated the '${containedAssertionString}' contained assertion's '${frameString}' frame.`);
            }
        }
        return frameValidates;
    }
    validateStatement(stated, context) {
        let statementValidates = false;
        if (this.statement !== null) {
            const statementString = this.statement.getString();
            context.trace(`Validating the '${statementString}' statement...`);
            stated = true; ///
            const statement = this.statement.validate(stated, context);
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
        let unifiesIndependently;
        const context = specificContext, containedAssertionString = this.getString(); ///
        context.trace(`Unifying the '${containedAssertionString}' contained assertion independently...`);
        const term = (0, _substitutions.termFromTermAndSubstitutions)(this.term, generalContext, specificContext), frame = (0, _substitutions.frameFromFrameAndSubstitutions)(this.frame, generalContext, specificContext), statement = (0, _substitutions.statementFromStatementAndSubstitutions)(this.statement, generalContext, specificContext), validatesWhenDerived = validateWhenDerived(term, frame, statement, this.negated, generalContext, specificContext);
        unifiesIndependently = validatesWhenDerived; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9jb250YWluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZUNvbnRhaW5lZEFzc2VydGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGZyYW1lRnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIG5lZ2F0ZWRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSwgc3RhdGVtZW50RnJvbUNvbnRhaW5lZEFzc2VydGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIENvbnRhaW5lZEFzc2VydGlvbiBleHRlbmRzIEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuICAgIHRoaXMuZnJhbWUgPSBmcmFtZTtcbiAgICB0aGlzLm5lZ2F0ZWQgPSBuZWdhdGVkO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtO1xuICB9XG5cbiAgZ2V0RnJhbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWU7XG4gIH1cblxuICBpc05lZ2F0ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMubmVnYXRlZDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbk5vZGU7XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3NlcnRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc2VydGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gdmFsaWRBc3NlcnRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0ZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRlcm0oc3RhdGVkLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGZyYW1lVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZUZyYW1lKHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KHN0YXRlZCwgY29udGV4dClcblxuICAgICAgaWYgKHRlcm1WYWxpZGF0ZXMgfHwgZnJhbWVWYWxpZGF0ZXMgfHwgc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzOyAvLy9cblxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUZXJtKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50ZXJtICE9PSBudWxsKSB7XG4gICAgICBjb25zdCB0ZXJtU3RyaW5nID0gdGhpcy50ZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24ncyAnJHt0ZXJtU3RyaW5nfScgdGVybS4uLmApO1xuXG4gICAgICBjb25zdCB0ZXJtU2luZ3VsYXIgPSB0aGlzLnRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgICBpZiAoIXRlcm1TaW5ndWxhcikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGVybSA9IHRoaXMudGVybS52YWxpZGF0ZShjb250ZXh0LCAodGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbidzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUZyYW1lKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghZnJhbWVTaW5ndWxhcikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLmZyYW1lLnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuXG4gICAgICAgICAgZnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24ncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvdG5leHQgPSBudWxsLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0aGlzLnRlcm0sIHRoaXMuZnJhbWUsIHRoaXMuc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb3RuZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHRlcm0gPSB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zKHRoaXMudGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnModGhpcy5mcmFtZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN0YXRlbWVudEFuZFN1YnN0aXR1dGlvbnModGhpcy5zdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdmFsaWRhdGVXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCB0aGlzLm5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB2YWxpZGF0ZXNXaGVuRGVyaXZlZDsgLy8vXG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQ29udGFpbmVkQXNzZXJ0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29udGFpbmVkQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBjb250YWluZWRBc3NlcnRpb25Ob2RlID0gaW5zdGFudGlhdGVDb250YWluZWRBc3NlcnRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGVybSA9IHRlcm1Gcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgZnJhbWUgPSBmcmFtZUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBuZWdhdGVkID0gbmVnYXRlZEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlKGNvbnRhaW5lZEFzc2VydGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZShjb250YWluZWRBc3NlcnRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBjb250YWluZWRBc3NlcnRpb24gPSBuZXcgQ29udGFpbmVkQXNzZXJ0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGVybSwgZnJhbWUsIG5lZ2F0ZWQsIHN0YXRlbWVudCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29udGFpbmVkQXNzZXJ0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFsaWRhdGVXaGVuRGVyaXZlZCh0ZXJtLCBmcmFtZSwgc3RhdGVtZW50LCBuZWdhdGVkLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHRlcm1Db250YWluZWQgPSBzdGF0ZW1lbnQuaXNUZXJtQ29udGFpbmVkKHRlcm0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgdGVybUNvbnRhaW5lZCkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICF0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lQ29udGFpbmVkID0gc3RhdGVtZW50LmlzRnJhbWVDb250YWluZWQoZnJhbWUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoIW5lZ2F0ZWQgJiYgZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVnYXRlZCAmJiAhZnJhbWVDb250YWluZWQpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbn0iXSwibmFtZXMiOlsiZGVmaW5lIiwiQ29udGFpbmVkQXNzZXJ0aW9uIiwiQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0ZXJtIiwiZnJhbWUiLCJuZWdhdGVkIiwic3RhdGVtZW50IiwiZ2V0VGVybSIsImdldEZyYW1lIiwiaXNOZWdhdGVkIiwiZ2V0U3RhdGVtZW50IiwiZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsImdldE5vZGUiLCJjb250YWluZWRBc3NlcnRpb25Ob2RlIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJjb250YWluZWRBc3NlcnRpb24iLCJjb250YWluZWRBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkQXNzZXJ0aW9uIiwiZmluZFZhbGlkQXNzZXJ0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ0ZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUZXJtIiwiZnJhbWVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZUZyYW1lIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYXNzZXJ0aW9uIiwiYWRkQXNzZXJ0aW9uIiwidGVybVN0cmluZyIsInRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsImZyYW1lU3RyaW5nIiwiZnJhbWVTaW5ndWxhciIsInN0YXRlbWVudFN0cmluZyIsImdlbmVyYWxDb3RuZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidW5pZnlJbmRlcGVuZGVudGx5IiwiZ2VuZXJhbENvbnRleHQiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnMiLCJmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQ29udGFpbmVkQXNzZXJ0aW9uIiwidGVybUZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwiZnJhbWVGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsIm5lZ2F0ZWRGcm9tQ29udGFpbmVkQXNzZXJ0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Db250YWluZWRBc3NlcnRpb25Ob2RlIiwidGVybUNvbnRhaW5lZCIsImlzVGVybUNvbnRhaW5lZCIsImZyYW1lQ29udGFpbmVkIiwiaXNGcmFtZUNvbnRhaW5lZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7a0VBUnNCOzBCQUVDO3lCQUNLOzZCQUNrQjsrQkFDdUU7eUJBQ21DOzs7Ozs7TUFFeEosV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQywyQkFBMkJDLGtCQUFTO0lBQzlELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsQ0FBRTtRQUNsRSxLQUFLLENBQUNOLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtRQUNmLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUNKLElBQUk7SUFDbEI7SUFFQUssV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDSixLQUFLO0lBQ25CO0lBRUFLLFlBQVk7UUFDVixPQUFPLElBQUks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