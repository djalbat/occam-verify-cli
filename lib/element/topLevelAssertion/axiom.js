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
const _necessary = require("necessary");
const _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("../topLevelAssertion"));
const _elements = require("../../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { backwardsEvery } = _necessary.arrayUtilities;
const _default = (0, _elements.define)(class Axiom extends _topLevelAssertion.default {
    getAxiomNode() {
        const node = this.getNode(), axiomNode = node; ///
        return axiomNode;
    }
    isSatisfiable() {
        const signature = this.getSignature(), satisfiable = signature !== null;
        return satisfiable;
    }
    compareSignature(signature, context) {
        let comparesToSignature = false;
        const satisfiable = this.isSatisfiable();
        if (satisfiable) {
            const signatureA = signature; ///
            signature = this.getSignature();
            const signatureB = signature, specificContext = context; ///
            context = this.getContext();
            const generalContext = context, signatureAComparesToSignatureB = signatureA.compareSignature(signatureB, generalContext, specificContext);
            if (signatureAComparesToSignatureB) {
                comparesToSignature = true;
            }
        }
        return comparesToSignature;
    }
    async verify(context) {
        let verifies;
        await this.break(context);
        const axiomString = this.getString(); ///
        context.trace(`Verifying the '${axiomString}' axiom...`);
        const signatureVerifies = this.verifySignature();
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
    verifySignature() {
        let signatureVerifies;
        const satisfiable = this.isSatisfiable();
        if (satisfiable) {
            const context = this.getContext(), signature = this.getSignature();
            signatureVerifies = signature.verify(context);
        } else {
            signatureVerifies = true;
        }
        return signatureVerifies;
    }
    unifyStep(step, context) {
        let stepUnifies = false;
        context = step.getContext();
        const stepString = step.getString(), axiomString = this.getString();
        context.trace(`Unifying the '${stepString}' step with the '${axiomString}' axiom...`);
        const unconditional = this.isUnconditional();
        if (!unconditional) {
            context.trace(`Unable to unify the '${stepString}' step with the '${axiomString}' axiom because the axiom is not unconditional.`);
        } else {
            const statement = step.getStatement(), statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, context);
            if (statementUnifiesWithDeduction) {
                stepUnifies = true;
            }
        }
        if (stepUnifies) {
            context.debug(`...unified the '${stepString}' step with the '${axiomString}' axiom.`);
        }
        return stepUnifies;
    }
    unifySubproof(subproof, context) {
        let subproofUnifies = false;
        const axiomString = this.getString(), subproofString = subproof.getString();
        context.trace(`Unifying the '${subproofString}' subproof with the '${axiomString}' axiom...`);
        const unconditional = this.isUnconditional();
        if (unconditional) {
            context.trace(`Unable to unify the '${subproofString}' subproof with the '${axiomString}' axiom because the axiom is unconditional.`);
        } else {
            const lastStep = subproof.getLastStep(), lastStepUnifies = this.unifyLastStep(lastStep, context);
            if (lastStepUnifies) {
                const suppositions = subproof.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, context);
                if (suppositionsUnify) {
                    subproofUnifies = true;
                }
            }
        }
        if (subproofUnifies) {
            context.debug(`...unified the '${subproofString}' subproof with the '${axiomString}' axiom.`);
        }
        return subproofUnifies;
    }
    unifyDeduction(deduction, generalContext, specificContext) {
        let deductionUnifies;
        const specificDeduction = deduction; ///
        deduction = this.getDeduction();
        const generalDeduction = deduction; ///
        deduction = specificDeduction; ///
        deductionUnifies = generalDeduction.unifyDeduction(deduction, generalContext, specificContext);
        return deductionUnifies;
    }
    unifySupposition(supposition, index, generalContext, specificContext) {
        let suppositionUnifies;
        const specificSupposition = supposition; ///
        supposition = this.getSupposition(index);
        const generalSupposition = supposition; ///
        supposition = specificSupposition; ///
        suppositionUnifies = generalSupposition.unifySupposition(supposition, generalContext, specificContext);
        return suppositionUnifies;
    }
    unifySuppositions(suppositions, generalContext, specificContext) {
        let suppositionsUnify = false;
        const specificSuppositions = suppositions; ///
        suppositions = this.getSuppositions();
        const generalSuppositions = suppositions, generalSuppositionsLength = generalSuppositions.length, specificSuppositionsLength = specificSuppositions.length;
        if (generalSuppositionsLength === specificSuppositionsLength) {
            suppositions = specificSuppositions; ///
            suppositionsUnify = backwardsEvery(suppositions, (supposition, index)=>{
                const suppositionUnifies = this.unifySupposition(supposition, index, generalContext, specificContext);
                if (suppositionUnifies) {
                    return true;
                }
            });
        }
        return suppositionsUnify;
    }
    unifyLastStep(lastStep, context) {
        let lastStepUnifies = false;
        const axiomString = this.getString(), lastStepString = lastStep.getString();
        context.trace(`Unifying the '${lastStepString}' last step with the '${axiomString}' axiom...`);
        const statement = lastStep.getStatement(), statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, context);
        if (statementUnifiesWithDeduction) {
            lastStepUnifies = true;
        }
        if (lastStepUnifies) {
            context.debug(`...unified the '${lastStepString}' last step with the '${axiomString}' axiom.`);
        }
        return lastStepUnifies;
    }
    unifyTopLevelAssertion(topLevelAssertion, context) {
        let topLevelAssertionUnifies = false;
        const axiomString = this.getString(), topLevelAssertionString = topLevelAssertion.getString();
        context.trace(`Unifying the '${topLevelAssertionString}' top level assertion with the '${axiomString}' axiom...`);
        const hypothesesCorrelate = topLevelAssertion.correlateHypotheses(context);
        if (hypothesesCorrelate) {
            const specificContext = context; ///
            context = this.getContext();
            const generalContext = context; ///
            context = specificContext; ///
            const deduction = topLevelAssertion.getDeduction(), deductionUnifies = this.unifyDeduction(deduction, generalContext, specificContext);
            if (deductionUnifies) {
                const suppositions = topLevelAssertion.getSuppositions(), suppositionsUnify = this.unifySuppositions(suppositions, generalContext, specificContext);
                topLevelAssertionUnifies = suppositionsUnify; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgZ2V0QXhpb21Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBheGlvbU5vZGU7XG4gIH1cblxuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVTaWduYXR1cmUoc2lnbmF0dXJlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TaWduYXR1cmUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZUEgPSBzaWduYXR1cmU7IC8vL1xuXG4gICAgICBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpXG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZUIgPSBzaWduYXR1cmUsIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc2lnbmF0dXJlQUNvbXBhcmVzVG9TaWduYXR1cmVCID0gc2lnbmF0dXJlQS5jb21wYXJlU2lnbmF0dXJlKHNpZ25hdHVyZUIsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc2lnbmF0dXJlQUNvbXBhcmVzVG9TaWduYXR1cmVCKSB7XG4gICAgICAgIGNvbXBhcmVzVG9TaWduYXR1cmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU2lnbmF0dXJlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVNpZ25hdHVyZSgpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllcyA9IGF3YWl0IHN1cGVyLnZlcmlmeShjb250ZXh0KTtcbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IGF4aW9tID0gdGhpczsgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkQXhpb20oYXhpb20pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlTaWduYXR1cmUoKSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgICAgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKTtcblxuICAgICAgc2lnbmF0dXJlVmVyaWZpZXMgPSBzaWduYXR1cmUudmVyaWZ5KGNvbnRleHQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0ZXAoc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29udGV4dCA9IHN0ZXAuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHVuY29uZGl0aW9uYWwgPSB0aGlzLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKCF1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmFibGUgdG8gdW5pZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgbm90IHVuY29uZGl0aW9uYWwuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgICBzdGVwVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICh1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmFibGUgdG8gdW5pZnkgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSBiZWNhdXNlIHRoZSBheGlvbSBpcyB1bmNvbmRpdGlvbmFsLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0U3RlcCA9IHN1YnByb29mLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1YnByb29mLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpO1xuXG4gICAgY29uc3QgZ2VuZXJhbERlZHVjdGlvbiA9IGRlZHVjdGlvbjsgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSBzcGVjaWZpY0RlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uVW5pZmllcyA9IGdlbmVyYWxEZWR1Y3Rpb24udW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbiA9IHRoaXMuZ2V0U3VwcG9zaXRpb24oaW5kZXgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247IC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSBzcGVjaWZpY1N1cHBvc2l0aW9uOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBnZW5lcmFsU3VwcG9zaXRpb24udW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnMsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGggPSBnZW5lcmFsU3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCA9IHNwZWNpZmljU3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID09PSBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCkge1xuICAgICAgc3VwcG9zaXRpb25zID0gc3BlY2lmaWNTdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSBiYWNrd2FyZHNFdmVyeShzdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICB1bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhc3RTdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBsYXN0U3RlcFN0cmluZyA9IGxhc3RTdGVwLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRvcExldmVsQXNzZXJ0aW9uKHRvcExldmVsQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBoeXBvdGhlc2VzQ29ycmVsYXRlID0gdG9wTGV2ZWxBc3NlcnRpb24uY29ycmVsYXRlSHlwb3RoZXNlcyhjb250ZXh0KTtcblxuICAgIGlmIChoeXBvdGhlc2VzQ29ycmVsYXRlKSB7XG4gICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICBjb25zdCBkZWR1Y3Rpb24gPSB0b3BMZXZlbEFzc2VydGlvbi5nZXREZWR1Y3Rpb24oKSxcbiAgICAgICAgICAgIGRlZHVjdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChkZWR1Y3Rpb25VbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHRvcExldmVsQXNzZXJ0aW9uLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSBzdXBwb3NpdGlvbnNVbmlmeTsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcztcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJBeGlvbVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7IHJldHVybiBUb3BMZXZlbEFzc2VydGlvbi5mcm9tSlNPTihBeGlvbSwganNvbiwgY29udGV4dCk7IH1cbn0pO1xuIl0sIm5hbWVzIjpbImJhY2t3YXJkc0V2ZXJ5IiwiYXJyYXlVdGlsaXRpZXMiLCJkZWZpbmUiLCJBeGlvbSIsIlRvcExldmVsQXNzZXJ0aW9uIiwiZ2V0QXhpb21Ob2RlIiwibm9kZSIsImdldE5vZGUiLCJheGlvbU5vZGUiLCJpc1NhdGlzZmlhYmxlIiwic2lnbmF0dXJlIiwiZ2V0U2lnbmF0dXJlIiwic2F0aXNmaWFibGUiLCJjb21wYXJlU2lnbmF0dXJlIiwiY29udGV4dCIsImNvbXBhcmVzVG9TaWduYXR1cmUiLCJzaWduYXR1cmVBIiwic2lnbmF0dXJlQiIsInNwZWNpZmljQ29udGV4dCIsImdldENvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNpZ25hdHVyZUFDb21wYXJlc1RvU2lnbmF0dXJlQiIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJheGlvbSIsImFkZEF4aW9tIiwiZGVidWciLCJ1bmlmeVN0ZXAiLCJzdGVwIiwic3RlcFVuaWZpZXMiLCJzdGVwU3RyaW5nIiwidW5jb25kaXRpb25hbCIsImlzVW5jb25kaXRpb25hbCIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwidW5pZnlTdWJwcm9vZiIsInN1YnByb29mIiwic3VicHJvb2ZVbmlmaWVzIiwic3VicHJvb2ZTdHJpbmciLCJsYXN0U3RlcCIsImdldExhc3RTdGVwIiwibGFzdFN0ZXBVbmlmaWVzIiwidW5pZnlMYXN0U3RlcCIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdldERlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb24iLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZXRTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCIsImxhc3RTdGVwU3RyaW5nIiwidW5pZnlUb3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJoeXBvdGhlc2VzQ29ycmVsYXRlIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJCQVIrQjswRUFFRDswQkFFUDs7Ozs7O0FBRXZCLE1BQU0sRUFBRUEsY0FBYyxFQUFFLEdBQUdDLHlCQUFjO01BRXpDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsMEJBQWlCO0lBQ3pEQyxlQUFlO1FBQ2IsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFlBQVlGLE1BQU0sR0FBRztRQUUzQixPQUFPRTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxjQUFlRixjQUFjO1FBRW5DLE9BQU9FO0lBQ1Q7SUFFQUMsaUJBQWlCSCxTQUFTLEVBQUVJLE9BQU8sRUFBRTtRQUNuQyxJQUFJQyxzQkFBc0I7UUFFMUIsTUFBTUgsY0FBYyxJQUFJLENBQUNILGFBQWE7UUFFdEMsSUFBSUcsYUFBYTtZQUNmLE1BQU1JLGFBQWFOLFdBQVcsR0FBRztZQUVqQ0EsWUFBWSxJQUFJLENBQUNDLFlBQVk7WUFFN0IsTUFBTU0sYUFBYVAsV0FDYlEsa0JBQWtCSixTQUFVLEdBQUc7WUFFckNBLFVBQVUsSUFBSSxDQUFDSyxVQUFVO1lBRXpCLE1BQU1DLGlCQUFpQk4s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