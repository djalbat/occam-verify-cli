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
    findVariableByVariableNode(variableNode) {
        const variableIdentifier = variableNode.getVariableIdentifier(), declaredVariable = this.findDeclaredVariableByVariableIdentifier(variableIdentifier), variable = declaredVariable; ///
        return variable;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBoZW1lcmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBqdWRnZW1lbnRzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlcywgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmFzc2VydGlvbnMgPSBhc3NlcnRpb25zO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gcmVmZXJlbmNlcztcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgbGV0IHRlcm1zO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICB0ZXJtcyA9IGNvbnRleHQuZ2V0VGVybXMoKTtcbiAgICBcbiAgICB0ZXJtcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnRlcm1zLFxuICAgICAgLi4udGVybXNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcygpIHtcbiAgICBsZXQgZnJhbWVzO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBmcmFtZXMgPSBjb250ZXh0LmdldEZyYW1lcygpO1xuICAgIFxuICAgIGZyYW1lcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmZyYW1lcyxcbiAgICAgIC4uLmZyYW1lc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGZyYW1lcztcbiAgfVxuXG4gIGdldEVxdWFsaXRpZXMoKSB7XG4gICAgbGV0IGVxdWFsaXRpZXM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGVxdWFsaXRpZXMgPSBjb250ZXh0LmdldEVxdWFsaXRpZXMoKTtcbiAgICBcbiAgICBlcXVhbGl0aWVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuZXF1YWxpdGllcyxcbiAgICAgIC4uLmVxdWFsaXRpZXNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBsZXQganVkZ2VtZW50cztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuICAgIFxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGxldCBzdGF0ZW1lbnRzO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBzdGF0ZW1lbnRzID0gY29udGV4dC5nZXRTdGF0ZW1lbnRzKCk7XG4gICAgXG4gICAgc3RhdGVtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN0YXRlbWVudHMsXG4gICAgICAuLi5zdGF0ZW1lbnRzXG4gICAgXTtcbiAgICBcbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoKSB7XG4gICAgbGV0IGFzc2VydGlvbnM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGFzc2VydGlvbnMgPSBjb250ZXh0LmdldEFzc2VydGlvbnMoKTtcbiAgICBcbiAgICBhc3NlcnRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuYXNzZXJ0aW9ucyxcbiAgICAgIC4uLmFzc2VydGlvbnNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICBsZXQgcmVmZXJlbmNlcztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAgcmVmZXJlbmNlcyA9IGNvbnRleHQuZ2V0UmVmZXJlbmNlcygpO1xuICAgIFxuICAgIHJlZmVyZW5jZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5yZWZlcmVuY2VzLFxuICAgICAgLi4ucmVmZXJlbmNlc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGFzc3VtcHRpb25zID0gY29udGV4dC5nZXRBc3N1bXB0aW9ucygpO1xuICAgIFxuICAgIGFzc3VtcHRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuYXNzdW1wdGlvbnMsXG4gICAgICAuLi5hc3N1bXB0aW9uc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlcztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAgbWV0YXZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuICAgIFxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG4gICAgXG4gICAgc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgXTtcbiAgICBcbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm0odGVybSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB0ZXJtQSA9IHRlcm0sIC8vL1xuICAgICAgICAgIHRlcm1TdHJpbmcgPSB0ZXJtLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHRlcm1zID0gdGhpcy5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm1CID0gdGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybUIgPSB0ZXJtLCAvLy9cbiAgICAgICAgICAgICAgICAgIHRlcm1BQ29tcGFyZXNUb1Rlcm1CID0gdGVybUEuY29tcGFyZVRlcm0odGVybUIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAodGVybUFDb21wYXJlc1RvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh0ZXJtQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEZyYW1lKGZyYW1lKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGZyYW1lQSA9IGZyYW1lLCAvLy9cbiAgICAgICAgICBmcmFtZVN0cmluZyA9IGZyYW1lLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZnJhbWVzID0gdGhpcy5nZXRGcmFtZXMoKSxcbiAgICAgICAgICBmcmFtZUIgPSBmcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lQiA9IGZyYW1lLCAvLy9cbiAgICAgICAgICAgICAgICAgIGZyYW1lQUVxdWFsVG9GcmFtZUIgPSBmcmFtZUEuaXNFcXVhbFRvKGZyYW1lQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChmcmFtZUFFcXVhbFRvRnJhbWVCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZnJhbWVCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5mcmFtZXMucHVzaChmcmFtZSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkRXF1YWxpdHkoZXF1YWxpdHkpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZXF1YWxpdHlBID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgIGVxdWFsaXR5U3RyaW5nID0gZXF1YWxpdHkuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBlcXVhbGl0aWVzID0gdGhpcy5nZXRFcXVhbGl0aWVzKCksXG4gICAgICAgICAgZXF1YWxpdHlCID0gZXF1YWxpdGllcy5maW5kKChlcXVhbGl0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlCID0gZXF1YWxpdHksIC8vL1xuICAgICAgICAgICAgICAgICAgZXF1YWxpdHlBRXF1YWxUb0VxdWFsaXR5QiA9IGVxdWFsaXR5QS5pc0VxdWFsVG8oZXF1YWxpdHlCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChlcXVhbGl0eUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVxdWFsaXRpZXMucHVzaChlcXVhbGl0eSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2VxdWFsaXR5U3RyaW5nfScgZXF1YWxpdHkgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRBID0ganVkZ2VtZW50LCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSBqdWRnZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnRCID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudEIgPSBqdWRnZW1lbnQsIC8vL1xuICAgICAgICAgICAgICAgICAganVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIgPSBqdWRnZW1lbnRBLmlzRXF1YWxUbyhqdWRnZW1lbnRCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoanVkZ2VtZW50QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7anVkZ2VtZW50U3RyaW5nfScganVkZ2VtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudChzdGF0ZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3RhdGVtZW50QSA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3RhdGVtZW50QiA9IHN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnRCID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICAgICAgICAgIHN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50QiA9IHN0YXRlbWVudEEuaXNFcXVhbFRvKHN0YXRlbWVudEIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAoc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3RhdGVtZW50QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGF0ZW1lbnRzLnB1c2goc3RhdGVtZW50KTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEFzc2VydGlvbihhc3NlcnRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uQSA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgYXNzZXJ0aW9uU3RyaW5nID0gYXNzZXJ0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBhc3NlcnRpb25zID0gdGhpcy5nZXRBc3N1bXB0aW9ucygpLFxuICAgICAgICAgIGFzc2VydGlvbkIgPSBhc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzZXJ0aW9uQiA9IGFzc2VydGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICBhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIgPSBhc3NlcnRpb25BLmlzRXF1YWxUbyhhc3NlcnRpb25CKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGFzc2VydGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzZXJ0aW9ucy5wdXNoKGFzc2VydGlvbik7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2Fzc2VydGlvblN0cmluZ30nIGFzc2VydGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZUEgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICAgIHJlZmVyZW5jZUIgPSByZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlQiA9IHJlZmVyZW5jZSwgLy8vXG4gICAgICAgICAgICAgICAgICByZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIgPSByZWZlcmVuY2VBLmlzRXF1YWxUbyhyZWZlcmVuY2VCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHJlZmVyZW5jZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRBc3N1bXB0aW9uKGFzc3VtcHRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvbkEgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uU3RyaW5nID0gYXNzdW1wdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBhc3N1bXB0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uQiA9IGFzc3VtcHRpb25zLmZpbmQoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb25CID0gYXNzdW1wdGlvbiwgLy8vXG4gICAgICAgICAgICAgICAgICBhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQiA9IGFzc3VtcHRpb25BLmlzRXF1YWxUbyhhc3N1bXB0aW9uQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGFzc3VtcHRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXNzdW1wdGlvbnMucHVzaChhc3N1bXB0aW9uKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVBID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVTdHJpbmcgPSBtZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUIgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gbWV0YXZhcmlhYmxlQS5pc0VxdWFsVG8obWV0YXZhcmlhYmxlQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVBRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChtZXRhdmFyaWFibGVCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkVGVybXModGVybXMpIHtcbiAgICB0ZXJtcy5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICB0aGlzLmFkZFRlcm0odGVybSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRGcmFtZXMoZnJhbWVzKSB7XG4gICAgZnJhbWVzLmZvckVhY2goKGZyYW1lKSA9PiB7XG4gICAgICB0aGlzLmFkZEZyYW1lKGZyYW1lKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEVxdWFsaXRpZXMoZXF1YWxpdGllcykge1xuICAgIGVxdWFsaXRpZXMuZm9yRWFjaCgoZXF1YWxpdHkpID0+IHtcbiAgICAgIHRoaXMuYWRkRXF1YWxpdHkoZXF1YWxpdHkpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkSnVkZ2VtZW50cyhqdWRnZW1lbnRzKSB7XG4gICAganVkZ2VtZW50cy5mb3JFYWNoKChqdWRnZW1lbnQpID0+IHtcbiAgICAgIHRoaXMuYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRBc3NlcnRpb25zKGFzc2VydGlvbnMpIHtcbiAgICBhc3NlcnRpb25zLmZvckVhY2goKGFzc2VydGlvbikgPT4ge1xuICAgICAgdGhpcy5hZGRBc3NlcnRpb24oYXNzZXJ0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFN0YXRlbWVudHMoc3RhdGVtZW50cykge1xuICAgIHN0YXRlbWVudHMuZm9yRWFjaCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICB0aGlzLmFkZFN0YXRlbWVudChzdGF0ZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlcyhyZWZlcmVuY2VzKSB7XG4gICAgcmVmZXJlbmNlcy5mb3JFYWNoKChyZWZlcmVuY2UpID0+IHtcbiAgICAgIHRoaXMuYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRBc3N1bXB0aW9ucyhhc3N1bXB0aW9ucykge1xuICAgIGFzc3VtcHRpb25zLmZvckVhY2goKGFzc3VtcHRpb24pID0+IHtcbiAgICAgIHRoaXMuYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcykge1xuICAgIG1ldGF2YXJpYWJsZXMuZm9yRWFjaCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICB0aGlzLmFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zKSB7XG4gICAgc3Vic3RpdHV0aW9ucy5mb3JFYWNoKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgIHRoaXMuYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZU5vZGUuZ2V0VmFyaWFibGVJZGVudGlmaWVyKCksXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZSA9IHRoaXMuZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpLFxuICAgICAgICAgIHZhcmlhYmxlID0gZGVjbGFyZWRWYXJpYWJsZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybXMgPSB0aGlzLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybSA9IHRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1Ob2RlTWF0Y2hlcyA9IHRlcm0ubWF0Y2hUZXJtTm9kZSh0ZXJtTm9kZSk7XG4gICAgICBcbiAgICAgICAgICAgIGlmICh0ZXJtTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWVzID0gdGhpcy5nZXRGcmFtZXMoKSxcbiAgICAgICAgICBmcmFtZSA9IGZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVOb2RlTWF0Y2hlcyA9IGZyYW1lLm1hdGNoRnJhbWVOb2RlKGZyYW1lTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChmcmFtZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICBmaW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0aWVzID0gdGhpcy5nZXRFcXVhbGl0aWVzKCksXG4gICAgICAgICAgZXF1YWxpdHkgPSBlcXVhbGl0aWVzLmZpbmQoKGVxdWFsaXR5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcXVhbGl0eU5vZGVNYXRjaGVzID0gZXF1YWxpdHkubWF0Y2hFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGVxdWFsaXR5Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBlcXVhbGl0eTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50Tm9kZU1hdGNoZXMgPSBqdWRnZW1lbnQubWF0Y2hKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gc3RhdGVtZW50Lm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKTtcblxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50O1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5UmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVSZWZlcmVuY2VOb2RlID0gcmVmZXJlbmNlLm1hdGNoUmVmZXJlbmNlTm9kZShyZWZlcmVuY2VOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb25zID0gdGhpcy5nZXRBc3NlcnRpb25zKCksXG4gICAgICAgICAgYXNzZXJ0aW9uID0gYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2VydGlvbk5vZGVNYXRjaGVzID0gYXNzZXJ0aW9uLm1hdGNoQXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKGFzc2VydGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbnMgPSB0aGlzLmdldEFzc3VtcHRpb25zKCksXG4gICAgICAgICAgYXNzdW1wdGlvbiA9IGFzc3VtcHRpb25zLmZpbmQoKGFzc3VtcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc3VtcHRpb25Ob2RlTWF0Y2hlcyA9IGFzc3VtcHRpb24ubWF0Y2hBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChhc3N1bXB0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uO1xuICB9XG5cbiAgZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICAgIHJlZmVyZW5jZSA9IHJlZmVyZW5jZXMuZmluZCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiByZWZlcmVuY2U7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyA9IHN1YnN0aXR1dGlvbi5tYXRjaFN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGlzVGVybVByZXNlbnRCeVRlcm1Ob2RlKHRlcm1Ob2RlKSB7XG4gICAgY29uc3QgdGVybSA9IHRoaXMuZmluZFRlcm1CeVRlcm1Ob2RlKHRlcm1Ob2RlKSxcbiAgICAgICAgICB0ZXJtUHJlc2VudCA9ICh0ZXJtICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0ZXJtUHJlc2VudDtcbiAgfVxuXG4gIGlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUoZnJhbWVOb2RlKSB7XG4gICAgY29uc3QgZnJhbWUgPSB0aGlzLmZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSksXG4gICAgICAgICAgZnJhbWVQcmVzZW50ID0gKGZyYW1lICE9PSBudWxsKTtcblxuICAgIHJldHVybiBmcmFtZVByZXNlbnQ7XG4gIH1cblxuICBpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXR5ID0gdGhpcy5maW5kRXF1YWxpdHlCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpLFxuICAgICAgICAgIGVxdWFsaXR5UHJlc2VudCA9IChlcXVhbGl0eSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZXF1YWxpdHlQcmVzZW50O1xuICB9XG5cbiAgaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnQgPSB0aGlzLmZpbmRKdWRnZW1lbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSksXG4gICAgICAgICAganVkZ2VtZW50UHJlc2VudCA9IChqdWRnZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSxcbiAgICAgICAgICBzdGF0ZW1lbnRQcmVzZW50ID0gKHN0YXRlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzQXNzZXJ0aW9uUHJlc2VudEJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9uID0gdGhpcy5maW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpLFxuICAgICAgICAgIGFzc2VydGlvblByZXNlbnQgPSAoYXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBhc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNBc3N1bXB0aW9uUHJlc2VudEJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9uID0gdGhpcy5maW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpLFxuICAgICAgICAgIGFzc3VtcHRpb25QcmVzZW50ID0gKGFzc3VtcHRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNSZWZlcmVuY2VQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2UgPSB0aGlzLmZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgcmVmZXJlbmNlUHJlc2VudCA9IChyZWZlcmVuY2UgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlbk5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVuID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZW5Ob2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVuUHJlc2VudCA9IChtZXRhdmFyaWFibGVuICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVuUHJlc2VudDtcbiAgfVxuXG4gIGlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gdGhpcy5maW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvblByZXNlbnQgPSAoc3Vic3RpdHV0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb25QcmVzZW50O1xuICB9XG5cbiAgY29tbWl0KGVsZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICBlbGVtZW50LnNldENvbnRleHQoY29udGV4dCk7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLnJlZmVyZW5jZXMgPSByZWZlcmVuY2VzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLmVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5hc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLmZyYW1lcyA9IGZyYW1lc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgbGV0IHRlcm1zID0gdGhpcy5nZXRUZXJtcygpLFxuICAgICAgICBmcmFtZXMgPSB0aGlzLmdldEZyYW1lcygpLFxuICAgICAgICBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgIGVxdWFsaXRpZXMgPSB0aGlzLmdldEVxdWFsaXRpZXMoKSxcbiAgICAgICAgc3RhdGVtZW50cyA9IHRoaXMuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICBhc3NlcnRpb25zID0gdGhpcy5nZXRBc3NlcnRpb25zKCksXG4gICAgICAgIHJlZmVyZW5jZXMgPSB0aGlzLmdldFJlZmVyZW5jZXMoKSxcbiAgICAgICAgYXNzdW1wdGlvbnMgPSB0aGlzLmdldEFzc3VtcHRpb25zKCksXG4gICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHRoaXMuZ2V0U3Vic3RpdHV0aW9ucygpO1xuXG4gICAgY29uc3QgdGVybXNKU09OID0gdGVybXNUb1Rlcm1zSlNPTih0ZXJtcyksXG4gICAgICAgICAgZnJhbWVzSlNPTiA9IGZyYW1lc1RvRnJhbWVzSlNPTihmcmFtZXMpLFxuICAgICAgICAgIGp1ZGdlbWVudHNKU09OID0ganVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04oanVkZ2VtZW50cyksXG4gICAgICAgICAgZXF1YWxpdGllc0pTT04gPSBlcXVhbGl0aWVzVG9FcXVhbGl0aWVzSlNPTihlcXVhbGl0aWVzKSxcbiAgICAgICAgICBzdGF0ZW1lbnRzSlNPTiA9IHN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OKHN0YXRlbWVudHMpLFxuICAgICAgICAgIGFzc2VydGlvbnNKU09OID0gYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04oYXNzZXJ0aW9ucyksXG4gICAgICAgICAgcmVmZXJlbmNlc0pTT04gPSByZWZlcmVuY2VzVG9SZWZlcmVuY2VzSlNPTihyZWZlcmVuY2VzKSxcbiAgICAgICAgICBhc3N1bXB0aW9uc0pTT04gPSBhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OKGFzc3VtcHRpb25zKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKG1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04oc3Vic3RpdHV0aW9ucyk7XG5cbiAgICB0ZXJtcyA9IHRlcm1zSlNPTjsgLy8vXG4gICAgZnJhbWVzID0gZnJhbWVzSlNPTjsgLy8vXG4gICAganVkZ2VtZW50cyA9IGp1ZGdlbWVudHNKU09OOyAvLy9cbiAgICBlcXVhbGl0aWVzID0gZXF1YWxpdGllc0pTT047IC8vL1xuICAgIHN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzSlNPTjsgLy8vXG4gICAgYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnNKU09OOyAvLy9cbiAgICByZWZlcmVuY2VzID0gcmVmZXJlbmNlc0pTT047IC8vL1xuICAgIGFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNKU09OOyAvLy9cbiAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT047ICAvL1xuICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTjsgLy8vXG5cbiAgICBjb25zdCBqc29uID0ge1xuICAgICAgdGVybXMsXG4gICAgICBmcmFtZXMsXG4gICAgICBqdWRnZW1lbnRzLFxuICAgICAgZXF1YWxpdGllcyxcbiAgICAgIHN0YXRlbWVudHMsXG4gICAgICBhc3NlcnRpb25zLFxuICAgICAgcmVmZXJlbmNlcyxcbiAgICAgIGFzc3VtcHRpb25zLFxuICAgICAgbWV0YXZhcmlhYmxlcyxcbiAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gbnVsbCxcbiAgICAgICAgICBmcmFtZXMgPSBudWxsLFxuICAgICAgICAgIGVxdWFsaXRpZXMgPSBudWxsLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBudWxsLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBudWxsLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBudWxsLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBudWxsLFxuICAgICAgICAgIGFzc3VtcHRpb25zID0gbnVsbCxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gbnVsbCxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBFcGhlbWVyYWxDb250ZXh0KGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGVxdWFsaXRpZXMsIGp1ZGdlbWVudHMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIGVtcGhlbWVyYWxDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vdGhpbmcoY29udGV4dCkge1xuICAgIGNvbnN0IHRlcm1zID0gW10sXG4gICAgICAgICAgZnJhbWVzID0gW10sXG4gICAgICAgICAgZXF1YWxpdGllcyA9IFtdLFxuICAgICAgICAgIGp1ZGdlbWVudHMgPSBbXSxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gW10sXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IFtdLFxuICAgICAgICAgIHJlZmVyZW5jZXMgPSBbXSxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgZW1waGVtZXJhbENvbnRleHQgPSBuZXcgRXBoZW1lcmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBqdWRnZW1lbnRzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICByZXR1cm4gZW1waGVtZXJhbENvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJFcGhlbWVyYWxDb250ZXh0IiwiQ29udGV4dCIsImNvbnRleHQiLCJ0ZXJtcyIsImZyYW1lcyIsImVxdWFsaXRpZXMiLCJqdWRnZW1lbnRzIiwiYXNzZXJ0aW9ucyIsInN0YXRlbWVudHMiLCJyZWZlcmVuY2VzIiwiYXNzdW1wdGlvbnMiLCJtZXRhdmFyaWFibGVzIiwic3Vic3RpdHV0aW9ucyIsImdldFRlcm1zIiwiZ2V0Q29udGV4dCIsImdldEZyYW1lcyIsImdldEVxdWFsaXRpZXMiLCJnZXRKdWRnZW1lbnRzIiwiZ2V0U3RhdGVtZW50cyIsImdldEFzc2VydGlvbnMiLCJnZXRSZWZlcmVuY2VzIiwiZ2V0QXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImFkZFRlcm0iLCJ0ZXJtIiwidGVybUEiLCJ0ZXJtU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJ0ZXJtQiIsImZpbmQiLCJ0ZXJtQUNvbXBhcmVzVG9UZXJtQiIsImNvbXBhcmVUZXJtIiwicHVzaCIsImRlYnVnIiwiYWRkRnJhbWUiLCJmcmFtZSIsImZyYW1lQSIsImZyYW1lU3RyaW5nIiwiZnJhbWVCIiwiZnJhbWVBRXF1YWxUb0ZyYW1lQiIsImlzRXF1YWxUbyIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUEiLCJlcXVhbGl0eVN0cmluZyIsImVxdWFsaXR5QiIsImVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBIiwianVkZ2VtZW50U3RyaW5nIiwianVkZ2VtZW50QiIsImp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCIiwiYWRkU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50QSIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudEIiLCJzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIiLCJhZGRBc3NlcnRpb24iLCJhc3NlcnRpb24iLCJhc3NlcnRpb25BIiwiYXNzZXJ0aW9uU3RyaW5nIiwiYXNzZXJ0aW9uQiIsImFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsImFkZFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUEiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VCIiwicmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCIiwiYWRkQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uQSIsImFzc3VtcHRpb25TdHJpbmciLCJhc3N1bXB0aW9uQiIsImFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZUIiLCJtZXRhdmFyaWFibGVBRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImFkZFRlcm1zIiwiZm9yRWFjaCIsImFkZEZyYW1lcyIsImFkZEVxdWFsaXRpZXMiLCJhZGRKdWRnZW1lbnRzIiwiYWRkQXNzZXJ0aW9ucyIsImFkZFN0YXRlbWVudHMiLCJhZGRSZWZlcmVuY2VzIiwiYWRkQXNzdW1wdGlvbnMiLCJhZGRNZXRhdmFyaWFibGVzIiwiYWRkU3Vic3RpdHV0aW9ucyIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZ2V0VmFyaWFibGVJZGVudGlmaWVyIiwiZGVjbGFyZWRWYXJpYWJsZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZSIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGVNYXRjaGVzIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hKdWRnZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTWF0Y2hlUmVmZXJlbmNlTm9kZSIsIm1hdGNoUmVmZXJlbmNlTm9kZSIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc2VydGlvbk5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFByZXNlbnQiLCJpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25QcmVzZW50IiwiaXNBc3N1bXB0aW9uUHJlc2VudEJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uUHJlc2VudCIsImlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVuTm9kZSIsIm1ldGF2YXJpYWJsZW4iLCJtZXRhdmFyaWFibGVuUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJjb21taXQiLCJlbGVtZW50Iiwic2V0Q29udGV4dCIsImluaXRpYWxpc2UiLCJqc29uIiwidGVybXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsInN0YXRlbWVudHNGcm9tSlNPTiIsInJlZmVyZW5jZXNGcm9tSlNPTiIsImVxdWFsaXRpZXNGcm9tSlNPTiIsImFzc3VtcHRpb25zRnJvbUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsImp1ZGdlbWVudHNGcm9tSlNPTiIsImFzc2VydGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInRvSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJmcmFtZXNKU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwianVkZ2VtZW50c0pTT04iLCJqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTiIsImVxdWFsaXRpZXNKU09OIiwiZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04iLCJzdGF0ZW1lbnRzSlNPTiIsInN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OIiwiYXNzZXJ0aW9uc0pTT04iLCJhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTiIsInJlZmVyZW5jZXNKU09OIiwicmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04iLCJhc3N1bXB0aW9uc0pTT04iLCJhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OIiwibWV0YXZhcmlhYmxlc0pTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJmcm9tSlNPTiIsImVtcGhlbWVyYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlCQTs7O2VBQXFCQTs7O2dFQXZCRDtzQkFxQjZCOzs7Ozs7QUFFbEMsTUFBTUEseUJBQXlCQyxnQkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLGFBQWEsQ0FBRTtRQUN6SSxLQUFL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