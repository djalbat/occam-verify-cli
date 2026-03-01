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
const _unify = require("../../process/unify");
const _json = require("../../utilities/json");
const _brackets = require("../../utilities/brackets");
const _instantiate = require("../../process/instantiate");
const _context = require("../../utilities/context");
const _element = require("../../utilities/element");
const _string = require("../../utilities/string");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class StatementSubstitution extends _substitution.default {
    constructor(context, string, node, resolved, substitution, targetStatement, replacementStatement){
        super(context, string, node);
        this.resolved = resolved;
        this.substitution = substitution;
        this.targetStatement = targetStatement;
        this.replacementStatement = replacementStatement;
    }
    isResolved() {
        return this.resolved;
    }
    getSubstitution() {
        return this.substitution;
    }
    getTargetStatement() {
        return this.targetStatement;
    }
    getReplacementStatement() {
        return this.replacementStatement;
    }
    getStatementSubstitutionNode() {
        const node = this.getNode(), statementSubstitutionNode = node; ///
        return statementSubstitutionNode;
    }
    getMtavariableName() {
        return this.targetStatement.getMtavariableName();
    }
    getTargetNode() {
        const targetStatementNode = this.targetStatement.getNode(), targetNode = targetStatementNode; ///
        return targetNode;
    }
    getReplacementNode() {
        const replacementStatementNode = this.replacementStatement.getNode(), replacementNode = replacementStatementNode; ///
        return replacementNode;
    }
    isSimple() {
        const simple = this.substitution === null;
        return simple;
    }
    getMetavariableName() {
        return this.targetStatement.getMetavariableName();
    }
    compareMetavariableName(metavariableName) {
        return this.targetStatement.compareMetavariableName(metavariableName);
    }
    compareStatement(statement, context) {
        statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
        const replacementStatementEqualToStatement = this.replacementStatement.isEqualTo(statement), comparesToStatement = replacementStatementEqualToStatement; ///
        return comparesToStatement;
    }
    compareParameter(parameter) {
        const targetStatementComparesToParameter = this.targetStatement.compareParameter(parameter), comparesToParameter = targetStatementComparesToParameter; ///
        return comparesToParameter;
    }
    compareSubstitution(substitution) {
        let comparesToSubstitution = false;
        if (false) {
        ///
        } else if (this.substitution === null && substitution === null) {
            comparesToSubstitution = true;
        } else if (this.substitution !== null && substitution !== null) {
            const substitutionEqualToSubstituion = this.substitution.isEqualTo(substitution);
            if (substitutionEqualToSubstituion) {
                comparesToSubstitution = true;
            }
        }
        return comparesToSubstitution;
    }
    compareMetavariable(metavariable) {
        return this.targetStatement.compareMetavariable(metavariable);
    }
    validate(generalContext, specificContext) {
        let statementSubstitution = null;
        const context = this.getContext();
        specificContext = context; ///
        const statementSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${statementSubstitutionString}' statement substitution...`);
        const validSubstitution = this.findValidSubstiution(context);
        if (validSubstitution) {
            statementSubstitution = validSubstitution; ///
            context.debug(`...the '${statementSubstitutionString}' statement substitution is already valid.`);
        } else {
            let validates = false;
            const targetStatementValidates = this.validateTargetStatement(generalContext, specificContext);
            if (targetStatementValidates) {
                const replacementStatementValidates = this.validateReplacementStatement(generalContext, specificContext);
                if (replacementStatementValidates) {
                    validates = true;
                }
            }
            if (validates) {
                const substitution = this; ///
                statementSubstitution = substitution; ///
                context.addSubstitution(substitution);
                context.debug(`...validated the '${statementSubstitutionString}' statement substitution.`);
            }
        }
        return statementSubstitution;
    }
    validateTargetStatement(generalContext, specificContext) {
        let targetStatementValidates = false;
        const context = generalContext, targetStatementString = this.targetStatement.getString(), statementSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${statementSubstitutionString}' statement subtitution's '${targetStatementString}' target statement...`);
        const targetStatementSingular = this.targetStatement.isSingular();
        if (targetStatementSingular) {
            const stated = true, targetStatement = this.targetStatement.validate(stated, context);
            if (targetStatement !== null) {
                targetStatementValidates = true;
            }
        } else {
            context.debug(`The '${statementSubstitutionString}' statement subtitution's '${targetStatementString}' target statement is not singular.`);
        }
        if (targetStatementValidates) {
            context.debug(`...validated the '${statementSubstitutionString}' statement subtitution's '${targetStatementString}' target statement...`);
        }
        return targetStatementValidates;
    }
    validateReplacementStatement(generalContext, specificContext) {
        let replacementStatementValidates;
        const context = specificContext, replacementStatementString = this.replacementStatement.getString(), statementSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${statementSubstitutionString}' statement subtitution's '${replacementStatementString}' replacement statement...`);
        const stated = true, replacementStatement = this.replacementStatement.validate(stated, context);
        if (replacementStatement !== null) {
            replacementStatementValidates = true;
        }
        if (replacementStatementValidates) {
            context.debug(`...validated the '${statementSubstitutionString}' statement subtitution's '${replacementStatementString}' replacement statement.`);
        }
        return replacementStatementValidates;
    }
    unifyReplacementStatement(replacementStatement, generalContext, specificContext) {
        let replacementStatemnentUnifies = false;
        const context = specificContext, substitutionString = this.getString(), replacementStatementString = replacementStatement.getString(), substitutionReplacementStatementString = this.replacementStatement.getString(); ///
        context.trace(`Unifying the '${replacementStatementString}' replacement statement with the '${substitutionString}' substiution's '${substitutionReplacementStatementString}' replacement statement...`);
        const statementUnifies = this.replacementStatement.unifyStatement(replacementStatement, generalContext, specificContext);
        if (statementUnifies) {
            replacementStatemnentUnifies = true;
        }
        if (replacementStatemnentUnifies) {
            context.debug(`...unified the '${replacementStatementString}' replacement statement with the '${substitutionString}' substiution's '${substitutionReplacementStatementString}' replacement statement.`);
        }
        return replacementStatemnentUnifies;
    }
    unifySubstitution(substitution, generalContext, specificContext) {
        const context = specificContext, generalSubstitution = this.substitution, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
        context.trace(`Unifying the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution...`);
        const substitutionUnifies = (0, _unify.unifySubstitution)(generalSubstitution, specificSubstitution, generalContext, specificContext);
        if (substitutionUnifies) {
            context.trace(`...unified the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution.`);
        }
        return substitutionUnifies;
    }
    resolve(generalContext, specificContext) {
        let context;
        context = this.getContext();
        const substitutionString = this.getString(); ///
        context.trace(`Resolving the ${substitutionString} substitution...`);
        context = generalContext; ///
        const metavariableName = this.getMetavariableName();
        context = specificContext; ///
        const simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName);
        context = this.getContext();
        const subtitution = (0, _context.liminally)((context)=>{
            let substitution = null;
            const specificContext = context; ///
            context = simpleSubstitution.getContext();
            const generalContext = context; ///
            context = specificContext; ///
            const replacementStatementUnifies = simpleSubstitution.unifyReplacementStatement(this.replacementStatement, generalContext, specificContext);
            if (replacementStatementUnifies) {
                const nested = false, soleNonTrivialSubstitution = context.getSoleNonTrivialSubstitution(nested);
                substitution = soleNonTrivialSubstitution; ///
            }
            return substitution;
        }, context);
        if (subtitution !== null) {
            (0, _context.liminally)((specificContext)=>{
                const contexts = [];
                context = simpleSubstitution.getContext();
                contexts.push(context);
                context = this.getContext();
                contexts.push(context);
                context = specificContext; ///
                (0, _context.synthetically)((context)=>{
                    const specificContext = context; ///
                    context = this.substitution.getContext();
                    const generalContext = context; ///
                    this.unifySubstitution(subtitution, generalContext, specificContext);
                }, contexts, context);
                specificContext.commit();
            }, specificContext);
            this.resolved = true;
        }
        if (this.resolved) {
            context.debug(`...resolved the '${substitutionString}' substitution.`);
        }
    }
    toJSON() {
        const { name } = this.constructor, targetStatementJSON = (0, _json.statementToStatementJSON)(this.targetStatement), replacementStatementJSON = (0, _json.statementToStatementJSON)(this.replacementStatement), targetStatement = targetStatementJSON, replacementStatement = replacementStatementJSON, string = this.getString(), json = {
            name,
            string,
            targetStatement,
            replacementStatement
        };
        return json;
    }
    static name = "StatementSubstitution";
    static fromJSON(json, context) {
        let statementSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            debugger;
        }
        return statementSubstitutionn;
    }
    static fromStatementAndMetavariable(statement, metavariable, context) {
        statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
        return (0, _context.literally)((context)=>{
            const statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementAndMetavariable)(statement, metavariable, context), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, context);
            return statementSubstitution;
        }, context);
    }
    static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
        statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
        return (0, _context.literally)((context)=>{
            const statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementMetavariableAndSubstitution)(statement, metavariable, substitution), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, context);
            return statementSubstitution;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBsaW1pbmFsbHksIGxpdGVyYWxseSwgc3ludGhldGljYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUsIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgICB0aGlzLnRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudDtcbiAgICB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVkO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFRhcmdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TXRhdmFyaWFibGVOYW1lKCkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0TXRhdmFyaWFibGVOYW1lKCk7IH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRhcmdldFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRhcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRNZXRhdmFyaWFibGVOYW1lKCk7IH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgIGNvbXBhcmVzVG9TdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3RhdGVtZW50O1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICgodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpICYmIChzdWJzdGl0dXRpb24gPT09IG51bGwpKXtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuc3Vic3RpdHV0aW9uICE9PSBudWxsKSAmJiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSl7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24gPSB0aGlzLnN1YnN0aXR1dGlvbi5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbikge1xuICAgICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICB2YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFZhbGlkU3Vic3RpdXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRhcmdldFN0YXRlbWVudFN0cmluZyA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJ0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFNpbmd1bGFyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICBjb25zdCBzdGF0ZWQgPSB0cnVlLFxuICAgICAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRhcmdldFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnRpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudCBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3VidGl0dXRpb24ncyAnJHt0YXJnZXRTdGF0ZW1lbnRTdHJpbmd9JyB0YXJnZXQgc3RhdGVtZW50Li4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnRpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdXRpb24ncyAnJHtzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl1dGlvbidzICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgcmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHN1YnRpdHV0aW9uID0gbGltaW5hbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gc2ltcGxlU3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMgPSBzaW1wbGVTdWJzdGl0dXRpb24udW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudCh0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb25zdCBuZXN0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24gPSBjb250ZXh0LmdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uKG5lc3RlZCk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb247ICAvLy9cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJ0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgbGltaW5hbGx5KChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgY29udGV4dHMgPSBbXTtcblxuICAgICAgICBjb250ZXh0ID0gc2ltcGxlU3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb250ZXh0cy5wdXNoKGNvbnRleHQpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBzeW50aGV0aWNhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgICAgICB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnRpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfSwgY29udGV4dHMsIGNvbnRleHQpO1xuXG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoKTtcbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHRoaXMucmVzb2x2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlc29sdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgdGFyZ2V0U3RhdGVtZW50SlNPTiA9IHN0YXRlbWVudFRvU3RhdGVtZW50SlNPTih0aGlzLnRhcmdldFN0YXRlbWVudCksXG4gICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRKU09OID0gc3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OKHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQpLFxuICAgICAgICAgIHRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudEpTT04sICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnQsXG4gICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50IiwiaXNSZXNvbHZlZCIsImdldFN1YnN0aXR1dGlvbiIsImdldFRhcmdldFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0TXRhdmFyaWFibGVOYW1lIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFN0YXRlbWVudE5vZGUiLCJ0YXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiY29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJjb21wYXJlc1RvU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsInZhbGlkYXRlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJnZXRDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXV0aW9uIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJ0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudCIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudFN0cmluZyIsInRhcmdldFN0YXRlbWVudFNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInN0YXRlZCIsInJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwidW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsInJlc29sdmUiLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lIiwic3VidGl0dXRpb24iLCJsaW1pbmFsbHkiLCJyZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMiLCJuZXN0ZWQiLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsImdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwiY29udGV4dHMiLCJwdXNoIiwic3ludGhldGljYWxseSIsImNvbW1pdCIsInRvSlNPTiIsIm5hbWUiLCJ0YXJnZXRTdGF0ZW1lbnRKU09OIiwic3RhdGVtZW50VG9TdGF0ZW1lbnRKU09OIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRKU09OIiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ubiIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJsaXRlcmFsbHkiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwiaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFhQTs7O2VBQUE7OztxRUFYeUI7MEJBRUY7dUJBQ1c7c0JBQ087MEJBQ0U7NkJBQ007eUJBQ0c7eUJBQ2U7d0JBQzBFOzs7Ozs7TUFFN0ksV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw4QkFBOEJDLHFCQUFZO0lBQ3BFLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLG9CQUFvQixDQUFFO1FBQ2hHLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7SUFDOUI7SUFFQUMsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSixRQUFRO0lBQ3RCO0lBRUFLLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0osWUFBWTtJQUMxQjtJQUVBSyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNKLGVBQWU7SUFDN0I7SUFFQUssMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDSixvQkFBb0I7SUFDbEM7SUFFQUssK0JBQStCO1FBQzdCLE1BQU1ULE9BQU8sSUFBSSxDQUFDVSxPQUFPLElBQ25CQyw0QkFBNEJYLE1BQU0sR0FBRztRQUUzQyxPQUFPVztJQUNUO0lBRUFDLHFCQUFxQjtRQUFFLE9BQU8sSUFBSSxDQUFDVCxlQUFlLENBQUNTLGtCQUFrQjtJQUFJO0lBRXpFQyxnQkFB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