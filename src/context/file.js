"use strict";

import { rewriteNodes } from "occam-grammar-utilities";

import { push } from "../utilities/array";
import { leastLineIndexFromNodeAndTokens, greatestLineIndexFromNodeAndTokens } from "../utilities/tokens";

export default class FileContext {
  constructor(releaseContext, filePath, tokens, node, rules, types, axioms, variables, combinators, constructors) {
    this.releaseContext = releaseContext;
    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
    this.rules = rules;
    this.types = types;
    this.axioms = axioms;
    this.variables = variables;
    this.combinators = combinators;
    this.constructors = constructors;
  }

  getReleaseContext() {
    return this.releaseContext;
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

  getVariables() {
    return this.variables;
  }

  getLabels(includeReleaseContext = true) {
    const labels = [];

    this.rules.forEach((rule) => {
      const ruleLabels = rule.getLabels();

      push(labels, ruleLabels);
    });

    this.axioms.forEach((axiom) => {
      const axiomLabels = axiom.getLabels();

      push(labels, axiomLabels);
    });

    if (includeReleaseContext) {
      const releaseContextLabels = this.releaseContext.getLabels();

      push(labels, releaseContextLabels);
    }

    return labels;
  }

  getRules(includeReleaseContext = true) {
    const rules = []

    push(rules, this.rules);

    if (includeReleaseContext) {
      const releaseContextRules = this.releaseContext.getRules();

      push(rules, releaseContextRules);
    }

    return rules;
  }

  getTypes(includeReleaseContext = true) {
    const types = [];

    push(types, this.types);

    if (includeReleaseContext) {
      const releaseContextTypes = this.releaseContext.getTypes();

      push(types, releaseContextTypes);
    }

    return types;
  }

  getAxioms(includeReleaseContext = true) {
    const axioms = [];

    push(axioms, this.axioms);

    if (includeReleaseContext) {
      const releaseContextAxioms = this.releaseContext.getAxioms();

      push(axioms, releaseContextAxioms);
    }

    return axioms;
  }

  getCombinators(includeReleaseContext = true) {
    const combinators = [];

    push(combinators, this.combinators);

    if (includeReleaseContext) {
      const releaseContextCombinators = this.releaseContext.getCombinators();

      push(combinators, releaseContextCombinators);
    }

    return combinators;
  }

  getConstructors(includeReleaseContext = true) {
    const constructors = [];

    push(constructors, this.constructors);

    if (includeReleaseContext) {
      const releaseContextConstructors = this.releaseContext.getConstructors();

      push(constructors, releaseContextConstructors);
    }

    return constructors;
  }

  getAssertions() {
    const assertions = [];  ///

    return assertions;
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

  findLabelByLabelName(labelName) {
    const name = labelName,  ///
          labels = this.getLabels(),
          label = labels.find((label) => {
            const matches = label.matchName(name);

            if (matches) {
              return true;
            }
          }) || null;

    return label;
  }

  findRuleByReferenceName(referenceName) {
    const labelName = referenceName,  ///
          rules = this.getRules(),
          rule = rules.find((rule) => {
            const ruleMatchesLabelName = rule.matchLabelName(labelName);

            if (ruleMatchesLabelName) {
              return true;
            }
          }) || null;

    return rule;
  }

  findAxiomByReferenceName(referenceName) {
    const labelName = referenceName,  ///
          axioms = this.getAxioms(),
          axiom = axioms.find((axiom) => {
            const axiomMatchesLabelName = axiom.matchLabelName(labelName);

            if (axiomMatchesLabelName) {
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

  isTypePresentByTypeName(typeName) {
    const type = this.findTypeByTypeName(typeName),
          typePresent = (type !== null);

    return typePresent;
  }

  isLabelPresentByLabelName(labelName) {
    const label = this.findLabelByLabelName(labelName),
          labelPresent = (label !== null);

    return labelPresent;
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

  halt(node) {
    const leastLineIndex = leastLineIndexFromNodeAndTokens(node, this.tokens),
          greatestLineIndex = greatestLineIndexFromNodeAndTokens(node, this.tokens);

    this.releaseContext.halt(this.filePath, leastLineIndex, greatestLineIndex);
  }

  begin(node) {
    const leastLineIndex = leastLineIndexFromNodeAndTokens(node, this.tokens),
          greatestLineIndex = greatestLineIndexFromNodeAndTokens(node, this.tokens);

    this.releaseContext.begin(this.filePath, leastLineIndex, greatestLineIndex);
  }

  complete(node) {
    const leastLineIndex = leastLineIndexFromNodeAndTokens(node, this.tokens),
          greatestLineIndex = greatestLineIndexFromNodeAndTokens(node, this.tokens);

    this.releaseContext.complete(this.filePath, leastLineIndex, greatestLineIndex);
  }

  toJSON() {
    const json = [];

    this.rules.forEach((rule) => {
      const ruleJSON = rule.toJSON();

      json.push(ruleJSON);
    });

    this.types.forEach((type) => {
      const typeJSON = type.toJSON();

      json.push(typeJSON);
    });

    this.axioms.forEach((axiom) => {
      const axiomJSON = axiom.toJSON();

      json.push(axiomJSON);
    });

    this.combinators.forEach((combinator) => {
      const combinatorJSON = combinator.toJSON();

      json.push(combinatorJSON);
    });

    this.constructors.forEach((constructor) => {
      const constructorJSON = constructor.toJSON();

      json.push(constructorJSON)
    });

    return json;
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
          fileContext = new FileContext(releaseContext, filePath, tokens, node, rules, types, axioms, variables, combinators, constructors);

    return fileContext;
  }
}
