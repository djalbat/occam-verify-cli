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
const _default = (0, _elements.define)(class Supposition extends _proofAssertion.default {
    constructor(context, string, node, lineIndex, statement, procedureCall){
        super(context, string, node, lineIndex, statement);
        this.procedureCall = procedureCall;
    }
    getProcedureCall() {
        return this.procedureCall;
    }
    getSuppositionNode() {
        const node = this.getNode(), suppositionNode = node; ///
        return suppositionNode;
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
            context.debug(`...validated the '${suppositionString}' supposition.`);
        }
        return validates;
    }
    validateStatement(context) {
        let statementValidates = false;
        const suppositionString = this.getString();
        context.trace(`Validating the '${suppositionString}' supposition's statement... `);
        let statement;
        statement = this.getStatement();
        statement = statement.validate(context); ///
        if (statement !== null) {
            statementValidates = true;
        }
        if (statementValidates) {
            context.debug(`...validated the '${suppositionString}' supposition statement. `);
        }
        return statementValidates;
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
    static name = "Supposition";
    static fromJSON(json, context) {
        let supposition;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, lineIndex } = json, suppositionNode = (0, _instantiate.instantiateSupposition)(string, context), node = suppositionNode, statement = statementFromSuppositionNode(suppositionNode, context), procedureCall = (0, _element.procedureCallFromSuppositionNode)(suppositionNode, context);
                supposition = new Supposition(context, string, node, lineIndex, statement, procedureCall);
            }, context);
        }, json, context);
        return supposition;
    }
});
function statementFromSuppositionNode(suppositionNode, context) {
    const statementNode = suppositionNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdXBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBqb2luLCBkZWNsYXJlLCBhdHRlbXB0LCByZWNvbmNpbGUsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdXBwb3NpdGlvbiBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCkge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnQgIT09IG51bGwpIHx8IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2YWxpZGF0ZSB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGRlY2xhcmUoKGNvbnRleHQpID0+IHtcbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uJ3Mgc3RhdGVtZW50Li4uIGApO1xuXG4gICAgbGV0IHN0YXRlbWVudDtcblxuICAgIHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHN0YXRlbWVudC4gYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXR0aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uJ3MgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPXRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbidzICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbmx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmlzUHJvb2ZBc3NlcnRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb247XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25Db250ZXh0ID0gcHJvb2ZBc3NlcnRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gc3VwcG9zaXRpb25Db250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBwcm9vZkFzc2VydGlvbkNvbnRleHQ7XG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgICBzdWJwcm9vZkFzc2VydGlvbiA9IGNvbnRleHQuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShzdWJwcm9vZkFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICByZXR1cm4gc2VyaWFsaXNlKChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgICAgbGluZUluZGV4ID0gdGhpcy5nZXRCcmVha1BvaW50KCksXG4gICAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICAgIGxpbmVJbmRleFxuICAgICAgICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VwcG9zaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbjtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbk5vZGUgPSBpbnN0YW50aWF0ZVN1cHBvc2l0aW9uKHN0cmluZywgY29udGV4dCksXG4gICAgICAgICAgICAgIG5vZGUgPSBzdXBwb3NpdGlvbk5vZGUsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KTtcblxuICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0sIGpzb24sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN1cHBvc2l0aW9uIiwiUHJvb2ZBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0U3VwcG9zaXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzdXBwb3NpdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZ2V0U3RhdGVtZW50IiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImRlY2xhcmUiLCJhdHRlbXB0Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwidmFsaWRhdGVQcm9jZWR1cmVDYWxsIiwiY29tbWl0IiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsImdldENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsInN1cHBvc2l0aW9uQ29udGV4dCIsImpvaW4iLCJyZWNvbmNpbGUiLCJzdWJwcm9vZlN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsInVuc2VyaWFsaXNlIiwiaW5zdGFudGlhdGUiLCJpbnN0YW50aWF0ZVN1cHBvc2l0aW9uIiwic3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVNBOzs7ZUFBQTs7O3VFQVAyQjswQkFFSjs2QkFDZTt5QkFDVzt5QkFDc0M7Ozs7OztNQUV2RixXQUFlQSxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLG9CQUFvQkMsdUJBQWM7SUFDNUQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsQ0FBRTtRQUN0RSxLQUFLLENBQUNMLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDO1FBRXhDLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtJQUN2QjtJQUVBQyxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUNELGFBQWE7SUFDM0I7SUFFQUUscUJBQXFCO1FBQ25CLE1BQU1MLE9BQU8sSUFBSSxDQUFDTSxPQUFPLElBQ25CQyxrQkFBa0JQLE1BQU0sR0FBRztRQUVqQyxPQUFPTztJQUNUO0lBRUEsTUFBTUMsT0FBT1YsT0FBTyxFQUFFO1FBQ3BCLElBQUlXLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDWjtRQUVqQixNQUFNYSxvQkFBb0IsSUFBSSxDQUFDQyxTQUFTO1FBRXhDZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLGtCQUFrQixnQkFBZ0IsQ0FBQztRQUVuRSxNQUFNVCxZQUFZLElBQUksQ0FBQ1ksWUFBWSxJQUM3QlgsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO1FBRTNDLElBQUksQUFBQ0YsY0FBYyxRQUFVQyxrQkFBa0IsTUFBTztZQUNwRCxNQUFNWSxZQUFZLElBQUksQ0FBQ0MsUUFBUSxDQUFDbEI7WUFFaEMsSUFBSWlCLFdBQVc7Z0JBQ2JOLFdBQVc7WUFDYjtRQUNGLE9BQU87WUFDTFgsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLHdCQUF3QixFQUFFTixrQkFBa0IscUNBQXFDLENBQUM7UUFDbkc7UUFFQSxPQUFPRjtJQUNUO0lBRUFPLFNBQVNsQixPQUFPLEVBQUU7UUFDaEIsSUFBSWlCLFlBQVk7UUFFaEIsTUFBTUosb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxJQUFJLEdBQUc7UUFFL0NkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFRixrQkFBa0IsZ0JBQWdCLENBQUM7UUFFckVPLElBQUFBLGdCQUFPLEVBQUMsQ0FBQ3BCO1lBQ1BxQixJQUFBQSxnQkFBTyxFQUFDLENBQUNyQjtnQkFDUCxNQUFNSSxZQUFZLElBQUksQ0FBQ1ksWUFBWSxJQUM3QlgsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO2dCQUUzQyxJQUFJRixjQUFjLE1BQU07b0JBQ3RCLE1BQU1rQixxQkFBcUIsSUFBSSxDQUFDQyxpQkFBaUIsQ0FBQ3ZCO29CQUVsRCxJQUFJc0Isb0JBQW9CO3dCQUN0QkwsWUFBWTtvQkFDZDtnQkFDRjtnQkFFQSxJQUFJWixrQkFBa0IsTUFBTTtvQkFDMUIsTUFBTW1CLHlCQUF5QixJQUFJLENBQUNDLHFCQUFxQixDQUFDekI7b0JBRTFELElBQUl3Qix3QkFBd0I7d0JBQzFCUCxZQUFZO29CQUNkO2dCQUNGO2dCQUVBLElBQUlBLFdBQVc7b0JBQ2IsSUFBSSxDQUFDUyxNQUFNLENBQUMxQjtnQkFDZDtZQUNGLEdBQUdBO1FBQ0wsR0FBR0E7UUFFSCxJQUFJaUIsV0FBVztZQUNiakIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTixrQkFBa0IsY0FBYyxDQUFDO1FBQ3RFO1FBRUEsT0FBT0k7SUFDVDtJQUVBTSxrQkFBa0J2QixPQUFPLEVBQUU7UUFDekIsSUFBSXNCLHFCQUFxQjtRQUV6QixNQUFNVCxvQkFBb0IsSUFBSSxDQUFDQyxTQUFTO1FBRXhDZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRUYsa0JBQWtCLDZCQUE2QixDQUFDO1FBRWpGLElBQUlUO1FBRUpBLFlBQVksSUFBSSxDQUFDWSxZQUFZO1FBRTdCWixZQUFZQSxVQUFVYyxRQUFRLENBQUNsQixVQUFXLEdBQUc7UUFFN0MsSUFBSUksY0FBYyxNQUFNO1lBQ3RCa0IscUJBQXFCO1FBQ3ZCO1FBRUEsSUFBSUEsb0JBQW9CO1lBQ3RCdEIsUUFBUW1CLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFTixrQkFBa0IseUJBQXlCLENBQUM7UUFDakY7UUFFQSxPQUFPUztJQUNUO0lBRUFHLHNCQUFzQnpCLE9BQU8sRUFBRTtRQUM3QixJQUFJd0IseUJBQXlCO1FBRTdCLE1BQU1YLG9CQUFvQixJQUFJLENBQUNDLFNBQVMsSUFDbENhLHNCQUFzQixJQUFJLENBQUN0QixhQUFhLENBQUNTLFNBQVM7UUFFeERkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFRixrQkFBa0IsaUJBQWlCLEVBQUVjLG9CQUFvQixtQkFBbUIsQ0FBQztRQUUvRyxNQUFNdEIsZ0JBQWdCLElBQUksQ0FBQ0EsYUFBYSxDQUFDYSxRQUFRLENBQUNsQjtRQUVsRCxJQUFJSyxrQkFBa0IsTUFBTTtZQUMxQm1CLHlCQUF3QjtRQUMxQjtRQUVBLElBQUlBLHdCQUF3QjtZQUMxQnhCLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxrQkFBa0IsRUFBRU4sa0JBQWtCLGlCQUFpQixFQUFFYyxvQkFBb0IsaUJBQWlCLENBQUM7UUFDaEg7UUFFQSxPQUFPSDtJQUNUO0lBRUFJLGlCQUFpQkMsV0FBVyxFQUFFQyxjQUFjLEVBQUVDLGVBQWUsRUFBRTtRQUM3RCxJQUFJQztRQUVKLE1BQU1oQyxVQUFVK0IsaUJBQ1ZFLHNCQUFzQkosYUFDdEJLLDJCQUEyQixJQUFJLENBQUNwQixTQUFTLElBQ3pDcUIsNEJBQTRCRixvQkFBb0JuQixTQUFTO1FBRS9EZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVvQiwwQkFBMEIsd0JBQXdCLEVBQUVELHlCQUF5QixnQkFBZ0IsQ0FBQztRQUU3SCxNQUFNOUIsWUFBWTZCLG9CQUFvQmpCLFlBQVksSUFDNUNvQixtQkFBbUIsSUFBSSxDQUFDQyxjQUFjLENBQUNqQyxXQUFXMEIsZ0JBQWdCQztRQUV4RUMscUJBQXFCSSxrQkFBbUIsR0FBRztRQUUzQyxJQUFJSixvQkFBb0I7WUFDdEJoQyxRQUFRbUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVnQiwwQkFBMEIsd0JBQXdCLEVBQUVELHlCQUF5QixjQUFjLENBQUM7UUFDL0g7UUFFQSxPQUFPRjtJQUNUO0lBRUEsTUFBTU0sbUJBQW1CdEMsT0FBTyxFQUFFO1FBQ2hDLElBQUl1Qyx1QkFBdUI7UUFFM0IsTUFBTTFCLG9CQUFvQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRS9DZCxRQUFRZSxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVGLGtCQUFrQiw4QkFBOEIsQ0FBQztRQUVoRixNQUFNVCxZQUFZLElBQUksQ0FBQ1ksWUFBWSxJQUM3QlgsZ0JBQWdCLElBQUksQ0FBQ0MsZ0JBQWdCO1FBRTNDLElBQUlGLGNBQWMsTUFBTTtZQUN0QixNQUFNMkIsa0JBQWtCL0IsU0FBVSxHQUFHO1lBRXJDQSxVQUFVLElBQUksQ0FBQ3dDLFVBQVU7WUFFekIsTUFBTVYsaUJBQWlCOUIsU0FBUyxHQUFHO1lBRW5DQSxVQUFVK0IsaUJBQWtCLEdBQUc7WUFFL0IsTUFBTVUsZ0NBQWdDckMsVUFBVWtDLGtCQUFrQixDQUFDUixnQkFBZ0JDO1lBRW5GLElBQUlVLCtCQUErQjtnQkFDakNGLHVCQUF1QjtZQUN6QjtRQUNGO1FBRUEsSUFBSWxDLGtCQUFrQixNQUFNO1lBQzFCLE1BQU1xQyxxQ0FBcUMsTUFBTXJDLGNBQWNpQyxrQkFBa0IsQ0FBQ3RDO1lBRWxGLElBQUkwQyxvQ0FBb0M7Z0JBQ3RDSCx1QkFBdUI7WUFDekI7UUFDRjtRQUVBLElBQUlBLHNCQUFzQjtZQUN4QnZDLFFBQVFtQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRU4sa0JBQWtCLDJCQUEyQixDQUFDO1FBQ2pGO1FBRUEsT0FBTzBCO0lBQ1Q7SUFFQUksOEJBQThCQyx3QkFBd0IsRUFBRTVDLE9BQU8sRUFBRTtRQUMvRCxJQUFJNkM7UUFFSixNQUFNaEMsb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxJQUNsQ2dDLGlDQUFpQ0YseUJBQXlCOUIsU0FBUztRQUV6RWQsUUFBUWUsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFK0IsK0JBQStCLHdDQUF3QyxFQUFFakMsa0JBQWtCLGdCQUFnQixDQUFDO1FBRTNJLE1BQU1rQyx5Q0FBeUNILHlCQUF5QkksZ0JBQWdCLElBQ3pDQyxpQkFBaUJGLHlDQUNFSCwyQkFDRSxNQUNyQk0sV0FBV0gseUNBQ0UsT0FDRUg7UUFFOUQsSUFBSUssbUJBQW1CLE1BQU07WUFDM0IsTUFBTUUsd0JBQXdCLElBQUksQ0FBQ0MsbUJBQW1CLENBQUNILGdCQUFnQmpEO1lBRXZFLElBQUltRCx1QkFBdUI7Z0JBQ3pCTixrQ0FBa0M7WUFDcEM7UUFDRjtRQUVBLElBQUlLLGFBQWEsTUFBTTtZQUNyQixNQUFNRyxrQkFBa0IsSUFBSSxDQUFDQyxhQUFhLENBQUNKLFVBQVVsRDtZQUVyRCxJQUFJcUQsaUJBQWlCO2dCQUNuQlIsa0NBQWtDO1lBQ3BDO1FBQ0Y7UUFFQSxJQUFJQSxpQ0FBaUM7WUFDbkM3QyxRQUFRbUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUyQiwrQkFBK0Isd0NBQXdDLEVBQUVqQyxrQkFBa0IsY0FBYyxDQUFDO1FBQzdJO1FBRUEsT0FBT2dDO0lBQ1Q7SUFFQU8sb0JBQW9CSCxjQUFjLEVBQUVqRCxPQUFPLEVBQUU7UUFDM0MsSUFBSW1ELHdCQUF3QjtRQUU1QixNQUFNdEMsb0JBQW9CLElBQUksQ0FBQ0MsU0FBUyxJQUNsQ3lDLHVCQUF1Qk4sZUFBZW5DLFNBQVM7UUFFckRkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRXdDLHFCQUFxQiw0QkFBNEIsRUFBRTFDLGtCQUFrQixnQkFBZ0IsQ0FBQztRQUVySCxNQUFNMkMsd0JBQXdCUCxlQUFlVCxVQUFVLElBQ2pEaUIscUJBQXFCLElBQUksQ0FBQ2pCLFVBQVUsSUFDcENWLGlCQUFpQjJCLG9CQUNqQjFCLGtCQUFrQnlCO1FBRXhCRSxJQUFBQSxhQUFJLEVBQUMsQ0FBQzNCO1lBQ0o0QixJQUFBQSxrQkFBUyxFQUFDLENBQUM1QjtnQkFDVCxNQUFNM0IsWUFBWTZDLGVBQWVqQyxZQUFZLElBQ3ZDb0IsbUJBQW1CLElBQUksQ0FBQ0MsY0FBYyxDQUFDakMsV0FBVzBCLGdCQUFnQkM7Z0JBRXhFLElBQUlLLGtCQUFrQjtvQkFDcEJMLGdCQUFnQkwsTUFBTSxDQUFDMUI7b0JBRXZCbUQsd0JBQXdCO2dCQUMxQjtZQUNGLEdBQUdwQjtRQUNMLEdBQUdBLGlCQUFpQi9CO1FBRXBCLElBQUltRCx1QkFBdUI7WUFDekJuRCxRQUFRbUIsS0FBSyxDQUFDLENBQUMsZ0JBQWdCLEVBQUVvQyxxQkFBcUIsNEJBQTRCLEVBQUUxQyxrQkFBa0IsY0FBYyxDQUFDO1FBQ3ZIO1FBRUEsT0FBT3NDO0lBQ1Q7SUFFQUcsY0FBY0osUUFBUSxFQUFFbEQsT0FBTyxFQUFFO1FBQy9CLElBQUlxRCxrQkFBa0I7UUFFdEIsTUFBTU8saUJBQWlCVixTQUFTcEMsU0FBUyxJQUNuQ0Qsb0JBQW9CLElBQUksQ0FBQ0MsU0FBUztRQUV4Q2QsUUFBUWUsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFNkMsZUFBZSxxQkFBcUIsRUFBRS9DLGtCQUFrQixnQkFBZ0IsQ0FBQztRQUV4RyxNQUFNVCxZQUFZLElBQUksQ0FBQ1ksWUFBWTtRQUVuQyxJQUFJWixjQUFjLE1BQU07WUFDdEIsTUFBTXlELGdCQUFnQnpELFVBQVVJLE9BQU8sSUFDakNzRCx3QkFBd0JELGNBQWNFLHdCQUF3QjtZQUVwRSxJQUFJRCwwQkFBMEIsTUFBTTtnQkFDbEMsTUFBTS9CLGtCQUFrQi9CLFNBQVUsR0FBRztnQkFFckNBLFVBQVUsSUFBSSxDQUFDd0MsVUFBVTtnQkFFekIsTUFBTVYsaUJBQWlCOUIsU0FDakJnRSxvQkFBb0JoRSxRQUFRaUUsNEJBQTRCLENBQUNIO2dCQUUvRDlELFVBQVUrQixpQkFBa0IsR0FBRztnQkFFL0JzQixrQkFBa0JXLGtCQUFrQlYsYUFBYSxDQUFDSixVQUFVcEIsZ0JBQWdCQztZQUM5RTtRQUNGO1FBRUEsSUFBSXNCLGlCQUFpQjtZQUNuQnJELFFBQVFtQixLQUFLLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRXlDLGVBQWUscUJBQXFCLEVBQUUvQyxrQkFBa0IsY0FBYyxDQUFDO1FBQzFHO1FBRUEsT0FBT3dDO0lBQ1Q7SUFFQWEsU0FBUztRQUNQLE1BQU1sRSxVQUFVLElBQUksQ0FBQ3dDLFVBQVU7UUFFL0IsT0FBTzJCLElBQUFBLGtCQUFTLEVBQUMsQ0FBQ25FO1lBQ2hCLE1BQU1DLFNBQVMsSUFBSSxDQUFDYSxTQUFTLElBQ3ZCWCxZQUFZLElBQUksQ0FBQ2lFLGFBQWEsSUFDOUJDLE9BQU87Z0JBQ0xyRTtnQkFDQUM7Z0JBQ0FFO1lBQ0Y7WUFFTixPQUFPa0U7UUFDVCxHQUFHckU7SUFDTDtJQUVBLE9BQU9zRSxPQUFPLGNBQWM7SUFFNUIsT0FBT0MsU0FBU0YsSUFBSSxFQUFFckUsT0FBTyxFQUFFO1FBQzdCLElBQUk2QjtRQUVKMkMsSUFBQUEsb0JBQVcsRUFBQyxDQUFDSCxNQUFNckU7WUFDakJ5RSxJQUFBQSxvQkFBVyxFQUFDLENBQUN6RTtnQkFDWCxNQUFNLEVBQUVDLE1BQU0sRUFBRUUsU0FBUyxFQUFFLEdBQUdrRSxNQUN4QjVELGtCQUFrQmlFLElBQUFBLG1DQUFzQixFQUFDekUsUUFBUUQsVUFDakRFLE9BQU9PLGlCQUNQTCxZQUFZdUUsNkJBQTZCbEUsaUJBQWlCVCxVQUMxREssZ0JBQWdCdUUsSUFBQUEseUNBQWdDLEVBQUNuRSxpQkFBaUJUO2dCQUV4RTZCLGNBQWMsSUFBSS9CLFlBQVlFLFNBQVNDLFFBQVFDLE1BQU1DLFdBQVdDLFdBQVdDO1lBQzdFLEdBQUdMO1FBQ0wsR0FBR3FFLE1BQU1yRTtRQUVULE9BQU82QjtJQUNUO0FBQ0Y7QUFFQSxTQUFTOEMsNkJBQTZCbEUsZUFBZSxFQUFFVCxPQUFPO0lBQzVELE1BQU02RCxnQkFBZ0JwRCxnQkFBZ0JvRSxnQkFBZ0IsSUFDaER6RSxZQUFZSixRQUFROEUsNEJBQTRCLENBQUNqQjtJQUV2RCxPQUFPekQ7QUFDVCJ9