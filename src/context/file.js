"use strict";

import { arrayUtilities } from "necessary";

import shim from "../shim";
import Rule from "../rule";
import Axiom from "../axiom";
import Lemma from "../lemma";
import Theorem from "../theorem";
import Variable from "../variable";
import metaTypes from "../metaTypes";
import MetaLemma from "../metaLemma";
import Conjecture from "../conjecture";
import Combinator from "../combinator";
import Constructor from "../constructor";
import Metatheorem from "../metatheorem";
import Metavariable from "../metavariable";

import { objectType } from "../type";
import { nodeAsTokens, nodeAsString, nodesAsString, tokensAsString } from "../utilities/string";

const { push } = arrayUtilities;

export default class FileContext {
  constructor(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, constructors, metatheorems, metavariables) {
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

  getFilePath() {
    return this.filePath;
  }

  getTokens() {
    return this.tokens;
  }

  getNode() {
    return this.node;
  }

  findFile(filePath) { return this.releaseContext.findFile(filePath); }

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

  setReleaseContext(releaseContext) {
    this.releaseContext = releaseContext;
  }

  setFilePath(filePath) {
    this.filePath = filePath;
  }

  setTokens(tokens) {
    this.tokens = tokens;
  }

  setNode(node) {
    this.node = node;
  }

  setTypes(types) {
    this.types = types;
  }

  setRules(rules) {
    this.rules = rules;
  }

  setAxioms(axioms) {
    this.axioms = axioms;
  }

  setLemmas(lemmas) {
    this.lemmas = lemmas;
  }

  setTheorems(theorems) {
    this.theorems = theorems;
  }

  setVariables(variables) {
    this.variables = variables;
  }

  setMetaLemmas(metaLemmas) {
    this.metaLemmas = metaLemmas;
  }

  setConjectures(conjectures) {
    this.conjectures = conjectures;
  }

  setCombinators(combinators) {
    this.combinators = combinators;
  }

  setConstructors(constructors) {
    this.constructors = constructors;
  }

  setMetatheorems(metatheorems) {
    this.metatheorems = metatheorems;
  }

  setMetavariables(metavariables) {
    this.metavariables = metavariables;
  }

  findTypeByTypeName(typeName) {
    let types = this.getTypes();

    types.push(objectType);

    const type = types.find((type) => {
      const typeNameMatches = type.matchTypeName(typeName);

      if (typeNameMatches) {
        return true;
      }
    }) || null;

    return type;
  }

  findMetaTypeByMetaTypeName(metaTypeName) {
    const metaTypes = this.getMetaTypes(),
          metaType = metaTypes.find((metaType) => {
            const metaTypeNodeMatches = metaType.matchMetaTypeName(metaTypeName);

            if (metaTypeNodeMatches) {
              return true;
            }
          }) || null;

    return metaType;
  }

  findLabelByMetavariableNode(metavariableNode) {
    const labels = this.getLabels(),
          label = labels.find((label) => {
            const metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return label;
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

  isLabelPresentByMetavariableNode(metavariableNode) {
    const label = this.findLabelByMetavariableNode(metavariableNode),
          labelPresent = (label !== null);

    return labelPresent;
  }

  isMetavariablePresentByMetavariableName(metavariableName) {
    const metavariable = this.findMetavariableByMetavariableName(metavariableName),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  findRuleByReference(reference) {
    const rules = this.getRules(),
          metavariableNode = reference.getMetavariableNode(),
          rule = rules.find((rule) => {
            const metavariableNodeMatches = rule.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return rule;
  }

  findAxiomByReference(reference) {
    const axioms = this.getAxioms(),
          metavariableNode = reference.getMetavariableNode(),
          axiom = axioms.find((axiom) => {
            const metavariableNodeMatches = axiom.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return axiom;
  }

  findLemmaByReference(reference) {
    const lemmas = this.getLemmas(),
          metavariableNode = reference.getMetavariableNode(),
          lemma = lemmas.find((lemma) => {
            const metavariableNodeMatches = lemma.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return lemma;
  }

  findTheoremByReference(reference) {
    const theorems = this.getTheorems(),
          metavariableNode = reference.getMetavariableNode(),
          theorem = theorems.find((theorem) => {
            const metavariableNodeMatches = theorem.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return theorem;
  }

  findMetaLemmaByReference(reference) {
    const metaLemmas = this.getMetaLemmas(),
          metavariableNode = reference.getMetavariableNode(),
          metaLemma = metaLemmas.find((metaLemma) => {
            const metavariableNodeMatches = metaLemma.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return metaLemma;
  }

  findConjectureByReference(reference) {
    const conjectures = this.getConjectures(),
          metavariableNode = reference.getMetavariableNode(),
          conjecture = conjectures.find((conjecture) => {
            const metavariableNodeMatches = conjecture.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return conjecture;
  }

  findMetatheoremByReference(reference) {
    const metatheorems = this.getMetatheorems(),
          metavariableNode = reference.getMetavariableNode(),
          metatheorem = metatheorems.find((metatheorem) => {
            const metavariableNodeMatches = metatheorem.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return metatheorem;
  }

  findVariableByVariableName(variableName) {
    const variables = this.getVariables(),
          variable = variables.find((variable) => {
            const nameMatches = variable.matchVariableName(variableName);

            if (nameMatches) {
              return true;
            }
          }) || null;

    return variable;
  }

  findJudgementByMetavariableName(metavariableName) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementMatchesMetavariableName = judgement.matchMetavariableName(metavariableName);

            if (judgementMatchesMetavariableName) {
              return true;
            }
          }) || null;

    return judgement;
  }

  findMetavariableByMetavariableName(metavariableName) {
    const metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const nameMatches = metavariable.matchMetavariableName(metavariableName);

            if (nameMatches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  nodeAsString(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    const string = nodeAsString(node, tokens);

    return string;
  }

  nodesAsString(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    const string = nodesAsString(node, tokens);

    return string;
  }

  nodeAsTokens(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    tokens = nodeAsTokens(node, tokens);  ///

    return tokens;
  }

  nodesAsTokens(node, tokens = null) {
    if (tokens === null) {
      tokens = this.tokens;
    }

    tokens = nodesAsTokens(node, tokens); ///

    return tokens;
  }

  tokensAsString(tokens) { return tokensAsString(tokens); }

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

    const variableNode = variable.getNode(),
          variablePresent = this.variables.some((variable) => {
            const variableMatchesNode = variable.matchVariableNode(variableNode);

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

    const metavariableName = metavariable.getName(),
          metavariablePresent = this.isMetavariablePresentByMetavariableName(metavariableName);

    if (!metavariablePresent) {
      this.metavariables.push(metavariable);

      metavariableAdded = true;
    }

    return metavariableAdded;
  }

  trace(message) { this.releaseContext.trace(message, this.filePath); }

  debug(message) { this.releaseContext.debug(message, this.filePath); }

  info(message) { this.releaseContext.info(message, this.filePath); }

  warning(message) { this.releaseContext.warning(message, this.filePath); }

  error(message) { this.releaseContext.error(message, this.filePath); }

  reset() {
    this.types = [];
    this.rules = [];
    this.axioms = [];
    this.lemmas = [];
    this.theorems = [];
    this.variables = [];
    this.metaLemmas = [];
    this.conjectures = [];
    this.combinators = [];
    this.constructors = [];
    this.metatheorems = [];
    this.metavariables = [];
  }

  toJSON() {
    const filePath =  this.filePath,
          types = this.types.map((type) => {
            const typeJSON = type.toJSON();

            type = typeJSON; ///

            return type;
          }),
          rules = this.rules.map((rule) => {
            const ruleJSON = rule.toJSON();

            rule = ruleJSON; ///

            return rule;
          }),
          axioms = this.axioms.map((axiom) => {
            const axiomJSON = axiom.toJSON();

            axiom = axiomJSON; ///

            return axiom;
          }),
          lemmas = this.lemmas.map((lemma) => {
            const lemmaJSON = lemma.toJSON();

            lemma = lemmaJSON; ///

            return lemma;
          }),
          theorems = this.theorems.map((theorem) => {
            const theoremJSON = theorem.toJSON();

            theorem = theoremJSON; ///

            return theorem;
          }),
          variables = this.variables.map((variable) => {
            const variableJSON = variable.toJSON();

            variable = variableJSON;  ///

            return variable;
          }),
          metaLemmas = this.metaLemmas.map((metaLemma) => {
            const metaLemmaJSON = metaLemma.toJSON();

            metaLemma = metaLemmaJSON; ///

            return metaLemma;
          }),
          conjectures = this.conjectures.map((conjecture) => {
            const conjectureJSON = conjecture.toJSON();

            conjecture = conjectureJSON; ///

            return conjecture;
          }),
          combinators = this.combinators.map((combinator) => {
            const combinatorJSON = combinator.toJSON();

            combinator = combinatorJSON; ///

            return combinator;
          }),
          constructors = this.constructors.map((constructor) => {
            const constructorJSON = constructor.toJSON();

            constructor = constructorJSON;  ///

            return constructor;
          }),
          metatheorems = this.metatheorems.map((metatheorem) => {
            const metatheoremJSON = metatheorem.toJSON();

            metatheorem = metatheoremJSON; ///

            return metatheorem;
          }),
          metavariables = this.metavariables.map((metavariable) => {
            const metavariableJSON = metavariable.toJSON();

            metavariable = metavariableJSON;  ///

            return metavariable;
          }),
          json = {
            filePath,
            types,
            rules,
            axioms,
            lemmas,
            theorems,
            variables,
            metaLemmas,
            conjectures,
            combinators,
            constructors,
            metatheorems,
            metavariables
          };

    return json;
  }

  initialise(json) {
    const { types, rules, axioms, lemmas, theorems, metaLemmas, variables, conjectures, combinators, constructors, metatheorems, metavariables } = json,
          fileContext = this, ///
          typesJSON = types,  ///
          rulesJSON = rules,  ///
          axiomsJSON = axioms,  ///
          lemmasJSON = lemmas,  ///
          theoremsJSON = theorems,  ///
          variablesJSON = variables,  ///
          metaLemmasJSON = metaLemmas,  ///
          conjecturesJSON = conjectures,  ///
          combinatorsJSON = combinators,  ///
          constructorsJSON = constructors,  ///
          metatheoremsJSON = metatheorems,  ///
          metavariablesJSON = metavariables;  ///

    typesJSON.forEach((typeJSON) => {
      const { Type } = shim,
            json = typeJSON,  ///
            type = Type.fromJSON(json, fileContext);

      this.types.push(type);
    });

    rulesJSON.forEach((ruleJSON) => {
      const json = ruleJSON,  ///
            rule = Rule.fromJSON(json, fileContext);

      this.rules.push(rule);
    });

    axiomsJSON.forEach((axiomJSON) => {
      const json = axiomJSON,  ///
            axiom = Axiom.fromJSON(json, fileContext);

      this.axioms.push(axiom);
    });

    lemmasJSON.forEach((lemmaJSON) => {
      const json = lemmaJSON,  ///
            lemma = Lemma.fromJSON(json, fileContext);

      this.lemmas.push(lemma);
    });

    theoremsJSON.forEach((theoremJSON) => {
      const json = theoremJSON,  ///
            theorem = Theorem.fromJSON(json, fileContext);

      this.theorems.push(theorem);
    });

    variablesJSON.forEach((variableJSON) => {
      const json = variableJSON,  ///
            variable = Variable.fromJSON(json, fileContext);

      this.variables.push(variable);
    });

    metaLemmasJSON.forEach((metaLemmaJSON) => {
      const json = metaLemmaJSON,  ///
            metaLemma = MetaLemma.fromJSON(json, fileContext);

      this.metaLemmas.push(metaLemma);
    });

    conjecturesJSON.forEach((conjectureJSON) => {
      const json = conjectureJSON,  ///
            conjecture = Conjecture.fromJSON(json, fileContext);

      this.conjectures.push(conjecture);
    });

    combinatorsJSON.forEach((combinatorJSON) => {
      const json = combinatorJSON,  ///
            combinator = Combinator.fromJSON(json, fileContext);

      this.combinators.push(combinator);
    });

    constructorsJSON.forEach((constructorJSON) => {
      const json = constructorJSON,  ///
            constructor = Constructor.fromJSON(json, fileContext);

      this.constructors.push(constructor);
    });

    metatheoremsJSON.forEach((metatheoremJSON) => {
      const json = metatheoremJSON,  ///
            metatheorem = Metatheorem.fromJSON(json, fileContext);

      this.metatheorems.push(metatheorem);
    });

    metavariablesJSON.forEach((metavariableJSON) => {
      const json = metavariableJSON,  ///
            metavariable = Metavariable.fromJSON(json, fileContext);

      this.metavariables.push(metavariable);
    });
  }

  static fromFile(file, releaseContext) {
    const lexer = releaseContext.getLexer(),
          parser = releaseContext.getParser(),
          filePath = file.getPath(),
          fileContent = file.getContent(),
          content = fileContent,  ////
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
          fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);

    return fileContext;
  }

  static fromFileAndJSON(file, json, releaseContext) {
    const filePath = file.getPath(),
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
          fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);

    fileContext.initialise(json);

    return fileContext;
  }
}
