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
const _json = require("../../utilities/json");
const _substitutions = require("../../utilities/substitutions");
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
            context.trace(`Validating the '${containedAssertionString}' contained assertino's '${termString}' term...`);
            const termSingular = this.term.isSingular();
            if (!termSingular) {
                context.debug(`The '${termString}' term is not singular.`);
            } else {
                const term = this.term.validate(context, ()=>{
                    const validatesForwards = true;
                    return validatesForwards;
                });
                if (term !== null) {
                    this.term = term;
                    termValidates = true;
                }
                if (termValidates) {
                    context.debug(`...validated the '${containedAssertionString}' contained assertino's '${termString}' term.`);
                }
            }
        }
        return termValidates;
    }
    validateFrame(stated, context) {
        let frameValidates = false;
        if (this.frame !== null) {
            const frameString = this.frame.getString(), containedAssertionString = this.getString(); ///
            context.trace(`Validating the '${containedAssertionString}' contained assertino's '${frameString}' frame...`);
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
                context.debug(`...validated the '${containedAssertionString}' contained assertino's '${frameString}' frame.`);
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
    toJSON() {
        const { name } = this.constructor, termJSON = (0, _json.termToTermJSON)(this.term), frameJSON = (0, _json.frameToFrameJSON)(this.frame), negatedJSON = (0, _json.negatedToNegatedJSON)(this.negated), statementJSON = (0, _json.statementToStatementJSON)(this.statement), term = termJSON, frame = frameJSON, negated = negatedJSON, statement = statementJSON, string = this.getString(), json = {
            name,
            string,
            term,
            frame,
            negated,
            statement
        };
        return json;
    }
    static name = "ContainedAssertion";
    static fromJSON(json, context) {
        let containedAssertion = null;
        const { name } = json;
        if (this.name === name) {
            debugger;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L2Fzc2VydGlvbi9jb250YWluZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBBc3NlcnRpb24gZnJvbSBcIi4uL2Fzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHRlcm1Ub1Rlcm1KU09OLCBmcmFtZVRvRnJhbWVKU09OLCBuZWdhdGVkVG9OZWdhdGVkSlNPTiwgc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyB0ZXJtRnJvbVRlcm1BbmRTdWJzdGl0dXRpb25zLCBmcmFtZUZyb21GcmFtZUFuZFN1YnN0aXR1dGlvbnMsIHN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdWJzdGl0dXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBDb250YWluZWRBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRlcm0sIGZyYW1lLCBuZWdhdGVkLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50ZXJtID0gdGVybTtcbiAgICB0aGlzLmZyYW1lID0gZnJhbWU7XG4gICAgdGhpcy5uZWdhdGVkID0gbmVnYXRlZDtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybTtcbiAgfVxuXG4gIGdldEZyYW1lKCkge1xuICAgIHJldHVybiB0aGlzLmZyYW1lO1xuICB9XG5cbiAgaXNOZWdhdGVkKCkge1xuICAgIHJldHVybiB0aGlzLm5lZ2F0ZWQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0Q29udGFpbmVkQXNzZXJ0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb25Ob2RlO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzZXJ0aW9uID0gdGhpcy5maW5kVmFsaWRBc3NlcnRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnRhaW5lZEFzc2VydGlvbiA9IHZhbGlkQXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUZXJtKHN0YXRlZCwgY29udGV4dCksXG4gICAgICAgICAgICBmcmFtZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVGcmFtZShzdGF0ZWQsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChzdGF0ZWQsIGNvbnRleHQpXG5cbiAgICAgIGlmICh0ZXJtVmFsaWRhdGVzIHx8IGZyYW1lVmFsaWRhdGVzIHx8IHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpczsgLy8vXG5cbiAgICAgICAgY29udGFpbmVkQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRhaW5lZEFzc2VydGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGVybShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMudGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybVN0cmluZyA9IHRoaXMudGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW5vJ3MgJyR7dGVybVN0cmluZ30nIHRlcm0uLi5gKTtcblxuICAgICAgY29uc3QgdGVybVNpbmd1bGFyID0gdGhpcy50ZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgICAgaWYgKCF0ZXJtU2luZ3VsYXIpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm0udmFsaWRhdGUoY29udGV4dCwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnRlcm0gPSB0ZXJtO1xuXG4gICAgICAgICAgdGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlubydzICcke3Rlcm1TdHJpbmd9JyB0ZXJtLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZUZyYW1lKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBmcmFtZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuZnJhbWUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGZyYW1lU3RyaW5nID0gdGhpcy5mcmFtZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtjb250YWluZWRBc3NlcnRpb25TdHJpbmd9JyBjb250YWluZWQgYXNzZXJ0aW5vJ3MgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZS4uLmApO1xuXG4gICAgICBjb25zdCBmcmFtZVNpbmd1bGFyID0gdGhpcy5mcmFtZS5pc1Npbmd1bGFyKCk7XG5cbiAgICAgIGlmICghZnJhbWVTaW5ndWxhcikge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgICAgY29uc3QgZnJhbWUgPSB0aGlzLmZyYW1lLnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGZyYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5mcmFtZSA9IGZyYW1lO1xuXG4gICAgICAgICAgZnJhbWVWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmcmFtZVZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpbm8ncyAnJHtmcmFtZVN0cmluZ30nIGZyYW1lLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmcmFtZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLnN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgc3RhdGVkIGNvbnRhaW5lZCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBjb250YWluZWRBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGRlcml2ZWQgY29udGFpbmVkIGFzc2VydGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvdG5leHQgPSBudWxsLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRoaXMudGVybSwgdGhpcy5mcmFtZSwgdGhpcy5zdGF0ZW1lbnQsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvdG5leHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgZGVyaXZlZCBjb250YWluZWQgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGNvbnRhaW5lZEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2NvbnRhaW5lZEFzc2VydGlvblN0cmluZ30nIGNvbnRhaW5lZCBhc3NlcnRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3QgdGVybSA9IHRlcm1Gcm9tVGVybUFuZFN1YnN0aXR1dGlvbnModGhpcy50ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyh0aGlzLmZyYW1lLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3RhdGVtZW50QW5kU3Vic3RpdHV0aW9ucyh0aGlzLnN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBzdGF0ZW1lbnQsIHRoaXMubmVnYXRlZCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHZhbGlkYXRlc1doZW5EZXJpdmVkOyAvLy9cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7Y29udGFpbmVkQXNzZXJ0aW9uU3RyaW5nfScgY29udGFpbmVkIGFzc2VydGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgdGVybUpTT04gPSB0ZXJtVG9UZXJtSlNPTih0aGlzLnRlcm0pLFxuICAgICAgICAgIGZyYW1lSlNPTiA9IGZyYW1lVG9GcmFtZUpTT04odGhpcy5mcmFtZSksXG4gICAgICAgICAgbmVnYXRlZEpTT04gPSBuZWdhdGVkVG9OZWdhdGVkSlNPTih0aGlzLm5lZ2F0ZWQpLFxuICAgICAgICAgIHN0YXRlbWVudEpTT04gPSBzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04odGhpcy5zdGF0ZW1lbnQpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtSlNPTiwgIC8vL1xuICAgICAgICAgIGZyYW1lID0gZnJhbWVKU09OLCAgLy8vXG4gICAgICAgICAgbmVnYXRlZCA9IG5lZ2F0ZWRKU09OLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0ZXJtLFxuICAgICAgICAgICAgZnJhbWUsXG4gICAgICAgICAgICBuZWdhdGVkLFxuICAgICAgICAgICAgc3RhdGVtZW50XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkNvbnRhaW5lZEFzc2VydGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbnRhaW5lZEFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIHJldHVybiBjb250YWluZWRBc3NlcnRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVdoZW5EZXJpdmVkKHRlcm0sIGZyYW1lLCBzdGF0ZW1lbnQsIG5lZ2F0ZWQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICBpZiAodGVybSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdGVybUNvbnRhaW5lZCA9IHN0YXRlbWVudC5pc1Rlcm1Db250YWluZWQodGVybSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiB0ZXJtQ29udGFpbmVkKSB7XG4gICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZ2F0ZWQgJiYgIXRlcm1Db250YWluZWQpIHtcbiAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFtZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgZnJhbWVDb250YWluZWQgPSBzdGF0ZW1lbnQuaXNGcmFtZUNvbnRhaW5lZChmcmFtZSwgY29udGV4dCk7XG5cbiAgICAgIGlmICghbmVnYXRlZCAmJiBmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWdhdGVkICYmICFmcmFtZUNvbnRhaW5lZCkge1xuICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xufSJdLCJuYW1lcyI6WyJkZWZpbmUiLCJDb250YWluZWRBc3NlcnRpb24iLCJBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInRlcm0iLCJmcmFtZSIsIm5lZ2F0ZWQiLCJzdGF0ZW1lbnQiLCJnZXRUZXJtIiwiZ2V0RnJhbWUiLCJpc05lZ2F0ZWQiLCJnZXRTdGF0ZW1lbnQiLCJnZXRDb250YWluZWRBc3NlcnRpb25Ob2RlIiwiZ2V0Tm9kZSIsImNvbnRhaW5lZEFzc2VydGlvbk5vZGUiLCJ2YWxpZGF0ZSIsInN0YXRlZCIsImNvbnRhaW5lZEFzc2VydGlvbiIsImNvbnRhaW5lZEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRBc3NlcnRpb24iLCJmaW5kVmFsaWRBc3NlcnRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRlcm0iLCJmcmFtZVZhbGlkYXRlcyIsInZhbGlkYXRlRnJhbWUiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhc3NlcnRpb24iLCJhZGRBc3NlcnRpb24iLCJ0ZXJtU3RyaW5nIiwidGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZhbGlkYXRlc0ZvcndhcmRzIiwiZnJhbWVTdHJpbmciLCJmcmFtZVNpbmd1bGFyIiwic3RhdGVtZW50U3RyaW5nIiwiZ2VuZXJhbENvdG5leHQiLCJzcGVjaWZpY0NvbnRleHQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJnZW5lcmFsQ29udGV4dCIsInVuaWZpZXNJbmRlcGVuZGVudGx5IiwidGVybUZyb21UZXJtQW5kU3Vic3RpdHV0aW9ucyIsImZyYW1lRnJvbUZyYW1lQW5kU3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudEZyb21TdGF0ZW1lbnRBbmRTdWJzdGl0dXRpb25zIiwidG9KU09OIiwibmFtZSIsInRlcm1KU09OIiwidGVybVRvVGVybUpTT04iLCJmcmFtZUpTT04iLCJmcmFtZVRvRnJhbWVKU09OIiwibmVnYXRlZEpTT04iLCJuZWdhdGVkVG9OZWdhdGVkSlNPTiIsInN0YXRlbWVudEpTT04iLCJzdGF0ZW1lbnRUb1N0YXRlbWVudEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtQ29udGFpbmVkIiwiaXNUZXJtQ29udGFpbmVkIiwiZnJhbWVDb250YWluZWQiLCJpc0ZyYW1lQ29udGFpbmVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztrRUFOc0I7MEJBRUM7c0JBQzBFOytCQUNvQjs7Ozs7O01BRXJILFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsMkJBQTJCQyxrQkFBUztJQUM5RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsT0FBTyxFQUFFQyxTQUFTLENBQUU7UUFDbEUsS0FBSyxDQUFDTixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE9BQU8sR0FBR0E7UUFDZixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDSixJQUFJO0lBQ2xCO0lBRUFLLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0osS0FBSztJQUNuQjtJQUVBSyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNKLE9BQU87SUFDckI7SUFFQUssZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDSixTQUFTO0lBQ3ZCO0lBRUFLLDRCQUE0QjtRQUMxQixNQUFNVCxPQUFPLElBQUksQ0FBQ1UsT0FBTyxJQUNuQkMseUJBQXlCWCxNQUFPLEdBQUc7UUFFekMsT0FBT1c7SUFDVDtJQUVBQyxTQUFTQyxNQUFNLEVBQUVmLE9BQU8sRUFBRTtRQUN4QixJQUFJZ0IscUJBQXFCO1FBRXpCLE1BQU1DLDJCQUEyQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXREbEIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRix5QkFBeUIsd0JBQXdCLENBQUM7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