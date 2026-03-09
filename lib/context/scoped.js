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
    constructor(context, variables, judgements, assignments, equivalences, substitutions, subproofOrProofAssertions){
        super(context);
        this.variables = variables;
        this.judgements = judgements;
        this.assignments = assignments;
        this.equivalences = equivalences;
        this.substitutions = substitutions;
        this.subproofOrProofAssertions = subproofOrProofAssertions;
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
    getSubstitutions() {
        return this.substitutions;
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
    getProofAssertions() {
        const subproofOrProofAssertions = this.getSubproofOrProofAssertions(), proofAssertions = subproofOrProofAssertions.filter((subproofOrProofAssertion)=>{
            const subproofOrProofAssertionproofAssertion = subproofOrProofAssertion.isProofAssertion();
            if (subproofOrProofAssertionproofAssertion) {
                return true;
            }
        });
        return proofAssertions;
    }
    getLastProofAssertion() {
        let lastProofAssertion = null;
        const proofAssertions = this.getProofAssertions(), proofAssertionsLength = proofAssertions.length;
        if (proofAssertionsLength > 0) {
            lastProofAssertion = last(proofAssertions);
        }
        return lastProofAssertion;
    }
    hasMetaLevelSubstitutions() {
        let metaLevelSubstitutions;
        if (this.substitutions !== null) {
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
    addSubstitution(substitution, scoped = true) {
        if (this.substitutions === null) {
            const context = this.getContext();
            context.addSubstitution(substitution);
            return;
        }
        const context = this, substitutionA = substitution, substitutionString = substitution.getString();
        context.trace(`Adding the '${substitutionString}' substitution to the scoped context...`);
        const substitutionB = this.substitutions.find((substitution)=>{
            const substitutionB = substitution, substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
            if (substitutionAEqualToSubstitutionB) {
                return true;
            }
        }) || null;
        if (substitutionB !== null) {
            context.debug(`The '${substitutionString}' substitution has already been added to the scoped context.`);
        } else {
            this.substitutions.push(substitution);
            context.debug(`...added the '${substitutionString}' substitution to the scoped context.`);
        }
    }
    assignAssignments() {
        const context = this; ///
        this.assignments.forEach((assignment)=>{
            assignment(context);
        });
    }
    addSubproofOrProofAssertion(subproofOrProofAssertion) {
        const context = this, subproofOrProofAssertionString = subproofOrProofAssertion.getString();
        context.trace(`Adding the '${subproofOrProofAssertionString}' subproof or proof assertion to the scoped context...`);
        this.subproofOrProofAssertions.push(subproofOrProofAssertion);
        context.debug(`...added the '${subproofOrProofAssertionString}' subproof or proof assertion to the scoped context.`);
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
    static fromSubstitutions(substitutions, context) {
        const { Equivalences } = _elements.default, variables = [], judgements = [], assignments = [], equivalences = Equivalences.fromNothing(context), subproofOrProofAssertions = [], scopedContext = new ScopedContext(context, variables, judgements, assignments, equivalences, substitutions, subproofOrProofAssertions);
        return scopedContext;
    }
}
const _default = ScopedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Njb3BlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFNjb3BlZENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBhc3NpZ25tZW50cywgZXF1aXZhbGVuY2VzLCBzdWJzdGl0dXRpb25zLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzO1xuICAgIHRoaXMuYXNzaWdubWVudHMgPSBhc3NpZ25tZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoKSB7XG4gICAgbGV0IHZhcmlhYmxlcztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0VmFyaWFibGVzKCk7XG5cbiAgICB2YXJpYWJsZXMgPSBbXG4gICAgICAuLi50aGlzLnZhcmlhYmxlcyxcbiAgICAgIC4uLnZhcmlhYmxlc1xuICAgIF07XG5cbiAgICByZXR1cm4gdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBsZXQganVkZ2VtZW50cztcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBjb250ZXh0LmdldEp1ZGdlbWVudHMoKTtcblxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF1cblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzaWdubWVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgbGV0IGVxdWl2YWxlbmNlcztcblxuICAgIGxldCBjb250ZXh0O1xuXG4gICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgZXF1aXZhbGVuY2VzID0gY29udGV4dC5nZXRFcXVpdmFsZW5jZXMoKTtcblxuICAgIGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGgoZXF1aXZhbGVuY2VzLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCk7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gWyAgLy8vXG4gICAgICAuLi5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLFxuICAgICAgLi4udGhpcy5zdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zXG4gICAgXTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSB0aGlzLmdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvbnMgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLmZpbHRlcigoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25wcm9vZkFzc2VydGlvbiA9IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbi5pc1Byb29mQXNzZXJ0aW9uKCk7XG5cbiAgICAgICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25wcm9vZkFzc2VydGlvbikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBwcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRMYXN0UHJvb2ZBc3NlcnRpb24oKSB7XG4gICAgbGV0IGxhc3RQcm9vZkFzc2VydGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwcm9vZkFzc2VydGlvbnMgPSB0aGlzLmdldFByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgIHByb29mQXNzZXJ0aW9uc0xlbmd0aCA9IHByb29mQXNzZXJ0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAocHJvb2ZBc3NlcnRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgbGFzdFByb29mQXNzZXJ0aW9uID0gbGFzdChwcm9vZkFzc2VydGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0UHJvb2ZBc3NlcnRpb247XG4gIH1cblxuICBoYXNNZXRhTGV2ZWxTdWJzdGl0dXRpb25zKCkge1xuICAgIGxldCBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zO1xuXG4gICAgaWYgKHRoaXMuc3Vic3RpdHV0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgbWV0YUxldmVsU3Vic3RpdHV0aW9ucyA9IGNvbnRleHQuaGFzTWV0YUxldmVsU3Vic3RpdHV0aW9ucygpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhTGV2ZWxTdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSBlcXVhbGl0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVsZmV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmICghZXF1YWxpdHlSZWxmZXhpdmUpIHtcbiAgICAgIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5mcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpO1xuXG4gICAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaXMgcmVmbGV4aXZlIGFuZCB3aWxsIG5vdCBhZGRlZCB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSBqdWRnZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIHRoaXMuYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNjb3BlZCA9IHRydWUpIHtcbiAgICBpZiAodGhpcy5zdWJzdGl0dXRpb25zID09PSBudWxsKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgIGNvbnRleHQuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYFRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFzc2lnbkFzc2lnbm1lbnRzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMuYXNzaWdubWVudHMuZm9yRWFjaCgoYXNzaWdubWVudCkgPT4ge1xuICAgICAgYXNzaWdubWVudChjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMucHVzaChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkgeyByZXR1cm4gdGhpcy5lcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pOyB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtTm9kZSA9IGdyb3VuZGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgIGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVybUdyb3VuZGVkID0gdGVybU1hdGNoZXNHcm91bmRlZFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Hcm91bmRlZDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9ucyA9IHRoaXMuZ2V0UHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvb2ZBc3NlcnRpb25zLnNvbWUoKHByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9vZkFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21TdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEVxdWl2YWxlbmNlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpLFxuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBzY29wZWRDb250ZXh0ID0gbmV3IFNjb3BlZENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBhc3NpZ25tZW50cywgZXF1aXZhbGVuY2VzLCBzdWJzdGl0dXRpb25zLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBzY29wZWRDb250ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3BlZENvbnRleHQ7Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIlNjb3BlZENvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsImp1ZGdlbWVudHMiLCJhc3NpZ25tZW50cyIsImVxdWl2YWxlbmNlcyIsInN1YnN0aXR1dGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0Q29udGV4dCIsImdldEp1ZGdlbWVudHMiLCJnZXRBc3NpZ25tZW50cyIsImdldEVxdWl2YWxlbmNlcyIsIm1lcmdlZFdpdGgiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldFByb29mQXNzZXJ0aW9ucyIsInByb29mQXNzZXJ0aW9ucyIsImZpbHRlciIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnByb29mQXNzZXJ0aW9uIiwiaXNQcm9vZkFzc2VydGlvbiIsImdldExhc3RQcm9vZkFzc2VydGlvbiIsImxhc3RQcm9vZkFzc2VydGlvbiIsInByb29mQXNzZXJ0aW9uc0xlbmd0aCIsImxlbmd0aCIsImhhc01ldGFMZXZlbFN1YnN0aXR1dGlvbnMiLCJtZXRhTGV2ZWxTdWJzdGl0dXRpb25zIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5U3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJlcXVhbGl0eVJlbGZleGl2ZSIsImlzUmVmbGV4aXZlIiwiRXF1aXZhbGVuY2UiLCJlbGVtZW50cyIsImVxdWl2YWxlbmNlIiwiZnJvbUVxdWFsaXR5IiwibWVyZ2VkV2l0aEVxdWl2YWxlbmNlIiwiZGVidWciLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVTdHJpbmciLCJwdXNoIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50U3RyaW5nIiwiYWRkQXNzaWdubWVudCIsImFzc2lnbm1lbnQiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzY29wZWQiLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsImZpbmQiLCJzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJpc0VxdWFsVG8iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImZvckVhY2giLCJhZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmciLCJmaW5kRXF1aXZhbGVuY2VCeVRlcm0iLCJ0ZXJtIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJnZXROb2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidGVybUdyb3VuZGVkIiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwianVkZ2VtZW50UHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJmcm9tU3Vic3RpdHV0aW9ucyIsIkVxdWl2YWxlbmNlcyIsImZyb21Ob3RoaW5nIiwic2NvcGVkQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBOFRBOzs7ZUFBQTs7OzJCQTVUK0I7Z0VBRVg7aUVBQ0M7Ozs7OztBQUVyQixNQUFNLEVBQUVBLElBQUksRUFBRSxHQUFHQyx5QkFBYztBQUUvQixNQUFNQyxzQkFBc0JDLGdCQUFPO0lBQ2pDLFlBQVlDLE9BQU8sRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxhQUFhLEVBQUVDLHlCQUF5QixDQUFFO1FBQy9HLEtBQUssQ0FBQ047UUFFTixJQUFJLENBQUNDLFNBQVMsR0FBR0E7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO1FBQ3JCLElBQUksQ0FBQ0MseUJBQXlCLEdBQUdBO0lBQ25DO0lBRUFDLGVBQWU7UUFDYixJQUFJTjtRQUVKLE1BQU1ELFVBQVUsSUFBSSxDQUFDUSxVQUFVO1FBRS9CUCxZQUFZRCxRQUFRTyxZQUFZO1FBRWhDTixZQUFZO2VBQ1AsSUFBSSxDQUFDQSxTQUFTO2VBQ2RBO1NBQ0o7UUFFRCxPQUFPQTtJQUNUO0lBRUFRLGdCQUFnQjtRQUNkLElBQUlQO1FBRUosTUFBTUYsVUFBVSxJQUFJLENBQUNRLFVBQVU7UUFFL0JOLGFBQWFGLFFBQVFTLGFBQWE7UUFFbENQLGFBQWE7ZUFDUixJQUFJLENBQUNBLFVBQVU7ZUFDZkE7U0FDSjtRQUVELE9BQU9BO0lBQ1Q7SUFFQVEsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNQLFdBQVc7SUFDekI7SUFFQVEsa0JBQWtCO1FBQ2hCLElBQUlQO1FBRUosSUFBSUo7UUFFSkEsVUFBVSxJQUFJLENBQUNRLFVBQVU7UUFFekJKLGVBQWVKLFFBQVFXLGVBQWU7UUFFdENYLFVBQVUsSUFBSSxFQUFFLEdBQUc7UUFFbkJJLGVBQWUsSUFBSSxDQUFDQSxZQUFZLENBQUNRLFVBQVUsQ0FBQ1IsY0FBY0osVUFBVyxHQUFHO1FBRXhFLE9BQU9JO0lBQ1Q7SUFFQVMsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDUixhQUFhO0lBQzNCO0lBRUFTLCtCQUErQjtRQUM3QixJQUFJUjtRQUVKLE1BQU1OLFVBQVUsSUFBSSxDQUFDUSxVQUFVO1FBRS9CRiw0QkFBNEJOLFFBQVFjLDRCQUE0QjtRQUVoRVIsNEJBQTRCO2VBQ3ZCQTtlQUNBLElBQUksQ0FBQ0EseUJBQXlCO1NBQ2xDO1FBRUQsT0FBT0E7SUFDVDtJQUVBUyxxQkFBcUI7UUFDbkIsTUFBTVQsNEJBQTRCLElBQUksQ0FBQ1EsNEJBQTRCLElBQzdERSxrQkFBa0JWLDBCQUEwQlcsTUFBTSxDQUFDLENBQUNDO1lBQ2xELE1BQU1DLHlDQUF5Q0QseUJBQXlCRSxnQkFBZ0I7WUFFeEYsSUFBSUQsd0NBQXdDO2dCQUMxQyxPQUFPO1lBQ1Q7UUFDRjtRQUVOLE9BQU9IO0lBQ1Q7SUFFQUssd0JBQXdCO1FBQ3RCLElBQUlDLHFCQUFxQjtRQUV6QixNQUFNTixrQkFBa0IsSUFBSSxDQUFDRCxrQkFBa0IsSUFDekNRLHdCQUF3QlAsZ0JBQWdCUSxNQUFNO1FBRXBELElBQUlELHdCQUF3QixHQUFHO1lBQzdCRCxxQkFBcUIxQixLQUFLb0I7UUFDNUI7UUFFQSxPQUFPTTtJQUNUO0lBRUFHLDRCQUE0QjtRQUMxQixJQUFJQztRQUVKLElBQUksSUFBSSxDQUFDckIsYUFBYSxLQUFLLE1BQU07WUFDL0JxQix5QkFBeUI7UUFDM0IsT0FBTztZQUNMLE1BQU0xQixVQUFVLElBQUksQ0FBQ1EsVUFBVTtZQUUvQmtCLHlCQUF5QjFCLFFBQVF5Qix5QkFBeUI7UUFDNUQ7UUFFQSxPQUFPQztJQUNUO0lBRUFDLFlBQVlDLFFBQVEsRUFBRTtRQUNwQixNQUFNNUIsVUFBVSxJQUFJLEVBQ2Q2QixpQkFBaUJELFNBQVNFLFNBQVM7UUFFekM5QixRQUFRK0IsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFRixlQUFlLG1DQUFtQyxDQUFDO1FBRWhGLE1BQU1HLG9CQUFvQkosU0FBU0ssV0FBVztRQUU5QyxJQUFJLENBQUNELG1CQUFtQjtZQUN0QixNQUFNLEVBQUVFLFdBQVcsRUFBRSxHQUFHQyxpQkFBUSxFQUMxQkMsY0FBY0YsWUFBWUcsWUFBWSxDQUFDVCxVQUFVNUI7WUFFdkQsSUFBSSxDQUFDSSxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZLENBQUNrQyxxQkFBcUIsQ0FBQ0YsYUFBYXBDO1lBRXpFQSxRQUFRdUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFVixlQUFlLGlDQUFpQyxDQUFDO1FBQ2xGLE9BQU87WUFDTDdCLFFBQVF1QyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVWLGVBQWUsaUVBQWlFLENBQUM7UUFDekc7SUFDRjtJQUVBVyxZQUFZQyxRQUFRLEVBQUU7UUFDcEIsTUFBTXpDLFVBQVUsSUFBSSxFQUNkMEMsaUJBQWlCRCxTQUFTWCxTQUFTO1FBRXpDOUIsUUFBUStCLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRVcsZUFBZSxtQ0FBbUMsQ0FBQztRQUVoRixJQUFJLENBQUN6QyxTQUFTLENBQUMwQyxJQUFJLENBQUNGO1FBRXBCekMsUUFBUXVDLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUcsZUFBZSxpQ0FBaUMsQ0FBQztJQUNsRjtJQUVBRSxhQUFhQyxTQUFTLEVBQUU7UUFDdEIsTUFBTTdDLFVBQVUsSUFBSSxFQUNkOEMsa0JBQWtCRCxVQUFVZixTQUFTO1FBRTNDOUIsUUFBUStCLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRWUsZ0JBQWdCLG9DQUFvQyxDQUFDO1FBRWxGLElBQUksQ0FBQzVDLFVBQVUsQ0FBQ3lDLElBQUksQ0FBQ0U7UUFFckI3QyxRQUFRdUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFTyxnQkFBZ0Isa0NBQWtDLENBQUM7SUFDcEY7SUFFQUMsY0FBY0MsVUFBVSxFQUFFO1FBQ3hCLElBQUksQ0FBQzdDLFdBQVcsQ0FBQ3dDLElBQUksQ0FBQ0s7SUFDeEI7SUFFQUMsZ0JBQWdCQyxZQUFZLEVBQUVDLFNBQVMsSUFBSSxFQUFFO1FBQzNDLElBQUksSUFBSSxDQUFDOUMsYUFBYSxLQUFLLE1BQU07WUFDL0IsTUFBTUwsVUFBVSxJQUFJLENBQUNRLFVBQVU7WUFFL0JSLFFBQVFpRCxlQUFlLENBQUNDO1lBRXhCO1FBQ0Y7UUFFQSxNQUFNbEQsVUFBVSxJQUFJLEVBQ2RvRCxnQkFBZ0JGLGNBQ2hCRyxxQkFBcUJILGFBQWFwQixTQUFTO1FBRWpEOUIsUUFBUStCLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRXNCLG1CQUFtQix1Q0FBdUMsQ0FBQztRQUV4RixNQUFNQyxnQkFBZ0IsSUFBSSxDQUFDakQsYUFBYSxDQUFDa0QsSUFBSSxDQUFDLENBQUNMO1lBQzdDLE1BQU1JLGdCQUFnQkosY0FDaEJNLG9DQUFvQ0osY0FBY0ssU0FBUyxDQUFDSDtZQUVsRSxJQUFJRSxtQ0FBbUM7Z0JBQ3JDLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixJQUFJRixrQkFBa0IsTUFBTTtZQUMxQnRELFFBQVF1QyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVjLG1CQUFtQiw0REFBNEQsQ0FBQztRQUN4RyxPQUFPO1lBQ0wsSUFBSSxDQUFDaEQsYUFBYSxDQUFDc0MsSUFBSSxDQUFDTztZQUV4QmxELFFBQVF1QyxLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUVjLG1CQUFtQixxQ0FBcUMsQ0FBQztRQUMxRjtJQUNGO0lBRUFLLG9CQUFvQjtRQUNsQixNQUFNMUQsVUFBVSxJQUFJLEVBQUUsR0FBRztRQUV6QixJQUFJLENBQUNHLFdBQVcsQ0FBQ3dELE9BQU8sQ0FBQyxDQUFDWDtZQUN4QkEsV0FBV2hEO1FBQ2I7SUFDRjtJQUVBNEQsNEJBQTRCMUMsd0JBQXdCLEVBQUU7UUFDcEQsTUFBTWxCLFVBQVUsSUFBSSxFQUNkNkQsaUNBQWlDM0MseUJBQXlCWSxTQUFTO1FBRXpFOUIsUUFBUStCLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRThCLCtCQUErQixzREFBc0QsQ0FBQztRQUVuSCxJQUFJLENBQUN2RCx5QkFBeUIsQ0FBQ3FDLElBQUksQ0FBQ3pCO1FBRXBDbEIsUUFBUXVDLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRXNCLCtCQUErQixvREFBb0QsQ0FBQztJQUNySDtJQUVBQyxzQkFBc0JDLElBQUksRUFBRTtRQUFFLE9BQU8sSUFBSSxDQUFDM0QsWUFBWSxDQUFDMEQscUJBQXFCLENBQUNDO0lBQU87SUFFcEZDLGdDQUFnQ0MsZ0JBQWdCLEVBQUU7UUFDaEQsTUFBTS9ELGFBQWEsSUFBSSxDQUFDTyxhQUFhLElBQy9Cb0MsWUFBWTNDLFdBQVdxRCxJQUFJLENBQUMsQ0FBQ1Y7WUFDM0IsTUFBTXFCLDhDQUE4Q3JCLFVBQVVzQix1QkFBdUIsQ0FBQ0Y7WUFFdEYsSUFBSUMsNkNBQTZDO2dCQUMvQyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosT0FBT3JCO0lBQ1Q7SUFFQXVCLGlDQUFpQ0Msa0JBQWtCLEVBQUU7UUFDbkQsTUFBTXBFLFlBQVksSUFBSSxDQUFDTSxZQUFZLElBQzdCa0MsV0FBV3hDLFVBQVVzRCxJQUFJLENBQUMsQ0FBQ2Q7WUFDekIsTUFBTTZCLHVDQUF1QzdCLFNBQVM4Qix5QkFBeUIsQ0FBQ0Y7WUFFaEYsSUFBSUMsc0NBQXNDO2dCQUN4QyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosT0FBTzdCO0lBQ1Q7SUFFQStCLGVBQWVULElBQUksRUFBRTtRQUNuQixNQUFNL0QsVUFBVSxJQUFJLEVBQ2RJLGVBQWUsSUFBSSxDQUFDTyxlQUFlLElBQ25DOEQsZ0JBQWdCLEVBQUUsRUFDbEJDLG1CQUFtQixFQUFFO1FBRTNCdEUsYUFBYXVFLHdDQUF3QyxDQUFDRixlQUFlQyxrQkFBa0IxRTtRQUV2RixNQUFNNEUsMEJBQTBCSCxjQUFjSSxJQUFJLENBQUMsQ0FBQ0M7WUFDaEQsTUFBTUMsbUJBQW1CRCxhQUFhRSxPQUFPLElBQ3ZDQywwQkFBMEJsQixLQUFLbUIsYUFBYSxDQUFDSDtZQUUvQyxJQUFJRSx5QkFBeUI7Z0JBQzNCLE9BQU87WUFDVDtRQUNGLElBQ0FFLGVBQWVQLHlCQUF5QixHQUFHO1FBRWpELE9BQU9PO0lBQ1Q7SUFFQUMscUNBQXFDbkIsZ0JBQWdCLEVBQUU7UUFDckQsTUFBTXBCLFlBQVksSUFBSSxDQUFDbUIsK0JBQStCLENBQUNDLG1CQUNqRG9CLG1CQUFvQnhDLGNBQWM7UUFFeEMsT0FBT3dDO0lBQ1Q7SUFFQUMsc0NBQXNDakIsa0JBQWtCLEVBQUU7UUFDeEQsTUFBTTVCLFdBQVcsSUFBSSxDQUFDMkIsZ0NBQWdDLENBQUNDLHFCQUNqRGtCLGtCQUFtQjlDLGFBQWE7UUFFdEMsT0FBTzhDO0lBQ1Q7SUFFQUMsK0JBQStCekIsSUFBSSxFQUFFMEIsZ0JBQWdCLEVBQUU7UUFDckQsTUFBTXpGLFVBQVUsSUFBSSxFQUNkZ0Isa0JBQWtCLElBQUksQ0FBQ0Qsa0JBQWtCLElBQ3pDMkUsb0NBQW9DMUUsZ0JBQWdCNkQsSUFBSSxDQUFDLENBQUNjO1lBQ3hELE1BQU1ELG9DQUFvQ0MsZUFBZUgsOEJBQThCLENBQUN6QixNQUFNMEIsa0JBQWtCekY7WUFFaEgsSUFBSTBGLG1DQUFtQztnQkFDckMsT0FBTztZQUNUO1FBQ0Y7UUFFTixPQUFPQTtJQUNUO0lBRUEsT0FBT0Usa0JBQWtCdkYsYUFBYSxFQUFFTCxPQUFPLEVBQUU7UUFDL0MsTUFBTSxFQUFFNkYsWUFBWSxFQUFFLEdBQUcxRCxpQkFBUSxFQUMzQmxDLFlBQVksRUFBRSxFQUNkQyxhQUFhLEVBQUUsRUFDZkMsY0FBYyxFQUFFLEVBQ2hCQyxlQUFleUYsYUFBYUMsV0FBVyxDQUFDOUYsVUFDeENNLDRCQUE0QixFQUFFLEVBQzlCeUYsZ0JBQWdCLElBQUlqRyxjQUFjRSxTQUFTQyxXQUFXQyxZQUFZQyxhQUFhQyxjQUFjQyxlQUFlQztRQUVsSCxPQUFPeUY7SUFDVDtBQUNGO01BRUEsV0FBZWpHIn0=