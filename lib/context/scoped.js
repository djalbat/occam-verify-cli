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
const _context = /*#__PURE__*/ _interop_require_default(require("../context"));
const _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { last } = _necessary.arrayUtilities;
class ScopedContext extends _context.default {
    constructor(context, variables, judgements, assignments, equivalences, subproofOrProofAssertions, metaLevelSubstitutions){
        super(context);
        this.variables = variables;
        this.judgements = judgements;
        this.assignments = assignments;
        this.equivalences = equivalences;
        this.subproofOrProofAssertions = subproofOrProofAssertions;
        this.metaLevelSubstitutions = metaLevelSubstitutions;
    }
    getVariables() {
        let variables;
        const context = this.getContext();
        variables = context.getVariables();
        variables = [
            ...this.variables,
            ...variables
        ];
        return variables;
    }
    getJudgements() {
        let judgements;
        const context = this.getContext();
        judgements = context.getJudgements();
        judgements = [
            ...this.judgements,
            ...judgements
        ];
        return judgements;
    }
    getAssignments() {
        return this.assignments;
    }
    getEquivalences() {
        let equivalences;
        let context;
        context = this.getContext();
        equivalences = context.getEquivalences();
        context = this; ///
        equivalences = this.equivalences.mergedWith(equivalences, context); ///
        return equivalences;
    }
    getSubproofOrProofAssertions() {
        let subproofOrProofAssertions;
        const context = this.getContext();
        subproofOrProofAssertions = context.getSubproofOrProofAssertions();
        subproofOrProofAssertions = [
            ...subproofOrProofAssertions,
            ...this.subproofOrProofAssertions
        ];
        return subproofOrProofAssertions;
    }
    getMetaLevelSubstitutions() {
        return this.metaLevelSubstitutions;
    }
    getProofAssertions() {
        const subproofOrProofAssertions = this.getSubproofOrProofAssertions(), proofAssertions = subproofOrProofAssertions.filter((subproofOrProofAssertion)=>{
            const subproofOrProofAssertionproofAssertion = subproofOrProofAssertion.isProofAssertion();
            if (subproofOrProofAssertionproofAssertion) {
                return true;
            }
        });
        return proofAssertions;
    }
    getLastStep() {
        let lastStep = null;
        const proofAssertions = this.getProofAssertions(), proofAssertionsLength = proofAssertions.length;
        if (proofAssertionsLength > 0) {
            const lastProofAssertion = last(proofAssertions);
            lastStep = lastProofAssertion; ///
        }
        return lastStep;
    }
    hasMetaLevelSubstitutions() {
        let metaLevelSubstitutions;
        if (this.metaLevelSubstitutions !== null) {
            metaLevelSubstitutions = true;
        } else {
            const context = this.getContext();
            metaLevelSubstitutions = context.hasMetaLevelSubstitutions();
        }
        return metaLevelSubstitutions;
    }
    addEquality(equality) {
        const context = this, equalityString = equality.getString();
        context.trace(`Adding the '${equalityString}' equality to the scoped context...`);
        const equalityRelfexive = equality.isReflexive();
        if (!equalityRelfexive) {
            const { Equivalence } = _elements.default, equivalence = Equivalence.fromEquality(equality, context);
            this.equivalences = this.equivalences.mergedWithEquivalence(equivalence, context);
            context.debug(`...added the '${equalityString}' equality to the scoped context.`);
        } else {
            context.debug(`The '${equalityString}' equality is reflexive and will not added to the scoped context.`);
        }
    }
    addVariable(variable) {
        const context = this, variableString = variable.getString();
        context.trace(`Adding the '${variableString}' variable to the scoped context...`);
        this.variables.push(variable);
        context.debug(`...added the '${variableString}' variable to the scoped context.`);
    }
    addJudgement(judgement) {
        const context = this, judgementString = judgement.getString();
        context.trace(`Adding the '${judgementString}' judgement to the scoped context...`);
        this.judgements.push(judgement);
        context.debug(`...added the '${judgementString}' judgement to the scoped context.`);
    }
    addAssignment(assignment) {
        this.assignments.push(assignment);
    }
    addSubproofOrProofAssertion(subproofOrProofAssertion) {
        const context = this, subproofOrProofAssertionString = subproofOrProofAssertion.getString();
        context.trace(`Adding the '${subproofOrProofAssertionString}' subproof or proof assertion to the scoped context...`);
        this.subproofOrProofAssertions.push(subproofOrProofAssertion);
        context.debug(`...added the '${subproofOrProofAssertionString}' subproof or proof assertion to the scoped context.`);
    }
    addMetaLevelSubstitution(metaLevelSubstitution) {
        if (this.metaLevelSubstitutions === null) {
            super.addMetaLevelSubstitution(metaLevelSubstitution);
            return;
        }
        const context = this, metaLevelSubstitutionA = metaLevelSubstitution, metaLevelSubstitutionString = metaLevelSubstitution.getString();
        context.trace(`Adding the '${metaLevelSubstitutionString}' meta-level substitution to the scoped context...`);
        const metaLevelSubstitutionB = this.metaLevelSubstitutions.find((metaLevelSubstitution)=>{
            const metaLevelSubstitutionB = metaLevelSubstitution, metaLevelSubstitutionAEqualToMetaLevelSubstitutionB = metaLevelSubstitutionA.isEqualTo(metaLevelSubstitutionB);
            if (metaLevelSubstitutionAEqualToMetaLevelSubstitutionB) {
                return true;
            }
        }) || null;
        if (metaLevelSubstitutionB !== null) {
            context.debug(`The '${metaLevelSubstitutionString}' meta-level substitution has already been added to the scoped context.`);
        } else {
            this.metaLevelSubstitutions.push(metaLevelSubstitution);
            context.debug(`...added the '${metaLevelSubstitutionString}' substitution to the scoped context.`);
        }
    }
    assignAssignments() {
        const context = this; ///
        this.assignments.forEach((assignment)=>{
            assignment(context);
        });
    }
    findEquivalenceByTerm(term) {
        return this.equivalences.findEquivalenceByTerm(term);
    }
    findJudgementByMetavariableName(metavariableName) {
        const judgements = this.getJudgements(), judgement = judgements.find((judgement)=>{
            const judgementMetavariableComparesToMetavariable = judgement.compareMetavariableName(metavariableName);
            if (judgementMetavariableComparesToMetavariable) {
                return true;
            }
        }) || null;
        return judgement;
    }
    findVariableByVariableIdentifier(variableIdentifier) {
        const variables = this.getVariables(), variable = variables.find((variable)=>{
            const variableComparesToVariableIdentifier = variable.compareVariableIdentifier(variableIdentifier);
            if (variableComparesToVariableIdentifier) {
                return true;
            }
        }) || null;
        return variable;
    }
    findMetaLevelSubstitutionByMetaLevelSubstitutionNode(metaLevelSubstitutionNode) {
        let metaLevelSubstitution;
        if (this.metaLevelSubstitutions === null) {
            metaLevelSubstitution = super.findMetaLevelSubstitutionByMetaLevelSubstitutionNode(metaLevelSubstitutionNode);
        } else {
            metaLevelSubstitution = this.metaLevelSubstitutions.find((metaLevelSubstitution)=>{
                const metaLevelSubstitutionNodeMatches = metaLevelSubstitution.matchMetaLevelSubstitutionNode(metaLevelSubstitutionNode);
                if (metaLevelSubstitutionNodeMatches) {
                    return true;
                }
            }) || null;
        }
        return metaLevelSubstitution;
    }
    isTermGrounded(term) {
        const context = this, equivalences = this.getEquivalences(), groundedTerms = [], definedVariables = [];
        equivalences.separateGroundedTermsAndDefinedVariables(groundedTerms, definedVariables, context);
        const termMatchesGroundedTerm = groundedTerms.some((groundedTerm)=>{
            const groundedTermNode = groundedTerm.getNode(), groundedTermNodeMatches = term.matchTermNode(groundedTermNode);
            if (groundedTermNodeMatches) {
                return true;
            }
        }), termGrounded = termMatchesGroundedTerm; ///
        return termGrounded;
    }
    isJudgementPresentByMetavariableName(metavariableName) {
        const judgement = this.findJudgementByMetavariableName(metavariableName), judgementPresent = judgement !== null;
        return judgementPresent;
    }
    isVariablePresentByVariableIdentifier(variableIdentifier) {
        const variable = this.findVariableByVariableIdentifier(variableIdentifier), variablePresent = variable !== null;
        return variablePresent;
    }
    compareTermAndPropertyRelation(term, propertyRelation) {
        const context = this, proofAssertions = this.getProofAssertions(), comparesToTermAndPropertyRelation = proofAssertions.some((proofAssertion)=>{
            const comparesToTermAndPropertyRelation = proofAssertion.compareTermAndPropertyRelation(term, propertyRelation, context);
            if (comparesToTermAndPropertyRelation) {
                return true;
            }
        });
        return comparesToTermAndPropertyRelation;
    }
    static fromMetaLevelSubstitutions(metaLevelSubstitutions, context) {
        const { Equivalences } = _elements.default, variables = [], judgements = [], assignments = [], equivalences = Equivalences.fromNothing(context), subproofOrProofAssertions = [], scopedContext = new ScopedContext(context, variables, judgements, assignments, equivalences, subproofOrProofAssertions, metaLevelSubstitutions);
        return scopedContext;
    }
}
const _default = ScopedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Njb3BlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFNjb3BlZENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBhc3NpZ25tZW50cywgZXF1aXZhbGVuY2VzLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzO1xuICAgIHRoaXMuYXNzaWdubWVudHMgPSBhc3NpZ25tZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICAgIHRoaXMubWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgbGV0IHZhcmlhYmxlcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICB2YXJpYWJsZXMgPSBbXG4gICAgICAuLi50aGlzLnZhcmlhYmxlcyxcbiAgICAgIC4uLnZhcmlhYmxlc1xuICAgIF07XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBsZXQganVkZ2VtZW50cztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBjb250ZXh0LmdldEp1ZGdlbWVudHMoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF1cblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzaWdubWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcztcblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gWyAgLy8vXG4gICAgICAuLi5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLFxuICAgICAgLi4udGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zXG4gICAgXTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YUxldmVsU3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhTGV2ZWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0UHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSB0aGlzLmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvbnMgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLmZpbHRlcigoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25wcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25wcm9vZkFzc2VydGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRMYXN0U3RlcCgpIHtcbiAgICBsZXQgbGFzdFN0ZXAgPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvbnNMZW5ndGggPSBwcm9vZkFzc2VydGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGxhc3RQcm9vZkFzc2VydGlvbiA9IGxhc3QocHJvb2ZBc3NlcnRpb25zKTtcblxuICAgICAgbGFzdFN0ZXAgPSBsYXN0UHJvb2ZBc3NlcnRpb247ICAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFN0ZXA7XG4gIH1cblxuICBoYXNNZXRhTGV2ZWxTdWJzdGl0dXRpb25zKCkge1xuICAgIGxldCBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zO1xuXG4gICAgaWYgKHRoaXMubWV0YUxldmVsU3Vic3RpdHV0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuaGFzTWV0YUxldmVsU3Vic3RpdHV0aW9ucygpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSBlcXVhbGl0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVsZmV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmICghZXF1YWxpdHlSZWxmZXhpdmUpIHtcbiAgICAgIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5mcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpO1xuXG4gICAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaXMgcmVmbGV4aXZlIGFuZCB3aWxsIG5vdCBhZGRlZCB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSBqdWRnZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIHRoaXMuYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIGFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMucHVzaChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRNZXRhTGV2ZWxTdWJzdGl0dXRpb24obWV0YUxldmVsU3Vic3RpdHV0aW9uKSB7XG4gICAgaWYgKHRoaXMubWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgc3VwZXIuYWRkTWV0YUxldmVsU3Vic3RpdHV0aW9uKG1ldGFMZXZlbFN1YnN0aXR1dGlvbik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uQSA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9uU3RyaW5nID0gbWV0YUxldmVsU3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHttZXRhTGV2ZWxTdWJzdGl0dXRpb25TdHJpbmd9JyBtZXRhLWxldmVsIHN1YnN0aXR1dGlvbiB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGFMZXZlbFN1YnN0aXR1dGlvbkIgPSB0aGlzLm1ldGFMZXZlbFN1YnN0aXR1dGlvbnMuZmluZCgobWV0YUxldmVsU3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBtZXRhTGV2ZWxTdWJzdGl0dXRpb25CID0gbWV0YUxldmVsU3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgIG1ldGFMZXZlbFN1YnN0aXR1dGlvbkFFcXVhbFRvTWV0YUxldmVsU3Vic3RpdHV0aW9uQiA9IG1ldGFMZXZlbFN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKG1ldGFMZXZlbFN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICBpZiAobWV0YUxldmVsU3Vic3RpdHV0aW9uQUVxdWFsVG9NZXRhTGV2ZWxTdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAobWV0YUxldmVsU3Vic3RpdHV0aW9uQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke21ldGFMZXZlbFN1YnN0aXR1dGlvblN0cmluZ30nIG1ldGEtbGV2ZWwgc3Vic3RpdHV0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGFMZXZlbFN1YnN0aXR1dGlvbnMucHVzaChtZXRhTGV2ZWxTdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7bWV0YUxldmVsU3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhc3NpZ25Bc3NpZ25tZW50cygpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICB0aGlzLmFzc2lnbm1lbnRzLmZvckVhY2goKGFzc2lnbm1lbnQpID0+IHtcbiAgICAgIGFzc2lnbm1lbnQoY29udGV4dCk7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkgeyByZXR1cm4gdGhpcy5lcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pOyB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZE1ldGFMZXZlbFN1YnN0aXR1dGlvbkJ5TWV0YUxldmVsU3Vic3RpdHV0aW9uTm9kZShtZXRhTGV2ZWxTdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgbGV0IG1ldGFMZXZlbFN1YnN0aXR1dGlvbjtcblxuICAgIGlmICh0aGlzLm1ldGFMZXZlbFN1YnN0aXR1dGlvbnMgPT09IG51bGwpIHtcbiAgICAgIG1ldGFMZXZlbFN1YnN0aXR1dGlvbiA9IHN1cGVyLmZpbmRNZXRhTGV2ZWxTdWJzdGl0dXRpb25CeU1ldGFMZXZlbFN1YnN0aXR1dGlvbk5vZGUobWV0YUxldmVsU3Vic3RpdHV0aW9uTm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1ldGFMZXZlbFN1YnN0aXR1dGlvbiA9IHRoaXMubWV0YUxldmVsU3Vic3RpdHV0aW9ucy5maW5kKChtZXRhTGV2ZWxTdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgbWV0YUxldmVsU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBtZXRhTGV2ZWxTdWJzdGl0dXRpb24ubWF0Y2hNZXRhTGV2ZWxTdWJzdGl0dXRpb25Ob2RlKG1ldGFMZXZlbFN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICAgIGlmIChtZXRhTGV2ZWxTdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGV2ZWxTdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1Rlcm1Hcm91bmRlZCh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCksXG4gICAgICAgICAgZ3JvdW5kZWRUZXJtcyA9IFtdLFxuICAgICAgICAgIGRlZmluZWRWYXJpYWJsZXMgPSBbXTtcblxuICAgIGVxdWl2YWxlbmNlcy5zZXBhcmF0ZUdyb3VuZGVkVGVybXNBbmREZWZpbmVkVmFyaWFibGVzKGdyb3VuZGVkVGVybXMsIGRlZmluZWRWYXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgY29uc3QgdGVybU1hdGNoZXNHcm91bmRlZFRlcm0gPSBncm91bmRlZFRlcm1zLnNvbWUoKGdyb3VuZGVkVGVybSkgPT4ge1xuICAgICAgICBjb25zdCBncm91bmRlZFRlcm1Ob2RlID0gZ3JvdW5kZWRUZXJtLmdldE5vZGUoKSxcbiAgICAgICAgICAgICAgZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUoZ3JvdW5kZWRUZXJtTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChncm91bmRlZFRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0ZXJtR3JvdW5kZWQgPSB0ZXJtTWF0Y2hlc0dyb3VuZGVkVGVybTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgY29tcGFyZVRlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uKHRlcm0sIHByb3BlcnR5UmVsYXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9vZkFzc2VydGlvbnMuc29tZSgocHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbiA9IHByb29mQXNzZXJ0aW9uLmNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGNvbXBhcmVzVG9UZXJtQW5kUHJvcGVydHlSZWxhdGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU1ldGFMZXZlbFN1YnN0aXR1dGlvbnMobWV0YUxldmVsU3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGNvbnN0IHsgRXF1aXZhbGVuY2VzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzaWdubWVudHMgPSBbXSxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoY29udGV4dCksXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHNjb3BlZENvbnRleHQgPSBuZXcgU2NvcGVkQ29udGV4dChjb250ZXh0LCB2YXJpYWJsZXMsIGp1ZGdlbWVudHMsIGFzc2lnbm1lbnRzLCBlcXVpdmFsZW5jZXMsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIG1ldGFMZXZlbFN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIHNjb3BlZENvbnRleHQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NvcGVkQ29udGV4dDsiXSwibmFtZXMiOlsibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiU2NvcGVkQ29udGV4dCIsIkNvbnRleHQiLCJjb250ZXh0IiwidmFyaWFibGVzIiwianVkZ2VtZW50cyIsImFzc2lnbm1lbnRzIiwiZXF1aXZhbGVuY2VzIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJnZXRWYXJpYWJsZXMiLCJnZXRDb250ZXh0IiwiZ2V0SnVkZ2VtZW50cyIsImdldEFzc2lnbm1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwibWVyZ2VkV2l0aCIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRNZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwiZ2V0UHJvb2ZBc3NlcnRpb25zIiwicHJvb2ZBc3NlcnRpb25zIiwiZmlsdGVyIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24iLCJpc1Byb29mQXNzZXJ0aW9uIiwiZ2V0TGFzdFN0ZXAiLCJsYXN0U3RlcCIsInByb29mQXNzZXJ0aW9uc0xlbmd0aCIsImxlbmd0aCIsImxhc3RQcm9vZkFzc2VydGlvbiIsImhhc01ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImVxdWFsaXR5UmVsZmV4aXZlIiwiaXNSZWZsZXhpdmUiLCJFcXVpdmFsZW5jZSIsImVsZW1lbnRzIiwiZXF1aXZhbGVuY2UiLCJmcm9tRXF1YWxpdHkiLCJtZXJnZWRXaXRoRXF1aXZhbGVuY2UiLCJkZWJ1ZyIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZVN0cmluZyIsInB1c2giLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRTdHJpbmciLCJhZGRBc3NpZ25tZW50IiwiYXNzaWdubWVudCIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZyIsImFkZE1ldGFMZXZlbFN1YnN0aXR1dGlvbiIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbiIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbkEiLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25TdHJpbmciLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25CIiwiZmluZCIsIm1ldGFMZXZlbFN1YnN0aXR1dGlvbkFFcXVhbFRvTWV0YUxldmVsU3Vic3RpdHV0aW9uQiIsImlzRXF1YWxUbyIsImFzc2lnbkFzc2lnbm1lbnRzIiwiZm9yRWFjaCIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInRlcm0iLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRNZXRhTGV2ZWxTdWJzdGl0dXRpb25CeU1ldGFMZXZlbFN1YnN0aXR1dGlvbk5vZGUiLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25Ob2RlIiwibWV0YUxldmVsU3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGFMZXZlbFN1YnN0aXR1dGlvbk5vZGUiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJnZXROb2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidGVybUdyb3VuZGVkIiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwianVkZ2VtZW50UHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJmcm9tTWV0YUxldmVsU3Vic3RpdHV0aW9ucyIsIkVxdWl2YWxlbmNlcyIsImZyb21Ob3RoaW5nIiwic2NvcGVkQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ1ZBOzs7ZUFBQTs7OzJCQTlVK0I7Z0VBRVg7aUVBQ0M7Ozs7OztBQUVyQixNQUFNLEVBQUVBLElBQUksRUFBRSxHQUFHQyx5QkFBYztBQUUv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