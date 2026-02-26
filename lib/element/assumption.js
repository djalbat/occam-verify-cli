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
const _unify = require("../process/unify");
const _json = require("../utilities/json");
const _default = (0, _elements.define)(class Assumption extends _occamlanguages.Element {
    constructor(context, string, node, reference, statement){
        super(context, string, node);
        this.statement = statement;
        this.reference = reference;
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
    matchAssumptionNode(assumptionode) {
        const assumptionodeA = assumptionode; ///
        assumptionode = this.getAssumptionNode();
        const assumptionodeB = assumptionode, assumptionodeAAMatchesAssumptionBNodeB = assumptionodeA.match(assumptionodeB), assumptionodeMatches = assumptionodeAAMatchesAssumptionBNodeB; ///
        return assumptionodeMatches;
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
            const referenceValidates = this.validateReference(stated, context);
            if (referenceValidates) {
                const statementValidates = this.validateStatement(stated, context);
                if (statementValidates) {
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
            referenceValidates = true;
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
    validateReferenceAsMetavariable(stated, context) {
        let referenceValidatesAsMetavariable;
        const referenceString = this.reference.getString(), assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' assumption's '${referenceString}' reference as s metavariable...`);
        referenceValidatesAsMetavariable = this.reference.validateAsMetavariable(context);
        if (referenceValidatesAsMetavariable) {
            context.debug(`...validated the '${assumptionString}' assumption's '${referenceString}' reference as a metavariable.`);
        }
        return referenceValidatesAsMetavariable;
    }
    validateWhenStated(context) {
        let validatesWhenStated;
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' stated assumption...`);
        const metavariablePresent = context.isMetavariablePresentByReference(this.reference);
        if (metavariablePresent) {
            validatesWhenStated = true;
        } else {
            const topLevelMetaAssertions = context.findTopLevelMetaAssertionsByReference(this.reference), topLevelMetaAssertionsUnify = topLevelMetaAssertions.every((topLevelMetaAssertion)=>{
                const topLevelMetaAssertionUnifies = this.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
                if (topLevelMetaAssertionUnifies) {
                    return true;
                }
            });
            validatesWhenStated = topLevelMetaAssertionsUnify; ///
        }
        if (validatesWhenStated) {
            context.debug(`...validated the '${assumptionString}' stated assumption.`);
        }
        return validatesWhenStated;
    }
    validateWhenDerived(context) {
        let validatesWhenDerived;
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' derived assumption...`);
        const topLevelMetaAssertionPresent = context.isTopLevelMetaAssertionPresentByReference(this.reference);
        validatesWhenDerived = topLevelMetaAssertionPresent; ///
        if (validatesWhenDerived) {
            context.debug(`...validated the '${assumptionString}' derived assumption.`);
        }
        return validatesWhenDerived;
    }
    unifyStatement(statement, substitutions, generalContext, specificContext) {
        let statementUnifies;
        const context = generalContext, statementString = statement.getString(), assumptionStatementString = this.statement.getString();
        context.trace(`Unifying the '${statementString}' statement with the '${assumptionStatementString}' statement...`);
        const generalStatement = this.statement, specificStatement = statement, statementUUnifiesIntrinsically = (0, _unify.unifyStatementIntrinsically)(generalStatement, specificStatement, substitutions, generalContext, specificContext);
        statementUnifies = statementUUnifiesIntrinsically; ///
        if (statementUnifies) {
            context.debug(`...unified the '${statementString}' statement with the '${assumptionStatementString}' statement.`);
        }
        return statementUnifies;
    }
    unifyLabel(label, substitutions, generalContext, specificContext) {
        let labelUnifiesWithReference;
        const context = generalContext, labelString = label.getString(), assumptionString = this.getString(); //;/
        context.trace(`Unifying the '${labelString}' label with the '${assumptionString}' assumption...`);
        const labelUnifies = this.reference.unifyLabel(label, substitutions, context);
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
        const specificContext = context, labelSubstitutions = [], label = topLevelMetaAssertion.getLabel(), substitutions = labelSubstitutions, labelUnifies = this.unifyLabel(label, substitutions, generalContext, specificContext);
        if (labelUnifies) {
            const statementSubstitutions = [], statement = topLevelMetaAssertion.getStatement(), substitutions = statementSubstitutions, statementUUnifies = this.unifyStatement(statement, substitutions, generalContext, specificContext);
            if (statementUUnifies) {
                const labelSubstitutionsCorrelateStatementSubstitutions = labelSubstitutions.correlateSubstitutions(statementSubstitutions);
                if (labelSubstitutionsCorrelateStatementSubstitutions) {
                    topLevelMetaAssertionUnifies = true; ///
                }
            }
        }
        if (topLevelMetaAssertionUnifies) {
            context = generalContext; ///
            context.trace(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${assumptionString}' assumption...`);
        }
        return topLevelMetaAssertionUnifies;
    }
    toJSON() {
        let json = null;
        const simple = this.isSimple();
        if (simple) {
            const reference = this, referenceJSON = (0, _json.referenceToReferenceJSON)(reference);
            json = referenceJSON; ///
        }
        return json;
    }
    static name = "Assumption";
    static fromJSON(json, context) {
        debugger;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IHJlZmVyZW5jZUZyb21KU09OLCByZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIEFzc3VtcHRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnN0YXRlbWVudCA9IHN0YXRlbWVudDtcbiAgICB0aGlzLnJlZmVyZW5jZSA9IHJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2U7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbk5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25Ob2RlO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCk7IH1cblxuICBtYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25vZGUpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9ub2RlQSA9IGFzc3VtcHRpb25vZGU7IC8vL1xuXG4gICAgYXNzdW1wdGlvbm9kZSA9IHRoaXMuZ2V0QXNzdW1wdGlvbk5vZGUoKTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25vZGVCID0gYXNzdW1wdGlvbm9kZSwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbm9kZUFBTWF0Y2hlc0Fzc3VtcHRpb25CTm9kZUIgPSBhc3N1bXB0aW9ub2RlQS5tYXRjaChhc3N1bXB0aW9ub2RlQiksXG4gICAgICAgICAgYXNzdW1wdGlvbm9kZU1hdGNoZXMgPSBhc3N1bXB0aW9ub2RlQUFNYXRjaGVzQXNzdW1wdGlvbkJOb2RlQjsgLy8vXG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbiwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU3Vic3RpdHVpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQ29tcGFyaW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB0byB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdWJzdGl0dXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHN1YnN0aXR1dGlvbi5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LmlzRXF1YWxUbyhzdGF0ZW1lbnQpLFxuICAgICAgICAgIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmIChzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ICYmIHJlZmVyZW5jZU1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgIGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNvbXBhcmVzVG9TdWJzdGl0dWlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29tcGFyZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9TdWJzdGl0dWlvbjtcbiAgfVxuXG4gIGZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0gdGhpcy5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRBc3N1bXB0aW9uID0gYXNzdW1wdGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkQXNzdW1wdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3N1bXB0aW9uID0gdGhpcy5maW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkQXNzdW1wdGlvbikge1xuICAgICAgYXNzdW1wdGlvbiA9IHZhbGlkQXNzdW1wdGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2Uoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGFzc3VtcHRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZSAhPT0gbnVsbCkge1xuICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2VBc01ldGF2YXJpYWJsZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGU7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSBhcyBzIG1ldGF2YXJpYWJsZS4uLmApO1xuXG4gICAgcmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZUFzTWV0YXZhcmlhYmxlKGNvbnRleHQpO1xuXG4gICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlc0FzTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGFzIGEgbWV0YXZhcmlhYmxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VWYWxpZGF0ZXNBc01ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5ID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucy5ldmVyeSgodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnk7IC8vL1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50ID0gY29udGV4dC5pc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQ7IC8vL1xuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQsXG4gICAgICAgICAgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkgPSB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkoZ2VuZXJhbFN0YXRlbWVudCwgc3BlY2lmaWNTdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3RhdGVtZW50VW5pZmllcyA9IHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy87L1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsVW5pZmllcyA9IHRoaXMucmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSA9IGxhYmVsVW5pZmllczsgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldENvbnRleHQoKTsgIC8vL1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgIGxhYmVsU3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgbGFiZWxVbmlmaWVzID0gdGhpcy51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zLCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VVVuaWZpZXMpIHtcbiAgICAgICAgY29uc3QgbGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyA9IGxhYmVsU3Vic3RpdHV0aW9ucy5jb3JyZWxhdGVTdWJzdGl0dXRpb25zKHN0YXRlbWVudFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgICAgIGlmIChsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zKSB7XG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBqc29uID0gbnVsbDtcblxuICAgIGNvbnN0IHNpbXBsZSA9IHRoaXMuaXNTaW1wbGUoKTtcblxuICAgIGlmIChzaW1wbGUpIHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlSlNPTiA9IHJlZmVyZW5jZVRvUmVmZXJlbmNlSlNPTihyZWZlcmVuY2UpO1xuXG4gICAgICBqc29uID0gcmVmZXJlbmNlSlNPTjsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc3VtcHRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGRlYnVnZ2VyXG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFzc3VtcHRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJyZWZlcmVuY2UiLCJzdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnQiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImdldE5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZSIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9ub2RlIiwiYXNzdW1wdGlvbm9kZUEiLCJhc3N1bXB0aW9ub2RlQiIsImFzc3VtcHRpb25vZGVBQU1hdGNoZXNBc3N1bXB0aW9uQk5vZGVCIiwibWF0Y2giLCJhc3N1bXB0aW9ub2RlTWF0Y2hlcyIsImNvbXBhcmVTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJjb21wYXJlc1RvU3Vic3RpdHVpb24iLCJhc3N1bXB0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwidHJhY2UiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQiLCJpc0VxdWFsVG8iLCJyZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJkZWJ1ZyIsImZpbmRWYWxpZEFzc3VtcHRpb24iLCJhc3N1bXB0aW9uIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwidmFsaWRBc3N1bXB0aW9uIiwidmFsaWRhdGUiLCJzdGF0ZWQiLCJ2YWxpZGF0ZXMiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEFzc3VtcHRpb24iLCJyZWZlcmVuY2VTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJ2YWxpZGF0ZVJlZmVyZW5jZUFzTWV0YXZhcmlhYmxlIiwicmVmZXJlbmNlVmFsaWRhdGVzQXNNZXRhdmFyaWFibGUiLCJ2YWxpZGF0ZUFzTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnkiLCJldmVyeSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsImFzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmciLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkiLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJsYWJlbFVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXRDb250ZXh0IiwibGFiZWxTdWJzdGl0dXRpb25zIiwiZ2V0TGFiZWwiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VVVuaWZpZXMiLCJsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsImpzb24iLCJzaW1wbGUiLCJpc1NpbXBsZSIsInJlZmVyZW5jZUpTT04iLCJyZWZlcmVuY2VUb1JlZmVyZW5jZUpTT04iLCJuYW1lIiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVFBOzs7ZUFBQTs7O2dDQU53QjswQkFFRDt1QkFDcUI7c0JBQ2dCO01BRTVELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsQ0FBRTtRQUN2RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0UsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNELFNBQVMsR0FBR0E7SUFDbkI7SUFFQUUsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxvQkFBb0I7UUFDbEIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGlCQUFpQlAsTUFBTyxHQUFHO1FBRWpDLE9BQU9PO0lBQ1Q7SUFFQUMsa0JBQWtCO1FBQUUsT0FBTyxJQUFJLENBQUNQLFNBQVMsQ0FBQ08sZUFBZTtJQUFJO0lBRTdEQyxvQkFBb0JDLGFBQWEsRUFBRTtRQUNqQyxNQUFNQyxpQkFBaUJELGVBQWUsR0FB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