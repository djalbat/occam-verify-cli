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
const _breakPoint = require("../utilities/breakPoint");
const _string = require("../utilities/string");
const _json = require("../utilities/json");
const { reverse } = _necessary.arrayUtilities, { asyncEvery, asyncExtract, asyncForwardsEvery, asyncBackwardsEvery } = _occamlanguages.asynchronousUtilities;
class TopLevelAssertion extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, labels, suppositions, deduction, proof, signature, hypotheses){
        super(context, string, node, breakPoint);
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
    isSatisfiable() {
        const satisfiable = false;
        return satisfiable;
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
    async dischargeHypothesis(hypothesis, context) {
        let hypothesisDischarged;
        await this.break(context);
        const hypothesisString = hypothesis.getString(), topLevelAssertionString = this.getString(); ///
        context.trace(`Discharding the '${topLevelAssertionString}' top level assertion's '${hypothesisString}' hypothesis... `);
        hypothesisDischarged = hypothesis.discharge(context);
        if (hypothesisDischarged) {
            context.trace(`...discharged the '${topLevelAssertionString}' top level assertion's '${hypothesisString}' hypothesis. `);
        }
        return hypothesisDischarged;
    }
    async dischargeHypotheses(context) {
        const hypotheses = this.getHypotheses(), hypothesesDischarged = await asyncEvery(hypotheses, async (hypothesis)=>{
            const hypothesisDischarged = await this.dischargeHypothesis(hypothesis, context);
            if (hypothesisDischarged) {
                return true;
            }
        });
        return hypothesesDischarged;
    }
    async unifyStepWithDeduction(step, context) {
        let stepUnifiesWithDeduction = false;
        await this.break(context);
        const stepString = step.getString(), topLevelAssertionString = this.getString(); ///
        context.trace(`Unifying the '${stepString}' step with the '${topLevelAssertionString}' top level assertion's deduction...`);
        const stepUnifies = this.deduction.unifyStep(step, context);
        if (stepUnifies) {
            stepUnifiesWithDeduction = true;
        }
        if (stepUnifiesWithDeduction) {
            context.debug(`...unified the '${stepString}' step with the '${topLevelAssertionString}' top level assertion's deduction.`);
        }
        return stepUnifiesWithDeduction;
    }
    async unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context) {
        let stepAndSubproofOrProofAssertionsUnify = false;
        const stepUnifiesWithDeduction = await this.unifyStepWithDeduction(step, context);
        if (stepUnifiesWithDeduction) {
            const hypothesesDischarged = await this.dischargeHypotheses(context);
            if (hypothesesDischarged) {
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
        const labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), signatureJSON = (0, _json.signatureToSignatureJSON)(this.signature), hypothesesJSON = (0, _json.hypothesesToHypothesesJSON)(this.hypotheses), string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const labels = labelsJSON, deduction = deductionJSON, suppositions = suppositionsJSON, signature = signatureJSON, hypotheses = hypothesesJSON, json = {
            string,
            breakPoint,
            labels,
            deduction,
            suppositions,
            signature,
            hypotheses
        };
        return json;
    }
    static fromJSON(Class, json, context) {
        const labels = (0, _json.labelsFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), signature = (0, _json.signatureFromJSON)(json, context), hypotheses = (0, _json.hypothesesFromJSON)(json, context), topLevelAssertionString = (0, _string.topLevelAssertionStringFromLabelsSignatureSuppositionsAndDeduction)(labels, signature, suppositions, deduction), string = topLevelAssertionString, node = null, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), proof = null, topLevelAssertion = new Class(context, string, node, breakPoint, labels, suppositions, deduction, proof, signature, hypotheses);
        return topLevelAssertion;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZW5jbG9zZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYnJlYWtQb2ludEZyb21KU09OLCBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU2lnbmF0dXJlU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNFdmVyeSwgYXN5bmNFeHRyYWN0LCBhc3luY0ZvcndhcmRzRXZlcnksIGFzeW5jQmFja3dhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgc2V0SHlwb3RoZXNlcyhoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uKGluZGV4KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLnN1cHBvc2l0aW9uc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIGlzU2F0aXNmaWFibGUoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGlzSHlwb3RoZXRpY2FsKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNMZW5ndGggPSB0aGlzLmh5cG90aGVzZXMubGVuZ3RoLFxuICAgICAgICAgIGh5cG90aGV0aWNhbCA9IChoeXBvdGhlc2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXRpY2FsO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGF3YWl0IGVuY2xvc2UoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscyhjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsc1ZlcmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBsYWJlbHMuLi5gKTtcblxuICAgIGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWZXJpZmllcyA9IHRoaXMudmVyaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBsYWJlbHMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVmVyaWZpZXM7XG5cbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkoKTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnByb29mLnZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25WZXJpZmllcztcblxuICAgIGNvbnN0IGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dClcblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRm9yd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgZGlzY2hhcmdlSHlwb3RoZXNpcyhoeXBvdGhlc2lzLCBjb250ZXh0KSB7XG4gICAgbGV0IGh5cG90aGVzaXNEaXNjaGFyZ2VkO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IGh5cG90aGVzaXNTdHJpbmcgPSBoeXBvdGhlc2lzLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBEaXNjaGFyZGluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7aHlwb3RoZXNpc1N0cmluZ30nIGh5cG90aGVzaXMuLi4gYCk7XG5cbiAgICBoeXBvdGhlc2lzRGlzY2hhcmdlZCA9IGh5cG90aGVzaXMuZGlzY2hhcmdlKGNvbnRleHQpO1xuXG4gICAgaWYgKGh5cG90aGVzaXNEaXNjaGFyZ2VkKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi5kaXNjaGFyZ2VkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtoeXBvdGhlc2lzU3RyaW5nfScgaHlwb3RoZXNpcy4gYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh5cG90aGVzaXNEaXNjaGFyZ2VkO1xuICB9XG5cbiAgYXN5bmMgZGlzY2hhcmdlSHlwb3RoZXNlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgaHlwb3RoZXNlcyA9IHRoaXMuZ2V0SHlwb3RoZXNlcygpLFxuICAgICAgICAgIGh5cG90aGVzZXNEaXNjaGFyZ2VkID0gYXdhaXQgYXN5bmNFdmVyeShoeXBvdGhlc2VzLCBhc3luYyAoaHlwb3RoZXNpcykgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHlwb3RoZXNpc0Rpc2NoYXJnZWQgPSBhd2FpdCB0aGlzLmRpc2NoYXJnZUh5cG90aGVzaXMoaHlwb3RoZXNpcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChoeXBvdGhlc2lzRGlzY2hhcmdlZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBoeXBvdGhlc2VzRGlzY2hhcmdlZDtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RlcFdpdGhEZWR1Y3Rpb24oc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24gPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RlcFVuaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi51bmlmeVN0ZXAoc3RlcCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb247XG4gIH1cblxuICBhc3luYyB1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0ZXAsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gYXdhaXQgdGhpcy51bmlmeVN0ZXBXaXRoRGVkdWN0aW9uKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgY29uc3QgaHlwb3RoZXNlc0Rpc2NoYXJnZWQgPSBhd2FpdCB0aGlzLmRpc2NoYXJnZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICAgIGlmIChoeXBvdGhlc2VzRGlzY2hhcmdlZCkge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMgPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb250ZXh0LmFyZURlcml2ZWRTdWJzdGl0dXRpb25zUmVzb2x2ZWQoKTtcblxuICAgICAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGF3YWl0IGFzeW5jRXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBhc3luYyAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5yZXNvbHZlRGVyaXZlZFN1YnN0aXR1dGlvbnMoKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXdhaXQgc3VwcG9zaXRpb24udW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucztcblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSByZXZlcnNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpOyAvLy9cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyA9IGF3YWl0IGFzeW5jQmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTih0aGlzLnNpZ25hdHVyZSksXG4gICAgICAgICAgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTih0aGlzLmh5cG90aGVzZXMpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgYnJlYWtQb2ludCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHNpZ25hdHVyZSxcbiAgICAgICAgICAgIGh5cG90aGVzZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU2lnbmF0dXJlU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc2lnbmF0dXJlLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcsIC8vL1xuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbEFzc2VydGlvbiIsInJldmVyc2UiLCJhcnJheVV0aWxpdGllcyIsImFzeW5jRXZlcnkiLCJhc3luY0V4dHJhY3QiLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY0JhY2t3YXJkc0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0SHlwb3RoZXNlcyIsInNldEh5cG90aGVzZXMiLCJnZXRTdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb24iLCJpc1NhdGlzZmlhYmxlIiwic2F0aXNmaWFibGUiLCJpc0h5cG90aGV0aWNhbCIsImh5cG90aGVzZXNMZW5ndGgiLCJsZW5ndGgiLCJoeXBvdGhldGljYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJ1bmNvbmRpdGlvbmFsIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZW5jbG9zZSIsImxhYmVsc1ZlcmlmeSIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImRlZHVjdGlvblZlcmlmaWVzIiwidmVyaWZ5RGVkdWN0aW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwiZGVidWciLCJldmVyeSIsImxhYmVsVmVyaWZpZXMiLCJ2ZXJpZnlMYWJlbCIsImxhYmVsU3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZGVkdWN0aW9uU3RyaW5nIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImRpc2NoYXJnZUh5cG90aGVzaXMiLCJoeXBvdGhlc2lzIiwiaHlwb3RoZXNpc0Rpc2NoYXJnZWQiLCJicmVhayIsImh5cG90aGVzaXNTdHJpbmciLCJkaXNjaGFyZ2UiLCJkaXNjaGFyZ2VIeXBvdGhlc2VzIiwiaHlwb3RoZXNlc0Rpc2NoYXJnZWQiLCJ1bmlmeVN0ZXBXaXRoRGVkdWN0aW9uIiwic3RlcCIsInN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbiIsInN0ZXBTdHJpbmciLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMiLCJkZXJpdmVkU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlRGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwicmVzb2x2ZURlcml2ZWRTdWJzdGl0dXRpb25zIiwic3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN0ZXBVbmlmaWVzV2l0aFN1cHBvc2l0aW9uIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic2lnbmF0dXJlSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwibGFiZWxzRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTaWduYXR1cmVTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJicmVha1BvaW50RnJvbUpTT04iLCJ0b3BMZXZlbEFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0JBOzs7ZUFBcUJBOzs7MkJBcEJVO2dDQUNnQjt5QkFFdkI7NEJBQ3VDO3dCQUNvQjtzQkFVcEM7QUFFL0MsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0Ms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