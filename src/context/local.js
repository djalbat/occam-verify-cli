"use strict";

import Equivalence from "../equivalence";

import { last, reverse } from "../utilities/array";
import { metavariableNameFromMetavariableNode } from "../utilities/name";
import { mergeEquivalences, findEquivalenceByTerm, groundedTermsAndDefinedVariablesFromFromEquivalences } from "../utilities/equivalences";

class LocalContext {
  constructor(context, variables, proofSteps, judgements, equivalences, metavariables) {
    this.context = context;
    this.variables = variables;
    this.proofSteps = proofSteps;
    this.judgements = judgements;
    this.equivalences = equivalences;
    this.metavariables = metavariables;
  }

  getContext() {
    return this.context;
  }

  getVariables() {
    let variables = this.context.getVariables();

    variables = [ ///
      ...this.variables,
      ...variables
    ];

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
          equivalencesB = equivalences,
          LocalContext = this;  ///

    equivalences = mergeEquivalences(equivalencesA, equivalencesB, LocalContext); ///

    return equivalences;
  }

  getMetavariables() {
    let metavariables = this.context.getMetavariables();

    metavariables = [ ///
      ...this.metavariables,
      ...metavariables
    ]

    return metavariables;
  }

  getLastProofStep() {
    let lastProofStep = null;

    const proofStepsLength = this.proofSteps.length;

    if (proofStepsLength > 0) {
      lastProofStep = last(this.proofSteps);
    }

    return lastProofStep;
  }

  getTokens() { return this.context.getTokens(); }

  getAxioms() { return this.context.getAxioms(); }

  getLemmas() { return this.context.getLemmas(); }

  getTheorems() { return this.context.getTheorems(); }

  getConjectures() { return this.context.getConjectures(); }

  getCombinators() { return this.context.getCombinators(); }

  getConstructors() { return this.context.getConstructors(); }

