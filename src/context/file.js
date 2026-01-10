"use strict";

import { arrayUtilities } from "necessary";

import elements from "../elements";

import { verifyFile } from "../process/verify";
import { baseTypeFromNothing } from "../types";
import { nodeAsString, nodesAsString } from "../utilities/node";
import { typesFromJSON,
         rulesFromJSON,
         axiomsFromJSON,
         typesToTypesJSON,
         rulesToRulesJSON,
         theoremsFromJSON,
         variablesFromJSON,
         lemmasFromNothing,
         axiomsToAxiomsJSON,
         conjecturesFromJSON,
         combinatorsFromJSON,
         typePrefixesFromJSON,
         constructorsFromJSON,
         metatheoremsFromJSON,
         metavariablesFromJSON,
         metaLemmasFromNothing,
         theoremsToTheoremsJSON,
         variablesToVariablesJSON,
         conjecturesToConjecturesJSON,
         combinatorsToCombinatorsJSON,
         typePrefixesToTypePrefixesJSON,
         constructorsToConstructorsJSON,
         metatheoremsToMetatheoremsJSON,
         metavariablesToMetavariablesJSON } from "../utilities/json";

const { push, filter } = arrayUtilities;

export default class FileContext {
  constructor(releaseContext, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables) {
    this.releaseContext = releaseContext;
    this.filePath = filePath;
    this.lineIndex = lineIndex;
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
    this.typePrefixes = typePrefixes;
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

  getLineIndex() {
    return this.lineIndex;
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

  getTypePrefix() { return this.releaseContext.getTypePrefix(); }

  getJudgements() {
    const judgements = [];

    return judgements;
  }

  getEquivalences() {
    const { Equivalences } = elements,
          equivalences = Equivalences.fromNothing();

    return equivalences;
  }

  getStepsOrSubproofs() {
    const stepsOrSubproofs = [];

    return stepsOrSubproofs;
  }

  getLabels(includeRelease = true) {
    const labels = [];

    if (includeRelease) {
      const releaseContextLabels = this.releaseContext.getLabels();

      push(labels, releaseContextLabels);
    } else {
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
        const metatheoremLabel = metatheorem.getLabel();

        labels.push(metatheoremLabel);
      });
    }

    return labels;
  }

  getTypes(includeRelease = true, includeDependencies = true) {
    const types = includeRelease ?
                    this.releaseContext.getTypes(includeDependencies) :
                      this.types;

    return types;
  }

  getRules(includeRelease = true) {
    const rules = includeRelease ?
                    this.releaseContext.getRules() :
                      this.rules;

    return rules;
  }

  getAxioms(includeRelease = true) {
    const axioms = includeRelease ?
                     this.releaseContext.getAxioms() :
                       this.axioms;

    return axioms;
  }

  getLemmas(includeRelease = true) {
    const lemmas = includeRelease ?
                     this.releaseContext.getLemmas() :
                       this.lemmas;

    return lemmas;
  }

  getTheorems(includeRelease = true) {
    const theorems = includeRelease ?
                       this.releaseContext.getTheorems() :
                         this.theorems;

    return theorems;
  }

  getVariables(includeRelease = true) {
    return this.variables;
  }

  getProcedures(includeRelease = true) {
    const procedures = includeRelease ?
                         this.releaseContext.getProcedures() :
                           null;  ///

    return procedures;
  }

  getMetaLemmas(includeRelease = true) {
    const metaLemmas = includeRelease ?
                         this.releaseContext.getMetaLemmas() :
                           this.metaLemmas;

    return metaLemmas;
  }

  getConjectures(includeRelease = true) {
    const conjectures = includeRelease ?
                          this.releaseContext.getConjectures() :
                            this.conjectures;

    return conjectures;
  }

  getCombinators(includeRelease = true) {
    const combinators = includeRelease ?
                          this.releaseContext.getCombinators() :
                            this.combinators;

    return combinators;
  }

  getTypePrefixes(includeRelease = true) {
    const typePrefixes = includeRelease ?
                           this.releaseContext.getTypePrefixes() :
                             this.typePrefixes;

    return typePrefixes;
  }

  getConstructors(includeRelease = true) {
    const constructors = includeRelease ?
                           this.releaseContext.getConstructors() :
                             this.constructors;

    return constructors;
  }

