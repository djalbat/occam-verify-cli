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
    unifyMetaLevelAssumption(metaLevelAssumption, generalContext, specificContext) {
        let metaLevelAssumptionUnifies;
        const context = specificContext, assumptionString = this.getString(), metaLevelAssumptionString = metaLevelAssumption.getString();
        context.trace(`Unifying the '${metaLevelAssumptionString}' meta-level assumption with the '${assumptionString}' assumption...`);
        const metaLevelAssumptionContext = metaLevelAssumption.getContext();
        specificContext = metaLevelAssumptionContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlBc3N1bXB0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQXNzdW1wdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBqb2luLCBkZXNjZW5kLCByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBc3N1bXB0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCk7IH1cblxuICBpc0VxdWFsVG8oYXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0gYXNzdW1wdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gYXNzdW1wdGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0gdGhpcy5nZXRBc3N1bXB0aW9uTm9kZSgpLFxuICAgICAgICAgIGFzc3VtcHRpb24gPSBjb250ZXh0LmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgdmFsaWRBc3N1bXB0aW9uID0gYXNzdW1wdGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkQXNzdW1wdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgYXNzdW1wdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uLi5gKTtcblxuICAgIGNvbnN0IHZhbGlkQXNzdW1wdGlvbiA9IHRoaXMuZmluZFZhbGlkQXNzdW1wdGlvbihjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZEFzc3VtcHRpb24pIHtcbiAgICAgIGFzc3VtcHRpb24gPSB2YWxpZEFzc3VtcHRpb247IC8vL1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi50aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gaXMgYWxyZWFkeSB2YWxpZC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVSZWZlcmVuY2UoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnN0IHN0YXRlZCA9IGNvbnRleHQuaXNTdGF0ZWQoKTtcblxuICAgICAgICAgIGxldCB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoc3RhdGVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdGhpcy52YWxpZGF0ZVdoZW5TdGF0ZWQoY29udGV4dCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdGhpcy52YWxpZGF0ZVdoZW5EZXJpdmVkKGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh2YWxpZGF0ZXNXaGVuU3RhdGVkIHx8IHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIGFzc3VtcHRpb24gPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0NvbXBhcmUgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25zLnNvbWUoKHRvcExldmVsTWV0YUFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdGhpcy5nZXRUb3BMZXZlbE1ldGFBc3NlcnRpb24oKTtcblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIHZhbGlkYXRlc1doZW5EZXJpdmVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3VtcHRpb24gZGlkIG5vdCB1bmlmeSBhIHRvcCBsZXZlbCBtZXRhLWFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5EZXJpdmVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBkZXJpdmVkIGFzc3VtcHRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlc1doZW5EZXJpdmVkO1xuICB9XG5cbiAgdW5pZnlNZXRhTGV2ZWxBc3N1bXB0aW9uKG1ldGFMZXZlbEFzc3VtcHRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgbWV0YUxldmVsQXNzdW1wdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uU3RyaW5nID0gbWV0YUxldmVsQXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHttZXRhTGV2ZWxBc3N1bXB0aW9uU3RyaW5nfScgbWV0YS1sZXZlbCBhc3N1bXB0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhTGV2ZWxBc3N1bXB0aW9uQ29udGV4dCA9IG1ldGFMZXZlbEFzc3VtcHRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gbWV0YUxldmVsQXNzdW1wdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgZ2VuZXJhbEFzc3VtcHRpb24gPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNBc3N1bXB0aW9uID0gbWV0YUxldmVsQXNzdW1wdGlvbiwgIC8vL1xuICAgICAgICAgICAgICBhc3N1bXB0aW9uVW5pZmllcyA9IHVuaWZ5QXNzdW1wdGlvbihnZW5lcmFsQXNzdW1wdGlvbiwgc3BlY2lmaWNBc3N1bXB0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcywgIC8vL1xuICAgICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dFF1YWxpZmllcyA9IHNwZWNpZmljQ29udGV4dC5xdWFsaWZ5KGFzc3VtcHRpb24sIG1ldGFMZXZlbEFzc3VtcHRpb24pO1xuXG4gICAgICAgICAgaWYgKHNwZWNpZmljQ29udGV4dFF1YWxpZmllcykge1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKG1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHttZXRhTGV2ZWxBc3N1bXB0aW9uU3RyaW5nfScgbWV0YS1sZXZlbCBhc3N1bXB0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGV2ZWxBc3N1bXB0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc3VtcHRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBhc3N1bXB0aW9uTm9kZSA9IGluc3RhbnRpYXRlQXNzdW1wdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldE1ldGF2YXJpYWJsZU5vZGUoY29udGV4dCksXG4gICAgICAgIHJlZmVyZW5jZSA9IGNvbnRleHQuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICByZXR1cm4gcmVmZXJlbmNlO1xufVxuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IGFzc3VtcHRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXNzdW1wdGlvbiIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInJlZmVyZW5jZSIsInN0YXRlbWVudCIsImdldFJlZmVyZW5jZSIsImdldFN0YXRlbWVudCIsImdldEFzc3VtcHRpb25Ob2RlIiwiZ2V0Tm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiZ2V0TWV0YXZhcmlhYmxlIiwiZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiaXNFcXVhbFRvIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJlcXVhbFRvIiwibm9kZU1hdGNoZXMiLCJtYXRjaE5vZGUiLCJmaW5kVmFsaWRBc3N1bXB0aW9uIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwidmFsaWRBc3N1bXB0aW9uIiwidmFsaWRhdGUiLCJhc3N1bXB0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJkZWJ1ZyIsInZhbGlkYXRlcyIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwicmVmZXJlbmNlVmFsaWRhdGVzIiwidmFsaWRhdGVSZWZlcmVuY2UiLCJzdGF0ZWQiLCJpc1N0YXRlZCIsInZhbGlkYXRlc1doZW5TdGF0ZWQiLCJ2YWxpZGF0ZXNXaGVuRGVyaXZlZCIsInZhbGlkYXRlV2hlblN0YXRlZCIsInZhbGlkYXRlV2hlbkRlcml2ZWQiLCJhZGRBc3N1bXB0aW9uIiwicmVmZXJlbmNlU3RyaW5nIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0NvbXBhcmUiLCJzb21lIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwic3RhdGVtZW50U3RyaW5nIiwiZGVzY2VuZCIsInVuaWZ5TWV0YUxldmVsQXNzdW1wdGlvbiIsIm1ldGFMZXZlbEFzc3VtcHRpb24iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsIm1ldGFMZXZlbEFzc3VtcHRpb25VbmlmaWVzIiwibWV0YUxldmVsQXNzdW1wdGlvblN0cmluZyIsIm1ldGFMZXZlbEFzc3VtcHRpb25Db250ZXh0IiwiZ2V0Q29udGV4dCIsImpvaW4iLCJyZWNvbmNpbGUiLCJnZW5lcmFsQXNzdW1wdGlvbiIsInNwZWNpZmljQXNzdW1wdGlvbiIsImFzc3VtcHRpb25VbmlmaWVzIiwidW5pZnlBc3N1bXB0aW9uIiwic3BlY2lmaWNDb250ZXh0UXVhbGlmaWVzIiwicXVhbGlmeSIsImNvbW1pdCIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsInRvSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlQXNzdW1wdGlvbiIsInJlZmVyZW5jZUZyb21Bc3N1bXB0aW9uTm9kZSIsInN0YXRlbWVudEZyb21Bc3N1bXB0aW9uTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7Z0NBUHdCOzBCQUVEO3VCQUNTOzZCQUNNO3lCQUNnQjtNQUV0RCxXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG1CQUFtQkMsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLENBQUU7UUFDdkQsS0FBSyxDQUFDSixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO0lBQ25CO0lBRUFDLGVBQWU7UUFD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