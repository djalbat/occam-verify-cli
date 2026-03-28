"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelAssertion;
    }
});
const _necessary = require("necessary");
const _occamlanguages = require("occam-languages");
const _context = require("../utilities/context");
const _string = require("../utilities/string");
const _json = require("../utilities/json");
const { reverse, correlate } = _necessary.arrayUtilities, { asyncExtract, asyncForwardsEvery, asyncBackwardsEvery } = _occamlanguages.asynchronousUtilities;
class TopLevelAssertion extends _occamlanguages.Element {
    constructor(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses){
        super(context, string, node);
        this.labels = labels;
        this.suppositions = suppositions;
        this.deduction = deduction;
        this.proof = proof;
        this.signature = signature;
        this.hypotheses = hypotheses;
    }
    getLabels() {
        return this.labels;
    }
    getSuppositions() {
        return this.suppositions;
    }
    getDeduction() {
        return this.deduction;
    }
    getProof() {
        return this.proof;
    }
    getSignature() {
        return this.signature;
    }
    getHypotheses() {
        return this.hypotheses;
    }
    setHypotheses(hypotheses) {
        this.hypotheses = hypotheses;
    }
    getSupposition(index) {
        const supposition = this.suppositions[index] || null;
        return supposition;
    }
    isHypothetical() {
        const hypothesesLength = this.hypotheses.length, hypothetical = hypothesesLength > 0;
        return hypothetical;
    }
    isUnconditional() {
        const suppositionsLength = this.suppositions.length, unconditional = suppositionsLength === 0;
        return unconditional;
    }
    matchMetavariableNode(metavariableNode) {
        const metavariableNodeMatches = this.labels.some((label)=>{
            const metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                return true;
            }
        });
        return metavariableNodeMatches;
    }
    correlateHypotheses(context) {
        let correlatesToHypotheses;
        const hypothetical = this.isHypothetical();
        if (hypothetical) {
            const proofAssertions = context.getProofAssertions(), topLevelAssertionString = this.getString(); ///
            context.trace(`Correlating the hypotheses of the '${topLevelAssertionString}' top level assertion...`);
            correlatesToHypotheses = correlate(this.hypotheses, proofAssertions, (hypothesis, proofAssertion)=>{
                const hypothesesComparesToStep = hypothesis.compareProofAssertion(proofAssertion, context);
                if (hypothesesComparesToStep) {
                    return true;
                }
            });
            if (correlatesToHypotheses) {
                context.debug(`...correlated the hypotheses of the '${topLevelAssertionString}' top level assertion.`);
            }
        } else {
            correlatesToHypotheses = true;
        }
        return correlatesToHypotheses;
    }
    async verify() {
        let verifies = false;
        const context = this.getContext(), topLevelAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelAssertionString}' top level assertion...`);
        await (0, _context.enclose)(async (context)=>{
            const labelsVerify = this.verifyLabels();
            if (labelsVerify) {
                const suppositionsVerify = await this.verifySuppositions(context);
                if (suppositionsVerify) {
                    const deductionVerifies = await this.verifyDeduction(context);
                    if (deductionVerifies) {
                        const proofVerifies = await this.verifyProof(context);
                        if (proofVerifies) {
                            verifies = true;
                        }
                    }
                }
            }
        }, context);
        if (verifies) {
            context.debug(`...verified the '${topLevelAssertionString}' top level assertion.`);
        }
        return verifies;
    }
    verifyLabels() {
        let labelsVerify;
        const context = this.getContext(), topLevelAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's labels...`);
        labelsVerify = this.labels.every((label)=>{
            const labelVerifies = this.verifyLabel(label);
            if (labelVerifies) {
                return true;
            }
        });
        if (labelsVerify) {
            context.debug(`...verified the '${topLevelAssertionString}' top level assertion's labels.`);
        }
        return labelsVerify;
    }
    verifyLabel(label) {
        let labelVerifies;
        const context = this.getContext(), labelString = label.getString(), topLevelAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's '${labelString}' label...`);
        labelVerifies = label.verify();
        if (labelVerifies) {
            context.debug(`...verified the '${topLevelAssertionString}' top level assertion's '${labelString}' label.`);
        }
        return labelVerifies;
    }
    async verifyProof(context) {
        let proofVerifies;
        if (this.proof === null) {
            proofVerifies = true;
        } else {
            const topLevelAssertionString = this.getString(); ///
            context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's proof...`);
            const statement = this.deduction.getStatement();
            proofVerifies = await this.proof.verify(statement, context);
            if (proofVerifies) {
                context.debug(`...verified the '${topLevelAssertionString}' top level assertion's proof.`);
            }
        }
        return proofVerifies;
    }
    async verifyDeduction(context) {
        let deductionVerifies;
        const deductionString = this.deduction.getString(), topLevelAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's '${deductionString}' deduction...`);
        deductionVerifies = await this.deduction.verify(context);
        if (deductionVerifies) {
            context.debug(`...verified the '${topLevelAssertionString}' top level assertion's '${deductionString}' deduction.`);
        }
        return deductionVerifies;
    }
    async verifySupposition(supposition, context) {
        let suppositionVerifies;
        const suppositionString = supposition.getString(), topLevelAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's '${suppositionString}' supposition...`);
        suppositionVerifies = await supposition.verify(context);
        if (suppositionVerifies) {
            const subproofOrProofAssertion = supposition; ////
            context.assignAssignments();
            context.addSubproofOrProofAssertion(subproofOrProofAssertion);
        }
        if (suppositionVerifies) {
            context.debug(`...verified the '${topLevelAssertionString}' top level assertion's '${suppositionString}' supposition.`);
        }
        return suppositionVerifies;
    }
    async verifySuppositions(context) {
        let suppositionsVerify;
        const topLevelAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's suppositions...`);
        suppositionsVerify = await asyncForwardsEvery(this.suppositions, async (supposition)=>{
            const suppositionVerifies = await this.verifySupposition(supposition, context);
            if (suppositionVerifies) {
                return true;
            }
        });
        if (suppositionsVerify) {
            context.debug(`...verified the '${topLevelAssertionString}' top level assertion's suppositions.`);
        }
        return suppositionsVerify;
    }
    async unifyStepWithDeduction(step, context) {
        let stepUnifiesWithDeduction = false;
        await this.break(context);
        const stepString = step.getString(), deductionString = this.deduction.getString(), topLevelAssertionString = this.getString(); ///
        context.trace(`Unifying the '${stepString}' step with the '${topLevelAssertionString}' top level assertion's '${deductionString}' deduction...`);
        const stepUnifies = await this.deduction.unifyStep(step, context);
        if (stepUnifies) {
            stepUnifiesWithDeduction = true;
        }
        if (stepUnifiesWithDeduction) {
            context.debug(`...unified the '${stepString}' step with the '${topLevelAssertionString}' top level assertion's '${deductionString}' deduction.`);
        }
        return stepUnifiesWithDeduction;
    }
    async unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context) {
        let stepAndSubproofOrProofAssertionsUnify = false;
        const correlatesToHypotheses = this.correlateHypotheses(context);
        if (correlatesToHypotheses) {
            const stepUnifiesWithDeduction = await this.unifyStepWithDeduction(step, context);
            if (stepUnifiesWithDeduction) {
                const subproofOrProofAssertionsUnifiesWithSuppositions = await this.unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, context);
                if (subproofOrProofAssertionsUnifiesWithSuppositions) {
                    const substitutionsResolved = context.areSubstitutionsResolved();
                    if (substitutionsResolved) {
                        stepAndSubproofOrProofAssertionsUnify = true;
                    }
                }
            }
        }
        return stepAndSubproofOrProofAssertionsUnify;
    }
    async unifySubproofOrProofAssertionsWithSupposition(subproofOrProofAssertions, supposition, context) {
        let subproofOrProofAssertionsUnifiesWithSupposition = false;
        await this.break(context);
        if (!subproofOrProofAssertionsUnifiesWithSupposition) {
            const subproofOrProofAssertion = await asyncExtract(subproofOrProofAssertions, async (subproofOrProofAssertion)=>{
                const subproofOrProofAssertionUnifies = await supposition.unifySubproofOrProofAssertion(subproofOrProofAssertion, context);
                if (subproofOrProofAssertionUnifies) {
                    context.resolveSubstitutions();
                    return true;
                }
            }) || null;
            if (subproofOrProofAssertion !== null) {
                subproofOrProofAssertionsUnifiesWithSupposition = true;
            }
        }
        if (!subproofOrProofAssertionsUnifiesWithSupposition) {
            const suppositionUnifiesIndependently = await supposition.unifyIndependently(context);
            if (suppositionUnifiesIndependently) {
                subproofOrProofAssertionsUnifiesWithSupposition = true;
            }
        }
        return subproofOrProofAssertionsUnifiesWithSupposition;
    }
    async unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, context) {
        let subproofOrProofAssertionsUnifiesWithSuppositions;
        subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///
        subproofOrProofAssertionsUnifiesWithSuppositions = await asyncBackwardsEvery(this.suppositions, async (supposition)=>{
            const stepUnifiesWithSupposition = await this.unifySubproofOrProofAssertionsWithSupposition(subproofOrProofAssertions, supposition, context);
            if (stepUnifiesWithSupposition) {
                return true;
            }
        });
        return subproofOrProofAssertionsUnifiesWithSuppositions;
    }
    toJSON() {
        const labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), signatureJSON = (0, _json.signatureToSignatureJSON)(this.signature), hypothesesJSON = (0, _json.hypothesesToHypothesesJSON)(this.hypotheses), labels = labelsJSON, deduction = deductionJSON, suppositions = suppositionsJSON, signature = signatureJSON, hypotheses = hypothesesJSON, json = {
            labels,
            deduction,
            suppositions,
            signature,
            hypotheses
        };
        return json;
    }
    static fromJSON(Class, json, context) {
        const labels = (0, _json.labelsFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), signature = (0, _json.signatureFromJSON)(json, context), hypotheses = (0, _json.hypothesesFromJSON)(json, context), topLevelAssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = null, proof = null, string = topLevelAssertionString, topLevelAssertion = new Class(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
        return topLevelAssertion;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZW5jbG9zZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc3luY0V4dHJhY3QsIGFzeW5jRm9yd2FyZHNFdmVyeSwgYXN5bmNCYWNrd2FyZHNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldERlZHVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWR1Y3Rpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmU7XG4gIH1cblxuICBnZXRIeXBvdGhlc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmh5cG90aGVzZXM7XG4gIH1cblxuICBzZXRIeXBvdGhlc2VzKGh5cG90aGVzZXMpIHtcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb24oaW5kZXgpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMuc3VwcG9zaXRpb25zW2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgaXNIeXBvdGhldGljYWwoKSB7XG4gICAgY29uc3QgaHlwb3RoZXNlc0xlbmd0aCA9IHRoaXMuaHlwb3RoZXNlcy5sZW5ndGgsXG4gICAgICAgICAgaHlwb3RoZXRpY2FsID0gKGh5cG90aGVzZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBoeXBvdGhldGljYWw7XG4gIH1cblxuICBpc1VuY29uZGl0aW9uYWwoKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zTGVuZ3RoID0gdGhpcy5zdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHVuY29uZGl0aW9uYWwgPSAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiB1bmNvbmRpdGlvbmFsO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgY29ycmVsYXRlSHlwb3RoZXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IGNvcnJlbGF0ZXNUb0h5cG90aGVzZXM7XG5cbiAgICBjb25zdCBoeXBvdGhldGljYWwgPSB0aGlzLmlzSHlwb3RoZXRpY2FsKCk7XG5cbiAgICBpZiAoaHlwb3RoZXRpY2FsKSB7XG4gICAgICBjb25zdCBwcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYENvcnJlbGF0aW5nIHRoZSBoeXBvdGhlc2VzIG9mIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29ycmVsYXRlc1RvSHlwb3RoZXNlcyA9IGNvcnJlbGF0ZSh0aGlzLmh5cG90aGVzZXMsIHByb29mQXNzZXJ0aW9ucywgKGh5cG90aGVzaXMsIHByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCA9IGh5cG90aGVzaXMuY29tcGFyZVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoaHlwb3RoZXNlc0NvbXBhcmVzVG9TdGVwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29ycmVsYXRlc1RvSHlwb3RoZXNlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb3JyZWxhdGVkIHRoZSBoeXBvdGhlc2VzIG9mIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBhd2FpdCBlbmNsb3NlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBsZXQgbGFiZWxzVmVyaWZ5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBsYWJlbHMuLi5gKTtcblxuICAgIGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWZXJpZmllcyA9IHRoaXMudmVyaWZ5TGFiZWwobGFiZWwpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBsYWJlbHMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeUxhYmVsKGxhYmVsKSB7XG4gICAgbGV0IGxhYmVsVmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBsYWJlbFZlcmlmaWVzID0gbGFiZWwudmVyaWZ5KCk7XG5cbiAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHByb29mLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHByb29mLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpXG5cbiAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gc3VwcG9zaXRpb247ICAvLy8vXG5cbiAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNWZXJpZnk7XG5cbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3Mgc3VwcG9zaXRpb25zLi4uYCk7XG5cbiAgICBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RlcFdpdGhEZWR1Y3Rpb24oc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24gPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RlcFVuaWZpZXMgPSBhd2FpdCB0aGlzLmRlZHVjdGlvbi51bmlmeVN0ZXAoc3RlcCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb247XG4gIH1cblxuICBhc3luYyB1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0ZXAsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29ycmVsYXRlc1RvSHlwb3RoZXNlcyA9IHRoaXMuY29ycmVsYXRlSHlwb3RoZXNlcyhjb250ZXh0KTtcblxuICAgIGlmIChjb3JyZWxhdGVzVG9IeXBvdGhlc2VzKSB7XG4gICAgICBjb25zdCBzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24gPSBhd2FpdCB0aGlzLnVuaWZ5U3RlcFdpdGhEZWR1Y3Rpb24oc3RlcCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb250ZXh0LmFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnk7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBhd2FpdCBhc3luY0V4dHJhY3Qoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgYXN5bmMgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gYXdhaXQgc3VwcG9zaXRpb24udW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgIGNvbnRleHQucmVzb2x2ZVN1YnN0aXR1dGlvbnMoKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXdhaXQgc3VwcG9zaXRpb24udW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucztcblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSByZXZlcnNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpOyAvLy9cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyA9IGF3YWl0IGFzeW5jQmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTih0aGlzLnNpZ25hdHVyZSksXG4gICAgICAgICAgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTih0aGlzLmh5cG90aGVzZXMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICAgICAgaHlwb3RoZXNlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwiYXJyYXlVdGlsaXRpZXMiLCJhc3luY0V4dHJhY3QiLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY0JhY2t3YXJkc0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uIiwicHJvb2YiLCJzaWduYXR1cmUiLCJoeXBvdGhlc2VzIiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0RGVkdWN0aW9uIiwiZ2V0UHJvb2YiLCJnZXRTaWduYXR1cmUiLCJnZXRIeXBvdGhlc2VzIiwic2V0SHlwb3RoZXNlcyIsImdldFN1cHBvc2l0aW9uIiwiaW5kZXgiLCJzdXBwb3NpdGlvbiIsImlzSHlwb3RoZXRpY2FsIiwiaHlwb3RoZXNlc0xlbmd0aCIsImxlbmd0aCIsImh5cG90aGV0aWNhbCIsImlzVW5jb25kaXRpb25hbCIsInN1cHBvc2l0aW9uc0xlbmd0aCIsInVuY29uZGl0aW9uYWwiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJjb3JyZWxhdGVIeXBvdGhlc2VzIiwiY29ycmVsYXRlc1RvSHlwb3RoZXNlcyIsInByb29mQXNzZXJ0aW9ucyIsImdldFByb29mQXNzZXJ0aW9ucyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJoeXBvdGhlc2lzIiwicHJvb2ZBc3NlcnRpb24iLCJoeXBvdGhlc2VzQ29tcGFyZXNUb1N0ZXAiLCJjb21wYXJlUHJvb2ZBc3NlcnRpb24iLCJkZWJ1ZyIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImVuY2xvc2UiLCJsYWJlbHNWZXJpZnkiLCJ2ZXJpZnlMYWJlbHMiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInZlcmlmeURlZHVjdGlvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsImV2ZXJ5IiwibGFiZWxWZXJpZmllcyIsInZlcmlmeUxhYmVsIiwibGFiZWxTdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJkZWR1Y3Rpb25TdHJpbmciLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlTdGVwV2l0aERlZHVjdGlvbiIsInN0ZXAiLCJzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24iLCJicmVhayIsInN0ZXBTdHJpbmciLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwic3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN0ZXBVbmlmaWVzV2l0aFN1cHBvc2l0aW9uIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic2lnbmF0dXJlSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7O2VBQXFCQTs7OzJCQW5CVTtnQ0FDZ0I7eUJBRXZCO3dCQUNrRDtzQkFVM0I7QUFFL0MsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyx5QkFBYyxFQUN2QyxFQUFFQyxZQUFZLEVBQUVDLGtCQUFrQixFQUFFQyxtQkFBbUIsRUFBRSxHQUFHQyxxQ0FBcUI7QUFFeEUsTUFBTVAsMEJBQTBCUSx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxDQUFFO1FBQ2hHLEtBQUssQ0FBQ1IsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ04sTUFBTTtJQUNwQjtJQUVBTyxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNOLFlBQVk7SUFDMUI7SUFFQU8sZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDTixTQUFTO0lBQ3ZCO0lBRUFPLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ04sS0FBSztJQUNuQjtJQUVBTyxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUNO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