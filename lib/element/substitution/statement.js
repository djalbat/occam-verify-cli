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
const _breakPoint = require("../../utilities/breakPoint");
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
    constructor(contexts, string, node, breakPoint, resolved, substitution, targetStatement, replacementStatement){
        super(contexts, string, node, breakPoint);
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
                (0, _context.sequester)((context)=>{
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
        (0, _context.sequester)((context)=>{
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
    unifyTargetStatement(substitution, context) {
        let targetStatemnentUnifies = false;
        const generalSubstitution = this, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
        context.trace(`Unifying the '${specificSubstitutionString}' substitution's target statement with the '${generalSubstitutionString}' substitution's target statement...`);
        const generalSubstitutionGeneralContext = generalSubstitution.getGeneralContext(), specificSubstitutionGeneralContext = specificSubstitution.getGeneralContext(), generalSubstitutionTargetStatement = generalSubstitution.getTargetStatement(), specificSubstitutionTargetStatement = specificSubstitution.getTargetStatement(), generalContext = generalSubstitutionGeneralContext, specificContext = specificSubstitutionGeneralContext, generalStatement = generalSubstitutionTargetStatement, specificStatement = specificSubstitutionTargetStatement; ///
        (0, _context.reconcile)((specificContext)=>{
            const statementUnifies = generalStatement.unifyStatement(specificStatement, generalContext, specificContext);
            if (statementUnifies) {
                specificContext.commit(context);
                targetStatemnentUnifies = true;
            }
        }, specificContext);
        if (targetStatemnentUnifies) {
            context.trace(`...unified the '${specificSubstitutionString}' substitution's target statement with the '${generalSubstitutionString}' substitution's target statement.`);
        }
        return targetStatemnentUnifies;
    }
    unifyReplacementStatement(substitution, context) {
        let replacementStatemnentUnifies = false;
        const generalSubstitution = this, specificSubstitution = substitution, generalSubstitutionString = generalSubstitution.getString(), specificSubstitutionString = specificSubstitution.getString();
        context.trace(`Unifying the '${specificSubstitutionString}' substitution's replacement statement with the '${generalSubstitutionString}' substitution's replacement statement...`);
        const generalSubstitutionSpecificContext = generalSubstitution.getSpecificContext(), specificSubstitutionSpecificContext = specificSubstitution.getSpecificContext(), generalSubstitutionReplacementStatement = generalSubstitution.getReplacementStatement(), specificSubstitutionReplacementStatement = specificSubstitution.getReplacementStatement(), generalContext = generalSubstitutionSpecificContext, specificContext = specificSubstitutionSpecificContext, generalStatement = generalSubstitutionReplacementStatement, specificStatement = specificSubstitutionReplacementStatement; ///
        (0, _context.reconcile)((specificContext)=>{
            const statementUnifies = generalStatement.unifyStatement(specificStatement, generalContext, specificContext);
            if (statementUnifies) {
                specificContext.commit(context);
                replacementStatemnentUnifies = true;
            }
        }, specificContext);
        if (replacementStatemnentUnifies) {
            context.trace(`...unified the '${specificSubstitutionString}' substitution's replacement statement with the '${generalSubstitutionString}' substitution's replacement statement.`);
        }
        return replacementStatemnentUnifies;
    }
    unifyComplexSubstitution(complexSubstitution, context) {
        let substitution = null;
        const simpleSubstitution = this, simpleSubstitutionString = simpleSubstitution.getString(), complexSubstitutionString = complexSubstitution.getString(); ///
        context.trace(`Unifying the '${complexSubstitutionString}' complex substitution with the '${simpleSubstitutionString}' simple substitution...`);
        let simpleSubstitutionUnifies = false;
        (0, _context.reconcile)((context)=>{
            const replacementStatementUnifies = this.unifyReplacementStatement(complexSubstitution, context);
            if (replacementStatementUnifies) {
                const soleNonTrivialDerivedSubstitution = context.getSoleNonTrivialDerivedSubstitution();
                substitution = soleNonTrivialDerivedSubstitution; ///
            }
        }, context);
        if (substitution !== null) {
            simpleSubstitutionUnifies = true;
        }
        if (simpleSubstitutionUnifies) {
            context.debug(`...unified the '${complexSubstitutionString}' complex substitution with the '${simpleSubstitutionString}' simple substitution.`);
        }
        return substitution;
    }
    resolve(context) {
        const metavariableNode = this.getMetavariableNode(), simpleDerivedSubstitution = context.findSimpleDerivedSubstitutionByMetavariableNode(metavariableNode);
        if (simpleDerivedSubstitution !== null) {
            const simpleSubstitution = simpleDerivedSubstitution, complexSubstitution = this, complexSubstitutionString = complexSubstitution.getString();
            context.trace(`Resolving the ${complexSubstitutionString}' complex substitution...`);
            const substitution = simpleSubstitution.unifyComplexSubstitution(complexSubstitution, context);
            if (substitution !== null) {
                const simpleSubstitutionUnifies = this.substitution.unifySubstitution(substitution, context);
                if (simpleSubstitutionUnifies) {
                    this.resolved = true;
                    context.debug(`...resolved the '${complexSubstitutionString}' complex substitution.`);
                }
            }
        }
    }
    static name = "StatementSubstitution";
    static fromJSON(json, context) {
        let statementSubstitutionn = null;
        const { name } = json;
        if (this.name === name) {
            const forced = true;
            (0, _context.posit)((context)=>{
                (0, _context.ablate)((context)=>{
                    (0, _context.unserialises)((json, generalContext, specificContext)=>{
                        const context = specificContext; ///
                        (0, _context.instantiate)((context)=>{
                            const { string } = json, specificContext = context, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), node = statementSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, generalContext, specificContext), targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, generalContext), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, specificContext), contexts = [
                                generalContext,
                                specificContext
                            ];
                            statementSubstitutionn = new StatementSubstitution(contexts, string, node, breakPoint, resolved, substitution, targetStatement, replacementStatement);
                        }, context);
                    }, json, context);
                }, forced, context);
            }, context);
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
function targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, generalContext) {
    const targetStatementNode = statementSubstitutionNode.getTargetStatementNode(), targetStatement = generalContext.findStatementByStatementNode(targetStatementNode);
    return targetStatement;
}
function replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, specificContext) {
    const replacementStatementNode = statementSubstitutionNode.getReplacementStatementNode(), replacementStatement = specificContext.findStatementByStatementNode(replacementStatementNode);
    return replacementStatement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgcG9zaXQsIGFibGF0ZSwgYWJsYXRlcywgbWFuaWZlc3QsIGF0dGVtcHRzLCBzZXF1ZXN0ZXIsIHJlY29uY2lsZSwgaW5zdGFudGlhdGUsIHVuc2VyaWFsaXNlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0cywgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnJlc29sdmVkID0gcmVzb2x2ZWQ7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gICAgdGhpcy50YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRUYXJnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0YXRlbWVudDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gdGhpcy5nZXRTcGVjaWZpY0NvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdHMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcblxuICAgICAgc3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXdkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3Mgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFNpbmd1bGFyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICBtYW5pZmVzdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBzZXF1ZXN0ZXIoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnQgPSB0aGlzLnRhcmdldFN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0YXJnZXRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFN0cmluZyA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudCBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzZXF1ZXN0ZXIoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5VGFyZ2V0U3RhdGVtZW50KHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0YXJnZXRTdGF0ZW1uZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFN0YXRlbWVudCA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0VGFyZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRTdGF0ZW1lbnQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRUYXJnZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50ID0gZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldFN0YXRlbWVudDsgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGdlbmVyYWxTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIHRhcmdldFN0YXRlbW5lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbW5lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50ID0gZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSBnZW5lcmFsU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUNvbXBsZXhTdWJzdGl0dXRpb24oY29tcGxleFN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyA9IHNpbXBsZVN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmcgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29tcGxleFN1YnN0aXR1dGlvblN0cmluZ30nIGNvbXBsZXggc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3NpbXBsZVN1YnN0aXR1dGlvblN0cmluZ30nIHNpbXBsZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChjb21wbGV4U3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb25zdCBzb2xlTm9uVHJpdmlhbERlcml2ZWRTdWJzdGl0dXRpb24gPSBjb250ZXh0LmdldFNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbjsgIC8vL1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZURlcml2ZWRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24udW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uKGNvbXBsZXhTdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMgPSB0aGlzLnN1YnN0aXR1dGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7Y29tcGxleFN1YnN0aXR1dGlvblN0cmluZ30nIGNvbXBsZXggc3Vic3RpdHV0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgY29uc3QgZm9yY2VkID0gdHJ1ZTtcblxuICAgICAgcG9zaXQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgdW5zZXJpYWxpc2VzKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBub2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmVkID0gcmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIHNwZWNpZmljQ29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHRzID0gW1xuICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFxuICAgICAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpO1xuICAgICAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgICAgIH0sIGZvcmNlZCwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9ubjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuXG4gICAgYWJsYXRlcygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbihzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSwgc3Vic3RpdHV0aW9uKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgcmVzb2x2ZWQgPSB0cnVlO1xuXG4gIHJldHVybiByZXNvbHZlZDtcbn1cblxuZnVuY3Rpb24gc3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRTdWJzdGl0dXRpb25Ob2RlKCksXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICByZXR1cm4gc3Vic3RpdHV0aW9uO1xufVxuXG5mdW5jdGlvbiB0YXJnZXRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCkge1xuICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRUYXJnZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHRhcmdldFN0YXRlbWVudCA9IGdlbmVyYWxDb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUodGFyZ2V0U3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHRhcmdldFN0YXRlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZS5nZXRSZXBsYWNlbWVudFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgcmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBzcGVjaWZpY0NvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShyZXBsYWNlbWVudFN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJTdWJzdGl0dXRpb24iLCJjb250ZXh0cyIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwicmVzb2x2ZWQiLCJzdWJzdGl0dXRpb24iLCJ0YXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudCIsImlzUmVzb2x2ZWQiLCJnZXRTdWJzdGl0dXRpb24iLCJnZXRUYXJnZXRTdGF0ZW1lbnQiLCJnZXRSZXBsYWNlbWVudFN0YXRlbWVudCIsImdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJnZXROb2RlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldE5vZGUiLCJ0YXJnZXRTdGF0ZW1lbnROb2RlIiwidGFyZ2V0Tm9kZSIsImdldFJlcGxhY2VtZW50Tm9kZSIsInJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSIsInJlcGxhY2VtZW50Tm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJpc1NpbXBsZSIsInNpbXBsZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJjb21wYXJlU3RhdGVtZW50Iiwic3RhdGVtZW50IiwiY29udGV4dCIsInN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwiY29tcGFyZXNUb1N0YXRlbWVudCIsImNvbXBhcmVQYXJhbWV0ZXIiLCJwYXJhbWV0ZXIiLCJ0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyIiwiY29tcGFyZXNUb1BhcmFtZXRlciIsInZhbGlkYXRlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ2YWxpZGF0ZXMiLCJ2YWxpZFN1YnN0aXR1dGlvbiIsImZpbmRWYWxpZFN1YnN0aXR1dGlvbiIsImRlYnVnIiwiZ2VuZXJhbENvbnRleHQiLCJnZXRHZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImdldFNwZWNpZmljQ29udGV4dCIsImF0dGVtcHRzIiwidGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVUYXJnZXRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25WYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN1YnN0aXR1dGlvbiIsImNvbW1pdCIsImFkZFN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudFNpbmd1bGFyIiwiaXNTaW5ndWxhciIsIm1hbmlmZXN0Iiwic2VxdWVzdGVyIiwidGFyZ2V0U3RhdGVtZW50U3RyaW5nIiwidW5pZnlUYXJnZXRTdGF0ZW1lbnQiLCJ0YXJnZXRTdGF0ZW1uZW50VW5pZmllcyIsImdlbmVyYWxTdWJzdGl0dXRpb24iLCJzcGVjaWZpY1N1YnN0aXR1dGlvbiIsImdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmciLCJzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZyIsImdlbmVyYWxTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsInNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQiLCJnZW5lcmFsU3Vic3RpdHV0aW9uVGFyZ2V0U3RhdGVtZW50Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJyZWNvbmNpbGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVJlcGxhY2VtZW50U3RhdGVtZW50IiwicmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyIsImdlbmVyYWxTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQiLCJzcGVjaWZpY1N1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxTdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudCIsInNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJ1bmlmeUNvbXBsZXhTdWJzdGl0dXRpb24iLCJjb21wbGV4U3Vic3RpdHV0aW9uIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwic2ltcGxlU3Vic3RpdHV0aW9uU3RyaW5nIiwiY29tcGxleFN1YnN0aXR1dGlvblN0cmluZyIsInNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMiLCJyZXBsYWNlbWVudFN0YXRlbWVudFVuaWZpZXMiLCJzb2xlTm9uVHJpdmlhbERlcml2ZWRTdWJzdGl0dXRpb24iLCJnZXRTb2xlTm9uVHJpdmlhbERlcml2ZWRTdWJzdGl0dXRpb24iLCJyZXNvbHZlIiwic2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiIsImZpbmRTaW1wbGVEZXJpdmVkU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwidW5pZnlTdWJzdGl0dXRpb24iLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ubiIsImZvcmNlZCIsInBvc2l0IiwiYWJsYXRlIiwidW5zZXJpYWxpc2VzIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiIsImJyZWFrUG9pbnRGcm9tSlNPTiIsInJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJhYmxhdGVzIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsInN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25Ob2RlIiwiZ2V0U3Vic3RpdHV0aW9uTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJnZXRUYXJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7cUVBVnlCOzBCQUVGOzRCQUNZOzBCQUNROzZCQUNNO3lCQUNrQjt5QkFDeUM7d0JBQ2lDOzs7Ozs7TUFFN0ksV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyw4QkFBOEJDLHFCQUFZO0lBQ3BFLFlBQVlDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUVDLGVBQWUsRUFBRUMsb0JBQW9CLENBQUU7UUFDN0csS0FBSyxDQUFDUCxVQUFVQyxRQUFRQyxNQUFNQztRQUU5QixJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsZUFBZSxHQUFHQTtRQUN2QixJQUFJLENBQUNDLG9CQUFvQixHQUFHQTtJQUM5QjtJQUVBQyxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUNKLFFBQVE7SUFDdEI7SUFFQUssa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDSixZQUFZO0lBQzFCO0lBRUFLLHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQ0osZUFBZTtJQUM3QjtJQUVBSywwQkFBMEI7UUFDeEIsT0FBTyxJQUFJLENBQUNKLG9CQUFvQjtJQUNsQztJQUVBSywrQkFBK0I7UUFDN0IsTUFBTVYsT0FBTyxJQUFJLENBQUNXLE9BQU8sSUFDbkJDLDRCQUE0QlosTUFBTSxHQUFHO1FBRTNDLE9BQU9ZO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsc0JBQXNCLElBQUksQ0FBQ1YsZUFBZSxDQUFDTyxPQUFPLElBQ2xESSxhQUFhRCxxQkFBcUIsR0FBRztRQUUzQyxPQUFPQztJQUNUO0lBRUFDLHFCQUFxQjtRQUNuQixN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