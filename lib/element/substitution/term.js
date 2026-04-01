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
        const context = generalContext, termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term substitution's target term...`);
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
            const targetTermString = this.targetTerm.getString();
            context.debug(`The '${targetTermString}' target term is not singular.`);
        }
        if (targetTermValidates) {
            context.debug(`...validated the '${termSubstitutionString}' term substitution's target term...`);
        }
        return targetTermValidates;
    }
    validateReplacementTerm(generalContext, specificContext) {
        let replacementTermValidates = false;
        const context = specificContext, termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term substitution's replacement term...`);
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
            context.debug(`...validated the '${termSubstitutionString}' term substitution's replacement term...`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgam9pbiwgYWJsYXRlLCBkZXNjZW5kLCBhdHRlbXB0LCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQsIHRhcmdldFRlcm0sIHJlcGxhY2VtZW50VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCk7XG5cbiAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGFyZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRUZXJtO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0aGlzLnRhcmdldFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5nZXRWYXJpYWJsZU5vZGUoKTsgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtQ29tcGFyZXNUb1JlcGxhY2VtZW50VGVybSA9IHRoaXMudGFyZ2V0VGVybS5jb21wYXJlVGVybSh0aGlzLnJlcGxhY2VtZW50VGVybSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldFRlcm1Db21wYXJlc1RvUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldFRlcm0ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybUNvbXBhcmVzVG9UZXJtID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uY29tcGFyZVRlcm0odGVybSksXG4gICAgICAgICAgY29tcGFyZWRUb1Rlcm0gPSByZXBsYWNlbWVudFRlcm1Db21wYXJlc1RvVGVybTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb1Rlcm07XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRUZXJtLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgam9pbigoZ2VuZXJhbENvbnRleHQpID0+IHtcbiAgICAgICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgYXR0ZW1wdCgoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0cyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0VGVybVNpbmd1bGFyID0gdGhpcy50YXJnZXRUZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRUZXJtU2luZ3VsYXIpIHtcbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGVybSA9IHRoaXMudGFyZ2V0VGVybS52YWxpZGF0ZShjb250ZXh0LCAodGFyZ2V0VGVybSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRhcmdldFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuXG4gICAgICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRUZXJtU3RyaW5nID0gdGhpcy50YXJnZXRUZXJtLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgdGVybS4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtID0gdGhpcy5yZXBsYWNlbWVudFRlcm0udmFsaWRhdGUoY29udGV4dCwgKHJlcGxhY2VtZW50VGVybSkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm07XG5cbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgdGVybS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb25uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHVuc2VyaWFsaXNlKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICB0YXJnZXRUZXJtID0gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGdlbmVyYWxDb250ZXh0LCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pO1xuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIGpzb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50LmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRhcmdldFRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGFyZ2V0VGVybTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFRlcm1Ob2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHJlcGxhY2VtZW50VGVybU5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRlcm07XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiZ2VuZXJhbENvbnRleHQiLCJ0YXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGFyZ2V0VGVybSIsImdldFJlcGxhY2VtZW50VGVybSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFRlcm1Ob2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRUZXJtQ29tcGFyZXNUb1JlcGxhY2VtZW50VGVybSIsImNvbXBhcmVUZXJtIiwidHJpdmlhbCIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidGVybSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInJlcGxhY2VtZW50VGVybUNvbXBhcmVzVG9UZXJtIiwiY29tcGFyZWRUb1Rlcm0iLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJzcGVjaWZpY0NvbnRleHQiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImdldENvbnRleHQiLCJqb2luIiwiYXR0ZW1wdCIsInRhcmdldFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50VGVybSIsInNldENvbnRleHRzIiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0VGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImRlc2NlbmQiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRhcmdldFRlcm1TdHJpbmciLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwidGVybVN1YnN0aXR1dGlvbm4iLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uIiwidGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJhYmxhdGUiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsInZhcmlhYmxlIiwidGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJnZXRUYXJnZXRUZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsImdldFJlcGxhY2VtZW50VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O3FFQVR5QjswQkFFRjswQkFDZTs2QkFDTTt5QkFDYTt3QkFDQzt5QkFDZTs7Ozs7O01BRXpFLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMseUJBQXlCQyxxQkFBWTtJQUMvRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLGNBQWMsRUFBRUMsVUFBVSxFQUFFQyxlQUFlLENBQUU7UUFDekYsS0FBSyxDQUFDTixTQUFTQyxRQUFRQyxNQUFNQyxXQUFXQztRQUV4QyxJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO0lBQ3pCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0YsZUFBZTtJQUM3QjtJQUVBRywwQkFBMEI7UUFDeEIsTUFBTVAsT0FBTyxJQUFJLENBQUNRLE9BQU8sSUFDbkJDLHVCQUF1QlQsTUFBTyxHQUFHO1FBRXZDLE9BQU9TO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsaUJBQWlCLElBQUksQ0FBQ1IsVUFBVSxDQUFDSyxPQUFPLElBQ3hDSSxhQUFhRCxnQkFBZ0IsR0FBRztRQUV0QyxPQUFPQztJQUNUO0lBRUFDLHFCQUFxQjtRQUNuQixNQUFNQyxzQkFBc0IsSUFBSSxDQUFDVixlQUFlLENBQUNJLE9BQU8sSUFDbERPLGtCQUFrQkQscUJBQXFCLEdBQUc7UUFFaEQsT0FBT0M7SUFDVDtJQUVBQyxrQkFBa0I7UUFBRSxPQUFPLElBQUksQ0FBQ2IsVUFBVSxDQUFDYSxlQUFlO0lBQUk7SUFFOURDLFlBQVk7UUFDVixNQUFNQyxzQ0FBc0MsSUFBSSxDQUFDZixV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