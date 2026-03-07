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
const _topLevelAssertion = /*#__PURE__*/ _interop_require_default(require("../topLevelAssertion"));
const _elements = require("../../elements");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
            const lastProofAssertion = subproof.getLastProofAssertion(), lastProofAssertionUnifies = this.unifyLastProofAssertion(lastProofAssertion, context);
            if (lastProofAssertionUnifies) {
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
            suppositionsUnify = suppositions.every((supposition, index)=>{
                const suppositionUnifies = this.unifySupposition(supposition, index, generalContext, specificContext);
                if (suppositionUnifies) {
                    return true;
                }
            });
        }
        return suppositionsUnify;
    }
    unifyLastProofAssertion(lastProofAssertion, context) {
        let lastProofAssertionUnifies = false;
        const axiomString = this.getString(), lastProofAssertionString = lastProofAssertion.getString();
        context.trace(`Unifying the '${lastProofAssertionString}' last proof assertion with the '${axiomString}' axiom...`);
        const statement = lastProofAssertion.getStatement(), statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, context);
        if (statementUnifiesWithDeduction) {
            lastProofAssertionUnifies = true;
        }
        if (lastProofAssertionUnifies) {
            context.debug(`...unified the '${lastProofAssertionString}' last proof assertion with the '${axiomString}' axiom.`);
        }
        return lastProofAssertionUnifies;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgVG9wTGV2ZWxBc3NlcnRpb24gZnJvbSBcIi4uL3RvcExldmVsQXNzZXJ0aW9uXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi8uLi9lbGVtZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgQXhpb20gZXh0ZW5kcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGdldEF4aW9tTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgYXhpb21Ob2RlID0gbm9kZTsgLy8vXG5cbiAgICByZXR1cm4gYXhpb21Ob2RlO1xuICB9XG5cbiAgaXNTYXRpc2ZpYWJsZSgpIHtcbiAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpLFxuICAgICAgICAgIHNhdGlzZmlhYmxlID0gKHNpZ25hdHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc2F0aXNmaWFibGU7XG4gIH1cblxuICBjb21wYXJlU2lnbmF0dXJlKHNpZ25hdHVyZSwgY29udGV4dCkge1xuICAgIGxldCBjb21wYXJlc1RvU2lnbmF0dXJlID0gZmFsc2U7XG5cbiAgICBjb25zdCBzYXRpc2ZpYWJsZSA9IHRoaXMuaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICBjb25zdCBzaWduYXR1cmVBID0gc2lnbmF0dXJlOyAvLy9cblxuICAgICAgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKVxuXG4gICAgICBjb25zdCBzaWduYXR1cmVCID0gc2lnbmF0dXJlLCAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29tcGFyZXNUb1NpZ25hdHVyZSA9IHNpZ25hdHVyZUEuY29tcGFyZShzaWduYXR1cmVCLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1NpZ25hdHVyZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVNpZ25hdHVyZSgpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICB2ZXJpZmllcyA9IGF3YWl0IHN1cGVyLnZlcmlmeSgpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgYXhpb20gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVNpZ25hdHVyZSgpIHtcbiAgICBsZXQgc2lnbmF0dXJlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBzYXRpc2ZpYWJsZSA9IHRoaXMuaXNTYXRpc2ZpYWJsZSgpO1xuXG4gICAgaWYgKHNhdGlzZmlhYmxlKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgICBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpO1xuXG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHNpZ25hdHVyZS52ZXJpZnkoY29udGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb250ZXh0ID0gc3RlcC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAoIXVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFVuYWJsZSB0byB1bmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSBiZWNhdXNlIHRoZSBheGlvbSBpcyBub3QgdW5jb25kaXRpb25hbC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICAgIHN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdWJwcm9vZlN0cmluZyA9IHN1YnByb29mLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAodW5jb25kaXRpb25hbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVW5hYmxlIHRvIHVuaWZ5IHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgdW5jb25kaXRpb25hbC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbGFzdFByb29mQXNzZXJ0aW9uID0gc3VicHJvb2YuZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCksXG4gICAgICAgICAgICBsYXN0UHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gdGhpcy51bmlmeUxhc3RQcm9vZkFzc2VydGlvbihsYXN0UHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSBzdWJwcm9vZi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1VuaWZ5KSB7XG4gICAgICAgICAgc3VicHJvb2ZVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY0RlZHVjdGlvbiA9IGRlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uID0gdGhpcy5nZXREZWR1Y3Rpb24oKTtcblxuICAgIGNvbnN0IGdlbmVyYWxEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247IC8vL1xuXG4gICAgZGVkdWN0aW9uID0gc3BlY2lmaWNEZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvblVuaWZpZXMgPSBnZW5lcmFsRGVkdWN0aW9uLnVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSB0aGlzLmdldFN1cHBvc2l0aW9uKGluZGV4KTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gc3BlY2lmaWNTdXBwb3NpdGlvbjsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25VbmlmaWVzID0gZ2VuZXJhbFN1cHBvc2l0aW9uLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgIHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zLCAvLy9cbiAgICAgICAgICBnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID0gZ2VuZXJhbFN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGggPSBzcGVjaWZpY1N1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gc3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGgpIHtcbiAgICAgIHN1cHBvc2l0aW9ucyA9IHNwZWNpZmljU3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICB1bmlmeUxhc3RQcm9vZkFzc2VydGlvbihsYXN0UHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgbGFzdFByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxhc3RQcm9vZkFzc2VydGlvblN0cmluZyA9IGxhc3RQcm9vZkFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtsYXN0UHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBsYXN0IHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYClcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IGxhc3RQcm9vZkFzc2VydGlvbi5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgIGxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsYXN0UHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYXN0UHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBsYXN0IHByb29mIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApXG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVRvcExldmVsQXNzZXJ0aW9uKHRvcExldmVsQXNzZXJ0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IGh5cG90aGVzZXNDb3JyZWxhdGUgPSB0b3BMZXZlbEFzc2VydGlvbi5jb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNDb3JyZWxhdGUpIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IHN1cHBvc2l0aW9uc1VuaWZ5OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkF4aW9tXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBjb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiQXhpb20iLCJUb3BMZXZlbEFzc2VydGlvbiIsImdldEF4aW9tTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiYXhpb21Ob2RlIiwiaXNTYXRpc2ZpYWJsZSIsInNpZ25hdHVyZSIsImdldFNpZ25hdHVyZSIsInNhdGlzZmlhYmxlIiwiY29tcGFyZVNpZ25hdHVyZSIsImNvbnRleHQiLCJjb21wYXJlc1RvU2lnbmF0dXJlIiwic2lnbmF0dXJlQSIsInNpZ25hdHVyZUIiLCJzcGVjaWZpY0NvbnRleHQiLCJnZXRDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJjb21wYXJlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImF4aW9tU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzaWduYXR1cmVWZXJpZmllcyIsInZlcmlmeVNpZ25hdHVyZSIsImF4aW9tIiwiYWRkQXhpb20iLCJkZWJ1ZyIsInVuaWZ5U3RlcCIsInN0ZXAiLCJzdGVwVW5pZmllcyIsInN0ZXBTdHJpbmciLCJ1bmNvbmRpdGlvbmFsIiwiaXNVbmNvbmRpdGlvbmFsIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24iLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJ1bmlmeVN1YnByb29mIiwic3VicHJvb2YiLCJzdWJwcm9vZlVuaWZpZXMiLCJzdWJwcm9vZlN0cmluZyIsImxhc3RQcm9vZkFzc2VydGlvbiIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImxhc3RQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeUxhc3RQcm9vZkFzc2VydGlvbiIsInN1cHBvc2l0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsInN1cHBvc2l0aW9uc1VuaWZ5IiwidW5pZnlTdXBwb3NpdGlvbnMiLCJ1bmlmeURlZHVjdGlvbiIsImRlZHVjdGlvbiIsImRlZHVjdGlvblVuaWZpZXMiLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdldERlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb24iLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZXRTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCIsImV2ZXJ5IiwibGFzdFByb29mQXNzZXJ0aW9uU3RyaW5nIiwidW5pZnlUb3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJoeXBvdGhlc2VzQ29ycmVsYXRlIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQU1BOzs7ZUFBQTs7OzBFQUo4QjswQkFFUDs7Ozs7O01BRXZCLFdBQWVBLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsMEJBQWlCO0lBQ3pEQyxlQUFlO1FBQ2IsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFlBQVlGLE1BQU0sR0FBRztRQUUzQixPQUFPRTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxjQUFlRixjQUFjO1FBRW5DLE9BQU9FO0lBQ1Q7SUFFQUMsaUJBQWlCSCxTQUFTLEVBQUVJLE9BQU8sRUFBRTtRQUNuQyxJQUFJQyxzQkFBc0I7UUFFMUIsTUFBTUgsY0FBYyxJQUFJLENBQUNILGFBQWE7UUFFdEMsSUFBSUcsYUFBYTtZQUNmLE1BQU1JLGFBQWFOLFdBQVcsR0FBRztZQUVqQ0EsWUFBWSxJQUFJLENBQUNDLFlBQVk7WUFFN0IsTUFBTU0sYUFBYVAsV0FDYlEsa0JBQWtCSixTQUFVLEdBQUc7WUFFckNBLFVBQVUsSUFBSSxDQUFDSyxVQUFVO1lBRXpCLE1BQU1DLGlCQUFpQk4sU0FBVSxHQUFHO1lBRXBDQyxzQkFBc0JDLFdBQVdLLE9BQU8sQ0FBQ0osWUFBWUcsZ0JBQWdCRjtRQUN2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