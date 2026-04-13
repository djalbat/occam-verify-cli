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
        const stepUnifies = this.deduction.unifyStep(step, context);
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
                    const derivedSubstitutionsResolved = context.areDerivedSubstitutionsResolved();
                    if (derivedSubstitutionsResolved) {
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
                    context.resolveDerivedSubstitutions();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZW5jbG9zZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc3luY0V4dHJhY3QsIGFzeW5jRm9yd2FyZHNFdmVyeSwgYXN5bmNCYWNrd2FyZHNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgc2V0SHlwb3RoZXNlcyhoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uKGluZGV4KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLnN1cHBvc2l0aW9uc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIGlzSHlwb3RoZXRpY2FsKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNMZW5ndGggPSB0aGlzLmh5cG90aGVzZXMubGVuZ3RoLFxuICAgICAgICAgIGh5cG90aGV0aWNhbCA9IChoeXBvdGhlc2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXRpY2FsO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCkge1xuICAgIGxldCBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzO1xuXG4gICAgY29uc3QgaHlwb3RoZXRpY2FsID0gdGhpcy5pc0h5cG90aGV0aWNhbCgpO1xuXG4gICAgaWYgKGh5cG90aGV0aWNhbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSBjb3JyZWxhdGUodGhpcy5oeXBvdGhlc2VzLCBwcm9vZkFzc2VydGlvbnMsIChoeXBvdGhlc2lzLCBwcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICBjb25zdCBoeXBvdGhlc2VzQ29tcGFyZXNUb1N0ZXAgPSBoeXBvdGhlc2lzLmNvbXBhcmVQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29ycmVsYXRlZCB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KGNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi4uLmApO1xuXG4gICAgYXdhaXQgZW5jbG9zZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoY29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxzVmVyaWZ5O1xuXG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGxhYmVscy4uLmApO1xuXG4gICAgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZlcmlmaWVzID0gdGhpcy52ZXJpZnlMYWJlbChsYWJlbCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGxhYmVscy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeSgpO1xuXG4gICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBwcm9vZi4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMucHJvb2YudmVyaWZ5KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBwcm9vZi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeURlZHVjdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuZGVkdWN0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KVxuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vL1xuXG4gICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVmVyaWZ5O1xuXG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy4uLmApO1xuXG4gICAgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgYXN5bmNGb3J3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCBhc3luYyAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3Mgc3VwcG9zaXRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZnk7XG4gIH1cblxuICBhc3luYyB1bmlmeVN0ZXBXaXRoRGVkdWN0aW9uKHN0ZXAsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3Qgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0ZXBVbmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udW5pZnlTdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICBzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSB0aGlzLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoY29ycmVsYXRlc1RvSHlwb3RoZXNlcykge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gYXdhaXQgdGhpcy51bmlmeVN0ZXBXaXRoRGVkdWN0aW9uKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zKSB7XG4gICAgICAgICAgY29uc3QgZGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbnRleHQuYXJlRGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgaWYgKGRlcml2ZWRTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5O1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gYXdhaXQgYXN5bmNFeHRyYWN0KHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGFzeW5jIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LnJlc29sdmVEZXJpdmVkU3Vic3RpdHV0aW9ucygpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBhd2FpdCBzdXBwb3NpdGlvbi51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb247XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHJldmVyc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyk7IC8vL1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zID0gYXdhaXQgYXN5bmNCYWNrd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGVwVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1cHBvc2l0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHRoaXMuc2lnbmF0dXJlKSxcbiAgICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKHRoaXMuaHlwb3RoZXNlcyksXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSB0aGlzLmdldExpbmVJbmRleCgpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGluZUluZGV4LFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICAgICAgaHlwb3RoZXNlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbEFzc2VydGlvbiIsInJldmVyc2UiLCJjb3JyZWxhdGUiLCJhcnJheVV0aWxpdGllcyIsImFzeW5jRXh0cmFjdCIsImFzeW5jRm9yd2FyZHNFdmVyeSIsImFzeW5jQmFja3dhcmRzRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsaW5lSW5kZXgiLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsInNpZ25hdHVyZSIsImh5cG90aGVzZXMiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXREZWR1Y3Rpb24iLCJnZXRQcm9vZiIsImdldFNpZ25hdHVyZSIsImdldEh5cG90aGVzZXMiLCJzZXRIeXBvdGhlc2VzIiwiZ2V0U3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uIiwiaXNIeXBvdGhldGljYWwiLCJoeXBvdGhlc2VzTGVuZ3RoIiwibGVuZ3RoIiwiaHlwb3RoZXRpY2FsIiwiaXNVbmNvbmRpdGlvbmFsIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwidW5jb25kaXRpb25hbCIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsImNvcnJlbGF0ZUh5cG90aGVzZXMiLCJjb3JyZWxhdGVzVG9IeXBvdGhlc2VzIiwicHJvb2ZBc3NlcnRpb25zIiwiZ2V0UHJvb2ZBc3NlcnRpb25zIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzaXMiLCJwcm9vZkFzc2VydGlvbiIsImh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCIsImNvbXBhcmVQcm9vZkFzc2VydGlvbiIsImRlYnVnIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJlbmNsb3NlIiwibGFiZWxzVmVyaWZ5IiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJldmVyeSIsImxhYmVsVmVyaWZpZXMiLCJ2ZXJpZnlMYWJlbCIsImxhYmVsU3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZGVkdWN0aW9uU3RyaW5nIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInVuaWZ5U3RlcFdpdGhEZWR1Y3Rpb24iLCJzdGVwIiwic3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwiYnJlYWsiLCJzdGVwU3RyaW5nIiwic3RlcFVuaWZpZXMiLCJ1bmlmeVN0ZXAiLCJ1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb25zIiwiZGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZURlcml2ZWRTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInJlc29sdmVEZXJpdmVkU3Vic3RpdHV0aW9ucyIsInN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdGVwVW5pZmllc1dpdGhTdXBwb3NpdGlvbiIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInNpZ25hdHVyZUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJoeXBvdGhlc2VzSlNPTiIsImh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OIiwiZ2V0TGluZUluZGV4IiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsImh5cG90aGVzZXNGcm9tSlNPTiIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQkE7OztlQUFxQkE7OzsyQkFuQlU7Z0NBQ2dCO3lCQUV2Qjt3QkFDa0Q7c0JBVTNCO0FBRS9DLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MseUJBQWMsRUFDdkMsRUFBRUMsWUFBWSxFQUFFQyxrQkFBa0IsRUFBRUMsbUJBQW1CLEVBQUUsR0FBR0MscUNBQXFCO0FBRXhFLE1BQU1QLDBCQUEwQlEsdUJBQU87SUFDcEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxDQUFFO1FBQzNHLEtBQUssQ0FBQ1QsU0FBU0MsUUFBUUMsTUFBTUM7UUFFN0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFlBQVk7UUFDVixPQUFP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