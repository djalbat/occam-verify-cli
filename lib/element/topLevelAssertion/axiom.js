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
const _occamlanguages = require("occam-languages");
const _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("../topLevelAssertion"));
const _elements = require("../../elements");
const _context = require("../../utilities/context");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { asyncMatch } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Axiom extends _topLevelAssertion.default {
    getAxiomNode() {
        const node = this.getNode(), axiomNode = node; ///
        return axiomNode;
    }
    isSatisfiable() {
        const signature = this.getSignature(), satisfiable = signature !== null;
        return satisfiable;
    }
    async verify(context) {
        let verifies;
        await this.break(context);
        const axiomString = this.getString(); ///
        context.trace(`Verifying the '${axiomString}' axiom...`);
        const signatureVerifies = this.verifySignature(context);
        if (signatureVerifies) {
            verifies = await super.verify(context);
        }
        if (verifies) {
            const axiom = this; ///
            context.addAxiom(axiom);
            context.debug(`...verified the '${axiomString}' axiom.`);
        }
        return verifies;
    }
    verifySignature(context) {
        let signatureVerifies;
        const satisfiable = this.isSatisfiable();
        if (satisfiable) {
            const axiomString = this.getString(); ///
            context.trace(`Verifying the '${axiomString}' axiom's signature...`);
            const signature = this.getSignature();
            signatureVerifies = signature.verify(context);
            if (signatureVerifies) {
                context.trace(`...verified the '${axiomString}' axiom's signature.`);
            }
        } else {
            signatureVerifies = true;
        }
        return signatureVerifies;
    }
    unifySignature(signature, context) {
        let signatureUnifies;
        const axiomString = this.getString(), signatureString = signature.getString();
        context.trace(`Unifying the '${signatureString}' signature with the '${axiomString}' axiom...`);
        const specificSignature = signature; ///
        signature = this.getSignature();
        const generalSignature = signature; ///
        signatureUnifies = generalSignature.unifySignature(specificSignature, context);
        if (signatureUnifies) {
            context.debug(`...unified the '${signatureString}' signature with the '${axiomString}' axiom.`);
        }
        return signatureUnifies;
    }
    async unifyDeduction(deduction, context) {
        let deductionUnifies;
        await this.break(context);
        const axiomString = this.getString(), generalDeduction = this.deduction, specificDeduction = deduction, generalDeductionString = generalDeduction.getString(), specificDeductionString = specificDeduction.getString();
        context.trace(`Unifying the '${specificDeductionString}' deduction with the '${axiomString}' axiom's '${generalDeductionString}' deduction...`);
        const generalDeductionContext = generalDeduction.getContext(), specificDeductionContext = specificDeduction.getContext(), generalContext = generalDeductionContext, specificContext = specificDeductionContext; ///
        (0, _context.reconcile)((specificContext)=>{
            let statement;
            statement = specificDeduction.getStatement();
            const specificStatement = statement; ///
            statement = generalDeduction.getStatement();
            const generalStatement = statement, statementUnifies = generalStatement.unifyStatement(specificStatement, generalContext, specificContext);
            if (statementUnifies) {
                specificContext.commit(context);
                deductionUnifies = true;
            }
        }, specificContext);
        if (deductionUnifies) {
            context.debug(`...unified the '${specificDeductionString}' deduction with the '${axiomString}' axiom's '${generalDeductionString}' deduction.`);
        }
        return deductionUnifies;
    }
    async unifySupposition(supposition, index, context) {
        let suppositionUnifies = false;
        const specificSupposition = supposition; ///
        supposition = this.getSupposition(index);
        const axiomString = this.getString(), generalSupposition = supposition, generalSuppositionString = generalSupposition.getString(), specificSuppositionString = specificSupposition.getString();
        context.trace(`Unifying the '${specificSuppositionString}' supposition with the '${axiomString}' axiom's '${generalSuppositionString}' supposition...`);
        const generalSuppositionContext = generalSupposition.getContext(), specificSuppositionContext = specificSupposition.getContext(), generalContext = generalSuppositionContext, specificContext = specificSuppositionContext; ///
        (0, _context.reconcile)((specificContext)=>{
            let statement;
            statement = specificSupposition.getStatement();
            const specificStatement = statement; ///
            statement = generalSupposition.getStatement();
            const generalStatement = statement, statementUnifies = generalStatement.unifyStatement(specificStatement, generalContext, specificContext);
            if (statementUnifies) {
                specificContext.commit(context);
                suppositionUnifies = true;
            }
        }, specificContext);
        if (suppositionUnifies) {
            context.debug(`...unified the '${specificSuppositionString}' supposition with the '${axiomString}' axiom's '${generalSuppositionString}' supposition...`);
        }
        return suppositionUnifies;
    }
    async unifySuppositions(suppositions, context) {
        let suppositionsUnify;
        const specificSuppositions = suppositions; ///
        suppositions = this.getSuppositions();
        const generalSuppositions = suppositions; ///
        suppositionsUnify = await asyncMatch(generalSuppositions, specificSuppositions, async (generalSupposition, specificSupposition, index)=>{
            const supposition = specificSupposition, suppositionUnifies = await this.unifySupposition(supposition, index, context);
            if (suppositionUnifies) {
                return true;
            }
        });
        return suppositionsUnify;
    }
    async unifyTopLevelAssertion(topLevelAssertion, context) {
        let topLevelAssertionUnifies = false;
        const axiomString = this.getString(), topLevelAssertionString = topLevelAssertion.getString();
        context.trace(`Unifying the '${topLevelAssertionString}' top level assertion with the '${axiomString}' axiom...`);
        const hypothesesDischarged = await topLevelAssertion.dischargeHypotheses(context);
        if (hypothesesDischarged) {
            const deduction = topLevelAssertion.getDeduction(), deductionUnifies = await this.unifyDeduction(deduction, context);
            if (deductionUnifies) {
                const suppositions = topLevelAssertion.getSuppositions(), suppositionsUnify = await this.unifySuppositions(suppositions, context);
                if (suppositionsUnify) {
                    topLevelAssertionUnifies = true;
                }
            }
        }
        if (topLevelAssertionUnifies) {
            context.debug(`...unified the '${topLevelAssertionString}' top level assertion with the '${axiomString}' axiom.`);
        }
        return topLevelAssertionUnifies;
    }
    static name = "Axiom";
    static fromJSON(json, context) {
        return _topLevelAssertion.default.fromJSON(Axiom, json, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBhc3luY01hdGNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgZ2V0QXhpb21Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBheGlvbU5vZGU7XG4gIH1cblxuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gYXdhaXQgc3VwZXIudmVyaWZ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgYXhpb20gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVNpZ25hdHVyZShzaWduYXR1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVW5pZmllcztcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlU3RyaW5nID0gc2lnbmF0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY1NpZ25hdHVyZSA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTaWduYXR1cmUgPSBzaWduYXR1cmU7IC8vL1xuXG4gICAgc2lnbmF0dXJlVW5pZmllcyA9IGdlbmVyYWxTaWduYXR1cmUudW5pZnlTaWduYXR1cmUoc3BlY2lmaWNTaWduYXR1cmUsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVVbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uID0gdGhpcy5kZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb25TdHJpbmcgPSBnZW5lcmFsRGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uU3RyaW5nID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSdzICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxEZWR1Y3Rpb25Db250ZXh0ID0gZ2VuZXJhbERlZHVjdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb25Db250ZXh0ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbERlZHVjdGlvbkNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljRGVkdWN0aW9uQ29udGV4dDsgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgc3RhdGVtZW50ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IGdlbmVyYWxEZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGdlbmVyYWxTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSdzICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSB0aGlzLmdldFN1cHBvc2l0aW9uKGluZGV4KTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmcgPSBnZW5lcmFsU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20ncyAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9uQ29udGV4dCA9IGdlbmVyYWxTdXBwb3NpdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbkNvbnRleHQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTdXBwb3NpdGlvbkNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3VwcG9zaXRpb25Db250ZXh0OyAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBjb25zdCBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBnZW5lcmFsU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGdlbmVyYWxTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3MgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZ5O1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zOyAvLy9cblxuICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gYXdhaXQgYXN5bmNNYXRjaChnZW5lcmFsU3VwcG9zaXRpb25zLCBzcGVjaWZpY1N1cHBvc2l0aW9ucywgYXN5bmMgKGdlbmVyYWxTdXBwb3NpdGlvbiwgc3BlY2lmaWNTdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gc3BlY2lmaWNTdXBwb3NpdGlvbiwgIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVzID0gYXdhaXQgdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICBhc3luYyB1bmlmeVRvcExldmVsQXNzZXJ0aW9uKHRvcExldmVsQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2VzRGlzY2hhcmdlZCA9IGF3YWl0IHRvcExldmVsQXNzZXJ0aW9uLmRpc2NoYXJnZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc0Rpc2NoYXJnZWQpIHtcbiAgICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IGF3YWl0IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gYXdhaXQgdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkF4aW9tXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBjb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiYXN5bmNNYXRjaCIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIkF4aW9tIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJnZXRBeGlvbU5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImF4aW9tTm9kZSIsImlzU2F0aXNmaWFibGUiLCJzaWduYXR1cmUiLCJnZXRTaWduYXR1cmUiLCJzYXRpc2ZpYWJsZSIsInZlcmlmeSIsImNvbnRleHQiLCJ2ZXJpZmllcyIsImJyZWFrIiwiYXhpb21TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInNpZ25hdHVyZVZlcmlmaWVzIiwidmVyaWZ5U2lnbmF0dXJlIiwiYXhpb20iLCJhZGRBeGlvbSIsImRlYnVnIiwidW5pZnlTaWduYXR1cmUiLCJzaWduYXR1cmVVbmlmaWVzIiwic2lnbmF0dXJlU3RyaW5nIiwic3BlY2lmaWNTaWduYXR1cmUiLCJnZW5lcmFsU2lnbmF0dXJlIiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwiZ2VuZXJhbERlZHVjdGlvbiIsInNwZWNpZmljRGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvblN0cmluZyIsInNwZWNpZmljRGVkdWN0aW9uU3RyaW5nIiwiZ2VuZXJhbERlZHVjdGlvbkNvbnRleHQiLCJnZXRDb250ZXh0Iiwic3BlY2lmaWNEZWR1Y3Rpb25Db250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJyZWNvbmNpbGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJjb21taXQiLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZXRTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJnZW5lcmFsU3VwcG9zaXRpb25Db250ZXh0Iiwic3BlY2lmaWNTdXBwb3NpdGlvbkNvbnRleHQiLCJ1bmlmeVN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5Iiwic3BlY2lmaWNTdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zIiwidW5pZnlUb3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJoeXBvdGhlc2VzRGlzY2hhcmdlZCIsImRpc2NoYXJnZUh5cG90aGVzZXMiLCJnZXREZWR1Y3Rpb24iLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFXQTs7O2VBQUE7OztnQ0FUc0M7MEVBRVI7MEJBRVA7eUJBQ0c7Ozs7OztBQUUxQixNQUFNLEVBQUVBLFVB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