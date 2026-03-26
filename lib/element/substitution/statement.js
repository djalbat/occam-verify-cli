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
const _element = require("../../utilities/element");
const _context = require("../../utilities/context");
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
            const context = this.getContext();
            (0, _context.join)((context)=>{
                (0, _context.attempt)((context)=>{
                    const specificContext = context, targetStatementValidates = this.validateTargetStatement(generalContext, specificContext);
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
                        context.commit(this);
                    }
                }, context);
            }, specificContext, context);
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
            (0, _context.descend)((context)=>{
                const generalContext = context, specificContext = context, substitution = this.substitution.validate(generalContext, specificContext);
                if (substitution !== null) {
                    this.substitution = substitution;
                    substitutionValidates = true;
                }
            }, context);
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
        const context = specificContext, metavariableName = this.getMetavariableName(), simpleSubstitution = context.findSimpleSubstitutionByMetavariableName(metavariableName);
        if (simpleSubstitution !== null) {
            const substitutionString = this.getString(); ///
            context.trace(`Resolving the ${substitutionString} substitution...`);
            const substitution = this.unifyWithSimpleSubstitution(simpleSubstitution, generalContext, specificContext); ///
            if (substitution !== null) {
                let context;
                context = substitution.getContext();
                const specificContext = context; ///
                context = this.substitution.getContext();
                const generalContext = context; ///
                context = specificContext; ///
                const substitutionUnifies = this.unifySubstitution(substitution, generalContext, specificContext);
                if (substitutionUnifies) {
                    resolved = true;
                }
                if (resolved) {
                    this.resolved = true;
                    context.debug(`...resolved the '${substitutionString}' substitution.`);
                }
            }
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
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementAndMetavariable)(statement, metavariable, context), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context);
                statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, context);
            }, context);
        }, context);
        return statementSubstitution;
    }
    static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, context) {
        statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
        let statementSubstitution;
        (0, _context.ablate)((context)=>{
            (0, _context.instantiate)((context)=>{
                const statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementMetavariableAndSubstitution)(statement, metavariable, substitution), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context);
                statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, context);
            }, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgYXR0ZW1wdCwgZGVzY2VuZCwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCA9IHJlc29sdmVkO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICAgIHRoaXMudGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50O1xuICAgIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VGFyZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRNdGF2YXJpYWJsZU5hbWUoKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRNdGF2YXJpYWJsZU5hbWUoKTsgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE1ldGF2YXJpYWJsZU5hbWUoKTsgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpOyB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCksXG4gICAgICAgICAgY29tcGFyZXNUb1N0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpe1xuICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICgodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpICYmIChzdWJzdGl0dXRpb24gIT09IG51bGwpKXtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLmlzRXF1YWxUbyhzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uKSB7XG4gICAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTsgfVxuXG4gIHZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZFN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFZhbGlkU3Vic3RpdHV0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkU3Vic3RpdHV0aW9uKSB7XG4gICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSB2YWxpZFN1YnN0aXR1dGlvbjsgIC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGpvaW4oKGNvbnRleHQpID0+IHtcbiAgICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3Vic3RpdHV0aW9uKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU3Vic3RpdHV0aW9uKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG5cbiAgICAgICAgICBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXdkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgdGFyZ2V0U3RhdGVtZW50U3RyaW5nID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFNpbmd1bGFyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudCA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRTdGF0ZW1lbnRTdHJpbmd9JyB0YXJnZXQgc3RhdGVtZW50IGlzIG5vdCBzaW5ndWxhci5gKTtcbiAgICB9XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRTdGF0ZW1lbnRTdHJpbmd9JyB0YXJnZXQgc3RhdGVtZW50Li4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgc3Vic3RpdHV0aW9uVW5pZmllcyA9IHVuaWZ5U3Vic3RpdHV0aW9uKGdlbmVyYWxTdWJzdGl0dXRpb24sIHNwZWNpZmljU3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdCgpO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5Q29tcGxleFN1YnN0aXR1dGlvbihjb21wbGV4U3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAvLy9cbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvblN0cmluZyA9IGNvbXBsZXhTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nfScgY29tcGxleCBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nfScgc2ltcGxlIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24gPSBjb250ZXh0LmdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uKG5lc3RlZCk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb247ICAvLy9cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICB1bmlmeVJlcGxhY2VtZW50U3RhdGVtZW50KHJlcGxhY2VtZW50U3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlXaXRoU2ltcGxlU3Vic3RpdHV0aW9uKHNpbXBsZVN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb247XG5cbiAgICBjb25zdCBjb21wbGV4U3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uQ29udGV4dCA9IHNpbXBsZVN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbkNvbnRleHQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgIGdlbmVyYWxDb250ZXh0ID0gc2ltcGxlU3Vic3RpdHV0aW9uQ29udGV4dDsgLy8vXG5cbiAgICBzcGVjaWZpY0NvbnRleHQgPSBjb21wbGV4U3Vic3RpdHV0aW9uQ29udGV4dDsgIC8vL1xuXG4gICAgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5Q29tcGxleFN1YnN0aXR1dGlvbihjb21wbGV4U3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICByZXNvbHZlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnVuaWZ5V2l0aFNpbXBsZVN1YnN0aXR1dGlvbihzaW1wbGVTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAvLy9cblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IHRoaXMuc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0U3RhdGVtZW50LCByZXBsYWNlbWVudFN0YXRlbWVudCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUodGFyZ2V0U3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFN0YXRlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsImlzUmVzb2x2ZWQiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRUYXJnZXRTdGF0ZW1lbnQiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudCIsImdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldE10YXZhcmlhYmxlTmFtZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwidGFyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsImNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiIsImNvbXBhcmVNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJ2YWxpZGF0ZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0Q29udGV4dCIsImpvaW4iLCJhdHRlbXB0IiwidGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN1YnN0aXR1dGlvbiIsImNvbW1pdCIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0cmluZyIsImRlc2NlbmQiLCJ0YXJnZXRTdGF0ZW1lbnRTdHJpbmciLCJ0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInJlY29uY2lsZSIsInVuaWZ5Q29tcGxleFN1YnN0aXR1dGlvbiIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmciLCJjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nIiwic2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyIsInJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyIsInVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJuZXN0ZWQiLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsImdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyIsInN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlXaXRoU2ltcGxlU3Vic3RpdHV0aW9uIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwic2ltcGxlU3Vic3RpdHV0aW9uQ29udGV4dCIsImNvbXBsZXhTdWJzdGl0dXRpb25Db250ZXh0IiwicmVzb2x2ZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5hbWUiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ubiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwiYWJsYXRlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJnZXRUYXJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7cUVBVnlCOzBCQUVGO3VCQUNXOzBCQUNTOzZCQUNNO3lCQUNrQjt5QkFDSTt3QkFDc0U7Ozs7OztNQUU3SSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDhCQUE4QkMscUJBQVk7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsb0JBQW9CLENBQUU7UUFDaEcsS0FBSyxDQUFDTixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLG9CQUFvQixHQUFHQTtJQUM5QjtJQUVBQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDSixZQUFZO0lBQzFCO0lBRUFLLHFCQUFxQjtR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