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
    constructor(context, string, node, lineIndex, label, suppositions, deduction, proof, metaLevelAssumptions){
        super(context, string, node, lineIndex);
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
    async verify(context) {
        let verifies = false;
        const topLevelMetaAssertionString = this.getString(); ///
        context.trace(`Verifying the '${topLevelMetaAssertionString}' top level meta assertion...`);
        await (0, _context.enclose)(async (context)=>{
            const labelVerifies = this.verifyLabel(context);
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
    verifyLabel(context) {
        let labelVerifies;
        const topLevelMetaAssertionString = this.getString(), labelString = this.label.getString();
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
        const labelJSON = (0, _json.labelToLabelJSON)(this.label), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), metaLevelAssumptionsJSON = (0, _json.metaLevelAssumptionsToMetaLevelAssumptionsJSON)(this.metaLevelAssumptions), string = this.getString(), lineIndex = this.getBreakPoint(), label = labelJSON, deduction = deductionJSON, suppositions = suppositionsJSON, metaLevelAssumptions = metaLevelAssumptionsJSON, json = {
            string,
            lineIndex,
            label,
            deduction,
            suppositions,
            metaLevelAssumptions
        };
        return json;
    }
    static fromJSON(Class, json, context) {
        const { lineIndex } = json, label = (0, _json.labelFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), metaLevelAssumptions = (0, _json.metaLevelAssumptionsFromJSON)(json, context), node = null, proof = null, string = (0, _string.topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), topLevelMetaAssertion = new Class(context, string, node, lineIndex, label, suppositions, deduction, proof, metaLevelAssumptions);
        return topLevelMetaAssertion;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBlbmNsb3NlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbGFiZWxGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsVG9MYWJlbEpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Gcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zVG9NZXRhTGV2ZWxBc3N1bXB0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBhc3luY0ZvcndhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBtZXRhTGV2ZWxBc3N1bXB0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4KTtcblxuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmRlZHVjdGlvbiA9IGRlZHVjdGlvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5tZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG1ldGFMZXZlbEFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZHVjdGlvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0TWV0YUxldmVsQXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUxldmVsQXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICh1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBsZXQgc3RhdGVtZW50cyA9IG51bGw7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICghdW5jb25kaXRpb25hbCkge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZGVkdWN0aW9uU3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHN0YXRlbWVudHMgPSBbXG4gICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgZGVkdWN0aW9uU3RhdGVtZW50XG4gICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIGNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldExhYmVsKCksXG4gICAgICAgICAgbGFiZWxDb21wYXJlc1RvUmVmZmVyZW5jZSA9IGxhYmVsLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb21wYXJlc1RvUmVmZXJlbmNlID0gbGFiZWxDb21wYXJlc1RvUmVmZmVyZW5jZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9SZWZlcmVuY2U7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbi4uLmApO1xuXG4gICAgYXdhaXQgZW5jbG9zZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWZXJpZmllcyA9IHRoaXMudmVyaWZ5TGFiZWwoY29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRoaXMubWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVsKGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IHRoaXMubGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGxhYmVsVmVyaWZpZXMgPSB0aGlzLmxhYmVsLnZlcmlmeSgpO1xuXG4gICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyBwcm9vZi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgcHJvb2YuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25WZXJpZmllcztcblxuICAgIGNvbnN0IGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KVxuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vL1xuXG4gICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVmVyaWZ5O1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRm9yd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsVG9MYWJlbEpTT04odGhpcy5sYWJlbCksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnNKU09OID0gbWV0YUxldmVsQXNzdW1wdGlvbnNUb01ldGFMZXZlbEFzc3VtcHRpb25zSlNPTih0aGlzLm1ldGFMZXZlbEFzc3VtcHRpb25zKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0QnJlYWtQb2ludCgpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxKU09OLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG1ldGFMZXZlbEFzc3VtcHRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsaW5lSW5kZXgsXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBsaW5lSW5kZXggfSA9IGpzb24sXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zID0gbWV0YUxldmVsQXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGluZUluZGV4LCBsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBtZXRhTGV2ZWxBc3N1bXB0aW9ucyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGluZUluZGV4IiwibGFiZWwiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwiZ2V0TGFiZWwiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXREZWR1Y3Rpb24iLCJnZXRQcm9vZiIsImdldE1ldGFMZXZlbEFzc3VtcHRpb25zIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwidW5jb25kaXRpb25hbCIsImlzVW5jb25kaXRpb25hbCIsImdldFN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzIiwibWFwIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsImRlZHVjdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJsYWJlbENvbXBhcmVzVG9SZWZmZXJlbmNlIiwiY29tcGFyZXNUb1JlZmVyZW5jZSIsInZlcmlmeSIsInZlcmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJlbmNsb3NlIiwibGFiZWxWZXJpZmllcyIsInZlcmlmeUxhYmVsIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJkZWJ1ZyIsImxhYmVsU3RyaW5nIiwiZGVkdWN0aW9uU3RyaW5nIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInRvSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zSlNPTiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zVG9NZXRhTGV2ZWxBc3N1bXB0aW9uc0pTT04iLCJnZXRCcmVha1BvaW50IiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbEZyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zRnJvbUpTT04iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWlCQTs7O2VBQXFCQTs7O2dDQWYwQjt5QkFFdkI7d0JBQ3FEO3NCQVFkO0FBRS9ELE1BQU0sRUFBRUMsa0JBQWtCLEVBQUUsR0FBR0MscUNBQXFCO0FBRXJDLE1BQU1GLDhCQUE4QkcsdUJBQU87SUFDeEQsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLG9CQUFvQixDQUFFO1FBQ3pHLEtBQUssQ0FBQ1IsU0FBU0Ms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