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
            (0, _context.declare)((context)=>{
                const validates = this.validate(context);
                if (validates) {
                    verifies = true;
                }
            }, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdXBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9lbGVtZW50XCI7XG5pbXBvcnQgeyBicmVha1BvaW50RnJvbUpTT04sIGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9icmVha1BvaW50XCI7XG5pbXBvcnQgeyBkZWNsYXJlLCBhdHRlbXB0LCByZWNvbmNpbGUsIHNlcmlhbGlzZSwgdW5zZXJpYWxpc2UsIGluc3RhbnRpYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBTdXBwb3NpdGlvbiBleHRlbmRzIFByb29mQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBzdGF0ZW1lbnQsIHByb2NlZHVyZUNhbGwpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHN0YXRlbWVudCk7XG5cbiAgICB0aGlzLnByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlQ2FsbCgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9jZWR1cmVDYWxsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbk5vZGU7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnROb2RlKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uTm9kZSA9IHRoaXMuZ2V0U3VwcG9zaXRpb25Ob2RlKCksXG4gICAgICAgICAgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50Tm9kZTtcbiAgfVxuXG4gIGZpbmRTdWJwcm9vZkFzc2VydGlvbigpIHtcbiAgICBsZXQgc3VicHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHRoaXMuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnQgIT09IG51bGwpIHx8IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSkge1xuICAgICAgZGVjbGFyZSgoY29udGV4dCkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZXMgPSB0aGlzLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgICAgIGlmICh2YWxpZGF0ZXMpIHtcbiAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGBVbmFibGUgdG8gdmFsaWRhdGUgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gYmVjYXVzZSBpdCBpcyBub25zZW5zZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2YWxpZGF0ZShjb250ZXh0KSB7XG4gICAgbGV0IHZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXR0aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBhdHRlbXB0KChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHN0YXRlbWVudFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVTdGF0ZW1lbnQoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFZhbGlkYXRlcykge1xuICAgICAgICAgIHZhbGlkYXRlcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyA9IHRoaXMudmFsaWRhdGVQcm9jZWR1cmVDYWxsKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICAgIHRoaXMuY29tbWl0KGNvbnRleHQpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmFsaWRhdGVkIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFZhbGlkYXRlcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbidzIHN0YXRlbWVudC4uLiBgKTtcblxuICAgIGxldCBzdGF0ZW1lbnQ7XG5cbiAgICBzdGF0ZW1lbnQgPSB0aGlzLmdldFN0YXRlbWVudCgpO1xuXG4gICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnZhbGlkYXRlKGNvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBzdGF0ZW1lbnRWYWxpZGF0ZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBzdGF0ZW1lbnQuIGApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRWYWxpZGF0ZXM7XG4gIH1cblxuICB2YWxpZGF0ZVByb2NlZHVyZUNhbGwoY29udGV4dCkge1xuICAgIGxldCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb2NlZHVyZUNhbGxTdHJpbmcgPSB0aGlzLnByb2NlZHVyZUNhbGwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWYWxpZGF0dGluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbidzICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC4uLmApO1xuXG4gICAgY29uc3QgcHJvY2VkdXJlQ2FsbCA9IHRoaXMucHJvY2VkdXJlQ2FsbC52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID10cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsVmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24ncyAnJHtwcm9jZWR1cmVDYWxsU3RyaW5nfScgcHJvY2VkdXJlIGNhbGwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uID0gc3VwcG9zaXRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IHN0YXRlbWVudFVuaWZpZXM7ICAvLy9cblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc0luZGVwZW5kZW50bHkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVudGx5Li4uYCk7XG5cbiAgICBhd2FpdCByZWNvbmNpbGUoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25Db250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gc3VwcG9zaXRpb25Db250ZXh0LCAgLy8vXG4gICAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkpIHtcbiAgICAgICAgICB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh1bmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBpbmRlcGVuZGVudGx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZkFzc2VydGlvbiA9IHRoaXMuZmluZFN1YnByb29mQXNzZXJ0aW9uKCk7XG5cbiAgICBpZiAoc3VicHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBzdXBwb3NpdGlvbkNvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3BzZWNmaWljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBzdWJwcm9vZlVuaWZpZXMgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVN1YnByb29mKHN1YnByb29mLCBnZW5lcmFsQ29udGV4dCwgc3BzZWNmaWljQ29udGV4dCk7XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBwcm9vZkFzc2VydGlvblN0cmluZyA9IHByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3Byb29mQXNzZXJ0aW9uU3RyaW5nfScgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbkNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSwgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBzdXBwb3NpdGlvbkNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHByb29mQXNzZXJ0aW9uQ29udGV4dDsgIC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHByb29mQXNzZXJ0aW9uLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICBwcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtwcm9vZkFzc2VydGlvblN0cmluZ30nIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbjtcblxuICAgIHJlY29uY2lsZSgoY29udGV4dCkgPT4ge1xuICAgICAgaWYgKHByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBjb250ZXh0LmNvbW1pdCgpO1xuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHJldHVybiBzZXJpYWxpc2UoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICAgIGxldCBicmVha1BvaW50O1xuXG4gICAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgICBjb25zdCBqc29uID0ge1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBzdHJpbmcsXG4gICAgICAgIGJyZWFrUG9pbnRcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBqc29uO1xuICAgIH0sIGNvbnRleHQpO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1cHBvc2l0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb247XG5cbiAgICBpbnN0YW50aWF0ZSgoY29udGV4dCkgPT4ge1xuICAgICAgdW5zZXJpYWxpc2UoKGpzb24sIGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgeyBzdHJpbmcgfSA9IGpzb24sXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZSA9IGluc3RhbnRpYXRlU3VwcG9zaXRpb24oc3RyaW5nLCBjb250ZXh0KSxcbiAgICAgICAgICAgICAgbm9kZSA9IHN1cHBvc2l0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEZyb21KU09OKGpzb24pLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICAgIHByb2NlZHVyZUNhbGwgPSBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgIHN1cHBvc2l0aW9uID0gbmV3IFN1cHBvc2l0aW9uKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKTtcbiAgICAgIH0sIGpzb24sIGNvbnRleHQpO1xuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG59KTtcblxuZnVuY3Rpb24gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHN1cHBvc2l0aW9uTm9kZS5nZXRTdGF0ZW1lbnROb2RlKCksXG4gICAgICAgIHN0YXRlbWVudCA9IGNvbnRleHQuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICByZXR1cm4gc3RhdGVtZW50O1xufVxuIl0sIm5hbWVzIjpbImRlZmluZSIsIlN1cHBvc2l0aW9uIiwiUHJvb2ZBc3NlcnRpb24iLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldFN1cHBvc2l0aW9uTm9kZSIsImdldE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsImZpbmRTdWJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlIiwiZ2V0Q29udGV4dCIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwic3VwcG9zaXRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImdldFN0YXRlbWVudCIsImRlY2xhcmUiLCJ2YWxpZGF0ZXMiLCJ2YWxpZGF0ZSIsImRlYnVnIiwiYXR0ZW1wdCIsInN0YXRlbWVudFZhbGlkYXRlcyIsInZhbGlkYXRlU3RhdGVtZW50IiwicHJvY2VkdXJlQ2FsbFZhbGlkYXRlcyIsInZhbGlkYXRlUHJvY2VkdXJlQ2FsbCIsImNvbW1pdCIsInByb2NlZHVyZUNhbGxTdHJpbmciLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmciLCJzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZmllc0luZGVwZW5kZW50bHkiLCJyZWNvbmNpbGUiLCJzdXBwb3NpdGlvbkNvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzSW5kZXBlbmRlbnRseSIsInByb2NlZHVyZUNhbGxSZXNvbHZlZEluZGVwZW5kZW50bHkiLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsInNwc2VjZmlpY0NvbnRleHQiLCJ1bmlmeVByb29mQXNzZXJ0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvblVuaWZpZXMiLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uIiwiaXNQcm9vZkFzc2VydGlvbiIsInRvSlNPTiIsInNlcmlhbGlzZSIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImluc3RhbnRpYXRlIiwidW5zZXJpYWxpc2UiLCJpbnN0YW50aWF0ZVN1cHBvc2l0aW9uIiwiYnJlYWtQb2ludEZyb21KU09OIiwic3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7dUVBUjJCOzBCQUVKOzZCQUNlO3lCQUNXOzRCQUNjO3lCQUNrQjs7Ozs7O01BRWpGLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsb0JBQW9CQyx1QkFBYztJQUM1RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxDQUFFO1FBQ3ZFLEtBQUssQ0FBQ0wsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUM7UUFFekMsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO0lBQ3ZCO0lBRUFDLG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQ0QsYUFBYTtJQUMzQjtJQUVBRSxxQkFBcUI7UUFDbkIsTUFBTUwsT0FBTyxJQUFJLENBQUNNLE9BQU8sSUFDbkJDLGtCQUFrQlAsTUFBTSxHQUFHO1FBRWpDLE9BQU9PO0lBQ1Q7SUFFQUMsbUJBQW1CO1FBQ2pCLE1BQU1ELGtCQUFrQixJQUFJLENBQUNGLGtCQUFrQixJQUN6Q0ksZ0JBQWdCRixnQkFBZ0JDLGdCQUFnQjtRQUV0RCxPQUFPQztJQUNUO0lBRUFDLHdCQUF3QjtRQUN0QixJQUFJQyxvQkFBb0I7UUFFeEIsTUFBTUYsZ0JBQWdCLElBQUksQ0FBQ0QsZ0JBQWdCO1FBRTNDLElBQUlDLGtCQUFrQixNQUFNO1lBQzFCLE1BQU1HLHdCQUF3QkgsY0FBY0ksd0JBQXdCO1lBRXBFLElBQUlELDBCQUEwQixNQUFNO2dCQUNsQyxNQUFNZCxVQUFVLElBQUksQ0FBQ2dCLFVBQVU7Z0JBRS9CSCxvQkFBb0JiLFFBQVFpQiw0QkFBNEIsQ0FBQ0g7WUFDM0Q7UUFDRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQSxNQUFNSyxPQUFPbEIsT0FBTyxFQUFFO1FBQ3BCLElBQUltQixXQUFXO1FBRWYsTUFBTSxJQUFJLENBQUNDLEtBQUssQ0FBQ3BC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