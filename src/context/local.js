"use strict";

import Variable from "../variable";
import Equivalence from "../equivalence";
import contextMixins from "../mixins/context";

import { last, reverse } from "../utilities/array";
import { mergeEquivalences, findEquivalenceByTerm, groundedTermsAndDefinedVariablesFromFromEquivalences } from "../utilities/equivalences";

class LocalContext {
  constructor(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps) {
    this.context = context;
    this.variables = variables;
    this.proofSteps = proofSteps;
    this.equivalences = equivalences;
    this.judgements = judgements;
    this.metavariables = metavariables;
    this.metaproofSteps = metaproofSteps;
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

  getEquivalences() {
    let equivalences = this.context.getEquivalences();

    const equivalencesA = this.equivalences, ///
          equivalencesB = equivalences,
          LocalContext = this;  ///

    equivalences = mergeEquivalences(equivalencesA, equivalencesB, LocalContext); ///

    return equivalences;
  }

  getJudgements() {
    let judgements = this.context.getJudgements();

    judgements = [ ///
      ...this.judgements,
      ...judgements
    ]

    return judgements;
  }

  getMetavariables() {
    let metavariables = this.context.getMetavariables();

    metavariables = [ ///
      ...this.metavariables,
      ...metavariables
    ]

    return metavariables;
  }

  getMetaproofSteps() {
    let metaproofSteps = this.context.getMetaproofSteps();

    metaproofSteps = [  ///
      ...metaproofSteps,
      ...this.metaproofSteps
    ];

    return metaproofSteps;
  }

  getLastProofStep() {
    let lastProofStep = null;

    const proofStepsLength = this.proofSteps.length;

    if (proofStepsLength > 0) {
      lastProofStep = last(this.proofSteps);
    }

    return lastProofStep;
  }

  getLastMetaproofStep() {
    let lastMetaproofStep = null;

    const metaproofStepsLength = this.metaproofSteps.length;

    if (metaproofStepsLength > 0) {
      lastMetaproofStep = last(this.metaproofSteps);
    }

    return lastMetaproofStep;
  }

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

  addMetaproofStep(metaproofStep) {
    this.metaproofSteps.push(metaproofStep);
  }

  matchStatementNode(statementNode) {
    let proofSteps = this.getProofSteps();

    proofSteps = reverse(proofSteps); ///

    const matchesStatementNode = proofSteps.some((proofStep) => {
      const proofStepMatchesStatementNode = proofStep.matchStatementNode(statementNode);

      if (proofStepMatchesStatementNode) {
        return true;
      }
    });

    return matchesStatementNode;
  }

  matchMetastatementNode(metastatementNode) {
    let metaproofSteps = this.getMetaproofSteps();

    metaproofSteps = reverse(metaproofSteps); ///

    const matchesMetastatementNode = metaproofSteps.some((metaproofStep) => {
      const metaproofStepMatchesMetastatementNode = metaproofStep.matchMetastatementNode(metastatementNode);

      if (metaproofStepMatchesMetastatementNode) {
        return true;
      }
    });

    return matchesMetastatementNode;
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

  isMetavariablePresentByMetavariableNode(metavariableNode, localContext) {
    const metavariable = this.findMetavariableByMetavariableNode(metavariableNode, localContext),
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

  findMetavariableByMetavariableNode(metavariableNode, localContext) {
    const node = metavariableNode,  ///
          metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const matches = metavariable.matchNode(node, localContext);

            if (matches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [],
          judgements = [],
          metavariables = [],
          metaproofSteps = [],
          localContext = new LocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps);

    return localContext;
  }

  static fromLocalContext(localContext) {
    const context = localContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [],
          judgements = [],
          metavariables = [],
          metaproofSteps = [];

    localContext = new LocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps);  ///

    return localContext;
  }

  static fromJSONAndFileContext(json, fileContext) {
    let { variables } = json;

    const variablesJSON = variables;

    variables = variablesJSON.map((variableJSON) => {
      const json = variableJSON,  ///
            variable = Variable.fromJSONAndFileContext(json, fileContext);

      return variable;
    });

    const context = fileContext,  ///
          proofSteps = [],
          equivalences = [],
          judgements = [],
          metavariables = [],
          metaproofSteps = [],
          localContext = new LocalContext(context, variables, proofSteps, equivalences, judgements, metavariables, metaproofSteps);  ///

    return localContext;
  }
}

Object.assign(LocalContext.prototype, contextMixins);

export default LocalContext;