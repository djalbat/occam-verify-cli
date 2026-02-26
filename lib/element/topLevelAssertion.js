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
const _occamlanguages = require("occam-languages");
const _necessary = require("necessary");
const _context = require("../utilities/context");
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
    getStatement() {
        return this.deduction.getStatement();
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
    verifyLabels() {
        let labelsVerify;
        const context = this.getContext(), topLevelAssertionString = this.getString();
        context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's labels...`);
        labelsVerify = this.labels.every((label)=>{
            const nameOnly = true, labelVerifies = label.verify(nameOnly);
            if (labelVerifies) {
                return true;
            }
        });
        if (labelsVerify) {
            context.debug(`...verified the '${topLevelAssertionString}' top level assertion's labels.`);
        }
        return labelsVerify;
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
        await (0, _context.asyncScope)(async (context)=>{
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
    async verifyProof(context) {
        let proofVerifies;
        if (this.proof === null) {
            proofVerifies = true;
        } else {
            const topLevelAssertionString = this.getString(); ///
            context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's proof...`);
            const statement = this.deduction.getStatement();
            proofVerifies = this.proof.verify(statement, context);
            if (proofVerifies) {
                context.debug(`...verified the '${topLevelAssertionString}' top level assertion's proof.`);
            }
        }
        return proofVerifies;
    }
    async verifyDeduction(context) {
        let deductionVerifies;
        const topLevelAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's deduction...`);
        deductionVerifies = await this.deduction.verify(context);
        if (deductionVerifies) {
            context.debug(`...verified the '${topLevelAssertionString}' top level assertion's deduction.`);
        }
        return deductionVerifies;
    }
    async verifySuppositions(context) {
        let suppositionsVerify;
        const topLevelAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelAssertionString}' top level assertion's suppositions...`);
        suppositionsVerify = await asyncForwardsEvery(this.suppositions, async (supposition)=>{
            const suppositionVerifies = await supposition.verify(context);
            if (suppositionVerifies) {
                const subproofOrProofAssertion = supposition; ////
                context.assignAssignments();
                context.addSubproofOrProofAssertion(subproofOrProofAssertion);
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
        const labels = (0, _json.labelsFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), signature = (0, _json.signatureFromJSON)(json, context), hypotheses = (0, _json.hypothesesFromJSON)(json, context), node = null, proof = null, string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction), topLevelAssertion = new Class(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
        return topLevelAssertion;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGFzeW5jU2NvcGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBleHRyYWN0LCByZXZlcnNlLCBjb3JyZWxhdGUgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc3luY0ZvcndhcmRzRXZlcnksIGFzeW5jQmFja3dhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgc2V0SHlwb3RoZXNlcyhoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpOyB9XG5cbiAgaXNIeXBvdGhldGljYWwoKSB7XG4gICAgY29uc3QgaHlwb3RoZXNlc0xlbmd0aCA9IHRoaXMuaHlwb3RoZXNlcy5sZW5ndGgsXG4gICAgICAgICAgaHlwb3RoZXRpY2FsID0gKGh5cG90aGVzZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBoeXBvdGhldGljYWw7XG4gIH1cblxuICBpc1VuY29uZGl0aW9uYWwoKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zTGVuZ3RoID0gdGhpcy5zdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHVuY29uZGl0aW9uYWwgPSAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiB1bmNvbmRpdGlvbmFsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb24oaW5kZXgpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMuc3VwcG9zaXRpb25zW2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBsYWJlbC5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBjb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpIHtcbiAgICBsZXQgY29ycmVsYXRlc1RvSHlwb3RoZXNlcztcblxuICAgIGNvbnN0IGh5cG90aGV0aWNhbCA9IHRoaXMuaXNIeXBvdGhldGljYWwoKTtcblxuICAgIGlmIChoeXBvdGhldGljYWwpIHtcbiAgICAgIGNvbnN0IHByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0UHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgQ29ycmVsYXRpbmcgdGhlIGh5cG90aGVzZXMgb2YgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi4uLmApO1xuXG4gICAgICBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzID0gY29ycmVsYXRlKHRoaXMuaHlwb3RoZXNlcywgcHJvb2ZBc3NlcnRpb25zLCAoaHlwb3RoZXNpcywgcHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgY29uc3QgaHlwb3RoZXNlc0NvbXBhcmVzVG9TdGVwID0gaHlwb3RoZXNpcy5jb21wYXJlUHJvb2ZBc3NlcnRpb24ocHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChoeXBvdGhlc2VzQ29tcGFyZXNUb1N0ZXApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChjb3JyZWxhdGVzVG9IeXBvdGhlc2VzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlIGh5cG90aGVzZXMgb2YgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi5gKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29ycmVsYXRlc1RvSHlwb3RoZXNlcyA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gY29ycmVsYXRlc1RvSHlwb3RoZXNlcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBsZXQgbGFiZWxzVmVyaWZ5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgbGFiZWxzLi4uYCk7XG5cbiAgICBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBsYWJlbHMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi4uLmApO1xuXG4gICAgYXdhaXQgYXN5bmNTY29wZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeURlZHVjdGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHByb29mLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHByb29mLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRm9yd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpXG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vL1xuXG4gICAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSB0aGlzLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoY29ycmVsYXRlc1RvSHlwb3RoZXNlcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb250ZXh0LmFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5O1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBleHRyYWN0KHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHN1cHBvc2l0aW9uLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5yZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXdhaXQgc3VwcG9zaXRpb24udW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucztcblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSByZXZlcnNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpOyAvLy9cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyA9IGFzeW5jQmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTih0aGlzLnNpZ25hdHVyZSksXG4gICAgICAgICAgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTih0aGlzLmh5cG90aGVzZXMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICAgICAgaHlwb3RoZXNlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRvcExldmVsQXNzZXJ0aW9uIiwiZXh0cmFjdCIsInJldmVyc2UiLCJjb3JyZWxhdGUiLCJhcnJheVV0aWxpdGllcyIsImFzeW5jRm9yd2FyZHNFdmVyeSIsImFzeW5jQmFja3dhcmRzRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsInNpZ25hdHVyZSIsImh5cG90aGVzZXMiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXREZWR1Y3Rpb24iLCJnZXRQcm9vZiIsImdldFNpZ25hdHVyZSIsImdldEh5cG90aGVzZXMiLCJzZXRIeXBvdGhlc2VzIiwiZ2V0U3RhdGVtZW50IiwiaXNIeXBvdGhldGljYWwiLCJoeXBvdGhlc2VzTGVuZ3RoIiwibGVuZ3RoIiwiaHlwb3RoZXRpY2FsIiwiaXNVbmNvbmRpdGlvbmFsIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwidW5jb25kaXRpb25hbCIsImdldFN1cHBvc2l0aW9uIiwiaW5kZXgiLCJzdXBwb3NpdGlvbiIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwic29tZSIsImxhYmVsIiwibGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvcnJlbGF0ZUh5cG90aGVzZXMiLCJjb3JyZWxhdGVzVG9IeXBvdGhlc2VzIiwicHJvb2ZBc3NlcnRpb25zIiwiZ2V0UHJvb2ZBc3NlcnRpb25zIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzaXMiLCJwcm9vZkFzc2VydGlvbiIsImh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCIsImNvbXBhcmVQcm9vZkFzc2VydGlvbiIsImRlYnVnIiwidmVyaWZ5TGFiZWxzIiwibGFiZWxzVmVyaWZ5IiwiZ2V0Q29udGV4dCIsImV2ZXJ5IiwibmFtZU9ubHkiLCJsYWJlbFZlcmlmaWVzIiwidmVyaWZ5IiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJkZWR1Y3Rpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllcyIsImFzeW5jU2NvcGUiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInZlcmlmeURlZHVjdGlvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwic3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN0ZXBVbmlmaWVzV2l0aFN1cHBvc2l0aW9uIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic2lnbmF0dXJlSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwic3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInRvcExldmVsQXNzZXJ0aW9uIl0sIm1hcHBp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