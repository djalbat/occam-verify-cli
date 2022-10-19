"use strict";

import { rewriteNodes } from "occam-grammar-utilities";

import { push } from "../utilities/array";

export default class FileContext {
  constructor(tokens, node, rules, types, axioms, variables, combinators, constructors, releaseContext) {
    this.tokens = tokens;
    this.node = node;
    this.rules = rules;
    this.types = types;
    this.axioms = axioms;
    this.variables = variables;
    this.combinators = combinators;
    this.constructors = constructors;
    this.releaseContext = releaseContext;
  }

  getTokens() {
    return this.tokens;
  }

  getNode() {
    return this.node;
  }

  getRules(bubble = true) {
    const rules = [
      ...this.rules
    ];

    if (bubble) {
      const releaseContextRules = this.releaseContext.getRules();

      push(rules, releaseContextRules);
    }

    return rules;
  }

  getTypes(bubble = true) {
    const types = [
      ...this.types
    ];

    if (bubble) {
      const releaseContextTypes = this.releaseContext.getTypes();

      push(types, releaseContextTypes);
    }

    return types;
  }

  getAxioms(bubble = true) {
    const axioms = [
      ...this.axioms
    ];

    if (bubble) {
      const releaseContextAxioms = this.releaseContext.getAxioms();

      push(axioms, releaseContextAxioms);
    }

    return axioms;
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

  getVariables() {
    return this.variables;
  }

  getCombinators(bubble = true) {
    const combinators = [
      ...this.combinators
    ];

    if (bubble) {
      const releaseContextCombinators = this.releaseContext.getCombinators();

      push(combinators, releaseContextCombinators);
    }

    return combinators;
  }

  getConstructors(bubble = true) {
    const constructors = [
      ...this.constructors
    ];

    if (bubble) {
      const releaseContextConstructors = this.releaseContext.getConstructors();

      push(constructors, releaseContextConstructors);
    }

    return constructors;
  }

  getReleaseContext() {
    return this.releaseContext;
  }

  getMetaAssertions() {
    const metaAssertions = [];

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
          variable = this.variables.find((variable) => {
            const matches = variable.matchName(name);

            if (matches) {
              return true;
            }
          }) || null;

    return variable;
  }

  isDerived() {
    const derived = false;

    return derived;
  }

  isLabelPresent(label) {
    const labels = this.getLabels(),
          labelsIncludesLabel = labels.includes(label),
          labelPresent = labelsIncludesLabel; ///

    return labelPresent;
  }

  matchMetaAssertion(metaAssertion) {
    const metaAssertionMatches = false;

    return metaAssertionMatches;
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

  trace(message) { this.releaseContext.trace(message); }

  debug(message) { this.releaseContext.debug(message); }

  info(message) { this.releaseContext.info(message); }

  warning(message) { this.releaseContext.warning(message); }

  error(message) { this.releaseContext.error(message); }

  fatal(message) { this.releaseContext.fatal(message); }

  static fromReleaseContextAndFilePath(releaseContext, filePath) {
    const fileContent = releaseContext.getFileContent(filePath),
          content = fileContent,  ///
          tokens = releaseContext.tokenise(content),
          node = releaseContext.parse(tokens);

    rewriteNodes(node);

    const rules = [],
          types = [],
          axioms = [],
          variables = [],
          combinators = [],
          constructors = [],
          fileContext = new FileContext(tokens, node, rules, types, axioms, variables, combinators, constructors, releaseContext);

    return fileContext;
  }
}
