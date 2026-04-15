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
        const { lineIndex } = json, labels = (0, _json.labelsFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), signature = (0, _json.signatureFromJSON)(json, context), hypotheses = (0, _json.hypothesesFromJSON)(json, context), topLevelAssertionString = (0, _string.topLevelAssertionStringFromLabelsSignatureSuppositionsAndDeduction)(labels, signature, suppositions, deduction), node = null, proof = null, string = topLevelAssertionString, topLevelAssertion = new Class(context, string, node, lineIndex, labels, suppositions, deduction, proof, signature, hypotheses);
        return topLevelAssertion;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZW5jbG9zZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU2lnbmF0dXJlU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNFeHRyYWN0LCBhc3luY0ZvcndhcmRzRXZlcnksIGFzeW5jQmFja3dhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmRlZHVjdGlvbiA9IGRlZHVjdGlvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZHVjdGlvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgfVxuXG4gIGdldEh5cG90aGVzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHlwb3RoZXNlcztcbiAgfVxuXG4gIHNldEh5cG90aGVzZXMoaHlwb3RoZXNlcykge1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbihpbmRleCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcy5zdXBwb3NpdGlvbnNbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBpc1NhdGlzZmlhYmxlKCkge1xuICAgIGNvbnN0IHNhdGlzZmlhYmxlID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc2F0aXNmaWFibGU7XG4gIH1cblxuICBpc0h5cG90aGV0aWNhbCgpIHtcbiAgICBjb25zdCBoeXBvdGhlc2VzTGVuZ3RoID0gdGhpcy5oeXBvdGhlc2VzLmxlbmd0aCxcbiAgICAgICAgICBoeXBvdGhldGljYWwgPSAoaHlwb3RoZXNlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGh5cG90aGV0aWNhbDtcbiAgfVxuXG4gIGlzVW5jb25kaXRpb25hbCgpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnNMZW5ndGggPSB0aGlzLnN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgdW5jb25kaXRpb25hbCA9IChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIHVuY29uZGl0aW9uYWw7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBhd2FpdCBlbmNsb3NlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLnZlcmlmeUxhYmVscyhjb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeURlZHVjdGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoY29udGV4dCkge1xuICAgIGxldCBsYWJlbHNWZXJpZnk7XG5cbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgbGFiZWxzLi4uYCk7XG5cbiAgICBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgbGFiZWxzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlMYWJlbChsYWJlbCwgY29udGV4dCkge1xuICAgIGxldCBsYWJlbFZlcmlmaWVzO1xuXG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBsYWJlbFZlcmlmaWVzID0gbGFiZWwudmVyaWZ5KCk7XG5cbiAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHByb29mLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHByb29mLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpXG5cbiAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gc3VwcG9zaXRpb247ICAvLy8vXG5cbiAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNWZXJpZnk7XG5cbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3Mgc3VwcG9zaXRpb25zLi4uYCk7XG5cbiAgICBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RlcFdpdGhEZWR1Y3Rpb24oc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24gPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RlcFVuaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi51bmlmeVN0ZXAoc3RlcCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb247XG4gIH1cblxuICBhc3luYyB1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0ZXAsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gYXdhaXQgdGhpcy51bmlmeVN0ZXBXaXRoRGVkdWN0aW9uKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0ZXBVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlcml2ZWRTdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb250ZXh0LmFyZURlcml2ZWRTdWJzdGl0dXRpb25zUmVzb2x2ZWQoKTtcblxuICAgICAgICBpZiAoZGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnk7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBhd2FpdCBhc3luY0V4dHJhY3Qoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgYXN5bmMgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gYXdhaXQgc3VwcG9zaXRpb24udW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgIGNvbnRleHQucmVzb2x2ZURlcml2ZWRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGF3YWl0IHN1cHBvc2l0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbjtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnM7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gcmV2ZXJzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTsgLy8vXG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMgPSBhd2FpdCBhc3luY0JhY2t3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCBhc3luYyAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04odGhpcy5zaWduYXR1cmUpLFxuICAgICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04odGhpcy5oeXBvdGhlc2VzKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXgsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzaWduYXR1cmUsXG4gICAgICAgICAgICBoeXBvdGhlc2VzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsc1NpZ25hdHVyZVN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHNpZ25hdHVyZSwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZywgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJhc3luY0V4dHJhY3QiLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY0JhY2t3YXJkc0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uIiwicHJvb2YiLCJzaWduYXR1cmUiLCJoeXBvdGhlc2VzIiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0RGVkdWN0aW9uIiwiZ2V0UHJvb2YiLCJnZXRTaWduYXR1cmUiLCJnZXRIeXBvdGhlc2VzIiwic2V0SHlwb3RoZXNlcyIsImdldFN1cHBvc2l0aW9uIiwiaW5kZXgiLCJzdXBwb3NpdGlvbiIsImlzU2F0aXNmaWFibGUiLCJzYXRpc2ZpYWJsZSIsImlzSHlwb3RoZXRpY2FsIiwiaHlwb3RoZXNlc0xlbmd0aCIsImxlbmd0aCIsImh5cG90aGV0aWNhbCIsImlzVW5jb25kaXRpb25hbCIsInN1cHBvc2l0aW9uc0xlbmd0aCIsInVuY29uZGl0aW9uYWwiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJlbmNsb3NlIiwibGFiZWxzVmVyaWZ5IiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJkZWJ1ZyIsImV2ZXJ5IiwibGFiZWxWZXJpZmllcyIsInZlcmlmeUxhYmVsIiwibGFiZWxTdHJpbmciLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJkZWR1Y3Rpb25TdHJpbmciLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlTdGVwV2l0aERlZHVjdGlvbiIsInN0ZXAiLCJzdGVwVW5pZmllc1dpdGhEZWR1Y3Rpb24iLCJicmVhayIsInN0ZXBTdHJpbmciLCJzdGVwVW5pZmllcyIsInVuaWZ5U3RlcCIsInVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMiLCJkZXJpdmVkU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlRGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwicmVzb2x2ZURlcml2ZWRTdWJzdGl0dXRpb25zIiwic3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN0ZXBVbmlmaWVzV2l0aFN1cHBvc2l0aW9uIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic2lnbmF0dXJlSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJnZXRMaW5lSW5kZXgiLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU2lnbmF0dXJlU3VwcG9zaXRpb25zQW5kRGVkdWN0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