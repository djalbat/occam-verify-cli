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
const _breakPoint = require("../utilities/breakPoint");
const _json = require("../utilities/json");
const { reverse } = _necessary.arrayUtilities, { asyncExtract, asyncForwardsEvery, asyncBackwardsEvery } = _occamlanguages.asynchronousUtilities;
const _default = (0, _elements.define)(class Rule extends _occamlanguages.Element {
    constructor(context, string, node, breakPoint, proof, labels, premises, conclusion){
        super(context, string, node, breakPoint);
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
        const labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), premisesJSON = (0, _json.premisesToPremisesJSON)(this.premises), conclusionJSON = (0, _json.conclusionToConclusionJSON)(this.conclusion), string = this.getString();
        let breakPoint;
        breakPoint = this.getBreakPoint();
        const breakPointJSON = (0, _breakPoint.breakPointToBreakPointJSON)(breakPoint);
        breakPoint = breakPointJSON; ///
        const labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
            string,
            breakPoint,
            labels,
            premises,
            conclusion
        };
        return json;
    }
    static name = "Rule";
    static fromJSON(json, context) {
        const { string } = json, node = null, breakPoint = (0, _breakPoint.breakPointFromJSON)(json), labels = (0, _json.labelsFromJSON)(json, context), premises = (0, _json.premisesFromJSON)(json, context), conclusion = (0, _json.conclusionFromJSON)(json, context), proof = null, rule = new Rule(context, string, node, breakPoint, proof, labels, premises, conclusion);
        return rule;
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGVuY2xvc2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGJyZWFrUG9pbnRGcm9tSlNPTiwgYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2JyZWFrUG9pbnRcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLCBwcmVtaXNlc0Zyb21KU09OLCBjb25jbHVzaW9uRnJvbUpTT04sIGxhYmVsc1RvTGFiZWxzSlNPTiwgcHJlbWlzZXNUb1ByZW1pc2VzSlNPTiwgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlIH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNFeHRyYWN0LCBhc3luY0ZvcndhcmRzRXZlcnksIGFzeW5jQmFja3dhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJ1bGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBicmVha1BvaW50LCBwcm9vZiwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSwgYnJlYWtQb2ludCk7XG5cbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5wcmVtaXNlcyA9IHByZW1pc2VzO1xuICAgIHRoaXMuY29uY2x1c2lvbiA9IGNvbmNsdXNpb247XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldFJ1bGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBydWxlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeShjb250ZXh0KSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgYXdhaXQgZW5jbG9zZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoY29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgcHJlbWlzZXNWZXJpZnkgPSBhd2FpdCB0aGlzLnZlcmlmeVByZW1pc2VzKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGNvbmNsdXNpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgIGNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KSB7XG4gICAgbGV0IGxhYmVsVmVyaWZpZXM7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7bGFiZWxTdHJpbmd9JyBsYWJlbC4uLmApO1xuXG4gICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeSgpO1xuXG4gICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2xhYmVsU3RyaW5nfScgbGFiZWwuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoY29udGV4dCkge1xuICAgIGxldCBsYWJlbHNWZXJpZnk7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGxhYmVscy4uLmApO1xuXG4gICAgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZlcmlmaWVzID0gdGhpcy52ZXJpZnlMYWJlbChsYWJlbCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgbGFiZWxzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcm9vZi4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnByb29mLnZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcm9vZi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCkge1xuICAgIGxldCBwcmVtaXNlVmVyaWZpZXM7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSwgIC8vL1xuICAgICAgICAgIHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBwcmVtaXNlVmVyaWZpZXMgPSBhd2FpdCBwcmVtaXNlLnZlcmlmeShjb250ZXh0KVxuXG4gICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gcHJlbWlzZTsgIC8vLy9cblxuICAgICAgY29udGV4dC5hc3NpZ25Bc3NpZ25tZW50cygpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVtaXNlVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcmVtaXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IHByZW1pc2VzVmVyaWZ5O1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcmVtaXNlcy4uLmApO1xuXG4gICAgcHJlbWlzZXNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgYXN5bmMgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJlbWlzZShwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJlbWlzZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZW1pc2VzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KSB7XG4gICAgbGV0IGNvbmNsdXNpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuY29uY2x1c2lvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uY2x1c2lvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5jb25jbHVzaW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBjb25jbHVzaW9uVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeVN0ZXBXaXRoQ29uY2x1c2lvbihzdGVwLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBVbmlmaWVzV2l0aENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGVwU3RyaW5nID0gc3RlcC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25jbHVzaW9uU3RyaW5nID0gdGhpcy5jb25jbHVzaW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0ZXBVbmlmaWVzID0gdGhpcy5jb25jbHVzaW9uLnVuaWZ5U3RlcChzdGVwLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGVwVW5pZmllcykge1xuICAgICAgc3RlcFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0ZXBVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0ZXBTdHJpbmd9JyBzdGVwIHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBVbmlmaWVzV2l0aENvbmNsdXNpb247XG4gIH1cblxuICBhc3luYyB1bmlmeVN0ZXBBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0ZXAsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RlcEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gYXdhaXQgdGhpcy51bmlmeVN0ZXBXaXRoQ29uY2x1c2lvbihzdGVwLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcykge1xuICAgICAgICBjb25zdCBkZXJpdmVkU3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29udGV4dC5hcmVEZXJpdmVkU3Vic3RpdHV0aW9uc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgaWYgKGRlcml2ZWRTdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5O1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgcHJlbWlzZSwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlID0gZmFsc2U7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBhd2FpdCBhc3luY0V4dHJhY3Qoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgYXN5bmMgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gYXdhaXQgcHJlbWlzZS51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgY29udGV4dC5yZXNvbHZlRGVyaXZlZFN1YnN0aXR1dGlvbnMoKTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3QgcHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2U7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcztcblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSByZXZlcnNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpOyAvLy9cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYXdhaXQgYXN5bmNCYWNrd2FyZHNFdmVyeSh0aGlzLnByZW1pc2VzLCBhc3luYyAocHJlbWlzZSkgPT4ge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgcHJlbWlzZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhQcmVtaXNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzVG9QcmVtaXNlc0pTT04odGhpcy5wcmVtaXNlcyksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTih0aGlzLmNvbmNsdXNpb24pLFxuICAgICAgICAgIHN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBsZXQgYnJlYWtQb2ludDtcblxuICAgIGJyZWFrUG9pbnQgPSB0aGlzLmdldEJyZWFrUG9pbnQoKTtcblxuICAgIGNvbnN0IGJyZWFrUG9pbnRKU09OID0gYnJlYWtQb2ludFRvQnJlYWtQb2ludEpTT04oYnJlYWtQb2ludCk7XG5cbiAgICBicmVha1BvaW50ID0gYnJlYWtQb2ludEpTT047ICAvLy9cblxuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgICBicmVha1BvaW50LFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJ1bGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHsgc3RyaW5nIH0gPSBqc29uLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIGJyZWFrUG9pbnQgPSBicmVha1BvaW50RnJvbUpTT04oanNvbiksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGJyZWFrUG9pbnQsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJhc3luY0V4dHJhY3QiLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY0JhY2t3YXJkc0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiZGVmaW5lIiwiUnVsZSIsIkVsZW1lbnQiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImJyZWFrUG9pbnQiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0UHJvb2YiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UnVsZU5vZGUiLCJnZXROb2RlIiwicnVsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImJyZWFrIiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZW5jbG9zZSIsImxhYmVsc1ZlcmlmeSIsInZlcmlmeUxhYmVscyIsInByZW1pc2VzVmVyaWZ5IiwidmVyaWZ5UHJlbWlzZXMiLCJjb25jbHVzaW9uVmVyaWZpZXMiLCJ2ZXJpZnlDb25jbHVzaW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwicnVsZSIsImFkZFJ1bGUiLCJkZWJ1ZyIsInZlcmlmeUxhYmVsIiwibGFiZWxWZXJpZmllcyIsImxhYmVsU3RyaW5nIiwiZXZlcnkiLCJzdGF0ZW1lbnQiLCJnZXRTdGF0ZW1lbnQiLCJ2ZXJpZnlQcmVtaXNlIiwicHJlbWlzZSIsInByZW1pc2VWZXJpZmllcyIsInByZW1pc2VTdHJpbmciLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImNvbmNsdXNpb25TdHJpbmciLCJ1bmlmeVN0ZXBXaXRoQ29uY2x1c2lvbiIsInN0ZXAiLCJzdGVwVW5pZmllc1dpdGhDb25jbHVzaW9uIiwic3RlcFN0cmluZyIsInN0ZXBVbmlmaWVzIiwidW5pZnlTdGVwIiwidW5pZnlTdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGVwQW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5Iiwic3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMiLCJkZXJpdmVkU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlRGVyaXZlZFN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInJlc29sdmVEZXJpdmVkU3Vic3RpdHV0aW9ucyIsInByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN0ZXBVbmlmaWVzV2l0aFByZW1pc2UiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsImNvbmNsdXNpb25KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJnZXRCcmVha1BvaW50IiwiYnJlYWtQb2ludEpTT04iLCJicmVha1BvaW50VG9CcmVha1BvaW50SlNPTiIsImpzb24iLCJuYW1lIiwiZnJvbUpTT04iLCJicmVha1BvaW50RnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWFBOzs7ZUFBQTs7OzJCQVgrQjtnQ0FDZ0I7MEJBRXhCO3lCQUNDOzRCQUN1QztzQkFDOEU7QUFFN0ksTUFBTSxFQUFFQSxPQUFPLEVBQUUsR0FBR0MseUJBQWMsRUFDNUIsRUFBRUMsWUFBWSxFQUFFQyxrQkFBa0IsRUFBRUMsbUJBQW1CLEVBQUUsR0FBR0MscUNBQXFCO01BRXZGLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLENBQUU7UUFDbEYsS0FBSyxDQUFDUCxTQUFTQyxRQUFRQyxNQUFNQztRQUU3QixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO0lBQ3BCO0lBRUFDLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ0gsTUFBTTtJQUNwQjtJQUVBSSxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUNILFFBQVE7SUFDdEI7SUFFQUksV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDTixLQUFLO0lBQ25CO0lBRUFPLGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDSixVQUFVO0lBQ3hCO0lBRUFLLGNBQWM7UUFDWixNQUFNVixPQUFPLElBQUksQ0FBQ1csT0FBTyxJQUNuQkMsV0FBV1osTUFBTyxHQUFHO1FBRTNCLE9BQU9ZO0lBQ1Q7SUFFQUMsc0JBQXNCQyxnQkFBZ0IsRUFBRTtRQUN0QyxNQUFNQywwQkFBMEIsSUFBSSxDQUFDWixNQUFNLENBQUNhLElBQUksQ0FBQyxDQUFDQztZQUNoRCxNQUFNRiwwQkFBMEJFLE1BQU1KLHFCQUFxQixDQUFDQztZQUU1RCxJQUFJQyx5QkFBeUI7Z0JBQzNCLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE1BQU1HLE9BQU9wQixPQUFPLEVBQUU7UUFDcEIsSUFBSXFCLFdBQVc7UUFFZixNQUFNLElBQUksQ0FBQ0MsS0FBSyxDQUFDdEI7UUFFakIsTUFBTXVCLGFBQWEsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztRQUV4Q3hCLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxlQUFlLEVBQUVGLFdBQVcsU0FBUyxDQUFDO1FBRXJELE1BQU1HLElBQUFBLGdCQUFPLEVBQUMsT0FBTzFCO1lBQ25CLE1BQU0yQixlQUFlLElBQUksQ0FBQ0MsWUFBWSxDQUFDNUI7WUFFdkMsSUFBSTJCLGNBQWM7Z0JBQ2hCLE1BQU1FLGlCQUFpQixNQUFNLElBQUksQ0FBQ0MsY0FBYyxDQUFDOUI7Z0JBRWpELElBQUk2QixnQkFBZ0I7b0JBQ2xCLE1BQU1FLHFCQUFxQixNQUFNLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUNoQztvQkFFdkQsSUFBSStCLG9CQUFvQjt3QkFDdEIsTUFBTUUsZ0JBQWdCLE1BQU0sSUFBSSxDQUFDQyxXQUFXLENBQUNsQzt3QkFFN0MsSUFBSWlDLGVBQWU7NEJBQ2pCWixXQUFXO3dCQUNiO29CQUNGO2dCQUNGO1lBQ0Y7UUFDRixHQUFHckI7UUFFSCxJQUFJcUIsVUFBVTtZQUNaLE1BQU1jLE9BQU8sSUFBSSxFQUFHLEdBQUc7WUFFdkJuQyxRQUFRb0MsT0FBTyxDQUFDRDtZQUVoQm5DLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRWQsV0FBVyxPQUFPLENBQUM7UUFDdkQ7UUFFQSxPQUFPRjtJQUNUO0lBRUFpQixZQUFZbkIsS0FBSyxFQUFFbkIsT0FBTyxFQUFFO1FBQzFCLElBQUl1QztRQUVKLE1BQU1oQixhQUFhLElBQUksQ0FBQ0MsU0FBUyxJQUMzQmdCLGNBQWNyQixNQUFNSyxTQUFTO1FBRW5DeEIsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsV0FBVyxVQUFVLEVBQUVpQixZQUFZLFVBQVUsQ0FBQztRQUU5RUQsZ0JBQWdCcEIsTUFBTUMsTUFBTTtRQUU1QixJQUFJbUIsZUFBZTtZQUNqQnZDLFFBQVFxQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsRUFBRWQsV0FBVyxVQUFVLEVBQUVpQixZQUFZLFFBQVEsQ0FBQztRQUNoRjtRQUVBLE9BQU9EO0lBQ1Q7SUFFQVgsYUFBYTVCLE9BQU8sRUFBRTtRQUNwQixJQUFJMkI7UUFFSixNQUFNSixhQUFhLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7UUFFekN4QixRQUFReUIsS0FBSyxDQUFDLENBQUMsZUFBZSxFQUFFRixXQUFXLGtCQUFrQixDQUFDO1FBRTlESSxlQUFlLElBQUksQ0FBQ3RCLE1BQU0sQ0FBQ29DLEtBQUssQ0FBQyxDQUFDdEI7WUFDaEMsTUFBTW9CLGdCQUFnQixJQUFJLENBQUNELFdBQVcsQ0FBQ25CLE9BQU9uQjtZQUU5QyxJQUFJdUMsZUFBZTtnQkFDakIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxJQUFJWixjQUFjO1lBQ2hCM0IsUUFBUXFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFZCxXQUFXLGdCQUFnQixDQUFDO1FBQ2hFO1FBRUEsT0FBT0k7SUFDVDtJQUVBLE1BQU1PLFlBQVlsQyxPQUFPLEVBQUU7UUFDekIsSUFBSWlDO1FBRUosSUFBSSxJQUFJLENBQUM3QixLQUFLLEtBQUssTUFBTTtZQUN2QjZCLGdCQUFnQjtRQUNsQixPQUFPO1lBQ0wsTUFBTVYsYUFBYSxJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1lBRXpDeEIsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsV0FBVyxpQkFBaUIsQ0FBQztZQUU3RCxNQUFNbUIsWUFBWSxJQUFJLENBQUNuQyxVQUFVLENBQUNvQyxZQUFZO1lBRTlDVixnQkFBZ0IsTUFBTSxJQUFJLENBQUM3QixLQUFLLENBQUNnQixNQUFNLENBQUNzQixXQUFXMUM7WUFFbkQsSUFBSWlDLGVBQWU7Z0JBQ2pCakMsUUFBUXFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFZCxXQUFXLGVBQWUsQ0FBQztZQUMvRDtRQUNGO1FBRUEsT0FBT1U7SUFDVDtJQUVBLE1BQU1XLGNBQWNDLE9BQU8sRUFBRTdDLE9BQU8sRUFBRTtRQUNwQyxJQUFJOEM7UUFFSixNQUFNdkIsYUFBYSxJQUFJLENBQUNDLFNBQVMsSUFDM0J1QixnQkFBZ0JGLFFBQVFyQixTQUFTO1FBRXZDeEIsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsV0FBVyxVQUFVLEVBQUV3QixjQUFjLFlBQVksQ0FBQztRQUVsRkQsa0JBQWtCLE1BQU1ELFFBQVF6QixNQUFNLENBQUNwQjtRQUV2QyxJQUFJOEMsaUJBQWlCO1lBQ25CLE1BQU1FLDJCQUEyQkgsU0FBVSxJQUFJO1lBRS9DN0MsUUFBUWlELGlCQUFpQjtZQUV6QmpELFFBQVFrRCwyQkFBMkIsQ0FBQ0Y7UUFDdEM7UUFFQSxJQUFJRixpQkFBaUI7WUFDbkI5QyxRQUFRcUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLEVBQUVkLFdBQVcsVUFBVSxFQUFFd0IsY0FBYyxVQUFVLENBQUM7UUFDcEY7UUFFQSxPQUFPRDtJQUNUO0lBRUEsTUFBTWhCLGVBQWU5QixPQUFPLEVBQUU7UUFDNUIsSUFBSTZCO1FBRUosTUFBTU4sYUFBYSxJQUFJLENBQUNDLFNBQVMsSUFBSyxHQUFHO1FBRXpDeEIsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsV0FBVyxvQkFBb0IsQ0FBQztRQUVoRU0saUJBQWlCLE1BQU1uQyxtQkFBbUIsSUFBSSxDQUFDWSxRQUFRLEVBQUUsT0FBT3VDO1lBQzlELE1BQU1DLGtCQUFrQixNQUFNLElBQUksQ0FBQ0YsYUFBYSxDQUFDQyxTQUFTN0M7WUFFMUQsSUFBSThDLGlCQUFpQjtnQkFDbkIsT0FBTztZQUNUO1FBQ0Y7UUFFQSxJQUFJakIsZ0JBQWdCO1lBQ2xCN0IsUUFBUXFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFZCxXQUFXLGtCQUFrQixDQUFDO1FBQ2xFO1FBRUEsT0FBT007SUFDVDtJQUVBLE1BQU1HLGlCQUFpQmhDLE9BQU8sRUFBRTtRQUM5QixJQUFJK0I7UUFFSixNQUFNUixhQUFhLElBQUksQ0FBQ0MsU0FBUyxJQUMzQjJCLG1CQUFtQixJQUFJLENBQUM1QyxVQUFVLENBQUNpQixTQUFTO1FBRWxEeEIsUUFBUXlCLEtBQUssQ0FBQyxDQUFDLGVBQWUsRUFBRUYsV0FBVyxVQUFVLEVBQUU0QixpQkFBaUIsZUFBZSxDQUFDO1FBRXhGcEIscUJBQXFCLE1BQU0sSUFBSSxDQUFDeEIsVUFBVSxDQUFDYSxNQUFNLENBQUNwQjtRQUVsRCxJQUFJK0Isb0JBQW9CO1lBQ3RCL0IsUUFBUXFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFZCxXQUFXLFVBQVUsRUFBRTRCLGlCQUFpQixhQUFhLENBQUM7UUFDMUY7UUFFQSxPQUFPcEI7SUFDVDtJQUVBLE1BQU1xQix3QkFBd0JDLElBQUksRUFBRXJELE9BQU8sRUFBRTtRQUMzQyxJQUFJc0QsNEJBQTRCO1FBRWhDLE1BQU0sSUFBSSxDQUFDaEMsS0FBSyxDQUFDdEI7UUFFakIsTUFBTXVCLGFBQWEsSUFBSSxDQUFDQyxTQUFTLElBQzNCK0IsYUFBYUYsS0FBSzdCLFNBQVMsSUFDM0IyQixtQkFBbUIsSUFBSSxDQUFDNUMsVUFBVSxDQUFDaUIsU0FBUztRQUVsRHhCLFFBQVF5QixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU4QixXQUFXLGlCQUFpQixFQUFFaEMsV0FBVyxVQUFVLEVBQUU0QixpQkFBaUIsZUFBZSxDQUFDO1FBRXJILE1BQU1LLGNBQWMsSUFBSSxDQUFDakQsVUFBVSxDQUFDa0QsU0FBUyxDQUFDSixNQUFNckQ7UUFFcEQsSUFBSXdELGFBQWE7WUFDZkYsNEJBQTRCO1FBQzlCO1FBRUEsSUFBSUEsMkJBQTJCO1lBQzdCdEQsUUFBUXFDLEtBQUssQ0FBQyxDQUFDLGdCQUFnQixFQUFFa0IsV0FBVyxpQkFBaUIsRUFBRWhDLFdBQVcsVUFBVSxFQUFFNEIsaUJBQWlCLGFBQWEsQ0FBQztRQUN2SDtRQUVBLE9BQU9HO0lBQ1Q7SUFFQSxNQUFNSSxzQ0FBc0NMLElBQUksRUFBRU0seUJBQXlCLEVBQUUzRCxPQUFPLEVBQUU7UUFDcEYsSUFBSTRELHdDQUF3QztRQUU1QyxNQUFNQyxpQ0FBaUMsTUFBTSxJQUFJLENBQUNULHVCQUF1QixDQUFDQyxNQUFNckQ7UUFFaEYsSUFBSTZELGdDQUFnQztZQUNsQyxNQUFNQywrQ0FBK0MsTUFBTSxJQUFJLENBQUNDLDBDQUEwQyxDQUFDSiwyQkFBMkIzRDtZQUV0SSxJQUFJOEQsOENBQThDO2dCQUNoRCxNQUFNRSwrQkFBK0JoRSxRQUFRaUUsK0JBQStCO2dCQUU1RSxJQUFJRCw4QkFBOEI7b0JBQ2hDSix3Q0FBd0M7Z0JBQzFDO1lBQ0Y7UUFDRjtRQUVBLE9BQU9BO0lBQ1Q7SUFFQSxNQUFNTSwwQ0FBMENQLHlCQUF5QixFQUFFZCxPQUFPLEVBQUU3QyxPQUFPLEVBQUU7UUFDM0YsSUFBSW1FLDhDQUE4QztRQUVsRCxNQUFNLElBQUksQ0FBQzdDLEtBQUssQ0FBQ3RCO1FBRWpCLElBQUksQ0FBQ21FLDZDQUE2QztZQUNoRCxNQUFNbkIsMkJBQTJCLE1BQU12RCxhQUFha0UsMkJBQTJCLE9BQU9YO2dCQUNwRixNQUFNb0Isa0NBQWtDLE1BQU12QixRQUFRd0IsNkJBQTZCLENBQUNyQiwwQkFBMEJoRDtnQkFFOUcsSUFBSW9FLGlDQUFpQztvQkFDbkNwRSxRQUFRc0UsMkJBQTJCO29CQUVuQyxPQUFPO2dCQUNUO1lBQ0YsTUFBTTtZQUVOLElBQUl0Qiw2QkFBNkIsTUFBTTtnQkFDckNtQiw4Q0FBOEM7WUFDaEQ7UUFDRjtRQUVBLElBQUksQ0FBQ0EsNkNBQTZDO1lBQ2hELE1BQU1JLDhCQUE4QixNQUFNMUIsUUFBUTJCLGtCQUFrQixDQUFDeEU7WUFFckUsSUFBSXVFLDZCQUE2QjtnQkFDL0JKLDhDQUE4QztZQUNoRDtRQUNGO1FBRUEsT0FBT0E7SUFDVDtJQUVBLE1BQU1KLDJDQUEyQ0oseUJBQXlCLEVBQUUzRCxPQUFPLEVBQUU7UUFDbkYsSUFBSThEO1FBRUpILDRCQUE0QnBFLFFBQVFvRSw0QkFBNEIsR0FBRztRQUVuRUcsK0NBQStDLE1BQU1uRSxvQkFBb0IsSUFBSSxDQUFDVyxRQUFRLEVBQUUsT0FBT3VDO1lBQzdGLE1BQU00Qix5QkFBeUIsTUFBTSxJQUFJLENBQUNQLHlDQUF5QyxDQUFDUCwyQkFBMkJkLFNBQVM3QztZQUV4SCxJQUFJeUUsd0JBQXdCO2dCQUMxQixPQUFPO1lBQ1Q7UUFDRjtRQUVBLE9BQU9YO0lBQ1Q7SUFFQVksU0FBUztRQUNQLE1BQU1DLGFBQWFDLElBQUFBLHdCQUFrQixFQUFDLElBQUksQ0FBQ3ZFLE1BQU0sR0FDM0N3RSxlQUFlQyxJQUFBQSw0QkFBc0IsRUFBQyxJQUFJLENBQUN4RSxRQUFRLEdBQ25EeUUsaUJBQWlCQyxJQUFBQSxnQ0FBMEIsRUFBQyxJQUFJLENBQUN6RSxVQUFVLEdBQzNETixTQUFTLElBQUksQ0FBQ3VCLFNBQVM7UUFFN0IsSUFBSXJCO1FBRUpBLGFBQWEsSUFBSSxDQUFDOEUsYUFBYTtRQUUvQixNQUFNQyxpQkFBaUJDLElBQUFBLHNDQUEwQixFQUFDaEY7UUFFbERBLGFBQWErRSxnQkFBaUIsR0FBRztRQUVqQyxNQUFNN0UsU0FBU3NFLFlBQ1RyRSxXQUFXdUUsY0FDWHRFLGFBQWF3RSxnQkFDYkssT0FBTztZQUNMbkY7WUFDQUU7WUFDQUU7WUFDQUM7WUFDQUM7UUFDRjtRQUVOLE9BQU82RTtJQUNUO0lBRUEsT0FBT0MsT0FBTyxPQUFPO0lBRXJCLE9BQU9DLFNBQVNGLElBQUksRUFBRXBGLE9BQU8sRUFBRTtRQUM3QixNQUFNLEVBQUVDLE1BQU0sRUFBRSxHQUFHbUYsTUFDYmxGLE9BQU8sTUFDUEMsYUFBYW9GLElBQUFBLDhCQUFrQixFQUFDSCxPQUNoQy9FLFNBQVNtRixJQUFBQSxvQkFBYyxFQUFDSixNQUFNcEYsVUFDOUJNLFdBQVdtRixJQUFBQSxzQkFBZ0IsRUFBQ0wsTUFBTXBGLFVBQ2xDTyxhQUFhbUYsSUFBQUEsd0JBQWtCLEVBQUNOLE1BQU1wRixVQUN0Q0ksUUFBUSxNQUNSK0IsT0FBTyxJQUFJckMsS0FBS0UsU0FBU0MsUUFBUUMsTUFBTUMsWUFBWUMsT0FBT0MsUUFBUUMsVUFBVUM7UUFFbEYsT0FBTzRCO0lBQ1Q7QUFDRiJ9