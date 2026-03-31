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
    toJSON() {
        const { name } = this.constructor, string = this.getString(), lineIndex = this.getLineIndex(), json = {
            name,
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        let statementSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), node = statementSubstitutionNode, generalContext = generalContextFromStatementSubstitutionNode(statementSubstitutionNode, context), resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context), targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context);
                statementSubstitutionn = new StatementSubstitution(context, string, node, lineIndex, generalContext, resolved, substitution, targetStatement, replacementStatement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgYXR0ZW1wdCwgZGVzY2VuZCwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCA9IHJlc29sdmVkO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICAgIHRoaXMudGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50O1xuICAgIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VGFyZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRhcmdldFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRhcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCksXG4gICAgICAgICAgY29tcGFyZXNUb1N0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpe1xuICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICgodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpICYmIChzdWJzdGl0dXRpb24gIT09IG51bGwpKXtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLmlzRXF1YWxUbyhzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uKSB7XG4gICAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgam9pbigoY29udGV4dCkgPT4ge1xuICAgICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdWJzdGl0dXRpb24oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIHRoaXMuc2V0R2VuZXJhbENvbnRleHQoZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU3Vic3RpdHV0aW9uKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRld2QgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50ID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVNpbXBsZVN1YnN0aXR1dGlvbihzaW1wbGVTdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyA9IHNpbXBsZVN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKTtcblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgam9pbigoZ2VuZXJhbENvbnRleHQpID0+IHtcbiAgICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQpXG4gICAgICB9LCBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCBzcGVjaWZpY1N1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5Q29tcGxleFN1YnN0aXR1dGlvbihjb21wbGV4U3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvblN0cmluZyA9IGNvbXBsZXhTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nfScgY29tcGxleCBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nfScgc2ltcGxlIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29udGV4dCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGxldCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCksXG4gICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uID0gY29udGV4dC5nZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbihuZXN0ZWQpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICB1bmlmeVJlcGxhY2VtZW50U3RhdGVtZW50KHJlcGxhY2VtZW50U3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSB0aGlzOyAvLy9cblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5Q29tcGxleFN1YnN0aXR1dGlvbihjb21wbGV4U3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gY29tcGxleFN1YnN0aXR1dGlvbi51bmlmeVNpbXBsZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9ubiA9IG51bGw7XG5cbiAgICBjb25zdCB7IG5hbWUgfSA9IGpzb247XG5cbiAgICBpZiAodGhpcy5uYW1lID09PSBuYW1lKSB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxDb250ZXh0RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9ubiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGdlbmVyYWxDb250ZXh0LCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHRhcmdldFN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSh0YXJnZXRTdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUocmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXNvbHZlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5mdW5jdGlvbiBzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb247XG59XG5cbmZ1bmN0aW9uIGdlbmVyYWxDb250ZXh0RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gIHJldHVybiBnZW5lcmFsQ29udGV4dDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImdlbmVyYWxDb250ZXh0IiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsImlzUmVzb2x2ZWQiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRUYXJnZXRTdGF0ZW1lbnQiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudCIsImdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwidGFyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJjb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25FcXVhbFRvU3Vic3RpdHVpb24iLCJ2YWxpZGF0ZSIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwidmFsaWRTdWJzdGl0dXRpb24iLCJmaW5kVmFsaWRTdWJzdGl0dXRpb24iLCJkZWJ1ZyIsImdldENvbnRleHQiLCJqb2luIiwiYXR0ZW1wdCIsInRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9uVmFsaWRhdGVzIiwidmFsaWRhdGVTdWJzdGl0dXRpb24iLCJjb21taXQiLCJhZGRTdWJzdGl0dXRpb24iLCJzZXRHZW5lcmFsQ29udGV4dCIsInN1YnN0aXR1dGlvblN0cmluZyIsImRlc2NlbmQiLCJ0YXJnZXRTdGF0ZW1lbnRTdHJpbmciLCJ0YXJnZXRTdGF0ZW1lbnRTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyIsInVuaWZ5U2ltcGxlU3Vic3RpdHV0aW9uIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwic2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyIsInNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0IiwiZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCIsImdldFNwZWNpZmljQ29udGV4dCIsInNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCIsInJlY29uY2lsZSIsInVuaWZ5U3Vic3RpdHV0aW9uIiwidW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsImNvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmciLCJyZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVJlcGxhY2VtZW50U3RhdGVtZW50IiwibmVzdGVkIiwic29sZU5vblRyaXZpYWxTdWJzdGl0dXRpb24iLCJnZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsInJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMiLCJzdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInJlc29sdmUiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwibmFtZSIsInRvSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbm4iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiZ2VuZXJhbENvbnRleHRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJhYmxhdGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsImdldFRhcmdldFN0YXRlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3FFQVZ5QjswQkFFRjt1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