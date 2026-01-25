"use strict";

import { arrayUtilities } from "necessary";
import { contextUtilities } from "occam-furtle";

import elements from "../elements";

import { LEVELS } from "../constants";
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

const { push, filter } = arrayUtilities,
      { chainContext, lineIndexFromNodeAndTokens } = contextUtilities,
      [ TRACE_LEVEL, DEBUG_LEVEL, INFO_LEVEL, WARNING_LEVEL, ERROR_LEVEL ] = LEVELS;

export default class FileContext {
  constructor(context, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables) {
    this.context = context;
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

    return chainContext(this);
  }

  getContext() {
    return this.context;
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

  getJudgements() {
    const judgements = [];

    return judgements;
  }

  getEquivalences() {
    const { Equivalences } = elements,
          equivalences = Equivalences.fromNothing(context);

    return equivalences;
  }

  getSubproofOrProofAssertions() {
    const subproofOrProofAssertions = [];

    return subproofOrProofAssertions;
  }

  getLabels(includeRelease = true) {
    const labels = [];

    if (includeRelease) {
      const releaseContextLabels = this.context.getLabels();

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
                    this.context.getTypes(includeDependencies) :
                      this.types;

    return types;
  }

  getRules(includeRelease = true) {
    const rules = includeRelease ?
                    this.context.getRules() :
                      this.rules;

    return rules;
  }

  getAxioms(includeRelease = true) {
    const axioms = includeRelease ?
                     this.context.getAxioms() :
                       this.axioms;

    return axioms;
  }

  getLemmas(includeRelease = true) {
    const lemmas = includeRelease ?
                     this.context.getLemmas() :
                       this.lemmas;

    return lemmas;
  }

  getTheorems(includeRelease = true) {
    const theorems = includeRelease ?
                       this.context.getTheorems() :
                         this.theorems;

    return theorems;
  }

  getVariables(includeRelease = true) {
    return this.variables;
  }

  getProcedures(includeRelease = true) {
    const procedures = includeRelease ?
                         this.context.getProcedures() :
                           null;  ///

    return procedures;
  }

  getMetaLemmas(includeRelease = true) {
    const metaLemmas = includeRelease ?
                         this.context.getMetaLemmas() :
                           this.metaLemmas;

    return metaLemmas;
  }

  getConjectures(includeRelease = true) {
    const conjectures = includeRelease ?
                          this.context.getConjectures() :
                            this.conjectures;

    return conjectures;
  }

  getCombinators(includeRelease = true) {
    const combinators = includeRelease ?
                          this.context.getCombinators() :
                            this.combinators;

    return combinators;
  }

  getTypePrefixes(includeRelease = true) {
    const typePrefixes = includeRelease ?
                           this.context.getTypePrefixes() :
                             this.typePrefixes;

    return typePrefixes;
  }

  getConstructors(includeRelease = true) {
    const constructors = includeRelease ?
                           this.context.getConstructors() :
                             this.constructors;

    return constructors;
  }

  getMetatheorems(includeRelease = true) {
    const metatheorems = includeRelease ?
                           this.context.getMetatheorems() :
                             this.metatheorems;

    return metatheorems;
  }

  getMetavariables(includeRelease = true) {
    return this.metavariables;
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
            const metaLemmaComparesToReference = metaLemma.compareReference(reference);

            if (metaLemmaComparesToReference) {
              return true;
            }
          }) || null;

    return metaLemma;
  }

  findMetatheoremByReference(reference) {
    const metatheorems = this.getMetatheorems(),
          metatheorem = metatheorems.find((metatheorem) => {
            const metatheoremComparesToReference = metatheorem.compareReference(reference);

            if (metatheoremComparesToReference) {
              return true;
            }
          }) || null;

    return metatheorem;
  }

