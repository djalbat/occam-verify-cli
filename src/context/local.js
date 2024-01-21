"use strict";

import Variable from "../variable";
import Collection from "../collection";
import contextMixins from "../mixins/context";

import { last } from "../utilities/array";
import { mergeCollections, findCollectionByTerm } from "../utilities/collection";

class LocalContext {
  constructor(context, variables, proofSteps, collections) {
    this.context = context;
    this.variables = variables;
    this.proofSteps = proofSteps;
    this.collections = collections;
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
      ...this.proofSteps,
      ...proofSteps
    ];

    return proofSteps;
  }

  getCollections() {
    let collections = this.context.getCollections();

    const collectionsA = this.collections, ///
          collectionsB = collections,
          localContext = this;  ///

    collections = mergeCollections(collectionsA, collectionsB, localContext); ///

    return collections;
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

  addEquality(equality) {
    let equalityAdded;

    const equalityReflexive = equality.isReflexive();

    if (equalityReflexive) {
      equalityAdded = true; ///
    } else {
      const leftTerm = equality.getLeftTerm(),
            rightTerm = equality.getRightTerm(),
            leftCollection = findCollectionByTerm(this.collections, leftTerm),
            rightCollection = findCollectionByTerm(this.collections, rightTerm);

      if (false) {
        ///
      } else if ((leftCollection === null) && (rightCollection === null)) {
        const collection = Collection.fromEquality(equality);

        this.addCollection(collection);

        equalityAdded = true;
      } else if ((leftCollection !== null) && (rightCollection === null)) {
        const term = rightTerm, ///
              collection = leftCollection;  ///

        collection.addTerm(term);

        equalityAdded = true;
      } else if ((leftCollection === null) && (rightCollection !== null)) {
        const term = leftTerm, ///
              collection = rightCollection;  ///

        collection.addTerm(term);

        equalityAdded = true;
      } else if ((leftCollection !== null) && (rightCollection !== null)) {

        debugger

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

  addCollection(collection) {
    this.collections.push(collection);
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
          collections = [],
          localContext = new LocalContext(context, variables, proofSteps, collections);

    return localContext;
  }

  static fromLocalContext(localContext) {
    const context = localContext,  ///
          variables = [],
          proofSteps = [],
          collections = [];

    localContext = new LocalContext(context, variables, proofSteps, collections);

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
          collections = [],
          localContext = new LocalContext(context, variables, proofSteps, collections);

    return localContext;
  }
}

Object.assign(LocalContext.prototype, contextMixins);

export default LocalContext;
