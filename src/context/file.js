"use strict";

import { levels } from "necessary";
import { rewriteNodes } from "occam-grammar-utilities";

import { push } from "../utilities/array";
import { leastLineIndexFromNodeAndTokens, greatestLineIndexFromNodeAndTokens } from "../utilities/tokens";

const { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL, FATAL_LEVEL } = levels;

export default class FileContext {
  constructor(filePath, tokens, node, rules, types, axioms, variables, combinators, constructors, releaseContext) {
    this.filePath = filePath;
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

  getFilePath() {
    return this.filePath;
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

  trace(message, node) { this.log(node, TRACE_LEVEL, message); }

  debug(message, node) { this.log(node, DEBUG_LEVEL, message); }

  info(message, node) { this.log(node, INFO_LEVEL, message); }

  warning(message, node) { this.log(node, WARNING_LEVEL, message); }

  error(message, node) { this.log(node, ERROR_LEVEL, message); }

  fatal(message, node) { this.log(node, FATAL_LEVEL, message); }

  log(node, level, message) {
    const leastLineIndex = leastLineIndexFromNodeAndTokens(node, this.tokens),
          greatestLineIndex = greatestLineIndexFromNodeAndTokens(node, this.tokens);

    this.releaseContext.log(level, message, this.filePath, leastLineIndex, greatestLineIndex);
  }

  static fromReleaseContextAndFilePath(releaseContext, filePath) {
    const file = releaseContext.getFile(filePath),
          content = file.getContent(),
          tokens = releaseContext.tokenise(content),
          node = releaseContext.parse(tokens);

    rewriteNodes(node);

    const rules = [],
          types = [],
          axioms = [],
          variables = [],
          combinators = [],
          constructors = [],
          fileContext = new FileContext(filePath, tokens, node, rules, types, axioms, variables, combinators, constructors, releaseContext);

    return fileContext;
  }
}
