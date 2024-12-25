"use strict";

import { arrayUtilities } from "necessary";

import Equivalences from "../equivalences";
import Substitutions from "../substitutions";
import topLevelVerifier from "../verifier/topLevel";

import { objectType } from "../dom/type";
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

  getLexer() { return this.releaseContext.getLexer(); }

  getParser() { return this.releaseContext.getParser(); }

  getMetaTypes() { return this.releaseContext.getMetaTypes(); }

  getTermType(term) {
    const termType = term.getType();

    return termType;
  }

  getJudgements() {
    const judgements = [];

    return judgements;
  }

  getEquivalences() {
    const equivalences = Equivalences.fromNothing();

    return equivalences;
  }

  getProofStepSubproofs() {
    const proofStepSubproofs = [];

    return proofStepSubproofs;
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

  getProcedures(includeRelease = true) {
    const procedures = [];

    if (includeRelease) {
      const releaseContextProcedures = this.releaseContext.getProcedures();

      push(procedures, releaseContextProcedures);
    }

    return procedures;
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

  getFileContext() {
    const fileContext = this; ///

    return fileContext;
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

  findLabelByReference(reference, context) {
    const labels = this.getLabels(),
          label = labels.find((label) => {
            const metavariableUnified = label.unifyReference(reference, context);

            if (metavariableUnified) {
              return true;
            }
          }) || null;

    return label;
  }

  findMetaLemmaByReference(reference) {
    const metaLemmas = this.getMetaLemmas(),
          metaLemma = metaLemmas.find((metaLemma) => {
            const referenceMatches = metaLemma.matchReference(reference);

            if (referenceMatches) {
              return true;
            }
          }) || null;

    return metaLemma;
  }

  findMetatheoremByReference(reference) {
    const metatheorems = this.getMetatheorems(),
          metatheorem = metatheorems.find((metatheorem) => {
            const referenceMatches = metatheorem.matchReference(reference);

            if (referenceMatches) {
              return true;
            }
          }) || null;

    return metatheorem;
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

  findProcedureByReference(reference) {
    const procedures = this.getProcedures(),
          name = reference.getName(),
          procedure = procedures.find((procedure) => {
            const nameMatches = procedure.matchName(name);

            if (nameMatches) {
              return true;
            }
          }) || null;

    return procedure;
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
      const context = this, ///
            metaLemmaMetaTheorem = metaLemma, ///
            metaLemmaMetatheoremUnified = reference.unifyMetaLemmaMetatheorem(metaLemmaMetaTheorem, context);

      if (metaLemmaMetatheoremUnified) {
        return true;
      }
    });

    return metaLemmas;
  }

  findMetatheoremsByReference(reference) {
    const metatheorems = this.getMetatheorems();

    filter(metatheorems, (metatheorem) => {
      const context = this, ///
            metaLemmaMetaTheorem = metatheorem, ///
            metaLemmaMetatheoremUnified = reference.unifyMetaLemmaMetatheorem(metaLemmaMetaTheorem, context);

      if (metaLemmaMetatheoremUnified) {
        return true;
      }
    });

    return metatheorems;
  }

  findMetaLemmaMetatheoremByReference(reference) {
    const metaLemma = this.findMetaLemmaByReference(reference),
          metatheorem = this.findMetatheoremByReference(reference),
          metaLemmaMetatheorem = (metaLemma || metatheorem);  ///

    return metaLemmaMetatheorem;
  }

  findMetaLemmaMetatheoremsByReference(reference) {
    const metaLemmas = this.findMetaLemmasByReference(reference),
          metatheorems = this.findMetatheoremsByReference(reference),
          metaLemmaMetatheorems = [
            ...metaLemmas,
            ...metatheorems
          ];

    return metaLemmaMetatheorems;
  }

  findAxiomLemmaTheoremConjectureByReference(reference) {
    const axiom = this.findAxiomByReference(reference),
          lemma = this.findLemmaByReference(reference),
          theorem = this.findTheoremByReference(reference),
          conjecture = this.findConjectureByReference(reference),
          axiomLemmaTheoremConjecture = (axiom || lemma || theorem || conjecture);

    return axiomLemmaTheoremConjecture;
  }

  findMetavariable(metavariable, generalContext, specificContext) {
    const specificMetavariable = metavariable,  ///
          metavariables = this.getMetavariables();

    metavariable = metavariables.find((metavariable) => {
      const generalMetavariable = metavariable; ///

      metavariable = specificMetavariable;  ///

      const metavariableUnified = generalMetavariable.unifyMetavariable(metavariable, generalContext, specificContext);

      if (metavariableUnified) {
        return true;
      }
    }) || null;

    return metavariable;
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
            const metaTypeNameMatches = metaType.matchMetaTypeName(metaTypeName);

            if (metaTypeNameMatches) {
              return true;
            }
          }) || null;

    return metaType;
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

  findLabelByMetavariableName(metavariableName) {
    const labels = this.getLabels(),
          label = labels.find((label) => {
            const metavariableNameMatches = label.matchMetavariableName(metavariableName);

            if (metavariableNameMatches) {
              return true;
            }
          }) || null;

    return label;
  }

  findLabelByMetavariable(metavariable) {
    const labels = this.getLabels(),
          label = labels.find((label) => {
            const metavariableEqualToLabelMetavariable = label.isMetavariableEqualTo(metavariable);

            if (metavariableEqualToLabelMetavariable) {
              return true;
            }
          }) || null;

    return label;
  }

  findJudgementByMetavariable(metavariable) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementMetavariable = judgement.getMetavariable();

            if (judgementMetavariable !== null) {
              const judgementMetavariableEqualToMetavariable = judgementMetavariable.isEqualTo(metavariable);

              if (judgementMetavariableEqualToMetavariable) {
                return true;
              }
            }
          }) || null;

    return judgement;
  }

  findMetavariableByMetavariableName(metavariableName) {
    const metavariables = this.getMetavariables(),
          metavariable = metavariables.find((metavariable) => {
            const metavariableNameMatches = metavariable.matchMetavariableName(metavariableName);

            if (metavariableNameMatches) {
              return true;
            }
          }) || null;

    return metavariable;
  }

  isMetavariablePresent(metavariable, generalContext, specificContext) {
    metavariable = this.findMetavariable(metavariable, generalContext, specificContext);  ///

    const metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  isTypePresentByTypeName(typeName) {
    const type = this.findTypeByTypeName(typeName),
          typeDeclared = (type !== null);

    return typeDeclared;
  }

  isVariablePresentByVariableName(variableName) {
    const variable = this.findVariableByVariableName(variableName),
          variablePresent = (variable !== null);

    return variablePresent;
  }

  isLabelPresentByMetavariableName(metavariableName) {
    const label = this.findLabelByMetavariableName(metavariableName),
          labelPresent = (label !== null);

    return labelPresent;
  }

  isLabelPresentByMetavariable(metavariable) {
    const label = this.findLabelByMetavariable(metavariable),
          labelPresent = (label !== null);

    return labelPresent;
  }

  isMetavariablePresentByMetavariableName(metavariableName) {
    const metavariable = this.findMetavariableByMetavariableName(metavariableName),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  isLabelPresentByReference(reference) {
    const labels = this.getLabels(),
          labelPresent = labels.some((label) => {
            const context = this, ///
                  substitutions = Substitutions.fromNothing(),
                  labelUnified = reference.unifyLabel(label, substitutions, context);

            if (labelUnified) {
              return true;
            }
          });

    return labelPresent;
  }

  isProcedurePresentByReference(reference) {
    const procedure = this.findProcedureByReference(reference),
          procedurePresent = (procedure !== null);

    return procedurePresent;
  }

  isMetavariablePresentByReference(reference) {
    const metavariables = this.getMetavariables(),
          metavariablePresent = metavariables.some((metavariable) => {
            const context = this, ///
                  metavariableUnified = reference.unifyMetavariable(metavariable, context);

            if (metavariableUnified) {
              return true;
            }
          });

    return metavariablePresent;
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

  findFile(filePath) { return this.releaseContext.findFile(filePath); }

  trace(message) { this.releaseContext.trace(message, this.filePath); }

  debug(message) { this.releaseContext.debug(message, this.filePath); }

  info(message) { this.releaseContext.info(message, this.filePath); }

  warning(message) { this.releaseContext.warning(message, this.filePath); }

  error(message) { this.releaseContext.error(message, this.filePath); }

  verify() {
    let verified = false;

    this.debug(`Verifying the '${this.filePath}' file...`);

    this.prepare();

    if (this.node === null) {
      this.warning(`Unable to verify the '${this.filePath}' file because it cannot be parsed.`);
    } else {
      const fileContext = this, ///
            verifiedAtTopLevel = topLevelVerifier.verify(this.node, fileContext);

      if (verifiedAtTopLevel) {
        verified = true;
      } else {
        this.clear();
      }
    }

    if (verified) {
      this.info(`...verified the '${this.filePath}' file.`);
    }

    return verified;
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

  prepare() {
    if (this.tokens !== null) {
      return;
    }

    const file = this.findFile(this.filePath),
          lexer = this.getLexer(),
          parser = this.getParser(),
          content = file.getContent();

    this.tokens = lexer.tokenise(content);

    this.node = parser.parse(this.tokens);
  }

  initialise(json) {
    const fileContext = this; ///

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
