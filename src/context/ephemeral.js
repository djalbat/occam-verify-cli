"use strict";

import Context from "../context";

import { termsFromJSON,
         framesFromJSON,
         termsToTermsJSON,
         framesToFramesJSON,
         judgementsFromJSON,
         equalitiesFromJSON,
         statementsFromJSON,
         assertionsFromJSON,
         referencesFromJSON,
         assumptionsFromJSON,
         metavariablesFromJSON,
         substitutionsFromJSON,
         judgementsToJudgementsJSON,
         equalitiesToEqualitiesJSON,
         statementsToStatementsJSON,
         assertionsToAssertionsJSON,
         referencesToReferencesJSON,
         assumptionsToAssumptionsJSON,
         metavariablesToMetavariablesJSON,
         substitutionsToSubstitutionsJSON } from "../utilities/json";

export default class EphemeralContext extends Context {
  constructor(context, terms, frames, equalities, judgements, assertions, statements, references, assumptions, metavariables, substitutions) {
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
    
    terms = [ ///
      ...this.terms,
      ...terms
    ];
    
    return terms;
  }

  getFrames() {
    let frames;
    
    const context = this.getContext();
    
    frames = context.getFrames();
    
    frames = [ ///
      ...this.frames,
      ...frames
    ];
    
    return frames;
  }

  getEqualities() {
    let equalities;
    
    const context = this.getContext();
    
    equalities = context.getEqualities();
    
    equalities = [ ///
      ...this.equalities,
      ...equalities
    ];
    
    return equalities;
  }

  getJudgements() {
    let judgements;
    
    const context = this.getContext();
    
    judgements = context.getJudgements();
    
    judgements = [ ///
      ...this.judgements,
      ...judgements
    ];
    
    return judgements;
  }

  getStatements() {
    let statements;
    
    const context = this.getContext();
    
    statements = context.getStatements();
    
    statements = [ ///
      ...this.statements,
      ...statements
    ];
    
    return statements;
  }

  getAssertions() {
    let assertions;
    
    const context = this.getContext();
    
    assertions = context.getAssertions();
    
    assertions = [ ///
      ...this.assertions,
      ...assertions
    ];
    
    return assertions;
  }

  getReferences() {
    let references;
    
    const context = this.getContext();
    
    references = context.getReferences();
    
    references = [ ///
      ...this.references,
      ...references
    ];
    
    return references;
  }

  getAssumptions() {
    let assumptions;
    
    const context = this.getContext();
    
    assumptions = context.getAssumptions();
    
    assumptions = [ ///
      ...this.assumptions,
      ...assumptions
    ];
    
    return assumptions;
  }

  getMetavariables() {
    let metavariables;
    
    const context = this.getContext();
    
    metavariables = context.getMetavariables();
    
    metavariables = [ ///
      ...this.metavariables,
      ...metavariables
    ];
    
    return metavariables;
  }

  getSubstitutions() {
    let substitutions;
    
    const context = this.getContext();
    
    substitutions = context.getSubstitutions();
    
    substitutions = [ ///
      ...this.substitutions,
      ...substitutions
    ];
    
    return substitutions;
  }

