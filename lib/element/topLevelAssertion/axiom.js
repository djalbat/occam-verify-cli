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
            const generalContext = context; ///
            comparesToSignature = signatureA.compare(signatureB, generalContext, specificContext);
        }
        return comparesToSignature;
    }
    async verify() {
        let verifies;
        const context = this.getContext();
        await this.break(context);
        const axiomString = this.getString(); ///
        context.trace(`Verifying the '${axiomString}' axiom...`);
        const signatureVerifies = this.verifySignature();
        if (signatureVerifies) {
            verifies = await super.verify();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgZ2V0QXhpb21Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBheGlvbU5vZGU7XG4gIH1cblxuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVTaWduYXR1cmUoc2lnbmF0dXJlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TaWduYXR1cmUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZUEgPSBzaWduYXR1cmU7IC8vL1xuXG4gICAgICBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpXG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZUIgPSBzaWduYXR1cmUsIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb21wYXJlc1RvU2lnbmF0dXJlID0gc2lnbmF0dXJlQS5jb21wYXJlKHNpZ25hdHVyZUIsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU2lnbmF0dXJlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzaWduYXR1cmVWZXJpZmllcyA9IHRoaXMudmVyaWZ5U2lnbmF0dXJlKCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gYXdhaXQgc3VwZXIudmVyaWZ5KCk7XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBheGlvbSA9IHRoaXM7IC8vL1xuXG4gICAgICBjb250ZXh0LmFkZEF4aW9tKGF4aW9tKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5U2lnbmF0dXJlKCkge1xuICAgIGxldCBzaWduYXR1cmVWZXJpZmllcztcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2lnbmF0dXJlVmVyaWZpZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGVwKHN0ZXAsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnRleHQgPSBzdGVwLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICghdW5jb25kaXRpb25hbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVW5hYmxlIHRvIHVuaWZ5IHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tIGJlY2F1c2UgdGhlIGF4aW9tIGlzIG5vdCB1bmNvbmRpdGlvbmFsLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSBzdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgc3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1YnByb29mKHN1YnByb29mLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAodW5jb25kaXRpb25hbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVW5hYmxlIHRvIHVuaWZ5IHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgdW5jb25kaXRpb25hbC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdFN0ZXAgPSBzdWJwcm9vZi5nZXRMYXN0U3RlcCgpLFxuICAgICAgICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdGhpcy51bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGxhc3RTdGVwVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdWJwcm9vZi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uID0gdGhpcy5nZXREZWR1Y3Rpb24oKTtcblxuICAgIGNvbnN0IGdlbmVyYWxEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247IC8vL1xuXG4gICAgZGVkdWN0aW9uID0gc3BlY2lmaWNEZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvblVuaWZpZXMgPSBnZW5lcmFsRGVkdWN0aW9uLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSB0aGlzLmdldFN1cHBvc2l0aW9uKGluZGV4KTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gc3BlY2lmaWNTdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zLCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID0gZ2VuZXJhbFN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGggPSBzcGVjaWZpY1N1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGgpIHtcbiAgICAgIHN1cHBvc2l0aW9ucyA9IHNwZWNpZmljU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gYmFja3dhcmRzRXZlcnkoc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgY29udGV4dCkge1xuICAgIGxldCBsYXN0U3RlcFVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgbGFzdFN0ZXBTdHJpbmcgPSBsYXN0U3RlcC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSBsYXN0U3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGxhc3RTdGVwVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFN0ZXBVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbEFzc2VydGlvbih0b3BMZXZlbEFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgaHlwb3RoZXNlc0NvcnJlbGF0ZSA9IHRvcExldmVsQXNzZXJ0aW9uLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc0NvcnJlbGF0ZSkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgZGVkdWN0aW9uID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0b3BMZXZlbEFzc2VydGlvbi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gc3VwcG9zaXRpb25zVW5pZnk7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oQXhpb20sIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJiYWNrd2FyZHNFdmVyeSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiQXhpb20iLCJUb3BMZXZlbEFzc2VydGlvbiIsImdldEF4aW9tTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiYXhpb21Ob2RlIiwiaXNTYXRpc2ZpYWJsZSIsInNpZ25hdHVyZSIsImdldFNpZ25hdHVyZSIsInNhdGlzZmlhYmxlIiwiY29tcGFyZVNpZ25hdHVyZSIsImNvbnRleHQiLCJjb21wYXJlc1RvU2lnbmF0dXJlIiwic2lnbmF0dXJlQSIsInNpZ25hdHVyZUIiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJjb21wYXJlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImF4aW9tU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzaWduYXR1cmVWZXJpZmllcyIsInZlcmlmeVNpZ25hdHVyZSIsImF4aW9tIiwiYWRkQXhpb20iLCJkZWJ1ZyIsInVuaWZ5U3RlcCIsInN0ZXAiLCJzdGVwVW5pZmllcyIsInN0ZXBTdHJpbmciLCJ1bmNvbmRpdGlvbmFsIiwiaXNVbmNvbmRpdGlvbmFsIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24iLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsImxhc3RTdGVwIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3RlcFVuaWZpZXMiLCJ1bmlmeUxhc3RTdGVwIiwic3VwcG9zaXRpb25zIiwiZ2V0U3VwcG9zaXRpb25zIiwic3VwcG9zaXRpb25zVW5pZnkiLCJ1bmlmeVN1cHBvc2l0aW9ucyIsInVuaWZ5RGVkdWN0aW9uIiwiZGVkdWN0aW9uIiwiZGVkdWN0aW9uVW5pZmllcyIsInNwZWNpZmljRGVkdWN0aW9uIiwiZ2V0RGVkdWN0aW9uIiwiZ2VuZXJhbERlZHVjdGlvbiIsInVuaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb25VbmlmaWVzIiwic3BlY2lmaWNTdXBwb3NpdGlvbiIsImdldFN1cHBvc2l0aW9uIiwiZ2VuZXJhbFN1cHBvc2l0aW9uIiwic3BlY2lmaWNTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoIiwibGFzdFN0ZXBTdHJpbmciLCJ1bmlmeVRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsImh5cG90aGVzZXNDb3JyZWxhdGUiLCJjb3JyZWxhdGVIeXBvdGhlc2VzIiwibmFtZSIsImZyb21KU09OIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkJBUitCOzBFQUVEOzBCQUVQOzs7Ozs7QUFFdkIsTUFBTSxFQUFFQSxjQUFjLEVBQUUsR0FBR0MseUJBQWM7TUFFekMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQywwQkFBaUI7SUFDekRDLGVBQWU7UUFDYixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsWUFBWUYsTUFBTSxHQUFHO1FBRTNCLE9BQU9FO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsWUFBWSxJQUFJLENBQUNDLFlBQVksSUFDN0JDLGNBQWVGLGNBQWM7UUFFbkMsT0FBT0U7SUFDVDtJQUVBQyxpQkFBaUJILFNBQVMsRUFBRUksT0FBTyxFQUFFO1FBQ25DLElBQUlDLHNCQUFzQjtRQUUxQixNQUFNSCxjQUFjLElBQUksQ0FBQ0gsYUFBYTtRQUV0QyxJQUFJRyxhQUFhO1lBQ2YsTUFBTUksYUFBYU4sV0FBVyxHQUFHO1lBRWpDQSxZQUFZLElBQUksQ0FBQ0MsWUFBWTtZQUU3QixNQUFNTSxhQUFhUCxXQUNiUSxrQkFBa0JKLFNBQVUsR0FBRztZQUVyQ0EsVUFBVSxJQUFJLENBQUNLLFVBQVU7WUFFekIsTUFBTUMsaUJBQWlCTixTQUFVLEdBQUc7WUFFcENDLHNCQUFzQkMsV0FBV0ssT0FBTyxDQUFDSixZQUFZRyxnQkFBZ0JGO1FBQ3ZFO1FBRUEsT0FBT0g7SUFDVDtJQUVBLE1BQU1PLFNBQVM7UUFDYixJQUFJQztRQUVKLE1B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