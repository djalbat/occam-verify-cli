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
    constructor(context, terms, frames, judgements, equalities, assertions, statements, references, assumptions, substitutions){
        super(context);
        this.terms = terms;
        this.frames = frames;
        this.judgements = judgements;
        this.equalities = equalities;
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
    findJudgementByJudgementNode(judgementNode) {
        const judgement = this.judgements.find((judgement)=>{
            const judgementNodeMatches = judgement.matchJudgementNode(judgementNode);
            if (judgementNodeMatches) {
                return true;
            }
        }) || null;
        return judgement;
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
        const terms = null, frames = null, judgements = null, equalities = null, statements = null, assertions = null, references = null, assumptions = null, substitutions = null, emphemeralContext = new EphemeralContext(context, terms, frames, judgements, equalities, assertions, statements, references, assumptions, substitutions);
        emphemeralContext.initialise(json);
        return emphemeralContext;
    }
    static fromNothing(context) {
        const terms = [], frames = [], judgements = [], equalities = [], statements = [], assertions = [], references = [], assumptions = [], substitutions = [], emphemeralContext = new EphemeralContext(context, terms, frames, judgements, equalities, assertions, statements, references, assumptions, substitutions);
        return emphemeralContext;
    }
    static fromContext(context) {}
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwaGVtZXJhbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdGVybXMsIGZyYW1lcywganVkZ2VtZW50cywgZXF1YWxpdGllcywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzO1xuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXM7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9ucztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHJlZmVyZW5jZXM7XG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZXM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVxdWFsaXRpZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1CID0gdGhpcy50ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh0ZXJtQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZUEgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZUIgPSB0aGlzLmZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVCID0gZnJhbWUsIC8vL1xuICAgICAgICAgICAgZnJhbWVBRXF1YWxUb0ZyYW1lQiA9IGZyYW1lQS5pc0VxdWFsVG8oZnJhbWVCKTtcblxuICAgICAgaWYgKGZyYW1lQUVxdWFsVG9GcmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChmcmFtZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVhbGl0eVN0cmluZyA9IGVxdWFsaXR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZXF1YWxpdHlCID0gdGhpcy5lcXVhbGl0aWVzLmZpbmQoKGVxdWFsaXR5KSA9PiB7XG4gICAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgICAgICBlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCID0gZXF1YWxpdHlBLmlzRXF1YWxUbyhlcXVhbGl0eUIpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5Qikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVxdWFsaXR5QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXF1YWxpdGllcy5wdXNoKGVxdWFsaXR5KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRBID0ganVkZ2VtZW50LCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0ganVkZ2VtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRCID0gdGhpcy5qdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgY29uc3QganVkZ2VtZW50QiA9IGp1ZGdlbWVudCwgLy8vXG4gICAgICAgICAgICBqdWRnZW1lbnRBRXF1YWxUb0VxdWFsaXR5QiA9IGp1ZGdlbWVudEEuaXNFcXVhbFRvKGp1ZGdlbWVudEIpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChqdWRnZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmp1ZGdlbWVudHMucHVzaChqdWRnZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEEgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50QiA9IHRoaXMuc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudEIgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCID0gc3RhdGVtZW50QS5pc0VxdWFsVG8oc3RhdGVtZW50Qik7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlbWVudHMucHVzaChzdGF0ZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc2VydGlvbkEgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgIGFzc2VydGlvblN0cmluZyA9IGFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uQiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gYXNzZXJ0aW9uQS5pc0VxdWFsVG8oYXNzZXJ0aW9uQik7XG5cbiAgICAgIGlmIChhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChhc3NlcnRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZUEgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlQiA9IHRoaXMucmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZUIgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCID0gcmVmZXJlbmNlQS5pc0VxdWFsVG8ocmVmZXJlbmNlQik7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChyZWZlcmVuY2VCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbkEgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gYXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uQiA9IHRoaXMuYXNzdW1wdGlvbnMuZmluZCgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbkIgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CID0gYXNzdW1wdGlvbkEuaXNFcXVhbFRvKGFzc3VtcHRpb25CKTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoYXNzdW1wdGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHJpZXZlRXBoZW1lcmFsQ29udGV4dCgpIHtcbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIGVwaGVtZXJhbENvbnRleHQ7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5qdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgY29uc3QganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBqdWRnZW1lbnQubWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMuZXF1YWxpdGllcy5maW5kKChlcXVhbGl0eSkgPT4ge1xuICAgICAgY29uc3QgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IGVxdWFsaXR5Lm1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgIGlmIChlcXVhbGl0eU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2UubWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlUmVmZXJlbmNlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGVNYXRjaGVzID0gYXNzZXJ0aW9uLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc2VydGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuYXNzdW1wdGlvbnMuZmluZCgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gYXNzdW1wdGlvbi5tYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLnN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9ICh0ZXJtICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0ZXJtUHJlc2VudDtcbiAgfVxuXG4gIGlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gKGZyYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcy5maW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsaXR5UHJlc2VudCA9IChlcXVhbGl0eSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRQcmVzZW50ID0gKHN0YXRlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpcy5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIGFzc2VydGlvblByZXNlbnQgPSAoYXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNBc3N1bXB0aW9uUHJlc2VudEJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25QcmVzZW50ID0gKGFzc3VtcHRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgcmVmZXJlbmNlUHJlc2VudCA9IChyZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLnJlZmVyZW5jZXMgPSByZWZlcmVuY2VzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLmVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0aGlzLnRlcm1zKSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKHRoaXMuZnJhbWVzKSxcbiAgICAgICAgICBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OKHRoaXMuanVkZ2VtZW50cyksXG4gICAgICAgICAgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTih0aGlzLmVxdWFsaXRpZXMpLFxuICAgICAgICAgIHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04odGhpcy5zdGF0ZW1lbnRzKSxcbiAgICAgICAgICBhc3NlcnRpb25zSlNPTiA9IGFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OKHRoaXMuYXNzZXJ0aW9ucyksXG4gICAgICAgICAgcmVmZXJlbmNlc0pTT04gPSByZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTih0aGlzLnJlZmVyZW5jZXMpLFxuICAgICAgICAgIGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04odGhpcy5hc3N1bXB0aW9ucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTih0aGlzLnN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHRlcm1zID0gdGVybXNKU09OLCAvLy9cbiAgICAgICAgICBmcmFtZXMgPSBmcmFtZXNKU09OLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRzID0ganVkZ2VtZW50c0pTT04sIC8vL1xuICAgICAgICAgIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzSlNPTiwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNKU09OLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0pTT04sIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzSlNPTiwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0pTT04sIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIHRlcm1zLFxuICAgICAgICAgICAgZnJhbWVzLFxuICAgICAgICAgICAganVkZ2VtZW50cyxcbiAgICAgICAgICAgIGVxdWFsaXRpZXMsXG4gICAgICAgICAgICBzdGF0ZW1lbnRzLFxuICAgICAgICAgICAgYXNzZXJ0aW9ucyxcbiAgICAgICAgICAgIHJlZmVyZW5jZXMsXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gbnVsbCxcbiAgICAgICAgICBmcmFtZXMgPSBudWxsLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBudWxsLFxuICAgICAgICAgIGVxdWFsaXRpZXMgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBudWxsLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBudWxsLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBudWxsLFxuICAgICAgICAgIGFzc3VtcHRpb25zID0gbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBFcGhlbWVyYWxDb250ZXh0KGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGp1ZGdlbWVudHMsIGVxdWFsaXRpZXMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGVtcGhlbWVyYWxDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIGVxdWFsaXRpZXMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBbXSxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBFcGhlbWVyYWxDb250ZXh0KGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGp1ZGdlbWVudHMsIGVxdWFsaXRpZXMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGV4dChjb250ZXh0KSB7XG5cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVwaGVtZXJhbENvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsInRlcm1zIiwiZnJhbWVzIiwianVkZ2VtZW50cyIsImVxdWFsaXRpZXMiLCJhc3NlcnRpb25zIiwic3RhdGVtZW50cyIsInJlZmVyZW5jZXMiLCJhc3N1bXB0aW9ucyIsInN1YnN0aXR1dGlvbnMiLCJnZXRUZXJtcyIsImdldEZyYW1lcyIsImdldEVxdWFsaXRpZXMiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRTdWJzdGl0dXRpb25zIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtQSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1CIiwiZmluZCIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHVzaCIsImRlYnVnIiwiYWRkRnJhbWUiLCJmcmFtZSIsImZyYW1lQSIsImZyYW1lU3RyaW5nIiwiZnJhbWVCIiwiZnJhbWVBRXF1YWxUb0ZyYW1lQiIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUEiLCJlcXVhbGl0eVN0cmluZyIsImVxdWFsaXR5QiIsImVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBIiwianVkZ2VtZW50U3RyaW5nIiwianVkZ2VtZW50QiIsImp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCIiwiYWRkU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50QSIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudEIiLCJzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIiLCJhZGRBc3NlcnRpb24iLCJhc3NlcnRpb24iLCJhc3NlcnRpb25BIiwiYXNzZXJ0aW9uU3RyaW5nIiwiYXNzZXJ0aW9uQiIsImFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsImFkZFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUEiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VCIiwicmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCIiwiYWRkQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uQSIsImFzc3VtcHRpb25TdHJpbmciLCJhc3N1bXB0aW9uQiIsImFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJyZXRyaWV2ZUVwaGVtZXJhbENvbnRleHQiLCJlcGhlbWVyYWxDb250ZXh0IiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hKdWRnZW1lbnROb2RlIiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGVNYXRjaGVzIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VNYXRjaGVSZWZlcmVuY2VOb2RlIiwibWF0Y2hSZWZlcmVuY2VOb2RlIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzZXJ0aW9uTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3N1bXB0aW9uTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSIsInRlcm1QcmVzZW50IiwiaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZSIsImZyYW1lUHJlc2VudCIsImlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eVByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJlc2VudCIsImlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJpc0Fzc3VtcHRpb25QcmVzZW50QnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25QcmVzZW50IiwiaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpbml0aWFsaXNlIiwianNvbiIsInRlcm1zRnJvbUpTT04iLCJzdGF0ZW1lbnRzRnJvbUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJhc3N1bXB0aW9uc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJhc3NlcnRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJ0b0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsImp1ZGdlbWVudHNKU09OIiwianVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04iLCJlcXVhbGl0aWVzSlNPTiIsImVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OIiwic3RhdGVtZW50c0pTT04iLCJzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTiIsImFzc2VydGlvbnNKU09OIiwiYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04iLCJyZWZlcmVuY2VzSlNPTiIsInJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OIiwiYXNzdW1wdGlvbnNKU09OIiwiYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJmcm9tSlNPTiIsImVtcGhlbWVyYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciLCJmcm9tQ29udGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUJBOzs7ZUFBcUJBOzs7Z0VBckJEO3NCQW1CNkI7Ozs7OztBQUVsQyxNQUFNQSx5QkFBeUJDLGdCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsQ0FBRTtRQUMxSCxLQUFLLENBQUNUO1FBRU4sSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO0lBQ3ZCO0lBRUFDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQ1QsS0FBSztJQUNuQjtJQUVBVSxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUNULE1BQU07SUFDcEI7SUFFQVUsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNSLFVBQVU7SUFDeEI7SUFFQVMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNWLFVBQVU7SUFDeEI7SUFFQVcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNSLFVBQVU7SUFDeEI7SUFFQVMsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNWLFVBQVU7SUFDeEI7SUFFQVcsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUNULFVBQVU7SUFDeEI7SUFFQVUsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUNULFdBQVc7SUFDekI7SUFFQVUsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDVCxhQUFhO0lBQzNCO0lBRUFVLFFBQVFDLElBQUksRUFBRTtRQUNaLE1BQU1DLFFBQVFELE1BQ1JwQixVQUFVLElBQUksRUFDZHNCLGFBQWFGLEtBQUtHLFNBQVM7UUFFakN2QixRQUFRd0IsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFRixXQUFXLGtDQUFrQyxDQUFDO1FBRTNFLE1BQU1HLFFBQVEsSUFBSSxDQUFDeEIsS0FBSyxDQUFDeUIsSUFBSSxDQUFDLENBQUNOO1lBQzdCLE1BQU1LLFFBQVFMLE1BQ1JPLG9CQUFvQk4sTUFBTU8sU0FBUyxDQUFDSDtZQUUxQyxJQUFJRSxtQkFBbUI7Z0JBQ3JCLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixJQUFJRixVQUFVLE1BQU07WUFDbEJ6QixRQUFRd0IsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFRixXQUFXLHVEQUF1RCxDQUFDO1FBQzNGLE9BQU87WUFDTCxJQUFJLENBQUNyQixLQUFLLENBQUM0QixJQUFJLENBQUNUO1lBRWhCcEIsUUFBUThCLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRVIsV0FBVyxnQ0FBZ0MsQ0FBQztRQUM3RTtJQUNGO0lBRUFTLFNBQVNDLEtBQUssRUFBRTtRQUNkLE1BQU1DLFNBQVNELE9BQ1RoQyxVQUFVLElBQUksRUFDZGtDLGNBQWNGLE1BQU1ULFNBQVM7UUFFbkN2QixRQUFRd0IsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFVSxZQUFZLG1DQUFtQyxDQUFDO1FBRTdFLE1BQU1DLFNBQVMsSUFBSSxDQUFDakMsTUFBTSxDQUFDd0IsSUFBSSxDQUFDLENBQUNNO1lBQy9CLE1BQU1HLFNBQVNILE9BQ1RJLHNCQUFzQkgsT0FBT0wsU0FBUyxDQUFDTztZQUU3QyxJQUFJQyxxQkFBcUI7Z0JBQ3ZCLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixJQUFJRCxXQUFXLE1BQU07WUFDbkJuQyxRQUFRd0IsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFVSxZQUFZLHdEQUF3RCxDQUFDO1FBQzdGLE9BQU87WUFDTCxJQUFJLENBQUNoQyxNQUFNLENBQUMyQixJQUFJLENBQUNHO1lBRWpCaEMsUUFBUThCLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRUksWUFBWSxpQ0FBaUMsQ0FBQztRQUMvRTtJQUNGO0lBRUFHLFlBQVlDLFFBQVEsRUFBRTtRQUNwQixNQUFNQyxZQUFZRCxVQUNadEMsVUFBVSxJQUFJLEVBQ2R3QyxpQkFBaUJGLFNBQVNmLFNBQVM7UUFFekN2QixRQUFRd0IsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFZ0IsZUFBZSxzQ0FBc0MsQ0FBQztRQUVuRixNQUFNQyxZQUFZLElBQUksQ0FBQ3JDLFVBQVUsQ0FBQ3NCLElBQUksQ0FBQyxDQUFDWTtZQUN0QyxNQUFNRyxZQUFZSCxVQUNaSSw0QkFBNEJILFVBQVVYLFNBQVMsQ0FBQ2E7WUFFdEQsSUFBSUMsMkJBQTJCO2dCQUM3QixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sSUFBSUQsY0FBYyxNQUFNO1lBQ3RCekMsUUFBUXdCLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRWdCLGVBQWUsMkRBQTJELENBQUM7UUFDbkcsT0FBTztZQUNMLElBQUksQ0FBQ3BDLFVBQVUsQ0FBQ3lCLElBQUksQ0FBQ1M7WUFFckJ0QyxRQUFROEIsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFVSxlQUFlLG9DQUFvQyxDQUFDO1FBQ3JGO0lBQ0Y7SUFFQUcsYUFBYUMsU0FBUyxFQUFFO1FBQ3RCLE1BQU1DLGFBQWFELFdBQ2I1QyxVQUFVLElBQUksRUFDZDhDLGtCQUFrQkYsVUFBVXJCLFNBQVM7UUFFM0N2QixRQUFRd0IsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFc0IsZ0JBQWdCLHVDQUF1QyxDQUFDO1FBRXJGLE1BQU1DLGFBQWEsSUFBSSxDQUFDNUMsVUFBVSxDQUFDdUIsSUFBSSxDQUFDLENBQUNrQjtZQUN2QyxNQUFNRyxhQUFhSCxXQUNiSSw2QkFBNkJILFdBQVdqQixTQUFTLENBQUNtQjtZQUV4RCxJQUFJQyw0QkFBNEI7Z0JBQzlCLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixJQUFJRCxlQUFlLE1BQU07WUFDdkIvQyxRQUFRd0IsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFc0IsZ0JBQWdCLDREQUE0RCxDQUFDO1FBQ3JHLE9BQU87WUFDTCxJQUFJLENBQUMzQyxVQUFVLENBQUMwQixJQUFJLENBQUNlO1lBRXJCNUMsUUFBUThCLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRWdCLGdCQUFnQixxQ0FBcUMsQ0FBQztRQUN2RjtJQUNGO0lBRUFHLGFBQWFDLFNBQVMsRUFBRTtRQUN0QixNQUFNbEQsVUFBVSxJQUFJLEVBQ2RtRCxhQUFhRCxXQUNiRSxrQkFBa0JGLFVBQVUzQixTQUFTO1FBRTNDdkIsUUFBUXdCLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRTRCLGdCQUFnQix1Q0FBdUMsQ0FBQztRQUVyRixNQUFNQyxhQUFhLElBQUksQ0FBQy9DLFVBQVUsQ0FBQ29CLElBQUksQ0FBQyxDQUFDd0I7WUFDdkMsTUFBTUcsYUFBYUgsV0FDYkksOEJBQThCSCxXQUFXdkIsU0FBUyxDQUFDeUI7WUFFekQsSUFBSUMsNkJBQTZCO2dCQUMvQixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sSUFBSUQsZUFBZSxNQUFNO1lBQ3ZCckQsUUFBUXdCLEtBQUssQ0FBQyxDQUFDLEtBQUssRUFBRTRCLGdCQUFnQiw0REFBNEQsQ0FBQztRQUNyRyxPQUFPO1lBQ0wsSUFBSSxDQUFDOUMsVUFBVSxDQUFDdUIsSUFBSSxDQUFDcUI7WUFFckJsRCxRQUFROEIsS0FBSyxDQUFDLENBQUMsY0FBYyxFQUFFc0IsZ0JBQWdCLHFDQUFxQyxDQUFDO1FBQ3ZGO0lBQ0Y7SUFFQUcsYUFBYUMsU0FBUyxFQUFFO1FBQ3RCLE1BQU14RCxVQUFVLElBQUksRUFDZHlELGFBQWFELFdBQ2JFLGtCQUFrQkYsVUFBVWpDLFNBQVM7UUFFM0N2QixRQUFRd0IsS0FBSyxDQUFDLENBQUMsWUFBWSxFQUFFa0MsZ0JBQWdCLHVDQUF1QyxDQUFDO1FBRXJGLE1BQU1DLGFBQWEsSUFBSSxDQUFDdEQsVUFBVSxDQUFDcUIsSUFBSSxDQUFDLENBQUM4QjtZQUN2QyxNQUFNRyxhQUFhSCxXQUNiSSw4QkFBOEJILFdBQVc3QixTQUFTLENBQUMrQjtZQUV6RCxJQUFJQyw2QkFBNkI7Z0JBQy9CLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixJQUFJRCxlQUFlLE1BQU07WUFDdkIzRCxRQUFRd0IsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFa0MsZ0JBQWdCLDREQUE0RCxDQUFDO1FBQ3JHLE9BQU87WUFDTCxJQUFJLENBQUNyRCxVQUFVLENBQUN3QixJQUFJLENBQUMyQjtZQUVyQnhELFFBQVE4QixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUU0QixnQkFBZ0IscUNBQXFDLENBQUM7UUFDdkY7SUFDRjtJQUVBRyxhQUFhQyxTQUFTLEVBQUU7UUFDdEIsTUFBTTlELFVBQVUsSUFBSSxFQUNkK0QsYUFBYUQsV0FDYkUsa0JBQWtCRixVQUFVdkMsU0FBUztRQUUzQ3ZCLFFBQVF3QixLQUFLLENBQUMsQ0FBQyxZQUFZLEVBQUV3QyxnQkFBZ0IsdUNBQXVDLENBQUM7UUFFckYsTUFBTUMsYUFBYSxJQUFJLENBQUMxRCxVQUFVLENBQUNtQixJQUFJLENBQUMsQ0FBQ29DO1lBQ3ZDLE1BQU1HLGFBQWFILFdBQ2JJLDhCQUE4QkgsV0FBV25DLFNBQVMsQ0FBQ3FDO1lBRXpELElBQUlDLDZCQUE2QjtnQkFDL0IsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVOLElBQUlELGVBQWUsTUFBTTtZQUN2QmpFLFFBQVF3QixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUV3QyxnQkFBZ0IsNERBQTRELENBQUM7UUFDckcsT0FBTztZQUNMLElBQUksQ0FBQ3pELFVBQVUsQ0FBQ3NCLElBQUksQ0FBQ2lDO1lBRXJCOUQsUUFBUThCLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRWtDLGdCQUFnQixxQ0FBcUMsQ0FBQztRQUN2RjtJQUNGO0lBRUFHLGNBQWNDLFVBQVUsRUFBRTtRQUN4QixNQUFNcEUsVUFBVSxJQUFJLEVBQ2RxRSxjQUFjRCxZQUNkRSxtQkFBbUJGLFdBQVc3QyxTQUFTO1FBRTdDdkIsUUFBUXdCLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRThDLGlCQUFpQix3Q0FBd0MsQ0FBQztRQUV2RixNQUFNQyxjQUFjLElBQUksQ0FBQy9ELFdBQVcsQ0FBQ2tCLElBQUksQ0FBQyxDQUFDMEM7WUFDekMsTUFBTUcsY0FBY0gsWUFDZEksZ0NBQWdDSCxZQUFZekMsU0FBUyxDQUFDMkM7WUFFNUQsSUFBSUMsK0JBQStCO2dCQUNqQyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sSUFBSUQsZ0JBQWdCLE1BQU07WUFDeEJ2RSxRQUFRd0IsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFOEMsaUJBQWlCLDZEQUE2RCxDQUFDO1FBQ3ZHLE9BQU87WUFDTCxJQUFJLENBQUM5RCxXQUFXLENBQUNxQixJQUFJLENBQUN1QztZQUV0QnBFLFFBQVE4QixLQUFLLENBQUMsQ0FBQyxjQUFjLEVBQUV3QyxpQkFBaUIsc0NBQXNDLENBQUM7UUFDekY7SUFDRjtJQUVBRyxnQkFBZ0JDLFlBQVksRUFBRTtRQUM1QixNQUFNMUUsVUFBVSxJQUFJLEVBQ2QyRSxnQkFBZ0JELGNBQ2hCRSxxQkFBcUJGLGFBQWFuRCxTQUFTO1FBRWpEdkIsUUFBUXdCLEtBQUssQ0FBQyxDQUFDLFlBQVksRUFBRW9ELG1CQUFtQiwwQ0FBMEMsQ0FBQztRQUUzRixNQUFNQyxnQkFBZ0IsSUFBSSxDQUFDcEUsYUFBYSxDQUFDaUIsSUFBSSxDQUFDLENBQUNnRDtZQUM3QyxNQUFNRyxnQkFBZ0JILGNBQ2hCSSxvQ0FBb0NILGNBQWMvQyxTQUFTLENBQUNpRDtZQUVsRSxJQUFJQyxtQ0FBbUM7Z0JBQ3JDLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixJQUFJRCxrQkFBa0IsTUFBTTtZQUMxQjdFLFFBQVF3QixLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUVvRCxtQkFBbUIsK0RBQStELENBQUM7UUFDM0csT0FBTztZQUNMLElBQUksQ0FBQ25FLGFBQWEsQ0FBQ29CLElBQUksQ0FBQzZDO1lBRXhCMUUsUUFBUThCLEtBQUssQ0FBQyxDQUFDLGNBQWMsRUFBRThDLG1CQUFtQix3Q0FBd0MsQ0FBQztRQUM3RjtJQUNGO0lBRUFHLDJCQUEyQjtRQUN6QixNQUFNQyxtQkFBbUIsSUFBSSxFQUFHLEdBQUc7UUFFbkMsT0FBT0E7SUFDVDtJQUVBQyxtQkFBbUJDLFFBQVEsRUFBRTtRQUMzQixNQUFNOUQsT0FBTyxJQUFJLENBQUNuQixLQUFLLENBQUN5QixJQUFJLENBQUMsQ0FBQ047WUFDNUIsTUFBTStELGtCQUFrQi9ELEtBQUtnRSxhQUFhLENBQUNGO1lBRTNDLElBQUlDLGlCQUFpQjtnQkFDbkIsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVOLE9BQU8vRDtJQUNUO0lBRUFpRSxxQkFBcUJDLFNBQVMsRUFBRTtRQUM5QixNQUFNdEQsUUFBUSxJQUFJLENBQUM5QixNQUFNLENBQUN3QixJQUFJLENBQUMsQ0FBQ007WUFDOUIsTUFBTXVELG1CQUFtQnZELE1BQU13RCxjQUFjLENBQUNGO1lBRTlDLElBQUlDLGtCQUFrQjtnQkFDcEIsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVOLE9BQU92RDtJQUNUO0lBRUF5RCw2QkFBNkJDLGFBQWEsRUFBRTtRQUMxQyxNQUFNOUMsWUFBWSxJQUFJLENBQUN6QyxVQUFVLENBQUN1QixJQUFJLENBQUMsQ0FBQ2tCO1lBQ3RDLE1BQU0rQyx1QkFBdUIvQyxVQUFVZ0Qsa0JBQWtCLENBQUNGO1lBRTFELElBQUlDLHNCQUFzQjtnQkFDeEIsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVOLE9BQU8vQztJQUNUO0lBRUFpRCwyQkFBMkJDLFlBQVksRUFBRTtRQUN2QyxNQUFNeEQsV0FBVyxJQUFJLENBQUNsQyxVQUFVLENBQUNzQixJQUFJLENBQUMsQ0FBQ1k7WUFDckMsTUFBTXlELHNCQUFzQnpELFNBQVMwRCxpQkFBaUIsQ0FBQ0Y7WUFFdkQsSUFBSUMscUJBQXFCO2dCQUN2QixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sT0FBT3pEO0lBQ1Q7SUFFQTJELDZCQUE2QkMsYUFBYSxFQUFFO1FBQzFDLE1BQU1oRCxZQUFZLElBQUksQ0FBQzVDLFVBQVUsQ0FBQ29CLElBQUksQ0FBQyxDQUFDd0I7WUFDdEMsTUFBTWlELHVCQUF1QmpELFVBQVVrRCxrQkFBa0IsQ0FBQ0Y7WUFFMUQsSUFBSUMsc0JBQXNCO2dCQUN4QixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sT0FBT2pEO0lBQ1Q7SUFFQW1ELDZCQUE2QkMsYUFBYSxFQUFFO1FBQzFDLE1BQU14QyxZQUFZLElBQUksQ0FBQ3ZELFVBQVUsQ0FBQ21CLElBQUksQ0FBQyxDQUFDb0M7WUFDdEMsTUFBTXlDLCtCQUErQnpDLFVBQVUwQyxrQkFBa0IsQ0FBQ0Y7WUFFbEUsSUFBSUMsOEJBQThCO2dCQUNoQyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sT0FBT3pDO0lBQ1Q7SUFFQTJDLDZCQUE2QkMsYUFBYSxFQUFFO1FBQzFDLE1BQU1sRCxZQUFZLElBQUksQ0FBQ25ELFVBQVUsQ0FBQ3FCLElBQUksQ0FBQyxDQUFDOEI7WUFDdEMsTUFBTW1ELHVCQUF1Qm5ELFVBQVVvRCxrQkFBa0IsQ0FBQ0Y7WUFFMUQsSUFBSUMsc0JBQXNCO2dCQUN4QixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sT0FBT25EO0lBQ1Q7SUFFQXFELCtCQUErQkMsY0FBYyxFQUFFO1FBQzdDLE1BQU0xQyxhQUFhLElBQUksQ0FBQzVELFdBQVcsQ0FBQ2tCLElBQUksQ0FBQyxDQUFDMEM7WUFDeEMsTUFBTTJDLHdCQUF3QjNDLFdBQVc0QyxtQkFBbUIsQ0FBQ0Y7WUFFN0QsSUFBSUMsdUJBQXVCO2dCQUN6QixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sT0FBTzNDO0lBQ1Q7SUFFQTZDLGdDQUFnQ0MsZ0JBQWdCLEVBQUU7UUFDaEQsTUFBTXBELFlBQVksSUFBSSxDQUFDdkQsVUFBVSxDQUFDbUIsSUFBSSxDQUFDLENBQUNvQztZQUN0QyxNQUFNcUQsa0NBQWtDckQsVUFBVXNELHFCQUFxQixDQUFDRjtZQUV4RSxJQUFJQyxpQ0FBaUM7Z0JBQ25DLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixPQUFPckQ7SUFDVDtJQUVBdUQsbUNBQW1DQyxnQkFBZ0IsRUFBRTtRQUNuRCxNQUFNNUMsZUFBZSxJQUFJLENBQUNqRSxhQUFhLENBQUNpQixJQUFJLENBQUMsQ0FBQ2dEO1lBQzVDLE1BQU02QywwQkFBMEI3QyxhQUFhOEMscUJBQXFCLENBQUNGO1lBRW5FLElBQUlDLHlCQUF5QjtnQkFDM0IsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVOLE9BQU83QztJQUNUO0lBRUErQyx3QkFBd0J2QyxRQUFRLEVBQUU7UUFDaEMsTUFBTTlELE9BQU8sSUFBSSxDQUFDNkQsa0JBQWtCLENBQUNDLFdBQy9Cd0MsY0FBZXRHLFNBQVM7UUFFOUIsT0FBT3NHO0lBQ1Q7SUFFQUMsMEJBQTBCckMsU0FBUyxFQUFFO1FBQ25DLE1BQU10RCxRQUFRLElBQUksQ0FBQ3FELG9CQUFvQixDQUFDQyxZQUNsQ3NDLGVBQWdCNUYsVUFBVTtRQUVoQyxPQUFPNEY7SUFDVDtJQUVBQyxnQ0FBZ0MvQixZQUFZLEVBQUU7UUFDNUMsTUFBTXhELFdBQVcsSUFBSSxDQUFDdUQsMEJBQTBCLENBQUNDLGVBQzNDZ0Msa0JBQW1CeEYsYUFBYTtRQUV0QyxPQUFPd0Y7SUFDVDtJQUVBQyxrQ0FBa0NyQyxhQUFhLEVBQUU7UUFDL0MsTUFBTTlDLFlBQVksSUFBSSxDQUFDNkMsNEJBQTRCLENBQUNDLGdCQUM5Q3NDLG1CQUFvQnBGLGNBQWM7UUFFeEMsT0FBT29GO0lBQ1Q7SUFFQUMsa0NBQWtDL0IsYUFBYSxFQUFFO1FBQy9DLE1BQU1oRCxZQUFZLElBQUksQ0FBQytDLDRCQUE0QixDQUFDQyxnQkFDOUNnQyxtQkFBb0JoRixjQUFjO1FBRXhDLE9BQU9nRjtJQUNUO0lBRUFDLGtDQUFrQ3pCLGFBQWEsRUFBRTtRQUMvQyxNQUFNbEQsWUFBWSxJQUFJLENBQUNpRCw0QkFBNEIsQ0FBQ0MsZ0JBQzlDMEIsbUJBQW9CNUUsY0FBYztRQUV4QyxPQUFPNEU7SUFDVDtJQUVBQyxvQ0FBb0N2QixjQUFjLEVBQUU7UUFDbEQsTUFBTTFDLGFBQWEsSUFBSSxDQUFDeUMsOEJBQThCLENBQUNDLGlCQUNqRHdCLG9CQUFxQmxFLGVBQWU7UUFFMUMsT0FBT2tFO0lBQ1Q7SUFFQUMscUNBQXFDckIsZ0JBQWdCLEVBQUU7UUFDckQsTUFBTXBELFlBQVksSUFBSSxDQUFDbUQsK0JBQStCLENBQUNDLG1CQUNqRHNCLG1CQUFvQjFFLGNBQWM7UUFFeEMsT0FBTzBFO0lBQ1Q7SUFFQUMsd0NBQXdDbkIsZ0JBQWdCLEVBQUU7UUFDeEQsTUFBTTVDLGVBQWUsSUFBSSxDQUFDMkMsa0NBQWtDLENBQUNDLG1CQUN2RG9CLHNCQUF1QmhFLGlCQUFpQjtRQUU5QyxPQUFPZ0U7SUFDVDtJQUVBQyxXQUFXQyxJQUFJLEVBQUU7UUFDZixNQUFNNUksVUFBVSxJQUFJLEVBQUUsR0FBRztRQUV6QixJQUFJLENBQUNDLEtBQUssR0FBRzRJLElBQUFBLG1CQUFhLEVBQUNELE1BQU01STtRQUNqQyxJQUFJLENBQUNNLFVBQVUsR0FBR3dJLElBQUFBLHdCQUFrQixFQUFDRixNQUFNNUk7UUFDM0MsSUFBSSxDQUFDTyxVQUFVLEdBQUd3SSxJQUFBQSx3QkFBa0IsRUFBQ0gsTUFBTTVJO1FBRTNDLElBQUksQ0FBQ0ksVUFBVSxHQUFHNEksSUFBQUEsd0JBQWtCLEVBQUNKLE1BQU01STtRQUMzQyxJQUFJLENBQUNRLFdBQVcsR0FBR3lJLElBQUFBLHlCQUFtQixFQUFDTCxNQUFNNUk7UUFFN0MsSUFBSSxDQUFDRSxNQUFNLEdBQUdnSixJQUFBQSxvQkFBYyxFQUFDTixNQUFNNUk7UUFFbkMsSUFBSSxDQUFDRyxVQUFVLEdBQUdnSixJQUFBQSx3QkFBa0IsRUFBQ1AsTUFBTTVJO1FBQzNDLElBQUksQ0FBQ0ssVUFBVSxHQUFHK0ksSUFBQUEsd0JBQWtCLEVBQUNSLE1BQU01STtRQUMzQyxJQUFJLENBQUNTLGFBQWEsR0FBRzRJLElBQUFBLDJCQUFxQixFQUFDVCxNQUFNNUk7SUFDbkQ7SUFFQXNKLFNBQVM7UUFDUCxNQUFNQyxZQUFZQyxJQUFBQSxzQkFBZ0IsRUFBQyxJQUFJLENBQUN2SixLQUFLLEdBQ3ZDd0osYUFBYUMsSUFBQUEsd0JBQWtCLEVBQUMsSUFBSSxDQUFDeEosTUFBTSxHQUMzQ3lKLGlCQUFpQkMsSUFBQUEsZ0NBQTBCLEVBQUMsSUFBSSxDQUFDekosVUFBVSxHQUMzRDBKLGlCQUFpQkMsSUFBQUEsZ0NBQTBCLEVBQUMsSUFBSSxDQUFDMUosVUFBVSxHQUMzRDJKLGlCQUFpQkMsSUFBQUEsZ0NBQTBCLEVBQUMsSUFBSSxDQUFDMUosVUFBVSxHQUMzRDJKLGlCQUFpQkMsSUFBQUEsZ0NBQTBCLEVBQUMsSUFBSSxDQUFDN0osVUFBVSxHQUMzRDhKLGlCQUFpQkMsSUFBQUEsZ0NBQTBCLEVBQUMsSUFBSSxDQUFDN0osVUFBVSxHQUMzRDhKLGtCQUFrQkMsSUFBQUEsa0NBQTRCLEVBQUMsSUFBSSxDQUFDOUosV0FBVyxHQUMvRCtKLG9CQUFvQkMsSUFBQUEsc0NBQWdDLEVBQUMsSUFBSSxDQUFDL0osYUFBYSxHQUN2RVIsUUFBUXNKLFdBQ1JySixTQUFTdUosWUFDVHRKLGFBQWF3SixnQkFDYnZKLGFBQWF5SixnQkFDYnZKLGFBQWF5SixnQkFDYjFKLGFBQWE0SixnQkFDYjFKLGFBQWE0SixnQkFDYjNKLGNBQWM2SixpQkFDZDVKLGdCQUFnQjhKLG1CQUNoQjNCLE9BQU87WUFDTDNJO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FFO1lBQ0FEO1lBQ0FFO1lBQ0FDO1lBQ0FDO1FBQ0Y7UUFFTixPQUFPbUk7SUFDVDtJQUVBLE9BQU82QixTQUFTN0IsSUFBSSxFQUFFNUksT0FBTyxFQUFFO1FBQzdCLE1BQU1DLFFBQVEsTUFDUkMsU0FBUyxNQUNUQyxhQUFhLE1BQ2JDLGFBQWEsTUFDYkUsYUFBYSxNQUNiRCxhQUFhLE1BQ2JFLGFBQWEsTUFDYkMsY0FBYyxNQUNkQyxnQkFBZ0IsTUFDaEJpSyxvQkFBb0IsSUFBSTVLLGlCQUFpQkUsU0FBU0MsT0FBT0MsUUFBUUMsWUFBWUMsWUFBWUMsWUFBWUMsWUFBWUMsWUFBWUMsYUFBYUM7UUFFaEppSyxrQkFBa0IvQixVQUFVLENBQUNDO1FBRTdCLE9BQU84QjtJQUNUO0lBRUEsT0FBT0MsWUFBWTNLLE9BQU8sRUFBRTtRQUMxQixNQUFNQyxRQUFRLEVBQUUsRUFDVkMsU0FBUyxFQUFFLEVBQ1hDLGFBQWEsRUFBRSxFQUNmQyxhQUFhLEVBQUUsRUFDZkUsYUFBYSxFQUFFLEVBQ2ZELGFBQWEsRUFBRSxFQUNmRSxhQUFhLEVBQUUsRUFDZkMsY0FBYyxFQUFFLEVBQ2hCQyxnQkFBZ0IsRUFBRSxFQUNsQmlLLG9CQUFvQixJQUFJNUssaUJBQWlCRSxTQUFTQyxPQUFPQyxRQUFRQyxZQUFZQyxZQUFZQyxZQUFZQyxZQUFZQyxZQUFZQyxhQUFhQztRQUVoSixPQUFPaUs7SUFDVDtJQUVBLE9BQU9FLFlBQVk1SyxPQUFPLEVBQUUsQ0FFNUI7QUFDRiJ9