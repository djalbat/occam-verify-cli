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
        const signatureValidates = this.validateSignature(context);
        if (signatureValidates) {
            verifies = await super.verify(context);
        }
        if (verifies) {
            const axiom = this; ///
            context.addAxiom(axiom);
            context.debug(`...verified the '${axiomString}' axiom.`);
        }
        return verifies;
    }
    validateSignature(context) {
        let signatureValidates;
        const satisfiable = this.isSatisfiable();
        if (satisfiable) {
            const axiomString = this.getString(); ///
            context.trace(`Validating the '${axiomString}' axiom's signature...`);
            const signature = this.getSignature();
            signatureValidates = signature.validate(context);
            if (signatureValidates) {
                context.trace(`...validated the '${axiomString}' axiom's signature.`);
            }
        } else {
            signatureValidates = true;
        }
        return signatureValidates;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uL2F4aW9tLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFRvcExldmVsQXNzZXJ0aW9uIGZyb20gXCIuLi90b3BMZXZlbEFzc2VydGlvblwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcblxuY29uc3QgeyBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBBeGlvbSBleHRlbmRzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgZ2V0QXhpb21Ob2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBheGlvbU5vZGUgPSBub2RlOyAvLy9cblxuICAgIHJldHVybiBheGlvbU5vZGU7XG4gIH1cblxuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNpZ25hdHVyZSA9IHRoaXMuZ2V0U2lnbmF0dXJlKCksXG4gICAgICAgICAgc2F0aXNmaWFibGUgPSAoc2lnbmF0dXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGNvbXBhcmVTaWduYXR1cmUoc2lnbmF0dXJlLCBjb250ZXh0KSB7XG4gICAgbGV0IGNvbXBhcmVzVG9TaWduYXR1cmUgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gdGhpcy5pc1NhdGlzZmlhYmxlKCk7XG5cbiAgICBpZiAoc2F0aXNmaWFibGUpIHtcbiAgICAgIGNvbnN0IHNpZ25hdHVyZUEgPSBzaWduYXR1cmU7IC8vL1xuXG4gICAgICBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpXG5cbiAgICAgIGNvbnN0IHNpZ25hdHVyZUIgPSBzaWduYXR1cmUsIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc2lnbmF0dXJlQUNvbXBhcmVzVG9TaWduYXR1cmVCID0gc2lnbmF0dXJlQS5jb21wYXJlU2lnbmF0dXJlKHNpZ25hdHVyZUIsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc2lnbmF0dXJlQUNvbXBhcmVzVG9TaWduYXR1cmVCKSB7XG4gICAgICAgIGNvbXBhcmVzVG9TaWduYXR1cmUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjb21wYXJlc1RvU2lnbmF0dXJlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXM7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3Qgc2lnbmF0dXJlVmFsaWRhdGVzID0gdGhpcy52YWxpZGF0ZVNpZ25hdHVyZShjb250ZXh0KTtcblxuICAgIGlmIChzaWduYXR1cmVWYWxpZGF0ZXMpIHtcbiAgICAgIHZlcmlmaWVzID0gYXdhaXQgc3VwZXIudmVyaWZ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgYXhpb20gPSB0aGlzOyAvLy9cblxuICAgICAgY29udGV4dC5hZGRBeGlvbShheGlvbSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZhbGlkYXRlU2lnbmF0dXJlKGNvbnRleHQpIHtcbiAgICBsZXQgc2lnbmF0dXJlVmFsaWRhdGVzO1xuXG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSB0aGlzLmlzU2F0aXNmaWFibGUoKTtcblxuICAgIGlmIChzYXRpc2ZpYWJsZSkge1xuICAgICAgY29uc3QgYXhpb21TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmFsaWRhdGluZyB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSdzIHNpZ25hdHVyZS4uLmApO1xuXG4gICAgICBjb25zdCBzaWduYXR1cmUgPSB0aGlzLmdldFNpZ25hdHVyZSgpO1xuXG4gICAgICBzaWduYXR1cmVWYWxpZGF0ZXMgPSBzaWduYXR1cmUudmFsaWRhdGUoY29udGV4dCk7XG5cbiAgICAgIGlmIChzaWduYXR1cmVWYWxpZGF0ZXMpIHtcbiAgICAgICAgY29udGV4dC50cmFjZShgLi4udmFsaWRhdGVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tJ3Mgc2lnbmF0dXJlLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzaWduYXR1cmVWYWxpZGF0ZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIHNpZ25hdHVyZVZhbGlkYXRlcztcbiAgfVxuXG4gIHVuaWZ5U3RlcChzdGVwLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb250ZXh0ID0gc3RlcC5nZXRDb250ZXh0KCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAoIXVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFVuYWJsZSB0byB1bmlmeSB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSBiZWNhdXNlIHRoZSBheGlvbSBpcyBub3QgdW5jb25kaXRpb25hbC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gc3RlcC5nZXRTdGF0ZW1lbnQoKSxcbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICAgIHN0ZXBVbmlmaWVzID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdWJwcm9vZihzdWJwcm9vZiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZlVuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGF4aW9tU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgc3VicHJvb2ZTdHJpbmcgPSBzdWJwcm9vZi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IHVuY29uZGl0aW9uYWwgPSB0aGlzLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKHVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFVuYWJsZSB0byB1bmlmeSB0aGUgJyR7c3VicHJvb2ZTdHJpbmd9JyBzdWJwcm9vZiB3aXRoIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tIGJlY2F1c2UgdGhlIGF4aW9tIGlzIHVuY29uZGl0aW9uYWwuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RTdGVwID0gc3VicHJvb2YuZ2V0TGFzdFN0ZXAoKSxcbiAgICAgICAgICAgIGxhc3RTdGVwVW5pZmllcyA9IHRoaXMudW5pZnlMYXN0U3RlcChsYXN0U3RlcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gc3VicHJvb2YuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNVbmlmeSkge1xuICAgICAgICAgIHN1YnByb29mVW5pZmllcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdWJwcm9vZlN0cmluZ30nIHN1YnByb29mIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5RGVkdWN0aW9uKGRlZHVjdGlvbiwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVzO1xuXG4gICAgY29uc3Qgc3BlY2lmaWNEZWR1Y3Rpb24gPSBkZWR1Y3Rpb247ICAvLy9cblxuICAgIGRlZHVjdGlvbiA9IHRoaXMuZ2V0RGVkdWN0aW9uKCk7XG5cbiAgICBjb25zdCBnZW5lcmFsRGVkdWN0aW9uID0gZGVkdWN0aW9uOyAvLy9cblxuICAgIGRlZHVjdGlvbiA9IHNwZWNpZmljRGVkdWN0aW9uOyAgLy8vXG5cbiAgICBkZWR1Y3Rpb25VbmlmaWVzID0gZ2VuZXJhbERlZHVjdGlvbi51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBpbmRleCwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblVuaWZpZXM7XG5cbiAgICBjb25zdCBzcGVjaWZpY1N1cHBvc2l0aW9uID0gc3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uID0gdGhpcy5nZXRTdXBwb3NpdGlvbihpbmRleCk7XG5cbiAgICBjb25zdCBnZW5lcmFsU3VwcG9zaXRpb24gPSBzdXBwb3NpdGlvbjsgLy8vXG5cbiAgICBzdXBwb3NpdGlvbiA9IHNwZWNpZmljU3VwcG9zaXRpb247ICAvLy9cblxuICAgIHN1cHBvc2l0aW9uVW5pZmllcyA9IGdlbmVyYWxTdXBwb3NpdGlvbi51bmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblVuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNwZWNpZmljU3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zOyAgLy8vXG5cbiAgICBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpO1xuXG4gICAgY29uc3QgZ2VuZXJhbFN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucywgLy8vXG4gICAgICAgICAgZ2VuZXJhbFN1cHBvc2l0aW9uc0xlbmd0aCA9IGdlbmVyYWxTdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoID0gc3BlY2lmaWNTdXBwb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGdlbmVyYWxTdXBwb3NpdGlvbnNMZW5ndGggPT09IHNwZWNpZmljU3VwcG9zaXRpb25zTGVuZ3RoKSB7XG4gICAgICBzdXBwb3NpdGlvbnMgPSBzcGVjaWZpY1N1cHBvc2l0aW9uczsgIC8vL1xuXG4gICAgICBzdXBwb3NpdGlvbnNVbmlmeSA9IGJhY2t3YXJkc0V2ZXJ5KHN1cHBvc2l0aW9ucywgKHN1cHBvc2l0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXMgPSB0aGlzLnVuaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGluZGV4LCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5TGFzdFN0ZXAobGFzdFN0ZXAsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFzdFN0ZXBVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIGxhc3RTdGVwU3RyaW5nID0gbGFzdFN0ZXAuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7bGFzdFN0ZXBTdHJpbmd9JyBsYXN0IHN0ZXAgd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbGFzdFN0ZXAuZ2V0U3RhdGVtZW50KCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICBsYXN0U3RlcFVuaWZpZXMgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChsYXN0U3RlcFVuaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2xhc3RTdGVwU3RyaW5nfScgbGFzdCBzdGVwIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RTdGVwVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24odG9wTGV2ZWxBc3NlcnRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBheGlvbVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uIHdpdGggdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20uLi5gKTtcblxuICAgIGNvbnN0IGh5cG90aGVzZXNDb3JyZWxhdGUgPSB0b3BMZXZlbEFzc2VydGlvbi5jb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNDb3JyZWxhdGUpIHtcbiAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgIGNvbnN0IGRlZHVjdGlvbiA9IHRvcExldmVsQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgICAgICAgICAgZGVkdWN0aW9uVW5pZmllcyA9IHRoaXMudW5pZnlEZWR1Y3Rpb24oZGVkdWN0aW9uLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKGRlZHVjdGlvblVuaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdG9wTGV2ZWxBc3NlcnRpb24uZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgICAgIHN1cHBvc2l0aW9uc1VuaWZ5ID0gdGhpcy51bmlmeVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIHRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyA9IHN1cHBvc2l0aW9uc1VuaWZ5OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24gd2l0aCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb25VbmlmaWVzO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIkF4aW9tXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHsgcmV0dXJuIFRvcExldmVsQXNzZXJ0aW9uLmZyb21KU09OKEF4aW9tLCBqc29uLCBjb250ZXh0KTsgfVxufSk7XG4iXSwibmFtZXMiOlsiYmFja3dhcmRzRXZlcnkiLCJhcnJheVV0aWxpdGllcyIsImRlZmluZSIsIkF4aW9tIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJnZXRBeGlvbU5vZGUiLCJub2RlIiwiZ2V0Tm9kZSIsImF4aW9tTm9kZSIsImlzU2F0aXNmaWFibGUiLCJzaWduYXR1cmUiLCJnZXRTaWduYXR1cmUiLCJzYXRpc2ZpYWJsZSIsImNvbXBhcmVTaWduYXR1cmUiLCJjb250ZXh0IiwiY29tcGFyZXNUb1NpZ25hdHVyZSIsInNpZ25hdHVyZUEiLCJzaWduYXR1cmVCIiwic3BlY2lmaWNDb250ZXh0IiwiZ2V0Q29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic2lnbmF0dXJlQUNvbXBhcmVzVG9TaWduYXR1cmVCIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJicmVhayIsImF4aW9tU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJzaWduYXR1cmVWYWxpZGF0ZXMiLCJ2YWxpZGF0ZVNpZ25hdHVyZSIsImF4aW9tIiwiYWRkQXhpb20iLCJkZWJ1ZyIsInZhbGlkYXRlIiwidW5pZnlTdGVwIiwic3RlcCIsInN0ZXBVbmlmaWVzIiwic3RlcFN0cmluZyIsInVuY29uZGl0aW9uYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiIsInVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbiIsInVuaWZ5U3VicHJvb2YiLCJzdWJwcm9vZiIsInN1YnByb29mVW5pZmllcyIsInN1YnByb29mU3RyaW5nIiwibGFzdFN0ZXAiLCJnZXRMYXN0U3RlcCIsImxhc3RTdGVwVW5pZmllcyIsInVuaWZ5TGFzdFN0ZXAiLCJzdXBwb3NpdGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJzdXBwb3NpdGlvbnNVbmlmeSIsInVuaWZ5U3VwcG9zaXRpb25zIiwidW5pZnlEZWR1Y3Rpb24iLCJkZWR1Y3Rpb24iLCJkZWR1Y3Rpb25VbmlmaWVzIiwic3BlY2lmaWNEZWR1Y3Rpb24iLCJnZXREZWR1Y3Rpb24iLCJnZW5lcmFsRGVkdWN0aW9uIiwidW5pZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uIiwiaW5kZXgiLCJzdXBwb3NpdGlvblVuaWZpZXMiLCJzcGVjaWZpY1N1cHBvc2l0aW9uIiwiZ2V0U3VwcG9zaXRpb24iLCJnZW5lcmFsU3VwcG9zaXRpb24iLCJzcGVjaWZpY1N1cHBvc2l0aW9ucyIsImdlbmVyYWxTdXBwb3NpdGlvbnMiLCJnZW5lcmFsU3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3BlY2lmaWNTdXBwb3NpdGlvbnNMZW5ndGgiLCJsYXN0U3RlcFN0cmluZyIsInVuaWZ5VG9wTGV2ZWxBc3NlcnRpb24iLCJ0b3BMZXZlbEFzc2VydGlvbiIsInRvcExldmVsQXNzZXJ0aW9uVW5pZmllcyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nIiwiaHlwb3RoZXNlc0NvcnJlbGF0ZSIsImNvcnJlbGF0ZUh5cG90aGVzZXMiLCJuYW1lIiwiZnJvbUpTT04iLCJqc29uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFVQTs7O2VBQUE7OzsyQkFSK0I7MEVBRUQ7MEJBRVA7Ozs7OztBQUV2QixNQUFNLEVBQUVBLGNBQWMsRUFBRSxHQUFHQyx5QkFBYztNQUV6QyxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGNBQWNDLDBCQUFpQjtJQUN6REMsZUFBZTtRQUNiLE1BQU1DLE9BQU8sSUFBSSxDQUFDQyxPQUFPLElBQ25CQyxZQUFZRixNQUFNLEdBQUc7UUFFM0IsT0FBT0U7SUFDVDtJQUVBQyxnQkFBZ0I7UUFDZCxNQUFNQyxZQUFZLElBQUksQ0FBQ0MsWUFBWSxJQUM3QkMsY0FBZUYsY0FBYztRQUVuQyxPQUFPRTtJ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