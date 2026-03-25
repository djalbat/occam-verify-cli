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
    addTerms(terms) {
        terms.forEach((term)=>{
            this.addTerm(term);
        });
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
            context.debug(`...added the '${termString}' term to the ephemeral context.`);
        }
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
            context.debug(`...added the '${frameString}' frame to the ephemeral context.`);
        }
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
            context.debug(`...added the '${equalityString}' equality to the ephemeral context.`);
        }
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
            context.debug(`...added the '${judgementString}' judgement to the ephemeral context.`);
        }
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
            context.debug(`...added the '${statementString}' statement to the ephemeral context.`);
        }
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
            context.debug(`...added the '${assertionString}' assertion to the ephemeral context.`);
        }
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
            context.debug(`...added the '${referenceString}' reference to the ephemeral context.`);
        }
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
            context.debug(`...added the '${assumptionString}' assumption to the ephemeral context.`);
        }
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
            context.debug(`...added the '${metavariableString}' metavariable to the ephemeral context.`);
        }
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
            context.debug(`...added the '${substitutionString}' substitution to the ephemeral context.`);
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHRcIjtcblxuaW1wb3J0IHsgdGVybXNGcm9tSlNPTixcbiAgICAgICAgIGZyYW1lc0Zyb21KU09OLFxuICAgICAgICAgdGVybXNUb1Rlcm1zSlNPTixcbiAgICAgICAgIGZyYW1lc1RvRnJhbWVzSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNGcm9tSlNPTixcbiAgICAgICAgIHN0YXRlbWVudHNGcm9tSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNGcm9tSlNPTixcbiAgICAgICAgIGFzc3VtcHRpb25zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTixcbiAgICAgICAgIGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OLFxuICAgICAgICAgc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04sXG4gICAgICAgICBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTixcbiAgICAgICAgIHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTixcbiAgICAgICAgIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXBoZW1lcmFsQ29udGV4dCBleHRlbmRzIENvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBqdWRnZW1lbnRzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlcywgc3Vic3RpdHV0aW9ucykge1xuICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zO1xuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzO1xuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXM7XG4gICAgdGhpcy5qdWRnZW1lbnRzID0ganVkZ2VtZW50cztcbiAgICB0aGlzLmFzc2VydGlvbnMgPSBhc3NlcnRpb25zO1xuICAgIHRoaXMuc3RhdGVtZW50cyA9IHN0YXRlbWVudHM7XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gcmVmZXJlbmNlcztcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0VGVybXMoKSB7XG4gICAgbGV0IHRlcm1zO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICB0ZXJtcyA9IGNvbnRleHQuZ2V0VGVybXMoKTtcbiAgICBcbiAgICB0ZXJtcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnRlcm1zLFxuICAgICAgLi4udGVybXNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcygpIHtcbiAgICBsZXQgZnJhbWVzO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBmcmFtZXMgPSBjb250ZXh0LmdldEZyYW1lcygpO1xuICAgIFxuICAgIGZyYW1lcyA9IFsgLy8vXG4gICAgICAuLi50aGlzLmZyYW1lcyxcbiAgICAgIC4uLmZyYW1lc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGZyYW1lcztcbiAgfVxuXG4gIGdldEVxdWFsaXRpZXMoKSB7XG4gICAgbGV0IGVxdWFsaXRpZXM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGVxdWFsaXRpZXMgPSBjb250ZXh0LmdldEVxdWFsaXRpZXMoKTtcbiAgICBcbiAgICBlcXVhbGl0aWVzID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuZXF1YWxpdGllcyxcbiAgICAgIC4uLmVxdWFsaXRpZXNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBsZXQganVkZ2VtZW50cztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAganVkZ2VtZW50cyA9IGNvbnRleHQuZ2V0SnVkZ2VtZW50cygpO1xuICAgIFxuICAgIGp1ZGdlbWVudHMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5qdWRnZW1lbnRzLFxuICAgICAgLi4uanVkZ2VtZW50c1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKCkge1xuICAgIGxldCBzdGF0ZW1lbnRzO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBzdGF0ZW1lbnRzID0gY29udGV4dC5nZXRTdGF0ZW1lbnRzKCk7XG4gICAgXG4gICAgc3RhdGVtZW50cyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN0YXRlbWVudHMsXG4gICAgICAuLi5zdGF0ZW1lbnRzXG4gICAgXTtcbiAgICBcbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoKSB7XG4gICAgbGV0IGFzc2VydGlvbnM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGFzc2VydGlvbnMgPSBjb250ZXh0LmdldEFzc2VydGlvbnMoKTtcbiAgICBcbiAgICBhc3NlcnRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuYXNzZXJ0aW9ucyxcbiAgICAgIC4uLmFzc2VydGlvbnNcbiAgICBdO1xuICAgIFxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcygpIHtcbiAgICBsZXQgcmVmZXJlbmNlcztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAgcmVmZXJlbmNlcyA9IGNvbnRleHQuZ2V0UmVmZXJlbmNlcygpO1xuICAgIFxuICAgIHJlZmVyZW5jZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5yZWZlcmVuY2VzLFxuICAgICAgLi4ucmVmZXJlbmNlc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICBsZXQgYXNzdW1wdGlvbnM7XG4gICAgXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuICAgIFxuICAgIGFzc3VtcHRpb25zID0gY29udGV4dC5nZXRBc3N1bXB0aW9ucygpO1xuICAgIFxuICAgIGFzc3VtcHRpb25zID0gWyAvLy9cbiAgICAgIC4uLnRoaXMuYXNzdW1wdGlvbnMsXG4gICAgICAuLi5hc3N1bXB0aW9uc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlcztcbiAgICBcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgXG4gICAgbWV0YXZhcmlhYmxlcyA9IGNvbnRleHQuZ2V0TWV0YXZhcmlhYmxlcygpO1xuICAgIFxuICAgIG1ldGF2YXJpYWJsZXMgPSBbIC8vL1xuICAgICAgLi4udGhpcy5tZXRhdmFyaWFibGVzLFxuICAgICAgLi4ubWV0YXZhcmlhYmxlc1xuICAgIF07XG4gICAgXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRTdWJzdGl0dXRpb25zKCkge1xuICAgIGxldCBzdWJzdGl0dXRpb25zO1xuICAgIFxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICBcbiAgICBzdWJzdGl0dXRpb25zID0gY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKCk7XG4gICAgXG4gICAgc3Vic3RpdHV0aW9ucyA9IFsgLy8vXG4gICAgICAuLi50aGlzLnN1YnN0aXR1dGlvbnMsXG4gICAgICAuLi5zdWJzdGl0dXRpb25zXG4gICAgXTtcbiAgICBcbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFRlcm1zKHRlcm1zKSB7XG4gICAgdGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgdGhpcy5hZGRUZXJtKHRlcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkVGVybSh0ZXJtKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHRlcm1BID0gdGVybSwgLy8vXG4gICAgICAgICAgdGVybVN0cmluZyA9IHRlcm0uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgdGVybXMgPSB0aGlzLmdldFRlcm1zKCksXG4gICAgICAgICAgdGVybUIgPSB0ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtQiA9IHRlcm0sIC8vL1xuICAgICAgICAgICAgICAgICAgdGVybUFFcXVhbFRvVGVybUIgPSB0ZXJtQS5pc0VxdWFsVG8odGVybUIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAodGVybUFFcXVhbFRvVGVybUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmICh0ZXJtQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3Rlcm1TdHJpbmd9JyB0ZXJtIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlcm1zLnB1c2godGVybSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkRnJhbWUoZnJhbWUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZnJhbWVBID0gZnJhbWUsIC8vL1xuICAgICAgICAgIGZyYW1lU3RyaW5nID0gZnJhbWUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBmcmFtZXMgPSB0aGlzLmdldEZyYW1lcygpLFxuICAgICAgICAgIGZyYW1lQiA9IGZyYW1lcy5maW5kKChmcmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZnJhbWVCID0gZnJhbWUsIC8vL1xuICAgICAgICAgICAgICAgICAgZnJhbWVBRXF1YWxUb0ZyYW1lQiA9IGZyYW1lQS5pc0VxdWFsVG8oZnJhbWVCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGZyYW1lQUVxdWFsVG9GcmFtZUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChmcmFtZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZyYW1lcy5wdXNoKGZyYW1lKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5QSA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICBlcXVhbGl0eVN0cmluZyA9IGVxdWFsaXR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZXF1YWxpdGllcyA9IHRoaXMuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICAgIGVxdWFsaXR5QiA9IGVxdWFsaXRpZXMuZmluZCgoZXF1YWxpdHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QiA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIgPSBlcXVhbGl0eUEuaXNFcXVhbFRvKGVxdWFsaXR5Qik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZXF1YWxpdHlCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcXVhbGl0aWVzLnB1c2goZXF1YWxpdHkpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkSnVkZ2VtZW50KGp1ZGdlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRBID0ganVkZ2VtZW50LCAvLy9cbiAgICAgICAgICBqdWRnZW1lbnRTdHJpbmcgPSBqdWRnZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnRCID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudEIgPSBqdWRnZW1lbnQsIC8vL1xuICAgICAgICAgICAgICAgICAganVkZ2VtZW50QUVxdWFsVG9FcXVhbGl0eUIgPSBqdWRnZW1lbnRBLmlzRXF1YWxUbyhqdWRnZW1lbnRCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoanVkZ2VtZW50QiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5qdWRnZW1lbnRzLnB1c2goanVkZ2VtZW50KTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU3RhdGVtZW50KHN0YXRlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRBID0gc3RhdGVtZW50LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudHMgPSB0aGlzLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRCID0gc3RhdGVtZW50cy5maW5kKChzdGF0ZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlbWVudEIgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgICAgICAgICAgc3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCID0gc3RhdGVtZW50QS5pc0VxdWFsVG8oc3RhdGVtZW50Qik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdGF0ZW1lbnRCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0YXRlbWVudHMucHVzaChzdGF0ZW1lbnQpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc2VydGlvbkEgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgIGFzc2VydGlvblN0cmluZyA9IGFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICBhc3NlcnRpb25CID0gYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gYXNzZXJ0aW9uQS5pc0VxdWFsVG8oYXNzZXJ0aW9uQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChhc3NlcnRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBhZGRSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZUEgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgIHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICAgIHJlZmVyZW5jZUIgPSByZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlQiA9IHJlZmVyZW5jZSwgLy8vXG4gICAgICAgICAgICAgICAgICByZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIgPSByZWZlcmVuY2VBLmlzRXF1YWxUbyhyZWZlcmVuY2VCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHJlZmVyZW5jZUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVmZXJlbmNlcy5wdXNoKHJlZmVyZW5jZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBhc3N1bXB0aW9uQSA9IGFzc3VtcHRpb24sIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25TdHJpbmcgPSBhc3N1bXB0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGFzc3VtcHRpb25zID0gdGhpcy5nZXRBc3N1bXB0aW9ucygpLFxuICAgICAgICAgIGFzc3VtcHRpb25CID0gYXNzdW1wdGlvbnMuZmluZCgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzdW1wdGlvbkIgPSBhc3N1bXB0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICAgIGFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CID0gYXNzdW1wdGlvbkEuaXNFcXVhbFRvKGFzc3VtcHRpb25CKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKGFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoYXNzdW1wdGlvbkIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHthc3N1bXB0aW9uU3RyaW5nfScgYXNzdW1wdGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hc3N1bXB0aW9ucy5wdXNoKGFzc3VtcHRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7YXNzdW1wdGlvblN0cmluZ30nIGFzc3VtcHRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH1cbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlQSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlQiA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZUFFcXVhbFRvU3Vic3RpdHV0aW9uQiA9IG1ldGF2YXJpYWJsZUEuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlQUVxdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfVxuICB9XG5cbiAgYWRkU3Vic3RpdHV0aW9uKHN1YnN0aXR1dGlvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25BID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25TdHJpbmcgPSBzdWJzdGl0dXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbkIgPSBzdWJzdGl0dXRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uQS5pc0VxdWFsVG8oc3Vic3RpdHV0aW9uQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChzdWJzdGl0dXRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnN0aXR1dGlvbnMucHVzaChzdWJzdGl0dXRpb24pO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtcyA9IHRoaXMuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtID0gdGVybXMuZmluZCgodGVybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGVybU5vZGVNYXRjaGVzID0gdGVybS5tYXRjaFRlcm1Ob2RlKHRlcm1Ob2RlKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKHRlcm1Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRlcm07XG4gIH1cblxuICBmaW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZXMgPSB0aGlzLmdldEZyYW1lcygpLFxuICAgICAgICAgIGZyYW1lID0gZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZU5vZGVNYXRjaGVzID0gZnJhbWUubWF0Y2hGcmFtZU5vZGUoZnJhbWVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGZyYW1lTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIGZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSkge1xuICAgIGNvbnN0IGVxdWFsaXRpZXMgPSB0aGlzLmdldEVxdWFsaXRpZXMoKSxcbiAgICAgICAgICBlcXVhbGl0eSA9IGVxdWFsaXRpZXMuZmluZCgoZXF1YWxpdHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5Tm9kZU1hdGNoZXMgPSBlcXVhbGl0eS5tYXRjaEVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxpdHlOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5O1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnROb2RlTWF0Y2hlcyA9IGp1ZGdlbWVudC5tYXRjaEp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudHMgPSB0aGlzLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgICBzdGF0ZW1lbnQgPSBzdGF0ZW1lbnRzLmZpbmQoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBzdGF0ZW1lbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2VzID0gdGhpcy5nZXRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUgPSByZWZlcmVuY2UubWF0Y2hSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlUmVmZXJlbmNlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbnMgPSB0aGlzLmdldEFzc2VydGlvbnMoKSxcbiAgICAgICAgICBhc3NlcnRpb24gPSBhc3NlcnRpb25zLmZpbmQoKGFzc2VydGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzZXJ0aW9uTm9kZU1hdGNoZXMgPSBhc3NlcnRpb24ubWF0Y2hBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoYXNzZXJ0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBhc3NlcnRpb247XG4gIH1cblxuICBmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICBhc3N1bXB0aW9uID0gYXNzdW1wdGlvbnMuZmluZCgoYXNzdW1wdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXNzdW1wdGlvbk5vZGVNYXRjaGVzID0gYXNzdW1wdGlvbi5tYXRjaEFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKGFzc3VtcHRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCByZWZlcmVuY2VzID0gdGhpcy5nZXRSZWZlcmVuY2VzKCksXG4gICAgICAgICAgcmVmZXJlbmNlID0gcmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZTtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uID0gc3Vic3RpdHV0aW9ucy5maW5kKChzdWJzdGl0dXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzID0gc3Vic3RpdHV0aW9uLm1hdGNoU3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKTtcblxuICAgICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gdGhpcy5maW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpLFxuICAgICAgICAgIHRlcm1QcmVzZW50ID0gKHRlcm0gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHRlcm1QcmVzZW50O1xuICB9XG5cbiAgaXNGcmFtZVByZXNlbnRCeUZyYW1lTm9kZShmcmFtZU5vZGUpIHtcbiAgICBjb25zdCBmcmFtZSA9IHRoaXMuZmluZEZyYW1lQnlGcmFtZU5vZGUoZnJhbWVOb2RlKSxcbiAgICAgICAgICBmcmFtZVByZXNlbnQgPSAoZnJhbWUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGZyYW1lUHJlc2VudDtcbiAgfVxuXG4gIGlzRXF1YWxpdHlQcmVzZW50QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdHkgPSB0aGlzLmZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSksXG4gICAgICAgICAgZXF1YWxpdHlQcmVzZW50ID0gKGVxdWFsaXR5ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBlcXVhbGl0eVByZXNlbnQ7XG4gIH1cblxuICBpc0p1ZGdlbWVudFByZXNlbnRCeUp1ZGdlbWVudE5vZGUoanVkZ2VtZW50Tm9kZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudCA9IHRoaXMuZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSxcbiAgICAgICAgICBqdWRnZW1lbnRQcmVzZW50ID0gKGp1ZGdlbWVudCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50UHJlc2VudDtcbiAgfVxuXG4gIGlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5maW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpLFxuICAgICAgICAgIHN0YXRlbWVudFByZXNlbnQgPSAoc3RhdGVtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlKGFzc2VydGlvbk5vZGUpIHtcbiAgICBjb25zdCBhc3NlcnRpb24gPSB0aGlzLmZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSksXG4gICAgICAgICAgYXNzZXJ0aW9uUHJlc2VudCA9IChhc3NlcnRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc3VtcHRpb25QcmVzZW50QnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc3VtcHRpb24gPSB0aGlzLmZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSksXG4gICAgICAgICAgYXNzdW1wdGlvblByZXNlbnQgPSAoYXNzdW1wdGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvblByZXNlbnQ7XG4gIH1cblxuICBpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZSA9IHRoaXMuZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICByZWZlcmVuY2VQcmVzZW50ID0gKHJlZmVyZW5jZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVuTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZW4gPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlbk5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZW5QcmVzZW50ID0gKG1ldGF2YXJpYWJsZW4gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZW5QcmVzZW50O1xuICB9XG5cbiAgaXNTdWJzdGl0dXRpb25QcmVzZW50QnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSB0aGlzLmZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uUHJlc2VudCA9IChzdWJzdGl0dXRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvblByZXNlbnQ7XG4gIH1cblxuICBjb21taXQoZWxlbWVudCkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIGVsZW1lbnQuc2V0Q29udGV4dChjb250ZXh0KTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudGVybXMgPSB0ZXJtc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50c0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMucmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLmFzc3VtcHRpb25zID0gYXNzdW1wdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuZnJhbWVzID0gZnJhbWVzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5hc3NlcnRpb25zID0gYXNzZXJ0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBsZXQgdGVybXMgPSB0aGlzLmdldFRlcm1zKCksXG4gICAgICAgIGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKCksXG4gICAgICAgIGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgZXF1YWxpdGllcyA9IHRoaXMuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICBzdGF0ZW1lbnRzID0gdGhpcy5nZXRTdGF0ZW1lbnRzKCksXG4gICAgICAgIGFzc2VydGlvbnMgPSB0aGlzLmdldEFzc2VydGlvbnMoKSxcbiAgICAgICAgcmVmZXJlbmNlcyA9IHRoaXMuZ2V0UmVmZXJlbmNlcygpLFxuICAgICAgICBhc3N1bXB0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCk7XG5cbiAgICBjb25zdCB0ZXJtc0pTT04gPSB0ZXJtc1RvVGVybXNKU09OKHRlcm1zKSxcbiAgICAgICAgICBmcmFtZXNKU09OID0gZnJhbWVzVG9GcmFtZXNKU09OKGZyYW1lcyksXG4gICAgICAgICAganVkZ2VtZW50c0pTT04gPSBqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTihqdWRnZW1lbnRzKSxcbiAgICAgICAgICBlcXVhbGl0aWVzSlNPTiA9IGVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OKGVxdWFsaXRpZXMpLFxuICAgICAgICAgIHN0YXRlbWVudHNKU09OID0gc3RhdGVtZW50c1RvU3RhdGVtZW50c0pTT04oc3RhdGVtZW50cyksXG4gICAgICAgICAgYXNzZXJ0aW9uc0pTT04gPSBhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTihhc3NlcnRpb25zKSxcbiAgICAgICAgICByZWZlcmVuY2VzSlNPTiA9IHJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OKHJlZmVyZW5jZXMpLFxuICAgICAgICAgIGFzc3VtcHRpb25zSlNPTiA9IGFzc3VtcHRpb25zVG9Bc3N1bXB0aW9uc0pTT04oYXNzdW1wdGlvbnMpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04obWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTihzdWJzdGl0dXRpb25zKTtcblxuICAgIHRlcm1zID0gdGVybXNKU09OOyAvLy9cbiAgICBmcmFtZXMgPSBmcmFtZXNKU09OOyAvLy9cbiAgICBqdWRnZW1lbnRzID0ganVkZ2VtZW50c0pTT047IC8vL1xuICAgIGVxdWFsaXRpZXMgPSBlcXVhbGl0aWVzSlNPTjsgLy8vXG4gICAgc3RhdGVtZW50cyA9IHN0YXRlbWVudHNKU09OOyAvLy9cbiAgICBhc3NlcnRpb25zID0gYXNzZXJ0aW9uc0pTT047IC8vL1xuICAgIHJlZmVyZW5jZXMgPSByZWZlcmVuY2VzSlNPTjsgLy8vXG4gICAgYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0pTT047IC8vL1xuICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTjsgIC8vXG4gICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OOyAvLy9cblxuICAgIGNvbnN0IGpzb24gPSB7XG4gICAgICB0ZXJtcyxcbiAgICAgIGZyYW1lcyxcbiAgICAgIGp1ZGdlbWVudHMsXG4gICAgICBlcXVhbGl0aWVzLFxuICAgICAgc3RhdGVtZW50cyxcbiAgICAgIGFzc2VydGlvbnMsXG4gICAgICByZWZlcmVuY2VzLFxuICAgICAgYXNzdW1wdGlvbnMsXG4gICAgICBtZXRhdmFyaWFibGVzLFxuICAgICAgc3Vic3RpdHV0aW9uc1xuICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBudWxsLFxuICAgICAgICAgIGZyYW1lcyA9IG51bGwsXG4gICAgICAgICAgZXF1YWxpdGllcyA9IG51bGwsXG4gICAgICAgICAganVkZ2VtZW50cyA9IG51bGwsXG4gICAgICAgICAgc3RhdGVtZW50cyA9IG51bGwsXG4gICAgICAgICAgYXNzZXJ0aW9ucyA9IG51bGwsXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IG51bGwsXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBudWxsLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBudWxsLFxuICAgICAgICAgIGVtcGhlbWVyYWxDb250ZXh0ID0gbmV3IEVwaGVtZXJhbENvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywgZXF1YWxpdGllcywganVkZ2VtZW50cywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZXMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgZW1waGVtZXJhbENvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm90aGluZyhjb250ZXh0KSB7XG4gICAgY29uc3QgdGVybXMgPSBbXSxcbiAgICAgICAgICBmcmFtZXMgPSBbXSxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gW10sXG4gICAgICAgICAganVkZ2VtZW50cyA9IFtdLFxuICAgICAgICAgIHN0YXRlbWVudHMgPSBbXSxcbiAgICAgICAgICBhc3NlcnRpb25zID0gW10sXG4gICAgICAgICAgcmVmZXJlbmNlcyA9IFtdLFxuICAgICAgICAgIGFzc3VtcHRpb25zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBlbXBoZW1lcmFsQ29udGV4dCA9IG5ldyBFcGhlbWVyYWxDb250ZXh0KGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGVxdWFsaXRpZXMsIGp1ZGdlbWVudHMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGVzLCBzdWJzdGl0dXRpb25zKTtcblxuICAgIHJldHVybiBlbXBoZW1lcmFsQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkVwaGVtZXJhbENvbnRleHQiLCJDb250ZXh0IiwiY29udGV4dCIsInRlcm1zIiwiZnJhbWVzIiwiZXF1YWxpdGllcyIsImp1ZGdlbWVudHMiLCJhc3NlcnRpb25zIiwic3RhdGVtZW50cyIsInJlZmVyZW5jZXMiLCJhc3N1bXB0aW9ucyIsIm1ldGF2YXJpYWJsZXMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0VGVybXMiLCJnZXRDb250ZXh0IiwiZ2V0RnJhbWVzIiwiZ2V0RXF1YWxpdGllcyIsImdldEp1ZGdlbWVudHMiLCJnZXRTdGF0ZW1lbnRzIiwiZ2V0QXNzZXJ0aW9ucyIsImdldFJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwiYWRkVGVybXMiLCJmb3JFYWNoIiwidGVybSIsImFkZFRlcm0iLCJ0ZXJtQSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1CIiwiZmluZCIsInRlcm1BRXF1YWxUb1Rlcm1CIiwiaXNFcXVhbFRvIiwicHVzaCIsImRlYnVnIiwiYWRkRnJhbWUiLCJmcmFtZSIsImZyYW1lQSIsImZyYW1lU3RyaW5nIiwiZnJhbWVCIiwiZnJhbWVBRXF1YWxUb0ZyYW1lQiIsImFkZEVxdWFsaXR5IiwiZXF1YWxpdHkiLCJlcXVhbGl0eUEiLCJlcXVhbGl0eVN0cmluZyIsImVxdWFsaXR5QiIsImVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIiLCJhZGRKdWRnZW1lbnQiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRBIiwianVkZ2VtZW50U3RyaW5nIiwianVkZ2VtZW50QiIsImp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCIiwiYWRkU3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50QSIsInN0YXRlbWVudFN0cmluZyIsInN0YXRlbWVudEIiLCJzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIiLCJhZGRBc3NlcnRpb24iLCJhc3NlcnRpb24iLCJhc3NlcnRpb25BIiwiYXNzZXJ0aW9uU3RyaW5nIiwiYXNzZXJ0aW9uQiIsImFzc2VydGlvbkFFcXVhbFRvQXNzZXJ0aW9uQiIsImFkZFJlZmVyZW5jZSIsInJlZmVyZW5jZSIsInJlZmVyZW5jZUEiLCJyZWZlcmVuY2VTdHJpbmciLCJyZWZlcmVuY2VCIiwicmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCIiwiYWRkQXNzdW1wdGlvbiIsImFzc3VtcHRpb24iLCJhc3N1bXB0aW9uQSIsImFzc3VtcHRpb25TdHJpbmciLCJhc3N1bXB0aW9uQiIsImFzc3VtcHRpb25BRXF1YWxUb0Fzc3VtcHRpb25CIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQSIsIm1ldGF2YXJpYWJsZVN0cmluZyIsIm1ldGF2YXJpYWJsZUIiLCJtZXRhdmFyaWFibGVBRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJhZGRTdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb24iLCJzdWJzdGl0dXRpb25BIiwic3Vic3RpdHV0aW9uU3RyaW5nIiwic3Vic3RpdHV0aW9uQiIsInN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiIsImZpbmRUZXJtQnlUZXJtTm9kZSIsInRlcm1Ob2RlIiwidGVybU5vZGVNYXRjaGVzIiwibWF0Y2hUZXJtTm9kZSIsImZpbmRGcmFtZUJ5RnJhbWVOb2RlIiwiZnJhbWVOb2RlIiwiZnJhbWVOb2RlTWF0Y2hlcyIsIm1hdGNoRnJhbWVOb2RlIiwiZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGUiLCJlcXVhbGl0eU5vZGVNYXRjaGVzIiwibWF0Y2hFcXVhbGl0eU5vZGUiLCJmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hKdWRnZW1lbnROb2RlIiwiZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsImZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUiLCJyZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTWF0Y2hlUmVmZXJlbmNlTm9kZSIsIm1hdGNoUmVmZXJlbmNlTm9kZSIsImZpbmRBc3NlcnRpb25CeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc2VydGlvbk5vZGUiLCJmaW5kQXNzdW1wdGlvbkJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZSIsImFzc3VtcHRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoQXNzdW1wdGlvbk5vZGUiLCJmaW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZU1hdGNoZU1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlIiwic3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hTdWJzdGl0dXRpb25Ob2RlIiwiaXNUZXJtUHJlc2VudEJ5VGVybU5vZGUiLCJ0ZXJtUHJlc2VudCIsImlzRnJhbWVQcmVzZW50QnlGcmFtZU5vZGUiLCJmcmFtZVByZXNlbnQiLCJpc0VxdWFsaXR5UHJlc2VudEJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlQcmVzZW50IiwiaXNKdWRnZW1lbnRQcmVzZW50QnlKdWRnZW1lbnROb2RlIiwianVkZ2VtZW50UHJlc2VudCIsImlzU3RhdGVtZW50UHJlc2VudEJ5U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudFByZXNlbnQiLCJpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUiLCJhc3NlcnRpb25QcmVzZW50IiwiaXNBc3N1bXB0aW9uUHJlc2VudEJ5QXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uUHJlc2VudCIsImlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsInJlZmVyZW5jZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVuTm9kZSIsIm1ldGF2YXJpYWJsZW4iLCJtZXRhdmFyaWFibGVuUHJlc2VudCIsImlzU3Vic3RpdHV0aW9uUHJlc2VudEJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvblByZXNlbnQiLCJjb21taXQiLCJlbGVtZW50Iiwic2V0Q29udGV4dCIsImluaXRpYWxpc2UiLCJqc29uIiwidGVybXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsInN0YXRlbWVudHNGcm9tSlNPTiIsInJlZmVyZW5jZXNGcm9tSlNPTiIsImVxdWFsaXRpZXNGcm9tSlNPTiIsImFzc3VtcHRpb25zRnJvbUpTT04iLCJmcmFtZXNGcm9tSlNPTiIsImp1ZGdlbWVudHNGcm9tSlNPTiIsImFzc2VydGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInRvSlNPTiIsInRlcm1zSlNPTiIsInRlcm1zVG9UZXJtc0pTT04iLCJmcmFtZXNKU09OIiwiZnJhbWVzVG9GcmFtZXNKU09OIiwianVkZ2VtZW50c0pTT04iLCJqdWRnZW1lbnRzVG9KdWRnZW1lbnRzSlNPTiIsImVxdWFsaXRpZXNKU09OIiwiZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04iLCJzdGF0ZW1lbnRzSlNPTiIsInN0YXRlbWVudHNUb1N0YXRlbWVudHNKU09OIiwiYXNzZXJ0aW9uc0pTT04iLCJhc3NlcnRpb25zVG9Bc3NlcnRpb25zSlNPTiIsInJlZmVyZW5jZXNKU09OIiwicmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04iLCJhc3N1bXB0aW9uc0pTT04iLCJhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OIiwibWV0YXZhcmlhYmxlc0pTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJmcm9tSlNPTiIsImVtcGhlbWVyYWxDb250ZXh0IiwiZnJvbU5vdGhpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlCQTs7O2VBQXFCQTs7O2dFQXZCRDtzQkFxQjZCOzs7Ozs7QUFFbEMsTUFBTUEseUJBQXlCQyxnQkFBTztJQUNuRCxZQUFZQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVB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