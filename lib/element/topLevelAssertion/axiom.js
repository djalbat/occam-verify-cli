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
        const specificDeductionContext = specificDeduction.getContext(), generalDeductionContext = generalDeduction.getContext(), specificContext = specificDeductionContext, generalContext = generalDeductionContext; ///
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
        const specificSuppositionContext = specificSupposition.getContext(), generalSuppositionContext = generalSupposition.getContext(), specificContext = specificSuppositionContext, generalContext = generalSuppositionContext; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyByZWNvbmNpbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBhc3luY01hdGNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgZ2V0QXhpb21Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBheGlvbU5vZGU7XG4gIH1cblxuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gYXdhaXQgc3VwZXIudmVyaWZ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgYXhpb20gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVNpZ25hdHVyZShzaWduYXR1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVW5pZmllcztcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlU3RyaW5nID0gc2lnbmF0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY1NpZ25hdHVyZSA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTaWduYXR1cmUgPSBzaWduYXR1cmU7IC8vL1xuXG4gICAgc2lnbmF0dXJlVW5pZmllcyA9IGdlbmVyYWxTaWduYXR1cmUudW5pZnlTaWduYXR1cmUoc3BlY2lmaWNTaWduYXR1cmUsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVVbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uID0gdGhpcy5kZWR1Y3Rpb24sICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbiwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb25TdHJpbmcgPSBnZW5lcmFsRGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uU3RyaW5nID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSdzICcke2dlbmVyYWxEZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljRGVkdWN0aW9uQ29udGV4dCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldENvbnRleHQoKSxcbiAgICAgICAgICBnZW5lcmFsRGVkdWN0aW9uQ29udGV4dCA9IGdlbmVyYWxEZWR1Y3Rpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IHNwZWNpZmljRGVkdWN0aW9uQ29udGV4dCwgIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gZ2VuZXJhbERlZHVjdGlvbkNvbnRleHQ7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGxldCBzdGF0ZW1lbnQ7XG5cbiAgICAgIHN0YXRlbWVudCA9IHNwZWNpZmljRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBjb25zdCBzcGVjaWZpY1N0YXRlbWVudCA9IHN0YXRlbWVudDsgIC8vL1xuXG4gICAgICBzdGF0ZW1lbnQgPSBnZW5lcmFsRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsU3RhdGVtZW50ID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBnZW5lcmFsU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgc3BlY2lmaWNDb250ZXh0LmNvbW1pdChjb250ZXh0KTtcblxuICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20ncyAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gdGhpcy5nZXRTdXBwb3NpdGlvbihpbmRleCk7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gZ2VuZXJhbFN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3MgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb25Db250ZXh0ID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uQ29udGV4dCA9IGdlbmVyYWxTdXBwb3NpdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdXBwb3NpdGlvbkNvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTdXBwb3NpdGlvbkNvbnRleHQ7IC8vL1xuXG4gICAgcmVjb25jaWxlKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIGxldCBzdGF0ZW1lbnQ7XG5cbiAgICAgIHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIGNvbnN0IHNwZWNpZmljU3RhdGVtZW50ID0gc3RhdGVtZW50OyAgLy8vXG5cbiAgICAgIHN0YXRlbWVudCA9IGdlbmVyYWxTdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZ2VuZXJhbFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoY29udGV4dCk7XG5cbiAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3BlY2lmaWNTdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20ncyAnJHtnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZnk7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7IC8vL1xuXG4gICAgc3VwcG9zaXRpb25zVW5pZnkgPSBhd2FpdCBhc3luY01hdGNoKGdlbmVyYWxTdXBwb3NpdGlvbnMsIHNwZWNpZmljU3VwcG9zaXRpb25zLCBhc3luYyAoZ2VuZXJhbFN1cHBvc2l0aW9uLCBzcGVjaWZpY1N1cHBvc2l0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBzcGVjaWZpY1N1cHBvc2l0aW9uLCAgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBhd2FpdCB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24odG9wTGV2ZWxBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSBhd2FpdCB0aGlzLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgY29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IGF3YWl0IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBeGlvbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihBeGlvbSwganNvbiwgY29udGV4dCk7IH1cbn0pO1xuIl0sIm5hbWVzIjpbImFzeW5jTWF0Y2giLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJBeGlvbSIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0QXhpb21Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJheGlvbU5vZGUiLCJpc1NhdGlzZmlhYmxlIiwic2lnbmF0dXJlIiwiZ2V0U2lnbmF0dXJlIiwic2F0aXNmaWFibGUiLCJ2ZXJpZnkiLCJjb250ZXh0IiwidmVyaWZpZXMiLCJicmVhayIsImF4aW9tU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzaWduYXR1cmVWZXJpZmllcyIsInZlcmlmeVNpZ25hdHVyZSIsImF4aW9tIiwiYWRkQXhpb20iLCJkZWJ1ZyIsInVuaWZ5U2lnbmF0dXJlIiwic2lnbmF0dXJlVW5pZmllcyIsInNpZ25hdHVyZVN0cmluZyIsInNwZWNpZmljU2lnbmF0dXJlIiwiZ2VuZXJhbFNpZ25hdHVyZSIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsImdlbmVyYWxEZWR1Y3Rpb24iLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb25TdHJpbmciLCJzcGVjaWZpY0RlZHVjdGlvblN0cmluZyIsInNwZWNpZmljRGVkdWN0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsRGVkdWN0aW9uQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwicmVjb25jaWxlIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3BlY2lmaWNTdGF0ZW1lbnQiLCJnZW5lcmFsU3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwiY29tbWl0IiwidW5pZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uIiwiaW5kZXgiLCJzdXBwb3NpdGlvblVuaWZpZXMiLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwiZ2V0U3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb25TdHJpbmciLCJzcGVjaWZpY1N1cHBvc2l0aW9uU3RyaW5nIiwic3BlY2lmaWNTdXBwb3NpdGlvbkNvbnRleHQiLCJnZW5lcmFsU3VwcG9zaXRpb25Db250ZXh0IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNVbmlmeSIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsInVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0RGVkdWN0aW9uIiwibmFtZSIsImZyb21KU09OIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBV0E7OztlQUFBOzs7Z0NBVHNDOzBFQUVSOzBCQUVQO3lCQUNHOzs7Ozs7QUFFMUIsTUFBTSxFQUFFQSxVQUFVLEVBQUUsR0FBR0MscUNBQXFCO01BRTVDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsMEJBQWlCO0lBQ3pEQyxlQUFlO1FBQ2IsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFlBQVlGLE1BQU0sR0FBRztRQUUzQixPQUFPRTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLFlBQVksSUFBSSxDQUFD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