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
                const { string } = json, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context);
                termSubstitutionn = new TermSubstitution(context, string, node, targetTerm, replacementTerm);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgam9pbiwgYWJsYXRlLCBkZXNjZW5kLCBhdHRlbXB0LCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGFyZ2V0VGVybSA9IHRhcmdldFRlcm07XG4gICAgdGhpcy5yZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRUYXJnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFRlcm07XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRoaXMudGFyZ2V0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiB0ZXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVJZGVudGlmaWVyKCkgeyByZXR1cm4gdGhpcy50YXJnZXRUZXJtLmdldFZhcmlhYmxlSWRlbnRpZmllcigpOyB9XG5cbiAgY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5jb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7IH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0gPSB0aGlzLnRhcmdldFRlcm0uaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRUZXJtKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBjb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmlzRXF1YWxUbyh0ZXJtKSxcbiAgICAgICAgICBjb21wYXJlZFRvVGVybSA9IHRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvVGVybTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFRlcm0uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBqb2luKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRhcmdldFRlcm1TdHJpbmcgPSB0aGlzLnRhcmdldFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0VGVybVNpbmd1bGFyID0gdGhpcy50YXJnZXRUZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRUZXJtU2luZ3VsYXIpIHtcbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGVybSA9IHRoaXMudGFyZ2V0VGVybS52YWxpZGF0ZShjb250ZXh0LCAodGFyZ2V0VGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhcmdldFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuXG4gICAgICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUZXJtU3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChyZXBsYWNlbWVudFRlcm0pID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuXG4gICAgICAgIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1TdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHRhcmdldFRlcm0gPSB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9ubiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50LmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRhcmdldFRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGFyZ2V0VGVybTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFRlcm1Ob2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHJlcGxhY2VtZW50VGVybU5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRlcm07XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwidGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybSIsImdldFRhcmdldFRlcm0iLCJnZXRSZXBsYWNlbWVudFRlcm0iLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRlcm1Ob2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsImlzVHJpdmlhbCIsInRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsImNvbXBhcmVUZXJtIiwidGVybSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtIiwiY29tcGFyZWRUb1Rlcm0iLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0Q29udGV4dCIsImpvaW4iLCJhdHRlbXB0IiwidGFyZ2V0VGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtIiwiY29tbWl0Iiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0VGVybVN0cmluZyIsInRhcmdldFRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJkZXNjZW5kIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJyZXBsYWNlbWVudFRlcm1TdHJpbmciLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwidGVybVN1YnN0aXR1dGlvbm4iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiYWJsYXRlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJ2YXJpYWJsZSIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZ2V0VGFyZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztxRUFUeUI7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