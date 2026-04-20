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
                    (0, _context.unserialises)((json, generalContext, specificContext)=>{
                        const context = specificContext; ///
                        (0, _context.instantiate)((context)=>{
                            const { string } = json, specificContext = context, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, generalContext), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, specificContext), contexts = [
                                generalContext,
                                specificContext
                            ];
                            termSubstitutionn = new TermSubstitution(contexts, string, node, breakPoint, targetTerm, replacementTerm);
                        }, context);
                    }, json, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBwb3NpdCwgYWJsYXRlLCBhYmxhdGVzLCBtYW5pZmVzdCwgYXR0ZW1wdHMsIHJlY29uY2lsZSwgc2VxdWVzdGVyLCBpbnN0YW50aWF0ZSwgdW5zZXJpYWxpc2VzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50YXJnZXRUZXJtID0gdGFyZ2V0VGVybTtcbiAgICB0aGlzLnJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRhcmdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VGVybTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGhpcy50YXJnZXRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnRhcmdldFRlcm0uZ2V0VmFyaWFibGVOb2RlKCk7IH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0gPSB0aGlzLnRhcmdldFRlcm0uaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRUZXJtKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtRXF1YWxUb1Rlcm0gPSB0aGlzLnJlcGxhY2VtZW50VGVybS5pc0VxdWFsVG8odGVybSksXG4gICAgICAgICAgY29tcGFyZWRUb1Rlcm0gPSByZXBsYWNlbWVudFRlcm1FcXVhbFRvVGVybTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb1Rlcm07XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRUZXJtLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSB0aGlzLmdldFNwZWNpZmljQ29udGV4dCgpO1xuXG4gICAgICBhdHRlbXB0cygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcykge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRUZXJtU2luZ3VsYXIgPSB0aGlzLnRhcmdldFRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFRlcm1TaW5ndWxhcikge1xuICAgICAgbWFuaWZlc3QoKGNvbnRleHQpID0+IHtcbiAgICAgICAgc2VxdWVzdGVyKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0VGVybSA9IHRoaXMudGFyZ2V0VGVybS52YWxpZGF0ZShjb250ZXh0LCAodGFyZ2V0VGVybSwgY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0VGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRUZXJtID0gdGFyZ2V0VGVybTtcblxuICAgICAgICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFRlcm1TdHJpbmcgPSB0aGlzLnRhcmdldFRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG5cbiAgICBzZXF1ZXN0ZXIoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChyZXBsYWNlbWVudFRlcm0sIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuXG4gICAgICAgIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbixcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtVW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudFRlcm0oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50VGVybVVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGVybVVuaWZpZXMgPSB0aGlzLnVuaWZ5VGFyZ2V0VGVybShzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRUZXJtVW5pZmllcykge1xuICAgICAgICAgIGNvbnRleHQuY29tbWl0KCk7XG5cbiAgICAgICAgICBzdWJzdGl0dXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRhcmdldFRlcm0oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRUZXJtID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRUYXJnZXRUZXJtKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRUZXJtID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0VGFyZ2V0VGVybSgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxUZXJtID0gZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFRlcm0sIC8vL1xuICAgICAgICAgIHNwZWNpZmljVGVybSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uVGFyZ2V0VGVybTsgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSBnZW5lcmFsVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtID0gc3BlY2lmaWNUZXJtLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICB0YXJnZXRUZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlcGxhY2VtZW50VGVybShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0gPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50VGVybSgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRUZXJtID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRUZXJtKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsVGVybSA9IGdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0sIC8vL1xuICAgICAgICAgIHNwZWNpZmljVGVybSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IGdlbmVyYWxUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGdlbmVyYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSBzcGVjaWZpY1Rlcm0sICAvLy9cbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHJlcGxhY2VtZW50VGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VGVybVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb25uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGNvbnN0IGZvcmNlZCA9IHRydWU7XG5cbiAgICAgIHBvc2l0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIHVuc2VyaWFsaXNlcygoanNvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBub2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VGVybSA9IHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBjb250ZXh0cyA9IFtcbiAgICAgICAgICAgICAgICAgICAgICBnZW5lcmFsQ29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9ubiA9IG5ldyBUZXJtU3Vic3RpdHV0aW9uKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHRhcmdldFRlcm0sIHJlcGxhY2VtZW50VGVybSk7XG4gICAgICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICAgICAgfSwgZm9yY2VkLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50LmdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCk7XG5cbiAgICBpZiAodGVybVN1YnN0aXR1dGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCkge1xuICBsZXQgdmFyaWFibGUgPSBudWxsO1xuXG4gIGNvbnN0IHZhcmlhYmxlTm9kZSA9IHRlcm1Ob2RlLmdldFZhcmlhYmxlTm9kZSgpO1xuXG4gIGlmICh2YXJpYWJsZU5vZGUgIT09IG51bGwpIHtcbiAgICB2YXJpYWJsZSA9IGdlbmVyYWxDb250ZXh0LmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSk7XG4gIH1cblxuICByZXR1cm4gdmFyaWFibGU7XG59XG5cbmZ1bmN0aW9uIHRhcmdldFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IGdlbmVyYWxDb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZSh0YXJnZXRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFRlcm07XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgc3BlY2lmaWNDb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFRlcm1Ob2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IHNwZWNpZmljQ29udGV4dC5maW5kVGVybUJ5VGVybU5vZGUocmVwbGFjZW1lbnRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50VGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwidGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybSIsImdldFRhcmdldFRlcm0iLCJnZXRSZXBsYWNlbWVudFRlcm0iLCJnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJ0ZXJtU3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRUZXJtTm9kZSIsInRlcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFRlcm1Ob2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0VmFyaWFibGVOb2RlIiwiaXNUcml2aWFsIiwidGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0iLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwibWF0Y2hWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJjb21wYXJlVGVybSIsInRlcm0iLCJzdHJpcEJyYWNrZXRzRnJvbVRlcm0iLCJyZXBsYWNlbWVudFRlcm1FcXVhbFRvVGVybSIsImNvbXBhcmVkVG9UZXJtIiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwidGVybVN1YnN0aXR1dGlvbiIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiYXR0ZW1wdHMiLCJ0YXJnZXRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFRlcm0iLCJjb21taXQiLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJ0YXJnZXRUZXJtU2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwibWFuaWZlc3QiLCJzZXF1ZXN0ZXIiLCJ2YWxpZGF0ZXNGb3J3YXJkcyIsInRhcmdldFRlcm1TdHJpbmciLCJ1bmlmeVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmciLCJyZWNvbmNpbGUiLCJyZXBsYWNlbWVudFRlcm1VbmlmaWVzIiwidW5pZnlSZXBsYWNlbWVudFRlcm0iLCJ0YXJnZXRUZXJtVW5pZmllcyIsInVuaWZ5VGFyZ2V0VGVybSIsImdlbmVyYWxTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsInNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQiLCJnZW5lcmFsU3Vic3RpdHV0aW9uVGFyZ2V0VGVybSIsInNwZWNpZmljU3Vic3RpdHV0aW9uVGFyZ2V0VGVybSIsImdlbmVyYWxUZXJtIiwic3BlY2lmaWNUZXJtIiwidGVybU5vZGUiLCJ2YXJpYWJsZSIsInZhcmlhYmxlRnJvbVRlcm1Ob2RlIiwidGVybVVuaWZpZXMiLCJ1bmlmeVRlcm0iLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRUZXJtIiwic3BlY2lmaWNTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0iLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwidGVybVN1YnN0aXR1dGlvbm4iLCJmb3JjZWQiLCJwb3NpdCIsImFibGF0ZSIsInVuc2VyaWFsaXNlcyIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uIiwiYnJlYWtQb2ludEZyb21KU09OIiwidGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImNvbnRleHRzIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsInRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tVGVybUFuZFZhcmlhYmxlIiwiYWJsYXRlcyIsInRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJnZXRUYXJnZXRUZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsImdldFJlcGxhY2VtZW50VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3FFQVZ5QjswQkFFRjs0QkFDWTswQkFDRzs2QkFDTTt5QkFDYTt3QkFDQzt5QkFDa0Q7Ozs7OztNQUU1RyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHlCQUF5QkMscUJBQVk7SUFDL0QsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLGVBQWUsQ0FBRTtRQUMxRSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7SUFDekI7SUFFQUMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNGLFVBQVU7SUFDeEI7SUFFQUcscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDRixlQUFlO0lBQzdCO0lBRUFHLDBCQUEwQjtRQUN4QixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMs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