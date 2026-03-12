"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EphemeralContext;
    }
});
const _context = /*#__PURE__*/ _interop_require_default(require("../context"));
const _json = require("../utilities/json");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
class EphemeralContext extends _context.default {
    constructor(context, terms, frames, equalities, judgements, assertions, statements, references, assumptions, substitutions){
        super(context);
        this.terms = terms;
        this.frames = frames;
        this.equalities = equalities;
        this.judgements = judgements;
        this.assertions = assertions;
        this.statements = statements;
        this.references = references;
        this.assumptions = assumptions;
        this.substitutions = substitutions;
    }
    getTerms() {
        return this.terms;
    }
    getFrames() {
        return this.frames;
    }
    getEqualities() {
        return this.equalities;
    }
    getJudgements() {
        return this.judgements;
    }
    getStatements() {
        return this.statements;
    }
    getAssertions() {
        return this.assertions;
    }
    getReferences() {
        return this.references;
    }
    getAssumptions() {
        return this.assumptions;
    }
    getSubstitutions() {
        return this.substitutions;
    }
    addTerms(terms) {
        terms.forEach((term)=>{
            this.addTerm(term);
        });
    }
    addTerm(term) {
        const termA = term, context = this, termString = term.getString();
        context.trace(`Adding the '${termString}' term to the ephemeral context...`);
        const termB = this.terms.find((term)=>{
            const termB = term, termAEqualToTermB = termA.isEqualTo(termB);
            if (termAEqualToTermB) {
                return true;
            }
        }) || null;
        if (termB !== null) {
            context.trace(`The '${termString}' term has already been added to the ephemeral context.`);
        } else {
            this.terms.push(term);
            context.debug(`...added the '${termString}' term to the ephemeral context.`);
        }
    }
    addFrame(frame) {
        const frameA = frame, context = this, frameString = frame.getString();
        context.trace(`Adding the '${frameString}' frame to the ephemeral context...`);
        const frameB = this.frames.find((frame)=>{
            const frameB = frame, frameAEqualToFrameB = frameA.isEqualTo(frameB);
            if (frameAEqualToFrameB) {
                return true;
            }
        }) || null;
        if (frameB !== null) {
            context.trace(`The '${frameString}' frame has already been added to the ephemeral context.`);
        } else {
            this.frames.push(frame);
            context.debug(`...added the '${frameString}' frame to the ephemeral context.`);
        }
    }
    addEquality(equality) {
        const equalityA = equality, context = this, equalityString = equality.getString();
        context.trace(`Adding the '${equalityString}' equality to the ephemeral context...`);
        const equalityB = this.equalities.find((equality)=>{
            const equalityB = equality, equalityAEqualToEqualityB = equalityA.isEqualTo(equalityB);
            if (equalityAEqualToEqualityB) {
                return true;
            }
        }) || null;
        if (equalityB !== null) {
            context.trace(`The '${equalityString}' equality has already been added to the ephemeral context.`);
        } else {
            this.equalities.push(equality);
            context.debug(`...added the '${equalityString}' equality to the ephemeral context.`);
        }
    }
    addJudgement(judgement) {
        const judgementA = judgement, context = this, judgementString = judgement.getString();
        context.trace(`Adding the '${judgementString}' judgement to the ephemeral context...`);
        const judgementB = this.judgements.find((judgement)=>{
            const judgementB = judgement, judgementAEqualToEqualityB = judgementA.isEqualTo(judgementB);
            if (judgementAEqualToEqualityB) {
                return true;
            }
        }) || null;
        if (judgementB !== null) {
            context.trace(`The '${judgementString}' judgement has already been added to the ephemeral context.`);
        } else {
            this.judgements.push(judgement);
            context.debug(`...added the '${judgementString}' judgement to the ephemeral context.`);
        }
    }
    addStatement(statement) {
        const context = this, statementA = statement, statementString = statement.getString();
        context.trace(`Adding the '${statementString}' statement to the ephemeral context...`);
        const statementB = this.statements.find((statement)=>{
            const statementB = statement, statementAEqualToStatementB = statementA.isEqualTo(statementB);
            if (statementAEqualToStatementB) {
                return true;
            }
        }) || null;
        if (statementB !== null) {
            context.trace(`The '${statementString}' statement has already been added to the ephemeral context.`);
        } else {
            this.statements.push(statement);
            context.debug(`...added the '${statementString}' statement to the ephemeral context.`);
        }
    }
    addAssertion(assertion) {
        const context = this, assertionA = assertion, assertionString = assertion.getString();
        context.trace(`Adding the '${assertionString}' assertion to the ephemeral context...`);
        const assertionB = this.assertions.find((assertion)=>{
            const assertionB = assertion, assertionAEqualToAssertionB = assertionA.isEqualTo(assertionB);
            if (assertionAEqualToAssertionB) {
                return true;
            }
        }) || null;
        if (assertionB !== null) {
            context.trace(`The '${assertionString}' assertion has already been added to the ephemeral context.`);
        } else {
            this.assertions.push(assertion);
            context.debug(`...added the '${assertionString}' assertion to the ephemeral context.`);
        }
    }
    addReference(reference) {
        const context = this, referenceA = reference, referenceString = reference.getString();
        context.trace(`Adding the '${referenceString}' reference to the ephemeral context...`);
        const referenceB = this.references.find((reference)=>{
            const referenceB = reference, referenceAEqualToReferenceB = referenceA.isEqualTo(referenceB);
            if (referenceAEqualToReferenceB) {
                return true;
            }
        }) || null;
        if (referenceB !== null) {
            context.trace(`The '${referenceString}' reference has already been added to the ephemeral context.`);
        } else {
            this.references.push(reference);
            context.debug(`...added the '${referenceString}' reference to the ephemeral context.`);
        }
    }
    addAssumption(assumption) {
        const context = this, assumptionA = assumption, assumptionString = assumption.getString();
        context.trace(`Adding the '${assumptionString}' assumption to the ephemeral context...`);
        const assumptionB = this.assumptions.find((assumption)=>{
            const assumptionB = assumption, assumptionAEqualToAssumptionB = assumptionA.isEqualTo(assumptionB);
            if (assumptionAEqualToAssumptionB) {
                return true;
            }
        }) || null;
        if (assumptionB !== null) {
            context.trace(`The '${assumptionString}' assumption has already been added to the ephemeral context.`);
        } else {
            this.assumptions.push(assumption);
            context.debug(`...added the '${assumptionString}' assumption to the ephemeral context.`);
        }
    }
    addSubstitution(substitution) {
        const context = this, substitutionA = substitution, substitutionString = substitution.getString();
        context.trace(`Adding the '${substitutionString}' substitution to the ephemeral context...`);
        const substitutionB = this.substitutions.find((substitution)=>{
            const substitutionB = substitution, substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
            if (substitutionAEqualToSubstitutionB) {
                return true;
            }
        }) || null;
        if (substitutionB !== null) {
            context.trace(`The '${substitutionString}' substitution has already been added to the ephemeral context.`);
        } else {
            this.substitutions.push(substitution);
            context.debug(`...added the '${substitutionString}' substitution to the ephemeral context.`);
        }
    }
    retrieveEphemeralContext() {
        const ephemeralContext = this; ///
        return ephemeralContext;
    }
    findTermByTermNode(termNode) {
        const term = this.terms.find((term)=>{
            const termNodeMatches = term.matchTermNode(termNode);
            if (termNodeMatches) {
                return true;
            }
        }) || null;
        return term;
    }
    findFrameByFrameNode(frameNode) {
        const frame = this.frames.find((frame)=>{
            const frameNodeMatches = frame.matchFrameNode(frameNode);
            if (frameNodeMatches) {
                return true;
            }
        }) || null;
        return frame;
    }
    findEqualityByEqualityNode(equalityNode) {
        const equality = this.equalities.find((equality)=>{
            const equalityNodeMatches = equality.matchEqualityNode(equalityNode);
            if (equalityNodeMatches) {
                return true;
            }
        }) || null;
        return equality;
    }
    findJudgementByJudgementNode(judgementNode) {
        const judgement = this.judgements.find((judgement)=>{
            const judgementNodeMatches = judgement.matchJudgementNode(judgementNode);
            if (judgementNodeMatches) {
                return true;
            }
        }) || null;
        return judgement;
    }
    findStatementByStatementNode(statementNode) {
        const statement = this.statements.find((statement)=>{
            const statementNodeMatches = statement.matchStatementNode(statementNode);
            if (statementNodeMatches) {
                return true;
            }
        }) || null;
        return statement;
    }
    findReferenceByReferenceNode(referenceNode) {
        const reference = this.references.find((reference)=>{
            const referenceMatcheReferenceNode = reference.matchReferenceNode(referenceNode);
            if (referenceMatcheReferenceNode) {
                return true;
            }
        }) || null;
        return reference;
    }
    findAssertionByAssertionNode(assertionNode) {
        const assertion = this.assertions.find((assertion)=>{
            const assertionNodeMatches = assertion.matchAssertionNode(assertionNode);
            if (assertionNodeMatches) {
                return true;
            }
        }) || null;
        return assertion;
    }
    findAssumptionByAssumptionNode(assumptionNode) {
        const assumption = this.assumptions.find((assumption)=>{
            const assumptionNodeMatches = assumption.matchAssumptionNode(assumptionNode);
            if (assumptionNodeMatches) {
                return true;
            }
        }) || null;
        return assumption;
    }
    findReferenceByMetavariableNode(metavariableNode) {
        const reference = this.references.find((reference)=>{
            const referenceMatcheMetavariableNode = reference.matchMetavariableNode(metavariableNode);
            if (referenceMatcheMetavariableNode) {
                return true;
            }
        }) || null;
        return reference;
    }
    findSubstitutionBySubstitutionNode(substitutionNode) {
        const substitution = this.substitutions.find((substitution)=>{
            const substitutionNodeMatches = substitution.matchSubstitutionNode(substitutionNode);
            if (substitutionNodeMatches) {
                return true;
            }
        }) || null;
        return substitution;
    }
    isTermPresentByTermNode(termNode) {
        const term = this.findTermByTermNode(termNode), termPresent = term !== null;
        return termPresent;
    }
    isFramePresentByFrameNode(frameNode) {
        const frame = this.findFrameByFrameNode(frameNode), framePresent = frame !== null;
        return framePresent;
    }
    isEqualityPresentByEqualityNode(equalityNode) {
        const equality = this.findEqualityByEqualityNode(equalityNode), equalityPresent = equality !== null;
        return equalityPresent;
    }
    isJudgementPresentByJudgementNode(judgementNode) {
        const judgement = this.findJudgementByJudgementNode(judgementNode), judgementPresent = judgement !== null;
        return judgementPresent;
    }
    isStatementPresentByStatementNode(statementNode) {
        const statement = this.findStatementByStatementNode(statementNode), statementPresent = statement !== null;
        return statementPresent;
    }
    isAssertionPresentByAssertionNode(assertionNode) {
        const assertion = this.findAssertionByAssertionNode(assertionNode), assertionPresent = assertion !== null;
        return assertionPresent;
    }
    isAssumptionPresentByAssumptionNode(assumptionNode) {
        const assumption = this.findAssumptionByAssumptionNode(assumptionNode), assumptionPresent = assumption !== null;
        return assumptionPresent;
    }
    isReferencePresentByMetavariableNode(metavariableNode) {
        const reference = this.findReferenceByMetavariableNode(metavariableNode), referencePresent = reference !== null;
        return referencePresent;
    }
    isSubstitutionPresentBySubstitutionNode(substitutionNode) {
        const substitution = this.findSubstitutionBySubstitutionNode(substitutionNode), substitutionPresent = substitution !== null;
        return substitutionPresent;
    }
    commit(element) {
        const context = this; ///
        element.context = context;
    }
    initialise(json) {
        const context = this; ///
        this.terms = (0, _json.termsFromJSON)(json, context);
        this.statements = (0, _json.statementsFromJSON)(json, context);
        this.references = (0, _json.referencesFromJSON)(json, context);
        this.equalities = (0, _json.equalitiesFromJSON)(json, context);
        this.assumptions = (0, _json.assumptionsFromJSON)(json, context);
        this.frames = (0, _json.framesFromJSON)(json, context);
        this.judgements = (0, _json.judgementsFromJSON)(json, context);
        this.assertions = (0, _json.assertionsFromJSON)(json, context);
        this.substitutions = (0, _json.substitutionsFromJSON)(json, context);
    }
    toJSON() {
        const termsJSON = (0, _json.termsToTermsJSON)(this.terms), framesJSON = (0, _json.framesToFramesJSON)(this.frames), judgementsJSON = (0, _json.judgementsToJudgementsJSON)(this.judgements), equalitiesJSON = (0, _json.equalitiesToEqualitiesJSON)(this.equalities), statementsJSON = (0, _json.statementsToStatementsJSON)(this.statements), assertionsJSON = (0, _json.assertionsToAssertionsJSON)(this.assertions), referencesJSON = (0, _json.referencesToReferencesJSON)(this.references), assumptionsJSON = (0, _json.assumptionsToAssumptionsJSON)(this.assumptions), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(this.substitutions), terms = termsJSON, frames = framesJSON, judgements = judgementsJSON, equalities = equalitiesJSON, statements = statementsJSON, assertions = assertionsJSON, references = referencesJSON, assumptions = assumptionsJSON, substitutions = substitutionsJSON, json = {
            terms,
            frames,
            judgements,
            equalities,
            statements,
            assertions,
            references,
            assumptions,
            substitutions
        };
        return json;
    }
    static fromJSON(json, context) {
        const terms = null, frames = null, equalities = null, judgements = null, statements = null, assertions = null, references = null, assumptions = null, substitutions = null, emphemeralContext = new EphemeralContext(context, terms, frames, equalities, judgements, assertions, statements, references, assumptions, substitutions);
        emphemeralContext.initialise(json);
        return emphemeralContext;
    }
    static fromNothing(context) {
        const terms = [], frames = [], equalities = [], judgements = [], statements = [], assertions = [], references = [], assumptions = [], substitutions = [], emphemeralContext = new EphemeralContext(context, terms, frames, equalities, judgements, assertions, statements, references, assumptions, substitutions);
        return emphemeralContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwaGVtZXJhbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdGVybXMsIGZyYW1lcywgZXF1YWxpdGllcywganVkZ2VtZW50cywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICB0aGlzLmVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzO1xuICAgIHRoaXMuanVkZ2VtZW50cyA9IGp1ZGdlbWVudHM7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9ucztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHJlZmVyZW5jZXM7XG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZXM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVxdWFsaXRpZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm1zKHRlcm1zKSB7XG4gICAgdGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgdGhpcy5hZGRUZXJtKHRlcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgdGVybUIgPSB0aGlzLnRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICB0ZXJtQUVxdWFsVG9UZXJtQiA9IHRlcm1BLmlzRXF1YWxUbyh0ZXJtQik7XG5cbiAgICAgIGlmICh0ZXJtQUVxdWFsVG9UZXJtQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHRlcm1CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7dGVybVN0cmluZ30nIHRlcm0gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGVybXMucHVzaCh0ZXJtKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGZyYW1lQSA9IGZyYW1lLCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lQiA9IHRoaXMuZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZUIgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgICBmcmFtZUFFcXVhbFRvRnJhbWVCID0gZnJhbWVBLmlzRXF1YWxUbyhmcmFtZUIpO1xuXG4gICAgICBpZiAoZnJhbWVBRXF1YWxUb0ZyYW1lQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGZyYW1lQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBlcXVhbGl0eUEgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5U3RyaW5nID0gZXF1YWxpdHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBlcXVhbGl0eUIgPSB0aGlzLmVxdWFsaXRpZXMuZmluZCgoZXF1YWxpdHkpID0+IHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5QiA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICAgIGVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIgPSBlcXVhbGl0eUEuaXNFcXVhbFRvKGVxdWFsaXR5Qik7XG5cbiAgICAgIGlmIChlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZXF1YWxpdHlCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcXVhbGl0aWVzLnB1c2goZXF1YWxpdHkpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudEEgPSBqdWRnZW1lbnQsIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSBqdWRnZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudEIgPSB0aGlzLmp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICBjb25zdCBqdWRnZW1lbnRCID0ganVkZ2VtZW50LCAvLy9cbiAgICAgICAgICAgIGp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCID0ganVkZ2VtZW50QS5pc0VxdWFsVG8oanVkZ2VtZW50Qik7XG5cbiAgICAgIGlmIChqdWRnZW1lbnRBRXF1YWxUb0VxdWFsaXR5Qikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGp1ZGdlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QSA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRCID0gdGhpcy5zdGF0ZW1lbnRzLmZpbmQoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50QiA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIgPSBzdGF0ZW1lbnRBLmlzRXF1YWxUbyhzdGF0ZW1lbnRCKTtcblxuICAgICAgaWYgKHN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50Qikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50cy5wdXNoKHN0YXRlbWVudCk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uQSA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uU3RyaW5nID0gYXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBhc3NlcnRpb25CID0gdGhpcy5hc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uQiA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgICBhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIgPSBhc3NlcnRpb25BLmlzRXF1YWxUbyhhc3NlcnRpb25CKTtcblxuICAgICAgaWYgKGFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGFzc2VydGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzZXJ0aW9ucy5wdXNoKGFzc2VydGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlQSA9IHJlZmVyZW5jZSwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlU3RyaW5nID0gcmVmZXJlbmNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCByZWZlcmVuY2VCID0gdGhpcy5yZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlQiA9IHJlZmVyZW5jZSwgLy8vXG4gICAgICAgICAgICByZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIgPSByZWZlcmVuY2VBLmlzRXF1YWxUbyhyZWZlcmVuY2VCKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHJlZmVyZW5jZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uQSA9IGFzc3VtcHRpb24sIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSBhc3N1bXB0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25CID0gdGhpcy5hc3N1bXB0aW9ucy5maW5kKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uQiA9IGFzc3VtcHRpb24sIC8vL1xuICAgICAgICAgICAgYXNzdW1wdGlvbkFFcXVhbFRvQXNzdW1wdGlvbkIgPSBhc3N1bXB0aW9uQS5pc0VxdWFsVG8oYXNzdW1wdGlvbkIpO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbkFFcXVhbFRvQXNzdW1wdGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChhc3N1bXB0aW9uQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb25zLnB1c2goYXNzdW1wdGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSB0aGlzLnN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgcmV0cmlldmVFcGhlbWVyYWxDb250ZXh0KCkge1xuICAgIGNvbnN0IGVwaGVtZXJhbENvbnRleHQgPSB0aGlzOyAgLy8vXG5cbiAgICByZXR1cm4gZXBoZW1lcmFsQ29udGV4dDtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVOb2RlTWF0Y2hlcyA9IGZyYW1lLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMuZXF1YWxpdGllcy5maW5kKChlcXVhbGl0eSkgPT4ge1xuICAgICAgY29uc3QgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IGVxdWFsaXR5Lm1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgIGlmIChlcXVhbGl0eU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICBjb25zdCBqdWRnZW1lbnROb2RlTWF0Y2hlcyA9IGp1ZGdlbWVudC5tYXRjaEp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChqdWRnZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlUmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5tYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNYXRjaGVSZWZlcmVuY2VOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpcy5hc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBhc3NlcnRpb24ubWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5hc3N1bXB0aW9ucy5maW5kKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uTm9kZU1hdGNoZXMgPSBhc3N1bXB0aW9uLm1hdGNoQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gKHRlcm0gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSAoZnJhbWUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGZyYW1lUHJlc2VudDtcbiAgfVxuXG4gIGlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHlQcmVzZW50ID0gKGVxdWFsaXR5ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMuZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gKGp1ZGdlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudFByZXNlbnQgPSAoc3RhdGVtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzLmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgYXNzZXJ0aW9uUHJlc2VudCA9IChhc3NlcnRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc3VtcHRpb25QcmVzZW50QnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgYXNzdW1wdGlvblByZXNlbnQgPSAoYXNzdW1wdGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VQcmVzZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgY29tbWl0KGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBlbGVtZW50LmNvbnRleHQgPSBjb250ZXh0O1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRoaXMudGVybXMpLFxuICAgICAgICAgIGZyYW1lc0pTT04gPSBmcmFtZXNUb0ZyYW1lc0pTT04odGhpcy5mcmFtZXMpLFxuICAgICAgICAgIGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04odGhpcy5qdWRnZW1lbnRzKSxcbiAgICAgICAgICBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OKHRoaXMuZXF1YWxpdGllcyksXG4gICAgICAgICAgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTih0aGlzLnN0YXRlbWVudHMpLFxuICAgICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04odGhpcy5hc3NlcnRpb25zKSxcbiAgICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OKHRoaXMucmVmZXJlbmNlcyksXG4gICAgICAgICAgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTih0aGlzLmFzc3VtcHRpb25zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHRoaXMuc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgdGVybXMgPSB0ZXJtc0pTT04sIC8vL1xuICAgICAgICAgIGZyYW1lcyA9IGZyYW1lc0pTT04sIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzSlNPTiwgLy8vXG4gICAgICAgICAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNKU09OLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0pTT04sIC8vL1xuICAgICAgICAgIGFzc2VydGlvbnMgPSBhc3NlcnRpb25zSlNPTiwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNKU09OLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zSlNPTiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybXMsXG4gICAgICAgICAgICBmcmFtZXMsXG4gICAgICAgICAgICBqdWRnZW1lbnRzLFxuICAgICAgICAgICAgZXF1YWxpdGllcyxcbiAgICAgICAgICAgIHN0YXRlbWVudHMsXG4gICAgICAgICAgICBhc3NlcnRpb25zLFxuICAgICAgICAgICAgcmVmZXJlbmNlcyxcbiAgICAgICAgICAgIGFzc3VtcHRpb25zLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBudWxsLFxuICAgICAgICAgIGZyYW1lcyA9IG51bGwsXG4gICAgICAgICAgZXF1YWxpdGllcyA9IG51bGwsXG4gICAgICAgICAganVkZ2VtZW50cyA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50cyA9IG51bGwsXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IG51bGwsXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IG51bGwsXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICAgIGVtcGhlbWVyYWxDb250ZXh0ID0gbmV3IEVwaGVtZXJhbENvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywgZXF1YWxpdGllcywganVkZ2VtZW50cywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgZW1waGVtZXJhbENvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IFtdLFxuICAgICAgICAgIGFzc3VtcHRpb25zID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGVtcGhlbWVyYWxDb250ZXh0ID0gbmV3IEVwaGVtZXJhbENvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywgZXF1YWxpdGllcywganVkZ2VtZW50cywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXBoZW1lcmFsQ29udGV4dCIsIkNvbnRleHQiLCJjb250ZXh0IiwidGVybXMiLCJmcmFtZXMiLCJlcXVhbGl0aWVzIiwianVkZ2VtZW50cyIsImFzc2VydGlvbnMiLCJzdGF0ZW1lbnRzIiwicmVmZXJlbmNlcyIsImFzc3VtcHRpb25zIiwic3Vic3RpdHV0aW9ucyIsImdldFRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0RXF1YWxpdGllcyIsImdldEp1ZGdlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImdldFJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJhZGRUZXJtcyIsImZvckVhY2giLCJ0ZXJtIiwiYWRkVGVybSIsInRlcm1BIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybUIiLCJmaW5kIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJwdXNoIiwiZGVidWciLCJhZGRGcmFtZSIsImZyYW1lIiwiZnJhbWVBIiwiZnJhbWVTdHJpbmciLCJmcmFtZUIiLCJmcmFtZUFFcXVhbFRvRnJhbWVCIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QSIsImVxdWFsaXR5U3RyaW5nIiwiZXF1YWxpdHlCIiwiZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5QiIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEEiLCJqdWRnZW1lbnRTdHJpbmciLCJqdWRnZW1lbnRCIiwianVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIiLCJhZGRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRBIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50QiIsInN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50QiIsImFkZEFzc2VydGlvbiIsImFzc2VydGlvbiIsImFzc2VydGlvbkEiLCJhc3NlcnRpb25TdHJpbmciLCJhc3NlcnRpb25CIiwiYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CIiwiYWRkUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlQSIsInJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZUIiLCJyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIiLCJhZGRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25BIiwiYXNzdW1wdGlvblN0cmluZyIsImFzc3VtcHRpb25CIiwiYXNzdW1wdGlvbkFFcXVhbFRvQXNzdW1wdGlvbkIiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsInJldHJpZXZlRXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHQiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlTWF0Y2hlcyIsIm1hdGNoRXF1YWxpdHlOb2RlIiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoSnVkZ2VtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc3VtcHRpb25Ob2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImlzVGVybVByZXNlbnRCeVRlcm1Ob2RlIiwidGVybVByZXNlbnQiLCJpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlIiwiZnJhbWVQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwiaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uUHJlc2VudCIsImlzQXNzdW1wdGlvblByZXNlbnRCeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvblByZXNlbnQiLCJpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VQcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImNvbW1pdCIsImVsZW1lbnQiLCJpbml0aWFsaXNlIiwianNvbiIsInRlcm1zRnJvbUpTT04iLCJzdGF0ZW1lbnRzRnJvbUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJhc3N1bXB0aW9uc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJhc3NlcnRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJ0b0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsImp1ZGdlbWVudHNKU09OIiwianVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04iLCJlcXVhbGl0aWVzSlNPTiIsImVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OIiwic3RhdGVtZW50c0pTT04iLCJzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTiIsImFzc2VydGlvbnNKU09OIiwiYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04iLCJyZWZlcmVuY2VzSlNPTiIsInJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OIiwiYXNzdW1wdGlvbnNKU09OIiwiYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJmcm9tSlNPTiIsImVtcGhlbWVyYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVCQTs7O2VBQXFCQTs7O2dFQXJCRDtzQkFtQjZCOzs7Ozs7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