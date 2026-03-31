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
    toJSON() {
        const { name } = this.constructor, string = this.getString(), lineIndex = this.getLineIndex(), json = {
            name,
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        let termSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, generalContext = generalContextFromTermSubstitutionNode(termSubstitutionNode, context), targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context);
                termSubstitutionn = new TermSubstitution(context, string, node, lineIndex, generalContext, targetTerm, replacementTerm);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgam9pbiwgYWJsYXRlLCBkZXNjZW5kLCBhdHRlbXB0LCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGdlbmVyYWxDb250ZXh0KTtcblxuICAgIHRoaXMudGFyZ2V0VGVybSA9IHRhcmdldFRlcm07XG4gICAgdGhpcy5yZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRUYXJnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFRlcm07XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRoaXMudGFyZ2V0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiB0ZXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRUZXJtLmdldFZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Db21wYXJlc1RvUmVwbGFjZW1lbnRUZXJtID0gdGhpcy50YXJnZXRUZXJtLmNvbXBhcmVUZXJtKHRoaXMucmVwbGFjZW1lbnRUZXJtKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0VGVybUNvbXBhcmVzVG9SZXBsYWNlbWVudFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtQ29tcGFyZXNUb1Rlcm0gPSB0aGlzLnJlcGxhY2VtZW50VGVybS5jb21wYXJlVGVybSh0ZXJtKSxcbiAgICAgICAgICBjb21wYXJlZFRvVGVybSA9IHJlcGxhY2VtZW50VGVybUNvbXBhcmVzVG9UZXJtOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvVGVybTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFRlcm0uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBqb2luKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgdGhpcy5zZXRHZW5lcmFsQ29udGV4dChnZW5lcmFsQ29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0YXJnZXRUZXJtU3RyaW5nID0gdGhpcy50YXJnZXRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFRlcm1TaW5ndWxhciA9IHRoaXMudGFyZ2V0VGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0VGVybVNpbmd1bGFyKSB7XG4gICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFRlcm0gPSB0aGlzLnRhcmdldFRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRhcmdldFRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0YXJnZXRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50YXJnZXRUZXJtID0gdGFyZ2V0VGVybTtcblxuICAgICAgICAgIHRhcmdldFRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VGVybVN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFRlcm1TdHJpbmd9JyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG5cbiAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFRlcm0gPSB0aGlzLnJlcGxhY2VtZW50VGVybS52YWxpZGF0ZShjb250ZXh0LCAocmVwbGFjZW1lbnRUZXJtKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50VGVybSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybTtcblxuICAgICAgICByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFRlcm1TdHJpbmd9JyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtU3Vic3RpdHV0aW9uXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsQ29udGV4dEZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRhcmdldFRlcm0gPSB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9ubiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50LmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRhcmdldFRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGFyZ2V0VGVybTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFRlcm1Ob2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHJlcGxhY2VtZW50VGVybU5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRlcm07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYWxDb250ZXh0RnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIGdlbmVyYWxDb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImdlbmVyYWxDb250ZXh0IiwidGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybSIsImdldFRhcmdldFRlcm0iLCJnZXRSZXBsYWNlbWVudFRlcm0iLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRlcm1Ob2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0VGVybUNvbXBhcmVzVG9SZXBsYWNlbWVudFRlcm0iLCJjb21wYXJlVGVybSIsInRyaXZpYWwiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInRlcm0iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJyZXBsYWNlbWVudFRlcm1Db21wYXJlc1RvVGVybSIsImNvbXBhcmVkVG9UZXJtIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwic3BlY2lmaWNDb250ZXh0IiwidGVybVN1YnN0aXR1dGlvbiIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZXRDb250ZXh0Iiwiam9pbiIsImF0dGVtcHQiLCJ0YXJnZXRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFRlcm0iLCJjb21taXQiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJzZXRHZW5lcmFsQ29udGV4dCIsInRhcmdldFRlcm1TdHJpbmciLCJ0YXJnZXRUZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZGVzY2VuZCIsInZhbGlkYXRlc0ZvcndhcmRzIiwicmVwbGFjZW1lbnRUZXJtU3RyaW5nIiwibmFtZSIsInRvSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsInRlcm1TdWJzdGl0dXRpb25uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24iLCJnZW5lcmFsQ29udGV4dEZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiYWJsYXRlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJ2YXJpYWJsZSIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZ2V0VGFyZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztxRUFUeUI7MEJBRUY7MEJBQ2U7NkJBQ007eUJBQ2E7d0JBQ0M7eUJBQ0U7Ozs7OztNQUU1RCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHlCQUF5QkMscUJBQVk7SUFDL0QsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxjQUFjLEVBQUVDLFVBQVUsRUFBRUMsZUFBZSxDQUFFO1FBQ3pGLEtBQUssQ0FBQ04s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