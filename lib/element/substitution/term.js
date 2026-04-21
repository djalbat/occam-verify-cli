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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBwb3NpdCwgYWJsYXRlLCBhYmxhdGVzLCBtYW5pZmVzdCwgYXR0ZW1wdHMsIHJlY29uY2lsZSwgc2VxdWVzdGVyLCBpbnN0YW50aWF0ZSwgdW5zZXJpYWxpc2VzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBUZXJtU3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy50YXJnZXRUZXJtID0gdGFyZ2V0VGVybTtcbiAgICB0aGlzLnJlcGxhY2VtZW50VGVybSA9IHJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRhcmdldFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0VGVybTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGhpcy50YXJnZXRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJnZXROb2RlID0gdGFyZ2V0VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRlcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBnZXRWYXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnRhcmdldFRlcm0uZ2V0VmFyaWFibGVOb2RlKCk7IH1cblxuICBpc1RyaXZpYWwoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0gPSB0aGlzLnRhcmdldFRlcm0uaXNFcXVhbFRvKHRoaXMucmVwbGFjZW1lbnRUZXJtKSxcbiAgICAgICAgICB0cml2aWFsID0gdGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRyaXZpYWw7XG4gIH1cblxuICBtYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5tYXRjaFZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtRXF1YWxUb1Rlcm0gPSB0aGlzLnJlcGxhY2VtZW50VGVybS5pc0VxdWFsVG8odGVybSksXG4gICAgICAgICAgY29tcGFyZWRUb1Rlcm0gPSByZXBsYWNlbWVudFRlcm1FcXVhbFRvVGVybTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb1Rlcm07XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRUZXJtLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSB0aGlzLmdldFNwZWNpZmljQ29udGV4dCgpO1xuXG4gICAgICBhdHRlbXB0cygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCByZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcykge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRUZXJtU2luZ3VsYXIgPSB0aGlzLnRhcmdldFRlcm0uaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFRlcm1TaW5ndWxhcikge1xuICAgICAgbWFuaWZlc3QoKGNvbnRleHQpID0+IHtcbiAgICAgICAgc2VxdWVzdGVyKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0VGVybSA9IHRoaXMudGFyZ2V0VGVybS52YWxpZGF0ZShjb250ZXh0LCAodGFyZ2V0VGVybSwgY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVzRm9yd2FyZHM7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0VGVybSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRUZXJtID0gdGFyZ2V0VGVybTtcblxuICAgICAgICAgICAgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFRlcm1TdHJpbmcgPSB0aGlzLnRhcmdldFRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG5cbiAgICBzZXF1ZXN0ZXIoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChyZXBsYWNlbWVudFRlcm0sIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuXG4gICAgICAgIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbixcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtVW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudFRlcm0oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50VGVybVVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGVybVVuaWZpZXMgPSB0aGlzLnVuaWZ5VGFyZ2V0VGVybShzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRUZXJtVW5pZmllcykge1xuICAgICAgICAgIGNvbnRleHQuY29tbWl0KCk7XG5cbiAgICAgICAgICBzdWJzdGl0dXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRhcmdldFRlcm0oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFRlcm1VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24sXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRUZXJtID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRUYXJnZXRUZXJtKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRUZXJtID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0VGFyZ2V0VGVybSgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxUZXJtID0gZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFRlcm0sIC8vL1xuICAgICAgICAgIHNwZWNpZmljVGVybSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uVGFyZ2V0VGVybTsgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGUgPSBnZW5lcmFsVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlRnJvbVRlcm1Ob2RlKHRlcm1Ob2RlLCBnZW5lcmFsQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZXJtID0gc3BlY2lmaWNUZXJtLCAgLy8vXG4gICAgICAgICAgICAgIHRlcm1VbmlmaWVzID0gdmFyaWFibGUudW5pZnlUZXJtKHRlcm0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0ZXJtVW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICB0YXJnZXRUZXJtVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVJlcGxhY2VtZW50VGVybShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCB0ZXJtLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFNwZWNpZmljQ29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0gPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50VGVybSgpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRUZXJtID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRUZXJtKCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsVGVybSA9IGdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0sIC8vL1xuICAgICAgICAgIHNwZWNpZmljVGVybSA9IHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZSA9IGdlbmVyYWxUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGdlbmVyYWxDb250ZXh0KTtcblxuICAgICAgaWYgKHZhcmlhYmxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlcm0gPSBzcGVjaWZpY1Rlcm0sICAvLy9cbiAgICAgICAgICAgICAgdGVybVVuaWZpZXMgPSB2YXJpYWJsZS51bmlmeVRlcm0odGVybSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRlcm1VbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHJlcGxhY2VtZW50VGVybVVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFRlcm1VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50VGVybVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiVGVybVN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb25uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGNvbnN0IGZvcmNlZCA9IHRydWU7XG5cbiAgICAgIHBvc2l0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICB1bnNlcmlhbGlzZXMoKGpzb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRUZXJtID0gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm1Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcbiAgICAgICAgICAgIH0sIGpzb24sIGNvbnRleHQpO1xuICAgICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgICB9LCBmb3JjZWQsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHRlcm1TdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnQuZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKTtcblxuICAgIGlmICh0ZXJtU3Vic3RpdHV0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgdGVybSA9IHN0cmlwQnJhY2tldHNGcm9tVGVybSh0ZXJtLCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZXMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdmFyaWFibGVGcm9tVGVybU5vZGUodGVybU5vZGUsIGdlbmVyYWxDb250ZXh0KSB7XG4gIGxldCB2YXJpYWJsZSA9IG51bGw7XG5cbiAgY29uc3QgdmFyaWFibGVOb2RlID0gdGVybU5vZGUuZ2V0VmFyaWFibGVOb2RlKCk7XG5cbiAgaWYgKHZhcmlhYmxlTm9kZSAhPT0gbnVsbCkge1xuICAgIHZhcmlhYmxlID0gZ2VuZXJhbENvbnRleHQuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcbiAgfVxuXG4gIHJldHVybiB2YXJpYWJsZTtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRUZXJtTm9kZSgpLFxuICAgICAgICB0YXJnZXRUZXJtID0gZ2VuZXJhbENvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRhcmdldFRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGFyZ2V0VGVybTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRUZXJtTm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50VGVybU5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gc3BlY2lmaWNDb250ZXh0LmZpbmRUZXJtQnlUZXJtTm9kZShyZXBsYWNlbWVudFRlcm1Ob2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtO1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlRlcm1TdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJ0YXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGFyZ2V0VGVybSIsImdldFJlcGxhY2VtZW50VGVybSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFRlcm1Ob2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRWYXJpYWJsZU5vZGUiLCJpc1RyaXZpYWwiLCJ0YXJnZXRUZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybSIsImlzRXF1YWxUbyIsInRyaXZpYWwiLCJtYXRjaFZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsImNvbXBhcmVUZXJtIiwidGVybSIsInN0cmlwQnJhY2tldHNGcm9tVGVybSIsInJlcGxhY2VtZW50VGVybUVxdWFsVG9UZXJtIiwiY29tcGFyZWRUb1Rlcm0iLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJ0ZXJtU3Vic3RpdHV0aW9uIiwidGVybVN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImdlbmVyYWxDb250ZXh0IiwiZ2V0R2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRTcGVjaWZpY0NvbnRleHQiLCJhdHRlbXB0cyIsInRhcmdldFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50VGVybSIsImNvbW1pdCIsInN1YnN0aXR1dGlvbiIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm1TaW5ndWxhciIsImlzU2luZ3VsYXIiLCJtYW5pZmVzdCIsInNlcXVlc3RlciIsInZhbGlkYXRlc0ZvcndhcmRzIiwidGFyZ2V0VGVybVN0cmluZyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInJlY29uY2lsZSIsInJlcGxhY2VtZW50VGVybVVuaWZpZXMiLCJ1bmlmeVJlcGxhY2VtZW50VGVybSIsInRhcmdldFRlcm1VbmlmaWVzIiwidW5pZnlUYXJnZXRUZXJtIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsImdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRUZXJtIiwic3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRUZXJtIiwiZ2VuZXJhbFRlcm0iLCJzcGVjaWZpY1Rlcm0iLCJ0ZXJtTm9kZSIsInZhcmlhYmxlIiwidmFyaWFibGVGcm9tVGVybU5vZGUiLCJ0ZXJtVW5pZmllcyIsInVuaWZ5VGVybSIsImdlbmVyYWxTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQiLCJzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudFRlcm0iLCJzcGVjaWZpY1N1YnN0aXR1dGlvblJlcGxhY2VtZW50VGVybSIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJ0ZXJtU3Vic3RpdHV0aW9ubiIsImZvcmNlZCIsInBvc2l0IiwiYWJsYXRlIiwiaW5zdGFudGlhdGUiLCJ1bnNlcmlhbGlzZXMiLCJpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24iLCJicmVha1BvaW50RnJvbUpTT04iLCJ0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiY29udGV4dHMiLCJmcm9tU3RhdGVtZW50Iiwic3RhdGVtZW50IiwidGVybVN1YnN0aXR1dGlvbkZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSIsImZyb21UZXJtQW5kVmFyaWFibGUiLCJhYmxhdGVzIiwidGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsImdldFRhcmdldFRlcm1Ob2RlIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwiZ2V0UmVwbGFjZW1lbnRUZXJtTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7cUVBVnlCOzBCQUVGOzRCQUNZOzBCQUNHOzZCQUNNO3lCQUNhO3dCQUNDO3lCQUNrRDs7Ozs7O01BRTVHLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMseUJBQXlCQyxxQkFBWTtJQUMvRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsZUFBZSxDQUFFO1FBQzFFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtJQUN6QjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNGLGVBQWU7SUFDN0I7SUFFQUcsMEJBQTBCO1FBQ3hCLE1BQU1OLE9BQU8sSUFBSSxDQUFDTyxPQUFPLElBQ25CQyx1QkFBdUJSLE1BQU8sR0FBRztRQUV2QyxPQUFPUTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLGlCQUFpQixJQUFJLENBQUNSLFVBQVUsQ0FBQ0ssT0FBTyxJQUN4Q0ksYUFBYUQs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