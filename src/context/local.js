"use strict";

import { arrayUtilities } from "necessary";

import Equivalence from "../equivalence";

import { mergeEquivalences, findEquivalenceByTerm, groundedTermsAndDefinedVariablesFromFromEquivalences } from "../utilities/equivalences";

const { last } = arrayUtilities;

class LocalContext {
  constructor(context, tokens, variables, proofSteps, judgements, equivalences) {
    this.context = context;
    this.tokens = tokens;
    this.variables = variables;
    this.proofSteps = proofSteps;
    this.judgements = judgements;
    this.equivalences = equivalences;
  }

  getContext() {
    return this.context;
  }

  getTokens() {
    return this.tokens;
  }

  getVariables(nested = true) {
    let variables;

    if (nested) {
      variables = this.context.getVariables();

      variables = [
        ...this.variables,
        ...variables
      ];
    } else {
      variables = this.variables;
    }

    return variables;
  }

  getProofSteps() {
    let proofSteps = this.context.getProofSteps();

    proofSteps = [  ///
      ...proofSteps,
      ...this.proofSteps
    ];

    return proofSteps;
  }

  getJudgements() {
    let judgements = this.context.getJudgements();

    judgements = [ ///
      ...this.judgements,
      ...judgements
    ]

    return judgements;
  }

  getEquivalences() {
    let equivalences = this.context.getEquivalences();

    const equivalencesA = this.equivalences, ///
          equivalencesB = equivalences;

    equivalences = mergeEquivalences(equivalencesA, equivalencesB); ///

    return equivalences;
  }

  getLastProofStep() {
    let lastProofStep = null;

    const proofStepsLength = this.proofSteps.length;

    if (proofStepsLength > 0) {
      lastProofStep = last(this.proofSteps);
    }

    return lastProofStep;
  }

  getFilePath() { return this.context.getFilePath(); }

  getLexer() { return this.context.getLexer(); }

  getParser() { return this.context.getParser(); }

  getAxioms() { return this.context.getAxioms(); }

  getLemmas() { return this.context.getLemmas(); }

  getTheorems() { return this.context.getTheorems(); }

  getConjectures() { return this.context.getConjectures(); }

  getCombinators() { return this.context.getCombinators(); }

  getConstructors() { return this.context.getConstructors(); }

  addEquality(equality, context) {
    let equalityAdded;

    const equalityReflexive = equality.isReflexive();

    if (equalityReflexive) {
      equalityAdded = true; ///
    } else {
      const leftTerm = equality.getLeftTerm(),
            rightTerm = equality.getRightTerm(),
            leftEquivalence = findEquivalenceByTerm(this.equivalences, leftTerm),
            rightEquivalence = findEquivalenceByTerm(this.equivalences, rightTerm);

      if (false) {
        ///
      } else if ((leftEquivalence === null) && (rightEquivalence === null)) {
        const equivalence = Equivalence.fromLeftTermAndRightTerm(leftTerm, rightTerm);

        this.addEquivalence(equivalence, context);

        equalityAdded = true;
      } else if ((leftEquivalence !== null) && (rightEquivalence === null)) {
        leftEquivalence.addTerm(rightTerm, context);

        equalityAdded = true;
      } else if ((leftEquivalence === null) && (rightEquivalence !== null)) {
        rightEquivalence.addTerm(leftTerm, context);

        equalityAdded = true;
      } else if ((leftEquivalence !== null) && (rightEquivalence !== null)) {
        let equivalence;

        if (leftEquivalence === rightEquivalence) {
          equivalence = leftEquivalence;  ///
        } else {
          equivalence = Equivalence.merge(leftEquivalence, rightEquivalence);

          this.removeEquivalence(leftEquivalence);

          this.removeEquivalence(rightEquivalence);

          this.addEquivalence(equivalence);
        }

        equivalence.addTerm(leftTerm, context);

        equivalence.addTerm(rightTerm, context);

        equalityAdded = true;
      }
    }

    return equalityAdded;
  }

  addVariable(variable, nested = true) {
    let variableAdded = false;

    const variableName = variable.getNode(),
          variablePresent = this.isVariablePresentByVariableName(variableName, nested);

    if (!variablePresent) {
      this.variables.push(variable);

      variableAdded = true;
    }

    return variableAdded;
  }

  addProofStep(proofStep) {
    this.proofSteps.push(proofStep);
  }

  addEquivalence(equivalence, context) {
    const equivalenceString = equivalence.asString();

    context.trace(`Added the '${equivalenceString}' equivalence.`);

    this.equivalences.push(equivalence);
  }

  removeEquivalence(equivalence) {
    const index = this.equivalences.indexOf(equivalence),
          start = index,  ///
          deleteCount = 1;

    this.equivalences.splice(start, deleteCount);
  }

  addJudgement(judgement) {
    let judgementAdded = false;

    const metavariable = judgement.getMetavariable(),
          judgementPresent = this.isJudgementPresentByMetavariable(metavariable);

    if (!judgementPresent) {
      this.judgements.push(judgement);

      judgementAdded = true;
    }

    return judgementAdded;
  }

  getTermType(term) {
    let termType;

    const equivalences = this.getEquivalences(),
          equivalence = findEquivalenceByTerm(equivalences, term);

    if (equivalence !== null) {
      const LocalContext = this,  ///
            equivalenceType = equivalence.getType(LocalContext);

      termType = equivalenceType;  ///
    } else {
      termType = term.getType();
    }

    return termType;
  }

