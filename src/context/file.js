"use strict";

import { rewriteNodes } from "occam-grammar-utilities";

import { push } from "../utilities/array";
import { leastLineIndexFromNodeAndTokens, greatestLineIndexFromNodeAndTokens } from "../utilities/tokens";

export default class FileContext {
  constructor(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, combinators, constructors) {
    this.releaseContext = releaseContext;
    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
    this.types = types;
    this.rules = rules;
    this.axioms = axioms;
    this.lemmas = lemmas;
    this.theorems = theorems;
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

  getLabels(includeRelease = true) {
    const labels = [];

    this.rules.forEach((rule) => {
      const ruleLabels = rule.getLabels();

      push(labels, ruleLabels);
    });

    this.axioms.forEach((axiom) => {
      const axiomLabels = axiom.getLabels();

      push(labels, axiomLabels);
    });

    this.lemmas.forEach((lemma) => {
      const lemmaLabels = lemma.getLabels();

      push(labels, lemmaLabels);
    });

    this.theorems.forEach((theorem) => {
      const theoremLabels = theorem.getLabels();

      push(labels, theoremLabels);
    });

    if (includeRelease) {
      const releaseContextLabels = this.releaseContext.getLabels();

      push(labels, releaseContextLabels);
    }

    return labels;
  }

  getTypes(includeRelease = true) {
    const types = [];

    push(types, this.types);

    if (includeRelease) {
      const releaseContextTypes = this.releaseContext.getTypes();

      push(types, releaseContextTypes);
    }

    return types;
  }

  getRules(includeRelease = true) {
    const rules = []

    push(rules, this.rules);

    if (includeRelease) {
      const releaseContextRules = this.releaseContext.getRules();

      push(rules, releaseContextRules);
    }

    return rules;
  }

  getAxioms(includeRelease = true) {
    const axioms = [];

    push(axioms, this.axioms);

    if (includeRelease) {
      const releaseContextAxioms = this.releaseContext.getAxioms();

      push(axioms, releaseContextAxioms);
    }

    return axioms;
  }

  getLemmas(includeRelease = true) {
    const lemmas = [];

    push(lemmas, this.lemmas);

    if (includeRelease) {
      const releaseContextLemmas = this.releaseContext.getLemmas();

      push(lemmas, releaseContextLemmas);
    }

    return lemmas;
  }

  getTheorems(includeRelease = true) {
    const theorems = [];

    push(theorems, this.theorems);

    if (includeRelease) {
      const releaseContextTheorems = this.releaseContext.getTheorems();

      push(theorems, releaseContextTheorems);
    }

    return theorems;
  }

  getCombinators(includeRelease = true) {
    const combinators = [];

    push(combinators, this.combinators);

    if (includeRelease) {
      const releaseContextCombinators = this.releaseContext.getCombinators();

      push(combinators, releaseContextCombinators);
    }

    return combinators;
  }

  getConstructors(includeRelease = true) {
    const constructors = [];

    push(constructors, this.constructors);

    if (includeRelease) {
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

  findLemmaByReferenceName(referenceName) {
    const labelName = referenceName,  ///
          lemmas = this.getLemmas(),
          lemma = lemmas.find((lemma) => {
            const lemmaMatchesLabelName = lemma.matchLabelName(labelName);

            if (lemmaMatchesLabelName) {
              return true;
            }
          }) || null;

    return lemma;
  }

  findTheoremByReferenceName(referenceName) {
    const labelName = referenceName,  ///
          theorems = this.getTheorems(),
          theorem = theorems.find((theorem) => {
            const theoremMatchesLabelName = theorem.matchLabelName(labelName);

            if (theoremMatchesLabelName) {
              return true;
            }
          }) || null;

    return theorem;
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

  addLemma(lemma) {
    this.lemmas.push(lemma);
  }

  addTheorem(theorem) {
    this.theorems.push(theorem);
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

    this.types.forEach((type) => {
      const typeJSON = type.toJSON();

      json.push(typeJSON);
    });

    this.rules.forEach((rule) => {
      const ruleJSON = rule.toJSON();

      json.push(ruleJSON);
    });

    this.axioms.forEach((axiom) => {
      const axiomJSON = axiom.toJSON();

      json.push(axiomJSON);
    });

    this.theorems.forEach((theorem) => {
      const theoremJSON = theorem.toJSON();

      json.push(theoremJSON);
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

    const types = [],
          rules = [],
          axioms = [],
          lemmas = [],
          theorems = [],
          variables = [],
          combinators = [],
          constructors = [],
          fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, combinators, constructors);

    return fileContext;
  }
}
