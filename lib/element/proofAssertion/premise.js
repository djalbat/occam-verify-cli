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
    constructor(context, string, node, statement, procedureCall){
        super(context, string, node, statement);
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
        (0, _context.attempt)((context)=>{
            const statement = this.getStatement(), procedureCall = this.getProcedureCall();
            if (statement !== null) {
                const statementValidates = this.validateStatement(context);
                if (statementValidates) {
                    context.commit(this);
                    validates = true;
                }
            }
            if (procedureCall !== null) {
                const procedureCallValidates = this.validateProcedureCall(context);
                if (procedureCallValidates) {
                    context.commit(this);
                    validates = true;
                }
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
        const stated = true;
        statement = this.getStatement();
        statement = statement.validate(stated, context); ///
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
        const premiseString = this.getString(), procedureCallString = this.procedureCall.getString();
        context.trace(`Validatting the '${premiseString}' premise's '${procedureCallString}' procedure call...`);
        const procedureCall = this.procedureCall.validate(context);
        if (procedureCall !== null) {
            procedureCallValidates = true;
        }
        if (procedureCallValidates) {
            context.debug(`...validated the '${premiseString}' premise's '${procedureCallString}' procedure call.`);
        }
        return procedureCallValidates;
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
    toJSON() {
        const context = this.getContext();
        return (0, _context.serialise)((context)=>{
            const string = this.getString(), json = {
                context,
                string
            };
            return json;
        }, context);
    }
    static name = "Premise";
    static fromJSON(json, context) {
        let premise;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string } = json, premiseNode = (0, _instantiate.instantiatePremise)(string, context), node = premiseNode, statement = statementFromPremiseNode(premiseNode, context), procedureCall = (0, _element.procedureCallFromPremiseNode)(premiseNode, context);
                premise = new Premise(context, string, node, statement, procedureCall);
            }, context);
        }, json, context);
        return premise;
    }
});
function statementFromPremiseNode(premiseNode, context) {
    const statementNode = premiseNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByZW1pc2UgfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgam9pbiwgYXR0ZW1wdCwgcmVjb25jaWxlLCBzZXJpYWxpc2UsIHVuc2VyaWFsaXNlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUHJlbWlzZSBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJlbWlzZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHByZW1pc2VOb2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gcHJlbWlzZU5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoKHN0YXRlbWVudCAhPT0gbnVsbCkgfHwgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZhbGlkYXRlIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG5cbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvY2VkdXJlQ2FsbFZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuXG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UncyBzdGF0c2VtZW50Li4uIGApO1xuXG4gICAgbGV0IHN0YXRlbWVudDtcblxuICAgIGNvbnN0IHN0YXRlZCA9IHRydWU7XG5cbiAgICBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKHN0YXRlZCwgY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSdzIHN0YXRlbWVudC4gYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlJ3MgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlJ3MgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbkNvbnRleHQgPSBwcm9vZkFzc2VydGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJlbWlzZUNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSwgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBwcmVtaXNlQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gcHJvb2ZBc3NlcnRpb25Db250ZXh0OyAgLy8vXG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSBhd2FpdCBwcm9jZWR1cmVDYWxsLnVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KTtcblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgaW5kZXBlbmRlbmx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgICB9O1xuXG4gICAgICByZXR1cm4ganNvbjtcbiAgICB9LCBjb250ZXh0KTtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcmVtaXNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcHJlbWlzZTtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgcHJlbWlzZU5vZGUgPSBpbnN0YW50aWF0ZVByZW1pc2Uoc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHByZW1pc2VOb2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICBwcmVtaXNlID0gbmV3IFByZW1pc2UoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwganNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcmVtaXNlIiwiUHJvb2ZBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0UHJlbWlzZU5vZGUiLCJnZXROb2RlIiwicHJlbWlzZU5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwicHJlbWlzZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZ2V0U3RhdGVtZW50IiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsImNvbW1pdCIsInByb2NlZHVyZUNhbGxWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVByb2NlZHVyZUNhbGwiLCJzdGF0ZWQiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24iLCJpc1Byb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZiIsInByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5UHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJwcm9vZkFzc2VydGlvbkNvbnRleHQiLCJnZXRDb250ZXh0IiwicHJlbWlzZUNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImpvaW4iLCJyZWNvbmNpbGUiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJzdWJwcm9vZlN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInRvSlNPTiIsInNlcmlhbGlzZSIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJwcmVtaXNlIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlUHJlbWlzZSIsInN0YXRlbWVudEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7dUVBUDJCOzBCQUVKOzZCQUNZO3lCQUNVO3lCQUNpQzs7Ozs7O01BRTlFLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsZ0JBQWdCQyx1QkFBYztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsQ0FBRTtRQUMzRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtJQUN2QjtJQUVBQyxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUNELGFBQWE7SUFDM0I7SUFFQUUsaUJBQWlCO1FBQ2YsTUFBTUosT0FBTyxJQUFJLENBQUNLLE9BQU8sSUFDbkJDLGNBQWNOLE1BQU0sR0FBRztRQUU3QixPQUFPTTtJQUNUO0lBRUEsTUFBTUMsT0FBT1QsT0FBTyxFQUFFO1FBQ3BCLElBQUlVLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDWDtRQUVq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