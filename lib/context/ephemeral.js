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
        let terms;
        const context = this.getContext();
        terms = context.getTerms();
        terms = [
            ...this.terms,
            ...terms
        ];
        return terms;
    }
    getFrames() {
        let frames;
        const context = this.getContext();
        frames = context.getFrames();
        frames = [
            ...this.frames,
            ...frames
        ];
        return frames;
    }
    getEqualities() {
        let equalities;
        const context = this.getContext();
        equalities = context.getEqualities();
        equalities = [
            ...this.equalities,
            ...equalities
        ];
        return equalities;
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
    getStatements() {
        let statements;
        const context = this.getContext();
        statements = context.getStatements();
        statements = [
            ...this.statements,
            ...statements
        ];
        return statements;
    }
    getAssertions() {
        let assertions;
        const context = this.getContext();
        assertions = context.getAssertions();
        assertions = [
            ...this.assertions,
            ...assertions
        ];
        return assertions;
    }
    getReferences() {
        let references;
        const context = this.getContext();
        references = context.getReferences();
        references = [
            ...this.references,
            ...references
        ];
        return references;
    }
    getAssumptions() {
        let assumptions;
        const context = this.getContext();
        assumptions = context.getAssumptions();
        assumptions = [
            ...this.assumptions,
            ...assumptions
        ];
        return assumptions;
    }
    getMetavariables() {
        let metavariables;
        const context = this.getContext();
        metavariables = context.getMetavariables();
        metavariables = [
            ...this.metavariables,
            ...metavariables
        ];
        return metavariables;
    }
    getSubstitutions() {
        let substitutions;
        const context = this.getContext();
        substitutions = context.getSubstitutions();
        substitutions = [
            ...this.substitutions,
            ...substitutions
        ];
        return substitutions;
    }
    addTerm(term) {
        const context = this, termA = term, termString = term.getString();
        context.trace(`Adding the '${termString}' term to the ephemeral context...`);
        const terms = this.getTerms(), termB = terms.find((term)=>{
            const termB = term, termAEqualToTermB = termA.isEqualTo(termB);
            if (termAEqualToTermB) {
                return true;
            }
        }) || null;
        if (termB !== null) {
            context.trace(`The '${termString}' term has already been added to the ephemeral context.`);
        } else {
            this.terms.push(term);
        }
        context.debug(`...added the '${termString}' term to the ephemeral context.`);
    }
    addFrame(frame) {
        const context = this, frameA = frame, frameString = frame.getString();
        context.trace(`Adding the '${frameString}' frame to the ephemeral context...`);
        const frames = this.getFrames(), frameB = frames.find((frame)=>{
            const frameB = frame, frameAEqualToFrameB = frameA.isEqualTo(frameB);
            if (frameAEqualToFrameB) {
                return true;
            }
        }) || null;
        if (frameB !== null) {
            context.trace(`The '${frameString}' frame has already been added to the ephemeral context.`);
        } else {
            this.frames.push(frame);
        }
        context.debug(`...added the '${frameString}' frame to the ephemeral context.`);
    }
    addEquality(equality) {
        const context = this, equalityA = equality, equalityString = equality.getString();
        context.trace(`Adding the '${equalityString}' equality to the ephemeral context...`);
        const equalities = this.getEqualities(), equalityB = equalities.find((equality)=>{
            const equalityB = equality, equalityAEqualToEqualityB = equalityA.isEqualTo(equalityB);
            if (equalityAEqualToEqualityB) {
                return true;
            }
        }) || null;
        if (equalityB !== null) {
            context.trace(`The '${equalityString}' equality has already been added to the ephemeral context.`);
        } else {
            this.equalities.push(equality);
        }
        context.debug(`...added the '${equalityString}' equality to the ephemeral context.`);
    }
    addJudgement(judgement) {
        const context = this, judgementA = judgement, judgementString = judgement.getString();
        context.trace(`Adding the '${judgementString}' judgement to the ephemeral context...`);
        const judgements = this.getJudgements(), judgementB = judgements.find((judgement)=>{
            const judgementB = judgement, judgementAEqualToEqualityB = judgementA.isEqualTo(judgementB);
            if (judgementAEqualToEqualityB) {
                return true;
            }
        }) || null;
        if (judgementB !== null) {
            context.trace(`The '${judgementString}' judgement has already been added to the ephemeral context.`);
        } else {
            this.judgements.push(judgement);
        }
        context.debug(`...added the '${judgementString}' judgement to the ephemeral context.`);
    }
    addStatement(statement) {
        const context = this, statementA = statement, statementString = statement.getString();
        context.trace(`Adding the '${statementString}' statement to the ephemeral context...`);
        const statements = this.getStatements(), statementB = statements.find((statement)=>{
            const statementB = statement, statementAEqualToStatementB = statementA.isEqualTo(statementB);
            if (statementAEqualToStatementB) {
                return true;
            }
        }) || null;
        if (statementB !== null) {
            context.trace(`The '${statementString}' statement has already been added to the ephemeral context.`);
        } else {
            this.statements.push(statement);
        }
        context.debug(`...added the '${statementString}' statement to the ephemeral context.`);
    }
    addAssertion(assertion) {
        const context = this, assertionA = assertion, assertionString = assertion.getString();
        context.trace(`Adding the '${assertionString}' assertion to the ephemeral context...`);
        const assertions = this.getAssumptions(), assertionB = assertions.find((assertion)=>{
            const assertionB = assertion, assertionAEqualToAssertionB = assertionA.isEqualTo(assertionB);
            if (assertionAEqualToAssertionB) {
                return true;
            }
        }) || null;
        if (assertionB !== null) {
            context.trace(`The '${assertionString}' assertion has already been added to the ephemeral context.`);
        } else {
            this.assertions.push(assertion);
        }
        context.debug(`...added the '${assertionString}' assertion to the ephemeral context.`);
    }
    addReference(reference) {
        const context = this, referenceA = reference, referenceString = reference.getString();
        context.trace(`Adding the '${referenceString}' reference to the ephemeral context...`);
        const references = this.getReferences(), referenceB = references.find((reference)=>{
            const referenceB = reference, referenceAEqualToReferenceB = referenceA.isEqualTo(referenceB);
            if (referenceAEqualToReferenceB) {
                return true;
            }
        }) || null;
        if (referenceB !== null) {
            context.trace(`The '${referenceString}' reference has already been added to the ephemeral context.`);
        } else {
            const context = reference.getContext();
            context.commit(this);
            this.references.push(reference);
        }
        context.debug(`...added the '${referenceString}' reference to the ephemeral context.`);
    }
    addAssumption(assumption) {
        const context = this, assumptionA = assumption, assumptionString = assumption.getString();
        context.trace(`Adding the '${assumptionString}' assumption to the ephemeral context...`);
        const assumptions = this.getAssumptions(), assumptionB = assumptions.find((assumption)=>{
            const assumptionB = assumption, assumptionAEqualToAssumptionB = assumptionA.isEqualTo(assumptionB);
            if (assumptionAEqualToAssumptionB) {
                return true;
            }
        }) || null;
        if (assumptionB !== null) {
            context.trace(`The '${assumptionString}' assumption has already been added to the ephemeral context.`);
        } else {
            this.assumptions.push(assumption);
        }
        context.debug(`...added the '${assumptionString}' assumption to the ephemeral context.`);
    }
    addMetavariable(metavariable) {
        const context = this, metavariableA = metavariable, metavariableString = metavariable.getString();
        context.trace(`Adding the '${metavariableString}' metavariable to the ephemeral context...`);
        const metavariables = this.getMetavariables(), metavariableB = metavariables.find((metavariable)=>{
            const metavariableB = metavariable, metavariableAEqualToSubstitutionB = metavariableA.isEqualTo(metavariableB);
            if (metavariableAEqualToSubstitutionB) {
                return true;
            }
        }) || null;
        if (metavariableB !== null) {
            context.trace(`The '${metavariableString}' metavariable has already been added to the ephemeral context.`);
        } else {
            this.metavariables.push(metavariable);
        }
        context.debug(`...added the '${metavariableString}' metavariable to the ephemeral context.`);
    }
    addSubstitution(substitution) {
        const context = this, substitutionA = substitution, substitutionString = substitution.getString();
        context.trace(`Adding the '${substitutionString}' substitution to the ephemeral context...`);
        const substitutions = this.getSubstitutions(), substitutionB = substitutions.find((substitution)=>{
            const substitutionB = substitution, substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
            if (substitutionAEqualToSubstitutionB) {
                return true;
            }
        }) || null;
        if (substitutionB !== null) {
            context.trace(`The '${substitutionString}' substitution has already been added to the ephemeral context.`);
        } else {
            const context = substitution.getContext();
            context.commit(this);
            this.substitutions.push(substitution);
        }
        context.debug(`...added the '${substitutionString}' substitution to the ephemeral context.`);
    }
    addTerms(terms) {
        terms.forEach((term)=>{
            this.addTerm(term);
        });
    }
    addFrames(frames) {
        frames.forEach((frame)=>{
            this.addFrame(frame);
        });
    }
    addEqualities(equalities) {
        equalities.forEach((equality)=>{
            this.addEquality(equality);
        });
    }
    addJudgements(judgements) {
        judgements.forEach((judgement)=>{
            this.addJudgement(judgement);
        });
    }
    addAssertions(assertions) {
        assertions.forEach((assertion)=>{
            this.addAssertion(assertion);
        });
    }
    addStatements(statements) {
        statements.forEach((statement)=>{
            this.addStatement(statement);
        });
    }
    addReferences(references) {
        references.forEach((reference)=>{
            this.addReference(reference);
        });
    }
    addAssumptions(assumptions) {
        assumptions.forEach((assumption)=>{
            this.addAssumption(assumption);
        });
    }
    addMetavariables(metavariables) {
        metavariables.forEach((metavariable)=>{
            this.addMetavariable(metavariable);
        });
    }
    addSubstitutions(substitutions) {
        substitutions.forEach((substitution)=>{
            this.addSubstitution(substitution);
        });
    }
    findTermByTermNode(termNode) {
        const terms = this.getTerms(), term = terms.find((term)=>{
            const termNodeMatches = term.matchTermNode(termNode);
            if (termNodeMatches) {
                return true;
            }
        }) || null;
        return term;
    }
    findFrameByFrameNode(frameNode) {
        const frames = this.getFrames(), frame = frames.find((frame)=>{
            const frameNodeMatches = frame.matchFrameNode(frameNode);
            if (frameNodeMatches) {
                return true;
            }
        }) || null;
        return frame;
    }
    findEqualityByEqualityNode(equalityNode) {
        const equalities = this.getEqualities(), equality = equalities.find((equality)=>{
            const equalityNodeMatches = equality.matchEqualityNode(equalityNode);
            if (equalityNodeMatches) {
                return true;
            }
        }) || null;
        return equality;
    }
    findJudgementByJudgementNode(judgementNode) {
        const judgements = this.getJudgements(), judgement = judgements.find((judgement)=>{
            const judgementNodeMatches = judgement.matchJudgementNode(judgementNode);
            if (judgementNodeMatches) {
                return true;
            }
        }) || null;
        return judgement;
    }
    findStatementByStatementNode(statementNode) {
        const statements = this.getStatements(), statement = statements.find((statement)=>{
            const statementNodeMatches = statement.matchStatementNode(statementNode);
            if (statementNodeMatches) {
                return true;
            }
        }) || null;
        return statement;
    }
    findReferenceByReferenceNode(referenceNode) {
        const references = this.getReferences(), reference = references.find((reference)=>{
            const referenceMatcheReferenceNode = reference.matchReferenceNode(referenceNode);
            if (referenceMatcheReferenceNode) {
                return true;
            }
        }) || null;
        return reference;
    }
    findAssertionByAssertionNode(assertionNode) {
        const assertions = this.getAssertions(), assertion = assertions.find((assertion)=>{
            const assertionNodeMatches = assertion.matchAssertionNode(assertionNode);
            if (assertionNodeMatches) {
                return true;
            }
        }) || null;
        return assertion;
    }
    findAssumptionByAssumptionNode(assumptionNode) {
        const assumptions = this.getAssumptions(), assumption = assumptions.find((assumption)=>{
            const assumptionNodeMatches = assumption.matchAssumptionNode(assumptionNode);
            if (assumptionNodeMatches) {
                return true;
            }
        }) || null;
        return assumption;
    }
    findReferenceByMetavariableNode(metavariableNode) {
        const references = this.getReferences(), reference = references.find((reference)=>{
            const referenceMatcheMetavariableNode = reference.matchMetavariableNode(metavariableNode);
            if (referenceMatcheMetavariableNode) {
                return true;
            }
        }) || null;
        return reference;
    }
    findMetavariableByMetavariableNode(metavariableNode) {
        const metavariables = this.getMetavariables(), metavariable = metavariables.find((metavariable)=>{
            const metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                return true;
            }
        }) || null;
        return metavariable;
    }
    findSubstitutionBySubstitutionNode(substitutionNode) {
        const substitutions = this.getSubstitutions(), substitution = substitutions.find((substitution)=>{
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
    isMetavariablePresentByMetavariableNode(metavariablenNode) {
        const metavariablen = this.findMetavariableByMetavariableNode(metavariablenNode), metavariablenPresent = metavariablen !== null;
        return metavariablenPresent;
    }
    isSubstitutionPresentBySubstitutionNode(substitutionNode) {
        const substitution = this.findSubstitutionBySubstitutionNode(substitutionNode), substitutionPresent = substitution !== null;
        return substitutionPresent;
    }
    commit(elementOrContext) {
        const elementOrContextContext = elementOrContext instanceof _context.default;
        if (elementOrContextContext) {
            const context = elementOrContext, terms = this.getTerms(), frames = this.getFrames(), equalities = this.getEqualities(), judgements = this.getJudgements(), assertions = this.getAssertions(), statements = this.getStatements(), references = this.getReferences(), assumptions = this.getAssumptions(), metavariables = this.getMetavariables(), substitutions = this.getSubstitutions();
            context.addTerms(terms);
            context.addFrames(frames);
            context.addEqualities(equalities);
            context.addJudgements(judgements);
            context.addAssertions(assertions);
            context.addStatements(statements);
            context.addReferences(references);
            context.addAssumptions(assumptions);
            context.addMetavariables(metavariables);
            context.addSubstitutions(substitutions);
        } else {
            const context = this, element = elementOrContext; ///
            element.setContext(context);
        }
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
        let terms = this.getTerms(), frames = this.getFrames(), judgements = this.getJudgements(), equalities = this.getEqualities(), statements = this.getStatements(), assertions = this.getAssertions(), references = this.getReferences(), assumptions = this.getAssumptions(), metavariables = this.getMetavariables(), substitutions = this.getSubstitutions();
        const termsJSON = (0, _json.termsToTermsJSON)(terms), framesJSON = (0, _json.framesToFramesJSON)(frames), judgementsJSON = (0, _json.judgementsToJudgementsJSON)(judgements), equalitiesJSON = (0, _json.equalitiesToEqualitiesJSON)(equalities), statementsJSON = (0, _json.statementsToStatementsJSON)(statements), assertionsJSON = (0, _json.assertionsToAssertionsJSON)(assertions), referencesJSON = (0, _json.referencesToReferencesJSON)(references), assumptionsJSON = (0, _json.assumptionsToAssumptionsJSON)(assumptions), metavariablesJSON = (0, _json.metavariablesToMetavariablesJSON)(metavariables), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(substitutions);
        terms = termsJSON; ///
        frames = framesJSON; ///
        judgements = judgementsJSON; ///
        equalities = equalitiesJSON; ///
        statements = statementsJSON; ///
        assertions = assertionsJSON; ///
        references = referencesJSON; ///
        assumptions = assumptionsJSON; ///
        metavariables = metavariablesJSON; //
        substitutions = substitutionsJSON; ///
        const json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBoZW1lcmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBqdWRnZW1lbnRzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlcywgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmFzc2VydGlvbnMgPSBhc3NlcnRpb25zO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gcmVmZXJlbmNlcztcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgbGV0IHRlcm1zO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICB0ZXJtcyA9IGNvbnRleHQuZ2V0VGVybXMoKTtcbiAgICBcbiAgICB0ZXJtcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnRlcm1zLFxuICAgICAgLi4udGVybXNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcygpIHtcbiAgICBsZXQgZnJhbWVzO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBmcmFtZXMgPSBjb250ZXh0LmdldEZyYW1lcygpO1xuICAgIFxuICAgIGZyYW1lcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmZyYW1lcyxcbiAgICAgIC4uLmZyYW1lc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGZyYW1lcztcbiAgfVxuXG4gIGdldEVxdWFsaXRpZXMoKSB7XG4gICAgbGV0IGVxdWFsaXRpZXM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGVxdWFsaXRpZXMgPSBjb250ZXh0LmdldEVxdWFsaXRpZXMoKTtcbiAgICBcbiAgICBlcXVhbGl0aWVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuZXF1YWxpdGllcyxcbiAgICAgIC4uLmVxdWFsaXRpZXNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBsZXQganVkZ2VtZW50cztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuICAgIFxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGxldCBzdGF0ZW1lbnRzO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBzdGF0ZW1lbnRzID0gY29udGV4dC5nZXRTdGF0ZW1lbnRzKCk7XG4gICAgXG4gICAgc3RhdGVtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN0YXRlbWVudHMsXG4gICAgICAuLi5zdGF0ZW1lbnRzXG4gICAgXTtcbiAgICBcbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoKSB7XG4gICAgbGV0IGFzc2VydGlvbnM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGFzc2VydGlvbnMgPSBjb250ZXh0LmdldEFzc2VydGlvbnMoKTtcbiAgICBcbiAgICBhc3NlcnRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuYXNzZXJ0aW9ucyxcbiAgICAgIC4uLmFzc2VydGlvbnNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICBsZXQgcmVmZXJlbmNlcztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAgcmVmZXJlbmNlcyA9IGNvbnRleHQuZ2V0UmVmZXJlbmNlcygpO1xuICAgIFxuICAgIHJlZmVyZW5jZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5yZWZlcmVuY2VzLFxuICAgICAgLi4ucmVmZXJlbmNlc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGFzc3VtcHRpb25zID0gY29udGV4dC5nZXRBc3N1bXB0aW9ucygpO1xuICAgIFxuICAgIGFzc3VtcHRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuYXNzdW1wdGlvbnMsXG4gICAgICAuLi5hc3N1bXB0aW9uc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlcztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAgbWV0YXZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuICAgIFxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG4gICAgXG4gICAgc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgXTtcbiAgICBcbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gdGhpcy5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1CID0gdGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodGVybUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmcmFtZUEgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKCksXG4gICAgICAgICAgZnJhbWVCID0gZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZUIgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICBmcmFtZUFFcXVhbFRvRnJhbWVCID0gZnJhbWVBLmlzRXF1YWxUbyhmcmFtZUIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAoZnJhbWVBRXF1YWxUb0ZyYW1lQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGZyYW1lQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5QSA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICBlcXVhbGl0eVN0cmluZyA9IGVxdWFsaXR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZXF1YWxpdGllcyA9IHRoaXMuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICAgIGVxdWFsaXR5QiA9IGVxdWFsaXRpZXMuZmluZCgoZXF1YWxpdHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QiA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIgPSBlcXVhbGl0eUEuaXNFcXVhbFRvKGVxdWFsaXR5Qik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZXF1YWxpdHlCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcXVhbGl0aWVzLnB1c2goZXF1YWxpdHkpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50QSA9IGp1ZGdlbWVudCwgLy8vXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0ganVkZ2VtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50QiA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRCID0ganVkZ2VtZW50LCAvLy9cbiAgICAgICAgICAgICAgICAgIGp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCID0ganVkZ2VtZW50QS5pc0VxdWFsVG8oanVkZ2VtZW50Qik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRBRXF1YWxUb0VxdWFsaXR5Qikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGp1ZGdlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEEgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50cyA9IHRoaXMuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgIHN0YXRlbWVudEIgPSBzdGF0ZW1lbnRzLmZpbmQoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50QiA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIgPSBzdGF0ZW1lbnRBLmlzRXF1YWxUbyhzdGF0ZW1lbnRCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50Qikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50cy5wdXNoKHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc2VydGlvbkEgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgIGFzc2VydGlvblN0cmluZyA9IGFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICBhc3NlcnRpb25CID0gYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gYXNzZXJ0aW9uQS5pc0VxdWFsVG8oYXNzZXJ0aW9uQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChhc3NlcnRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VBID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB0aGlzLmdldFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICByZWZlcmVuY2VCID0gcmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZUIgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCID0gcmVmZXJlbmNlQS5pc0VxdWFsVG8ocmVmZXJlbmNlQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChyZWZlcmVuY2VCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gcmVmZXJlbmNlLmdldENvbnRleHQoKTtcblxuICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG5cbiAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbkEgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gYXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uQiA9IGFzc3VtcHRpb25zLmZpbmQoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb25CID0gYXNzdW1wdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICBhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQiA9IGFzc3VtcHRpb25BLmlzRXF1YWxUbyhhc3N1bXB0aW9uQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGFzc3VtcHRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVBID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gbWV0YXZhcmlhYmxlQS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVBRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3Vic3RpdHV0aW9uLmdldENvbnRleHQoKTtcblxuICAgICAgY29udGV4dC5jb21taXQodGhpcyk7XG5cbiAgICAgIHRoaXMuc3Vic3RpdHV0aW9ucy5wdXNoKHN1YnN0aXR1dGlvbik7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRUZXJtcyh0ZXJtcykge1xuICAgIHRlcm1zLmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgIHRoaXMuYWRkVGVybSh0ZXJtKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEZyYW1lcyhmcmFtZXMpIHtcbiAgICBmcmFtZXMuZm9yRWFjaCgoZnJhbWUpID0+IHtcbiAgICAgIHRoaXMuYWRkRnJhbWUoZnJhbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRXF1YWxpdGllcyhlcXVhbGl0aWVzKSB7XG4gICAgZXF1YWxpdGllcy5mb3JFYWNoKChlcXVhbGl0eSkgPT4ge1xuICAgICAgdGhpcy5hZGRFcXVhbGl0eShlcXVhbGl0eSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRKdWRnZW1lbnRzKGp1ZGdlbWVudHMpIHtcbiAgICBqdWRnZW1lbnRzLmZvckVhY2goKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgdGhpcy5hZGRKdWRnZW1lbnQoanVkZ2VtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbnMoYXNzZXJ0aW9ucykge1xuICAgIGFzc2VydGlvbnMuZm9yRWFjaCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICB0aGlzLmFkZEFzc2VydGlvbihhc3NlcnRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkU3RhdGVtZW50cyhzdGF0ZW1lbnRzKSB7XG4gICAgc3RhdGVtZW50cy5mb3JFYWNoKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuYWRkU3RhdGVtZW50KHN0YXRlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRSZWZlcmVuY2VzKHJlZmVyZW5jZXMpIHtcbiAgICByZWZlcmVuY2VzLmZvckVhY2goKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgdGhpcy5hZGRSZWZlcmVuY2UocmVmZXJlbmNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEFzc3VtcHRpb25zKGFzc3VtcHRpb25zKSB7XG4gICAgYXNzdW1wdGlvbnMuZm9yRWFjaCgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgdGhpcy5hZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlcyhtZXRhdmFyaWFibGVzKSB7XG4gICAgbWV0YXZhcmlhYmxlcy5mb3JFYWNoKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIHRoaXMuYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpIHtcbiAgICBzdWJzdGl0dXRpb25zLmZvckVhY2goKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgdGhpcy5hZGRTdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1zID0gdGhpcy5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdGllcyA9IHRoaXMuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gZXF1YWxpdGllcy5maW5kKChlcXVhbGl0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IGVxdWFsaXR5Lm1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE5vZGVNYXRjaGVzID0ganVkZ2VtZW50Lm1hdGNoSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50cyA9IHRoaXMuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB0aGlzLmdldFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlUmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5tYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VNYXRjaGVSZWZlcmVuY2VOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9ucyA9IHRoaXMuZ2V0QXNzZXJ0aW9ucygpLFxuICAgICAgICAgIGFzc2VydGlvbiA9IGFzc2VydGlvbnMuZmluZCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc3NlcnRpb25Ob2RlTWF0Y2hlcyA9IGFzc2VydGlvbi5tYXRjaEFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChhc3NlcnRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc3VtcHRpb25zID0gdGhpcy5nZXRBc3N1bXB0aW9ucygpLFxuICAgICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9ucy5maW5kKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uTm9kZU1hdGNoZXMgPSBhc3N1bXB0aW9uLm1hdGNoQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoYXNzdW1wdGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB0aGlzLmdldFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdGVybVByZXNlbnQgPSAodGVybSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdGVybVByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIGZyYW1lUHJlc2VudCA9IChmcmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZnJhbWVQcmVzZW50O1xuICB9XG5cbiAgaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICBlcXVhbGl0eVByZXNlbnQgPSAoZXF1YWxpdHkgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5UHJlc2VudDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50UHJlc2VudCA9IChzdGF0ZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXMuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gKGFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzQXNzdW1wdGlvblByZXNlbnRCeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSxcbiAgICAgICAgICBhc3N1bXB0aW9uUHJlc2VudCA9IChhc3N1bXB0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZVByZXNlbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZW5Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlbiA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVuTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlblByZXNlbnQgPSAobWV0YXZhcmlhYmxlbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlblByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGNvbW1pdChlbGVtZW50T3JDb250ZXh0KSB7XG4gICAgY29uc3QgZWxlbWVudE9yQ29udGV4dENvbnRleHQgPSAoZWxlbWVudE9yQ29udGV4dCBpbnN0YW5jZW9mIENvbnRleHQpO1xuXG4gICAgaWYgKGVsZW1lbnRPckNvbnRleHRDb250ZXh0KSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gZWxlbWVudE9yQ29udGV4dCwgLy8vXG4gICAgICAgICAgICB0ZXJtcyA9IHRoaXMuZ2V0VGVybXMoKSxcbiAgICAgICAgICAgIGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKCksXG4gICAgICAgICAgICBlcXVhbGl0aWVzID0gdGhpcy5nZXRFcXVhbGl0aWVzKCksXG4gICAgICAgICAgICBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAgICBhc3NlcnRpb25zID0gdGhpcy5nZXRBc3NlcnRpb25zKCksXG4gICAgICAgICAgICBzdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgICByZWZlcmVuY2VzID0gdGhpcy5nZXRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgICBhc3N1bXB0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKTtcblxuICAgICAgY29udGV4dC5hZGRUZXJtcyh0ZXJtcyk7XG4gICAgICBjb250ZXh0LmFkZEZyYW1lcyhmcmFtZXMpO1xuICAgICAgY29udGV4dC5hZGRFcXVhbGl0aWVzKGVxdWFsaXRpZXMpO1xuICAgICAgY29udGV4dC5hZGRKdWRnZW1lbnRzKGp1ZGdlbWVudHMpO1xuICAgICAgY29udGV4dC5hZGRBc3NlcnRpb25zKGFzc2VydGlvbnMpO1xuICAgICAgY29udGV4dC5hZGRTdGF0ZW1lbnRzKHN0YXRlbWVudHMpO1xuICAgICAgY29udGV4dC5hZGRSZWZlcmVuY2VzKHJlZmVyZW5jZXMpO1xuICAgICAgY29udGV4dC5hZGRBc3N1bXB0aW9ucyhhc3N1bXB0aW9ucyk7XG4gICAgICBjb250ZXh0LmFkZE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcyk7XG4gICAgICBjb250ZXh0LmFkZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50T3JDb250ZXh0OyAvLy9cblxuICAgICAgZWxlbWVudC5zZXRDb250ZXh0KGNvbnRleHQpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgdGVybXMgPSB0aGlzLmdldFRlcm1zKCksXG4gICAgICAgIGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKCksXG4gICAgICAgIGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgZXF1YWxpdGllcyA9IHRoaXMuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgIGFzc2VydGlvbnMgPSB0aGlzLmdldEFzc2VydGlvbnMoKSxcbiAgICAgICAgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRlcm1zKSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcyksXG4gICAgICAgICAganVkZ2VtZW50c0pTT04gPSBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTihqdWRnZW1lbnRzKSxcbiAgICAgICAgICBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OKGVxdWFsaXRpZXMpLFxuICAgICAgICAgIHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04oc3RhdGVtZW50cyksXG4gICAgICAgICAgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTihhc3NlcnRpb25zKSxcbiAgICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OKHJlZmVyZW5jZXMpLFxuICAgICAgICAgIGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04oYXNzdW1wdGlvbnMpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKTtcblxuICAgIHRlcm1zID0gdGVybXNKU09OOyAvLy9cbiAgICBmcmFtZXMgPSBmcmFtZXNKU09OOyAvLy9cbiAgICBqdWRnZW1lbnRzID0ganVkZ2VtZW50c0pTT047IC8vL1xuICAgIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzSlNPTjsgLy8vXG4gICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNKU09OOyAvLy9cbiAgICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0pTT047IC8vL1xuICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzSlNPTjsgLy8vXG4gICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0pTT047IC8vL1xuICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTjsgIC8vXG4gICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OOyAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICB0ZXJtcyxcbiAgICAgIGZyYW1lcyxcbiAgICAgIGp1ZGdlbWVudHMsXG4gICAgICBlcXVhbGl0aWVzLFxuICAgICAgc3RhdGVtZW50cyxcbiAgICAgIGFzc2VydGlvbnMsXG4gICAgICByZWZlcmVuY2VzLFxuICAgICAgYXNzdW1wdGlvbnMsXG4gICAgICBtZXRhdmFyaWFibGVzLFxuICAgICAgc3Vic3RpdHV0aW9uc1xuICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBudWxsLFxuICAgICAgICAgIGZyYW1lcyA9IG51bGwsXG4gICAgICAgICAgZXF1YWxpdGllcyA9IG51bGwsXG4gICAgICAgICAganVkZ2VtZW50cyA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50cyA9IG51bGwsXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IG51bGwsXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IG51bGwsXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICAgIGVtcGhlbWVyYWxDb250ZXh0ID0gbmV3IEVwaGVtZXJhbENvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywgZXF1YWxpdGllcywganVkZ2VtZW50cywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZXMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgZW1waGVtZXJhbENvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IFtdLFxuICAgICAgICAgIGFzc3VtcHRpb25zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBFcGhlbWVyYWxDb250ZXh0KGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGVxdWFsaXRpZXMsIGp1ZGdlbWVudHMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVwaGVtZXJhbENvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsInRlcm1zIiwiZnJhbWVzIiwiZXF1YWxpdGllcyIsImp1ZGdlbWVudHMiLCJhc3NlcnRpb25zIiwic3RhdGVtZW50cyIsInJlZmVyZW5jZXMiLCJhc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZXMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0VGVybXMiLCJnZXRDb250ZXh0IiwiZ2V0RnJhbWVzIiwiZ2V0RXF1YWxpdGllcyIsImdldEp1ZGdlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImdldFJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtQSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1CIiwiZmluZCIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHVzaCIsImRlYnVnIiwiYWRkRnJhbWUiLCJmcmFtZSIsImZyYW1lQSIsImZyYW1lU3RyaW5nIiwiZnJhbWVCIiwiZnJhbWVBRXF1YWxUb0ZyYW1lQiIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUEiLCJlcXVhbGl0eVN0cmluZyIsImVxdWFsaXR5QiIsImVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBIiwianVkZ2VtZW50U3RyaW5nIiwianVkZ2VtZW50QiIsImp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCIiwiYWRkU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50QSIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudEIiLCJzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIiLCJhZGRBc3NlcnRpb24iLCJhc3NlcnRpb24iLCJhc3NlcnRpb25BIiwiYXNzZXJ0aW9uU3RyaW5nIiwiYXNzZXJ0aW9uQiIsImFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsImFkZFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUEiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VCIiwicmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCIiwiY29tbWl0IiwiYWRkQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uQSIsImFzc3VtcHRpb25TdHJpbmciLCJhc3N1bXB0aW9uQiIsImFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZUIiLCJtZXRhdmFyaWFibGVBRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImFkZFRlcm1zIiwiZm9yRWFjaCIsImFkZEZyYW1lcyIsImFkZEVxdWFsaXRpZXMiLCJhZGRKdWRnZW1lbnRzIiwiYWRkQXNzZXJ0aW9ucyIsImFkZFN0YXRlbWVudHMiLCJhZGRSZWZlcmVuY2VzIiwiYWRkQXNzdW1wdGlvbnMiLCJhZGRNZXRhdmFyaWFibGVzIiwiYWRkU3Vic3RpdHV0aW9ucyIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGVNYXRjaGVzIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hKdWRnZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTWF0Y2hlUmVmZXJlbmNlTm9kZSIsIm1hdGNoUmVmZXJlbmNlTm9kZSIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc2VydGlvbk5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFByZXNlbnQiLCJpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25QcmVzZW50IiwiaXNBc3N1bXB0aW9uUHJlc2VudEJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uUHJlc2VudCIsImlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVuTm9kZSIsIm1ldGF2YXJpYWJsZW4iLCJtZXRhdmFyaWFibGVuUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJlbGVtZW50T3JDb250ZXh0IiwiZWxlbWVudE9yQ29udGV4dENvbnRleHQiLCJlbGVtZW50Iiwic2V0Q29udGV4dCIsImluaXRpYWxpc2UiLCJqc29uIiwidGVybXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsInN0YXRlbWVudHNGcm9tSlNPTiIsInJlZmVyZW5jZXNGcm9tSlNPTiIsImVxdWFsaXRpZXNGcm9tSlNPTiIsImFzc3VtcHRpb25zRnJvbUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsImp1ZGdlbWVudHNGcm9tSlNPTiIsImFzc2VydGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInRvSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJmcmFtZXNKU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwianVkZ2VtZW50c0pTT04iLCJqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTiIsImVxdWFsaXRpZXNKU09OIiwiZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04iLCJzdGF0ZW1lbnRzSlNPTiIsInN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OIiwiYXNzZXJ0aW9uc0pTT04iLCJhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTiIsInJlZmVyZW5jZXNKU09OIiwicmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04iLCJhc3N1bXB0aW9uc0pTT04iLCJhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OIiwibWV0YXZhcmlhYmxlc0pTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJmcm9tSlNPTiIsImVtcGhlbWVyYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlCQTs7O2VBQXFCQTs7O2dFQXZCRDtzQkFxQjZCOzs7Ozs7QUFFbEMsTUFBTUEseUJBQXlCQyxnQkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsQ0FBRTtRQUN6SSxLQUFLLENBQUNWO1FBRU4sSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FB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