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
        const specificSignature = signature, specificContext = context; ///
        signature = this.getSignature();
        context = signature.getContext();
        const generalSignature = signature, generalContext = context; ///
        signatureUnifies = generalSignature.unifySignature(specificSignature, generalContext, specificContext);
        if (signatureUnifies) {
            context.debug(`...unified the '${signatureString}' signature with the '${axiomString}' axiom.`);
        }
        return signatureUnifies;
    }
    static name = "Axiom";
    static fromJSON(json, context) {
        return _topLevelAssertion.default.fromJSON(Axiom, json, context);
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgZ2V0QXhpb21Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBheGlvbU5vZGU7XG4gIH1cblxuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHNpZ25hdHVyZVZlcmlmaWVzID0gdGhpcy52ZXJpZnlTaWduYXR1cmUoY29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVmVyaWZpZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gYXdhaXQgc3VwZXIudmVyaWZ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgYXhpb20gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVNpZ25hdHVyZShjb250ZXh0KSB7XG4gICAgbGV0IHNpZ25hdHVyZVZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLi4uYCk7XG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICAgIHNpZ25hdHVyZVZlcmlmaWVzID0gc2lnbmF0dXJlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgaWYgKHNpZ25hdHVyZVZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQudHJhY2UoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaWduYXR1cmVWZXJpZmllcyA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gc2lnbmF0dXJlVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0ZXAoc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29udGV4dCA9IHN0ZXAuZ2V0Q29udGV4dCgpO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHVuY29uZGl0aW9uYWwgPSB0aGlzLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKCF1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmFibGUgdG8gdW5pZnkgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gYmVjYXVzZSB0aGUgYXhpb20gaXMgbm90IHVuY29uZGl0aW9uYWwuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgICBzdGVwVW5pZmllcyA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2Yoc3VicHJvb2YsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHN1YnByb29mU3RyaW5nID0gc3VicHJvb2YuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICh1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBVbmFibGUgdG8gdW5pZnkgdGhlICcke3N1YnByb29mU3RyaW5nfScgc3VicHJvb2Ygd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSBiZWNhdXNlIHRoZSBheGlvbSBpcyB1bmNvbmRpdGlvbmFsLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0U3RlcCA9IHN1YnByb29mLmdldExhc3RTdGVwKCksXG4gICAgICAgICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0aGlzLnVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHN1YnByb29mLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IHRoaXMudW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVW5pZnkpIHtcbiAgICAgICAgICBzdWJwcm9vZlVuaWZpZXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1YnByb29mVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZlVuaWZpZXM7XG4gIH1cblxuICB1bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHNwZWNpZmljRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSB0aGlzLmdldERlZHVjdGlvbigpO1xuXG4gICAgY29uc3QgZ2VuZXJhbERlZHVjdGlvbiA9IGRlZHVjdGlvbjsgLy8vXG5cbiAgICBkZWR1Y3Rpb24gPSBzcGVjaWZpY0RlZHVjdGlvbjsgIC8vL1xuXG4gICAgZGVkdWN0aW9uVW5pZmllcyA9IGdlbmVyYWxEZWR1Y3Rpb24udW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgaW5kZXgsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNTdXBwb3NpdGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbiA9IHRoaXMuZ2V0U3VwcG9zaXRpb24oaW5kZXgpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247IC8vL1xuXG4gICAgc3VwcG9zaXRpb24gPSBzcGVjaWZpY1N1cHBvc2l0aW9uOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvblVuaWZpZXMgPSBnZW5lcmFsU3VwcG9zaXRpb24udW5pZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25VbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnMsIC8vL1xuICAgICAgICAgIGdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGggPSBnZW5lcmFsU3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCA9IHNwZWNpZmljU3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoID09PSBzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCkge1xuICAgICAgc3VwcG9zaXRpb25zID0gc3BlY2lmaWNTdXBwb3NpdGlvbnM7ICAvLy9cblxuICAgICAgc3VwcG9zaXRpb25zVW5pZnkgPSBiYWNrd2FyZHNFdmVyeShzdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzID0gdGhpcy51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVW5pZnk7XG4gIH1cblxuICB1bmlmeUxhc3RTdGVwKGxhc3RTdGVwLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhc3RTdGVwVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAvLy9cbiAgICAgICAgICBsYXN0U3RlcFN0cmluZyA9IGxhc3RTdGVwLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IGxhc3RTdGVwLmdldFN0YXRlbWVudCgpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgbGFzdFN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobGFzdFN0ZXBVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtsYXN0U3RlcFN0cmluZ30nIGxhc3Qgc3RlcCB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0U3RlcFVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVNpZ25hdHVyZShzaWduYXR1cmUsIGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVW5pZmllcztcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlU3RyaW5nID0gc2lnbmF0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3NpZ25hdHVyZVN0cmluZ30nIHNpZ25hdHVyZSB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLi4uYCk7XG5cbiAgICBjb25zdCBzcGVjaWZpY1NpZ25hdHVyZSA9IHNpZ25hdHVyZSwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgIHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCk7XG5cbiAgICBjb250ZXh0ID0gc2lnbmF0dXJlLmdldENvbnRleHQoKTtcblxuICAgIGNvbnN0IGdlbmVyYWxTaWduYXR1cmUgPSBzaWduYXR1cmUsIC8vL1xuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBzaWduYXR1cmVVbmlmaWVzID0gZ2VuZXJhbFNpZ25hdHVyZS51bmlmeVNpZ25hdHVyZShzcGVjaWZpY1NpZ25hdHVyZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc2lnbmF0dXJlVW5pZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c2lnbmF0dXJlU3RyaW5nfScgc2lnbmF0dXJlIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVVuaWZpZXM7XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiQXhpb21cIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkgeyByZXR1cm4gVG9wTGV2ZWxBc3NlcnRpb24uZnJvbUpTT04oQXhpb20sIGpzb24sIGNvbnRleHQpOyB9XG59KTtcbiJdLCJuYW1lcyI6WyJiYWNrd2FyZHNFdmVyeSIsImFycmF5VXRpbGl0aWVzIiwiZGVmaW5lIiwiQXhpb20iLCJUb3BMZXZlbEFzc2VydGlvbiIsImdldEF4aW9tTm9kZSIsIm5vZGUiLCJnZXROb2RlIiwiYXhpb21Ob2RlIiwiaXNTYXRpc2ZpYWJsZSIsInNpZ25hdHVyZSIsImdldFNpZ25hdHVyZSIsInNhdGlzZmlhYmxlIiwidmVyaWZ5IiwiY29udGV4dCIsInZlcmlmaWVzIiwiYnJlYWsiLCJheGlvbVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwic2lnbmF0dXJlVmVyaWZpZXMiLCJ2ZXJpZnlTaWduYXR1cmUiLCJheGlvbSIsImFkZEF4aW9tIiwiZGVidWciLCJ1bmlmeVN0ZXAiLCJzdGVwIiwic3RlcFVuaWZpZXMiLCJnZXRDb250ZXh0Iiwic3RlcFN0cmluZyIsInVuY29uZGl0aW9uYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiIsInVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbiIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mU3RyaW5nIiwibGFzdFN0ZXAiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwVW5pZmllcyIsInVuaWZ5TGFzdFN0ZXAiLCJzdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNVbmlmeSIsInVuaWZ5U3VwcG9zaXRpb25zIiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImRlZHVjdGlvblVuaWZpZXMiLCJzcGVjaWZpY0RlZHVjdGlvbiIsImdldERlZHVjdGlvbiIsImdlbmVyYWxEZWR1Y3Rpb24iLCJ1bmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uVW5pZmllcyIsInNwZWNpZmljU3VwcG9zaXRpb24iLCJnZXRTdXBwb3NpdGlvbiIsImdlbmVyYWxTdXBwb3NpdGlvbiIsInNwZWNpZmljU3VwcG9zaXRpb25zIiwiZ2VuZXJhbFN1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJzcGVjaWZpY1N1cHBvc2l0aW9uc0xlbmd0aCIsImxhc3RTdGVwU3RyaW5nIiwidW5pZnlTaWduYXR1cmUiLCJzaWduYXR1cmVVbmlmaWVzIiwic2lnbmF0dXJlU3RyaW5nIiwic3BlY2lmaWNTaWduYXR1cmUiLCJnZW5lcmFsU2lnbmF0dXJlIiwibmFtZSIsImZyb21KU09OIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBVUE7OztlQUFBOzs7MkJBUitCOzBFQUVEOzBCQUVQOzs7Ozs7QUFFdkIsTUFBTSxFQUFFQSxjQUFjLEVBQUUsR0FBR0MseUJBQWM7TUFFekMsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxjQUFjQywwQkFBaUI7SUFDekRDLGVBQWU7UUFDYixNQUFNQyxPQUFPLElBQUksQ0FBQ0MsT0FBTyxJQUNuQkMsWUFBWUYsTUFBTSxHQUFHO1FBRTNCLE9BQU9FO0lBQ1Q7SUFFQUMsZ0JBQWdCO1FBQ2QsTUFBTUMsWUFBWSxJQUFJLENBQUNDLFlBQVksSUFDN0JDLGNBQWVGLGNBQWM7UUFFbkMsT0FBT0U7SUFDVDtJQUVBLE1BQU1DLE9BQU9DLE9BQU8sRUFBRTtRQUNwQixJQUFJQztRQUVKLE1BQU0sSUFBSSxDQUFDQyxLQUFLLENBQUNGO1FBRWpCLE1BQU1HLGNBQWMsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV6Q0osUUFBUUssS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRixZQUFZLFVBQVUsQ0FBQztRQUV2RCxNQUFNRyxvQkFBb0IsSUFBSSxDQUFDQyxlQUFlLENBQUNQO1FBRS9DLElBQUlNLG1CQUFtQjtZQUNyQkwsV0FBVyxNQUFNLEtBQUssQ0FBQ0YsT0FBT0M7UUFDaEM7UUFFQSxJQUFJQyxVQUFVO1lBQ1osTUFBTU8sUUFBUSxJQUFJLEVBQUUsR0FBRztZQUV2QlIsUUFBUVMsUUFBUSxDQUFDRDtZQUVqQlIsUUFBUVUsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVQLFlBQVksUUFBUSxDQUFDO1FBQ3pE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