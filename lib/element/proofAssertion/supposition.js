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
const _context = require("../../utilities/context");
const _element = require("../../utilities/element");
const _json = require("../../utilities/json");
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
        const suppositionString = this.getString();
        context.trace(`Verifying the '${suppositionString}' supposition...`);
        const statement = this.getStatement(), procedureCall = this.getProcedureCall();
        if (statement !== null || procedureCall !== null) {
            const validates = this.validate(context);
            if (validates) {
                verifies = true;
            }
        } else {
            context.debug(`Unable to validate the '${suppositionString}' supposition because it is nonsense.`);
        }
        return verifies;
    }
    validate(context) {
        let validates = false;
        const suppositionString = this.getString(); ///
        context.trace(`Validatting the '${suppositionString}' supposition...`);
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
            context.debug(`...validated the '${suppositionString}' supposition.`);
        }
        return validates;
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
        let proofAssertionUnifies = false;
        const suppositionString = this.getString(), proofAssertionString = proofAssertion.getString();
        context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition...`);
        const proofAssertionContext = proofAssertion.getContext(), suppositionContext = this.getContext(), generalContext = suppositionContext, specificContext = proofAssertionContext, statementUnifies = (0, _context.resolve)((specificContext)=>{
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
        const ephemeralContext = context, ephemeralContextJSON = (0, _json.ephemeralContextToEphemeralContextJSON)(ephemeralContext), contextJSON = ephemeralContextJSON; ///
        context = contextJSON; ///
        const string = this.getString(), json = {
            context,
            string
        };
        return json;
    }
    static name = "Supposition";
    static fromJSON(json, context) {
        const ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
        context = ephemeralContext; ///
        const supposition = (0, _context.instantiate)((context)=>{
            const { string } = json, suppositionNode = (0, _instantiate.instantiateSupposition)(string, context), node = suppositionNode, statement = (0, _element.statementFromSuppositionNode)(suppositionNode, context), procedureCall = (0, _element.procedureCallFromSuppositionNode)(suppositionNode, context), supposition = new Supposition(context, string, node, statement, procedureCall);
            return supposition;
        }, context);
        return supposition;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdXBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGF0dGVtcHQsIHJlc29sdmUsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlLCBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3VwcG9zaXRpb24gZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnQgIT09IG51bGwpIHx8IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2YWxpZGF0ZSB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG5cbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvY2VkdXJlQ2FsbFZhbGlkYXRlcykge1xuICAgICAgICAgIGNvbnRleHQuY29tbWl0KHRoaXMpO1xuXG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVByb2NlZHVyZUNhbGwoY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbidzICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IHRoaXMucHJvY2VkdXJlQ2FsbC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID10cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24ncyAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgIHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbiwgIC8vL1xuICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbkNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHN1cHBvc2l0aW9uQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gcHJvb2ZBc3NlcnRpb25Db250ZXh0LFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSByZXNvbHZlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb25Ob2RlID0gc3VicHJvb2ZBc3NlcnRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKVxuXG4gICAgICAgIGlmIChhc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IGFzc2VydGlvbjsgIC8vL1xuXG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSBhd2FpdCBwcm9jZWR1cmVDYWxsLnVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KTtcblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVubHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZXBoZW1lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04oZXBoZW1lcmFsQ29udGV4dCksXG4gICAgICAgICAgY29udGV4dEpTT04gPSBlcGhlbWVyYWxDb250ZXh0SlNPTjsgLy8vXG5cbiAgICBjb250ZXh0ID0gY29udGV4dEpTT047ICAvLy9cblxuICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICBzdHJpbmdcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VwcG9zaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3VwcG9zaXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBzdXBwb3NpdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cbn0pO1xuXG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3VwcG9zaXRpb24iLCJQcm9vZkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFByb2NlZHVyZUNhbGwiLCJnZXRTdXBwb3NpdGlvbk5vZGUiLCJnZXROb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3VwcG9zaXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImdldFN0YXRlbWVudCIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZGVidWciLCJhdHRlbXB0Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJjb21taXQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwidmFsaWRhdGVQcm9jZWR1cmVDYWxsIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJzdXBwb3NpdGlvbkNvbnRleHQiLCJyZXNvbHZlIiwic3VicHJvb2ZTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsInN1YnN0aXR1dGlvbnMiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInRvSlNPTiIsImVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0SlNPTiIsImVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIiwiY29udGV4dEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN1cHBvc2l0aW9uIiwic3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Ozt1RUFSMkI7MEJBRUo7NkJBQ2U7eUJBQ1E7eUJBQ2lDO3NCQUNFOzs7Ozs7TUFFakYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxvQkFBb0JDLHVCQUFjO0lBQzVELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxDQUFFO1FBQzNELEtBQUssQ0FBQ0osU0FBU0MsUUFBUUMsTUFB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