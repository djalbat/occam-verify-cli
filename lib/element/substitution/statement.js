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
    getTargetNode() {
        const targetStatementNode = this.targetStatement.getNode(), targetNode = targetStatementNode; ///
        return targetNode;
    }
    getReplacementNode() {
        const replacementStatementNode = this.replacementStatement.getNode(), replacementNode = replacementStatementNode; ///
        return replacementNode;
    }
    getMetavariableNode() {
        return this.targetStatement.getMetavariableNode();
    }
    isSimple() {
        const simple = this.substitution === null;
        return simple;
    }
    matchMetavariableNode(metavariableNode) {
        return this.targetStatement.matchMetavariableNode(metavariableNode);
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
            const context = generalContext, substitutionString = this.substitution.getString(), statementSubstitutionString = this.getString();
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
            substitution = substitution.validate(generalContext, specificContext);
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
    resolve(generalContext, specificContext) {
        let resolved = false;
        const context = specificContext, metavariableNode = this.getMetavariableNode(), simpleSubstitution = context.findSimpleSubstitutionByMetavariableNode(metavariableNode), complexSubstitution = this; ///
        if (simpleSubstitution !== null) {
            let context;
            context = this.getContext();
            const specificContext = context; ///
            context = simpleSubstitution.getContext();
            const generalContext = context; ///
            context = specificContext; ///
            const substitutionString = this.getString(); ///
            context.trace(`Resolving the ${substitutionString} substitution...`);
            const substitution = simpleSubstitution.unifyComplexSubstitution(complexSubstitution, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgYXR0ZW1wdCwgZGVzY2VuZCwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCA9IHJlc29sdmVkO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICAgIHRoaXMudGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50O1xuICAgIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VGFyZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRhcmdldFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRhcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCksXG4gICAgICAgICAgY29tcGFyZXNUb1N0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpe1xuICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICgodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpICYmIChzdWJzdGl0dXRpb24gIT09IG51bGwpKXtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLmlzRXF1YWxUbyhzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uKSB7XG4gICAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgam9pbigoY29udGV4dCkgPT4ge1xuICAgICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdWJzdGl0dXRpb24oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTdWJzdGl0dXRpb24oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGV3ZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRhcmdldFN0YXRlbWVudFN0cmluZyA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRTdGF0ZW1lbnRTdHJpbmd9JyB0YXJnZXQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnQgPSB0aGlzLnRhcmdldFN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudCBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHN1YnN0aXR1dGlvblVuaWZpZXMgPSB1bmlmeVN1YnN0aXR1dGlvbihnZW5lcmFsU3Vic3RpdHV0aW9uLCBzcGVjaWZpY1N1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUNvbXBsZXhTdWJzdGl0dXRpb24oY29tcGxleFN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgLy8vXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmcgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29tcGxleFN1YnN0aXR1dGlvblN0cmluZ30nIGNvbXBsZXggc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3NpbXBsZVN1YnN0aXR1dGlvblN0cmluZ30nIHNpbXBsZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCksXG4gICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uID0gY29udGV4dC5nZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbihuZXN0ZWQpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICB1bmlmeVJlcGxhY2VtZW50U3RhdGVtZW50KHJlcGxhY2VtZW50U3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgcmVzb2x2ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uID0gdGhpczsgLy8vXG5cbiAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBsZXQgY29udGV4dDtcblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzaW1wbGVTdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5Q29tcGxleFN1YnN0aXR1dGlvbihjb21wbGV4U3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgY29udGV4dDtcblxuICAgICAgICBjb250ZXh0ID0gc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IHRoaXMuc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgdGFyZ2V0U3RhdGVtZW50LCByZXBsYWNlbWVudFN0YXRlbWVudCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUodGFyZ2V0U3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFN0YXRlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsImlzUmVzb2x2ZWQiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRUYXJnZXRTdGF0ZW1lbnQiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudCIsImdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwidGFyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJjb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24iLCJ2YWxpZGF0ZSIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0Q29udGV4dCIsImpvaW4iLCJhdHRlbXB0IiwidGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN1YnN0aXR1dGlvbiIsImNvbW1pdCIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvblN0cmluZyIsImRlc2NlbmQiLCJ0YXJnZXRTdGF0ZW1lbnRTdHJpbmciLCJ0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyIsInVuaWZ5U3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uVW5pZmllcyIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsInJlY29uY2lsZSIsInVuaWZ5Q29tcGxleFN1YnN0aXR1dGlvbiIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmciLCJjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nIiwic2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyIsInJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyIsInVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJuZXN0ZWQiLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsImdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyIsInN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwicmVzb2x2ZSIsInNpbXBsZVN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ubiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiYWJsYXRlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJnZXRUYXJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7cUVBVnlCOzBCQUVGO3VCQUNXOzBCQUNTOzZCQUNNO3lCQUNrQjt5QkFDSTt3QkFDc0U7Ozs7OztNQUU3SSxX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