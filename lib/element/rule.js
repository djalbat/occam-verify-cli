"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _necessary = require("necessary");
const _occamlanguages = require("occam-languages");
const _elements = require("../elements");
const _context = require("../utilities/context");
const _json = require("../utilities/json");
const { reverse, extract } = _necessary.arrayUtilities, { asyncForwardsEvery, asyncBackwardsEvery } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Rule extends _occamlanguages.Element {
    constructor(context, string, node, proof, labels, premises, conclusion){
        super(context, string, node);
        this.proof = proof;
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
    }
    getLabels() {
        return this.labels;
    }
    getPremises() {
        return this.premises;
    }
    getProof() {
        return this.proof;
    }
    getConclusion() {
        return this.conclusion;
    }
    getRuleNode() {
        const node = this.getNode(), ruleNode = node; ///
        return ruleNode;
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
    unifyStatementWithConclusion(statement, context) {
        let statementUnifiesWithConclusion = false;
        const ruleString = this.getString(), statementString = statement.getString(), conclusionString = this.conclusion.getString();
        context.trace(`Unifying the '${statementString}' statement with the '${ruleString}' rule's '${conclusionString}' conclusion...`);
        const statementUnifies = this.conclusion.unifyStatement(statement, context);
        if (statementUnifies) {
            statementUnifiesWithConclusion = true;
        }
        if (statementUnifiesWithConclusion) {
            context.debug(`...unified the '${statementString}' statement with the '${ruleString}' rule's '${conclusionString}' conclusion.`);
        }
        return statementUnifiesWithConclusion;
    }
    async verify() {
        let verifies = false;
        const context = this.getContext();
        await this.break(context);
        const ruleString = this.getString(); ///
        context.trace(`Verifying the '${ruleString}' rule...`);
        await (0, _context.asyncRestrict)(async (context)=>{
            const labelsVerify = this.verifyLabels();
            if (labelsVerify) {
                const premisesVerify = await this.verifyPremises(context);
                if (premisesVerify) {
                    const conclusionVerifies = await this.verifyConclusion(context);
                    if (conclusionVerifies) {
                        const proofVerifies = await this.verifyProof(context);
                        if (proofVerifies) {
                            verifies = true;
                        }
                    }
                }
            }
        }, context);
        if (verifies) {
            const rule = this; ///
            context.addRule(rule);
            context.debug(`...verified the '${ruleString}' rule.`);
        }
        return verifies;
    }
    verifyLabel(label) {
        let labelVerifies;
        const context = this.getContext(), ruleString = this.getString(), labelString = label.getString();
        context.trace(`Verifying the '${ruleString}' rule's '${labelString}' label...`);
        labelVerifies = label.verify();
        if (labelVerifies) {
            context.debug(`...verified the '${ruleString}' rule's '${labelString}' label.`);
        }
        return labelVerifies;
    }
    verifyLabels() {
        let labelsVerify;
        const context = this.getContext(), ruleString = this.getString(); ///
        context.trace(`Verifying the '${ruleString}' rule's labels...`);
        labelsVerify = this.labels.every((label)=>{
            const labelVerifies = this.verifyLabel(label);
            if (labelVerifies) {
                return true;
            }
        });
        if (labelsVerify) {
            context.debug(`...verified the '${ruleString}' rule's labels.`);
        }
        return labelsVerify;
    }
    async verifyProof(context) {
        let proofVerifies;
        if (this.proof === null) {
            proofVerifies = true;
        } else {
            const ruleString = this.getString(); ///
            context.trace(`Verifying the '${ruleString}' rule's proof...`);
            const statement = this.conclusion.getStatement();
            proofVerifies = await this.proof.verify(statement, context);
            if (proofVerifies) {
                context.debug(`...verified the '${ruleString}' rule's proof.`);
            }
        }
        return proofVerifies;
    }
    async verifyPremise(premise, context) {
        let premiseVerifies;
        const ruleString = this.getString(), premiseString = premise.getString();
        context.trace(`Verifying the '${ruleString}' rule's '${premiseString}' premise...`);
        premiseVerifies = await premise.verify(context);
        if (premiseVerifies) {
            const subproofOrProofAssertion = premise; ////
            context.assignAssignments();
            context.addSubproofOrProofAssertion(subproofOrProofAssertion);
        }
        if (premiseVerifies) {
            context.debug(`...verified the '${ruleString}' rule's '${premiseString}' premise.`);
        }
        return premiseVerifies;
    }
    async verifyPremises(context) {
        let premisesVerify;
        const ruleString = this.getString(); ///
        context.trace(`Verifying the '${ruleString}' rule's premises...`);
        premisesVerify = await asyncForwardsEvery(this.premises, async (premise)=>{
            const premiseVerifies = await this.verifyPremise(premise, context);
            if (premiseVerifies) {
                return true;
            }
        });
        if (premisesVerify) {
            context.debug(`...verified the '${ruleString}' rule's premises.`);
        }
        return premisesVerify;
    }
    async verifyConclusion(context) {
        let conclusionVerifies;
        const ruleString = this.getString(), conclusionString = this.conclusion.getString();
        context.trace(`Verifying the '${ruleString}' rule's '${conclusionString}' conclusion...`);
        conclusionVerifies = await this.conclusion.verify(context);
        if (conclusionVerifies) {
            context.debug(`...verified the '${ruleString}' rule's '${conclusionString}' conclusion.`);
        }
        return conclusionVerifies;
    }
    async unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context) {
        let statementAndSubproofOrProofAssertionsUnify = false;
        const statementUnifiesWithConclusion = this.unifyStatementWithConclusion(statement, context);
        if (statementUnifiesWithConclusion) {
            const subproofOrProofAssertionsUnifiesWithPremises = await this.unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, context);
            if (subproofOrProofAssertionsUnifiesWithPremises) {
                const substitutionsResolved = context.areSubstitutionsResolved();
                if (substitutionsResolved) {
                    statementAndSubproofOrProofAssertionsUnify = true;
                }
            }
        }
        return statementAndSubproofOrProofAssertionsUnify;
    }
    async unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, context) {
        let subproofOrProofAssertionsUnifiesWithPremises;
        subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///
        subproofOrProofAssertionsUnifiesWithPremises = asyncBackwardsEvery(this.premises, async (premise)=>{
            const stepUnifiesWithPremise = await this.unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, context);
            if (stepUnifiesWithPremise) {
                return true;
            }
        });
        return subproofOrProofAssertionsUnifiesWithPremises;
    }
    async unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, context) {
        let subproofOrProofAssertionsUnifiesWithPremise = false;
        if (!subproofOrProofAssertionsUnifiesWithPremise) {
            const subproofOrProofAssertion = extract(subproofOrProofAssertions, (subproofOrProofAssertion)=>{
                const subproofOrProofAssertionUnifies = premise.unifySubproofOrProofAssertion(subproofOrProofAssertion, context);
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
                subproofOrProofAssertionsUnifiesWithPremise = true;
            }
        }
        if (!subproofOrProofAssertionsUnifiesWithPremise) {
            const premiseUnifiesIndependently = await premise.unifyIndependently(context);
            if (premiseUnifiesIndependently) {
                subproofOrProofAssertionsUnifiesWithPremise = true;
            }
        }
        return subproofOrProofAssertionsUnifiesWithPremise;
    }
    toJSON() {
        const labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), premisesJSON = (0, _json.premisesToPremisesJSON)(this.premises), conclusionJSON = (0, _json.conclusionToConclusionJSON)(this.conclusion), labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, string = this.getString(), json = {
            string,
            labels,
            premises,
            conclusion
        };
        return json;
    }
    static name = "Rule";
    static fromJSON(json, context) {
        const node = null, proof = null, string = null, labels = (0, _json.labelsFromJSON)(json, context), premises = (0, _json.premisesFromJSON)(json, context), conclusion = (0, _json.conclusionFromJSON)(json, context), rule = new Rule(context, string, node, proof, labels, premises, conclusion);
        return rule;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGFzeW5jUmVzdHJpY3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLCBwcmVtaXNlc0Zyb21KU09OLCBjb25jbHVzaW9uRnJvbUpTT04sIGxhYmVsc1RvTGFiZWxzSlNPTiwgcHJlbWlzZXNUb1ByZW1pc2VzSlNPTiwgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlLCBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNGb3J3YXJkc0V2ZXJ5LCBhc3luY0JhY2t3YXJkc0V2ZXJ5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSdWxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFByZW1pc2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZW1pc2VzO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRSdWxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcnVsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxhYmVsLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb247XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgYXdhaXQgYXN5bmNSZXN0cmljdChhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBwcmVtaXNlc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5UHJlbWlzZXMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgY29uY2x1c2lvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWwobGFiZWwpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeSgpO1xuXG4gICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgbGV0IGxhYmVsc1ZlcmlmeTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGxhYmVscy4uLmApO1xuXG4gICAgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZlcmlmaWVzID0gdGhpcy52ZXJpZnlMYWJlbChsYWJlbCk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgbGFiZWxzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcm9vZi4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnByb29mLnZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcm9vZi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCkge1xuICAgIGxldCBwcmVtaXNlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBwcmVtaXNlVmVyaWZpZXMgPSBhd2FpdCBwcmVtaXNlLnZlcmlmeShjb250ZXh0KVxuXG4gICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gcHJlbWlzZTsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVtaXNlVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcmVtaXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IHByZW1pc2VzVmVyaWZ5O1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcmVtaXNlcy4uLmApO1xuXG4gICAgcHJlbWlzZXNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgYXN5bmMgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJlbWlzZShwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJlbWlzZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZW1pc2VzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KSB7XG4gICAgbGV0IGNvbmNsdXNpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuY29uY2x1c2lvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uY2x1c2lvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5jb25jbHVzaW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb25jbHVzaW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uKHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29udGV4dC5hcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQoKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnk7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcztcblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSByZXZlcnNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpOyAvLy9cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYXN5bmNCYWNrd2FyZHNFdmVyeSh0aGlzLnByZW1pc2VzLCBhc3luYyAocHJlbWlzZSkgPT4ge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgcHJlbWlzZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhQcmVtaXNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgcHJlbWlzZSwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlID0gZmFsc2U7XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGV4dHJhY3Qoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gcHJlbWlzZS51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIGNvbnRleHQucmVzb2x2ZVN1YnN0aXR1dGlvbnMoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IHByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSA9IGF3YWl0IHByZW1pc2UudW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzVG9QcmVtaXNlc0pTT04odGhpcy5wcmVtaXNlcyksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTih0aGlzLmNvbmNsdXNpb24pLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSdWxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9vZiwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicmV2ZXJzZSIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsImFzeW5jRm9yd2FyZHNFdmVyeSIsImFzeW5jQmFja3dhcmRzRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJSdWxlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicHJvb2YiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldFByb29mIiwiZ2V0Q29uY2x1c2lvbiIsImdldFJ1bGVOb2RlIiwiZ2V0Tm9kZSIsInJ1bGVOb2RlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJzb21lIiwibGFiZWwiLCJsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbiIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiIsInJ1bGVTdHJpbmciLCJnZXRTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJjb25jbHVzaW9uU3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJkZWJ1ZyIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImJyZWFrIiwiYXN5bmNSZXN0cmljdCIsImxhYmVsc1ZlcmlmeSIsInZlcmlmeUxhYmVscyIsInByZW1pc2VzVmVyaWZ5IiwidmVyaWZ5UHJlbWlzZXMiLCJjb25jbHVzaW9uVmVyaWZpZXMiLCJ2ZXJpZnlDb25jbHVzaW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwicnVsZSIsImFkZFJ1bGUiLCJ2ZXJpZnlMYWJlbCIsImxhYmVsVmVyaWZpZXMiLCJsYWJlbFN0cmluZyIsImV2ZXJ5IiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5UHJlbWlzZSIsInByZW1pc2UiLCJwcmVtaXNlVmVyaWZpZXMiLCJwcmVtaXNlU3RyaW5nIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJ1bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5Iiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJzdGVwVW5pZmllc1dpdGhQcmVtaXNlIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2UiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3BlY2lmaWNDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJyZXNvbHZlU3Vic3RpdHV0aW9ucyIsInByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwiY29uY2x1c2lvbkpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJCQVYrQjtnQ0FDZ0I7MEJBRXhCO3lCQUNPO3NCQUMrRztBQUU3SSxNQUFNLEVBQUVBLE9BQU8sRUFBRUMsT0FBTyxFQUFFLEdBQUdDLHlCQUFjLEVBQ3JDLEVBQUVDLGtCQUFrQixFQUFFQyxtQkFBbUIsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFekUsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLENBQUU7UUFDdEUsS0FBSyxDQUFDTixTQUFTQyxRQUFRQztRQUV2QixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtJQUNwQjtJQUVBSSxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7SUFFQUksV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDTixLQUFL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