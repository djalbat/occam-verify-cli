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
            const termB = term, termAComparesToTermB = termA.compareTerm(termB);
            if (termAComparesToTermB) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBoZW1lcmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBqdWRnZW1lbnRzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlcywgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmFzc2VydGlvbnMgPSBhc3NlcnRpb25zO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gcmVmZXJlbmNlcztcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgbGV0IHRlcm1zO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICB0ZXJtcyA9IGNvbnRleHQuZ2V0VGVybXMoKTtcbiAgICBcbiAgICB0ZXJtcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnRlcm1zLFxuICAgICAgLi4udGVybXNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcygpIHtcbiAgICBsZXQgZnJhbWVzO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBmcmFtZXMgPSBjb250ZXh0LmdldEZyYW1lcygpO1xuICAgIFxuICAgIGZyYW1lcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmZyYW1lcyxcbiAgICAgIC4uLmZyYW1lc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGZyYW1lcztcbiAgfVxuXG4gIGdldEVxdWFsaXRpZXMoKSB7XG4gICAgbGV0IGVxdWFsaXRpZXM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGVxdWFsaXRpZXMgPSBjb250ZXh0LmdldEVxdWFsaXRpZXMoKTtcbiAgICBcbiAgICBlcXVhbGl0aWVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuZXF1YWxpdGllcyxcbiAgICAgIC4uLmVxdWFsaXRpZXNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBsZXQganVkZ2VtZW50cztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuICAgIFxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGxldCBzdGF0ZW1lbnRzO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBzdGF0ZW1lbnRzID0gY29udGV4dC5nZXRTdGF0ZW1lbnRzKCk7XG4gICAgXG4gICAgc3RhdGVtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN0YXRlbWVudHMsXG4gICAgICAuLi5zdGF0ZW1lbnRzXG4gICAgXTtcbiAgICBcbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoKSB7XG4gICAgbGV0IGFzc2VydGlvbnM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGFzc2VydGlvbnMgPSBjb250ZXh0LmdldEFzc2VydGlvbnMoKTtcbiAgICBcbiAgICBhc3NlcnRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuYXNzZXJ0aW9ucyxcbiAgICAgIC4uLmFzc2VydGlvbnNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICBsZXQgcmVmZXJlbmNlcztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAgcmVmZXJlbmNlcyA9IGNvbnRleHQuZ2V0UmVmZXJlbmNlcygpO1xuICAgIFxuICAgIHJlZmVyZW5jZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5yZWZlcmVuY2VzLFxuICAgICAgLi4ucmVmZXJlbmNlc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGFzc3VtcHRpb25zID0gY29udGV4dC5nZXRBc3N1bXB0aW9ucygpO1xuICAgIFxuICAgIGFzc3VtcHRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuYXNzdW1wdGlvbnMsXG4gICAgICAuLi5hc3N1bXB0aW9uc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlcztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAgbWV0YXZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuICAgIFxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG4gICAgXG4gICAgc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgXTtcbiAgICBcbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gdGhpcy5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1CID0gdGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BQ29tcGFyZXNUb1Rlcm1CID0gdGVybUEuY29tcGFyZVRlcm0odGVybUIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAodGVybUFDb21wYXJlc1RvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh0ZXJtQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZyYW1lQSA9IGZyYW1lLCAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVzID0gdGhpcy5nZXRGcmFtZXMoKSxcbiAgICAgICAgICBmcmFtZUIgPSBmcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lQiA9IGZyYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgIGZyYW1lQUVxdWFsVG9GcmFtZUIgPSBmcmFtZUEuaXNFcXVhbFRvKGZyYW1lQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChmcmFtZUFFcXVhbFRvRnJhbWVCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZnJhbWVCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mcmFtZXMucHVzaChmcmFtZSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgIGVxdWFsaXR5U3RyaW5nID0gZXF1YWxpdHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBlcXVhbGl0aWVzID0gdGhpcy5nZXRFcXVhbGl0aWVzKCksXG4gICAgICAgICAgZXF1YWxpdHlCID0gZXF1YWxpdGllcy5maW5kKChlcXVhbGl0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlCID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgICAgICAgICAgZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5QiA9IGVxdWFsaXR5QS5pc0VxdWFsVG8oZXF1YWxpdHlCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChlcXVhbGl0eUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVxdWFsaXRpZXMucHVzaChlcXVhbGl0eSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRBID0ganVkZ2VtZW50LCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSBqdWRnZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnRCID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudEIgPSBqdWRnZW1lbnQsIC8vL1xuICAgICAgICAgICAgICAgICAganVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIgPSBqdWRnZW1lbnRBLmlzRXF1YWxUbyhqdWRnZW1lbnRCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoanVkZ2VtZW50QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QSA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3RhdGVtZW50QiA9IHN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRCID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50QiA9IHN0YXRlbWVudEEuaXNFcXVhbFRvKHN0YXRlbWVudEIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAoc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3RhdGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZW1lbnRzLnB1c2goc3RhdGVtZW50KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uQSA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uU3RyaW5nID0gYXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBhc3NlcnRpb25zID0gdGhpcy5nZXRBc3N1bXB0aW9ucygpLFxuICAgICAgICAgIGFzc2VydGlvbkIgPSBhc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzZXJ0aW9uQiA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICBhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIgPSBhc3NlcnRpb25BLmlzRXF1YWxUbyhhc3NlcnRpb25CKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGFzc2VydGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzZXJ0aW9ucy5wdXNoKGFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZUEgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICAgIHJlZmVyZW5jZUIgPSByZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlQiA9IHJlZmVyZW5jZSwgLy8vXG4gICAgICAgICAgICAgICAgICByZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIgPSByZWZlcmVuY2VBLmlzRXF1YWxUbyhyZWZlcmVuY2VCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHJlZmVyZW5jZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbkEgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gYXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uQiA9IGFzc3VtcHRpb25zLmZpbmQoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb25CID0gYXNzdW1wdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICBhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQiA9IGFzc3VtcHRpb25BLmlzRXF1YWxUbyhhc3N1bXB0aW9uQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGFzc3VtcHRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVBID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gbWV0YXZhcmlhYmxlQS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVBRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkVGVybXModGVybXMpIHtcbiAgICB0ZXJtcy5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICB0aGlzLmFkZFRlcm0odGVybSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRGcmFtZXMoZnJhbWVzKSB7XG4gICAgZnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICB0aGlzLmFkZEZyYW1lKGZyYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEVxdWFsaXRpZXMoZXF1YWxpdGllcykge1xuICAgIGVxdWFsaXRpZXMuZm9yRWFjaCgoZXF1YWxpdHkpID0+IHtcbiAgICAgIHRoaXMuYWRkRXF1YWxpdHkoZXF1YWxpdHkpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50cyhqdWRnZW1lbnRzKSB7XG4gICAganVkZ2VtZW50cy5mb3JFYWNoKChqdWRnZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRBc3NlcnRpb25zKGFzc2VydGlvbnMpIHtcbiAgICBhc3NlcnRpb25zLmZvckVhY2goKGFzc2VydGlvbikgPT4ge1xuICAgICAgdGhpcy5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICAgIHN0YXRlbWVudHMuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICB0aGlzLmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlcyhyZWZlcmVuY2VzKSB7XG4gICAgcmVmZXJlbmNlcy5mb3JFYWNoKChyZWZlcmVuY2UpID0+IHtcbiAgICAgIHRoaXMuYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRBc3N1bXB0aW9ucyhhc3N1bXB0aW9ucykge1xuICAgIGFzc3VtcHRpb25zLmZvckVhY2goKGFzc3VtcHRpb24pID0+IHtcbiAgICAgIHRoaXMuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcykge1xuICAgIG1ldGF2YXJpYWJsZXMuZm9yRWFjaCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICB0aGlzLmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgc3Vic3RpdHV0aW9ucy5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIHRoaXMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRoaXMuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtID0gdGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZXMgPSB0aGlzLmdldEZyYW1lcygpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXRpZXMgPSB0aGlzLmdldEVxdWFsaXRpZXMoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGVxdWFsaXRpZXMuZmluZCgoZXF1YWxpdHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSBlcXVhbGl0eS5tYXRjaEVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHlOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnROb2RlTWF0Y2hlcyA9IGp1ZGdlbWVudC5tYXRjaEp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudHMgPSB0aGlzLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRzLmZpbmQoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdGF0ZW1lbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2VzID0gdGhpcy5nZXRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2UubWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlUmVmZXJlbmNlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbnMgPSB0aGlzLmdldEFzc2VydGlvbnMoKSxcbiAgICAgICAgICBhc3NlcnRpb24gPSBhc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBhc3NlcnRpb24ubWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoYXNzZXJ0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbnMuZmluZCgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gYXNzdW1wdGlvbi5tYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKGFzc3VtcHRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2VzID0gdGhpcy5nZXRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gKHRlcm0gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSAoZnJhbWUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGZyYW1lUHJlc2VudDtcbiAgfVxuXG4gIGlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHlQcmVzZW50ID0gKGVxdWFsaXR5ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMuZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gKGp1ZGdlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudFByZXNlbnQgPSAoc3RhdGVtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzLmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgYXNzZXJ0aW9uUHJlc2VudCA9IChhc3NlcnRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc3VtcHRpb25QcmVzZW50QnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgYXNzdW1wdGlvblByZXNlbnQgPSAoYXNzdW1wdGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VQcmVzZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVuTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZW4gPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZW5QcmVzZW50ID0gKG1ldGF2YXJpYWJsZW4gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZW5QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBjb21taXQoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGVsZW1lbnQuc2V0Q29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgdGVybXMgPSB0aGlzLmdldFRlcm1zKCksXG4gICAgICAgIGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKCksXG4gICAgICAgIGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgZXF1YWxpdGllcyA9IHRoaXMuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgIGFzc2VydGlvbnMgPSB0aGlzLmdldEFzc2VydGlvbnMoKSxcbiAgICAgICAgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRlcm1zKSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcyksXG4gICAgICAgICAganVkZ2VtZW50c0pTT04gPSBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTihqdWRnZW1lbnRzKSxcbiAgICAgICAgICBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OKGVxdWFsaXRpZXMpLFxuICAgICAgICAgIHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04oc3RhdGVtZW50cyksXG4gICAgICAgICAgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTihhc3NlcnRpb25zKSxcbiAgICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OKHJlZmVyZW5jZXMpLFxuICAgICAgICAgIGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04oYXNzdW1wdGlvbnMpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKTtcblxuICAgIHRlcm1zID0gdGVybXNKU09OOyAvLy9cbiAgICBmcmFtZXMgPSBmcmFtZXNKU09OOyAvLy9cbiAgICBqdWRnZW1lbnRzID0ganVkZ2VtZW50c0pTT047IC8vL1xuICAgIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzSlNPTjsgLy8vXG4gICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNKU09OOyAvLy9cbiAgICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0pTT047IC8vL1xuICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzSlNPTjsgLy8vXG4gICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0pTT047IC8vL1xuICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTjsgIC8vXG4gICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OOyAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICB0ZXJtcyxcbiAgICAgIGZyYW1lcyxcbiAgICAgIGp1ZGdlbWVudHMsXG4gICAgICBlcXVhbGl0aWVzLFxuICAgICAgc3RhdGVtZW50cyxcbiAgICAgIGFzc2VydGlvbnMsXG4gICAgICByZWZlcmVuY2VzLFxuICAgICAgYXNzdW1wdGlvbnMsXG4gICAgICBtZXRhdmFyaWFibGVzLFxuICAgICAgc3Vic3RpdHV0aW9uc1xuICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBudWxsLFxuICAgICAgICAgIGZyYW1lcyA9IG51bGwsXG4gICAgICAgICAgZXF1YWxpdGllcyA9IG51bGwsXG4gICAgICAgICAganVkZ2VtZW50cyA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50cyA9IG51bGwsXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IG51bGwsXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IG51bGwsXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICAgIGVtcGhlbWVyYWxDb250ZXh0ID0gbmV3IEVwaGVtZXJhbENvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywgZXF1YWxpdGllcywganVkZ2VtZW50cywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZXMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgZW1waGVtZXJhbENvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IFtdLFxuICAgICAgICAgIGFzc3VtcHRpb25zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBFcGhlbWVyYWxDb250ZXh0KGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGVxdWFsaXRpZXMsIGp1ZGdlbWVudHMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVwaGVtZXJhbENvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsInRlcm1zIiwiZnJhbWVzIiwiZXF1YWxpdGllcyIsImp1ZGdlbWVudHMiLCJhc3NlcnRpb25zIiwic3RhdGVtZW50cyIsInJlZmVyZW5jZXMiLCJhc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZXMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0VGVybXMiLCJnZXRDb250ZXh0IiwiZ2V0RnJhbWVzIiwiZ2V0RXF1YWxpdGllcyIsImdldEp1ZGdlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImdldFJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtQSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1CIiwiZmluZCIsInRlcm1BQ29tcGFyZXNUb1Rlcm1CIiwiY29tcGFyZVRlcm0iLCJwdXNoIiwiZGVidWciLCJhZGRGcmFtZSIsImZyYW1lIiwiZnJhbWVBIiwiZnJhbWVTdHJpbmciLCJmcmFtZUIiLCJmcmFtZUFFcXVhbFRvRnJhbWVCIiwiaXNFcXVhbFRvIiwiYWRkRXF1YWxpdHkiLCJlcXVhbGl0eSIsImVxdWFsaXR5QSIsImVxdWFsaXR5U3RyaW5nIiwiZXF1YWxpdHlCIiwiZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5QiIsImFkZEp1ZGdlbWVudCIsImp1ZGdlbWVudCIsImp1ZGdlbWVudEEiLCJqdWRnZW1lbnRTdHJpbmciLCJqdWRnZW1lbnRCIiwianVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIiLCJhZGRTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRBIiwic3RhdGVtZW50U3RyaW5nIiwic3RhdGVtZW50QiIsInN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50QiIsImFkZEFzc2VydGlvbiIsImFzc2VydGlvbiIsImFzc2VydGlvbkEiLCJhc3NlcnRpb25TdHJpbmciLCJhc3NlcnRpb25CIiwiYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CIiwiYWRkUmVmZXJlbmNlIiwicmVmZXJlbmNlIiwicmVmZXJlbmNlQSIsInJlZmVyZW5jZVN0cmluZyIsInJlZmVyZW5jZUIiLCJyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIiLCJhZGRBc3N1bXB0aW9uIiwiYXNzdW1wdGlvbiIsImFzc3VtcHRpb25BIiwiYXNzdW1wdGlvblN0cmluZyIsImFzc3VtcHRpb25CIiwiYXNzdW1wdGlvbkFFcXVhbFRvQXNzdW1wdGlvbkIiLCJhZGRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVBIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwibWV0YXZhcmlhYmxlQiIsIm1ldGF2YXJpYWJsZUFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImFkZFN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbkEiLCJzdWJzdGl0dXRpb25TdHJpbmciLCJzdWJzdGl0dXRpb25CIiwic3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CIiwiYWRkVGVybXMiLCJmb3JFYWNoIiwiYWRkRnJhbWVzIiwiYWRkRXF1YWxpdGllcyIsImFkZEp1ZGdlbWVudHMiLCJhZGRBc3NlcnRpb25zIiwiYWRkU3RhdGVtZW50cyIsImFkZFJlZmVyZW5jZXMiLCJhZGRBc3N1bXB0aW9ucyIsImFkZE1ldGF2YXJpYWJsZXMiLCJhZGRTdWJzdGl0dXRpb25zIiwiZmluZFRlcm1CeVRlcm1Ob2RlIiwidGVybU5vZGUiLCJ0ZXJtTm9kZU1hdGNoZXMiLCJtYXRjaFRlcm1Ob2RlIiwiZmluZEZyYW1lQnlGcmFtZU5vZGUiLCJmcmFtZU5vZGUiLCJmcmFtZU5vZGVNYXRjaGVzIiwibWF0Y2hGcmFtZU5vZGUiLCJmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5Tm9kZU1hdGNoZXMiLCJtYXRjaEVxdWFsaXR5Tm9kZSIsImZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaEp1ZGdlbWVudE5vZGUiLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwiZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VNYXRjaGVSZWZlcmVuY2VOb2RlIiwibWF0Y2hSZWZlcmVuY2VOb2RlIiwiZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzZXJ0aW9uTm9kZSIsImZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3N1bXB0aW9uTm9kZSIsImZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnN0aXR1dGlvbk5vZGUiLCJpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSIsInRlcm1QcmVzZW50IiwiaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZSIsImZyYW1lUHJlc2VudCIsImlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eVByZXNlbnQiLCJpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnRQcmVzZW50IiwiaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJlc2VudCIsImlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvblByZXNlbnQiLCJpc0Fzc3VtcHRpb25QcmVzZW50QnlBc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25QcmVzZW50IiwiaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwicmVmZXJlbmNlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZW5Ob2RlIiwibWV0YXZhcmlhYmxlbiIsIm1ldGF2YXJpYWJsZW5QcmVzZW50IiwiaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uUHJlc2VudCIsImNvbW1pdCIsImVsZW1lbnQiLCJzZXRDb250ZXh0IiwiaW5pdGlhbGlzZSIsImpzb24iLCJ0ZXJtc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwic3RhdGVtZW50c0Zyb21KU09OIiwicmVmZXJlbmNlc0Zyb21KU09OIiwiZXF1YWxpdGllc0Zyb21KU09OIiwiYXNzdW1wdGlvbnNGcm9tSlNPTiIsImZyYW1lc0Zyb21KU09OIiwianVkZ2VtZW50c0Zyb21KU09OIiwiYXNzZXJ0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwidG9KU09OIiwidGVybXNKU09OIiwidGVybXNUb1Rlcm1zSlNPTiIsImZyYW1lc0pTT04iLCJmcmFtZXNUb0ZyYW1lc0pTT04iLCJqdWRnZW1lbnRzSlNPTiIsImp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OIiwiZXF1YWxpdGllc0pTT04iLCJlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTiIsInN0YXRlbWVudHNKU09OIiwic3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04iLCJhc3NlcnRpb25zSlNPTiIsImFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OIiwicmVmZXJlbmNlc0pTT04iLCJyZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTiIsImFzc3VtcHRpb25zSlNPTiIsImFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsImZyb21KU09OIiwiZW1waGVtZXJhbENvbnRleHQiLCJmcm9tTm90aGluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeUJBOzs7ZUFBcUJBOzs7Z0VBdkJEO3NCQXFCNkI7Ozs7OztBQUVsQyxNQUFNQSx5QkFBeUJDLGdCQUFPO0lBQ25ELFlBQVlDLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLGFBQWEsRUFBRUMsYUFBYSxDQUFFO1FBQ3pJLEtBQUssQ0FBQ1Y7UUFFTixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7UUFDckIsSUFBSSxDQUFDQyxhQUFhLEdBQUdBO0lBQ3ZCO0lBRUFDLFdBQVc7UUFDVCxJQUFJVjtRQUVKLE1BQU1ELFVBQVUsSUFBSSxDQUFDWSxVQUFVO1FBRS9CWCxRQUFRRCxRQUFRVyxRQUFRO1FBRXhCVixRQUFRO2VBQ0gsSUFBSSxDQUFDQSxLQUFLO2VBQ1ZBO1NBQ0o7UUFFRCxPQUFPQTtJQUNUO0lBRUFZLFlBQVk7UUFDVixJQUFJWDtR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