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
const _instantiate = require("../process/instantiate");
const _element = require("../utilities/element");
const _context = require("../utilities/context");
const _string = require("../utilities/string");
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
    isEqualTo(assumption) {
        const assumptionNode = assumption.getNode(), assumptionNodeMatches = this.matchAssumptionNode(assumptionNode), equalTo = assumptionNodeMatches; ///
        return equalTo;
    }
    matchAssumptionNode(assumptionNode) {
        const node = assumptionNode, nodeMatches = this.matchNode(node), assumptionNodeMatches = nodeMatches; ///
        return assumptionNodeMatches;
    }
    findValidAssumption(context, metaLevel = false) {
        const assumptionNode = this.getAssumptionNode(), assumption = context.findAssumptionByAssumptionNode(assumptionNode, metaLevel), validAssumption = assumption; ///
        return validAssumption;
    }
    validate(context, metaLevel = false) {
        let assumption = null;
        if (metaLevel) {
            context = this.getContext();
        }
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' assumption...`);
        const validAssumption = this.findValidAssumption(context, metaLevel);
        if (validAssumption) {
            assumption = validAssumption; ///
            context.debug(`...the '${assumptionString}' assumption is already valid.`);
        } else {
            let validates = false;
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
                context.addAssumption(assumption, metaLevel);
                context.debug(`...validated the '${assumptionString}' assumption.`);
            }
        }
        return assumption;
    }
    validateReference(context) {
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
    validateStatement(context) {
        let statementValidates = false;
        const assumptionString = this.getString(), statementString = this.statement.getString();
        context.trace(`Validating the '${assumptionString}' assumption's '${statementString}' statement...`);
        (0, _context.descend)((context)=>{
            const statement = this.statement.validate(context);
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
    unifyAssumption(assumption, context) {
        let assumptionUnifies;
        const generalAssumption = this, specificAssumption = assumption, generalAssumptionString = generalAssumption.getString(), specificAssumptionString = specificAssumption.getString();
        context.trace(`Unifying the '${specificAssumptionString}' assumption with the '${generalAssumptionString}' assumption...`);
        const generalContext = context; ///
        context = assumption.getContext();
        const specificContext = context; ///
        (0, _context.reconcile)((generalContext)=>{
            assumptionUnifies = (0, _unify.unifyAssumption)(generalAssumption, specificAssumption, generalContext, specificContext);
            if (assumptionUnifies) {
                generalContext.commit();
            }
        }, generalContext);
        context = specificContext; ///
        if (assumptionUnifies) {
            context.debug(`...unified the '${specificAssumptionString}' assumption with the '${generalAssumptionString}' assumption.`);
        }
        return assumptionUnifies;
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
    static fromStatementAndReference(statement, reference, context) {
        let assumption;
        (0, _context.simplify)((context)=>{
            (0, _context.instantiate)((context)=>{
                const assumptionString = (0, _string.assumptionStringFromStatementAndReference)(statement, reference), string = assumptionString, assumptionNode = (0, _instantiate.instantiateAssumption)(string, context);
                assumption = (0, _element.assumptionFromAssumptionNode)(assumptionNode, context);
                assumption.setContext(context);
            }, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlBc3N1bXB0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQXNzdW1wdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBkZXNjZW5kLCBzaW1wbGlmeSwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYXNzdW1wdGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRSZWZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXNzdW1wdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGdldFRvcExldmVsTWV0YUFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpOyB9XG5cbiAgaXNFcXVhbFRvKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGFzc3VtcHRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGFzc3VtcHRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQsIG1ldGFMZXZlbCA9IGZhbHNlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSB0aGlzLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBtZXRhTGV2ZWwpLFxuICAgICAgICAgIHZhbGlkQXNzdW1wdGlvbiA9IGFzc3VtcHRpb247ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCBtZXRhTGV2ZWwgPSBmYWxzZSkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGlmIChtZXRhTGV2ZWwpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzdW1wdGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzdW1wdGlvbihjb250ZXh0LCBtZXRhTGV2ZWwpO1xuXG4gICAgaWYgKHZhbGlkQXNzdW1wdGlvbikge1xuICAgICAgYXNzdW1wdGlvbiA9IHZhbGlkQXNzdW1wdGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgYXNzdW1wdGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbiwgbWV0YUxldmVsKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyA9IGNvbnRleHQuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnNDb21wYXJlID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucy5zb21lKCh0b3BMZXZlbE1ldGFBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWVcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uLi5gKTtcbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpO1xuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzdW1wdGlvbiBkaWQgbm90IHVuaWZ5IGEgdG9wIGxldmVsIG1ldGEtYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IGdlbmVyYWxBc3N1bXB0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNBc3N1bXB0aW9uID0gYXNzdW1wdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxBc3N1bXB0aW9uU3RyaW5nID0gZ2VuZXJhbEFzc3VtcHRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNBc3N1bXB0aW9uU3RyaW5nID0gc3BlY2lmaWNBc3N1bXB0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljQXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbEFzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSBhc3N1bXB0aW9uLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgcmVjb25jaWxlKChnZW5lcmFsQ29udGV4dCkgPT4ge1xuICAgICAgYXNzdW1wdGlvblVuaWZpZXMgPSB1bmlmeUFzc3VtcHRpb24oZ2VuZXJhbEFzc3VtcHRpb24sIHNwZWNpZmljQXNzdW1wdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uVW5pZmllcykge1xuICAgICAgICBnZW5lcmFsQ29udGV4dC5jb21taXQoKTtcbiAgICAgIH1cblxuICAgIH0sIGdlbmVyYWxDb250ZXh0KTtcblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGlmIChhc3N1bXB0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNBc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsQXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnJlZmVyZW5jZS51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnN0YXRlbWVudC51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXNzdW1wdGlvblwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIGFzc3VtcHRpb25Ob2RlID0gaW5zdGFudGlhdGVBc3N1bXB0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gYXNzdW1wdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gbnVsbDsgLy8vXG5cbiAgICAgIGNvbnN0IGFzc3VtcHRpb24gPSBuZXcgQXNzdW1wdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU3RhdGVtZW50QW5kUmVmZXJlbmNlKHN0YXRlbWVudCwgcmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb247XG5cbiAgICBzaW1wbGlmeSgoY29udGV4dCkgPT4ge1xuICAgICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IGFzc3VtcHRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kUmVmZXJlbmNlKHN0YXRlbWVudCwgcmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgc3RyaW5nID0gYXNzdW1wdGlvblN0cmluZywgIC8vL1xuICAgICAgICAgICAgICBhc3N1bXB0aW9uTm9kZSA9IGluc3RhbnRpYXRlQXNzdW1wdGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBhc3N1bXB0aW9uLnNldENvbnRleHQoY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFzc3VtcHRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJyZWZlcmVuY2UiLCJzdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnQiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImdldE5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZSIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsImlzRXF1YWxUbyIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc3VtcHRpb25Ob2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZFZhbGlkQXNzdW1wdGlvbiIsIm1ldGFMZXZlbCIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsInZhbGlkQXNzdW1wdGlvbiIsInZhbGlkYXRlIiwiZ2V0Q29udGV4dCIsImFzc3VtcHRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEFzc3VtcHRpb24iLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zQ29tcGFyZSIsInNvbWUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJkZXNjZW5kIiwidW5pZnlBc3N1bXB0aW9uIiwiYXNzdW1wdGlvblVuaWZpZXMiLCJnZW5lcmFsQXNzdW1wdGlvbiIsInNwZWNpZmljQXNzdW1wdGlvbiIsImdlbmVyYWxBc3N1bXB0aW9uU3RyaW5nIiwic3BlY2lmaWNBc3N1bXB0aW9uU3RyaW5nIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJyZWNvbmNpbGUiLCJjb21taXQiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUFzc3VtcHRpb24iLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50QW5kUmVmZXJlbmNlIiwic2ltcGxpZnkiLCJhc3N1bXB0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZFJlZmVyZW5jZSIsImFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUiLCJzZXRDb250ZXh0IiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwic3RhdGVtZW50Tm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUd0I7MEJBRUQ7dUJBQ1M7NkJBQ007eUJBQ087eUJBQ2E7d0JBQ0E7TUFFMUQsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxtQkFBbUJDLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxDQUFFO1FBQ3ZELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLG9CQUFvQjtRQUNsQixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsaUJBQWlCUCxNQUFPLEdBQUc7UUFFakMsT0FBT087SUFDVDtJQUVBQyxrQkFBa0I7UUFBRSxPQUFPLElBQUksQ0FBQ1AsU0FBUyxDQUFDTyxlQUFlO0lBQUk7SUFFN0RDLDJCQUEyQjtRQUFFLE9BQU8sSUFBSSxDQUFDUixTQUFTLENBQUNRLHdCQUF3QjtJQUFJO0lBRS9FQyxVQUFVQyxVQUFVLEVBQUU7UUFDcEIsTUFBTUosaUJBQWlCSSxXQUFXTCxPQUFPLElBQ25DTSx3QkFBd0IsSUFBSSxDQUFDQyxtQkFBbUIsQ0FBQ04saUJBQ2pETyxVQUFVRix1QkFBd0IsR0FBRztRQUUzQyxPQUFPRTtJQUNUO0lBRUFELG9CQUFvQk4sY0FBYyxFQUFFO1FBQ2xDLE1BQU1QLE9BQU9PLGdCQUNQUSxjQUFjLElBQUksQ0FBQ0MsU0FBUyxDQUFDaEIsT0FDN0JZLHdCQUF3QkcsYUFBYSxHQUFHO1FBRTlDLE9BQU9IO0lBQ1Q7SUFFQUssb0JBQW9CbkIsT0FBTyxFQUFFb0IsWUFBWSxLQUFLLEVBQUU7UUFDOUMsTUFBTVgsaUJBQWlCLElBQUksQ0FBQ0YsaUJBQWlCLElBQ3ZDTSxhQUFhYixRQUFRcUIsOEJBQThCLENBQUNaLGdCQUFnQlcsWUFDcEVFLGtCQUFrQlQsWUFBYSxHQUFHO1FBRXhDLE9BQU9TO0lBQ1Q7SUFFQUMsU0FBU3ZCLE9BQU8sRUFBRW9CLFlBQVksS0FBSyxFQUFFO1FBQ25DLElBQUlQLGFBQWE7UUFFakIsSUFBSU8sV0FBVztZQUNicEIsVUFBVSxJQUFJLENBQUN3QixVQUFVO1FBQzNCO1FBRUEsTUFBTUMsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFL0MxQixRQUFRMkIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGlCQUFpQixlQUFlLENBQUM7UUFFbEUsTUFBTUgsa0JBQWtCLElBQUksQ0FBQ0gsbUJBQW1CLENBQUNuQixTQUFTb0I7UUFFMUQsSUFBSUUsaUJBQWlCO1lBQ25CVCxhQUFhUyxpQkFBaUIsR0FBRztZQUVqQ3RCLFFBQVE0QixLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUVILGlCQUFpQiw4QkFBOEIsQ0FBQztRQUMzRSxPQUFPO1lBQ0wsSUFBSUksWUFBWTtZQUVoQixNQUFNQyxxQkFBcUIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQy9CO1lBRWxELElBQUk4QixvQkFBb0I7Z0JBQ3RCLE1BQU1FLHFCQUFxQixJQUFJLENBQUNDLGlCQUFpQixDQUFDakM7Z0JBRWxELElBQUlnQyxvQkFBb0I7b0JBQ3RCLE1BQU1FLFNBQVNsQyxRQUFRbUMsUUFBUTtvQkFFL0IsSUFBSUMsc0JBQXNCLE9BQ3RCQyx1QkFBdUI7b0JBRTNCLElBQUlILFFBQVE7d0JBQ1ZFLHNCQUFzQixJQUFJLENBQUNFLGtCQUFrQixDQUFDdEM7b0JBQ2hELE9BQU87d0JBQ0xxQyx1QkFBdUIsSUFBSSxDQUFDRSxtQkFBbUIsQ0FBQ3ZDO29CQUNsRDtvQkFFQSxJQUFJb0MsdUJBQXVCQyxzQkFBc0I7d0JBQy9DUixZQUFZO29CQUNkO2dCQUNGO1lBQ0Y7WUFFQSxJQUFJQSxXQUFXO2dCQUNiaEIsYUFBYSxJQUFJLEVBQUcsR0FBRztnQkFFdkJiLFFBQVF3QyxhQUFhLENBQUMzQixZQUFZTztnQkFFbENwQixRQUFRNEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVILGlCQUFpQixhQUFhLENBQUM7WUFDcEU7UUFDRjtRQUVBLE9BQU9aO0lBQ1Q7SUFFQW9CLGtCQUFrQmpDLE9BQU8sRUFBRTtRQUN6QixJQUFJZ0MscUJBQXFCO1FBRXpCLE1BQU1TLGtCQUFrQixJQUFJLENBQUN0QyxTQUFTLENBQUN1QixTQUFTLElBQzFDRCxtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUvQzFCLFFBQVEyQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsaUJBQWlCLGdCQUFnQixFQUFFZ0IsZ0JBQWdCLGNBQWMsQ0FBQztRQUVuRyxNQUFNdEMsWUFBWSxJQUFJLENBQUNBLFNBQVMsQ0FBQ29CLFFBQVEsQ0FBQ3ZCO1FBRTFDLElBQUlHLGNBQWMsTUFBTTtZQUN0QixNQUFNdUMsZUFBZSxJQUFJLENBQUN2QyxTQUFTLENBQUNPLGVBQWUsSUFDN0NpQyxzQkFBc0IzQyxRQUFRNEMscUJBQXFCLENBQUNGLGNBQWMxQztZQUV4RSxJQUFJMkMscUJBQXFCO2dCQUN2QlgscUJBQXFCO1lBQ3ZCLE9BQU87Z0JBQ0wsTUFBTWEseUJBQXlCN0MsUUFBUThDLHFDQUFxQyxDQUFDLElBQUksQ0FBQzNDLFNBQVMsR0FDckY0QyxnQ0FBZ0NGLHVCQUF1QkcsSUFBSSxDQUFDLENBQUNDO29CQUMzRCxNQUFNQywrQkFBK0IsSUFBSSxDQUFDQywwQkFBMEIsQ0FBQ0YsdUJBQXVCakQ7b0JBRTVGLElBQUlrRCw4QkFBOEI7d0JBQ2hDLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRU4sSUFBSUgsK0JBQStCO29CQUNqQ2YscUJBQXFCO2dCQUN2QjtZQUNGO1FBQ0Y7UUFFQSxJQUFJQSxvQkFBb0I7WUFDdEJoQyxRQUFRNEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVILGlCQUFpQixnQkFBZ0IsRUFBRWdCLGdCQUFnQixZQUFZLENBQUM7UUFDckc7UUFFQSxPQUFPVDtJQUNUO0lBRUFELGtCQUFrQi9CLE9BQU8sRUFBRTtRQUN6QixJQUFJOEIscUJBQXFCO1FBRXpCLE1BQU1MLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFDakMwQixrQkFBa0IsSUFBSSxDQUFDaEQsU0FBUyxDQUFDc0IsU0FBUztRQUVoRDFCLFFBQVEyQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsaUJBQWlCLGdCQUFnQixFQUFFMkIsZ0JBQWdCLGNBQWMsQ0FBQztRQUVuR0MsSUFBQUEsZ0JBQU8sRUFBQyxDQUFDckQ7WUFDUCxNQUFNSSxZQUFZLElBQUksQ0FBQ0EsU0FBUyxDQUFDbUIsUUFBUSxDQUFDdkI7WUFFMUMsSUFBSUksY0FBYyxNQUFNO2dCQUN0QjBCLHFCQUFxQjtZQUN2QjtRQUNGLEdBQUc5QjtRQUVILElBQUk4QixvQkFBb0I7WUFDdEI5QixRQUFRNEIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVILGlCQUFpQixnQkFBZ0IsRUFBRTJCLGdCQUFnQixZQUFZLENBQUM7UUFDckc7UUFFQSxPQUFPdEI7SUFDVDtJQUVBUSxtQkFBbUJ0QyxPQUFPLEVBQUU7UUFDMUIsSUFBSW9DO1FBRUosTUFBTVgsbUJBQW1CLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFL0MxQixRQUFRMkIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGlCQUFpQixzQkFBc0IsQ0FBQztRQUV6RVcsc0JBQXNCO1FBRXRCLElBQUlBLHFCQUFxQjtZQUN2QnBDLFFBQVE0QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUgsaUJBQWlCLG9CQUFvQixDQUFDO1FBQzNFO1FBRUEsT0FBT1c7SUFDVDtJQUVBRyxvQkFBb0J2QyxPQUFPLEVBQUU7UUFDM0IsSUFBSXFDLHVCQUF1QjtRQUUzQixNQUFNWixtQkFBbUIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUvQzFCLFFBQVEyQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsaUJBQWlCLHVCQUF1QixDQUFDO1FBQzFFLE1BQU13Qix3QkFBd0IsSUFBSSxDQUFDdEMsd0JBQXdCO1FBRTNELElBQUlzQywwQkFBMEIsTUFBTTtZQUNsQ1osdUJBQXVCO1FBQ3pCLE9BQU87WUFDTHJDLFFBQVE0QixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVILGlCQUFpQixzREFBc0QsQ0FBQztRQUNoRztRQUVBLElBQUlZLHNCQUFzQjtZQUN4QnJDLFFBQVE0QixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRUgsaUJBQWlCLHFCQUFxQixDQUFDO1FBQzVFO1FBRUEsT0FBT1k7SUFDVDtJQUVBaUIsZ0JBQWdCekMsVUFBVSxFQUFFYixPQUFPLEVBQUU7UUFDbkMsSUFBSXVEO1FBRUosTUFBTUMsb0JBQW9CLElBQUksRUFDeEJDLHFCQUFxQjVDLFlBQ3JCNkMsMEJBQTBCRixrQkFBa0I5QixTQUFTLElBQ3JEaUMsMkJBQTJCRixtQkFBbUIvQixTQUFTO1FBRTdEMUIsUUFBUTJCLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRWdDLHlCQUF5Qix1QkFBdUIsRUFBRUQsd0JBQXdCLGVBQWUsQ0FBQztRQUV6SCxNQUFNRSxpQkFBaUI1RCxTQUFVLEdBQUc7UUFFcENBLFVBQVVhLFdBQVdXLFVBQVU7UUFFL0IsTUFBTXFDLGtCQUFrQjdELFNBQVMsR0FBRztRQUVwQzhELElBQUFBLGtCQUFTLEVBQUMsQ0FBQ0Y7WUFDVEwsb0JBQW9CRCxJQUFBQSxzQkFBZSxFQUFDRSxtQkFBbUJDLG9CQUFvQkcsZ0JBQWdCQztZQUUzRixJQUFJTixtQkFBbUI7Z0JBQ3JCSyxlQUFlRyxNQUFNO1lBQ3ZCO1FBRUYsR0FBR0g7UUFFSDVELFVBQVU2RCxpQkFBa0IsR0FBRztRQUUvQixJQUFJTixtQkFBbUI7WUFDckJ2RCxRQUFRNEIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUrQix5QkFBeUIsdUJBQXVCLEVBQUVELHdCQUF3QixhQUFhLENBQUM7UUFDM0g7UUFFQSxPQUFPSDtJQUNUO0lBRUFKLDJCQUEyQkYscUJBQXFCLEVBQUVqRCxPQUFPLEVBQUU7UUFDekQsSUFBSWtEO1FBRUosTUFBTXpCLG1CQUFtQixJQUFJLENBQUNDLFNBQVMsSUFDakNzQyw4QkFBOEJmLHNCQUFzQnZCLFNBQVM7UUFFbkUxQixRQUFRMkIsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFcUMsNEJBQTRCLHFDQUFxQyxFQUFFdkMsaUJBQWlCLGVBQWUsQ0FBQztRQUVuSXlCLCtCQUErQixJQUFJLENBQUMvQyxTQUFTLENBQUNnRCwwQkFBMEIsQ0FBQ0YsdUJBQXVCakQ7UUFFaEcsSUFBSWtELDhCQUE4QjtZQUNoQ0EsK0JBQStCLElBQUksQ0FBQzlDLFNBQVMsQ0FBQytDLDBCQUEwQixDQUFDRix1QkFBdUJqRDtRQUNsRztRQUVBLElBQUlrRCw4QkFBOEI7WUFDaENsRCxRQUFRMkIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVxQyw0QkFBNEIscUNBQXFDLEVBQUV2QyxpQkFBaUIsZUFBZSxDQUFDO1FBQ3ZJO1FBRUEsT0FBT3lCO0lBQ1Q7SUFFQWUsU0FBUztRQUNQLE1BQU1oRSxTQUFTLElBQUksQ0FBQ3lCLFNBQVMsSUFDdkJ3QyxPQUFPO1lBQ0xqRTtRQUNGO1FBRU4sT0FBT2lFO0lBQ1Q7SUFFQSxPQUFPQyxPQUFPLGFBQWE7SUFFM0IsT0FBT0MsU0FBU0YsSUFBSSxFQUFFbEUsT0FBTyxFQUFFO1FBQzdCLE1BQU1hLGFBQWF3RCxJQUFBQSxvQkFBVyxFQUFDLENBQUNyRTtZQUM5QixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHaUUsTUFDYnpELGlCQUFpQjZELElBQUFBLGtDQUFxQixFQUFDckUsUUFBUUQsVUFDL0NFLE9BQU9PLGdCQUNQTixZQUFZb0UsNEJBQTRCOUQsZ0JBQWdCVCxVQUN4REksWUFBWW9FLDRCQUE0Qi9ELGdCQUFnQlQ7WUFFOURBLFVBQVUsTUFBTSxHQUFHO1lBRW5CLE1BQU1hLGFBQWEsSUFBSWYsV0FBV0UsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0M7WUFFcEUsT0FBT1M7UUFDVCxHQUFHYjtRQUVILE9BQU9hO0lBQ1Q7SUFFQSxPQUFPNEQsMEJBQTBCckUsU0FBUyxFQUFFRCxTQUFTLEVBQUVILE9BQU8sRUFBRTtRQUM5RCxJQUFJYTtRQUVKNkQsSUFBQUEsaUJBQVEsRUFBQyxDQUFDMUU7WUFDUnFFLElBQUFBLG9CQUFXLEVBQUMsQ0FBQ3JFO2dCQUNYLE1BQU15QixtQkFBbUJrRCxJQUFBQSxpREFBeUMsRUFBQ3ZFLFdBQVdELFlBQ3hFRixTQUFTd0Isa0JBQ1RoQixpQkFBaUI2RCxJQUFBQSxrQ0FBcUIsRUFBQ3JFLFFBQVFEO2dCQUVyRGEsYUFBYStELElBQUFBLHFDQUE0QixFQUFDbkUsZ0JBQWdCVDtnQkFFMURhLFdBQVdnRSxVQUFVLENBQUM3RTtZQUN4QixHQUFHQTtRQUNMLEdBQUdBO1FBRUgsT0FBT2E7SUFDVDtBQUNGO0FBRUEsU0FBUzBELDRCQUE0QjlELGNBQWMsRUFBRVQsT0FBTztJQUMxRCxNQUFNOEUsbUJBQW1CckUsZUFBZXNFLG1CQUFtQixDQUFDL0UsVUFDdERHLFlBQVlILFFBQVFnRiwrQkFBK0IsQ0FBQ0Y7SUFFMUQsT0FBTzNFO0FBQ1Q7QUFFQSxTQUFTcUUsNEJBQTRCL0QsY0FBYyxFQUFFVCxPQUFPO0lBQzFELE1BQU1pRixnQkFBZ0J4RSxlQUFleUUsZ0JBQWdCLElBQy9DOUUsWUFBWUosUUFBUW1GLDRCQUE0QixDQUFDRjtJQUV2RCxPQUFPN0U7QUFDVCJ9