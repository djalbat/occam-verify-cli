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
    constructor(context, string, node, lineIndex, generalContext, resolved, substitution, targetStatement, replacementStatement){
        super(context, string, node, lineIndex, generalContext);
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
    validate(substitution, generalContext, specificContext) {
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
            (0, _context.join)((generalContext)=>{
                (0, _context.join)((specificContext)=>{
                    (0, _context.attempt)((generalContext, specificContext)=>{
                        const targetStatementValidates = this.validateTargetStatement(generalContext, specificContext);
                        if (targetStatementValidates) {
                            const replacementStatementValidates = this.validateReplacementStatement(generalContext, specificContext);
                            if (replacementStatementValidates) {
                                const substitutionValidates = this.validateSubstitution(substitution, generalContext, specificContext);
                                if (substitutionValidates) {
                                    validates = true;
                                }
                            }
                        }
                        if (validates) {
                            this.setContexts(generalContext, specificContext);
                        }
                    }, generalContext, specificContext);
                }, specificContext, context);
            }, generalContext, context);
        }
        if (validates) {
            const substitution = this; ///
            statementSubstitution = substitution; ///
            context.addSubstitution(substitution);
            context.debug(`...validated the '${statementSubstitutionString}' statement substitution.`);
        }
        return statementSubstitution;
    }
    validateSubstitution(substitution, generalContext, specificContext) {
        let substitutionValidates = true;
        if (substitution !== null) {
            const context = generalContext, statementSubstitutionString = this.getString();
            context.trace(`Validating the '${statementSubstitutionString}' statement substitution's substitution...`);
            this.substitution = substitution;
            substitutionValidates = true;
            if (substitutionValidates) {
                context.debug(`...validatewd the '${statementSubstitutionString}' statement substitution's substitution.`);
            }
        }
        return substitutionValidates;
    }
    validateTargetStatement(generalContext, specificContext) {
        let targetStatementValidates = false;
        const context = generalContext, statementSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${statementSubstitutionString}' statement substitution's target statement...`);
        const targetStatementSingular = this.targetStatement.isSingular();
        if (targetStatementSingular) {
            (0, _context.descend)((context)=>{
                const targetStatement = this.targetStatement.validate(context);
                if (targetStatement !== null) {
                    targetStatementValidates = true;
                }
            }, context);
        } else {
            const targetStatementString = this.targetStatement.getString();
            context.debug(`The '${targetStatementString}' target statement is not singular.`);
        }
        if (targetStatementValidates) {
            context.debug(`...validated the '${statementSubstitutionString}' statement substitution's target statement...`);
        }
        return targetStatementValidates;
    }
    validateReplacementStatement(generalContext, specificContext) {
        let replacementStatementValidates = false;
        const context = specificContext, statementSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${statementSubstitutionString}' statement substitution's replacement statement...`);
        (0, _context.descend)((context)=>{
            const replacementStatement = this.replacementStatement.validate(context);
            if (replacementStatement !== null) {
                replacementStatementValidates = true;
            }
        }, context);
        if (replacementStatementValidates) {
            context.debug(`...validated the '${statementSubstitutionString}' statement substitution's replacement statement.`);
        }
        return replacementStatementValidates;
    }
    unifySimpleSubstitution(simpleSubstitution, context) {
        let simpleSubstitutionUnifies;
        const substitutionString = this.substitution.getString(), simpleSubstitutionString = simpleSubstitution.getString();
        context.trace(`Unifying the '${simpleSubstitutionString}' simple substitution with the '${substitutionString}' substitution...`);
        const specificSubstitution = simpleSubstitution, generalSubstitution = this.substitution, specificContexts = specificSubstitution.getContexts(), generalContexts = generalSubstitution.getContexts();
        (0, _context.join)((specificContext)=>{
            (0, _context.join)((generalContext)=>{
                (0, _context.reconcile)((specificContext)=>{
                    simpleSubstitutionUnifies = (0, _unify.unifySubstitution)(generalSubstitution, specificSubstitution, generalContext, specificContext);
                    if (simpleSubstitutionUnifies) {
                        specificContext.commit(context);
                    }
                }, specificContext);
            }, ...generalContexts);
        }, ...specificContexts, context);
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
            substitution = substitution.validate(generalContext, specificContext); ///
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
            (0, _context.unserialise)((json, generalContext, specificContext)=>{
                const context = specificContext; ///
                (0, _context.instantiate)((context)=>{
                    const { string, lineIndex } = json, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), node = statementSubstitutionNode, resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context), targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context);
                    statementSubstitutionn = new StatementSubstitution(context, string, node, lineIndex, generalContext, resolved, substitution, targetStatement, replacementStatement);
                }, context);
            }, json, context);
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
function resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const resolved = true;
    return resolved;
}
function substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const substitutionNode = statementSubstitutionNode.getSubstitutionNode(), substitution = context.findStatementByStatementNode(substitutionNode);
    return substitution;
}
function targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const targetStatementNode = statementSubstitutionNode.getTargetStatementNode(), targetStatement = context.findStatementByStatementNode(targetStatementNode);
    return targetStatement;
}
function replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const replacementStatementNode = statementSubstitutionNode.getReplacementStatementNode(), replacementStatement = context.findStatementByStatementNode(replacementStatementNode);
    return replacementStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgZGVzY2VuZCwgcmVjb25jaWxlLCBhdHRlbXB0LCB1bnNlcmlhbGlzZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUsIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3RhdGVtZW50U3Vic3RpdHV0aW9uIGV4dGVuZHMgU3Vic3RpdHV0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGdlbmVyYWxDb250ZXh0LCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGdlbmVyYWxDb250ZXh0KTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgICB0aGlzLnRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudDtcbiAgICB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVkO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFRhcmdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRhcmdldE5vZGUgPSB0YXJnZXRTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiB0YXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50Lm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgIGNvbXBhcmVzVG9TdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3RhdGVtZW50O1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSBmYWxzZTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmICgodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpICYmIChzdWJzdGl0dXRpb24gPT09IG51bGwpKXtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoKHRoaXMuc3Vic3RpdHV0aW9uICE9PSBudWxsKSAmJiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSl7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24gPSB0aGlzLnN1YnN0aXR1dGlvbi5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbikge1xuICAgICAgICBjb21wYXJlc1RvU3Vic3RpdHV0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgam9pbigoZ2VuZXJhbENvbnRleHQpID0+IHtcbiAgICAgICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgYXR0ZW1wdCgoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dHMoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG4gICAgICB9LCBnZW5lcmFsQ29udGV4dCwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3Mgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuXG4gICAgICBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRld2QgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50ID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTaW1wbGVTdWJzdGl0dXRpb24oc2ltcGxlU3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmcgPSBzaW1wbGVTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nfScgc2ltcGxlIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRzID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0Q29udGV4dHMoKSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0cyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0Q29udGV4dHMoKTtcblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgam9pbigoZ2VuZXJhbENvbnRleHQpID0+IHtcbiAgICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQpXG4gICAgICB9LCAuLi5nZW5lcmFsQ29udGV4dHMpO1xuICAgIH0sIC4uLnNwZWNpZmljQ29udGV4dHMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NpbXBsZVN1YnN0aXR1dGlvblN0cmluZ30nIHNpbXBsZSBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uKGNvbXBsZXhTdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb250ZXh0ID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgbGV0IHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbmVzdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24gPSBjb250ZXh0LmdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uKG5lc3RlZCk7XG5cbiAgICAgICAgc3Vic3RpdHV0aW9uID0gc29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb247ICAvLy9cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nfScgY29tcGxleCBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nfScgc2ltcGxlIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSByZXBsYWNlbWVudFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudCB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcztcbiAgfVxuXG4gIHJlc29sdmUoY29udGV4dCkge1xuICAgIGxldCByZXNvbHZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uID0gdGhpczsgLy8vXG5cbiAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAke3N1YnN0aXR1dGlvblN0cmluZ30gc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHNpbXBsZVN1YnN0aXR1dGlvbi51bmlmeUNvbXBsZXhTdWJzdGl0dXRpb24oY29tcGxleFN1YnN0aXR1dGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyA9IGNvbXBsZXhTdWJzdGl0dXRpb24udW5pZnlTaW1wbGVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJlc29sdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXNvbHZlZCkge1xuICAgICAgICAgIHRoaXMucmVzb2x2ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4ucmVzb2x2ZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJTdGF0ZW1lbnRTdWJzdGl0dXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25uID0gbnVsbDtcblxuICAgIGNvbnN0IHsgbmFtZSB9ID0ganNvbjtcblxuICAgIGlmICh0aGlzLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHVuc2VyaWFsaXNlKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25uID0gbmV3IFN0YXRlbWVudFN1YnN0aXR1dGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpO1xuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIGpzb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlc29sdmVkID0gdHJ1ZTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmZ1bmN0aW9uIHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cblxuZnVuY3Rpb24gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHRhcmdldFN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSh0YXJnZXRTdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUocmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiU3Vic3RpdHV0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJnZW5lcmFsQ29udGV4dCIsInJlc29sdmVkIiwic3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJpc1Jlc29sdmVkIiwiZ2V0U3Vic3RpdHV0aW9uIiwiZ2V0VGFyZ2V0U3RhdGVtZW50IiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUYXJnZXROb2RlIiwidGFyZ2V0U3RhdGVtZW50Tm9kZSIsInRhcmdldE5vZGUiLCJnZXRSZXBsYWNlbWVudE5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiLCJyZXBsYWNlbWVudE5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiaXNTaW1wbGUiLCJzaW1wbGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiY29tcGFyZVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiY29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJjb21wYXJlc1RvU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uIiwidmFsaWRhdGUiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZXRDb250ZXh0Iiwiam9pbiIsImF0dGVtcHQiLCJ0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudCIsInN1YnN0aXR1dGlvblZhbGlkYXRlcyIsInZhbGlkYXRlU3Vic3RpdHV0aW9uIiwic2V0Q29udGV4dHMiLCJhZGRTdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJkZXNjZW5kIiwidGFyZ2V0U3RhdGVtZW50U3RyaW5nIiwidW5pZnlTaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNDb250ZXh0cyIsImdldENvbnRleHRzIiwiZ2VuZXJhbENvbnRleHRzIiwicmVjb25jaWxlIiwidW5pZnlTdWJzdGl0dXRpb24iLCJjb21taXQiLCJ1bmlmeUNvbXBsZXhTdWJzdGl0dXRpb24iLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvblN0cmluZyIsInJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyIsInVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJuZXN0ZWQiLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsImdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyIsInJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwic3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJyZXNvbHZlIiwiZmluZFNpbXBsZVN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25uIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImFibGF0ZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwiZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7cUVBVnlCOzBCQUVGO3VCQUNXOzBCQUNTOzZCQUNNO3lCQUNrQjt5QkFDaUI7d0JBQ3lEOzs7Ozs7TUFFN0ksV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw4QkFBOEJDLHFCQUFZO0lBQ3BFLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsY0FBYyxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFQyxvQkFBb0IsQ0FBRTtRQUMzSCxLQUFLLENBQUNSLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDO1FBRXhDLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBO0lBQzlCO0lBRUFDLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0osUUFBUTtJQUN0QjtJQUVBSyxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNKLFlBQVk7SUFDMUI7SUFFQUsscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDSixlQUFlO0lBQzdCO0lBRUFLLDBCQUEwQjtRQUN4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