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
    matchMetavariableNode(metavariableNode) {
        const metavariableNodeMatches = this.labels.some((label)=>{
            const metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                return true;
            }
        });
        return metavariableNodeMatches;
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
    async unifyStepWithConclusion(step, context) {
        let stepUnifiesWithConclusion = false;
        await this.break(context);
        const ruleString = this.getString(), stepString = step.getString(), conclusionString = this.conclusion.getString();
        context.trace(`Unifying the '${stepString}' step with the '${ruleString}' rule's '${conclusionString}' conclusion...`);
        const stepUnifies = this.conclusion.unifyStep(step, context);
        if (stepUnifies) {
            stepUnifiesWithConclusion = true;
        }
        if (stepUnifiesWithConclusion) {
            context.debug(`...unified the '${stepString}' step with the '${ruleString}' rule's '${conclusionString}' conclusion.`);
        }
        return stepUnifiesWithConclusion;
    }
    async unifyStepAndSubproofOrProofAssertions(step, subproofOrProofAssertions, context) {
        let stepAndSubproofOrProofAssertionsUnify = false;
        const statementUnifiesWithConclusion = await this.unifyStepWithConclusion(step, context);
        if (statementUnifiesWithConclusion) {
            const subproofOrProofAssertionsUnifiesWithPremises = await this.unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, context);
            if (subproofOrProofAssertionsUnifiesWithPremises) {
                const substitutionsResolved = context.areSubstitutionsResolved();
                if (substitutionsResolved) {
                    stepAndSubproofOrProofAssertionsUnify = true;
                }
            }
        }
        return stepAndSubproofOrProofAssertionsUnify;
    }
    async unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, context) {
        let subproofOrProofAssertionsUnifiesWithPremise = false;
        await this.break(context);
        if (!subproofOrProofAssertionsUnifiesWithPremise) {
            const subproofOrProofAssertion = await asyncExtract(subproofOrProofAssertions, async (subproofOrProofAssertion)=>{
                const subproofOrProofAssertionUnifies = await premise.unifySubproofOrProofAssertion(subproofOrProofAssertion, context);
                if (subproofOrProofAssertionUnifies) {
                    context.resolveSubstitutions();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVuY2xvc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLCBwcmVtaXNlc0Zyb21KU09OLCBjb25jbHVzaW9uRnJvbUpTT04sIGxhYmVsc1RvTGFiZWxzSlNPTiwgcHJlbWlzZXNUb1ByZW1pc2VzSlNPTiwgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNFeHRyYWN0LCBhc3luY0ZvcndhcmRzRXZlcnksIGFzeW5jQmFja3dhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJ1bGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9vZiwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5wcmVtaXNlcyA9IHByZW1pc2VzO1xuICAgIHRoaXMuY29uY2x1c2lvbiA9IGNvbmNsdXNpb247XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldFJ1bGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBydWxlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBhd2FpdCBlbmNsb3NlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VzVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlQcmVtaXNlcyhjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJlbWlzZXNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUNvbmNsdXNpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBydWxlID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbChsYWJlbCkge1xuICAgIGxldCBsYWJlbFZlcmlmaWVzO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLi4uYCk7XG5cbiAgICBsYWJlbFZlcmlmaWVzID0gbGFiZWwudmVyaWZ5KCk7XG5cbiAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBsZXQgbGFiZWxzVmVyaWZ5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgbGFiZWxzLi4uYCk7XG5cbiAgICBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUxhYmVsKGxhYmVsKTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBsYWJlbHMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIHByb29mLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuY29uY2x1c2lvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMucHJvb2YudmVyaWZ5KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIHByb29mLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJlbWlzZShwcmVtaXNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHByZW1pc2VWZXJpZmllcztcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZVN0cmluZyA9IHByZW1pc2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuLi5gKTtcblxuICAgIHByZW1pc2VWZXJpZmllcyA9IGF3YWl0IHByZW1pc2UudmVyaWZ5KGNvbnRleHQpXG5cbiAgICBpZiAocHJlbWlzZVZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBwcmVtaXNlOyAgLy8vL1xuXG4gICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZW1pc2VWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByZW1pc2VzKGNvbnRleHQpIHtcbiAgICBsZXQgcHJlbWlzZXNWZXJpZnk7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIHByZW1pc2VzLi4uYCk7XG5cbiAgICBwcmVtaXNlc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRm9yd2FyZHNFdmVyeSh0aGlzLnByZW1pc2VzLCBhc3luYyAocHJlbWlzZSkgPT4ge1xuICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcmVtaXNlKHByZW1pc2UsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJlbWlzZVZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHByZW1pc2VzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcmVtaXNlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlbWlzZXNWZXJpZnk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpIHtcbiAgICBsZXQgY29uY2x1c2lvblZlcmlmaWVzO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uU3RyaW5nID0gdGhpcy5jb25jbHVzaW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBjb25jbHVzaW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLmNvbmNsdXNpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbmNsdXNpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RlcFdpdGhDb25jbHVzaW9uKHN0ZXAsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0ZXBTdHJpbmcgPSBzdGVwLmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RlcFVuaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udW5pZnlTdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0ZXBVbmlmaWVzKSB7XG4gICAgICBzdGVwVW5pZmllc1dpdGhDb25jbHVzaW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RlcFVuaWZpZXNXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RlcFN0cmluZ30nIHN0ZXAgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcFVuaWZpZXNXaXRoQ29uY2x1c2lvbjtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RlcCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSBhd2FpdCB0aGlzLnVuaWZ5U3RlcFdpdGhDb25jbHVzaW9uKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMgPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbnRleHQuYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnk7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGF3YWl0IGFzeW5jRXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBhc3luYyAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBhd2FpdCBwcmVtaXNlLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LnJlc29sdmVTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IHByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSA9IGF3YWl0IHByZW1pc2UudW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXM7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gcmV2ZXJzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTsgLy8vXG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyA9IGF3YWl0IGFzeW5jQmFja3dhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgYXN5bmMgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UgPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHByZW1pc2UsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHRoaXMucHJlbWlzZXMpLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04odGhpcy5jb25jbHVzaW9uKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUnVsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IG51bGwsXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInJldmVyc2UiLCJhcnJheVV0aWxpdGllcyIsImFzeW5jRXh0cmFjdCIsImFzeW5jRm9yd2FyZHNFdmVyeSIsImFzeW5jQmFja3dhcmRzRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJkZWZpbmUiLCJSdWxlIiwiRWxlbWVudCIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicHJvb2YiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldFByb29mIiwiZ2V0Q29uY2x1c2lvbiIsImdldFJ1bGVOb2RlIiwiZ2V0Tm9kZSIsInJ1bGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJydWxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJlbmNsb3NlIiwibGFiZWxzVmVyaWZ5IiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXNWZXJpZnkiLCJ2ZXJpZnlQcmVtaXNlcyIsImNvbmNsdXNpb25WZXJpZmllcyIsInZlcmlmeUNvbmNsdXNpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJydWxlIiwiYWRkUnVsZSIsImRlYnVnIiwidmVyaWZ5TGFiZWwiLCJsYWJlbFZlcmlmaWVzIiwibGFiZWxTdHJpbmciLCJldmVyeSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInZlcmlmeVByZW1pc2UiLCJwcmVtaXNlIiwicHJlbWlzZVZlcmlmaWVzIiwicHJlbWlzZVN0cmluZyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiY29uY2x1c2lvblN0cmluZyIsInVuaWZ5U3RlcFdpdGhDb25jbHVzaW9uIiwic3RlcCIsInN0ZXBVbmlmaWVzV2l0aENvbmNsdXNpb24iLCJzdGVwU3RyaW5nIiwic3RlcFVuaWZpZXMiLCJ1bmlmeVN0ZXAiLCJ1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwicHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcFVuaWZpZXNXaXRoUHJlbWlzZSIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwiY29uY2x1c2lvbkpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJjb25jbHVzaW9uRnJvbUpTT04i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