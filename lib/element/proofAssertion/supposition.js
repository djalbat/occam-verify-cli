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
        const proofAssertionContext = proofAssertion.getContext(), suppositionContext = this.getContext(), generalContext = suppositionContext, specificContext = proofAssertionContext;
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
            context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition.`);
        }
        return proofAssertionUnifies;
    }
    unifySubproof(subproof, context) {
        let subproofUnifies = false;
        const subproofString = subproof.getString(), suppositionString = this.getString();
        context.trace(`Unifying the '${subproofString}' subproof with the '${suppositionString}' supposition...`);
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
        return (0, _context.instantiate)((context)=>{
            const { string } = json, suppositionNode = (0, _instantiate.instantiateSupposition)(string, context), node = suppositionNode, statement = (0, _element.statementFromSuppositionNode)(suppositionNode, context), procedureCall = (0, _element.procedureCallFromSuppositionNode)(suppositionNode, context), supposition = new Supposition(context, string, node, statement, procedureCall);
            return supposition;
        }, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdXBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGpvaW4sIGF0dGVtcHQsIHJlY29uY2lsZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUsIHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sIGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdXBwb3NpdGlvbiBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbk5vZGU7XG4gIH1cblxuICBpc1N0YXRlZCgpIHtcbiAgICBjb25zdCBzdGF0ZWQgPSB0cnVlOyAvLy9cblxuICAgIHJldHVybiBzdGF0ZWQ7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoKHN0YXRlbWVudCAhPT0gbnVsbCkgfHwgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZhbGlkYXRlIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgICAgICBjb250ZXh0LmNvbW1pdCh0aGlzKTtcblxuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVQcm9jZWR1cmVDYWxsKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG5cbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXR0aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uJ3MgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPXRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbidzICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZVbmlmaWVzID0gdGhpcy51bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbkNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHN1cHBvc2l0aW9uQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gcHJvb2ZBc3NlcnRpb25Db250ZXh0O1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgICBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH0sIHNwZWNpZmljQ29udGV4dCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN0YXRlbWVudC5nZXROb2RlKCksXG4gICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbk5vZGUgPSBzdGF0ZW1lbnROb2RlLmdldFN1YnByb29mQXNzZXJ0aW9uTm9kZSgpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb25Ob2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoc3VicHJvb2ZBc3NlcnRpb25Ob2RlKTtcblxuICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gc3VicHJvb2ZBc3NlcnRpb24udW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbmx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBlcGhlbWVyYWxDb250ZXh0SlNPTiA9IGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OKGVwaGVtZXJhbENvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dEpTT047IC8vL1xuXG4gICAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1cHBvc2l0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgcmV0dXJuIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3VwcG9zaXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgIG5vZGUgPSBzdXBwb3NpdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuXG4gICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cbn0pO1xuXG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3VwcG9zaXRpb24iLCJQcm9vZkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwic3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbCIsImdldFByb2NlZHVyZUNhbGwiLCJnZXRTdXBwb3NpdGlvbk5vZGUiLCJnZXROb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiaXNTdGF0ZWQiLCJzdGF0ZWQiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3VwcG9zaXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImdldFN0YXRlbWVudCIsInZhbGlkYXRlcyIsInZhbGlkYXRlIiwiZGVidWciLCJhdHRlbXB0Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJjb21taXQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwidmFsaWRhdGVQcm9jZWR1cmVDYWxsIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJzdXBwb3NpdGlvbkNvbnRleHQiLCJqb2luIiwicmVjb25jaWxlIiwic3VicHJvb2ZTdHJpbmciLCJzdGF0ZW1lbnROb2RlIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwic3VicHJvb2ZBc3NlcnRpb24iLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ0b0pTT04iLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEpTT04iLCJlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiIsImNvbnRleHRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImVwaGVtZXJhbENvbnRleHRGcm9tSlNPTiIsImluc3RhbnRpYXRlIiwiaW5zdGFudGlhdGVTdXBwb3NpdGlvbiIsInN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUiLCJwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7dUVBUjJCOzBCQUVKOzZCQUNlO3lCQUNnQjt5QkFDeUI7c0JBQ0U7Ozs7OztNQUVqRixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsdUJBQWM7SUFDNUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxhQUFhLENBQUU7UUFDM0QsS0FBSyxDQUFDSixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLGFBQWEsR0FBR0E7SUFDdkI7SUFFQUMsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDRCxhQUFhO0lBQzNCO0lBRUFFLHFCQUFxQjtRQUNuQixNQUFNSixPQUFPLElBQUksQ0FBQ0ssT0FBTyxJQUNuQkMsa0JBQWtCTixNQUFNLEdBQUc7UUFFakMsT0FBT007SUFDVDtJQUVBQyxXQUFXO1FBQ1QsTUFBTUMsU0FBUyxNQUFNLEdBQUc7UUFFeEIsT0FBT0E7SUFDVDtJQUVBLE1BQU1DLE9BQU9YLE9BQU8sRUFBRTtRQUNwQixJQUFJ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