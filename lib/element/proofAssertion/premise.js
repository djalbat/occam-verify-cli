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
            (0, _context.declare)((context)=>{
                const validates = this.validate(context);
                if (validates) {
                    verifies = true;
                }
            }, context);
        } else {
            context.debug(`Unable to validate the '${premiseString}' premise because it is nonsense.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const premiseString = this.getString(); ///
        context.trace(`Validatting the '${premiseString}' premise...`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByZW1pc2UgfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgZGVjbGFyZSwgYXR0ZW1wdCwgcmVjb25jaWxlLCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJlbWlzZSBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJlbWlzZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByZW1pc2VOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcHJlbWlzZU5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHByZW1pc2VOb2RlID0gdGhpcy5nZXRQcmVtaXNlTm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGZpbmRTdWJwcm9vZkFzc2VydGlvbigpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnQgIT09IG51bGwpIHx8IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSkge1xuICAgICAgZGVjbGFyZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmFsaWRhdGUgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXR0aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvY2VkdXJlQ2FsbFZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlJ3Mgc3RhdHNlbWVudC4uLiBgKTtcblxuICAgIGxldCBzdGF0ZW1lbnQ7XG5cbiAgICBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UncyBzdGF0ZW1lbnQuIGApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVByb2NlZHVyZUNhbGwoY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UncyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IHRoaXMucHJvY2VkdXJlQ2FsbC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSdzIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBhd2FpdCByZWNvbmNpbGUoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJlbWlzZUNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBwcmVtaXNlQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5ID0gc3RhdGVtZW50LnVuaWZ5SW5kZXBlbmRlbnRseShnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSA9IGF3YWl0IHByb2NlZHVyZUNhbGwudW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gdGhpcy5maW5kU3VicHJvb2ZBc3NlcnRpb24oKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJlbWlzZUNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gcHJlbWlzZUNvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3BzZWNmaWljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBzdWJwcm9vZlVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBnZW5lcmFsQ29udGV4dCwgc3BzZWNmaWljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbkNvbnRleHQgPSBwcm9vZkFzc2VydGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJlbWlzZUNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSwgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBwcmVtaXNlQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gcHJvb2ZBc3NlcnRpb25Db250ZXh0OyAgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uO1xuXG4gICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICBpZiAocHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mVW5pZmllcyA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuY29tbWl0KCk7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdHJpbmcsXG4gICAgICAgIGJyZWFrUG9pbnRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlByZW1pc2VcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBwcmVtaXNlO1xuXG4gICAgaW5zdGFudGlhdGUoKGNvbnRleHQpID0+IHtcbiAgICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgICBwcmVtaXNlTm9kZSA9IGluc3RhbnRpYXRlUHJlbWlzZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gcHJlbWlzZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRGcm9tSlNPTihqc29uKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG4gICAgICB9LCBqc29uLCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBwcmVtaXNlTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByZW1pc2UiLCJQcm9vZkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0UHJlbWlzZU5vZGUiLCJnZXROb2RlIiwicHJlbWlzZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImZpbmRTdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Q29udGV4dCIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwicHJlbWlzZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZ2V0U3RhdGVtZW50IiwiZGVjbGFyZSIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZGVidWciLCJhdHRlbXB0Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwidmFsaWRhdGVQcm9jZWR1cmVDYWxsIiwiY29tbWl0IiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJyZWNvbmNpbGUiLCJwcmVtaXNlQ29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJzcHNlY2ZpaWNDb250ZXh0IiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJwcm9vZkFzc2VydGlvbkNvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJwcmVtaXNlIiwiaW5zdGFudGlhdGUiLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlUHJlbWlzZSIsImJyZWFrUG9pbnRGcm9tSlNPTiIsInN0YXRlbWVudEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Ozt1RUFSMkI7MEJBRUo7NkJBQ1k7eUJBQ1U7NEJBQ2tCO3lCQUNrQjs7Ozs7O01BRWpGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsZ0JBQWdCQyx1QkFBYztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxDQUFFO1FBQ3ZFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUM7UUFFekMsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO0lBQ3ZCO0lBRUFDLG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQ0QsYUFBYTtJQUMzQjtJQUVBRSxpQkFBaUI7UUFDZixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsY0FBY1AsTUFBTSxHQUFHO1FBRTdCLE9BQU9PO0lBQ1Q7SUFFQUMsbUJBQW1CO1FBQ2pCLE1BQU1ELGNBQWMsSUFBSSxDQUFDRixjQUFjLElBQ2pDSSxnQkFBZ0JGLFlBQVlDLGdCQUFnQjtRQUVsRCxPQUFPQztJQUNUO0lBRUFDLHdCQUF3QjtRQUN0QixJQUFJQyxvQkFBb0I7UUFFeEIsTUFBTUYsZ0JBQWdCLElBQUksQ0FBQ0QsZ0JBQWdCO1FBRTNDLElBQUlDLGtCQUFrQixNQUFNO1lBQzFCLE1BQU1HLHdCQUF3QkgsY0FBY0ksd0JBQXdCO1lBRXBFLElBQUlELDBCQUEwQixNQUFNO2dCQUNsQyxNQUFNZCxVQUFVLElBQUksQ0FBQ2dCLFVBQVU7Z0JBRS9CSCxvQkFBb0JiLFFBQVFpQiw0QkFBNEIsQ0FBQ0g7WUFDM0Q7UUFD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