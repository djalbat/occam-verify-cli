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
const _context = require("../utilities/context");
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
    unifyMetaLevelAssumption(metaLevelAssumption, context) {
        let metaLevelAssumptionUnifies;
        const assumptionString = this.getString(), metaLevelAssumptionString = metaLevelAssumption.getString();
        context.trace(`Unifying the '${metaLevelAssumptionString}' meta-level assumption with the '${assumptionString}' assumption...`);
        const metaLevelAssumptionContext = metaLevelAssumption.getContext(), assumptionContext = this.getContext(), generalContext = assumptionContext, specificContext = metaLevelAssumptionContext; ///
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const generalAssumption = this, specificAssumption = metaLevelAssumption, assumptionUnifies = (0, _unify.unifyAssumption)(generalAssumption, specificAssumption, generalContext, specificContext);
                if (assumptionUnifies) {
                    const assumption = this, specificContextQualifies = specificContext.qualify(assumption, metaLevelAssumption);
                    if (specificContextQualifies) {
                        specificContext.commit(context);
                        metaLevelAssumptionUnifies = true;
                    }
                }
            }, specificContext);
        }, specificContext, context);
        if (metaLevelAssumptionUnifies) {
            context.debug(`...unified the '${metaLevelAssumptionString}' meta-level assumption with the '${assumptionString}' assumption.`);
        }
        return metaLevelAssumptionUnifies;
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
        const assumption = (0, _context.instantiate)((context)=>{
            const { string, lineIndex } = json, assumptionNode = (0, _instantiate.instantiateAssumption)(string, context), node = assumptionNode, reference = referenceFromAssumptionNode(assumptionNode, context), statement = statementFromAssumptionNode(assumptionNode, context), assumption = new Assumption(context, string, node, lineIndex, reference, statement);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlBc3N1bXB0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQXNzdW1wdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBqb2luLCByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBc3N1bXB0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGdldFRvcExldmVsTWV0YUFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpOyB9XG5cbiAgaXNFcXVhbFRvKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGFzc3VtcHRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGFzc3VtcHRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IHRoaXMuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkQXNzdW1wdGlvbiA9IGFzc3VtcHRpb247ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEFzc3VtcHRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3N1bXB0aW9uKSB7XG4gICAgICBhc3N1bXB0aW9uID0gdmFsaWRBc3N1bXB0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBhc3N1bXB0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlKCksXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gY29udGV4dC5pc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVByZXNlbnQpIHtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG5cbiAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSA9IHRoaXMudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb25zKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSkge1xuICAgICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuXG4gICAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3Mgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWVcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRoaXMuZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXN1bXB0aW9uIGRpZCBub3QgdW5pZnkgYSB0b3AgbGV2ZWwgbWV0YS1hc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxldmVsQXNzdW1wdGlvbihtZXRhTGV2ZWxBc3N1bXB0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uU3RyaW5nID0gbWV0YUxldmVsQXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGV2ZWxBc3N1bXB0aW9uU3RyaW5nfScgbWV0YS1sZXZlbCBhc3N1bXB0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhTGV2ZWxBc3N1bXB0aW9uQ29udGV4dCA9IG1ldGFMZXZlbEFzc3VtcHRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Db250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBhc3N1bXB0aW9uQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gbWV0YUxldmVsQXNzdW1wdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbEFzc3VtcHRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNBc3N1bXB0aW9uID0gbWV0YUxldmVsQXNzdW1wdGlvbiwgIC8vL1xuICAgICAgICAgICAgICBhc3N1bXB0aW9uVW5pZmllcyA9IHVuaWZ5QXNzdW1wdGlvbihnZW5lcmFsQXNzdW1wdGlvbiwgc3BlY2lmaWNBc3N1bXB0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFF1YWxpZmllcyA9IHNwZWNpZmljQ29udGV4dC5xdWFsaWZ5KGFzc3VtcHRpb24sIG1ldGFMZXZlbEFzc3VtcHRpb24pO1xuXG4gICAgICAgICAgaWYgKHNwZWNpZmljQ29udGV4dFF1YWxpZmllcykge1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhTGV2ZWxBc3N1bXB0aW9uU3RyaW5nfScgbWV0YS1sZXZlbCBhc3N1bXB0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGV2ZWxBc3N1bXB0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbnMocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBjb250ZXh0LmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnNVbmlmeSA9IHRvcExldmVsTWV0YUFzc2VydGlvbnMuc29tZSgodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25zVW5pZnk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXNzdW1wdGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBpbnN0YW50aWF0ZUFzc3VtcHRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZShjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBc3N1bXB0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJnZXROb2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJpc0VxdWFsVG8iLCJhc3N1bXB0aW9uIiwiYXNzdW1wdGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3N1bXB0aW9uTm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImZpbmRWYWxpZEFzc3VtcHRpb24iLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJ2YWxpZEFzc3VtcHRpb24iLCJ2YWxpZGF0ZSIsImFzc3VtcHRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEFzc3VtcHRpb24iLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc1VuaWZ5IiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb25zIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidW5pZnlNZXRhTGV2ZWxBc3N1bXB0aW9uIiwibWV0YUxldmVsQXNzdW1wdGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzIiwibWV0YUxldmVsQXNzdW1wdGlvblN0cmluZyIsIm1ldGFMZXZlbEFzc3VtcHRpb25Db250ZXh0IiwiZ2V0Q29udGV4dCIsImFzc3VtcHRpb25Db250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJqb2luIiwicmVjb25jaWxlIiwiZ2VuZXJhbEFzc3VtcHRpb24iLCJzcGVjaWZpY0Fzc3VtcHRpb24iLCJhc3N1bXB0aW9uVW5pZmllcyIsInVuaWZ5QXNzdW1wdGlvbiIsInNwZWNpZmljQ29udGV4dFF1YWxpZmllcyIsInF1YWxpZnkiLCJjb21taXQiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInNvbWUiLCJuYW1lIiwidG9KU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUFzc3VtcHRpb24iLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwiZ2V0TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O2dDQVB3QjswQkFFRDt1QkFDUzs2QkFDTTt5QkFDTztNQUU3QyxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUks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