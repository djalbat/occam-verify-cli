"use strict";

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

import { push } from "../utilities/array";
import { objectType } from "../type";
import { typeFromJSONAndFileContext } from "../type";
import { nodeAsString, nodesAsString } from "../utilities/string";
import localMeta from "./localMeta";

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

  getMetaEquivalences() {
    const metaEquivalences = []; ///

    return metaEquivalences;
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
            const matches = metaType.matchMetaTypeNode(metaTypeNode);

            if (matches) {
              return true;
            }
          }) || null;

    return metaType;
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

  findLabelByLabelMetavariableNode(labelMetavariableNode) {
    const name = labelMetavariableNode,  ///
          labels = this.getLabels(),
          label = labels.find((label) => {
            const matches = label.matchNode(name);

            if (matches) {
              return true;
            }
          }) || null;

    return label;
  }

  findRuleByLabelMetavariableNode(labelMetavariableNode) {
    const rules = this.getRules(),
          rule = rules.find((rule) => {
            const ruleMatchesLabelMetavariableNode = rule.matchLabelMetavariableNode(labelMetavariableNode);

            if (ruleMatchesLabelMetavariableNode) {
              return true;
            }
          }) || null;

    return rule;
  }

  findAxiomByLabelMetavariableNode(labelMetavariableNode) {
    const axioms = this.getAxioms(),
          axiom = axioms.find((axiom) => {
            const axiomMatchesLabelMetavariableNode = axiom.matchLabelMetavariableNode(labelMetavariableNode);

            if (axiomMatchesLabelMetavariableNode) {
              return true;
            }
          }) || null;

    return axiom;
  }

  findLemmaByLabelMetavariableNode(labelMetavariableNode) {
    const lemmas = this.getLemmas(),
          lemma = lemmas.find((lemma) => {
            const lemmaMatchesLabelMetavariableNode = lemma.matchLabelMetavariableNode(labelMetavariableNode);

            if (lemmaMatchesLabelMetavariableNode) {
              return true;
            }
          }) || null;

    return lemma;
  }

  findTheoremByLabelMetavariableNode(labelMetavariableNode) {
    const theorems = this.getTheorems(),
          theorem = theorems.find((theorem) => {
            const theoremMatchesLabelMetavariableNode = theorem.matchLabelMetavariableNode(labelMetavariableNode);

            if (theoremMatchesLabelMetavariableNode) {
              return true;
            }
          }) || null;

    return theorem;
  }

  findMetaLemmaByLabelMetavariableNode(labelMetavariableNode) {
    const metaLemmas = this.getMetaLemmas(),
          metaLemma = metaLemmas.find((metaLemma) => {
            const metaLemmaMatchesLabelMetavariableNode = metaLemma.matchLabelMetavariableNode(labelMetavariableNode);

            if (metaLemmaMatchesLabelMetavariableNode) {
              return true;
            }
          }) || null;

    return metaLemma;
  }

  findConjectureByLabelMetavariableNode(labelMetavariableNode) {
    const conjectures = this.getConjectures(),
          conjecture = conjectures.find((conjecture) => {
            const conjectureMatchesLabelMetavariableNode = conjecture.matchLabelMetavariableNode(labelMetavariableNode);

            if (conjectureMatchesLabelMetavariableNode) {
              return true;
            }
          }) || null;

    return conjecture;
  }

  findMetatheoremByLabelMetavariableNode(labelMetavariableNode) {
    const metatheorems = this.getMetatheorems(),
          metatheorem = metatheorems.find((metatheorem) => {
            const metatheoremMatchesLabelMetavariableNode = metatheorem.matchLabelMetavariableNode(labelMetavariableNode);

            if (metatheoremMatchesLabelMetavariableNode) {
              return true;
            }
          }) || null;

    return metatheorem;
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

  isLabelPresentByLabelMetavariableNode(labelMetavariableNode) {
    const label = this.findLabelByLabelMetavariableNode(labelMetavariableNode),
          labelPresent = (label !== null);

    return labelPresent;
  }

  isMetavariablePresentByMetavariableNode(metavariableNode, localMetaContext) {
    const metavariable = this.findMetavariableByMetavariableNode(metavariableNode, localMetaContext),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  isTermGrounded(term) {
    const termGrounded = false; ///

    return termGrounded;
  }

  isVariableDefined(variable) {
    const variableDefined = false;  ///

    return variableDefined;
  }

  matchStatement(statementNode) {
    const statementMatches = false;

    return statementMatches;
  }

  matchMetastatement(metastatementNode) {
    const metastatementMatches = false;

    return metastatementMatches;
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
            const nodeMatches = variable.matchNode(node);

            if (nodeMatches) {
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
            const nodeMatches = metavariable.matchName(name);

            if (nodeMatches) {
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
          types = this.types.map((type) => {
            const typeJSON = type.toJSON(this.tokens);

            type = typeJSON; ///

            return type;
          }),
          rules = this.rules.map((rule) => {
            const ruleJSON = rule.toJSON(this.tokens);

            rule = ruleJSON; ///

            return rule;
          }),
          axioms = this.axioms.map((axiom) => {
            const axiomJSON = axiom.toJSON(this.tokens);

            axiom = axiomJSON; ///

            return axiom;
          }),
          lemmas = this.lemmas.map((lemma) => {
            const lemmaJSON = lemma.toJSON(this.tokens);

            lemma = lemmaJSON; ///

            return lemma;
          }),
          theorems = this.theorems.map((theorem) => {
            const theoremJSON = theorem.toJSON(this.tokens);

            theorem = theoremJSON; ///

            return theorem;
          }),
          variables = this.variables.map((variable) => {
            const variableJSON = variable.toJSON(this.tokens);

            variable = variableJSON;  ///

            return variable;
          }),
          metaLemmas = this.metaLemmas.map((metaLemma) => {
            const metaLemmaJSON = metaLemma.toJSON(this.tokens);

            metaLemma = metaLemmaJSON; ///

            return metaLemma;
          }),
          conjectures = this.conjectures.map((conjecture) => {
            const conjectureJSON = conjecture.toJSON(this.tokens);

            conjecture = conjectureJSON; ///

            return conjecture;
          }),
          combinators = this.combinators.map((combinator) => {
            const combinatorJSON = combinator.toJSON(this.tokens);

            combinator = combinatorJSON; ///

            return combinator;
          }),
          constructors = this.constructors.map((constructor) => {
            const constructorJSON = constructor.toJSON(this.tokens);

            constructor = constructorJSON;  ///

            return constructor;
          }),
          metatheorems = this.metatheorems.map((metatheorem) => {
            const metatheoremJSON = metatheorem.toJSON(this.tokens);

            metatheorem = metatheoremJSON; ///

            return metatheorem;
          }),
          metavariables = this.metavariables.map((metavariable) => {
            const metavariableJSON = metavariable.toJSON(this.tokens);

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
      const json = typeJSON,  ///
            type = typeFromJSONAndFileContext(json, fileContext);

      this.types.push(type);
    });

    rulesJSON.forEach((ruleJSON) => {
      const json = ruleJSON,  ///
            rule = Rule.fromJSONAndFileContext(json, fileContext);

      this.rules.push(rule);
    });

    axiomsJSON.forEach((axiomJSON) => {
      const json = axiomJSON,  ///
            axiom = Axiom.fromJSONAndFileContext(json, fileContext);

      this.axioms.push(axiom);
    });

    lemmasJSON.forEach((lemmaJSON) => {
      const json = lemmaJSON,  ///
            lemma = Lemma.fromJSONAndFileContext(json, fileContext);

      this.lemmas.push(lemma);
    });

    theoremsJSON.forEach((theoremJSON) => {
      const json = theoremJSON,  ///
            theorem = Theorem.fromJSONAndFileContext(json, fileContext);

      this.theorems.push(theorem);
    });

    variablesJSON.forEach((variableJSON) => {
      const json = variableJSON,  ///
            variable = Variable.fromJSONAndFileContext(json, fileContext);

      this.variables.push(variable);
    });

    metaLemmasJSON.forEach((metaLemmaJSON) => {
      const json = metaLemmaJSON,  ///
            metaLemma = MetaLemma.fromJSONAndFileContext(json, fileContext);

      this.metaLemmas.push(metaLemma);
    });

    conjecturesJSON.forEach((conjectureJSON) => {
      const json = conjectureJSON,  ///
            conjecture = Conjecture.fromJSONAndFileContext(json, fileContext);

      this.conjectures.push(conjecture);
    });

    combinatorsJSON.forEach((combinatorJSON) => {
      const json = combinatorJSON,  ///
            combinator = Combinator.fromJSONAndFileContext(json, fileContext);

      this.combinators.push(combinator);
    });

    constructorsJSON.forEach((constructorJSON) => {
      const json = constructorJSON,  ///
            constructor = Constructor.fromJSONAndFileContext(json, fileContext);

      this.constructors.push(constructor);
    });

    metatheoremsJSON.forEach((metatheoremJSON) => {
      const json = metatheoremJSON,  ///
            metatheorem = Metatheorem.fromJSONAndFileContext(json, fileContext);

      this.metatheorems.push(metatheorem);
    });

    metavariablesJSON.forEach((metavariableJSON) => {
      const json = metavariableJSON,  ///
            metavariable = Metavariable.fromJSONAndFileContext(json, fileContext);

      this.metavariables.push(metavariable);
    });
  }

  static fromJSONAndReleaseContext(json, releaseContext) {
    const { filePath } = json,
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
          fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, metaLemmas, variables, theorems, conjectures, combinators, constructors, metatheorems, metavariables);

    fileContext.initialise(json);

    return fileContext;
  }

  static fromFilePathAndReleaseContext(filePath, releaseContext) {
    const file = releaseContext.getFile(filePath),
          content = file.getContent(),
          tokens = releaseContext.tokenise(content),
          node = releaseContext.parse(tokens),
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
}