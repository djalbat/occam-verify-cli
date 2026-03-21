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
const _element = require("../utilities/element");
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
    compareAssumption(assumption, context) {
        let comparesToAssumption = false;
        const assumptionA = this, assumptionB = assumption; ///
        const assumptionAString = assumptionA.getString(), assumptionBString = assumptionB.getString();
        context.trace(`Comparing the '${assumptionAString}' assumption to the '${assumptionBString}' assumption...`);
        debugger;
        if (comparesToAssumption) {
            context.debug(`...compared the '${assumptionAString}' assumption to the '${assumptionBString}' assumption.`);
        }
        return comparesToAssumption;
    }
    findValidAssumption(context, metaLevel = false) {
        const assumptionNode = this.getAssumptionNode(), assumption = context.findAssumptionByAssumptionNode(assumptionNode, metaLevel), validAssumption = assumption; ///
        return validAssumption;
    }
    validate(context, metaLevel = false) {
        let assumption = null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVBc3N1bXB0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGRlc2NlbmQsIHNpbXBsaWZ5LCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgYXNzdW1wdGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRSZWZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXNzdW1wdGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHJlZmVyZW5jZSwgc3RhdGVtZW50KSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGdldFRvcExldmVsTWV0YUFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpOyB9XG5cbiAgaXNFcXVhbFRvKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGFzc3VtcHRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGFzc3VtcHRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBjb21wYXJlQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9Bc3N1bXB0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uQSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25CID0gYXNzdW1wdGlvbjsgLy8vXG5cbiAgICBjb25zdCBhc3N1bXB0aW9uQVN0cmluZyA9IGFzc3VtcHRpb25BLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbkJTdHJpbmcgPSBhc3N1bXB0aW9uQi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYENvbXBhcmluZyB0aGUgJyR7YXNzdW1wdGlvbkFTdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSAnJHthc3N1bXB0aW9uQlN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGRlYnVnZ2VyXG5cbiAgICBpZiAoY29tcGFyZXNUb0Fzc3VtcHRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvbXBhcmVkIHRoZSAnJHthc3N1bXB0aW9uQVN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlICcke2Fzc3VtcHRpb25CU3RyaW5nfScgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb0Fzc3VtcHRpb247XG4gIH1cblxuICBmaW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQsIG1ldGFMZXZlbCA9IGZhbHNlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbk5vZGUgPSB0aGlzLmdldEFzc3VtcHRpb25Ob2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGNvbnRleHQuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBtZXRhTGV2ZWwpLFxuICAgICAgICAgIHZhbGlkQXNzdW1wdGlvbiA9IGFzc3VtcHRpb247ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0LCBtZXRhTGV2ZWwgPSBmYWxzZSkge1xuICAgIGxldCBhc3N1bXB0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3N1bXB0aW9uID0gdGhpcy5maW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQsIG1ldGFMZXZlbCk7XG5cbiAgICBpZiAodmFsaWRBc3N1bXB0aW9uKSB7XG4gICAgICBhc3N1bXB0aW9uID0gdmFsaWRBc3N1bXB0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBhc3N1bXB0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBtZXRhTGV2ZWwpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0NvbXBhcmUgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25zLnNvbWUoKHRvcExldmVsTWV0YUFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi4uLmApO1xuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRoaXMuZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXN1bXB0aW9uIGRpZCBub3QgdW5pZnkgYSB0b3AgbGV2ZWwgbWV0YS1hc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc3VtcHRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBhc3N1bXB0aW9uTm9kZSA9IGluc3RhbnRpYXRlQXNzdW1wdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZFJlZmVyZW5jZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uO1xuXG4gICAgc2ltcGxpZnkoKGNvbnRleHQpID0+IHtcbiAgICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSBhc3N1bXB0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZFJlZmVyZW5jZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIHN0cmluZyA9IGFzc3VtcHRpb25TdHJpbmcsICAvLy9cbiAgICAgICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBpbnN0YW50aWF0ZUFzc3VtcHRpb24oc3RyaW5nLCBjb250ZXh0KTtcblxuICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFzc3VtcHRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJyZWZlcmVuY2UiLCJzdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnQiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImdldE5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZSIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsImlzRXF1YWxUbyIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc3VtcHRpb25Ob2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiY29tcGFyZUFzc3VtcHRpb24iLCJjb21wYXJlc1RvQXNzdW1wdGlvbiIsImFzc3VtcHRpb25BIiwiYXNzdW1wdGlvbkIiLCJhc3N1bXB0aW9uQVN0cmluZyIsImdldFN0cmluZyIsImFzc3VtcHRpb25CU3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsImZpbmRWYWxpZEFzc3VtcHRpb24iLCJtZXRhTGV2ZWwiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJ2YWxpZEFzc3VtcHRpb24iLCJ2YWxpZGF0ZSIsImFzc3VtcHRpb25TdHJpbmciLCJ2YWxpZGF0ZXMiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInJlZmVyZW5jZVZhbGlkYXRlcyIsInZhbGlkYXRlUmVmZXJlbmNlIiwic3RhdGVkIiwiaXNTdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuU3RhdGVkIiwidmFsaWRhdGVzV2hlbkRlcml2ZWQiLCJ2YWxpZGF0ZVdoZW5TdGF0ZWQiLCJ2YWxpZGF0ZVdoZW5EZXJpdmVkIiwiYWRkQXNzdW1wdGlvbiIsInJlZmVyZW5jZVN0cmluZyIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnNDb21wYXJlIiwic29tZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInN0YXRlbWVudFN0cmluZyIsImRlc2NlbmQiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUFzc3VtcHRpb24iLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50QW5kUmVmZXJlbmNlIiwic2ltcGxpZnkiLCJhc3N1bXB0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZFJlZmVyZW5jZSIsImFzc3VtcHRpb25Gcm9tQXNzdW1wdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O2dDQVJ3QjswQkFFRDs2QkFDZTt5QkFDUzt5QkFDRjt3QkFDYTtNQUUxRCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLENBQUU7UUFDdkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsb0JBQW9CO1FBQ2xCLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxpQkFBaUJQLE1BQU8sR0FBRztRQUVqQyxPQUFPTztJQUNUO0lBRUFDLGtCQUFrQjtRQUFFLE9BQU8sSUFBSSxDQUFDUCxTQUFTLENBQUNPLGVBQWU7SUFBSTtJQUU3REMsMkJBQTJCO1FBQUUsT0FBTyxJQUFJLENBQUNSLFNBQVMsQ0FBQ1Esd0JBQXdCO0lBQUk7SUFFL0VDLFVBQVVDLFVBQVUs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