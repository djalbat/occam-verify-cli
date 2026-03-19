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
const _string = require("../utilities/string");
const _json = require("../utilities/json");
const { asyncForwardsEvery } = _occamlanguages.asynchronousUtilities;
class TopLevelMetaAssertion extends _occamlanguages.Element {
    constructor(context, string, node, label, suppositions, deduction, proof, metaLevelSubstitutions){
        super(context, string, node);
        this.label = label;
        this.suppositions = suppositions;
        this.deduction = deduction;
        this.proof = proof;
        this.metaLevelSubstitutions = metaLevelSubstitutions;
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
        return this.metaLevelSubstitutions;
    }
    getStatement() {
        let statement = null;
        const unconditional = this.isUnconditional();
        if (unconditional) {
            statement = this.deduction.getStatement();
        }
        return statement;
    }
    getStatements() {
        let statements = null;
        const unconditional = this.isUnconditional();
        if (!unconditional) {
            const suppositionStatements = this.suppositions.map((supposition)=>{
                const suppositionStatement = supposition.getStatement();
                return suppositionStatement;
            }), deductionStatement = this.deduction.getStatement();
            statements = [
                ...suppositionStatements,
                deductionStatement
            ];
        }
        return statements;
    }
    isUnconditional() {
        const suppositionsLength = this.suppositions.length, unconditional = suppositionsLength === 0;
        return unconditional;
    }
    compareReference(reference) {
        const label = this.getLabel(), labelComparesToRefference = label.compareReference(reference), comparesToReference = labelComparesToRefference; ///
        return comparesToReference;
    }
    async verify() {
        let verifies = false;
        const context = this.getContext(), topLevelMetaAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta assertion...`);
        await (0, _context.asyncRestrict)(async (context)=>{
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
        }, this.metaLevelSubstitutions, context);
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
        const topLevelMetaAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta-assertion's proof...`);
        const statement = this.deduction.getStatement();
        proofVerifies = await this.proof.verify(statement, context);
        if (proofVerifies) {
            context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta-assertion's proof.`);
        }
        return proofVerifies;
    }
    async verifyDeduction(context) {
        let deductionVerifies;
        const deductionString = this.deduction.getString(), topLevelMetaAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta assertion's '${deductionString}' deduction...`);
        deductionVerifies = await this.deduction.verify(context);
        if (deductionVerifies) {
            context.debug(`...verified the '${topLevelMetaAssertionString}' top level meta assertion's '${deductionString}' deduction.`);
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
        const labelJSON = (0, _json.labelToLabelJSON)(this.label), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), metaLevelSubstitutionsJSON = (0, _json.metaLevelSubstitutionsToMetaLevelSubstitutionsJSON)(this.metaLevelSubstitutions), label = labelJSON, deduction = deductionJSON, suppositions = suppositionsJSON, metaLevelSubstitutions = metaLevelSubstitutionsJSON, json = {
            label,
            deduction,
            suppositions,
            metaLevelSubstitutions
        };
        return json;
    }
    static fromJSON(Class, json, context) {
        const label = (0, _json.labelFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), metaLevelSubstitutions = (0, _json.metaLevelSubstitutionsFromJSON)(json, context), node = null, proof = null, string = (0, _string.topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), topLevelMetaAssertion = new Class(context, string, node, label, suppositions, deduction, proof, metaLevelSubstitutions);
        return topLevelMetaAssertion;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBhc3luY1Jlc3RyaWN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbGFiZWxGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsVG9MYWJlbEpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Gcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OLFxuICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uc0Zyb21KU09OLFxuICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBhc3luY0ZvcndhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgbWV0YUxldmVsU3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMubWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFMZXZlbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICh1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBsZXQgc3RhdGVtZW50cyA9IG51bGw7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICghdW5jb25kaXRpb25hbCkge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZGVkdWN0aW9uU3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHN0YXRlbWVudHMgPSBbXG4gICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgZGVkdWN0aW9uU3RhdGVtZW50XG4gICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIGNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldExhYmVsKCksXG4gICAgICAgICAgbGFiZWxDb21wYXJlc1RvUmVmZmVyZW5jZSA9IGxhYmVsLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb21wYXJlc1RvUmVmZXJlbmNlID0gbGFiZWxDb21wYXJlc1RvUmVmZmVyZW5jZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9SZWZlcmVuY2U7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbi4uLmApO1xuXG4gICAgYXdhaXQgYXN5bmNSZXN0cmljdChhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWZXJpZmllcyA9IHRoaXMudmVyaWZ5TGFiZWwoKTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgdGhpcy5tZXRhTGV2ZWxTdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbCgpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSB0aGlzLmxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBsYWJlbFZlcmlmaWVzID0gdGhpcy5sYWJlbC52ZXJpZnkoKTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgcHJvb2YuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMucHJvb2YudmVyaWZ5KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzIHByb29mLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuZGVkdWN0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dClcblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3Mgc3VwcG9zaXRpb25zLi4uYCk7XG5cbiAgICBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbFRvTGFiZWxKU09OKHRoaXMubGFiZWwpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNKU09OID0gbWV0YUxldmVsU3Vic3RpdHV0aW9uc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9uc0pTT04odGhpcy5tZXRhTGV2ZWxTdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVsSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zID0gbWV0YUxldmVsU3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBuZXcgQ2xhc3MoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsYWJlbCIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwibWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsImdldExhYmVsIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0RGVkdWN0aW9uIiwiZ2V0UHJvb2YiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwidW5jb25kaXRpb25hbCIsImlzVW5jb25kaXRpb25hbCIsImdldFN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzIiwibWFwIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsImRlZHVjdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJsYWJlbENvbXBhcmVzVG9SZWZmZXJlbmNlIiwiY29tcGFyZXNUb1JlZmVyZW5jZSIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYXN5bmNSZXN0cmljdCIsImxhYmVsVmVyaWZpZXMiLCJ2ZXJpZnlMYWJlbCIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImRlZHVjdGlvblZlcmlmaWVzIiwidmVyaWZ5RGVkdWN0aW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwiZGVidWciLCJsYWJlbFN0cmluZyIsImRlZHVjdGlvblN0cmluZyIsInZlcmlmeVN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllcyIsInN1cHBvc2l0aW9uU3RyaW5nIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJ0b0pTT04iLCJsYWJlbEpTT04iLCJsYWJlbFRvTGFiZWxKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25zSlNPTiIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbEZyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBcUJBOzs7Z0NBZjBCO3lCQUVqQjt3QkFDK0M7c0JBUVY7QUFFbkUsTUFBTSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHQyxxQ0FBcUI7QUFFckMsTUFBTUYsOEJBQThCRyx1QkFBTztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLHNCQUFzQixDQUFFO1FBQ2hHLEtBQUssQ0FBQ1AsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLEtBQUss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