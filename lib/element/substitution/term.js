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
const _element = require("../../utilities/element");
const _string = require("../../utilities/string");
const _context = require("../../utilities/context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class TermSubstitution extends _substitution.default {
    constructor(context, string, node, generalContext, targetTerm, replacementTerm){
        super(context, string, node, generalContext);
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
    getVariableNode() {
        return this.targetTerm.getVariableNode();
    }
    isTrivial() {
        const targetTermComparesToReplacementTerm = this.targetTerm.compareTerm(this.replacementTerm), trivial = targetTermComparesToReplacementTerm; ///
        return trivial;
    }
    matchVariableNode(variableNode) {
        return this.targetTerm.matchVariableNode(variableNode);
    }
    compareTerm(term, context) {
        term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
        const replacementTermComparesToTerm = this.replacementTerm.compareTerm(term), comparedToTerm = replacementTermComparesToTerm; ///
        return comparedToTerm;
    }
    compareParameter(parameter) {
        const targetTermComparesToParameter = this.targetTerm.compareParameter(parameter), comparesToParameter = targetTermComparesToParameter; ///
        return comparesToParameter;
    }
    validate(generalContext, specificContext) {
        let termSubstitution = null;
        const context = specificContext, termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term substitution...`);
        let validates = false;
        const validSubstitution = this.findValidSubstitution(context);
        if (validSubstitution) {
            termSubstitution = validSubstitution; ///
            context.debug(`...the '${termSubstitutionString}' term substitution is already valid.`);
        } else {
            const context = this.getContext();
            (0, _context.join)((context)=>{
                (0, _context.attempt)((context)=>{
                    const specificContext = context, targetTermValidates = this.validateTargetTerm(generalContext, specificContext);
                    if (targetTermValidates) {
                        const replacementTermValidates = this.validateReplacementTerm(generalContext, specificContext);
                        if (replacementTermValidates) {
                            validates = true;
                        }
                    }
                    if (validates) {
                        context.commit(this);
                    }
                }, context);
            }, specificContext, context);
        }
        if (validates) {
            const substitution = this; ///
            termSubstitution = substitution; ///
            context.addSubstitution(substitution);
            this.setGeneralContext(generalContext);
            context.debug(`...validated the '${termSubstitutionString}' term substitution.`);
        }
        return termSubstitution;
    }
    validateTargetTerm(generalContext, specificContext) {
        let targetTermValidates = false;
        const context = generalContext, targetTermString = this.targetTerm.getString(), termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term substitution's '${targetTermString}' target term...`);
        const targetTermSingular = this.targetTerm.isSingular();
        if (targetTermSingular) {
            (0, _context.descend)((context)=>{
                const targetTerm = this.targetTerm.validate(context, (targetTerm)=>{
                    const validatesForwards = true;
                    return validatesForwards;
                });
                if (targetTerm !== null) {
                    this.targetTerm = targetTerm;
                    targetTermValidates = true;
                }
            }, context);
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
        (0, _context.descend)((context)=>{
            const replacementTerm = this.replacementTerm.validate(context, (replacementTerm)=>{
                const validatesForwards = true;
                return validatesForwards;
            });
            if (replacementTerm !== null) {
                this.replacementTerm = replacementTerm;
                replacementTermValidates = true;
            }
        }, context);
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
            (0, _context.instantiate)((context)=>{
                const { string } = json, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, generalContext = generalContextFromTermSubstitutionNode(termSubstitutionNode, context), targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context);
                termSubstitutionn = new TermSubstitution(context, string, node, generalContext, targetTerm, replacementTerm);
            }, context);
        }
        return termSubstitutionn;
    }
    static fromStatement(statement, context) {
        let termSubstitution = null;
        const termSubstitutionNode = statement.getTermSubstitutionNode();
        if (termSubstitutionNode !== null) {
            (0, _context.ablate)((context)=>{
                termSubstitution = (0, _element.termSubstitutionFromTermSubstitutionNode)(termSubstitutionNode, context);
            }, context);
        }
        return termSubstitution;
    }
    static fromTermAndVariable(term, variable, context) {
        term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
        let termSubstitution;
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const termSubstitutionString = (0, _string.termSubstitutionStringFromTermAndVariable)(term, variable), string = termSubstitutionString, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context);
                termSubstitution = (0, _element.termSubstitutionFromTermSubstitutionNode)(termSubstitutionNode, context);
            }, context);
        }, context);
        return termSubstitution;
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
function generalContextFromTermSubstitutionNode(termSubstitutionNode, context) {
    const generalContext = context; ///
    return generalContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgam9pbiwgYWJsYXRlLCBkZXNjZW5kLCBhdHRlbXB0LCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZ2VuZXJhbENvbnRleHQsIHRhcmdldFRlcm0sIHJlcGxhY2VtZW50VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgdGhpcy50YXJnZXRUZXJtID0gdGFyZ2V0VGVybTtcbiAgICB0aGlzLnJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRhcmdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VGVybTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGhpcy50YXJnZXRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnRhcmdldFRlcm0uZ2V0VmFyaWFibGVOb2RlKCk7IH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUNvbXBhcmVzVG9SZXBsYWNlbWVudFRlcm0gPSB0aGlzLnRhcmdldFRlcm0uY29tcGFyZVRlcm0odGhpcy5yZXBsYWNlbWVudFRlcm0pLFxuICAgICAgICAgIHRyaXZpYWwgPSB0YXJnZXRUZXJtQ29tcGFyZXNUb1JlcGxhY2VtZW50VGVybTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRUZXJtLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm1Db21wYXJlc1RvVGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmNvbXBhcmVUZXJtKHRlcm0pLFxuICAgICAgICAgIGNvbXBhcmVkVG9UZXJtID0gcmVwbGFjZW1lbnRUZXJtQ29tcGFyZXNUb1Rlcm07IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVkVG9UZXJtO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0VGVybS5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGpvaW4oKGNvbnRleHQpID0+IHtcbiAgICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICB0YXJnZXRUZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICB0aGlzLnNldEdlbmVyYWxDb250ZXh0KGdlbmVyYWxDb250ZXh0KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRhcmdldFRlcm1TdHJpbmcgPSB0aGlzLnRhcmdldFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0VGVybVNpbmd1bGFyID0gdGhpcy50YXJnZXRUZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRUZXJtU2luZ3VsYXIpIHtcbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGVybSA9IHRoaXMudGFyZ2V0VGVybS52YWxpZGF0ZShjb250ZXh0LCAodGFyZ2V0VGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhcmdldFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuXG4gICAgICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUZXJtU3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChyZXBsYWNlbWVudFRlcm0pID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuXG4gICAgICAgIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1TdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbENvbnRleHRGcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0YXJnZXRUZXJtID0gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbm4gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGdlbmVyYWxDb250ZXh0LCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnQuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRUZXJtTm9kZSgpLFxuICAgICAgICB0YXJnZXRUZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGFyZ2V0VGVybU5vZGUpO1xuXG4gIHJldHVybiB0YXJnZXRUZXJtO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50VGVybU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUocmVwbGFjZW1lbnRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50VGVybTtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhbENvbnRleHRGcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICByZXR1cm4gZ2VuZXJhbENvbnRleHQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiZ2VuZXJhbENvbnRleHQiLCJ0YXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGFyZ2V0VGVybSIsImdldFJlcGxhY2VtZW50VGVybSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFRlcm1Ob2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRUZXJtQ29tcGFyZXNUb1JlcGxhY2VtZW50VGVybSIsImNvbXBhcmVUZXJtIiwidHJpdmlhbCIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidGVybSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInJlcGxhY2VtZW50VGVybUNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZWRUb1Rlcm0iLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImdldENvbnRleHQiLCJqb2luIiwiYXR0ZW1wdCIsInRhcmdldFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50VGVybSIsImNvbW1pdCIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInNldEdlbmVyYWxDb250ZXh0IiwidGFyZ2V0VGVybVN0cmluZyIsInRhcmdldFRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJkZXNjZW5kIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJyZXBsYWNlbWVudFRlcm1TdHJpbmciLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwidGVybVN1YnN0aXR1dGlvbm4iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiIsImdlbmVyYWxDb250ZXh0RnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJhYmxhdGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsInZhcmlhYmxlIiwidGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJnZXRUYXJnZXRUZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsImdldFJlcGxhY2VtZW50VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O3FFQVR5QjswQkFFRjswQkFDZTs2QkFDTTt5QkFDYTt3QkFDQzt5QkFDRTs7Ozs7O01BRTVELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMseUJBQXlCQyxxQkFBWTtJQUMvRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxjQUFjLEVBQUVDLFVBQVUsRUFBRUMsZUFBZSxDQUFFO1FBQzlFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtJQUN6QjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNGLGVBQWU7SUFDN0I7SUFFQUcsMEJBQTBCO1FBQ3hCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyx1QkFBdUJSLE1BQU8sR0FBRztRQUV2QyxPQUFPUTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLGlCQUFpQixJQUFJLENBQUNSLFVBQVUsQ0FBQ0ssT0FBTyxJQUN4Q0ksYUFBYUQsZ0JBQWdCLEdBQUc7UUFFdEMsT0FB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