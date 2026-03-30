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
    constructor(context, string, node, lineIndex, labels, suppositions, deduction, proof, signature, hypotheses){
        super(context, string, node, lineIndex);
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
    async verify(context) {
        let verifies = false;
        const topLevelAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelAssertionString}' top level assertion...`);
        await (0, _context.enclose)(async (context)=>{
            const labelsVerify = this.verifyLabels(context);
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
    verifyLabels(context) {
        let labelsVerify;
        const topLevelAssertionString = this.getString(); ///
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
        const labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), signatureJSON = (0, _json.signatureToSignatureJSON)(this.signature), hypothesesJSON = (0, _json.hypothesesToHypothesesJSON)(this.hypotheses), string = this.getString(), lineIndex = this.getLineIndex(), labels = labelsJSON, deduction = deductionJSON, suppositions = suppositionsJSON, signature = signatureJSON, hypotheses = hypothesesJSON, json = {
            string,
            lineIndex,
            labels,
            deduction,
            suppositions,
            signature,
            hypotheses
        };
        return json;
    }
    static fromJSON(Class, json, context) {
        const { lineIndex } = json, labels = (0, _json.labelsFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), signature = (0, _json.signatureFromJSON)(json, context), hypotheses = (0, _json.hypothesesFromJSON)(json, context), topLevelAssertionString = (0, _string.topLevelAssertionStringFromLabelsSuppositionsAndDeduction)(labels, suppositions, deduction), node = null, proof = null, string = topLevelAssertionString, topLevelAssertion = new Class(context, string, node, lineIndex, labels, suppositions, deduction, proof, signature, hypotheses);
        return topLevelAssertion;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZW5jbG9zZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc3luY0V4dHJhY3QsIGFzeW5jRm9yd2FyZHNFdmVyeSwgYXN5bmNCYWNrd2FyZHNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgc2V0SHlwb3RoZXNlcyhoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uKGluZGV4KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLnN1cHBvc2l0aW9uc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIGlzSHlwb3RoZXRpY2FsKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNMZW5ndGggPSB0aGlzLmh5cG90aGVzZXMubGVuZ3RoLFxuICAgICAgICAgIGh5cG90aGV0aWNhbCA9IChoeXBvdGhlc2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXRpY2FsO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCkge1xuICAgIGxldCBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzO1xuXG4gICAgY29uc3QgaHlwb3RoZXRpY2FsID0gdGhpcy5pc0h5cG90aGV0aWNhbCgpO1xuXG4gICAgaWYgKGh5cG90aGV0aWNhbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSBjb3JyZWxhdGUodGhpcy5oeXBvdGhlc2VzLCBwcm9vZkFzc2VydGlvbnMsIChoeXBvdGhlc2lzLCBwcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICBjb25zdCBoeXBvdGhlc2VzQ29tcGFyZXNUb1N0ZXAgPSBoeXBvdGhlc2lzLmNvbXBhcmVQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29ycmVsYXRlZCB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi4uLmApO1xuXG4gICAgYXdhaXQgZW5jbG9zZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoY29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxzVmVyaWZ5O1xuXG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGxhYmVscy4uLmApO1xuXG4gICAgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZlcmlmaWVzID0gdGhpcy52ZXJpZnlMYWJlbChsYWJlbCk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGxhYmVscy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5TGFiZWwobGFiZWwpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkoKTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnByb29mLnZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25WZXJpZmllcztcblxuICAgIGNvbnN0IGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dClcblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRm9yd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdGVwV2l0aERlZHVjdGlvbihzdGVwLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbiA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGVwVW5pZmllcyA9IGF3YWl0IHRoaXMuZGVkdWN0aW9uLnVuaWZ5U3RlcChzdGVwLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbjtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RlcCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzID0gdGhpcy5jb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpO1xuXG4gICAgaWYgKGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMpIHtcbiAgICAgIGNvbnN0IHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbiA9IGF3YWl0IHRoaXMudW5pZnlTdGVwV2l0aERlZHVjdGlvbihzdGVwLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMgPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbnRleHQuYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGF3YWl0IGFzeW5jRXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBhc3luYyAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5yZXNvbHZlU3Vic3RpdHV0aW9ucygpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBhd2FpdCBzdXBwb3NpdGlvbi51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb247XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHJldmVyc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyk7IC8vL1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zID0gYXdhaXQgYXN5bmNCYWNrd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGVwVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1cHBvc2l0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHRoaXMuc2lnbmF0dXJlKSxcbiAgICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKHRoaXMuaHlwb3RoZXNlcyksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4LFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICAgICAgaHlwb3RoZXNlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbEFzc2VydGlvbiIsInJldmVyc2UiLCJjb3JyZWxhdGUiLCJhcnJheVV0aWxpdGllcyIsImFzeW5jRXh0cmFjdCIsImFzeW5jRm9yd2FyZHNFdmVyeSIsImFzeW5jQmFja3dhcmRzRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsInNpZ25hdHVyZSIsImh5cG90aGVzZXMiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXREZWR1Y3Rpb24iLCJnZXRQcm9vZiIsImdldFNpZ25hdHVyZSIsImdldEh5cG90aGVzZXMiLCJzZXRIeXBvdGhlc2VzIiwiZ2V0U3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uIiwiaXNIeXBvdGhldGljYWwiLCJoeXBvdGhlc2VzTGVuZ3RoIiwibGVuZ3RoIiwiaHlwb3RoZXRpY2FsIiwiaXNVbmNvbmRpdGlvbmFsIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwidW5jb25kaXRpb25hbCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsImNvcnJlbGF0ZUh5cG90aGVzZXMiLCJjb3JyZWxhdGVzVG9IeXBvdGhlc2VzIiwicHJvb2ZBc3NlcnRpb25zIiwiZ2V0UHJvb2ZBc3NlcnRpb25zIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzaXMiLCJwcm9vZkFzc2VydGlvbiIsImh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCIsImNvbXBhcmVQcm9vZkFzc2VydGlvbiIsImRlYnVnIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJlbmNsb3NlIiwibGFiZWxzVmVyaWZ5IiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJldmVyeSIsImxhYmVsVmVyaWZpZXMiLCJ2ZXJpZnlMYWJlbCIsImdldENvbnRleHQiLCJsYWJlbFN0cmluZyIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsImRlZHVjdGlvblN0cmluZyIsInZlcmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllcyIsInN1cHBvc2l0aW9uU3RyaW5nIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJ1bmlmeVN0ZXBXaXRoRGVkdWN0aW9uIiwic3RlcCIsInN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbiIsImJyZWFrIiwic3RlcFN0cmluZyIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwidW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5Iiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9ucyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwicmVzb2x2ZVN1YnN0aXR1dGlvbnMiLCJzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcFVuaWZpZXNXaXRoU3VwcG9zaXRpb24iLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzaWduYXR1cmVKU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwibGFiZWxzRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJ0b3BMZXZlbEFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUJBOzs7ZUFBcUJBOzs7MkJBbkJVO2dDQUNnQjt5QkFFdkI7d0JBQ2tEO3NCQVUzQjtBQUUvQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsU0FBUyxFQUFFLEdBQUdDLHlCQUFjLEVBQ3ZDLEVBQUVDLFlBQVksRUFBRUMsa0JBQWtCLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdDLHFDQUFxQjtBQUV4RSxNQUFNUCwwQkFBMEJRLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsQ0FBRTtRQUMzRyxLQUFLLENBQUNULFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENB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