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
        const context = specificContext, statementSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${statementSubstitutionString}' statement substitution...`);
        let validates = false;
        const validSubstitution = this.findValidSubstitution(context);
        if (validSubstitution) {
            statementSubstitution = validSubstitution; ///
            context.debug(`...the '${statementSubstitutionString}' statement substitution is already valid.`);
        } else {
            const context = this.getContext(), specificContext = context; ///
            (0, _context.attempt)((specificContext)=>{
                const targetStatementValidates = this.validateTargetStatement(generalContext, specificContext);
                if (targetStatementValidates) {
                    const replacementStatementValidates = this.validateReplacementStatement(generalContext, specificContext);
                    if (replacementStatementValidates) {
                        const substitutionValidates = this.validateSubstitution(generalContext, specificContext);
                        if (substitutionValidates) {
                            validates = true;
                        }
                    }
                }
                if (validates) {
                    specificContext.commit(this);
                }
            }, specificContext);
        }
        if (validates) {
            const substitution = this; ///
            statementSubstitution = substitution; ///
            context.addSubstitution(substitution);
            context.debug(`...validated the '${statementSubstitutionString}' statement substitution.`);
        }
        return statementSubstitution;
    }
    validateSubstitution(generalContext, specificContext) {
        let substitutionValidates = true;
        if (this.substitution !== null) {
            const context = specificContext, substitutionString = this.substitution.getString(), statementSubstitutionString = this.getString();
            context.trace(`Validating the '${statementSubstitutionString}' statement substitution's '${substitutionString}' substitution...`);
            specificContext = generalContext; ///
            const substitution = this.substitution.validate(generalContext, specificContext);
            if (substitution !== null) {
                this.substitution = substitution;
                substitutionValidates = true;
            }
            if (substitutionValidates) {
                context.debug(`...validatewd the '${statementSubstitutionString}' statement substitution's '${substitutionString}' substitution.`);
            }
        }
        return substitutionValidates;
    }
    validateTargetStatement(generalContext, specificContext) {
        let targetStatementValidates = false;
        const context = generalContext, targetStatementString = this.targetStatement.getString(), statementSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${statementSubstitutionString}' statement substitution's '${targetStatementString}' target statement...`);
        const targetStatementSingular = this.targetStatement.isSingular();
        if (targetStatementSingular) {
            (0, _context.descend)((context)=>{
                const targetStatement = this.targetStatement.validate(context);
                if (targetStatement !== null) {
                    targetStatementValidates = true;
                }
            }, context);
        } else {
            context.debug(`The '${statementSubstitutionString}' statement substitution's '${targetStatementString}' target statement is not singular.`);
        }
        if (targetStatementValidates) {
            context.debug(`...validated the '${statementSubstitutionString}' statement substitution's '${targetStatementString}' target statement...`);
        }
        return targetStatementValidates;
    }
    validateReplacementStatement(generalContext, specificContext) {
        let replacementStatementValidates = false;
        const context = specificContext, replacementStatementString = this.replacementStatement.getString(), statementSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${statementSubstitutionString}' statement substitution's '${replacementStatementString}' replacement statement...`);
        (0, _context.descend)((context)=>{
            const replacementStatement = this.replacementStatement.validate(context);
            if (replacementStatement !== null) {
                replacementStatementValidates = true;
            }
        }, context);
        if (replacementStatementValidates) {
            context.debug(`...validated the '${statementSubstitutionString}' statement substitution's '${replacementStatementString}' replacement statement.`);
        }
        return replacementStatementValidates;
    }
    unifySubstitution(substitution, generalContext, specificContext) {
        let substitutionUnifies;
        const context = specificContext, generalSubstitution = this.substitution, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
        context.trace(`Unifying the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution...`);
        (0, _context.reconcile)((specificContext)=>{
            substitutionUnifies = (0, _unify.unifySubstitution)(generalSubstitution, specificSubstitution, generalContext, specificContext);
            if (substitutionUnifies) {
                specificContext.commit();
            }
        }, specificContext);
        if (substitutionUnifies) {
            context.trace(`...unified the '${specificSubstitutionString}' substitution with the '${generalSubstitutionString}' substitution.`);
        }
        return substitutionUnifies;
    }
    unifyComplexSubstitution(complexSubstitution, generalContext, specificContext) {
        let substitution = null;
        const context = specificContext, simpleSubstitutionString = this.getString(), complexSubstitutionString = complexSubstitution.getString(); ///
        context.trace(`Unifying the '${complexSubstitutionString}' complex substitution with the '${simpleSubstitutionString}' simple substitution...`);
        let simpleSubstitutionUnifies = false;
        (0, _context.reconcile)((specificContext)=>{
            const replacementStatement = complexSubstitution.getReplacementStatement(), replacementStatementUnifies = this.unifyReplacementStatement(replacementStatement, generalContext, specificContext);
            if (replacementStatementUnifies) {
                const nested = false, context = specificContext, soleNonTrivialSubstitution = context.getSoleNonTrivialSubstitution(nested);
                substitution = soleNonTrivialSubstitution; ///
            }
        }, specificContext);
        if (substitution !== null) {
            simpleSubstitutionUnifies = true;
        }
        if (simpleSubstitutionUnifies) {
            context.debug(`...unified the '${complexSubstitutionString}' complex substitution with the '${simpleSubstitutionString}' simple substitution.`);
        }
        return substitution;
    }
    unifyReplacementStatement(replacementStatement, generalContext, specificContext) {
        let replacementStatemnentUnifies = false;
        const context = specificContext, replacementStatementString = replacementStatement.getString(), substitutionReplacementStatementString = this.replacementStatement.getString(); ///
        context.trace(`Unifying the '${replacementStatementString}' replacement statement with the '${substitutionReplacementStatementString}' replacement statement...`);
        const statementUnifies = this.replacementStatement.unifyStatement(replacementStatement, generalContext, specificContext);
        if (statementUnifies) {
            replacementStatemnentUnifies = true;
        }
        if (replacementStatemnentUnifies) {
            context.debug(`...unified the '${replacementStatementString}' replacement statement with the '${substitutionReplacementStatementString}' replacement statement.`);
        }
        return replacementStatemnentUnifies;
    }
    unifyWithSimpleSubstitution(simpleSubstitution, generalContext, specificContext) {
        let substitution;
        const complexSubstitution = this, simpleSubstitutionContext = simpleSubstitution.getContext(), complexSubstitutionContext = complexSubstitution.getContext();
        generalContext = simpleSubstitutionContext; ///
        specificContext = complexSubstitutionContext; ///
        substitution = simpleSubstitution.unifyComplexSubstitution(complexSubstitution, generalContext, specificContext);
        return substitution;
    }
    resolve(generalContext, specificContext) {
        let resolved = false;
        const context = specificContext, substitutionString = this.getString(); ///
        context.trace(`Resolving the ${substitutionString} substitution...`);
        const metavariableName = this.getMetavariableName(), simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName);
        if (simpleSubstitution !== null) {
            const substitution = this.unifyWithSimpleSubstitution(simpleSubstitution, generalContext, specificContext); ///
            if (substitution !== null) {
                const complexSubstitution = this, simpleSubstitutionContext = simpleSubstitution.getContext(), complexSubstitutionContext = complexSubstitution.getContext();
                (0, _context.join)((context)=>{
                    const substitutionContext = this.substitution.getContext(), generalContext = substitutionContext, specificContext = context, substitutionUnifies = this.unifySubstitution(substitution, generalContext, specificContext);
                    if (substitutionUnifies) {
                        resolved = true;
                    }
                }, complexSubstitutionContext, simpleSubstitutionContext, context);
            }
        }
        if (resolved) {
            this.resolved = true;
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
                statementSubstitutionn = new StatementSubstitution(context, string, node, targetStatement, replacementStatement);
            }, context);
        }
        return statementSubstitutionn;
    }
    static fromStatementAndMetavariable(statement, metavariable, context) {
        statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
        let statementSubstitution;
        (0, _context.instantiate)((context)=>{
            const statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementAndMetavariable)(statement, metavariable, context), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context);
            statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, context);
        }, context);
        return statementSubstitution;
    }
    static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
        statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
        let statementSubstitution;
        (0, _context.instantiate)((context)=>{
            const statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementMetavariableAndSubstitution)(statement, metavariable, substitution), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context);
            statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, context);
        }, context);
        return statementSubstitution;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgam9pbiwgYXR0ZW1wdCwgZGVzY2VuZCwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUsIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgICB0aGlzLnRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudDtcbiAgICB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVkO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFRhcmdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TXRhdmFyaWFibGVOYW1lKCkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0TXRhdmFyaWFibGVOYW1lKCk7IH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRhcmdldFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRhcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5hbWUoKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRNZXRhdmFyaWFibGVOYW1lKCk7IH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTsgfVxuXG4gIGNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgIGNvbXBhcmVzVG9TdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3RhdGVtZW50O1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICgodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpICYmIChzdWJzdGl0dXRpb24gPT09IG51bGwpKXtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuc3Vic3RpdHV0aW9uICE9PSBudWxsKSAmJiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSl7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24gPSB0aGlzLnN1YnN0aXR1dGlvbi5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbikge1xuICAgICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5jb21wYXJlTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7IH1cblxuICB2YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBhdHRlbXB0KChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdWJzdGl0dXRpb24oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTdWJzdGl0dXRpb24oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgc3BlY2lmaWNDb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcblxuICAgICAgICBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRld2QgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHRhcmdldFN0YXRlbWVudFN0cmluZyA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRTdGF0ZW1lbnRTdHJpbmd9JyB0YXJnZXQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnQgPSB0aGlzLnRhcmdldFN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudCBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZXMgPSB1bmlmeVN1YnN0aXR1dGlvbihnZW5lcmFsU3Vic3RpdHV0aW9uLCBzcGVjaWZpY1N1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUNvbXBsZXhTdWJzdGl0dXRpb24oY29tcGxleFN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmcgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29tcGxleFN1YnN0aXR1dGlvblN0cmluZ30nIGNvbXBsZXggc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3NpbXBsZVN1YnN0aXR1dGlvblN0cmluZ30nIHNpbXBsZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCksXG4gICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uID0gY29udGV4dC5nZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbihuZXN0ZWQpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nfScgY29tcGxleCBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nfScgc2ltcGxlIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSByZXBsYWNlbWVudFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5V2l0aFNpbXBsZVN1YnN0aXR1dGlvbihzaW1wbGVTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uO1xuXG4gICAgY29uc3QgY29tcGxleFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbkNvbnRleHQgPSBzaW1wbGVTdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25Db250ZXh0ID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBnZW5lcmFsQ29udGV4dCA9IHNpbXBsZVN1YnN0aXR1dGlvbkNvbnRleHQ7IC8vL1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gY29tcGxleFN1YnN0aXR1dGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbi51bmlmeUNvbXBsZXhTdWJzdGl0dXRpb24oY29tcGxleFN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgcmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnVuaWZ5V2l0aFNpbXBsZVN1YnN0aXR1dGlvbihzaW1wbGVTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbkNvbnRleHQgPSBzaW1wbGVTdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uQ29udGV4dCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgIGpvaW4oKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Db250ZXh0ID0gdGhpcy5zdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gc3Vic3RpdHV0aW9uQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29tcGxleFN1YnN0aXR1dGlvbkNvbnRleHQsIHNpbXBsZVN1YnN0aXR1dGlvbkNvbnRleHQsIGNvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0U3RhdGVtZW50LCByZXBsYWNlbWVudFN0YXRlbWVudCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiksXG4gICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUodGFyZ2V0U3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFN0YXRlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsImlzUmVzb2x2ZWQiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRUYXJnZXRTdGF0ZW1lbnQiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudCIsImdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldE10YXZhcmlhYmxlTmFtZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwidGFyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsImNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJ2YWxpZGF0ZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0Q29udGV4dCIsImF0dGVtcHQiLCJ0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudCIsInN1YnN0aXR1dGlvblZhbGlkYXRlcyIsInZhbGlkYXRlU3Vic3RpdHV0aW9uIiwiY29tbWl0IiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidGFyZ2V0U3RhdGVtZW50U3RyaW5nIiwidGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwiZGVzY2VuZCIsInJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwidW5pZnlTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25VbmlmaWVzIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwicmVjb25jaWxlIiwidW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsInNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyIsImNvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmciLCJzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudCIsIm5lc3RlZCIsInNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwiZ2V0U29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJyZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzIiwic3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVdpdGhTaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb25Db250ZXh0IiwiY29tcGxleFN1YnN0aXR1dGlvbkNvbnRleHQiLCJyZXNvbHZlIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTmFtZSIsImpvaW4iLCJzdWJzdGl0dXRpb25Db250ZXh0IiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbm4iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3FFQVZ5QjswQkFFRjt1QkFDVzswQkFDUzs2QkFDTTt5QkFDYzt5QkFDSTt3QkFDMEU7Ozs7OztNQUU3SSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDhCQUE4QkMscUJBQVk7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsb0JBQW9CLENBQUU7UUFDaEcsS0FBSyxDQUFDTixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLG9CQUFvQixHQUFHQTtJQUM5QjtJQUVBQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDSixZQUFZO0lBQzFCO0lBRUFLLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0osZUFBZTtJQUM3QjtJQUVBSywwQkFBMEI7UUFDeEIsT0FBTyxJQUFJLENBQUNKLG9CQUFvQjtJQUNs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