"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelMetaAssertion;
    }
});
const _occamlanguages = require("occam-languages");
const _context = require("../utilities/context");
const _json = require("../utilities/json");
const { asyncForwardsEvery } = _occamlanguages.asynchronousUtilities;
class TopLevelMetaAssertion extends _occamlanguages.Element {
    constructor(context, string, node, label, suppositions, deduction, proof, substitutions){
        super(context, string, node);
        this.label = label;
        this.suppositions = suppositions;
        this.deduction = deduction;
        this.proof = proof;
        this.substitutions = substitutions;
    }
    getLabel() {
        return this.label;
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
    getSubstitutions() {
        return this.substitutions;
    }
    getStatement() {
        return this.deduction.getStatement();
    }
    compareReference(reference) {
        const label = this.getLabel(), labelComparesToRefference = label.compareReference(reference), comparesToReference = labelComparesToRefference; ///
        return comparesToReference;
    }
    async verify() {
        let verifies = false;
        const context = this.getContext(), topLevelMetaAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta assertion...`);
        await (0, _context.asyncScope)(async (context)=>{
            const labelVerifies = this.verifyLabel();
            if (labelVerifies) {
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
            context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta assertion.`);
        }
        return verifies;
    }
    verifyLabel() {
        let labelVerifies;
        const context = this.getContext(), topLevelMetaAssertionString = this.getString(), labelString = this.label.getString();
        context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta-assertion's '${labelString}' label...`);
        labelVerifies = this.label.verify();
        if (labelVerifies) {
            context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta-assertion's '${labelString}' label.`);
        }
        return labelVerifies;
    }
    async verifyProof(context) {
        let proofVerifies;
        if (this.proof === null) {
            proofVerifies = true;
        } else {
            const topLevelMetaAssertionString = this.getString(); ///
            context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta-assertion's proof...`);
            const statement = this.deduction.getStatement();
            proofVerifies = this.proof.verify(statement, context);
            if (proofVerifies) {
                context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta-assertion's proof.`);
            }
        }
        return proofVerifies;
    }
    async verifyDeduction(context) {
        let deductionVerifies;
        const topLevelMetaAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta assertion's deduction...`);
        deductionVerifies = await this.deduction.verify(context);
        if (deductionVerifies) {
            context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta assertion's deduction.`);
        }
        return deductionVerifies;
    }
    async verifySupposition(supposition, context) {
        let suppositionVerifies;
        const suppositionString = supposition.getString(), topLevelMetaAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta-assertion's '${suppositionString}' supposition...`);
        suppositionVerifies = await supposition.verify(context);
        if (suppositionVerifies) {
            const subproofOrProofAssertion = supposition; ////
            context.assignAssignments();
            context.addSubproofOrProofAssertion(subproofOrProofAssertion);
        }
        if (suppositionVerifies) {
            context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta-assertion's '${suppositionString}' supposition.`);
        }
        return suppositionVerifies;
    }
    async verifySuppositions(context) {
        let suppositionsVerify;
        const topLevelMetaAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta-assertion's suppositions...`);
        suppositionsVerify = await asyncForwardsEvery(this.suppositions, async (supposition)=>{
            const suppositionVerifies = await this.verifySupposition(supposition, context);
            if (suppositionVerifies) {
                return true;
            }
        });
        if (suppositionsVerify) {
            context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta-assertion's suppositions.`);
        }
        return suppositionsVerify;
    }
    toJSON() {
        const labelJSON = (0, _json.labelToLabelJSON)(this.label), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(this.substitutions), label = labelJSON, deduction = deductionJSON, suppositions = suppositionsJSON, substitutions = substitutionsJSON, json = {
            label,
            deduction,
            suppositions,
            substitutions
        };
        return json;
    }
    static fromJSON(Class, json, context) {
        const label = (0, _json.labelFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), substitutions = (0, _json.substitutionsFromJSON)(json, context), node = null, proof = null, string = topLevelMetaAssertionStringFromLabelASuppositionsAndDeduction(label, suppositions, deduction), topLevelMetaAssertion = new Class(context, string, node, label, suppositions, deduction, proof, substitutions);
        return topLevelMetaAssertion;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBhc3luY1Njb3BlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBsYWJlbEZyb21KU09OLFxuICAgICAgICAgbGFiZWxUb0xhYmVsSlNPTixcbiAgICAgICAgIGRlZHVjdGlvbkZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGFzeW5jRm9yd2FyZHNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbE1ldGFBc3NlcnRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmRlZHVjdGlvbiA9IGRlZHVjdGlvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldERlZHVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWR1Y3Rpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpOyB9XG5cbiAgY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKSxcbiAgICAgICAgICBsYWJlbENvbXBhcmVzVG9SZWZmZXJlbmNlID0gbGFiZWwuY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbXBhcmVzVG9SZWZlcmVuY2UgPSBsYWJlbENvbXBhcmVzVG9SZWZmZXJlbmNlOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1JlZmVyZW5jZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBhd2FpdCBhc3luY1Njb3BlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZlcmlmaWVzID0gdGhpcy52ZXJpZnlMYWJlbCgpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeURlZHVjdGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbCgpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSB0aGlzLmxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBsYWJlbFZlcmlmaWVzID0gdGhpcy5sYWJlbC52ZXJpZnkoKTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzIHByb29mLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzIHByb29mLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uJ3MgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuZGVkdWN0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbidzIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dClcblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3Mgc3VwcG9zaXRpb25zLi4uYCk7XG5cbiAgICBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbFRvTGFiZWxKU09OKHRoaXMubGFiZWwpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVsSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxBU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGFiZWwiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsInN1YnN0aXR1dGlvbnMiLCJnZXRMYWJlbCIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFN0YXRlbWVudCIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJsYWJlbENvbXBhcmVzVG9SZWZmZXJlbmNlIiwiY29tcGFyZXNUb1JlZmVyZW5jZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXN5bmNTY29wZSIsImxhYmVsVmVyaWZpZXMiLCJ2ZXJpZnlMYWJlbCIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImRlZHVjdGlvblZlcmlmaWVzIiwidmVyaWZ5RGVkdWN0aW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwiZGVidWciLCJsYWJlbFN0cmluZyIsInN0YXRlbWVudCIsInZlcmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInRvSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsQVN1cHBvc2l0aW9uc0FuZERlZHVjdGlv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