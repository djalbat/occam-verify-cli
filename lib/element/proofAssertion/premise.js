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
const _context = require("../../utilities/context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const _default = (0, _elements.define)(class Premise extends _proofAssertion.default {
    constructor(context, string, node, lineIndex, statement, procedureCall){
        super(context, string, node, lineIndex, statement);
        this.procedureCall = procedureCall;
    }
    getProcedureCall() {
        return this.procedureCall;
    }
    getPremiseNode() {
        const node = this.getNode(), premiseNode = node; ///
        return premiseNode;
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
        const statement = this.getStatement(), procedureCall = this.getProcedureCall();
        if (statement !== null) {
            const specificContext = context; ///
            context = this.getContext();
            const generalContext = context; ///
            context = specificContext; ///
            const statementUnifiesIndependently = statement.unifyIndependently(generalContext, specificContext);
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
        if (unifiesIndependently) {
            context.debug(`...unified the '${premiseString}' premise independenly.`);
        }
        return unifiesIndependently;
    }
    unifySubproofOrProofAssertion(subproofOrProofAssertion, context) {
        let subproofOrProofAssertionUnifies;
        const premiseString = this.getString(), subproofOrProofAssertionString = subproofOrProofAssertion.getString();
        context.trace(`Unifying the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${premiseString}' premise...`);
        const subproofOrProofAssertionProofAssertion = subproofOrProofAssertion.isProofAssertion(), proofAssertion = subproofOrProofAssertionProofAssertion ? subproofOrProofAssertion : null, subproof = subproofOrProofAssertionProofAssertion ? null : subproofOrProofAssertion;
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
            context.debug(`...unified the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${premiseString}' premise.`);
        }
        return subproofOrProofAssertionUnifies;
    }
    unifyProofAssertion(proofAssertion, context) {
        let proofAssertionUnifies = false;
        const premiseString = this.getString(), proofAssertionString = proofAssertion.getString();
        context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${premiseString}' premise...`);
        const proofAssertionContext = proofAssertion.getContext(), premiseContext = this.getContext(), generalContext = premiseContext, specificContext = proofAssertionContext; ///
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                const statement = proofAssertion.getStatement(), statementUnifies = this.unifyStatement(statement, generalContext, specificContext);
                if (statementUnifies) {
                    specificContext.commit(context);
                    proofAssertionUnifies = true;
                }
            }, specificContext);
        }, specificContext, context);
        if (proofAssertionUnifies) {
            context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${premiseString}' premise.`);
        }
        return proofAssertionUnifies;
    }
    unifySubproof(subproof, context) {
        let subproofUnifies = false;
        const premiseString = this.getString(), subproofString = subproof.getString();
        context.trace(`Unifying the '${subproofString}' subproof with the '${premiseString}' premise...`);
        const statement = this.getStatement();
        if (statement !== null) {
            const statementNode = statement.getNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode();
            if (subproofAssertionNode !== null) {
                const specificContext = context; ///
                context = this.getContext();
                const generalContext = context, subproofAssertion = context.findAssertionByAssertionNode(subproofAssertionNode);
                context = specificContext; ///
                subproofUnifies = subproofAssertion.unifySubproof(subproof, generalContext, specificContext);
            }
        }
        if (subproofUnifies) {
            context.debug(`...unified the '${subproofString}' subproof with the '${premiseString}' premise.`);
        }
        return subproofUnifies;
    }
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString(), lineIndex = this.getBreakPoint(), json = {
                context,
                string,
                lineIndex
            };
            return json;
        }, context);
    }
    static name = "Premise";
    static fromJSON(json, context) {
        let premise;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, premiseNode = (0, _instantiate.instantiatePremise)(string, context), node = premiseNode, statement = statementFromPremiseNode(premiseNode, context), procedureCall = (0, _element.procedureCallFromPremiseNode)(premiseNode, context);
                premise = new Premise(context, string, node, lineIndex, statement, procedureCall);
            }, context);
        }, json, context);
        return premise;
    }
});
function statementFromPremiseNode(premiseNode, context) {
    const statementNode = premiseNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByZW1pc2UgfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgam9pbiwgZGVjbGFyZSwgYXR0ZW1wdCwgcmVjb25jaWxlLCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJlbWlzZSBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByZW1pc2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcmVtaXNlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByZW1pc2VOb2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnQgIT09IG51bGwpIHx8IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2YWxpZGF0ZSB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBkZWNsYXJlKChjb250ZXh0KSA9PiB7XG4gICAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVByb2NlZHVyZUNhbGwoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvY2VkdXJlQ2FsbFZhbGlkYXRlcykge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5jb21taXQoY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UncyBzdGF0c2VtZW50Li4uIGApO1xuXG4gICAgbGV0IHN0YXRlbWVudDtcblxuICAgIHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSdzIHN0YXRlbWVudC4gYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXR0aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSdzIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlJ3MgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW5seS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb247XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcmVtaXNlQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHByZW1pc2VDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBwcm9vZkFzc2VydGlvbkNvbnRleHQ7ICAvLy9cblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldEJyZWFrUG9pbnQoKSxcbiAgICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgICAgbGluZUluZGV4XG4gICAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcmVtaXNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcHJlbWlzZTtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICBwcmVtaXNlTm9kZSA9IGluc3RhbnRpYXRlUHJlbWlzZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gcHJlbWlzZU5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHByZW1pc2UgPSBuZXcgUHJlbWlzZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByZW1pc2VOb2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiUHJlbWlzZSIsIlByb29mQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldFByZW1pc2VOb2RlIiwiZ2V0Tm9kZSIsInByZW1pc2VOb2RlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsInByZW1pc2VTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImdldFN0YXRlbWVudCIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZGVidWciLCJkZWNsYXJlIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyIsInZhbGlkYXRlUHJvY2VkdXJlQ2FsbCIsImNvbW1pdCIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5Iiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24iLCJpc1Byb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZiIsInByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5UHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJwcm9vZkFzc2VydGlvbkNvbnRleHQiLCJwcmVtaXNlQ29udGV4dCIsImpvaW4iLCJyZWNvbmNpbGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJwcm9vZlN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsInByZW1pc2UiLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVQcmVtaXNlIiwic3RhdGVtZW50RnJvbVByZW1pc2VOb2RlIiwicHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFTQTs7O2VBQUE7Ozt1RUFQMkI7MEJBRUo7NkJBQ1k7eUJBQ1U7eUJBQzBDOzs7Ozs7TUFFdkYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxnQkFBZ0JDLHVCQUFjO0lBQ3hELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLENBQUU7UUFDdEUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQyxXQUFXQztRQUV4QyxJQUFJLENBQUNDLGFBQWEsR0FBR0E7SUFDdkI7SUFFQUMsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDRCxhQUFhO0lBQzNCO0lBRUFFLGlCQUFpQjtRQUNmLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxjQUFjUCxNQUFNLEdBQUc7UUFFN0IsT0FBT087SUFDVDtJQUVBLE1BQU1DLE9BQU9WLE9BQU8sRUFBRTtRQUNwQixJQUFJVyxXQUFXO1FBRWYsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ1o7UUFFakIsTUFBTWEsZ0JBQWdCLElBQUksQ0FBQ0MsU0FBUztRQUVwQ2QsUUFBUWUsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRixjQUFjLFlBQVksQ0FBQztRQUUzRCxNQUFNVCxZQUFZLElBQUksQ0FBQ1ksWUFBWSxJQUM3QlgsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO1FBRTNDLElBQUksQUFBQ0YsY0FBYyxRQUFVQyxrQkFBa0IsTUFBTztZQUNwRCxNQUFNWSxZQUFZLElBQUksQ0FBQ0MsUUFBUSxDQUFDbEI7WUFFaEMsSUFBSWlCLFdBQVc7Z0JBQ2JOLFdBQVc7WUFDYjtRQUNGLE9BQU87WUFDTFgsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLHdCQUF3QixFQUFFTixjQUFjLGlDQUFpQyxDQUFDO1FBQzNGO1FBRUEsT0FBT0Y7SUFDVDtJQUVBTyxTQUFTbEIsT0FBTyxFQUFFO1FBQ2hCLElBQUlpQixZQUFZO1FBRWhCLE1BQU1KLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTNDZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUYsY0FBYyxZQUFZLENBQUM7UUFFN0RPLElBQUFBLGdCQUFPLEVBQUMsQ0FBQ3BCO1lBQ1BxQixJQUFBQSxnQkFBTyxFQUFDLENBQUNyQjtnQkFDUCxNQUFNSSxZQUFZLElBQUksQ0FBQ1ksWUFBWSxJQUM3QlgsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO2dCQUUzQyxJQUFJRixjQUFjLE1BQU07b0JBQ3RCLE1BQU1rQixxQkFBcUIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ3ZCO29CQUVsRCxJQUFJc0Isb0JBQW9CO3dCQUN0QkwsWUFBWTtvQkFDZDtnQkFDRjtnQkFFQSxJQUFJWixrQkFBa0IsTUFBTTtvQkFDMUIsTUFBTW1CLHlCQUF5QixJQUFJLENBQUNDLHFCQUFxQixDQUFDekI7b0JBRTFELElBQUl3Qix3QkFBd0I7d0JBQzFCUCxZQUFZO29CQUNkO2dCQUNGO2dCQUVBLElBQUlBLFdBQVc7b0JBQ2IsSUFBSSxDQUFDUyxNQUFNLENBQUMxQjtnQkFDZDtZQUNGLEdBQUdBO1FBQ0wsR0FBR0E7UUFFSCxJQUFJaUIsV0FBVztZQUNiakIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTixjQUFjLFVBQVUsQ0FBQztRQUM5RDtRQUVBLE9BQU9JO0lBQ1Q7SUFFQU0sa0JBQWtCdkIsT0FBTyxFQUFFO1FBQ3pCLElBQUlzQixxQkFBcUI7UUFFekIsTUFBTVQsZ0JBQWdCLElBQUksQ0FBQ0MsU0FBUztRQUVwQ2QsUUFBUWUsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVGLGNBQWMsMEJBQTBCLENBQUM7UUFFMUUsSUFBSVQ7UUFFSkEsWUFBWSxJQUFJLENBQUNZLFlBQVk7UUFFN0JaLFlBQVlBLFVBQVVjLFFBQVEsQ0FBQ2xCLFVBQVcsR0FBRztRQUU3QyxJQUFJSSxjQUFjLE1BQU07WUFDdEJrQixxQkFBcUI7UUFDdkI7UUFFQSxJQUFJQSxvQkFBb0I7WUFDdEJ0QixRQUFRbUIsS0FBSyxDQUFDLENBQUMsa0JBQWtCLEVBQUVOLGNBQWMsdUJBQXVCLENBQUM7UUFDM0U7UUFFQSxPQUFPUztJQUNUO0lBRUFHLHNCQUFzQnpCLE9BQU8sRUFBRTtRQUM3QixJQUFJd0IseUJBQXlCO1FBRTdCLE1BQU1YLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTNDZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRUYsY0FBYyw2QkFBNkIsQ0FBQztRQUU5RSxNQUFNUixnQkFBZ0IsSUFBSSxDQUFDQSxhQUFhLENBQUNhLFFBQVEsQ0FBQ2xCO1FBRWxELElBQUlLLGtCQUFrQixNQUFNO1lBQzFCbUIseUJBQXlCO1FBQzNCO1FBRUEsSUFBSUEsd0JBQXdCO1lBQzFCeEIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTixjQUFjLDJCQUEyQixDQUFDO1FBQy9FO1FBRUEsT0FBT1c7SUFDVDtJQUVBLE1BQU1HLG1CQUFtQjNCLE9BQU8sRUFBRTtRQUNoQyxJQUFJNEIsdUJBQXVCO1FBRTNCLE1BQU1mLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRTNDZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVGLGNBQWMsMEJBQTBCLENBQUM7UUFFeEUsTUFBTVQsWUFBWSxJQUFJLENBQUNZLFlBQVksSUFDN0JYLGdCQUFnQixJQUFJLENBQUNDLGdCQUFnQjtRQUUzQyxJQUFJRixjQUFjLE1BQU07WUFDdEIsTUFBTXlCLGtCQUFrQjdCLFNBQVUsR0FBRztZQUVyQ0EsVUFBVSxJQUFJLENBQUM4QixVQUFVO1lBRXpCLE1BQU1DLGlCQUFpQi9CLFNBQVMsR0FBRztZQUVuQ0EsVUFBVTZCLGlCQUFrQixHQUFHO1lBRS9CLE1BQU1HLGdDQUFnQzVCLFVBQVV1QixrQkFBa0IsQ0FBQ0ksZ0JBQWdCRjtZQUVuRixJQUFJRywrQkFBK0I7Z0JBQ2pDSix1QkFBdUI7WUFDekI7UUFDRjtRQUVBLElBQUl2QixrQkFBa0IsTUFBTTtZQUMxQixNQUFNNEIscUNBQXFDLE1BQU01QixjQUFjc0Isa0JBQWtCLENBQUMzQjtZQUVsRixJQUFJaUMsb0NBQW9DO2dCQUN0Q0wsdUJBQXVCO1lBQ3pCO1FBQ0Y7UUFFQSxJQUFJQSxzQkFBc0I7WUFDeEI1QixRQUFRbUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVOLGNBQWMsdUJBQXVCLENBQUM7UUFDekU7UUFFQSxPQUFPZTtJQUNUO0lBRUFNLDhCQUE4QkMsd0JBQXdCLEVBQUVuQyxPQUFPLEVBQUU7UUFDL0QsSUFBSW9DO1FBRUosTUFBTXZCLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFDOUJ1QixpQ0FBaUNGLHlCQUF5QnJCLFNBQVM7UUFFekVkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRXNCLCtCQUErQix3Q0FBd0MsRUFBRXhCLGNBQWMsWUFBWSxDQUFDO1FBRW5JLE1BQU15Qix5Q0FBeUNILHlCQUF5QkksZ0JBQWdCLElBQ3pDQyxpQkFBaUJGLHlDQUNFSCwyQkFDRSxNQUNyQk0sV0FBV0gseUNBQ0csT0FDRUg7UUFFL0QsSUFBSUssbUJBQW1CLE1BQU07WUFDM0IsTUFBTUUsd0JBQXdCLElBQUksQ0FBQ0MsbUJBQW1CLENBQUNILGdCQUFnQnhDO1lBRXZFLElBQUkwQyx1QkFBdUI7Z0JBQ3pCTixrQ0FBa0M7WUFDcEM7UUFDRjtRQUVBLElBQUlLLGFBQWEsTUFBTTtZQUNyQixNQUFNRyxrQkFBa0IsSUFBSSxDQUFDQyxhQUFhLENBQUNKLFVBQVV6QztZQUVyRCxJQUFJNEMsaUJBQWlCO2dCQUNuQlIsa0NBQWtDO1lBQ3BDO1FBQ0Y7UUFFQSxJQUFJQSxpQ0FBaUM7WUFDbkNwQyxRQUFRbUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVrQiwrQkFBK0Isd0NBQXdDLEVBQUV4QixjQUFjLFVBQVUsQ0FBQztRQUNySTtRQUVBLE9BQU91QjtJQUNUO0lBRUFPLG9CQUFvQkgsY0FBYyxFQUFFeEMsT0FBTyxFQUFFO1FBQzNDLElBQUkwQyx3QkFBd0I7UUFFNUIsTUFBTTdCLGdCQUFnQixJQUFJLENBQUNDLFNBQVMsSUFDOUJnQyx1QkFBdUJOLGVBQWUxQixTQUFTO1FBRXJEZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUUrQixxQkFBcUIsNEJBQTRCLEVBQUVqQyxjQUFjLFlBQVksQ0FBQztRQUU3RyxNQUFNa0Msd0JBQXdCUCxlQUFlVixVQUFVLElBQ2pEa0IsaUJBQWlCLElBQUksQ0FBQ2xCLFVBQVUsSUFDaENDLGlCQUFpQmlCLGdCQUNqQm5CLGtCQUFrQmtCLHVCQUF3QixHQUFHO1FBRW5ERSxJQUFBQSxhQUFJLEVBQUMsQ0FBQ3BCO1lBQ0pxQixJQUFBQSxrQkFBUyxFQUFDLENBQUNyQjtnQkFDVCxNQUFNekIsWUFBWW9DLGVBQWV4QixZQUFZLElBQ3ZDbUMsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDaEQsV0FBVzJCLGdCQUFnQkY7Z0JBRXhFLElBQUlzQixrQkFBa0I7b0JBQ3BCdEIsZ0JBQWdCSCxNQUFNLENBQUMxQjtvQkFFdkIwQyx3QkFBd0I7Z0JBQzFCO1lBQ0YsR0FBR2I7UUFDTCxHQUFHQSxpQkFBaUI3QjtRQUVwQixJQUFJMEMsdUJBQXVCO1lBQ3pCMUMsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFMkIscUJBQXFCLDRCQUE0QixFQUFFakMsY0FBYyxVQUFVLENBQUM7UUFDL0c7UUFFQSxPQUFPNkI7SUFDVDtJQUVBRyxjQUFjSixRQUFRLEVBQUV6QyxPQUFPLEVBQUU7UUFDL0IsSUFBSTRDLGtCQUFrQjtRQUV0QixNQUFNL0IsZ0JBQWdCLElBQUksQ0FBQ0MsU0FBUyxJQUM5QnVDLGlCQUFpQlosU0FBUzNCLFNBQVM7UUFFekNkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRXNDLGVBQWUscUJBQXFCLEVBQUV4QyxjQUFjLFlBQVksQ0FBQztRQUVoRyxNQUFNVCxZQUFZLElBQUksQ0FBQ1ksWUFBWTtRQUVuQyxJQUFJWixjQUFjLE1BQU07WUFDdEIsTUFBTWtELGdCQUFnQmxELFVBQVVJLE9BQU8sSUFDakMrQyx3QkFBd0JELGNBQWNFLHdCQUF3QjtZQUVwRSxJQUFJRCwwQkFBMEIsTUFBTTtnQkFDbEMsTUFBTTFCLGtCQUFrQjdCLFNBQVUsR0FBRztnQkFFckNBLFVBQVUsSUFBSSxDQUFDOEIsVUFBVTtnQkFFekIsTUFBTUMsaUJBQWlCL0IsU0FDakJ5RCxvQkFBb0J6RCxRQUFRMEQsNEJBQTRCLENBQUNIO2dCQUUvRHZELFVBQVU2QixpQkFBa0IsR0FBRztnQkFFL0JlLGtCQUFrQmEsa0JBQWtCWixhQUFhLENBQUNKLFVBQVVWLGdCQUFnQkY7WUFDOUU7UUFDRjtRQUVBLElBQUllLGlCQUFpQjtZQUNuQjVDLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRWtDLGVBQWUscUJBQXFCLEVBQUV4QyxjQUFjLFVBQVUsQ0FBQztRQUNsRztRQUVBLE9BQU8rQjtJQUNUO0lBRUFlLFNBQVM7UUFDUCxNQUFNM0QsVUFBVSxJQUFJLENBQUM4QixVQUFVO1FBRS9CLE9BQU84QixJQUFBQSxrQkFBUyxFQUFDLENBQUM1RDtZQUNoQixNQUFNQyxTQUFTLElBQUksQ0FBQ2EsU0FBUyxJQUN2QlgsWUFBWSxJQUFJLENBQUMwRCxhQUFhLElBQzlCQyxPQUFPO2dCQUNMOUQ7Z0JBQ0FDO2dCQUNBRTtZQUNGO1lBRU4sT0FBTzJEO1FBQ1QsR0FBRzlEO0lBQ0w7SUFFQSxPQUFPK0QsT0FBTyxVQUFVO0lBRXhCLE9BQU9DLFNBQVNGLElBQUksRUFBRTlELE9BQU8sRUFBRTtRQUM3QixJQUFJaUU7UUFFSkMsSUFBQUEsb0JBQVcsRUFBQyxDQUFDSixNQUFNOUQ7WUFDakJtRSxJQUFBQSxvQkFBVyxFQUFDLENBQUNuRTtnQkFDWCxNQUFNLEVBQUVDLE1BQU0sRUFBRUUsU0FBUyxFQUFFLEdBQUcyRCxNQUN4QnJELGNBQWMyRCxJQUFBQSwrQkFBa0IsRUFBQ25FLFFBQVFELFVBQ3pDRSxPQUFPTyxhQUNQTCxZQUFZaUUseUJBQXlCNUQsYUFBYVQsVUFDbERLLGdCQUFnQmlFLElBQUFBLHFDQUE0QixFQUFDN0QsYUFBYVQ7Z0JBRWhFaUUsVUFBVSxJQUFJbkUsUUFBUUUsU0FBU0MsUUFBUUMsTUFBTUMsV0FBV0MsV0FBV0M7WUFDckUsR0FBR0w7UUFDTCxHQUFHOEQsTUFBTTlEO1FBRVQsT0FBT2lFO0lBQ1Q7QUFDRjtBQUVBLFNBQVNJLHlCQUF5QjVELFdBQVcsRUFBRVQsT0FBTztJQUNwRCxNQUFNc0QsZ0JBQWdCN0MsWUFBWThELGdCQUFnQixJQUM1Q25FLFlBQVlKLFFBQVF3RSw0QkFBNEIsQ0FBQ2xCO0lBRXZELE9BQU9sRDtBQUNUIn0=