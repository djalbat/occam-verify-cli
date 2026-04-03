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
    constructor(context, string, node, lineIndex, reference, statement){
        super(context, string, node, lineIndex);
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
    findValidAssumption(context) {
        const assumptionNode = this.getAssumptionNode(), assumption = context.findAssumptionByAssumptionNode(assumptionNode), validAssumption = assumption; ///
        return validAssumption;
    }
    validate(context) {
        let assumption = null;
        const assumptionString = this.getString(); ///
        context.trace(`Validating the '${assumptionString}' assumption...`);
        const validAssumption = this.findValidAssumption(context);
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
                context.addAssumption(assumption);
                context.debug(`...validated the '${assumptionString}' assumption.`);
            }
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
        const string = this.getString(), lineIndex = this.getLineIndex(), json = {
            string,
            lineIndex
        };
        return json;
    }
    static fromJSON(json, context) {
        return (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, assumptionNode = (0, _instantiate.instantiateAssumption)(string, context), node = assumptionNode, reference = referenceFromAssumptionNode(assumptionNode, context), statement = statementFromAssumptionNode(assumptionNode, context), assumption = new Assumption(context, string, node, lineIndex, reference, statement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQXNzdW1wdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBc3N1bXB0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGdldFRvcExldmVsTWV0YUFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpOyB9XG5cbiAgaXNFcXVhbFRvKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGFzc3VtcHRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGFzc3VtcHRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IHRoaXMuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkQXNzdW1wdGlvbiA9IGFzc3VtcHRpb247ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEFzc3VtcHRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3N1bXB0aW9uKSB7XG4gICAgICBhc3N1bXB0aW9uID0gdmFsaWRBc3N1bXB0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBhc3N1bXB0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG5cbiAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSA9IHRoaXMudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb25zKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3Mgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWVcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRoaXMuZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXN1bXB0aW9uIGRpZCBub3QgdW5pZnkgYSB0b3AgbGV2ZWwgbWV0YS1hc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbnMocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSA9IHRvcExldmVsTWV0YUFzc2VydGlvbnMuc29tZSgodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXNzdW1wdGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBpbnN0YW50aWF0ZUFzc3VtcHRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXNzdW1wdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInJlZmVyZW5jZSIsInN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImdldFN0YXRlbWVudCIsImdldEFzc3VtcHRpb25Ob2RlIiwiZ2V0Tm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiaXNFcXVhbFRvIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kVmFsaWRBc3N1bXB0aW9uIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwidmFsaWRBc3N1bXB0aW9uIiwidmFsaWRhdGUiLCJhc3N1bXB0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwicmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRBc3N1bXB0aW9uIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsInRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwic29tZSIsIm5hbWUiLCJ0b0pTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQXNzdW1wdGlvbiIsInJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBUUE7OztlQUFBOzs7Z0NBTndCOzBCQUVEO3lCQUNLOzZCQUNVO01BRXRDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxDQUFFO1FBQ2xFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFD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