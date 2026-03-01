"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NominalFileContext;
    }
});
const _occamlanguages = require("occam-languages");
const _necessary = require("necessary");
const _occamnominal = require("occam-nominal");
const _elements = /*#__PURE__*/ _interop_require_default(require("../../elements"));
const _lexer = /*#__PURE__*/ _interop_require_default(require("../../nominal/lexer"));
const _parser = /*#__PURE__*/ _interop_require_default(require("../../nominal/parser"));
const _verify = require("../../process/verify");
const _type = require("../../utilities/type");
const _metaTypes = require("../../metaTypes");
const _json = require("../../utilities/json");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const { push, filter } = _necessary.arrayUtilities, { nominalLexerFromCombinedCustomGrammar } = _occamnominal.lexersUtilities, { nominalParserFromCombinedCustomGrammar } = _occamnominal.parsersUtilities;
class NominalFileContext extends _occamlanguages.FileContext {
    constructor(context, fileContent, filePath, tokens, node, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables){
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
        return this.lexer;
    }
    getParser() {
        return this.parser;
    }
    getJudgements() {
        const judgements = [];
        return judgements;
    }
    getEquivalences() {
        const { Equivalences } = _elements.default, context = this, equivalences = Equivalences.fromNothing(context);
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
            this.rules.forEach((rule)=>{
                const ruleLabels = rule.getLabels();
                push(labels, ruleLabels);
            });
            this.axioms.forEach((axiom)=>{
                const axiomLabels = axiom.getLabels();
                push(labels, axiomLabels);
            });
            this.lemmas.forEach((lemma)=>{
                const lemmaLabels = lemma.getLabels();
                push(labels, lemmaLabels);
            });
            this.theorems.forEach((theorem)=>{
                const theoremLabels = theorem.getLabels();
                push(labels, theoremLabels);
            });
            this.conjectures.forEach((conjecture)=>{
                const conjectureLabels = conjecture.getLabels();
                push(labels, conjectureLabels);
            });
            this.metatheorems.forEach((metatheorem)=>{
                const metatheoremLabel = metatheorem.getLabel();
                labels.push(metatheoremLabel);
            });
        }
        return labels;
    }
    getTypes(includeRelease = true, includeDependencies = true) {
        const types = includeRelease ? this.context.getTypes(includeDependencies) : this.types;
        return types;
    }
    getRules(includeRelease = true) {
        const rules = includeRelease ? this.context.getRules() : this.rules;
        return rules;
    }
    getAxioms(includeRelease = true) {
        const axioms = includeRelease ? this.context.getAxioms() : this.axioms;
        return axioms;
    }
    getLemmas(includeRelease = true) {
        const lemmas = includeRelease ? this.context.getLemmas() : this.lemmas;
        return lemmas;
    }
    getTheorems(includeRelease = true) {
        const theorems = includeRelease ? this.context.getTheorems() : this.theorems;
        return theorems;
    }
    getVariables(includeRelease = true) {
        return this.variables;
    }
    getProcedures(includeRelease = true) {
        const procedures = includeRelease ? this.context.getProcedures() : null; ///
        return procedures;
    }
    getMetaLemmas(includeRelease = true) {
        const metaLemmas = includeRelease ? this.context.getMetaLemmas() : this.metaLemmas;
        return metaLemmas;
    }
    getConjectures(includeRelease = true) {
        const conjectures = includeRelease ? this.context.getConjectures() : this.conjectures;
        return conjectures;
    }
    getCombinators(includeRelease = true) {
        const combinators = includeRelease ? this.context.getCombinators() : this.combinators;
        return combinators;
    }
    getTypePrefixes(includeRelease = true) {
        const typePrefixes = includeRelease ? this.context.getTypePrefixes() : this.typePrefixes;
        return typePrefixes;
    }
    getConstructors(includeRelease = true) {
        const constructors = includeRelease ? this.context.getConstructors() : this.constructors;
        return constructors;
    }
    getMetatheorems(includeRelease = true) {
        const metatheorems = includeRelease ? this.context.getMetatheorems() : this.metatheorems;
        return metatheorems;
    }
    getMetavariables(includeRelease = true) {
        return this.metavariables;
    }
    addType(type) {
        this.types.push(type);
        const filePath = this.getFilePath(), typeString = type.getString();
        this.trace(`Added the '${typeString}' type to the '${filePath}' file context.`);
    }
    addRule(rule) {
        this.rules.push(rule);
        const filePath = this.getFilePath(), ruleString = rule.getString();
        this.trace(`Added the '${ruleString}' rule to the '${filePath}' file context.`);
    }
    addAxiom(axiom) {
        this.axioms.push(axiom);
        const filePath = this.getFilePath(), axiomString = axiom.getString();
        this.trace(`Added the '${axiomString}' axiom to the '${filePath}' file context.`);
    }
    addLemma(lemma) {
        this.lemmas.push(lemma);
        const filePath = this.getFilePath(), lemmaString = lemma.getString();
        this.trace(`Added the '${lemmaString}' lemma to the '${filePath}' file context.`);
    }
    addTheorem(theorem) {
        this.theorems.push(theorem);
        const filePath = this.getFilePath(), theoremString = theorem.getString();
        this.trace(`Added the '${theoremString}' theorem to the '${filePath}' file context.`);
    }
    addVariable(variable) {
        this.variables.push(variable);
        const filePath = this.getFilePath(), variableString = variable.getString();
        this.trace(`Added the '${variableString}' variable to the '${filePath}' file context.`);
    }
    addMetaLemma(metaLemma) {
        this.metaLemmas.push(metaLemma);
        const filePath = this.getFilePath(), metaLemmaString = metaLemma.getString();
        this.trace(`Added the '${metaLemmaString}' meta-lemma to the '${filePath}' file context.`);
    }
    addConjecture(conjecture) {
        this.conjectures.push(conjecture);
        const filePath = this.getFilePath(), ocnjectureString = ocnjecture.getString();
        this.trace(`Added the '${ocnjectureString}' ocnjecture to the '${filePath}' file context.`);
    }
    addCombinator(combinator) {
        this.combinators.push(combinator);
        const filePath = this.getFilePath(), combinatorString = combinator.getString();
        this.trace(`Added the '${combinatorString}' combinator to the '${filePath}' file context.`);
    }
    addTypePrefix(typePrefix) {
        this.typePrefixes.push(typePrefix);
        const filePath = this.getFilePath(), typePrefixString = typePrefix.getString();
        this.trace(`Added the '${typePrefixString}' type-prefix to the '${filePath}' file context.`);
    }
    addConstructor(constructor) {
        this.constructors.push(constructor);
        const filePath = this.getFilePath(), constructorString = constructor.getString();
        this.trace(`Added the '${constructorString}' constructor to the '${filePath}' file context.`);
    }
    addMetatheorem(metatheorem) {
        this.metatheorems.push(metatheorem);
        const filePath = this.getFilePath(), metatheoremString = metatheorem.getString();
        this.trace(`Added the '${metatheoremString}' metatheorem to the '${filePath}' file context.`);
    }
    addMetavariable(metavariable) {
        this.metavariables.push(metavariable);
        const filePath = this.getFilePath(), metavariableString = metavariable.getString();
        this.trace(`Added the '${metavariableString}' metavariable to the '${filePath}' file context.`);
    }
    findMetavariable(metavariable) {
        const metavariables = this.getMetavariables(), specificMetavariable = metavariable; ///
        metavariable = metavariables.find((metavariable)=>{
            const context = this, generalMetavariable = metavariable, metavariableUnifies = generalMetavariable.unifyMetavariable(specificMetavariable, context);
            if (metavariableUnifies) {
                return true;
            }
        }) || null;
        return metavariable;
    }
    findLabelByMetavariable(metavariable) {
        const labels = this.getLabels(), label = labels.find((label)=>{
            const labelMetavariableComparesToMetavariable = label.compareMetavariable(metavariable);
            if (labelMetavariableComparesToMetavariable) {
                return true;
            }
        }) || null;
        return label;
    }
    findMetaTypeByMetaTypeName(metaTypeName) {
        const metaType = (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName);
        return metaType;
    }
    findRuleByReference(reference) {
        const rules = this.getRules(), metavariableName = reference.getMetavariableName(), rule = rules.find((rule)=>{
            const ruleComparesToMetavariableName = rule.compareMetavariableName(metavariableName);
            if (ruleComparesToMetavariableName) {
                return true;
            }
        }) || null;
        return rule;
    }
    findAxiomByReference(reference) {
        const axioms = this.getAxioms(), metavariableName = reference.getMetavariableName(), axiom = axioms.find((axiom)=>{
            const axiomComparesToMetavariableName = axiom.compareMetavariableName(metavariableName);
            if (axiomComparesToMetavariableName) {
                return true;
            }
        }) || null;
        return axiom;
    }
    findLemmaByReference(reference) {
        const lemmas = this.getLemmas(), metavariableName = reference.getMetavariableName(), lemma = lemmas.find((lemma)=>{
            const lemmaComparesToMetavariableName = lemma.compareMetavariableName(metavariableName);
            if (lemmaComparesToMetavariableName) {
                return true;
            }
        }) || null;
        return lemma;
    }
    findTheoremByReference(reference) {
        const theorems = this.getTheorems(), metavariableName = reference.getMetavariableName(), theorem = theorems.find((theorem)=>{
            const theoremComparesToMetavariableName = theorem.compareMetavariableName(metavariableName);
            if (theoremComparesToMetavariableName) {
                return true;
            }
        }) || null;
        return theorem;
    }
    findMetaLemmaByReference(reference) {
        const metaLemmas = this.getMetaLemmas(), metaLemma = metaLemmas.find((metaLemma)=>{
            const metaLemmaComparesToReference = metaLemma.compareReference(reference);
            if (metaLemmaComparesToReference) {
                return true;
            }
        }) || null;
        return metaLemma;
    }
    findConjectureByReference(reference) {
        const conjectures = this.getConjectures(), metavariableName = reference.getMetavariableName(), conjecture = conjectures.find((conjecture)=>{
            const conjectureComparesToMetavariableName = conjecture.compareMetavariableName(metavariableName);
            if (conjectureComparesToMetavariableName) {
                return true;
            }
        }) || null;
        return conjecture;
    }
    findMetaLemmasByReference(reference) {
        const metaLemmas = this.getMetaLemmas();
        filter(metaLemmas, (metaLemma)=>{
            const context = this, topLevelMetaAssertion = metaLemma, topLevelMetaAssertionUnifies = reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
            if (topLevelMetaAssertionUnifies) {
                return true;
            }
        });
        return metaLemmas;
    }
    findMetatheoremByReference(reference) {
        const metatheorems = this.getMetatheorems(), metatheorem = metatheorems.find((metatheorem)=>{
            const metatheoremComparesToReference = metatheorem.compareReference(reference);
            if (metatheoremComparesToReference) {
                return true;
            }
        }) || null;
        return metatheorem;
    }
    findMetatheoremsByReference(reference) {
        const metatheorems = this.getMetatheorems();
        filter(metatheorems, (metatheorem)=>{
            const context = this, topLevelMetaAssertion = metatheorem, topLevelMetaAssertionUnifies = reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
            if (topLevelMetaAssertionUnifies) {
                return true;
            }
        });
        return metatheorems;
    }
    findTopLevelAssertionByReference(reference) {
        const axiom = this.findAxiomByReference(reference), lemma = this.findLemmaByReference(reference), theorem = this.findTheoremByReference(reference), conjecture = this.findConjectureByReference(reference), topLevelAssertion = axiom || lemma || theorem || conjecture;
        return topLevelAssertion;
    }
    findTopLevelMetaAssertionByReference(reference) {
        const metaLemma = this.findMetaLemmaByReference(reference), metatheorem = this.findMetatheoremByReference(reference), topLevelMetaAssertion = metaLemma || metatheorem; ///
        return topLevelMetaAssertion;
    }
    findTopLevelMetaAssertionsByReference(reference) {
        const metaLemmas = this.findMetaLemmasByReference(reference), metatheorems = this.findMetatheoremsByReference(reference), topLevelMetaAssertions = [
            ...metaLemmas,
            ...metatheorems
        ];
        return topLevelMetaAssertions;
    }
    findTypeByTypeName(typeName, includeRelease = true, includeDependencies = true) {
        let types = this.getTypes(includeRelease, includeDependencies);
        const baseType = (0, _type.baseTypeFromNothing)();
        types = [
            ...types,
            baseType
        ];
        const type = types.find((type)=>{
            const typeComparesToTypeName = type.compareTypeName(typeName);
            if (typeComparesToTypeName) {
                return true;
            }
        }) || null;
        return type;
    }
    findTypeByNominalTypeName(nominalTypeName) {
        let types = this.getTypes();
        const baseType = (0, _type.baseTypeFromNothing)();
        types = [
            ...types,
            baseType
        ];
        const type = types.find((type)=>{
            const typeComparesToNominalTypeName = type.compareNominalTypeName(nominalTypeName);
            if (typeComparesToNominalTypeName) {
                return true;
            }
        }) || null;
        return type;
    }
    findTypeByPrefixedTypeName(prefixedTypeName) {
        let types = this.getTypes();
        const baseType = (0, _type.baseTypeFromNothing)();
        types = [
            ...types,
            baseType
        ];
        const type = types.find((type)=>{
            const typeComparesToPrefixedTypeName = type.comparePrefixedTypeName(prefixedTypeName);
            if (typeComparesToPrefixedTypeName) {
                return true;
            }
        }) || null;
        return type;
    }
    findTypePrefixByTypePrefixName(typePrefixName) {
        const typePrefixes = this.getTypePrefixes(), typePrefix = typePrefixes.find((typePrefix)=>{
            const typePrefixComparesToTypePrefixName = typePrefix.compareTypePrefixName(typePrefixName);
            if (typePrefixComparesToTypePrefixName) {
                return true;
            }
        }) || null;
        return typePrefix;
    }
    findLabelByMetavariableName(metavariableName) {
        const labels = this.getLabels(), label = labels.find((label)=>{
            const labelComparesToMetavariableName = label.compareMetavariableName(metavariableName);
            if (labelComparesToMetavariableName) {
                return true;
            }
        }) || null;
        return label;
    }
    findJudgementByMetavariableName(metavariableName) {
        const judgements = this.getJudgements(), judgement = judgements.find((judgement)=>{
            const judgementMetavariableComparesToMetavariable = judgement.compareMetavariableName(metavariableName);
            if (judgementMetavariableComparesToMetavariable) {
                return true;
            }
        }) || null;
        return judgement;
    }
    findVariableByVariableIdentifier(variableIdentifier) {
        const variables = this.getVariables(), variable = variables.find((variable)=>{
            const variableComparesToVariableIdentifier = variable.compareVariableIdentifier(variableIdentifier);
            if (variableComparesToVariableIdentifier) {
                return true;
            }
        }) || null;
        return variable;
    }
    findMetavariableByMetavariableName(metavariableName) {
        const metavariables = this.getMetavariables(), metavariable = metavariables.find((metavariable)=>{
            const metavariableComparesToMetavariableName = metavariable.compareMetavariableName(metavariableName);
            if (metavariableComparesToMetavariableName) {
                return true;
            }
        }) || null;
        return metavariable;
    }
    findProcedureByProcedureName(procedureName) {
        const procedures = this.getProcedures(), procedure = procedures.find((procedure)=>{
            const procedureComparesToProcedureName = procedure.compareProcedureName(procedureName);
            if (procedureComparesToProcedureName) {
                return true;
            }
        }) || null;
        return procedure;
    }
    isMetavariablePresent(metavariable) {
        metavariable = this.findMetavariable(metavariable);
        const metavariablePresent = metavariable !== null;
        return metavariablePresent;
    }
    isLabelPresentByMetavariable(metavariable) {
        const label = this.findLabelByMetavariable(metavariable), labelPresent = label !== null;
        return labelPresent;
    }
    isLabelPresentByReference(reference) {
        const labels = this.getLabels(), labelPresent = labels.some((label)=>{
            const context = this, labelUnifies = reference.unifyLabel(label, context);
            if (labelUnifies) {
                return true;
            }
        });
        return labelPresent;
    }
    isMetavariablePresentByReference(reference) {
        const metavariables = this.getMetavariables(), metavariablePresent = metavariables.some((metavariable)=>{
            const context = this, metavariableUnifies = reference.unifyMetavariable(metavariable, context);
            if (metavariableUnifies) {
                return true;
            }
        });
        return metavariablePresent;
    }
    isTopLevelMetaAssertionPresentByReference(reference) {
        const topLevelMetaAssertion = this.findTopLevelMetaAssertionByReference(reference), topLevelMetaAssertionPresent = topLevelMetaAssertion !== null;
        return topLevelMetaAssertionPresent;
    }
    isTypePresentByTypeName(typeName, includeRelease = true, includeDependencies = true) {
        const type = this.findTypeByTypeName(typeName, includeRelease, includeDependencies), typePresent = type !== null;
        return typePresent;
    }
    isTypePresentByNominalTypeName(nominalTypeName) {
        const type = this.findTypeByNominalTypeName(nominalTypeName), typePresent = type !== null;
        return typePresent;
    }
    isTypePresentByPrefixedTypeName(prefixedTypeName) {
        const type = this.findTypeByPrefixedTypeName(prefixedTypeName), typePresent = type !== null;
        return typePresent;
    }
    isLabelPresentByMetavariableName(metavariableName) {
        const label = this.findLabelByMetavariableName(metavariableName), labelPresent = label !== null;
        return labelPresent;
    }
    isTypePrefixPresentByTypePrefixName(typePrefixName) {
        const typePrefix = this.findTypePrefixByTypePrefixName(typePrefixName), typePrefixPresent = typePrefix !== null;
        return typePrefixPresent;
    }
    isVariablePresentByVariableIdentifier(variableIdentifier) {
        const variable = this.findVariableByVariableIdentifier(variableIdentifier), variablePresent = variable !== null;
        return variablePresent;
    }
    isMetavariablePresentByMetavariableName(metavariableName) {
        const metavariable = this.findMetavariableByMetavariableName(metavariableName), metavariablePresent = metavariable !== null;
        return metavariablePresent;
    }
    isProcedurePresentByProcedureName(procedureName) {
        const procedure = this.findProcedureByProcedureName(procedureName), procedurePresent = procedure !== null;
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
    async verifyFile() {
        const node = this.getNode(), context = this, fileNode = node, fileVerifies = await (0, _verify.verifyFile)(fileNode, context);
        return fileVerifies;
    }
    initialise(json) {
        const fileContext = this; ///
        this.types = [];
        (0, _json.typesFromJSON)(json, this.types, fileContext);
        this.lemmas = (0, _json.lemmasFromNothing)();
        this.metaLemmas = (0, _json.metaLemmasFromNothing)();
        this.metavariables = (0, _json.metavariablesFromJSON)(json, fileContext);
        this.variables = (0, _json.variablesFromJSON)(json, fileContext);
        this.rules = (0, _json.rulesFromJSON)(json, fileContext);
        this.axioms = (0, _json.axiomsFromJSON)(json, fileContext);
        this.theorems = (0, _json.theoremsFromJSON)(json, fileContext);
        this.conjectures = (0, _json.conjecturesFromJSON)(json, fileContext);
        this.combinators = (0, _json.combinatorsFromJSON)(json, fileContext);
        this.typePrefixes = (0, _json.typePrefixesFromJSON)(json, fileContext);
        this.constructors = (0, _json.constructorsFromJSON)(json, fileContext);
        this.metatheorems = (0, _json.metatheoremsFromJSON)(json, fileContext);
    }
    toJSON() {
        const typesJSON = (0, _json.typesToTypesJSON)(this.types), rulesJSON = (0, _json.rulesToRulesJSON)(this.rules), axiomsJSON = (0, _json.axiomsToAxiomsJSON)(this.axioms), theoremsJSON = (0, _json.theoremsToTheoremsJSON)(this.theorems), variablesJSON = (0, _json.variablesToVariablesJSON)(this.variables), conjecturesJSON = (0, _json.conjecturesToConjecturesJSON)(this.conjectures), combinatorsJSON = (0, _json.combinatorsToCombinatorsJSON)(this.combinators), typePrefixesJSON = (0, _json.typePrefixesToTypePrefixesJSON)(this.typePrefixes), constructorsJSON = (0, _json.constructorsToConstructorsJSON)(this.constructors), metatheoremsJSON = (0, _json.metatheoremsToMetatheoremsJSON)(this.metatheorems), metavariablesJSON = (0, _json.metavariablesToMetavariablesJSON)(this.metavariables), filePath = this.filePath, types = typesJSON, rules = rulesJSON, axioms = axiomsJSON, theorems = theoremsJSON, variables = variablesJSON, conjectures = conjecturesJSON, combinators = combinatorsJSON, typePrefixes = typePrefixesJSON, constructors = constructorsJSON, metatheorems = metatheoremsJSON, metavariables = metavariablesJSON, json = {
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
        const releaseContext = context, combinedCustomGrammar = releaseContext.getCombinedCustomGrammar(), nominalLexer = nominalLexerFromCombinedCustomGrammar(_lexer.default, combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(_parser.default, combinedCustomGrammar), lexer = nominalLexer, parser = nominalParser, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], typePrefixes = [], constructors = [], metatheorems = [], metavariables = [], nominalFileContext = _occamlanguages.FileContext.fromFile(NominalFileContext, file, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables, context);
        return nominalFileContext;
    }
    static fromJSON(json, context) {
        const releaseContext = context, combinedCustomGrammar = releaseContext.getCombinedCustomGrammar(), nominalLexer = nominalLexerFromCombinedCustomGrammar(_lexer.default, combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(_parser.default, combinedCustomGrammar), lexer = nominalLexer, parser = nominalParser, types = null, rules = null, axioms = null, lemmas = null, theorems = null, variables = null, metaLemmas = null, conjectures = null, combinators = null, typePrefixes = null, constructors = null, metatheorems = null, metavariables = null, nominalFileContext = _occamlanguages.FileContext.fromJSON(NominalFileContext, json, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables, context);
        nominalFileContext.initialise(json);
        return nominalFileContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ub21pbmFsXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBOb21pbmFsTGV4ZXIgZnJvbSBcIi4uLy4uL25vbWluYWwvbGV4ZXJcIjtcbmltcG9ydCBOb21pbmFsUGFyc2VyIGZyb20gXCIuLi8uLi9ub21pbmFsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlGaWxlIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSB9IGZyb20gXCIuLi8uLi9tZXRhVHlwZXNcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0eXBlc1RvVHlwZXNKU09OLFxuICAgICAgICAgcnVsZXNUb1J1bGVzSlNPTixcbiAgICAgICAgIHRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICB2YXJpYWJsZXNGcm9tSlNPTixcbiAgICAgICAgIGxlbW1hc0Zyb21Ob3RoaW5nLFxuICAgICAgICAgYXhpb21zVG9BeGlvbXNKU09OLFxuICAgICAgICAgY29uamVjdHVyZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzRnJvbUpTT04sXG4gICAgICAgICB0eXBlUHJlZml4ZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBtZXRhTGVtbWFzRnJvbU5vdGhpbmcsXG4gICAgICAgICB0aGVvcmVtc1RvVGhlb3JlbXNKU09OLFxuICAgICAgICAgdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OLFxuICAgICAgICAgY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04sXG4gICAgICAgICB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04sXG4gICAgICAgICBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2gsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vbWluYWxGaWxlQ29udGV4dCBleHRlbmRzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGxleGVyLCBwYXJzZXIsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlKTtcblxuICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICB0aGlzLnBhcnNlciA9IHBhcnNlcjtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXM7XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcbiAgICB0aGlzLnR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlcztcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycztcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtcztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gW107XG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCB7IEVxdWl2YWxlbmNlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbXTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMuY29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgICAgY29uc3QgbGVtbWFMYWJlbHMgPSBsZW1tYS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBjb25qZWN0dXJlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1ldGF0aGVvcmVtcy5mb3JFYWNoKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUxhYmVsID0gbWV0YXRoZW9yZW0uZ2V0TGFiZWwoKTtcblxuICAgICAgICBsYWJlbHMucHVzaChtZXRhdGhlb3JlbUxhYmVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlcztcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0UnVsZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWxlcztcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9tcztcblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldExlbW1hcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW1tYXM7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRUaGVvcmVtcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW9yZW1zO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0UHJvY2VkdXJlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRNZXRhTGVtbWFzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhTGVtbWFzO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uamVjdHVyZXM7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tYmluYXRvcnM7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFR5cGVQcmVmaXhlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlUHJlZml4ZXM7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3JzO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGF0aGVvcmVtcztcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7XG4gICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBsZW1tYVN0cmluZyA9IGxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2xlbW1hU3RyaW5nfScgbGVtbWEgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHtcbiAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICB0aGVvcmVtU3RyaW5nID0gdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt0aGVvcmVtU3RyaW5nfScgdGhlb3JlbSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICB2YXJpYWJsZVN0cmluZyA9IHZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke3ZhcmlhYmxlU3RyaW5nfScgdmFyaWFibGUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRNZXRhTGVtbWEobWV0YUxlbW1hKSB7XG4gICAgdGhpcy5tZXRhTGVtbWFzLnB1c2gobWV0YUxlbW1hKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIG1ldGFMZW1tYVN0cmluZyA9IG1ldGFMZW1tYS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhLWxlbW1hIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgb2NuamVjdHVyZVN0cmluZyA9IG9jbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7b2NuamVjdHVyZVN0cmluZ30nIG9jbmplY3R1cmUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBjb21iaW5hdG9yU3RyaW5nID0gY29tYmluYXRvci5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHtjb21iaW5hdG9yU3RyaW5nfScgY29tYmluYXRvciB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZFR5cGVQcmVmaXgodHlwZVByZWZpeCkge1xuICAgIHRoaXMudHlwZVByZWZpeGVzLnB1c2godHlwZVByZWZpeCk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICB0eXBlUHJlZml4U3RyaW5nID0gdHlwZVByZWZpeC5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZS1wcmVmaXggdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHtjb25zdHJ1Y3RvclN0cmluZ30nIGNvbnN0cnVjdG9yIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtU3RyaW5nID0gbWV0YXRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7bWV0YXRoZW9yZW1TdHJpbmd9JyBtZXRhdGhlb3JlbSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlU3RyaW5nID0gbWV0YXZhcmlhYmxlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS51bmlmeU1ldGF2YXJpYWJsZShzcGVjaWZpY01ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gbGFiZWwuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICBpZiAobGFiZWxNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZSA9IGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBydWxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBheGlvbS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbW1hQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBsZW1tYS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGxlbW1hQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW9yZW1Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHRoZW9yZW0uY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGVvcmVtQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG5cbiAgZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBtZXRhTGVtbWFzLmZpbmQoKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hQ29tcGFyZXNUb1JlZmVyZW5jZSA9IG1ldGFMZW1tYS5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhTGVtbWFDb21wYXJlc1RvUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gY29uamVjdHVyZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGNvbmplY3R1cmVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKTtcblxuICAgIGZpbHRlcihtZXRhTGVtbWFzLCAobWV0YUxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBtZXRhTGVtbWEsIC8vL1xuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKSxcbiAgICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1zLmZpbmQoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtQ29tcGFyZXNUb1JlZmVyZW5jZSA9IG1ldGF0aGVvcmVtLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICBpZiAobWV0YXRoZW9yZW1Db21wYXJlc1RvUmVmZXJlbmNlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH1cblxuICBmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKTtcblxuICAgIGZpbHRlcihtZXRhdGhlb3JlbXMsIChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbWV0YXRoZW9yZW0sIC8vL1xuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBheGlvbSA9IHRoaXMuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBsZW1tYSA9IHRoaXMuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhpcy5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgY29uamVjdHVyZSA9IHRoaXMuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hID0gdGhpcy5maW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IHRoaXMuZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSAobWV0YUxlbW1hIHx8IG1ldGF0aGVvcmVtKTsgIC8vL1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IHRoaXMuZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyA9IFtcbiAgICAgICAgICAgIC4uLm1ldGFMZW1tYXMsXG4gICAgICAgICAgICAuLi5tZXRhdGhlb3JlbXNcbiAgICAgICAgICBdO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvbnM7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSB0eXBlLmNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhlcy5maW5kKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeC5jb21wYXJlVHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZVByZWZpeENvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBsYWJlbC5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5jb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSB0aGlzLmdldFByb2NlZHVyZXMoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBwcm9jZWR1cmVzLmZpbmQoKHByb2NlZHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUgPSBwcm9jZWR1cmUuY29tcGFyZVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpIHtcbiAgICBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IG1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gcmVmZXJlbmNlLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ID0gdGhpcy5maW5kVHlwZVByZWZpeEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVmaXhQcmVzZW50ID0gKHR5cGVQcmVmaXggIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmUgPSB0aGlzLmZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IChwcm9jZWR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVByZXNlbnQ7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnR5cGVzID0gW107XG4gICAgdGhpcy5ydWxlcyA9IFtdO1xuICAgIHRoaXMuYXhpb21zID0gW107XG4gICAgdGhpcy5sZW1tYXMgPSBbXTtcbiAgICB0aGlzLnRoZW9yZW1zID0gW107XG4gICAgdGhpcy52YXJpYWJsZXMgPSBbXTtcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBbXTtcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gW107XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IFtdO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gW107XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IFtdO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgLy8vXG4gIH1cblxuICBhc3luYyB2ZXJpZnlGaWxlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZmlsZU5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgZmlsZVZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZmlsZVZlcmlmaWVzO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudHlwZXMgPSBbXTtcblxuICAgIHR5cGVzRnJvbUpTT04oanNvbiwgdGhpcy50eXBlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXNGcm9tTm90aGluZygpO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXNGcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgdHlwZXNKU09OID0gdHlwZXNUb1R5cGVzSlNPTih0aGlzLnR5cGVzKSxcbiAgICAgICAgICBydWxlc0pTT04gPSBydWxlc1RvUnVsZXNKU09OKHRoaXMucnVsZXMpLFxuICAgICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXNUb0F4aW9tc0pTT04odGhpcy5heGlvbXMpLFxuICAgICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zVG9UaGVvcmVtc0pTT04odGhpcy50aGVvcmVtcyksXG4gICAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTih0aGlzLnZhcmlhYmxlcyksXG4gICAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTih0aGlzLmNvbmplY3R1cmVzKSxcbiAgICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OKHRoaXMuY29tYmluYXRvcnMpLFxuICAgICAgICAgIHR5cGVQcmVmaXhlc0pTT04gPSB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04odGhpcy50eXBlUHJlZml4ZXMpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04odGhpcy5jb25zdHJ1Y3RvcnMpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtc0pTT04gPSBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04odGhpcy5tZXRhdGhlb3JlbXMpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04odGhpcy5tZXRhdmFyaWFibGVzKSxcbiAgICAgICAgICBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgdHlwZXMgPSB0eXBlc0pTT04sICAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tcyA9IGF4aW9tc0pTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTiwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHZhcmlhYmxlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNKU09OLCAgLy8vXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29uamVjdHVyZXMsXG4gICAgICAgICAgICBjb21iaW5hdG9ycyxcbiAgICAgICAgICAgIHR5cGVQcmVmaXhlcyxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtcyxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyKCksXG4gICAgICAgICAgbm9taW5hbExleGVyID0gbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsTGV4ZXIsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxQYXJzZXIsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgbGV4ZXIgPSBub21pbmFsTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG5vbWluYWxQYXJzZXIsIC8vL1xuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG5vbWluYWxGaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKE5vbWluYWxGaWxlQ29udGV4dCwgZmlsZSwgbGV4ZXIsIHBhcnNlciwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBub21pbmFsRmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgY29tYmluZWRDdXN0b21HcmFtbWFyID0gcmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyKCksXG4gICAgICAgICAgbm9taW5hbExleGVyID0gbm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsTGV4ZXIsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgbm9taW5hbFBhcnNlciA9IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxQYXJzZXIsIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciksXG4gICAgICAgICAgbGV4ZXIgPSBub21pbmFsTGV4ZXIsIC8vL1xuICAgICAgICAgIHBhcnNlciA9IG5vbWluYWxQYXJzZXIsIC8vL1xuICAgICAgICAgIHR5cGVzID0gbnVsbCxcbiAgICAgICAgICBydWxlcyA9IG51bGwsXG4gICAgICAgICAgYXhpb21zID0gbnVsbCxcbiAgICAgICAgICBsZW1tYXMgPSBudWxsLFxuICAgICAgICAgIHRoZW9yZW1zID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBudWxsLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBudWxsLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gbnVsbCxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IG51bGwsXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gbnVsbCxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBudWxsLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgbm9taW5hbEZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUpTT04oTm9taW5hbEZpbGVDb250ZXh0LCBqc29uLCBsZXhlciwgcGFyc2VyLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgbm9taW5hbEZpbGVDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG5cbiAgICByZXR1cm4gbm9taW5hbEZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiTm9taW5hbEZpbGVDb250ZXh0IiwicHVzaCIsImZpbHRlciIsImFycmF5VXRpbGl0aWVzIiwibm9taW5hbExleGVyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImxleGVyc1V0aWxpdGllcyIsIm5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwicGFyc2Vyc1V0aWxpdGllcyIsIkZpbGVDb250ZXh0IiwiY29udGV4dCIsImZpbGVDb250ZW50IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwibGV4ZXIiLCJwYXJzZXIiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJtZXRhTGVtbWFzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsInR5cGVQcmVmaXhlcyIsImNvbnN0cnVjdG9ycyIsIm1ldGF0aGVvcmVtcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiRXF1aXZhbGVuY2VzIiwiZWxlbWVudHMiLCJlcXVpdmFsZW5jZXMiLCJmcm9tTm90aGluZyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJsZW1tYSIsImxlbW1hTGFiZWxzIiwidGhlb3JlbSIsInRoZW9yZW1MYWJlbHMiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUxhYmVscyIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1MYWJlbCIsImdldExhYmVsIiwiZ2V0VHlwZXMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwiZ2V0UnVsZXMiLCJnZXRBeGlvbXMiLCJnZXRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZ2V0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRUeXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwiYWRkVHlwZSIsInR5cGUiLCJnZXRGaWxlUGF0aCIsInR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFkZFJ1bGUiLCJydWxlU3RyaW5nIiwiYWRkQXhpb20iLCJheGlvbVN0cmluZyIsImFkZExlbW1hIiwibGVtbWFTdHJpbmciLCJhZGRUaGVvcmVtIiwidGhlb3JlbVN0cmluZyIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJ2YXJpYWJsZVN0cmluZyIsImFkZE1ldGFMZW1tYSIsIm1ldGFMZW1tYSIsIm1ldGFMZW1tYVN0cmluZyIsImFkZENvbmplY3R1cmUiLCJvY25qZWN0dXJlU3RyaW5nIiwib2NuamVjdHVyZSIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiY29tYmluYXRvclN0cmluZyIsImFkZFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwidHlwZVByZWZpeFN0cmluZyIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvclN0cmluZyIsImFkZE1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1TdHJpbmciLCJhZGRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVTdHJpbmciLCJmaW5kTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJmaW5kIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlIiwibGFiZWwiLCJsYWJlbE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInJ1bGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJsZW1tYUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsInRoZW9yZW1Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYUNvbXBhcmVzVG9SZWZlcmVuY2UiLCJjb21wYXJlUmVmZXJlbmNlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImNvbmplY3R1cmVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJmaW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsIm1ldGF0aGVvcmVtQ29tcGFyZXNUb1JlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUiLCJjb21wYXJlUHJlZml4ZWRUeXBlTmFtZSIsImZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeENvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSIsImNvbXBhcmVUeXBlUHJlZml4TmFtZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZSIsImxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lIiwianVkZ2VtZW50IiwianVkZ2VtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlIiwicHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUiLCJjb21wYXJlUHJvY2VkdXJlTmFtZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsInNvbWUiLCJsYWJlbFVuaWZpZXMiLCJ1bmlmeUxhYmVsIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmVQcmVzZW50IiwiY2xlYXIiLCJjb21wbGV0ZSIsInZlcmlmeUZpbGUiLCJnZXROb2RlIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJpbml0aWFsaXNlIiwianNvbiIsImZpbGVDb250ZXh0IiwidHlwZXNGcm9tSlNPTiIsImxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YUxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwiYXhpb21zRnJvbUpTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJ0b0pTT04iLCJ0eXBlc0pTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwicnVsZXNKU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsImF4aW9tc0pTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwidmFyaWFibGVzSlNPTiIsInZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTiIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwidHlwZVByZWZpeGVzSlNPTiIsInR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTiIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwibWV0YXZhcmlhYmxlc0pTT04iLCJtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiIsImZyb21GaWxlIiwiZmlsZSIsInJlbGVhc2VDb250ZXh0IiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyIiwibm9taW5hbExleGVyIiwiTm9taW5hbExleGVyIiwibm9taW5hbFBhcnNlciIsIk5vbWluYWxQYXJzZXIiLCJub21pbmFsRmlsZUNvbnRleHQiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBMENBOzs7ZUFBcUJBOzs7Z0NBeENPOzJCQUNHOzhCQUNtQjtpRUFFN0I7OERBQ0k7K0RBQ0M7d0JBRUM7c0JBQ1M7MkJB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