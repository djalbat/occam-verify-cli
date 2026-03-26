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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBoZW1lcmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBqdWRnZW1lbnRzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlcywgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmFzc2VydGlvbnMgPSBhc3NlcnRpb25zO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gcmVmZXJlbmNlcztcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgbGV0IHRlcm1zO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICB0ZXJtcyA9IGNvbnRleHQuZ2V0VGVybXMoKTtcbiAgICBcbiAgICB0ZXJtcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnRlcm1zLFxuICAgICAgLi4udGVybXNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcygpIHtcbiAgICBsZXQgZnJhbWVzO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBmcmFtZXMgPSBjb250ZXh0LmdldEZyYW1lcygpO1xuICAgIFxuICAgIGZyYW1lcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmZyYW1lcyxcbiAgICAgIC4uLmZyYW1lc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGZyYW1lcztcbiAgfVxuXG4gIGdldEVxdWFsaXRpZXMoKSB7XG4gICAgbGV0IGVxdWFsaXRpZXM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGVxdWFsaXRpZXMgPSBjb250ZXh0LmdldEVxdWFsaXRpZXMoKTtcbiAgICBcbiAgICBlcXVhbGl0aWVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuZXF1YWxpdGllcyxcbiAgICAgIC4uLmVxdWFsaXRpZXNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBsZXQganVkZ2VtZW50cztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuICAgIFxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGxldCBzdGF0ZW1lbnRzO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBzdGF0ZW1lbnRzID0gY29udGV4dC5nZXRTdGF0ZW1lbnRzKCk7XG4gICAgXG4gICAgc3RhdGVtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN0YXRlbWVudHMsXG4gICAgICAuLi5zdGF0ZW1lbnRzXG4gICAgXTtcbiAgICBcbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoKSB7XG4gICAgbGV0IGFzc2VydGlvbnM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGFzc2VydGlvbnMgPSBjb250ZXh0LmdldEFzc2VydGlvbnMoKTtcbiAgICBcbiAgICBhc3NlcnRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuYXNzZXJ0aW9ucyxcbiAgICAgIC4uLmFzc2VydGlvbnNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICBsZXQgcmVmZXJlbmNlcztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAgcmVmZXJlbmNlcyA9IGNvbnRleHQuZ2V0UmVmZXJlbmNlcygpO1xuICAgIFxuICAgIHJlZmVyZW5jZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5yZWZlcmVuY2VzLFxuICAgICAgLi4ucmVmZXJlbmNlc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGFzc3VtcHRpb25zID0gY29udGV4dC5nZXRBc3N1bXB0aW9ucygpO1xuICAgIFxuICAgIGFzc3VtcHRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuYXNzdW1wdGlvbnMsXG4gICAgICAuLi5hc3N1bXB0aW9uc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlcztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAgbWV0YXZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuICAgIFxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG4gICAgXG4gICAgc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgXTtcbiAgICBcbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gdGhpcy5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1CID0gdGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BRXF1YWxUb1Rlcm1CID0gdGVybUEuaXNFcXVhbFRvKHRlcm1CKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKHRlcm1BRXF1YWxUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodGVybUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmcmFtZUEgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKCksXG4gICAgICAgICAgZnJhbWVCID0gZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZUIgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICBmcmFtZUFFcXVhbFRvRnJhbWVCID0gZnJhbWVBLmlzRXF1YWxUbyhmcmFtZUIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAoZnJhbWVBRXF1YWxUb0ZyYW1lQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGZyYW1lQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5QSA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICBlcXVhbGl0eVN0cmluZyA9IGVxdWFsaXR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZXF1YWxpdGllcyA9IHRoaXMuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICAgIGVxdWFsaXR5QiA9IGVxdWFsaXRpZXMuZmluZCgoZXF1YWxpdHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QiA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIgPSBlcXVhbGl0eUEuaXNFcXVhbFRvKGVxdWFsaXR5Qik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZXF1YWxpdHlCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcXVhbGl0aWVzLnB1c2goZXF1YWxpdHkpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50QSA9IGp1ZGdlbWVudCwgLy8vXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0ganVkZ2VtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50QiA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRCID0ganVkZ2VtZW50LCAvLy9cbiAgICAgICAgICAgICAgICAgIGp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCID0ganVkZ2VtZW50QS5pc0VxdWFsVG8oanVkZ2VtZW50Qik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRBRXF1YWxUb0VxdWFsaXR5Qikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGp1ZGdlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEEgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50cyA9IHRoaXMuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgIHN0YXRlbWVudEIgPSBzdGF0ZW1lbnRzLmZpbmQoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50QiA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIgPSBzdGF0ZW1lbnRBLmlzRXF1YWxUbyhzdGF0ZW1lbnRCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50Qikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50cy5wdXNoKHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc2VydGlvbkEgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgIGFzc2VydGlvblN0cmluZyA9IGFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICBhc3NlcnRpb25CID0gYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gYXNzZXJ0aW9uQS5pc0VxdWFsVG8oYXNzZXJ0aW9uQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChhc3NlcnRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VBID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB0aGlzLmdldFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICByZWZlcmVuY2VCID0gcmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZUIgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCID0gcmVmZXJlbmNlQS5pc0VxdWFsVG8ocmVmZXJlbmNlQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChyZWZlcmVuY2VCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25BID0gYXNzdW1wdGlvbiwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbnMgPSB0aGlzLmdldEFzc3VtcHRpb25zKCksXG4gICAgICAgICAgYXNzdW1wdGlvbkIgPSBhc3N1bXB0aW9ucy5maW5kKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uQiA9IGFzc3VtcHRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgYXNzdW1wdGlvbkFFcXVhbFRvQXNzdW1wdGlvbkIgPSBhc3N1bXB0aW9uQS5pc0VxdWFsVG8oYXNzdW1wdGlvbkIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAoYXNzdW1wdGlvbkFFcXVhbFRvQXNzdW1wdGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChhc3N1bXB0aW9uQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb25zLnB1c2goYXNzdW1wdGlvbik7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlQSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlQiA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZUFFcXVhbFRvU3Vic3RpdHV0aW9uQiA9IG1ldGF2YXJpYWJsZUEuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlQUVxdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZFRlcm1zKHRlcm1zKSB7XG4gICAgdGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgdGhpcy5hZGRUZXJtKHRlcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRnJhbWVzKGZyYW1lcykge1xuICAgIGZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgdGhpcy5hZGRGcmFtZShmcmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRFcXVhbGl0aWVzKGVxdWFsaXRpZXMpIHtcbiAgICBlcXVhbGl0aWVzLmZvckVhY2goKGVxdWFsaXR5KSA9PiB7XG4gICAgICB0aGlzLmFkZEVxdWFsaXR5KGVxdWFsaXR5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudHMoanVkZ2VtZW50cykge1xuICAgIGp1ZGdlbWVudHMuZm9yRWFjaCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICB0aGlzLmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQXNzZXJ0aW9ucyhhc3NlcnRpb25zKSB7XG4gICAgYXNzZXJ0aW9ucy5mb3JFYWNoKChhc3NlcnRpb24pID0+IHtcbiAgICAgIHRoaXMuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnRzKHN0YXRlbWVudHMpIHtcbiAgICBzdGF0ZW1lbnRzLmZvckVhY2goKHN0YXRlbWVudCkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZXMocmVmZXJlbmNlcykge1xuICAgIHJlZmVyZW5jZXMuZm9yRWFjaCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICB0aGlzLmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMpIHtcbiAgICBhc3N1bXB0aW9ucy5mb3JFYWNoKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICB0aGlzLmFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZXMpIHtcbiAgICBtZXRhdmFyaWFibGVzLmZvckVhY2goKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgdGhpcy5hZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucykge1xuICAgIHN1YnN0aXR1dGlvbnMuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybXMgPSB0aGlzLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybSA9IHRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG4gICAgICBcbiAgICAgICAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWVzID0gdGhpcy5nZXRGcmFtZXMoKSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVOb2RlTWF0Y2hlcyA9IGZyYW1lLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0aWVzID0gdGhpcy5nZXRFcXVhbGl0aWVzKCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBlcXVhbGl0aWVzLmZpbmQoKGVxdWFsaXR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcXVhbGl0eU5vZGVNYXRjaGVzID0gZXF1YWxpdHkubWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBqdWRnZW1lbnQubWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb25zID0gdGhpcy5nZXRBc3NlcnRpb25zKCksXG4gICAgICAgICAgYXNzZXJ0aW9uID0gYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGVNYXRjaGVzID0gYXNzZXJ0aW9uLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKGFzc2VydGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbnMgPSB0aGlzLmdldEFzc3VtcHRpb25zKCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25zLmZpbmQoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IGFzc3VtcHRpb24ubWF0Y2hBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChhc3N1bXB0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9ICh0ZXJtICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0ZXJtUHJlc2VudDtcbiAgfVxuXG4gIGlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gKGZyYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcy5maW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsaXR5UHJlc2VudCA9IChlcXVhbGl0eSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRQcmVzZW50ID0gKHN0YXRlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpcy5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIGFzc2VydGlvblByZXNlbnQgPSAoYXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNBc3N1bXB0aW9uUHJlc2VudEJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25QcmVzZW50ID0gKGFzc3VtcHRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgcmVmZXJlbmNlUHJlc2VudCA9IChyZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlbk5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVuID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZW5Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVuUHJlc2VudCA9IChtZXRhdmFyaWFibGVuICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVuUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgY29tbWl0KGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBlbGVtZW50LnNldENvbnRleHQoY29udGV4dCk7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLnJlZmVyZW5jZXMgPSByZWZlcmVuY2VzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLmVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IHRlcm1zID0gdGhpcy5nZXRUZXJtcygpLFxuICAgICAgICBmcmFtZXMgPSB0aGlzLmdldEZyYW1lcygpLFxuICAgICAgICBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgIGVxdWFsaXRpZXMgPSB0aGlzLmdldEVxdWFsaXRpZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHRoaXMuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICBhc3NlcnRpb25zID0gdGhpcy5nZXRBc3NlcnRpb25zKCksXG4gICAgICAgIHJlZmVyZW5jZXMgPSB0aGlzLmdldFJlZmVyZW5jZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSB0aGlzLmdldEFzc3VtcHRpb25zKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpO1xuXG4gICAgY29uc3QgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcyksXG4gICAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpLFxuICAgICAgICAgIGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04oanVkZ2VtZW50cyksXG4gICAgICAgICAgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTihlcXVhbGl0aWVzKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OKHN0YXRlbWVudHMpLFxuICAgICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04oYXNzZXJ0aW9ucyksXG4gICAgICAgICAgcmVmZXJlbmNlc0pTT04gPSByZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTihyZWZlcmVuY2VzKSxcbiAgICAgICAgICBhc3N1bXB0aW9uc0pTT04gPSBhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OKGFzc3VtcHRpb25zKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKG1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04oc3Vic3RpdHV0aW9ucyk7XG5cbiAgICB0ZXJtcyA9IHRlcm1zSlNPTjsgLy8vXG4gICAgZnJhbWVzID0gZnJhbWVzSlNPTjsgLy8vXG4gICAganVkZ2VtZW50cyA9IGp1ZGdlbWVudHNKU09OOyAvLy9cbiAgICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0pTT047IC8vL1xuICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzSlNPTjsgLy8vXG4gICAgYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNKU09OOyAvLy9cbiAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlc0pTT047IC8vL1xuICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNKU09OOyAvLy9cbiAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT047ICAvL1xuICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTjsgLy8vXG5cbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgdGVybXMsXG4gICAgICBmcmFtZXMsXG4gICAgICBqdWRnZW1lbnRzLFxuICAgICAgZXF1YWxpdGllcyxcbiAgICAgIHN0YXRlbWVudHMsXG4gICAgICBhc3NlcnRpb25zLFxuICAgICAgcmVmZXJlbmNlcyxcbiAgICAgIGFzc3VtcHRpb25zLFxuICAgICAgbWV0YXZhcmlhYmxlcyxcbiAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gbnVsbCxcbiAgICAgICAgICBmcmFtZXMgPSBudWxsLFxuICAgICAgICAgIGVxdWFsaXRpZXMgPSBudWxsLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBudWxsLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBudWxsLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBudWxsLFxuICAgICAgICAgIGFzc3VtcHRpb25zID0gbnVsbCxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBFcGhlbWVyYWxDb250ZXh0KGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGVxdWFsaXRpZXMsIGp1ZGdlbWVudHMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGVtcGhlbWVyYWxDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAgZXF1YWxpdGllcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBbXSxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgZW1waGVtZXJhbENvbnRleHQgPSBuZXcgRXBoZW1lcmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBqdWRnZW1lbnRzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcGhlbWVyYWxDb250ZXh0IiwiQ29udGV4dCIsImNvbnRleHQiLCJ0ZXJtcyIsImZyYW1lcyIsImVxdWFsaXRpZXMiLCJqdWRnZW1lbnRzIiwiYXNzZXJ0aW9ucyIsInN0YXRlbWVudHMiLCJyZWZlcmVuY2VzIiwiYXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGVzIiwic3Vic3RpdHV0aW9ucyIsImdldFRlcm1zIiwiZ2V0Q29udGV4dCIsImdldEZyYW1lcyIsImdldEVxdWFsaXRpZXMiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImFkZFRlcm0iLCJ0ZXJtIiwidGVybUEiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtQiIsImZpbmQiLCJ0ZXJtQUVxdWFsVG9UZXJtQiIsImlzRXF1YWxUbyIsInB1c2giLCJkZWJ1ZyIsImFkZEZyYW1lIiwiZnJhbWUiLCJmcmFtZUEiLCJmcmFtZVN0cmluZyIsImZyYW1lQiIsImZyYW1lQUVxdWFsVG9GcmFtZUIiLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlBIiwiZXF1YWxpdHlTdHJpbmciLCJlcXVhbGl0eUIiLCJlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QSIsImp1ZGdlbWVudFN0cmluZyIsImp1ZGdlbWVudEIiLCJqdWRnZW1lbnRBRXF1YWxUb0VxdWFsaXR5QiIsImFkZFN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudEEiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRCIiwic3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCIiwiYWRkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uIiwiYXNzZXJ0aW9uQSIsImFzc2VydGlvblN0cmluZyIsImFzc2VydGlvbkIiLCJhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIiLCJhZGRSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VBIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlQiIsInJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQiIsImFkZEFzc3VtcHRpb24iLCJhc3N1bXB0aW9uIiwiYXNzdW1wdGlvbkEiLCJhc3N1bXB0aW9uU3RyaW5nIiwiYXNzdW1wdGlvbkIiLCJhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQiIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUEiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVCIiwibWV0YXZhcmlhYmxlQUVxdWFsVG9TdWJzdGl0dXRpb25CIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJhZGRUZXJtcyIsImZvckVhY2giLCJhZGRGcmFtZXMiLCJhZGRFcXVhbGl0aWVzIiwiYWRkSnVkZ2VtZW50cyIsImFkZEFzc2VydGlvbnMiLCJhZGRTdGF0ZW1lbnRzIiwiYWRkUmVmZXJlbmNlcyIsImFkZEFzc3VtcHRpb25zIiwiYWRkTWV0YXZhcmlhYmxlcyIsImFkZFN1YnN0aXR1dGlvbnMiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlTWF0Y2hlcyIsIm1hdGNoRXF1YWxpdHlOb2RlIiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoSnVkZ2VtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc3VtcHRpb25Ob2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImlzVGVybVByZXNlbnRCeVRlcm1Ob2RlIiwidGVybVByZXNlbnQiLCJpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlIiwiZnJhbWVQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwiaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uUHJlc2VudCIsImlzQXNzdW1wdGlvblByZXNlbnRCeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvblByZXNlbnQiLCJpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlbk5vZGUiLCJtZXRhdmFyaWFibGVuIiwibWV0YXZhcmlhYmxlblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiY29tbWl0IiwiZWxlbWVudCIsInNldENvbnRleHQiLCJpbml0aWFsaXNlIiwianNvbiIsInRlcm1zRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJzdGF0ZW1lbnRzRnJvbUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJhc3N1bXB0aW9uc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJhc3NlcnRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJ0b0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsImp1ZGdlbWVudHNKU09OIiwianVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04iLCJlcXVhbGl0aWVzSlNPTiIsImVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OIiwic3RhdGVtZW50c0pTT04iLCJzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTiIsImFzc2VydGlvbnNKU09OIiwiYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04iLCJyZWZlcmVuY2VzSlNPTiIsInJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OIiwiYXNzdW1wdGlvbnNKU09OIiwiYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwiZnJvbUpTT04iLCJlbXBoZW1lcmFsQ29udGV4dCIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5QkE7OztlQUFxQkE7OztnRUF2QkQ7c0JBcUI2Qjs7Ozs7O0FBRWxDLE1BQU1BLHlCQUF5QkMsZ0JBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLENBQUU7UUFDekksS0FBSyxDQUFDVjtRQUVOLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7SUFDdkI7SUFFQUMsV0FBVztRQUNULElBQUlWO1FBRUosTUFBTUQsVUFBVSxJQUFJLENBQUNZLFVBQVU7UUFFL0JYLFFBQVFELFFBQVFXLFFBQVE7UUFFeEJWLFFBQVE7ZUFDSCxJQUFJLENBQUNBLEtBQUs7ZUFDVkE7U0FDSjtRQUVELE9BQU9BO0lBQ1Q7SUFFQVksWUFBWTtRQUNWLElBQUlYO1FBRUosTUFBTUYsVUFBVSxJQUFJLENBQUNZ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