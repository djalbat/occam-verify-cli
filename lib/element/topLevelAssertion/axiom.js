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
        const generalSignature = signature, specificContext = context, generalContext = null;
        signatureUnifies = generalSignature.unifySignature(specificSignature, generalContext, specificContext);
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
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                let statement;
                statement = specificDeduction.getStatement();
                const specificStatement = statement; ///
                statement = generalDeduction.getStatement();
                const generalStatement = statement, statementUnifies = generalStatement.unifyStatement(specificStatement, generalContext, specificContext);
                if (statementUnifies) {
                    specificContext.commit();
                    deductionUnifies = true;
                }
            }, specificContext);
        }, specificContext, context);
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
        (0, _context.join)((specificContext)=>{
            (0, _context.reconcile)((specificContext)=>{
                let statement;
                statement = specificSupposition.getStatement();
                const specificStatement = statement; ///
                statement = generalSupposition.getStatement();
                const generalStatement = statement, statementUnifies = generalStatement.unifyStatement(specificStatement, generalContext, specificContext);
                if (statementUnifies) {
                    specificContext.commit();
                    suppositionUnifies = true;
                }
            }, specificContext);
        }, specificContext, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBUb3BMZXZlbEFzc2VydGlvbiBmcm9tIFwiLi4vdG9wTGV2ZWxBc3NlcnRpb25cIjtcblxuaW1wb3J0IHsgZGVmaW5lIH0gZnJvbSBcIi4uLy4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBqb2luLCByZWNvbmNpbGUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcblxuY29uc3QgeyBhc3luY01hdGNoIH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgZ2V0QXhpb21Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBheGlvbU5vZGU7XG4gIH1cblxuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gYXdhaXQgc3VwZXIudmVyaWZ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgYXhpb20gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVNpZ25hdHVyZShzaWduYXR1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVW5pZmllcztcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlU3RyaW5nID0gc2lnbmF0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY1NpZ25hdHVyZSA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTaWduYXR1cmUgPSBzaWduYXR1cmUsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IG51bGw7XG5cbiAgICBzaWduYXR1cmVVbmlmaWVzID0gZ2VuZXJhbFNpZ25hdHVyZS51bmlmeVNpZ25hdHVyZShzcGVjaWZpY1NpZ25hdHVyZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVVuaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcztcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb24gPSB0aGlzLmRlZHVjdGlvbiwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbERlZHVjdGlvblN0cmluZyA9IGdlbmVyYWxEZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3BlY2lmaWNEZWR1Y3Rpb25TdHJpbmcgPSBzcGVjaWZpY0RlZHVjdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzcGVjaWZpY0RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3MgJyR7Z2VuZXJhbERlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNEZWR1Y3Rpb25Db250ZXh0ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIGdlbmVyYWxEZWR1Y3Rpb25Db250ZXh0ID0gZ2VuZXJhbERlZHVjdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNEZWR1Y3Rpb25Db250ZXh0LCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBnZW5lcmFsRGVkdWN0aW9uQ29udGV4dDsgLy8vXG5cbiAgICBqb2luKChzcGVjaWZpY0NvbnRleHQpID0+IHtcbiAgICAgIHJlY29uY2lsZSgoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICAgIGxldCBzdGF0ZW1lbnQ7XG5cbiAgICAgICAgc3RhdGVtZW50ID0gc3BlY2lmaWNEZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgY29uc3Qgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgICAgICBzdGF0ZW1lbnQgPSBnZW5lcmFsRGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgIGNvbnN0IGdlbmVyYWxTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzID0gZ2VuZXJhbFN0YXRlbWVudC51bmlmeVN0YXRlbWVudChzcGVjaWZpY1N0YXRlbWVudCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQuY29tbWl0KCk7XG5cbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9LCBzcGVjaWZpY0NvbnRleHQsIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20ncyAnJHtnZW5lcmFsRGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gdGhpcy5nZXRTdXBwb3NpdGlvbihpbmRleCk7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uLCAgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nID0gZ2VuZXJhbFN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmcgPSBzcGVjaWZpY1N1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3MgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb25Db250ZXh0ID0gc3BlY2lmaWNTdXBwb3NpdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uQ29udGV4dCA9IGdlbmVyYWxTdXBwb3NpdGlvbi5nZXRDb250ZXh0KCksXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gc3BlY2lmaWNTdXBwb3NpdGlvbkNvbnRleHQsICAvLy9cbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGdlbmVyYWxTdXBwb3NpdGlvbkNvbnRleHQ7IC8vL1xuXG4gICAgam9pbigoc3BlY2lmaWNDb250ZXh0KSA9PiB7XG4gICAgICByZWNvbmNpbGUoKHNwZWNpZmljQ29udGV4dCkgPT4ge1xuICAgICAgICBsZXQgc3RhdGVtZW50O1xuXG4gICAgICAgIHN0YXRlbWVudCA9IHNwZWNpZmljU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgY29uc3Qgc3BlY2lmaWNTdGF0ZW1lbnQgPSBzdGF0ZW1lbnQ7ICAvLy9cblxuICAgICAgICBzdGF0ZW1lbnQgPSBnZW5lcmFsU3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgY29uc3QgZ2VuZXJhbFN0YXRlbWVudCA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXMgPSBnZW5lcmFsU3RhdGVtZW50LnVuaWZ5U3RhdGVtZW50KHNwZWNpZmljU3RhdGVtZW50LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dC5jb21taXQoKTtcblxuICAgICAgICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0sIHNwZWNpZmljQ29udGV4dCk7XG4gICAgfSwgc3BlY2lmaWNDb250ZXh0LCBjb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NwZWNpZmljU3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3MgJyR7Z2VuZXJhbFN1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZ5O1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zOyAvLy9cblxuICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gYXdhaXQgYXN5bmNNYXRjaChnZW5lcmFsU3VwcG9zaXRpb25zLCBzcGVjaWZpY1N1cHBvc2l0aW9ucywgYXN5bmMgKGdlbmVyYWxTdXBwb3NpdGlvbiwgc3BlY2lmaWNTdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gc3BlY2lmaWNTdXBwb3NpdGlvbiwgIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVzID0gYXdhaXQgdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICBhc3luYyB1bmlmeVRvcExldmVsQXNzZXJ0aW9uKHRvcExldmVsQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb24gPSB0b3BMZXZlbEFzc2VydGlvbi5nZXREZWR1Y3Rpb24oKSxcbiAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gYXdhaXQgdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHRvcExldmVsQXNzZXJ0aW9uLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSBhd2FpdCB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oQXhpb20sIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJhc3luY01hdGNoIiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiQXhpb20iLCJUb3BMZXZlbEFzc2VydGlvbiIsImdldEF4aW9tTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiYXhpb21Ob2RlIiwiaXNTYXRpc2ZpYWJsZSIsInNpZ25hdHVyZSIsImdldFNpZ25hdHVyZSIsInNhdGlzZmlhYmxlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwiYnJlYWsiLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJheGlvbSIsImFkZEF4aW9tIiwiZGVidWciLCJ1bmlmeVNpZ25hdHVyZSIsInNpZ25hdHVyZVVuaWZpZXMiLCJzaWduYXR1cmVTdHJpbmciLCJzcGVjaWZpY1NpZ25hdHVyZSIsImdlbmVyYWxTaWduYXR1cmUiLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsImdlbmVyYWxEZWR1Y3Rpb24iLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb25TdHJpbmciLCJzcGVjaWZpY0RlZHVjdGlvblN0cmluZyIsInNwZWNpZmljRGVkdWN0aW9uQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsRGVkdWN0aW9uQ29udGV4dCIsImpvaW4iLCJyZWNvbmNpbGUiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzcGVjaWZpY1N0YXRlbWVudCIsImdlbmVyYWxTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJjb21taXQiLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZXRTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvblN0cmluZyIsInNwZWNpZmljU3VwcG9zaXRpb25TdHJpbmciLCJzcGVjaWZpY1N1cHBvc2l0aW9uQ29udGV4dCIsImdlbmVyYWxTdXBwb3NpdGlvbkNvbnRleHQiLCJ1bmlmeVN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5Iiwic3BlY2lmaWNTdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zIiwidW5pZnlUb3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJnZXREZWR1Y3Rpb24iLCJuYW1lIiwiZnJvbUpTT04i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