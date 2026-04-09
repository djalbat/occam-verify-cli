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
        context = complexSubstitution.getContext();
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        let simpleSubstitutionUnifies = false;
        (0, _context.reconcile)((specificContext)=>{
            const replacementStatement = complexSubstitution.getReplacementStatement(), replacementStatementUnifies = this.unifyReplacementStatement(replacementStatement, generalContext, specificContext);
            if (replacementStatementUnifies) {
                const context = specificContext, soleNonTrivialDerivedSubstitution = context.getSoleNonTrivialDerivedSubstitution();
                substitution = soleNonTrivialDerivedSubstitution; ///
            }
        }, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IHVuaWZ5U3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmFja2V0c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24gfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcbmltcG9ydCB7IGpvaW4sIGFibGF0ZXMsIG1hbmlmZXN0LCBhdHRlbXB0cywgZGVzY2VuZCwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSwgdW5zZXJpYWxpc2VzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlLCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudFN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgcmVzb2x2ZWQsIHN1YnN0aXR1dGlvbiwgdGFyZ2V0U3RhdGVtZW50LCByZXBsYWNlbWVudFN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLnJlc29sdmVkID0gcmVzb2x2ZWQ7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gICAgdGhpcy50YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRUYXJnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0YXRlbWVudDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gdGhpcy5nZXRTcGVjaWZpY0NvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdHMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcblxuICAgICAgc3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXdkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3Mgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFNpbmd1bGFyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICBtYW5pZmVzdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBkZXNjZW5kKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50ID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTaW1wbGVTdWJzdGl0dXRpb24oc2ltcGxlU3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLnN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmcgPSBzaW1wbGVTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nfScgc2ltcGxlIHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHRzID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0Q29udGV4dHMoKSwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0cyA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0Q29udGV4dHMoKTtcblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgam9pbigoZ2VuZXJhbENvbnRleHQpID0+IHtcbiAgICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gdW5pZnlTdWJzdGl0dXRpb24oZ2VuZXJhbFN1YnN0aXR1dGlvbiwgc3BlY2lmaWNTdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQpXG4gICAgICB9LCAuLi5nZW5lcmFsQ29udGV4dHMpO1xuICAgIH0sIC4uLnNwZWNpZmljQ29udGV4dHMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NpbXBsZVN1YnN0aXR1dGlvblN0cmluZ30nIHNpbXBsZSBzdWJzdGl0dXRpb24gd2l0aCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uKGNvbXBsZXhTdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb250ZXh0ID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgbGV0IHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudCA9IGNvbXBsZXhTdWJzdGl0dXRpb24uZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBzb2xlTm9uVHJpdmlhbERlcml2ZWRTdWJzdGl0dXRpb24gPSBjb250ZXh0LmdldFNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbjsgIC8vL1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb24udmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICB1bmlmeVJlcGxhY2VtZW50U3RhdGVtZW50KHJlcGxhY2VtZW50U3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyA9IHJlcGxhY2VtZW50U3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChyZXBsYWNlbWVudFN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke3N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nfScgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgcmVzb2x2ZShjb250ZXh0KSB7XG4gICAgbGV0IHJlc29sdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb24gPSB0aGlzOyAvLy9cblxuICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBSZXNvbHZpbmcgdGhlICR7c3Vic3RpdHV0aW9uU3RyaW5nfSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gc2ltcGxlU3Vic3RpdHV0aW9uLnVuaWZ5Q29tcGxleFN1YnN0aXR1dGlvbihjb21wbGV4U3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gY29tcGxleFN1YnN0aXR1dGlvbi51bmlmeVNpbXBsZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc29sdmVkKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgdW5zZXJpYWxpc2VzKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgc3RyaW5nLCBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9ubiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dHMsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KTtcbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlcygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uO1xufVxuXG5mdW5jdGlvbiB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHRhcmdldFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiB0YXJnZXRTdGF0ZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0cyIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50IiwiaXNSZXNvbHZlZCIsImdldFN1YnN0aXR1dGlvbiIsImdldFRhcmdldFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFN0YXRlbWVudE5vZGUiLCJ0YXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJjb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiYXR0ZW1wdHMiLCJ0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudCIsInN1YnN0aXR1dGlvblZhbGlkYXRlcyIsInZhbGlkYXRlU3Vic3RpdHV0aW9uIiwiY29tbWl0IiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwibWFuaWZlc3QiLCJkZXNjZW5kIiwidGFyZ2V0U3RhdGVtZW50U3RyaW5nIiwidW5pZnlTaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNDb250ZXh0cyIsImdldENvbnRleHRzIiwiZ2VuZXJhbENvbnRleHRzIiwiam9pbiIsInJlY29uY2lsZSIsInVuaWZ5U3Vic3RpdHV0aW9uIiwidW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsImNvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRDb250ZXh0IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudCIsInNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbiIsImdldFNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbiIsInJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMiLCJyZXBsYWNlbWVudFN0YXRlbWVudFN0cmluZyIsInN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwicmVzb2x2ZSIsImZpbmRTaW1wbGVTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ubiIsInVuc2VyaWFsaXNlcyIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJyZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiYWJsYXRlcyIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uTm9kZSIsImdldFN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7O3FFQVZ5QjswQkFFRjt1QkFDVzswQkFDUzs2QkFDTTt5QkFDa0I7eUJBQzhCO3dCQUM0Qzs7Ozs7O01BRTdJLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsOEJBQThCQyxxQkFBWTtJQUNwRSxZQUFZQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRUMsWUFBWSxFQUFFQyxlQUFlLEVBQUVDLG9CQUFvQixDQUFFO1FBQzVHLEtBQUssQ0FBQ1AsVUFBVUMsUUFBUUMsTUFBTUM7UUFFOUIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGVBQWUsR0FBR0E7UUFDdkIsSUFBSSxDQUFDQyxvQkFBb0IsR0FBR0E7SUFDOUI7SUFFQUMsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDSixRQUFRO0lBQ3RCO0lBRUFLLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQ0osWUFBWTtJQUMxQjtJQUVBSyxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUNKLGVBQWU7SUFDN0I7SUFFQUssMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDSixvQkFBb0I7SUFDbEM7SUFFQUssK0JBQStCO1FBQzdCLE1BQU1WLE9BQU8sSUFBSSxDQUFDVyxPQUFPLElBQ25CQyw0QkFBNEJaLE1BQU0sR0FBRztRQUUzQyxPQUFPWTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLHNCQUFzQixJQUFJLENBQUNWLGVBQWUsQ0FBQ08sT0FBTyxJQUNsREksYUFBYUQscUJBQXFCLEdBQUc7UUFFM0MsT0FBT0M7SUFDVDtJQUVBQyxxQkFBcUI7UUFDbkIsTUFBTUMsMkJBQTJCLElBQUksQ0FBQ1osb0JBQW9CLENBQUNNLE9BQU8sSUFDNURPLGtCQUFrQkQsMEJBQTBCLEdBQUc7UUFFckQsT0FBT0M7SUFDVDtJQUVBQyxzQkFBc0I7UUFBRSxPQUFPLElBQUksQ0FBQ2YsZUFBZSxDQUFDZSxtQkFBbUI7SUFBSTtJQUUzRUMsV0FBVztRQUNULE1BQU1DLFNBQVUsSUFBSSxDQUFDbEIsWUFBWSxLQUFLO1FBRXRDLE9BQU9rQjtJQUNUO0lBRUFDLHNCQUFzQkMsZ0JBQWdCLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQ25CLGVBQWUsQ0FBQ2tCLHFCQUFxQixDQUFDQztJQUFtQjtJQUUvR0MsaUJBQWlCQyxTQUFTLEVBQUVDLE9BQU8sRUFBRTtRQUNuQ0QsWUFBWUUsSUFBQUEsb0NBQTBCLEVBQUNGLFdBQVdDLFVBQVUsR0FBRztRQUUvRCxNQUFNRSx1Q0FBdUMsSUFBSSxDQUFDdkIsb0JBQW9CLENBQUN3QixTQUFTLENBQUNKLFlBQzNFSyxzQkFBc0JGLHNDQUF1QyxHQUFHO1FBRXRFLE9BQU9FO0lBQ1Q7SUFFQUMsaUJBQWlCQyxTQUFTLEVBQUU7UUFDMUIsTUFBTUMscUNBQXFDLElBQUksQ0FBQzdCLGVBQWUsQ0FBQzJCLGdCQUFnQixDQUFDQyxZQUMzRUUsc0JBQXNCRCxvQ0FBcUMsR0FBRztRQUVwRSxPQUFPQztJQUNUO0lBRUFDLFNBQVNoQyxZQUFZLEVBQUV1QixPQUFPLEVBQUU7UUFDOUIsSUFBSVUsd0JBQXdCO1FBRTVCLE1BQU1DLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsNEJBQTRCLDJCQUEyQixDQUFDO1FBRXpGLElBQUlHLFlBQVk7UUFFaEIsTUFBTUMsb0JBQW9CLElBQUksQ0FBQ0MscUJBQXFCLENBQUNoQjtRQUVyRCxJQUFJZSxtQkFBbUI7WUFDckJMLHdCQUF3QkssbUJBQW9CLEdBQUc7WUFFL0NmLFFBQVFpQixLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVOLDRCQUE0QiwwQ0FBMEMsQ0FBQztRQUNsRyxPQUFPO1lBQ0wsTUFBTU8saUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDQyxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0I7WUFFL0NDLElBQUFBLGlCQUFRLEVBQUMsQ0FBQ0osZ0JBQWdCRTtnQkFDeEIsTUFBTUcsMkJBQTJCLElBQUksQ0FBQ0MsdUJBQXVCLENBQUNOLGdCQUFnQkU7Z0JBRTlFLElBQUlHLDBCQUEwQjtvQkFDNUIsTUFBTUUsZ0NBQWdDLElBQUksQ0FBQ0MsNEJBQTRCLENBQUNSLGdCQUFnQkU7b0JBRXhGLElBQUlLLCtCQUErQjt3QkFDakMsTUFBTUUsd0JBQXdCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNuRCxjQUFjeUMsZ0JBQWdCRTt3QkFFdEYsSUFBSU8sdUJBQXVCOzRCQUN6QmIsWUFBWTt3QkFDZDtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSxXQUFXO29CQUNiLElBQUksQ0FBQ2UsTUFBTSxDQUFDWCxnQkFBZ0JFO2dCQUM5QjtZQUNGLEdBQUdGLGdCQUFnQkU7UUFDckI7UUFFQSxJQUFJTixXQUFXO1lBQ2IsTUFBTXJDLGVBQWUsSUFBSSxFQUFHLEdBQUc7WUFFL0JpQyx3QkFBd0JqQyxjQUFjLEdBQUc7WUFFekN1QixRQUFROEIsZUFBZSxDQUFDckQ7WUFFeEJ1QixRQUFRaUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLDRCQUE0Qix5QkFBeUIsQ0FBQztRQUMzRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQWtCLHFCQUFxQm5ELFlBQVksRUFBRXlDLGNBQWMsRUFBRUUsZUFBZSxFQUFFO1FBQ2xFLElBQUlPLHdCQUF3QjtRQUU1QixJQUFJbEQsaUJBQWlCLE1BQU07WUFDekIsTUFBTXVCLFVBQVVrQixnQkFDVlAsOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7WUFFekRaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRiw0QkFBNEIsMENBQTBDLENBQUM7WUFFeEcsSUFBSSxDQUFDbEMsWUFBWSxHQUFHQTtZQUVwQmtELHdCQUF3QjtZQUV4QixJQUFJQSx1QkFBdUI7Z0JBQ3pCM0IsUUFBUWlCLEtBQUssQ0FBQyxDQUFDLG1CQUFtQixFQUFFTiw0QkFBNEIsd0NBQXdDLENBQUM7WUFDM0c7UUFDRjtRQUVBLE9BQU9nQjtJQUNUO0lBRUFILHdCQUF3Qk4sY0FBYyxFQUFFRSxlQUFlLEVBQUU7UUFDdkQsSUFBSUcsMkJBQTJCO1FBRS9CLE1BQU12QixVQUFVa0IsZ0JBQ1ZQLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsNEJBQTRCLDhDQUE4QyxDQUFDO1FBRTVHLE1BQU1vQiwwQkFBMEIsSUFBSSxDQUFDckQsZUFBZSxDQUFDc0QsVUFBVTtRQUUvRCxJQUFJRCx5QkFBeUI7WUFDM0JFLElBQUFBLGlCQUFRLEVBQUMsQ0FBQ2pDO2dCQUNSa0MsSUFBQUEsZ0JBQU8sRUFBQyxDQUFDbEM7b0JBQ1AsTUFBTXRCLGtCQUFrQixJQUFJLENBQUNBLGVBQWUsQ0FBQytCLFFBQVEsQ0FBQ1Q7b0JBRXRELElBQUl0QixvQkFBb0IsTUFBTTt3QkFDNUI2QywyQkFBMkI7b0JBQzdCO2dCQUNGLEdBQUd2QjtZQUNMLEdBQUdvQixpQkFBaUJwQjtRQUN0QixPQUFPO1lBQ0wsTUFBTW1DLHdCQUF3QixJQUFJLENBQUN6RCxlQUFlLENBQUNrQyxTQUFTO1lBRTVEWixRQUFRaUIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFa0Isc0JBQXNCLG1DQUFtQyxDQUFDO1FBQ2xGO1FBRUEsSUFBSVosMEJBQTBCO1lBQzVCdkIsUUFBUWlCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTiw0QkFBNEIsOENBQThDLENBQUM7UUFDaEg7UUFFQSxPQUFPWTtJQUNUO0lBRUFHLDZCQUE2QlIsY0FBYyxFQUFFRSxlQUFlLEVBQUU7UUFDNUQsSUFBSUssZ0NBQWdDO1FBRXBDLE1BQU16QixVQUFVb0IsaUJBQ1ZULDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsNEJBQTRCLG1EQUFtRCxDQUFDO1FBRWpIdUIsSUFBQUEsZ0JBQU8sRUFBQyxDQUFDbEM7WUFDUCxNQUFNckIsdUJBQXVCLElBQUksQ0FBQ0Esb0JBQW9CLENBQUM4QixRQUFRLENBQUNUO1lBRWhFLElBQUlyQix5QkFBeUIsTUFBTTtnQkFDakM4QyxnQ0FBZ0M7WUFDbEM7UUFDRixHQUFHekI7UUFFSCxJQUFJeUIsK0JBQStCO1lBQ2pDekIsUUFBUWlCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTiw0QkFBNEIsaURBQWlELENBQUM7UUFDbkg7UUFFQSxPQUFPYztJQUNUO0lBRUFXLHdCQUF3QkMsa0JBQWtCLEVBQUVyQyxPQUFPLEVBQUU7UUFDbkQsSUFBSXNDO1FBRUosTUFBTUMscUJBQXFCLElBQUksQ0FBQzlELFlBQVksQ0FBQ21DLFNBQVMsSUFDaEQ0QiwyQkFBMkJILG1CQUFtQnpCLFNBQVM7UUFFN0RaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRTJCLHlCQUF5QixnQ0FBZ0MsRUFBRUQsbUJBQW1CLGlCQUFpQixDQUFDO1FBRS9ILE1BQU1FLHVCQUF1Qkosb0JBQ3ZCSyxzQkFBc0IsSUFBSSxDQUFDakUsWUFBWSxFQUN2Q2tFLG1CQUFtQkYscUJBQXFCRyxXQUFXLElBQ25EQyxrQkFBa0JILG9CQUFvQkUsV0FBVztRQUV2REUsSUFBQUEsYUFBSSxFQUFDLENBQUMxQjtZQUNKMEIsSUFBQUEsYUFBSSxFQUFDLENBQUM1QjtnQkFDSjZCLElBQUFBLGtCQUFTLEVBQUMsQ0FBQzNCO29CQUNUa0IsNEJBQTRCVSxJQUFBQSx3QkFBaUIsRUFBQ04scUJBQXFCRCxzQkFBc0J2QixnQkFBZ0JFO29CQUV6RyxJQUFJa0IsMkJBQTJCO3dCQUM3QmxCLGdCQUFnQlMsTUFBTSxDQUFDN0I7b0JBQ3pCO2dCQUNGLEdBQUdvQjtZQUNMLE1BQU15QjtRQUNSLE1BQU1GLGtCQUFrQjNDO1FBRXhCLElBQUlzQywyQkFBMkI7WUFDN0J0QyxRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRTJCLHlCQUF5QixnQ0FBZ0MsRUFBRUQsbUJBQW1CLGVBQWUsQ0FBQztRQUNqSTtRQUVBLE9BQU9EO0lBQ1Q7SUFFQVcseUJBQXlCQyxtQkFBbUIsRUFBRWxELE9BQU8sRUFBRTtRQUNyRCxJQUFJdkIsZUFBZTtRQUVuQixNQUFNK0QsMkJBQTJCLElBQUksQ0FBQzVCLFNBQVMsSUFDekN1Qyw0QkFBNEJELG9CQUFvQnRDLFNBQVMsSUFBSyxHQUFHO1FBRXZFWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVzQywwQkFBMEIsaUNBQWlDLEVBQUVYLHlCQUF5Qix3QkFBd0IsQ0FBQztRQUU5SXhDLFVBQVVrRCxvQkFBb0JFLFVBQVU7UUFFeEMsTUFBTWhDLGtCQUFrQnBCLFNBQVUsR0FBRztRQUVyQ0EsVUFBVSxJQUFJLENBQUNvRCxVQUFVO1FBRXpCLE1BQU1sQyxpQkFBaUJsQixTQUFTLEdBQUc7UUFFbkNBLFVBQVVvQixpQkFBa0IsR0FBRztRQUUvQixJQUFJa0IsNEJBQTRCO1FBRWhDUyxJQUFBQSxrQkFBUyxFQUFDLENBQUMzQjtZQUNULE1BQU16Qyx1QkFBdUJ1RSxvQkFBb0JuRSx1QkFBdUIsSUFDbEVzRSw4QkFBOEIsSUFBSSxDQUFDQyx5QkFBeUIsQ0FBQzNFLHNCQUFzQnVDLGdCQUFnQkU7WUFFekcsSUFBSWlDLDZCQUE2QjtnQkFDL0IsTUFBTXJELFVBQVVvQixpQkFDVm1DLG9DQUFvQ3ZELFFBQVF3RCxvQ0FBb0M7Z0JBRXRGL0UsZUFBZThFLG1DQUFvQyxHQUFHO1lBQ3hEO1FBQ0YsR0FBR25DO1FBRUgsSUFBSTNDLGlCQUFpQixNQUFNO1lBQ3pCQSxlQUFlQSxhQUFhZ0MsUUFBUSxDQUFDVCxVQUFXLEdBQUc7WUFFbkRzQyw0QkFBNEI7UUFDOUI7UUFFQSxJQUFJQSwyQkFBMkI7WUFDN0J0QyxRQUFRaUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVrQywwQkFBMEIsaUNBQWlDLEVBQUVYLHlCQUF5QixzQkFBc0IsQ0FBQztRQUNoSjtRQUVBLE9BQU8vRDtJQUNUO0lBRUE2RSwwQkFBMEIzRSxvQkFBb0IsRUFBRXVDLGNBQWMsRUFBRUUsZUFBZSxFQUFFO1FBQy9FLElBQUlxQywrQkFBK0I7UUFFbkMsTUFBTXpELFVBQVVvQixpQkFDVnNDLDZCQUE2Qi9FLHFCQUFxQmlDLFNBQVMsSUFDM0QrQyx5Q0FBeUMsSUFBSSxDQUFDaEYsb0JBQW9CLENBQUNpQyxTQUFTLElBQUssR0FBRztRQUUxRlosUUFBUWEsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFNkMsMkJBQTJCLGtDQUFrQyxFQUFFQyx1Q0FBdUMsMEJBQTBCLENBQUM7UUFFaEssTUFBTUMsbUJBQW1CLElBQUksQ0FBQ2pGLG9CQUFvQixDQUFDa0YsY0FBYyxDQUFDbEYsc0JBQXNCdUMsZ0JBQWdCRTtRQUV4RyxJQUFJd0Msa0JBQWtCO1lBQ3BCSCwrQkFBK0I7UUFDakM7UUFFQSxJQUFJQSw4QkFBOEI7WUFDaEN6RCxRQUFRaUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUV5QywyQkFBMkIsa0NBQWtDLEVBQUVDLHVDQUF1Qyx3QkFBd0IsQ0FBQztRQUNsSztRQUVBLE9BQU9GO0lBQ1Q7SUFFQUssUUFBUTlELE9BQU8sRUFBRTtRQUNmLElBQUl4QixXQUFXO1FBRWYsTUFBTXFCLG1CQUFtQixJQUFJLENBQUNKLG1CQUFtQixJQUMzQzRDLHFCQUFxQnJDLFFBQVErRCx3Q0FBd0MsQ0FBQ2xFLG1CQUN0RXFELHNCQUFzQixJQUFJLEVBQUUsR0FBRztRQUVyQyxJQUFJYix1QkFBdUIsTUFBTTtZQUMvQixNQUFNRSxxQkFBcUIsSUFBSSxDQUFDM0IsU0FBUyxJQUFJLEdBQUc7WUFFaERaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRTBCLG1CQUFtQixnQkFBZ0IsQ0FBQztZQUVuRSxNQUFNOUQsZUFBZTRELG1CQUFtQlksd0JBQXdCLENBQUNDLHFCQUFxQmxEO1lBRXRGLElBQUl2QixpQkFBaUIsTUFBTTtnQkFDekIsTUFBTTZELDRCQUE0Qlksb0JBQW9CZCx1QkFBdUIsQ0FBQzNELGNBQWN1QjtnQkFFNUYsSUFBSXNDLDJCQUEyQjtvQkFDN0I5RCxXQUFXO2dCQUNiO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDQSxRQUFRLEdBQUc7b0JBRWhCd0IsUUFBUWlCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFc0IsbUJBQW1CLGVBQWUsQ0FBQztnQkFDdkU7WUFDRjtRQUNGO0lBQ0Y7SUFFQSxPQUFPeUIsT0FBTyx3QkFBd0I7SUFFdEMsT0FBT0MsU0FBU0MsSUFBSSxFQUFFbEUsT0FBTyxFQUFFO1FBQzdCLElBQUltRSx5QkFBeUI7UUFFN0IsTUFBTSxFQUFFSCxJQUFJLEVBQUUsR0FBR0U7UUFFakIsSUFBSSxJQUFJLENBQUNGLElBQUksS0FBS0EsTUFBTTtZQUN0QkksSUFBQUEscUJBQVksRUFBQyxDQUFDRixNQUFNaEQsZ0JBQWdCRTtnQkFDbEMsTUFBTXBCLFVBQVVvQixpQkFBa0IsR0FBRztnQkFFckNpRCxJQUFBQSxvQkFBVyxFQUFDLENBQUNyRTtvQkFDWCxNQUFNLEVBQUUzQixNQUFNLEVBQUVFLFNBQVMsRUFBRSxHQUFHMkYsTUFDeEI5QyxrQkFBa0JwQixTQUNsQjVCLFdBQVc7d0JBQ1Q4Qzt3QkFDQUU7cUJBQ0QsRUFDRGxDLDRCQUE0Qm9GLElBQUFBLDZDQUFnQyxFQUFDakcsUUFBUTJCLFVBQ3JFMUIsT0FBT1ksMkJBQ1BWLFdBQVcrRixzQ0FBc0NyRiwyQkFBMkJjLFVBQzVFdkIsZUFBZStGLDBDQUEwQ3RGLDJCQUEyQmdDLGdCQUFnQkUsa0JBQ3BHMUMsa0JBQWtCK0YsNkNBQTZDdkYsMkJBQTJCYyxVQUMxRnJCLHVCQUF1QitGLGtEQUFrRHhGLDJCQUEyQmM7b0JBRTFHbUUseUJBQXlCLElBQUlqRyxzQkFBc0JFLFVBQVVDLFFBQVFDLE1BQU1DLFdBQVdDLFVBQVVDLGNBQWNDLGlCQUFpQkM7Z0JBQ2pJLEdBQUdxQjtZQUNMLEdBQUdrRSxNQUFNbEU7UUFDWDtRQUVBLE9BQU9tRTtJQUNUO0lBRUEsT0FBT1EsNkJBQTZCNUUsU0FBUyxFQUFFNkUsWUFBWSxFQUFFMUQsY0FBYyxFQUFFRSxlQUFlLEVBQUU7UUFDNUYsTUFBTXBCLFVBQVVvQixpQkFBa0IsR0FBRztRQUVyQ3JCLFlBQVlFLElBQUFBLG9DQUEwQixFQUFDRixXQUFXQyxVQUFVLEdBQUc7UUFFL0QsSUFBSVU7UUFFSm1FLElBQUFBLGdCQUFPLEVBQUMsQ0FBQzNELGdCQUFnQkU7WUFDdkIsTUFBTXBCLFVBQVVvQixpQkFBa0IsR0FBRztZQUVyQ2lELElBQUFBLG9CQUFXLEVBQUMsQ0FBQ3JFO2dCQUNYLE1BQU1vQixrQkFBa0JwQixTQUNsQlcsOEJBQThCbUUsSUFBQUEsK0RBQXVELEVBQUMvRSxXQUFXNkUsZUFDakd2RyxTQUFTc0MsNkJBQ1R6Qiw0QkFBNEJvRixJQUFBQSw2Q0FBZ0MsRUFBQ2pHLFFBQVEyQjtnQkFFM0VVLHdCQUF3QnFFLElBQUFBLDJEQUFrRCxFQUFDN0YsMkJBQTJCZ0MsZ0JBQWdCRTtZQUN4SCxHQUFHcEI7UUFDTCxHQUFHa0IsZ0JBQWdCRTtRQUVuQixPQUFPVjtJQUNUO0lBRUEsT0FBT3NFLHlDQUF5Q2pGLFNBQVMsRUFBRTZFLFlBQVksRUFBRW5HLFlBQVksRUFBRXlDLGNBQWMsRUFBRUUsZUFBZSxFQUFFO1FBQ3RILE1BQU1wQixVQUFVb0IsaUJBQWtCLEdBQUc7UUFFckNyQixZQUFZRSxJQUFBQSxvQ0FBMEIsRUFBQ0YsV0FBV0MsVUFBVSxHQUFHO1FBRS9ELElBQUlVO1FBRUptRSxJQUFBQSxnQkFBTyxFQUFDLENBQUMzRCxnQkFBZ0JFO1lBQ3ZCLE1BQU1wQixVQUFVb0IsaUJBQWtCLEdBQUc7WUFFckNpRCxJQUFBQSxvQkFBVyxFQUFDLENBQUNyRTtnQkFDWCxNQUFNb0Isa0JBQWtCcEIsU0FDbEJXLDhCQUE4QnNFLElBQUFBLDJFQUFtRSxFQUFDbEYsV0FBVzZFLGNBQWNuRyxlQUMzSEosU0FBU3NDLDZCQUNUekIsNEJBQTRCb0YsSUFBQUEsNkNBQWdDLEVBQUNqRyxRQUFRMkI7Z0JBRTNFVSx3QkFBd0JxRSxJQUFBQSwyREFBa0QsRUFBQzdGLDJCQUEyQmdDLGdCQUFnQkU7WUFDeEgsR0FBR3BCO1FBQ0wsR0FBR2tCLGdCQUFnQkU7UUFFbkIsT0FBT1Y7SUFDVDtBQUNGO0FBRUEsU0FBUzZELHNDQUFzQ3JGLHlCQUF5QixFQUFFYyxPQUFPO0lBQy9FLE1BQU14QixXQUFXO0lBRWpCLE9BQU9BO0FBQ1Q7QUFFQSxTQUFTZ0csMENBQTBDdEYseUJBQXlCLEVBQUVjLE9BQU87SUFDbkYsTUFBTWtGLG1CQUFtQmhHLDBCQUEwQmlHLG1CQUFtQixJQUNoRTFHLGVBQWV1QixRQUFRb0Ysa0NBQWtDLENBQUNGO0lBRWhFLE9BQU96RztBQUNUO0FBRUEsU0FBU2dHLDZDQUE2Q3ZGLHlCQUF5QixFQUFFYyxPQUFPO0lBQ3RGLE1BQU1aLHNCQUFzQkYsMEJBQTBCbUcsc0JBQXNCLElBQ3RFM0csa0JBQWtCc0IsUUFBUXNGLDRCQUE0QixDQUFDbEc7SUFFN0QsT0FBT1Y7QUFDVDtBQUVBLFNBQVNnRyxrREFBa0R4Rix5QkFBeUIsRUFBRWMsT0FBTztJQUMzRixNQUFNVCwyQkFBMkJMLDBCQUEwQnFHLDJCQUEyQixJQUNoRjVHLHVCQUF1QnFCLFFBQVFzRiw0QkFBNEIsQ0FBQy9GO0lBRWxFLE9BQU9aO0FBQ1QifQ==