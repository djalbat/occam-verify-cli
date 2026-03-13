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
const _unify = require("../process/unify");
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
    validateWhenStated(context) {
        let validatesWhenStated;
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' stated assumption...`);
        const metavariable = this.reference.getMetavariable(), metavariablePresent = context.isMetavariablePresent(metavariable, context);
        if (metavariablePresent) {
            validatesWhenStated = true;
        } else {
            const topLevelMetaAssertions = context.findTopLevelMetaAssertionsByReference(this.reference), topLevelMetaAssertionsUnify = topLevelMetaAssertions.some((topLevelMetaAssertion)=>{
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
    unifyLabel(label, generalContext, specificContext) {
        let labelUnifiesWithReference;
        const context = generalContext, labelString = label.getString(), assumptionString = this.getString(); //;/
        context.trace(`Unifying the '${labelString}' label with the '${assumptionString}' assumption...`);
        const labelUnifies1 = this.reference.unifyLabel(label, context);
        labelUnifiesWithReference = labelUnifies1; ///
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
        let substitutions = null;
        (0, _context.reconcile)((context)=>{
            const label = topLevelMetaAssertion.getLabel(), labelUnifies1 = this.unifyLabel(label, generalContext, specificContext);
        }, context);
        ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVBc3N1bXB0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlLCByZWNvbmNpbGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseSB9IGZyb20gXCIuLi9wcm9jZXNzL3VuaWZ5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBc3N1bXB0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgbWF0Y2hBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgLy8vXG4gICAgICAgICAgbm9kZU1hdGNoZXMgPSB0aGlzLm1hdGNoTm9kZShub2RlKSxcbiAgICAgICAgICBhc3N1bXB0aW9uTm9kZU1hdGNoZXMgPSBub2RlTWF0Y2hlczsgLy8vXG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbk5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29tcGFyZVN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgY29tcGFyZXNUb1N1YnN0aXR1aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvblN0cmluZyA9IHN1YnN0aXR1dGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3Vic3RpdHV0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSBzdWJzdGl0dXRpb24uZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC5pc0VxdWFsVG8oc3RhdGVtZW50KSxcbiAgICAgICAgICByZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICBpZiAoc3RhdGVtZW50RXF1YWxUb1N0YXRlbWVudCAmJiByZWZlcmVuY2VNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlKSB7XG4gICAgICBjb21wYXJlc1RvU3Vic3RpdHVpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb21wYXJlc1RvU3Vic3RpdHVpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU3Vic3RpdHVpb247XG4gIH1cblxuICBmaW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IHRoaXMuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkQXNzdW1wdGlvbiA9IGFzc3VtcHRpb247ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzdW1wdGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzdW1wdGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc3VtcHRpb24pIHtcbiAgICAgIGFzc3VtcHRpb24gPSB2YWxpZEFzc3VtcHRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBhc3N1bXB0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2Uoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSB0aGlzLnJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50Li4uYCk7XG5cbiAgICBzdGF0ZWQgPSB0cnVlOyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudC52YWxpZGF0ZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5yZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpLFxuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5ID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucy5zb21lKCh0b3BMZXZlbE1ldGFBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeTsgLy8vXG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSBjb250ZXh0LmlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKTtcblxuICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudDsgLy8vXG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2Fzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudCxcbiAgICAgICAgICBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudCwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVVbmlmaWVzSW50cmluc2ljYWxseSA9IHVuaWZ5U3RhdGVtZW50SW50cmluc2ljYWxseShnZW5lcmFsU3RhdGVtZW50LCBzcGVjaWZpY1N0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVzID0gc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5OyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2Fzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeUxhYmVsKGxhYmVsLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLzsvXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbCB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxVbmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudW5pZnlMYWJlbChsYWJlbCwgY29udGV4dCk7XG5cbiAgICBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlID0gbGFiZWxVbmlmaWVzOyAvLy9cblxuICAgIGlmIChsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0Q29udGV4dCgpOyAgLy8vXG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBsZXQgc3Vic3RpdHV0aW9ucyA9IG51bGw7XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldExhYmVsKCksXG4gICAgICAgICAgICBsYWJlbFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFiZWwobGFiZWwsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgLy8vXG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnRTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAobGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucykge1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXNzdW1wdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGFzc3VtcHRpb25Ob2RlID0gaW5zdGFudGlhdGVBc3N1bXB0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDsgLy8vXG5cbiAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZShjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBc3N1bXB0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJnZXROb2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtYXRjaEFzc3VtcHRpb25Ob2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJhc3N1bXB0aW9uTm9kZU1hdGNoZXMiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1aW9uIiwiYXNzdW1wdGlvblN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiZGVidWciLCJmaW5kVmFsaWRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsInZhbGlkQXNzdW1wdGlvbiIsInZhbGlkYXRlIiwic3RhdGVkIiwidmFsaWRhdGVzIiwicmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRBc3N1bXB0aW9uIiwicmVmZXJlbmNlU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5Iiwic29tZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInVuaWZ5U3RhdGVtZW50Iiwic3Vic3RpdHV0aW9ucyIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllcyIsImFzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmciLCJnZW5lcmFsU3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHkiLCJ1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkiLCJ1bmlmeUxhYmVsIiwibGFiZWwiLCJsYWJlbFVuaWZpZXNXaXRoUmVmZXJlbmNlIiwibGFiZWxTdHJpbmciLCJsYWJlbFVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXRDb250ZXh0IiwicmVjb25jaWxlIiwiZ2V0TGFiZWwiLCJzdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwic3RhdGVtZW50VVVuaWZpZXMiLCJsYWJlbFN1YnN0aXR1dGlvbnNDb3JyZWxhdGVTdGF0ZW1lbnRTdWJzdGl0dXRpb25zIiwibGFiZWxTdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlU3Vic3RpdHV0aW9ucyIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQXNzdW1wdGlvbiIsInJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEOzZCQUNlO3lCQUNDO3VCQUNLO01BRTVDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsQ0FBRTtRQUN2RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0UsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNELFNBQVMsR0FBR0E7SUFDbkI7SUFFQUUsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxvQkFBb0I7UUFDbEIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGlCQUFpQlAsTUFBTyxHQUFHO1FBRWpDLE9BQU9PO0lBQ1Q7SUFFQUMsa0JBQWtC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