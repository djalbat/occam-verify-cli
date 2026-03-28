"use strict";

import { FileContext } from "occam-languages";
import { arrayUtilities } from "necessary";
import { lexersUtilities, parsersUtilities } from "occam-nominal";

import NominalLexer from "../../nominal/lexer";
import NominalParser from "../../nominal/parser";

import { verifyFile } from "../../process/verify";
import { initialiseFile } from "../../process/initialise";
import { baseTypeFromNothing } from "../../utilities/type";
import { findMetaTypeByMetaTypeName } from "../../metaTypes";
import { typesFromJSON,
         lemmasFromJSON,
         typesToTypesJSON,
         metaLemmasFromJSON,
         combinatorsFromJSON,
         typePrefixesFromJSON,
         constructorsFromJSON,
         metatheoremsFromJSON,
         declaredVariablesFromJSON,
         combinatorsToCombinatorsJSON,
         declaredMetavariablesFromJSON,
         typePrefixesToTypePrefixesJSON,
         constructorsToConstructorsJSON,
         metatheoremsToMetatheoremsJSON,
         declaredVariablesToDeclaredVariablesJSON,
         declaredMetavariablesToDeclaredMetavariablesJSON } from "../../utilities/json";

const { push, filter } = arrayUtilities,
      { nominalLexerFromCombinedCustomGrammar } = lexersUtilities,
      { nominalParserFromCombinedCustomGrammar } = parsersUtilities;

export default class NominalFileContext extends FileContext {
  constructor(context, fileContent, filePath, tokens, node, lexer, parser, types, rules, axioms, lemmas, theorems, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, declaredVariables, declaredMetavariables) {
    super(context, fileContent, filePath, tokens, node);

    this.lexer = lexer;
    this.parser = parser;
    this.context = context;
    this.filePath = filePath;
    this.tokens = tokens;
    this.node = node;
    this.types = types;
    this.rules = rules;
    this.axioms = axioms;
    this.lemmas = lemmas;
    this.theorems = theorems;
    this.metaLemmas = metaLemmas;
    this.conjectures = conjectures;
    this.combinators = combinators;
    this.typePrefixes = typePrefixes;
    this.constructors = constructors;
    this.metatheorems = metatheorems;
    this.declaredVariables = declaredVariables;
    this.declaredMetavariables = declaredMetavariables;
  }

  getLexer() {
    return this.lexer;
  }

  getParser() {
    return this.parser;
  }

