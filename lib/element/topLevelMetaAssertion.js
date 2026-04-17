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
        const breakPointJSON = breakPoint.toJSON();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBlbmNsb3NlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbGFiZWxGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsVG9MYWJlbEpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Gcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgbWV0YUxldmVsQXNzdW1wdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zVG9NZXRhTGV2ZWxBc3N1bXB0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBhc3luY0ZvcndhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgbWV0YUxldmVsQXNzdW1wdGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQpO1xuXG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLm1ldGFMZXZlbEFzc3VtcHRpb25zID0gbWV0YUxldmVsQXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRNZXRhTGV2ZWxBc3N1bXB0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhTGV2ZWxBc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHtcbiAgICBsZXQgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIGNvbnN0IHVuY29uZGl0aW9uYWwgPSB0aGlzLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKHVuY29uZGl0aW9uYWwpIHtcbiAgICAgIHN0YXRlbWVudCA9IHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGxldCBzdGF0ZW1lbnRzID0gbnVsbDtcblxuICAgIGNvbnN0IHVuY29uZGl0aW9uYWwgPSB0aGlzLmlzVW5jb25kaXRpb25hbCgpO1xuXG4gICAgaWYgKCF1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudHMgPSB0aGlzLnN1cHBvc2l0aW9ucy5tYXAoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RhdGVtZW50ID0gc3VwcG9zaXRpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uU3RhdGVtZW50O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnQgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgc3RhdGVtZW50cyA9IFtcbiAgICAgICAgLi4uc3VwcG9zaXRpb25TdGF0ZW1lbnRzLFxuICAgICAgICBkZWR1Y3Rpb25TdGF0ZW1lbnRcbiAgICAgIF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudHM7XG4gIH1cblxuICBpc1VuY29uZGl0aW9uYWwoKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zTGVuZ3RoID0gdGhpcy5zdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHVuY29uZGl0aW9uYWwgPSAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiB1bmNvbmRpdGlvbmFsO1xuICB9XG5cbiAgY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0TGFiZWwoKSxcbiAgICAgICAgICBsYWJlbENvbXBhcmVzVG9SZWZmZXJlbmNlID0gbGFiZWwuY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbXBhcmVzVG9SZWZlcmVuY2UgPSBsYWJlbENvbXBhcmVzVG9SZWZmZXJlbmNlOyAgLy8vXG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1JlZmVyZW5jZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBhd2FpdCBlbmNsb3NlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZlcmlmaWVzID0gdGhpcy52ZXJpZnlMYWJlbChjb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgdGhpcy5tZXRhTGV2ZWxBc3N1bXB0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWwoY29udGV4dCkge1xuICAgIGxldCBsYWJlbFZlcmlmaWVzO1xuXG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gdGhpcy5sYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgbGFiZWxWZXJpZmllcyA9IHRoaXMubGFiZWwudmVyaWZ5KCk7XG5cbiAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzIHByb29mLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgIHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnByb29mLnZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyBwcm9vZi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeURlZHVjdGlvbihjb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3QgZGVkdWN0aW9uU3RyaW5nID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YSBhc3NlcnRpb24ncyAnJHtkZWR1Y3Rpb25TdHJpbmd9JyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpXG5cbiAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gc3VwcG9zaXRpb247ICAvLy8vXG5cbiAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvbnNWZXJpZnk7XG5cbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy4uLmApO1xuXG4gICAgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgYXN5bmNGb3J3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCBhc3luYyAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3Mgc3VwcG9zaXRpb25zLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZnk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWxUb0xhYmVsSlNPTih0aGlzLmxhYmVsKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9uc0pTT04gPSBtZXRhTGV2ZWxBc3N1bXB0aW9uc1RvTWV0YUxldmVsQXNzdW1wdGlvbnNKU09OKHRoaXMubWV0YUxldmVsQXNzdW1wdGlvbnMpLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludC50b0pTT04oKTtcblxuICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50SlNPTjsgIC8vL1xuXG4gICAgY29uc3QgbGFiZWwgPSBsYWJlbEpTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zID0gbWV0YUxldmVsQXNzdW1wdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGJyZWFrUG9pbnQsXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIG1ldGFMZXZlbEFzc3VtcHRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgeyBicmVha1BvaW50IH0gPSBqc29uLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBtZXRhTGV2ZWxBc3N1bXB0aW9ucyA9IG1ldGFMZXZlbEFzc3VtcHRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbCwgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIG1ldGFMZXZlbEFzc3VtcHRpb25zKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJicmVha1BvaW50IiwibGFiZWwiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zIiwiZ2V0TGFiZWwiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXREZWR1Y3Rpb24iLCJnZXRQcm9vZiIsImdldE1ldGFMZXZlbEFzc3VtcHRpb25zIiwiZ2V0U3RhdGVtZW50Iiwic3RhdGVtZW50IiwidW5jb25kaXRpb25hbCIsImlzVW5jb25kaXRpb25hbCIsImdldFN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzIiwic3VwcG9zaXRpb25TdGF0ZW1lbnRzIiwibWFwIiwic3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0YXRlbWVudCIsImRlZHVjdGlvblN0YXRlbWVudCIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsImNvbXBhcmVSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJsYWJlbENvbXBhcmVzVG9SZWZmZXJlbmNlIiwiY29tcGFyZXNUb1JlZmVyZW5jZSIsInZlcmlmeSIsInZlcmlmaWVzIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJlbmNsb3NlIiwibGFiZWxWZXJpZmllcyIsInZlcmlmeUxhYmVsIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJkZWJ1ZyIsImxhYmVsU3RyaW5nIiwiZGVkdWN0aW9uU3RyaW5nIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwic3VwcG9zaXRpb25TdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInRvSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zSlNPTiIsIm1ldGFMZXZlbEFzc3VtcHRpb25zVG9NZXRhTGV2ZWxBc3N1bXB0aW9uc0pTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwibWV0YUxldmVsQXNzdW1wdGlvbnNGcm9tSlNPTiIsInRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ0Zyb21MYWJlbFN1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBaUJBOzs7ZUFBcUJBOzs7Z0NBZjBCO3lCQUV2Qjt3QkFDcUQ7c0JBUWQ7QUFFL0QsTUFBTSxFQUFFQyxrQkFBa0IsRUFBRSxHQUFHQyxxQ0FBcUI7QUFFckMsTUFBTUYsOEJBQThCRyx1QkFB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