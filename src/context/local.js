"use strict";

import { arrayUtilities } from "necessary";

import Equivalence from "../equivalence";

import { metavariableNameFromMetavariableNode } from "../utilities/name";
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

  getLexer() { return this.context.getLexer(); }

  getParser() { return this.context.getParser(); }

  getAxioms() { return this.context.getAxioms(); }

  getLemmas() { return this.context.getLemmas(); }

  getTheorems() { return this.context.getTheorems(); }

  getConjectures() { return this.context.getConjectures(); }

  getCombinators() { return this.context.getCombinators(); }

  getConstructors() { return this.context.getConstructors(); }

  addEquality(equality, localContext) {
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

        this.addEquivalence(equivalence, localContext);

        equalityAdded = true;
      } else if ((leftEquivalence !== null) && (rightEquivalence === null)) {
        leftEquivalence.addTerm(rightTerm, localContext);

        equalityAdded = true;
      } else if ((leftEquivalence === null) && (rightEquivalence !== null)) {
        rightEquivalence.addTerm(leftTerm, localContext);

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

        equivalence.addTerm(leftTerm, localContext);

        equivalence.addTerm(rightTerm, localContext);

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

  addEquivalence(equivalence, localContext) {
    const equivalenceString = equivalence.asString();

    localContext.trace(`Added the '${equivalenceString}' equivalence.`);

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

    const metavariableNode = judgement.getMetavariableNode(),
          judgementPresent = this.isJudgementPresentByMetavariableNode(metavariableNode); ///

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

  isVariableDefinedByVariableName(variableName) {
    const context = this,
          equivalences = this.getEquivalences(),
          groundedTerms = [],
          definedVariables = [];

    groundedTermsAndDefinedVariablesFromFromEquivalences(equivalences, groundedTerms, definedVariables, context);

    const variableMatchesDefinedVariable = definedVariables.some((definedVariable) => {
            const definedVariableName = definedVariable.getName();

            if (definedVariableName === variableName) {
              return true;
            }
          }),
          variableDefined = variableMatchesDefinedVariable; ///

    return variableDefined;
  }

  isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

  isLabelPresentByMetavariableNode(metavariableNode) { return this.context.isLabelPresentByMetavariableNode(metavariableNode); }

  isMetavariablePresentByMetavariableNode(metavariableNode, localContext) { return this.context.isMetavariablePresentByMetavariableNode(metavariableNode, localContext); }

  isVariablePresentByVariableName(variableName, nested = true) {
    const variable = this.findVariableByVariableName(variableName, nested),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isJudgementPresentByMetavariableNode(metavariableNode) {
    const judgement = this.findJudgementByMetavariableNode(metavariableNode),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  isMetavariableDefinedByMetavariableNode(metavariableNode) {
    const judgementPresent = this.isJudgementPresentByMetavariableNode(metavariableNode),
          metavariableDefined = judgementPresent; ///

    return metavariableDefined
  }

  findMetaTypeByMetaTypeName(metaTypeName) { return this.context.findMetaTypeByMetaTypeName(metaTypeName); }

  findLabelByMetavariableNode(metavariableNode) { return this.context.findLabelByMetavariableNode(metavariableNode); }

  findMetavariableByMetavariableNode(metavariableNode, localContext) { return this.context.findMetavariableByMetavariableNode(metavariableNode, localContext); }

  findVariableByVariableName(variableName, nested = true) {
    const variables = this.getVariables(nested),
          variable = variables.find((variable) => {
            const nameMatches = variable.matchVariableName(variableName);

            if (nameMatches) {
              return true;
            }
          }) || null;

    return variable;
  }

  findJudgementByMetavariableNode(metavariableNode) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementMatchesMetavariableNode = judgement.matchMetavariableNode(metavariableNode);

            if (judgementMatchesMetavariableNode) {
              return true;
            }
          }) || null;

    return judgement;
  }

  findTypeByTypeName(typeName) { return this.context.findTypeByTypeName(typeName); }

  findRuleByReference(reference) { return this.context.findRuleByReference(reference); }

  findAxiomByReference(reference) { return this.context.findAxiomByReference(reference); }

  findLemmaByReference(reference) { return this.context.findLemmaByReference(reference); }

  findTheoremByReference(reference) { return this.context.findTheoremByReference(reference); }

  findConjectureByReference(reference) { return this.context.findConjectureByReference(reference); }

  findMetaLemmaByReference(reference, localContext) { return this.context.findMetaLemmaByReference(reference, localContext); }

  findMetatheoremByReference(reference, localContext) { return this.context.findMetatheoremByReference(reference, localContext); }

  isAxiomPresentByReference(reference) { return this.context.isAxiomPresentByReference(reference); }

  isLemmaPresentByReference(reference) { return this.context.isLemmaPresentByReference(reference); }

  isTheoremPresentByReference(reference) { return this.context.isTheoremPresentByReference(reference); }

  isConjecturePresentByReference(reference) { return this.context.isConjecturePresentByReference(reference); }

  isMetaLemmaPresentByReference(reference, localContext) { return this.context.isMetaLemmaPresentByReference(reference, localContext); }

  isMetatheoremPresentByReference(reference, localContext) { return this.context.isMetatheoremPresentByReference(reference, localContext); }

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

  static fromLocalContext(localContext) {
    const context = localContext,  ///
          tokens = null,
          variables = [],
          proofSteps = [],
          judgements = [],
          equivalences = [];

    localContext = new LocalContext(context, tokens, variables, proofSteps, judgements, equivalences);  ///

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