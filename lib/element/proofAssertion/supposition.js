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
const _default = (0, _elements.define)(class Supposition extends _proofAssertion.default {
    constructor(context, string, node, statement, procedureCall){
        super(context, string, node, statement);
        this.procedureCall = procedureCall;
    }
    getProcedureCall() {
        return this.procedureCall;
    }
    getSuppositionNode() {
        const node = this.getNode(), suppositionNode = node; ///
        return suppositionNode;
    }
    isStated() {
        const stated = true; ///
        return stated;
    }
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const suppositionString = this.getString(); ///
        context.trace(`Verifying the '${suppositionString}' supposition...`);
        (0, _context.attempt)((context)=>{
            const supposition = this.validate(context);
            if (supposition !== null) {
                this.setContext(context);
                verifies = true;
            }
        }, context);
        if (verifies) {
            context.debug(`...verified the '${suppositionString}' supposition.`);
        }
        return verifies;
    }
    validate(context) {
        let supposition = false;
        const suppositionString = this.getString(); ///
        context.trace(`Validatting the '${suppositionString}' supposition...`);
        const statement = this.getStatement(), procedureCall = this.getProcedureCall();
        if (false) {
        ///
        } else if (statement !== null) {
            const statementValidates = this.validateStatement(context);
            if (statementValidates) {
                supposition = this; ///
            }
        } else if (procedureCall !== null) {
            const procedureCallValidates = this.validateProcedureCall(context);
            if (procedureCallValidates) {
                supposition = this; ///
            }
        } else {
            context.debug(`Unable to validate the '${suppositionString}' supposition because it is nonsense.`);
        }
        if (supposition !== null) {
            context.debug(`...validated the '${suppositionString}' supposition.`);
        }
        return supposition;
    }
    validateProcedureCall(context) {
        let procedureCallValidates = false;
        const suppositionString = this.getString(), procedureCallString = this.procedureCall.getString();
        context.trace(`Validatting the '${suppositionString}' supposition's '${procedureCallString}' procedure call...`);
        const procedureCall = this.procedureCall.validate(context);
        if (procedureCall !== null) {
            procedureCallValidates = true;
        }
        if (procedureCallValidates) {
            context.debug(`...validated the '${suppositionString}' supposition's '${procedureCallString}' procedure call.`);
        }
        return procedureCallValidates;
    }
    unifySupposition(supposition, generalContext, specificContext) {
        let suppositionUnifies;
        const context = specificContext, specificSupposition = supposition, generalSuppositionString = this.getString(), specificSuppositionString = specificSupposition.getString();
        context.trace(`Unifying the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition...`);
        const statement = specificSupposition.getStatement(), statementUnifies = this.unifyStatement(statement, generalContext, specificContext);
        suppositionUnifies = statementUnifies; ///
        if (suppositionUnifies) {
            context.debug(`...unified the '${specificSuppositionString}' supposition with the '${generalSuppositionString}' supposition.`);
        }
        return suppositionUnifies;
    }
    unifySubproofOrProofAssertion(subproofOrProofAssertion, context) {
        let subproofOrProofAssertionUnifies;
        const suppositionString = this.getString(), subproofOrProofAssertionString = subproofOrProofAssertion.getString();
        context.trace(`Unifying the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${suppositionString}' supposition...`);
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
            context.debug(`...unified the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${suppositionString}' supposition.`);
        }
        return subproofOrProofAssertionUnifies;
    }
    unifyProofAssertion(proofAssertion, context) {
        let proofAssertionUnifies;
        const suppositionString = this.getString(), proofAssertionString = proofAssertion.getString();
        context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition...`);
        const proofAssertionContext = proofAssertion.getContext(), suppositionContext = this.getContext(), generalContext = suppositionContext, specificContext = proofAssertionContext; ///
        proofAssertionUnifies = (0, _context.liminally)((specificContext)=>{
            const statement = proofAssertion.getStatement(), statementUnifies = this.unifyStatement(statement, generalContext, specificContext);
            if (statementUnifies) {
                specificContext.commit(context);
                return true;
            }
        }, specificContext);
        if (proofAssertionUnifies) {
            context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition.`);
        }
        return proofAssertionUnifies;
    }
    unifySubproof(subproof, context) {
        let subproofUnifies = false;
        const suppositionString = this.getString(), subproofString = subproof.getString();
        context.trace(`Unifying the '${subproofString}' subproof with the '${suppositionString}' supposition...`);
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
                    subproofUnifies = subproofAssertion.unifySubproof(subproof, substitutions, generalContext, specificContext);
                }
            }
        }
        if (subproofUnifies) {
            context.debug(`...unified the '${subproofString}' subproof with the '${suppositionString}' supposition.`);
        }
        return subproofUnifies;
    }
    async unifyIndependently(context) {
        let unifiesIndependently = false;
        const suppositionString = this.getString(); ///
        context.trace(`Unifying the '${suppositionString}' supposition independently...`);
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
            context.debug(`...unified the '${suppositionString}' supposition independenly.`);
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
    static name = "Supposition";
    static fromJSON(json, context) {
        const supposition = (0, _context.literally)((context)=>{
            const { string } = json, suppositionNode = (0, _instantiate.instantiateSupposition)(string, context), node = suppositionNode, statement = (0, _element.statementFromSuppositionNode)(suppositionNode, context), procedureCall = (0, _element.procedureCallFromSuppositionNode)(suppositionNode, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
            context = ephemeralContext; ///
            const supposition = new Supposition(context, string, node, statement, procedureCall);
            return supposition;
        }, context);
        return supposition;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdXBwb3NpdGlvbiB9IGZyb20gXCIuLi8uLi9wcm9jZXNzL2luc3RhbnRpYXRlXCI7XG5pbXBvcnQgeyBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcbmltcG9ydCB7IGF0dGVtcHQsIGxpbWluYWxseSwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlLCBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3VwcG9zaXRpb24gZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKGZhbHNlKSB7XG4gICAgICAvLy9cbiAgICB9IGVsc2UgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICBzdXBwb3NpdGlvbiA9IHRoaXM7IC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVQcm9jZWR1cmVDYWxsKGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbFZhbGlkYXRlcykge1xuICAgICAgICBzdXBwb3NpdGlvbiA9IHRoaXM7IC8vL1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmFsaWRhdGUgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICBpZiAoc3VwcG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICB2YWxpZGF0ZVByb2NlZHVyZUNhbGwoY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbidzICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IHRoaXMucHJvY2VkdXJlQ2FsbC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID10cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24ncyAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgIHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbiwgIC8vL1xuICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbkNvbnRleHQgPSBwcm9vZkFzc2VydGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Db250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBzdXBwb3NpdGlvbkNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uQ29udGV4dDsgLy8vXG5cbiAgICBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSBsaW1pbmFsbHkoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKVxuXG4gICAgICAgIGlmIChhc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSBhd2FpdCBwcm9jZWR1cmVDYWxsLnVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KTtcblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVubHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgY29udGV4dEpTT04gPSBjb250ZXh0LnRvSlNPTigpO1xuXG4gICAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1cHBvc2l0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IGxpdGVyYWxseSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN1cHBvc2l0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICBub2RlID0gc3VwcG9zaXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0OyAvLy9cblxuICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cbn0pO1xuXG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3VwcG9zaXRpb24iLCJQcm9vZkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFByb2NlZHVyZUNhbGwiLCJnZXRTdXBwb3NpdGlvbk5vZGUiLCJnZXROb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3VwcG9zaXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImF0dGVtcHQiLCJzdXBwb3NpdGlvbiIsInZhbGlkYXRlIiwic2V0Q29udGV4dCIsImRlYnVnIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwidmFsaWRhdGVQcm9jZWR1cmVDYWxsIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmciLCJzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24iLCJpc1Byb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZiIsInByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5UHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25TdHJpbmciLCJwcm9vZkFzc2VydGlvbkNvbnRleHQiLCJnZXRDb250ZXh0Iiwic3VwcG9zaXRpb25Db250ZXh0IiwibGltaW5hbGx5IiwiY29tbWl0Iiwic3VicHJvb2ZTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInRvSlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxpdGVyYWxseSIsImluc3RhbnRpYXRlU3VwcG9zaXRpb24iLCJzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUiLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Ozt1RUFSMkI7MEJBRUo7NkJBQ2dCO3NCQUNFO3lCQUNLO3lCQUNpQzs7Ozs7O01BRS9FLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBYztJQUM1RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsQ0FBRTtRQUMzRCxLQUFLLENBQUNKLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtJQUN2QjtJQUVBQyxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUNELGFBQWE7SUFDM0I7SUFFQUUscUJBQXFCO1FBQ25CLE1BQU1KLE9BQU8sSUFBSSxDQUFDSyxPQUFPLElBQ25CQyxrQkFBa0JOLE1BQU0sR0FBRztRQUVqQyxPQUFPTTtJQUNUO0lBRUFDLFdBQVc7UUFDVCxNQUFNQyxTQUFTLE1BQU0sR0FBRztRQUV4QixPQUFPQTtJQUNUO0lBRUEsTUFBTUMsT0FBT1gsT0FBTyxFQUFFO1FBQ3BCLElBQUlZLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDYjtRQUVqQixNQUFNYyxvQkFBb0IsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUUvQ2YsUUFBUWdCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYs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