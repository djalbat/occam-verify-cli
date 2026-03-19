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
    unifyWithReference(reference, context) {
        let unifiesWithReference = false;
        const referenceString = reference.getString(), topLevelMetaAssertionString = this.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference...`);
        const metavariable = this.label.getMetavariable(), metavariableUnifies = reference.unifyMetavariable(metavariable, context);
        if (metavariableUnifies) {
            unifiesWithReference = true;
        }
        if (unifiesWithReference) {
            context.debug(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${referenceString}' reference.`);
        }
        return unifiesWithReference;
    }
    unifyWithStatement(statement, context) {
        let unifiesWithStatement = false;
        const statementString = this.getString(), topLevelMetaAssertionString = this.getString();
        context.trace(`Unifying the '${topLevelMetaAssertionString}' top level meta-assertion with the '${statementString}' statement...`);
        debugger;
        // const topLevelMetaAssertionUnconditional = topLevelMetaAssertion.isUnconditional();
        //
        // if (topLevelMetaAssertionUnconditional) {
        //   const deduction = topLevelMetaAssertion.getDeduction(),
        //     deductionUnifies = this.unifyDeduction(deduction, generalContext, specificContext);
        //
        //   if (deductionUnifies) {
        //     unifiesWithStatement = true;
        //   }
        // } else {
        //   const statementNode = this.getStatementNode(),
        //     subproofAssertionNode = statementNode.getSubproofAssertionNode();
        //
        //   if (subproofAssertionNode !== null) {
        //     const context = generalContext, ///
        //       subproofAssertion = context.findAssertionByAssertionNode(subproofAssertionNode);
        //
        //     unifiesWithStatement = subproofAssertion.unifyTopLevelMetaAssertion(topLevelMetaAssertion, generalContext, specificContext);
        //   }
        // }
        if (unifiesWithStatement) {
            context.debug(`...unified the '${topLevelMetaAssertionString}' top level meta-assertion with the '${statementString}' statement.`);
        }
        return unifiesWithStatement;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsTWV0YUFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBhc3luY1Jlc3RyaWN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmdGcm9tTGFiZWxTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N0cmluZ1wiO1xuaW1wb3J0IHsgbGFiZWxGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsVG9MYWJlbEpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Gcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OLFxuICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uc0Zyb21KU09OLFxuICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBhc3luY0ZvcndhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgbWV0YUxldmVsU3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMubWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRMYWJlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGFMZXZlbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7XG4gICAgbGV0IHN0YXRlbWVudCA9IG51bGw7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICh1bmNvbmRpdGlvbmFsKSB7XG4gICAgICBzdGF0ZW1lbnQgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBsZXQgc3RhdGVtZW50cyA9IG51bGw7XG5cbiAgICBjb25zdCB1bmNvbmRpdGlvbmFsID0gdGhpcy5pc1VuY29uZGl0aW9uYWwoKTtcblxuICAgIGlmICghdW5jb25kaXRpb25hbCkge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25TdGF0ZW1lbnRzID0gdGhpcy5zdXBwb3NpdGlvbnMubWFwKChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblN0YXRlbWVudCA9IHN1cHBvc2l0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvblN0YXRlbWVudDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgZGVkdWN0aW9uU3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHN0YXRlbWVudHMgPSBbXG4gICAgICAgIC4uLnN1cHBvc2l0aW9uU3RhdGVtZW50cyxcbiAgICAgICAgZGVkdWN0aW9uU3RhdGVtZW50XG4gICAgICBdO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIGNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldExhYmVsKCksXG4gICAgICAgICAgbGFiZWxDb21wYXJlc1RvUmVmZmVyZW5jZSA9IGxhYmVsLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb21wYXJlc1RvUmVmZXJlbmNlID0gbGFiZWxDb21wYXJlc1RvUmVmZmVyZW5jZTsgIC8vL1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9SZWZlcmVuY2U7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbi4uLmApO1xuXG4gICAgYXdhaXQgYXN5bmNSZXN0cmljdChhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWZXJpZmllcyA9IHRoaXMudmVyaWZ5TGFiZWwoKTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgdGhpcy5tZXRhTGV2ZWxTdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbCgpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSB0aGlzLmxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBsYWJlbFZlcmlmaWVzID0gdGhpcy5sYWJlbC52ZXJpZnkoKTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgcHJvb2YuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMucHJvb2YudmVyaWZ5KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzIHByb29mLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBkZWR1Y3Rpb25TdHJpbmcgPSB0aGlzLmRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEgYXNzZXJ0aW9uJ3MgJyR7ZGVkdWN0aW9uU3RyaW5nfScgZGVkdWN0aW9uLi4uYCk7XG5cbiAgICBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuZGVkdWN0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdXBwb3NpdGlvblZlcmlmaWVzO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsTWV0YUFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBtZXRhLWFzc2VydGlvbidzICcke3N1cHBvc2l0aW9uU3RyaW5nfScgc3VwcG9zaXRpb24uLi5gKTtcblxuICAgIHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBhd2FpdCBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dClcblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBzdXBwb3NpdGlvbjsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3MgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgbGV0IHN1cHBvc2l0aW9uc1ZlcmlmeTtcblxuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uJ3Mgc3VwcG9zaXRpb25zLi4uYCk7XG5cbiAgICBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIGFzeW5jIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIHVuaWZ5V2l0aFJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhSZWZlcmVuY2UgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSwgLy8vXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLi4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmxhYmVsLmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICB1bmlmaWVzV2l0aFJlZmVyZW5jZSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHVuaWZpZXNXaXRoUmVmZXJlbmNlKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHt0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgbWV0YS1hc3NlcnRpb24gd2l0aCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB1bmlmaWVzV2l0aFJlZmVyZW5jZTtcbiAgfVxuXG4gIHVuaWZ5V2l0aFN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgdW5pZmllc1dpdGhTdGF0ZW1lbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksIC8vL1xuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC4uLmApO1xuXG4gICAgZGVidWdnZXJcblxuICAgIC8vIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvblVuY29uZGl0aW9uYWwgPSB0b3BMZXZlbE1ldGFBc3NlcnRpb24uaXNVbmNvbmRpdGlvbmFsKCk7XG4gICAgLy9cbiAgICAvLyBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5jb25kaXRpb25hbCkge1xuICAgIC8vICAgY29uc3QgZGVkdWN0aW9uID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLmdldERlZHVjdGlvbigpLFxuICAgIC8vICAgICBkZWR1Y3Rpb25VbmlmaWVzID0gdGhpcy51bmlmeURlZHVjdGlvbihkZWR1Y3Rpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIC8vXG4gICAgLy8gICBpZiAoZGVkdWN0aW9uVW5pZmllcykge1xuICAgIC8vICAgICB1bmlmaWVzV2l0aFN0YXRlbWVudCA9IHRydWU7XG4gICAgLy8gICB9XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnN0IHN0YXRlbWVudE5vZGUgPSB0aGlzLmdldFN0YXRlbWVudE5vZGUoKSxcbiAgICAvLyAgICAgc3VicHJvb2ZBc3NlcnRpb25Ob2RlID0gc3RhdGVtZW50Tm9kZS5nZXRTdWJwcm9vZkFzc2VydGlvbk5vZGUoKTtcbiAgICAvL1xuICAgIC8vICAgaWYgKHN1YnByb29mQXNzZXJ0aW9uTm9kZSAhPT0gbnVsbCkge1xuICAgIC8vICAgICBjb25zdCBjb250ZXh0ID0gZ2VuZXJhbENvbnRleHQsIC8vL1xuICAgIC8vICAgICAgIHN1YnByb29mQXNzZXJ0aW9uID0gY29udGV4dC5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKHN1YnByb29mQXNzZXJ0aW9uTm9kZSk7XG4gICAgLy9cbiAgICAvLyAgICAgdW5pZmllc1dpdGhTdGF0ZW1lbnQgPSBzdWJwcm9vZkFzc2VydGlvbi51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cblxuICAgIGlmICh1bmlmaWVzV2l0aFN0YXRlbWVudCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7dG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIG1ldGEtYXNzZXJ0aW9uIHdpdGggdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5pZmllc1dpdGhTdGF0ZW1lbnQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWxUb0xhYmVsSlNPTih0aGlzLmxhYmVsKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zSlNPTiA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNUb01ldGFMZXZlbFN1YnN0aXR1dGlvbnNKU09OKHRoaXMubWV0YUxldmVsU3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbEpTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnMgPSBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGxhYmVsRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVsLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWwsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwibGFiZWwiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJnZXRMYWJlbCIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFN0YXRlbWVudCIsInN0YXRlbWVudCIsInVuY29uZGl0aW9uYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJnZXRTdGF0ZW1lbnRzIiwic3RhdGVtZW50cyIsInN1cHBvc2l0aW9uU3RhdGVtZW50cyIsIm1hcCIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25TdGF0ZW1lbnQiLCJkZWR1Y3Rpb25TdGF0ZW1lbnQiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJjb21wYXJlUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwibGFiZWxDb21wYXJlc1RvUmVmZmVyZW5jZSIsImNvbXBhcmVzVG9SZWZlcmVuY2UiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFzeW5jUmVzdHJpY3QiLCJsYWJlbFZlcmlmaWVzIiwidmVyaWZ5TGFiZWwiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInZlcmlmeURlZHVjdGlvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsImRlYnVnIiwibGFiZWxTdHJpbmciLCJkZWR1Y3Rpb25TdHJpbmciLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJzdXBwb3NpdGlvblN0cmluZyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlXaXRoUmVmZXJlbmNlIiwidW5pZmllc1dpdGhSZWZlcmVuY2UiLCJyZWZlcmVuY2VTdHJpbmciLCJtZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlNZXRhdmFyaWFibGUiLCJ1bmlmeVdpdGhTdGF0ZW1lbnQiLCJ1bmlmaWVzV2l0aFN0YXRlbWVudCIsInN0YXRlbWVudFN0cmluZyIsInRvSlNPTiIsImxhYmVsSlNPTiIsImxhYmVsVG9MYWJlbEpTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnNKU09OIiwibWV0YUxldmVsU3Vic3RpdHV0aW9uc1RvTWV0YUxldmVsU3Vic3RpdHV0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwibWV0YUxldmVsU3Vic3RpdHV0aW9uc0Zyb21KU09OIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uU3RyaW5nRnJvbUxhYmVsU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFpQkE7OztlQUFxQkE7OztnQ0FmMEI7eUJBRWpCO3dCQUMrQztzQkFRVjtBQUVuRSxNQUFNLEVBQUVDLGtCQUFrQixFQUFFLEdBQUdDLHFDQUFxQjtBQUVyQyxNQUFNRiw4QkFBOEJHLHVCQUFPO0lBQ3hELFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsc0JBQXNCLENBQUU7UUFDaEcsS0FBSyxDQUFDUCxTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0Msc0JBQXNCLEdBQUdBO0lBQ2hDO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0wsS0FBSztJQUNuQjtJQUVBTSxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUNMLFlBQVk7SUFDMUI7SUFFQU0sZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDTCxTQUFTO0lBQ3ZCO0lBRUFNLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ0wsS0FBSztJQUNuQjtJ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