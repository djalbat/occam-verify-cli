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
const _default = (0, _elements.define)(class Assumption extends _occamlanguages.Element {
    constructor(context, string, node, reference, statement){
        super(context, string, node);
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
    getMetavariable() {
        return this.reference.getMetavariable();
    }
    matchAssumptionNode(assumptionNode) {
        const node = assumptionNode, nodeMatches = this.matchNode(node), assumptionNodeMatches = nodeMatches; ///
        return assumptionNodeMatches;
    }
    compareSubstitution(substitution, context) {
        let comparesToSubstituion = false;
        const assumptionString = this.getString(), substitutionString = substitution.getString();
        context.trace(`Comparing the '${assumptionString}' assumption to the '${substitutionString}' substitution...`);
        const statement = substitution.getStatement(), metavariableName = substitution.getMetavariableName(), statementEqualToStatement = this.statement.isEqualTo(statement), referenceMetavariableComparesToMetavariable = this.reference.compareMetavariableName(metavariableName);
        if (statementEqualToStatement && referenceMetavariableComparesToMetavariable) {
            comparesToSubstituion = true;
        }
        if (comparesToSubstituion) {
            context.debug(`...compared the '${substitutionString}' assumption to the '${assumptionString}' substitution.`);
        }
        return comparesToSubstituion;
    }
    findValidAssumption(context) {
        const assumptionNode = this.getAssumptionNode(), assumption = context.findAssumptionByAssumptionNode(assumptionNode), validAssumption = assumption; ///
        return validAssumption;
    }
    validate(stated, context) {
        let assumption = null;
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' assumption...`);
        const validAssumption = this.findValidAssumption(context);
        if (validAssumption) {
            assumption = validAssumption; ///
            context.debug(`...the '${assumptionString}' assumption is already valid.`);
        } else {
            let validates = false;
            const statementValidates = this.validateStatement(stated, context);
            if (statementValidates) {
                const referenceValidates = this.validateReference(stated, context);
                if (referenceValidates) {
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
                context.debug(`...validated the '${assumptionString}' assumption.`);
            }
        }
        return assumption;
    }
    validateReference(stated, context) {
        let referenceValidates = false;
        const assumptionString = this.getString(), referenceString = this.reference.getString();
        context.trace(`Validating the '${assumptionString}' assumption's '${referenceString}' reference...`);
        const reference = this.reference.validate(context);
        if (reference !== null) {
            const metavariable = this.reference.getMetavariable(), metavariablePresent = context.isMetavariablePresent(metavariable, context);
            if (metavariablePresent) {
                referenceValidates = true;
            } else {
                const topLevelMetaAssertions = context.findTopLevelMetaAssertionsByReference(this.reference, context), topLevelMetaAssertionsCompare = topLevelMetaAssertions.some((topLevelMetaAssertion)=>{
                    const topLevelMetaAssertionUnifies = this.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
                    if (topLevelMetaAssertionUnifies) {
                        return true;
                    }
                });
                if (topLevelMetaAssertionsCompare) {
                    referenceValidates = true;
                }
            }
        }
        if (referenceValidates) {
            context.debug(`...validated the '${assumptionString}' assumption's '${referenceString}' statement.`);
        }
        return referenceValidates;
    }
    validateStatement(stated, context) {
        let statementValidates = false;
        const assumptionString = this.getString(), statementString = this.statement.getString();
        context.trace(`Validating the '${assumptionString}' assumption's '${statementString}' statement...`);
        stated = true; ///
        const statement = this.statement.validate(stated, context);
        if (statement !== null) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.debug(`...validated the '${assumptionString}' assumption's '${statementString}' statement.`);
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
        let validatesWhenDerived;
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' derived assumption...`);
        validatesWhenDerived = true;
        if (validatesWhenDerived) {
            context.debug(`...validated the '${assumptionString}' derived assumption.`);
        }
        return validatesWhenDerived;
    }
    unifyLabel(label, generalContext, specificContext) {
        let labelUnifiesWithReference;
        const context = generalContext, labelString = label.getString(), assumptionString = this.getString(); //;/
        context.trace(`Unifying the '${labelString}' label with the '${assumptionString}' assumption...`);
        const labelUnifies = this.reference.unifyLabel(label, context);
        labelUnifiesWithReference = labelUnifies; ///
        if (labelUnifiesWithReference) {
            context.debug(`...unified the '${labelString}' label with the '${assumptionString}' assumption.`);
        }
        return labelUnifiesWithReference;
    }
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
        let topLevelMetaAssertionUnifies = false;
        const assumptionString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);
        const generalContext = context; ///
        context = topLevelMetaAssertion.getContext(); ///
        const specificContext = context; ///
        (0, _context.reconcile)((specificContext)=>{
            const label = topLevelMetaAssertion.getLabel(), labelUnifies = this.unifyLabel(label, generalContext, specificContext);
            if (labelUnifies) {
                topLevelMetaAssertionUnifies = this.statement.unifyTopLevelMetaAssertion(topLevelMetaAssertion, generalContext, specificContext);
                specificContext.commit(context);
            }
        }, specificContext);
        if (topLevelMetaAssertionUnifies) {
            context.trace(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);
        }
        return topLevelMetaAssertionUnifies;
    }
    toJSON() {
        const string = this.getString(), json = {
            string
        };
        return json;
    }
    static name = "Assumption";
    static fromJSON(json, context) {
        const assumption = (0, _context.instantiate)((context)=>{
            const { string } = json, assumptionNode = (0, _instantiate.instantiateAssumption)(string, context), node = assumptionNode, reference = referenceFromAssumptionNode(assumptionNode, context), statement = statementFromAssumptionNode(assumptionNode, context);
            context = null; ///
            const assumption = new Assumption(context, string, node, reference, statement);
            return assumption;
        }, context);
        return assumption;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVBc3N1bXB0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlLCByZWNvbmNpbGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFzc3VtcHRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7IH1cblxuICBtYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHVpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ICYmIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dWlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dWlvbjtcbiAgfVxuXG4gIGZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0gdGhpcy5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRBc3N1bXB0aW9uID0gYXNzdW1wdGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkQXNzdW1wdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3N1bXB0aW9uID0gdGhpcy5maW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzdW1wdGlvbikge1xuICAgICAgYXNzdW1wdGlvbiA9IHZhbGlkQXNzdW1wdGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGFzc3VtcHRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25zQ29tcGFyZSA9IHRvcExldmVsTWV0YUFzc2VydGlvbnMuc29tZSgodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vOy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbFVuaWZpZXMgPSB0aGlzLnJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UgPSBsYWJlbFVuaWZpZXM7IC8vL1xuXG4gICAgaWYgKGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRDb250ZXh0KCk7ICAvLy9cblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc3VtcHRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBhc3N1bXB0aW9uTm9kZSA9IGluc3RhbnRpYXRlQXNzdW1wdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXNzdW1wdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInJlZmVyZW5jZSIsInN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImdldFN0YXRlbWVudCIsImdldEFzc3VtcHRpb25Ob2RlIiwiZ2V0Tm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlIiwibWF0Y2hBc3N1bXB0aW9uTm9kZSIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiYXNzdW1wdGlvbk5vZGVNYXRjaGVzIiwiY29tcGFyZVN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsImNvbXBhcmVzVG9TdWJzdGl0dWlvbiIsImFzc3VtcHRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJzdWJzdGl0dXRpb25TdHJpbmciLCJ0cmFjZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwic3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCIsImlzRXF1YWxUbyIsInJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsImRlYnVnIiwiZmluZFZhbGlkQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJ2YWxpZEFzc3VtcHRpb24iLCJ2YWxpZGF0ZSIsInN0YXRlZCIsInZhbGlkYXRlcyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwicmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYWRkQXNzdW1wdGlvbiIsInJlZmVyZW5jZVN0cmluZyIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnNDb21wYXJlIiwic29tZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInN0YXRlbWVudFN0cmluZyIsInVuaWZ5TGFiZWwiLCJsYWJlbCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwibGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSIsImxhYmVsU3RyaW5nIiwibGFiZWxVbmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0Q29udGV4dCIsInJlY29uY2lsZSIsImdldExhYmVsIiwiY29tbWl0IiwidG9KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVBc3N1bXB0aW9uIiwicmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlIiwic3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFRQTs7O2VBQUE7OztnQ0FOd0I7MEJBRUQ7NkJBQ2U7eUJBQ0M7TUFFdkMsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxDQUFFO1FBQ3ZELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLG9CQUFvQjtRQUNsQixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsaUJBQWlCUCxNQUFPLEdBQUc7UUFFakMsT0FBT087SUFDVDtJQUVBQyxrQkFBa0I7UUFBRSxPQUFPLElBQUksQ0FBQ1AsU0FBUyxDQUFDTyxlQUFlO0lBQUk7SUFFN0RDLG9CQUFvQkYsY0FBYyxF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