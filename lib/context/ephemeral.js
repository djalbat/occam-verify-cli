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
    addSubstitution(substitution, scoped = false) {
        if (scoped) {
            const context = this.getContext();
            context.addSubstitution(substitution, scoped);
            return;
        }
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
    addSubstitutions(substitutions) {
        substitutions.forEach((substitution)=>{
            this.addSubstitution(substitution);
        });
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
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVwaGVtZXJhbENvbnRleHQgZXh0ZW5kcyBDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdGVybXMsIGZyYW1lcywganVkZ2VtZW50cywgZXF1YWxpdGllcywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdXBlcihjb250ZXh0KTtcblxuICAgIHRoaXMudGVybXMgPSB0ZXJtcztcbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lcztcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzO1xuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXM7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9ucztcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHJlZmVyZW5jZXM7XG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRUZXJtcygpIHtcbiAgICByZXR1cm4gdGhpcy50ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5mcmFtZXM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKCkge1xuICAgIHJldHVybiB0aGlzLmVxdWFsaXRpZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKCkge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3N1bXB0aW9ucztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1CID0gdGhpcy50ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh0ZXJtQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZUEgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZUIgPSB0aGlzLmZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVCID0gZnJhbWUsIC8vL1xuICAgICAgICAgICAgZnJhbWVBRXF1YWxUb0ZyYW1lQiA9IGZyYW1lQS5pc0VxdWFsVG8oZnJhbWVCKTtcblxuICAgICAgaWYgKGZyYW1lQUVxdWFsVG9GcmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChmcmFtZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVhbGl0eVN0cmluZyA9IGVxdWFsaXR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZXF1YWxpdHlCID0gdGhpcy5lcXVhbGl0aWVzLmZpbmQoKGVxdWFsaXR5KSA9PiB7XG4gICAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgICAgICBlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCID0gZXF1YWxpdHlBLmlzRXF1YWxUbyhlcXVhbGl0eUIpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5Qikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVxdWFsaXR5QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXF1YWxpdGllcy5wdXNoKGVxdWFsaXR5KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRBID0ganVkZ2VtZW50LCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0ganVkZ2VtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRCID0gdGhpcy5qdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgY29uc3QganVkZ2VtZW50QiA9IGp1ZGdlbWVudCwgLy8vXG4gICAgICAgICAgICBqdWRnZW1lbnRBRXF1YWxUb0VxdWFsaXR5QiA9IGp1ZGdlbWVudEEuaXNFcXVhbFRvKGp1ZGdlbWVudEIpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChqdWRnZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmp1ZGdlbWVudHMucHVzaChqdWRnZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEEgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50QiA9IHRoaXMuc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudEIgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCID0gc3RhdGVtZW50QS5pc0VxdWFsVG8oc3RhdGVtZW50Qik7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlbWVudHMucHVzaChzdGF0ZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc2VydGlvbkEgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgIGFzc2VydGlvblN0cmluZyA9IGFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uQiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gYXNzZXJ0aW9uQS5pc0VxdWFsVG8oYXNzZXJ0aW9uQik7XG5cbiAgICAgIGlmIChhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChhc3NlcnRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZUEgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlQiA9IHRoaXMucmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZUIgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCID0gcmVmZXJlbmNlQS5pc0VxdWFsVG8ocmVmZXJlbmNlQik7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChyZWZlcmVuY2VCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbkEgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gYXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uQiA9IHRoaXMuYXNzdW1wdGlvbnMuZmluZCgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbkIgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CID0gYXNzdW1wdGlvbkEuaXNFcXVhbFRvKGFzc3VtcHRpb25CKTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoYXNzdW1wdGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNjb3BlZCA9IGZhbHNlKSB7XG4gICAgaWYgKHNjb3BlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24sIHNjb3BlZCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucykge1xuICAgIHN1YnN0aXR1dGlvbnMuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMudGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcblxuICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMuanVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGp1ZGdlbWVudE5vZGVNYXRjaGVzID0ganVkZ2VtZW50Lm1hdGNoSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKTtcblxuICAgICAgaWYgKGp1ZGdlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLmVxdWFsaXRpZXMuZmluZCgoZXF1YWxpdHkpID0+IHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSBlcXVhbGl0eS5tYXRjaEVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5zdGF0ZW1lbnRzLmZpbmQoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdGF0ZW1lbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzLmFzc2VydGlvbnMuZmluZCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICBjb25zdCBhc3NlcnRpb25Ob2RlTWF0Y2hlcyA9IGFzc2VydGlvbi5tYXRjaEFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChhc3NlcnRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmFzc3VtcHRpb25zLmZpbmQoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IGFzc3VtcHRpb24ubWF0Y2hBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgICAgIGlmIChhc3N1bXB0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5yZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdGVybVByZXNlbnQgPSAodGVybSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdGVybVByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIGZyYW1lUHJlc2VudCA9IChmcmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZnJhbWVQcmVzZW50O1xuICB9XG5cbiAgaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICBlcXVhbGl0eVByZXNlbnQgPSAoZXF1YWxpdHkgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5UHJlc2VudDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50UHJlc2VudCA9IChzdGF0ZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXMuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gKGFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzQXNzdW1wdGlvblByZXNlbnRCeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSxcbiAgICAgICAgICBhc3N1bXB0aW9uUHJlc2VudCA9IChhc3N1bXB0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZVByZXNlbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VQcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gcmVmZXJlbmNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5lcXVhbGl0aWVzID0gZXF1YWxpdGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuanVkZ2VtZW50cyA9IGp1ZGdlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLmFzc2VydGlvbnMgPSBhc3NlcnRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGhpcy50ZXJtcyksXG4gICAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lc1RvRnJhbWVzSlNPTih0aGlzLmZyYW1lcyksXG4gICAgICAgICAganVkZ2VtZW50c0pTT04gPSBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTih0aGlzLmp1ZGdlbWVudHMpLFxuICAgICAgICAgIGVxdWFsaXRpZXNKU09OID0gZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04odGhpcy5lcXVhbGl0aWVzKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OKHRoaXMuc3RhdGVtZW50cyksXG4gICAgICAgICAgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTih0aGlzLmFzc2VydGlvbnMpLFxuICAgICAgICAgIHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04odGhpcy5yZWZlcmVuY2VzKSxcbiAgICAgICAgICBhc3N1bXB0aW9uc0pTT04gPSBhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OKHRoaXMuYXNzdW1wdGlvbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICB0ZXJtcyA9IHRlcm1zSlNPTiwgLy8vXG4gICAgICAgICAgZnJhbWVzID0gZnJhbWVzSlNPTiwgLy8vXG4gICAgICAgICAganVkZ2VtZW50cyA9IGp1ZGdlbWVudHNKU09OLCAvLy9cbiAgICAgICAgICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0pTT04sIC8vL1xuICAgICAgICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzSlNPTiwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNKU09OLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlc0pTT04sIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNKU09OLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICB0ZXJtcyxcbiAgICAgICAgICAgIGZyYW1lcyxcbiAgICAgICAgICAgIGp1ZGdlbWVudHMsXG4gICAgICAgICAgICBlcXVhbGl0aWVzLFxuICAgICAgICAgICAgc3RhdGVtZW50cyxcbiAgICAgICAgICAgIGFzc2VydGlvbnMsXG4gICAgICAgICAgICByZWZlcmVuY2VzLFxuICAgICAgICAgICAgYXNzdW1wdGlvbnMsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IG51bGwsXG4gICAgICAgICAgZnJhbWVzID0gbnVsbCxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICBhc3NlcnRpb25zID0gbnVsbCxcbiAgICAgICAgICByZWZlcmVuY2VzID0gbnVsbCxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgICAgZW1waGVtZXJhbENvbnRleHQgPSBuZXcgRXBoZW1lcmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBqdWRnZW1lbnRzLCBlcXVhbGl0aWVzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBlbXBoZW1lcmFsQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuXG4gICAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGZyYW1lcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gW10sXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgZW1waGVtZXJhbENvbnRleHQgPSBuZXcgRXBoZW1lcmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBqdWRnZW1lbnRzLCBlcXVhbGl0aWVzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcGhlbWVyYWxDb250ZXh0IiwiQ29udGV4dCIsImNvbnRleHQiLCJ0ZXJtcyIsImZyYW1lcyIsImp1ZGdlbWVudHMiLCJlcXVhbGl0aWVzIiwiYXNzZXJ0aW9ucyIsInN0YXRlbWVudHMiLCJyZWZlcmVuY2VzIiwiYXNzdW1wdGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0VGVybXMiLCJnZXRGcmFtZXMiLCJnZXRFcXVhbGl0aWVzIiwiZ2V0SnVkZ2VtZW50cyIsImdldFN0YXRlbWVudHMiLCJnZXRBc3NlcnRpb25zIiwiZ2V0UmVmZXJlbmNlcyIsImdldEFzc3VtcHRpb25zIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImFkZFRlcm0iLCJ0ZXJtIiwidGVybUEiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtQiIsImZpbmQiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsImlzRXF1YWxUbyIsInB1c2giLCJkZWJ1ZyIsImFkZEZyYW1lIiwiZnJhbWUiLCJmcmFtZUEiLCJmcmFtZVN0cmluZyIsImZyYW1lQiIsImZyYW1lQUVxdWFsVG9GcmFtZUIiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlBIiwiZXF1YWxpdHlTdHJpbmciLCJlcXVhbGl0eUIiLCJlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QSIsImp1ZGdlbWVudFN0cmluZyIsImp1ZGdlbWVudEIiLCJqdWRnZW1lbnRBRXF1YWxUb0VxdWFsaXR5QiIsImFkZFN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudEEiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRCIiwic3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCIiwiYWRkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uIiwiYXNzZXJ0aW9uQSIsImFzc2VydGlvblN0cmluZyIsImFzc2VydGlvbkIiLCJhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIiLCJhZGRSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VBIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlQiIsInJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQiIsImFkZEFzc3VtcHRpb24iLCJhc3N1bXB0aW9uIiwiYXNzdW1wdGlvbkEiLCJhc3N1bXB0aW9uU3RyaW5nIiwiYXNzdW1wdGlvbkIiLCJhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQiIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInNjb3BlZCIsImdldENvbnRleHQiLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImFkZFN1YnN0aXR1dGlvbnMiLCJmb3JFYWNoIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hKdWRnZW1lbnROb2RlIiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGVNYXRjaGVzIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VNYXRjaGVSZWZlcmVuY2VOb2RlIiwibWF0Y2hSZWZlcmVuY2VOb2RlIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzZXJ0aW9uTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3N1bXB0aW9uTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSIsInRlcm1QcmVzZW50IiwiaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZSIsImZyYW1lUHJlc2VudCIsImlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eVByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJlc2VudCIsImlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJpc0Fzc3VtcHRpb25QcmVzZW50QnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25QcmVzZW50IiwiaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJpbml0aWFsaXNlIiwianNvbiIsInRlcm1zRnJvbUpTT04iLCJzdGF0ZW1lbnRzRnJvbUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJhc3N1bXB0aW9uc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJhc3NlcnRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJ0b0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsImp1ZGdlbWVudHNKU09OIiwianVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04iLCJlcXVhbGl0aWVzSlNPTiIsImVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OIiwic3RhdGVtZW50c0pTT04iLCJzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTiIsImFzc2VydGlvbnNKU09OIiwiYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04iLCJyZWZlcmVuY2VzSlNPTiIsInJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OIiwiYXNzdW1wdGlvbnNKU09OIiwiYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJmcm9tSlNPTiIsImVtcGhlbWVyYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVCQTs7O2VBQXFCQTs7O2dFQXJCRDtzQkFtQjZCOzs7Ozs7QUFFbEMsTUFBTUEseUJBQXlCQyxnQkFBTztJQUNuRCxZ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