  findRuleByReference(reference) {
    const rules = this.getRules(),
          metavariableName = reference.getMetavariableName(),
          rule = rules.find((rule) => {
            const ruleComparesToMetavariableName = rule.compareMetavariableName(metavariableName);

            if (ruleComparesToMetavariableName) {
              return true;
            }
          }) || null;

    return rule;
  }

  findAxiomByReference(reference) {
    const axioms = this.getAxioms(),
          metavariableName = reference.getMetavariableName(),
          axiom = axioms.find((axiom) => {
            const axiomComparesToMetavariableName = axiom.compareMetavariableName(metavariableName);

            if (axiomComparesToMetavariableName) {
              return true;
            }
          }) || null;

    return axiom;
  }

  findLemmaByReference(reference) {
    const lemmas = this.getLemmas(),
          metavariableName = reference.getMetavariableName(),
          lemma = lemmas.find((lemma) => {
            const lemmaComparesToMetavariableName = lemma.compareMetavariableName(metavariableName);

            if (lemmaComparesToMetavariableName) {
              return true;
            }
          }) || null;

    return lemma;
  }

  findTheoremByReference(reference) {
    const theorems = this.getTheorems(),
          metavariableName = reference.getMetavariableName(),
          theorem = theorems.find((theorem) => {
            const theoremComparesToMetavariableName = theorem.compareMetavariableName(metavariableName);

            if (theoremComparesToMetavariableName) {
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
            const conjectureComparesToMetavariableName = conjecture.compareMetavariableName(metavariableName);

            if (conjectureComparesToMetavariableName) {
              return true;
            }
          }) || null;

    return conjecture;
  }

  findMetaLemmasByReference(reference) {
    const metaLemmas = this.getMetaLemmas();

    filter(metaLemmas, (metaLemma) => {
      const context = this, ///
            topLevelMetaAssertion = metaLemma, ///
            topLevelMetaAssertionUnifies = reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);

      if (topLevelMetaAssertionUnifies) {
        return true;
      }
    });

    return metaLemmas;
  }

  findMetatheoremsByReference(reference) {
    const metatheorems = this.getMetatheorems();

    filter(metatheorems, (metatheorem) => {
      const context = this, ///
            topLevelMetaAssertion = metatheorem, ///
            topLevelMetaAssertionUnifies = reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);

      if (topLevelMetaAssertionUnifies) {
        return true;
      }
    });

