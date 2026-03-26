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
const { extract, reverse, correlate } = _necessary.arrayUtilities, { asyncForwardsEvery, asyncBackwardsEvery } = _occamlanguages.asynchronousUtilities;
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
    isHypothetical() {
        const hypothesesLength = this.hypotheses.length, hypothetical = hypothesesLength > 0;
        return hypothetical;
    }
    isUnconditional() {
        const suppositionsLength = this.suppositions.length, unconditional = suppositionsLength === 0;
        return unconditional;
    }
    getSupposition(index) {
        const supposition = this.suppositions[index] || null;
        return supposition;
    }
    compareMetavariableName(metavariableName) {
        const comparesToMetavariableName = this.labels.some((label)=>{
            const labelComparesToMetavariableName = label.compareMetavariableName(metavariableName);
            if (labelComparesToMetavariableName) {
                return true;
            }
        });
        return comparesToMetavariableName;
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
    unifyStatementWithDeduction(statement, context) {
        let statementUnifiesWithDeduction = false;
        const statementString = statement.getString(), deductionString = this.deduction.getString(), topLevelAssertionString = this.getString(); ///
        context.trace(`Unifying the '${statementString}' statement with the '${topLevelAssertionString}' top level assertion's '${deductionString}' deduction...`);
        const statementUnifies = this.deduction.unifyStatement(statement, context);
        if (statementUnifies) {
            statementUnifiesWithDeduction = true;
        }
        if (statementUnifiesWithDeduction) {
            context.debug(`...unified the '${statementString}' statement with the '${topLevelAssertionString}' top level assertion's '${deductionString}' deduction.`);
        }
        return statementUnifiesWithDeduction;
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
    async unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context) {
        let statementAndSubproofOrProofAssertionsUnify = false;
        const correlatesToHypotheses = this.correlateHypotheses(context);
        if (correlatesToHypotheses) {
            const statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, context);
            if (statementUnifiesWithDeduction) {
                const subproofOrProofAssertionsUnifiesWithSuppositions = await this.unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, context);
                if (subproofOrProofAssertionsUnifiesWithSuppositions) {
                    const substitutionsResolved = context.areSubstitutionsResolved();
                    if (substitutionsResolved) {
                        statementAndSubproofOrProofAssertionsUnify = true;
                    }
                }
            }
        }
        return statementAndSubproofOrProofAssertionsUnify;
    }
    async unifySubproofOrProofAssertionsWithSupposition(subproofOrProofAssertions, supposition, context) {
        let subproofOrProofAssertionsUnifiesWithSupposition = false;
        if (!subproofOrProofAssertionsUnifiesWithSupposition) {
            const subproofOrProofAssertion = extract(subproofOrProofAssertions, (subproofOrProofAssertion)=>{
                const subproofOrProofAssertionUnifies = supposition.unifySubproofOrProofAssertion(subproofOrProofAssertion, context);
                if (subproofOrProofAssertionUnifies) {
                    const specificContext = context; ///
                    context = this.getContext();
                    const generalContext = context; ///
                    context = specificContext; ///
                    context.resolveSubstitutions(generalContext, specificContext);
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
        subproofOrProofAssertionsUnifiesWithSuppositions = asyncBackwardsEvery(this.suppositions, async (supposition)=>{
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IEVsZW1lbnQsIGFzeW5jaHJvbm91c1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1sYW5ndWFnZXNcIjtcblxuaW1wb3J0IHsgZW5jbG9zZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBleHRyYWN0LCByZXZlcnNlLCBjb3JyZWxhdGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc3luY0ZvcndhcmRzRXZlcnksIGFzeW5jQmFja3dhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgc2V0SHlwb3RoZXNlcyhoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGlzSHlwb3RoZXRpY2FsKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNMZW5ndGggPSB0aGlzLmh5cG90aGVzZXMubGVuZ3RoLFxuICAgICAgICAgIGh5cG90aGV0aWNhbCA9IChoeXBvdGhlc2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXRpY2FsO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uKGluZGV4KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLnN1cHBvc2l0aW9uc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbGFiZWwuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29ycmVsYXRlSHlwb3RoZXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IGNvcnJlbGF0ZXNUb0h5cG90aGVzZXM7XG5cbiAgICBjb25zdCBoeXBvdGhldGljYWwgPSB0aGlzLmlzSHlwb3RoZXRpY2FsKCk7XG5cbiAgICBpZiAoaHlwb3RoZXRpY2FsKSB7XG4gICAgICBjb25zdCBwcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYENvcnJlbGF0aW5nIHRoZSBoeXBvdGhlc2VzIG9mIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29ycmVsYXRlc1RvSHlwb3RoZXNlcyA9IGNvcnJlbGF0ZSh0aGlzLmh5cG90aGVzZXMsIHByb29mQXNzZXJ0aW9ucywgKGh5cG90aGVzaXMsIHByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCA9IGh5cG90aGVzaXMuY29tcGFyZVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoaHlwb3RoZXNlc0NvbXBhcmVzVG9TdGVwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29ycmVsYXRlc1RvSHlwb3RoZXNlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb3JyZWxhdGVkIHRoZSBoeXBvdGhlc2VzIG9mIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbjtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgIGF3YWl0IGVuY2xvc2UoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGxldCBsYWJlbHNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGxhYmVscy4uLmApO1xuXG4gICAgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZlcmlmaWVzID0gdGhpcy52ZXJpZnlMYWJlbChsYWJlbCk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGxhYmVscy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5TGFiZWwobGFiZWwpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkoKTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnByb29mLnZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25WZXJpZmllcztcblxuICAgIGNvbnN0IGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dClcblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRm9yd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSB0aGlzLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoY29ycmVsYXRlc1RvSHlwb3RoZXNlcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb250ZXh0LmFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5O1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBleHRyYWN0KHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHN1cHBvc2l0aW9uLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5yZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXdhaXQgc3VwcG9zaXRpb24udW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucztcblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSByZXZlcnNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpOyAvLy9cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyA9IGFzeW5jQmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTih0aGlzLnNpZ25hdHVyZSksXG4gICAgICAgICAgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTih0aGlzLmh5cG90aGVzZXMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICAgICAgaHlwb3RoZXNlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nLCAvLy9cbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJleHRyYWN0IiwicmV2ZXJzZSIsImNvcnJlbGF0ZSIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNCYWNrd2FyZHNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0SHlwb3RoZXNlcyIsInNldEh5cG90aGVzZXMiLCJpc0h5cG90aGV0aWNhbCIsImh5cG90aGVzZXNMZW5ndGgiLCJsZW5ndGgiLCJoeXBvdGhldGljYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJ1bmNvbmRpdGlvbmFsIiwiZ2V0U3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJzb21lIiwibGFiZWwiLCJsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsImNvcnJlbGF0ZXNUb0h5cG90aGVzZXMiLCJwcm9vZkFzc2VydGlvbnMiLCJnZXRQcm9vZkFzc2VydGlvbnMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiaHlwb3RoZXNpcyIsInByb29mQXNzZXJ0aW9uIiwiaHlwb3RoZXNlc0NvbXBhcmVzVG9TdGVwIiwiY29tcGFyZVByb29mQXNzZXJ0aW9uIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiIsInN0YXRlbWVudFN0cmluZyIsImRlZHVjdGlvblN0cmluZyIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImVuY2xvc2UiLCJsYWJlbHNWZXJpZnkiLCJ2ZXJpZnlMYWJlbHMiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInZlcmlmeURlZHVjdGlvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsImV2ZXJ5IiwibGFiZWxWZXJpZmllcyIsInZlcmlmeUxhYmVsIiwibGFiZWxTdHJpbmciLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwicmVzb2x2ZVN1YnN0aXR1dGlvbnMiLCJzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcFVuaWZpZXNXaXRoU3VwcG9zaXRpb24iLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzaWduYXR1cmVKU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwibGFiZWxzRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJ0b3BMZXZlbEFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBcUJBOzs7ZUFBcUJBOzs7MkJBbkJVO2dDQUNnQjt5QkFFdkI7d0JBQ2tEO3NCQVUzQjtBQUUvQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsT0FBTyxFQUFFQyxTQUFTLEVBQUUsR0FBR0MseUJBQWMsRUFDaEQsRUFBRUMsa0JBQWtCLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdDLHFDQUFxQjtBQUUxRCxNQUFNUCwwQkFBMEJRLHVCQUFPO0lBQ3BELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxVQUFVLENBQUU7UUFDaEcsS0FBSyxDQUFDUixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENB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