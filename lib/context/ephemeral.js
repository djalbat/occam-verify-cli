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
    constructor(context, terms, frames, equalities, judgements, assertions, statements, references, assumptions, metavariables, substitutions){
        super(context);
        this.terms = terms;
        this.frames = frames;
        this.equalities = equalities;
        this.judgements = judgements;
        this.assertions = assertions;
        this.statements = statements;
        this.references = references;
        this.assumptions = assumptions;
        this.metavariables = metavariables;
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
    getMetavariables() {
        return this.metavariables;
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
    addMetavariable(metavariable) {
        const context = this, metavariableA = metavariable, metavariableString = metavariable.getString();
        context.trace(`Adding the '${metavariableString}' metavariable to the ephemeral context...`);
        const metavariableB = this.metavariables.find((metavariable)=>{
            const metavariableB = metavariable, metavariableAEqualToSubstitutionB = metavariableA.isEqualTo(metavariableB);
            if (metavariableAEqualToSubstitutionB) {
                return true;
            }
        }) || null;
        if (metavariableB !== null) {
            context.trace(`The '${metavariableString}' metavariable has already been added to the ephemeral context.`);
        } else {
            this.metavariables.push(metavariable);
            context.debug(`...added the '${metavariableString}' metavariable to the ephemeral context.`);
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
    findAssumptionByAssumptionNode(assumptionNode, metaLevel = false) {
        let assumption;
        if (metaLevel) {
            const context = this.getContext();
            assumption = context.findAssumptionByAssumptionNode(assumptionNode, metaLevel);
        } else {
            assumption = this.assumptions.find((assumption)=>{
                const assumptionNodeMatches = assumption.matchAssumptionNode(assumptionNode);
                if (assumptionNodeMatches) {
                    return true;
                }
            }) || null;
        }
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
    findMetavariableByMetavariableNode(metavariableNode) {
        const metavariable = this.metavariables.find((metavariable)=>{
            const metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                return true;
            }
        }) || null;
        return metavariable;
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
    isAssumptionPresentByAssumptionNode(assumptionNode, metaLevel = false) {
        const assumption = this.findAssumptionByAssumptionNode(assumptionNode, metaLevel), assumptionPresent = assumption !== null;
        return assumptionPresent;
    }
    isReferencePresentByMetavariableNode(metavariableNode) {
        const reference = this.findReferenceByMetavariableNode(metavariableNode), referencePresent = reference !== null;
        return referencePresent;
    }
    isMetavariablePresentByMetavariableNode(metavariablenNode) {
        const metavariablen = this.findMetavariableByMetavariableNode(metavariablenNode), metavariablenPresent = metavariablen !== null;
        return metavariablenPresent;
    }
    isSubstitutionPresentBySubstitutionNode(substitutionNode) {
        const substitution = this.findSubstitutionBySubstitutionNode(substitutionNode), substitutionPresent = substitution !== null;
        return substitutionPresent;
    }
    commit(element) {
        const context = this; ///
        element.setContext(context);
    }
    initialise(json) {
        const context = this; ///
        this.terms = (0, _json.termsFromJSON)(json, context);
        this.metavariables = (0, _json.metavariablesFromJSON)(json, context);
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
        const termsJSON = (0, _json.termsToTermsJSON)(this.terms), framesJSON = (0, _json.framesToFramesJSON)(this.frames), judgementsJSON = (0, _json.judgementsToJudgementsJSON)(this.judgements), equalitiesJSON = (0, _json.equalitiesToEqualitiesJSON)(this.equalities), statementsJSON = (0, _json.statementsToStatementsJSON)(this.statements), assertionsJSON = (0, _json.assertionsToAssertionsJSON)(this.assertions), referencesJSON = (0, _json.referencesToReferencesJSON)(this.references), assumptionsJSON = (0, _json.assumptionsToAssumptionsJSON)(this.assumptions), metavariablesJSON = (0, _json.metavariablesToMetavariablesJSON)(this.metavariables), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(this.substitutions), terms = termsJSON, frames = framesJSON, judgements = judgementsJSON, equalities = equalitiesJSON, statements = statementsJSON, assertions = assertionsJSON, references = referencesJSON, assumptions = assumptionsJSON, metavariables = metavariablesJSON, substitutions = substitutionsJSON, json = {
            terms,
            frames,
            judgements,
            equalities,
            statements,
            assertions,
            references,
            assumptions,
            metavariables,
            substitutions
        };
        return json;
    }
    static fromJSON(json, context) {
        const terms = null, frames = null, equalities = null, judgements = null, statements = null, assertions = null, references = null, assumptions = null, metavariables = null, substitutions = null, emphemeralContext = new EphemeralContext(context, terms, frames, equalities, judgements, assertions, statements, references, assumptions, metavariables, substitutions);
        emphemeralContext.initialise(json);
        return emphemeralContext;
    }
    static fromNothing(context) {
        const terms = [], frames = [], equalities = [], judgements = [], statements = [], assertions = [], references = [], assumptions = [], metavariables = [], substitutions = [], emphemeralContext = new EphemeralContext(context, terms, frames, equalities, judgements, assertions, statements, references, assumptions, metavariables, substitutions);
        return emphemeralContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBoZW1lcmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBqdWRnZW1lbnRzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlcywgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmFzc2VydGlvbnMgPSBhc3NlcnRpb25zO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gcmVmZXJlbmNlcztcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhbWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICByZXR1cm4gdGhpcy5lcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5qdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0QXNzZXJ0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRUZXJtcyh0ZXJtcykge1xuICAgIHRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgIHRoaXMuYWRkVGVybSh0ZXJtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1CID0gdGhpcy50ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuXG4gICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh0ZXJtQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBmcmFtZUEgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZUIgPSB0aGlzLmZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgY29uc3QgZnJhbWVCID0gZnJhbWUsIC8vL1xuICAgICAgICAgICAgZnJhbWVBRXF1YWxUb0ZyYW1lQiA9IGZyYW1lQS5pc0VxdWFsVG8oZnJhbWVCKTtcblxuICAgICAgaWYgKGZyYW1lQUVxdWFsVG9GcmFtZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChmcmFtZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVhbGl0eVN0cmluZyA9IGVxdWFsaXR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZXF1YWxpdHlCID0gdGhpcy5lcXVhbGl0aWVzLmZpbmQoKGVxdWFsaXR5KSA9PiB7XG4gICAgICBjb25zdCBlcXVhbGl0eUIgPSBlcXVhbGl0eSwgLy8vXG4gICAgICAgICAgICBlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCID0gZXF1YWxpdHlBLmlzRXF1YWxUbyhlcXVhbGl0eUIpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5Qikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGVxdWFsaXR5QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXF1YWxpdGllcy5wdXNoKGVxdWFsaXR5KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRBID0ganVkZ2VtZW50LCAvLy9cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0ganVkZ2VtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRCID0gdGhpcy5qdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgY29uc3QganVkZ2VtZW50QiA9IGp1ZGdlbWVudCwgLy8vXG4gICAgICAgICAgICBqdWRnZW1lbnRBRXF1YWxUb0VxdWFsaXR5QiA9IGp1ZGdlbWVudEEuaXNFcXVhbFRvKGp1ZGdlbWVudEIpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChqdWRnZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmp1ZGdlbWVudHMucHVzaChqdWRnZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEEgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50QiA9IHRoaXMuc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudEIgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCID0gc3RhdGVtZW50QS5pc0VxdWFsVG8oc3RhdGVtZW50Qik7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlbWVudHMucHVzaChzdGF0ZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc2VydGlvbkEgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgIGFzc2VydGlvblN0cmluZyA9IGFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9uQiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgICAgYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gYXNzZXJ0aW9uQS5pc0VxdWFsVG8oYXNzZXJ0aW9uQik7XG5cbiAgICAgIGlmIChhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChhc3NlcnRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZUEgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlQiA9IHRoaXMucmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZUIgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgICAgcmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCID0gcmVmZXJlbmNlQS5pc0VxdWFsVG8ocmVmZXJlbmNlQik7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChyZWZlcmVuY2VCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbkEgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gYXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9uQiA9IHRoaXMuYXNzdW1wdGlvbnMuZmluZCgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgY29uc3QgYXNzdW1wdGlvbkIgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICAgIGFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CID0gYXNzdW1wdGlvbkEuaXNFcXVhbFRvKGFzc3VtcHRpb25CKTtcblxuICAgICAgaWYgKGFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoYXNzdW1wdGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlQSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVCID0gdGhpcy5tZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlQiA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVBRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBtZXRhdmFyaWFibGVBLmlzRXF1YWxUbyhtZXRhdmFyaWFibGVCKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZUFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKG1ldGF2YXJpYWJsZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gdGhpcy5zdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb25BLmlzRXF1YWxUbyhzdWJzdGl0dXRpb25CKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN1YnN0aXR1dGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIHJldHJpZXZlRXBoZW1lcmFsQ29udGV4dCgpIHtcbiAgICBjb25zdCBlcGhlbWVyYWxDb250ZXh0ID0gdGhpczsgIC8vL1xuXG4gICAgcmV0dXJuIGVwaGVtZXJhbENvbnRleHQ7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy50ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuXG4gICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5mcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLmVxdWFsaXRpZXMuZmluZCgoZXF1YWxpdHkpID0+IHtcbiAgICAgIGNvbnN0IGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSBlcXVhbGl0eS5tYXRjaEVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgICBpZiAoZXF1YWxpdHlOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5qdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgY29uc3QganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBqdWRnZW1lbnQubWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgICBpZiAoanVkZ2VtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLnN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMucmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgIGNvbnN0IHJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2UubWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlUmVmZXJlbmNlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXMuYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGVNYXRjaGVzID0gYXNzZXJ0aW9uLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgaWYgKGFzc2VydGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlLCBtZXRhTGV2ZWwgPSBmYWxzZSkge1xuICAgIGxldCBhc3N1bXB0aW9uO1xuXG4gICAgaWYgKG1ldGFMZXZlbCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICBhc3N1bXB0aW9uID0gY29udGV4dC5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIG1ldGFMZXZlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFzc3VtcHRpb24gPSB0aGlzLmFzc3VtcHRpb25zLmZpbmQoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gYXNzdW1wdGlvbi5tYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgICBpZiAoYXNzdW1wdGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLnJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLm1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gKHRlcm0gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSAoZnJhbWUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGZyYW1lUHJlc2VudDtcbiAgfVxuXG4gIGlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHlQcmVzZW50ID0gKGVxdWFsaXR5ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMuZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gKGp1ZGdlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudFByZXNlbnQgPSAoc3RhdGVtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzLmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgYXNzZXJ0aW9uUHJlc2VudCA9IChhc3NlcnRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc3VtcHRpb25QcmVzZW50QnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSwgbWV0YUxldmVsID0gZmFsc2UpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUsIG1ldGFMZXZlbCksXG4gICAgICAgICAgYXNzdW1wdGlvblByZXNlbnQgPSAoYXNzdW1wdGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VQcmVzZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVuTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZW4gPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZW5QcmVzZW50ID0gKG1ldGF2YXJpYWJsZW4gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZW5QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBjb21taXQoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGVsZW1lbnQuc2V0Q29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRoaXMudGVybXMpLFxuICAgICAgICAgIGZyYW1lc0pTT04gPSBmcmFtZXNUb0ZyYW1lc0pTT04odGhpcy5mcmFtZXMpLFxuICAgICAgICAgIGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04odGhpcy5qdWRnZW1lbnRzKSxcbiAgICAgICAgICBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OKHRoaXMuZXF1YWxpdGllcyksXG4gICAgICAgICAgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTih0aGlzLnN0YXRlbWVudHMpLFxuICAgICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04odGhpcy5hc3NlcnRpb25zKSxcbiAgICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OKHRoaXMucmVmZXJlbmNlcyksXG4gICAgICAgICAgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTih0aGlzLmFzc3VtcHRpb25zKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKHRoaXMubWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTih0aGlzLnN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIHRlcm1zID0gdGVybXNKU09OLCAvLy9cbiAgICAgICAgICBmcmFtZXMgPSBmcmFtZXNKU09OLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRzID0ganVkZ2VtZW50c0pTT04sIC8vL1xuICAgICAgICAgIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzSlNPTiwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNKU09OLCAvLy9cbiAgICAgICAgICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0pTT04sIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzSlNPTiwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0pTT04sIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTiwgIC8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLCAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgdGVybXMsXG4gICAgICAgICAgICBmcmFtZXMsXG4gICAgICAgICAgICBqdWRnZW1lbnRzLFxuICAgICAgICAgICAgZXF1YWxpdGllcyxcbiAgICAgICAgICAgIHN0YXRlbWVudHMsXG4gICAgICAgICAgICBhc3NlcnRpb25zLFxuICAgICAgICAgICAgcmVmZXJlbmNlcyxcbiAgICAgICAgICAgIGFzc3VtcHRpb25zLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlcyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gbnVsbCxcbiAgICAgICAgICBmcmFtZXMgPSBudWxsLFxuICAgICAgICAgIGVxdWFsaXRpZXMgPSBudWxsLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBudWxsLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBudWxsLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBudWxsLFxuICAgICAgICAgIGFzc3VtcHRpb25zID0gbnVsbCxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBFcGhlbWVyYWxDb250ZXh0KGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGVxdWFsaXRpZXMsIGp1ZGdlbWVudHMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGVtcGhlbWVyYWxDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAgZXF1YWxpdGllcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBbXSxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgZW1waGVtZXJhbENvbnRleHQgPSBuZXcgRXBoZW1lcmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBqdWRnZW1lbnRzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcGhlbWVyYWxDb250ZXh0IiwiQ29udGV4dCIsImNvbnRleHQiLCJ0ZXJtcyIsImZyYW1lcyIsImVxdWFsaXRpZXMiLCJqdWRnZW1lbnRzIiwiYXNzZXJ0aW9ucyIsInN0YXRlbWVudHMiLCJyZWZlcmVuY2VzIiwiYXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGVzIiwic3Vic3RpdHV0aW9ucyIsImdldFRlcm1zIiwiZ2V0RnJhbWVzIiwiZ2V0RXF1YWxpdGllcyIsImdldEp1ZGdlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImdldFJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwiYWRkVGVybXMiLCJmb3JFYWNoIiwidGVybSIsImFkZFRlcm0iLCJ0ZXJtQSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1CIiwiZmluZCIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHVzaCIsImRlYnVnIiwiYWRkRnJhbWUiLCJmcmFtZSIsImZyYW1lQSIsImZyYW1lU3RyaW5nIiwiZnJhbWVCIiwiZnJhbWVBRXF1YWxUb0ZyYW1lQiIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUEiLCJlcXVhbGl0eVN0cmluZyIsImVxdWFsaXR5QiIsImVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBIiwianVkZ2VtZW50U3RyaW5nIiwianVkZ2VtZW50QiIsImp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCIiwiYWRkU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50QSIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudEIiLCJzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIiLCJhZGRBc3NlcnRpb24iLCJhc3NlcnRpb24iLCJhc3NlcnRpb25BIiwiYXNzZXJ0aW9uU3RyaW5nIiwiYXNzZXJ0aW9uQiIsImFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsImFkZFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUEiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VCIiwicmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCIiwiYWRkQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uQSIsImFzc3VtcHRpb25TdHJpbmciLCJhc3N1bXB0aW9uQiIsImFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZUIiLCJtZXRhdmFyaWFibGVBRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsInJldHJpZXZlRXBoZW1lcmFsQ29udGV4dCIsImVwaGVtZXJhbENvbnRleHQiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlTWF0Y2hlcyIsIm1hdGNoRXF1YWxpdHlOb2RlIiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoSnVkZ2VtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWwiLCJnZXRDb250ZXh0IiwiYXNzdW1wdGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3N1bXB0aW9uTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSIsInRlcm1QcmVzZW50IiwiaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZSIsImZyYW1lUHJlc2VudCIsImlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eVByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJlc2VudCIsImlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJpc0Fzc3VtcHRpb25QcmVzZW50QnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25QcmVzZW50IiwiaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZW5Ob2RlIiwibWV0YXZhcmlhYmxlbiIsIm1ldGF2YXJpYWJsZW5QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImNvbW1pdCIsImVsZW1lbnQiLCJzZXRDb250ZXh0IiwiaW5pdGlhbGlzZSIsImpzb24iLCJ0ZXJtc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwic3RhdGVtZW50c0Zyb21KU09OIiwicmVmZXJlbmNlc0Zyb21KU09OIiwiZXF1YWxpdGllc0Zyb21KU09OIiwiYXNzdW1wdGlvbnNGcm9tSlNPTiIsImZyYW1lc0Zyb21KU09OIiwianVkZ2VtZW50c0Zyb21KU09OIiwiYXNzZXJ0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwidG9KU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImZyYW1lc0pTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJqdWRnZW1lbnRzSlNPTiIsImp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OIiwiZXF1YWxpdGllc0pTT04iLCJlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTiIsInN0YXRlbWVudHNKU09OIiwic3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04iLCJhc3NlcnRpb25zSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwicmVmZXJlbmNlc0pTT04iLCJyZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTiIsImFzc3VtcHRpb25zSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsImZyb21KU09OIiwiZW1waGVtZXJhbENvbnRleHQiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUJBOzs7ZUFBcUJBOzs7Z0VB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