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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgZ2V0QXhpb21Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBheGlvbU5vZGU7XG4gIH1cblxuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gYXdhaXQgc3VwZXIudmVyaWZ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgYXhpb20gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0ZXAoc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29udGV4dCA9IHN0ZXAuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHVuY29uZGl0aW9uYWwgPSB0aGlzLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKCF1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmFibGUgdG8gdW5pZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgbm90IHVuY29uZGl0aW9uYWwuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgICBzdGVwVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICh1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmFibGUgdG8gdW5pZnkgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSBiZWNhdXNlIHRoZSBheGlvbSBpcyB1bmNvbmRpdGlvbmFsLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0U3RlcCA9IHN1YnByb29mLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1YnByb29mLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpO1xuXG4gICAgY29uc3QgZ2VuZXJhbERlZHVjdGlvbiA9IGRlZHVjdGlvbjsgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSBzcGVjaWZpY0RlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uVW5pZmllcyA9IGdlbmVyYWxEZWR1Y3Rpb24udW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbiA9IHRoaXMuZ2V0U3VwcG9zaXRpb24oaW5kZXgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247IC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSBzcGVjaWZpY1N1cHBvc2l0aW9uOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBnZW5lcmFsU3VwcG9zaXRpb24udW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnMsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGggPSBnZW5lcmFsU3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCA9IHNwZWNpZmljU3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID09PSBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCkge1xuICAgICAgc3VwcG9zaXRpb25zID0gc3BlY2lmaWNTdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSBiYWNrd2FyZHNFdmVyeShzdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICB1bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhc3RTdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBsYXN0U3RlcFN0cmluZyA9IGxhc3RTdGVwLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVNpZ25hdHVyZShzaWduYXR1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVW5pZmllcztcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlU3RyaW5nID0gc2lnbmF0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY1NpZ25hdHVyZSA9IHNpZ25hdHVyZTsgIC8vL1xuXG4gICAgc2lnbmF0dXJlID0gdGhpcy5nZXRTaWduYXR1cmUoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTaWduYXR1cmUgPSBzaWduYXR1cmU7IC8vL1xuXG4gICAgc2lnbmF0dXJlVW5pZmllcyA9IGdlbmVyYWxTaWduYXR1cmUudW5pZnlTaWduYXR1cmUoc3BlY2lmaWNTaWduYXR1cmUsIGNvbnRleHQpO1xuXG4gICAgaWYgKHNpZ25hdHVyZVVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzaWduYXR1cmVVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlUb3BMZXZlbEFzc2VydGlvbih0b3BMZXZlbEFzc2VydGlvbiwgY29udGV4dCkge1xuICAgIGxldCB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgaHlwb3RoZXNlc0NvcnJlbGF0ZSA9IHRvcExldmVsQXNzZXJ0aW9uLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc0NvcnJlbGF0ZSkge1xuICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgY29uc3QgZGVkdWN0aW9uID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0RGVkdWN0aW9uKCksXG4gICAgICAgICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0b3BMZXZlbEFzc2VydGlvbi5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gc3VwcG9zaXRpb25zVW5pZnk7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0b3BMZXZlbEFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvblVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oQXhpb20sIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJiYWNrd2FyZHNFdmVyeSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiQXhpb20iLCJUb3BMZXZlbEFzc2VydGlvbiIsImdldEF4aW9tTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiYXhpb21Ob2RlIiwiaXNTYXRpc2ZpYWJsZSIsInNpZ25hdHVyZSIsImdldFNpZ25hdHVyZSIsInNhdGlzZmlhYmxlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwiYnJlYWsiLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJheGlvbSIsImFkZEF4aW9tIiwiZGVidWciLCJ1bmlmeVN0ZXAiLCJzdGVwIiwic3RlcFVuaWZpZXMiLCJnZXRDb250ZXh0Iiwic3RlcFN0cmluZyIsInVuY29uZGl0aW9uYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiIsInVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbiIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mU3RyaW5nIiwibGFzdFN0ZXAiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwVW5pZmllcyIsInVuaWZ5TGFzdFN0ZXAiLCJzdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNVbmlmeSIsInVuaWZ5U3VwcG9zaXRpb25zIiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImRlZHVjdGlvblVuaWZpZXMiLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdldERlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb24iLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZXRTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCIsImxhc3RTdGVwU3RyaW5nIiwidW5pZnlTaWduYXR1cmUiLCJzaWduYXR1cmVVbmlmaWVzIiwic2lnbmF0dXJlU3RyaW5nIiwic3BlY2lmaWNTaWduYXR1cmUiLCJnZW5lcmFsU2lnbmF0dXJlIiwidW5pZnlUb3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJoeXBvdGhlc2VzQ29ycmVsYXRlIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsIm5hbWUiLCJmcm9tSlNPTiIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVVBOzs7ZUFBQTs7OzJCQVIrQjswRUFFRDswQkFFUDs7Ozs7O0FBRXZCLE1BQU0sRUFBRUEsY0FBYyxFQUFFLEdBQUdDLHlCQUFjO01BRXpDLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsY0FBY0MsMEJBQWlCO0lBQ3pEQyxlQUFlO1FBQ2IsTUFBTUMsT0FBTyxJQUFJLENBQUNDLE9BQU8sSUFDbkJDLFlBQVlGLE1BQU0sR0FBRztRQUUzQixPQUFPRTtJQUNUO0lBRUFDLGdCQUFnQjtRQUNkLE1BQU1DLFlBQVksSUFBSSxDQUFDQyxZQUFZLElBQzdCQyxjQUFlRixjQUFjO1FBRW5DLE9BQU9FO0lBQ1Q7SUFFQSxNQUFNQyxPQUFPQyxPQUFPLEVBQUU7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