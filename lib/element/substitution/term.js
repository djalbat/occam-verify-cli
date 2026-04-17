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
const _breakPoint = require("../../utilities/breakPoint");
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
            (0, _context.unserialises)((json, generalContext, specificContext)=>{
                const context = specificContext; ///
                (0, _context.instantiate)((context)=>{
                    const { string } = json, specificContext = context, contexts = [
                        generalContext,
                        specificContext
                    ], termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), node = termSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), targetTerm = targetTermFromTermSubstitutionNode(termSubstitutionNode, context), replacementTerm = replacementTermFromTermSubstitutionNode(termSubstitutionNode, context);
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
function targetTermFromTermSubstitutionNode(termSubstitutionNode, context) {
    const targetTermNode = termSubstitutionNode.getTargetTermNode(), targetTerm = context.findTermByTermNode(targetTermNode);
    return targetTerm;
}
function replacementTermFromTermSubstitutionNode(termSubstitutionNode, context) {
    const replacementTermNode = termSubstitutionNode.getReplacementTermNode(), replacementTerm = context.findTermByTermNode(replacementTermNode);
    return replacementTerm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVRlcm0gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBhYmxhdGUsIGFibGF0ZXMsIG1hbmlmZXN0LCBhdHRlbXB0cywgZGVzY2VuZCwgaW5zdGFudGlhdGUsIHVuc2VyaWFsaXNlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgVGVybVN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMudGFyZ2V0VGVybSA9IHRhcmdldFRlcm07XG4gICAgdGhpcy5yZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm07XG4gIH1cblxuICBnZXRUYXJnZXRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFRlcm07XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFRlcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IHRoaXMudGFyZ2V0VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgdGVyZ2V0Tm9kZSA9IHRhcmdldFRlcm1Ob2RlOyAvLy9cblxuICAgIHJldHVybiB0ZXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0aGlzLnJlcGxhY2VtZW50VGVybS5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRUZXJtLmdldFZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtID0gdGhpcy50YXJnZXRUZXJtLmlzRXF1YWxUbyh0aGlzLnJlcGxhY2VtZW50VGVybSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgbWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldFRlcm0ubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVUZXJtKHRlcm0sIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybUVxdWFsVG9UZXJtID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uaXNFcXVhbFRvKHRlcm0pLFxuICAgICAgICAgIGNvbXBhcmVkVG9UZXJtID0gcmVwbGFjZW1lbnRUZXJtRXF1YWxUb1Rlcm07IC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVkVG9UZXJtO1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0VGVybS5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gdGhpcy5nZXRTcGVjaWZpY0NvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdHMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VGVybVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChyZXBsYWNlbWVudFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFRlcm0oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24ncyB0YXJnZXQgdGVybS4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0VGVybVNpbmd1bGFyID0gdGhpcy50YXJnZXRUZXJtLmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRUZXJtU2luZ3VsYXIpIHtcbiAgICAgIG1hbmlmZXN0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRUZXJtID0gdGhpcy50YXJnZXRUZXJtLnZhbGlkYXRlKGNvbnRleHQsICh0YXJnZXRUZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0ZXNGb3J3YXJkcyA9IHRydWU7XG5cbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh0YXJnZXRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuXG4gICAgICAgICAgICB0YXJnZXRUZXJtVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdGFyZ2V0VGVybVN0cmluZyA9IHRoaXMudGFyZ2V0VGVybS5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3RhcmdldFRlcm1TdHJpbmd9JyB0YXJnZXQgdGVybSBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0VGVybVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsIChyZXBsYWNlbWVudFRlcm0pID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRUZXJtICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuXG4gICAgICAgIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1TdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICB1bnNlcmlhbGlzZXMoKGpzb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVUZXJtU3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRlcm1TdWJzdGl0dXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICB0YXJnZXRUZXJtID0gdGFyZ2V0VGVybUZyb21UZXJtU3Vic3RpdHV0aW9uTm9kZSh0ZXJtU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgdGFyZ2V0VGVybSwgcmVwbGFjZW1lbnRUZXJtKTtcbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgdGVybVN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudC5nZXRUZXJtU3Vic3RpdHV0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHRlcm1TdWJzdGl0dXRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlcygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvblN0cmluZyA9IHRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlKHRlcm0sIHZhcmlhYmxlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gdGVybVN1YnN0aXR1dGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb24gPSB0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFRlcm1Ob2RlID0gdGVybVN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0VGVybU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHRhcmdldFRlcm1Ob2RlKTtcblxuICByZXR1cm4gdGFyZ2V0VGVybTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlKHRlcm1TdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50VGVybU5vZGUgPSB0ZXJtU3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFRlcm1Ob2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IGNvbnRleHQuZmluZFRlcm1CeVRlcm1Ob2RlKHJlcGxhY2VtZW50VGVybU5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFRlcm07XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiVGVybVN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInRhcmdldFRlcm0iLCJyZXBsYWNlbWVudFRlcm0iLCJnZXRUYXJnZXRUZXJtIiwiZ2V0UmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwidGVybVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0VGVybU5vZGUiLCJ0ZXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRUZXJtTm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImdldFZhcmlhYmxlTm9kZSIsImlzVHJpdmlhbCIsInRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtIiwiaXNFcXVhbFRvIiwidHJpdmlhbCIsIm1hdGNoVmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwiY29tcGFyZVRlcm0iLCJ0ZXJtIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtIiwicmVwbGFjZW1lbnRUZXJtRXF1YWxUb1Rlcm0iLCJjb21wYXJlZFRvVGVybSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsInRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2VuZXJhbENvbnRleHQiLCJnZXRHZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImdldFNwZWNpZmljQ29udGV4dCIsImF0dGVtcHRzIiwidGFyZ2V0VGVybVZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0VGVybSIsInJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRUZXJtIiwiY29tbWl0Iiwic3Vic3RpdHV0aW9uIiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0VGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsIm1hbmlmZXN0IiwiZGVzY2VuZCIsInZhbGlkYXRlc0ZvcndhcmRzIiwidGFyZ2V0VGVybVN0cmluZyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJ0ZXJtU3Vic3RpdHV0aW9ubiIsInVuc2VyaWFsaXNlcyIsImluc3RhbnRpYXRlIiwiY29udGV4dHMiLCJpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24iLCJicmVha1BvaW50RnJvbUpTT04iLCJ0YXJnZXRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRUZXJtRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudCIsInN0YXRlbWVudCIsImFibGF0ZSIsInRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tVGVybUFuZFZhcmlhYmxlIiwidmFyaWFibGUiLCJhYmxhdGVzIiwidGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJnZXRUYXJnZXRUZXJtTm9kZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsImdldFJlcGxhY2VtZW50VGVybU5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3FFQVZ5QjswQkFFRjswQkFDZTs0QkFDSDs2QkFDUzt5QkFDYTt3QkFDQzt5QkFDOEI7Ozs7OztNQUV4RixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLHlCQUF5QkMscUJBQVk7SUFDL0QsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxVQUFV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