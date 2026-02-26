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
    constructor(context, variables, judgements, assignments, equivalences, subproofOrProofAssertions){
        super(context);
        this.variables = variables;
        this.judgements = judgements;
        this.assignments = assignments;
        this.equivalences = equivalences;
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
    static fromNothing(context) {
        const { Equivalences } = _elements.default, variables = [], judgements = [], assignments = [], equivalences = Equivalences.fromNothing(context), subproofOrProofAssertions = [], scopedContext = new ScopedContext(context, variables, judgements, assignments, equivalences, subproofOrProofAssertions);
        return scopedContext;
    }
}
const _default = ScopedContext;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L3Njb3BlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmNvbnN0IHsgbGFzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIFNjb3BlZENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBhc3NpZ25tZW50cywgZXF1aXZhbGVuY2VzLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzO1xuICAgIHRoaXMuYXNzaWdubWVudHMgPSBhc3NpZ25tZW50cztcbiAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IGVxdWl2YWxlbmNlcztcbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKCkge1xuICAgIGxldCB2YXJpYWJsZXM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICB2YXJpYWJsZXMgPSBjb250ZXh0LmdldFZhcmlhYmxlcygpO1xuXG4gICAgdmFyaWFibGVzID0gW1xuICAgICAgLi4udGhpcy52YXJpYWJsZXMsXG4gICAgICAuLi52YXJpYWJsZXNcbiAgICBdO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgbGV0IGp1ZGdlbWVudHM7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBqdWRnZW1lbnRzID0gY29udGV4dC5nZXRKdWRnZW1lbnRzKCk7XG5cbiAgICBqdWRnZW1lbnRzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuanVkZ2VtZW50cyxcbiAgICAgIC4uLmp1ZGdlbWVudHNcbiAgICBdXG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldEFzc2lnbm1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGxldCBlcXVpdmFsZW5jZXM7XG5cbiAgICBsZXQgY29udGV4dDtcblxuICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGVxdWl2YWxlbmNlcyA9IGNvbnRleHQuZ2V0RXF1aXZhbGVuY2VzKCk7XG5cbiAgICBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmVxdWl2YWxlbmNlcy5tZXJnZWRXaXRoKGVxdWl2YWxlbmNlcywgY29udGV4dCk7ICAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IFsgIC8vL1xuICAgICAgLi4uc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyxcbiAgICAgIC4uLnRoaXMuc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1xuICAgIF07XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldFByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgcHJvb2ZBc3NlcnRpb25zID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucy5maWx0ZXIoKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24gPSBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24uaXNQcm9vZkFzc2VydGlvbigpO1xuXG4gICAgICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucHJvb2ZBc3NlcnRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gcHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFzdFByb29mQXNzZXJ0aW9uKCkge1xuICAgIGxldCBsYXN0UHJvb2ZBc3NlcnRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgcHJvb2ZBc3NlcnRpb25zID0gdGhpcy5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICBwcm9vZkFzc2VydGlvbnNMZW5ndGggPSBwcm9vZkFzc2VydGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHByb29mQXNzZXJ0aW9uc0xlbmd0aCA+IDApIHtcbiAgICAgIGxhc3RQcm9vZkFzc2VydGlvbiA9IGxhc3QocHJvb2ZBc3NlcnRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFzdFByb29mQXNzZXJ0aW9uO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlTdHJpbmcgPSBlcXVhbGl0eS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGVxdWFsaXR5UmVsZmV4aXZlID0gZXF1YWxpdHkuaXNSZWZsZXhpdmUoKTtcblxuICAgIGlmICghZXF1YWxpdHlSZWxmZXhpdmUpIHtcbiAgICAgIGNvbnN0IHsgRXF1aXZhbGVuY2UgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgZXF1aXZhbGVuY2UgPSBFcXVpdmFsZW5jZS5mcm9tRXF1YWxpdHkoZXF1YWxpdHksIGNvbnRleHQpO1xuXG4gICAgICB0aGlzLmVxdWl2YWxlbmNlcyA9IHRoaXMuZXF1aXZhbGVuY2VzLm1lcmdlZFdpdGhFcXVpdmFsZW5jZShlcXVpdmFsZW5jZSwgY29udGV4dCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgVGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaXMgcmVmbGV4aXZlIGFuZCB3aWxsIG5vdCBhZGRlZCB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dmFyaWFibGVTdHJpbmd9JyB2YXJpYWJsZSB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlIHNjb3BlZCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSBqdWRnZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgc2NvcGVkIGNvbnRleHQuLi5gKTtcblxuICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBzY29wZWQgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgIHRoaXMuYXNzaWdubWVudHMucHVzaChhc3NpZ25tZW50KTtcbiAgfVxuXG4gIGFzc2lnbkFzc2lnbm1lbnRzKCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMuYXNzaWdubWVudHMuZm9yRWFjaCgoYXNzaWdubWVudCkgPT4ge1xuICAgICAgYXNzaWdubWVudChjb250ZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uU3RyaW5nID0gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25TdHJpbmd9JyBzdWJwcm9vZiBvciBwcm9vZiBhc3NlcnRpb24gdG8gdGhlIHNjb3BlZCBjb250ZXh0Li4uYCk7XG5cbiAgICB0aGlzLnN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMucHVzaChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZ30nIHN1YnByb29mIG9yIHByb29mIGFzc2VydGlvbiB0byB0aGUgc2NvcGVkIGNvbnRleHQuYCk7XG4gIH1cblxuICBmaW5kRXF1aXZhbGVuY2VCeVRlcm0odGVybSkgeyByZXR1cm4gdGhpcy5lcXVpdmFsZW5jZXMuZmluZEVxdWl2YWxlbmNlQnlUZXJtKHRlcm0pOyB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgaXNUZXJtR3JvdW5kZWQodGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSB0aGlzLmdldEVxdWl2YWxlbmNlcygpLFxuICAgICAgICAgIGdyb3VuZGVkVGVybXMgPSBbXSxcbiAgICAgICAgICBkZWZpbmVkVmFyaWFibGVzID0gW107XG5cbiAgICBlcXVpdmFsZW5jZXMuc2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyhncm91bmRlZFRlcm1zLCBkZWZpbmVkVmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIGNvbnN0IHRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtID0gZ3JvdW5kZWRUZXJtcy5zb21lKChncm91bmRlZFRlcm0pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdW5kZWRUZXJtTm9kZSA9IGdyb3VuZGVkVGVybS5nZXROb2RlKCksXG4gICAgICAgICAgICAgIGdyb3VuZGVkVGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKGdyb3VuZGVkVGVybU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGVybUdyb3VuZGVkID0gdGVybU1hdGNoZXNHcm91bmRlZFRlcm07IC8vL1xuXG4gICAgcmV0dXJuIHRlcm1Hcm91bmRlZDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGNvbXBhcmVUZXJtQW5kUHJvcGVydHlSZWxhdGlvbih0ZXJtLCBwcm9wZXJ0eVJlbGF0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHByb29mQXNzZXJ0aW9ucyA9IHRoaXMuZ2V0UHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uID0gcHJvb2ZBc3NlcnRpb25zLnNvbWUoKHByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24gPSBwcm9vZkFzc2VydGlvbi5jb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24odGVybSwgcHJvcGVydHlSZWxhdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChjb21wYXJlc1RvVGVybUFuZFByb3BlcnR5UmVsYXRpb24pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB7IEVxdWl2YWxlbmNlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpLFxuICAgICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICBzY29wZWRDb250ZXh0ID0gbmV3IFNjb3BlZENvbnRleHQoY29udGV4dCwgdmFyaWFibGVzLCBqdWRnZW1lbnRzLCBhc3NpZ25tZW50cywgZXF1aXZhbGVuY2VzLCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTtcblxuICAgIHJldHVybiBzY29wZWRDb250ZXh0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3BlZENvbnRleHQ7Il0sIm5hbWVzIjpbImxhc3QiLCJhcnJheVV0aWxpdGllcyIsIlNjb3BlZENvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsInZhcmlhYmxlcyIsImp1ZGdlbWVudHMiLCJhc3NpZ25tZW50cyIsImVxdWl2YWxlbmNlcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRWYXJpYWJsZXMiLCJnZXRDb250ZXh0IiwiZ2V0SnVkZ2VtZW50cyIsImdldEFzc2lnbm1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwibWVyZ2VkV2l0aCIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRQcm9vZkFzc2VydGlvbnMiLCJwcm9vZkFzc2VydGlvbnMiLCJmaWx0ZXIiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25wcm9vZkFzc2VydGlvbiIsImlzUHJvb2ZBc3NlcnRpb24iLCJnZXRMYXN0UHJvb2ZBc3NlcnRpb24iLCJsYXN0UHJvb2ZBc3NlcnRpb24iLCJwcm9vZkFzc2VydGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImVxdWFsaXR5UmVsZmV4aXZlIiwiaXNSZWZsZXhpdmUiLCJFcXVpdmFsZW5jZSIsImVsZW1lbnRzIiwiZXF1aXZhbGVuY2UiLCJmcm9tRXF1YWxpdHkiLCJtZXJnZWRXaXRoRXF1aXZhbGVuY2UiLCJkZWJ1ZyIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZVN0cmluZyIsInB1c2giLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRTdHJpbmciLCJhZGRBc3NpZ25tZW50IiwiYXNzaWdubWVudCIsImFzc2lnbkFzc2lnbm1lbnRzIiwiZm9yRWFjaCIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblN0cmluZyIsImZpbmRFcXVpdmFsZW5jZUJ5VGVybSIsInRlcm0iLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImZpbmQiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJpc1Rlcm1Hcm91bmRlZCIsImdyb3VuZGVkVGVybXMiLCJkZWZpbmVkVmFyaWFibGVzIiwic2VwYXJhdGVHcm91bmRlZFRlcm1zQW5kRGVmaW5lZFZhcmlhYmxlcyIsInRlcm1NYXRjaGVzR3JvdW5kZWRUZXJtIiwic29tZSIsImdyb3VuZGVkVGVybSIsImdyb3VuZGVkVGVybU5vZGUiLCJnZXROb2RlIiwiZ3JvdW5kZWRUZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwidGVybUdyb3VuZGVkIiwiaXNKdWRnZW1lbnRQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwianVkZ2VtZW50UHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJjb21wYXJlVGVybUFuZFByb3BlcnR5UmVsYXRpb24iLCJwcm9wZXJ0eVJlbGF0aW9uIiwiY29tcGFyZXNUb1Rlcm1BbmRQcm9wZXJ0eVJlbGF0aW9uIiwicHJvb2ZBc3NlcnRpb24iLCJmcm9tTm90aGluZyIsIkVxdWl2YWxlbmNlcyIsInNjb3BlZENvbnRleHQiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBRQTs7O2VBQUE7OzsyQkF4UStCO2dFQUVYO2lFQUNDOzs7Ozs7QUFFckIsTUFBTSxFQUFFQSxJQUFJLEVBQUUsR0FBR0MseUJBQWM7QUFFL0IsTUFBTUMsc0JBQXNCQyxnQkFBTztJQUNqQyxZQUFZQyxPQUFPLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMseUJBQXlCLENBQUU7UUFDaEcsS0FBSyxDQUFDTDtRQUVOLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLHlCQUF5QixHQUFHQTtJQUNuQztJQUVBQyxlQUFlO1FBQ2IsSUFBSUw7UUFFSixNQUFNRCxVQUFVLElBQUksQ0FBQ08sVUFBVTtRQUUvQk4sWUFBWUQsUUFBUU0sWUFBWTtRQUVoQ0wsWUFBWTtlQUNQLElBQUksQ0FBQ0EsU0FBUztlQUNkQTtTQUNKO1FBRUQsT0FBT0E7SUFDVDtJQUVBTyxnQkFBZ0I7UUFDZCxJQUFJTjtRQUVKLE1BQU1GLFVBQVUsSUFBSSxDQUFDTyxVQUFVO1FBRS9CTCxhQUFhRixRQUFRUSxhQUFhO1FBRWxDTixhQUFhO2VBQ1IsSUFBSSxDQUFDQSxVQUFVO2VBQ2ZBO1NBQ0o7UUFFRCxPQUFPQTtJQUNUO0lBRUFPLGlCQUFpQjtRQUNmLE9BQU8sSUFBSSxDQUFDTixXQUFXO0lBQ3pCO0lBRUFPLGtCQUFrQjtRQUNoQixJQUFJTjtRQUVKLElBQUlKO1FBRUpBLFVBQVUsSUFBSSxDQUFDTyxVQUFVO1FBRXpCSCxlQUFlSixRQUFRVSxlQUFlO1FBRXRDVixVQUFVLElBQUksRUFBRSxHQUFHO1FBRW5CSSxlQUFlLElBQUksQ0FBQ0EsWUFBWSxDQUFDTyxVQUFVLENBQUNQLGNBQWNKLFVBQVcsR0FBRztRQUV4RSxPQUFPSTtJQUNUO0lBRUFRLCtCQUErQjtRQUM3QixJQUFJUDtRQUVKLE1BQU1MLFVBQVUsSUFBSSxDQUFDTyxVQUFVO1FBRS9CRiw0QkFBNEJMLFFBQVFZLDRCQUE0QjtRQUVoRVAsNEJBQTRCO2VBQ3ZCQTtlQUNBLElBQUksQ0FBQ0EseUJBQXlCO1NBQ2xDO1FBRUQsT0FBT0E7SUFDVDtJQUVBUSxxQkFBcUI7UUFDbkIsTUFBTVIsNEJBQTRCLElBQUksQ0FBQ08sNEJBQTRCLElBQzdERSxrQkFBa0JULDBCQUEwQlUsTUFBTSxDQUFDLENBQUNDO1lBQ2xELE1BQU1DLHlDQUF5Q0QseUJBQXlCRSxnQkFBZ0I7WUFFeEYsSUFBSUQsd0NBQXdDO2dCQUMxQyxPQUFPO1lBQ1Q7UUFDRjtRQUVOLE9BQU9IO0lBQ1Q7SUFFQUssd0JBQXdCO1FBQ3RCLElBQUlDLHFCQUFxQjtRQUV6QixNQUFNTixrQkFBa0IsSUFBSSxDQUFDRCxrQkFBa0IsSUFDekNRLHdCQUF3QlAsZ0JBQWdCUSxNQUFNO1FBRXBELElBQUlELHdCQUF3QixHQUFHO1lBQzdCRCxxQkFBcUJ4QixLQUFLa0I7UUFDNUI7UUFFQSxPQUFPTTtJQUNUO0lBRUFHLFlBQVlDLFFBQVEsRUFBRTtRQUNwQixNQUFNeEIsVUFBVSxJQUFJLEVBQ2R5QixpQkFBaUJELFNBQVNFLFNBQVM7UUFFekMxQixRQUFRMkIsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFRixlQUFlLG1DQUFtQyxDQUFDO1FBRWhGLE1BQU1HLG9CQUFvQkosU0FBU0ssV0FBVztRQUU5QyxJQUFJLENBQUNELG1CQUFtQjtZQUN0QixNQUFNLEVBQUVFLFdBQVcsRUFBRSxHQUFHQyxpQkFBUSxFQUMxQkMsY0FBY0YsWUFBWUcsWUFBWSxDQUFDVCxVQUFVeEI7WUFFdkQsSUFBSSxDQUFDSSxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZLENBQUM4QixxQkFBcUIsQ0FBQ0YsYUFBYWhDO1lBRXpFQSxRQUFRbUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFVixlQUFlLGlDQUFpQyxDQUFDO1FBQ2xGLE9BQU87WUFDTHpCLFFBQVFtQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVWLGVBQWUsaUVBQWlFLENBQUM7UUFDekc7SUFDRjtJQUVBVyxZQUFZQyxRQUFRLEVBQUU7UUFDcEIsTUFBTXJDLFVBQVUsSUFBSSxFQUNkc0MsaUJBQWlCRCxTQUFTWCxTQUFTO1FBRXpDMUIsUUFBUTJCLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRVcsZUFBZSxtQ0FBbUMsQ0FBQztRQUVoRixJQUFJLENBQUNyQyxTQUFTLENBQUNzQyxJQUFJLENBQUNGO1FBRXBCckMsUUFBUW1DLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUcsZUFBZSxpQ0FBaUMsQ0FBQztJQUNsRjtJQUVBRSxhQUFhQyxTQUFTLEVBQUU7UUFDdEIsTUFBTXpDLFVBQVUsSUFBSSxFQUNkMEMsa0JBQWtCRCxVQUFVZixTQUFTO1FBRTNDMUIsUUFBUTJCLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRWUsZ0JBQWdCLG9DQUFvQyxDQUFDO1FBRWxGLElBQUksQ0FBQ3hDLFVBQVUsQ0FBQ3FDLElBQUksQ0FBQ0U7UUFFckJ6QyxRQUFRbUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFTyxnQkFBZ0Isa0NBQWtDLENBQUM7SUFDcEY7SUFFQUMsY0FBY0MsVUFBVSxFQUFFO1FBQ3hCLElBQUksQ0FBQ3pDLFdBQVcsQ0FBQ29DLElBQUksQ0FBQ0s7SUFDeEI7SUFFQUMsb0JBQW9CO1FBQ2xCLE1BQU03QyxVQUFVLElBQUksRUFBRSxHQUFHO1FBRXpCLElBQUksQ0FBQ0csV0FBVyxDQUFDMkMsT0FBTyxDQUFDLENBQUNGO1lBQ3hCQSxXQUFXNUM7UUFDYjtJQUNGO0lBRUErQyw0QkFBNEIvQix3QkFBd0IsRUFBRTtRQUNwRCxNQUFNaEIsVUFBVSxJQUFJLEVBQ2RnRCxpQ0FBaUNoQyx5QkFBeUJVLFNBQVM7UUFFekUxQixRQUFRMkIsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFcUIsK0JBQStCLHNEQUFzRCxDQUFDO1FBRW5ILElBQUksQ0FBQzNDLHlCQUF5QixDQUFDa0MsSUFBSSxDQUFDdkI7UUFFcENoQixRQUFRbUMsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFYSwrQkFBK0Isb0RBQW9ELENBQUM7SUFDckg7SUFFQUMsc0JBQXNCQyxJQUFJLEVBQUU7UUFBRSxPQUFPLElBQUksQ0FBQzlDLFlBQVksQ0FBQzZDLHFCQUFxQixDQUFDQztJQUFPO0lBRXBGQyxnQ0FBZ0NDLGdCQUFnQixFQUFFO1FBQ2hELE1BQU1sRCxhQUFhLElBQUksQ0FBQ00sYUFBYSxJQUMvQmlDLFlBQVl2QyxXQUFXbUQsSUFBSSxDQUFDLENBQUNaO1lBQzNCLE1BQU1hLDhDQUE4Q2IsVUFBVWMsdUJBQXVCLENBQUNIO1lBRXRGLElBQUlFLDZDQUE2QztnQkFDL0MsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVaLE9BQU9iO0lBQ1Q7SUFFQWUsaUNBQWlDQyxrQkFBa0IsRUFBRTtRQUNuRCxNQUFNeEQsWUFBWSxJQUFJLENBQUNLLFlBQVksSUFDN0IrQixXQUFXcEMsVUFBVW9ELElBQUksQ0FBQyxDQUFDaEI7WUFDekIsTUFBTXFCLHVDQUF1Q3JCLFNBQVNzQix5QkFBeUIsQ0FBQ0Y7WUFFaEYsSUFBSUMsc0NBQXNDO2dCQUN4QyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosT0FBT3JCO0lBQ1Q7SUFFQXVCLGVBQWVWLElBQUksRUFBRTtRQUNuQixNQUFNbEQsVUFBVSxJQUFJLEVBQ2RJLGVBQWUsSUFBSSxDQUFDTSxlQUFlLElBQ25DbUQsZ0JBQWdCLEVBQUUsRUFDbEJDLG1CQUFtQixFQUFFO1FBRTNCMUQsYUFBYTJELHdDQUF3QyxDQUFDRixlQUFlQyxrQkFBa0I5RDtRQUV2RixNQUFNZ0UsMEJBQTBCSCxjQUFjSSxJQUFJLENBQUMsQ0FBQ0M7WUFDaEQsTUFBTUMsbUJBQW1CRCxhQUFhRSxPQUFPLElBQ3ZDQywwQkFBMEJuQixLQUFLb0IsYUFBYSxDQUFDSDtZQUUvQyxJQUFJRSx5QkFBeUI7Z0JBQzNCLE9BQU87WUFDVDtRQUNGLElBQ0FFLGVBQWVQLHlCQUF5QixHQUFHO1FBRWpELE9BQU9PO0lBQ1Q7SUFFQUMscUNBQXFDcEIsZ0JBQWdCLEVBQUU7UUFDckQsTUFBTVgsWUFBWSxJQUFJLENBQUNVLCtCQUErQixDQUFDQyxtQkFDakRxQixtQkFBb0JoQyxjQUFjO1FBRXhDLE9BQU9nQztJQUNUO0lBRUFDLHNDQUFzQ2pCLGtCQUFrQixFQUFFO1FBQ3hELE1BQU1wQixXQUFXLElBQUksQ0FBQ21CLGdDQUFnQyxDQUFDQyxxQkFDakRrQixrQkFBbUJ0QyxhQUFhO1FBRXRDLE9BQU9zQztJQUNUO0lBRUFDLCtCQUErQjFCLElBQUksRUFBRTJCLGdCQUFnQixFQUFFO1FBQ3JELE1BQU03RSxVQUFVLElBQUksRUFDZGMsa0JBQWtCLElBQUksQ0FBQ0Qsa0JBQWtCLElBQ3pDaUUsb0NBQW9DaEUsZ0JBQWdCbUQsSUFBSSxDQUFDLENBQUNjO1lBQ3hELE1BQU1ELG9DQUFvQ0MsZUFBZUgsOEJBQThCLENBQUMxQixNQUFNMkIsa0JBQWtCN0U7WUFFaEgsSUFBSThFLG1DQUFtQztnQkFDckMsT0FBTztZQUNUO1FBQ0Y7UUFFTixPQUFPQTtJQUNUO0lBRUEsT0FBT0UsWUFBWWhGLE9BQU8sRUFBRTtRQUMxQixNQUFNLEVBQUVpRixZQUFZLEVBQUUsR0FBR2xELGlCQUFRLEVBQzNCOUIsWUFBWSxFQUFFLEVBQ2RDLGFBQWEsRUFBRSxFQUNmQyxjQUFjLEVBQUUsRUFDaEJDLGVBQWU2RSxhQUFhRCxXQUFXLENBQUNoRixVQUN4Q0ssNEJBQTRCLEVBQUUsRUFDOUI2RSxnQkFBZ0IsSUFBSXBGLGNBQWNFLFNBQVNDLFdBQVdDLFlBQVlDLGFBQWFDLGNBQWNDO1FBRW5HLE9BQU82RTtJQUNUO0FBQ0Y7TUFFQSxXQUFlcEYifQ==