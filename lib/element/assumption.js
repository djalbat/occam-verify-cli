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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlBc3N1bXB0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQXNzdW1wdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBqb2luLCByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBc3N1bXB0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCByZWZlcmVuY2UsIHN0YXRlbWVudCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgIHRoaXMuc3RhdGVtZW50ID0gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbk5vZGU7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGUoKSB7IHJldHVybiB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKTsgfVxuXG4gIGdldFRvcExldmVsTWV0YUFzc2VydGlvbigpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldFRvcExldmVsTWV0YUFzc2VydGlvbigpOyB9XG5cbiAgaXNFcXVhbFRvKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IGFzc3VtcHRpb24uZ2V0Tm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgZXF1YWxUbyA9IGFzc3VtcHRpb25Ob2RlTWF0Y2hlczsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWFsVG87XG4gIH1cblxuICBtYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAvLy9cbiAgICAgICAgICBub2RlTWF0Y2hlcyA9IHRoaXMubWF0Y2hOb2RlKG5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IG5vZGVNYXRjaGVzOyAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZU1hdGNoZXM7XG4gIH1cblxuICBmaW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IHRoaXMuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpLFxuICAgICAgICAgIHZhbGlkQXNzdW1wdGlvbiA9IGFzc3VtcHRpb247ICAvLy9cblxuICAgIHJldHVybiB2YWxpZEFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCB2YWxpZEFzc3VtcHRpb24gPSB0aGlzLmZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRBc3N1bXB0aW9uKSB7XG4gICAgICBhc3N1bXB0aW9uID0gdmFsaWRBc3N1bXB0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBhc3N1bXB0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcblxuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgdmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCkge1xuICAgIGxldCByZWZlcmVuY2VWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzIHJlZmVyZW5jZS4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2UudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocmVmZXJlbmNlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLnJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGUoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBjb250ZXh0LmlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyA9IGNvbnRleHQuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSh0aGlzLnJlZmVyZW5jZSksXG4gICAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnNDb21wYXJlID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucy5zb21lKCh0b3BMZXZlbE1ldGFBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbnNDb21wYXJlKSB7XG4gICAgICAgICAgcmVmZXJlbmNlVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyByZWZlcmVuY2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyBzdGF0ZW1lbnQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3Mgc3RhdGVtZW50LmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRydWVcblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBzdGF0ZWQgYXNzdW1wdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzV2hlblN0YXRlZDtcbiAgfVxuXG4gIHZhbGlkYXRlV2hlbkRlcml2ZWQoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRoaXMuZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXN1bXB0aW9uIGRpZCBub3QgdW5pZnkgYSB0b3AgbGV2ZWwgbWV0YS1hc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5TWV0YUxldmVsQXNzdW1wdGlvbihtZXRhTGV2ZWxBc3N1bXB0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IG1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uU3RyaW5nID0gbWV0YUxldmVsQXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGV2ZWxBc3N1bXB0aW9uU3RyaW5nfScgbWV0YS1sZXZlbCBhc3N1bXB0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhTGV2ZWxBc3N1bXB0aW9uQ29udGV4dCA9IG1ldGFMZXZlbEFzc3VtcHRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGFzc3VtcHRpb25Db250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBhc3N1bXB0aW9uQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gbWV0YUxldmVsQXNzdW1wdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbEFzc3VtcHRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNBc3N1bXB0aW9uID0gbWV0YUxldmVsQXNzdW1wdGlvbiwgIC8vL1xuICAgICAgICAgICAgICBhc3N1bXB0aW9uVW5pZmllcyA9IHVuaWZ5QXNzdW1wdGlvbihnZW5lcmFsQXNzdW1wdGlvbiwgc3BlY2lmaWNBc3N1bXB0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFF1YWxpZmllcyA9IHNwZWNpZmljQ29udGV4dC5xdWFsaWZ5KGFzc3VtcHRpb24sIG1ldGFMZXZlbEFzc3VtcHRpb24pO1xuXG4gICAgICAgICAgaWYgKHNwZWNpZmljQ29udGV4dFF1YWxpZmllcykge1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhTGV2ZWxBc3N1bXB0aW9uU3RyaW5nfScgbWV0YS1sZXZlbCBhc3N1bXB0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGV2ZWxBc3N1bXB0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXNzdW1wdGlvblwiO1xuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgYXNzdW1wdGlvbk5vZGUgPSBpbnN0YW50aWF0ZUFzc3VtcHRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBhc3N1bXB0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHJlZmVyZW5jZSwgc3RhdGVtZW50KTtcblxuICAgICAgcmV0dXJuIGFzc3VtcHRpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBtZXRhdmFyaWFibGVOb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0TWV0YXZhcmlhYmxlTm9kZShjb250ZXh0KSxcbiAgICAgICAgcmVmZXJlbmNlID0gY29udGV4dC5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gIHJldHVybiByZWZlcmVuY2U7XG59XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gYXNzdW1wdGlvbk5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJBc3N1bXB0aW9uIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwicmVmZXJlbmNlIiwic3RhdGVtZW50IiwiZ2V0UmVmZXJlbmNlIiwiZ2V0U3RhdGVtZW50IiwiZ2V0QXNzdW1wdGlvbk5vZGUiLCJnZXROb2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJnZXRNZXRhdmFyaWFibGUiLCJnZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJpc0VxdWFsVG8iLCJhc3N1bXB0aW9uIiwiYXNzdW1wdGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3N1bXB0aW9uTm9kZSIsImVxdWFsVG8iLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImZpbmRWYWxpZEFzc3VtcHRpb24iLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJ2YWxpZEFzc3VtcHRpb24iLCJ2YWxpZGF0ZSIsImFzc3VtcHRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEFzc3VtcHRpb24iLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zQ29tcGFyZSIsInNvbWUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ1bmlmeU1ldGFMZXZlbEFzc3VtcHRpb24iLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwibWV0YUxldmVsQXNzdW1wdGlvblVuaWZpZXMiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uU3RyaW5nIiwibWV0YUxldmVsQXNzdW1wdGlvbkNvbnRleHQiLCJnZXRDb250ZXh0IiwiYXNzdW1wdGlvbkNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImpvaW4iLCJyZWNvbmNpbGUiLCJnZW5lcmFsQXNzdW1wdGlvbiIsInNwZWNpZmljQXNzdW1wdGlvbiIsImFzc3VtcHRpb25VbmlmaWVzIiwidW5pZnlBc3N1bXB0aW9uIiwic3BlY2lmaWNDb250ZXh0UXVhbGlmaWVzIiwicXVhbGlmeSIsImNvbW1pdCIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsIm5hbWUiLCJ0b0pTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQXNzdW1wdGlvbiIsInJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3VCQUNTOzZCQUNNO3lCQUNPO01BRTdDLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxDQUFFO1FBQ2xFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtJQUNuQjtJQUVBQyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNGLFNBQVM7SUFDdkI7SUFFQUcsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLG9CQUFvQjtRQUNsQixNQUFNTixPQUFPLElBQUksQ0FBQ08sT0FBTyxJQUNuQkMs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