  getEquivalences() {
    const equivalences = [];

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

  getTypes(includeRelease = true) {
    const types = includeRelease ?
                    this.context.getTypes() :
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

  getDeclaredVariables() {
    return this.declaredVariables;
  }

  getDeclaredMetavariables(includeRelease = true) {
    return this.declaredMetavariables;
  }

  getTerms() {
    const terms = [];

    return terms;
  }

  getFrames() {
    const frames = [];

    return frames;
  }

  getEqualities() {
    const equalities = [];

    return equalities;
  }

  getJudgements() {
    const judgements = [];

    return judgements;
  }

  getAssertions() {
    const assertions = [];

    return assertions;
  }

  getStatements() {
    const statements = [];

    return statements;
  }

  getReferences() {
    const references = [];

    return references;
  }

  getAssumptions() {
    const assumptions = [];

    return assumptions;
  }

  getMetavariables() {
    const metavariables = [];

    return metavariables;
  }

  getSubstitutions() {
    const substitutions = [];

    return substitutions;
  }

  addType(type) {
    this.types.push(type);

    const filePath = this.getFilePath(),
          typeString = type.getString();

    this.trace(`Added the '${typeString}' type to the '${filePath}' file context.`)
  }

  addRule(rule) {
    this.rules.push(rule);

    const filePath = this.getFilePath(),
          ruleString = rule.getString();

    this.trace(`Added the '${ruleString}' rule to the '${filePath}' file context.`)
  }

  addAxiom(axiom) {
    this.axioms.push(axiom);

    const filePath = this.getFilePath(),
          axiomString = axiom.getString();

    this.trace(`Added the '${axiomString}' axiom to the '${filePath}' file context.`)
  }

  addLemma(lemma) {
    this.lemmas.push(lemma);

    const filePath = this.getFilePath(),
          lemmaString = lemma.getString();

    this.trace(`Added the '${lemmaString}' lemma to the '${filePath}' file context.`)
  }

  addTheorem(theorem) {
    this.theorems.push(theorem);

    const filePath = this.getFilePath(),
          theoremString = theorem.getString();

    this.trace(`Added the '${theoremString}' theorem to the '${filePath}' file context.`)
  }

  addMetaLemma(metaLemma) {
    this.metaLemmas.push(metaLemma);

    const filePath = this.getFilePath(),
          metaLemmaString = metaLemma.getString();

    this.trace(`Added the '${metaLemmaString}' meta-lemma to the '${filePath}' file context.`)
  }

  addConjecture(conjecture) {
    this.conjectures.push(conjecture);

    const filePath = this.getFilePath(),
          ocnjectureString = ocnjecture.getString();

    this.trace(`Added the '${ocnjectureString}' ocnjecture to the '${filePath}' file context.`)
  }

  addCombinator(combinator) {
    this.combinators.push(combinator);

    const filePath = this.getFilePath(),
          combinatorString = combinator.getString();

    this.trace(`Added the '${combinatorString}' combinator to the '${filePath}' file context.`)
  }

  addTypePrefix(typePrefix) {
    this.typePrefixes.push(typePrefix);

    const filePath = this.getFilePath(),
          typePrefixString = typePrefix.getString();

    this.trace(`Added the '${typePrefixString}' type-prefix to the '${filePath}' file context.`)
  }

  addConstructor(constructor) {
    this.constructors.push(constructor);

    const filePath = this.getFilePath(),
          constructorString = constructor.getString();

    this.trace(`Added the '${constructorString}' constructor to the '${filePath}' file context.`)
  }

  addMetatheorem(metatheorem) {
    this.metatheorems.push(metatheorem);

    const filePath = this.getFilePath(),
          metatheoremString = metatheorem.getString();

    this.trace(`Added the '${metatheoremString}' metatheorem to the '${filePath}' file context.`)
  }

  addDeclaredVariable(declaredVariable) {
    this.declaredVariables.push(declaredVariable);

    const filePath = this.getFilePath(),
          declaredVariableString = declaredVariable.getString();

    this.trace(`Added the '${declaredVariableString}' declared variable to the '${filePath}' file context.`)
  }

  addDeclaredMetavariable(declaredMetavariable) {
    this.declaredMetavariables.push(declaredMetavariable);

    const filePath = this.getFilePath(),
          declaredMetavariableString = declaredMetavariable.getString();

    this.trace(`Added the '${declaredMetavariableString}' declared metavariable to the '${filePath}' file context.`)
  }

  findMetavariable(metavariable, context) {
    const declaredMetavariables = this.getDeclaredMetavariables();

    metavariable = declaredMetavariables.find((declaredMetavariable) => {
      const metavariableUnifies = declaredMetavariable.unifyMetavariable(metavariable, context);

      if (metavariableUnifies) {
        return true;
      }
    }) || null;

    return metavariable;
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

  findMetaLemmasByReference(reference) {
    const metaLemmas = this.getMetaLemmas();

    filter(metaLemmas, (metaLemma) => {
      const topLevelMetaAssertion = metaLemma, ///
            topLevelMetaAssertionCompares = reference.compareTopLevelMetaAssertion(topLevelMetaAssertion);

      if (topLevelMetaAssertionCompares) {
        return true;
      }
    });

    return metaLemmas;
  }

  findMetatheoremsByReference(reference) {
    const metatheorems = this.getMetatheorems();

    filter(metatheorems, (metatheorem) => {
      const topLevelMetaAssertion = metatheorem, ///
            topLevelMetaAssertionCompares = reference.compareTopLevelMetaAssertion(topLevelMetaAssertion);

      if (topLevelMetaAssertionCompares) {
        return true;
      }
    });

    return metatheorems;
  }

  findTopLevelAssertionByReference(reference) {
    const axiom = this.findAxiomByReference(reference),
          lemma = this.findLemmaByReference(reference),
          theorem = this.findTheoremByReference(reference),
          conjecture = this.findConjectureByReference(reference),
          topLevelAssertion = (axiom || lemma || theorem || conjecture);

    return topLevelAssertion;
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

  findTypeByTypeName(typeName) {
    let types = this.getTypes();

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

  findDeclaredVariableByVariableIdentifier(VariableIdentitifer) {
    const declaredVariables = this.getDeclaredVariables(),
          declaredVariable = declaredVariables.find((declaredVariable) => {
            const declaredVariableComparesToVariableIdentitifer = declaredVariable.compareVariableIdentifier(VariableIdentitifer);

            if (declaredVariableComparesToVariableIdentitifer) {
              return true;
            }
          }) || null;

    return declaredVariable;
  }

  findDeclaredMetavariableByMetavariableName(metavariableName) {
    const declaredMetavariables = this.getDeclaredMetavariables(),
          declaredMetavariable = declaredMetavariables.find((declaredMetavariable) => {
            const declaredMetavariableComparesToMetavariableName = declaredMetavariable.compareMetavariableName(metavariableName);

            if (declaredMetavariableComparesToMetavariableName) {
              return true;
            }
          }) || null;

    return declaredMetavariable;
  }

  findMetaLevelAssumptionByMetaLevelAssumptionNode(metaLevelAssumptionNode) {
    const metaLevelAssumption = null;

    return metaLevelAssumption;
  }

  findProcedureByProcedureName(procedureName) {
    const procedures = this.getProcedures(),
          procedure = procedures.find((procedure) => {
            const procedureComparesToProcedureName = procedure.compareProcedureName(procedureName);

            if (procedureComparesToProcedureName) {
              return true;
            }
          }) || null;

    return procedure;
  }

  findMetaTypeByMetaTypeName(metaTypeName) { return findMetaTypeByMetaTypeName(metaTypeName); }

  isMetavariablePresent(metavariable, context) {
    metavariable = this.findMetavariable(metavariable, context);  ///

    const metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  isLabelPresentByReference(reference) {
    const labels = this.getLabels(),
          labelPresent = labels.some((label) => {
            const labelUnifies = reference.unifyLabel(label);

            if (labelUnifies) {
              return true;
            }
          });

    return labelPresent;
  }

  isTopLevelMetaAssertionPresentByReference(reference) {
    const topLevelMetaAssertion = this.findTopLevelMetaAssertionByReference(reference),
          topLevelMetaAssertionPresent = (topLevelMetaAssertion !== null);

    return topLevelMetaAssertionPresent;
  }

  isLabelPresentByLabelNode(labelNode) {
    const labels = this.getLabels(),
          labelPresent = labels.some((label) => {
            const labelNodeMatches = label.matchLabelNode(labelNode);

            if (labelNodeMatches) {
              return true;
            }
          });

    return labelPresent;
  }

  isTypePresentByTypeName(typeName, includeRelease = true) {
    const type = this.findTypeByTypeName(typeName, includeRelease),
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

  isDeclaredVariablePresentByVariableIdentifier(variableIdentifier) {
    const declaredVariable = this.findDeclaredVariableByVariableIdentifier(variableIdentifier),
          declaredVariablePresent = (declaredVariable !== null);

    return declaredVariablePresent;
  }

  isDeclaredMetavariablePresentByMetavariableName(metavariableName) {
    const declaredMetavariable = this.findDeclaredMetavariableByMetavariableName(metavariableName),
          declaredMetavariablePresent = (declaredMetavariable !== null);

    return declaredMetavariablePresent;
  }

  isProcedurePresentByProcedureName(procedureName) {
    const procedure = this.findProcedureByProcedureName(procedureName),
          procedurePresent = (procedure !== null);

    return procedurePresent;
  }

  isMetaLevel() {
    const metaLEvel = false;

    return metaLEvel;
  }

  clear() {
    this.types = [];
    this.rules = [];
    this.axioms = [];
    this.lemmas = [];
    this.theorems = [];
    this.metaLemmas = [];
    this.conjectures = [];
    this.combinators = [];
    this.typePrefixes = [];
    this.constructors = [];
    this.metatheorems = [];
    this.declaredVariables = [];
    this.declaredMetavariables = [];
  }

  complete() {
    ///
  }

  async verifyFile() {
    const node = this.getNode(),
          context = this, ///
          fileNode = node,  ///
          fileVerifies = await verifyFile(fileNode, context);

    return fileVerifies;
  }

  initialise() {
    const fileContext = this; ///

    super.initialise();

    this.types = [];

    typesFromJSON(this.json, this.types, fileContext);

    this.lemmas = lemmasFromJSON(this.json, fileContext);
    this.metaLemmas = metaLemmasFromJSON(this.json, fileContext);

    this.declaredMetavariables = declaredMetavariablesFromJSON(this.json, fileContext);
    this.declaredVariables = declaredVariablesFromJSON(this.json, fileContext);
    this.typePrefixes = typePrefixesFromJSON(this.json, fileContext);
    this.combinators = combinatorsFromJSON(this.json, fileContext);
    this.constructors = constructorsFromJSON(this.json, fileContext);
    this.metatheorems = metatheoremsFromJSON(this.json, fileContext);

    const node = this.getNode(),
          context = this, ///
          fileNode = node;  ///

    initialiseFile(fileNode, context);

    // this.rules = rulesFromJSON(json, fileContext);
    // this.axioms = axiomsFromJSON(json, fileContext);
    // this.theorems = theoremsFromJSON(json, fileContext);
    // this.conjectures = conjecturesFromJSON(json, fileContext);
  }

  toJSON() {
    const typesJSON = typesToTypesJSON(this.types),
          combinatorsJSON = combinatorsToCombinatorsJSON(this.combinators),
          typePrefixesJSON = typePrefixesToTypePrefixesJSON(this.typePrefixes),
          constructorsJSON = constructorsToConstructorsJSON(this.constructors),
          metatheoremsJSON = metatheoremsToMetatheoremsJSON(this.metatheorems),
          declaredVariablesJSON = declaredVariablesToDeclaredVariablesJSON(this.declaredVariables),
          declaredMetavariablesJSON = declaredMetavariablesToDeclaredMetavariablesJSON(this.declaredMetavariables),
          fileContent = this.fileContent,
          filePath = this.filePath,
          types = typesJSON,  ///
          combinators = combinatorsJSON,  ///
          typePrefixes = typePrefixesJSON,  ///
          constructors = constructorsJSON,  ///
          metatheorems = metatheoremsJSON,  ///
          declaredVariables = declaredVariablesJSON,  ///
          declaredMetavariables = declaredMetavariablesJSON,  ///
          json = {
            fileContent,
            filePath,
            types,
            combinators,
            typePrefixes,
            constructors,
            metatheorems,
            declaredVariables,
            declaredMetavariables
          };

    return json;
  }

  static fromFile(file, context) {
    const releaseContext = context, ///
          combinedCustomGrammar = releaseContext.getCombinedCustomGrammar(),
          nominalLexer = nominalLexerFromCombinedCustomGrammar(NominalLexer, combinedCustomGrammar),
          nominalParser = nominalParserFromCombinedCustomGrammar(NominalParser, combinedCustomGrammar),
          lexer = nominalLexer, ///
          parser = nominalParser, ///
          types = [],
          rules = [],
          axioms = [],
          lemmas = [],
          theorems = [],
          metaLemmas = [],
          conjectures = [],
          combinators = [],
          typePrefixes = [],
          constructors = [],
          metatheorems = [],
          declaredVariables = [],
          declaredMetavariables = [],
          nominalFileContext = FileContext.fromFile(NominalFileContext, file, lexer, parser, types, rules, axioms, lemmas, theorems, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, declaredVariables, declaredMetavariables, context);

    return nominalFileContext;
  }

  static fromJSON(json, context) {
    const releaseContext = context, ///
          combinedCustomGrammar = releaseContext.getCombinedCustomGrammar(),
          nominalLexer = nominalLexerFromCombinedCustomGrammar(NominalLexer, combinedCustomGrammar),
          nominalParser = nominalParserFromCombinedCustomGrammar(NominalParser, combinedCustomGrammar),
          lexer = nominalLexer, ///
          parser = nominalParser, ///
          types = null,
          rules = null,
          axioms = null,
          lemmas = null,
          theorems = null,
          metaLemmas = null,
          conjectures = null,
          combinators = null,
          typePrefixes = null,
          constructors = null,
          metatheorems = null,
          declaredVariables = null,
          declaredMetavariables = null,
          nominalFileContext = FileContext.fromJSON(NominalFileContext, json, lexer, parser, types, rules, axioms, lemmas, theorems, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, declaredVariables, declaredMetavariables, context);

    return nominalFileContext;
  }
}
