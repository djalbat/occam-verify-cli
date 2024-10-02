"use strict";

import Type from "../type";
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
      const typeNameMatches = type.matchTypeName(typeName);

      if (typeNameMatches) {
        return true;
      }
    }) || null;

    return type;
  }

  findTypeByTypeNode(typeNode) {
    let types = this.getTypes();

    types.push(objectType);

    const type = types.find((type) => {
      const nodeMatches = type.matchTypeNode(typeNode);

      if (nodeMatches) {
        return true;
      }
    }) || null;

    return type;
  }

  findVariableByVariableNode(variableNode) {
    const node = variableNode,  ///
          variables = this.getVariables(),
          variable = variables.find((variable) => {
            const nodeMatches = variable.matchNode(node);

            if (nodeMatches) {
              return true;
            }
          }) || null;

    return variable;
  }

  findMetaTypeByMetaTypeNode(metaTypeNode) {
    const metaTypes = this.getMetaTypes(),
          metaType = metaTypes.find((metaType) => {
            const metaTypeNodeMatches = metaType.matchMetaTypeNode(metaTypeNode);

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

  findMetavariableByMetavariableNode(metavariableNode) {
    const metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode);

            if (metavariableNodeMatches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  findMetavariableByMetavariableName(metavariableName) {
    const name = metavariableName,  ///
          metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const nameMatches = metavariable.matchName(name);

            if (nameMatches) {
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

  isMetavariablePresentByMetavariableName(metavariablename) {
    const metavariable = this.findMetavariableByMetavariableName(metavariablename),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
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

    const metavariableName = metavariable.getName(),
          metavariablePresent = this.isMetavariablePresentByMetavariableName(metavariableName);

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

  verify() {
    let verified = false;

    if (this.tokens === null) {
      const lexer = this.getLexer(),
            parser = this.getParser(),
            content = this.fileContent; ///

      this.tokens = lexer.tokenise(content);

      this.node = parser.parse(this.tokens);
    }

    if (this.node !== null) {
      this.reset();

      const fileContext = this; ///

      verified = topLevelVerifier.verify(this.node, fileContext);
    }

    return verified;
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

  fromJSON(json) {
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
      const json = typeJSON,  ///
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

  static fromFileAndReleaseContext(file, releaseContext) {
    const fileContent = file.getContent(),
          filePath = file.getPath(),
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