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
const _string = require("../utilities/string");
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
    unifyAssumption(assumption, generalContext, specificContext) {
        let assumptionUnifies;
        const context = specificContext, generalAssumption = this, specificAssumption = assumption, generalAssumptionString = generalAssumption.getString(), specificAssumptionString = specificAssumption.getString();
        context.trace(`Unifying the '${specificAssumptionString}' assumption with the '${generalAssumptionString}' assumption...`);
        const assumptionContext = assumption.getContext();
        specificContext = assumptionContext; ///
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                assumptionUnifies = (0, _unify.unifyAssumption)(generalAssumption, specificAssumption, generalContext, specificContext);
                if (assumptionUnifies) {
                    specificContext.commit(context);
                }
            }, specificContext);
        }, specificContext, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlBc3N1bXB0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQXNzdW1wdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBhc3N1bXB0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZFJlZmVyZW5jZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBqb2luLCBkZXNjZW5kLCBzaW1wbGlmeSwgcmVjb25jaWxlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXNzdW1wdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGdldFRvcExldmVsTWV0YUFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpOyB9XG5cbiAgaXNFcXVhbFRvKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGFzc3VtcHRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGFzc3VtcHRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQsIG1ldGFMZXZlbCA9IGZhbHNlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSB0aGlzLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBtZXRhTGV2ZWwpLFxuICAgICAgICAgIHZhbGlkQXNzdW1wdGlvbiA9IGFzc3VtcHRpb247ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCBtZXRhTGV2ZWwgPSBmYWxzZSkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGlmIChtZXRhTGV2ZWwpIHtcbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzdW1wdGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzdW1wdGlvbihjb250ZXh0LCBtZXRhTGV2ZWwpO1xuXG4gICAgaWYgKHZhbGlkQXNzdW1wdGlvbikge1xuICAgICAgYXNzdW1wdGlvbiA9IHZhbGlkQXNzdW1wdGlvbjsgLy8vXG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBpcyBhbHJlYWR5IHZhbGlkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29uc3QgcmVmZXJlbmNlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KTtcblxuICAgICAgICBpZiAocmVmZXJlbmNlVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVkID0gY29udGV4dC5pc1N0YXRlZCgpO1xuXG4gICAgICAgICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQgPSBmYWxzZSxcbiAgICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSBmYWxzZTtcblxuICAgICAgICAgIGlmIChzdGF0ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5TdGF0ZWQgPSB0aGlzLnZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0aGlzLnZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQgfHwgdmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgYXNzdW1wdGlvbiA9IHRoaXM7ICAvLy9cblxuICAgICAgICBjb250ZXh0LmFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbiwgbWV0YUxldmVsKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHRoaXMucmVmZXJlbmNlLmdldFN0cmluZygpLFxuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyA9IGNvbnRleHQuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnNDb21wYXJlID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucy5zb21lKCh0b3BMZXZlbE1ldGFBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHRoaXMuc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGRlc2NlbmQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWVcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uLi5gKTtcbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpO1xuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgdmFsaWRhdGVzV2hlbkRlcml2ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBUaGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzdW1wdGlvbiBkaWQgbm90IHVuaWZ5IGEgdG9wIGxldmVsIG1ldGEtYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICBpZiAodmFsaWRhdGVzV2hlbkRlcml2ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlbkRlcml2ZWQ7XG4gIH1cblxuICB1bmlmeUFzc3VtcHRpb24oYXNzdW1wdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQXNzdW1wdGlvbiA9IHRoaXMsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQXNzdW1wdGlvbiA9IGFzc3VtcHRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsQXNzdW1wdGlvblN0cmluZyA9IGdlbmVyYWxBc3N1bXB0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljQXNzdW1wdGlvblN0cmluZyA9IHNwZWNpZmljQXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY0Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHdpdGggdGhlICcke2dlbmVyYWxBc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbkNvbnRleHQgPSBhc3N1bXB0aW9uLmdldENvbnRleHQoKTtcblxuICAgIHNwZWNpZmljQ29udGV4dCA9IGFzc3VtcHRpb25Db250ZXh0OyAgLy8vXG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGFzc3VtcHRpb25VbmlmaWVzID0gdW5pZnlBc3N1bXB0aW9uKGdlbmVyYWxBc3N1bXB0aW9uLCBzcGVjaWZpY0Fzc3VtcHRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3N1bXB0aW9uVW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGFzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY0Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHdpdGggdGhlICcke2dlbmVyYWxBc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMucmVmZXJlbmNlLnVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMuc3RhdGVtZW50LnVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbiB3aXRoIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBc3N1bXB0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBpbnN0YW50aWF0ZUFzc3VtcHRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBudWxsOyAvLy9cblxuICAgICAgY29uc3QgYXNzdW1wdGlvbiA9IG5ldyBBc3N1bXB0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpO1xuXG4gICAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdGF0ZW1lbnRBbmRSZWZlcmVuY2Uoc3RhdGVtZW50LCByZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbjtcblxuICAgIHNpbXBsaWZ5KChjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gYXNzdW1wdGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRSZWZlcmVuY2Uoc3RhdGVtZW50LCByZWZlcmVuY2UpLFxuICAgICAgICAgICAgICBzdHJpbmcgPSBhc3N1bXB0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICAgIGFzc3VtcHRpb25Ob2RlID0gaW5zdGFudGlhdGVBc3N1bXB0aW9uKHN0cmluZywgY29udGV4dCk7XG5cbiAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIGFzc3VtcHRpb24uc2V0Q29udGV4dChjb250ZXh0KTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXNzdW1wdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInJlZmVyZW5jZSIsInN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImdldFN0YXRlbWVudCIsImdldEFzc3VtcHRpb25Ob2RlIiwiZ2V0Tm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiaXNFcXVhbFRvIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kVmFsaWRBc3N1bXB0aW9uIiwibWV0YUxldmVsIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwidmFsaWRBc3N1bXB0aW9uIiwidmFsaWRhdGUiLCJnZXRDb250ZXh0IiwiYXNzdW1wdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZGVidWciLCJ2YWxpZGF0ZXMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYWRkQXNzdW1wdGlvbiIsInJlZmVyZW5jZVN0cmluZyIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnNDb21wYXJlIiwic29tZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInN0YXRlbWVudFN0cmluZyIsImRlc2NlbmQiLCJ1bmlmeUFzc3VtcHRpb24iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImFzc3VtcHRpb25VbmlmaWVzIiwiZ2VuZXJhbEFzc3VtcHRpb24iLCJzcGVjaWZpY0Fzc3VtcHRpb24iLCJnZW5lcmFsQXNzdW1wdGlvblN0cmluZyIsInNwZWNpZmljQXNzdW1wdGlvblN0cmluZyIsImFzc3VtcHRpb25Db250ZXh0Iiwiam9pbiIsInJlY29uY2lsZSIsImNvbW1pdCIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQXNzdW1wdGlvbiIsInJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsImZyb21TdGF0ZW1lbnRBbmRSZWZlcmVuY2UiLCJzaW1wbGlmeSIsImFzc3VtcHRpb25TdHJpbmdGcm9tU3RhdGVtZW50QW5kUmVmZXJlbmNlIiwiYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSIsInNldENvbnRleHQiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVR3QjswQkFFRDt1QkFDUzs2QkFDTTt5QkFDTzt3QkFDYTt5QkFDTTtNQUVoRSxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLENBQUU7UUFDdkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsb0JBQW9CO1FBQ2xCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxpQkFBaUJQLE1BQU8sR0FBRztRQUVqQyxPQUFPTztJQUNUO0lBRUFDLGtCQUFrQjtRQUFFLE9BQU8sSUFBSSxDQUFDUCxTQUFTLENBQUNPLGVBQWU7SUFBSTtJQUU3REMsMkJBQTJCO1FBQUUsT0FBTyxJQUFJLENBQUNSLFNBQVMsQ0FBQ1Esd0JBQXdCO0lBQUk7SUFFL0VDLFVBQVVDLFVBQVUsRUFBRTtRQUNwQixNQUFNSixpQkFBaUJJLFdBQVdMLE9B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