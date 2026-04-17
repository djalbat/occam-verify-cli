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
    constructor(context, string, node, breakPoint, statement, procedureCall){
        super(context, string, node, breakPoint, statement);
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
            const string = this.getString();
            let breakPoint;
            breakPoint = this.getBreakPoint();
            const breakPointJSON = breakPoint.toJSON();
            breakPoint = breakPointJSON; ///
            const json = {
                context,
                string,
                breakPoint
            };
            return json;
        }, context);
    }
    static name = "Supposition";
    static fromJSON(json, context) {
        let supposition;
        (0, _context.unserialise)((json, context)=>{
            (0, _context.instantiate)((context)=>{
                const { string, breakPoint } = json, suppositionNode = (0, _instantiate.instantiateSupposition)(string, context), node = suppositionNode, statement = statementFromSuppositionNode(suppositionNode, context), procedureCall = (0, _element.procedureCallFromSuppositionNode)(suppositionNode, context);
                supposition = new Supposition(context, string, node, breakPoint, statement, procedureCall);
            }, context);
        }, json, context);
        return supposition;
    }
});
function statementFromSuppositionNode(suppositionNode, context) {
    const statementNode = suppositionNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdXBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBqb2luLCBkZWNsYXJlLCBhdHRlbXB0LCByZWNvbmNpbGUsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdXBwb3NpdGlvbiBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbk5vZGU7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoKHN0YXRlbWVudCAhPT0gbnVsbCkgfHwgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpKSB7XG4gICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVW5hYmxlIHRvIHZhbGlkYXRlIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGJlY2F1c2UgaXQgaXMgbm9uc2Vuc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmFsaWRhdGUoY29udGV4dCkge1xuICAgIGxldCB2YWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgZGVjbGFyZSgoY29udGV4dCkgPT4ge1xuICAgICAgYXR0ZW1wdCgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVQcm9jZWR1cmVDYWxsKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9LCBjb250ZXh0KTtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXRpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24ncyBzdGF0ZW1lbnQuLi4gYCk7XG5cbiAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudC52YWxpZGF0ZShjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgc3RhdGVtZW50VmFsaWRhdGVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gc3RhdGVtZW50LiBgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VmFsaWRhdGVzO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9jZWR1cmVDYWxsKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9jZWR1cmVDYWxsU3RyaW5nID0gdGhpcy5wcm9jZWR1cmVDYWxsLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24ncyAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuLi5gKTtcblxuICAgIGNvbnN0IHByb2NlZHVyZUNhbGwgPSB0aGlzLnByb2NlZHVyZUNhbGwudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9dHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAocHJvY2VkdXJlQ2FsbFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uJ3MgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KSB7XG4gICAgbGV0IHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbnRseS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSBhd2FpdCBwcm9jZWR1cmVDYWxsLnVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KTtcblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVubHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbjtcblxuICAgIGlmIChwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mVW5pZmllcyA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBwcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbkNvbnRleHQgPSBwcm9vZkFzc2VydGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Db250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBzdXBwb3NpdGlvbkNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uQ29udGV4dDtcblxuICAgIGpvaW4oKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSBzdGF0ZW1lbnQuZ2V0Tm9kZSgpLFxuICAgICAgICAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcblxuICAgICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludC50b0pTT04oKTtcblxuICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgYnJlYWtQb2ludFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VwcG9zaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbjtcblxuICAgIHVuc2VyaWFsaXNlKChqc29uLCBjb250ZXh0KSA9PiB7XG4gICAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZywgYnJlYWtQb2ludCB9ID0ganNvbixcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdXBwb3NpdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc3VwcG9zaXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwganNvbiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3VwcG9zaXRpb24iLCJQcm9vZkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0U3VwcG9zaXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzdXBwb3NpdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZ2V0U3RhdGVtZW50IiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImRlY2xhcmUiLCJhdHRlbXB0Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwidmFsaWRhdGVQcm9jZWR1cmVDYWxsIiwiY29tbWl0IiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsImdldENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsInN1cHBvc2l0aW9uQ29udGV4dCIsImpvaW4iLCJyZWNvbmNpbGUiLCJzdWJwcm9vZlN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbiIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJ0b0pTT04iLCJzZXJpYWxpc2UiLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZSIsImluc3RhbnRpYXRlU3VwcG9zaXRpb24iLCJzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBU0E7OztlQUFBOzs7dUVBUDJCOzBCQUVKOzZCQUNlO3lCQUNXO3lCQUNzQzs7Ozs7O01BRXZGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBYztJQUM1RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxDQUFFO1FBQ3ZFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUM7UUFFekMsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO0lBQ3ZCO0lBRUFDLG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQ0QsYUFBYTtJQUMzQjtJQUVBRSxxQkFBcUI7UUFDbkIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGtCQUFrQlAsTUFBTSxHQUFHO1FBRWpDLE9BQU9PO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPVixPQUFPLEVBQUU7UUFDcEIsSUFBSVcsV0FBVztRQUVmLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNaO1FBRWpCLE1BQU1hLG9CQUFvQixJQUFJLENBQUNDLFNBQVM7UUFFeENkLFFBQVFlLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsa0JBQWtCLGdCQUFnQixDQUFDO1FBRW5FLE1BQU1ULFlBQVksSUFBSSxDQUFDWSxZQUFZLElBQzdCWCxnQkFBZ0IsSUFBSSxDQUFDQyxnQkFBZ0I7UUFFM0MsSUFBSSxBQUFDRixjQUFjLFFBQVVDLGtCQUFrQixN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