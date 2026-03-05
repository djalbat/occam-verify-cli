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
const _json = require("../../utilities/json");
const _context = require("../../utilities/context");
const _element = require("../../utilities/element");
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
        (0, _context.attempt)((context)=>{
            const validates = this.validate(context);
            if (validates) {
                this.setContext(context);
                verifies = true;
            }
        }, context);
        if (verifies) {
            context.debug(`...verified the '${premiseString}' premise.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const premiseString = this.getString(); ///
        context.trace(`Validatting the '${premiseString}' premise...`);
        const statement = this.getStatement(), procedureCall = this.getProcedureCall();
        if (false) {
        ///
        } else if (statement !== null) {
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                validates = true;
            }
        } else if (procedureCall !== null) {
            const procedureCallValidates = this.validateProcedureCall(context);
            if (procedureCallValidates) {
                validates = true;
            }
        } else {
            context.debug(`Unable to validate the '${premiseString}' premise because it is nonsense.`);
        }
        if (validates) {
            context.debug(`...validated the '${premiseString}' premise.`);
        }
        return validates;
    }
    validateProcedureCall(context) {
        let procedureCallValidates = false;
        const premiseString = this.getString(), procedureCallString = this.procedureCall.getString();
        context.trace(`Validatting the '${premiseString}' premise's '${procedureCallString}' procedure call...`);
        procedureCallValidates = this.procedureCall.validate(context);
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
        let proofAssertionUnifies;
        const premiseString = this.getString(), proofAssertionString = proofAssertion.getString();
        context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${premiseString}' premise...`);
        const proofAssertionContext = proofAssertion.getContext(), premiseContext = this.getContext(), generalContext = premiseContext, specificContext = proofAssertionContext; ///
        proofAssertionUnifies = (0, _context.liminally)((specificContext)=>{
            const statement = proofAssertion.getStatement(), statementUnifies = this.unifyStatement(statement, generalContext, specificContext);
            if (statementUnifies) {
                specificContext.commit(context);
                return true;
            }
        }, specificContext);
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
        const contextJSON = context.toJSON();
        context = contextJSON; ///
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Premise";
    static fromJSON(json, context) {
        const premise = (0, _context.literally)((context)=>{
            const { string } = json, premiseNode = (0, _instantiate.instantiatePremise)(string, context), node = premiseNode, statement = (0, _element.statementFromPremiseNode)(premiseNode, context), procedureCall = (0, _element.procedureCallFromPremiseNode)(premiseNode, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const premise = new Premise(context, string, node, statement, procedureCall);
            return premise;
        }, context);
        return premise;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3ByZW1pc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9vZkFzc2VydGlvbiBmcm9tIFwiLi4vcHJvb2ZBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBpbnN0YW50aWF0ZVByZW1pc2UgfSBmcm9tIFwiLi4vLi4vcHJvY2Vzcy9pbnN0YW50aWF0ZVwiO1xuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5pbXBvcnQgeyBhdHRlbXB0LCBsaW1pbmFsbHksIGxpdGVyYWxseSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgc3RhdGVtZW50RnJvbVByZW1pc2VOb2RlLCBwcm9jZWR1cmVDYWxsRnJvbVByZW1pc2VOb2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBQcmVtaXNlIGV4dGVuZHMgUHJvb2ZBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50KTtcblxuICAgIHRoaXMucHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVDYWxsKCkge1xuICAgIHJldHVybiB0aGlzLnByb2NlZHVyZUNhbGw7XG4gIH1cblxuICBnZXRQcmVtaXNlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcHJlbWlzZU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBwcmVtaXNlTm9kZTtcbiAgfVxuXG4gIGlzU3RhdGVkKCkge1xuICAgIGNvbnN0IHN0YXRlZCA9IHRydWU7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlZDtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHRoaXMuc2V0Q29udGV4dChjb250ZXh0KTtcblxuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgIGlmIChmYWxzZSkge1xuICAgICAgLy8vXG4gICAgfSBlbHNlIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KTtcblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZhbGlkYXRlIHRoZSAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZSBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlJ3MgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UncyAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb247XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbkNvbnRleHQgPSBwcm9vZkFzc2VydGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcHJlbWlzZUNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHByZW1pc2VDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBwcm9vZkFzc2VydGlvbkNvbnRleHQ7IC8vL1xuXG4gICAgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gbGltaW5hbGx5KChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBnZW5lcmFsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIGFzc2VydGlvbk5vZGUgPSBzdWJwcm9vZkFzc2VydGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpXG5cbiAgICAgICAgaWYgKGFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gYXNzZXJ0aW9uOyAgLy8vXG5cbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcmVtaXNlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSBhd2FpdCBwcm9jZWR1cmVDYWxsLnVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KTtcblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UgaW5kZXBlbmRlbmx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGNvbnRleHRKU09OID0gY29udGV4dC50b0pTT04oKTtcblxuICAgIGNvbnRleHQgPSBjb250ZXh0SlNPTjsgIC8vL1xuXG4gICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgY29udGV4dCxcbiAgICAgICAgICAgIHN0cmluZ1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJQcmVtaXNlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVtaXNlID0gbGl0ZXJhbGx5KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHByZW1pc2VOb2RlID0gaW5zdGFudGlhdGVQcmVtaXNlKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gcHJlbWlzZU5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnN0IHByZW1pc2UgPSBuZXcgUHJlbWlzZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2U7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbImRlZmluZSIsIlByZW1pc2UiLCJQcm9vZkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFByb2NlZHVyZUNhbGwiLCJnZXRQcmVtaXNlTm9kZSIsImdldE5vZGUiLCJwcmVtaXNlTm9kZSIsImlzU3RhdGVkIiwic3RhdGVkIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsInByZW1pc2VTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsInNldENvbnRleHQiLCJkZWJ1ZyIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyIsInZhbGlkYXRlUHJvY2VkdXJlQ2FsbCIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJwcmVtaXNlQ29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwibGltaW5hbGx5Iiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwiY29tbWl0Iiwic3VicHJvb2ZTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5Iiwic3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidG9KU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwicHJlbWlzZSIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlUHJlbWlzZSIsInN0YXRlbWVudEZyb21QcmVtaXNlTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tUHJlbWlzZU5vZGUiLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Ozt1RUFSMkI7MEJBRUo7NkJBQ1k7c0JBQ007eUJBQ0s7eUJBQ3lCOzs7Ozs7TUFFdkUsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxnQkFBZ0JDLHVCQUFjO0lBQ3hELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxDQUFFO1FBQzNELEtBQUssQ0FBQ0osU0FB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