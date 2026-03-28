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
    constructor(context, string, node, generalContext, resolved, substitution, targetStatement, replacementStatement){
        super(context, string, node, generalContext);
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
            this.setGeneralContext(generalContext);
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
    unifySimpleSubstitution(simpleSubstitution, context) {
        let simpleSubstitutionUnifies;
        const substitutionString = this.substitution.getString(), simpleSubstitutionString = simpleSubstitution.getString();
        context.trace(`Unifying the '${simpleSubstitutionString}' simple substitution with the '${substitutionString}' substitution...`);
        const generalSubstitution = this.substitution, specificSubstitution = simpleSubstitution, generalSubstitutionGeneralContext = generalSubstitution.getGeneralContext(), generalSubstitutionSpecificContext = generalSubstitution.getSpecificContext(), specificSubstitutionGeneralContext = specificSubstitution.getGeneralContext(), specificSubstitutionSpecificContext = specificSubstitution.getSpecificContext();
        (0, _context.join)((specificContext)=>{
            (0, _context.join)((generalContext)=>{
                (0, _context.reconcile)((specificContext)=>{
                    simpleSubstitutionUnifies = (0, _unify.unifySubstitution)(generalSubstitution, specificSubstitution, generalContext, specificContext);
                    if (simpleSubstitutionUnifies) {
                        specificContext.commit(context);
                    }
                }, specificContext);
            }, generalSubstitutionSpecificContext, generalSubstitutionGeneralContext);
        }, specificSubstitutionSpecificContext, specificSubstitutionGeneralContext, context);
        if (simpleSubstitutionUnifies) {
            context.trace(`...unified the '${simpleSubstitutionString}' simple substitution with the '${substitutionString}' substitution.`);
        }
        return simpleSubstitutionUnifies;
    }
    unifyComplexSubstitution(complexSubstitution, context) {
        let substitution = null;
        const simpleSubstitutionString = this.getString(), complexSubstitutionString = complexSubstitution.getString(); ///
        context.trace(`Unifying the '${complexSubstitutionString}' complex substitution with the '${simpleSubstitutionString}' simple substitution...`);
        context = complexSubstitution.getContext();
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
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
    resolve(context) {
        let resolved = false;
        const metavariableNode = this.getMetavariableNode(), simpleSubstitution = context.findSimpleSubstitutionByMetavariableNode(metavariableNode), complexSubstitution = this; ///
        if (simpleSubstitution !== null) {
            const substitutionString = this.getString(); ///
            context.trace(`Resolving the ${substitutionString} substitution...`);
            const substitution = simpleSubstitution.unifyComplexSubstitution(complexSubstitution, context);
            if (substitution !== null) {
                const simpleSubstitutionUnifies = complexSubstitution.unifySimpleSubstitution(substitution, context);
                if (simpleSubstitutionUnifies) {
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
                const { string } = json, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), node = statementSubstitutionNode, generalContext = generalContextFromStatementSubstitutionNode(statementSubstitutionNode, context), resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context), targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context);
                statementSubstitutionn = new StatementSubstitution(context, string, node, generalContext, resolved, substitution, targetStatement, replacementStatement);
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
function resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const resolved = true;
    return resolved;
}
function substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const substitutionNode = statementSubstitutionNode.getSubstitutionNode(), substitution = context.findStatementByStatementNode(substitutionNode);
    return substitution;
}
function generalContextFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const generalContext = context; ///
    return generalContext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgYXR0ZW1wdCwgZGVzY2VuZCwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGdlbmVyYWxDb250ZXh0LCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBnZW5lcmFsQ29udGV4dCk7XG5cbiAgICB0aGlzLnJlc29sdmVkID0gcmVzb2x2ZWQ7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gICAgdGhpcy50YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRUYXJnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0YXRlbWVudDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gZmFsc2U7XG5cbiAgICBpZiAoZmFsc2UpIHtcbiAgICAgIC8vL1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKSAmJiAoc3Vic3RpdHV0aW9uID09PSBudWxsKSl7XG4gICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkpe1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uID0gdGhpcy5zdWJzdGl0dXRpb24uaXNFcXVhbFRvKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24pIHtcbiAgICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dXRpb247XG4gIH1cblxuICB2YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBqb2luKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN1YnN0aXR1dGlvbihnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgdGhpcy5zZXRHZW5lcmFsQ29udGV4dChnZW5lcmFsQ29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTdWJzdGl0dXRpb24oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMuc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24udmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuXG4gICAgICAgICAgc3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25WYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGV3ZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHRhcmdldFN0YXRlbWVudFN0cmluZyA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHt0YXJnZXRTdGF0ZW1lbnRTdHJpbmd9JyB0YXJnZXQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmlzU2luZ3VsYXIoKTtcblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhcikge1xuICAgICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnQgPSB0aGlzLnRhcmdldFN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudCBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U2ltcGxlU3Vic3RpdHV0aW9uKHNpbXBsZVN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5zdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nID0gc2ltcGxlU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NpbXBsZVN1YnN0aXR1dGlvblN0cmluZ30nIHNpbXBsZSBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0R2VuZXJhbENvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0ID0gZ2VuZXJhbFN1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0R2VuZXJhbENvbnRleHQoKSxcbiAgICAgICAgICBzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFNwZWNpZmljQ29udGV4dCgpO1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBqb2luKChnZW5lcmFsQ29udGV4dCkgPT4ge1xuICAgICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMgPSB1bmlmeVN1YnN0aXR1dGlvbihnZW5lcmFsU3Vic3RpdHV0aW9uLCBzcGVjaWZpY1N1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHNwZWNpZmljQ29udGV4dClcbiAgICAgIH0sIGdlbmVyYWxTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQsIGdlbmVyYWxTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQsIHNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NpbXBsZVN1YnN0aXR1dGlvblN0cmluZ30nIHNpbXBsZSBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uKGNvbXBsZXhTdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb250ZXh0ID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgbGV0IHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24gPSBjb250ZXh0LmdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uKG5lc3RlZCk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb247ICAvLy9cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7Y29tcGxleFN1YnN0aXR1dGlvblN0cmluZ30nIGNvbXBsZXggc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3NpbXBsZVN1YnN0aXR1dGlvblN0cmluZ30nIHNpbXBsZSBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHJlcGxhY2VtZW50U3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmd9JyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXM7XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVzb2x2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24udW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uKGNvbXBsZXhTdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMgPSBjb21wbGV4U3Vic3RpdHV0aW9uLnVuaWZ5U2ltcGxlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgICByZXNvbHZlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzb2x2ZWQpIHtcbiAgICAgICAgICB0aGlzLnJlc29sdmVkID0gdHJ1ZTtcblxuICAgICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnJlc29sdmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3RhdGVtZW50U3Vic3RpdHV0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsQ29udGV4dEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICByZXNvbHZlZCA9IHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgZ2VuZXJhbENvbnRleHQsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHRhcmdldFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiB0YXJnZXRTdGF0ZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlc29sdmVkID0gdHJ1ZTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmZ1bmN0aW9uIHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhbENvbnRleHRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIGdlbmVyYWxDb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiZ2VuZXJhbENvbnRleHQiLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50IiwiaXNSZXNvbHZlZCIsImdldFN1YnN0aXR1dGlvbiIsImdldFRhcmdldFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFN0YXRlbWVudE5vZGUiLCJ0YXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsImNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiIsInZhbGlkYXRlIiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0Q29udGV4dCIsImpvaW4iLCJhdHRlbXB0IiwidGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN1YnN0aXR1dGlvbiIsImNvbW1pdCIsImFkZFN1YnN0aXR1dGlvbiIsInNldEdlbmVyYWxDb250ZXh0Iiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiZGVzY2VuZCIsInRhcmdldFN0YXRlbWVudFN0cmluZyIsInRhcmdldFN0YXRlbWVudFNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwidW5pZnlTaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzIiwic2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0IiwiZ2V0R2VuZXJhbENvbnRleHQiLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0IiwicmVjb25jaWxlIiwidW5pZnlTdWJzdGl0dXRpb24iLCJ1bmlmeUNvbXBsZXhTdWJzdGl0dXRpb24iLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvblN0cmluZyIsInJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyIsInVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJuZXN0ZWQiLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsImdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyIsInN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwicmVzb2x2ZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ubiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJnZW5lcmFsQ29udGV4dEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImFibGF0ZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwiZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7cUVBVnlCOzBCQUVGO3VCQUNXOzBCQUNTOzZCQUNNO3lCQUNrQjt5QkFDSTt3QkFDc0U7Ozs7OztNQUU3SSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDhCQUE4QkMscUJBQVk7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsY0FBYyxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFQyxvQkFBb0IsQ0FBRTtRQUNoSCxLQUFLLENBQUNQLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdB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