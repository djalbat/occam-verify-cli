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
                (0, _context.elide)((context)=>{
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
        (0, _context.elide)((context)=>{
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
            (0, _context.instantiate)((context)=>{
                (0, _context.unserialises)((json, generalContext, specificContext)=>{
                    const { string } = json, statementSubstitutionNode = (0, _instantiate.instantiateStatementSubstitution)(string, context), node = statementSubstitutionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), resolved = resolvedFromStatementSubstitutionNode(statementSubstitutionNode, context), substitution = substitutionFromStatementSubstitutionNode(statementSubstitutionNode, generalContext, specificContext), targetStatement = targetStatementFromStatementSubstitutionNode(statementSubstitutionNode, generalContext), replacementStatement = replacementStatementFromStatementSubstitutionNode(statementSubstitutionNode, specificContext), contexts = [
                        generalContext,
                        specificContext
                    ];
                    statementSubstitutionn = new StatementSubstitution(contexts, string, node, breakPoint, resolved, substitution, targetStatement, replacementStatement);
                }, json, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3N1YnN0aXR1dGlvbi9zdGF0ZW1lbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTdWJzdGl0dXRpb24gZnJvbSBcIi4uL3N1YnN0aXR1dGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2JyYWNrZXRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZWxpZGUsIGFibGF0ZXMsIG1hbmlmZXN0LCBhdHRlbXB0cywgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSwgdW5zZXJpYWxpc2VzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlLCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFN0YXRlbWVudFN1YnN0aXR1dGlvbiBleHRlbmRzIFN1YnN0aXR1dGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0cywgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMucmVzb2x2ZWQgPSByZXNvbHZlZDtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbjtcbiAgICB0aGlzLnRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudDtcbiAgICB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50ID0gcmVwbGFjZW1lbnRTdGF0ZW1lbnQ7XG4gIH1cblxuICBpc1Jlc29sdmVkKCkge1xuICAgIHJldHVybiB0aGlzLnJlc29sdmVkO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGdldFRhcmdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXRTdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZXBsYWNlbWVudFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Tm9kZSgpIHtcbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnROb2RlID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHRhcmdldE5vZGUgPSB0YXJnZXRTdGF0ZW1lbnROb2RlOyAvLy9cblxuICAgIHJldHVybiB0YXJnZXROb2RlO1xuICB9XG5cbiAgZ2V0UmVwbGFjZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSA9IHRoaXMucmVwbGFjZW1lbnRTdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJlcGxhY2VtZW50Tm9kZSA9IHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcmVwbGFjZW1lbnROb2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTm9kZSgpIHsgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50LmdldE1ldGF2YXJpYWJsZU5vZGUoKTsgfVxuXG4gIGlzU2ltcGxlKCkge1xuICAgIGNvbnN0IHNpbXBsZSA9ICh0aGlzLnN1YnN0aXR1dGlvbiA9PT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2ltcGxlO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHsgcmV0dXJuIHRoaXMudGFyZ2V0U3RhdGVtZW50Lm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTsgfVxuXG4gIGNvbXBhcmVTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgc3RhdGVtZW50ID0gc3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTsgLy8vXG5cbiAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnJlcGxhY2VtZW50U3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgIGNvbXBhcmVzVG9TdGF0ZW1lbnQgPSByZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQ7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3RhdGVtZW50O1xuICB9XG5cbiAgY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpIHtcbiAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQuY29tcGFyZVBhcmFtZXRlcihwYXJhbWV0ZXIpLFxuICAgICAgICAgIGNvbXBhcmVzVG9QYXJhbWV0ZXIgPSB0YXJnZXRTdGF0ZW1lbnRDb21wYXJlc1RvUGFyYW1ldGVyOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1BhcmFtZXRlcjtcbiAgfVxuXG4gIHZhbGlkYXRlKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFsaWRTdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRWYWxpZFN1YnN0aXR1dGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZFN1YnN0aXR1dGlvbikge1xuICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcblxuICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gdmFsaWRTdWJzdGl0dXRpb247ICAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSB0aGlzLmdldFNwZWNpZmljQ29udGV4dCgpO1xuXG4gICAgICBhdHRlbXB0cygoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uOyAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1YnN0aXR1dGlvblZhbGlkYXRlcyA9IHRydWU7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3Mgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICAgIHRoaXMuc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uO1xuXG4gICAgICBzdWJzdGl0dXRpb25WYWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRld2QgdGhlICcke3N0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZ30nIHN0YXRlbWVudCBzdWJzdGl0dXRpb24ncyBzdWJzdGl0dXRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlVGFyZ2V0U3RhdGVtZW50KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgdGFyZ2V0IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICBpZiAodGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIpIHtcbiAgICAgIG1hbmlmZXN0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGVsaWRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0U3RhdGVtZW50ID0gdGhpcy50YXJnZXRTdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAodGFyZ2V0U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgY29udGV4dCk7XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0YXJnZXRTdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnRhcmdldFN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke3RhcmdldFN0YXRlbWVudFN0cmluZ30nIHRhcmdldCBzdGF0ZW1lbnQgaXMgbm90IHNpbmd1bGFyLmApO1xuICAgIH1cblxuICAgIGlmICh0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQuLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nfScgc3RhdGVtZW50IHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgZWxpZGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50ID0gdGhpcy5yZXBsYWNlbWVudFN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChyZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmd9JyBzdGF0ZW1lbnQgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZXBsYWNlbWVudFN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5VGFyZ2V0U3RhdGVtZW50KHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0YXJnZXRTdGF0ZW1uZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyB0YXJnZXQgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldEdlbmVyYWxDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFN0YXRlbWVudCA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0VGFyZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25UYXJnZXRTdGF0ZW1lbnQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRUYXJnZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb25HZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50ID0gZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvblRhcmdldFN0YXRlbWVudDsgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IGdlbmVyYWxTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIHRhcmdldFN0YXRlbW5lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRhcmdldFN0YXRlbW5lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHRhcmdldCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFN0YXRlbW5lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcmVwbGFjZW1lbnRTdGF0ZW1uZW50VW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9uLFxuICAgICAgICAgIGdlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmcgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nID0gc3BlY2lmaWNTdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7Z2VuZXJhbFN1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbidzIHJlcGxhY2VtZW50IHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1YnN0aXR1dGlvblNwZWNpZmljQ29udGV4dCA9IGdlbmVyYWxTdWJzdGl0dXRpb24uZ2V0U3BlY2lmaWNDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQgPSBzcGVjaWZpY1N1YnN0aXR1dGlvbi5nZXRTcGVjaWZpY0NvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCksXG4gICAgICAgICAgc3BlY2lmaWNTdWJzdGl0dXRpb25SZXBsYWNlbWVudFN0YXRlbWVudCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uLmdldFJlcGxhY2VtZW50U3RhdGVtZW50KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3RhdGVtZW50ID0gZ2VuZXJhbFN1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHNwZWNpZmljU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnQ7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSBnZW5lcmFsU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbW5lbnRVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uJ3MgcmVwbGFjZW1lbnQgc3RhdGVtZW50IHdpdGggdGhlICcke2dlbmVyYWxTdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24ncyByZXBsYWNlbWVudCBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUNvbXBsZXhTdWJzdGl0dXRpb24oY29tcGxleFN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgIHNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyA9IHNpbXBsZVN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIGNvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmcgPSBjb21wbGV4U3Vic3RpdHV0aW9uLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7Y29tcGxleFN1YnN0aXR1dGlvblN0cmluZ30nIGNvbXBsZXggc3Vic3RpdHV0aW9uIHdpdGggdGhlICcke3NpbXBsZVN1YnN0aXR1dGlvblN0cmluZ30nIHNpbXBsZSBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGxldCBzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudChjb21wbGV4U3Vic3RpdHV0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlcGxhY2VtZW50U3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBjb25zdCBzb2xlTm9uVHJpdmlhbERlcml2ZWRTdWJzdGl0dXRpb24gPSBjb250ZXh0LmdldFNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbigpO1xuXG4gICAgICAgIHN1YnN0aXR1dGlvbiA9IHNvbGVOb25Ucml2aWFsRGVyaXZlZFN1YnN0aXR1dGlvbjsgIC8vL1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgc2ltcGxlU3Vic3RpdHV0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbiB3aXRoIHRoZSAnJHtzaW1wbGVTdWJzdGl0dXRpb25TdHJpbmd9JyBzaW1wbGUgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICByZXNvbHZlKGNvbnRleHQpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gdGhpcy5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgc2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiA9IGNvbnRleHQuZmluZFNpbXBsZURlcml2ZWRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICBpZiAoc2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc2ltcGxlU3Vic3RpdHV0aW9uID0gc2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgICBjb21wbGV4U3Vic3RpdHV0aW9uU3RyaW5nID0gY29tcGxleFN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgICAgY29udGV4dC50cmFjZShgUmVzb2x2aW5nIHRoZSAke2NvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmd9JyBjb21wbGV4IHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBzaW1wbGVTdWJzdGl0dXRpb24udW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uKGNvbXBsZXhTdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNpbXBsZVN1YnN0aXR1dGlvblVuaWZpZXMgPSB0aGlzLnN1YnN0aXR1dGlvbi51bmlmeVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgdGhpcy5yZXNvbHZlZCA9IHRydWU7XG5cbiAgICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5yZXNvbHZlZCB0aGUgJyR7Y29tcGxleFN1YnN0aXR1dGlvblN0cmluZ30nIGNvbXBsZXggc3Vic3RpdHV0aW9uLmApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN0YXRlbWVudFN1YnN0aXR1dGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBudWxsO1xuXG4gICAgY29uc3QgeyBuYW1lIH0gPSBqc29uO1xuXG4gICAgaWYgKHRoaXMubmFtZSA9PT0gbmFtZSkge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgdW5zZXJpYWxpc2VzKChqc29uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgICAgbm9kZSA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIC8vL1xuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQgPSByZXNvbHZlZEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpLFxuICAgICAgICAgICAgICAgIHRhcmdldFN0YXRlbWVudCA9IHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0KSxcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHJlcGxhY2VtZW50U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgc3BlY2lmaWNDb250ZXh0KSxcbiAgICAgICAgICAgICAgICBjb250ZXh0cyA9IFtcbiAgICAgICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0LFxuICAgICAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0XG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbm4gPSBuZXcgU3RhdGVtZW50U3Vic3RpdHV0aW9uKGNvbnRleHRzLCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHJlc29sdmVkLCBzdWJzdGl0dXRpb24sIHRhcmdldFN0YXRlbWVudCwgcmVwbGFjZW1lbnRTdGF0ZW1lbnQpO1xuICAgICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRTdWJzdGl0dXRpb25uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRNZXRhdmFyaWFibGUoc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBzdGF0ZW1lbnQgPSBzdHJpcEJyYWNrZXRzRnJvbVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpOyAvLy9cblxuICAgIGxldCBzdGF0ZW1lbnRTdWJzdGl0dXRpb247XG5cbiAgICBhYmxhdGVzKChnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nID0gc3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZShzdGF0ZW1lbnQsIG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IHN0YXRlbWVudFN1YnN0aXR1dGlvblN0cmluZywgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFN1YnN0aXR1dGlvbiA9IHN0YXRlbWVudFN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50U3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRNZXRhdmFyaWFibGVBbmRTdWJzdGl0dXRpb24oc3RhdGVtZW50LCBtZXRhdmFyaWFibGUsIHN1YnN0aXR1dGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIHN0YXRlbWVudCA9IHN0cmlwQnJhY2tldHNGcm9tU3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7IC8vL1xuXG4gICAgbGV0IHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcblxuICAgIGFibGF0ZXMoKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uKHN0YXRlbWVudCwgbWV0YXZhcmlhYmxlLCBzdWJzdGl0dXRpb24pLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBzdGF0ZW1lbnRTdWJzdGl0dXRpb24gPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFN1YnN0aXR1dGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlc29sdmVkRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUoc3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCByZXNvbHZlZCA9IHRydWU7XG5cbiAgcmV0dXJuIHJlc29sdmVkO1xufVxuXG5mdW5jdGlvbiBzdWJzdGl0dXRpb25Gcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZShzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFN1YnN0aXR1dGlvbk5vZGUoKSxcbiAgICAgICAgc3Vic3RpdHV0aW9uID0gY29udGV4dC5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gIHJldHVybiBzdWJzdGl0dXRpb247XG59XG5cbmZ1bmN0aW9uIHRhcmdldFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIGdlbmVyYWxDb250ZXh0KSB7XG4gIGNvbnN0IHRhcmdldFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFRhcmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgdGFyZ2V0U3RhdGVtZW50ID0gZ2VuZXJhbENvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSh0YXJnZXRTdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gdGFyZ2V0U3RhdGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlKHN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUsIHNwZWNpZmljQ29udGV4dCkge1xuICBjb25zdCByZXBsYWNlbWVudFN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlLmdldFJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICByZXBsYWNlbWVudFN0YXRlbWVudCA9IHNwZWNpZmljQ29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHJlcGxhY2VtZW50U3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHJlcGxhY2VtZW50U3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN0YXRlbWVudFN1YnN0aXR1dGlvbiIsIlN1YnN0aXR1dGlvbiIsImNvbnRleHRzIiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJyZXNvbHZlZCIsInN1YnN0aXR1dGlvbiIsInRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50IiwiaXNSZXNvbHZlZCIsImdldFN1YnN0aXR1dGlvbiIsImdldFRhcmdldFN0YXRlbWVudCIsImdldFJlcGxhY2VtZW50U3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsImdldE5vZGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZ2V0VGFyZ2V0Tm9kZSIsInRhcmdldFN0YXRlbWVudE5vZGUiLCJ0YXJnZXROb2RlIiwiZ2V0UmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIiwicmVwbGFjZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImlzU2ltcGxlIiwic2ltcGxlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImNvbXBhcmVTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJjb250ZXh0Iiwic3RyaXBCcmFja2V0c0Zyb21TdGF0ZW1lbnQiLCJyZXBsYWNlbWVudFN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJjb21wYXJlc1RvU3RhdGVtZW50IiwiY29tcGFyZVBhcmFtZXRlciIsInBhcmFtZXRlciIsInRhcmdldFN0YXRlbWVudENvbXBhcmVzVG9QYXJhbWV0ZXIiLCJjb21wYXJlc1RvUGFyYW1ldGVyIiwidmFsaWRhdGUiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb24iLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInZhbGlkYXRlcyIsInZhbGlkU3Vic3RpdHV0aW9uIiwiZmluZFZhbGlkU3Vic3RpdHV0aW9uIiwiZGVidWciLCJnZW5lcmFsQ29udGV4dCIsImdldEdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0U3BlY2lmaWNDb250ZXh0IiwiYXR0ZW1wdHMiLCJ0YXJnZXRTdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVRhcmdldFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVSZXBsYWNlbWVudFN0YXRlbWVudCIsInN1YnN0aXR1dGlvblZhbGlkYXRlcyIsInZhbGlkYXRlU3Vic3RpdHV0aW9uIiwiY29tbWl0IiwiYWRkU3Vic3RpdHV0aW9uIiwidGFyZ2V0U3RhdGVtZW50U2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwibWFuaWZlc3QiLCJlbGlkZSIsInRhcmdldFN0YXRlbWVudFN0cmluZyIsInVuaWZ5VGFyZ2V0U3RhdGVtZW50IiwidGFyZ2V0U3RhdGVtbmVudFVuaWZpZXMiLCJnZW5lcmFsU3Vic3RpdHV0aW9uIiwic3BlY2lmaWNTdWJzdGl0dXRpb24iLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3RyaW5nIiwic3BlY2lmaWNTdWJzdGl0dXRpb25TdHJpbmciLCJnZW5lcmFsU3Vic3RpdHV0aW9uR2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY1N1YnN0aXR1dGlvbkdlbmVyYWxDb250ZXh0IiwiZ2VuZXJhbFN1YnN0aXR1dGlvblRhcmdldFN0YXRlbWVudCIsInNwZWNpZmljU3Vic3RpdHV0aW9uVGFyZ2V0U3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwicmVjb25jaWxlIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlSZXBsYWNlbWVudFN0YXRlbWVudCIsInJlcGxhY2VtZW50U3RhdGVtbmVudFVuaWZpZXMiLCJnZW5lcmFsU3Vic3RpdHV0aW9uU3BlY2lmaWNDb250ZXh0Iiwic3BlY2lmaWNTdWJzdGl0dXRpb25TcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsU3Vic3RpdHV0aW9uUmVwbGFjZW1lbnRTdGF0ZW1lbnQiLCJzcGVjaWZpY1N1YnN0aXR1dGlvblJlcGxhY2VtZW50U3RhdGVtZW50IiwidW5pZnlDb21wbGV4U3Vic3RpdHV0aW9uIiwiY29tcGxleFN1YnN0aXR1dGlvbiIsInNpbXBsZVN1YnN0aXR1dGlvbiIsInNpbXBsZVN1YnN0aXR1dGlvblN0cmluZyIsImNvbXBsZXhTdWJzdGl0dXRpb25TdHJpbmciLCJzaW1wbGVTdWJzdGl0dXRpb25VbmlmaWVzIiwicmVwbGFjZW1lbnRTdGF0ZW1lbnRVbmlmaWVzIiwic29sZU5vblRyaXZpYWxEZXJpdmVkU3Vic3RpdHV0aW9uIiwiZ2V0U29sZU5vblRyaXZpYWxEZXJpdmVkU3Vic3RpdHV0aW9uIiwicmVzb2x2ZSIsInNpbXBsZURlcml2ZWRTdWJzdGl0dXRpb24iLCJmaW5kU2ltcGxlRGVyaXZlZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsInVuaWZ5U3Vic3RpdHV0aW9uIiwibmFtZSIsImZyb21KU09OIiwianNvbiIsInN0YXRlbWVudFN1YnN0aXR1dGlvbm4iLCJpbnN0YW50aWF0ZSIsInVuc2VyaWFsaXNlcyIsImluc3RhbnRpYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9uIiwiYnJlYWtQb2ludEZyb21KU09OIiwicmVzb2x2ZWRGcm9tU3RhdGVtZW50U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbkZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwidGFyZ2V0U3RhdGVtZW50RnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJyZXBsYWNlbWVudFN0YXRlbWVudEZyb21TdGF0ZW1lbnRTdWJzdGl0dXRpb25Ob2RlIiwiZnJvbVN0YXRlbWVudEFuZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImFibGF0ZXMiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kTWV0YXZhcmlhYmxlIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uRnJvbVN0YXRlbWVudFN1YnN0aXR1dGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50TWV0YXZhcmlhYmxlQW5kU3Vic3RpdHV0aW9uIiwic3RhdGVtZW50U3Vic3RpdHV0aW9uU3RyaW5nRnJvbVN0YXRlbWVudE1ldGF2YXJpYWJsZUFuZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbk5vZGUiLCJnZXRTdWJzdGl0dXRpb25Ob2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsImdldFRhcmdldFN0YXRlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwiZ2V0UmVwbGFjZW1lbnRTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OztxRUFWeUI7MEJBRUY7NEJBQ1k7MEJBQ1E7NkJBQ007eUJBQ2tCO3lCQUNzQjt3QkFDb0Q7Ozs7OztNQUU3SSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLDhCQUE4QkMscUJBQVk7SUFDcEUsWUFBWUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxRQUFRLEVBQUVDLFlBQVksRUFBRUMsZUFBZSxFQUFFQyxvQkFBb0IsQ0FBRTtRQUM3RyxLQUFLLENBQUNQLFVBQVVDLFFBQVFDLE1BQU1DO1FBRTlCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxlQUFlLEdBQUdBO1FBQ3ZCLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBO0lBQzlCO0lBRUFDLGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQ0osUUFBUTtJQUN0QjtJQUVBSyxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNKLFlBQVk7SUFDMUI7SUFFQUsscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDSixlQUFlO0lBQzdCO0lBRUFLLDBCQUEwQjtRQUN4QixPQUFPLElBQUksQ0FBQ0osb0JBQW9CO0lBQ2xDO0lBRUFLLCtCQUErQjtRQUM3QixNQUFNVixPQUFPLElBQUksQ0FBQ1csT0FBTyxJQUNuQkMsNEJBQTRCWixNQUFNLEdBQUc7UUFFM0MsT0FBT1k7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxzQkFBc0IsSUFBSSxDQUFDVixlQUFlLENBQUNPLE9BQU8sSUFDbERJLGFBQWFELHFCQUFxQixHQUFHO1FBRTNDLE9BQU9DO0lBQ1Q7SUFFQUMscUJBQXFCO1FBQ25CLE1BQU1DLDJCQUEyQixJQUFJLENBQUNaLG9CQUFvQixDQUFDTSxPQUFPLElBQzVETyxrQkFBa0JELDBCQUEwQixHQUFHO1FBRXJELE9BQU9DO0lBQ1Q7SUFFQUMsc0JBQXNCO1FBQUUsT0FBTyxJQUFJLENBQUNmLGVBQWUsQ0FBQ2UsbUJBQW1CO0lBQUk7SUFFM0VDLFdBQVc7UUFDVCxNQUFNQyxTQUFVLElBQUksQ0FBQ2xCLFlBQVksS0FBSztRQUV0QyxPQUFPa0I7SUFDVDtJQUVBQyxzQkFBc0JDLGdCQUFnQixFQUFFO1FBQUUsT0FBTyxJQUFJLENBQUNuQixlQUFlLENBQUNrQixxQkFBcUIsQ0FBQ0M7SUFBbUI7SUFFL0dDLGlCQUFpQkMsU0FBUyxFQUFFQyxPQUFPLEVBQUU7UUFDbkNELFlBQVlFLElBQUFBLG9DQUEwQixFQUFDRixXQUFXQyxVQUFVLEdBQUc7UUFFL0QsTUFBTUUsdUNBQXVDLElBQUksQ0FBQ3ZCLG9CQUFvQixDQUFDd0IsU0FBUyxDQUFDSixZQUMzRUssc0JBQXNCRixzQ0FBdUMsR0FBRztRQUV0RSxPQUFPRTtJQUNUO0lBRUFDLGlCQUFpQkMsU0FBUyxFQUFFO1FBQzFCLE1BQU1DLHFDQUFxQyxJQUFJLENBQUM3QixlQUFlLENBQUMyQixnQkFBZ0IsQ0FBQ0MsWUFDM0VFLHNCQUFzQkQsb0NBQXFDLEdBQUc7UUFFcEUsT0FBT0M7SUFDVDtJQUVBQyxTQUFTaEMsWUFBWSxFQUFFdUIsT0FBTyxFQUFFO1FBQzlCLElBQUlVLHdCQUF3QjtRQUU1QixNQUFNQyw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxRFosUUFBUWEsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLDRCQUE0QiwyQkFBMkIsQ0FBQztRQUV6RixJQUFJRyxZQUFZO1FBRWhCLE1BQU1DLG9CQUFvQixJQUFJLENBQUNDLHFCQUFxQixDQUFDaEI7UUFFckQsSUFBSWUsbUJBQW1CO1lBQ3JCRCxZQUFZO1lBRVpKLHdCQUF3QkssbUJBQW9CLEdBQUc7WUFFL0NmLFFBQVFpQixLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVOLDRCQUE0QiwwQ0FBMEMsQ0FBQztRQUNsRyxPQUFPO1lBQ0wsTUFBTU8saUJBQWlCLElBQUksQ0FBQ0MsaUJBQWlCLElBQ3ZDQyxrQkFBa0IsSUFBSSxDQUFDQyxrQkFBa0I7WUFFL0NDLElBQUFBLGlCQUFRLEVBQUMsQ0FBQ0osZ0JBQWdCRTtnQkFDeEIsTUFBTUcsMkJBQTJCLElBQUksQ0FBQ0MsdUJBQXVCLENBQUNOLGdCQUFnQkU7Z0JBRTlFLElBQUlHLDBCQUEwQjtvQkFDNUIsTUFBTUUsZ0NBQWdDLElBQUksQ0FBQ0MsNEJBQTRCLENBQUNSLGdCQUFnQkU7b0JBRXhGLElBQUlLLCtCQUErQjt3QkFDakMsTUFBTUUsd0JBQXdCLElBQUksQ0FBQ0Msb0JBQW9CLENBQUNuRCxjQUFjeUMsZ0JBQWdCRTt3QkFFdEYsSUFBSU8sdUJBQXVCOzRCQUN6QmIsWUFBWTt3QkFDZDtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSxXQUFXO29CQUNiLElBQUksQ0FBQ2UsTUFBTSxDQUFDWCxnQkFBZ0JFO2dCQUM5QjtZQUNGLEdBQUdGLGdCQUFnQkU7WUFFbkIsSUFBSU4sV0FBVztnQkFDYixNQUFNckMsZUFBZSxJQUFJLEVBQUcsR0FBRztnQkFFL0JpQyx3QkFBd0JqQyxjQUFjLEdBQUc7Z0JBRXpDdUIsUUFBUThCLGVBQWUsQ0FBQ3JEO1lBQzFCO1FBQ0Y7UUFFQSxJQUFJcUMsV0FBVztZQUNiZCxRQUFRaUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLDRCQUE0Qix5QkFBeUIsQ0FBQztRQUMzRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQWtCLHFCQUFxQm5ELFlBQVksRUFBRXlDLGNBQWMsRUFBRUUsZUFBZSxFQUFFO1FBQ2xFLElBQUlPLHdCQUF3QjtRQUU1QixJQUFJbEQsaUJBQWlCLE1BQU07WUFDekIsTUFBTXVCLFVBQVVrQixnQkFDVlAsOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7WUFFekRaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRiw0QkFBNEIsMENBQTBDLENBQUM7WUFFeEcsSUFBSSxDQUFDbEMsWUFBWSxHQUFHQTtZQUVwQmtELHdCQUF3QjtZQUV4QixJQUFJQSx1QkFBdUI7Z0JBQ3pCM0IsUUFBUWlCLEtBQUssQ0FBQyxDQUFDLG1CQUFtQixFQUFFTiw0QkFBNEIsd0NBQXdDLENBQUM7WUFDM0c7UUFDRjtRQUVBLE9BQU9nQjtJQUNUO0lBRUFILHdCQUF3Qk4sY0FBYyxFQUFFRSxlQUFlLEVBQUU7UUFDdkQsSUFBSUcsMkJBQTJCO1FBRS9CLE1BQU12QixVQUFVa0IsZ0JBQ1ZQLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFEWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsNEJBQTRCLDhDQUE4QyxDQUFDO1FBRTVHLE1BQU1vQiwwQkFBMEIsSUFBSSxDQUFDckQsZUFBZSxDQUFDc0QsVUFBVTtRQUUvRCxJQUFJRCx5QkFBeUI7WUFDM0JFLElBQUFBLGlCQUFRLEVBQUMsQ0FBQ2pDO2dCQUNSa0MsSUFBQUEsY0FBSyxFQUFDLENBQUNsQztvQkFDTCxNQUFNdEIsa0JBQWtCLElBQUksQ0FBQ0EsZUFBZSxDQUFDK0IsUUFBUSxDQUFDVDtvQkFFdEQsSUFBSXRCLG9CQUFvQixNQUFNO3dCQUM1QjZDLDJCQUEyQjtvQkFDN0I7Z0JBQ0YsR0FBR3ZCO1lBQ0wsR0FBR29CLGlCQUFpQnBCO1FBQ3RCLE9BQU87WUFDTCxNQUFNbUMsd0JBQXdCLElBQUksQ0FBQ3pELGVBQWUsQ0FBQ2tDLFNBQVM7WUFFNURaLFFBQVFpQixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVrQixzQkFBc0IsbUNBQW1DLENBQUM7UUFDbEY7UUFFQSxJQUFJWiwwQkFBMEI7WUFDNUJ2QixRQUFRaUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLDRCQUE0Qiw4Q0FBOEMsQ0FBQztRQUNoSDtRQUVBLE9BQU9ZO0lBQ1Q7SUFFQUcsNkJBQTZCUixjQUFjLEVBQUVFLGVBQWUsRUFBRTtRQUM1RCxJQUFJSyxnQ0FBZ0M7UUFFcEMsTUFBTXpCLFVBQVVvQixpQkFDVlQsOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFMURaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFRiw0QkFBNEIsbURBQW1ELENBQUM7UUFFakh1QixJQUFBQSxjQUFLLEVBQUMsQ0FBQ2xDO1lBQ0wsTUFBTXJCLHVCQUF1QixJQUFJLENBQUNBLG9CQUFvQixDQUFDOEIsUUFBUSxDQUFDVDtZQUVoRSxJQUFJckIseUJBQXlCLE1BQU07Z0JBQ2pDOEMsZ0NBQWdDO1lBQ2xDO1FBQ0YsR0FBR3pCO1FBRUgsSUFBSXlCLCtCQUErQjtZQUNqQ3pCLFFBQVFpQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRU4sNEJBQTRCLGlEQUFpRCxDQUFDO1FBQ25IO1FBRUEsT0FBT2M7SUFDVDtJQUVBVyxxQkFBcUIzRCxZQUFZLEVBQUV1QixPQUFPLEVBQUU7UUFDMUMsSUFBSXFDLDBCQUEwQjtRQUU5QixNQUFNQyxzQkFBc0IsSUFBSSxFQUMxQkMsdUJBQXVCOUQsY0FDdkIrRCw0QkFBNEJGLG9CQUFvQjFCLFNBQVMsSUFDekQ2Qiw2QkFBNkJGLHFCQUFxQjNCLFNBQVM7UUFFakVaLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRTRCLDJCQUEyQiw0Q0FBNEMsRUFBRUQsMEJBQTBCLG9DQUFvQyxDQUFDO1FBRXZLLE1BQU1FLG9DQUFvQ0osb0JBQW9CbkIsaUJBQWlCLElBQ3pFd0IscUNBQXFDSixxQkFBcUJwQixpQkFBaUIsSUFDM0V5QixxQ0FBcUNOLG9CQUFvQnhELGtCQUFrQixJQUMzRStELHNDQUFzQ04scUJBQXFCekQsa0JBQWtCLElBQzdFb0MsaUJBQWlCd0IsbUNBQ2pCdEIsa0JBQWtCdUIsb0NBQ2xCRyxtQkFBbUJGLG9DQUNuQkcsb0JBQW9CRixxQ0FBcUMsR0FBRztRQUVsRUcsSUFBQUEsa0JBQVMsRUFBQyxDQUFDNUI7WUFDVCxNQUFNNkIsbUJBQW1CSCxpQkFBaUJJLGNBQWMsQ0FBQ0gsbUJBQW1CN0IsZ0JBQWdCRTtZQUU1RixJQUFJNkIsa0JBQWtCO2dCQUNwQjdCLGdCQUFnQlMsTUFBTSxDQUFDN0I7Z0JBRXZCcUMsMEJBQTBCO1lBQzVCO1FBQ0YsR0FBR2pCO1FBRUgsSUFBSWlCLHlCQUF5QjtZQUMzQnJDLFFBQVFhLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFNEIsMkJBQTJCLDRDQUE0QyxFQUFFRCwwQkFBMEIsa0NBQWtDLENBQUM7UUFDeks7UUFFQSxPQUFPSDtJQUNUO0lBRUFjLDBCQUEwQjFFLFlBQVksRUFBRXVCLE9BQU8sRUFBRTtRQUMvQyxJQUFJb0QsK0JBQStCO1FBRW5DLE1BQU1kLHNCQUFzQixJQUFJLEVBQzFCQyx1QkFBdUI5RCxjQUN2QitELDRCQUE0QkYsb0JBQW9CMUIsU0FBUyxJQUN6RDZCLDZCQUE2QkYscUJBQXFCM0IsU0FBUztRQUVqRVosUUFBUWEsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFNEIsMkJBQTJCLGlEQUFpRCxFQUFFRCwwQkFBMEIseUNBQXlDLENBQUM7UUFFakwsTUFBTWEscUNBQXFDZixvQkFBb0JqQixrQkFBa0IsSUFDM0VpQyxzQ0FBc0NmLHFCQUFxQmxCLGtCQUFrQixJQUM3RWtDLDBDQUEwQ2pCLG9CQUFvQnZELHVCQUF1QixJQUNyRnlFLDJDQUEyQ2pCLHFCQUFxQnhELHVCQUF1QixJQUN2Rm1DLGlCQUFpQm1DLG9DQUNqQmpDLGtCQUFrQmtDLHFDQUNsQlIsbUJBQW1CUyx5Q0FDbkJSLG9CQUFvQlMsMENBQTBDLEdBQUc7UUFFdkVSLElBQUFBLGtCQUFTLEVBQUMsQ0FBQzVCO1lBQ1QsTUFBTTZCLG1CQUFtQkgsaUJBQWlCSSxjQUFjLENBQUNILG1CQUFtQjdCLGdCQUFnQkU7WUFFNUYsSUFBSTZCLGtCQUFrQjtnQkFDcEI3QixnQkFBZ0JTLE1BQU0sQ0FBQzdCO2dCQUV2Qm9ELCtCQUErQjtZQUNqQztRQUNGLEdBQUdoQztRQUVILElBQUlnQyw4QkFBOEI7WUFDaENwRCxRQUFRYSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRTRCLDJCQUEyQixpREFBaUQsRUFBRUQsMEJBQTBCLHVDQUF1QyxDQUFDO1FBQ25MO1FBRUEsT0FBT1k7SUFDVDtJQUVBSyx5QkFBeUJDLG1CQUFtQixFQUFFMUQsT0FBTyxFQUFFO1FBQ3JELElBQUl2QixlQUFlO1FBRW5CLE1BQU1rRixxQkFBcUIsSUFBSSxFQUN6QkMsMkJBQTJCRCxtQkFBbUIvQyxTQUFTLElBQ3ZEaUQsNEJBQTRCSCxvQkFBb0I5QyxTQUFTLElBQUssR0FBRztRQUV2RVosUUFBUWEsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFZ0QsMEJBQTBCLGlDQUFpQyxFQUFFRCx5QkFBeUIsd0JBQXdCLENBQUM7UUFFOUksSUFBSUUsNEJBQTRCO1FBRWhDZCxJQUFBQSxrQkFBUyxFQUFDLENBQUNoRDtZQUNULE1BQU0rRCw4QkFBOEIsSUFBSSxDQUFDWix5QkFBeUIsQ0FBQ08scUJBQXFCMUQ7WUFFeEYsSUFBSStELDZCQUE2QjtnQkFDL0IsTUFBTUMsb0NBQW9DaEUsUUFBUWlFLG9DQUFvQztnQkFFdEZ4RixlQUFldUYsbUNBQW9DLEdBQUc7WUFDeEQ7UUFDRixHQUFHaEU7UUFFSCxJQUFJdkIsaUJBQWlCLE1BQU07WUFDekJxRiw0QkFBNEI7UUFDOUI7UUFFQSxJQUFJQSwyQkFBMkI7WUFDN0I5RCxRQUFRaUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUU0QywwQkFBMEIsaUNBQWlDLEVBQUVELHlCQUF5QixzQkFBc0IsQ0FBQztRQUNoSjtRQUVBLE9BQU9uRjtJQUNUO0lBRUF5RixRQUFRbEUsT0FBTyxFQUFFO1FBQ2YsTUFBTUgsbUJBQW1CLElBQUksQ0FBQ0osbUJBQW1CLElBQzNDMEUsNEJBQTRCbkUsUUFBUW9FLCtDQUErQyxDQUFDdkU7UUFFMUYsSUFBSXNFLDhCQUE4QixNQUFNO1lBQ3RDLE1BQU1SLHFCQUFxQlEsMkJBQ3JCVCxzQkFBc0IsSUFBSSxFQUMxQkcsNEJBQTRCSCxvQkFBb0I5QyxTQUFTO1lBRS9EWixRQUFRYSxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVnRCwwQkFBMEIseUJBQXlCLENBQUM7WUFFbkYsTUFBTXBGLGVBQWVrRixtQkFBbUJGLHdCQUF3QixDQUFDQyxxQkFBcUIxRDtZQUV0RixJQUFJdkIsaUJBQWlCLE1BQU07Z0JBQ3pCLE1BQU1xRiw0QkFBNEIsSUFBSSxDQUFDckYsWUFBWSxDQUFDNEYsaUJBQWlCLENBQUM1RixjQUFjdUI7Z0JBRXBGLElBQUk4RCwyQkFBMkI7b0JBQzdCLElBQUksQ0FBQ3RGLFFBQVEsR0FBRztvQkFFaEJ3QixRQUFRaUIsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUU0QywwQkFBMEIsdUJBQXVCLENBQUM7Z0JBQ3RGO1lBQ0Y7UUFDRjtJQUNGO0lBRUEsT0FBT1MsT0FBTyx3QkFBd0I7SUFFdEMsT0FBT0MsU0FBU0MsSUFBSSxFQUFFeEUsT0FBTyxFQUFFO1FBQzdCLElBQUl5RSx5QkFBeUI7UUFFN0IsTUFBTSxFQUFFSCxJQUFJLEVBQUUsR0FBR0U7UUFFakIsSUFBSSxJQUFJLENBQUNGLElBQUksS0FBS0EsTUFBTTtZQUN0QkksSUFBQUEsb0JBQVcsRUFBQyxDQUFDMUU7Z0JBQ1gyRSxJQUFBQSxxQkFBWSxFQUFDLENBQUNILE1BQU10RCxnQkFBZ0JFO29CQUNsQyxNQUFNLEVBQUUvQyxNQUFNLEVBQUUsR0FBR21HLE1BQ2J0Riw0QkFBNEIwRixJQUFBQSw2Q0FBZ0MsRUFBQ3ZHLFFBQVEyQixVQUNyRTFCLE9BQU9ZLDJCQUNQWCxhQUFhc0csSUFBQUEsOEJBQWtCLEVBQUNMLE9BQ2hDaEcsV0FBV3NHLHNDQUFzQzVGLDJCQUEyQmMsVUFDNUV2QixlQUFlc0csMENBQTBDN0YsMkJBQTJCZ0MsZ0JBQWdCRSxrQkFDcEcxQyxrQkFBa0JzRyw2Q0FBNkM5RiwyQkFBMkJnQyxpQkFDMUZ2Qyx1QkFBdUJzRyxrREFBa0QvRiwyQkFBMkJrQyxrQkFDcEdoRCxXQUFXO3dCQUNUOEM7d0JBQ0FFO3FCQUNEO29CQUVQcUQseUJBQXlCLElBQUl2RyxzQkFBc0JFLFVBQVVDLFFBQVFDLE1BQU1DLFlBQVlDLFVBQVVDLGNBQWNDLGlCQUFpQkM7Z0JBQ2xJLEdBQUc2RixNQUFNeEU7WUFDWCxHQUFHQTtRQUNMO1FBRUEsT0FBT3lFO0lBQ1Q7SUFFQSxPQUFPUyw2QkFBNkJuRixTQUFTLEVBQUVvRixZQUFZLEVBQUVqRSxjQUFjLEVBQUVFLGVBQWUsRUFBRTtRQUM1RixNQUFNcEIsVUFBVW9CLGlCQUFrQixHQUFHO1FBRXJDckIsWUFBWUUsSUFBQUEsb0NBQTBCLEVBQUNGLFdBQVdDLFVBQVUsR0FBRztRQUUvRCxJQUFJVTtRQUVKMEUsSUFBQUEsZ0JBQU8sRUFBQyxDQUFDbEUsZ0JBQWdCRTtZQUN2QixNQUFNcEIsVUFBVW9CLGlCQUFrQixHQUFHO1lBRXJDc0QsSUFBQUEsb0JBQVcsRUFBQyxDQUFDMUU7Z0JBQ1gsTUFBTW9CLGtCQUFrQnBCLFNBQ2xCVyw4QkFBOEIwRSxJQUFBQSwrREFBdUQsRUFBQ3RGLFdBQVdvRixlQUNqRzlHLFNBQVNzQyw2QkFDVHpCLDRCQUE0QjBGLElBQUFBLDZDQUFnQyxFQUFDdkcsUUFBUTJCO2dCQUUzRVUsd0JBQXdCNEUsSUFBQUEsMkRBQWtELEVBQUNwRywyQkFBMkJnQyxnQkFBZ0JFO1lBQ3hILEdBQUdwQjtRQUNMLEdBQUdrQixnQkFBZ0JFO1FBRW5CLE9BQU9WO0lBQ1Q7SUFFQSxPQUFPNkUseUNBQXlDeEYsU0FBUyxFQUFFb0YsWUFBWSxFQUFFMUcsWUFBWSxFQUFFeUMsY0FBYyxFQUFFRSxlQUFlLEVBQUU7UUFDdEgsTUFBTXBCLFVBQVVvQixpQkFBa0IsR0FBRztRQUVyQ3JCLFlBQVlFLElBQUFBLG9DQUEwQixFQUFDRixXQUFXQyxVQUFVLEdBQUc7UUFFL0QsSUFBSVU7UUFFSjBFLElBQUFBLGdCQUFPLEVBQUMsQ0FBQ2xFLGdCQUFnQkU7WUFDdkIsTUFBTXBCLFVBQVVvQixpQkFBa0IsR0FBRztZQUVyQ3NELElBQUFBLG9CQUFXLEVBQUMsQ0FBQzFFO2dCQUNYLE1BQU1vQixrQkFBa0JwQixTQUNsQlcsOEJBQThCNkUsSUFBQUEsMkVBQW1FLEVBQUN6RixXQUFXb0YsY0FBYzFHLGVBQzNISixTQUFTc0MsNkJBQ1R6Qiw0QkFBNEIwRixJQUFBQSw2Q0FBZ0MsRUFBQ3ZHLFFBQVEyQjtnQkFFM0VVLHdCQUF3QjRFLElBQUFBLDJEQUFrRCxFQUFDcEcsMkJBQTJCZ0MsZ0JBQWdCRTtZQUN4SCxHQUFHcEI7UUFDTCxHQUFHa0IsZ0JBQWdCRTtRQUVuQixPQUFPVjtJQUNUO0FBQ0Y7QUFFQSxTQUFTb0Usc0NBQXNDNUYseUJBQXlCLEVBQUVjLE9BQU87SUFDL0UsTUFBTXhCLFdBQVc7SUFFakIsT0FBT0E7QUFDVDtBQUVBLFNBQVN1RywwQ0FBMEM3Rix5QkFBeUIsRUFBRWMsT0FBTztJQUNuRixNQUFNeUYsbUJBQW1CdkcsMEJBQTBCd0csbUJBQW1CLElBQ2hFakgsZUFBZXVCLFFBQVEyRixrQ0FBa0MsQ0FBQ0Y7SUFFaEUsT0FBT2hIO0FBQ1Q7QUFFQSxTQUFTdUcsNkNBQTZDOUYseUJBQXlCLEVBQUVnQyxjQUFjO0lBQzdGLE1BQU05QixzQkFBc0JGLDBCQUEwQjBHLHNCQUFzQixJQUN0RWxILGtCQUFrQndDLGVBQWUyRSw0QkFBNEIsQ0FBQ3pHO0lBRXBFLE9BQU9WO0FBQ1Q7QUFFQSxTQUFTdUcsa0RBQWtEL0YseUJBQXlCLEVBQUVrQyxlQUFlO0lBQ25HLE1BQU03QiwyQkFBMkJMLDBCQUEwQjRHLDJCQUEyQixJQUNoRm5ILHVCQUF1QnlDLGdCQUFnQnlFLDRCQUE0QixDQUFDdEc7SUFFMUUsT0FBT1o7QUFDVCJ9