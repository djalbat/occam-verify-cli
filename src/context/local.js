"use strict";

import Variable from "../variable";
import Equality from "../equality";
import Collection from "../collection";
import fileMixins from "../mixins/file";
import loggingMixins from "../mixins/logging";

import { last, filter } from "../utilities/array";
import { mergeCollections, findCollectionByType, findCollectionByTerm, findCollectionByTerms } from "../utilities/collection";

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
      ...variables,
      ...this.variables
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

  getCollections() {
    let collections = this.context.getCollections();

    const collectionsA = collections, ///
          collectionsB = this.collections;

    collections = mergeCollections(collectionsA, collectionsB); ///

    return collections;
  }

  getEqualities() {
    const equalities = this.context.getEqualities();

    this.proofSteps.forEach((proofStep) => {
      const equality = Equality.fromProofStep(proofStep);

      if (equality !== null) {
        equalities.push(equality);
      }
    });

    return equalities;
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
    const equalityReflexive = equality.isReflexive();

    if (equalityReflexive) {
      ///
    } else {
      const leftTerm = equality.getLeftTerm(),
            rightTerm = equality.getRightTerm(),
            leftCollection = this.findCollectionByTerm(leftTerm),
            rightCollection = this.findCollectionByTerm(rightTerm);

      if (false) {
        ///
      } else if ((leftCollection === null) && (rightCollection === null)) {
        const collection = Collection.fromEquality(equality);

        this.addCollection(collection);
      } else if ((leftCollection !== null) && (rightCollection === null)) {
        debugger

      } else if ((leftCollection === null) && (rightCollection !== null)) {
        debugger

      } else if ((leftCollection !== null) && (rightCollection !== null)) {
        debugger

      }
    }
  }

  addVariable(variable) {
    const variableName = variable.getName();

    filter(this.variables, (variable) => {
      const name = variable.getName(),
            nameVariableName = (name === variableName);

      if (!nameVariableName) {
        return true;
      }
    });

    this.variables.push(variable);
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

  findCollectionByType(type) {
    const collections = this.getCollections(),
          collection = findCollectionByType(collections, type);

    return collection;
  }

  findCollectionByTerm(term) {
    const collections = this.getCollections(),
          collection = findCollectionByTerm(collections, term);

    return collection;
  }

  findCollectionByTerms(terms) {
    const collections = this.getCollections(),
          collection = findCollectionByTerms(collections, terms);

    return collection;
  }

  findVariableByVariableName(variableName) {
    const name = variableName,  ///
          variables = this.getVariables(),
          variable = variables.find((variable) => {
            const matches = variable.matchName(name);

            if (matches) {
              return true;
            }
          }) || null;

    return variable;
  }

  isVariablePresentByVariableName(variableName) {
    const variable = this.findVariableByVariableName(variableName),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isEqualityEqual(equality) {
    let equalityEqual;

    const equalityReflexive = equality.isReflexive();

    if (equalityReflexive) {
      equalityEqual = true;
    } else {
      const leftTerm = equality.getLeftTerm(),
            rightTerm = equality.getRightTerm(),
            terms = [
              leftTerm,
              rightTerm
            ],
            termsEqual = this.areTermsEqual(terms);

      equalityEqual = termsEqual; ///
    }

    return equalityEqual;
  }

  areTermsEqual(terms) {
    const collection = this.findCollectionByTerms(terms),
          termsEqual = (collection !== null);

    return termsEqual;
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

  static fromLocalContextAndAssignments(localContext, assignments) {
    const context = localContext,  ///
          variables = assignments.map((assignment) => {
            const variable = assignment.getVariable();

            return variable;
          }),
          proofSteps = [],
          collections = [];

    localContext = new LocalContext(context, variables, proofSteps, collections);

    return localContext;
  }
}

Object.assign(LocalContext.prototype, fileMixins);
Object.assign(LocalContext.prototype, loggingMixins);

export default LocalContext;
