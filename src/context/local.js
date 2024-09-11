"use strict";

import Variable from "../variable";
import Equivalence from "../equivalence";

import { last, reverse } from "../utilities/array";
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

    const metavariableNode = judgement.getMetavariableNode(),
          judgementPresent = this.isJudgementPresentByMetavariableNode(metavariableNode);

    if (!judgementPresent) {
      this.judgements.push(judgement);

      judgementAdded = true;
    }

    return judgementAdded;
  }

  addMetavariable(metavariable) {
    let metavariableAdded = false;

    const node = metavariable.getName(),
          metavariablePresent = this.metavariables.some((metavariable) => {
            const metavariableMatchesNode = metavariable.matchNode(node);

            if (metavariableMatchesNode) {
              return true;
            }
          });

    if (!metavariablePresent) {
      this.metavariables.push(metavariable);

      metavariableAdded = true;
    }

    return metavariableAdded;
  }

  unifyStatement(statementNode, localContext) {
    let proofSteps = this.getProofSteps();

    proofSteps = reverse(proofSteps); ///

    const localContextA = this,  ///
          localContextB = localContext, ///
          statementNodeAB = statementNode, ///
          statementStringB = localContextA.nodeAsString(statementNodeAB);

    localContextB.trace(`Unifying the '${statementStringB}' statement...`, statementNodeAB);

    const equivalences = this.getEquivalences(),
          statementUnified = proofSteps.some((proofStep) => {
            const statementUnified = proofStep.unifyStatement(statementNode, equivalences, localContextA, localContextB);

            if (statementUnified) {
              return true;
            }
          });

    if (statementUnified) {
      localContextB.debug(`...unified the '${statementStringB}' statement.`, statementNodeAB);
    }

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
            const termMatchesGroundedTerm = term.match(groundedTerm);

            if (termMatchesGroundedTerm) {
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

  isVariablePresentByVariableNode(variableNode) {
    const variable = this.findVariableByVariableNode(variableNode),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isJudgementPresentByMetavariableNode(metavariableNode) {
    const judgement = this.findJudgementByMetavariableNode(metavariableNode),
          judgementPresent = (judgement !== null);

    return judgementPresent;
  }

  isTypePresentByTypeName(typeName) { return this.context.isTypePresentByTypeName(typeName); }

  isTypePresentByTypeNode(typeNode) { return this.context.isTypePresentByTypeNode(typeNode); }

  isMetavariablePresentByName(name) { return this.context.isMetavariablePresentByName(name); }

  isLabelPresentByMetavariableNode(metavariableNode) { return this.context.isLabelPresentByMetavariableNode(metavariableNode); }

  isMetavariablePresentByMetavariableNode(metavariableNode) {
    const metavariable = this.findMetavariableByMetavariableNode(metavariableNode),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  findVariableByVariableNode(variableNode) {
    const node = variableNode,  ///
          variables = this.getVariables(),
          variable = variables.find((variable) => {
            const matches = variable.matchNode(node);

            if (matches) {
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

  findMetavariableByMetavariableNode(metavariableNode) {
    const node = metavariableNode,  ///
          localContext = this,  ///
          metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const matches = metavariable.matchNode(node, localContext);

            if (matches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  findTypeByTypeName(typeName) { return this.context.findTypeByTypeName(typeName); }

  findTypeByTypeNode(typeNode) { return this.context.findTypeByTypeNode(typeNode); }

  findMetavariableByName(name) { return this.context.findMetavariableByName(name); }

  findLabelByMetavariableNode(metavariableNode) { return this.context.findLabelByMetavariableNode(metavariableNode); }

  findMetaTypeByMetaTypeNode(metaTypeNode) { return this.context.findMetaTypeByMetaTypeNode(metaTypeNode); }

  findRuleByMetavariableNode(metavariableNode) { return this.context.findRuleByMetavariableNode(metavariableNode); }

  findAxiomByMetavariableNode(metavariableNode) { return this.context.findAxiomByMetavariableNode(metavariableNode); }

  findLemmaByMetavariableNode(metavariableNode) { return this.context.findLemmaByMetavariableNode(metavariableNode); }

  findTheoremByMetavariableNode(metavariableNode) { return this.context.findTheoremByMetavariableNode(metavariableNode); }

  findMetaLemmaByMetavariableNode(metavariableNode) { return this.context.findMetaLemmaByMetavariableNode(metavariableNode); }

  findConjectureByMetavariableNode(metavariableNode) { return this.context.findConjectureByMetavariableNode(metavariableNode); }

  findMetatheoremByMetavariableNode(metavariableNode) { return this.context.findMetatheoremByMetavariableNode(metavariableNode); }

  nodeAsString(node) { return this.context.nodeAsString(node); }

  nodesAsString(node) { return this.context.nodesAsString(node); }

  trace(node, message) { this.context.trace(node, message); }

  debug(node, message) { this.context.debug(node, message); }

  info(node, message) { this.context.info(node, message); }

  warning(node, message) { this.context.warning(node, message); }

  error(node, message) { this.context.error(node, message); }

  fatal(node, message) { this.context.fatal(node, message); }

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