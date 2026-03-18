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
        const referenceString = this.reference.getString(), assumptionString = this.getString(); ///
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
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
        let topLevelMetaAssertionUnifies = false;
        const assumptionString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);
        const specificContext = context; ///
        context = topLevelMetaAssertion.getContext(); ///
        const generalContext = context; ///
        context = specificContext; ///
        (0, _context.reconcile)((specificContext)=>{
            const topLevelAssertionUnifiesWithReference = topLevelMetaAssertion.unifyWithReference(this.reference, generalContext, specificContext);
            if (topLevelAssertionUnifiesWithReference) {
                const topLevelAssertionUnifiesWithStatement = topLevelMetaAssertion.unifyWithStatement(this.statement, generalContext, specificContext);
                if (topLevelAssertionUnifiesWithStatement) {
                    specificContext.commit(context);
                    topLevelMetaAssertionUnifies = true;
                }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVBc3N1bXB0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlLCByZWNvbmNpbGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFzc3VtcHRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7IH1cblxuICBtYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHVpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ICYmIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dWlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dWlvbjtcbiAgfVxuXG4gIGZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0gdGhpcy5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRBc3N1bXB0aW9uID0gYXNzdW1wdGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkQXNzdW1wdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3N1bXB0aW9uID0gdGhpcy5maW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzdW1wdGlvbikge1xuICAgICAgYXNzdW1wdGlvbiA9IHZhbGlkQXNzdW1wdGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGFzc3VtcHRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIGNvbnRleHQpLFxuICAgICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25zQ29tcGFyZSA9IHRvcExldmVsTWV0YUFzc2VydGlvbnMuc29tZSgodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIHN0YXRlZCA9IHRydWU7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRDb250ZXh0KCk7ICAvLy9cblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzV2l0aFJlZmVyZW5jZSA9IHRvcExldmVsTWV0YUFzc2VydGlvbi51bmlmeVdpdGhSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXNXaXRoU3RhdGVtZW50ID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLnVuaWZ5V2l0aFN0YXRlbWVudCh0aGlzLnN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uVW5pZmllc1dpdGhTdGF0ZW1lbnQpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBc3N1bXB0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBpbnN0YW50aWF0ZUFzc3VtcHRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsOyAvLy9cblxuICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpO1xuXG4gICAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFzc3VtcHRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJyZWZlcmVuY2UiLCJzdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnQiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImdldE5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZSIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImFzc3VtcHRpb25Ob2RlTWF0Y2hlcyIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb21wYXJlc1RvU3Vic3RpdHVpb24iLCJhc3N1bXB0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJkZWJ1ZyIsImZpbmRWYWxpZEFzc3VtcHRpb24iLCJhc3N1bXB0aW9uIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwidmFsaWRBc3N1bXB0aW9uIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEFzc3VtcHRpb24iLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zQ29tcGFyZSIsInNvbWUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJyZWNvbmNpbGUiLCJ0b3BMZXZlbEFzc2VydGlvblVuaWZpZXNXaXRoUmVmZXJlbmNlIiwidW5pZnlXaXRoUmVmZXJlbmNlIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzV2l0aFN0YXRlbWVudCIsInVuaWZ5V2l0aFN0YXRlbWVudCIsImNvbW1pdCIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQXNzdW1wdGlvbiIsInJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0NBTndCOzBCQUVEOzZCQUNlO3lC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