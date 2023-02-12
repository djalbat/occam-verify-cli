"use strict";

import { rewriteNodes } from "occam-grammar-utilities";

import Type from "../type";
import Rule from "../rule";
import Axiom from "../axiom";
import Lemma from "../lemma";
import Theorem from "../theorem";
import Variable from "../variable";
import Conjecture from "../conjecture";
import Combinator from "../combinator";
import Constructor from "../constructor";
import Metavariable from "../metavariable";

import { push, filter } from "../utilities/array";
import { statementMetaType } from "../metaType";
import { nodeAsString, nodesAsString } from "../utilities/string";
import { TYPE_KIND,
         RULE_KIND,
         AXIOM_KIND,
         LEMMA_KIND,
         THEOREM_KIND,
         VARIABLE_KIND,
         CONJECTURE_KIND,
         COMBINATOR_KIND,
         CONSTRUCTOR_KIND,
         METAVARIABLE_KIND } from "../kinds";

const metaTypes = [
  statementMetaType
];

export default class FileContext {
  constructor(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, conjectures, combinators, constructors, metavariables) {
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
    this.conjectures = conjectures;
    this.combinators = combinators;
    this.constructors = constructors;
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

    this.conjectures.forEach((conjecture) => {
      const conjectureLabels = conjecture.getLabels();

      push(labels, conjectureLabels);
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

  getMetavariables(includeRelease = true) {
    return this.metavariables;
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

  findMetaTypeByMetaTypeName(metaTypeName) {
    const metaTypes = this.getMetaTypes(),
          metaType = metaTypes.find((metaType) => {
            const matches = metaType.matchMetaTypeName(metaTypeName);

            if (matches) {
              return true;
            }
          }) || null;

    return metaType;
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

  findMetavariableByMetavariableName(metavariableName) {
    const name = metavariableName,  ///
          metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const matches = metavariable.matchName(name);

            if (matches) {
              return true;
            }
          }) || null;

    return metavariable;
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

  isVariablePresentByVariableName(variableName) {
    const variable = this.findVariableByVariableName(variableName),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isMetavariablePresentByMetavariableName(metavariableName) {
    const metavariable = this.findMetavariableByMetavariableName(metavariableName),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  matchStatement(statementNode) {
    const statementMatches = false;

    return statementMatches;
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
    const variableName = variable.getName();

    filter(this.variables, (variable) => {
      const name = variable.getName(),
            nameVariableName = (name === variableName);

      if (!nameVariableName) {
        return true;
      }
    });

    this.variables.push(variable);
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

  addMetavariable(metavariable) {
    const metavariableName = metavariable.getName();

    filter(this.metavariables, (metavariable) => {
      const name = metavariable.getName(),
            nameMetavariableName = (name === metavariableName);

      if (!nameMetavariableName) {
        return true;
      }
    });

    this.metavariables.push(metavariable);
  }

  trace(message, node) { this.releaseContext.trace(message, node, this.tokens, this.filePath); }

  debug(message, node) { this.releaseContext.debug(message, node, this.tokens, this.filePath); }

  info(message, node) { this.releaseContext.info(message, node, this.tokens, this.filePath); }

  warning(message, node) { this.releaseContext.warning(message, node, this.tokens, this.filePath); }

  error(message, node) { this.releaseContext.error(message, node, this.tokens, this.filePath); }

  fatal(message, node) { this.releaseContext.fatal(message, node, this.tokens, this.filePath); }

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

    this.variables.forEach((variable) => {
      const variableJSON = variable.toJSON(this.tokens);

      json.push(variableJSON)
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

    this.metavariables.forEach((metavariable) => {
      const metavariableJSON = metavariable.toJSON(this.tokens);

      json.push(metavariableJSON)
    });

    return json;
  }

  static fromJSON(json) {
    const jsonArray = json, ///
          fileContext = this; ///

    jsonArray.forEach((json) => {
      const { kind } = json;

      switch (kind) {
        case TYPE_KIND: {
          const type = Type.fromJSONAndFileContext(json, fileContext);

          this.types.push(type);

          break;
        }

        case RULE_KIND: {
          const rule = Rule.fromJSONAndFileContext(json, fileContext);

          this.rules.push(rule);

          break;
        }

        case AXIOM_KIND: {
          const axiom = Axiom.fromJSONAndFileContext(json, fileContext);

          this.axioms.push(axiom);

          break;
        }

        case LEMMA_KIND: {
          const lemma = Lemma.fromJSONAndFileContext(json, fileContext);

          this.lemmas.push(lemma);

          break;
        }

        case THEOREM_KIND: {
          const theorem = Theorem.fromJSONAndFileContext(json, fileContext);

          this.theorems.push(theorem);

          break;
        }

        case VARIABLE_KIND: {
          const variable = Variable.fromJSONAndFileContext(json, fileContext);

          this.variables.push(variable);

          break;
        }

        case CONJECTURE_KIND: {
          const conjecture = Conjecture.fromJSONAndFileContext(json, fileContext);

          this.conjectures.push(conjecture);

          break;
        }

        case COMBINATOR_KIND: {
          const combinator = Combinator.fromJSONAndFileContext(json, fileContext);

          this.combinators.push(combinator);

          break;
        }

        case CONSTRUCTOR_KIND: {
          const constructor = Constructor.fromJSONAndFileContext(json, fileContext);

          this.constructors.push(constructor);

          break;
        }

        case METAVARIABLE_KIND: {
          const metavariable = Metavariable.fromJSONAndFileContext(json, fileContext);

          this.metavariables.push(metavariable);

          break;
        }
      }
    });
  }

  static fromReleaseContextAndFilePath(releaseContext, filePath) {
    const file = releaseContext.getFile(filePath),
          content = file.getContent(),
          tokens = releaseContext.tokenise(content),
          node = releaseContext.parse(tokens);

    if (node !== null) {
      const nonTerminalNode = node; ///

      rewriteNodes(nonTerminalNode);
    }

    const types = [],
          rules = [],
          axioms = [],
          lemmas = [],
          theorems = [],
          variables = [],
          conjectures = [],
          combinators = [],
          constructors = [],
          metavariables = [],
          fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, theorems, conjectures, combinators, constructors, metavariables);

    return fileContext;
  }
}
