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
const _context = require("../../utilities/context");
const _brackets = require("../../utilities/brackets");
const _string = require("../../utilities/string");
const _instantiate = require("../../process/instantiate");
const _element = require("../../utilities/element");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class TermSubstitution extends _substitution.default {
    constructor(context, string, node, targetTerm, replacementTerm){
        super(context, string, node);
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
    getVariableIdentifier() {
        return this.targetTerm.getVariableIdentifier();
    }
    compareVariableIdentifier(variableIdentifier) {
        return this.targetTerm.compareVariableIdentifier(variableIdentifier);
    }
    isTrivial() {
        const targetTermEqualToReplacementTerm = this.targetTerm.isEqualTo(this.replacementTerm), trivial = targetTermEqualToReplacementTerm; ///
        return trivial;
    }
    compareTerm(term, context) {
        term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
        const termEqualToReplacementTerm = this.replacementTerm.isEqualTo(term), comparedToTerm = termEqualToReplacementTerm; ///
        return comparedToTerm;
    }
    compareParameter(parameter) {
        const targetTermComparesToParameter = this.targetTerm.compareParameter(parameter), comparesToParameter = targetTermComparesToParameter; ///
        return comparesToParameter;
    }
    validate(generalContext, specificContext) {
        let termSubstitution = null;
        const context = this.getContext();
        specificContext = context; ///
        const termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term substitution...`);
        const validSubstitution = this.findValidSubstiution(context);
        if (validSubstitution) {
            termSubstitution = validSubstitution; ///
            context.debug(`...the '${termSubstitutionString}' term substitution is already valid.`);
        } else {
            let validates = false;
            const targetTermValidates = this.validateTargetTerm(generalContext, specificContext);
            if (targetTermValidates) {
                const replacementTermValidates = this.validateReplacementTerm(generalContext, specificContext);
                if (replacementTermValidates) {
                    validates = true;
                }
            }
            if (validates) {
                const substitution = this; ///
                termSubstitution = substitution; ///
                context.addSubstitution(substitution);
                context.debug(`...validated the '${termSubstitutionString}' term substitution.`);
            }
        }
        return termSubstitution;
    }
    validateTargetTerm(generalContext, specificContext) {
        let targetTermValidates = false;
        const context = generalContext, targetTermString = this.targetTerm.getString(), termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term subtitution's '${targetTermString}' target term...`);
        const targetTermSingular = this.targetTerm.isSingular();
        if (targetTermSingular) {
            const targetTerm = this.targetTerm.validate(context, ()=>{
                const validatesForwards = true;
                return validatesForwards;
            });
            if (targetTerm !== null) {
                this.targetTerm = targetTerm;
                targetTermValidates = true;
            }
        } else {
            context.debug(`The '${termSubstitutionString}' term subtitution's '${targetTermString}' target term is not singular.`);
        }
        if (targetTermValidates) {
            context.debug(`...validated the '${termSubstitutionString}' term subtitution's '${targetTermString}' target term...`);
        }
        return targetTermValidates;
    }
    validateReplacementTerm(generalContext, specificContext) {
        let replacementTermValidates = false;
        const context = specificContext, replacementTermString = this.replacementTerm.getString(), termSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${termSubstitutionString}' term subtitution's '${replacementTermString}' replacement term...`);
        const replacementTerm = this.replacementTerm.validate(context, ()=>{
            const validatesForwards = true;
            return validatesForwards;
        });
        if (replacementTerm !== null) {
            this.replacementTerm = replacementTerm;
            replacementTermValidates = true;
        }
        if (replacementTermValidates) {
            context.debug(`...validated the '${termSubstitutionString}' term subtitution's '${replacementTermString}' replacement term...`);
        }
        return replacementTermValidates;
    }
    static name = "TermSubstitution";
    static fromJSON(json, context) {
        let termSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.literally)((context)=>{
                const { string } = json, frameSubstitutionNode = (0, _instantiate.instantiateFrameSubstitution)(string, context), node = frameSubstitutionNode, targetTerm = targetTermFromFrameSubstitutionNode(frameSubstitutionNode, context), replacementTerm = replacementTermFromFrameSubstitutionNode(frameSubstitutionNode, context);
                context = null;
                termSubstitutionn = new TermSubstitution(context, string, node, targetTerm, replacementTerm);
            }, context);
        }
        return termSubstitutionn;
    }
    static fromStatement(statement, context) {
        const statementNode = statement.getNode(), termSubstitution = (0, _element.termSubstitutionFromStatementNode)(statementNode, context);
        return termSubstitution;
    }
    static fromTermAndVariable(term, variable, context) {
        term = (0, _brackets.stripBracketsFromTerm)(term, context); ///
        return (0, _context.literally)((context)=>{
            const termSubstitutionString = (0, _string.termSubstitutionStringFromTermAndVariable)(term, variable), string = termSubstitutionString, termSubstitutionNode = (0, _instantiate.instantiateTermSubstitution)(string, context), termSubstitution = (0, _element.termSubstitutionFromTermSubstitutionNode)(termSubstitutionNode, context);
            return termSubstitution;
        }, context);
    }
});
function targetTermFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const targetTermNode = frameSubstitutionNode.getTargetFrameNode(), targetTerm = context.findFrameByFrameNode(targetTermNode);
    return targetTerm;
}
function replacementTermFromFrameSubstitutionNode(frameSubstitutionNode, context) {
    const replacementTermNode = frameSubstitutionNode.getReplacementFrameNode(), replacementTerm = context.findFrameByFrameNode(replacementTermNode);
    return replacementTerm;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi90ZXJtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU3Vic3RpdHV0aW9uIGZyb20gXCIuLi9zdWJzdGl0dXRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tVGVybSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IHRlcm1TdWJzdGl0dXRpb25TdHJpbmdGcm9tVGVybUFuZFZhcmlhYmxlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24sIGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB0ZXJtU3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudE5vZGUsIHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFRlcm1TdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldFRlcm0sIHJlcGxhY2VtZW50VGVybSkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuICAgIHRoaXMucmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtO1xuICB9XG5cbiAgZ2V0VGFyZ2V0VGVybSgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRUZXJtO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRUZXJtKCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50VGVybTtcbiAgfVxuXG4gIGdldFRlcm1TdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0VGVybU5vZGUgPSB0aGlzLnRhcmdldFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRlcmdldE5vZGUgPSB0YXJnZXRUZXJtTm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGVyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gdGhpcy5yZXBsYWNlbWVudFRlcm0uZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50VGVybU5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldFZhcmlhYmxlSWRlbnRpZmllcigpIHsgcmV0dXJuIHRoaXMudGFyZ2V0VGVybS5nZXRWYXJpYWJsZUlkZW50aWZpZXIoKTsgfVxuXG4gIGNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7IHJldHVybiB0aGlzLnRhcmdldFRlcm0uY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpOyB9XG5cbiAgaXNUcml2aWFsKCkge1xuICAgIGNvbnN0IHRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtID0gdGhpcy50YXJnZXRUZXJtLmlzRXF1YWxUbyh0aGlzLnJlcGxhY2VtZW50VGVybSksXG4gICAgICAgICAgdHJpdmlhbCA9IHRhcmdldFRlcm1FcXVhbFRvUmVwbGFjZW1lbnRUZXJtOyAvLy9cblxuICAgIHJldHVybiB0cml2aWFsO1xuICB9XG5cbiAgY29tcGFyZVRlcm0odGVybSwgY29udGV4dCkge1xuICAgIHRlcm0gPSBzdHJpcEJyYWNrZXRzRnJvbVRlcm0odGVybSwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgdGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0gPSB0aGlzLnJlcGxhY2VtZW50VGVybS5pc0VxdWFsVG8odGVybSksXG4gICAgICAgICAgY29tcGFyZWRUb1Rlcm0gPSB0ZXJtRXF1YWxUb1JlcGxhY2VtZW50VGVybTsgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZWRUb1Rlcm07XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFRlcm1Db21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRUZXJtLmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0VGVybUNvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRhcmdldFRlcm1WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHRhcmdldFRlcm1WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnN0aXR1dGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFRlcm1WYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgdGFyZ2V0VGVybVN0cmluZyA9IHRoaXMudGFyZ2V0VGVybS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3VidGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFRlcm1TaW5ndWxhciA9IHRoaXMudGFyZ2V0VGVybS5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0VGVybVNpbmd1bGFyKSB7XG4gICAgICBjb25zdCB0YXJnZXRUZXJtID0gdGhpcy50YXJnZXRUZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVzRm9yd2FyZHMgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiB2YWxpZGF0ZXNGb3J3YXJkcztcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodGFyZ2V0VGVybSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRhcmdldFRlcm0gPSB0YXJnZXRUZXJtO1xuXG4gICAgICAgIHRhcmdldFRlcm1WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGVybVN1YnN0aXR1dGlvblN0cmluZ30nIHRlcm0gc3VidGl0dXRpb24ncyAnJHt0YXJnZXRUZXJtU3RyaW5nfScgdGFyZ2V0IHRlcm0gaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRUZXJtVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3Rlcm1TdWJzdGl0dXRpb25TdHJpbmd9JyB0ZXJtIHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0VGVybVN0cmluZ30nIHRhcmdldCB0ZXJtLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFRlcm1WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50VGVybShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50VGVybVN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLmdldFN0cmluZygpLFxuICAgICAgICAgIHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcblxuICAgIGNvbnN0IHJlcGxhY2VtZW50VGVybSA9IHRoaXMucmVwbGFjZW1lbnRUZXJtLnZhbGlkYXRlKGNvbnRleHQsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbGlkYXRlc0ZvcndhcmRzID0gdHJ1ZTtcblxuICAgICAgcmV0dXJuIHZhbGlkYXRlc0ZvcndhcmRzO1xuICAgIH0pO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50VGVybSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5yZXBsYWNlbWVudFRlcm0gPSByZXBsYWNlbWVudFRlcm07XG5cbiAgICAgIHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VtZW50VGVybVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHt0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nfScgdGVybSBzdWJ0aXR1dGlvbidzICcke3JlcGxhY2VtZW50VGVybVN0cmluZ30nIHJlcGxhY2VtZW50IHRlcm0uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlRlcm1TdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCB0ZXJtU3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIGZyYW1lU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlRnJhbWVTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0YXJnZXRUZXJtID0gdGFyZ2V0VGVybUZyb21GcmFtZVN1YnN0aXR1dGlvbk5vZGUoZnJhbWVTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRUZXJtID0gcmVwbGFjZW1lbnRUZXJtRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZShmcmFtZVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBudWxsO1xuXG4gICAgICAgIHRlcm1TdWJzdGl0dXRpb25uID0gbmV3IFRlcm1TdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCB0YXJnZXRUZXJtLCByZXBsYWNlbWVudFRlcm0pO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlcm1TdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiB0ZXJtU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXJtQW5kVmFyaWFibGUodGVybSwgdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICB0ZXJtID0gc3RyaXBCcmFja2V0c0Zyb21UZXJtKHRlcm0sIGNvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHRlcm1TdWJzdGl0dXRpb25TdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nRnJvbVRlcm1BbmRWYXJpYWJsZSh0ZXJtLCB2YXJpYWJsZSksXG4gICAgICAgICAgICBzdHJpbmcgPSB0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICB0ZXJtU3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlVGVybVN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgdGVybVN1YnN0aXR1dGlvbiA9IHRlcm1TdWJzdGl0dXRpb25Gcm9tVGVybVN1YnN0aXR1dGlvbk5vZGUodGVybVN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gdGVybVN1YnN0aXR1dGlvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldFRlcm1Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRUZXJtTm9kZSA9IGZyYW1lU3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRGcmFtZU5vZGUoKSxcbiAgICAgICAgdGFyZ2V0VGVybSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUodGFyZ2V0VGVybU5vZGUpO1xuXG4gIHJldHVybiB0YXJnZXRUZXJtO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFRlcm1Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlKGZyYW1lU3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFRlcm1Ob2RlID0gZnJhbWVTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50RnJhbWVOb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50VGVybSA9IGNvbnRleHQuZmluZEZyYW1lQnlGcmFtZU5vZGUocmVwbGFjZW1lbnRUZXJtTm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50VGVybTtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJUZXJtU3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJ0YXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtIiwiZ2V0VGFyZ2V0VGVybSIsImdldFJlcGxhY2VtZW50VGVybSIsImdldFRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFRlcm1Ob2RlIiwidGVyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50VGVybU5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRWYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiaXNUcml2aWFsIiwidGFyZ2V0VGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0iLCJpc0VxdWFsVG8iLCJ0cml2aWFsIiwiY29tcGFyZVRlcm0iLCJ0ZXJtIiwic3RyaXBCcmFja2V0c0Zyb21UZXJtIiwidGVybUVxdWFsVG9SZXBsYWNlbWVudFRlcm0iLCJjb21wYXJlZFRvVGVybSIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRUZXJtQ29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJ2YWxpZGF0ZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwidGVybVN1YnN0aXR1dGlvbiIsImdldENvbnRleHQiLCJ0ZXJtU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXV0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ0YXJnZXRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRUZXJtIiwicmVwbGFjZW1lbnRUZXJtVmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFRlcm0iLCJzdWJzdGl0dXRpb24iLCJhZGRTdWJzdGl0dXRpb24iLCJ0YXJnZXRUZXJtU3RyaW5nIiwidGFyZ2V0VGVybVNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInZhbGlkYXRlc0ZvcndhcmRzIiwicmVwbGFjZW1lbnRUZXJtU3RyaW5nIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInRlcm1TdWJzdGl0dXRpb25uIiwibGl0ZXJhbGx5IiwiZnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwiaW5zdGFudGlhdGVGcmFtZVN1YnN0aXR1dGlvbiIsInRhcmdldFRlcm1Gcm9tRnJhbWVTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRUZXJtRnJvbUZyYW1lU3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwidGVybVN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnROb2RlIiwiZnJvbVRlcm1BbmRWYXJpYWJsZSIsInZhcmlhYmxlIiwidGVybVN1YnN0aXR1dGlvblN0cmluZ0Zyb21UZXJtQW5kVmFyaWFibGUiLCJpbnN0YW50aWF0ZVRlcm1TdWJzdGl0dXRpb24iLCJ0ZXJtU3Vic3RpdHV0aW9uRnJvbVRlcm1TdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0RnJhbWVOb2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJnZXRSZXBsYWNlbWVudEZyYW1lTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7cUVBVHlCOzBCQUVGO3lCQUNHOzBCQUNZO3dCQUNvQjs2QkFDZ0I7eUJBQ2tCOzs7Ozs7TUFFNUYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyx5QkFBeUJDLHFCQUFZO0lBQy9ELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsZUFBZSxDQUFFO1FBQzlELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtJQUN6QjtJQUVBQyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0YsVUFBVTtJQUN4QjtJQUVBRyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNGLGVBQWU7SUFDN0I7SUFFQUcsMEJBQTBCO1FBQ3hCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyx1QkFBdUJQLE1BQU8sR0FBRztRQUV2QyxPQUFPTztJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLGlCQUFpQixJQUFJLENBQUNSLFVBQVUsQ0FBQ0ssT0FBTyxJQUN4Q0ksYUFBYUQsZ0JBQWdCLEdBQUc7UUFFdEMsT0FBT0M7SUFDVDtJ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