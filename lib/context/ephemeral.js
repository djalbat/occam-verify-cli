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
const _necessary = require("necessary");
const _context = /*#__PURE__*/ _interop_require_default(require("../context"));
const _synoptic = require("../utilities/synoptic");
const _json = require("../utilities/json");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { push } = _necessary.arrayUtilities;
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
    getTerms(terms = []) {
        const context = this.getContext();
        push(terms, this.terms);
        context.getTerms(terms);
        (0, _synoptic.compressTerms)(context);
        return terms;
    }
    getFrames(frames = []) {
        const context = this.getContext();
        push(frames, this.frames);
        context.getFrames(frames);
        (0, _synoptic.compressFrames)(context);
        return frames;
    }
    getEqualities(equalities = []) {
        const context = this.getContext();
        push(equalities, this.equalities);
        context.getEqualities(equalities);
        (0, _synoptic.compressEqualities)(context);
        return equalities;
    }
    getJudgements(judgements = []) {
        const context = this.getContext();
        push(judgements, this.judgements);
        context.getJudgements(judgements);
        (0, _synoptic.compressJudgements)(context);
        return judgements;
    }
    getStatements(statements = []) {
        const context = this.getContext();
        push(statements, this.statements);
        context.getStatements(statements);
        (0, _synoptic.compressStatements)(context);
        return statements;
    }
    getAssertions(assertions = []) {
        const context = this.getContext();
        push(assertions, this.assertions);
        context.getAssertions(assertions);
        (0, _synoptic.compressAssertions)(context);
        return assertions;
    }
    getReferences(references = []) {
        const context = this.getContext();
        push(references, this.references);
        context.getReferences(references);
        (0, _synoptic.compressReferences)(context);
        return references;
    }
    getAssumptions(assumptions = []) {
        const context = this.getContext();
        push(assumptions, this.assumptions);
        context.getAssumptions(assumptions);
        (0, _synoptic.compressAssumptions)(context);
        return assumptions;
    }
    getMetavariables(metavariables = []) {
        const context = this.getContext();
        push(metavariables, this.metavariables);
        context.getMetavariables(metavariables);
        (0, _synoptic.compressMetavariables)(context);
        return metavariables;
    }
    getSubstitutions(substitutions = []) {
        const context = this.getContext();
        push(substitutions, this.substitutions);
        context.getSubstitutions(substitutions);
        (0, _synoptic.compressSubstitutions)(context);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2VwaGVtZXJhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0XCI7XG5cbmltcG9ydCB7IGNvbXByZXNzVGVybXMsXG4gICAgICAgICBjb21wcmVzc0ZyYW1lcyxcbiAgICAgICAgIGNvbXByZXNzRXF1YWxpdGllcyxcbiAgICAgICAgIGNvbXByZXNzSnVkZ2VtZW50cyxcbiAgICAgICAgIGNvbXByZXNzQXNzZXJ0aW9ucyxcbiAgICAgICAgIGNvbXByZXNzU3RhdGVtZW50cyxcbiAgICAgICAgIGNvbXByZXNzUmVmZXJlbmNlcyxcbiAgICAgICAgIGNvbXByZXNzQXNzdW1wdGlvbnMsXG4gICAgICAgICBjb21wcmVzc01ldGF2YXJpYWJsZXMsXG4gICAgICAgICBjb21wcmVzc1N1YnN0aXR1dGlvbnMsfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3N5bm9wdGljXCI7XG5pbXBvcnQgeyB0ZXJtc0Zyb21KU09OLFxuICAgICAgICAgZnJhbWVzRnJvbUpTT04sXG4gICAgICAgICB0ZXJtc1RvVGVybXNKU09OLFxuICAgICAgICAgZnJhbWVzVG9GcmFtZXNKU09OLFxuICAgICAgICAganVkZ2VtZW50c0Zyb21KU09OLFxuICAgICAgICAgZXF1YWxpdGllc0Zyb21KU09OLFxuICAgICAgICAgc3RhdGVtZW50c0Zyb21KU09OLFxuICAgICAgICAgYXNzZXJ0aW9uc0Zyb21KU09OLFxuICAgICAgICAgcmVmZXJlbmNlc0Zyb21KU09OLFxuICAgICAgICAgYXNzdW1wdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIG1ldGF2YXJpYWJsZXNGcm9tSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OLFxuICAgICAgICAgZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04sXG4gICAgICAgICBzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTixcbiAgICAgICAgIGFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OLFxuICAgICAgICAgcmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04sXG4gICAgICAgICBhc3N1bXB0aW9uc1RvQXNzdW1wdGlvbnNKU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFcGhlbWVyYWxDb250ZXh0IGV4dGVuZHMgQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHRlcm1zLCBmcmFtZXMsIGVxdWFsaXRpZXMsIGp1ZGdlbWVudHMsIGFzc2VydGlvbnMsIHN0YXRlbWVudHMsIHJlZmVyZW5jZXMsIGFzc3VtcHRpb25zLCBtZXRhdmFyaWFibGVzLCBzdWJzdGl0dXRpb25zKSB7XG4gICAgc3VwZXIoY29udGV4dCk7XG5cbiAgICB0aGlzLnRlcm1zID0gdGVybXM7XG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXM7XG4gICAgdGhpcy5lcXVhbGl0aWVzID0gZXF1YWxpdGllcztcbiAgICB0aGlzLmp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzO1xuICAgIHRoaXMuYXNzZXJ0aW9ucyA9IGFzc2VydGlvbnM7XG4gICAgdGhpcy5zdGF0ZW1lbnRzID0gc3RhdGVtZW50cztcbiAgICB0aGlzLnJlZmVyZW5jZXMgPSByZWZlcmVuY2VzO1xuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9ucztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRUZXJtcyh0ZXJtcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcHVzaCh0ZXJtcywgdGhpcy50ZXJtcyk7XG5cbiAgICBjb250ZXh0LmdldFRlcm1zKHRlcm1zKTtcblxuICAgIGNvbXByZXNzVGVybXMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gdGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoZnJhbWVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBwdXNoKGZyYW1lcywgdGhpcy5mcmFtZXMpO1xuXG4gICAgY29udGV4dC5nZXRGcmFtZXMoZnJhbWVzKTtcblxuICAgIGNvbXByZXNzRnJhbWVzKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZyYW1lcztcbiAgfVxuXG4gIGdldEVxdWFsaXRpZXMoZXF1YWxpdGllcyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcHVzaChlcXVhbGl0aWVzLCB0aGlzLmVxdWFsaXRpZXMpO1xuXG4gICAgY29udGV4dC5nZXRFcXVhbGl0aWVzKGVxdWFsaXRpZXMpO1xuXG4gICAgY29tcHJlc3NFcXVhbGl0aWVzKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXRpZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKGp1ZGdlbWVudHMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHB1c2goanVkZ2VtZW50cywgdGhpcy5qdWRnZW1lbnRzKTtcblxuICAgIGNvbnRleHQuZ2V0SnVkZ2VtZW50cyhqdWRnZW1lbnRzKTtcblxuICAgIGNvbXByZXNzSnVkZ2VtZW50cyhjb250ZXh0KTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cyhzdGF0ZW1lbnRzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBwdXNoKHN0YXRlbWVudHMsIHRoaXMuc3RhdGVtZW50cyk7XG5cbiAgICBjb250ZXh0LmdldFN0YXRlbWVudHMoc3RhdGVtZW50cyk7XG5cbiAgICBjb21wcmVzc1N0YXRlbWVudHMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoYXNzZXJ0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcHVzaChhc3NlcnRpb25zLCB0aGlzLmFzc2VydGlvbnMpO1xuXG4gICAgY29udGV4dC5nZXRBc3NlcnRpb25zKGFzc2VydGlvbnMpO1xuXG4gICAgY29tcHJlc3NBc3NlcnRpb25zKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRSZWZlcmVuY2VzKHJlZmVyZW5jZXMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHB1c2gocmVmZXJlbmNlcywgdGhpcy5yZWZlcmVuY2VzKTtcblxuICAgIGNvbnRleHQuZ2V0UmVmZXJlbmNlcyhyZWZlcmVuY2VzKTtcblxuICAgIGNvbXByZXNzUmVmZXJlbmNlcyhjb250ZXh0KTtcblxuICAgIHJldHVybiByZWZlcmVuY2VzO1xuICB9XG5cbiAgZ2V0QXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMgPSBbXSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIHB1c2goYXNzdW1wdGlvbnMsIHRoaXMuYXNzdW1wdGlvbnMpO1xuXG4gICAgY29udGV4dC5nZXRBc3N1bXB0aW9ucyhhc3N1bXB0aW9ucyk7XG5cbiAgICBjb21wcmVzc0Fzc3VtcHRpb25zKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhtZXRhdmFyaWFibGVzID0gW10pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBwdXNoKG1ldGF2YXJpYWJsZXMsIHRoaXMubWV0YXZhcmlhYmxlcyk7XG5cbiAgICBjb250ZXh0LmdldE1ldGF2YXJpYWJsZXMobWV0YXZhcmlhYmxlcyk7XG5cbiAgICBjb21wcmVzc01ldGF2YXJpYWJsZXMoY29udGV4dCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyA9IFtdKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgcHVzaChzdWJzdGl0dXRpb25zLCB0aGlzLnN1YnN0aXR1dGlvbnMpO1xuXG4gICAgY29udGV4dC5nZXRTdWJzdGl0dXRpb25zKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgY29tcHJlc3NTdWJzdGl0dXRpb25zKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRUZXJtKHRlcm0pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdGVybUEgPSB0ZXJtLCAvLy9cbiAgICAgICAgICB0ZXJtU3RyaW5nID0gdGVybS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7dGVybVN0cmluZ30nIHRlcm0gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCB0ZXJtcyA9IHRoaXMuZ2V0VGVybXMoKSxcbiAgICAgICAgICB0ZXJtQiA9IHRlcm1zLmZpbmQoKHRlcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRlcm1CID0gdGVybSwgLy8vXG4gICAgICAgICAgICAgICAgICB0ZXJtQUNvbXBhcmVzVG9UZXJtQiA9IHRlcm1BLmNvbXBhcmVUZXJtKHRlcm1CKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKHRlcm1BQ29tcGFyZXNUb1Rlcm1CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAodGVybUIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZXJtcy5wdXNoKHRlcm0pO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHt0ZXJtU3RyaW5nfScgdGVybSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRGcmFtZShmcmFtZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmcmFtZUEgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgZnJhbWVTdHJpbmcgPSBmcmFtZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7ZnJhbWVTdHJpbmd9JyBmcmFtZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKCksXG4gICAgICAgICAgZnJhbWVCID0gZnJhbWVzLmZpbmQoKGZyYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmcmFtZUIgPSBmcmFtZSwgLy8vXG4gICAgICAgICAgICAgICAgICBmcmFtZUFFcXVhbFRvRnJhbWVCID0gZnJhbWVBLmlzRXF1YWxUbyhmcmFtZUIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAoZnJhbWVBRXF1YWxUb0ZyYW1lQikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGZyYW1lQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2ZyYW1lU3RyaW5nfScgZnJhbWUgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnJhbWVzLnB1c2goZnJhbWUpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtmcmFtZVN0cmluZ30nIGZyYW1lIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEVxdWFsaXR5KGVxdWFsaXR5KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWFsaXR5QSA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICBlcXVhbGl0eVN0cmluZyA9IGVxdWFsaXR5LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgZXF1YWxpdGllcyA9IHRoaXMuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICAgIGVxdWFsaXR5QiA9IGVxdWFsaXRpZXMuZmluZCgoZXF1YWxpdHkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVxdWFsaXR5QiA9IGVxdWFsaXR5LCAvLy9cbiAgICAgICAgICAgICAgICAgIGVxdWFsaXR5QUVxdWFsVG9FcXVhbGl0eUIgPSBlcXVhbGl0eUEuaXNFcXVhbFRvKGVxdWFsaXR5Qik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoZXF1YWxpdHlCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7ZXF1YWxpdHlTdHJpbmd9JyBlcXVhbGl0eSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5lcXVhbGl0aWVzLnB1c2goZXF1YWxpdHkpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtlcXVhbGl0eVN0cmluZ30nIGVxdWFsaXR5IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudChqdWRnZW1lbnQpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAganVkZ2VtZW50QSA9IGp1ZGdlbWVudCwgLy8vXG4gICAgICAgICAganVkZ2VtZW50U3RyaW5nID0ganVkZ2VtZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50QiA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRCID0ganVkZ2VtZW50LCAvLy9cbiAgICAgICAgICAgICAgICAgIGp1ZGdlbWVudEFFcXVhbFRvRXF1YWxpdHlCID0ganVkZ2VtZW50QS5pc0VxdWFsVG8oanVkZ2VtZW50Qik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRBRXF1YWxUb0VxdWFsaXR5Qikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGp1ZGdlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtqdWRnZW1lbnRTdHJpbmd9JyBqdWRnZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuanVkZ2VtZW50cy5wdXNoKGp1ZGdlbWVudCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2p1ZGdlbWVudFN0cmluZ30nIGp1ZGdlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnQoc3RhdGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudEEgPSBzdGF0ZW1lbnQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50cyA9IHRoaXMuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgIHN0YXRlbWVudEIgPSBzdGF0ZW1lbnRzLmZpbmQoKHN0YXRlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGVtZW50QiA9IHN0YXRlbWVudCwgLy8vXG4gICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRBRXF1YWxUb1N0YXRlbWVudEIgPSBzdGF0ZW1lbnRBLmlzRXF1YWxUbyhzdGF0ZW1lbnRCKTtcbiAgICAgIFxuICAgICAgICAgICAgaWYgKHN0YXRlbWVudEFFcXVhbFRvU3RhdGVtZW50Qikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKHN0YXRlbWVudEIgIT09IG51bGwpIHtcbiAgICAgIGNvbnRleHQudHJhY2UoYFRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RhdGVtZW50cy5wdXNoKHN0YXRlbWVudCk7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuYCk7XG4gIH1cblxuICBhZGRBc3NlcnRpb24oYXNzZXJ0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc2VydGlvbkEgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgIGFzc2VydGlvblN0cmluZyA9IGFzc2VydGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYEFkZGluZyB0aGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzZXJ0aW9ucyA9IHRoaXMuZ2V0QXNzdW1wdGlvbnMoKSxcbiAgICAgICAgICBhc3NlcnRpb25CID0gYXNzZXJ0aW9ucy5maW5kKChhc3NlcnRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2VydGlvbkIgPSBhc3NlcnRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgYXNzZXJ0aW9uQUVxdWFsVG9Bc3NlcnRpb25CID0gYXNzZXJ0aW9uQS5pc0VxdWFsVG8oYXNzZXJ0aW9uQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChhc3NlcnRpb25CICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7YXNzZXJ0aW9uU3RyaW5nfScgYXNzZXJ0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc2VydGlvbnMucHVzaChhc3NlcnRpb24pO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHthc3NlcnRpb25TdHJpbmd9JyBhc3NlcnRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkUmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VBID0gcmVmZXJlbmNlLCAvLy9cbiAgICAgICAgICByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB0byB0aGUgZXBoZW1lcmFsIGNvbnRleHQuLi5gKTtcblxuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB0aGlzLmdldFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICByZWZlcmVuY2VCID0gcmVmZXJlbmNlcy5maW5kKChyZWZlcmVuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZUIgPSByZWZlcmVuY2UsIC8vL1xuICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlQUVxdWFsVG9SZWZlcmVuY2VCID0gcmVmZXJlbmNlQS5pc0VxdWFsVG8ocmVmZXJlbmNlQik7XG4gICAgICBcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VBRXF1YWxUb1JlZmVyZW5jZUIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChyZWZlcmVuY2VCICE9PSBudWxsKSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGBUaGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlZmVyZW5jZXMucHVzaChyZWZlcmVuY2UpO1xuICAgIH1cblxuICAgIGNvbnRleHQuZGVidWcoYC4uLmFkZGVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2UgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICB9XG5cbiAgYWRkQXNzdW1wdGlvbihhc3N1bXB0aW9uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGFzc3VtcHRpb25BID0gYXNzdW1wdGlvbiwgLy8vXG4gICAgICAgICAgYXNzdW1wdGlvblN0cmluZyA9IGFzc3VtcHRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBBZGRpbmcgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC4uLmApO1xuXG4gICAgY29uc3QgYXNzdW1wdGlvbnMgPSB0aGlzLmdldEFzc3VtcHRpb25zKCksXG4gICAgICAgICAgYXNzdW1wdGlvbkIgPSBhc3N1bXB0aW9ucy5maW5kKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uQiA9IGFzc3VtcHRpb24sIC8vL1xuICAgICAgICAgICAgICAgICAgYXNzdW1wdGlvbkFFcXVhbFRvQXNzdW1wdGlvbkIgPSBhc3N1bXB0aW9uQS5pc0VxdWFsVG8oYXNzdW1wdGlvbkIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAoYXNzdW1wdGlvbkFFcXVhbFRvQXNzdW1wdGlvbkIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIGlmIChhc3N1bXB0aW9uQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0LmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFzc3VtcHRpb25zLnB1c2goYXNzdW1wdGlvbik7XG4gICAgfVxuXG4gICAgY29udGV4dC5kZWJ1ZyhgLi4uYWRkZWQgdGhlICcke2Fzc3VtcHRpb25TdHJpbmd9JyBhc3N1bXB0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlQSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlQiA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVCID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZUFFcXVhbFRvU3Vic3RpdHV0aW9uQiA9IG1ldGF2YXJpYWJsZUEuaXNFcXVhbFRvKG1ldGF2YXJpYWJsZUIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlQUVxdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAobWV0YXZhcmlhYmxlQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7bWV0YXZhcmlhYmxlU3RyaW5nfScgbWV0YXZhcmlhYmxlIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pIHtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQSA9IHN1YnN0aXR1dGlvbiwgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9uU3RyaW5nID0gc3Vic3RpdHV0aW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgQWRkaW5nIHRoZSAnJHtzdWJzdGl0dXRpb25TdHJpbmd9JyBzdWJzdGl0dXRpb24gdG8gdGhlIGVwaGVtZXJhbCBjb250ZXh0Li4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gdGhpcy5nZXRTdWJzdGl0dXRpb25zKCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbnMuZmluZCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25CID0gc3Vic3RpdHV0aW9uLCAvLy9cbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbkFFcXVhbFRvU3Vic3RpdHV0aW9uQiA9IHN1YnN0aXR1dGlvbkEuaXNFcXVhbFRvKHN1YnN0aXR1dGlvbkIpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uQUVxdWFsVG9TdWJzdGl0dXRpb25CKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICBpZiAoc3Vic3RpdHV0aW9uQiAhPT0gbnVsbCkge1xuICAgICAgY29udGV4dC50cmFjZShgVGhlICcke3N1YnN0aXR1dGlvblN0cmluZ30nIHN1YnN0aXR1dGlvbiBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzdGl0dXRpb25zLnB1c2goc3Vic3RpdHV0aW9uKTtcbiAgICB9XG5cbiAgICBjb250ZXh0LmRlYnVnKGAuLi5hZGRlZCB0aGUgJyR7c3Vic3RpdHV0aW9uU3RyaW5nfScgc3Vic3RpdHV0aW9uIHRvIHRoZSBlcGhlbWVyYWwgY29udGV4dC5gKTtcbiAgfVxuXG4gIGFkZFRlcm1zKHRlcm1zKSB7XG4gICAgdGVybXMuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgdGhpcy5hZGRUZXJtKHRlcm0pO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkRnJhbWVzKGZyYW1lcykge1xuICAgIGZyYW1lcy5mb3JFYWNoKChmcmFtZSkgPT4ge1xuICAgICAgdGhpcy5hZGRGcmFtZShmcmFtZSk7XG4gICAgfSk7XG4gIH1cblxuICBhZGRFcXVhbGl0aWVzKGVxdWFsaXRpZXMpIHtcbiAgICBlcXVhbGl0aWVzLmZvckVhY2goKGVxdWFsaXR5KSA9PiB7XG4gICAgICB0aGlzLmFkZEVxdWFsaXR5KGVxdWFsaXR5KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZEp1ZGdlbWVudHMoanVkZ2VtZW50cykge1xuICAgIGp1ZGdlbWVudHMuZm9yRWFjaCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICB0aGlzLmFkZEp1ZGdlbWVudChqdWRnZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQXNzZXJ0aW9ucyhhc3NlcnRpb25zKSB7XG4gICAgYXNzZXJ0aW9ucy5mb3JFYWNoKChhc3NlcnRpb24pID0+IHtcbiAgICAgIHRoaXMuYWRkQXNzZXJ0aW9uKGFzc2VydGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRTdGF0ZW1lbnRzKHN0YXRlbWVudHMpIHtcbiAgICBzdGF0ZW1lbnRzLmZvckVhY2goKHN0YXRlbWVudCkgPT4ge1xuICAgICAgdGhpcy5hZGRTdGF0ZW1lbnQoc3RhdGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFJlZmVyZW5jZXMocmVmZXJlbmNlcykge1xuICAgIHJlZmVyZW5jZXMuZm9yRWFjaCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICB0aGlzLmFkZFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkQXNzdW1wdGlvbnMoYXNzdW1wdGlvbnMpIHtcbiAgICBhc3N1bXB0aW9ucy5mb3JFYWNoKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICB0aGlzLmFkZEFzc3VtcHRpb24oYXNzdW1wdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZXMpIHtcbiAgICBtZXRhdmFyaWFibGVzLmZvckVhY2goKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgdGhpcy5hZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucykge1xuICAgIHN1YnN0aXR1dGlvbnMuZm9yRWFjaCgoc3Vic3RpdHV0aW9uKSA9PiB7XG4gICAgICB0aGlzLmFkZFN1YnN0aXR1dGlvbihzdWJzdGl0dXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGVOb2RlLmdldFZhcmlhYmxlSWRlbnRpZmllcigpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGUgPSB0aGlzLmZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IGRlY2xhcmVkVmFyaWFibGU7ICAvLy9cblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm1zID0gdGhpcy5nZXRUZXJtcygpLFxuICAgICAgICAgIHRlcm0gPSB0ZXJtcy5maW5kKCh0ZXJtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXJtTm9kZU1hdGNoZXMgPSB0ZXJtLm1hdGNoVGVybU5vZGUodGVybU5vZGUpO1xuICAgICAgXG4gICAgICAgICAgICBpZiAodGVybU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGVybTtcbiAgfVxuXG4gIGZpbmRGcmFtZUJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lcyA9IHRoaXMuZ2V0RnJhbWVzKCksXG4gICAgICAgICAgZnJhbWUgPSBmcmFtZXMuZmluZCgoZnJhbWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZyYW1lTm9kZU1hdGNoZXMgPSBmcmFtZS5tYXRjaEZyYW1lTm9kZShmcmFtZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoZnJhbWVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGZyYW1lO1xuICB9XG5cbiAgZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSB7XG4gICAgY29uc3QgZXF1YWxpdGllcyA9IHRoaXMuZ2V0RXF1YWxpdGllcygpLFxuICAgICAgICAgIGVxdWFsaXR5ID0gZXF1YWxpdGllcy5maW5kKChlcXVhbGl0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXF1YWxpdHlOb2RlTWF0Y2hlcyA9IGVxdWFsaXR5Lm1hdGNoRXF1YWxpdHlOb2RlKGVxdWFsaXR5Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChlcXVhbGl0eU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZXF1YWxpdHk7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE5vZGVNYXRjaGVzID0ganVkZ2VtZW50Lm1hdGNoSnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50cyA9IHRoaXMuZ2V0U3RhdGVtZW50cygpLFxuICAgICAgICAgIHN0YXRlbWVudCA9IHN0YXRlbWVudHMuZmluZCgoc3RhdGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHN0YXRlbWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZW1lbnROb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudDtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB0aGlzLmdldFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlUmVmZXJlbmNlTm9kZSA9IHJlZmVyZW5jZS5tYXRjaFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VNYXRjaGVSZWZlcmVuY2VOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzZXJ0aW9ucyA9IHRoaXMuZ2V0QXNzZXJ0aW9ucygpLFxuICAgICAgICAgIGFzc2VydGlvbiA9IGFzc2VydGlvbnMuZmluZCgoYXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc3NlcnRpb25Ob2RlTWF0Y2hlcyA9IGFzc2VydGlvbi5tYXRjaEFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChhc3NlcnRpb25Ob2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRBc3N1bXB0aW9uQnlBc3N1bXB0aW9uTm9kZShhc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc3VtcHRpb25zID0gdGhpcy5nZXRBc3N1bXB0aW9ucygpLFxuICAgICAgICAgIGFzc3VtcHRpb24gPSBhc3N1bXB0aW9ucy5maW5kKChhc3N1bXB0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhc3N1bXB0aW9uTm9kZU1hdGNoZXMgPSBhc3N1bXB0aW9uLm1hdGNoQXNzdW1wdGlvbk5vZGUoYXNzdW1wdGlvbk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoYXNzdW1wdGlvbk5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXNzdW1wdGlvbjtcbiAgfVxuXG4gIGZpbmRSZWZlcmVuY2VCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHJlZmVyZW5jZXMgPSB0aGlzLmdldFJlZmVyZW5jZXMoKSxcbiAgICAgICAgICByZWZlcmVuY2UgPSByZWZlcmVuY2VzLmZpbmQoKHJlZmVyZW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlTWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb24gPSBzdWJzdGl0dXRpb25zLmZpbmQoKHN1YnN0aXR1dGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMgPSBzdWJzdGl0dXRpb24ubWF0Y2hTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpO1xuXG4gICAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBpc1Rlcm1QcmVzZW50QnlUZXJtTm9kZSh0ZXJtTm9kZSkge1xuICAgIGNvbnN0IHRlcm0gPSB0aGlzLmZpbmRUZXJtQnlUZXJtTm9kZSh0ZXJtTm9kZSksXG4gICAgICAgICAgdGVybVByZXNlbnQgPSAodGVybSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdGVybVByZXNlbnQ7XG4gIH1cblxuICBpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlKGZyYW1lTm9kZSkge1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5maW5kRnJhbWVCeUZyYW1lTm9kZShmcmFtZU5vZGUpLFxuICAgICAgICAgIGZyYW1lUHJlc2VudCA9IChmcmFtZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZnJhbWVQcmVzZW50O1xuICB9XG5cbiAgaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZShlcXVhbGl0eU5vZGUpIHtcbiAgICBjb25zdCBlcXVhbGl0eSA9IHRoaXMuZmluZEVxdWFsaXR5QnlFcXVhbGl0eU5vZGUoZXF1YWxpdHlOb2RlKSxcbiAgICAgICAgICBlcXVhbGl0eVByZXNlbnQgPSAoZXF1YWxpdHkgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGVxdWFsaXR5UHJlc2VudDtcbiAgfVxuXG4gIGlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZShqdWRnZW1lbnROb2RlKSB7XG4gICAgY29uc3QganVkZ2VtZW50ID0gdGhpcy5maW5kSnVkZ2VtZW50QnlKdWRnZW1lbnROb2RlKGp1ZGdlbWVudE5vZGUpLFxuICAgICAgICAgIGp1ZGdlbWVudFByZXNlbnQgPSAoanVkZ2VtZW50ICE9PSBudWxsKTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRQcmVzZW50O1xuICB9XG5cbiAgaXNTdGF0ZW1lbnRQcmVzZW50QnlTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSksXG4gICAgICAgICAgc3RhdGVtZW50UHJlc2VudCA9IChzdGF0ZW1lbnQgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFByZXNlbnQ7XG4gIH1cblxuICBpc0Fzc2VydGlvblByZXNlbnRCeUFzc2VydGlvbk5vZGUoYXNzZXJ0aW9uTm9kZSkge1xuICAgIGNvbnN0IGFzc2VydGlvbiA9IHRoaXMuZmluZEFzc2VydGlvbkJ5QXNzZXJ0aW9uTm9kZShhc3NlcnRpb25Ob2RlKSxcbiAgICAgICAgICBhc3NlcnRpb25QcmVzZW50ID0gKGFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gYXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzQXNzdW1wdGlvblByZXNlbnRCeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgYXNzdW1wdGlvbiA9IHRoaXMuZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlKGFzc3VtcHRpb25Ob2RlKSxcbiAgICAgICAgICBhc3N1bXB0aW9uUHJlc2VudCA9IChhc3N1bXB0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiBhc3N1bXB0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzUmVmZXJlbmNlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlID0gdGhpcy5maW5kUmVmZXJlbmNlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHJlZmVyZW5jZVByZXNlbnQgPSAocmVmZXJlbmNlICE9PSBudWxsKTtcblxuICAgIHJldHVybiByZWZlcmVuY2VQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZW5Ob2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlbiA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVuTm9kZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlblByZXNlbnQgPSAobWV0YXZhcmlhYmxlbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlblByZXNlbnQ7XG4gIH1cblxuICBpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUoc3Vic3RpdHV0aW9uTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IHRoaXMuZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25QcmVzZW50ID0gKHN1YnN0aXR1dGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGNvbW1pdChlbGVtZW50KSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgZWxlbWVudC5zZXRDb250ZXh0KGNvbnRleHQpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy50ZXJtcyA9IHRlcm1zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICB0aGlzLnN0YXRlbWVudHMgPSBzdGF0ZW1lbnRzRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gcmVmZXJlbmNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5lcXVhbGl0aWVzID0gZXF1YWxpdGllc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICAgIHRoaXMuYXNzdW1wdGlvbnMgPSBhc3N1bXB0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgdGhpcy5mcmFtZXMgPSBmcmFtZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgIHRoaXMuanVkZ2VtZW50cyA9IGp1ZGdlbWVudHNGcm9tSlNPTihqc29uLCBjb250ZXh0KTtcbiAgICB0aGlzLmFzc2VydGlvbnMgPSBhc3NlcnRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCk7XG4gICAgdGhpcy5zdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGxldCB0ZXJtcyA9IHRoaXMuZ2V0VGVybXMoKSxcbiAgICAgICAgZnJhbWVzID0gdGhpcy5nZXRGcmFtZXMoKSxcbiAgICAgICAganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICBlcXVhbGl0aWVzID0gdGhpcy5nZXRFcXVhbGl0aWVzKCksXG4gICAgICAgIHN0YXRlbWVudHMgPSB0aGlzLmdldFN0YXRlbWVudHMoKSxcbiAgICAgICAgYXNzZXJ0aW9ucyA9IHRoaXMuZ2V0QXNzZXJ0aW9ucygpLFxuICAgICAgICByZWZlcmVuY2VzID0gdGhpcy5nZXRSZWZlcmVuY2VzKCksXG4gICAgICAgIGFzc3VtcHRpb25zID0gdGhpcy5nZXRBc3N1bXB0aW9ucygpLFxuICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgIHN1YnN0aXR1dGlvbnMgPSB0aGlzLmdldFN1YnN0aXR1dGlvbnMoKTtcblxuICAgIGNvbnN0IHRlcm1zSlNPTiA9IHRlcm1zVG9UZXJtc0pTT04odGVybXMpLFxuICAgICAgICAgIGZyYW1lc0pTT04gPSBmcmFtZXNUb0ZyYW1lc0pTT04oZnJhbWVzKSxcbiAgICAgICAgICBqdWRnZW1lbnRzSlNPTiA9IGp1ZGdlbWVudHNUb0p1ZGdlbWVudHNKU09OKGp1ZGdlbWVudHMpLFxuICAgICAgICAgIGVxdWFsaXRpZXNKU09OID0gZXF1YWxpdGllc1RvRXF1YWxpdGllc0pTT04oZXF1YWxpdGllcyksXG4gICAgICAgICAgc3RhdGVtZW50c0pTT04gPSBzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTihzdGF0ZW1lbnRzKSxcbiAgICAgICAgICBhc3NlcnRpb25zSlNPTiA9IGFzc2VydGlvbnNUb0Fzc2VydGlvbnNKU09OKGFzc2VydGlvbnMpLFxuICAgICAgICAgIHJlZmVyZW5jZXNKU09OID0gcmVmZXJlbmNlc1RvUmVmZXJlbmNlc0pTT04ocmVmZXJlbmNlcyksXG4gICAgICAgICAgYXNzdW1wdGlvbnNKU09OID0gYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTihhc3N1bXB0aW9ucyksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTihtZXRhdmFyaWFibGVzKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgdGVybXMgPSB0ZXJtc0pTT047IC8vL1xuICAgIGZyYW1lcyA9IGZyYW1lc0pTT047IC8vL1xuICAgIGp1ZGdlbWVudHMgPSBqdWRnZW1lbnRzSlNPTjsgLy8vXG4gICAgZXF1YWxpdGllcyA9IGVxdWFsaXRpZXNKU09OOyAvLy9cbiAgICBzdGF0ZW1lbnRzID0gc3RhdGVtZW50c0pTT047IC8vL1xuICAgIGFzc2VydGlvbnMgPSBhc3NlcnRpb25zSlNPTjsgLy8vXG4gICAgcmVmZXJlbmNlcyA9IHJlZmVyZW5jZXNKU09OOyAvLy9cbiAgICBhc3N1bXB0aW9ucyA9IGFzc3VtcHRpb25zSlNPTjsgLy8vXG4gICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OOyAgLy9cbiAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT047IC8vL1xuXG4gICAgY29uc3QganNvbiA9IHtcbiAgICAgIHRlcm1zLFxuICAgICAgZnJhbWVzLFxuICAgICAganVkZ2VtZW50cyxcbiAgICAgIGVxdWFsaXRpZXMsXG4gICAgICBzdGF0ZW1lbnRzLFxuICAgICAgYXNzZXJ0aW9ucyxcbiAgICAgIHJlZmVyZW5jZXMsXG4gICAgICBhc3N1bXB0aW9ucyxcbiAgICAgIG1ldGF2YXJpYWJsZXMsXG4gICAgICBzdWJzdGl0dXRpb25zXG4gICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IG51bGwsXG4gICAgICAgICAgZnJhbWVzID0gbnVsbCxcbiAgICAgICAgICBlcXVhbGl0aWVzID0gbnVsbCxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICBzdGF0ZW1lbnRzID0gbnVsbCxcbiAgICAgICAgICBhc3NlcnRpb25zID0gbnVsbCxcbiAgICAgICAgICByZWZlcmVuY2VzID0gbnVsbCxcbiAgICAgICAgICBhc3N1bXB0aW9ucyA9IG51bGwsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IG51bGwsXG4gICAgICAgICAgZW1waGVtZXJhbENvbnRleHQgPSBuZXcgRXBoZW1lcmFsQ29udGV4dChjb250ZXh0LCB0ZXJtcywgZnJhbWVzLCBlcXVhbGl0aWVzLCBqdWRnZW1lbnRzLCBhc3NlcnRpb25zLCBzdGF0ZW1lbnRzLCByZWZlcmVuY2VzLCBhc3N1bXB0aW9ucywgbWV0YXZhcmlhYmxlcywgc3Vic3RpdHV0aW9ucyk7XG5cbiAgICBlbXBoZW1lcmFsQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuXG4gICAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob3RoaW5nKGNvbnRleHQpIHtcbiAgICBjb25zdCB0ZXJtcyA9IFtdLFxuICAgICAgICAgIGZyYW1lcyA9IFtdLFxuICAgICAgICAgIGVxdWFsaXRpZXMgPSBbXSxcbiAgICAgICAgICBqdWRnZW1lbnRzID0gW10sXG4gICAgICAgICAgc3RhdGVtZW50cyA9IFtdLFxuICAgICAgICAgIGFzc2VydGlvbnMgPSBbXSxcbiAgICAgICAgICByZWZlcmVuY2VzID0gW10sXG4gICAgICAgICAgYXNzdW1wdGlvbnMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgIGVtcGhlbWVyYWxDb250ZXh0ID0gbmV3IEVwaGVtZXJhbENvbnRleHQoY29udGV4dCwgdGVybXMsIGZyYW1lcywgZXF1YWxpdGllcywganVkZ2VtZW50cywgYXNzZXJ0aW9ucywgc3RhdGVtZW50cywgcmVmZXJlbmNlcywgYXNzdW1wdGlvbnMsIG1ldGF2YXJpYWJsZXMsIHN1YnN0aXR1dGlvbnMpO1xuXG4gICAgcmV0dXJuIGVtcGhlbWVyYWxDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRXBoZW1lcmFsQ29udGV4dCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsIkNvbnRleHQiLCJjb250ZXh0IiwidGVybXMiLCJmcmFtZXMiLCJlcXVhbGl0aWVzIiwianVkZ2VtZW50cyIsImFzc2VydGlvbnMiLCJzdGF0ZW1lbnRzIiwicmVmZXJlbmNlcyIsImFzc3VtcHRpb25zIiwibWV0YXZhcmlhYmxlcyIsInN1YnN0aXR1dGlvbnMiLCJnZXRUZXJtcyIsImdldENvbnRleHQiLCJjb21wcmVzc1Rlcm1zIiwiZ2V0RnJhbWVzIiwiY29tcHJlc3NGcmFtZXMiLCJnZXRFcXVhbGl0aWVzIiwiY29tcHJlc3NFcXVhbGl0aWVzIiwiZ2V0SnVkZ2VtZW50cyIsImNvbXByZXNzSnVkZ2VtZW50cyIsImdldFN0YXRlbWVudHMiLCJjb21wcmVzc1N0YXRlbWVudHMiLCJnZXRBc3NlcnRpb25zIiwiY29tcHJlc3NBc3NlcnRpb25zIiwiZ2V0UmVmZXJlbmNlcyIsImNvbXByZXNzUmVmZXJlbmNlcyIsImdldEFzc3VtcHRpb25zIiwiY29tcHJlc3NBc3N1bXB0aW9ucyIsImdldE1ldGF2YXJpYWJsZXMiLCJjb21wcmVzc01ldGF2YXJpYWJsZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwiY29tcHJlc3NTdWJzdGl0dXRpb25zIiwiYWRkVGVybSIsInRlcm0iLCJ0ZXJtQSIsInRlcm1TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInRlcm1CIiwiZmluZCIsInRlcm1BQ29tcGFyZXNUb1Rlcm1CIiwiY29tcGFyZVRlcm0iLCJkZWJ1ZyIsImFkZEZyYW1lIiwiZnJhbWUiLCJmcmFtZUEiLCJmcmFtZVN0cmluZyIsImZyYW1lQiIsImZyYW1lQUVxdWFsVG9GcmFtZUIiLCJpc0VxdWFsVG8iLCJhZGRFcXVhbGl0eSIsImVxdWFsaXR5IiwiZXF1YWxpdHlBIiwiZXF1YWxpdHlTdHJpbmciLCJlcXVhbGl0eUIiLCJlcXVhbGl0eUFFcXVhbFRvRXF1YWxpdHlCIiwiYWRkSnVkZ2VtZW50IiwianVkZ2VtZW50IiwianVkZ2VtZW50QSIsImp1ZGdlbWVudFN0cmluZyIsImp1ZGdlbWVudEIiLCJqdWRnZW1lbnRBRXF1YWxUb0VxdWFsaXR5QiIsImFkZFN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudEEiLCJzdGF0ZW1lbnRTdHJpbmciLCJzdGF0ZW1lbnRCIiwic3RhdGVtZW50QUVxdWFsVG9TdGF0ZW1lbnRCIiwiYWRkQXNzZXJ0aW9uIiwiYXNzZXJ0aW9uIiwiYXNzZXJ0aW9uQSIsImFzc2VydGlvblN0cmluZyIsImFzc2VydGlvbkIiLCJhc3NlcnRpb25BRXF1YWxUb0Fzc2VydGlvbkIiLCJhZGRSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJyZWZlcmVuY2VBIiwicmVmZXJlbmNlU3RyaW5nIiwicmVmZXJlbmNlQiIsInJlZmVyZW5jZUFFcXVhbFRvUmVmZXJlbmNlQiIsImFkZEFzc3VtcHRpb24iLCJhc3N1bXB0aW9uIiwiYXNzdW1wdGlvbkEiLCJhc3N1bXB0aW9uU3RyaW5nIiwiYXNzdW1wdGlvbkIiLCJhc3N1bXB0aW9uQUVxdWFsVG9Bc3N1bXB0aW9uQiIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUEiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJtZXRhdmFyaWFibGVCIiwibWV0YXZhcmlhYmxlQUVxdWFsVG9TdWJzdGl0dXRpb25CIiwiYWRkU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uQSIsInN1YnN0aXR1dGlvblN0cmluZyIsInN1YnN0aXR1dGlvbkIiLCJzdWJzdGl0dXRpb25BRXF1YWxUb1N1YnN0aXR1dGlvbkIiLCJhZGRUZXJtcyIsImZvckVhY2giLCJhZGRGcmFtZXMiLCJhZGRFcXVhbGl0aWVzIiwiYWRkSnVkZ2VtZW50cyIsImFkZEFzc2VydGlvbnMiLCJhZGRTdGF0ZW1lbnRzIiwiYWRkUmVmZXJlbmNlcyIsImFkZEFzc3VtcHRpb25zIiwiYWRkTWV0YXZhcmlhYmxlcyIsImFkZFN1YnN0aXR1dGlvbnMiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInZhcmlhYmxlSWRlbnRpZmllciIsImdldFZhcmlhYmxlSWRlbnRpZmllciIsImRlY2xhcmVkVmFyaWFibGUiLCJmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm1Ob2RlTWF0Y2hlcyIsIm1hdGNoVGVybU5vZGUiLCJmaW5kRnJhbWVCeUZyYW1lTm9kZSIsImZyYW1lTm9kZSIsImZyYW1lTm9kZU1hdGNoZXMiLCJtYXRjaEZyYW1lTm9kZSIsImZpbmRFcXVhbGl0eUJ5RXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlIiwiZXF1YWxpdHlOb2RlTWF0Y2hlcyIsIm1hdGNoRXF1YWxpdHlOb2RlIiwiZmluZEp1ZGdlbWVudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudE5vZGUiLCJqdWRnZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoSnVkZ2VtZW50Tm9kZSIsImZpbmRTdGF0ZW1lbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJmaW5kUmVmZXJlbmNlQnlSZWZlcmVuY2VOb2RlIiwicmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU1hdGNoZVJlZmVyZW5jZU5vZGUiLCJtYXRjaFJlZmVyZW5jZU5vZGUiLCJmaW5kQXNzZXJ0aW9uQnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uTm9kZSIsImFzc2VydGlvbk5vZGVNYXRjaGVzIiwibWF0Y2hBc3NlcnRpb25Ob2RlIiwiZmluZEFzc3VtcHRpb25CeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvbk5vZGUiLCJhc3N1bXB0aW9uTm9kZU1hdGNoZXMiLCJtYXRjaEFzc3VtcHRpb25Ob2RlIiwiZmluZFJlZmVyZW5jZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VNYXRjaGVNZXRhdmFyaWFibGVOb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlTWF0Y2hlcyIsIm1hdGNoU3Vic3RpdHV0aW9uTm9kZSIsImlzVGVybVByZXNlbnRCeVRlcm1Ob2RlIiwidGVybVByZXNlbnQiLCJpc0ZyYW1lUHJlc2VudEJ5RnJhbWVOb2RlIiwiZnJhbWVQcmVzZW50IiwiaXNFcXVhbGl0eVByZXNlbnRCeUVxdWFsaXR5Tm9kZSIsImVxdWFsaXR5UHJlc2VudCIsImlzSnVkZ2VtZW50UHJlc2VudEJ5SnVkZ2VtZW50Tm9kZSIsImp1ZGdlbWVudFByZXNlbnQiLCJpc1N0YXRlbWVudFByZXNlbnRCeVN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRQcmVzZW50IiwiaXNBc3NlcnRpb25QcmVzZW50QnlBc3NlcnRpb25Ob2RlIiwiYXNzZXJ0aW9uUHJlc2VudCIsImlzQXNzdW1wdGlvblByZXNlbnRCeUFzc3VtcHRpb25Ob2RlIiwiYXNzdW1wdGlvblByZXNlbnQiLCJpc1JlZmVyZW5jZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJyZWZlcmVuY2VQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlbk5vZGUiLCJtZXRhdmFyaWFibGVuIiwibWV0YXZhcmlhYmxlblByZXNlbnQiLCJpc1N1YnN0aXR1dGlvblByZXNlbnRCeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25QcmVzZW50IiwiY29tbWl0IiwiZWxlbWVudCIsInNldENvbnRleHQiLCJpbml0aWFsaXNlIiwianNvbiIsInRlcm1zRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJzdGF0ZW1lbnRzRnJvbUpTT04iLCJyZWZlcmVuY2VzRnJvbUpTT04iLCJlcXVhbGl0aWVzRnJvbUpTT04iLCJhc3N1bXB0aW9uc0Zyb21KU09OIiwiZnJhbWVzRnJvbUpTT04iLCJqdWRnZW1lbnRzRnJvbUpTT04iLCJhc3NlcnRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJ0b0pTT04iLCJ0ZXJtc0pTT04iLCJ0ZXJtc1RvVGVybXNKU09OIiwiZnJhbWVzSlNPTiIsImZyYW1lc1RvRnJhbWVzSlNPTiIsImp1ZGdlbWVudHNKU09OIiwianVkZ2VtZW50c1RvSnVkZ2VtZW50c0pTT04iLCJlcXVhbGl0aWVzSlNPTiIsImVxdWFsaXRpZXNUb0VxdWFsaXRpZXNKU09OIiwic3RhdGVtZW50c0pTT04iLCJzdGF0ZW1lbnRzVG9TdGF0ZW1lbnRzSlNPTiIsImFzc2VydGlvbnNKU09OIiwiYXNzZXJ0aW9uc1RvQXNzZXJ0aW9uc0pTT04iLCJyZWZlcmVuY2VzSlNPTiIsInJlZmVyZW5jZXNUb1JlZmVyZW5jZXNKU09OIiwiYXNzdW1wdGlvbnNKU09OIiwiYXNzdW1wdGlvbnNUb0Fzc3VtcHRpb25zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwiZnJvbUpTT04iLCJlbXBoZW1lcmFsQ29udGV4dCIsImZyb21Ob3RoaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF1Q0E7OztlQUFxQkE7OzsyQkFyQ1U7Z0VBRVg7MEJBV2tCO3NCQW9CVzs7Ozs7O0FBRWpELE1BQU0sRUFBRUMsSUFBSSxFQUFFLEdBQUdDLHlCQUFjO0FBRWhCLE1BQU1GLHlCQUF5QkcsZ0JBQU87SUFDbkQsWUFBWUMsT0FBTyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFVBQVUsRUFBRUMsVUFBVSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsYUFBYSxFQUFFQyxhQUFhLENBQUU7UUFDekksS0FBSyxDQUFDVjtRQUVOLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsYUFBYSxHQUFHQTtRQUNyQixJQUFJLENBQUNDLGFBQWEsR0FBR0E7SUFDdkI7SUFFQUMsU0FBU1YsUUFBUSxFQUFFLEVBQUU7UUFDbkIsTUFBTUQsVUFBVSxJQUFJLENBQUNZLFVBQVU7UUFFL0JmLEtBQUtJLE9BQU8sSUFBSSxDQUFDQSxLQUFLO1FBRXRCRCxRQUFRVyxRQUFRLENBQUNWO1FBRWpCWSxJQUFBQSx1QkFBYSxFQUFDYjtRQUVkLE9BQU9DO0lBQ1Q7SUFFQWEsVUFBVVosU0FBUyxFQUFFLEVBQUU7UUFDckIsTUFBTUYsVUFBVSxJQUFJLENBQUNZLFVBQVU7UUFFL0JmLEtB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