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
const _json = require("../../utilities/json");
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
    isStated() {
        const stated = true; ///
        return stated;
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
                    this.setContext(context);
                    validates = true;
                }
            }
            if (procedureCall !== null) {
                const procedureCallValidates = this.validateProcedureCall(context);
                if (procedureCallValidates) {
                    this.setContext(context);
                    validates = true;
                }
            }
        }, context);
        if (validates) {
            context.debug(`...validated the '${premiseString}' premise.`);
        }
        return validates;
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
        const proofAssertionContext = proofAssertion.getContext(), premiseContext = this.getContext(), generalContext = premiseContext, specificContext = proofAssertionContext, statementUnifies = (0, _context.liminally)((specificContext)=>{
            const statement = proofAssertion.getStatement(), statementUnifies = this.unifyStatement(statement, generalContext, specificContext);
            if (statementUnifies) {
                specificContext.commit(context);
                return true;
            }
        }, specificContext);
        if (statementUnifies) {
            proofAssertionUnifies = true;
        }
        if (proofAssertionUnifies) {
            context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${premiseString}' premise.`);
        }
        return proofAssertionUnifies;
    }
    unifySubproof(subproof, context) {
        let subproofUnifies = false;
        const premiseString = this.getString(), subproofString = subproof.getString();
        context.trace(`Unifying the '${subproofString}' subproof with the '${premiseString}' premise...`);
        const specificContext = context; ///
        context = this.getContext();
        const generalContext = context; ///
        context = specificContext; ///
        const statement = this.getStatement();
        if (statement !== null) {
            const statementNode = statement.getNode(), subproofAssertionNode = statementNode.getSubproofAssertionNode();
            if (subproofAssertionNode !== null) {
                const context = generalContext, assertionNode = subproofAssertionNode, assertion = context.findAssertionByAssertionNode(assertionNode);
                if (assertion !== null) {
                    const subproofAssertion = assertion; ///
                    subproofUnifies = subproofAssertion.unifySubproof(subproof, generalContext, specificContext);
                }
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
        let context;
        context = this.getContext();
        const ephemeralContext = context, ephemeralContextJSON = (0, _json.ephemeralContextToEphemeralContextJSON)(ephemeralContext), contextJSON = ephemeralContextJSON; ///
        context = contextJSON; ///
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Premise";
    static fromJSON(json, context) {
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
        context = ephemeralContext; ///
        const premise = (0, _context.literally)((context)=>{
            const { string } = json, premiseNode = (0, _instantiate.instantiatePremise)(string, context), node = premiseNode, statement = statementFromPremiseNode(premiseNode, context), procedureCall = (0, _element.procedureCallFromPremiseNode)(premiseNode, context), premise = new Premise(context, string, node, statement, procedureCall);
            return premise;
        }, context);
        return premise;
    }
});
function statementFromPremiseNode(premiseNode, context) {
    const statementNode = premiseNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByZW1pc2UgfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgYXR0ZW1wdCwgbGltaW5hbGx5LCBsaXRlcmFsbHkgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiwgZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFByZW1pc2UgZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByZW1pc2VOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBwcmVtaXNlTm9kZSA9IG5vZGU7IC8vL1xuXG4gICAgcmV0dXJuIHByZW1pc2VOb2RlO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnQgIT09IG51bGwpIHx8IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2YWxpZGF0ZSB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVQcm9jZWR1cmVDYWxsKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9jZWR1cmVDYWxsKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UncyAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGwgPSB0aGlzLnByb2NlZHVyZUNhbGwudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UncyAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb247XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBwcmVtaXNlQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHByZW1pc2VDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBwcm9vZkFzc2VydGlvbkNvbnRleHQsXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGxpbWluYWxseSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKVxuXG4gICAgICAgIGlmIChhc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlIGluZGVwZW5kZW5seS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc0luZGVwZW5kZW50bHk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IGNvbnRleHQ7XG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgZXBoZW1lcmFsQ29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTihlcGhlbWVyYWxDb250ZXh0KSxcbiAgICAgICAgICBjb250ZXh0SlNPTiA9IGVwaGVtZXJhbENvbnRleHRKU09OOyAvLy9cblxuICAgIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcmVtaXNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3QgcHJlbWlzZSA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBwcmVtaXNlTm9kZSA9IGluc3RhbnRpYXRlUHJlbWlzZShzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHByZW1pc2VOb2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJlbWlzZSA9IG5ldyBQcmVtaXNlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcblxuICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gcHJlbWlzZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJlbWlzZU5vZGUuZ2V0U3RhdGVtZW50Tm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnQgPSBjb250ZXh0LmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgcmV0dXJuIHN0YXRlbWVudDtcbn1cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJQcmVtaXNlIiwiUHJvb2ZBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0UHJlbWlzZU5vZGUiLCJnZXROb2RlIiwicHJlbWlzZU5vZGUiLCJpc1N0YXRlZCIsInN0YXRlZCIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJwcmVtaXNlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJnZXRTdGF0ZW1lbnQiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImRlYnVnIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50Iiwic2V0Q29udGV4dCIsInByb2NlZHVyZUNhbGxWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVByb2NlZHVyZUNhbGwiLCJwcm9jZWR1cmVDYWxsU3RyaW5nIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24iLCJpc1Byb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZiIsInByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5UHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJwcm9vZkFzc2VydGlvbkNvbnRleHQiLCJnZXRDb250ZXh0IiwicHJlbWlzZUNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXMiLCJsaW1pbmFsbHkiLCJ1bmlmeVN0YXRlbWVudCIsImNvbW1pdCIsInN1YnByb29mU3RyaW5nIiwic3RhdGVtZW50Tm9kZSIsInN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb24iLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInRvSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsImVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIiwicHJlbWlzZSIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlUHJlbWlzZSIsInN0YXRlbWVudEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7dUVBUjJCOzBCQUVKOzZCQUNZO3lCQUNVO3lCQUNDO3NCQUNtQzs7Ozs7O01BRWpGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsZ0JBQWdCQyx1QkFBYztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsQ0FBRTtRQUMzRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtJQUN2QjtJQUVBQyxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUNELGFBQWE7SUFDM0I7SUFFQUUsaUJBQWlCO1FB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