  addEquality(equality) {
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

        this.addEquivalence(equivalence);

        equalityAdded = true;
      } else if ((leftEquivalence !== null) && (rightEquivalence === null)) {
        leftEquivalence.addTerm(rightTerm);

        equalityAdded = true;
      } else if ((leftEquivalence === null) && (rightEquivalence !== null)) {
        rightEquivalence.addTerm(leftTerm);

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

        equivalence.addTerm(leftTerm);

        equivalence.addTerm(rightTerm);

        equalityAdded = true;
      }
    }

    return equalityAdded;
  }

  addVariable(variable) {
    let variableAdded = false;

    const node = variable.getNode(),
          variablePresent = this.variables.some((variable) => {
            const variableMatchesNode = variable.matchNode(node);

            if (variableMatchesNode) {
              return true;
            }
          });

    if (!variablePresent) {
      this.variables.push(variable);

      variableAdded = true;
    }

    return variableAdded;
  }

  addProofStep(proofStep) {
    this.proofSteps.push(proofStep);
  }

  addEquivalence(equivalence) {
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
          metavariableNode = metavariable.getNode(),
          metavariableName = metavariableNameFromMetavariableNode(metavariableNode),
          judgementPresent = this.isJudgementPresentByMetavariableName(metavariableName);

    if (!judgementPresent) {
      this.judgements.push(judgement);

      judgementAdded = true;
    }

    return judgementAdded;
  }

  addMetavariable(metavariable) {
    let metavariableAdded = false;

    const metavariableName = metavariable.getName(),
          metavariablePresent = this.isMetavariablePresentByMetavariableName(metavariableName);

    if (!metavariablePresent) {
      this.metavariables.push(metavariable);

      metavariableAdded = true;
    }

    return metavariableAdded;
  }

  unifyStatement(statementNode, localContext) {
    let proofSteps = this.getProofSteps();

    proofSteps = reverse(proofSteps); ///

    const equivalences = this.getEquivalences(),
          localContextA = this,  ///
          localContextB = localContext, ///
          statementNodeB = statementNode, ///
          statementUnified = proofSteps.some((proofStep) => {
            const statementUnified = proofStep.unifyStatement(statementNodeB, equivalences, localContextA, localContextB);

            if (statementUnified) {
              return true;
            }
          });

    return statementUnified;
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
            const variableMatchesDefinedVariable = variable.match(definedVariable);

            if (variableMatchesDefinedVariable) {
              return true;
            }
          }),
          variableDefined = variableMatchesDefinedVariable; ///

    return variableDefined;
  }

  isMetavariableDefined(metavariable) {
    const judgements = this.getJudgements(),
          metavariableNode = metavariable.getNode(),
          metavariableDefined = judgements.some((judgement) => {
            const metavariableNodeMatchesJudgement = judgement.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatchesJudgement) {
              return true;
            }
          });

    return metavariableDefined
  }

  isVariablePresentByVariableNode(variableNode) {
    const variable = this.findVariableByVariableNode(variableNode),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isJudgementPresentByMetavariableName(metavariableName) {
    const judgement = this.findJudgementByMetavariableName(metavariableName),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

  isTypePresentByTypeNode(typeNode) { return this.context.isTypePresentByTypeNode(typeNode); }

  isLabelPresentByMetavariableNode(metavariableNode) { return this.context.isLabelPresentByMetavariableNode(metavariableNode); }

  isMetavariablePresentByMetavariableName(metavariableName) { return this.context.isMetavariablePresentByMetavariableName(metavariableName); }

  isMetavariablePresentByMetavariableNode(metavariableNode) { return this.context.isMetavariablePresentByMetavariableNode(metavariableNode); }

  findVariableByVariableNode(variableNode) {
    const node = variableNode,  ///
          variables = this.getVariables(),
          variable = variables.find((variable) => {
            const nodeMatches = variable.matchNode(node);

            if (nodeMatches) {
              return true;
            }
          }) || null;

    return variable;
  }

  findJudgementByMetavariableName(metavariableName) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementMatchesMetavariableName = judgement.matchMetavariableName(metavariableName);

            if (judgementMatchesMetavariableName) {
              return true;
            }
          }) || null;

    return judgement;
  }

  findMetavariableByMetavariableNode(metavariableNode) {
    const localContext = this,  ///
          metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode, localContext);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  findTypeByTypeName(typeName) { return this.context.findTypeByTypeName(typeName); }

  findTypeByTypeNode(typeNode) { return this.context.findTypeByTypeNode(typeNode); }

  findLabelByMetavariableNode(metavariableNode) { return this.context.findLabelByMetavariableNode(metavariableNode); }

  findMetaTypeByMetaTypeNode(metaTypeNode) { return this.context.findMetaTypeByMetaTypeNode(metaTypeNode); }

  findRuleByMetavariableNode(metavariableNode) { return this.context.findRuleByMetavariableNode(metavariableNode); }

  findAxiomByMetavariableNode(metavariableNode) { return this.context.findAxiomByMetavariableNode(metavariableNode); }

  findLemmaByMetavariableNode(metavariableNode) { return this.context.findLemmaByMetavariableNode(metavariableNode); }

  findTheoremByMetavariableNode(metavariableNode) { return this.context.findTheoremByMetavariableNode(metavariableNode); }

  findMetaLemmaByMetavariableNode(metavariableNode) { return this.context.findMetaLemmaByMetavariableNode(metavariableNode); }

  findConjectureByMetavariableNode(metavariableNode) { return this.context.findConjectureByMetavariableNode(metavariableNode); }

  findMetatheoremByMetavariableNode(metavariableNode) { return this.context.findMetatheoremByMetavariableNode(metavariableNode); }

  findMetavariableByMetavariableName(metavariableName) { return this.context.findMetavariableByMetavariableName(metavariableName); }

  nodeAsString(node) { return this.context.nodeAsString(node); }

  nodesAsString(node) { return this.context.nodesAsString(node); }

  trace(message, node) { this.context.trace(message, node); }

  debug(message, node) { this.context.debug(message, node); }

  info(message, node) { this.context.info(message, node); }

  warning(message, node) { this.context.warning(message, node); }

  error(message, node) { this.context.error(message, node); }

  fatal(message, node) { this.context.fatal(node, message); }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [],
          judgements = [],
          metavariables = [],
          localContext = new LocalContext(context, variables, proofSteps, judgements, equivalences, metavariables);

    return localContext;
  }

  static fromLocalContext(localContext) {
    const context = localContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [],
          judgements = [],
          metavariables = [];

    localContext = new LocalContext(context, variables, proofSteps, judgements, equivalences, metavariables);  ///

    return localContext;
  }
}

export default LocalContext;