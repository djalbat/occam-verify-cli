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
const _breakPoint = require("../utilities/breakPoint");
const _string = require("../utilities/string");
const _json = require("../utilities/json");
const { asyncForwardsEvery } = _occamlanguages.asynchronousUtilities;
class TopLevelMetaAssertion extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, label, suppositions, deduction, proof, metaLevelAssumptions){
        super(context, string, node, breakPoint);
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
        const labelJSON = (0, _json.labelToLabelJSON)(this.label), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), metaLevelAssumptionsJSON = (0, _json.metaLevelAssumptionsToMetaLevelAssumptionsJSON)(this.metaLevelAssumptions), string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const label = labelJSON, deduction = deductionJSON, suppositions = suppositionsJSON, metaLevelAssumptions = metaLevelAssumptionsJSON, json = {
            string,
            breakPoint,
            label,
            deduction,
            suppositions,
            metaLevelAssumptions
        };
        return json;
    }
    static fromJSON(Class, json, context) {
        const { breakPoint } = json, label = (0, _json.labelFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), metaLevelAssumptions = (0, _json.metaLevelAssumptionsFromJSON)(json, context), node = null, proof = null, string = (0, _string.topLevelMetaAssertionStringFromLabelSuppositionsAndDeduction)(label, suppositions, deduction), topLevelMetaAssertion = new Class(context, string, node, breakPoint, label, suppositions, deduction, proof, metaLevelAssumptions);
        return topLevelMetaAssertion;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBlbmNsb3NlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvYnJlYWtQb2ludFwiO1xuaW1wb3J0IHsgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IGxhYmVsRnJvbUpTT04sXG4gICAgICAgICBsYWJlbFRvTGFiZWxKU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTixcbiAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04sXG4gICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uc1RvTWV0YUxldmVsQXNzdW1wdGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgYXN5bmNGb3J3YXJkc0V2ZXJ5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsTWV0YUFzc2VydGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIG1ldGFMZXZlbEFzc3VtcHRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50KTtcblxuICAgIHRoaXMubGFiZWwgPSBsYWJlbDtcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmRlZHVjdGlvbiA9IGRlZHVjdGlvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5tZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG1ldGFMZXZlbEFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TGFiZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWw7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZHVjdGlvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0TWV0YUxldmVsQXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YUxldmVsQXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICh1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBsZXQgc3RhdGVtZW50cyA9IG51bGw7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICghdW5jb25kaXRpb25hbCkge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZGVkdWN0aW9uU3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHN0YXRlbWVudHMgPSBbXG4gICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgZGVkdWN0aW9uU3RhdGVtZW50XG4gICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIGNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldExhYmVsKCksXG4gICAgICAgICAgbGFiZWxDb21wYXJlc1RvUmVmZmVyZW5jZSA9IGxhYmVsLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb21wYXJlc1RvUmVmZXJlbmNlID0gbGFiZWxDb21wYXJlc1RvUmVmZmVyZW5jZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9SZWZlcmVuY2U7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbi4uLmApO1xuXG4gICAgYXdhaXQgZW5jbG9zZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWZXJpZmllcyA9IHRoaXMudmVyaWZ5TGFiZWwoY29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRoaXMubWV0YUxldmVsQXNzdW1wdGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVsKGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IHRoaXMubGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGxhYmVsVmVyaWZpZXMgPSB0aGlzLmxhYmVsLnZlcmlmeSgpO1xuXG4gICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyBwcm9vZi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgcHJvb2YuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25WZXJpZmllcztcblxuICAgIGNvbnN0IGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uLi5gKTtcblxuICAgIGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi4uLmApO1xuXG4gICAgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KVxuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHN1cHBvc2l0aW9uOyAgLy8vL1xuXG4gICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVmVyaWZ5O1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRm9yd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsVG9MYWJlbEpTT04odGhpcy5sYWJlbCksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnNKU09OID0gbWV0YUxldmVsQXNzdW1wdGlvbnNUb01ldGFMZXZlbEFzc3VtcHRpb25zSlNPTih0aGlzLm1ldGFMZXZlbEFzc3VtcHRpb25zKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgbGV0IGJyZWFrUG9pbnQ7XG5cbiAgICBicmVha1BvaW50ID0gdGhpcy5nZXRCcmVha1BvaW50KCk7XG5cbiAgICBjb25zdCBicmVha1BvaW50SlNPTiA9IGJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OKGJyZWFrUG9pbnQpO1xuXG4gICAgYnJlYWtQb2ludCA9IGJyZWFrUG9pbnRKU09OOyAgLy8vXG5cbiAgICBjb25zdCBsYWJlbCA9IGxhYmVsSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnMgPSBtZXRhTGV2ZWxBc3N1bXB0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgYnJlYWtQb2ludCxcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IGJyZWFrUG9pbnQgfSA9IGpzb24sXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbEZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zID0gbWV0YUxldmVsQXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgbWV0YUxldmVsQXNzdW1wdGlvbnMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlRvcExldmVsTWV0YUFzc2VydGlvbiIsImFzeW5jRm9yd2FyZHNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJsYWJlbCIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwibWV0YUxldmVsQXNzdW1wdGlvbnMiLCJnZXRMYWJlbCIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0TWV0YUxldmVsQXNzdW1wdGlvbnMiLCJnZXRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJ1bmNvbmRpdGlvbmFsIiwiaXNVbmNvbmRpdGlvbmFsIiwiZ2V0U3RhdGVtZW50cyIsInN0YXRlbWVudHMiLCJzdXBwb3NpdGlvblN0YXRlbWVudHMiLCJtYXAiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uU3RhdGVtZW50IiwiZGVkdWN0aW9uU3RhdGVtZW50Iiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiY29tcGFyZVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImxhYmVsQ29tcGFyZXNUb1JlZmZlcmVuY2UiLCJjb21wYXJlc1RvUmVmZXJlbmNlIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImVuY2xvc2UiLCJsYWJlbFZlcmlmaWVzIiwidmVyaWZ5TGFiZWwiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInZlcmlmeURlZHVjdGlvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsImRlYnVnIiwibGFiZWxTdHJpbmciLCJkZWR1Y3Rpb25TdHJpbmciLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidG9KU09OIiwibGFiZWxKU09OIiwibGFiZWxUb0xhYmVsSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwibWV0YUxldmVsQXNzdW1wdGlvbnNKU09OIiwibWV0YUxldmVsQXNzdW1wdGlvbnNUb01ldGFMZXZlbEFzc3VtcHRpb25zSlNPTiIsImdldEJyZWFrUG9pbnQiLCJicmVha1BvaW50SlNPTiIsImJyZWFrUG9pbnRUb0JyZWFrUG9pbnRKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbEZyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zRnJvbUpTT04iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQXFCQTs7O2dDQWhCMEI7eUJBRXZCOzRCQUNtQjt3QkFDa0M7c0JBUWQ7QUFFL0QsTUFBTSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHQyxxQ0FBcUI7QUFFckMsTUFBTUYsOEJBQThCRyx1QkFBTztJQUN4RCxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxVQUFVLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsb0JBQW9CLENBQUU7UUFDMUcsS0FBSyxDQUFDUixTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0Msb0JBQW9CLEdBQUdBO0lBQzlCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0wsS0FBSztJQUNuQjtJQUVBTSxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNMLFlBQVk7SUFDMUI7SUFFQU0sZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDTCxTQUFTO0lBQ3ZCO0lBRUFNLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0wsS0FBSztJQUNuQjtJQUVBTSwwQkFBMEI7UUFDeEIsT0FBTyxJQUFJLENBQUNMLG9CQUFvQjtJQUNsQztJQUVBTSxlQUFlO1FBQ2IsSUFBSUMsWUFBWTtRQUVoQixNQUFNQyxnQkFBZ0IsSUFBSSxDQUFDQyxlQUFlO1FBRTFDLElBQUlELGVBQWU7WUFDakJELFlBQVksSUFBSSxDQUFDVCxTQUFTLENBQUNRLFlBQVk7UUFDekM7UUFFQSxPQUFPQztJQUNUO0lBRUFHLGdCQUFnQjtRQUNkLElBQUlDLGFBQWE7UUFFakIsTUFBTUgsZ0JBQWdCLElBQUksQ0FBQ0MsZUFBZTtRQUUxQyxJQUFJLENBQUNELGVBQWU7WUFDbEIsTUFBTUksd0JBQXdCLElBQUksQ0FBQ2YsWUFBWSxDQUFDZ0IsR0FBRyxDQUFDLENBQUNDO2dCQUM3QyxNQUFNQyx1QkFBdUJELFlBQVlSLFlBQVk7Z0JBRXJELE9BQU9TO1lBQ1QsSUFDQUMscUJBQXFCLElBQUksQ0FBQ2xCLFNBQVMsQ0FBQ1EsWUFBWTtZQUV0REssYUFBYTttQkFDUkM7Z0JBQ0hJO2FBQ0Q7UUFDSDtRQUVBLE9BQU9MO0lBQ1Q7SUFFQUYsa0JBQWtCO1FBQ2hCLE1BQU1RLHFCQUFxQixJQUFJLENBQUNwQixZQUFZLENBQUNxQixNQUFNLEVBQzdDVixnQkFBaUJTLHVCQUF1QjtRQUU5QyxPQUFPVDtJQUNUO0lBRUFXLGlCQUFpQkMsU0FBUyxFQUFFO1FBQzFCLE1BQU14QixRQUFRLElBQUksQ0FBQ0ssUUFBUSxJQUNyQm9CLDRCQUE0QnpCLE1BQU11QixnQkFBZ0IsQ0FBQ0MsWUFDbkRFLHNCQUFzQkQsMkJBQTRCLEdBQUc7UUFFM0QsT0FBT0M7SUFDVDtJQUVBLE1BQU1DLE9BQU8vQixPQUFPLEVBQUU7UUFDcEIsSUFBSWdDLFdBQVc7UUFFZixNQUFNQyw4QkFBOEIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV6RGxDLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLDRCQUE0Qiw2QkFBNkIsQ0FBQztRQUUxRixNQUFNRyxJQUFBQSxnQkFBTyxFQUFDLE9BQU9wQztZQUNuQixNQUFNcUMsZ0JBQWdCLElBQUksQ0FBQ0MsV0FBVyxDQUFDdEM7WUFFdkMsSUFBSXFDLGVBQWU7Z0JBQ2pCLE1BQU1FLHFCQUFxQixNQUFNLElBQUksQ0FBQ0Msa0JBQWtCLENBQUN4QztnQkFFekQsSUFBSXVDLG9CQUFvQjtvQkFDdEIsTUFBTUUsb0JBQW9CLE1BQU0sSUFBSSxDQUFDQyxlQUFlLENBQUMxQztvQkFFckQsSUFBSXlDLG1CQUFtQjt3QkFDckIsTUFBTUUsZ0JBQWdCLE1BQU0sSUFBSSxDQUFDQyxXQUFXLENBQUM1Qzt3QkFFN0MsSUFBSTJDLGVBQWU7NEJBQ2pCWCxXQUFXO3dCQUNiO29CQUNGO2dCQUNGO1lBQ0Y7UUFDRixHQUFHLElBQUksQ0FBQ3hCLG9CQUFvQixFQUFFUjtRQUU5QixJQUFJZ0MsVUFBVTtZQUNaaEMsUUFBUTZDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFWiw0QkFBNEIsMkJBQTJCLENBQUM7UUFDNUY7UUFFQSxPQUFPRDtJQUNUO0lBRUFNLFlBQVl0QyxPQUFPLEVBQUU7UUFDbkIsSUFBSXFDO1FBRUosTUFBTUosOEJBQThCLElBQUksQ0FBQ0MsU0FBUyxJQUM1Q1ksY0FBYyxJQUFJLENBQUMxQyxLQUFLLENBQUM4QixTQUFTO1FBRXhDbEMsUUFBUW1DLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDhCQUE4QixFQUFFYSxZQUFZLFVBQVUsQ0FBQztRQUVuSFQsZ0JBQWdCLElBQUksQ0FBQ2pDLEtBQUssQ0FBQzJCLE1BQU07UUFFakMsSUFBSU0sZUFBZTtZQUNqQnJDLFFBQVE2QyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRVosNEJBQTRCLDhCQUE4QixFQUFFYSxZQUFZLFFBQVEsQ0FBQztRQUNySDtRQUVBLE9BQU9UO0lBQ1Q7SUFFQSxNQUFNTyxZQUFZNUMsT0FBTyxFQUFFO1FBQ3pCLElBQUkyQztRQUVKLE1BQU1WLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFEbEMsUUFBUW1DLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLHFDQUFxQyxDQUFDO1FBRWxHLE1BQU1sQixZQUFZLElBQUksQ0FBQ1QsU0FBUyxDQUFDUSxZQUFZO1FBRTdDNkIsZ0JBQWdCLE1BQU0sSUFBSSxDQUFDcEMsS0FBSyxDQUFDd0IsTUFBTSxDQUFDaEIsV0FBV2Y7UUFFbkQsSUFBSTJDLGVBQWU7WUFDakIzQyxRQUFRNkMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVaLDRCQUE0QixtQ0FBbUMsQ0FBQztRQUNwRztRQUVBLE9BQU9VO0lBQ1Q7SUFFQSxNQUFNRCxnQkFBZ0IxQyxPQUFPLEVBQUU7UUFDN0IsSUFBSXlDO1FBRUosTUFBTU0sa0JBQWtCLElBQUksQ0FBQ3pDLFNBQVMsQ0FBQzRCLFNBQVMsSUFDMUNELDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO1FBRXpEbEMsUUFBUW1DLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDhCQUE4QixFQUFFYyxnQkFBZ0IsY0FBYyxDQUFDO1FBRTNITixvQkFBb0IsTUFBTSxJQUFJLENBQUNuQyxTQUFTLENBQUN5QixNQUFNLENBQUMvQjtRQUVoRCxJQUFJeUMsbUJBQW1CO1lBQ3JCekMsUUFBUTZDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFWiw0QkFBNEIsOEJBQThCLEVBQUVjLGdCQUFnQixZQUFZLENBQUM7UUFDN0g7UUFFQSxPQUFPTjtJQUNUO0lBRUEsTUFBTU8sa0JBQWtCMUIsV0FBVyxFQUFFdEIsT0FBTyxFQUFFO1FBQzVDLElBQUlpRDtRQUVKLE1BQU1DLG9CQUFvQjVCLFlBQVlZLFNBQVMsSUFDekNELDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFEbEMsUUFBUW1DLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDhCQUE4QixFQUFFaUIsa0JBQWtCLGdCQUFnQixDQUFDO1FBRS9IRCxzQkFBc0IsTUFBTTNCLFlBQVlTLE1BQU0sQ0FBQy9CO1FBRS9DLElBQUlpRCxxQkFBcUI7WUFDdkIsTUFBTUUsMkJBQTJCN0IsYUFBYyxJQUFJO1lBRW5EdEIsUUFBUW9ELGlCQUFpQjtZQUV6QnBELFFBQVFxRCwyQkFBMkIsQ0FBQ0Y7UUFDdEM7UUFFQSxJQUFJRixxQkFBcUI7WUFDdkJqRCxRQUFRNkMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVaLDRCQUE0Qiw4QkFBOEIsRUFBRWlCLGtCQUFrQixjQUFjLENBQUM7UUFDakk7UUFFQSxPQUFPRDtJQUNUO0lBRUEsTUFBTVQsbUJBQW1CeEMsT0FBTyxFQUFFO1FBQ2hDLElBQUl1QztRQUVKLE1BQU1OLDhCQUE4QixJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRTFEbEMsUUFBUW1DLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsNEJBQTRCLDRDQUE0QyxDQUFDO1FBRXpHTSxxQkFBcUIsTUFBTTFDLG1CQUFtQixJQUFJLENBQUNRLFlBQVksRUFBRSxPQUFPaUI7WUFDdEUsTUFBTTJCLHNCQUFzQixNQUFNLElBQUksQ0FBQ0QsaUJBQWlCLENBQUMxQixhQUFhdEI7WUFFdEUsSUFBSWlELHFCQUFxQjtnQkFDdkIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxJQUFJVixvQkFBb0I7WUFDdEJ2QyxRQUFRNkMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVaLDRCQUE0QiwwQ0FBMEMsQ0FBQztRQUMzRztRQUVBLE9BQU9NO0lBQ1Q7SUFFQWUsU0FBUztRQUNQLE1BQU1DLFlBQVlDLElBQUFBLHNCQUFnQixFQUFDLElBQUksQ0FBQ3BELEtBQUssR0FDdkNxRCxnQkFBZ0JDLElBQUFBLDhCQUF3QixFQUFDLElBQUksQ0FBQ3BELFNBQVMsR0FDdkRxRCxtQkFBbUJDLElBQUFBLG9DQUE4QixFQUFDLElBQUksQ0FBQ3ZELFlBQVksR0FDbkV3RCwyQkFBMkJDLElBQUFBLG9EQUE4QyxFQUFDLElBQUksQ0FBQ3RELG9CQUFvQixHQUNuR1AsU0FBUyxJQUFJLENBQUNpQyxTQUFTO1FBRTdCLElBQUkvQjtRQUVKQSxhQUFhLElBQUksQ0FBQzRELGFBQWE7UUFFL0IsTUFBTUMsaUJBQWlCQyxJQUFBQSxzQ0FBMEIsRUFBQzlEO1FBRWxEQSxhQUFhNkQsZ0JBQWlCLEdBQUc7UUFFakMsTUFBTTVELFFBQVFtRCxXQUNSakQsWUFBWW1ELGVBQ1pwRCxlQUFlc0Qsa0JBQ2ZuRCx1QkFBdUJxRCwwQkFDdkJLLE9BQU87WUFDTGpFO1lBQ0FFO1lBQ0FDO1lBQ0FFO1lBQ0FEO1lBQ0FHO1FBQ0Y7UUFFTixPQUFPMEQ7SUFDVDtJQUVBLE9BQU9DLFNBQVNDLEtBQUssRUFBRUYsSUFBSSxFQUFFbEUsT0FBTyxFQUFFO1FBQ3BDLE1BQU0sRUFBRUcsVUFBVSxFQUFFLEdBQUcrRCxNQUNqQjlELFFBQVFpRSxJQUFBQSxtQkFBYSxFQUFDSCxNQUFNbEUsVUFDNUJNLFlBQVlnRSxJQUFBQSx1QkFBaUIsRUFBQ0osTUFBTWxFLFVBQ3BDSyxlQUFla0UsSUFBQUEsMEJBQW9CLEVBQUNMLE1BQU1sRSxVQUMxQ1EsdUJBQXVCZ0UsSUFBQUEsa0NBQTRCLEVBQUNOLE1BQU1sRSxVQUMxREUsT0FBTyxNQUNQSyxRQUFRLE1BQ1JOLFNBQVN3RSxJQUFBQSxvRUFBNEQsRUFBQ3JFLE9BQU9DLGNBQWNDLFlBQzNGb0Usd0JBQXdCLElBQUlOLE1BQU1wRSxTQUFTQyxRQUFRQyxNQUFNQyxZQUFZQyxPQUFPQyxjQUFjQyxXQUFXQyxPQUFPQztRQUVsSCxPQUFPa0U7SUFDVDtBQUNGIn0=