  getMetatheorems(includeRelease = true) {
    const metatheorems = includeRelease ?
                           this.releaseContext.getMetatheorems() :
                             this.metatheorems;

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

  addTypePrefix(typePrefix) {
    this.typePrefixes.push(typePrefix);
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
            const metavariableUnifies = label.unifyReference(reference, context);

            if (metavariableUnifies) {
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

  findProcedureByName(name) {
    const procedures = this.getProcedures(),
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
            metaLemmaMetatheoremUnifies = reference.unifyMetaLemmaMetatheorem(metaLemmaMetaTheorem, context);

      if (metaLemmaMetatheoremUnifies) {
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
            metaLemmaMetatheoremUnifies = reference.unifyMetaLemmaMetatheorem(metaLemmaMetaTheorem, context);

      if (metaLemmaMetatheoremUnifies) {
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

  findAxiomLemmaTheoremOrConjectureByReference(reference) {
    const axiom = this.findAxiomByReference(reference),
          lemma = this.findLemmaByReference(reference),
          theorem = this.findTheoremByReference(reference),
          conjecture = this.findConjectureByReference(reference),
          axiomLemmaTheoremOrConjecture = (axiom || lemma || theorem || conjecture);

    return axiomLemmaTheoremOrConjecture;
  }

  findMetavariable(metavariable) {
    const metavariables = this.getMetavariables(),
          specificMetavariable = metavariable;  ///

    metavariable = metavariables.find((metavariable) => {
      const generalMetavariable = metavariable; ///

      metavariable = specificMetavariable;  ///

      const context = this, ///
            metavariableUnifies = generalMetavariable.unifyMetavariable(metavariable, context);

      if (metavariableUnifies) {
        return true;
      }
    }) || null;

    return metavariable;
  }

  findTypeByTypeName(typeName, includeRelease = true, includeDependencies = true) {
    let types = this.getTypes(includeRelease, includeDependencies);

    const baseType = baseTypeFromNothing();

    types = [
      ...types,
      baseType
    ];

    const type = types.find((type) => {
      const typeNameMatches = type.matchTypeName(typeName);

      if (typeNameMatches) {
        return true;
      }
    }) || null;

    return type;
  }

  findTypeByNominalTypeName(nominalTypeName) {
    let types = this.getTypes();

    const baseType = baseTypeFromNothing();

    types = [
      ...types,
      baseType
    ];

    const type = types.find((type) => {
      const typeNameMatches = type.matchNominalTypeName(nominalTypeName);

      if (typeNameMatches) {
        return true;
      }
    }) || null;

    return type;
  }

  findTypeByPrefixedTypeName(prefixedTypeName) {
    let types = this.getTypes();

    const baseType = baseTypeFromNothing();

    types = [
      ...types,
      baseType
    ];

    const type = types.find((type) => {
      const typeNameMatches = type.matchPrefixedTypeName(prefixedTypeName);

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

  findTypePrefixByTypePrefixName(typePrefixName) {
    const typePrefixes = this.getTypePrefixes(),
          typePrefix = typePrefixes.find((typePrefix) => {
            const typePrefixNameMatches = typePrefix.matchTypePrefixName(typePrefixName);

            if (typePrefixNameMatches) {
              return true;
            }
          }) || null;

    return typePrefix;
  }

  findVariableByVariableIdentifier(variableIdentifier) {
    const variables = this.getVariables(),
          variable = variables.find((variable) => {
            const variableIdentifierMatches = variable.matchVariableIdentifier(variableIdentifier);

            if (variableIdentifierMatches) {
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
            const metavariableEqualToLabelMetavariable = label.isMetavariableEqualToMetavariable(metavariable);

            if (metavariableEqualToLabelMetavariable) {
              return true;
            }
          }) || null;

    return label;
  }

  findJudgementByMetavariable(metavariable) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementSingular = judgement.isSingular();

            if (judgementSingular) {
              const judgementMetavariable = judgement.getMetavariable(),
                    judgementMetavariableEqualToMetavariable = judgementMetavariable.isEqualTo(metavariable);

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

  isMetavariablePresent(metavariable) {
    metavariable = this.findMetavariable(metavariable);

    const metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  isTypePresentByTypeName(typeName, includeRelease = true, includeDependencies = true) {
    const type = this.findTypeByTypeName(typeName, includeRelease, includeDependencies),
          typePresent = (type !== null);

    return typePresent;
  }

  isTypePresentByNominalTypeName(nominalTypeName) {
    const type = this.findTypeByNominalTypeName(nominalTypeName),
          typePresent = (type !== null);

    return typePresent;
  }

  isTypePresentByPrefixedTypeName(prefixedTypeName) {
    const type = this.findTypeByPrefixedTypeName(prefixedTypeName),
          typePresent = (type !== null);

    return typePresent;
  }

  isTypePrefixPresentByTypePrefixName(typePrefixName) {
    const typePrefix = this.findTypePrefixByTypePrefixName(typePrefixName),
          typePrefixPresent = (typePrefix !== null);

    return typePrefixPresent;
  }

  isVariablePresentByVariableIdentifier(variableIdentifier) {
    const variable = this.findVariableByVariableIdentifier(variableIdentifier),
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
            const { Substitutions } = elements,
                  context = this, ///
                  substitutions = Substitutions.fromNothing(),
                  labelUnifies = reference.unifyLabel(label, substitutions, context);

            if (labelUnifies) {
              return true;
            }
          });

    return labelPresent;
  }

  isProcedurePresentByName(name) {
    const procedure = this.findProcedureByName(name),
          procedurePresent = (procedure !== null);

    return procedurePresent;
  }

  isMetavariablePresentByReference(reference) {
    const metavariables = this.getMetavariables(),
          metavariablePresent = metavariables.some((metavariable) => {
            const context = this, ///
                  metavariableUnifies = reference.unifyMetavariable(metavariable, context);

            if (metavariableUnifies) {
              return true;
            }
          });

    return metavariablePresent;
  }

  isMetaLemmaMetatheoremPresentByReference(reference) {
    const metaLemmaMetatheorem = this.findMetaLemmaMetatheoremByReference(reference),
          metaLemmaMetatheoremPresent = (metaLemmaMetatheorem !== null);

    return metaLemmaMetatheoremPresent;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  nodesAsString(node) {
    const string = nodesAsString(node, this.tokens);

    return string;
  }

  findFile(filePath) { return this.releaseContext.findFile(filePath); }

  trace(message, node = null) {
    this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);

    this.releaseContext.trace(message, this.filePath, this.lineIndex);
  }

  debug(message, node = null) {
    this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);

    this.releaseContext.debug(message, this.filePath, this.lineIndex);
  }

  info(message, node = null) {
    this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);

    this.releaseContext.info(message, this.filePath, this.lineIndex);
  }

  warning(message, node = null) {
    this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);

    this.releaseContext.warning(message, this.filePath, this.lineIndex);
  }

  error(message, node = null) {
    this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);

    this.releaseContext.error(message, this.filePath, this.lineIndex);
  }

  verify() {
    let verifies = false;

    this.prepare();

    if (this.node === null) {
      this.warning(`Unable to verify the '${this.filePath}' file because it cannot be parsed.`);
    } else {
      this.debug(`Verifying the '${this.filePath}' file...`);

      const context = this, ///
            fileNode = this.node; ///

      verifies = verifyFile(fileNode, context);

      if (!verifies) {
        this.clear();
      }

      if (verifies) {
        this.info(`...verified the '${this.filePath}' file.`);
      }
    }

    return verifies;
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
    this.typePrefixes = [];
    this.constructors = [];
    this.metatheorems = [];
    this.metavariables = [];
  }

  prepare() {
    this.lineIndex = null;

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

    this.typePrefixes = typePrefixesFromJSON(json, fileContext);

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
          typePrefixesJSON = typePrefixesToTypePrefixesJSON(this.typePrefixes),
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
          typePrefixes = typePrefixesJSON,  ///
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
            typePrefixes,
            constructors,
            metatheorems,
            metavariables
          };

    return json;
  }

  static fromFile(file, releaseContext) {
    const filePath = file.getPath(),
          lineIndex = null,
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
          typePrefixes = [],
          constructors = [],
          metatheorems = [],
          metavariables = [],
          fileContext = new FileContext(releaseContext, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);

    return fileContext;
  }

  static fromFilePath(filePath, releaseContext) {
    const lineIndex = null,
          tokens = null,
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
          typePrefixes = null,
          constructors = null,
          metatheorems = null,
          metavariables = null,
          fileContext = new FileContext(releaseContext, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);

    return fileContext;
  }
}

function lineIndexFromNodeAndTokens(node, tokens, lineIndex) {
  if (node !== null) {
    lineIndex = 0;

    const firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);

    tokens.some((token, tokenIndex) => {
      const tokenEndOfLineToken = token.isEndOfLineToken();

      if (tokenEndOfLineToken) {
        lineIndex += 1;
      }

      if (tokenIndex === firstSignificantTokenIndex) {
        return true;
      }
    });
  }

  return lineIndex;
}
