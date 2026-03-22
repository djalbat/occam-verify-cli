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
const _context = require("../../utilities/context");
const _brackets = require("../../utilities/brackets");
const _instantiate = require("../../process/instantiate");
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
        const context = specificContext, termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term substitution...`);
        let validates = false;
        const validSubstitution = this.findValidSubstitution(context);
        if (validSubstitution) {
            termSubstitution = validSubstitution; ///
            context.debug(`...the '${termSubstitutionString}' term substitution is already valid.`);
        } else {
            const context = this.getContext(), specificContext = context; ///
            (0, _context.attempt)((specificContext)=>{
                const targetTermValidates = this.validateTargetTerm(generalContext, specificContext);
                if (targetTermValidates) {
                    const replacementTermValidates = this.validateReplacementTerm(generalContext, specificContext);
                    if (replacementTermValidates) {
                        validates = true;
                    }
                }
                if (validates) {
                    specificContext.commit(this);
                }
            }, specificContext);
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
            (0, _context.instantiate)((context)=>{
                const { string } = json, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context);
                termSubstitutionn = new TermSubstitution(context, string, node, targetTerm, replacementTerm);
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
        let termSubstitution;
        (0, _context.instantiate)((context)=>{
            const termSubstitutionString = (0, _string.termSubstitutionStringFromTermAndVariable)(term, variable), string = termSubstitutionString, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context);
            termSubstitution = (0, _element.termSubstitutionFromTermSubstitutionNode)(termSubstitutionNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21UZXJtIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSwgdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMudGFyZ2V0VGVybSA9IHRhcmdldFRlcm07XG4gICAgdGhpcy5yZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRUYXJnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFRlcm07XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRoaXMudGFyZ2V0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiB0ZXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVJZGVudGlmaWVyKCkgeyByZXR1cm4gdGhpcy50YXJnZXRUZXJtLmdldFZhcmlhYmxlSWRlbnRpZmllcigpOyB9XG5cbiAgY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5jb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7IH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0gPSB0aGlzLnRhcmdldFRlcm0uaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRUZXJtKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBjb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCB0ZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmlzRXF1YWxUbyh0ZXJtKSxcbiAgICAgICAgICBjb21wYXJlZFRvVGVybSA9IHRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvVGVybTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFRlcm0uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBhdHRlbXB0KChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0YXJnZXRUZXJtU3RyaW5nID0gdGhpcy50YXJnZXRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFRlcm1TaW5ndWxhciA9IHRoaXMudGFyZ2V0VGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0VGVybVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB0YXJnZXRUZXJtID0gdGhpcy50YXJnZXRUZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0YXJnZXRUZXJtKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHRhcmdldFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy50YXJnZXRUZXJtID0gdGFyZ2V0VGVybTtcblxuICAgICAgICB0YXJnZXRUZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VGVybVN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFRlcm1TdHJpbmd9JyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm0gPSB0aGlzLnJlcGxhY2VtZW50VGVybS52YWxpZGF0ZShjb250ZXh0LCAocmVwbGFjZW1lbnRUZXJtKSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICB9KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFRlcm0gIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuXG4gICAgICByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRUZXJtU3RyaW5nfScgcmVwbGFjZW1lbnQgdGVybS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb25uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGFyZ2V0VGVybSA9IHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICByZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb25uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSksXG4gICAgICAgICAgICBzdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRUZXJtTm9kZSgpLFxuICAgICAgICB0YXJnZXRUZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUodGFyZ2V0VGVybU5vZGUpO1xuXG4gIHJldHVybiB0YXJnZXRUZXJtO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50VGVybU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gY29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUocmVwbGFjZW1lbnRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50VGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0YXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGFyZ2V0VGVybSIsImdldFJlcGxhY2VtZW50VGVybSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFRlcm1Ob2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiaXNUcml2aWFsIiwidGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0iLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwiY29tcGFyZVRlcm0iLCJ0ZXJtIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtIiwidGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0iLCJjb21wYXJlZFRvVGVybSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVN1YnN0aXR1dGlvbiIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZXRDb250ZXh0IiwiYXR0ZW1wdCIsInRhcmdldFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50VGVybSIsImNvbW1pdCIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm1TdHJpbmciLCJ0YXJnZXRUZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJyZXBsYWNlbWVudFRlcm1TdHJpbmciLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwidGVybVN1YnN0aXR1dGlvbm4iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZSIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJ2YXJpYWJsZSIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldFRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwiZ2V0UmVwbGFjZW1lbnRUZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7cUVBVHlCOzBCQUVGO3lCQUNjOzBCQUNDOzZCQUNNO3dCQUNjO3lCQUNrQzs7Ozs7O01BRTVGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMseUJBQXlCQyxxQkFBWTtJQUMvRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLGVBQWUsQ0FBRTtRQUM5RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7SUFDekI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDRixlQUFlO0lBQzdCO0lBRUFHLDBCQUEwQjtRQUN4QixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJ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