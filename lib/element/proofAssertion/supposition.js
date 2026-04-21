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
    getStatementNode() {
        const suppositionNode = this.getSuppositionNode(), statementNode = suppositionNode.getStatementNode();
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
        await (0, _context.reconcile)(async (context)=>{
            const statement = this.getStatement(), procedureCall = this.getProcedureCall();
            if (statement !== null) {
                const suppositionContext = this.getContext(), generalContext = suppositionContext, specificContext = context, statementUnifiesIndependently = statement.unifyIndependently(generalContext, specificContext);
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
            context.debug(`...unified the '${suppositionString}' supposition independently.`);
        }
        return unifiesIndependently;
    }
    unifySubproof(subproof, context) {
        let subproofUnifies = false;
        const suppositionString = this.getString(), subproofString = subproof.getString();
        context.trace(`Unifying the '${subproofString}' subproof with the '${suppositionString}' supposition...`);
        const subproofAssertion = this.findSubproofAssertion();
        if (subproofAssertion !== null) {
            const suppositionContext = this.getContext(), generalContext = suppositionContext, spsecfiicContext = context; ///
            subproofUnifies = subproofAssertion.unifySubproof(subproof, generalContext, spsecfiicContext);
        }
        if (subproofUnifies) {
            context.debug(`...unified the '${subproofString}' subproof with the '${suppositionString}' supposition.`);
        }
        return subproofUnifies;
    }
    unifyProofAssertion(proofAssertion, context) {
        let proofAssertionUnifies = false;
        const suppositionString = this.getString(), proofAssertionString = proofAssertion.getString();
        context.trace(`Unifying the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition...`);
        const proofAssertionContext = proofAssertion.getContext(), suppositionContext = this.getContext(), generalContext = suppositionContext, specificContext = proofAssertionContext; ///
        (0, _context.reconcile)((specificContext)=>{
            const statement = proofAssertion.getStatement(), statementUnifies = this.unifyStatement(statement, generalContext, specificContext);
            if (statementUnifies) {
                specificContext.commit(context);
                proofAssertionUnifies = true;
            }
        }, specificContext);
        if (proofAssertionUnifies) {
            context.debug(`...unified the '${proofAssertionString}' proof assertion with the '${suppositionString}' supposition.`);
        }
        return proofAssertionUnifies;
    }
    unifySubproofOrProofAssertion(subproofOrProofAssertion, context) {
        let subproofOrProofAssertionUnifies;
        const suppositionString = this.getString(), subproofOrProofAssertionString = subproofOrProofAssertion.getString();
        context.trace(`Unifying the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${suppositionString}' supposition...`);
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
            context.debug(`...unified the '${subproofOrProofAssertionString}' subproof or proof assertion with the '${suppositionString}' supposition.`);
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
    static name = "Supposition";
    static fromJSON(json, context) {
        let supposition;
        (0, _context.instantiate)((context)=>{
            (0, _context.unserialise)((json, context)=>{
                const { string } = json, suppositionNode = (0, _instantiate.instantiateSupposition)(string, context), node = suppositionNode, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), statement = statementFromSuppositionNode(suppositionNode, context), procedureCall = (0, _element.procedureCallFromSuppositionNode)(suppositionNode, context);
                supposition = new Supposition(context, string, node, breakPoint, statement, procedureCall);
            }, json, context);
        }, context);
        return supposition;
    }
});
function statementFromSuppositionNode(suppositionNode, context) {
    const statementNode = suppositionNode.getStatementNode(), statement = context.findStatementByStatementNode(statementNode);
    return statement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdXBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBkZWNsYXJlLCBhdHRlbXB0LCByZWNvbmNpbGUsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdXBwb3NpdGlvbiBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTm9kZSA9IHRoaXMuZ2V0U3VwcG9zaXRpb25Ob2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGZpbmRTdWJwcm9vZkFzc2VydGlvbigpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnQgIT09IG51bGwpIHx8IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2YWxpZGF0ZSB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGRlY2xhcmUoKGNvbnRleHQpID0+IHtcbiAgICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLmNvbW1pdChjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgfSwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlU3RhdGVtZW50KGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uJ3Mgc3RhdGVtZW50Li4uIGApO1xuXG4gICAgbGV0IHN0YXRlbWVudDtcblxuICAgIHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnQudmFsaWRhdGUoY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgIHN0YXRlbWVudFZhbGlkYXRlcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHN0YXRlbWVudC4gYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXR0aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uJ3MgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPXRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbidzICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgIC8vL1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2dlbmVyYWxTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGF3YWl0IHJlY29uY2lsZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSB0aGlzLmdldFByb2NlZHVyZUNhbGwoKTtcblxuICAgICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbkNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBzdXBwb3NpdGlvbkNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN0YXRlbWVudC51bmlmeUluZGVwZW5kZW50bHkoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkgPSBhd2FpdCBwcm9jZWR1cmVDYWxsLnVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuaWZpZXNJbmRlcGVuZGVudGx5O1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uID0gdGhpcy5maW5kU3VicHJvb2ZBc3NlcnRpb24oKTtcblxuICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25Db250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHN1cHBvc2l0aW9uQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzcHNlY2ZpaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGdlbmVyYWxDb250ZXh0LCBzcHNlY2ZpaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25Db250ZXh0ID0gcHJvb2ZBc3NlcnRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLCAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IHN1cHBvc2l0aW9uQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gcHJvb2ZBc3NlcnRpb25Db250ZXh0OyAgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmlzUHJvb2ZBc3NlcnRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uO1xuXG4gICAgcmVjb25jaWxlKChjb250ZXh0KSA9PiB7XG4gICAgICBpZiAocHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mVW5pZmllcyA9IHRoaXMudW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuY29tbWl0KCk7XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcmV0dXJuIHNlcmlhbGlzZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3Qgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgICAgY29uc3QgYnJlYWtQb2ludEpTT04gPSBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTihicmVha1BvaW50KTtcblxuICAgICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAgYnJlYWtQb2ludFxuICAgICAgfTtcblxuICAgICAgcmV0dXJuIGpzb247XG4gICAgfSwgY29udGV4dCk7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiU3VwcG9zaXRpb25cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbjtcblxuICAgIGluc3RhbnRpYXRlKChjb250ZXh0KSA9PiB7XG4gICAgICB1bnNlcmlhbGlzZSgoanNvbiwgY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB7IHN0cmluZyB9ID0ganNvbixcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdXBwb3NpdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgICBub2RlID0gc3VwcG9zaXRpb25Ob2RlLCAgLy8vXG4gICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudEZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgc3VwcG9zaXRpb24gPSBuZXcgU3VwcG9zaXRpb24oY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpO1xuICAgICAgfSwganNvbiwgY29udGV4dCk7XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3VwcG9zaXRpb25Ob2RlLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAgICAgc3RhdGVtZW50ID0gY29udGV4dC5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gIHJldHVybiBzdGF0ZW1lbnQ7XG59XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiU3VwcG9zaXRpb24iLCJQcm9vZkFzc2VydGlvbiIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsInN0YXRlbWVudCIsInByb2NlZHVyZUNhbGwiLCJnZXRQcm9jZWR1cmVDYWxsIiwiZ2V0U3VwcG9zaXRpb25Ob2RlIiwiZ2V0Tm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwiZmluZFN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRDb250ZXh0IiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzdXBwb3NpdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZ2V0U3RhdGVtZW50IiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImRlY2xhcmUiLCJhdHRlbXB0Iiwic3RhdGVtZW50VmFsaWRhdGVzIiwidmFsaWRhdGVTdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwidmFsaWRhdGVQcm9jZWR1cmVDYWxsIiwiY29tbWl0IiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ1bmlmaWVzSW5kZXBlbmRlbnRseSIsInJlY29uY2lsZSIsInN1cHBvc2l0aW9uQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNJbmRlcGVuZGVudGx5IiwicHJvY2VkdXJlQ2FsbFJlc29sdmVkSW5kZXBlbmRlbnRseSIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mU3RyaW5nIiwic3BzZWNmaWljQ29udGV4dCIsInVuaWZ5UHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uVW5pZmllcyIsInByb29mQXNzZXJ0aW9uU3RyaW5nIiwicHJvb2ZBc3NlcnRpb25Db250ZXh0IiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24iLCJpc1Byb29mQXNzZXJ0aW9uIiwidG9KU09OIiwic2VyaWFsaXNlIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwiYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwiaW5zdGFudGlhdGUiLCJ1bnNlcmlhbGlzZSIsImluc3RhbnRpYXRlU3VwcG9zaXRpb24iLCJicmVha1BvaW50RnJvbUpTT04iLCJzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlIiwicHJvY2VkdXJlQ2FsbEZyb21TdXBwb3NpdGlvbk5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Ozt1RUFSMkI7MEJBRUo7NkJBQ2U7eUJBQ1c7NEJBQ2M7eUJBQ2tCOzs7Ozs7TUFFakYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxvQkFBb0JDLHVCQUFjO0lBQzVELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsU0FBUyxFQUFFQyxhQUFhLENBQUU7UUFDdkUsS0FBSyxDQUFDTCxTQUFTQyxRQUFRQyxNQUFNQyxZQUFZQztRQUV6QyxJQUFJLENBQUNDLGFBQWEsR0FBR0E7SUFDdkI7SUFFQUMsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDRCxhQUFhO0lBQzNCO0lBRUFFLHFCQUFxQjtRQUNuQixNQUFNTCxPQUFPLElBQUksQ0FBQ00sT0FBTyxJQUNuQkMsa0JBQWtCUCxNQUFNLEdBQUc7UUFFakMsT0FBT087SUFDVDtJQUVBQyxtQkFBbUI7UUFDakIsTUFBTUQsa0JBQWtCLElBQUksQ0FBQ0Ysa0JBQWtCLElBQ3pDSSxnQkFBZ0JGLGdCQUFnQkMsZ0JBQWdCO1FBRXRELE9BQU9DO0lBQ1Q7SUFFQUMsd0JBQXdCO1FBQ3RCLElBQUlDLG9CQUFvQjtRQUV4QixNQUFNRixnQkFBZ0IsSUFBSSxDQUFDRCxnQkFBZ0I7UUFFM0MsSUFBSUMsa0JBQWtCLE1BQU07WUFDMUIsTUFBTUcsd0JBQXdCSCxjQUFjSSx3QkFBd0I7WUFFcEUsSUFBSUQsMEJBQTBCLE1BQU07Z0JBQ2xDLE1BQU1kLFVBQVUsSUFBSSxDQUFDZ0IsVUFBVTtnQkFFL0JILG9CQUFvQmIsUUFBUWlCLDRCQUE0QixDQUFDSDtZQUMzRDtRQUNGO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE1BQU1LLE9BQU9sQixPQUFPLEVBQUU7UUFDcEIsSUFBSW1CLFdBQVc7UUFFZixN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