    return metatheorems;
  }

  findTopLevelMetaAssertionByReference(reference) {
    const metaLemma = this.findMetaLemmaByReference(reference),
          metatheorem = this.findMetatheoremByReference(reference),
          topLevelMetaAssertion = (metaLemma || metatheorem);  ///

    return topLevelMetaAssertion;
  }

  findTopLevelMetaAssertionsByReference(reference) {
    const metaLemmas = this.findMetaLemmasByReference(reference),
          metatheorems = this.findMetatheoremsByReference(reference),
          topLevelMetaAssertions = [
            ...metaLemmas,
            ...metatheorems
          ];

    return topLevelMetaAssertions;
  }

  findTopLevelAssertionByReference(reference) {
    const axiom = this.findAxiomByReference(reference),
          lemma = this.findLemmaByReference(reference),
          theorem = this.findTheoremByReference(reference),
          conjecture = this.findConjectureByReference(reference),
          topLevelAssertion = (axiom || lemma || theorem || conjecture);

    return topLevelAssertion;
  }

  findMetavariable(metavariable) {
    const metavariables = this.getMetavariables(),
          specificMetavariable = metavariable;  ///

    metavariable = metavariables.find((metavariable) => {
      const context = this, ///
            generalMetavariable = metavariable, ///
            metavariableUnifies = generalMetavariable.unifyMetavariable(specificMetavariable, context);

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
      const typeComparesToTypeName = type.compareTypeName(typeName);

      if (typeComparesToTypeName) {
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
      const typeComparesToNominalTypeName = type.compareNominalTypeName(nominalTypeName);

      if (typeComparesToNominalTypeName) {
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
      const typeComparesToPrefixedTypeName = type.comparePrefixedTypeName(prefixedTypeName);

      if (typeComparesToPrefixedTypeName) {
        return true;
      }
    }) || null;

    return type;
  }

  findMetaTypeByMetaTypeName(metaTypeName) {
    const metaTypes = this.getMetaTypes(),
          metaType = metaTypes.find((metaType) => {
            const metaTypeComparesToMetaTypeName = metaType.compareMetaTypeName(metaTypeName);

            if (metaTypeComparesToMetaTypeName) {
              return true;
            }
          }) || null;

    return metaType;
  }

  findTypePrefixByTypePrefixName(typePrefixName) {
    const typePrefixes = this.getTypePrefixes(),
          typePrefix = typePrefixes.find((typePrefix) => {
            const typePrefixComparesToTypePrefixName = typePrefix.compareTypePrefixName(typePrefixName);

            if (typePrefixComparesToTypePrefixName) {
              return true;
            }
          }) || null;

    return typePrefix;
  }

  findVariableByVariableIdentifier(variableIdentifier) {
    const variables = this.getVariables(),
          variable = variables.find((variable) => {
            const variableComparesToVariableIdentifier = variable.compareVariableIdentifier(variableIdentifier);

            if (variableComparesToVariableIdentifier) {
              return true;
            }
          }) || null;

    return variable;
  }

  findLabelByMetavariableName(metavariableName) {
    const labels = this.getLabels(),
          label = labels.find((label) => {
            const labelComparesToMetavariableName = label.compareMetavariableName(metavariableName);

            if (labelComparesToMetavariableName) {
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
            const metavariableComparesToMetavariableName = metavariable.compareMetavariableName(metavariableName);

            if (metavariableComparesToMetavariableName) {
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
            const context = this, ///
                  labelUnifies = reference.unifyLabel(label, context);

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

  isTopLevelMetaAssertionPresentByReference(reference) {
    const topLevelMetaAssertion = this.findTopLevelMetaAssertionByReference(reference),
          topLevelMetaAssertionPresent = (topLevelMetaAssertion !== null);

    return topLevelMetaAssertionPresent;
  }

  getFileContext() {
    const fileContext = this; ///

    return fileContext;
  }

  getDepth() {
    let depth = this.context.getDepth();

    depth++;

    return depth;
  }

  nodeAsString(node) {
    const string = nodeAsString(node, this.tokens);

    return string;
  }

  nodesAsString(node) {
    const string = nodesAsString(node, this.tokens);

    return string;
  }

  trace(message, node = null) {
    const level = TRACE_LEVEL;

    this.writeToLog(level, message, node);
  }

  debug(message, node = null) {
    const level = DEBUG_LEVEL;

    this.writeToLog(level, message, node);
  }

  info(message, node = null) {
    const level = INFO_LEVEL;

    this.writeToLog(level, message, node);
  }

  warning(message, node = null) {
    const level = WARNING_LEVEL;

    this.writeToLog(level, message, node);
  }

  error(message, node = null) {
    const level = ERROR_LEVEL;

    this.writeToLog(level, message, node);
  }

  writeToLog(level, message, node) {
    const lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex),
          filePath = (lineIndex === null) ?
                        this.filePath :
                          null;

    this.context.writeToLog(level, message, filePath, lineIndex);

    this.lineIndex = lineIndex;
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

      verifies ?
        this.complete() :
          this.clear();

      if (verifies) {
        this.info(`...verified the '${this.filePath}' file.`);
      }
    }

    return verifies;
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

  clear() {
    this.lineIndex = null;

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

  complete() {
    this.lineIndex = null;
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

  static fromFile(file, context) {
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
          fileContext = new FileContext(context, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);

    return fileContext;
  }

  static fromFilePath(filePath, context) {
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
          fileContext = new FileContext(context, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);

    return fileContext;
  }
}
