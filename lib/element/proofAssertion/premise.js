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
const _proofAssertion = /*#__PURE__*/ _interop_require_default(require("../proofAssertion"));
const _elements = require("../../elements");
const _instantiate = require("../../process/instantiate");
const _element = require("../../utilities/element");
const _breakPoint = require("../../utilities/breakPoint");
const _context = require("../../utilities/context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class Premise extends _proofAssertion.default {
    constructor(context, string, node, breakPoint, statement, procedureCall){
        super(context, string, node, breakPoint, statement);
        this.procedureCall = procedureCall;
    }
    getProcedureCall() {
        return this.procedureCall;
    }
    getPremiseNode() {
        const node = this.getNode(), premiseNode = node; ///
        return premiseNode;
    }
    getStatementNode() {
        const premiseNode = this.getPremiseNode(), statementNode = premiseNode.getStatementNode();
        return statementNode;
    }
    findSubproofAssertion() {
        let subproofAssertion = null;
        const statementNode = this.getStatementNode();
        if (statementNode !== null) {
            const subproofAssertionNode = statementNode.getSubproofAssertionNode();
            if (subproofAssertionNode !== null) {
                const context = this.getContext();
                subproofAssertion = context.findAssertionByAssertionNode(subproofAssertionNode);
            }
        }
        return subproofAssertion;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const premiseString = this.getString();
        context.trace(`Verifying the '${premiseString}' premise...`);
        const statement = this.getStatement(), procedureCall = this.getProcedureCall();
        if (statement !== null || procedureCall !== null) {
            const validates = this.validate(context);
            if (validates) {
                verifies = true;
            }
        } else {
            context.debug(`Unable to validate the '${premiseString}' premise because it is nonsense.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const premiseString = this.getString(); ///
        context.trace(`Validatting the '${premiseString}' premise...`);
        (0, _context.declare)((context)=>{
            (0, _context.attempt)((context)=>{
                const statement = this.getStatement(), procedureCall = this.getProcedureCall();
                if (statement !== null) {
                    const statementValidates = this.validateStatement(context);
                    if (statementValidates) {
                        validates = true;
                    }
                }
                if (procedureCall !== null) {
                    const procedureCallValidates = this.validateProcedureCall(context);
                    if (procedureCallValidates) {
                        validates = true;
                    }
                }
                if (validates) {
                    this.commit(context);
                }
            }, context);
        }, context);
        if (validates) {
            context.debug(`...validated the '${premiseString}' premise.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates = false;
        const premiseString = this.getString();
        context.trace(`Validating the '${premiseString}' premise's statsement... `);
        let statement;
        statement = this.getStatement();
        statement = statement.validate(context); ///
        if (statement !== null) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.debug(`...validated the '${premiseString}' premise's statement. `);
        }
        return statementValidates;
    }
    validateProcedureCall(context) {
        let procedureCallValidates = false;
        const premiseString = this.getString(); ///
        context.trace(`Validatting the '${premiseString}' premise's procedure call...`);
        const procedureCall = this.procedureCall.validate(context);
        if (procedureCall !== null) {
            procedureCallValidates = true;
        }
        if (procedureCallValidates) {
            context.debug(`...validated the '${premiseString}' premise's procedure call.`);
        }
        return procedureCallValidates;
    }
    async unifyIndependently(context) {
        let unifiesIndependently = false;
        const premiseString = this.getString(); ///
        context.trace(`Unifying the '${premiseString}' premise independently...`);
        await (0, _context.reconcile)(async (context)=>{
            const statement = this.getStatement(), procedureCall = this.getProcedureCall();
            if (statement !== null) {
                const premiseContext = this.getContext(), generalContext = premiseContext, specificContext = context, statementUnifiesIndependently = statement.unifyIndependently(generalContext, specificContext);
                if (statementUnifiesIndependently) {
                    unifiesIndependently = true;
                }
            }
            if (procedureCall !== null) {
                const procedureCallResolvedIndependently = await procedureCall.unifyIndependently(context);
                if (procedureCallResolvedIndependently) {
                    unifiesIndependently = true;
                }
            }
        }, context);
        if (unifiesIndependently) {
            context.debug(`...unified the '${premiseString}' premise independently.`);
        }
        return unifiesIndependently;
    }
    unifySubproof(subproof, context) {
        let subproofUnifies = false;
        const premiseString = this.getString(), subproofString = subproof.getString();
        context.trace(`Unifying the '${subproofString}' subproof with the '${premiseString}' premise...`);
        const subproofAssertion = this.findSubproofAssertion();
        if (subproofAssertion !== null) {
            const premiseContext = this.getContext(), generalContext = premiseContext, spsecfiicContext = context; ///
            subproofUnifies = subproofAssertion.unifySubproof(subproof, generalContext, spsecfiicContext);
        }
        if (subproofUnifies) {
            context.debug(`...unified the '${subproofString}' subproof with the '${premiseString}' premise.`);
        }
        return subproofUnifies;
    }
    unifyProofAssertion(proofAssertion, context) {
        let proofAssertionUnifies = false;
        const premiseString = this.getString(), proofAssertionString = proofAssertion.getString();
        context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${premiseString}' premise...`);
        const proofAssertionContext = proofAssertion.getContext(), premiseContext = this.getContext(), generalContext = premiseContext, specificContext = proofAssertionContext; ///
        (0, _context.reconcile)((specificContext)=>{
            const statement = proofAssertion.getStatement(), statementUnifies = this.unifyStatement(statement, generalContext, specificContext);
            if (statementUnifies) {
                specificContext.commit(context);
                proofAssertionUnifies = true;
            }
        }, specificContext);
        if (proofAssertionUnifies) {
            context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${premiseString}' premise.`);
        }
        return proofAssertionUnifies;
    }
    unifySubproofOrProofAssertion(subproofOrProofAssertion, context) {
        let subproofOrProofAssertionUnifies;
        const premiseString = this.getString(), subproofOrProofAssertionString = subproofOrProofAssertion.getString();
        context.trace(`Unifying the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${premiseString}' premise...`);
        const subproofOrProofAssertionProofAssertion = subproofOrProofAssertion.isProofAssertion(), proofAssertion = subproofOrProofAssertionProofAssertion ? subproofOrProofAssertion : null, subproof = subproofOrProofAssertionProofAssertion ? null : subproofOrProofAssertion;
        (0, _context.reconcile)((context)=>{
            if (proofAssertion !== null) {
                const proofAssertionUnifies = this.unifyProofAssertion(proofAssertion, context);
                if (proofAssertionUnifies) {
                    subproofOrProofAssertionUnifies = true;
                }
            }
            if (subproof !== null) {
                const subproofUnifies = this.unifySubproof(subproof, context);
                if (subproofUnifies) {
                    subproofOrProofAssertionUnifies = true;
                }
            }
            if (subproofOrProofAssertionUnifies) {
                context.commit();
            }
        }, context);
        if (subproofOrProofAssertionUnifies) {
            context.debug(`...unified the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${premiseString}' premise.`);
        }
        return subproofOrProofAssertionUnifies;
    }
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString();
            let breakPoint;
            breakPoint = this.getBreakPoint();
            const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
            breakPoint = breakPointJSON; ///
            const json = {
                context,
                string,
                breakPoint
            };
            return json;
        }, context);
    }
    static name = "Premise";
    static fromJSON(json, context) {
        let premise;
        (0, _context.instantiate)((context)=>{
            (0, _context.unserialise)((json, context)=>{
                const { string } = json, premiseNode = (0, _instantiate.instantiatePremise)(string, context), node = premiseNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), statement = statementFromPremiseNode(premiseNode, context), procedureCall = (0, _element.procedureCallFromPremiseNode)(premiseNode, context);
                premise = new Premise(context, string, node, breakPoint, statement, procedureCall);
            }, json, context);
        }, context);
        return premise;
    }
});
function statementFromPremiseNode(premiseNode, context) {
    const statementNode = premiseNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByZW1pc2UgfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgZGVjbGFyZSwgYXR0ZW1wdCwgcmVjb25jaWxlLCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJlbWlzZSBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJlbWlzZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByZW1pc2VOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcHJlbWlzZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHByZW1pc2VOb2RlID0gdGhpcy5nZXRQcmVtaXNlTm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGZpbmRTdWJwcm9vZkFzc2VydGlvbigpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnQgIT09IG51bGwpIHx8IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2YWxpZGF0ZSB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBkZWNsYXJlKChjb250ZXh0KSA9PiB7XG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVByb2NlZHVyZUNhbGwoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvY2VkdXJlQ2FsbFZhbGlkYXRlcykge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UncyBzdGF0c2VtZW50Li4uIGApO1xuXG4gICAgbGV0IHN0YXRlbWVudDtcblxuICAgIHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSdzIHN0YXRlbWVudC4gYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXR0aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSdzIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlJ3MgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGF3YWl0IHJlY29uY2lsZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcmVtaXNlQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHByZW1pc2VDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgaW5kZXBlbmRlbnRseS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSB0aGlzLmZpbmRTdWJwcm9vZkFzc2VydGlvbigpO1xuXG4gICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcmVtaXNlQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBwcmVtaXNlQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzcHNlY2ZpaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGdlbmVyYWxDb250ZXh0LCBzcHNlY2ZpaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcmVtaXNlQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHByZW1pc2VDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBwcm9vZkFzc2VydGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmlzUHJvb2ZBc3NlcnRpb24oKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb247XG5cbiAgICByZWNvbmNpbGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGlmIChwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5jb21taXQoKTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgYnJlYWtQb2ludFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUHJlbWlzZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByZW1pc2U7XG5cbiAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHByZW1pc2VOb2RlID0gaW5zdGFudGlhdGVQcmVtaXNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBwcmVtaXNlTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcbiAgICAgIH0sIGpzb24sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VOb2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJlbWlzZSIsIlByb29mQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50Iiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFByb2NlZHVyZUNhbGwiLCJnZXRQcmVtaXNlTm9kZSIsImdldE5vZGUiLCJwcmVtaXNlTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZmluZFN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRDb250ZXh0IiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJwcmVtaXNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJnZXRTdGF0ZW1lbnQiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImRlYnVnIiwiZGVjbGFyZSIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInByb2NlZHVyZUNhbGxWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVByb2NlZHVyZUNhbGwiLCJjb21taXQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInJlY29uY2lsZSIsInByZW1pc2VDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsInNwc2VjZmlpY0NvbnRleHQiLCJ1bmlmeVByb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvblVuaWZpZXMiLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uIiwiaXNQcm9vZkFzc2VydGlvbiIsInRvSlNPTiIsInNlcmlhbGlzZSIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsInByZW1pc2UiLCJpbnN0YW50aWF0ZSIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGVQcmVtaXNlIiwiYnJlYWtQb2ludEZyb21KU09OIiwic3RhdGVtZW50RnJvbVByZW1pc2VOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7O3VFQVIyQjswQkFFSjs2QkFDWTt5QkFDVTs0QkFDa0I7eUJBQ2tCOzs7Ozs7TUFFakYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxnQkFBZ0JDLHVCQUFjO0lBQ3hELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLENBQUU7UUFDdkUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQyxZQUFZQztRQUV6QyxJQUFJLENBQUNDLGFBQWEsR0FBR0E7SUFDdkI7SUFFQUMsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDRCxhQUFhO0lBQzNCO0lBRUFFLGlCQUFpQjtRQUNmLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxjQUFjUCxNQUFNLEdBQUc7UUFFN0IsT0FBT087SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUQsY0FBYyxJQUFJLENBQUNGLGNBQWMsSUFDakNJLGdCQUFnQkYsWUFBWUMsZ0JBQWdCO1FBRWxELE9BQU9DO0lBQ1Q7SUFFQUMsd0JBQXdCO1FBQ3RCLElBQUlDLG9CQUFvQjtRQUV4QixNQUFNRixnQkFBZ0IsSUFBSSxDQUFDRCxnQkFBZ0I7UUFFM0MsSUFBSUMsa0JBQWtCLE1BQU07WUFDMUIsTUFBTUcsd0JBQXdCSCxjQUFjSSx3QkFBd0I7WUFFcEUsSUFBSUQsMEJBQTBCLE1BQU07Z0JBQ2xDLE1BQU1kLFVBQVUsSUFBSSxDQUFDZ0IsVUFBVTtnQkFFL0JILG9CQUFvQmIsUUFB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