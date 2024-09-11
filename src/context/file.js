"use strict";

import metaTypes from "../metaTypes";
import topLevelVerifier from "../verifier/topLevel";

import { push } from "../utilities/array";
import { objectType } from "../type";
import { nodeAsString, nodesAsString } from "../utilities/string";

export default class FileContext {
  constructor(releaseContext, fileContent, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, constructors, metatheorems, metavariables) {
    this.releaseContext = releaseContext;
    this.fileContent = fileContent;
    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
    this.types = types;
    this.rules = rules;
    this.axioms = axioms;
    this.lemmas = lemmas;
    this.theorems = theorems;
    this.variables = variables;
    this.metaLemmas = metaLemmas;
    this.conjectures = conjectures;
    this.combinators = combinators;
    this.constructors = constructors;
    this.metatheorems = metatheorems;
    this.metavariables = metavariables;
  }

  getReleaseContext() {
    return this.releaseContext;
  }

  getFileContent() {
    return this.fileContent;
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

  getLexer() { return this.releaseContext.getLexer(); }

  getParser() { return this.releaseContext.getParser(); }

  getTermType(term) {
    const termType = term.getType();

    return termType;
  }

  getProofSteps() {
    const proofSteps = [];  ///

    return proofSteps;
  }

  getEquivalences() {
    const equivalences = []; ///

    return equivalences;
  }

  getMetaproofSteps() {
    const metaproofSteps = [];  ///

    return metaproofSteps;
  }

  getJudgements() {
    const judgements = [];

    return judgements;
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

    this.conjectures.forEach((conjecture) => {
      const conjectureLabels = conjecture.getLabels();

      push(labels, conjectureLabels);
    });

    this.metatheorems.forEach((metatheorem) => {
      const metatheoremLabels = metatheorem.getLabels();

      push(labels, metatheoremLabels);
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

  getVariables(includeRelease = true) {
    return this.variables;
  }

  getMetaLemmas(includeRelease = true) {
    const metaLemmas = [];

    push(metaLemmas, this.metaLemmas);

    if (includeRelease) {
      const releaseContextMetaLemmas = this.releaseContext.getMetaLemmas();

      push(metaLemmas, releaseContextMetaLemmas);
    }

    return metaLemmas;
  }

  getMetaTypes(includeRelease = true) {
    return metaTypes;
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

  getMetatheorems(includeRelease = true) {
    const metatheorems = [];

    push(metatheorems, this.metatheorems);

    if (includeRelease) {
      const releaseContextMetatheorems = this.releaseContext.getMetatheorems();

      push(metatheorems, releaseContextMetatheorems);
    }

    return metatheorems;
  }

  getMetavariables(includeRelease = true) {
    return this.metavariables;
  }

  findTypeByTypeName(typeName) {
    let types = this.getTypes();

    types.push(objectType);

    const type = types.find((type) => {
      const matches = type.matchTypeName(typeName);

      if (matches) {
        return true;
      }
    }) || null;

    return type;
  }

  findTypeByTypeNode(typeNode) {
    let types = this.getTypes();

    types.push(objectType);

    const type = types.find((type) => {
      const matches = type.matchTypeNode(typeNode);

      if (matches) {
        return true;
      }
    }) || null;

    return type;
  }

  findMetavariableByName(name) {
    const metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const matches = metavariable.matchName(name);

            if (matches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  findVariableByVariableNode(variableNode) {
    const node = variableNode,  ///
          variables = this.getVariables(),
          variable = variables.find((variable) => {
            const variableMatchesNode = variable.matchNode(node);

            if (variableMatchesNode) {
              return true;
            }
          }) || null;

    return variable;
  }

  findMetaTypeByMetaTypeNode(metaTypeNode) {
    const metaTypes = this.getMetaTypes(),
          metaType = metaTypes.find((metaType) => {
            const matches = metaType.matchMetaTypeNode(metaTypeNode);

            if (matches) {
              return true;
            }
          }) || null;

    return metaType;
  }

  findLabelByMetavariableNode(metavariableNode) {
    const labels = this.getLabels(),
          label = labels.find((label) => {
            const matches = label.matchMetavariableNode(metavariableNode);

            if (matches) {
              return true;
            }
          }) || null;

    return label;
  }

  findRuleByMetavariableNode(metavariableNode) {
    const rules = this.getRules(),
          rule = rules.find((rule) => {
            const ruleMatchesMetavariableNode = rule.matchMetavariableNode(metavariableNode);

            if (ruleMatchesMetavariableNode) {
              return true;
            }
          }) || null;

    return rule;
  }

  findAxiomByMetavariableNode(metavariableNode) {
    const axioms = this.getAxioms(),
          axiom = axioms.find((axiom) => {
            const axiomMatchesMetavariableNode = axiom.matchMetavariableNode(metavariableNode);

            if (axiomMatchesMetavariableNode) {
              return true;
            }
          }) || null;

    return axiom;
  }

  findLemmaByMetavariableNode(metavariableNode) {
    const lemmas = this.getLemmas(),
          lemma = lemmas.find((lemma) => {
            const lemmaMatchesMetavariableNode = lemma.matchMetavariableNode(metavariableNode);

            if (lemmaMatchesMetavariableNode) {
              return true;
            }
          }) || null;

    return lemma;
  }

  findTheoremByMetavariableNode(metavariableNode) {
    const theorems = this.getTheorems(),
          theorem = theorems.find((theorem) => {
            const theoremMatchesMetavariableNode = theorem.matchMetavariableNode(metavariableNode);

            if (theoremMatchesMetavariableNode) {
              return true;
            }
          }) || null;

    return theorem;
  }

  findMetaLemmaByMetavariableNode(metavariableNode) {
    const metaLemmas = this.getMetaLemmas(),
          metaLemma = metaLemmas.find((metaLemma) => {
            const metaLemmaMatchesMetavariableNode = metaLemma.matchMetavariableNode(metavariableNode);

            if (metaLemmaMatchesMetavariableNode) {
              return true;
            }
          }) || null;

    return metaLemma;
  }

  findConjectureByMetavariableNode(metavariableNode) {
    const conjectures = this.getConjectures(),
          conjecture = conjectures.find((conjecture) => {
            const conjectureMatchesMetavariableNode = conjecture.matchMetavariableNode(metavariableNode);

            if (conjectureMatchesMetavariableNode) {
              return true;
            }
          }) || null;

    return conjecture;
  }

  findMetatheoremByMetavariableNode(metavariableNode) {
    const metatheorems = this.getMetatheorems(),
          metatheorem = metatheorems.find((metatheorem) => {
            const metatheoremMatchesMetavariableNode = metatheorem.matchMetavariableNode(metavariableNode);

            if (metatheoremMatchesMetavariableNode) {
              return true;
            }
          }) || null;

    return metatheorem;
  }

  findMetavariableByMetavariableNode(metavariableNode) {
    const node = metavariableNode,  ///
          metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const matches = metavariable.matchNode(node);

            if (matches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  isTypePresentByTypeName(typeName) {
    const type = this.findTypeByTypeName(typeName),
          typePresent = (type !== null);

    return typePresent;
  }

  isTypePresentByTypeNode(typeNode) {
    const type = this.findTypeByTypeNode(typeNode),
          typePresent = (type !== null);

    return typePresent;
  }

  isMetavariablePresentByName(name) {
    const metavariable = this.findMetavariableByName(name),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  isVariablePresentByVariableNode(variableNode) {
    const variable = this.findVariableByVariableNode(variableNode),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isLabelPresentByMetavariableNode(metavariableNode) {
    const label = this.findLabelByMetavariableNode(metavariableNode),
          labelPresent = (label !== null);

    return labelPresent;
  }

  isMetavariablePresentByMetavariableNode(metavariableNode) {
    const metavariable = this.findMetavariableByMetavariableNode(metavariableNode),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  nodesAsString(node) {
    const string = nodesAsString(node, this.tokens);

    return string;
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

  addMetaLemma(metaLemma) {
    this.metaLemmas.push(metaLemma);
  }

  addConjecture(conjecture) {
    this.conjectures.push(conjecture);
  }

  addCombinator(combinator) {
    this.combinators.push(combinator);
  }

  addConstructor(constructor) {
    this.constructors.push(constructor);
  }

  addMetatheorem(metatheorem) {
    this.metatheorems.push(metatheorem);
  }

  addMetavariable(metavariable) {
    let metavariableAdded = false;

    const name = metavariable.getName(),
          metavariablePresent = this.metavariables.some((metavariable) => {
            const metavariableMatchesNode = metavariable.matchName(name);

            if (metavariableMatchesNode) {
              return true;
            }
          });

    if (!metavariablePresent) {
      this.metavariables.push(metavariable);

      metavariableAdded = true;
    }

    return metavariableAdded;
  }

  trace(message, node) { this.releaseContext.trace(message, node, this.tokens, this.filePath); }

  debug(message, node) { this.releaseContext.debug(message, node, this.tokens, this.filePath); }

  info(message, node) { this.releaseContext.info(message, node, this.tokens, this.filePath); }

  warning(message, node) { this.releaseContext.warning(message, node, this.tokens, this.filePath); }

  error(message, node) { this.releaseContext.error(message, node, this.tokens, this.filePath); }

  fatal(message, node) { this.releaseContext.fatal(message, node, this.tokens, this.filePath); }

  toJSON() {
    const filePath =  this.filePath,
          fileContent = this.fileContent,
          json = {
            filePath,
            fileContent
          };

    return json;
  }

  verify() {
    const lexer = this.getLexer(),
          parser = this.getParser(),
          content = this.fileContent,  ///
          fileContext = this;

    this.tokens = lexer.tokenise(content);

    this.node = parser.parse(this.tokens);

    const verified = topLevelVerifier.verify(this.node, fileContext);

    return verified;
  }

  static fromJSONAndReleaseContext(json, releaseContext) {
    const { fileContent, filePath } = json,
          tokens = null,
          node = null,
          types = [],
          rules = [],
          axioms = [],
          lemmas = [],
          theorems = [],
          variables = [],
          metaLemmas = [],
          conjectures = [],
          combinators = [],
          constructors = [],
          metatheorems = [],
          metavariables = [],
          fileContext = new FileContext(releaseContext, fileContent, filePath, tokens, node, types, rules, axioms, lemmas, metaLemmas, variables, theorems, conjectures, combinators, constructors, metatheorems, metavariables);

    return fileContext;
  }

  static fromFilePathAndReleaseContext(filePath, releaseContext) {
    const file = releaseContext.getFile(filePath),
          lexer = releaseContext.getLexer(),
          parser = releaseContext.getParser(),
          fileContent = file.getContent(),
          content = fileContent,  ///
          tokens = lexer.tokenise(content),
          node = parser.parse(tokens),
          types = [],
          rules = [],
          axioms = [],
          lemmas = [],
          theorems = [],
          variables = [],
          metaLemmas = [],
          conjectures = [],
          combinators = [],
          constructors = [],
          metatheorems = [],
          metavariables = [],
          fileContext = new FileContext(releaseContext, fileContent, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);

    return fileContext;
  }
}