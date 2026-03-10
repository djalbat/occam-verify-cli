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
        const proofAssertionContext = proofAssertion.getContext(), suppositionContext = this.getContext(), generalContext = suppositionContext, specificContext = proofAssertionContext, statementUnifies = (0, _context.liminally)((specificContext)=>{
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
        const supposition = (0, _context.literally)((context)=>{
            const { string } = json, suppositionNode = (0, _instantiate.instantiateSupposition)(string, context), node = suppositionNode, statement = (0, _element.statementFromSuppositionNode)(suppositionNode, context), procedureCall = (0, _element.procedureCallFromSuppositionNode)(suppositionNode, context), supposition = new Supposition(context, string, node, statement, procedureCall);
            return supposition;
        }, context);
        return supposition;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3Byb29mQXNzZXJ0aW9uL3N1cHBvc2l0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvb2ZBc3NlcnRpb24gZnJvbSBcIi4uL3Byb29mQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgaW5zdGFudGlhdGVTdXBwb3NpdGlvbn0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvaW5zdGFudGlhdGVcIjtcbmltcG9ydCB7IGF0dGVtcHQsIGxpbWluYWxseSwgbGl0ZXJhbGx5IH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRGcm9tU3VwcG9zaXRpb25Ob2RlLCBwcm9jZWR1cmVDYWxsRnJvbVN1cHBvc2l0aW9uTm9kZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZWxlbWVudFwiO1xuaW1wb3J0IHsgZXBoZW1lcmFsQ29udGV4dEZyb21KU09OLCBlcGhlbWVyYWxDb250ZXh0VG9FcGhlbWVyYWxDb250ZXh0SlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgU3VwcG9zaXRpb24gZXh0ZW5kcyBQcm9vZkFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgc3RhdGVtZW50LCBwcm9jZWR1cmVDYWxsKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBzdGF0ZW1lbnQpO1xuXG4gICAgdGhpcy5wcm9jZWR1cmVDYWxsID0gcHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFByb2NlZHVyZUNhbGwoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvY2VkdXJlQ2FsbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25Ob2RlO1xuICB9XG5cbiAgaXNTdGF0ZWQoKSB7XG4gICAgY29uc3Qgc3RhdGVkID0gdHJ1ZTsgLy8vXG5cbiAgICByZXR1cm4gc3RhdGVkO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKChzdGF0ZW1lbnQgIT09IG51bGwpIHx8IChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSkge1xuICAgICAgY29uc3QgdmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZShjb250ZXh0KTtcblxuICAgICAgaWYgKHZhbGlkYXRlcykge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFVuYWJsZSB0byB2YWxpZGF0ZSB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiBiZWNhdXNlIGl0IGlzIG5vbnNlbnNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlKGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmFsaWRhdHRpbmcgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGF0dGVtcHQoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBwcm9jZWR1cmVDYWxsID0gdGhpcy5nZXRQcm9jZWR1cmVDYWxsKCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVtZW50VmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVN0YXRlbWVudChjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VmFsaWRhdGVzKSB7XG4gICAgICAgICAgdGhpcy5zZXRDb250ZXh0KGNvbnRleHQpO1xuXG4gICAgICAgICAgdmFsaWRhdGVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2VkdXJlQ2FsbCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBwcm9jZWR1cmVDYWxsVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVByb2NlZHVyZUNhbGwoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgICAgICB0aGlzLnNldENvbnRleHQoY29udGV4dCk7XG5cbiAgICAgICAgICB2YWxpZGF0ZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmFsaWRhdGVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52YWxpZGF0ZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlcztcbiAgfVxuXG4gIHZhbGlkYXRlUHJvY2VkdXJlQ2FsbChjb250ZXh0KSB7XG4gICAgbGV0IHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbFN0cmluZyA9IHRoaXMucHJvY2VkdXJlQ2FsbC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZhbGlkYXR0aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uJ3MgJyR7cHJvY2VkdXJlQ2FsbFN0cmluZ30nIHByb2NlZHVyZSBjYWxsLi4uYCk7XG5cbiAgICBjb25zdCBwcm9jZWR1cmVDYWxsID0gdGhpcy5wcm9jZWR1cmVDYWxsLnZhbGlkYXRlKGNvbnRleHQpO1xuXG4gICAgaWYgKHByb2NlZHVyZUNhbGwgIT09IG51bGwpIHtcbiAgICAgIHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMgPXRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb2NlZHVyZUNhbGxWYWxpZGF0ZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZhbGlkYXRlZCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbidzICcke3Byb2NlZHVyZUNhbGxTdHJpbmd9JyBwcm9jZWR1cmUgY2FsbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlQ2FsbFZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uLCAgLy8vXG4gICAgICBnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBzdGF0ZW1lbnRVbmlmaWVzOyAgLy8vXG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gd2l0aCB0aGUgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmcgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nfScgc3VicHJvb2Ygb3IgcHJvb2YgYXNzZXJ0aW9uIHdpdGggdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmlzUHJvb2ZBc3NlcnRpb24oKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb29mQXNzZXJ0aW9uID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uUHJvb2ZBc3NlcnRpb24gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VicHJvb2YgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb247XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZlVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9uU3RyaW5nID0gcHJvb2ZBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25Db250ZXh0ID0gcHJvb2ZBc3NlcnRpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uQ29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gc3VwcG9zaXRpb25Db250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBwcm9vZkFzc2VydGlvbkNvbnRleHQsXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGxpbWluYWxseSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnQgPSBwcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7c3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBwcm9vZiBhc3NlcnRpb24gd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBpZiAoc3RhdGVtZW50ICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gc3RhdGVtZW50LmdldE5vZGUoKSxcbiAgICAgICAgICAgIHN1YnByb29mQXNzZXJ0aW9uTm9kZSA9IHN0YXRlbWVudE5vZGUuZ2V0U3VicHJvb2ZBc3NlcnRpb25Ob2RlKCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZkFzc2VydGlvbk5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IGdlbmVyYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgICAgYXNzZXJ0aW9uTm9kZSA9IHN1YnByb29mQXNzZXJ0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgICBhc3NlcnRpb24gPSBjb250ZXh0LmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSlcblxuICAgICAgICBpZiAoYXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZBc3NlcnRpb24gPSBhc3NlcnRpb247ICAvLy9cblxuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHN1YnByb29mQXNzZXJ0aW9uLnVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCkge1xuICAgIGxldCB1bmlmaWVzSW5kZXBlbmRlbnRseSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIGluZGVwZW5kZW50bHkuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHRoaXMuZ2V0UHJvY2VkdXJlQ2FsbCgpO1xuXG4gICAgaWYgKHN0YXRlbWVudCAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkgPSBzdGF0ZW1lbnQudW5pZnlJbmRlcGVuZGVudGx5KGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgdW5pZmllc0luZGVwZW5kZW50bHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwcm9jZWR1cmVDYWxsICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJvY2VkdXJlQ2FsbC51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHVuaWZpZXNJbmRlcGVuZGVudGx5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24gaW5kZXBlbmRlbmx5LmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzSW5kZXBlbmRlbnRseTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBlcGhlbWVyYWxDb250ZXh0SlNPTiA9IGVwaGVtZXJhbENvbnRleHRUb0VwaGVtZXJhbENvbnRleHRKU09OKGVwaGVtZXJhbENvbnRleHQpLFxuICAgICAgICAgIGNvbnRleHRKU09OID0gZXBoZW1lcmFsQ29udGV4dEpTT047IC8vL1xuXG4gICAgY29udGV4dCA9IGNvbnRleHRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgICAgc3RyaW5nXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlN1cHBvc2l0aW9uXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dEZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgY29udGV4dCA9IGVwaGVtZXJhbENvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSBsaXRlcmFsbHkoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25Ob2RlID0gaW5zdGFudGlhdGVTdXBwb3NpdGlvbihzdHJpbmcsIGNvbnRleHQpLFxuICAgICAgICAgICAgbm9kZSA9IHN1cHBvc2l0aW9uTm9kZSwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgICAgcHJvY2VkdXJlQ2FsbCA9IHByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbiA9IG5ldyBTdXBwb3NpdGlvbihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHN0YXRlbWVudCwgcHJvY2VkdXJlQ2FsbCk7XG5cbiAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxufSk7XG5cbiJdLCJuYW1lcyI6WyJkZWZpbmUiLCJTdXBwb3NpdGlvbiIsIlByb29mQXNzZXJ0aW9uIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJzdGF0ZW1lbnQiLCJwcm9jZWR1cmVDYWxsIiwiZ2V0UHJvY2VkdXJlQ2FsbCIsImdldFN1cHBvc2l0aW9uTm9kZSIsImdldE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJpc1N0YXRlZCIsInN0YXRlZCIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJzdXBwb3NpdGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZ2V0U3RhdGVtZW50IiwidmFsaWRhdGVzIiwidmFsaWRhdGUiLCJkZWJ1ZyIsImF0dGVtcHQiLCJzdGF0ZW1lbnRWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVN0YXRlbWVudCIsInNldENvbnRleHQiLCJwcm9jZWR1cmVDYWxsVmFsaWRhdGVzIiwidmFsaWRhdGVQcm9jZWR1cmVDYWxsIiwicHJvY2VkdXJlQ2FsbFN0cmluZyIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25Qcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbiIsInN1YnByb29mIiwicHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlQcm9vZkFzc2VydGlvbiIsInN1YnByb29mVW5pZmllcyIsInVuaWZ5U3VicHJvb2YiLCJwcm9vZkFzc2VydGlvblN0cmluZyIsInByb29mQXNzZXJ0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJzdXBwb3NpdGlvbkNvbnRleHQiLCJsaW1pbmFsbHkiLCJjb21taXQiLCJzdWJwcm9vZlN0cmluZyIsInN0YXRlbWVudE5vZGUiLCJzdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJnZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsInN1YnByb29mQXNzZXJ0aW9uIiwic3Vic3RpdHV0aW9ucyIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInVuaWZpZXNJbmRlcGVuZGVudGx5Iiwic3RhdGVtZW50VW5pZmllc0luZGVwZW5kZW50bHkiLCJwcm9jZWR1cmVDYWxsUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwidG9KU09OIiwiZXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHRKU09OIiwiZXBoZW1lcmFsQ29udGV4dFRvRXBoZW1lcmFsQ29udGV4dEpTT04iLCJjb250ZXh0SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04iLCJsaXRlcmFsbHkiLCJpbnN0YW50aWF0ZVN1cHBvc2l0aW9uIiwic3RhdGVtZW50RnJvbVN1cHBvc2l0aW9uTm9kZSIsInByb2NlZHVyZUNhbGxGcm9tU3VwcG9zaXRpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7Ozt1RUFSMkI7MEJBRUo7NkJBQ2U7eUJBQ1E7eUJBQ2lDO3NCQUNFOzs7Ozs7TUFFakYsV0FBZUEsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxvQkFBb0JDLHVCQUFjO0lBQzVELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsYUFBYSxDQUFFO1FBQzNELEtBQUss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