  addTerm(term) {
    const context = this, ///
          termA = term, ///
          termString = term.getString();

    context.trace(`Adding the '${termString}' term to the ephemeral context...`);

    const terms = this.getTerms(),
          termB = terms.find((term) => {
            const termB = term, ///
                  termAComparesToTermB = termA.compareTerm(termB);
      
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
    const context = this, ///
          frameA = frame, ///
          frameString = frame.getString();

    context.trace(`Adding the '${frameString}' frame to the ephemeral context...`);

    const frames = this.getFrames(),
          frameB = frames.find((frame) => {
            const frameB = frame, ///
                  frameAEqualToFrameB = frameA.isEqualTo(frameB);
      
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
    const context = this, ///
          equalityA = equality, ///
          equalityString = equality.getString();

    context.trace(`Adding the '${equalityString}' equality to the ephemeral context...`);

    const equalities = this.getEqualities(),
          equalityB = equalities.find((equality) => {
            const equalityB = equality, ///
                  equalityAEqualToEqualityB = equalityA.isEqualTo(equalityB);
      
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
    const context = this, ///
          judgementA = judgement, ///
          judgementString = judgement.getString();

    context.trace(`Adding the '${judgementString}' judgement to the ephemeral context...`);

    const judgements = this.getJudgements(),
          judgementB = judgements.find((judgement) => {
            const judgementB = judgement, ///
                  judgementAEqualToEqualityB = judgementA.isEqualTo(judgementB);
      
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
    const context = this, ///
          statementA = statement, ///
          statementString = statement.getString();

    context.trace(`Adding the '${statementString}' statement to the ephemeral context...`);

    const statements = this.getStatements(),
          statementB = statements.find((statement) => {
            const statementB = statement, ///
                  statementAEqualToStatementB = statementA.isEqualTo(statementB);
      
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
    const context = this, ///
          assertionA = assertion, ///
          assertionString = assertion.getString();

    context.trace(`Adding the '${assertionString}' assertion to the ephemeral context...`);

    const assertions = this.getAssumptions(),
          assertionB = assertions.find((assertion) => {
            const assertionB = assertion, ///
                  assertionAEqualToAssertionB = assertionA.isEqualTo(assertionB);
      
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
    const context = this, ///
          referenceA = reference, ///
          referenceString = reference.getString();

    context.trace(`Adding the '${referenceString}' reference to the ephemeral context...`);

    const references = this.getReferences(),
          referenceB = references.find((reference) => {
            const referenceB = reference, ///
                  referenceAEqualToReferenceB = referenceA.isEqualTo(referenceB);
      
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
    const context = this, ///
          assumptionA = assumption, ///
          assumptionString = assumption.getString();

    context.trace(`Adding the '${assumptionString}' assumption to the ephemeral context...`);

    const assumptions = this.getAssumptions(),
          assumptionB = assumptions.find((assumption) => {
            const assumptionB = assumption, ///
                  assumptionAEqualToAssumptionB = assumptionA.isEqualTo(assumptionB);
      
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
    const context = this, ///
          metavariableA = metavariable, ///
          metavariableString = metavariable.getString();

    context.trace(`Adding the '${metavariableString}' metavariable to the ephemeral context...`);

    const metavariables = this.getMetavariables(),
          metavariableB = metavariables.find((metavariable) => {
            const metavariableB = metavariable, ///
                  metavariableAEqualToSubstitutionB = metavariableA.isEqualTo(metavariableB);
      
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
    const context = this, ///
          substitutionA = substitution, ///
          substitutionString = substitution.getString();

    context.trace(`Adding the '${substitutionString}' substitution to the ephemeral context...`);

    const substitutions = this.getSubstitutions(),
          substitutionB = substitutions.find((substitution) => {
            const substitutionB = substitution, ///
                  substitutionAEqualToSubstitutionB = substitutionA.isEqualTo(substitutionB);
      
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
    terms.forEach((term) => {
      this.addTerm(term);
    });
  }

  addFrames(frames) {
    frames.forEach((frame) => {
      this.addFrame(frame);
    });
  }

  addEqualities(equalities) {
    equalities.forEach((equality) => {
      this.addEquality(equality);
    });
  }

  addJudgements(judgements) {
    judgements.forEach((judgement) => {
      this.addJudgement(judgement);
    });
  }

  addAssertions(assertions) {
    assertions.forEach((assertion) => {
      this.addAssertion(assertion);
    });
  }

  addStatements(statements) {
    statements.forEach((statement) => {
      this.addStatement(statement);
    });
  }

  addReferences(references) {
    references.forEach((reference) => {
      this.addReference(reference);
    });
  }

  addAssumptions(assumptions) {
    assumptions.forEach((assumption) => {
      this.addAssumption(assumption);
    });
  }

  addMetavariables(metavariables) {
    metavariables.forEach((metavariable) => {
      this.addMetavariable(metavariable);
    });
  }

  addSubstitutions(substitutions) {
    substitutions.forEach((substitution) => {
      this.addSubstitution(substitution);
    });
  }

  findVariableByVariableNode(variableNode) {
    const variableIdentifier = variableNode.getVariableIdentifier(),
          declaredVariable = this.findDeclaredVariableByVariableIdentifier(variableIdentifier),
          variable = declaredVariable;  ///

    return variable;
  }

  findTermByTermNode(termNode) {
    const terms = this.getTerms(),
          term = terms.find((term) => {
            const termNodeMatches = term.matchTermNode(termNode);
      
            if (termNodeMatches) {
              return true;
            }
          }) || null;

    return term;
  }

  findFrameByFrameNode(frameNode) {
    const frames = this.getFrames(),
          frame = frames.find((frame) => {
            const frameNodeMatches = frame.matchFrameNode(frameNode);

            if (frameNodeMatches) {
              return true;
            }
          }) || null;

    return frame;
  }

  findEqualityByEqualityNode(equalityNode) {
    const equalities = this.getEqualities(),
          equality = equalities.find((equality) => {
            const equalityNodeMatches = equality.matchEqualityNode(equalityNode);

            if (equalityNodeMatches) {
              return true;
            }
          }) || null;

    return equality;
  }

  findJudgementByJudgementNode(judgementNode) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementNodeMatches = judgement.matchJudgementNode(judgementNode);

            if (judgementNodeMatches) {
              return true;
            }
          }) || null;

    return judgement;
  }

  findStatementByStatementNode(statementNode) {
    const statements = this.getStatements(),
          statement = statements.find((statement) => {
            const statementNodeMatches = statement.matchStatementNode(statementNode);

            if (statementNodeMatches) {
              return true;
            }
          }) || null;

    return statement;
  }

  findReferenceByReferenceNode(referenceNode) {
    const references = this.getReferences(),
          reference = references.find((reference) => {
            const referenceMatcheReferenceNode = reference.matchReferenceNode(referenceNode);

            if (referenceMatcheReferenceNode) {
              return true;
            }
          }) || null;

    return reference;
  }

  findAssertionByAssertionNode(assertionNode) {
    const assertions = this.getAssertions(),
          assertion = assertions.find((assertion) => {
            const assertionNodeMatches = assertion.matchAssertionNode(assertionNode);

            if (assertionNodeMatches) {
              return true;
            }
          }) || null;

    return assertion;
  }

  findAssumptionByAssumptionNode(assumptionNode) {
    const assumptions = this.getAssumptions(),
          assumption = assumptions.find((assumption) => {
            const assumptionNodeMatches = assumption.matchAssumptionNode(assumptionNode);

            if (assumptionNodeMatches) {
              return true;
            }
          }) || null;

    return assumption;
  }

  findReferenceByMetavariableNode(metavariableNode) {
    const references = this.getReferences(),
          reference = references.find((reference) => {
            const referenceMatcheMetavariableNode = reference.matchMetavariableNode(metavariableNode);

            if (referenceMatcheMetavariableNode) {
              return true;
            }
          }) || null;

    return reference;
  }

  findMetavariableByMetavariableNode(metavariableNode) {
    const metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  findSubstitutionBySubstitutionNode(substitutionNode) {
    const substitutions = this.getSubstitutions(),
          substitution = substitutions.find((substitution) => {
            const substitutionNodeMatches = substitution.matchSubstitutionNode(substitutionNode);

            if (substitutionNodeMatches) {
              return true;
            }
          }) || null;

    return substitution;
  }

  isTermPresentByTermNode(termNode) {
    const term = this.findTermByTermNode(termNode),
          termPresent = (term !== null);

    return termPresent;
  }

  isFramePresentByFrameNode(frameNode) {
    const frame = this.findFrameByFrameNode(frameNode),
          framePresent = (frame !== null);

    return framePresent;
  }

  isEqualityPresentByEqualityNode(equalityNode) {
    const equality = this.findEqualityByEqualityNode(equalityNode),
          equalityPresent = (equality !== null);

    return equalityPresent;
  }

  isJudgementPresentByJudgementNode(judgementNode) {
    const judgement = this.findJudgementByJudgementNode(judgementNode),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  isStatementPresentByStatementNode(statementNode) {
    const statement = this.findStatementByStatementNode(statementNode),
          statementPresent = (statement !== null);

    return statementPresent;
  }

  isAssertionPresentByAssertionNode(assertionNode) {
    const assertion = this.findAssertionByAssertionNode(assertionNode),
          assertionPresent = (assertion !== null);

    return assertionPresent;
  }

  isAssumptionPresentByAssumptionNode(assumptionNode) {
    const assumption = this.findAssumptionByAssumptionNode(assumptionNode),
          assumptionPresent = (assumption !== null);

    return assumptionPresent;
  }

  isReferencePresentByMetavariableNode(metavariableNode) {
    const reference = this.findReferenceByMetavariableNode(metavariableNode),
          referencePresent = (reference !== null);

    return referencePresent;
  }

  isMetavariablePresentByMetavariableNode(metavariablenNode) {
    const metavariablen = this.findMetavariableByMetavariableNode(metavariablenNode),
          metavariablenPresent = (metavariablen !== null);

    return metavariablenPresent;
  }

  isSubstitutionPresentBySubstitutionNode(substitutionNode) {
    const substitution = this.findSubstitutionBySubstitutionNode(substitutionNode),
          substitutionPresent = (substitution !== null);

    return substitutionPresent;
  }

  commit(element) {
    const context = this; ///

    element.setContext(context);
  }

  initialise(json) {
    const context = this; ///

    this.terms = termsFromJSON(json, context);

    this.metavariables = metavariablesFromJSON(json, context);

    this.statements = statementsFromJSON(json, context);
    this.references = referencesFromJSON(json, context);

    this.equalities = equalitiesFromJSON(json, context);
    this.assumptions = assumptionsFromJSON(json, context);

    this.frames = framesFromJSON(json, context);

    this.judgements = judgementsFromJSON(json, context);
    this.assertions = assertionsFromJSON(json, context);
    this.substitutions = substitutionsFromJSON(json, context);
  }

  toJSON() {
    let terms = this.getTerms(),
        frames = this.getFrames(),
        judgements = this.getJudgements(),
        equalities = this.getEqualities(),
        statements = this.getStatements(),
        assertions = this.getAssertions(),
        references = this.getReferences(),
        assumptions = this.getAssumptions(),
        metavariables = this.getMetavariables(),
        substitutions = this.getSubstitutions();

    const termsJSON = termsToTermsJSON(terms),
          framesJSON = framesToFramesJSON(frames),
          judgementsJSON = judgementsToJudgementsJSON(judgements),
          equalitiesJSON = equalitiesToEqualitiesJSON(equalities),
          statementsJSON = statementsToStatementsJSON(statements),
          assertionsJSON = assertionsToAssertionsJSON(assertions),
          referencesJSON = referencesToReferencesJSON(references),
          assumptionsJSON = assumptionsToAssumptionsJSON(assumptions),
          metavariablesJSON = metavariablesToMetavariablesJSON(metavariables),
          substitutionsJSON = substitutionsToSubstitutionsJSON(substitutions);

    terms = termsJSON; ///
    frames = framesJSON; ///
    judgements = judgementsJSON; ///
    equalities = equalitiesJSON; ///
    statements = statementsJSON; ///
    assertions = assertionsJSON; ///
    references = referencesJSON; ///
    assumptions = assumptionsJSON; ///
    metavariables = metavariablesJSON;  //
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
    const terms = null,
          frames = null,
          equalities = null,
          judgements = null,
          statements = null,
          assertions = null,
          references = null,
          assumptions = null,
          metavariables = null,
          substitutions = null,
          emphemeralContext = new EphemeralContext(context, terms, frames, equalities, judgements, assertions, statements, references, assumptions, metavariables, substitutions);

    emphemeralContext.initialise(json);

    return emphemeralContext;
  }

  static fromNothing(context) {
    const terms = [],
          frames = [],
          equalities = [],
          judgements = [],
          statements = [],
          assertions = [],
          references = [],
          assumptions = [],
          metavariables = [],
          substitutions = [],
          emphemeralContext = new EphemeralContext(context, terms, frames, equalities, judgements, assertions, statements, references, assumptions, metavariables, substitutions);

    return emphemeralContext;
  }
}
