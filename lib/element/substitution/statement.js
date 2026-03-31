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
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const { name } = this.constructor, string = this.getString(), lineIndex = this.getLineIndex(), json = {
                name,
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
    static fromJSON(json, context) {
        let statementSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            (0, _context.unserialise)((json, context)=>{
                (0, _context.instantiate)((context)=>{
                    const { string, lineIndex } = json, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), node = statementSubstitutionNode, generalContext = generalContextFromStatementSubstitutionNode(statementSubstitutionNode, context), resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context), targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZSwgZGVzY2VuZCwgcmVjb25jaWxlLCBhdHRlbXB0LCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgdGhpcy5yZXNvbHZlZCA9IHJlc29sdmVkO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuICAgIHRoaXMudGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50O1xuICAgIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGlzUmVzb2x2ZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZWQ7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZ2V0VGFyZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGU7XG4gIH1cblxuICBnZXRUYXJnZXROb2RlKCkge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRhcmdldFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHRhcmdldE5vZGU7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudE5vZGUoKSB7XG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgcmVwbGFjZW1lbnROb2RlID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiByZXBsYWNlbWVudE5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVOb2RlKCkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpOyB9XG5cbiAgaXNTaW1wbGUoKSB7XG4gICAgY29uc3Qgc2ltcGxlID0gKHRoaXMuc3Vic3RpdHV0aW9uID09PSBudWxsKTtcblxuICAgIHJldHVybiBzaW1wbGU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkgeyByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpOyB9XG5cbiAgY29tcGFyZVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCksXG4gICAgICAgICAgY29tcGFyZXNUb1N0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudDsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdGF0ZW1lbnQ7XG4gIH1cblxuICBjb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlcikge1xuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5jb21wYXJlUGFyYW1ldGVyKHBhcmFtZXRlciksXG4gICAgICAgICAgY29tcGFyZXNUb1BhcmFtZXRlciA9IHRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXI7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUGFyYW1ldGVyO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKCh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCkgJiYgKHN1YnN0aXR1dGlvbiA9PT0gbnVsbCkpe1xuICAgICAgY29tcGFyZXNUb1N1YnN0aXR1dGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICgodGhpcy5zdWJzdGl0dXRpb24gIT09IG51bGwpICYmIChzdWJzdGl0dXRpb24gIT09IG51bGwpKXtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLmlzRXF1YWxUbyhzdWJzdGl0dXRpb24pO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uRXF1YWxUb1N1YnN0aXR1aW9uKSB7XG4gICAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgam9pbigoY29udGV4dCkgPT4ge1xuICAgICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdWJzdGl0dXRpb24oZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIHRoaXMuc2V0R2VuZXJhbENvbnRleHQoZ2VuZXJhbENvbnRleHQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU3Vic3RpdHV0aW9uKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgIGlmICh0aGlzLnN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLnZhbGlkYXRlKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRld2QgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50ID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRhcmdldFN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyAnJHtyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZ30nIHJlcGxhY2VtZW50IHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVNpbXBsZVN1YnN0aXR1dGlvbihzaW1wbGVTdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuc3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyA9IHNpbXBsZVN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKTtcblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgam9pbigoZ2VuZXJhbENvbnRleHQpID0+IHtcbiAgICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQpXG4gICAgICB9LCBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCBzcGVjaWZpY1N1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5Q29tcGxleFN1YnN0aXR1dGlvbihjb21wbGV4U3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgY29tcGxleFN1YnN0aXR1dGlvblN0cmluZyA9IGNvbXBsZXhTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nfScgY29tcGxleCBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nfScgc2ltcGxlIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29udGV4dCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGxldCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCksXG4gICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IG5lc3RlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uID0gY29udGV4dC5nZXRTb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbihuZXN0ZWQpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uOyAgLy8vXG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbi52YWxpZGF0ZShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICB1bmlmeVJlcGxhY2VtZW50U3RhdGVtZW50KHJlcGxhY2VtZW50U3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSB0aGlzOyAvLy9cblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5Q29tcGxleFN1YnN0aXR1dGlvbihjb21wbGV4U3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gY29tcGxleFN1YnN0aXR1dGlvbi51bmlmeVNpbXBsZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IG5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRMaW5lSW5kZXgoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxDb250ZXh0RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBnZW5lcmFsQ29udGV4dCwgcmVzb2x2ZWQsIHN1YnN0aXR1dGlvbiwgdGFyZ2V0U3RhdGVtZW50LCByZXBsYWNlbWVudFN0YXRlbWVudCk7XG4gICAgICAgIH0sIGNvbnRleHQpO1xuICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbm47XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHRhcmdldFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiB0YXJnZXRTdGF0ZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHJlc29sdmVkID0gdHJ1ZTtcblxuICByZXR1cm4gcmVzb2x2ZWQ7XG59XG5cbmZ1bmN0aW9uIHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUuZ2V0U3Vic3RpdHV0aW9uTm9kZSgpLFxuICAgICAgICBzdWJzdGl0dXRpb24gPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhbENvbnRleHRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgcmV0dXJuIGdlbmVyYWxDb250ZXh0O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwiZ2VuZXJhbENvbnRleHQiLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50IiwiaXNSZXNvbHZlZCIsImdldFN1YnN0aXR1dGlvbiIsImdldFRhcmdldFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFN0YXRlbWVudE5vZGUiLCJ0YXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsImNvbXBhcmVzVG9TdGF0ZW1lbnQiLCJjb21wYXJlUGFyYW1ldGVyIiwicGFyYW1ldGVyIiwidGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciIsImNvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkVxdWFsVG9TdWJzdGl0dWlvbiIsInZhbGlkYXRlIiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2V0Q29udGV4dCIsImpvaW4iLCJhdHRlbXB0IiwidGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN1YnN0aXR1dGlvbiIsImNvbW1pdCIsImFkZFN1YnN0aXR1dGlvbiIsInNldEdlbmVyYWxDb250ZXh0Iiwic3Vic3RpdHV0aW9uU3RyaW5nIiwiZGVzY2VuZCIsInRhcmdldFN0YXRlbWVudFN0cmluZyIsInRhcmdldFN0YXRlbWVudFNpbmd1bGFyIiwiaXNTaW5ndWxhciIsInJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwidW5pZnlTaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzIiwic2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0IiwiZ2V0R2VuZXJhbENvbnRleHQiLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0IiwicmVjb25jaWxlIiwidW5pZnlTdWJzdGl0dXRpb24iLCJ1bmlmeUNvbXBsZXhTdWJzdGl0dXRpb24iLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvblN0cmluZyIsInJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyIsInVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJuZXN0ZWQiLCJzb2xlTm9uVHJpdmlhbFN1YnN0aXR1dGlvbiIsImdldFNvbGVOb25Ucml2aWFsU3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyIsInN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwicmVzb2x2ZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJuYW1lIiwidG9KU09OIiwic2VyaWFsaXNlIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ubiIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImdlbmVyYWxDb250ZXh0RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiYWJsYXRlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJnZXRUYXJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztxRUFWeUI7MEJBRUY7dUJBQ1c7MEJBQ1M7NkJBQ007eUJBQ2tCO3lCQUM0Qjt3QkFDOEM7Ozs7OztNQUU3SSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDhCQUE4QkMscUJBQVk7SUFDcEUsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxjQUFjLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLG9CQUFvQixDQUFFO1FBQzNILEtBQUssQ0FBQ1IsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0M7UUFFeEMsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7SUFDOUI7SUFFQUMsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSixRQUFRO0lBQ3RCO0lBRUFLLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0osWUFBWTtJQUMxQjtJQUVBSyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNKLGVBQWU7SUFDN0I7SUFFQUssMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDSixvQkFBb0I7SUFDbEM7SUFFQUssK0JBQStCO1FBQzdCLE1BQU1YLE9BQU8sSUFBSSxDQUFDWSxPQUFPLElBQ25CQyw0QkFBNEJiLE1BQU0sR0FBRztRQUUz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