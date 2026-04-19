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
                (0, _context.sequester)((context)=>{
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
        (0, _context.sequester)((context)=>{
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
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const generalTermNode = generalTerm.getNode(), generalVariable = variableFromTermNode(generalTermNode, generalContext);
                if (generalVariable !== null) {
                    const term = specificTerm, variable = generalVariable, termUnifies = variable.unifyTerm(term, generalContext, specificContext);
                    if (termUnifies) {
                        specificContext.commit(context);
                        targetTermUnifies = true;
                    }
                }
            }, specificContext);
        }, specificContext, context);
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
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const generalTermNode = generalTerm.getNode(), generalVariable = variableFromTermNode(generalTermNode, generalContext);
                if (generalVariable !== null) {
                    const term = specificTerm, variable = generalVariable, termUnifies = variable.unifyTerm(term, generalContext, specificContext);
                    if (termUnifies) {
                        specificContext.commit(context);
                        replacementTermUnifies = true;
                    }
                }
            }, specificContext);
        }, specificContext, context);
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
            (0, _context.unserialises)((json, generalContext, specificContext)=>{
                const context = specificContext; ///
                (0, _context.instantiate)((context)=>{
                    const { string } = json, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context), specificContext = context, contexts = [
                        generalContext,
                        specificContext
                    ];
                    termSubstitutionn = new TermSubstitution(contexts, string, node, breakPoint, targetTerm, replacementTerm);
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
function variableFromTermNode(termNode, context) {
    let variable = null;
    const variableNode = termNode.getVariableNode();
    if (variableNode !== null) {
        variable = context.findVariableByVariableNode(variableNode);
    }
    return variable;
}
function targetTermFromTermSubstitutionNode(termSubstitutionNode, context) {
    const targetTermNode = termSubstitutionNode.getTargetTermNode(), targetTerm = context.findTermByTermNode(targetTermNode);
    return targetTerm;
}
function replacementTermFromTermSubstitutionNode(termSubstitutionNode, context) {
    const replacementTermNode = termSubstitutionNode.getReplacementTermNode(), replacementTerm = context.findTermByTermNode(replacementTermNode);
    return replacementTerm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBqb2luLCBhYmxhdGUsIGFibGF0ZXMsIG1hbmlmZXN0LCBhdHRlbXB0cywgcmVjb25jaWxlLCBzZXF1ZXN0ZXIsIGluc3RhbnRpYXRlLCB1bnNlcmlhbGlzZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRhcmdldFRlcm0sIHJlcGxhY2VtZW50VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGFyZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRUZXJtO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0aGlzLnRhcmdldFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5nZXRWYXJpYWJsZU5vZGUoKTsgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSA9IHRoaXMudGFyZ2V0VGVybS5pc0VxdWFsVG8odGhpcy5yZXBsYWNlbWVudFRlcm0pLFxuICAgICAgICAgIHRyaXZpYWwgPSB0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRUZXJtLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm1FcXVhbFRvVGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmlzRXF1YWxUbyh0ZXJtKSxcbiAgICAgICAgICBjb21wYXJlZFRvVGVybSA9IHJlcGxhY2VtZW50VGVybUVxdWFsVG9UZXJtOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvVGVybTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFRlcm0uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuZ2V0R2VuZXJhbENvbnRleHQoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHRoaXMuZ2V0U3BlY2lmaWNDb250ZXh0KCk7XG5cbiAgICAgIGF0dGVtcHRzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFRlcm1TaW5ndWxhciA9IHRoaXMudGFyZ2V0VGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0VGVybVNpbmd1bGFyKSB7XG4gICAgICBtYW5pZmVzdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBzZXF1ZXN0ZXIoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRUZXJtID0gdGhpcy50YXJnZXRUZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0YXJnZXRUZXJtLCBjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh0YXJnZXRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuXG4gICAgICAgICAgICB0YXJnZXRUZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0VGVybVN0cmluZyA9IHRoaXMudGFyZ2V0VGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcblxuICAgIHNlcXVlc3RlcigoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtID0gdGhpcy5yZXBsYWNlbWVudFRlcm0udmFsaWRhdGUoY29udGV4dCwgKHJlcGxhY2VtZW50VGVybSwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5yZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm07XG5cbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgdGVybS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFRlcm1VbmlmaWVzID0gdGhpcy51bmlmeVJlcGxhY2VtZW50VGVybShzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRUZXJtVW5pZmllcykge1xuICAgICAgICBjb25zdCB0YXJnZXRUZXJtVW5pZmllcyA9IHRoaXMudW5pZnlUYXJnZXRUZXJtKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5jb21taXQoKTtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VGFyZ2V0VGVybShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0VGVybVVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbixcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHRlcm0gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFRlcm0gPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFRhcmdldFRlcm0oKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldFRlcm0gPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRUYXJnZXRUZXJtKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFRlcm0gPSBnZW5lcmFsU3Vic3RpdHV0aW9uVGFyZ2V0VGVybSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNUZXJtID0gc3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRUZXJtOyAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbFRlcm1Ob2RlID0gZ2VuZXJhbFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICBnZW5lcmFsVmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtTm9kZShnZW5lcmFsVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoZ2VuZXJhbFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybSA9IHNwZWNpZmljVGVybSwgIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gZ2VuZXJhbFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgICAgdGFyZ2V0VGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlcGxhY2VtZW50VGVybShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0gPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50VGVybSgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRUZXJtID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRUZXJtKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsVGVybSA9IGdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0sIC8vL1xuICAgICAgICAgIHNwZWNpZmljVGVybSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbFRlcm1Ob2RlID0gZ2VuZXJhbFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgICBnZW5lcmFsVmFyaWFibGUgPSB2YXJpYWJsZUZyb21UZXJtTm9kZShnZW5lcmFsVGVybU5vZGUsIGdlbmVyYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoZ2VuZXJhbFZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgdGVybSA9IHNwZWNpZmljVGVybSwgIC8vL1xuICAgICAgICAgICAgICAgIHZhcmlhYmxlID0gZ2VuZXJhbFZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICB0ZXJtVW5pZmllcyA9IHZhcmlhYmxlLnVuaWZ5VGVybSh0ZXJtLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgICAgcmVwbGFjZW1lbnRUZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRUZXJtVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFRlcm1VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1TdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICB1bnNlcmlhbGlzZXMoKGpzb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgIHRhcmdldFRlcm0gPSB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICBjb250ZXh0cyA9IFtcbiAgICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0XG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudC5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlcygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB2YXJpYWJsZUZyb21UZXJtTm9kZSh0ZXJtTm9kZSwgY29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IGNvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFRlcm1Ob2RlKCksXG4gICAgICAgIHRhcmdldFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0YXJnZXRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFRlcm07XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRUZXJtTm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFRlcm0gPSBjb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShyZXBsYWNlbWVudFRlcm1Ob2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0YXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGFyZ2V0VGVybSIsImdldFJlcGxhY2VtZW50VGVybSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFRlcm1Ob2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSIsImlzRXF1YWxUbyIsInRyaXZpYWwiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImNvbXBhcmVUZXJtIiwidGVybSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInJlcGxhY2VtZW50VGVybUVxdWFsVG9UZXJtIiwiY29tcGFyZWRUb1Rlcm0iLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImdlbmVyYWxDb250ZXh0IiwiZ2V0R2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRTcGVjaWZpY0NvbnRleHQiLCJhdHRlbXB0cyIsInRhcmdldFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50VGVybSIsImNvbW1pdCIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJtYW5pZmVzdCIsInNlcXVlc3RlciIsInZhbGlkYXRlc0ZvcndhcmRzIiwidGFyZ2V0VGVybVN0cmluZyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInJlY29uY2lsZSIsInJlcGxhY2VtZW50VGVybVVuaWZpZXMiLCJ1bmlmeVJlcGxhY2VtZW50VGVybSIsInRhcmdldFRlcm1VbmlmaWVzIiwidW5pZnlUYXJnZXRUZXJtIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsImdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRUZXJtIiwic3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRUZXJtIiwiZ2VuZXJhbFRlcm0iLCJzcGVjaWZpY1Rlcm0iLCJqb2luIiwiZ2VuZXJhbFRlcm1Ob2RlIiwiZ2VuZXJhbFZhcmlhYmxlIiwidmFyaWFibGVGcm9tVGVybU5vZGUiLCJ2YXJpYWJsZSIsInRlcm1VbmlmaWVzIiwidW5pZnlUZXJtIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50VGVybSIsInNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRUZXJtIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInRlcm1TdWJzdGl0dXRpb25uIiwidW5zZXJpYWxpc2VzIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24iLCJicmVha1BvaW50RnJvbUpTT04iLCJ0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiY29udGV4dHMiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiYWJsYXRlIiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJhYmxhdGVzIiwidGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJ0ZXJtTm9kZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwiZ2V0VGFyZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztxRUFWeUI7MEJBRUY7NEJBQ1k7MEJBQ0c7NkJBQ007eUJBQ2E7d0JBQ0M7eUJBQ2lEOzs7Ozs7TUFFM0csV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx5QkFBeUJDLHFCQUFZO0lBQy9ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxlQUFlLENBQUU7UUFDMUUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO0lBQ3pCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0YsZUFBZTtJQUM3QjtJQUVBRywwQkFBMEI7UUFDeEIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLHVCQUF1QlIsTUFBTyxHQUFHO1FBRXZDLE9BQU9RO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsaUJBQWlCLElBQUksQ0FBQ1IsVUFBVSxDQUFDSyxPQUFPLElBQ3hDSSxhQUFhRCxnQkFBZ0IsR0FBRztRQUV0QyxPQUFPQztJQUNUO0lBRUFDLHFCQUFxQjtRQUNuQixNQUFNQyxzQkFBc0IsSUFBSSxDQUFDVixlQUFlLENBQUNJLE9BQU8sSUFDbERPLGtCQUFrQkQscUJBQXFCLEdBQUc7UUFFaEQsT0FBT0M7SUFDVDtJQUVBQyxrQkFBa0I7UUFBRSxPQUFPLElBQUksQ0FBQ2IsVUFBVSxDQUFDYSxlQUFlO0lBQUk7SUFFOURDLFlBQVk7UUFDVixNQUFNQyxtQ0FBbUMsSUFBSSxDQUFDZixVQUFVLENBQUNnQixTQUFTLENBQUMsSUFBSSxDQUFDZixlQUFlLEdBQ2pGZ0IsVUFBVUYsa0NBQWtDLEdBQUc7UUFFckQsT0FBT0U7SUFDVDtJQUVBQyxrQkFBa0JDLFlBQVksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDbkIsVUFBVSxDQUFDa0IsaUJBQWlCLENBQUNDO0lBQWU7SUFFMUZDLFlBQVlDLElBQUksRUFBRXpCLE9BQU8sRUFBRTtRQUN6QnlCLE9BQU9DLElBQUFBLCtCQUFxQixFQUFDRCxNQUFNekIsVUFBVSxHQUFHO1FBRWhELE1BQU0yQiw2QkFBNkIsSUFBSSxDQUFDdEIsZUFBZSxDQUFDZSxTQUFTLENBQUNLLE9BQzVERyxpQkFBaUJELDRCQUE0QixHQUFHO1FBRXRELE9BQU9DO0lBQ1Q7SUFFQUMsaUJBQWlCQyxTQUFTLEVBQUU7UUFDMUIsTUFBTUMsZ0NBQWdDLElBQUksQ0FBQzNCLFVBQVUsQ0FBQ3lCLGdCQUFnQixDQUFDQyxZQUNqRUUsc0JBQXNCRCwrQkFBZ0MsR0FBRztRQUUvRCxPQUFPQztJQUNUO0lBRUFDLFNBQVNqQyxPQUFPLEVBQUU7UUFDaEIsSUFBSWtDLG1CQUFtQjtRQUV2QixNQUFNQyx5QkFBeUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUVyRHBDLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsdUJBQXVCLHNCQUFzQixDQUFDO1FBRS9FLElBQUlHLFlBQVk7UUFFaEIsTUFBTUMsb0JBQW9CLElBQUksQ0FBQ0MscUJBQXFCLENBQUN4QztRQUVyRCxJQUFJdUMsbUJBQW1CO1lBQ3JCRCxZQUFZO1lBRVpKLG1CQUFtQkssbUJBQW1CLEdBQUc7WUFFekN2QyxRQUFReUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFTix1QkFBdUIscUNBQXFDLENBQUM7UUFDeEYsT0FBTztZQUNMLE1BQU1PLGlCQUFpQixJQUFJLENBQUNDLGlCQUFpQixJQUN2Q0Msa0JBQWtCLElBQUksQ0FBQ0Msa0JBQWtCO1lBRS9DQyxJQUFBQSxpQkFBUSxFQUFDLENBQUNKLGdCQUFnQkU7Z0JBQ3hCLE1BQU1HLHNCQUFzQixJQUFJLENBQUNDLGtCQUFrQixDQUFDTixnQkFBZ0JFO2dCQUVwRSxJQUFJRyxxQkFBcUI7b0JBQ3ZCLE1BQU1FLDJCQUEyQixJQUFJLENBQUNDLHVCQUF1QixDQUFDUixnQkFBZ0JFO29CQUU5RSxJQUFJSywwQkFBMEI7d0JBQzVCWCxZQUFZO29CQUNkO2dCQUNGO2dCQUVBLElBQUlBLFdBQVc7b0JBQ2IsSUFBSSxDQUFDYSxNQUFNLENBQUNULGdCQUFnQkU7Z0JBQzlCO1lBQ0YsR0FBR0YsZ0JBQWdCRTtZQUVuQixJQUFJTixXQUFXO2dCQUNiLE1BQU1jLGVBQWUsSUFBSSxFQUFHLEdBQUc7Z0JBRS9CbEIsbUJBQW1Ca0IsY0FBZSxHQUFHO2dCQUVyQ3BELFFBQVFxRCxlQUFlLENBQUNEO1lBQzFCO1FBQ0Y7UUFFQSxJQUFJZCxXQUFXO1lBQ2J0QyxRQUFReUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLHVCQUF1QixvQkFBb0IsQ0FBQztRQUNqRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQWMsbUJBQW1CTixjQUFjLEVBQUVFLGVBQWUsRUFBRTtRQUNsRCxJQUFJRyxzQkFBc0I7UUFFMUIsTUFBTS9DLFVBQVUwQyxnQkFDVlAseUJBQXlCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFckRwQyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHVCQUF1QixvQ0FBb0MsQ0FBQztRQUU3RixNQUFNbUIscUJBQXFCLElBQUksQ0FBQ2xELFVBQVUsQ0FBQ21ELFVBQVU7UUFFckQsSUFBSUQsb0JBQW9CO1lBQ3RCRSxJQUFBQSxpQkFBUSxFQUFDLENBQUN4RDtnQkFDUnlELElBQUFBLGtCQUFTLEVBQUMsQ0FBQ3pEO29CQUNULE1BQU1JLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUM2QixRQUFRLENBQUNqQyxTQUFTLENBQUNJLFlBQVlKO3dCQUNoRSxNQUFNMEQsb0JBQW9CO3dCQUUxQixPQUFPQTtvQkFDVDtvQkFFQSxJQUFJdEQsZUFBZSxNQUFNO3dCQUN2QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7d0JBRWxCMkMsc0JBQXNCO29CQUN4QjtnQkFDRixHQUFHL0M7WUFDTCxHQUFHNEMsaUJBQWlCNUM7UUFDdEIsT0FBTztZQUNMLE1BQU0yRCxtQkFBbUIsSUFBSSxDQUFDdkQsVUFBVSxDQUFDZ0MsU0FBUztZQUVsRHBDLFFBQVF5QyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVrQixpQkFBaUIsOEJBQThCLENBQUM7UUFDeEU7UUFFQSxJQUFJWixxQkFBcUI7WUFDdkIvQyxRQUFReUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLHVCQUF1QixvQ0FBb0MsQ0FBQztRQUNqRztRQUVBLE9BQU9ZO0lBQ1Q7SUFFQUcsd0JBQXdCUixjQUFjLEVBQUVFLGVBQWUsRUFBRTtRQUN2RCxJQUFJSywyQkFBMkI7UUFFL0IsTUFBTWpELFVBQVU0QyxpQkFDVlQseUJBQXlCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFckRwQyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLHVCQUF1Qix5Q0FBeUMsQ0FBQztRQUVsR3NCLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ3pEO1lBQ1QsTUFBTUssa0JBQWtCLElBQUksQ0FBQ0EsZUFBZSxDQUFDNEIsUUFBUSxDQUFDakMsU0FBUyxDQUFDSyxpQkFBaUJMO2dCQUMvRSxNQUFNMEQsb0JBQW9CO2dCQUUxQixPQUFPQTtZQUNUO1lBRUEsSUFBSXJELG9CQUFvQixNQUFNO2dCQUM1QixJQUFJLENBQUNBLGVBQWUsR0FBR0E7Z0JBRXZCNEMsMkJBQTJCO1lBQzdCO1FBQ0YsR0FBR2pEO1FBRUgsSUFBSWlELDBCQUEwQjtZQUM1QmpELFFBQVF5QyxLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRU4sdUJBQXVCLHlDQUF5QyxDQUFDO1FBQ3RHO1FBRUEsT0FBT2M7SUFDVDtJQUVBVyxrQkFBa0JSLFlBQVksRUFBRXBELE9BQU8sRUFBRTtRQUN2QyxJQUFJNkQsc0JBQXNCO1FBRTFCLE1BQU1DLHNCQUFzQixJQUFJLEVBQzFCQyx1QkFBdUJYLGNBQ3ZCWSw0QkFBNEJGLG9CQUFvQjFCLFNBQVMsSUFDekQ2Qiw2QkFBNkJGLHFCQUFxQjNCLFNBQVM7UUFFakVwQyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFNEIsMkJBQTJCLHlCQUF5QixFQUFFRCwwQkFBMEIsaUJBQWlCLENBQUM7UUFFaklFLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ2xFO1lBQ1QsTUFBTW1FLHlCQUF5QixJQUFJLENBQUNDLG9CQUFvQixDQUFDaEIsY0FBY3BEO1lBRXZFLElBQUltRSx3QkFBd0I7Z0JBQzFCLE1BQU1FLG9CQUFvQixJQUFJLENBQUNDLGVBQWUsQ0FBQ2xCLGNBQWNwRDtnQkFFN0QsSUFBSXFFLG1CQUFtQjtvQkFDckJyRSxRQUFRbUQsTUFBTTtvQkFFZFUsc0JBQXNCO2dCQUN4QjtZQUNGO1FBQ0YsR0FBRzdEO1FBRUgsSUFBSTZELHFCQUFxQjtZQUN2QjdELFFBQVF5QyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRXdCLDJCQUEyQix5QkFBeUIsRUFBRUQsMEJBQTBCLGVBQWUsQ0FBQztRQUNuSTtRQUVBLE9BQU9IO0lBQ1Q7SUFFQVMsZ0JBQWdCbEIsWUFBWSxFQUFFcEQsT0FBTyxFQUFFO1FBQ3JDLElBQUlxRSxvQkFBb0I7UUFFeEIsTUFBTVAsc0JBQXNCLElBQUksRUFDMUJDLHVCQUF1QlgsY0FDdkJZLDRCQUE0QkYsb0JBQW9CMUIsU0FBUyxJQUN6RDZCLDZCQUE2QkYscUJBQXFCM0IsU0FBUztRQUVqRXBDLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU0QiwyQkFBMkIsdUNBQXVDLEVBQUVELDBCQUEwQiwrQkFBK0IsQ0FBQztRQUU3SixNQUFNTyxvQ0FBb0NULG9CQUFvQm5CLGlCQUFpQixJQUN6RTZCLHFDQUFxQ1QscUJBQXFCcEIsaUJBQWlCLElBQzNFOEIsZ0NBQWdDWCxvQkFBb0J4RCxhQUFhLElBQ2pFb0UsaUNBQWlDWCxxQkFBcUJ6RCxhQUFhLElBQ25Fb0MsaUJBQWlCNkIsbUNBQ2pCM0Isa0JBQWtCNEIsb0NBQ2xCRyxjQUFjRiwrQkFDZEcsZUFBZUYsZ0NBQWdDLEdBQUc7UUFFeERHLElBQUFBLGFBQUksRUFBQyxDQUFDakM7WUFDSnNCLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ3RCO2dCQUNULE1BQU1rQyxrQkFBa0JILFlBQVlsRSxPQUFPLElBQ3JDc0Usa0JBQWtCQyxxQkFBcUJGLGlCQUFpQnBDO2dCQUU5RCxJQUFJcUMsb0JBQW9CLE1BQU07b0JBQzVCLE1BQU10RCxPQUFPbUQsY0FDUEssV0FBV0YsaUJBQ1hHLGNBQWNELFNBQVNFLFNBQVMsQ0FBQzFELE1BQU1pQixnQkFBZ0JFO29CQUU3RCxJQUFJc0MsYUFBYTt3QkFDZnRDLGdCQUFnQk8sTUFBTSxDQUFDbkQ7d0JBRXZCcUUsb0JBQW9CO29CQUN0QjtnQkFDRjtZQUNGLEdBQUd6QjtRQUNMLEdBQUdBLGlCQUFpQjVDO1FBRXBCLElBQUlxRSxtQkFBbUI7WUFDckJyRSxRQUFRcUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUU0QiwyQkFBMkIsdUNBQXVDLEVBQUVELDBCQUEwQiw2QkFBNkIsQ0FBQztRQUMvSjtRQUVBLE9BQU9LO0lBQ1Q7SUFFQUQscUJBQXFCaEIsWUFBWSxFQUFFcEQsT0FBTyxFQUFFO1FBQzFDLElBQUltRSx5QkFBeUI7UUFFN0IsTUFBTUwsc0JBQXNCLElBQUksRUFDMUJDLHVCQUF1QlgsY0FDdkJZLDRCQUE0QkYsb0JBQW9CMUIsU0FBUyxJQUN6RDZCLDZCQUE2QkYscUJBQXFCM0IsU0FBUztRQUVqRXBDLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU0QiwyQkFBMkIsNENBQTRDLEVBQUVELDBCQUEwQixvQ0FBb0MsQ0FBQztRQUV2SyxNQUFNb0IscUNBQXFDdEIsb0JBQW9CakIsa0JBQWtCLElBQzNFd0Msc0NBQXNDdEIscUJBQXFCbEIsa0JBQWtCLElBQzdFeUMscUNBQXFDeEIsb0JBQW9CdkQsa0JBQWtCLElBQzNFZ0Ysc0NBQXNDeEIscUJBQXFCeEQsa0JBQWtCLElBQzdFbUMsaUJBQWlCMEMsb0NBQ2pCeEMsa0JBQWtCeUMscUNBQ2xCVixjQUFjVyxvQ0FDZFYsZUFBZVcscUNBQXFDLEdBQUc7UUFFN0RWLElBQUFBLGFBQUksRUFBQyxDQUFDakM7WUFDSnNCLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ3RCO2dCQUNULE1BQU1rQyxrQkFBa0JILFlBQVlsRSxPQUFPLElBQ3JDc0Usa0JBQWtCQyxxQkFBcUJGLGlCQUFpQnBDO2dCQUU5RCxJQUFJcUMsb0JBQW9CLE1BQU07b0JBQzVCLE1BQU10RCxPQUFPbUQsY0FDUEssV0FBV0YsaUJBQ1hHLGNBQWNELFNBQVNFLFNBQVMsQ0FBQzFELE1BQU1pQixnQkFBZ0JFO29CQUU3RCxJQUFJc0MsYUFBYTt3QkFDZnRDLGdCQUFnQk8sTUFBTSxDQUFDbkQ7d0JBRXZCbUUseUJBQXlCO29CQUMzQjtnQkFDRjtZQUNGLEdBQUd2QjtRQUNMLEdBQUdBLGlCQUFpQjVDO1FBRXBCLElBQUltRSx3QkFBd0I7WUFDMUJuRSxRQUFRcUMsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUU0QiwyQkFBMkIsNENBQTRDLEVBQUVELDBCQUEwQixrQ0FBa0MsQ0FBQztRQUN6SztRQUVBLE9BQU9HO0lBQ1Q7SUFFQSxPQUFPcUIsT0FBTyxtQkFBbUI7SUFFakMsT0FBT0MsU0FBU0MsSUFBSSxFQUFFMUYsT0FBTyxFQUFFO1FBQzdCLElBQUkyRixvQkFBb0I7UUFFeEIsTUFBTSxFQUFFSCxJQUFJLEVBQUUsR0FBR0U7UUFFakIsSUFBSSxJQUFJLENBQUNGLElBQUksS0FBS0EsTUFBTTtZQUN0QkksSUFBQUEscUJBQVksRUFBQyxDQUFDRixNQUFNaEQsZ0JBQWdCRTtnQkFDbEMsTUFBTTVDLFVBQVU0QyxpQkFBa0IsR0FBRztnQkFFckNpRCxJQUFBQSxvQkFBVyxFQUFDLENBQUM3RjtvQkFDWCxNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHeUYsTUFDYmhGLHVCQUF1Qm9GLElBQUFBLHdDQUEyQixFQUFDN0YsUUFBUUQsVUFDM0RFLE9BQU9RLHNCQUNQUCxhQUFhNEYsSUFBQUEsOEJBQWtCLEVBQUNMLE9BQ2hDdEYsYUFBYTRGLG1DQUFtQ3RGLHNCQUFzQlYsVUFDdEVLLGtCQUFrQjRGLHdDQUF3Q3ZGLHNCQUFzQlYsVUFDaEY0QyxrQkFBa0I1QyxTQUNsQmtHLFdBQVc7d0JBQ1R4RDt3QkFDQUU7cUJBQ0Q7b0JBRVArQyxvQkFBb0IsSUFBSTdGLGlCQUFpQm9HLFVBQVVqRyxRQUFRQyxNQUFNQyxZQUFZQyxZQUFZQztnQkFDM0YsR0FBR0w7WUFDTCxHQUFHMEYsTUFBTTFGO1FBQ1g7UUFFQSxPQUFPMkY7SUFDVDtJQUVBLE9BQU9RLGNBQWNDLFNBQVMsRUFBRXBHLE9BQU8sRUFBRTtRQUN2QyxJQUFJa0MsbUJBQW1CO1FBRXZCLE1BQU14Qix1QkFBdUIwRixVQUFVNUYsdUJBQXVCO1FBRTlELElBQUlFLHlCQUF5QixNQUFNO1lBQ2pDMkYsSUFBQUEsZUFBTSxFQUFDLENBQUNyRztnQkFDTixNQUFNMEMsaUJBQWlCMUMsU0FDakI0QyxrQkFBa0I1QyxTQUFVLEdBQUc7Z0JBRXJDa0MsbUJBQW1Cb0UsSUFBQUEsaURBQXdDLEVBQUM1RixzQkFBc0JnQyxnQkFBZ0JFO1lBQ3BHLEdBQUc1QztRQUNMO1FBRUEsT0FBT2tDO0lBQ1Q7SUFFQSxPQUFPcUUsb0JBQW9COUUsSUFBSSxFQUFFd0QsUUFBUSxFQUFFdkMsY0FBYyxFQUFFRSxlQUFlLEVBQUU7UUFDMUUsTUFBTTVDLFVBQVU0QyxpQkFBa0IsR0FBRztRQUVyQ25CLE9BQU9DLElBQUFBLCtCQUFxQixFQUFDRCxNQUFNekIsVUFBVSxHQUFHO1FBRWhELElBQUlrQztRQUVKc0UsSUFBQUEsZ0JBQU8sRUFBQyxDQUFDOUQsZ0JBQWdCRTtZQUN2QixNQUFNNUMsVUFBVTRDLGlCQUFrQixHQUFHO1lBRXJDaUQsSUFBQUEsb0JBQVcsRUFBQyxDQUFDN0Y7Z0JBQ1gsTUFBTTRDLGtCQUFrQjVDLFNBQ2xCbUMseUJBQXlCc0UsSUFBQUEsaURBQXlDLEVBQUNoRixNQUFNd0QsV0FDekVoRixTQUFTa0Msd0JBQ1R6Qix1QkFBdUJvRixJQUFBQSx3Q0FBMkIsRUFBQzdGLFFBQVFEO2dCQUVqRWtDLG1CQUFtQm9FLElBQUFBLGlEQUF3QyxFQUFDNUYsc0JBQXNCZ0MsZ0JBQWdCRTtZQUNwRyxHQUFHNUM7UUFDTCxHQUFHMEMsZ0JBQWdCRTtRQUVuQixPQUFPVjtJQUNUO0FBQ0Y7QUFFQSxTQUFTOEMscUJBQXFCMEIsUUFBUSxFQUFFMUcsT0FBTztJQUM3QyxJQUFJaUYsV0FBVztJQUVmLE1BQU0xRCxlQUFlbUYsU0FBU3pGLGVBQWU7SUFFN0MsSUFBSU0saUJBQWlCLE1BQU07UUFDekIwRCxXQUFXakYsUUFBUTJHLDBCQUEwQixDQUFDcEY7SUFDaEQ7SUFFQSxPQUFPMEQ7QUFDVDtBQUVBLFNBQVNlLG1DQUFtQ3RGLG9CQUFvQixFQUFFVixPQUFPO0lBQ3ZFLE1BQU1ZLGlCQUFpQkYscUJBQXFCa0csaUJBQWlCLElBQ3ZEeEcsYUFBYUosUUFBUTZHLGtCQUFrQixDQUFDakc7SUFFOUMsT0FBT1I7QUFDVDtBQUVBLFNBQVM2Rix3Q0FBd0N2RixvQkFBb0IsRUFBRVYsT0FBTztJQUM1RSxNQUFNZSxzQkFBc0JMLHFCQUFxQm9HLHNCQUFzQixJQUNqRXpHLGtCQUFrQkwsUUFBUTZHLGtCQUFrQixDQUFDOUY7SUFFbkQsT0FBT1Y7QUFDVCJ9