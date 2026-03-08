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
        await (0, _context.asyncScope)(async (context)=>{
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
        const ruleString = this.getString(); ///
        context.trace(`Verifying the '${ruleString}' rule's conclusion...`);
        conclusionVerifies = await this.conclusion.verify(context);
        if (conclusionVerifies) {
            context.debug(`...verified the '${ruleString}' rule's conclusion.`);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGFzeW5jU2NvcGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLCBwcmVtaXNlc0Zyb21KU09OLCBjb25jbHVzaW9uRnJvbUpTT04sIGxhYmVsc1RvTGFiZWxzSlNPTiwgcHJlbWlzZXNUb1ByZW1pc2VzSlNPTiwgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlLCBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNGb3J3YXJkc0V2ZXJ5LCBhc3luY0JhY2t3YXJkc0V2ZXJ5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSdWxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFByZW1pc2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZW1pc2VzO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRSdWxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcnVsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxhYmVsLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb247XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgYXdhaXQgYXN5bmNTY29wZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBwcmVtaXNlc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5UHJlbWlzZXMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgY29uY2x1c2lvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWwobGFiZWwpIHtcbiAgICBsZXQgbGFiZWxWZXJpZmllcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeSgpO1xuXG4gICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgbGV0IGxhYmVsc1ZlcmlmeTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGxhYmVscy4uLmApO1xuXG4gICAgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZlcmlmaWVzID0gdGhpcy52ZXJpZnlMYWJlbChsYWJlbCk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgbGFiZWxzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcm9vZi4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnByb29mLnZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcm9vZi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCkge1xuICAgIGxldCBwcmVtaXNlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBwcmVtaXNlVmVyaWZpZXMgPSBhd2FpdCBwcmVtaXNlLnZlcmlmeShjb250ZXh0KVxuXG4gICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gcHJlbWlzZTsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVtaXNlVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcmVtaXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IHByZW1pc2VzVmVyaWZ5O1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcmVtaXNlcy4uLmApO1xuXG4gICAgcHJlbWlzZXNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgYXN5bmMgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJlbWlzZShwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJlbWlzZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZW1pc2VzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KSB7XG4gICAgbGV0IGNvbmNsdXNpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uY2x1c2lvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5jb25jbHVzaW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb250ZXh0LmFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHJldmVyc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyk7IC8vL1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMgPSBhc3luY0JhY2t3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIGFzeW5jIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBzdGVwVW5pZmllc1dpdGhQcmVtaXNlID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSBmYWxzZTtcblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gZXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBwcmVtaXNlLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5yZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3QgcHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2U7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTih0aGlzLnByZW1pc2VzKSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKHRoaXMuY29uY2x1c2lvbiksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJ1bGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNCYWNrd2FyZHNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlJ1bGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0UHJvb2YiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UnVsZU5vZGUiLCJnZXROb2RlIiwicnVsZU5vZGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsInNvbWUiLCJsYWJlbCIsImxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJ1bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uIiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uIiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInN0YXRlbWVudFN0cmluZyIsImNvbmNsdXNpb25TdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsImRlYnVnIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJhc3luY1Njb3BlIiwibGFiZWxzVmVyaWZ5IiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXNWZXJpZnkiLCJ2ZXJpZnlQcmVtaXNlcyIsImNvbmNsdXNpb25WZXJpZmllcyIsInZlcmlmeUNvbmNsdXNpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJydWxlIiwiYWRkUnVsZSIsInZlcmlmeUxhYmVsIiwibGFiZWxWZXJpZmllcyIsImxhYmVsU3RyaW5nIiwiZXZlcnkiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnlQcmVtaXNlIiwicHJlbWlzZSIsInByZW1pc2VWZXJpZmllcyIsInByZW1pc2VTdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInN0ZXBVbmlmaWVzV2l0aFByZW1pc2UiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwicHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5IiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJjb25jbHVzaW9uSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxhYmVsc0Zyb21KU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkJBVitCO2dDQUNnQjswQkFFeEI7eUJBQ0k7c0JBQ2tIO0FBRTdJLE1BQU0sRUFBRUEsT0FBTyxFQUFFQyxPQUFPLEVBQUUsR0FBR0MseUJBQWMsRUFDckMsRUFBRUMsa0JBQWtCLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdDLHFDQUFxQjtNQUV6RSxXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsQ0FBRTtRQUN0RSxLQUFLLENBQUNOLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSCxNQUFNO0lBQ3BCO0lBRUFJLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0gsUUFBUTtJQUN0QjtJQUVBSSxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNOLEtBQUs7SUFDbkI7SUFFQU8sZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNKLFVBQVU7SUFDeEI7SUFFQUssY0FBYztRQUNaLE1BQU1ULE9BQU8sSUFBSSxDQUFDVSxPQUFPLElBQ25CQyxXQUFXWCxNQUFP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