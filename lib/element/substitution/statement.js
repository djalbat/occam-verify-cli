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
            const substitution = (0, _context.liminally)((context)=>{
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
                        this.unifySubstitution(substitution, generalContext, specificContext);
                    }, contexts, context);
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
            (0, _context.literally)((context)=>{
                const { string } = json, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), node = statementSubstitutionNode, targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context);
                context = null;
                statementSubstitutionn = new StatementSubstitution(context, string, node, targetStatement, replacementStatement);
            }, context);
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
function targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const targetStatementNode = statementSubstitutionNode.getTargetStatementNode(), targetStatement = context.findStatementByStatementNode(targetStatementNode);
    return targetStatement;
}
function replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const replacementStatementNode = statementSubstitutionNode.getReplacementStatementNode(), replacementStatement = context.findStatementByStatementNode(replacementStatementNode);
    return replacementStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgbGltaW5hbGx5LCBsaXRlcmFsbHksIHN5bnRoZXRpY2FsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlLCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudFN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVzb2x2ZWQsIHN1YnN0aXR1dGlvbiwgdGFyZ2V0U3RhdGVtZW50LCByZXBsYWNlbWVudFN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnJlc29sdmVkID0gcmVzb2x2ZWQ7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gICAgdGhpcy50YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRUYXJnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldE10YXZhcmlhYmxlTmFtZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE10YXZhcmlhYmxlTmFtZSgpOyB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRhcmdldE5vZGUgPSB0YXJnZXRTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiB0YXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOYW1lKCkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpOyB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7IH1cblxuICBjb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0YXRlbWVudDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSAmJiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSl7XG4gICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkpe1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uID0gdGhpcy5zdWJzdGl0dXRpb24uaXNFcXVhbFRvKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24pIHtcbiAgICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpOyB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsXG4gICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSB0aGlzLnRhcmdldFN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAodGFyZ2V0U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudCBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZSxcbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdXRpb24ncyAnJHtzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl1dGlvbidzICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgcmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0OyAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKTtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbGltaW5hbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb250ZXh0ID0gc2ltcGxlU3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMgPSBzaW1wbGVTdWJzdGl0dXRpb24udW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudCh0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24gPSBjb250ZXh0LmdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uKG5lc3RlZCk7XG5cbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbjsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGxpbWluYWxseSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgY29udGV4dHMgPSBbXTtcblxuICAgICAgICAgIGNvbnRleHQgPSBzaW1wbGVTdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgICAgY29udGV4dHMucHVzaChjb250ZXh0KTtcblxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgICAgIGNvbnRleHRzLnB1c2goY29udGV4dCk7XG5cbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBzeW50aGV0aWNhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgICAgICAgIHRoaXMudW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgICB9LCBjb250ZXh0cywgY29udGV4dCk7XG5cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KCk7XG4gICAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVzb2x2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBjb250ZXh0ID0gbnVsbDtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgcmV0dXJuIGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIHJldHVybiBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUodGFyZ2V0U3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFN0YXRlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsImlzUmVzb2x2ZWQiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRUYXJnZXRTdGF0ZW1lbnQiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudCIsImdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldE10YXZhcmlhYmxlTmFtZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwidGFyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsImNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJ2YWxpZGF0ZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZ2V0Q29udGV4dCIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl1dGlvbiIsImRlYnVnIiwidmFsaWRhdGVzIiwidGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJhZGRTdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnRTdHJpbmciLCJ0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJzdGF0ZWQiLCJyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyIsInVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvblVuaWZpZXMiLCJyZXNvbHZlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsImxpbWluYWxseSIsInJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyIsIm5lc3RlZCIsInNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwiZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJjb250ZXh0cyIsInB1c2giLCJzeW50aGV0aWNhbGx5IiwiY29tbWl0IiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbm4iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImdldFRhcmdldFN0YXRlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztxRUFWeUI7MEJBRUY7dUJBQ1c7MEJBQ1M7NkJBQ007eUJBQ0c7eUJBQ2U7d0JBQzBFOzs7Ozs7TUFFN0ksV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw4QkFBOEJDLHFCQUFZO0lBQ3BFLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLG9CQUFvQixDQUFFO1FBQ2hHLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7SUFDOUI7SUFFQUMsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSixRQUFRO0lBQ3RCO0lBRUFLLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0osWUFBWTtJQUMxQjtJQUVBSyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNKLGVBQWU7SUFDN0I7SUFFQUssMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDSixvQkFBb0I7SUFDbEM7SUFFQUssK0JBQStCO1FBQzdCLE1BQU1ULE9BQU8sSUFBSSxDQUFDVSxPQUFPLElBQ25CQyw0QkFBNEJYLE1BQU0sR0FBRztRQUUzQyxPQUFPVztJQUNUO0lBRUFDLHFCQUFxQjtRQUFFLE9BQU8sSUFBSSxDQUFDVCxlQUFlLENBQUNTLGtCQUFrQjtJQUFJO0lBRXpFQyxnQkFBZ0I7UUFDZCxNQUFNQyxzQkFBc0IsSUFBSSxDQUFDWCxlQUFlLENBQUNPLE9BQU8sSUFDbERLLGFBQWFELHFCQUFxQixHQUFHO1FBRTNDLE9BQU9D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