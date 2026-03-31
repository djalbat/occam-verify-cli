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
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const { name } = this.constructor, string = this.getString(), lineIndex = this.getLineIndex(), json = {
                name,
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
    static fromJSON(json, context) {
        let termSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.unserialise)((json, context)=>{
                (0, _context.instantiate)((context)=>{
                    const { string, lineIndex } = json, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, generalContext = generalContextFromTermSubstitutionNode(termSubstitutionNode, context), targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context);
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
function generalContextFromTermSubstitutionNode(termSubstitutionNode, context) {
    const generalContext = context; ///
    return generalContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgam9pbiwgYWJsYXRlLCBkZXNjZW5kLCBhdHRlbXB0LCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGdlbmVyYWxDb250ZXh0KTtcblxuICAgIHRoaXMudGFyZ2V0VGVybSA9IHRhcmdldFRlcm07XG4gICAgdGhpcy5yZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRUYXJnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFRlcm07XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRoaXMudGFyZ2V0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiB0ZXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRUZXJtLmdldFZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Db21wYXJlc1RvUmVwbGFjZW1lbnRUZXJtID0gdGhpcy50YXJnZXRUZXJtLmNvbXBhcmVUZXJtKHRoaXMucmVwbGFjZW1lbnRUZXJtKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0VGVybUNvbXBhcmVzVG9SZXBsYWNlbWVudFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtQ29tcGFyZXNUb1Rlcm0gPSB0aGlzLnJlcGxhY2VtZW50VGVybS5jb21wYXJlVGVybSh0ZXJtKSxcbiAgICAgICAgICBjb21wYXJlZFRvVGVybSA9IHJlcGxhY2VtZW50VGVybUNvbXBhcmVzVG9UZXJtOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvVGVybTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFRlcm0uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBqb2luKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgdGhpcy5zZXRHZW5lcmFsQ29udGV4dChnZW5lcmFsQ29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0YXJnZXRUZXJtU3RyaW5nID0gdGhpcy50YXJnZXRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFRlcm1TaW5ndWxhciA9IHRoaXMudGFyZ2V0VGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0VGVybVNpbmd1bGFyKSB7XG4gICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFRlcm0gPSB0aGlzLnRhcmdldFRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRhcmdldFRlcm0pID0+IHtcbiAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0YXJnZXRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy50YXJnZXRUZXJtID0gdGFyZ2V0VGVybTtcblxuICAgICAgICAgIHRhcmdldFRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VGVybVN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFRlcm1TdHJpbmd9JyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG5cbiAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFRlcm0gPSB0aGlzLnJlcGxhY2VtZW50VGVybS52YWxpZGF0ZShjb250ZXh0LCAocmVwbGFjZW1lbnRUZXJtKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50VGVybSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybTtcblxuICAgICAgICByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFRlcm1TdHJpbmd9JyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtU3Vic3RpdHV0aW9uXCI7XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgbmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgICBsaW5lSW5kZXhcbiAgICAgICAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsQ29udGV4dEZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgdGFyZ2V0VGVybSA9IHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9ubiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudC5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRhcmdldFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0YXJnZXRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFRlcm07XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRUZXJtTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShyZXBsYWNlbWVudFRlcm1Ob2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtO1xufVxuXG5mdW5jdGlvbiBnZW5lcmFsQ29udGV4dEZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gIHJldHVybiBnZW5lcmFsQ29udGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJnZW5lcmFsQ29udGV4dCIsInRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm0iLCJnZXRUYXJnZXRUZXJtIiwiZ2V0UmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0VGVybU5vZGUiLCJ0ZXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRUZXJtTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImlzVHJpdmlhbCIsInRhcmdldFRlcm1Db21wYXJlc1RvUmVwbGFjZW1lbnRUZXJtIiwiY29tcGFyZVRlcm0iLCJ0cml2aWFsIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ0ZXJtIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtIiwicmVwbGFjZW1lbnRUZXJtQ29tcGFyZXNUb1Rlcm0iLCJjb21wYXJlZFRvVGVybSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsInNwZWNpZmljQ29udGV4dCIsInRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0Q29udGV4dCIsImpvaW4iLCJhdHRlbXB0IiwidGFyZ2V0VGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtIiwiY29tbWl0Iiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwic2V0R2VuZXJhbENvbnRleHQiLCJ0YXJnZXRUZXJtU3RyaW5nIiwidGFyZ2V0VGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImRlc2NlbmQiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInJlcGxhY2VtZW50VGVybVN0cmluZyIsIm5hbWUiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJ0ZXJtU3Vic3RpdHV0aW9ubiIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24iLCJnZW5lcmFsQ29udGV4dEZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiYWJsYXRlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJ2YXJpYWJsZSIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZ2V0VGFyZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5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