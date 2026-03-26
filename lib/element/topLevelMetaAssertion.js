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
    constructor(context, string, node, label, suppositions, deduction, proof, metaLevelAssumptions){
        super(context, string, node);
        this.label = label;
        this.suppositions = suppositions;
        this.deduction = deduction;
        this.proof = proof;
        this.metaLevelAssumptions = metaLevelAssumptions;
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
    getMetaLevelAssumptions() {
        return this.metaLevelAssumptions;
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
        await (0, _context.enclose)(async (context)=>{
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
        }, this.metaLevelAssumptions, context);
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
        const labelJSON = (0, _json.labelToLabelJSON)(this.label), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), metaLevelAssumptionsJSON = (0, _json.metaLevelAssumptionsToMetaLevelAssumptionsJSON)(this.metaLevelAssumptions), label = labelJSON, deduction = deductionJSON, suppositions = suppositionsJSON, metaLevelAssumptions = metaLevelAssumptionsJSON, json = {
            label,
            deduction,
            suppositions,
            metaLevelAssumptions
        };
        return json;
    }
    static fromJSON(Class, json, context) {
        const label = (0, _json.labelFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), metaLevelAssumptions = (0, _json.metaLevelAssumptionsFromJSON)(json, context), node = null, proof = null, string = (0, _string.topLevelMetaAssertionStringFromLabelSuppositionsDeductionAndMetaLevelAssumptions)(label, suppositions, deduction, metaLevelAssumptions), topLevelMetaAssertion = new Class(context, string, node, label, suppositions, deduction, proof, metaLevelAssumptions);
        return topLevelMetaAssertion;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBlbmNsb3NlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNEZWR1Y3Rpb25BbmRNZXRhTGV2ZWxBc3N1bXB0aW9ucyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5pbXBvcnQgeyBsYWJlbEZyb21KU09OLFxuICAgICAgICAgbGFiZWxUb0xhYmVsSlNPTixcbiAgICAgICAgIGRlZHVjdGlvbkZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04sXG4gICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uc0Zyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OLFxuICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnNUb01ldGFMZXZlbEFzc3VtcHRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGFzeW5jRm9yd2FyZHNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbE1ldGFBc3NlcnRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBtZXRhTGV2ZWxBc3N1bXB0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMubWV0YUxldmVsQXNzdW1wdGlvbnMgPSBtZXRhTGV2ZWxBc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldExhYmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldERlZHVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWR1Y3Rpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldE1ldGFMZXZlbEFzc3VtcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFMZXZlbEFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkge1xuICAgIGxldCBzdGF0ZW1lbnQgPSBudWxsO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAodW5jb25kaXRpb25hbCkge1xuICAgICAgc3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGdldFN0YXRlbWVudHMoKSB7XG4gICAgbGV0IHN0YXRlbWVudHMgPSBudWxsO1xuXG4gICAgY29uc3QgdW5jb25kaXRpb25hbCA9IHRoaXMuaXNVbmNvbmRpdGlvbmFsKCk7XG5cbiAgICBpZiAoIXVuY29uZGl0aW9uYWwpIHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50cyA9IHRoaXMuc3VwcG9zaXRpb25zLm1hcCgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnQgPSBzdXBwb3NpdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb25TdGF0ZW1lbnQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGRlZHVjdGlvblN0YXRlbWVudCA9IHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBzdGF0ZW1lbnRzID0gW1xuICAgICAgICAuLi5zdXBwb3NpdGlvblN0YXRlbWVudHMsXG4gICAgICAgIGRlZHVjdGlvblN0YXRlbWVudFxuICAgICAgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGlzVW5jb25kaXRpb25hbCgpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnNMZW5ndGggPSB0aGlzLnN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgdW5jb25kaXRpb25hbCA9IChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIHVuY29uZGl0aW9uYWw7XG4gIH1cblxuICBjb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5nZXRMYWJlbCgpLFxuICAgICAgICAgIGxhYmVsQ29tcGFyZXNUb1JlZmZlcmVuY2UgPSBsYWJlbC5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgY29tcGFyZXNUb1JlZmVyZW5jZSA9IGxhYmVsQ29tcGFyZXNUb1JlZmZlcmVuY2U7ICAvLy9cblxuICAgIHJldHVybiBjb21wYXJlc1RvUmVmZXJlbmNlO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24uLi5gKTtcblxuICAgIGF3YWl0IGVuY2xvc2UoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUxhYmVsKCk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRoaXMubWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVsKCkge1xuICAgIGxldCBsYWJlbFZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IHRoaXMubGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGxhYmVsVmVyaWZpZXMgPSB0aGlzLmxhYmVsLnZlcmlmeSgpO1xuXG4gICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyBwcm9vZi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgcHJvb2YuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25WZXJpZmllcztcblxuICAgIGNvbnN0IGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KVxuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vL1xuXG4gICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVmVyaWZ5O1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRm9yd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsVG9MYWJlbEpTT04odGhpcy5sYWJlbCksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnNKU09OID0gbWV0YUxldmVsQXNzdW1wdGlvbnNUb01ldGFMZXZlbEFzc3VtcHRpb25zSlNPTih0aGlzLm1ldGFMZXZlbEFzc3VtcHRpb25zKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVsSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSBtZXRhTGV2ZWxBc3N1bXB0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsID0gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG1ldGFMZXZlbEFzc3VtcHRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0RlZHVjdGlvbkFuZE1ldGFMZXZlbEFzc3VtcHRpb25zKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgbWV0YUxldmVsQXNzdW1wdGlvbnMpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIG1ldGFMZXZlbEFzc3VtcHRpb25zKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsYWJlbCIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwibWV0YUxldmVsQXNzdW1wdGlvbnMiLCJnZXRMYWJlbCIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0TWV0YUxldmVsQXNzdW1wdGlvbnMiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ1bmNvbmRpdGlvbmFsIiwiaXNVbmNvbmRpdGlvbmFsIiwiZ2V0U3RhdGVtZW50cyIsInN0YXRlbWVudHMiLCJzdXBwb3NpdGlvblN0YXRlbWVudHMiLCJtYXAiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uU3RhdGVtZW50IiwiZGVkdWN0aW9uU3RhdGVtZW50Iiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiY29tcGFyZVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImxhYmVsQ29tcGFyZXNUb1JlZmZlcmVuY2UiLCJjb21wYXJlc1RvUmVmZXJlbmNlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJlbmNsb3NlIiwibGFiZWxWZXJpZmllcyIsInZlcmlmeUxhYmVsIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJkZWJ1ZyIsImxhYmVsU3RyaW5nIiwiZGVkdWN0aW9uU3RyaW5nIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInRvSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zSlNPTiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zVG9NZXRhTGV2ZWxBc3N1bXB0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwibWV0YUxldmVsQXNzdW1wdGlvbnNGcm9tSlNPTiIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0RlZHVjdGlvbkFuZE1ldGFMZXZlbEFzc3VtcHRpb25zIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFxQkE7OztnQ0FmMEI7eUJBRXZCO3dCQUN5RTtzQkFRbEM7QUFFL0QsTUFBTSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHQyxxQ0FBcUI7QUFFckMsTUFBTUYsOEJBQThCRyx1QkFBTztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLG9CQUFvQixDQUFFO1FBQzlGLEtBQUssQ0FBQ1AsU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLG9CQUFvQixHQUFHQTtJQUM5QjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNMLEtBQUs7SUFDbkI7SUFFQU0sa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDTCxZQUFZO0lBQzFCO0lBRUFNLGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQ0wsU0FBUztJQUN2QjtJQUVBTSxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNMLEtBQUs7SUFDbkI7SUFFQU0sMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDTCxvQkFBb0I7SUFDbEM7SUFFQU0sZUFBZTtRQUNiLElBQUlDLFlBQVk7UUFFaEIsTUFBTUMsZ0JBQWdCLElBQUksQ0FBQ0MsZUFBZTtRQUUxQyxJQUFJRCxlQUFlO1lBQ2pCRCxZQUFZLElBQUksQ0FBQ1QsU0FBUyxDQUFDUSxZQUFZO1FBQ3pDO1FBRUEsT0FBT0M7SUFDVDtJQUVBRyxnQkFBZ0I7UUFDZCxJQUFJQyxhQUFhO1FBRWpCLE1BQU1ILGdCQUFnQixJQUFJLENBQUNDLGVBQWU7UUFFMUMsSUFBSSxDQUFDRCxlQUFlO1lBQ2xCLE1BQU1JLHdCQUF3QixJQUFJLENBQUNmLFlBQVksQ0FBQ2dCLEdBQUcsQ0FBQyxDQUFDQztnQkFDN0MsTUFBTUMsdUJBQXVCRCxZQUFZUixZQUFZO2dCQUVyRCxPQUFPUztZQUNULElBQ0FDLHFCQUFxQixJQUFJLENBQUNsQixTQUFTLENBQUNRLFlBQVk7WUFFdERLLGFBQWE7bUJBQ1JDO2dCQUNISTthQUNEO1FBQ0g7UUFFQSxPQUFPTDtJQUNUO0lBRUFGLGtCQUFrQjtRQUNoQixNQUFNUSxxQkFBcUIsSUFBSSxDQUFDcEIsWUFBWSxDQUFDcUIsTUFBTSxFQUM3Q1YsZ0JBQWlCUyx1QkFBdUI7UUFFOUMsT0FBT1Q7SUFDVDtJQUVBVyxpQkFBaUJDLFNBQVMsRUFBRTtRQUMxQixNQUFNeEIsUUFBUSxJQUFJLENBQUNLLFFBQVEsSUFDckJvQiw0QkFBNEJ6QixNQUFNdUIsZ0JBQWdCLENBQUNDLFlBQ25ERSxzQkFBc0JELDJCQUE0QixHQUFHO1FBRTNELE9BQU9DO0lBQ1Q7SUFFQSxNQUFNQyxTQUFTO1FBQ2IsSUFBSUMsV0FBVztRQUVmLE1BQU0vQixVQUFVLElBQUksQ0FBQ2dDLFVBQVUsSUFDekJDLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXpEbEMsUUFBUW1DLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDZCQUE2QixDQUFDO1FBRTFGLE1BQU1HLElBQUFBLGdCQUFPLEVBQUMsT0FBT3BDO1lBQ25CLE1BQU1xQyxnQkFBZ0IsSUFBSSxDQUFDQyxXQUFXO1lBRXRDLElBQUlELGVBQWU7Z0JBQ2pCLE1BQU1FLHFCQUFxQixNQUFNLElBQUksQ0FBQ0Msa0JBQWtCLENBQUN4QztnQkFFekQsSUFBSXVDLG9CQUFvQjtvQkFDdEIsTUFBTUUsb0JBQW9CLE1BQU0sSUFBSSxDQUFDQyxlQUFlLENBQUMxQztvQkFFckQsSUFBSXlDLG1CQUFtQjt3QkFDckIsTUFBTUUsZ0JBQWdCLE1BQU0sSUFBSSxDQUFDQyxXQUFXLENBQUM1Qzt3QkFFN0MsSUFBSTJDLGVBQWU7NEJBQ2pCWixXQUFXO3dCQUNiO29CQUNGO2dCQUNGO1lBQ0Y7UUFDRixHQUFHLElBQUksQ0FBQ3hCLG9CQUFvQixFQUFFUDtRQUU5QixJQUFJK0IsVUFBVTtZQUNaL0IsUUFBUTZDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFWiw0QkFBNEIsMkJBQTJCLENBQUM7UUFDNUY7UUFFQSxPQUFPRjtJQUNUO0lBRUFPLGNBQWM7UUFDWixJQUFJRDtRQUVKLE1BQU1yQyxVQUFVLElBQUksQ0FBQ2dDLFVBQVUsSUFDekJDLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFDNUNZLGNBQWMsSUFBSSxDQUFDM0MsS0FBSyxDQUFDK0IsU0FBUztRQUV4Q2xDLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDRCQUE0Qiw4QkFBOEIsRUFBRWEsWUFBWSxVQUFVLENBQUM7UUFFbkhULGdCQUFnQixJQUFJLENBQUNsQyxLQUFLLENBQUMyQixNQUFNO1FBRWpDLElBQUlPLGVBQWU7WUFDakJyQyxRQUFRNkMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVaLDRCQUE0Qiw4QkFBOEIsRUFBRWEsWUFBWSxRQUFRLENBQUM7UUFDckg7UUFFQSxPQUFPVDtJQUNUO0lBRUEsTUFBTU8sWUFBWTVDLE9BQU8sRUFBRTtRQUN6QixJQUFJMkM7UUFFSixNQUFNViw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxRGxDLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDRCQUE0QixxQ0FBcUMsQ0FBQztRQUVsRyxNQUFNbkIsWUFBWSxJQUFJLENBQUNULFNBQVMsQ0FBQ1EsWUFBWTtRQUU3QzhCLGdCQUFnQixNQUFNLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ3dCLE1BQU0sQ0FBQ2hCLFdBQVdkO1FBRW5ELElBQUkyQyxlQUFlO1lBQ2pCM0MsUUFBUTZDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFWiw0QkFBNEIsbUNBQW1DLENBQUM7UUFDcEc7UUFFQSxPQUFPVTtJQUNUO0lBRUEsTUFBTUQsZ0JBQWdCMUMsT0FBTyxFQUFFO1FBQzdCLElBQUl5QztRQUVKLE1BQU1NLGtCQUFrQixJQUFJLENBQUMxQyxTQUFTLENBQUM2QixTQUFTLElBQzFDRCw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV6RGxDLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDRCQUE0Qiw4QkFBOEIsRUFBRWMsZ0JBQWdCLGNBQWMsQ0FBQztRQUUzSE4sb0JBQW9CLE1BQU0sSUFBSSxDQUFDcEMsU0FBUyxDQUFDeUIsTUFBTSxDQUFDOUI7UUFFaEQsSUFBSXlDLG1CQUFtQjtZQUNyQnpDLFFBQVE2QyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVosNEJBQTRCLDhCQUE4QixFQUFFYyxnQkFBZ0IsWUFBWSxDQUFDO1FBQzdIO1FBRUEsT0FBT047SUFDVDtJQUVBLE1BQU1PLGtCQUFrQjNCLFdBQVcsRUFBRXJCLE9BQU8sRUFBRTtRQUM1QyxJQUFJaUQ7UUFFSixNQUFNQyxvQkFBb0I3QixZQUFZYSxTQUFTLElBQ3pDRCw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxRGxDLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDRCQUE0Qiw4QkFBOEIsRUFBRWlCLGtCQUFrQixnQkFBZ0IsQ0FBQztRQUUvSEQsc0JBQXNCLE1BQU01QixZQUFZUyxNQUFNLENBQUM5QjtRQUUvQyxJQUFJaUQscUJBQXFCO1lBQ3ZCLE1BQU1FLDJCQUEyQjlCLGFBQWMsSUFBSTtZQUVuRHJCLFFBQVFvRCxpQkFBaUI7WUFFekJwRCxRQUFRcUQsMkJBQTJCLENBQUNGO1FBQ3RDO1FBRUEsSUFBSUYscUJBQXFCO1lBQ3ZCakQsUUFBUTZDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFWiw0QkFBNEIsOEJBQThCLEVBQUVpQixrQkFBa0IsY0FBYyxDQUFDO1FBQ2pJO1FBRUEsT0FBT0Q7SUFDVDtJQUVBLE1BQU1ULG1CQUFtQnhDLE9BQU8sRUFBRTtRQUNoQyxJQUFJdUM7UUFFSixNQUFNTiw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztRQUUxRGxDLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDRCQUE0Qiw0Q0FBNEMsQ0FBQztRQUV6R00scUJBQXFCLE1BQU0xQyxtQkFBbUIsSUFBSSxDQUFDTyxZQUFZLEVBQUUsT0FBT2lCO1lBQ3RFLE1BQU00QixzQkFBc0IsTUFBTSxJQUFJLENBQUNELGlCQUFpQixDQUFDM0IsYUFBYXJCO1lBRXRFLElBQUlpRCxxQkFBcUI7Z0JBQ3ZCLE9BQU87WUFDVDtRQUNGO1FBRUEsSUFBSVYsb0JBQW9CO1lBQ3RCdkMsUUFBUTZDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFWiw0QkFBNEIsMENBQTBDLENBQUM7UUFDM0c7UUFFQSxPQUFPTTtJQUNUO0lBRUFlLFNBQVM7UUFDUCxNQUFNQyxZQUFZQyxJQUFBQSxzQkFBZ0IsRUFBQyxJQUFJLENBQUNyRCxLQUFLLEdBQ3ZDc0QsZ0JBQWdCQyxJQUFBQSw4QkFBd0IsRUFBQyxJQUFJLENBQUNyRCxTQUFTLEdBQ3ZEc0QsbUJBQW1CQyxJQUFBQSxvQ0FBOEIsRUFBQyxJQUFJLENBQUN4RCxZQUFZLEdBQ25FeUQsMkJBQTJCQyxJQUFBQSxvREFBOEMsRUFBQyxJQUFJLENBQUN2RCxvQkFBb0IsR0FDbkdKLFFBQVFvRCxXQUNSbEQsWUFBWW9ELGVBQ1pyRCxlQUFldUQsa0JBQ2ZwRCx1QkFBdUJzRCwwQkFDdkJFLE9BQU87WUFDTDVEO1lBQ0FFO1lBQ0FEO1lBQ0FHO1FBQ0Y7UUFFTixPQUFPd0Q7SUFDVDtJQUVBLE9BQU9DLFNBQVNDLEtBQUssRUFBRUYsSUFBSSxFQUFFL0QsT0FBTyxFQUFFO1FBQ3BDLE1BQU1HLFFBQVErRCxJQUFBQSxtQkFBYSxFQUFDSCxNQUFNL0QsVUFDNUJLLFlBQVk4RCxJQUFBQSx1QkFBaUIsRUFBQ0osTUFBTS9ELFVBQ3BDSSxlQUFlZ0UsSUFBQUEsMEJBQW9CLEVBQUNMLE1BQU0vRCxVQUMxQ08sdUJBQXVCOEQsSUFBQUEsa0NBQTRCLEVBQUNOLE1BQU0vRCxVQUMxREUsT0FBTyxNQUNQSSxRQUFRLE1BQ1JMLFNBQVNxRSxJQUFBQSx3RkFBZ0YsRUFBQ25FLE9BQU9DLGNBQWNDLFdBQVdFLHVCQUMxSGdFLHdCQUF3QixJQUFJTixNQUFNakUsU0FBU0MsUUFBUUMsTUFBTUMsT0FBT0MsY0FBY0MsV0FBV0MsT0FBT0M7UUFFdEcsT0FBT2dFO0lBQ1Q7QUFDRiJ9