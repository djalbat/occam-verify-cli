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
const _context = require("../utilities/context");
const _instantiate = require("../process/instantiate");
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
    getTopLevelMetaAssertion() {
        return this.reference.getTopLevelMetaAssertion();
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
                const topLevelMetaAssertions = context.findTopLevelMetaAssertionsByReference(this.reference), topLevelMetaAssertionsCompare = topLevelMetaAssertions.some((topLevelMetaAssertion)=>{
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
            context.debug(`...validated the '${assumptionString}' assumption's '${referenceString}' reference.`);
        }
        return referenceValidates;
    }
    validateStatement(stated, context) {
        let statementValidates = false;
        const assumptionString = this.getString(), statementString = this.statement.getString();
        context.trace(`Validating the '${assumptionString}' assumption's '${statementString}' statement...`);
        (0, _context.descend)((context)=>{
            const stated = true, statement = this.statement.validate(stated, context);
            if (statement !== null) {
                statementValidates = true;
            }
        }, context);
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
    unifyTopLevelMetaAssertion(topLevelMetaAssertion, context) {
        let topLevelMetaAssertionUnifies;
        const assumptionString = this.getString(), topLevelMetaAssertionString = topLevelMetaAssertion.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);
        topLevelMetaAssertionUnifies = this.reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
        if (topLevelMetaAssertionUnifies) {
            topLevelMetaAssertionUnifies = this.statement.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgZGVzY2VuZCwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQXNzdW1wdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBc3N1bXB0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCk7IH1cblxuICBtYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHVpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ICYmIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dWlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dWlvbjtcbiAgfVxuXG4gIGZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0gdGhpcy5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRBc3N1bXB0aW9uID0gYXNzdW1wdGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkQXNzdW1wdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3N1bXB0aW9uID0gdGhpcy5maW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzdW1wdGlvbikge1xuICAgICAgYXNzdW1wdGlvbiA9IHZhbGlkQXNzdW1wdGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGFzc3VtcHRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25zQ29tcGFyZSA9IHRvcExldmVsTWV0YUFzc2VydGlvbnMuc29tZSgodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25zQ29tcGFyZSkge1xuICAgICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlZCA9IHRydWUsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdGhpcy5nZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKTtcblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3VtcHRpb24gZGlkIG5vdCB1bmlmeSBhIHRvcCBsZXZlbCBtZXRhLWFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnJlZmVyZW5jZS51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXNzdW1wdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGFzc3VtcHRpb25Ob2RlID0gaW5zdGFudGlhdGVBc3N1bXB0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDsgLy8vXG5cbiAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZShjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBc3N1bXB0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJnZXROb2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJtYXRjaEFzc3VtcHRpb25Ob2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJhc3N1bXB0aW9uTm9kZU1hdGNoZXMiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1aW9uIiwiYXNzdW1wdGlvblN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiZGVidWciLCJmaW5kVmFsaWRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsInZhbGlkQXNzdW1wdGlvbiIsInZhbGlkYXRlIiwic3RhdGVkIiwidmFsaWRhdGVzIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRBc3N1bXB0aW9uIiwicmVmZXJlbmNlU3RyaW5nIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0NvbXBhcmUiLCJzb21lIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwic3RhdGVtZW50U3RyaW5nIiwiZGVzY2VuZCIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQXNzdW1wdGlvbiIsInJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0NBTndCOzBCQUVEO3lCQUNjOzZCQUNDO01BRXRDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsQ0FBRTtRQUN2RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxvQkFBb0I7UUFDbEIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGlCQUFpQlAsTUFBTyxHQUFHO1FBRWpDLE9BQU9PO0lBQ1Q7SUFFQUMsa0JBQWtCO1FBQUUsT0FBTyxJQUFJLENBQUNQLFNBQVMsQ0FBQ08sZUFBZTtJQUFJO0lBRTdEQywyQkFBMkI7UUFBRSxPQUFPLElBQUksQ0FBQ1IsU0FBUyxDQUFDUSx3QkFBd0I7SUFBSTtJQUUvRUMsb0JBQW9CSCxjQUFjLEVBQUU7UUFDbEMsTUFBTVAsT0FBT08sZ0JBQ1BJLGNBQWMsSUFBSSxDQUFDQyxTQUFTLENBQUNaLE9BQzdCYSx3QkFBd0JGLGFBQWEsR0FBRztRQUU5QyxPQUFPRTtJQUNUO0lBRUFDLG9CQUFvQkMsWUFBWSxFQUFFakIsT0FBTyxFQUFFO1FBQ3pDLElBQUlrQix3QkFBd0I7UUFFNUIsTUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUNqQ0MscUJBQXFCSixhQUFhRyxTQUFTO1FBRWpEcEIsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUgsaUJBQWlCLHFCQUFxQixFQUFFRSxtQkFBbUIsaUJBQWlCLENBQUM7UUFFN0csTUFBTWpCLFlBQVlhLGFBQWFYLFlBQVksSUFDckNpQixtQkFBbUJOLGFBQWFPLG1CQUFtQixJQUNuREMsNEJBQTRCLElBQUksQ0FBQ3JCLFNBQVMsQ0FBQ3NCLFNBQVMsQ0FBQ3RCLFlBQ3JEdUIsOENBQThDLElBQUksQ0FBQ3hCLFNBQVMsQ0FBQ3lCLHVCQUF1QixDQUFDTDtRQUUzRixJQUFJRSw2QkFBNkJFLDZDQUE2QztZQUM1RVQsd0JBQXdCO1FBQzFCO1FBRUEsSUFBSUEsdUJBQXVCO1lBQ3pCbEIsUUFBUTZCLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFUixtQkFBbUIscUJBQXFCLEVBQUVGLGlCQUFpQixlQUFlLENBQUM7UUFDL0c7UUFFQSxPQUFPRDtJQUNUO0lBRUFZLG9CQUFvQjlCLE9BQU8sRUFBRTtRQUMzQixNQUFNUyxpQkFBaUIsSUFBSSxDQUFDRixpQkFBaUIsSUFDdkN3QixhQUFhL0IsUUFBUWdDLDhCQUE4QixDQUFDdkIsaUJBQ3BEd0Isa0JBQWtCRixZQUFhLEdBQUc7UUFFeEMsT0FBT0U7SUFDVDtJQUVBQyxTQUFTQyxNQUFNLEVBQUVuQyxPQUFPLEVBQUU7UUFDeEIsSUFBSStCLGFBQWE7UUFFakIsTUFBTVosbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFL0NwQixRQUFRc0IsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVILGlCQUFpQixlQUFlLENBQUM7UUFFbEUsTUFBTWMsa0JBQWtCLElBQUksQ0FBQ0gsbUJBQW1CLENBQUM5QjtRQUVqRCxJQUFJaUMsaUJBQWlCO1lBQ25CRixhQUFhRSxpQkFBaUIsR0FBRztZQUVqQ2pDLFFBQVE2QixLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVWLGlCQUFpQiw4QkFBOEIsQ0FBQztRQUMzRSxPQUFPO1lBQ0wsSUFBSWlCLFlBQVk7WUFFaEIsTUFBTUMscUJBQXFCLElBQUksQ0FBQ0MsaUJBQWlCLENBQUNILFFBQVFuQztZQUUxRCxJQUFJcUMsb0JBQW9CO2dCQUN0QixNQUFNRSxxQkFBcUIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ0wsUUFBUW5DO2dCQUUxRCxJQUFJdUMsb0JBQW9CO29CQUN0QixJQUFJRSxzQkFBc0IsT0FDdEJDLHVCQUF1QjtvQkFFM0IsSUFBSVAsUUFBUTt3QkFDVk0sc0JBQXNCLElBQUksQ0FBQ0Usa0JBQWtCLENBQUMzQztvQkFDaEQsT0FBTzt3QkFDTDBDLHVCQUF1QixJQUFJLENBQUNFLG1CQUFtQixDQUFDNUM7b0JBQ2xEO29CQUVBLElBQUl5Qyx1QkFBdUJDLHNCQUFzQjt3QkFDL0NOLFlBQVk7b0JBQ2Q7Z0JBQ0Y7WUFDRjtZQUVBLElBQUlBLFdBQVc7Z0JBQ2JMLGFBQWEsSUFBSSxFQUFHLEdBQUc7Z0JBRXZCL0IsUUFBUTZDLGFBQWEsQ0FBQ2Q7Z0JBRXRCL0IsUUFBUTZCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFVixpQkFBaUIsYUFBYSxDQUFDO1lBQ3BFO1FBQ0Y7UUFFQSxPQUFPWTtJQUNUO0lBRUFTLGtCQUFrQkwsTUFBTSxFQUFFbkMsT0FBTyxFQUFFO1FBQ2pDLElBQUl1QyxxQkFBcUI7UUFFekIsTUFBTU8sa0JBQWtCLElBQUksQ0FBQzNDLFNBQVMsQ0FBQ2lCLFNBQVMsSUFDMUNELG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DcEIsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFSCxpQkFBaUIsZ0JBQWdCLEVBQUUyQixnQkFBZ0IsY0FBYyxDQUFDO1FBRW5HLE1BQU0zQyxZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDK0IsUUFBUSxDQUFDbEM7UUFFMUMsSUFBSUcsY0FBYyxNQUFNO1lBQ3RCLE1BQU00QyxlQUFlLElBQUksQ0FBQzVDLFNBQVMsQ0FBQ08sZUFBZSxJQUM3Q3NDLHNCQUFzQmhELFFBQVFpRCxxQkFBcUIsQ0FBQ0YsY0FBYy9DO1lBRXhFLElBQUlnRCxxQkFBcUI7Z0JBQ3ZCVCxxQkFBcUI7WUFDdkIsT0FBTztnQkFDTCxNQUFNVyx5QkFBeUJsRCxRQUFRbUQscUNBQXFDLENBQUMsSUFBSSxDQUFDaEQsU0FBUyxHQUNyRmlELGdDQUFnQ0YsdUJBQXVCRyxJQUFJLENBQUMsQ0FBQ0M7b0JBQzNELE1BQU1DLCtCQUErQixJQUFJLENBQUNDLDBCQUEwQixDQUFDRix1QkFBdUJ0RDtvQkFFNUYsSUFBSXVELDhCQUE4Qjt3QkFDaEMsT0FBTztvQkFDVDtnQkFDRjtnQkFFTixJQUFJSCwrQkFBK0I7b0JBQ2pDYixxQkFBcUI7Z0JBQ3ZCO1lBQ0Y7UUFDRjtRQUVBLElBQUlBLG9CQUFvQjtZQUN0QnZDLFFBQVE2QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRVYsaUJBQWlCLGdCQUFnQixFQUFFMkIsZ0JBQWdCLFlBQVksQ0FBQztRQUNyRztRQUVBLE9BQU9QO0lBQ1Q7SUFFQUQsa0JBQWtCSCxNQUFNLEVBQUVuQyxPQUFPLEVBQUU7UUFDakMsSUFBSXFDLHFCQUFxQjtRQUV6QixNQUFNbEIsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUNqQ3FDLGtCQUFrQixJQUFJLENBQUNyRCxTQUFTLENBQUNnQixTQUFTO1FBRWhEcEIsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFSCxpQkFBaUIsZ0JBQWdCLEVBQUVzQyxnQkFBZ0IsY0FBYyxDQUFDO1FBRW5HQyxJQUFBQSxnQkFBTyxFQUFDLENBQUMxRDtZQUNQLE1BQU1tQyxTQUFTLE1BQ1QvQixZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDOEIsUUFBUSxDQUFDQyxRQUFRbkM7WUFFbEQsSUFBSUksY0FBYyxNQUFNO2dCQUN0QmlDLHFCQUFxQjtZQUN2QjtRQUNGLEdBQUdyQztRQUVILElBQUlxQyxvQkFBb0I7WUFDdEJyQyxRQUFRNkIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVWLGlCQUFpQixnQkFBZ0IsRUFBRXNDLGdCQUFnQixZQUFZLENBQUM7UUFDckc7UUFFQSxPQUFPcEI7SUFDVDtJQUVBTSxtQkFBbUIzQyxPQUFPLEVBQUU7UUFDMUIsSUFBSXlDO1FBRUosTUFBTXRCLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRS9DcEIsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFSCxpQkFBaUIsc0JBQXNCLENBQUM7UUFFekVzQixzQkFBc0I7UUFFdEIsSUFBSUEscUJBQXFCO1lBQ3ZCekMsUUFBUTZCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFVixpQkFBaUIsb0JBQW9CLENBQUM7UUFDM0U7UUFFQSxPQUFPc0I7SUFDVDtJQUVBRyxvQkFBb0I1QyxPQUFPLEVBQUU7UUFDM0IsSUFBSTBDLHVCQUF1QjtRQUUzQixNQUFNdkIsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFL0NwQixRQUFRc0IsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVILGlCQUFpQix1QkFBdUIsQ0FBQztRQUUxRSxNQUFNbUMsd0JBQXdCLElBQUksQ0FBQzNDLHdCQUF3QjtRQUUzRCxJQUFJMkMsMEJBQTBCLE1BQU07WUFDbENaLHVCQUF1QjtRQUN6QixPQUFPO1lBQ0wxQyxRQUFRNkIsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFVixpQkFBaUIsc0RBQXNELENBQUM7UUFDaEc7UUFFQSxJQUFJdUIsc0JBQXNCO1lBQ3hCMUMsUUFBUTZCLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFVixpQkFBaUIscUJBQXFCLENBQUM7UUFDNUU7UUFFQSxPQUFPdUI7SUFDVDtJQUVBYywyQkFBMkJGLHFCQUFxQixFQUFFdEQsT0FBTyxFQUFFO1FBQ3pELElBQUl1RDtRQUVKLE1BQU1wQyxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQ2pDdUMsOEJBQThCTCxzQkFBc0JsQyxTQUFTO1FBRW5FcEIsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRXFDLDRCQUE0QixxQ0FBcUMsRUFBRXhDLGlCQUFpQixlQUFlLENBQUM7UUFFbklvQywrQkFBK0IsSUFBSSxDQUFDcEQsU0FBUyxDQUFDcUQsMEJBQTBCLENBQUNGLHVCQUF1QnREO1FBRWhHLElBQUl1RCw4QkFBOEI7WUFDaENBLCtCQUErQixJQUFJLENBQUNuRCxTQUFTLENBQUNvRCwwQkFBMEIsQ0FBQ0YsdUJBQXVCdEQ7UUFDbEc7UUFFQSxJQUFJdUQsOEJBQThCO1lBQ2hDdkQsUUFBUXNCLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFcUMsNEJBQTRCLHFDQUFxQyxFQUFFeEMsaUJBQWlCLGVBQWUsQ0FBQztRQUN2STtRQUVBLE9BQU9vQztJQUNUO0lBRUFLLFNBQVM7UUFDUCxNQUFNM0QsU0FBUyxJQUFJLENBQUNtQixTQUFTLElBQ3ZCeUMsT0FBTztZQUNMNUQ7UUFDRjtRQUVOLE9BQU80RDtJQUNUO0lBRUEsT0FBT0MsT0FBTyxhQUFhO0lBRTNCLE9BQU9DLFNBQVNGLElBQUksRUFBRTdELE9BQU8sRUFBRTtRQUM3QixNQUFNK0IsYUFBYWlDLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ2hFO1lBQzlCLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUc0RCxNQUNicEQsaUJBQWlCd0QsSUFBQUEsa0NBQXFCLEVBQUNoRSxRQUFRRCxVQUMvQ0UsT0FBT08sZ0JBQ1BOLFlBQVkrRCw0QkFBNEJ6RCxnQkFBZ0JULFVBQ3hESSxZQUFZK0QsNEJBQTRCMUQsZ0JBQWdCVDtZQUU5REEsVUFBVSxNQUFNLEdBQUc7WUFFbkIsTUFBTStCLGFBQWEsSUFBSWpDLFdBQVdFLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDO1lBRXBFLE9BQU8yQjtRQUNULEdBQUcvQjtRQUVILE9BQU8rQjtJQUNUO0FBQ0Y7QUFFQSxTQUFTbUMsNEJBQTRCekQsY0FBYyxFQUFFVCxPQUFPO0lBQzFELE1BQU1vRSxtQkFBbUIzRCxlQUFlNEQsbUJBQW1CLENBQUNyRSxVQUN0REcsWUFBWUgsUUFBUXNFLCtCQUErQixDQUFDRjtJQUUxRCxPQUFPakU7QUFDVDtBQUVBLFNBQVNnRSw0QkFBNEIxRCxjQUFjLEVBQUVULE9BQU87SUFDMUQsTUFBTXVFLGdCQUFnQjlELGVBQWUrRCxnQkFBZ0IsSUFDL0NwRSxZQUFZSixRQUFReUUsNEJBQTRCLENBQUNGO0lBRXZELE9BQU9uRTtBQUNUIn0=