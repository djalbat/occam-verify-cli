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
            const labelVerifies = this.verifyLabel(label, context);
            if (labelVerifies) {
                return true;
            }
        });
        if (labelsVerify) {
            context.debug(`...verified the '${topLevelAssertionString}' top level assertion's labels.`);
        }
        return labelsVerify;
    }
    verifyLabel(label, context) {
        let labelVerifies;
        const labelString = label.getString(), topLevelAssertionString = this.getString(); ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZW5jbG9zZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc3luY0V4dHJhY3QsIGFzeW5jRm9yd2FyZHNFdmVyeSwgYXN5bmNCYWNrd2FyZHNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgc2V0SHlwb3RoZXNlcyhoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uKGluZGV4KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLnN1cHBvc2l0aW9uc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIGlzSHlwb3RoZXRpY2FsKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNMZW5ndGggPSB0aGlzLmh5cG90aGVzZXMubGVuZ3RoLFxuICAgICAgICAgIGh5cG90aGV0aWNhbCA9IChoeXBvdGhlc2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXRpY2FsO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCkge1xuICAgIGxldCBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzO1xuXG4gICAgY29uc3QgaHlwb3RoZXRpY2FsID0gdGhpcy5pc0h5cG90aGV0aWNhbCgpO1xuXG4gICAgaWYgKGh5cG90aGV0aWNhbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSBjb3JyZWxhdGUodGhpcy5oeXBvdGhlc2VzLCBwcm9vZkFzc2VydGlvbnMsIChoeXBvdGhlc2lzLCBwcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICBjb25zdCBoeXBvdGhlc2VzQ29tcGFyZXNUb1N0ZXAgPSBoeXBvdGhlc2lzLmNvbXBhcmVQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29ycmVsYXRlZCB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi4uLmApO1xuXG4gICAgYXdhaXQgZW5jbG9zZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoY29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxzVmVyaWZ5O1xuXG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGxhYmVscy4uLmApO1xuXG4gICAgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZlcmlmaWVzID0gdGhpcy52ZXJpZnlMYWJlbChsYWJlbCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGxhYmVscy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeSgpO1xuXG4gICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBwcm9vZi4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMucHJvb2YudmVyaWZ5KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBwcm9vZi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeURlZHVjdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuZGVkdWN0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KVxuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vL1xuXG4gICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVmVyaWZ5O1xuXG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy4uLmApO1xuXG4gICAgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgYXN5bmNGb3J3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCBhc3luYyAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3Mgc3VwcG9zaXRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZnk7XG4gIH1cblxuICBhc3luYyB1bmlmeVN0ZXBXaXRoRGVkdWN0aW9uKHN0ZXAsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0ZXBVbmlmaWVzID0gYXdhaXQgdGhpcy5kZWR1Y3Rpb24udW5pZnlTdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICBzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSB0aGlzLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoY29ycmVsYXRlc1RvSHlwb3RoZXNlcykge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gYXdhaXQgdGhpcy51bmlmeVN0ZXBXaXRoRGVkdWN0aW9uKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29udGV4dC5hcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQoKTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5O1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gYXdhaXQgYXN5bmNFeHRyYWN0KHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGFzeW5jIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LnJlc29sdmVTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGF3YWl0IHN1cHBvc2l0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbjtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnM7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gcmV2ZXJzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTsgLy8vXG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMgPSBhd2FpdCBhc3luY0JhY2t3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCBhc3luYyAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04odGhpcy5zaWduYXR1cmUpLFxuICAgICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04odGhpcy5oeXBvdGhlc2VzKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXgsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzaWduYXR1cmUsXG4gICAgICAgICAgICBoeXBvdGhlc2VzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRvcExldmVsQXNzZXJ0aW9uIiwicmV2ZXJzZSIsImNvcnJlbGF0ZSIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNFeHRyYWN0IiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNCYWNrd2FyZHNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0SHlwb3RoZXNlcyIsInNldEh5cG90aGVzZXMiLCJnZXRTdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb24iLCJpc0h5cG90aGV0aWNhbCIsImh5cG90aGVzZXNMZW5ndGgiLCJsZW5ndGgiLCJoeXBvdGhldGljYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJ1bmNvbmRpdGlvbmFsIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsImNvcnJlbGF0ZXNUb0h5cG90aGVzZXMiLCJwcm9vZkFzc2VydGlvbnMiLCJnZXRQcm9vZkFzc2VydGlvbnMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiaHlwb3RoZXNpcyIsInByb29mQXNzZXJ0aW9uIiwiaHlwb3RoZXNlc0NvbXBhcmVzVG9TdGVwIiwiY29tcGFyZVByb29mQXNzZXJ0aW9uIiwiZGVidWciLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImVuY2xvc2UiLCJsYWJlbHNWZXJpZnkiLCJ2ZXJpZnlMYWJlbHMiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInZlcmlmeURlZHVjdGlvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsImV2ZXJ5IiwibGFiZWxWZXJpZmllcyIsInZlcmlmeUxhYmVsIiwibGFiZWxTdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJkZWR1Y3Rpb25TdHJpbmciLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlTdGVwV2l0aERlZHVjdGlvbiIsInN0ZXAiLCJzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24iLCJicmVhayIsInN0ZXBTdHJpbmciLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwic3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN0ZXBVbmlmaWVzV2l0aFN1cHBvc2l0aW9uIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic2lnbmF0dXJlSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXFCQTs7O2VBQXFCQTs7OzJCQW5CVTtnQ0FDZ0I7eUJBRXZCO3dCQUNrRDtzQkFVM0I7QUFFL0MsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFNBQVMsRUFBRSxHQUFHQyx5QkFBYyxFQUN2QyxFQUFFQyxZQUFZLEVBQUVDLGtCQUFrQixFQUFFQyxtQkFBbUIsRUFBRSxHQUFHQyxxQ0FBcUI7QUFFeEUsTUFBTVAsMEJBQTBCUSx1QkFBTztJQUNwRCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxVQUFVLENBQUU7UUFDM0csS0FBSyxDQUFDVCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDTixNQUFNO0lBQ3BCO0lBRUFPLGtCQUFrQjtRQUNoQixP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