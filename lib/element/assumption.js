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
        (0, _context.instantiate)((context)=>{
            const assumptionString = (0, _string.assumptionStringFromStatementAndReference)(statement, reference), string = assumptionString, assumptionNode = (0, _instantiate.instantiateAssumption)(string, context);
            assumption = (0, _element.assumptionFromAssumptionNode)(assumptionNode, context);
            assumption.setContext(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2Fzc3VtcHRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgdW5pZnlBc3N1bXB0aW9uIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdW5pZnlcIjtcbmltcG9ydCB7IGluc3RhbnRpYXRlQXNzdW1wdGlvbiB9IGZyb20gXCIuLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBqb2luLCBkZXNjZW5kLCByZWNvbmNpbGUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBhc3N1bXB0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZFJlZmVyZW5jZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBc3N1bXB0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcmVmZXJlbmNlLCBzdGF0ZW1lbnQpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgdGhpcy5zdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRSZWZlcmVuY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudDtcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBhc3N1bXB0aW9uTm9kZTtcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZSgpIHsgcmV0dXJuIHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpOyB9XG5cbiAgZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCkgeyByZXR1cm4gdGhpcy5yZWZlcmVuY2UuZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCk7IH1cblxuICBpc0VxdWFsVG8oYXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlID0gYXNzdW1wdGlvbi5nZXROb2RlKCksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSxcbiAgICAgICAgICBlcXVhbFRvID0gYXNzdW1wdGlvbk5vZGVNYXRjaGVzOyAgLy8vXG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIG1hdGNoQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gYXNzdW1wdGlvbk5vZGUsIC8vL1xuICAgICAgICAgIG5vZGVNYXRjaGVzID0gdGhpcy5tYXRjaE5vZGUobm9kZSksXG4gICAgICAgICAgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gbm9kZU1hdGNoZXM7IC8vL1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25Ob2RlTWF0Y2hlcztcbiAgfVxuXG4gIGZpbmRWYWxpZEFzc3VtcHRpb24oY29udGV4dCwgbWV0YUxldmVsID0gZmFsc2UpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uTm9kZSA9IHRoaXMuZ2V0QXNzdW1wdGlvbk5vZGUoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIG1ldGFMZXZlbCksXG4gICAgICAgICAgdmFsaWRBc3N1bXB0aW9uID0gYXNzdW1wdGlvbjsgIC8vL1xuXG4gICAgcmV0dXJuIHZhbGlkQXNzdW1wdGlvbjtcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQsIG1ldGFMZXZlbCA9IGZhbHNlKSB7XG4gICAgbGV0IGFzc3VtcHRpb24gPSBudWxsO1xuXG4gICAgaWYgKG1ldGFMZXZlbCkge1xuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbi4uLmApO1xuXG4gICAgY29uc3QgdmFsaWRBc3N1bXB0aW9uID0gdGhpcy5maW5kVmFsaWRBc3N1bXB0aW9uKGNvbnRleHQsIG1ldGFMZXZlbCk7XG5cbiAgICBpZiAodmFsaWRBc3N1bXB0aW9uKSB7XG4gICAgICBhc3N1bXB0aW9uID0gdmFsaWRBc3N1bXB0aW9uOyAvLy9cblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIGlzIGFscmVhZHkgdmFsaWQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBjb25zdCByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUmVmZXJlbmNlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChyZWZlcmVuY2VWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZWQgPSBjb250ZXh0LmlzU3RhdGVkKCk7XG5cbiAgICAgICAgICBsZXQgdmFsaWRhdGVzV2hlblN0YXRlZCA9IGZhbHNlLFxuICAgICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgaWYgKHN0YXRlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzV2hlblN0YXRlZCA9IHRoaXMudmFsaWRhdGVXaGVuU3RhdGVkKGNvbnRleHQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRoaXMudmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodmFsaWRhdGVzV2hlblN0YXRlZCB8fCB2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICBhc3N1bXB0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uLCBtZXRhTGV2ZWwpO1xuXG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24uYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICB2YWxpZGF0ZVJlZmVyZW5jZShjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlU3RyaW5nID0gdGhpcy5yZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uJ3MgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZS52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChyZWZlcmVuY2UgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMucmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IGNvbnRleHQuaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVQcmVzZW50KSB7XG4gICAgICAgIHJlZmVyZW5jZVZhbGlkYXRlcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gY29udGV4dC5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHRoaXMucmVmZXJlbmNlKSxcbiAgICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0NvbXBhcmUgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25zLnNvbWUoKHRvcExldmVsTWV0YUFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcblxuICAgICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0NvbXBhcmUpIHtcbiAgICAgICAgICByZWZlcmVuY2VWYWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHJlZmVyZW5jZVZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gdGhpcy5zdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbidzICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVzY2VuZCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24ncyAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlV2hlblN0YXRlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5TdGF0ZWQ7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB2YWxpZGF0ZXNXaGVuU3RhdGVkID0gdHJ1ZVxuXG4gICAgaWYgKHZhbGlkYXRlc1doZW5TdGF0ZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIHN0YXRlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuU3RhdGVkO1xuICB9XG5cbiAgdmFsaWRhdGVXaGVuRGVyaXZlZChjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlc1doZW5EZXJpdmVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGRlcml2ZWQgYXNzdW1wdGlvbi4uLmApO1xuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRoaXMuZ2V0VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKCk7XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICB2YWxpZGF0ZXNXaGVuRGVyaXZlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXN1bXB0aW9uIGRpZCBub3QgdW5pZnkgYSB0b3AgbGV2ZWwgbWV0YS1hc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXNXaGVuRGVyaXZlZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgZGVyaXZlZCBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXNXaGVuRGVyaXZlZDtcbiAgfVxuXG4gIHVuaWZ5QXNzdW1wdGlvbihhc3N1bXB0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGFzc3VtcHRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxBc3N1bXB0aW9uID0gdGhpcywgLy8vXG4gICAgICAgICAgc3BlY2lmaWNBc3N1bXB0aW9uID0gYXNzdW1wdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxBc3N1bXB0aW9uU3RyaW5nID0gZ2VuZXJhbEFzc3VtcHRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNBc3N1bXB0aW9uU3RyaW5nID0gc3BlY2lmaWNBc3N1bXB0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljQXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbEFzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uQ29udGV4dCA9IGFzc3VtcHRpb24uZ2V0Q29udGV4dCgpO1xuXG4gICAgc3BlY2lmaWNDb250ZXh0ID0gYXNzdW1wdGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgYXNzdW1wdGlvblVuaWZpZXMgPSB1bmlmeUFzc3VtcHRpb24oZ2VuZXJhbEFzc3VtcHRpb24sIHNwZWNpZmljQXNzdW1wdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGFzc3VtcHRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAoYXNzdW1wdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljQXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbEFzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBhc3N1bXB0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG5cbiAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5yZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gdGhpcy5zdGF0ZW1lbnQudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uLi4uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkFzc3VtcHRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBhc3N1bXB0aW9uTm9kZSA9IGluc3RhbnRpYXRlQXNzdW1wdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IGFzc3VtcHRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgY29udGV4dCA9IG51bGw7IC8vL1xuXG4gICAgICBjb25zdCBhc3N1bXB0aW9uID0gbmV3IEFzc3VtcHRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCByZWZlcmVuY2UsIHN0YXRlbWVudCk7XG5cbiAgICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVN0YXRlbWVudEFuZFJlZmVyZW5jZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGxldCBhc3N1bXB0aW9uO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb25TdHJpbmcgPSBhc3N1bXB0aW9uU3RyaW5nRnJvbVN0YXRlbWVudEFuZFJlZmVyZW5jZShzdGF0ZW1lbnQsIHJlZmVyZW5jZSksXG4gICAgICAgICAgICBzdHJpbmcgPSBhc3N1bXB0aW9uU3RyaW5nLCAgLy8vXG4gICAgICAgICAgICBhc3N1bXB0aW9uTm9kZSA9IGluc3RhbnRpYXRlQXNzdW1wdGlvbihzdHJpbmcsIGNvbnRleHQpO1xuXG4gICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbkZyb21Bc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgIGFzc3VtcHRpb24uc2V0Q29udGV4dChjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gcmVmZXJlbmNlRnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRNZXRhdmFyaWFibGVOb2RlKGNvbnRleHQpLFxuICAgICAgICByZWZlcmVuY2UgPSBjb250ZXh0LmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgcmV0dXJuIHJlZmVyZW5jZTtcbn1cblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBhc3N1bXB0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIkFzc3VtcHRpb24iLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJyZWZlcmVuY2UiLCJzdGF0ZW1lbnQiLCJnZXRSZWZlcmVuY2UiLCJnZXRTdGF0ZW1lbnQiLCJnZXRBc3N1bXB0aW9uTm9kZSIsImdldE5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImdldE1ldGF2YXJpYWJsZSIsImdldFRvcExldmVsTWV0YUFzc2VydGlvbiIsImlzRXF1YWxUbyIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc3VtcHRpb25Ob2RlIiwiZXF1YWxUbyIsIm5vZGVNYXRjaGVzIiwibWF0Y2hOb2RlIiwiZmluZFZhbGlkQXNzdW1wdGlvbiIsIm1ldGFMZXZlbCIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsInZhbGlkQXNzdW1wdGlvbiIsInZhbGlkYXRlIiwiZ2V0Q29udGV4dCIsImFzc3VtcHRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImRlYnVnIiwidmFsaWRhdGVzIiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJyZWZlcmVuY2VWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVJlZmVyZW5jZSIsInN0YXRlZCIsImlzU3RhdGVkIiwidmFsaWRhdGVzV2hlblN0YXRlZCIsInZhbGlkYXRlc1doZW5EZXJpdmVkIiwidmFsaWRhdGVXaGVuU3RhdGVkIiwidmFsaWRhdGVXaGVuRGVyaXZlZCIsImFkZEFzc3VtcHRpb24iLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zQ29tcGFyZSIsInNvbWUiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJkZXNjZW5kIiwidW5pZnlBc3N1bXB0aW9uIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJhc3N1bXB0aW9uVW5pZmllcyIsImdlbmVyYWxBc3N1bXB0aW9uIiwic3BlY2lmaWNBc3N1bXB0aW9uIiwiZ2VuZXJhbEFzc3VtcHRpb25TdHJpbmciLCJzcGVjaWZpY0Fzc3VtcHRpb25TdHJpbmciLCJhc3N1bXB0aW9uQ29udGV4dCIsImpvaW4iLCJyZWNvbmNpbGUiLCJjb21taXQiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJ0b0pTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZUFzc3VtcHRpb24iLCJyZWZlcmVuY2VGcm9tQXNzdW1wdGlvbk5vZGUiLCJzdGF0ZW1lbnRGcm9tQXNzdW1wdGlvbk5vZGUiLCJmcm9tU3RhdGVtZW50QW5kUmVmZXJlbmNlIiwiYXNzdW1wdGlvblN0cmluZ0Zyb21TdGF0ZW1lbnRBbmRSZWZlcmVuY2UiLCJhc3N1bXB0aW9uRnJvbUFzc3VtcHRpb25Ob2RlIiwic2V0Q29udGV4dCIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsInN0YXRlbWVudE5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHdCOzBCQUVEO3VCQUNTOzZCQUNNO3lCQUNPO3lCQUNTO3dCQUNJO01BRTFELFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsbUJBQW1CQyx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsQ0FBRTtRQUN2RCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7SUFDbkI7SUFFQUMsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDRixTQUFTO0lBQ3ZCO0lBRUFHLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0YsU0FBUztJQUN2QjtJQUVBRyxvQkFBb0I7UUFDbEIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGlCQUFpQlAsTUFBTyxHQUFHO1FBRWpDLE9BQU9PO0lBQ1Q7SUFFQUMsa0JBQWtCO1FBQUUsT0FBTyxJQUFJLENBQUNQLFNBQVMsQ0FBQ08sZUFBZTtJQUFJO0lBRTdEQywyQkFBMkI7UUFBRSxPQUFPLElBQUksQ0FBQ1IsU0FBUyxDQUFDUSx3QkFBd0I7SUFBSTtJQUUvRUMsVUFBVUMsVUFBVSxFQUFFO1FBQ3BCLE1BQU1KLGlCQUFpQkksV0FBV0wsT0FBTyxJQUNuQ00sd0JBQXdCLElBQUksQ0FBQ0MsbUJBQW1CLENBQUNOLGlCQUNqRE8sVUFBVUYsdUJBQXdCLEdBQUc7UUFFM0MsT0FBT0U7SUFD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