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
    verifyLabels() {
        let labelsVerify;
        const context = this.getContext(), ruleString = this.getString(); ///
        context.trace(`Verifying the '${ruleString}' rule's labels...`);
        labelsVerify = this.labels.every((label)=>{
            const nameOnly = true, labelVerifies = label.verify(nameOnly);
            if (labelVerifies) {
                return true;
            }
        });
        if (labelsVerify) {
            context.debug(`...verified the '${ruleString}' rule's labels.`);
        }
        return labelsVerify;
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
            const rule = this;
            context.addRule(rule);
            context.debug(`...verified the '${ruleString}' rule.`);
        }
        return verifies;
    }
    async verifyProof(context) {
        let proofVerifies;
        if (this.proof === null) {
            proofVerifies = true;
        } else {
            const ruleString = this.getString(); ///
            context.trace(`Verifying the '${ruleString}' rule's proof...`);
            const statement = this.conclusion.getStatement();
            proofVerifies = this.proof.verify(statement, context);
            if (proofVerifies) {
                context.debug(`...verified the '${ruleString}' rule's proof.`);
            }
        }
        return proofVerifies;
    }
    async verifyPremises(context) {
        let premisesVerify;
        const ruleString = this.getString(); ///
        context.trace(`Verifying the '${ruleString}' rule's premises...`);
        premisesVerify = await asyncForwardsEvery(this.premises, async (premise)=>{
            const premiseVerifies = await premise.verify(context);
            if (premiseVerifies) {
                const subproofOrProofAssertion = premise; ////
                context.assignAssignments();
                context.addSubproofOrProofAssertion(subproofOrProofAssertion);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGFzeW5jU2NvcGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLCBwcmVtaXNlc0Zyb21KU09OLCBjb25jbHVzaW9uRnJvbUpTT04sIGxhYmVsc1RvTGFiZWxzSlNPTiwgcHJlbWlzZXNUb1ByZW1pc2VzSlNPTiwgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlLCBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNGb3J3YXJkc0V2ZXJ5LCBhc3luY0JhY2t3YXJkc0V2ZXJ5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSdWxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFByZW1pc2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZW1pc2VzO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRSdWxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcnVsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxhYmVsLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBsZXQgbGFiZWxzVmVyaWZ5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgbGFiZWxzLi4uYCk7XG5cbiAgICBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGxhYmVscy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuY29uY2x1c2lvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuY29uY2x1c2lvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbjtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBhd2FpdCBhc3luY1Njb3BlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VzVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlQcmVtaXNlcyhjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJlbWlzZXNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUNvbmNsdXNpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBydWxlID0gdGhpcztcblxuICAgICAgY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJvb2YuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5jb25jbHVzaW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcmVtaXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IHByZW1pc2VzVmVyaWZ5O1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcmVtaXNlcy4uLmApO1xuXG4gICAgcHJlbWlzZXNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgYXN5bmMgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IGF3YWl0IHByZW1pc2UudmVyaWZ5KGNvbnRleHQpXG5cbiAgICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gcHJlbWlzZTsgIC8vLy9cblxuICAgICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJlbWlzZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZW1pc2VzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KSB7XG4gICAgbGV0IGNvbmNsdXNpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uY2x1c2lvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5jb25jbHVzaW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb250ZXh0LmFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHJldmVyc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyk7IC8vL1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMgPSBhc3luY0JhY2t3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIGFzeW5jIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBzdGVwVW5pZmllc1dpdGhQcmVtaXNlID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSBmYWxzZTtcblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gZXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBwcmVtaXNlLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5yZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3QgcHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2U7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTih0aGlzLnByZW1pc2VzKSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKHRoaXMuY29uY2x1c2lvbiksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJ1bGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNCYWNrd2FyZHNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlJ1bGUiLCJFbGVtZW50IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0UHJvb2YiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UnVsZU5vZGUiLCJnZXROb2RlIiwicnVsZU5vZGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsInNvbWUiLCJsYWJlbCIsImxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJ2ZXJpZnlMYWJlbHMiLCJsYWJlbHNWZXJpZnkiLCJnZXRDb250ZXh0IiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZXZlcnkiLCJuYW1lT25seSIsImxhYmVsVmVyaWZpZXMiLCJ2ZXJpZnkiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJjb25jbHVzaW9uU3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidmVyaWZpZXMiLCJicmVhayIsImFzeW5jU2NvcGUiLCJwcmVtaXNlc1ZlcmlmeSIsInZlcmlmeVByZW1pc2VzIiwiY29uY2x1c2lvblZlcmlmaWVzIiwidmVyaWZ5Q29uY2x1c2lvbiIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsInJ1bGUiLCJhZGRSdWxlIiwiZ2V0U3RhdGVtZW50IiwicHJlbWlzZSIsInByZW1pc2VWZXJpZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwic3RlcFVuaWZpZXNXaXRoUHJlbWlzZSIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwicmVzb2x2ZVN1YnN0aXR1dGlvbnMiLCJwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsImNvbmNsdXNpb25KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJqc29uIiwibmFtZSIsImZyb21KU09OIiwibGFiZWxzRnJvbUpTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwiY29uY2x1c2lvbkZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFZQTs7O2VBQUE7OzsyQkFWK0I7Z0NBQ2dCOzBCQUV4Qjt5QkFDSTtzQkFDa0g7QUFFN0ksTUFBTSxFQUFFQSxPQUFPLEVBQUVDLE9BQU8sRUFBRSxHQUFHQyx5QkFBYyxFQUNyQyxFQUFFQyxrQkFBa0IsRUFBRUMsbUJBQW1CLEVBQUUsR0FBR0MscUNBQXFCO01BRXpFLFdBQWVDLElBQUFBLGdCQUFNLEVBQUMsTUFBTUMsYUFBYUMsdUJBQU87SUFDOUMsWUFBWUMsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxDQUFFO1FBQ3RFLEtBQUssQ0FBQ04sU0FBU0MsUUFBUUM7UUFFdkIsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtJQUNwQjtJQUVBQyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNILE1BQU07SUFDcEI7SUFFQUksY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDSCxRQUFRO0lBQ3RCO0lBRUFJLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ04sS0FBSztJQUNuQjtJQUVBTyxnQkFBZ0I7UUFDZCxPQUFPLElBQUksQ0FBQ0osVUFBVTtJQUN4QjtJQUVBSyxjQUFjO1FBQ1osTUFBTVQsT0FBTyxJQUFJLENBQUNVLE9BQU8sSUFDbkJDLFdBQVdYLE1BQU8sR0FBRztRQUUzQixPQUFPVztJQUNUO0lBRUFDLHdCQUF3QkMsZ0JBQWdCLEVBQUU7UUFDeEMsTUFBTUMsNkJBQTZCLElBQUksQ0FBQ1osTUFBTSxDQUFDYSxJQUFJLENBQUMsQ0FBQ0M7WUFDbkQsTUFBTUMsa0NB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