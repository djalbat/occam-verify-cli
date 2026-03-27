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
const { reverse } = _necessary.arrayUtilities, { asyncExtract, asyncForwardsEvery, asyncBackwardsEvery } = _occamlanguages.asynchronousUtilities;
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
    async verify() {
        let verifies = false;
        const context = this.getContext();
        await this.break(context);
        const ruleString = this.getString(); ///
        context.trace(`Verifying the '${ruleString}' rule...`);
        await (0, _context.enclose)(async (context)=>{
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
    async unifyStatementWithConclusion(statement, context) {
        let statementUnifiesWithConclusion = false;
        await this.break(context);
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
    async unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, context) {
        let subproofOrProofAssertionsUnifiesWithPremise = false;
        await this.break(context);
        if (!subproofOrProofAssertionsUnifiesWithPremise) {
            const subproofOrProofAssertion = await asyncExtract(subproofOrProofAssertions, async (subproofOrProofAssertion)=>{
                const subproofOrProofAssertionUnifies = await premise.unifySubproofOrProofAssertion(subproofOrProofAssertion, context);
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
    async unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, context) {
        let subproofOrProofAssertionsUnifiesWithPremises;
        subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///
        subproofOrProofAssertionsUnifiesWithPremises = await asyncBackwardsEvery(this.premises, async (premise)=>{
            const stepUnifiesWithPremise = await this.unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, context);
            if (stepUnifiesWithPremise) {
                return true;
            }
        });
        return subproofOrProofAssertionsUnifiesWithPremises;
    }
    async unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context) {
        let statementAndSubproofOrProofAssertionsUnify = false;
        const statementUnifiesWithConclusion = await this.unifyStatementWithConclusion(statement, context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVuY2xvc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLCBwcmVtaXNlc0Zyb21KU09OLCBjb25jbHVzaW9uRnJvbUpTT04sIGxhYmVsc1RvTGFiZWxzSlNPTiwgcHJlbWlzZXNUb1ByZW1pc2VzSlNPTiwgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNFeHRyYWN0LCBhc3luY0ZvcndhcmRzRXZlcnksIGFzeW5jQmFja3dhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJ1bGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9vZiwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5wcmVtaXNlcyA9IHByZW1pc2VzO1xuICAgIHRoaXMuY29uY2x1c2lvbiA9IGNvbmNsdXNpb247XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldFJ1bGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBydWxlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbGFiZWwuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgIGF3YWl0IGVuY2xvc2UoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgcHJlbWlzZXNWZXJpZnkgPSBhd2FpdCB0aGlzLnZlcmlmeVByZW1pc2VzKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGNvbmNsdXNpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVsKGxhYmVsKSB7XG4gICAgbGV0IGxhYmVsVmVyaWZpZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkoKTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGxldCBsYWJlbHNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBsYWJlbHMuLi5gKTtcblxuICAgIGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWZXJpZmllcyA9IHRoaXMudmVyaWZ5TGFiZWwobGFiZWwpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGxhYmVscy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJvb2YuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5jb25jbHVzaW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcmVtaXNlKHByZW1pc2UsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJlbWlzZVZlcmlmaWVzO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBwcmVtaXNlU3RyaW5nID0gcHJlbWlzZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgcHJlbWlzZVZlcmlmaWVzID0gYXdhaXQgcHJlbWlzZS52ZXJpZnkoY29udGV4dClcblxuICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHByZW1pc2U7ICAvLy8vXG5cbiAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAocHJlbWlzZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlbWlzZVZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJlbWlzZXMoY29udGV4dCkge1xuICAgIGxldCBwcmVtaXNlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJlbWlzZXMuLi5gKTtcblxuICAgIHByZW1pc2VzVmVyaWZ5ID0gYXdhaXQgYXN5bmNGb3J3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIGFzeW5jIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBwcmVtaXNlVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocHJlbWlzZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIHByZW1pc2VzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVtaXNlc1ZlcmlmeTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUNvbmNsdXNpb24oY29udGV4dCkge1xuICAgIGxldCBjb25jbHVzaW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbmNsdXNpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuY29uY2x1c2lvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uY2x1c2lvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb247XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGF3YWl0IGFzeW5jRXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBhc3luYyAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBhd2FpdCBwcmVtaXNlLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5yZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3QgcHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2U7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcztcblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSByZXZlcnNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpOyAvLy9cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYXdhaXQgYXN5bmNCYWNrd2FyZHNFdmVyeSh0aGlzLnByZW1pc2VzLCBhc3luYyAocHJlbWlzZSkgPT4ge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgcHJlbWlzZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhQcmVtaXNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IGF3YWl0IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMgPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbnRleHQuYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5O1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzVG9QcmVtaXNlc0pTT04odGhpcy5wcmVtaXNlcyksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTih0aGlzLmNvbmNsdXNpb24pLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSdWxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9vZiwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNFeHRyYWN0IiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNCYWNrd2FyZHNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlJ1bGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0UHJvb2YiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UnVsZU5vZGUiLCJnZXROb2RlIiwicnVsZU5vZGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsInNvbWUiLCJsYWJlbCIsImxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsInJ1bGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImVuY2xvc2UiLCJsYWJlbHNWZXJpZnkiLCJ2ZXJpZnlMYWJlbHMiLCJwcmVtaXNlc1ZlcmlmeSIsInZlcmlmeVByZW1pc2VzIiwiY29uY2x1c2lvblZlcmlmaWVzIiwidmVyaWZ5Q29uY2x1c2lvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsInJ1bGUiLCJhZGRSdWxlIiwiZGVidWciLCJ2ZXJpZnlMYWJlbCIsImxhYmVsVmVyaWZpZXMiLCJsYWJlbFN0cmluZyIsImV2ZXJ5Iiwic3RhdGVtZW50IiwiZ2V0U3RhdGVtZW50IiwidmVyaWZ5UHJlbWlzZSIsInByZW1pc2UiLCJwcmVtaXNlVmVyaWZpZXMiLCJwcmVtaXNlU3RyaW5nIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiYXNzaWduQXNzaWdubWVudHMiLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJjb25jbHVzaW9uU3RyaW5nIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbiIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwicHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5IiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMiLCJzdGVwVW5pZmllc1dpdGhQcmVtaXNlIiwidW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5Iiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJjb25jbHVzaW9uSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwianNvbiIsIm5hbWUiLCJmcm9tSlNPTiIsImxhYmVsc0Zyb21KU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBWUE7OztlQUFBOzs7MkJBVitCO2dDQUNnQjswQkFFeEI7eUJBQ0M7c0JBQ3FIO0FBRTdJLE1BQU0sRUFBRUEsT0FBTyxFQUFFLEdBQUdDLHlCQUFjLEVBQzVCLEVBQUVDLFlBQVksRUFBRUMsa0JBQWtCLEVBQUVDLG1CQUFtQixFQUFFLEdBQUdDLHFDQUFxQjtNQUV2RixXQUFlQyxJQUFBQSxnQkFBTSxFQUFDLE1BQU1DLGFBQWFDLHVCQUFPO0lBQzlDLFlBQVlDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsQ0FBRTtRQUN0RSxLQUFLLENBQUNOLFNBQVNDLFFBQVFDO1FBRXZCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsWUFBWTtRQUNWLE9BQU8s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