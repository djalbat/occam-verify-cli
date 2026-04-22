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
            const forced = true;
            (0, _context.posit)((context)=>{
                (0, _context.ablate)((context)=>{
                    (0, _context.instantiate)((context)=>{
                        (0, _context.unserialises)((json, generalContext, specificContext)=>{
                            const { string } = json, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, generalContext), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, specificContext), contexts = [
                                generalContext,
                                specificContext
                            ];
                            termSubstitutionn = new TermSubstitution(contexts, string, node, breakPoint, targetTerm, replacementTerm);
                        }, json, context);
                    }, context);
                }, forced, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBwb3NpdCwgZWxpZGUsIGFibGF0ZSwgYWJsYXRlcywgbWFuaWZlc3QsIGF0dGVtcHRzLCByZWNvbmNpbGUsIGluc3RhbnRpYXRlLCB1bnNlcmlhbGlzZXMgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRhcmdldFRlcm0sIHJlcGxhY2VtZW50VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGFyZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRUZXJtO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0aGlzLnRhcmdldFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5nZXRWYXJpYWJsZU5vZGUoKTsgfVxuXG4gIGlzVHJpdmlhbCgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSA9IHRoaXMudGFyZ2V0VGVybS5pc0VxdWFsVG8odGhpcy5yZXBsYWNlbWVudFRlcm0pLFxuICAgICAgICAgIHRyaXZpYWwgPSB0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybTsgLy8vXG5cbiAgICByZXR1cm4gdHJpdmlhbDtcbiAgfVxuXG4gIG1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRUZXJtLm1hdGNoVmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlVGVybSh0ZXJtLCBjb250ZXh0KSB7XG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm1FcXVhbFRvVGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmlzRXF1YWxUbyh0ZXJtKSxcbiAgICAgICAgICBjb21wYXJlZFRvVGVybSA9IHJlcGxhY2VtZW50VGVybUVxdWFsVG9UZXJtOyAvLy9cblxuICAgIHJldHVybiBjb21wYXJlZFRvVGVybTtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFRlcm0uY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuZ2V0R2VuZXJhbENvbnRleHQoKSxcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHRoaXMuZ2V0U3BlY2lmaWNDb250ZXh0KCk7XG5cbiAgICAgIGF0dGVtcHRzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFRlcm1TaW5ndWxhciA9IHRoaXMudGFyZ2V0VGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0VGVybVNpbmd1bGFyKSB7XG4gICAgICBtYW5pZmVzdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBlbGlkZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhcmdldFRlcm0gPSB0aGlzLnRhcmdldFRlcm0udmFsaWRhdGUoY29udGV4dCwgKHRhcmdldFRlcm0sIGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHRhcmdldFRlcm0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0VGVybSA9IHRhcmdldFRlcm07XG5cbiAgICAgICAgICAgIHRhcmdldFRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRUZXJtU3RyaW5nID0gdGhpcy50YXJnZXRUZXJtLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtIGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgdGVybS4uLmApO1xuXG4gICAgZWxpZGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChyZXBsYWNlbWVudFRlcm0sIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuXG4gICAgICAgIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbixcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtVW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudFRlcm0oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50VGVybVVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGVybVVuaWZpZXMgPSB0aGlzLnVuaWZ5VGFyZ2V0VGVybShzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRUZXJtVW5pZmllcykge1xuICAgICAgICAgIGNvbnRleHQuY29tbWl0KCk7XG5cbiAgICAgICAgICBzdWJzdGl0dXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRhcmdldFRlcm0oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRUZXJtID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRUYXJnZXRUZXJtKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRUZXJtID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0VGFyZ2V0VGVybSgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxUZXJtID0gZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFRlcm0sIC8vL1xuICAgICAgICAgIHNwZWNpZmljVGVybSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uVGFyZ2V0VGVybTsgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSBnZW5lcmFsVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtID0gc3BlY2lmaWNUZXJtLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICB0YXJnZXRUZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlcGxhY2VtZW50VGVybShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0gPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50VGVybSgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRUZXJtID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRUZXJtKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsVGVybSA9IGdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0sIC8vL1xuICAgICAgICAgIHNwZWNpZmljVGVybSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IGdlbmVyYWxUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGdlbmVyYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSBzcGVjaWZpY1Rlcm0sICAvLy9cbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHJlcGxhY2VtZW50VGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VGVybVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb25uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGNvbnN0IGZvcmNlZCA9IHRydWU7XG5cbiAgICAgIHBvc2l0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICB1bnNlcmlhbGlzZXMoKGpzb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUZXJtID0gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcbiAgICAgICAgICAgIH0sIGpzb24sIGNvbnRleHQpO1xuICAgICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgICB9LCBmb3JjZWQsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnQuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZXMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGdlbmVyYWxDb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRUZXJtTm9kZSgpLFxuICAgICAgICB0YXJnZXRUZXJtID0gZ2VuZXJhbENvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRhcmdldFRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGFyZ2V0VGVybTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50VGVybU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gc3BlY2lmaWNDb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShyZXBsYWNlbWVudFRlcm1Ob2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0YXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGFyZ2V0VGVybSIsImdldFJlcGxhY2VtZW50VGVybSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFRlcm1Ob2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSIsImlzRXF1YWxUbyIsInRyaXZpYWwiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImNvbXBhcmVUZXJtIiwidGVybSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInJlcGxhY2VtZW50VGVybUVxdWFsVG9UZXJtIiwiY29tcGFyZWRUb1Rlcm0iLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImdlbmVyYWxDb250ZXh0IiwiZ2V0R2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRTcGVjaWZpY0NvbnRleHQiLCJhdHRlbXB0cyIsInRhcmdldFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50VGVybSIsImNvbW1pdCIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJtYW5pZmVzdCIsImVsaWRlIiwidmFsaWRhdGVzRm9yd2FyZHMiLCJ0YXJnZXRUZXJtU3RyaW5nIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwicmVjb25jaWxlIiwicmVwbGFjZW1lbnRUZXJtVW5pZmllcyIsInVuaWZ5UmVwbGFjZW1lbnRUZXJtIiwidGFyZ2V0VGVybVVuaWZpZXMiLCJ1bmlmeVRhcmdldFRlcm0iLCJnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0IiwiZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFRlcm0iLCJzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldFRlcm0iLCJnZW5lcmFsVGVybSIsInNwZWNpZmljVGVybSIsInRlcm1Ob2RlIiwidmFyaWFibGUiLCJ2YXJpYWJsZUZyb21UZXJtTm9kZSIsInRlcm1VbmlmaWVzIiwidW5pZnlUZXJtIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50VGVybSIsInNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRUZXJtIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInRlcm1TdWJzdGl0dXRpb25uIiwiZm9yY2VkIiwicG9zaXQiLCJhYmxhdGUiLCJpbnN0YW50aWF0ZSIsInVuc2VyaWFsaXNlcyIsImluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiIsImJyZWFrUG9pbnRGcm9tSlNPTiIsInRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJjb250ZXh0cyIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsImFibGF0ZXMiLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwiZ2V0VGFyZ2V0VGVybU5vZGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJnZXRSZXBsYWNlbWVudFRlcm1Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztxRUFWeUI7MEJBRUY7NEJBQ1k7MEJBQ0c7NkJBQ007eUJBQ2E7d0JBQ0M7eUJBQzhDOzs7Ozs7TUFFeEcsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx5QkFBeUJDLHFCQUFZO0lBQy9ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxlQUFlLENBQUU7UUFDMUUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO0lBQ3pCO0lBRUFDLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDRixVQUFVO0lBQ3hCO0lBRUFHLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0YsZUFBZTtJQUM3QjtJQUVBRywwQkFBMEI7UUFDeEIsTUFBTU4sT0FBTyxJQUFJLENBQUNPLE9BQU8sSUFDbkJDLHVCQUF1QlIsTUFBTyxHQUFHO1FBRXZDLE9BQU9RO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsaUJBQWlCLElBQUksQ0FBQ1IsVUFBVSxDQUFDSyxPQUFPLElBQ3hDSSxhQUFhRCxnQkFBZ0IsR0FBRztRQUV0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