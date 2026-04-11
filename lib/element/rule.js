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
    constructor(context, string, node, lineIndex, proof, labels, premises, conclusion){
        super(context, string, node, lineIndex);
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
    async verify(context) {
        let verifies = false;
        await this.break(context);
        const ruleString = this.getString(); ///
        context.trace(`Verifying the '${ruleString}' rule...`);
        await (0, _context.enclose)(async (context)=>{
            const labelsVerify = this.verifyLabels(context);
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
    verifyLabel(label, context) {
        let labelVerifies;
        const ruleString = this.getString(), labelString = label.getString();
        context.trace(`Verifying the '${ruleString}' rule's '${labelString}' label...`);
        labelVerifies = label.verify();
        if (labelVerifies) {
            context.debug(`...verified the '${ruleString}' rule's '${labelString}' label.`);
        }
        return labelVerifies;
    }
    verifyLabels(context) {
        let labelsVerify;
        const ruleString = this.getString(); ///
        context.trace(`Verifying the '${ruleString}' rule's labels...`);
        labelsVerify = this.labels.every((label)=>{
            const labelVerifies = this.verifyLabel(label, context);
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
                const derivedSubstitutionsResolved = context.areDerivedSubstitutionsResolved();
                if (derivedSubstitutionsResolved) {
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
                    context.resolveDerivedSubstitutions();
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
        const labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), premisesJSON = (0, _json.premisesToPremisesJSON)(this.premises), conclusionJSON = (0, _json.conclusionToConclusionJSON)(this.conclusion), string = this.getString(), lineIndex = this.getLineIndex(), labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
            string,
            lineIndex,
            labels,
            premises,
            conclusion
        };
        return json;
    }
    static name = "Rule";
    static fromJSON(json, context) {
        const { string, lineIndex } = json, node = null, proof = null, labels = (0, _json.labelsFromJSON)(json, context), premises = (0, _json.premisesFromJSON)(json, context), conclusion = (0, _json.conclusionFromJSON)(json, context), rule = new Rule(context, string, node, lineIndex, proof, labels, premises, conclusion);
        return rule;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVuY2xvc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLCBwcmVtaXNlc0Zyb21KU09OLCBjb25jbHVzaW9uRnJvbUpTT04sIGxhYmVsc1RvTGFiZWxzSlNPTiwgcHJlbWlzZXNUb1ByZW1pc2VzSlNPTiwgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNFeHRyYWN0LCBhc3luY0ZvcndhcmRzRXZlcnksIGFzeW5jQmFja3dhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJ1bGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFByZW1pc2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZW1pc2VzO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRSdWxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcnVsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoY29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgIGF3YWl0IGVuY2xvc2UoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VzVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlQcmVtaXNlcyhjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJlbWlzZXNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUNvbmNsdXNpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBydWxlID0gdGhpczsgIC8vL1xuXG4gICAgICBjb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbChsYWJlbCwgY29udGV4dCkge1xuICAgIGxldCBsYWJlbFZlcmlmaWVzO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuLi5gKTtcblxuICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkoKTtcblxuICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtsYWJlbFN0cmluZ30nIGxhYmVsLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbFZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKGNvbnRleHQpIHtcbiAgICBsZXQgbGFiZWxzVmVyaWZ5O1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBsYWJlbHMuLi5gKTtcblxuICAgIGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWZXJpZmllcyA9IHRoaXMudmVyaWZ5TGFiZWwobGFiZWwsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGxhYmVscy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJvb2YuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5jb25jbHVzaW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcmVtaXNlKHByZW1pc2UsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJlbWlzZVZlcmlmaWVzO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksICAvLy9cbiAgICAgICAgICBwcmVtaXNlU3RyaW5nID0gcHJlbWlzZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS4uLmApO1xuXG4gICAgcHJlbWlzZVZlcmlmaWVzID0gYXdhaXQgcHJlbWlzZS52ZXJpZnkoY29udGV4dClcblxuICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHByZW1pc2U7ICAvLy8vXG5cbiAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcbiAgICB9XG5cbiAgICBpZiAocHJlbWlzZVZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtwcmVtaXNlU3RyaW5nfScgcHJlbWlzZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlbWlzZVZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJlbWlzZXMoY29udGV4dCkge1xuICAgIGxldCBwcmVtaXNlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJlbWlzZXMuLi5gKTtcblxuICAgIHByZW1pc2VzVmVyaWZ5ID0gYXdhaXQgYXN5bmNGb3J3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIGFzeW5jIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBwcmVtaXNlVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAocHJlbWlzZXNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIHByZW1pc2VzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVtaXNlc1ZlcmlmeTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUNvbmNsdXNpb24oY29udGV4dCkge1xuICAgIGxldCBjb25jbHVzaW9uVmVyaWZpZXM7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbmNsdXNpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuY29uY2x1c2lvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uY2x1c2lvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdGVwV2l0aENvbmNsdXNpb24oc3RlcCwgY29udGV4dCkge1xuICAgIGxldCBzdGVwVW5pZmllc1dpdGhDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RlcFN0cmluZyA9IHN0ZXAuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuY29uY2x1c2lvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGVwVW5pZmllcyA9IHRoaXMuY29uY2x1c2lvbi51bmlmeVN0ZXAoc3RlcCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RlcFVuaWZpZXMpIHtcbiAgICAgIHN0ZXBVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGVwVW5pZmllc1dpdGhDb25jbHVzaW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGVwU3RyaW5nfScgc3RlcCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGVwVW5pZmllc1dpdGhDb25jbHVzaW9uO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGVwLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IGF3YWl0IHRoaXMudW5pZnlTdGVwV2l0aENvbmNsdXNpb24oc3RlcCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMpIHtcbiAgICAgICAgY29uc3QgZGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbnRleHQuYXJlRGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmIChkZXJpdmVkU3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHByZW1pc2UsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IGZhbHNlO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gYXdhaXQgYXN5bmNFeHRyYWN0KHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGFzeW5jIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IGF3YWl0IHByZW1pc2UudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgIGNvbnRleHQucmVzb2x2ZURlcml2ZWRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IHByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSA9IGF3YWl0IHByZW1pc2UudW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXM7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gcmV2ZXJzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTsgLy8vXG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyA9IGF3YWl0IGFzeW5jQmFja3dhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgYXN5bmMgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UgPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHByZW1pc2UsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHRoaXMucHJlbWlzZXMpLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04odGhpcy5jb25jbHVzaW9uKSxcbiAgICAgICAgICBzdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IHRoaXMuZ2V0TGluZUluZGV4KCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIGxpbmVJbmRleCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSdWxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IHN0cmluZywgbGluZUluZGV4IH0gPSBqc29uLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsaW5lSW5kZXgsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJhc3luY0V4dHJhY3QiLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY0JhY2t3YXJkc0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiUnVsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxpbmVJbmRleCIsInByb29mIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRQcm9vZiIsImdldENvbmNsdXNpb24iLCJnZXRSdWxlTm9kZSIsImdldE5vZGUiLCJydWxlTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInZlcmlmeSIsInZlcmlmaWVzIiwiYnJlYWsiLCJydWxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJlbmNsb3NlIiwibGFiZWxzVmVyaWZ5IiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXNWZXJpZnkiLCJ2ZXJpZnlQcmVtaXNlcyIsImNvbmNsdXNpb25WZXJpZmllcyIsInZlcmlmeUNvbmNsdXNpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJydWxlIiwiYWRkUnVsZSIsImRlYnVnIiwidmVyaWZ5TGFiZWwiLCJsYWJlbFZlcmlmaWVzIiwibGFiZWxTdHJpbmciLCJldmVyeSIsInN0YXRlbWVudCIsImdldFN0YXRlbWVudCIsInZlcmlmeVByZW1pc2UiLCJwcmVtaXNlIiwicHJlbWlzZVZlcmlmaWVzIiwicHJlbWlzZVN0cmluZyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwiY29uY2x1c2lvblN0cmluZyIsInVuaWZ5U3RlcFdpdGhDb25jbHVzaW9uIiwic3RlcCIsInN0ZXBVbmlmaWVzV2l0aENvbmNsdXNpb24iLCJzdGVwU3RyaW5nIiwic3RlcFVuaWZpZXMiLCJ1bmlmeVN0ZXAiLCJ1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyIsImRlcml2ZWRTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVEZXJpdmVkU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2UiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwicmVzb2x2ZURlcml2ZWRTdWJzdGl0dXRpb25zIiwicHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcFVuaWZpZXNXaXRoUHJlbWlzZSIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwiY29uY2x1c2lvbkpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImdldExpbmVJbmRleCIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQVlBOzs7ZUFBQTs7OzJCQVYrQjtnQ0FDZ0I7MEJBRXhCO3lCQUNDO3NCQUNxSDtBQUU3SSxNQUFNLEVBQUVBLE9BQU8sRUFBRSxHQUFHQyx5QkFBYyxFQUM1QixFQUFFQyxZQUFZLEVBQUVDLGtCQUFrQixFQUFFQyxtQkFBbUIsRUFBRSxHQUFHQyxxQ0FBcUI7TUFFdkYsV0FBZUMsSUFBQUEsZ0JBQU0sRUFBQyxNQUFNQyxhQUFhQyx1QkFBTztJQUM5QyxZQUFZQyxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsQ0FBRTtRQUNqRixLQUFLLENBQUNQLFNBQVNDLFFBQVFDLE1BQU1DO1FBRTdCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7SUFDcEI7SUFFQUMsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDSCxNQUFNO0lBQ3BCO0lBRUFJLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQ0gsUUFBUTtJQUN0QjtJQUVBSSxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNOLEtBQUs7SUFDbkI7SUFFQU8sZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNKLFVBQVU7SUFDeEI7SUFFQUssY0FBYztRQUNaLE1BQU1WLE9BQU8sSUFBSSxDQUFDVyxPQUFPLElBQ25CQyxXQUFXWixNQUFPLEdBQUc7UUFFM0IsT0FBT1k7SUFDVDtJQUVBQyxzQkFBc0JDLGdCQUFnQixFQUFFO1FBQ3RDLE1BQU1DLDBCQUEwQixJQUFJLENBQUNaLE1BQU0sQ0FBQ2EsSUFBSSxDQUFDLENB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