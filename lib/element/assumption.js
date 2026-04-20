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
const _occamlanguages = require("occam-languages");
const _elements = require("../elements");
const _instantiate = require("../process/instantiate");
const _context = require("../utilities/context");
const _breakPoint = require("../utilities/breakPoint");
const _default = (0, _elements.define)(class Assumption extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, reference, statement){
        super(context, string, node, breakPoint);
        this.reference = reference;
        this.statement = statement;
    }
    getReference() {
        return this.reference;
    }
    getStatement() {
        return this.statement;
    }
    getAssumptionNode() {
        const node = this.getNode(), assumptionNode = node; ///
        return assumptionNode;
    }
    getStatementNode() {
        return this.statement.getStatementNode();
    }
    getMetavariable() {
        return this.reference.getMetavariable();
    }
    getTopLevelMetaAssertion() {
        return this.reference.getTopLevelMetaAssertion();
    }
    isEqualTo(assumption) {
        const assumptionNode = assumption.getNode(), assumptionNodeMatches = this.matchAssumptionNode(assumptionNode), equalTo = assumptionNodeMatches; ///
        return equalTo;
    }
    matchAssumptionNode(assumptionNode) {
        const node = assumptionNode, nodeMatches = this.matchNode(node), assumptionNodeMatches = nodeMatches; ///
        return assumptionNodeMatches;
    }
    findSubproofAssertion(context) {
        let subproofAssertion = null;
        const statementNode = this.getStatementNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode();
        if (subproofAssertionNode !== null) {
            subproofAssertion = context.findAssertionByAssertionNode(subproofAssertionNode);
        }
        return subproofAssertion;
    }
    findValidAssumption(context) {
        const assumptionNode = this.getAssumptionNode(), assumption = context.findAssumptionByAssumptionNode(assumptionNode), validAssumption = assumption; ///
        return validAssumption;
    }
    validate(context) {
        let assumption = null;
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' assumption...`);
        let validates = false;
        const validAssumption = this.findValidAssumption(context);
        if (validAssumption) {
            validates = true;
            assumption = validAssumption; ///
            context.debug(`...the '${assumptionString}' assumption is already valid.`);
        } else {
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                const referenceValidates = this.validateReference(context);
                if (referenceValidates) {
                    const stated = context.isStated();
                    let validatesWhenStated = false, validatesWhenDerived = false;
                    if (stated) {
                        validatesWhenStated = this.validateWhenStated(context);
                    } else {
                        validatesWhenDerived = this.validateWhenDerived(context);
                    }
                    if (validatesWhenStated || validatesWhenDerived) {
                        validates = true;
                    }
                }
            }
            if (validates) {
                assumption = this; ///
                context.addAssumption(assumption);
            }
        }
        if (validates) {
            context.debug(`...validated the '${assumptionString}' assumption.`);
        }
        return assumption;
    }
    validateReference(context) {
        let referenceValidates = false;
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' assumption's reference...`);
        const reference = this.reference.validate(context);
        if (reference !== null) {
            const metavariable = reference.getMetavariable(), metavariablePresent = context.isMetavariablePresent(metavariable, context);
            if (metavariablePresent) {
                this.reference = reference;
                referenceValidates = true;
            } else {
                const topLevelMetaAssertionsUnify = this.unifyTopLevelMetaAssertions(reference, context);
                if (topLevelMetaAssertionsUnify) {
                    this.reference = reference;
                    referenceValidates = true;
                }
            }
        }
        if (referenceValidates) {
            context.debug(`...validated the '${assumptionString}' assumption's reference.`);
        }
        return referenceValidates;
    }
    validateStatement(context) {
        let statementValidates = false;
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' assumption's statement...`);
        const statement = this.statement.validate(context);
        if (statement !== null) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.debug(`...validated the '${assumptionString}' assumption's statement.`);
        }
        return statementValidates;
    }
    validateWhenStated(context) {
        let validatesWhenStated;
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' stated assumption...`);
        validatesWhenStated = true;
        if (validatesWhenStated) {
            context.debug(`...validated the '${assumptionString}' stated assumption.`);
        }
        return validatesWhenStated;
    }
    validateWhenDerived(context) {
        let validatesWhenDerived = false;
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' derived assumption...`);
        const topLevelMetaAssertion = this.getTopLevelMetaAssertion();
        if (topLevelMetaAssertion !== null) {
            validatesWhenDerived = true;
        } else {
            context.debug(`The '${assumptionString}' asumption did not unify a top level meta-assumption.`);
        }
        if (validatesWhenDerived) {
            context.debug(`...validated the '${assumptionString}' derived assumption.`);
        }
        return validatesWhenDerived;
    }
    unifyStatement(statement, generalContext, specificContext) {
        let statementUnifies;
        const context = specificContext, statementString = statement.getString(), proofAssertionString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement with the '${proofAssertionString}' assumption's statement...`);
        statementUnifies = this.statement.unifyStatement(statement, generalContext, specificContext);
        if (statementUnifies) {
            context.debug(`...unified the '${statementString}' statement with the '${proofAssertionString}' assumption's statement.`);
        }
        return statementUnifies;
    }
    unifyDeduction(deduction, context) {
        let deductionUnifies = false;
        const deductionString = deduction.getString(), assumptionString = this.getString(); ///
        context.trace(`Unifying the '${deductionString}' deduction with the '${assumptionString}' assumption's statement...`);
        const deductionContext = deduction.getContext(), generalContext = context, specificContext = deductionContext; ///
        (0, _context.reconcile)((specificContext)=>{
            const statement = deduction.getStatement(), statementUnifies = this.unifyStatement(statement, generalContext, specificContext);
            if (statementUnifies) {
                specificContext.commit(context);
                deductionUnifies = true;
            }
        }, specificContext);
        if (deductionUnifies) {
            context.debug(`...unified the '${deductionString}' deduction with the '${assumptionString}' assumption's statement.`);
        }
        return deductionUnifies;
    }
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
        let topLevelMetaAssertionUnifies = false;
        const assumptionString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);
        (0, _context.reconcile)((context)=>{
            topLevelMetaAssertionUnifies = this.reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
            if (topLevelMetaAssertionUnifies) {
                const subproofAssertion = this.findSubproofAssertion(context);
                if (subproofAssertion !== null) {
                    topLevelMetaAssertionUnifies = subproofAssertion.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
                } else {
                    const unconditional = topLevelMetaAssertion.isUnconditional();
                    if (unconditional) {
                        const deduction = topLevelMetaAssertion.getDeduction(), deductionUnifies = this.unifyDeduction(deduction, context);
                        if (deductionUnifies) {
                            topLevelMetaAssertionUnifies = true;
                        }
                    }
                }
            }
        }, context);
        if (topLevelMetaAssertionUnifies) {
            context.trace(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);
        }
        return topLevelMetaAssertionUnifies;
    }
    unifyTopLevelMetaAssertions(reference, context) {
        let topLevelMetaAssertionsUnify;
        const topLevelMetaAssertions = context.findTopLevelMetaAssertionsByReference(reference);
        topLevelMetaAssertionsUnify = topLevelMetaAssertions.some((topLevelMetaAssertion)=>{
            const topLevelMetaAssertionUnifies = this.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
            if (topLevelMetaAssertionUnifies) {
                return true;
            }
        });
        return topLevelMetaAssertionsUnify;
    }
    static name = "Assumption";
    toJSON() {
        const string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const json = {
            string,
            breakPoint
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string } = json, assumptionNode = (0, _instantiate.instantiateAssumption)(string, context), node = assumptionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), reference = referenceFromAssumptionNode(assumptionNode, context), statement = statementFromAssumptionNode(assumptionNode, context), assumption = new Assumption(context, string, node, breakPoint, reference, statement);
            return assumption;
        }, context);
    }
});
function referenceFromAssumptionNode(assumptionNode, context) {
    const metavariableNode = assumptionNode.getMetavariableNode(context), reference = context.findReferenceByMetavariableNode(metavariableNode);
    return reference;
}
function statementFromAssumptionNode(assumptionNode, context) {
    const statementNode = assumptionNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVBc3N1bXB0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHJlY29uY2lsZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiwgYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFzc3VtcHRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50Tm9kZSgpIHsgcmV0dXJuIHRoaXMuc3RhdGVtZW50LmdldFN0YXRlbWVudE5vZGUoKTsgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCk7IH1cblxuICBpc0VxdWFsVG8oYXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0gYXNzdW1wdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gYXNzdW1wdGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRTdWJwcm9vZkFzc2VydGlvbihjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mQXNzZXJ0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IHRoaXMuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkQXNzdW1wdGlvbiA9IGFzc3VtcHRpb247ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB2YWxpZEFzc3VtcHRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3N1bXB0aW9uKSB7XG4gICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuXG4gICAgICBhc3N1bXB0aW9uID0gdmFsaWRBc3N1bXB0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgYXNzdW1wdGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyhyZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnkpIHtcbiAgICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcblxuICAgICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3Mgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3RhdGVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlXG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3RhdGVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpO1xuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzdW1wdGlvbiBkaWQgbm90IHVuaWZ5IGEgdG9wIGxldmVsIG1ldGEtYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3Mgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3Mgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGRlZHVjdGlvblN0cmluZyA9IGRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uQ29udGV4dCA9IGRlZHVjdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBkZWR1Y3Rpb25Db250ZXh0OyAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBkZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3Mgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSB0aGlzLmZpbmRTdWJwcm9vZkFzc2VydGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgICAgICAgaWYgKHVuY29uZGl0aW9uYWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXREZWR1Y3Rpb24oKSxcbiAgICAgICAgICAgICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb25zKHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnk7XG5cbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnkgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25zLnNvbWUoKHRvcExldmVsTWV0YUFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5O1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc3VtcHRpb25cIjtcblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgYnJlYWtQb2ludCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpO1xuXG4gICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIHN0cmluZyxcbiAgICAgIGJyZWFrUG9pbnRcbiAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIHJldHVybiBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBhc3N1bXB0aW9uTm9kZSA9IGluc3RhbnRpYXRlQXNzdW1wdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFzc3VtcHRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJnZXROb2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiaXNFcXVhbFRvIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kU3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbiIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiZmluZFZhbGlkQXNzdW1wdGlvbiIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsInZhbGlkQXNzdW1wdGlvbiIsInZhbGlkYXRlIiwiYXNzdW1wdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidmFsaWRhdGVzIiwiZGVidWciLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYWRkQXNzdW1wdGlvbiIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnkiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ1bmlmeVN0YXRlbWVudCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsInN0YXRlbWVudFN0cmluZyIsInByb29mQXNzZXJ0aW9uU3RyaW5nIiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwiZGVkdWN0aW9uU3RyaW5nIiwiZGVkdWN0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJyZWNvbmNpbGUiLCJjb21taXQiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ1bmNvbmRpdGlvbmFsIiwiaXNVbmNvbmRpdGlvbmFsIiwiZ2V0RGVkdWN0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJzb21lIiwibmFtZSIsInRvSlNPTiIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUFzc3VtcHRpb24iLCJicmVha1BvaW50RnJvbUpTT04iLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7OztnQ0FQd0I7MEJBRUQ7NkJBQ2U7eUJBQ0M7NEJBQ3dCO01BRS9ELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxDQUFFO1FBQ25FLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLG9CQUFvQjtRQUNsQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMsaUJBQWlCUixNQUFPLEdBQUc7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