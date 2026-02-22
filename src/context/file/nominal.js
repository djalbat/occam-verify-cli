"use strict";

import { FileContext } from "occam-languages";
import { arrayUtilities } from "necessary";
import { lexersUtilities, parsersUtilities } from "occam-nominal";

import elements from "../../elements";
import NominalLexer from "../../nominal/lexer";
import NominalParser from "../../nominal/parser";

import { verifyFile } from "../../process/verify";
import { baseTypeFromNothing } from "../../utilities/type";
import { findMetaTypeByMetaTypeName } from "../../metaTypes";
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
         metavariablesToMetavariablesJSON } from "../../utilities/json";

const { push, filter } = arrayUtilities,
      { nominalLexerFromCombinedCustomGrammar } = lexersUtilities,
      { nominalParserFromCombinedCustomGrammar } = parsersUtilities;

export default class NominalFileContext extends FileContext {
  constructor(context, filePath, tokens, node, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables) {
    super(context, filePath, tokens, node);

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
    this.variables = variables;
    this.metaLemmas = metaLemmas;
    this.conjectures = conjectures;
    this.combinators = combinators;
    this.typePrefixes = typePrefixes;
    this.constructors = constructors;
    this.metatheorems = metatheorems;
    this.metavariables = metavariables;
  }

  getLexer() {
    if (this.lexer === null) {
      const combinedCustomGrammar = this.getCombinedCustomGrammar(),
            nominalLexer = nominalLexerFromCombinedCustomGrammar(NominalLexer, combinedCustomGrammar);

      this.lexer = nominalLexer; ///
    }

    return this.lexer;
  }

  getParser() {
    if (this.parser === null) {
      const combinedCustomGrammar = this.getCombinedCustomGrammar(),
            nominalParser = nominalParserFromCombinedCustomGrammar(NominalParser, combinedCustomGrammar);

      this.parser = nominalParser; ///
    }

    return this.parser;
  }

  getJudgements() {
    const judgements = [];

    return judgements;
  }

  getEquivalences() {
    const { Equivalences } = elements,
          context = this, ///
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

  addVariable(variable) {
    this.variables.push(variable);

    const filePath = this.getFilePath(),
          variableString = variable.getString();

    this.trace(`Added the '${variableString}' variable to the '${filePath}' file context.`)
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

  addMetavariable(metavariable) {
    this.metavariables.push(metavariable);

    const filePath = this.getFilePath(),
          metavariableString = metavariable.getString();

    this.trace(`Added the '${metavariableString}' metavariable to the '${filePath}' file context.`)
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

  findLabelByMetavariable(metavariable) {
    const labels = this.getLabels(),
          label = labels.find((label) => {
            const labelMetavariableComparesToMetavariable = label.compareMetavariable(metavariable);

            if (labelMetavariableComparesToMetavariable) {
              return true;
            }
          }) || null;

    return label;
  }

  findMetaTypeByMetaTypeName(metaTypeName) {
    const metaType = findMetaTypeByMetaTypeName(metaTypeName);

    return metaType;
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

  findJudgementByMetavariableName(metavariableName) {
    const judgements = this.getJudgements(),
          judgement = judgements.find((judgement) => {
            const judgementMetavariableComparesToMetavariable = judgement.compareMetavariableName(metavariableName);

            if (judgementMetavariableComparesToMetavariable) {
              return true;
            }
          }) || null;

    return judgement;
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

  isMetavariablePresent(metavariable) {
    metavariable = this.findMetavariable(metavariable);

    const metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  isLabelPresentByMetavariable(metavariable) {
    const label = this.findLabelByMetavariable(metavariable),
          labelPresent = (label !== null);

    return labelPresent;
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

  isLabelPresentByMetavariableName(metavariableName) {
    const label = this.findLabelByMetavariableName(metavariableName),
          labelPresent = (label !== null);

    return labelPresent;
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

  isMetavariablePresentByMetavariableName(metavariableName) {
    const metavariable = this.findMetavariableByMetavariableName(metavariableName),
          metavariablePresent = (metavariable !== null);

    return metavariablePresent;
  }

  isProcedurePresentByProcedureName(procedureName) {
    const procedure = this.findProcedureByProcedureName(procedureName),
          procedurePresent = (procedure !== null);

    return procedurePresent;
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

  complete() {
    ///
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

  async verifyFile() {
    const node = this.getNode(),
          context = this, ///
          fileNode = node,  ///
          fileVerifies = await verifyFile(fileNode, context);

    return fileVerifies;
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
    const lexer = null,
          parser = null,
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
          nominalFileContext = FileContext.fromFile(NominalFileContext, file, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables, context);

    return nominalFileContext;
  }

  static fromFilePath(filePath, context) {
    const lexer = null,
          parser = null,
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
          nominalFileContext = FileContext.fromFilePath(NominalFileContext, filePath, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables, context);

    return nominalFileContext;
  }
}
