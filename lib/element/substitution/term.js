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
    constructor(context, string, node, lineIndex, generalContext, targetTerm, replacementTerm){
        super(context, string, node, lineIndex, generalContext);
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
            (0, _context.join)((generalContext)=>{
                (0, _context.join)((specificContext)=>{
                    (0, _context.attempt)((generalContext, specificContext)=>{
                        const targetTermValidates = this.validateTargetTerm(generalContext, specificContext);
                        if (targetTermValidates) {
                            const replacementTermValidates = this.validateReplacementTerm(generalContext, specificContext);
                            if (replacementTermValidates) {
                                validates = true;
                            }
                        }
                        if (validates) {
                            this.setContexts(generalContext, specificContext);
                        }
                    }, generalContext, specificContext);
                }, specificContext, context);
            }, generalContext, context);
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
            (0, _context.unserialise)((json, generalContext, specificContext)=>{
                const context = specificContext; ///
                (0, _context.instantiate)((context)=>{
                    const { string, lineIndex } = json, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context);
                    termSubstitutionn = new TermSubstitution(context, string, node, lineIndex, generalContext, targetTerm, replacementTerm);
                }, context);
            }, json, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgam9pbiwgYWJsYXRlLCBkZXNjZW5kLCBhdHRlbXB0LCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQsIHRhcmdldFRlcm0sIHJlcGxhY2VtZW50VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCk7XG5cbiAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGFyZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRUZXJtO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0aGlzLnRhcmdldFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5nZXRWYXJpYWJsZU5vZGUoKTsgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtQ29tcGFyZXNUb1JlcGxhY2VtZW50VGVybSA9IHRoaXMudGFyZ2V0VGVybS5jb21wYXJlVGVybSh0aGlzLnJlcGxhY2VtZW50VGVybSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldFRlcm1Db21wYXJlc1RvUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldFRlcm0ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybUNvbXBhcmVzVG9UZXJtID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uY29tcGFyZVRlcm0odGVybSksXG4gICAgICAgICAgY29tcGFyZWRUb1Rlcm0gPSByZXBsYWNlbWVudFRlcm1Db21wYXJlc1RvVGVybTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb1Rlcm07XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRUZXJtLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgam9pbigoZ2VuZXJhbENvbnRleHQpID0+IHtcbiAgICAgICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgYXR0ZW1wdCgoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0cyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRhcmdldFRlcm1TdHJpbmcgPSB0aGlzLnRhcmdldFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0VGVybVNpbmd1bGFyID0gdGhpcy50YXJnZXRUZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRUZXJtU2luZ3VsYXIpIHtcbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGVybSA9IHRoaXMudGFyZ2V0VGVybS52YWxpZGF0ZShjb250ZXh0LCAodGFyZ2V0VGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhcmdldFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuXG4gICAgICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRUZXJtU3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChyZXBsYWNlbWVudFRlcm0pID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuXG4gICAgICAgIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1TdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICB1bnNlcmlhbGlzZSgoanNvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgdGFyZ2V0VGVybSA9IHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9ubiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudC5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRhcmdldFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0YXJnZXRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFRlcm07XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRUZXJtTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShyZXBsYWNlbWVudFRlcm1Ob2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImdlbmVyYWxDb250ZXh0IiwidGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybSIsImdldFRhcmdldFRlcm0iLCJnZXRSZXBsYWNlbWVudFRlcm0iLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRlcm1Ob2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0VGVybUNvbXBhcmVzVG9SZXBsYWNlbWVudFRlcm0iLCJjb21wYXJlVGVybSIsInRyaXZpYWwiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInRlcm0iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJyZXBsYWNlbWVudFRlcm1Db21wYXJlc1RvVGVybSIsImNvbXBhcmVkVG9UZXJtIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwic3BlY2lmaWNDb250ZXh0IiwidGVybVN1YnN0aXR1dGlvbiIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZXRDb250ZXh0Iiwiam9pbiIsImF0dGVtcHQiLCJ0YXJnZXRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFRlcm0iLCJzZXRDb250ZXh0cyIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm1TdHJpbmciLCJ0YXJnZXRUZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZGVzY2VuZCIsInZhbGlkYXRlc0ZvcndhcmRzIiwicmVwbGFjZW1lbnRUZXJtU3RyaW5nIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInRlcm1TdWJzdGl0dXRpb25uIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiYWJsYXRlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJ2YXJpYWJsZSIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZ2V0VGFyZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztxRUFUeUI7MEJBRUY7MEJBQ2U7NkJBQ007eUJBQ2E7d0JBQ0M7eUJBQ2U7Ozs7OztNQUV6RSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHlCQUF5QkMscUJBQVk7SUFDL0QsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxjQUFjLEVBQUVDLFVBQVUsRUFBRUMsZUFBZSxDQUFFO1FBQ3pGLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0M7UUFFeEMsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtJQUN6QjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNGLGVBQWU7SUFDN0I7SUFFQUcsMEJBQTBCO1FBQ3hCLE1BQU1QLE9BQU8sSUFBSSxDQUFDUSxPQUFPLElBQ25CQyx1QkFBdUJULE1BQU8sR0FBRztRQUV2QyxPQUFPUztJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLGlCQUFpQixJQUFJLENBQUNSLFVBQVUsQ0FBQ0ssT0FBTyxJQUN4Q0ksYUFBYUQsZ0JBQWdCLEdBQUc7UUFFdEMsT0FBT0M7SUFDVDtJQUVBQyxxQkFBcUI7UUFDbkIsTUFBTUMsc0JBQXNCLElBQUksQ0FBQ1YsZUFBZSxDQUFDSSxPQUFPLElBQ2xETyxrQkFBa0JELHFCQUFxQixHQUFHO1FBRWhELE9BQU9DO0lBQ1Q7SUFFQUMsa0JBQWtCO1FBQUUsT0FBTyxJQUFJLENBQUNiLFVBQVUsQ0FBQ2EsZUFBZTtJQUFJO0lBRTlEQyxZQUFZO1FBQ1YsTUFBTUMsc0NBQXNDLElBQUksQ0FBQ2YsVUFBVSxDQUFDZ0IsV0FBVyxDQUFDLElBQUksQ0FBQ2YsZUFBZSxHQUN0RmdCLFVBQVVGLHFDQUFxQyxHQUFHO1FBRXhELE9BQU9FO0lBQ1Q7SUFFQUMsa0JBQWtCQyxZQUFZLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ25CLFVBQVUsQ0FBQ2tCLGlCQUFpQixDQUFDQztJQUFlO0lBRTFGSCxZQUFZSSxJQUFJLEVBQUV6QixPQUFPLEVBQUU7UUFDekJ5QixPQUFPQyxJQUFBQSwrQkFBcUIsRUFBQ0QsTUFBTXpCLFVBQVUsR0FBRztRQUVoRCxNQUFNMkIsZ0NBQWdDLElBQUksQ0FBQ3JCLGVBQWUsQ0FBQ2UsV0FBVyxDQUFDSSxPQUNqRUcsaUJBQWlCRCwrQkFBK0IsR0FBRztRQUV6RCxPQUFPQztJQUNUO0lBRUFDLGlCQUFpQkMsU0FBUyxFQUFFO1FBQzFCLE1BQU1DLGdDQUFnQyxJQUFJLENBQUMxQixVQUFVLENBQUN3QixnQkFBZ0IsQ0FBQ0MsWUFDakVFLHNCQUFzQkQsK0JBQWdDLEdBQUc7UUFFL0QsT0FBT0M7SUFDVDtJQUVBQyxTQUFTN0IsY0FBYyxFQUFFOEIsZUFBZSxFQUFFO1FBQ3hDLElBQUlDLG1CQUFtQjtRQUV2QixNQUFNbkMsVUFBVWtDLGlCQUNWRSx5QkFBeUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVyRHJDLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsdUJBQXVCLHNCQUFzQixDQUFDO1FBRS9FLElBQUlHLFlBQVk7UUFFaEIsTUFBTUMsb0JBQW9CLElBQUksQ0FBQ0MscUJBQXFCLENBQUN6QztRQUVyRCxJQUFJd0MsbUJBQW1CO1lBQ3JCTCxtQkFBbUJLLG1CQUFtQixHQUFHO1lBRXpDeEMsUUFBUTBDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRU4sdUJBQXVCLHFDQUFxQyxDQUFDO1FBQ3hGLE9BQU87WUFDTCxNQUFNcEMsVUFBVSxJQUFJLENBQUMyQyxVQUFVO1lBRS9CQyxJQUFBQSxhQUFJLEVBQUMsQ0FBQ3hDO2dCQUNKd0MsSUFBQUEsYUFBSSxFQUFDLENBQUNWO29CQUNKVyxJQUFBQSxnQkFBTyxFQUFDLENBQUN6QyxnQkFBZ0I4Qjt3QkFDdkIsTUFBTVksc0JBQXNCLElBQUksQ0FBQ0Msa0JBQWtCLENBQUMzQyxnQkFBZ0I4Qjt3QkFFcEUsSUFBSVkscUJBQXFCOzRCQUN2QixNQUFNRSwyQkFBMkIsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQzdDLGdCQUFnQjhCOzRCQUU5RSxJQUFJYywwQkFBMEI7Z0NBQzVCVCxZQUFZOzRCQUNkO3dCQUNGO3dCQUVBLElBQUlBLFdBQVc7NEJBQ2IsSUFBSSxDQUFDVyxXQUFXLENBQUM5QyxnQkFBZ0I4Qjt3QkFDbkM7b0JBQ0YsR0FBRzlCLGdCQUFnQjhCO2dCQUNyQixHQUFHQSxpQkFBaUJsQztZQUN0QixHQUFHSSxnQkFBZ0JKO1FBQ3JCO1FBRUEsSUFBSXVDLFdBQVc7WUFDYixNQUFNWSxlQUFlLElBQUksRUFBRyxHQUFHO1lBRS9CaEIsbUJBQW1CZ0IsY0FBZSxHQUFHO1lBRXJDbkQsUUFBUW9ELGVBQWUsQ0FBQ0Q7WUFFeEJuRCxRQUFRMEMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLHVCQUF1QixvQkFBb0IsQ0FBQztRQUNqRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQVksbUJBQW1CM0MsY0FBYyxFQUFFOEIsZUFBZSxFQUFFO1FBQ2xELElBQUlZLHNCQUFzQjtRQUUxQixNQUFNOUMsVUFBVUksZ0JBQ1ZpRCxtQkFBbUIsSUFBSSxDQUFDaEQsVUFBVSxDQUFDZ0MsU0FBUyxJQUM1Q0QseUJBQXlCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFckRyQyxRQUFRc0MsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHVCQUF1Qix1QkFBdUIsRUFBRWlCLGlCQUFpQixnQkFBZ0IsQ0FBQztRQUVuSCxNQUFNQyxxQkFBcUIsSUFBSSxDQUFDakQsVUFBVSxDQUFDa0QsVUFBVTtRQUVyRCxJQUFJRCxvQkFBb0I7WUFDdEJFLElBQUFBLGdCQUFPLEVBQUMsQ0FBQ3hEO2dCQUNQLE1BQU1LLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUM0QixRQUFRLENBQUNqQyxTQUFTLENBQUNLO29CQUNwRCxNQUFNb0Qsb0JBQW9CO29CQUUxQixPQUFPQTtnQkFDVDtnQkFFQSxJQUFJcEQsZUFBZSxNQUFNO29CQUN2QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7b0JBRWxCeUMsc0JBQXNCO2dCQUN4QjtZQUNGLEdBQUc5QztRQUNMLE9BQU87WUFDTEEsUUFBUTBDLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRU4sdUJBQXVCLHVCQUF1QixFQUFFaUIsaUJBQWlCLDhCQUE4QixDQUFDO1FBQ3hIO1FBRUEsSUFBSVAscUJBQXFCO1lBQ3ZCOUMsUUFBUTBDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTix1QkFBdUIsdUJBQXVCLEVBQUVpQixpQkFBaUIsZ0JBQWdCLENBQUM7UUFDdkg7UUFFQSxPQUFPUDtJQUNUO0lBRUFHLHdCQUF3QjdDLGNBQWMsRUFBRThCLGVBQWUsRUFBRTtRQUN2RCxJQUFJYywyQkFBMkI7UUFFL0IsTUFBTWhELFVBQVVrQyxpQkFDVndCLHdCQUF3QixJQUFJLENBQUNwRCxlQUFlLENBQUMrQixTQUFTLElBQ3RERCx5QkFBeUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVyRHJDLFFBQVFzQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsdUJBQXVCLHVCQUF1QixFQUFFc0Isc0JBQXNCLHFCQUFxQixDQUFDO1FBRTdIRixJQUFBQSxnQkFBTyxFQUFDLENBQUN4RDtZQUNQLE1BQU1NLGtCQUFrQixJQUFJLENBQUNBLGVBQWUsQ0FBQzJCLFFBQVEsQ0FBQ2pDLFNBQVMsQ0FBQ007Z0JBQzlELE1BQU1tRCxvQkFBb0I7Z0JBRTFCLE9BQU9BO1lBQ1Q7WUFFQSxJQUFJbkQsb0JBQW9CLE1BQU07Z0JBQzVCLElBQUksQ0FBQ0EsZUFBZSxHQUFHQTtnQkFFdkIwQywyQkFBMkI7WUFDN0I7UUFDRixHQUFHaEQ7UUFFSCxJQUFJZ0QsMEJBQTBCO1lBQzVCaEQsUUFBUTBDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTix1QkFBdUIsdUJBQXVCLEVBQUVzQixzQkFBc0IscUJBQXFCLENBQUM7UUFDakk7UUFFQSxPQUFPVjtJQUNUO0lBRUEsT0FBT1csT0FBTyxtQkFBbUI7SUFFakMsT0FBT0MsU0FBU0MsSUFBSSxFQUFFN0QsT0FBTyxFQUFFO1FBQzdCLElBQUk4RCxvQkFBb0I7UUFFeEIsTUFBTSxFQUFFSCxJQUFJLEVBQUUsR0FBR0U7UUFFakIsSUFBSSxJQUFJLENBQUNGLElBQUksS0FBS0EsTUFBTTtZQUN0QkksSUFBQUEsb0JBQVcsRUFBQyxDQUFDRixNQUFNekQsZ0JBQWdCOEI7Z0JBQ2pDLE1BQU1sQyxVQUFVa0MsaUJBQWtCLEdBQUc7Z0JBRXJDOEIsSUFBQUEsb0JBQVcsRUFBQyxDQUFDaEU7b0JBQ1gsTUFBTSxFQUFFQyxNQUFNLEVBQUVFLFNBQVMsRUFBRSxHQUFHMEQsTUFDeEJsRCx1QkFBdUJzRCxJQUFBQSx3Q0FBMkIsRUFBQ2hFLFFBQVFELFVBQzNERSxPQUFPUyxzQkFDUE4sYUFBYTZELG1DQUFtQ3ZELHNCQUFzQlgsVUFDdEVNLGtCQUFrQjZELHdDQUF3Q3hELHNCQUFzQlg7b0JBRXRGOEQsb0JBQW9CLElBQUloRSxpQkFBaUJFLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDLGdCQUFnQkMsWUFBWUM7Z0JBQ3pHLEdBQUdOO1lBQ0wsR0FBRzZELE1BQU03RDtRQUNYO1FBRUEsT0FBTzhEO0lBQ1Q7SUFFQSxPQUFPTSxjQUFjQyxTQUFTLEVBQUVyRSxPQUFPLEVBQUU7UUFDdkMsSUFBSW1DLG1CQUFtQjtRQUV2QixNQUFNeEIsdUJBQXVCMEQsVUFBVTVELHVCQUF1QjtRQUU5RCxJQUFJRSx5QkFBeUIsTUFBTTtZQUNqQzJELElBQUFBLGVBQU0sRUFBQyxDQUFDdEU7Z0JBQ05tQyxtQkFBbUJvQyxJQUFBQSxpREFBd0MsRUFBQzVELHNCQUFzQlg7WUFDcEYsR0FBR0E7UUFDTDtRQUVBLE9BQU9tQztJQUNUO0lBRUEsT0FBT3FDLG9CQUFvQi9DLElBQUksRUFBRWdELFFBQVEsRUFBRXpFLE9BQU8sRUFBRTtRQUNsRHlCLE9BQU9DLElBQUFBLCtCQUFxQixFQUFDRCxNQUFNekIsVUFBVSxHQUFHO1FBRWhELElBQUltQztRQUVKbUMsSUFBQUEsZUFBTSxFQUFDLENBQUN0RTtZQUNOZ0UsSUFBQUEsb0JBQVcsRUFBQyxDQUFDaEU7Z0JBQ1gsTUFBTW9DLHlCQUF5QnNDLElBQUFBLGlEQUF5QyxFQUFDakQsTUFBTWdELFdBQ3pFeEUsU0FBU21DLHdCQUNUekIsdUJBQXVCc0QsSUFBQUEsd0NBQTJCLEVBQUNoRSxRQUFRRDtnQkFFakVtQyxtQkFBbUJvQyxJQUFBQSxpREFBd0MsRUFBQzVELHNCQUFzQlg7WUFDcEYsR0FBR0E7UUFDTCxHQUFHQTtRQUVILE9BQU9tQztJQUNUO0FBQ0Y7QUFFQSxTQUFTK0IsbUNBQW1DdkQsb0JBQW9CLEVBQUVYLE9BQU87SUFDdkUsTUFBTWEsaUJBQWlCRixxQkFBcUJnRSxpQkFBaUIsSUFDdkR0RSxhQUFhTCxRQUFRNEUsa0JBQWtCLENBQUMvRDtJQUU5QyxPQUFPUjtBQUNUO0FBRUEsU0FBUzhELHdDQUF3Q3hELG9CQUFvQixFQUFFWCxPQUFPO0lBQzVFLE1BQU1nQixzQkFBc0JMLHFCQUFxQmtFLHNCQUFzQixJQUNqRXZFLGtCQUFrQk4sUUFBUTRFLGtCQUFrQixDQUFDNUQ7SUFFbkQsT0FBT1Y7QUFDVCJ9