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
const _context = require("../../utilities/context");
const _brackets = require("../../utilities/brackets");
const _instantiate = require("../../process/instantiate");
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
        context.trace(`Validating the '${statementSubstitutionString}' statement substitution's '${targetStatementString}' target statement...`);
        const targetStatementSingular = this.targetStatement.isSingular();
        if (targetStatementSingular) {
            const stated = true, targetStatement = this.targetStatement.validate(stated, context);
            if (targetStatement !== null) {
                targetStatementValidates = true;
            }
        } else {
            context.debug(`The '${statementSubstitutionString}' statement substitution's '${targetStatementString}' target statement is not singular.`);
        }
        if (targetStatementValidates) {
            context.debug(`...validated the '${statementSubstitutionString}' statement substitution's '${targetStatementString}' target statement...`);
        }
        return targetStatementValidates;
    }
    validateReplacementStatement(generalContext, specificContext) {
        let replacementStatementValidates;
        const context = specificContext, replacementStatementString = this.replacementStatement.getString(), statementSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${statementSubstitutionString}' statement substitution's '${replacementStatementString}' replacement statement...`);
        const stated = true, replacementStatement = this.replacementStatement.validate(stated, context);
        if (replacementStatement !== null) {
            replacementStatementValidates = true;
        }
        if (replacementStatementValidates) {
            context.debug(`...validated the '${statementSubstitutionString}' statement substitution's '${replacementStatementString}' replacement statement.`);
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
        if (simpleSubstitution !== null) {
            context = this.getContext();
            const substitution = (0, _context.resolve)((context)=>{
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
            if (substitution !== null) {
                (0, _context.resolve)((specificContext)=>{
                    const complexContext = this.getContext(), simpleContext = simpleSubstitution.getContext(); ///
                    context = specificContext; ///
                    (0, _context.join)((context)=>{
                        const specificContext = context; ///
                        context = this.substitution.getContext();
                        const generalContext = context; ///
                        this.unifySubstitution(substitution, generalContext, specificContext);
                    }, complexContext, simpleContext, context);
                    specificContext.commit();
                }, specificContext);
                this.resolved = true;
            }
        }
        if (this.resolved) {
            context.debug(`...resolved the '${substitutionString}' substitution.`);
        }
    }
    static name = "StatementSubstitution";
    static fromJSON(json, context) {
        let statementSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.instantiate)((context)=>{
                const { string } = json, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), node = statementSubstitutionNode, targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context);
                context = null;
                statementSubstitutionn = new StatementSubstitution(context, string, node, targetStatement, replacementStatement);
            }, context);
        }
        return statementSubstitutionn;
    }
    static fromStatementAndMetavariable(statement, metavariable, context) {
        statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
        return (0, _context.instantiate)((context)=>{
            const statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementAndMetavariable)(statement, metavariable, context), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, context);
            return statementSubstitution;
        }, context);
    }
    static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
        statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
        return (0, _context.instantiate)((context)=>{
            const statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementMetavariableAndSubstitution)(statement, metavariable, substitution), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, context);
            return statementSubstitution;
        }, context);
    }
});
function targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const targetStatementNode = statementSubstitutionNode.getTargetStatementNode(), targetStatement = context.findStatementByStatementNode(targetStatementNode);
    return targetStatement;
}
function replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const replacementStatementNode = statementSubstitutionNode.getReplacementStatementNode(), replacementStatement = context.findStatementByStatementNode(replacementStatementNode);
    return replacementStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IGpvaW4sIHJlc29sdmUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJhY2tldHNcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlLCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudFN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVzb2x2ZWQsIHN1YnN0aXR1dGlvbiwgdGFyZ2V0U3RhdGVtZW50LCByZXBsYWNlbWVudFN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnJlc29sdmVkID0gcmVzb2x2ZWQ7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gICAgdGhpcy50YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRUYXJnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldE10YXZhcmlhYmxlTmFtZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE10YXZhcmlhYmxlTmFtZSgpOyB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRhcmdldE5vZGUgPSB0YXJnZXRTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiB0YXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpOyB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBjb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0YXRlbWVudDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSAmJiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSl7XG4gICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkpe1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uID0gdGhpcy5zdWJzdGl0dXRpb24uaXNFcXVhbFRvKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24pIHtcbiAgICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSB0aGlzLnRhcmdldFN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGFyZ2V0U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudCBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdXRpb24ncyAnJHtzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl1dGlvbidzICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgcmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gcmVzb2x2ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IHNpbXBsZVN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQodGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uID0gY29udGV4dC5nZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbihuZXN0ZWQpO1xuXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb247ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICByZXNvbHZlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBjb21wbGV4Q29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLCAvLy9cbiAgICAgICAgICAgICAgICBzaW1wbGVDb250ZXh0ID0gc2ltcGxlU3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgam9pbigoY29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcy5zdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgICB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgICAgfSwgY29tcGxleENvbnRleHQsIHNpbXBsZUNvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdCgpO1xuICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHRoaXMucmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnJlc29sdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHRhcmdldFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiB0YXJnZXRTdGF0ZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJpc1Jlc29sdmVkIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0VGFyZ2V0U3RhdGVtZW50IiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJnZXRNdGF2YXJpYWJsZU5hbWUiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0U3RhdGVtZW50Tm9kZSIsInRhcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJjb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24iLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwidmFsaWRhdGUiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImdldENvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdXRpb24iLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50IiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50U3RyaW5nIiwidGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwic3RhdGVkIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeVJlcGxhY2VtZW50U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyIsInN1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwicmVzb2x2ZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJyZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMiLCJuZXN0ZWQiLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsImdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwiY29tcGxleENvbnRleHQiLCJzaW1wbGVDb250ZXh0Iiwiam9pbiIsImNvbW1pdCIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25uIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImdldFRhcmdldFN0YXRlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwiZ2V0UmVw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