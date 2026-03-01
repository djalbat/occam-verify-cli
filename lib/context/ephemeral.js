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
        this.frames = (0, _json.framesFromJSON)(json, context);
        this.judgements = (0, _json.judgementsFromJSON)(json, context);
        this.equalities = (0, _json.equalitiesFromJSON)(json, context);
        this.statements = (0, _json.statementsFromJSON)(json, context);
        this.assertions = (0, _json.assertionsFromJSON)(json, context);
        this.references = (0, _json.referencesFromJSON)(json, context);
        this.assumptions = (0, _json.assumptionsFromJSON)(json, context);
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwaGVtZXJhbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdGVybXMsIGZyYW1lcywganVkZ2VtZW50cywgZXF1YWxpdGllcywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzO1xuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXM7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9ucztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHJlZmVyZW5jZXM7XG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZXM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVxdWFsaXRpZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1CID0gdGhpcy50ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh0ZXJtQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZUEgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZUIgPSB0aGlzLmZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVCID0gZnJhbWUsIC8vL1xuICAgICAgICAgICAgZnJhbWVBRXF1YWxUb0ZyYW1lQiA9IGZyYW1lQS5pc0VxdWFsVG8oZnJhbWVCKTtcblxuICAgICAgaWYgKGZyYW1lQUVxdWFsVG9GcmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChmcmFtZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVhbGl0eVN0cmluZyA9IGVxdWFsaXR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZXF1YWxpdHlCID0gdGhpcy5lcXVhbGl0aWVzLmZpbmQoKGVxdWFsaXR5KSA9PiB7XG4gICAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgICAgICBlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCID0gZXF1YWxpdHlBLmlzRXF1YWxUbyhlcXVhbGl0eUIpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5Qikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVxdWFsaXR5QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXF1YWxpdGllcy5wdXNoKGVxdWFsaXR5KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRBID0ganVkZ2VtZW50LCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0ganVkZ2VtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRCID0gdGhpcy5qdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgY29uc3QganVkZ2VtZW50QiA9IGp1ZGdlbWVudCwgLy8vXG4gICAgICAgICAgICBqdWRnZW1lbnRBRXF1YWxUb0VxdWFsaXR5QiA9IGp1ZGdlbWVudEEuaXNFcXVhbFRvKGp1ZGdlbWVudEIpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChqdWRnZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmp1ZGdlbWVudHMucHVzaChqdWRnZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEEgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50QiA9IHRoaXMuc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudEIgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCID0gc3RhdGVtZW50QS5pc0VxdWFsVG8oc3RhdGVtZW50Qik7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlbWVudHMucHVzaChzdGF0ZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc2VydGlvbkEgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgIGFzc2VydGlvblN0cmluZyA9IGFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uQiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gYXNzZXJ0aW9uQS5pc0VxdWFsVG8oYXNzZXJ0aW9uQik7XG5cbiAgICAgIGlmIChhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChhc3NlcnRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZUEgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlQiA9IHRoaXMucmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZUIgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCID0gcmVmZXJlbmNlQS5pc0VxdWFsVG8ocmVmZXJlbmNlQik7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChyZWZlcmVuY2VCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbkEgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gYXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uQiA9IHRoaXMuYXNzdW1wdGlvbnMuZmluZCgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbkIgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CID0gYXNzdW1wdGlvbkEuaXNFcXVhbFRvKGFzc3VtcHRpb25CKTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoYXNzdW1wdGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG5cbiAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVOb2RlTWF0Y2hlcyA9IGZyYW1lLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICBjb25zdCBqdWRnZW1lbnROb2RlTWF0Y2hlcyA9IGp1ZGdlbWVudC5tYXRjaEp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChqdWRnZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcy5lcXVhbGl0aWVzLmZpbmQoKGVxdWFsaXR5KSA9PiB7XG4gICAgICBjb25zdCBlcXVhbGl0eU5vZGVNYXRjaGVzID0gZXF1YWxpdHkubWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgICAgaWYgKGVxdWFsaXR5Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpcy5hc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBhc3NlcnRpb24ubWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgICBpZiAoYXNzZXJ0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5hc3N1bXB0aW9ucy5maW5kKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3N1bXB0aW9uTm9kZU1hdGNoZXMgPSBhc3N1bXB0aW9uLm1hdGNoQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgICBpZiAoYXNzdW1wdGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gKHRlcm0gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSAoZnJhbWUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGZyYW1lUHJlc2VudDtcbiAgfVxuXG4gIGlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHlQcmVzZW50ID0gKGVxdWFsaXR5ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMuZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gKGp1ZGdlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudFByZXNlbnQgPSAoc3RhdGVtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzLmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgYXNzZXJ0aW9uUHJlc2VudCA9IChhc3NlcnRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc3VtcHRpb25QcmVzZW50QnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgYXNzdW1wdGlvblByZXNlbnQgPSAoYXNzdW1wdGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VQcmVzZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5lcXVhbGl0aWVzID0gZXF1YWxpdGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLmFzc2VydGlvbnMgPSBhc3NlcnRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gcmVmZXJlbmNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRoaXMudGVybXMpLFxuICAgICAgICAgIGZyYW1lc0pTT04gPSBmcmFtZXNUb0ZyYW1lc0pTT04odGhpcy5mcmFtZXMpLFxuICAgICAgICAgIGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04odGhpcy5qdWRnZW1lbnRzKSxcbiAgICAgICAgICBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OKHRoaXMuZXF1YWxpdGllcyksXG4gICAgICAgICAgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTih0aGlzLnN0YXRlbWVudHMpLFxuICAgICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04odGhpcy5hc3NlcnRpb25zKSxcbiAgICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OKHRoaXMucmVmZXJlbmNlcyksXG4gICAgICAgICAgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTih0aGlzLmFzc3VtcHRpb25zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHRoaXMuc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgdGVybXMgPSB0ZXJtc0pTT04sIC8vL1xuICAgICAgICAgIGZyYW1lcyA9IGZyYW1lc0pTT04sIC8vL1xuICAgICAgICAgIGp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzSlNPTiwgLy8vXG4gICAgICAgICAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNKU09OLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0pTT04sIC8vL1xuICAgICAgICAgIGFzc2VydGlvbnMgPSBhc3NlcnRpb25zSlNPTiwgLy8vXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNKU09OLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zSlNPTiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybXMsXG4gICAgICAgICAgICBmcmFtZXMsXG4gICAgICAgICAgICBqdWRnZW1lbnRzLFxuICAgICAgICAgICAgZXF1YWxpdGllcyxcbiAgICAgICAgICAgIHN0YXRlbWVudHMsXG4gICAgICAgICAgICBhc3NlcnRpb25zLFxuICAgICAgICAgICAgcmVmZXJlbmNlcyxcbiAgICAgICAgICAgIGFzc3VtcHRpb25zLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBudWxsLFxuICAgICAgICAgIGZyYW1lcyA9IG51bGwsXG4gICAgICAgICAganVkZ2VtZW50cyA9IG51bGwsXG4gICAgICAgICAgZXF1YWxpdGllcyA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50cyA9IG51bGwsXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IG51bGwsXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IG51bGwsXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICAgIGVtcGhlbWVyYWxDb250ZXh0ID0gbmV3IEVwaGVtZXJhbENvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywganVkZ2VtZW50cywgZXF1YWxpdGllcywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgZW1waGVtZXJhbENvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgZXF1YWxpdGllcyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IFtdLFxuICAgICAgICAgIGFzc3VtcHRpb25zID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGVtcGhlbWVyYWxDb250ZXh0ID0gbmV3IEVwaGVtZXJhbENvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywganVkZ2VtZW50cywgZXF1YWxpdGllcywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXBoZW1lcmFsQ29udGV4dCIsIkNvbnRleHQiLCJjb250ZXh0IiwidGVybXMiLCJmcmFtZXMiLCJqdWRnZW1lbnRzIiwiZXF1YWxpdGllcyIsImFzc2VydGlvbnMiLCJzdGF0ZW1lbnRzIiwicmVmZXJlbmNlcyIsImFzc3VtcHRpb25zIiwic3Vic3RpdHV0aW9ucyIsImdldFRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0RXF1YWxpdGllcyIsImdldEp1ZGdlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImdldFJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImdldFN1YnN0aXR1dGlvbnMiLCJhZGRUZXJtIiwidGVybSIsInRlcm1BIiwidGVybVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwidGVybUIiLCJmaW5kIiwidGVybUFFcXVhbFRvVGVybUIiLCJpc0VxdWFsVG8iLCJwdXNoIiwiZGVidWciLCJhZGRGcmFtZSIsImZyYW1lIiwiZnJhbWVBIiwiZnJhbWVTdHJpbmciLCJmcmFtZUIiLCJmcmFtZUFFcXVhbFRvRnJhbWVCIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QSIsImVxdWFsaXR5U3RyaW5nIiwiZXF1YWxpdHlCIiwiZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5QiIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEEiLCJqdWRnZW1lbnRTdHJpbmciLCJqdWRnZW1lbnRCIiwianVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIiLCJhZGRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRBIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50QiIsInN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50QiIsImFkZEFzc2VydGlvbiIsImFzc2VydGlvbiIsImFzc2VydGlvbkEiLCJhc3NlcnRpb25TdHJpbmciLCJhc3NlcnRpb25CIiwiYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CIiwiYWRkUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlQSIsInJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZUIiLCJyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIiLCJhZGRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25BIiwiYXNzdW1wdGlvblN0cmluZyIsImFzc3VtcHRpb25CIiwiYXNzdW1wdGlvbkFFcXVhbFRvQXNzdW1wdGlvbkIiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoSnVkZ2VtZW50Tm9kZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlTWF0Y2hlcyIsIm1hdGNoRXF1YWxpdHlOb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc2VydGlvbk5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFByZXNlbnQiLCJpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25QcmVzZW50IiwiaXNBc3N1bXB0aW9uUHJlc2VudEJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uUHJlc2VudCIsImlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiaW5pdGlhbGlzZSIsImpzb24iLCJ0ZXJtc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJzdGF0ZW1lbnRzRnJvbUpTT04iLCJhc3NlcnRpb25zRnJvbUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJhc3N1bXB0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwidG9KU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImZyYW1lc0pTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJqdWRnZW1lbnRzSlNPTiIsImp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OIiwiZXF1YWxpdGllc0pTT04iLCJlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTiIsInN0YXRlbWVudHNKU09OIiwic3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04iLCJhc3NlcnRpb25zSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwicmVmZXJlbmNlc0pTT04iLCJyZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTiIsImFzc3VtcHRpb25zSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwiZnJvbUpTT04iLCJlbXBoZW1l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