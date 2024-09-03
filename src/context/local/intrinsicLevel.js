"use strict";

import Variable from "../../variable";
import Equivalence from "../../equivalence";
import contextMixins from "../../mixins/context";

import { last, reverse } from "../../utilities/array";
import { mergeEquivalences, findEquivalenceByTerm, groundedTermsAndDefinedVariablesFromFromEquivalences } from "../../utilities/equivalences";

class IntrinsicLevelLocalContext {
  constructor(context, variables, proofSteps, equivalences) {
    this.context = context;
    this.variables = variables;
    this.proofSteps = proofSteps;
    this.equivalences = equivalences;
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
          intrinsicLevelLocalContext = this;  ///

    equivalences = mergeEquivalences(equivalencesA, equivalencesB, intrinsicLevelLocalContext); ///

    return equivalences;
  }

  isIntrinsicLevel() {
    const intrinsicLevel = true;

    return intrinsicLevel;
  }

  getLastProofStep() {
    let lastProofStep = null;

    const proofStepsLength = this.proofSteps.length;

    if (proofStepsLength > 0) {
      lastProofStep = last(this.proofSteps);
    }

    return lastProofStep;
  }

  getTermType(term) {
    let termType;

    const equivalences = this.getEquivalences(),
          equivalence = findEquivalenceByTerm(equivalences, term);

    if (equivalence !== null) {
      const intrinsicLevelLocalContext = this,  ///
            equivalenceType = equivalence.getType(intrinsicLevelLocalContext);

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

  findMetaTypeByMetaTypeNode(metaTypeNode) { return this.context.findMetaTypeByMetaTypeNode(metaTypeNode); }

  isVariablePresentByVariableNode(variableNode) {
    const variable = this.findVariableByVariableNode(variableNode),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  toJSON(tokens) {
    const variables = this.variables.map((variable) => {
            const variableJSON = variable.toJSON(tokens);

            variable = variableJSON;

            return variable;
          }),
          json = {
            variables
          };

    return json;
  }

  static fromFileContext(fileContext) {
    const context = fileContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [],
          intrinsicLevelLocalContext = new IntrinsicLevelLocalContext(context, variables, proofSteps, equivalences);

    return intrinsicLevelLocalContext;
  }

  static fromLocalContext(localContext) {
    const context = localContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [],
          intrinsicLevelLocalContext = new IntrinsicLevelLocalContext(context, variables, proofSteps, equivalences);

    return intrinsicLevelLocalContext;
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
          intrinsicLevelLocalContext = new IntrinsicLevelLocalContext(context, variables, proofSteps, equivalences);

    return intrinsicLevelLocalContext;
  }
}

Object.assign(IntrinsicLevelLocalContext.prototype, contextMixins);

export default IntrinsicLevelLocalContext;