  isTermGrounded(term) {
    const context = this,
          equivalences = this.getEquivalences(),
          groundedTerms = [],
          definedVariables = [];

    groundedTermsAndDefinedVariablesFromFromEquivalences(equivalences, groundedTerms, definedVariables, context);

    const termMatchesGroundedTerm = groundedTerms.some((groundedTerm) => {
            const groundedTermNode = groundedTerm.getNode(),
                  groundedTermNodeMatches = term.matchTermNode(groundedTermNode);

            if (groundedTermNodeMatches) {
              return true;
            }
          }),
          termGrounded = termMatchesGroundedTerm; ///

    return termGrounded;
  }

  isVariableDefined(variable) {
    const context = this,
          equivalences = this.getEquivalences(),
          groundedTerms = [],
          definedVariables = [];

    groundedTermsAndDefinedVariablesFromFromEquivalences(equivalences, groundedTerms, definedVariables, context);

    const variableMatchesDefinedVariable = definedVariables.some((definedVariable) => {
            const definedVariableEqualToVariable = definedVariable.isEqualTo(variable);

            if (definedVariableEqualToVariable === variable) {
              return true;
            }
          }),
          variableDefined = variableMatchesDefinedVariable; ///

    return variableDefined;
  }

  isMetavariableDefined(metavariable) {
    const judgementPresent = this.isJudgementPresentByMetavariable(metavariable),
      metavariableDefined = judgementPresent; ///

    return metavariableDefined
  }

  isMetavariablePresent(metavariable, generalContext, specificContext) { return this.context.isMetavariablePresent(metavariable, generalContext, specificContext); }

  isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

  isLabelPresentByMetavariableName(metavariableName) { return this.context.isLabelPresentByMetavariableName(metavariableName); }

  isVariablePresentByVariableName(variableName, nested = true) {
    const variable = this.findVariableByVariableName(variableName, nested),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isJudgementPresentByMetavariable(metavariable) {
    const judgement = this.findJudgementByMetavariable(metavariable),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  findVariableByVariableName(variableName, nested = true) {
    const variables = this.getVariables(nested),
          variable = variables.find((variable) => {
            const variableNameMatches = variable.matchVariableName(variableName);

            if (variableNameMatches) {
              return true;
            }
          }) || null;

    return variable;
  }

  findJudgementByMetavariable(metavariable) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementMetavariable = judgement.getMetavariable();

            if (judgementMetavariable !== null) {
              const judgementMetavariableEqualToMetavariable = judgementMetavariable.isEqualTo(metavariable);

              if (judgementMetavariableEqualToMetavariable) {
                return true;
              }
            }
          }) || null;

    return judgement;
  }

  findMetavariable(metavariable, generalContext, specificContext) { return this.context.findMetavariable(metavariable, generalContext, specificContext); }

  findTypeByTypeName(typeName) { return this.context.findTypeByTypeName(typeName); }

  findMetaTypeByMetaTypeName(metaTypeName) { return this.context.findMetaTypeByMetaTypeName(metaTypeName); }

  findMetavariableByMetavariableName(metavariableName) { return this.context.findMetavariableByMetavariableName(metavariableName); }

  findLabelByMetavariable(metavariable) { return this.context.findLabelByMetavariable(metavariable); }

  findRuleByReference(reference) { return this.context.findRuleByReference(reference); }

  findAxiomByReference(reference) { return this.context.findAxiomByReference(reference); }

  findLemmaByReference(reference) { return this.context.findLemmaByReference(reference); }

  findTheoremByReference(reference) { return this.context.findTheoremByReference(reference); }

  findConjectureByReference(reference) { return this.context.findConjectureByReference(reference); }

  findMetaLemmasByReference(reference) { return this.context.findMetaLemmasByReference(reference); }

  findMetatheoremsByReference(reference) { return this.context.findMetatheoremsByReference(reference); }

  isAxiomPresentByReference(reference) { return this.context.isAxiomPresentByReference(reference); }

  isLemmaPresentByReference(reference) { return this.context.isLemmaPresentByReference(reference); }

  isTheoremPresentByReference(reference) { return this.context.isTheoremPresentByReference(reference); }

  isConjecturePresentByReference(reference) { return this.context.isConjecturePresentByReference(reference); }

  areMetaLemmaPresentByReference(reference) { return this.context.areMetaLemmaPresentByReference(reference); }

  areMetatheoremPresentByReference(reference) { return this.context.areMetatheoremPresentByReference(reference); }

  nodeAsString(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    const string = this.context.nodeAsString(node, tokens);

    return string;
  }

  nodesAsString(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    const string = this.context.nodesAsString(node, tokens);

    return string;
  }

  nodeAsTokens(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    tokens = this.context.nodeAsTokens(node, tokens); ///

    return tokens;
  }

  nodesAsTokens(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    tokens = this.context.nodesAsTokens(node, tokens);  ///

    return tokens;
  }

  tokensAsString(tokens) { return this.context.tokensAsString(tokens); }

  trace(message, node) { this.context.trace(message, node); }

  debug(message, node) { this.context.debug(message, node); }

  info(message, node) { this.context.info(message, node); }

  warning(message, node) { this.context.warning(message, node); }

  error(message, node) { this.context.error(message, node); }

  static fromContext(context) {
    const tokens = null,
          variables = [],
          proofSteps = [],
          judgements = [],
          equivalences = [],
          localContext = new LocalContext(context, tokens, variables, proofSteps, judgements, equivalences);

    return localContext;
  }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          tokens = null,
          variables = [],
          proofSteps = [],
          judgements = [],
          equivalences = [],
          localContext = new LocalContext(context, tokens, variables, proofSteps, judgements, equivalences);

    return localContext;
  }

  static fromContextAndTokens(context, tokens) {
    const variables = [],
          proofSteps = [],
          judgements = [],
          equivalences = [],
          localContext = new LocalContext(context, tokens, variables, proofSteps, judgements, equivalences);

    return localContext;
  }
}

export default LocalContext;