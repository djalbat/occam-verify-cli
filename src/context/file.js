"use strict";

import { levels } from "necessary";
import { rewriteNodes } from "occam-grammar-utilities";

import { push } from "../utilities/array";
import { nodeAsString, nodesAsString } from "../utilities/string";
import { leastLineIndexFromNodeAndTokens, greatestLineIndexFromNodeAndTokens } from "../utilities/tokens";

const { TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL, FATAL_LEVEL } = levels;

export default class FileContext {
  constructor(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, conjectures, combinators, constructors, variables, metavariables) {
    this.releaseContext = releaseContext;
    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
    this.types = types;
    this.rules = rules;
    this.axioms = axioms;
    this.lemmas = lemmas;
    this.theorems = theorems;
    this.conjectures = conjectures;
    this.combinators = combinators;
    this.constructors = constructors;
    this.variables = variables;
    this.metavariables = metavariables;
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

  getProofSteps() {
    const proofSteps = [];  ///

    return proofSteps;
  }

  getMetaproofSteps() {
    const metaproofSteps = [];  ///

    return metaproofSteps;
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

  getConjectures(includeRelease = true) {
    const conjectures = [];

    push(conjectures, this.conjectures);

    if (includeRelease) {
      const releaseContextConjectures = this.releaseContext.getConjectures();

      push(conjectures, releaseContextConjectures);
    }

    return conjectures;
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

  getVariables() {
    return this.variables;
  }

  getMetavariables() {
    return this.metavariables;
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

  findConjectureByReferenceName(referenceName) {
    const labelName = referenceName,  ///
          conjectures = this.getConjectures(),
          conjecture = conjectures.find((conjecture) => {
            const conjectureMatchesLabelName = conjecture.matchLabelName(labelName);

            if (conjectureMatchesLabelName) {
              return true;
            }
          }) || null;

    return conjecture;
  }

  isLabelPresentByLabelName(labelName) {
    const label = this.findLabelByLabelName(labelName),
          labelPresent = (label !== null);

    return labelPresent;
  }

  isTypePresentByTypeName(typeName) {
    const type = this.findTypeByTypeName(typeName),
          typePresent = (type !== null);

    return typePresent;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  nodesAsString(node) {
    const string = nodesAsString(node, this.tokens);

    return string;
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

  matchStatement(statementNode) {
    const statementMatches = false;

    return statementMatches;
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

  trace(node, message) {
    const level = TRACE_LEVEL;

    this.log(node, level, message);
  }

  debug(node, message) {
    const level = DEBUG_LEVEL;

    this.log(node, level, message);
  }

  info(node, message) {
    const level = INFO_LEVEL;

    this.log(node, level, message);
  }

  warning(node, message) {
    const level = WARNING_LEVEL;

    this.log(node, level, message);
  }

  error(node, message) {
    const level = ERROR_LEVEL;

    this.log(node, level, message);
  }

  fatal(node, message) {
    const level = FATAL_LEVEL;

    this.log(node, level, message);
  }

  log(node, level, message) {
    const filePath = this.filePath,
          leastLineIndex = leastLineIndexFromNodeAndTokens(node, this.tokens),
          greatestLineIndex = greatestLineIndexFromNodeAndTokens(node, this.tokens);

    this.releaseContext.log(level, message, filePath, leastLineIndex, greatestLineIndex);
  }

  toJSON() {
    const json = [];

    this.types.forEach((type) => {
      const typeJSON = type.toJSON(this.tokens);

      json.push(typeJSON);
    });

    this.rules.forEach((rule) => {
      const ruleJSON = rule.toJSON(this.tokens);

      json.push(ruleJSON);
    });

    this.axioms.forEach((axiom) => {
      const axiomJSON = axiom.toJSON(this.tokens);

      json.push(axiomJSON);
    });

    this.lemmas.forEach((lemma) => {
      const lemmaJSON = lemma.toJSON(this.tokens);

      json.push(lemmaJSON);
    });

    this.theorems.forEach((theorem) => {
      const theoremJSON = theorem.toJSON(this.tokens);

      json.push(theoremJSON);
    });

    this.conjectures.forEach((conjecture) => {
      const conjectureJSON = conjecture.toJSON(this.tokens);

      json.push(conjectureJSON);
    });

    this.combinators.forEach((combinator) => {
      const combinatorJSON = combinator.toJSON(this.tokens);

      json.push(combinatorJSON);
    });

    this.constructors.forEach((constructor) => {
      const constructorJSON = constructor.toJSON(this.tokens);

      json.push(constructorJSON)
    });

    return json;
  }

  static fromReleaseContextAndFilePath(releaseContext, filePath) {
    const file = releaseContext.getFile(filePath),
          content = file.getContent(),
          tokens = releaseContext.tokenise(content),
          node = releaseContext.parse(tokens);

    if (node !== null) {
      rewriteNodes(node);
    }

    const types = [],
          rules = [],
          axioms = [],
          lemmas = [],
          theorems = [],
          conjectures = [],
          combinators = [],
          constructors = [],
          variables = [],
          metavariables = [],
          fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, conjectures, combinators, constructors, variables, metavariables);

    return fileContext;
  }
}
