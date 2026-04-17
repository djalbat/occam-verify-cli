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
    constructor(contexts, string, node, lineIndex, resolved, substitution, targetStatement, replacementStatement){
        super(contexts, string, node, lineIndex);
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
    validate(substitution, context) {
        let statementSubstitution = null;
        const statementSubstitutionString = this.getString(); ///
        context.trace(`Validating the '${statementSubstitutionString}' statement substitution...`);
        let validates = false;
        const validSubstitution = this.findValidSubstitution(context);
        if (validSubstitution) {
            validates = true;
            statementSubstitution = validSubstitution; ///
            context.debug(`...the '${statementSubstitutionString}' statement substitution is already valid.`);
        } else {
            const generalContext = this.getGeneralContext(), specificContext = this.getSpecificContext();
            (0, _context.attempts)((generalContext, specificContext)=>{
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
                    this.commit(generalContext, specificContext);
                }
            }, generalContext, specificContext);
            if (validates) {
                const substitution = this; ///
                statementSubstitution = substitution; ///
                context.addSubstitution(substitution);
            }
        }
        if (validates) {
            context.debug(`...validated the '${statementSubstitutionString}' statement substitution.`);
        }
        return statementSubstitution;
    }
    validateSubstitution(substitution, generalContext, specificContext) {
        let substitutionValidates = true;
        if (substitution !== null) {
            const context = generalContext, statementSubstitutionString = this.getString(); ///
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
            (0, _context.manifest)((context)=>{
                (0, _context.descend)((context)=>{
                    const targetStatement = this.targetStatement.validate(context);
                    if (targetStatement !== null) {
                        targetStatementValidates = true;
                    }
                }, context);
            }, specificContext, context);
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
        const simpleSubstitution = this, simpleSubstitutionGSpecificContext = simpleSubstitution.getSpecificContext(), complexSubstitutionGSpecificContext = complexSubstitution.getSpecificContext(), generalContext = simpleSubstitutionGSpecificContext, specificContext = complexSubstitutionGSpecificContext; ///
        let simpleSubstitutionUnifies = false;
        (0, _context.join)((context)=>{
            const specificContext = context; ///
            (0, _context.reconcile)((specificContext)=>{
                const replacementStatement = complexSubstitution.getReplacementStatement(), replacementStatementUnifies = this.unifyReplacementStatement(replacementStatement, generalContext, specificContext);
                if (replacementStatementUnifies) {
                    const context = specificContext, soleNonTrivialDerivedSubstitution = context.getSoleNonTrivialDerivedSubstitution();
                    substitution = soleNonTrivialDerivedSubstitution; ///
                }
            }, specificContext);
        }, specificContext, context);
        if (substitution !== null) {
            substitution = substitution.validate(context); ///
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
        const metavariableNode = this.getMetavariableNode(), simpleDerivedSubstitution = context.findSimpleDerivedSubstitutionByMetavariableNode(metavariableNode), complexSubstitution = this, simpleSubstitution = simpleDerivedSubstitution; ///
        if (simpleSubstitution !== null) {
            const substitutionString = this.getString(); ///
            context.trace(`Resolving the ${substitutionString} substitution...`);
            const substitution = simpleSubstitution.unifyComplexSubstitution(complexSubstitution, context);
            if (substitution !== null) {
                const simpleSubstitution = substitution, simpleSubstitutionUnifies = complexSubstitution.unifySimpleSubstitution(simpleSubstitution, context);
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
            (0, _context.unserialises)((json, generalContext, specificContext)=>{
                const context = specificContext; ///
                (0, _context.instantiate)((context)=>{
                    const { string, lineIndex } = json, specificContext = context, contexts = [
                        generalContext,
                        specificContext
                    ], statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), node = statementSubstitutionNode, resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, generalContext, specificContext), targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, context), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, context);
                    statementSubstitutionn = new StatementSubstitution(contexts, string, node, lineIndex, resolved, substitution, targetStatement, replacementStatement);
                }, context);
            }, json, context);
        }
        return statementSubstitutionn;
    }
    static fromStatementAndMetavariable(statement, metavariable, generalContext, specificContext) {
        const context = specificContext; ///
        statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
        let statementSubstitution;
        (0, _context.ablates)((generalContext, specificContext)=>{
            const context = specificContext; ///
            (0, _context.instantiate)((context)=>{
                const specificContext = context, statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementAndMetavariable)(statement, metavariable), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context);
                statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, generalContext, specificContext);
            }, context);
        }, generalContext, specificContext);
        return statementSubstitution;
    }
    static fromStatementMetavariableAndSubstitution(statement, metavariable, substitution, generalContext, specificContext) {
        const context = specificContext; ///
        statement = (0, _brackets.stripBracketsFromStatement)(statement, context); ///
        let statementSubstitution;
        (0, _context.ablates)((generalContext, specificContext)=>{
            const context = specificContext; ///
            (0, _context.instantiate)((context)=>{
                const specificContext = context, statementSubstitutionString = (0, _string.statementSubstitutionStringFromStatementMetavariableAndSubstitution)(statement, metavariable, substitution), string = statementSubstitutionString, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context);
                statementSubstitution = (0, _element.statementSubstitutionFromStatementSubstitutionNode)(statementSubstitutionNode, generalContext, specificContext);
            }, context);
        }, generalContext, specificContext);
        return statementSubstitution;
    }
});
function resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const resolved = true;
    return resolved;
}
function substitutionFromStatementSubstitutionNode(statementSubstitutionNode, context) {
    const substitutionNode = statementSubstitutionNode.getSubstitutionNode(), substitution = context.findSubstitutionBySubstitutionNode(substitutionNode);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZXMsIG1hbmlmZXN0LCBhdHRlbXB0cywgZGVzY2VuZCwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSwgdW5zZXJpYWxpc2VzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlLCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudFN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgcmVzb2x2ZWQsIHN1YnN0aXR1dGlvbiwgdGFyZ2V0U3RhdGVtZW50LCByZXBsYWNlbWVudFN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnJlc29sdmVkID0gcmVzb2x2ZWQ7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gICAgdGhpcy50YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRUYXJnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0YXRlbWVudDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gdGhpcy5nZXRTcGVjaWZpY0NvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdHMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcblxuICAgICAgc3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXdkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3Mgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFNpbmd1bGFyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICBtYW5pZmVzdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50ID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTaW1wbGVTdWJzdGl0dXRpb24oc2ltcGxlU3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmcgPSBzaW1wbGVTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nfScgc2ltcGxlIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRzID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0Q29udGV4dHMoKSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0cyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0Q29udGV4dHMoKTtcblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgam9pbigoZ2VuZXJhbENvbnRleHQpID0+IHtcbiAgICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQpXG4gICAgICB9LCAuLi5nZW5lcmFsQ29udGV4dHMpO1xuICAgIH0sIC4uLnNwZWNpZmljQ29udGV4dHMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NpbXBsZVN1YnN0aXR1dGlvblN0cmluZ30nIHNpbXBsZSBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uKGNvbXBsZXhTdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSB0aGlzLCAgLy8vXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uR1NwZWNpZmljQ29udGV4dCA9IHNpbXBsZVN1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uR1NwZWNpZmljQ29udGV4dCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBzaW1wbGVTdWJzdGl0dXRpb25HU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29tcGxleFN1YnN0aXR1dGlvbkdTcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGxldCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBqb2luKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50ID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQocmVwbGFjZW1lbnRTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgc29sZU5vblRyaXZpYWxEZXJpdmVkU3Vic3RpdHV0aW9uID0gY29udGV4dC5nZXRTb2xlTm9uVHJpdmlhbERlcml2ZWRTdWJzdGl0dXRpb24oKTtcblxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbjsgIC8vL1xuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24udmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICB1bmlmeVJlcGxhY2VtZW50U3RhdGVtZW50KHJlcGxhY2VtZW50U3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZURlcml2ZWRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksIC8vL1xuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSB0aGlzLFxuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvbiA9IHNpbXBsZURlcml2ZWRTdWJzdGl0dXRpb247IC8vL1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFJlc29sdmluZyB0aGUgJHtzdWJzdGl0dXRpb25TdHJpbmd9IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24udW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uKGNvbXBsZXhTdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbiwgIC8vL1xuICAgICAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gY29tcGxleFN1YnN0aXR1dGlvbi51bmlmeVNpbXBsZVN1YnN0aXR1dGlvbihzaW1wbGVTdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdW5zZXJpYWxpc2VzKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9ubiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dHMsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KTtcbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlcygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uO1xufVxuXG5mdW5jdGlvbiB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHRhcmdldFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiB0YXJnZXRTdGF0ZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0cyIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50IiwiaXNSZXNvbHZlZCIsImdldFN1YnN0aXR1dGlvbiIsImdldFRhcmdldFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFN0YXRlbWVudE5vZGUiLCJ0YXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJjb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiYXR0ZW1wdHMiLCJ0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudCIsInN1YnN0aXR1dGlvblZhbGlkYXRlcyIsInZhbGlkYXRlU3Vic3RpdHV0aW9uIiwiY29tbWl0IiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwibWFuaWZlc3QiLCJkZXNjZW5kIiwidGFyZ2V0U3RhdGVtZW50U3RyaW5nIiwidW5pZnlTaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNDb250ZXh0cyIsImdldENvbnRleHRzIiwiZ2VuZXJhbENvbnRleHRzIiwiam9pbiIsInJlY29uY2lsZSIsInVuaWZ5U3Vic3RpdHV0aW9uIiwidW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsImNvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmciLCJzaW1wbGVTdWJzdGl0dXRpb25HU3BlY2lmaWNDb250ZXh0IiwiY29tcGxleFN1YnN0aXR1dGlvbkdTcGVjaWZpY0NvbnRleHQiLCJyZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVJlcGxhY2VtZW50U3RhdGVtZW50Iiwic29sZU5vblRyaXZpYWxEZXJpdmVkU3Vic3RpdHV0aW9uIiwiZ2V0U29sZU5vblRyaXZpYWxEZXJpdmVkU3Vic3RpdHV0aW9uIiwicmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyIsInJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwic3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJyZXNvbHZlIiwic2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVEZXJpdmVkU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbm4iLCJ1bnNlcmlhbGlzZXMiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwicmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImFibGF0ZXMiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldFN0YXRlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztxRUFW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