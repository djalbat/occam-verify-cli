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
                    (0, _context.instantiate)((context)=>{
                        (0, _context.unserialises)((json, generalContext, specificContext)=>{
                            const { string } = json, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), node = statementSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, generalContext, specificContext), targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, generalContext), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, specificContext), contexts = [
                                generalContext,
                                specificContext
                            ];
                            statementSubstitutionn = new StatementSubstitution(contexts, string, node, breakPoint, resolved, substitution, targetStatement, replacementStatement);
                        }, json, context);
                    }, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgcG9zaXQsIGFibGF0ZSwgYWJsYXRlcywgbWFuaWZlc3QsIGF0dGVtcHRzLCBzZXF1ZXN0ZXIsIHJlY29uY2lsZSwgaW5zdGFudGlhdGUsIHVuc2VyaWFsaXNlcyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSwgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24gZXh0ZW5kcyBTdWJzdGl0dXRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0cywgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCByZXNvbHZlZCwgc3Vic3RpdHV0aW9uLCB0YXJnZXRTdGF0ZW1lbnQsIHJlcGxhY2VtZW50U3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnJlc29sdmVkID0gcmVzb2x2ZWQ7XG4gICAgdGhpcy5zdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb247XG4gICAgdGhpcy50YXJnZXRTdGF0ZW1lbnQgPSB0YXJnZXRTdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50O1xuICB9XG5cbiAgaXNSZXNvbHZlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlZDtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb247XG4gIH1cblxuICBnZXRUYXJnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZTtcbiAgfVxuXG4gIGdldFRhcmdldE5vZGUoKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Tm9kZSA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICB0YXJnZXROb2RlID0gdGFyZ2V0U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gdGFyZ2V0Tm9kZTtcbiAgfVxuXG4gIGdldFJlcGxhY2VtZW50Tm9kZSgpIHtcbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICByZXBsYWNlbWVudE5vZGUgPSByZXBsYWNlbWVudFN0YXRlbWVudE5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50Tm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZU5vZGUoKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRNZXRhdmFyaWFibGVOb2RlKCk7IH1cblxuICBpc1NpbXBsZSgpIHtcbiAgICBjb25zdCBzaW1wbGUgPSAodGhpcy5zdWJzdGl0dXRpb24gPT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHNpbXBsZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7IHJldHVybiB0aGlzLnRhcmdldFN0YXRlbWVudC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7IH1cblxuICBjb21wYXJlU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICBjb21wYXJlc1RvU3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50OyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N0YXRlbWVudDtcbiAgfVxuXG4gIGNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSB7XG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlciA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmNvbXBhcmVQYXJhbWV0ZXIocGFyYW1ldGVyKSxcbiAgICAgICAgICBjb21wYXJlc1RvUGFyYW1ldGVyID0gdGFyZ2V0U3RhdGVtZW50Q29tcGFyZXNUb1BhcmFtZXRlcjsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9QYXJhbWV0ZXI7XG4gIH1cblxuICB2YWxpZGF0ZShzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHZhbGlkU3Vic3RpdHV0aW9uID0gdGhpcy5maW5kVmFsaWRTdWJzdGl0dXRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRTdWJzdGl0dXRpb24pIHtcbiAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHZhbGlkU3Vic3RpdHV0aW9uOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5nZXRHZW5lcmFsQ29udGV4dCgpLFxuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gdGhpcy5nZXRTcGVjaWZpY0NvbnRleHQoKTtcblxuICAgICAgYXR0ZW1wdHMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3QgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVwbGFjZW1lbnRTdGF0ZW1lbnQoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjsgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcblxuICAgICAgc3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvblZhbGlkYXRlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZXdkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3Mgc3Vic3RpdHV0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25WYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVRhcmdldFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFNpbmd1bGFyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFNpbmd1bGFyKSB7XG4gICAgICBtYW5pZmVzdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBzZXF1ZXN0ZXIoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnQgPSB0aGlzLnRhcmdldFN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgICAgIGlmICh0YXJnZXRTdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhcmdldFN0YXRlbWVudFN0cmluZyA9IHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7dGFyZ2V0U3RhdGVtZW50U3RyaW5nfScgdGFyZ2V0IHN0YXRlbWVudCBpcyBub3Qgc2luZ3VsYXIuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRhcmdldFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVJlcGxhY2VtZW50U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzZXF1ZXN0ZXIoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5VGFyZ2V0U3RhdGVtZW50KHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0YXJnZXRTdGF0ZW1uZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFN0YXRlbWVudCA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0VGFyZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRTdGF0ZW1lbnQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRUYXJnZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50ID0gZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldFN0YXRlbWVudDsgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGdlbmVyYWxTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIHRhcmdldFN0YXRlbW5lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbW5lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50ID0gZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSBnZW5lcmFsU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUNvbXBsZXhTdWJzdGl0dXRpb24oY29tcGxleFN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyA9IHNpbXBsZVN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmcgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29tcGxleFN1YnN0aXR1dGlvblN0cmluZ30nIGNvbXBsZXggc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3NpbXBsZVN1YnN0aXR1dGlvblN0cmluZ30nIHNpbXBsZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChjb21wbGV4U3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb25zdCBzb2xlTm9uVHJpdmlhbERlcml2ZWRTdWJzdGl0dXRpb24gPSBjb250ZXh0LmdldFNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbjsgIC8vL1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZURlcml2ZWRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24udW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uKGNvbXBsZXhTdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMgPSB0aGlzLnN1YnN0aXR1dGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7Y29tcGxleFN1YnN0aXR1dGlvblN0cmluZ30nIGNvbXBsZXggc3Vic3RpdHV0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgY29uc3QgZm9yY2VkID0gdHJ1ZTtcblxuICAgICAgcG9zaXQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgYWJsYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgICAgIHVuc2VyaWFsaXNlcygoanNvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgICAgICAgIG5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCAvLy9cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gdGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgZ2VuZXJhbENvbnRleHQpLFxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dHMgPSBbXG4gICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0XG4gICAgICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9ubiA9IG5ldyBTdGF0ZW1lbnRTdWJzdGl0dXRpb24oY29udGV4dHMsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgcmVzb2x2ZWQsIHN1YnN0aXR1dGlvbiwgdGFyZ2V0U3RhdGVtZW50LCByZXBsYWNlbWVudFN0YXRlbWVudCk7XG4gICAgICAgICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICAgICAgICB9LCBjb250ZXh0KTtcbiAgICAgICAgfSwgZm9yY2VkLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZXMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXNvbHZlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5mdW5jdGlvbiBzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb247XG59XG5cbmZ1bmN0aW9uIHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gZ2VuZXJhbENvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSh0YXJnZXRTdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHNwZWNpZmljQ29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHRzIiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50IiwiaXNSZXNvbHZlZCIsImdldFN1YnN0aXR1dGlvbiIsImdldFRhcmdldFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFN0YXRlbWVudE5vZGUiLCJ0YXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJjb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiYXR0ZW1wdHMiLCJ0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudCIsInN1YnN0aXR1dGlvblZhbGlkYXRlcyIsInZhbGlkYXRlU3Vic3RpdHV0aW9uIiwiY29tbWl0IiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwibWFuaWZlc3QiLCJzZXF1ZXN0ZXIiLCJ0YXJnZXRTdGF0ZW1lbnRTdHJpbmciLCJ1bmlmeVRhcmdldFN0YXRlbWVudCIsInRhcmdldFN0YXRlbW5lbnRVbmlmaWVzIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbiIsInNwZWNpZmljU3Vic3RpdHV0aW9uIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZyIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nIiwiZ2VuZXJhbFN1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCIsImdlbmVyYWxTdWJzdGl0dXRpb25UYXJnZXRTdGF0ZW1lbnQiLCJzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldFN0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsInJlY29uY2lsZSIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5UmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzIiwiZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCIsInNwZWNpZmljU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudCIsInVuaWZ5Q29tcGxleFN1YnN0aXR1dGlvbiIsImNvbXBsZXhTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb24iLCJzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmciLCJjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nIiwic2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyIsInJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyIsInNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbiIsImdldFNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbiIsInJlc29sdmUiLCJzaW1wbGVEZXJpdmVkU3Vic3RpdHV0aW9uIiwiZmluZFNpbXBsZURlcml2ZWRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUiLCJ1bmlmeVN1YnN0aXR1dGlvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25uIiwiZm9yY2VkIiwicG9zaXQiLCJhYmxhdGUiLCJpbnN0YW50aWF0ZSIsInVuc2VyaWFsaXNlcyIsImluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiYnJlYWtQb2ludEZyb21KU09OIiwicmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImFibGF0ZXMiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldFN0YXRlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnRO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