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
const { reverse } = _necessary.arrayUtilities, { asyncExtract, asyncForwardsEvery, asyncBackwardsEvery } = _occamlanguages.asynchronousUtilities;
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
            const subproofOrProofAssertionsUnifiesWithSuppositions = await this.unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, context);
            if (subproofOrProofAssertionsUnifiesWithSuppositions) {
                const derivedSubstitutionsResolved = context.areDerivedSubstitutionsResolved();
                if (derivedSubstitutionsResolved) {
                    stepAndSubproofOrProofAssertionsUnify = true;
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
        const breakPointJSON = breakPoint.toJSON();
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
        const { breakPoint } = json, labels = (0, _json.labelsFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), signature = (0, _json.signatureFromJSON)(json, context), hypotheses = (0, _json.hypothesesFromJSON)(json, context), topLevelAssertionString = (0, _string.topLevelAssertionStringFromLabelsSignatureSuppositionsAndDeduction)(labels, signature, suppositions, deduction), node = null, proof = null, string = topLevelAssertionString, topLevelAssertion = new Class(context, string, node, breakPoint, labels, suppositions, deduction, proof, signature, hypotheses);
        return topLevelAssertion;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZW5jbG9zZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU2lnbmF0dXJlU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNFeHRyYWN0LCBhc3luY0ZvcndhcmRzRXZlcnksIGFzeW5jQmFja3dhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgc2V0SHlwb3RoZXNlcyhoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uKGluZGV4KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLnN1cHBvc2l0aW9uc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIGlzU2F0aXNmaWFibGUoKSB7XG4gICAgY29uc3Qgc2F0aXNmaWFibGUgPSBmYWxzZTtcblxuICAgIHJldHVybiBzYXRpc2ZpYWJsZTtcbiAgfVxuXG4gIGlzSHlwb3RoZXRpY2FsKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNMZW5ndGggPSB0aGlzLmh5cG90aGVzZXMubGVuZ3RoLFxuICAgICAgICAgIGh5cG90aGV0aWNhbCA9IChoeXBvdGhlc2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXRpY2FsO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGF3YWl0IGVuY2xvc2UoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscyhjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsc1ZlcmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBsYWJlbHMuLi5gKTtcblxuICAgIGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWZXJpZmllcyA9IHRoaXMudmVyaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBsYWJlbHMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVmVyaWZpZXM7XG5cbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkoKTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnByb29mLnZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25WZXJpZmllcztcblxuICAgIGNvbnN0IGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dClcblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRm9yd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdGVwV2l0aERlZHVjdGlvbihzdGVwLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbiA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGVwVW5pZmllcyA9IHRoaXMuZGVkdWN0aW9uLnVuaWZ5U3RlcChzdGVwLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbjtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RlcCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24gPSBhd2FpdCB0aGlzLnVuaWZ5U3RlcFdpdGhEZWR1Y3Rpb24oc3RlcCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMgPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbnRleHQuYXJlRGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGF3YWl0IGFzeW5jRXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBhc3luYyAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5yZXNvbHZlRGVyaXZlZFN1YnN0aXR1dGlvbnMoKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXdhaXQgc3VwcG9zaXRpb24udW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucztcblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSByZXZlcnNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpOyAvLy9cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyA9IGF3YWl0IGFzeW5jQmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTih0aGlzLnNpZ25hdHVyZSksXG4gICAgICAgICAgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTih0aGlzLmh5cG90aGVzZXMpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludC50b0pTT04oKTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBicmVha1BvaW50LFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICAgICAgaHlwb3RoZXNlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgYnJlYWtQb2ludCB9ID0ganNvbixcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU2lnbmF0dXJlU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc2lnbmF0dXJlLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJhc3luY0V4dHJhY3QiLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY0JhY2t3YXJkc0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwiYnJlYWtQb2ludCIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0SHlwb3RoZXNlcyIsInNldEh5cG90aGVzZXMiLCJnZXRTdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb24iLCJpc1NhdGlzZmlhYmxlIiwic2F0aXNmaWFibGUiLCJpc0h5cG90aGV0aWNhbCIsImh5cG90aGVzZXNMZW5ndGgiLCJsZW5ndGgiLCJoeXBvdGhldGljYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJ1bmNvbmRpdGlvbmFsIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZW5jbG9zZSIsImxhYmVsc1ZlcmlmeSIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImRlZHVjdGlvblZlcmlmaWVzIiwidmVyaWZ5RGVkdWN0aW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwiZGVidWciLCJldmVyeSIsImxhYmVsVmVyaWZpZXMiLCJ2ZXJpZnlMYWJlbCIsImxhYmVsU3RyaW5nIiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwiZGVkdWN0aW9uU3RyaW5nIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInVuaWZ5U3RlcFdpdGhEZWR1Y3Rpb24iLCJzdGVwIiwic3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwiYnJlYWsiLCJzdGVwU3RyaW5nIiwic3RlcFVuaWZpZXMiLCJ1bmlmeVN0ZXAiLCJ1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb25zIiwiZGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZURlcml2ZWRTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInJlc29sdmVEZXJpdmVkU3Vic3RpdHV0aW9ucyIsInN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdGVwVW5pZmllc1dpdGhTdXBwb3NpdGlvbiIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInNpZ25hdHVyZUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJoeXBvdGhlc2VzSlNPTiIsImh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OIiwiZ2V0QnJlYWtQb2ludCIsImJyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsImh5cG90aGVzZXNGcm9tSlNPTiIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1NpZ25hdHVyZVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFxQkE7OztlQUFxQkE7OzsyQkFuQlU7Z0NBQ2dCO3lCQUV2Qjt3QkFDMkQ7c0JBVXBDO0FBRS9DLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdDLHlCQUFjLEVBQzVCLEVBQUVDLFlBQVksRUFBRUMsa0JBQWtCLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdDLHFDQUFxQjtBQUV4RSxNQUFNTiwwQkFBMEJPLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsQ0FBRTtRQUM1RyxLQUFLLENBQUNULFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNOLE1BQU07SUFDcEI7SUFFQU8sa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDTixZQUFZO0lBQzFCO0lBRUFPLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ04sU0FBUztJQUN2QjtJQUVBTyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNOLEtBQUs7SUFDbkI7SUFFQU8sZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDTixT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