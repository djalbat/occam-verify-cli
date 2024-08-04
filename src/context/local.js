"use strict";

import Variable from "../variable";
import Equivalence from "../equivalence";
import contextMixins from "../mixins/context";

import { last } from "../utilities/array";
import { mergeEquivalences,
         separateEquivalences,
         findEquivalenceByTerm,
         compressDefinedVariables,
         definedVariablesFromGroundedEquivalences,
         implicitlyGroundedEquivalencesFromRemainingEquivalencesAndDefinedVariables } from "../utilities/equivalences";

class LocalContext {
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
          localContext = this;  ///

    equivalences = mergeEquivalences(equivalencesA, equivalencesB, localContext); ///

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

  getMetavariables() { return this.context.getMetavariables(); }

  getTermType(term) {
    let termType;

    const equivalences = this.getEquivalences(),
          equivalence = findEquivalenceByTerm(equivalences, term);

    if (equivalence !== null) {
      const localContext = this,  ///
            equivalenceType = equivalence.getType(localContext);

      termType = equivalenceType;  ///
    } else {
      termType = term.getType();
    }

    return termType;
  }

  isVariableDefined(variable) {
    let variableDefined = false;

    const equivalences = this.getEquivalences(),
          remainingEquivalences = [],
          initiallyGroundedEquivalences = [];

    separateEquivalences(equivalences, remainingEquivalences, initiallyGroundedEquivalences);

    const initiallyGroundedEquivalencesLength = initiallyGroundedEquivalences.length;

    if (initiallyGroundedEquivalencesLength > 0) {
      let groundedEquivalences,
          implicitlyGroundedEquivalences,
          implicitlyGroundedEquivalencesLength;

      const context = this,
            definedVariables = [];

      groundedEquivalences = initiallyGroundedEquivalences; ///

      definedVariablesFromGroundedEquivalences(groundedEquivalences, definedVariables, context);

      implicitlyGroundedEquivalences = implicitlyGroundedEquivalencesFromRemainingEquivalencesAndDefinedVariables(remainingEquivalences, definedVariables);

      implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.length;

      while (implicitlyGroundedEquivalencesLength > 0) {
        groundedEquivalences = implicitlyGroundedEquivalences;  ///

        definedVariablesFromGroundedEquivalences(groundedEquivalences, definedVariables, context);

        implicitlyGroundedEquivalences = implicitlyGroundedEquivalencesFromRemainingEquivalencesAndDefinedVariables(remainingEquivalences, definedVariables);

        implicitlyGroundedEquivalencesLength = implicitlyGroundedEquivalences.length;
      }

      compressDefinedVariables(definedVariables);

      const definedVariablesIncludesVariable = definedVariables.includes(variable);

      variableDefined = definedVariablesIncludesVariable;  ///
    }

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
            const nodeMatches = variable.matchNode(node);

            if (nodeMatches) {
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

  matchStatement(statementNode) {
    let statementMatches = false;

    if (!statementMatches) {
      const proofStepMatchesStatement = this.proofSteps.some((proofStep) => {
        const proofStepMatchesStatement = proofStep.match(statementNode);

        if (proofStepMatchesStatement) {
          return true;
        }
      });

      statementMatches = proofStepMatchesStatement; ///
    }

    if (!statementMatches) {
      statementMatches = this.context.matchStatement(statementNode);
    }

    return statementMatches;
  }

  removeEquivalence(equivalence) {
    const index = this.equivalences.indexOf(equivalence),
          start = index,  ///
          deleteCount = 1;

    this.equivalences.splice(start, deleteCount);
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
          localContext = new LocalContext(context, variables, proofSteps, equivalences);

    return localContext;
  }

  static fromLocalContext(localContext) {
    const context = localContext,  ///
          variables = [],
          proofSteps = [],
          equivalences = [];

    localContext = new LocalContext(context, variables, proofSteps, equivalences);

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
          localContext = new LocalContext(context, variables, proofSteps, equivalences);

    return localContext;
  }
}

Object.assign(LocalContext.prototype, contextMixins);

export default LocalContext;
