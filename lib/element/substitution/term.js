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
const _breakPoint = require("../../utilities/breakPoint");
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
    constructor(context, string, node, breakPoint, targetTerm, replacementTerm){
        super(context, string, node, breakPoint);
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
        const targetTermEqualToReplacementTerm = this.targetTerm.isEqualTo(this.replacementTerm), trivial = targetTermEqualToReplacementTerm; ///
        return trivial;
    }
    matchVariableNode(variableNode) {
        return this.targetTerm.matchVariableNode(variableNode);
    }
    compareTerm(term, context) {
        term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
        const replacementTermEqualToTerm = this.replacementTerm.isEqualTo(term), comparedToTerm = replacementTermEqualToTerm; ///
        return comparedToTerm;
    }
    compareParameter(parameter) {
        const targetTermComparesToParameter = this.targetTerm.compareParameter(parameter), comparesToParameter = targetTermComparesToParameter; ///
        return comparesToParameter;
    }
    validate(context) {
        let termSubstitution = null;
        const termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term substitution...`);
        let validates = false;
        const validSubstitution = this.findValidSubstitution(context);
        if (validSubstitution) {
            validates = true;
            termSubstitution = validSubstitution; ///
            context.debug(`...the '${termSubstitutionString}' term substitution is already valid.`);
        } else {
            const generalContext = this.getGeneralContext(), specificContext = this.getSpecificContext();
            (0, _context.attempts)((generalContext, specificContext)=>{
                const targetTermValidates = this.validateTargetTerm(generalContext, specificContext);
                if (targetTermValidates) {
                    const replacementTermValidates = this.validateReplacementTerm(generalContext, specificContext);
                    if (replacementTermValidates) {
                        validates = true;
                    }
                }
                if (validates) {
                    this.commit(generalContext, specificContext);
                }
            }, generalContext, specificContext);
            if (validates) {
                const substitution = this; ///
                termSubstitution = substitution; ///
                context.addSubstitution(substitution);
            }
        }
        if (validates) {
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
            (0, _context.manifest)((context)=>{
                (0, _context.elide)((context)=>{
                    const targetTerm = this.targetTerm.validate(context, (targetTerm, context)=>{
                        const validatesForwards = true;
                        return validatesForwards;
                    });
                    if (targetTerm !== null) {
                        this.targetTerm = targetTerm;
                        targetTermValidates = true;
                    }
                }, context);
            }, specificContext, context);
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
        (0, _context.elide)((context)=>{
            const replacementTerm = this.replacementTerm.validate(context, (replacementTerm, context)=>{
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
    unifySubstitution(substitution, context) {
        let substitutionUnifies = false;
        const generalSubstitution = this, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
        context.trace(`Unifying the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution...`);
        (0, _context.reconcile)((context)=>{
            const replacementTermUnifies = this.unifyReplacementTerm(substitution, context);
            if (replacementTermUnifies) {
                const targetTermUnifies = this.unifyTargetTerm(substitution, context);
                if (targetTermUnifies) {
                    context.commit();
                    substitutionUnifies = true;
                }
            }
        }, context);
        if (substitutionUnifies) {
            context.debug(`...unified the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution.`);
        }
        return substitutionUnifies;
    }
    unifyTargetTerm(substitution, context) {
        let targetTermUnifies = false;
        const generalSubstitution = this, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
        context.trace(`Unifying the '${specificSubstitutionString}' substitution's target term with the '${generalSubstitutionString}' substitution's target term...`);
        const generalSubstitutionGeneralContext = generalSubstitution.getGeneralContext(), specificSubstitutionGeneralContext = specificSubstitution.getGeneralContext(), generalSubstitutionTargetTerm = generalSubstitution.getTargetTerm(), specificSubstitutionTargetTerm = specificSubstitution.getTargetTerm(), generalContext = generalSubstitutionGeneralContext, specificContext = specificSubstitutionGeneralContext, generalTerm = generalSubstitutionTargetTerm, specificTerm = specificSubstitutionTargetTerm; ///
        (0, _context.reconcile)((specificContext)=>{
            const termNode = generalTerm.getNode(), variable = variableFromTermNode(termNode, generalContext);
            if (variable !== null) {
                const term = specificTerm, termUnifies = variable.unifyTerm(term, generalContext, specificContext);
                if (termUnifies) {
                    specificContext.commit(context);
                    targetTermUnifies = true;
                }
            }
        }, specificContext);
        if (targetTermUnifies) {
            context.trace(`...unified the '${specificSubstitutionString}' substitution's target term with the '${generalSubstitutionString}' substitution's target term.`);
        }
        return targetTermUnifies;
    }
    unifyReplacementTerm(substitution, context) {
        let replacementTermUnifies = false;
        const generalSubstitution = this, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
        context.trace(`Unifying the '${specificSubstitutionString}' substitution's replacement term with the '${generalSubstitutionString}' substitution's replacement term...`);
        const generalSubstitutionSpecificContext = generalSubstitution.getSpecificContext(), specificSubstitutionSpecificContext = specificSubstitution.getSpecificContext(), generalSubstitutionReplacementTerm = generalSubstitution.getReplacementTerm(), specificSubstitutionReplacementTerm = specificSubstitution.getReplacementTerm(), generalContext = generalSubstitutionSpecificContext, specificContext = specificSubstitutionSpecificContext, generalTerm = generalSubstitutionReplacementTerm, specificTerm = specificSubstitutionReplacementTerm; ///
        (0, _context.reconcile)((specificContext)=>{
            const termNode = generalTerm.getNode(), variable = variableFromTermNode(termNode, generalContext);
            if (variable !== null) {
                const term = specificTerm, termUnifies = variable.unifyTerm(term, generalContext, specificContext);
                if (termUnifies) {
                    specificContext.commit(context);
                    replacementTermUnifies = true;
                }
            }
        }, specificContext);
        if (replacementTermUnifies) {
            context.trace(`...unified the '${specificSubstitutionString}' substitution's replacement term with the '${generalSubstitutionString}' substitution's replacement term.`);
        }
        return replacementTermUnifies;
    }
    static name = "TermSubstitution";
    static fromJSON(json, context) {
        let termSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.instantiate)((context)=>{
                (0, _context.unserialises)((json, generalContext, specificContext)=>{
                    const { string } = json, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, generalContext), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, specificContext), contexts = [
                        generalContext,
                        specificContext
                    ];
                    termSubstitutionn = new TermSubstitution(contexts, string, node, breakPoint, targetTerm, replacementTerm);
                }, json, context);
            }, context);
        }
        return termSubstitutionn;
    }
    static fromStatement(statement, context) {
        let termSubstitution = null;
        const termSubstitutionNode = statement.getTermSubstitutionNode();
        if (termSubstitutionNode !== null) {
            (0, _context.ablate)((context)=>{
                const generalContext = context, specificContext = context; ///
                termSubstitution = (0, _element.termSubstitutionFromTermSubstitutionNode)(termSubstitutionNode, generalContext, specificContext);
            }, context);
        }
        return termSubstitution;
    }
    static fromTermAndVariable(term, variable, generalContext, specificContext) {
        const context = specificContext; ///
        term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
        let termSubstitution;
        (0, _context.ablates)((generalContext, specificContext)=>{
            const context = specificContext; ///
            (0, _context.instantiate)((context)=>{
                const specificContext = context, termSubstitutionString = (0, _string.termSubstitutionStringFromTermAndVariable)(term, variable), string = termSubstitutionString, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context);
                termSubstitution = (0, _element.termSubstitutionFromTermSubstitutionNode)(termSubstitutionNode, generalContext, specificContext);
            }, context);
        }, generalContext, specificContext);
        return termSubstitution;
    }
});
function variableFromTermNode(termNode, generalContext) {
    let variable = null;
    const variableNode = termNode.getVariableNode();
    if (variableNode !== null) {
        variable = generalContext.findVariableByVariableNode(variableNode);
    }
    return variable;
}
function targetTermFromTermSubstitutionNode(termSubstitutionNode, generalContext) {
    const targetTermNode = termSubstitutionNode.getTargetTermNode(), targetTerm = generalContext.findTermByTermNode(targetTermNode);
    return targetTerm;
}
function replacementTermFromTermSubstitutionNode(termSubstitutionNode, specificContext) {
    const replacementTermNode = termSubstitutionNode.getReplacementTermNode(), replacementTerm = specificContext.findTermByTermNode(replacementTermNode);
    return replacementTerm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBlbGlkZSwgYWJsYXRlLCBtYW5pZmVzdCwgYXR0ZW1wdHMsIHJlY29uY2lsZSwgYWJsYXRlcywgaW5zdGFudGlhdGUsIHVuc2VyaWFsaXNlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudGFyZ2V0VGVybSA9IHRhcmdldFRlcm07XG4gICAgdGhpcy5yZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRUYXJnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFRlcm07XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRoaXMudGFyZ2V0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiB0ZXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRUZXJtLmdldFZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtID0gdGhpcy50YXJnZXRUZXJtLmlzRXF1YWxUbyh0aGlzLnJlcGxhY2VtZW50VGVybSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldFRlcm0ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybUVxdWFsVG9UZXJtID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uaXNFcXVhbFRvKHRlcm0pLFxuICAgICAgICAgIGNvbXBhcmVkVG9UZXJtID0gcmVwbGFjZW1lbnRUZXJtRXF1YWxUb1Rlcm07IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVkVG9UZXJtO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0VGVybS5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gdGhpcy5nZXRTcGVjaWZpY0NvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdHMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0VGVybVNpbmd1bGFyID0gdGhpcy50YXJnZXRUZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRUZXJtU2luZ3VsYXIpIHtcbiAgICAgIG1hbmlmZXN0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGVsaWRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0VGVybSA9IHRoaXMudGFyZ2V0VGVybS52YWxpZGF0ZShjb250ZXh0LCAodGFyZ2V0VGVybSwgY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0VGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRUZXJtID0gdGFyZ2V0VGVybTtcblxuICAgICAgICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFRlcm1TdHJpbmcgPSB0aGlzLnRhcmdldFRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG5cbiAgICBlbGlkZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtID0gdGhpcy5yZXBsYWNlbWVudFRlcm0udmFsaWRhdGUoY29udGV4dCwgKHJlcGxhY2VtZW50VGVybSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm07XG5cbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgdGVybS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFRlcm1VbmlmaWVzID0gdGhpcy51bmlmeVJlcGxhY2VtZW50VGVybShzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRUZXJtVW5pZmllcykge1xuICAgICAgICBjb25zdCB0YXJnZXRUZXJtVW5pZmllcyA9IHRoaXMudW5pZnlUYXJnZXRUZXJtKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5jb21taXQoKTtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VGFyZ2V0VGVybShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0VGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbixcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHRlcm0gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFRlcm0gPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFRhcmdldFRlcm0oKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldFRlcm0gPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRUYXJnZXRUZXJtKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFRlcm0gPSBnZW5lcmFsU3Vic3RpdHV0aW9uVGFyZ2V0VGVybSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNUZXJtID0gc3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRUZXJtOyAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IGdlbmVyYWxUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGdlbmVyYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSBzcGVjaWZpY1Rlcm0sICAvLy9cbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHRhcmdldFRlcm1VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodGFyZ2V0VGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHRlcm0gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRUZXJtVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UmVwbGFjZW1lbnRUZXJtKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50VGVybSA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRUZXJtKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0gPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudFRlcm0oKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxUZXJtID0gZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50VGVybSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNUZXJtID0gc3BlY2lmaWNTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm07IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlID0gZ2VuZXJhbFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgICBpZiAodmFyaWFibGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVybSA9IHNwZWNpZmljVGVybSwgIC8vL1xuICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGVybVVuaWZpZXMpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgcmVwbGFjZW1lbnRUZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50VGVybVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgdGVybSB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtVW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJUZXJtU3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgdW5zZXJpYWxpc2VzKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgIHRhcmdldFRlcm0gPSB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCksXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbm4gPSBuZXcgVGVybVN1YnN0aXR1dGlvbihjb250ZXh0cywgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pO1xuICAgICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50LmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IGdlbmVyYWxDb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0YXJnZXRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFRlcm07XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFRlcm1Ob2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHNwZWNpZmljQ29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUocmVwbGFjZW1lbnRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50VGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybSIsImdldFRhcmdldFRlcm0iLCJnZXRSZXBsYWNlbWVudFRlcm0iLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRlcm1Ob2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0iLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJjb21wYXJlVGVybSIsInRlcm0iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJyZXBsYWNlbWVudFRlcm1FcXVhbFRvVGVybSIsImNvbXBhcmVkVG9UZXJtIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwidGVybVN1YnN0aXR1dGlvbiIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiYXR0ZW1wdHMiLCJ0YXJnZXRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFRlcm0iLCJjb21taXQiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJ0YXJnZXRUZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwibWFuaWZlc3QiLCJlbGlkZSIsInZhbGlkYXRlc0ZvcndhcmRzIiwidGFyZ2V0VGVybVN0cmluZyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInJlY29uY2lsZSIsInJlcGxhY2VtZW50VGVybVVuaWZpZXMiLCJ1bmlmeVJlcGxhY2VtZW50VGVybSIsInRhcmdldFRlcm1VbmlmaWVzIiwidW5pZnlUYXJnZXRUZXJtIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsImdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRUZXJtIiwic3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRUZXJtIiwiZ2VuZXJhbFRlcm0iLCJzcGVjaWZpY1Rlcm0iLCJ0ZXJtTm9kZSIsInZhcmlhYmxlIiwidmFyaWFibGVGcm9tVGVybU5vZGUiLCJ0ZXJtVW5pZmllcyIsInVuaWZ5VGVybSIsImdlbmVyYWxTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQiLCJzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0iLCJzcGVjaWZpY1N1YnN0aXR1dGlvblJlcGxhY2VtZW50VGVybSIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJ0ZXJtU3Vic3RpdHV0aW9ubiIsImluc3RhbnRpYXRlIiwidW5zZXJpYWxpc2VzIiwiaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uIiwiYnJlYWtQb2ludEZyb21KU09OIiwidGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImNvbnRleHRzIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsImFibGF0ZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tVGVybUFuZFZhcmlhYmxlIiwiYWJsYXRlcyIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJnZXRUYXJnZXRUZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsImdldFJlcGxhY2VtZW50VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3FFQVZ5QjswQkFFRjs0QkFDWTswQkFDRzs2QkFDTTt5QkFDYTt3QkFDQzt5QkFDdUM7Ozs7OztNQUVqRyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHlCQUF5QkMscUJBQVk7SUFDL0QsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGVBQWUsQ0FBRTtRQUMxRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7SUFDekI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDRixlQUFlO0lBQzdCO0lBRUFHLDBCQUEwQjtRQUN4QixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsdUJBQXVCUixNQUFPLEdBQUc7UUFFdkMsT0FBT1E7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxpQkFBaUIsSUFBSSxDQUFDUixVQUFVLENBQUNLLE9BQU8sSUFDeENJLGFBQWFELGdCQUFnQixHQUFHO1FBRXRDLE9BQU9DO0lBQ1Q7SUFFQUMscUJBQXFCO1FBQ25CLE1BQU1DLHNCQUFzQixJQUFJLENBQUNWLGVBQWUsQ0FBQ0ksT0FBTyxJQUNsRE8sa0JBQWtCRCxxQkFBcUIsR0FBRztRQUVoRCxPQUFPQztJQUNUO0lBRUFDLGtCQUFrQjtRQUFFLE9BQU8sSUFBSSxDQUFDYixVQUFVLENBQUNhLGVBQWU7SUFBSTtJQUU5REMsWUFBWTtRQUNWLE1BQU1DLG1DQUFtQyxJQUFJLENBQUNmLFVBQVUsQ0FBQ2dC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