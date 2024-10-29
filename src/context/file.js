"use strict";

import { arrayUtilities } from "necessary";

import shim from "../shim";
import metavariableUnifier from "../unifier/metavariable";

import { objectType } from "../type";
import { frameMetaType, referenceMetaType, statementMetaType } from "../metaType";
import { nodeAsTokens, nodeAsString, nodesAsString, tokensAsString } from "../utilities/string";
import { typesFromJSON,
         rulesFromJSON,
         axiomsFromJSON,
         theoremsFromJSON,
         variablesFromJSON,
         conjecturesFromJSON,
         combinatorsFromJSON,
         constructorsFromJSON,
         metatheoremsFromJSON,
         metavariablesFromJSON,
         lemmasFromNothing,
         metaLemmasFromNothing,
         typesToTypesJSON,
         rulesToRulesJSON,
         axiomsToAxiomsJSON,
         theoremsToTheoremsJSON,
         variablesToVariablesJSON,
         conjecturesToConjecturesJSON,
         combinatorsToCombinatorsJSON,
         constructorsToConstructorsJSON,
         metatheoremsToMetatheoremsJSON,
         metavariablesToMetavariablesJSON } from "../utilities/json";

const { push, filter } = arrayUtilities;

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
    const metaTypes = [
      frameMetaType,
      referenceMetaType,
      statementMetaType
    ];

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

  getMetavariableNames(includeRelease = true) {
    const metavariableNames = this.metavariables.map((metavariable) => {
      const metavariableName = metavariable.getName();

      return metavariableName;
    });

    return metavariableNames;
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

  isMetavariablePresentByMetavariableNode(metavariableNode, generalContext, specificContext) {
    const metavariable = this.findMetavariableByMetavariableNode(metavariableNode, generalContext, specificContext),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  findRuleByReference(reference) {
    const rules = this.getRules(),
          metavariableName = reference.getMetavariableName(),
          rule = rules.find((rule) => {
            const metavariableNameMatches = rule.matchMetavariableName(metavariableName);

            if (metavariableNameMatches) {
              return true;
            }
          }) || null;

    return rule;
  }

  findAxiomByReference(reference) {
    const axioms = this.getAxioms(),
          metavariableName = reference.getMetavariableName(),
          axiom = axioms.find((axiom) => {
            const metavariableNameMatches = axiom.matchMetavariableName(metavariableName);

            if (metavariableNameMatches) {
              return true;
            }
          }) || null;

    return axiom;
  }

  findLemmaByReference(reference) {
    const lemmas = this.getLemmas(),
          metavariableName = reference.getMetavariableName(),
          lemma = lemmas.find((lemma) => {
            const metavariableNameMatches = lemma.matchMetavariableName(metavariableName);

            if (metavariableNameMatches) {
              return true;
            }
          }) || null;

    return lemma;
  }

  findTheoremByReference(reference) {
    const theorems = this.getTheorems(),
          metavariableName = reference.getMetavariableName(),
          theorem = theorems.find((theorem) => {
            const metavariableNameMatches = theorem.matchMetavariableName(metavariableName);

            if (metavariableNameMatches) {
              return true;
            }
          }) || null;

    return theorem;
  }

  findConjectureByReference(reference) {
    const conjectures = this.getConjectures(),
          metavariableName = reference.getMetavariableName(),
          conjecture = conjectures.find((conjecture) => {
            const metavariableNameMatches = conjecture.matchMetavariableName(metavariableName);

            if (metavariableNameMatches) {
              return true;
            }
          }) || null;

    return conjecture;
  }

  findMetaLemmasByReference(reference) {
    const metaLemmas = this.getMetaLemmas();

    filter(metaLemmas, (metaLemma) => {
      const { Substitutions } = shim,
            context = this, ///
            substitutions = Substitutions.fromNothing(),
            referenceUnified = metaLemma.unifyReference(reference, substitutions, context);

      if (referenceUnified) {
        return true;
      }
    });

    return metaLemmas;
  }

  findMetatheoremsByReference(reference) {
    const metatheorems = this.getMetatheorems();

    filter(metatheorems, (metatheorem) => {
      const { Substitutions } = shim,
            context = this, ///
            substitutions = Substitutions.fromNothing(),
            referenceUnified = metatheorem.unifyReference(reference, substitutions, context);

      if (referenceUnified) {
        return true;
      }
    });

    return metatheorems;
  }

  findVariableByVariableName(variableName) {
    const variables = this.getVariables(),
          variable = variables.find((variable) => {
            const variableNameMatches = variable.matchVariableName(variableName);

            if (variableNameMatches) {
              return true;
            }
          }) || null;

    return variable;
  }

  findJudgementByMetavariableNode(metavariableNode) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementMatchesMetavariableNode = judgement.matchMetavariableNode(metavariableNode);

            if (judgementMatchesMetavariableNode) {
              return true;
            }
          }) || null;

    return judgement;
  }

  findMetavariableByMetavariableName(metavariableName) {
    const metavariableNameB = metavariableName, ///
          metavariableNames = this.getMetavariableNames(),
          metavariable = metavariableNames.find((metavariableName) => {
            const metavariableNameA = metavariableName; ///

            if (metavariableNameA === metavariableNameB) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  findMetavariableByMetavariableNode(metavariableNode, generalContext, specificContext) {
    const metavariables = this.getMetavariables(),
          specificMetavariableNode = metavariableNode, ///
          metavariable = metavariables.find((metavariable) => {
            const generalMetavariable = metavariable, ///
                  generalMetavariableNode = generalMetavariable.getNode(), ///
                  metavariableUnified = metavariableUnifier.unify(generalMetavariableNode, specificMetavariableNode, generalContext, specificContext);

            if (metavariableUnified) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  isAxiomPresentByReference(reference) {
    const axiom = this.findAxiomByReference(reference),
          axiomPresent = (axiom !== null);

    return axiomPresent;
  }

  isLemmaPresentByReference(reference) {
    const lemma = this.findLemmaByReference(reference),
          lemmaPresent = (lemma !== null);

    return lemmaPresent;
  }

  isTheoremPresentByReference(reference) {
    const theorem = this.findTheoremByReference(reference),
          theoremPresent = (theorem !== null);

    return theoremPresent;
  }

  isConjecturePresentByReference(reference) {
    const conjecture = this.findConjectureByReference(reference),
          conjecturePresent = (conjecture !== null);

    return conjecturePresent;
  }

  areMetaLemmaPresentByReference(reference) {
    const metaLemmas = this.findMetaLemmasByReference(reference),
          metaLemmasLength = metaLemmas.length,
          metaLemmasPresent = (metaLemmasLength > 0);

    return metaLemmasPresent;
  }

  areMetatheoremPresentByReference(reference) {
    const metatheorems = this.findMetatheoremsByReference(reference),
          metatheoremsLength = metatheorems.length, ///
          metatheoremsPresent = (metatheoremsLength > 0);

    return metatheoremsPresent;
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
    this.variables.push(variable);
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
    this.metavariables.push(metavariable);
  }

  trace(message) { this.releaseContext.trace(message, this.filePath); }

  debug(message) { this.releaseContext.debug(message, this.filePath); }

  info(message) { this.releaseContext.info(message, this.filePath); }

  warning(message) { this.releaseContext.warning(message, this.filePath); }

  error(message) { this.releaseContext.error(message, this.filePath); }

  initialise(json) {
    const fileContext = this;

    this.types = [];

    typesFromJSON(json, this.types, fileContext);

    this.rules = rulesFromJSON(json, fileContext);

    this.axioms = axiomsFromJSON(json, fileContext);

    this.lemmas = lemmasFromNothing();

    this.theorems = theoremsFromJSON(json, fileContext);

    this.variables = variablesFromJSON(json, fileContext);

    this.metaLemmas = metaLemmasFromNothing();

    this.conjectures = conjecturesFromJSON(json, fileContext);

    this.combinators = combinatorsFromJSON(json, fileContext);

    this.constructors = constructorsFromJSON(json, fileContext);

    this.metatheorems = metatheoremsFromJSON(json, fileContext);

    this.metavariables = metavariablesFromJSON(json, fileContext);
  }

  clear() {
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
    const typesJSON = typesToTypesJSON(this.types),
          rulesJSON = rulesToRulesJSON(this.rules),
          axiomsJSON = axiomsToAxiomsJSON(this.axioms),
          theoremsJSON = theoremsToTheoremsJSON(this.theorems),
          variablesJSON = variablesToVariablesJSON(this.variables),
          conjecturesJSON = conjecturesToConjecturesJSON(this.conjectures),
          combinatorsJSON = combinatorsToCombinatorsJSON(this.combinators),
          constructorsJSON = constructorsToConstructorsJSON(this.constructors),
          metatheoremsJSON = metatheoremsToMetatheoremsJSON(this.metatheorems),
          metavariablesJSON = metavariablesToMetavariablesJSON(this.metavariables),
          filePath = this.filePath,
          types = typesJSON,  ///
          rules = rulesJSON,  ///
          axioms = axiomsJSON,  ///
          theorems = theoremsJSON,  ///
          variables = variablesJSON,  ///
          conjectures = conjecturesJSON,  ///
          combinators = combinatorsJSON,  ///
          constructors = constructorsJSON,  ///
          metatheorems = metatheoremsJSON,  ///
          metavariables = metavariablesJSON,  ///
          json = {
            filePath,
            types,
            rules,
            axioms,
            theorems,
            variables,
            conjectures,
            combinators,
            constructors,
            metatheorems,
            metavariables
          };

    return json;
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

  static fromFilePathAndJSON(filePath, json, releaseContext) {
    const tokens = null,
          node = null,
          types = null,
          rules = null,
          axioms = null,
          lemmas = null,
          theorems = null,
          variables = null,
          metaLemmas = null,
          conjectures = null,
          combinators = null,
          constructors = null,
          metatheorems = null,
          metavariables = null,
          fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);

    fileContext.initialise(json);

    return fileContext;
  }
}
