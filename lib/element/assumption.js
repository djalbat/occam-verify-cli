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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQXNzdW1wdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyB1bmlmeVN0YXRlbWVudEludHJpbnNpY2FsbHkgfSBmcm9tIFwiLi4vcHJvY2Vzcy91bmlmeVwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXNzdW1wdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIG1hdGNoQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvbXBhcmVTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TdWJzdGl0dWlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBDb21wYXJpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHN1YnN0aXR1dGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gc3Vic3RpdHV0aW9uLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQuaXNFcXVhbFRvKHN0YXRlbWVudCksXG4gICAgICAgICAgcmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgaWYgKHN0YXRlbWVudEVxdWFsVG9TdGF0ZW1lbnQgJiYgcmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgY29tcGFyZXNUb1N1YnN0aXR1aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGFyZXNUb1N1YnN0aXR1aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb21wYXJlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB0byB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1N1YnN0aXR1aW9uO1xuICB9XG5cbiAgZmluZFZhbGlkQXNzdW1wdGlvbihjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSB0aGlzLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSxcbiAgICAgICAgICB2YWxpZEFzc3VtcHRpb24gPSBhc3N1bXB0aW9uOyAgLy8vXG5cbiAgICByZXR1cm4gdmFsaWRBc3N1bXB0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEFzc3VtcHRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3N1bXB0aW9uKSB7XG4gICAgICBhc3N1bXB0aW9uID0gdmFsaWRBc3N1bXB0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3QgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZShzdGF0ZWQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgYXNzdW1wdGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbik7XG5cbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlUmVmZXJlbmNlKHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KHN0YXRlZCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgc3RhdGVkID0gdHJ1ZTsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoc3RhdGVkLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3RhdGVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSA9IHRvcExldmVsTWV0YUFzc2VydGlvbnMuZXZlcnkoKHRvcExldmVsTWV0YUFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5OyAvLy9cbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgc3RhdGVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCA9IGNvbnRleHQuaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UodGhpcy5yZWZlcmVuY2UpO1xuXG4gICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50OyAvLy9cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdGF0ZW1lbnRTdHJpbmcgPSB0aGlzLnN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LFxuICAgICAgICAgIHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50LCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5ID0gdW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5KGdlbmVyYWxTdGF0ZW1lbnQsIHNwZWNpZmljU3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZXMgPSBzdGF0ZW1lbnRVVW5pZmllc0ludHJpbnNpY2FsbHk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5TGFiZWwobGFiZWwsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vOy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYWJlbFN0cmluZ30nIGxhYmVsIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbFVuaWZpZXMgPSB0aGlzLnJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KTtcblxuICAgIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UgPSBsYWJlbFVuaWZpZXM7IC8vL1xuXG4gICAgaWYgKGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2UpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhYmVsU3RyaW5nfScgbGFiZWwgd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVW5pZmllc1dpdGhSZWZlcmVuY2U7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRDb250ZXh0KCk7ICAvLy9cblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBsYWJlbFN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBsYWJlbCA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRMYWJlbCgpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHRoaXMudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAobGFiZWxVbmlmaWVzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRTdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3RhdGVtZW50U3Vic3RpdHV0aW9ucywgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVVW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsU3Vic3RpdHV0aW9uc0NvcnJlbGF0ZVN0YXRlbWVudFN1YnN0aXR1dGlvbnMgPSBsYWJlbFN1YnN0aXR1dGlvbnMuY29ycmVsYXRlU3Vic3RpdHV0aW9ucyhzdGF0ZW1lbnRTdWJzdGl0dXRpb25zKTtcblxuICAgICAgICBpZiAobGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucykge1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0cnVlOyAvLy9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXNzdW1wdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGFzc3VtcHRpb25Ob2RlID0gaW5zdGFudGlhdGVBc3N1bXB0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDsgLy8vXG5cbiAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZShjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBc3N1bXB0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJnZXROb2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtYXRjaEFzc3VtcHRpb25Ob2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJhc3N1bXB0aW9uTm9kZU1hdGNoZXMiLCJjb21wYXJlU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiY29tcGFyZXNUb1N1YnN0aXR1aW9uIiwiYXNzdW1wdGlvblN0cmluZyIsImdldFN0cmluZyIsInN1YnN0aXR1dGlvblN0cmluZyIsInRyYWNlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJzdGF0ZW1lbnRFcXVhbFRvU3RhdGVtZW50IiwiaXNFcXVhbFRvIiwicmVmZXJlbmNlTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiZGVidWciLCJmaW5kVmFsaWRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsInZhbGlkQXNzdW1wdGlvbiIsInZhbGlkYXRlIiwic3RhdGVkIiwidmFsaWRhdGVzIiwicmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRBc3N1bXB0aW9uIiwicmVmZXJlbmNlU3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5IiwiZXZlcnkiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50IiwiaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UiLCJ1bmlmeVN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJhc3N1bXB0aW9uU3RhdGVtZW50U3RyaW5nIiwiZ2VuZXJhbFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50Iiwic3RhdGVtZW50VVVuaWZpZXNJbnRyaW5zaWNhbGx5IiwidW5pZnlTdGF0ZW1lbnRJbnRyaW5zaWNhbGx5IiwidW5pZnlMYWJlbCIsImxhYmVsIiwibGFiZWxVbmlmaWVzV2l0aFJlZmVyZW5jZSIsImxhYmVsU3RyaW5nIiwibGFiZWxVbmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0Q29udGV4dCIsImxhYmVsU3Vic3RpdHV0aW9ucyIsImdldExhYmVsIiwic3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsInN0YXRlbWVudFVVbmlmaWVzIiwibGFiZWxTdWJzdGl0dXRpb25zQ29ycmVsYXRlU3RhdGVtZW50U3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZVN1YnN0aXR1dGlvbnMiLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUFzc3VtcHRpb24iLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt5QkFDSzs2QkFDVTt1QkFDTTtNQUU1QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLENBQUU7UUFDdkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNFLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDRCxTQUFTLEdBQUdBO0lBQ25CO0lBRUFFLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsb0JBQW9CO1FBQ2xCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxpQkFBaUJQLE1BQU8sR0FBRztRQUVqQyxP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