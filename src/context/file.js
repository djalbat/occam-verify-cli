"use strict";

import { rewriteNodes } from "occam-grammar-utilities";

import loggingMixins from "../mixins/logging";

import { push } from "../utilities/array";
import { leastLineIndexFromNodeAndTokens, greatestLineIndexFromNodeAndTokens } from "../utilities/tokens";

class FileContext {
  constructor(filePath, context, tokens, node, rules, types, axioms, variables, combinators, constructors) {
    this.filePath = filePath;
    this.context = context;
    this.tokens = tokens;
    this.node = node;
    this.rules = rules;
    this.types = types;
    this.axioms = axioms;
    this.variables = variables;
    this.combinators = combinators;
    this.constructors = constructors;
  }

  getFilePath() {
    return this.filePath;
  }

  getContext() {
    return this.context;
  }

  getTokens() {
    return this.tokens;
  }

  getNode() {
    return this.node;
  }

  getVariables() {
    return this.variables;
  }

  getRules(bubble = true) {
    const rules = [
      ...this.rules
    ];

    if (bubble) {
      const releaseContextRules = this.context.getRules();

      push(rules, releaseContextRules);
    }

    return rules;
  }

  getTypes(bubble = true) {
    const types = [
      ...this.types
    ];

    if (bubble) {
      const releaseContextTypes = this.context.getTypes();

      push(types, releaseContextTypes);
    }

    return types;
  }

  getAxioms(bubble = true) {
    const axioms = [
      ...this.axioms
    ];

    if (bubble) {
      const releaseContextAxioms = this.context.getAxioms();

      push(axioms, releaseContextAxioms);
    }

    return axioms;
  }

  getCombinators(bubble = true) {
    const combinators = [
      ...this.combinators
    ];

    if (bubble) {
      const releaseContextCombinators = this.context.getCombinators();

      push(combinators, releaseContextCombinators);
    }

    return combinators;
  }

  getConstructors(bubble = true) {
    const constructors = [
      ...this.constructors
    ];

    if (bubble) {
      const releaseContextConstructors = this.context.getConstructors();

      push(constructors, releaseContextConstructors);
    }

    return constructors;
  }

  getMetaAssertions() {
    const metaAssertions = [];  ///

    return metaAssertions;
  }

  findTypeByTypeName(typeName) {
    const types = this.getTypes(),
          type = types.find((type) => {
            const matches = type.matchTypeName(typeName);

            if (matches) {
              return true;
            }
          }) || null;

    return type;
  }

  findRuleByReferenceName(referenceName) {
    const label = referenceName,  ///
          rules = this.getRules(),
          rule = rules.find((rule) => {
            const ruleLabels = rule.getLabels(),
                  ruleLabelsIncludesLabel = ruleLabels.includes(label);

            if (ruleLabelsIncludesLabel) {
              return true;
            }
          }) || null;

    return rule;
  }

  findAxiomByReferenceName(referenceName) {
    const label = referenceName,  ///
          axioms = this.getAxioms(),
          axiom = axioms.find((axiom) => {
            const axiomLabels = axiom.getLabels(),
                axiomLabelsIncludesLabel = axiomLabels.includes(label);

            if (axiomLabelsIncludesLabel) {
              return true;
            }
          }) || null;

    return axiom;
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

  isLabelPresent(label) {
    const labels = this.getLabels(),
        labelsIncludesLabel = labels.includes(label),
        labelPresent = labelsIncludesLabel; ///

    return labelPresent;
  }

  isTypePresentByTypeName(typeName) {
    const type = this.findTypeByTypeName(typeName),
        typePresent = (type !== null);

    return typePresent;
  }

  isVariablePresentByVariableName(variableName) {
    const variable = this.findVariableByVariableName(variableName),
        variablePresent = (variable !== null);

    return variablePresent;
  }

  getLabels() {
    const axioms = this.getAxioms(),
          labels = axioms.reduce((labels, axiom) => {
            const axiomLabels = axiom.getLabels();

            push(labels, axiomLabels);

            return labels;
          }, []);

    return labels;
  }

  addType(type) {
    this.types.push(type);
  }

  addRule(rule) {
    this.rules.push(rule);
  }

  addAxiom(axiom) {
    this.axioms.push(axiom);
  }

  addVariable(variable) {
    this.variables.push(variable);
  }

  addCombinator(combinator) {
    this.combinators.push(combinator);
  }

  addConstructor(constructor) {
    this.constructors.push(constructor);
  }

  halt(node) {
    const leastLineIndex = leastLineIndexFromNodeAndTokens(node, this.tokens),
          greatestLineIndex = greatestLineIndexFromNodeAndTokens(node, this.tokens);

    this.context.halt(this.filePath, leastLineIndex, greatestLineIndex);
  }

  begin(node) {
    const leastLineIndex = leastLineIndexFromNodeAndTokens(node, this.tokens),
          greatestLineIndex = greatestLineIndexFromNodeAndTokens(node, this.tokens);

    this.context.begin(this.filePath, leastLineIndex, greatestLineIndex);
  }

  complete(node) {
    const leastLineIndex = leastLineIndexFromNodeAndTokens(node, this.tokens),
          greatestLineIndex = greatestLineIndexFromNodeAndTokens(node, this.tokens);

    this.context.complete(this.filePath, leastLineIndex, greatestLineIndex);
  }

  static fromReleaseContextAndFilePath(releaseContext, filePath) {
    const file = releaseContext.getFile(filePath),
          content = file.getContent(),
          tokens = releaseContext.tokenise(content),
          node = releaseContext.parse(tokens);

    rewriteNodes(node);

    const context = releaseContext, ///
          rules = [],
          types = [],
          axioms = [],
          variables = [],
          combinators = [],
          constructors = [],
          fileContext = new FileContext(filePath, context, tokens, node, rules, types, axioms, variables, combinators, constructors);

    return fileContext;
  }
}

Object.assign(FileContext.prototype, loggingMixins);

export default FileContext;
