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
        const deduction = topLevelAssertion.getDeduction(), deductionUnifies = await this.unifyDeduction(deduction, context);
        if (deductionUnifies) {
            const suppositions = topLevelAssertion.getSuppositions(), suppositionsUnify = await this.unifySuppositions(suppositions, context);
            if (suppositionsUnify) {
                topLevelAssertionUnifies = true;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBhc3luY01hdGNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgZ2V0QXhpb21Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBheGlvbU5vZGU7XG4gIH1cblxuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gYXdhaXQgc3VwZXIudmVyaWZ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgYXhpb20gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVNpZ25hdHVyZShzaWduYXR1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVW5pZmllcztcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlU3RyaW5nID0gc2lnbmF0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY1NpZ25hdHVyZSA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTaWduYXR1cmUgPSBzaWduYXR1cmU7IC8vL1xuXG4gICAgc2lnbmF0dXJlVW5pZmllcyA9IGdlbmVyYWxTaWduYXR1cmUudW5pZnlTaWduYXR1cmUoc3BlY2lmaWNTaWduYXR1cmUsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVVbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uID0gdGhpcy5kZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb25TdHJpbmcgPSBnZW5lcmFsRGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uU3RyaW5nID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSdzICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IGdlbmVyYWxEZWR1Y3Rpb25Db250ZXh0ID0gZ2VuZXJhbERlZHVjdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb25Db250ZXh0ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbERlZHVjdGlvbkNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljRGVkdWN0aW9uQ29udGV4dDsgLy8vXG5cbiAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgbGV0IHN0YXRlbWVudDtcblxuICAgICAgc3RhdGVtZW50ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IGdlbmVyYWxEZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGdlbmVyYWxTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSdzICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSB0aGlzLmdldFN1cHBvc2l0aW9uKGluZGV4KTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb24sICAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmcgPSBnZW5lcmFsU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20ncyAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9uQ29udGV4dCA9IGdlbmVyYWxTdXBwb3NpdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbkNvbnRleHQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTdXBwb3NpdGlvbkNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljU3VwcG9zaXRpb25Db250ZXh0OyAvLy9cblxuICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgICBzdGF0ZW1lbnQgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBjb25zdCBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBnZW5lcmFsU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllcyA9IGdlbmVyYWxTdGF0ZW1lbnQudW5pZnlTdGF0ZW1lbnQoc3BlY2lmaWNTdGF0ZW1lbnQsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KGNvbnRleHQpO1xuXG4gICAgICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3MgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZ5O1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zOyAvLy9cblxuICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gYXdhaXQgYXN5bmNNYXRjaChnZW5lcmFsU3VwcG9zaXRpb25zLCBzcGVjaWZpY1N1cHBvc2l0aW9ucywgYXN5bmMgKGdlbmVyYWxTdXBwb3NpdGlvbiwgc3BlY2lmaWNTdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gc3BlY2lmaWNTdXBwb3NpdGlvbiwgIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVzID0gYXdhaXQgdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICBhc3luYyB1bmlmeVRvcExldmVsQXNzZXJ0aW9uKHRvcExldmVsQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb24gPSB0b3BMZXZlbEFzc2VydGlvbi5nZXREZWR1Y3Rpb24oKSxcbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gYXdhaXQgdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHRvcExldmVsQXNzZXJ0aW9uLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSBhd2FpdCB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oQXhpb20sIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY01hdGNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiQXhpb20iLCJUb3BMZXZlbEFzc2VydGlvbiIsImdldEF4aW9tTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiYXhpb21Ob2RlIiwiaXNTYXRpc2ZpYWJsZSIsInNpZ25hdHVyZSIsImdldFNpZ25hdHVyZSIsInNhdGlzZmlhYmxlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwiYnJlYWsiLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJheGlvbSIsImFkZEF4aW9tIiwiZGVidWciLCJ1bmlmeVNpZ25hdHVyZSIsInNpZ25hdHVyZVVuaWZpZXMiLCJzaWduYXR1cmVTdHJpbmciLCJzcGVjaWZpY1NpZ25hdHVyZSIsImdlbmVyYWxTaWduYXR1cmUiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJnZW5lcmFsRGVkdWN0aW9uIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uU3RyaW5nIiwic3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmciLCJnZW5lcmFsRGVkdWN0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJzcGVjaWZpY0RlZHVjdGlvbkNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInJlY29uY2lsZSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInNwZWNpZmljU3RhdGVtZW50IiwiZ2VuZXJhbFN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsImNvbW1pdCIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdldFN1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nIiwic3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZyIsImdlbmVyYWxTdXBwb3NpdGlvbkNvbnRleHQiLCJzcGVjaWZpY1N1cHBvc2l0aW9uQ29udGV4dCIsInVuaWZ5U3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zVW5pZnkiLCJzcGVjaWZpY1N1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnMiLCJ1bmlmeVRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsImdldERlZHVjdGlvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVdBOzs7ZUFBQTs7O2dDQVRzQzswRUFFUjswQkFFUDt5QkFDRzs7Ozs7O0FBRTFCLE1BQU0sRUFBRUEsVUFBVSxFQUFFLEdBQUdDLHFDQUFxQjtNQUU1QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLDBCQUFpQjtJQUN6REMsZUFBZTtRQUNiLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxZQUFZRixNQUFNLEdBQUc7UUFFM0IsT0FBT0U7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxZQUFZLElBQUksQ0FBQ0Ms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