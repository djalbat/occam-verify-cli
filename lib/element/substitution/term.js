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
const _substitution = /*#__PURE__*/ _interop_require_default(require("../substitution"));
const _elements = require("../../elements");
const _brackets = require("../../utilities/brackets");
const _instantiate = require("../../process/instantiate");
const _context = require("../../utilities/context");
const _string = require("../../utilities/string");
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class TermSubstitution extends _substitution.default {
    constructor(context, string, node, targetTerm, replacementTerm){
        super(context, string, node);
        this.targetTerm = targetTerm;
        this.replacementTerm = replacementTerm;
    }
    getTargetTerm() {
        return this.targetTerm;
    }
    getReplacementTerm() {
        return this.replacementTerm;
    }
    getTermSubstitutionNode() {
        const node = this.getNode(), termSubstitutionNode = node; ///
        return termSubstitutionNode;
    }
    getTargetNode() {
        const targetTermNode = this.targetTerm.getNode(), tergetNode = targetTermNode; ///
        return tergetNode;
    }
    getReplacementNode() {
        const replacementTermNode = this.replacementTerm.getNode(), replacementNode = replacementTermNode; ///
        return replacementNode;
    }
    getVariableIdentifier() {
        return this.targetTerm.getVariableIdentifier();
    }
    compareVariableIdentifier(variableIdentifier) {
        return this.targetTerm.compareVariableIdentifier(variableIdentifier);
    }
    isTrivial() {
        const targetTermEqualToReplacementTerm = this.targetTerm.isEqualTo(this.replacementTerm), trivial = targetTermEqualToReplacementTerm; ///
        return trivial;
    }
    compareTerm(term, context) {
        term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
        const termEqualToReplacementTerm = this.replacementTerm.isEqualTo(term), comparedToTerm = termEqualToReplacementTerm; ///
        return comparedToTerm;
    }
    compareParameter(parameter) {
        const targetTermComparesToParameter = this.targetTerm.compareParameter(parameter), comparesToParameter = targetTermComparesToParameter; ///
        return comparesToParameter;
    }
    validate(generalContext, specificContext) {
        let termSubstitution = null;
        const context = this.getContext();
        specificContext = context; ///
        const termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term substitution...`);
        const validSubstitution = this.findValidSubstiution(context);
        if (validSubstitution) {
            termSubstitution = validSubstitution; ///
            context.debug(`...the '${termSubstitutionString}' term substitution is already valid.`);
        } else {
            let validates = false;
            const targetTermValidates = this.validateTargetTerm(generalContext, specificContext);
            if (targetTermValidates) {
                const replacementTermValidates = this.validateReplacementTerm(generalContext, specificContext);
                if (replacementTermValidates) {
                    validates = true;
                }
            }
            if (validates) {
                const substitution = this; ///
                termSubstitution = substitution; ///
                context.addSubstitution(substitution);
                context.debug(`...validated the '${termSubstitutionString}' term substitution.`);
            }
        }
        return termSubstitution;
    }
    validateTargetTerm(generalContext, specificContext) {
        let targetTermValidates = false;
        const context = generalContext, targetTermString = this.targetTerm.getString(), termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term substitution's '${targetTermString}' target term...`);
        const targetTermSingular = this.targetTerm.isSingular();
        if (targetTermSingular) {
            const targetTerm = this.targetTerm.validate(context, (targetTerm)=>{
                const validatesForwards = true;
                return validatesForwards;
            });
            if (targetTerm !== null) {
                this.targetTerm = targetTerm;
                targetTermValidates = true;
            }
        } else {
            context.debug(`The '${termSubstitutionString}' term substitution's '${targetTermString}' target term is not singular.`);
        }
        if (targetTermValidates) {
            context.debug(`...validated the '${termSubstitutionString}' term substitution's '${targetTermString}' target term...`);
        }
        return targetTermValidates;
    }
    validateReplacementTerm(generalContext, specificContext) {
        let replacementTermValidates = false;
        const context = specificContext, replacementTermString = this.replacementTerm.getString(), termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term substitution's '${replacementTermString}' replacement term...`);
        const replacementTerm = this.replacementTerm.validate(context, (replacementTerm)=>{
            const validatesForwards = true;
            return validatesForwards;
        });
        if (replacementTerm !== null) {
            this.replacementTerm = replacementTerm;
            replacementTermValidates = true;
        }
        if (replacementTermValidates) {
            context.debug(`...validated the '${termSubstitutionString}' term substitution's '${replacementTermString}' replacement term...`);
        }
        return replacementTermValidates;
    }
    static name = "TermSubstitution";
    static fromJSON(json, context) {
        let termSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            termSubstitutionn = (0, _context.instantiate)((context)=>{
                const { string } = json, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context);
                context = null;
                const termSubstitutionn = new TermSubstitution(context, string, node, targetTerm, replacementTerm);
                return termSubstitutionn;
            }, context);
        }
        return termSubstitutionn;
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), termSubstitution = (0, _element.termSubstitutionFromStatementNode)(statementNode, context);
        return termSubstitution;
    }
    static fromTermAndVariable(term, variable, context) {
        term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
        const santisedContext = (0, _context.sanitisedContextFromContext)(context);
        context = santisedContext; ///
        return (0, _context.instantiate)((context)=>{
            const termSubstitutionString = (0, _string.termSubstitutionStringFromTermAndVariable)(term, variable), string = termSubstitutionString, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), termSubstitution = (0, _element.termSubstitutionFromTermSubstitutionNode)(termSubstitutionNode, context);
            return termSubstitution;
        }, context);
    }
});
function targetTermFromTermSubstitutionNode(termSubstitutionNode, context) {
    const targetTermNode = termSubstitutionNode.getTargetTermNode(), targetTerm = context.findTermByTermNode(targetTermNode);
    return targetTerm;
}
function replacementTermFromTermSubstitutionNode(termSubstitutionNode, context) {
    const replacementTermNode = termSubstitutionNode.getReplacementTermNode(), replacementTerm = context.findTermByTermNode(replacementTermNode);
    return replacementTerm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUsIHNhbml0aXNlZENvbnRleHRGcm9tQ29udGV4dCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlLCB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy50YXJnZXRUZXJtID0gdGFyZ2V0VGVybTtcbiAgICB0aGlzLnJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRhcmdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VGVybTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGhpcy50YXJnZXRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZUlkZW50aWZpZXIoKSB7IHJldHVybiB0aGlzLnRhcmdldFRlcm0uZ2V0VmFyaWFibGVJZGVudGlmaWVyKCk7IH1cblxuICBjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikgeyByZXR1cm4gdGhpcy50YXJnZXRUZXJtLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTsgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSA9IHRoaXMudGFyZ2V0VGVybS5pc0VxdWFsVG8odGhpcy5yZXBsYWNlbWVudFRlcm0pLFxuICAgICAgICAgIHRyaXZpYWwgPSB0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uaXNFcXVhbFRvKHRlcm0pLFxuICAgICAgICAgIGNvbXBhcmVkVG9UZXJtID0gdGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVkVG9UZXJtO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0VGVybS5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFZhbGlkU3Vic3RpdXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh0YXJnZXRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRhcmdldFRlcm1TdHJpbmcgPSB0aGlzLnRhcmdldFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0VGVybVNpbmd1bGFyID0gdGhpcy50YXJnZXRUZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRUZXJtU2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHRhcmdldFRlcm0gPSB0aGlzLnRhcmdldFRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRhcmdldFRlcm0pID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGFyZ2V0VGVybSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuXG4gICAgICAgIHRhcmdldFRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUZXJtU3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChyZXBsYWNlbWVudFRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50VGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm07XG5cbiAgICAgIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFRlcm1TdHJpbmd9JyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdGVybVN1YnN0aXR1dGlvbm4gPSBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRhcmdldFRlcm0gPSB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9ubiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcblxuICAgICAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbm47XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3Qgc2FudGlzZWRDb250ZXh0ID0gc2FuaXRpc2VkQ29udGV4dEZyb21Db250ZXh0KGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IHNhbnRpc2VkQ29udGV4dDsgIC8vL1xuXG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgICAgc3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRhcmdldFRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGFyZ2V0VGVybTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFRlcm1Ob2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHJlcGxhY2VtZW50VGVybU5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRlcm07XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybSIsImdldFRhcmdldFRlcm0iLCJnZXRSZXBsYWNlbWVudFRlcm0iLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRlcm1Ob2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImlzVHJpdmlhbCIsInRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsImNvbXBhcmVUZXJtIiwidGVybSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtIiwiY29tcGFyZWRUb1Rlcm0iLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1TdWJzdGl0dXRpb24iLCJnZXRDb250ZXh0IiwidGVybVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl1dGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwidGFyZ2V0VGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtIiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0VGVybVN0cmluZyIsInRhcmdldFRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInJlcGxhY2VtZW50VGVybVN0cmluZyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJ0ZXJtU3Vic3RpdHV0aW9ubiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uIiwidGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsInZhcmlhYmxlIiwic2FudGlzZWRDb250ZXh0Iiwic2FuaXRpc2VkQ29udGV4dEZyb21Db250ZXh0IiwidGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztxRUFUeUI7MEJBRUY7MEJBQ2U7NkJBQ007eUJBQ2E7d0JBQ0M7eUJBQ2tDOzs7Ozs7TUFFNUYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx5QkFBeUJDLHFCQUFZO0lBQy9ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsZUFBZSxDQUFFO1FBQzlELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtJQUN6QjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNGLGVBQWU7SUFDN0I7SUFFQUcsMEJBQTBCO1FB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