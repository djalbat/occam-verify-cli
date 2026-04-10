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
    constructor(context, fileContent, filePath, tokens, node, json, lexer, parser, types, rules, axioms, lemmas, theorems, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, declaredVariables, declaredMetavariables){
        super(context, fileContent, filePath, tokens, node, json);
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
    getTypes(includeRelease = true) {
        const types = includeRelease ? this.context.getTypes() : this.types;
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
    getDeclaredVariables() {
        return this.declaredVariables;
    }
    getDeclaredMetavariables() {
        return this.declaredMetavariables;
    }
    getDeclaredJudgements() {
        const declaredJudgements = [];
        return declaredJudgements;
    }
    getTerms(terms = []) {
        return terms;
    }
    getFrames(frames = []) {
        return frames;
    }
    getEqualities(equalities = []) {
        return equalities;
    }
    getProperties(properties = []) {
        return properties;
    }
    getJudgements(judgements = []) {
        return judgements;
    }
    getAssertions(assertions = []) {
        return assertions;
    }
    getStatements(statements = []) {
        return statements;
    }
    getReferences(references = []) {
        return references;
    }
    getAssumptions(assumptions = []) {
        return assumptions;
    }
    getMetavariables(metavariables = []) {
        return metavariables;
    }
    getSubstitutions(substitutions = []) {
        return substitutions;
    }
    getPropertyRelations(propertyRelations = []) {
        return propertyRelations;
    }
    getDerivedSubstitutions(derivedSubstitutions = []) {
        return derivedSubstitutions;
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
    addMetaLemma(metaLemma) {
        this.metaLemmas.push(metaLemma);
        const filePath = this.getFilePath(), metaLemmaString = metaLemma.getString();
        this.trace(`Added the '${metaLemmaString}' meta-lemma to the '${filePath}' file context.`);
    }
    addConjecture(conjecture) {
        this.conjectures.push(conjecture);
        const filePath = this.getFilePath(), ocnjectureString = conjecture.getString();
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
    addDeclaredVariable(declaredVariable) {
        this.declaredVariables.push(declaredVariable);
        const filePath = this.getFilePath(), declaredVariableString = declaredVariable.getString();
        this.trace(`Added the '${declaredVariableString}' declared variable to the '${filePath}' file context.`);
    }
    addDeclaredMetavariable(declaredMetavariable) {
        this.declaredMetavariables.push(declaredMetavariable);
        const filePath = this.getFilePath(), declaredMetavariableString = declaredMetavariable.getString();
        this.trace(`Added the '${declaredMetavariableString}' declared metavariable to the '${filePath}' file context.`);
    }
    findMetavariable(metavariable, context) {
        const declaredMetavariables = this.getDeclaredMetavariables();
        metavariable = declaredMetavariables.find((declaredMetavariable)=>{
            const metavariableUnifies = declaredMetavariable.unifyMetavariable(metavariable, context);
            if (metavariableUnifies) {
                return true;
            }
        }) || null;
        return metavariable;
    }
    findRuleByReference(reference) {
        const rules = this.getRules(), metavariableNode = reference.getMetavariableNode(), rule = rules.find((rule)=>{
            const metavariableNodeMatches = rule.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                return true;
            }
        }) || null;
        return rule;
    }
    findAxiomByReference(reference) {
        const axioms = this.getAxioms(), metavariableNode = reference.getMetavariableNode(), axiom = axioms.find((axiom)=>{
            const metavariableNodeMatches = axiom.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                return true;
            }
        }) || null;
        return axiom;
    }
    findLemmaByReference(reference) {
        const lemmas = this.getLemmas(), metavariableNode = reference.getMetavariableNode(), lemma = lemmas.find((lemma)=>{
            const metavariableNodeMatches = lemma.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                return true;
            }
        }) || null;
        return lemma;
    }
    findTheoremByReference(reference) {
        const theorems = this.getTheorems(), metavariableNode = reference.getMetavariableNode(), theorem = theorems.find((theorem)=>{
            const metavariableNodeMatches = theorem.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                return true;
            }
        }) || null;
        return theorem;
    }
    findConjectureByReference(reference) {
        const conjectures = this.getConjectures(), metavariableNode = reference.getMetavariableNode(), conjecture = conjectures.find((conjecture)=>{
            const metavariableNodeMatches = conjecture.matchMetavariableNode(metavariableNode);
            if (metavariableNodeMatches) {
                return true;
            }
        }) || null;
        return conjecture;
    }
    findMetaLemmasByReference(reference) {
        const metaLemmas = this.getMetaLemmas();
        filter(metaLemmas, (metaLemma)=>{
            const topLevelMetaAssertion = metaLemma, topLevelMetaAssertionCompares = reference.compareTopLevelMetaAssertion(topLevelMetaAssertion);
            if (topLevelMetaAssertionCompares) {
                return true;
            }
        });
        return metaLemmas;
    }
    findMetatheoremsByReference(reference) {
        const metatheorems = this.getMetatheorems();
        filter(metatheorems, (metatheorem)=>{
            const topLevelMetaAssertion = metatheorem, topLevelMetaAssertionCompares = reference.compareTopLevelMetaAssertion(topLevelMetaAssertion);
            if (topLevelMetaAssertionCompares) {
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
    findTypeByTypeName(typeName) {
        let types = this.getTypes();
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
    findDeclaredVariableByVariableIdentifier(VariableIdentitifer) {
        const declaredVariables = this.getDeclaredVariables(), declaredVariable = declaredVariables.find((declaredVariable)=>{
            const declaredVariableComparesToVariableIdentitifer = declaredVariable.compareVariableIdentifier(VariableIdentitifer);
            if (declaredVariableComparesToVariableIdentitifer) {
                return true;
            }
        }) || null;
        return declaredVariable;
    }
    findDeclaredMetavariableByMetavariableName(metavariableName) {
        const declaredMetavariables = this.getDeclaredMetavariables(), declaredMetavariable = declaredMetavariables.find((declaredMetavariable)=>{
            const declaredMetavariableComparesToMetavariableName = declaredMetavariable.compareMetavariableName(metavariableName);
            if (declaredMetavariableComparesToMetavariableName) {
                return true;
            }
        }) || null;
        return declaredMetavariable;
    }
    findTermByTermNode(termNode) {
        const term = null;
        return term;
    }
    findStatementByStatementNode(statementNode) {
        const statement = null;
        return statement;
    }
    findSubstitutionByVariableNode(variableNode) {
        const substitution = null;
        return substitution;
    }
    findMetavariableByMetavariableNode(metavariableNode) {
        const metavariable = null;
        return metavariable;
    }
    findSubstitutionByMetavariableNode(metavariableNode) {
        const substitution = null;
        return substitution;
    }
    findSubstitutionBySubstitutionNode(substitutionNode) {
        const substitution = null;
        return substitution;
    }
    findSimpleSubstitutionByMetavariableNode(metavariableNode) {
        const simpleSubstitution = null;
        return simpleSubstitution;
    }
    findMetaLevelAssumptionByMetaLevelAssumptionNode(metaLevelAssumptionNode) {
        const metaLevelAssumption = null;
        return metaLevelAssumption;
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
    findMetaTypeByMetaTypeName(metaTypeName) {
        return (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName);
    }
    isMetavariablePresent(metavariable, context) {
        metavariable = this.findMetavariable(metavariable, context); ///
        const metavariablePresent = metavariable !== null;
        return metavariablePresent;
    }
    isLabelPresentByReference(reference, context = null) {
        const labels = this.getLabels(), labelPresent = labels.some((label)=>{
            const labelUnifies = reference.unifyLabel(label, context);
            if (labelUnifies) {
                return true;
            }
        });
        return labelPresent;
    }
    isTopLevelMetaAssertionPresentByReference(reference) {
        const topLevelMetaAssertion = this.findTopLevelMetaAssertionByReference(reference), topLevelMetaAssertionPresent = topLevelMetaAssertion !== null;
        return topLevelMetaAssertionPresent;
    }
    isLabelPresentByLabelNode(labelNode) {
        const labels = this.getLabels(), labelPresent = labels.some((label)=>{
            const labelNodeMatches = label.matchLabelNode(labelNode);
            if (labelNodeMatches) {
                return true;
            }
        });
        return labelPresent;
    }
    isTypePresentByTypeName(typeName) {
        const type = this.findTypeByTypeName(typeName), typePresent = type !== null;
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
    isTypePrefixPresentByTypePrefixName(typePrefixName) {
        const typePrefix = this.findTypePrefixByTypePrefixName(typePrefixName), typePrefixPresent = typePrefix !== null;
        return typePrefixPresent;
    }
    isDeclaredVariablePresentByVariableIdentifier(variableIdentifier) {
        const declaredVariable = this.findDeclaredVariableByVariableIdentifier(variableIdentifier), declaredVariablePresent = declaredVariable !== null;
        return declaredVariablePresent;
    }
    isDeclaredMetavariablePresentByMetavariableName(metavariableName) {
        const declaredMetavariable = this.findDeclaredMetavariableByMetavariableName(metavariableName), declaredMetavariablePresent = declaredMetavariable !== null;
        return declaredMetavariablePresent;
    }
    isProcedurePresentByProcedureName(procedureName) {
        const procedure = this.findProcedureByProcedureName(procedureName), procedurePresent = procedure !== null;
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
        const node = this.getNode(), context = this, fileNode = node, fileVerifies = await (0, _verify.verifyFile)(fileNode, context);
        return fileVerifies;
    }
    initialise() {
        const json = this.getJSON();
        if (json === null) {
            super.initialise();
            return;
        }
        const fileContext = this; ///
        this.types = [];
        (0, _json.typesFromJSON)(json, this.types, fileContext);
        this.lemmas = [];
        this.metaLemmas = [];
        this.declaredMetavariables = (0, _json.declaredMetavariablesFromJSON)(json, fileContext);
        this.declaredVariables = (0, _json.declaredVariablesFromJSON)(json, fileContext);
        this.typePrefixes = (0, _json.typePrefixesFromJSON)(json, fileContext);
        this.combinators = (0, _json.combinatorsFromJSON)(json, fileContext);
        this.constructors = (0, _json.constructorsFromJSON)(json, fileContext);
        this.rules = (0, _json.rulesFromJSON)(json, fileContext);
        this.axioms = (0, _json.axiomsFromJSON)(json, fileContext);
        this.theorems = (0, _json.theoremsFromJSON)(json, fileContext);
        this.conjectures = (0, _json.conjecturesFromJSON)(json, fileContext);
        this.metatheorems = (0, _json.metatheoremsFromJSON)(json, fileContext);
    }
    toJSON() {
        const typesJSON = (0, _json.typesToTypesJSON)(this.types), rulesJSON = (0, _json.rulesToRulesJSON)(this.rules), axiomsJSON = (0, _json.axiomsToAxiomsJSON)(this.axioms), theoremsJSON = (0, _json.theoremsToTheoremsJSON)(this.theorems), conjecturesJSON = (0, _json.conjecturesToConjecturesJSON)(this.conjectures), combinatorsJSON = (0, _json.combinatorsToCombinatorsJSON)(this.combinators), typePrefixesJSON = (0, _json.typePrefixesToTypePrefixesJSON)(this.typePrefixes), constructorsJSON = (0, _json.constructorsToConstructorsJSON)(this.constructors), metatheoremsJSON = (0, _json.metatheoremsToMetatheoremsJSON)(this.metatheorems), declaredVariablesJSON = (0, _json.declaredVariablesToDeclaredVariablesJSON)(this.declaredVariables), declaredMetavariablesJSON = (0, _json.declaredMetavariablesToDeclaredMetavariablesJSON)(this.declaredMetavariables), fileContent = this.fileContent, filePath = this.filePath, types = typesJSON, rules = rulesJSON, axioms = axiomsJSON, theorems = theoremsJSON, conjectures = conjecturesJSON, combinators = combinatorsJSON, typePrefixes = typePrefixesJSON, constructors = constructorsJSON, metatheorems = metatheoremsJSON, declaredVariables = declaredVariablesJSON, declaredMetavariables = declaredMetavariablesJSON, json = {
            fileContent,
            filePath,
            types,
            rules,
            axioms,
            theorems,
            conjectures,
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
        const releaseContext = context, combinedCustomGrammar = releaseContext.getCombinedCustomGrammar(), nominalLexer = nominalLexerFromCombinedCustomGrammar(_lexer.default, combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(_parser.default, combinedCustomGrammar), lexer = nominalLexer, parser = nominalParser, types = [], rules = [], axioms = [], lemmas = [], theorems = [], metaLemmas = [], conjectures = [], combinators = [], typePrefixes = [], constructors = [], metatheorems = [], declaredVariables = [], declaredMetavariables = [], nominalFileContext = _occamlanguages.FileContext.fromFile(NominalFileContext, file, lexer, parser, types, rules, axioms, lemmas, theorems, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, declaredVariables, declaredMetavariables, context);
        return nominalFileContext;
    }
    static fromJSON(json, context) {
        const releaseContext = context, combinedCustomGrammar = releaseContext.getCombinedCustomGrammar(), nominalLexer = nominalLexerFromCombinedCustomGrammar(_lexer.default, combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(_parser.default, combinedCustomGrammar), lexer = nominalLexer, parser = nominalParser, types = null, rules = null, axioms = null, lemmas = null, theorems = null, metaLemmas = null, conjectures = null, combinators = null, typePrefixes = null, constructors = null, metatheorems = null, declaredVariables = null, declaredMetavariables = null, nominalFileContext = _occamlanguages.FileContext.fromJSON(NominalFileContext, json, lexer, parser, types, rules, axioms, lemmas, theorems, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, declaredVariables, declaredMetavariables, context);
        return nominalFileContext;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ub21pbmFsXCI7XG5cbmltcG9ydCBOb21pbmFsTGV4ZXIgZnJvbSBcIi4uLy4uL25vbWluYWwvbGV4ZXJcIjtcbmltcG9ydCBOb21pbmFsUGFyc2VyIGZyb20gXCIuLi8uLi9ub21pbmFsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlGaWxlIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSB9IGZyb20gXCIuLi8uLi9tZXRhVHlwZXNcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0eXBlc1RvVHlwZXNKU09OLFxuICAgICAgICAgdGhlb3JlbXNGcm9tSlNPTixcbiAgICAgICAgIHJ1bGVzVG9SdWxlc0pTT04sXG4gICAgICAgICBheGlvbXNUb0F4aW9tc0pTT04sXG4gICAgICAgICBjb25qZWN0dXJlc0Zyb21KU09OLFxuICAgICAgICAgY29tYmluYXRvcnNGcm9tSlNPTixcbiAgICAgICAgIHR5cGVQcmVmaXhlc0Zyb21KU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzRnJvbUpTT04sXG4gICAgICAgICBtZXRhdGhlb3JlbXNGcm9tSlNPTixcbiAgICAgICAgIHRoZW9yZW1zVG9UaGVvcmVtc0pTT04sXG4gICAgICAgICBkZWNsYXJlZFZhcmlhYmxlc0Zyb21KU09OLFxuICAgICAgICAgY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04sXG4gICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZXNGcm9tSlNPTixcbiAgICAgICAgIHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTixcbiAgICAgICAgIG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTixcbiAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVzVG9EZWNsYXJlZFZhcmlhYmxlc0pTT04sXG4gICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZXNUb0RlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb21pbmFsRmlsZUNvbnRleHQgZXh0ZW5kcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uLCBsZXhlciwgcGFyc2VyLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBkZWNsYXJlZFZhcmlhYmxlcywgZGVjbGFyZWRNZXRhdmFyaWFibGVzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGpzb24pO1xuXG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXM7XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zO1xuICAgIHRoaXMuZGVjbGFyZWRWYXJpYWJsZXMgPSBkZWNsYXJlZFZhcmlhYmxlcztcbiAgICB0aGlzLmRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbXTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMuY29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgICAgY29uc3QgbGVtbWFMYWJlbHMgPSBsZW1tYS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBjb25qZWN0dXJlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1ldGF0aGVvcmVtcy5mb3JFYWNoKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUxhYmVsID0gbWV0YXRoZW9yZW0uZ2V0TGFiZWwoKTtcblxuICAgICAgICBsYWJlbHMucHVzaChtZXRhdGhlb3JlbUxhYmVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFR5cGVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXM7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFJ1bGVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVsZXM7XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldEF4aW9tcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvbXM7XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVtbWFzO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVvcmVtcztcblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0UHJvY2VkdXJlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRNZXRhTGVtbWFzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhTGVtbWFzO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uamVjdHVyZXM7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tYmluYXRvcnM7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFR5cGVQcmVmaXhlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlUHJlZml4ZXM7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3JzO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGF0aGVvcmVtcztcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXREZWNsYXJlZFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJlZFZhcmlhYmxlcztcbiAgfVxuXG4gIGdldERlY2xhcmVkTWV0YXZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJlZE1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXREZWNsYXJlZEp1ZGdlbWVudHMoKSB7XG4gICAgY29uc3QgZGVjbGFyZWRKdWRnZW1lbnRzID0gW107XG5cbiAgICByZXR1cm4gZGVjbGFyZWRKdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0VGVybXModGVybXMgPSBbXSkge1xuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcyhmcmFtZXMgPSBbXSkge1xuICAgIHJldHVybiBmcmFtZXM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKGVxdWFsaXRpZXMgPSBbXSkge1xuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzID0gW10pIHtcbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoanVkZ2VtZW50cyA9IFtdKSB7XG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKGFzc2VydGlvbnMgPSBbXSkge1xuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cyhzdGF0ZW1lbnRzID0gW10pIHtcbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMocmVmZXJlbmNlcyA9IFtdKSB7XG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucyhhc3N1bXB0aW9ucyA9IFtdKSB7XG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhtZXRhdmFyaWFibGVzID0gW10pIHtcbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucyA9IFtdKSB7XG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBnZXRQcm9wZXJ0eVJlbGF0aW9ucyhwcm9wZXJ0eVJlbGF0aW9ucyA9IFtdKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5UmVsYXRpb25zO1xuICB9XG5cbiAgZ2V0RGVyaXZlZFN1YnN0aXR1dGlvbnMoZGVyaXZlZFN1YnN0aXR1dGlvbnMgPSBbXSkge1xuICAgIHJldHVybiBkZXJpdmVkU3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke3R5cGVTdHJpbmd9JyB0eXBlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkUnVsZShydWxlKSB7XG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgcnVsZVN0cmluZyA9IHJ1bGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSBheGlvbS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHtheGlvbVN0cmluZ30nIGF4aW9tIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGxlbW1hU3RyaW5nID0gbGVtbWEuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7bGVtbWFTdHJpbmd9JyBsZW1tYSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHRoZW9yZW1TdHJpbmcgPSB0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke3RoZW9yZW1TdHJpbmd9JyB0aGVvcmVtIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSkge1xuICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBtZXRhTGVtbWFTdHJpbmcgPSBtZXRhTGVtbWEuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YS1sZW1tYSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZENvbmplY3R1cmUoY29uamVjdHVyZSkge1xuICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIG9jbmplY3R1cmVTdHJpbmcgPSBjb25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke29jbmplY3R1cmVTdHJpbmd9JyBvY25qZWN0dXJlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgY29tYmluYXRvclN0cmluZyA9IGNvbWJpbmF0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRUeXBlUHJlZml4KHR5cGVQcmVmaXgpIHtcbiAgICB0aGlzLnR5cGVQcmVmaXhlcy5wdXNoKHR5cGVQcmVmaXgpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHR5cGVQcmVmaXguZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUtcHJlZml4IHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvciB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZE1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtKSB7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMucHVzaChtZXRhdGhlb3JlbSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbVN0cmluZyA9IG1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke21ldGF0aGVvcmVtU3RyaW5nfScgbWV0YXRoZW9yZW0gdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGREZWNsYXJlZFZhcmlhYmxlKGRlY2xhcmVkVmFyaWFibGUpIHtcbiAgICB0aGlzLmRlY2xhcmVkVmFyaWFibGVzLnB1c2goZGVjbGFyZWRWYXJpYWJsZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlU3RyaW5nID0gZGVjbGFyZWRWYXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHtkZWNsYXJlZFZhcmlhYmxlU3RyaW5nfScgZGVjbGFyZWQgdmFyaWFibGUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGREZWNsYXJlZE1ldGF2YXJpYWJsZShkZWNsYXJlZE1ldGF2YXJpYWJsZSkge1xuICAgIHRoaXMuZGVjbGFyZWRNZXRhdmFyaWFibGVzLnB1c2goZGVjbGFyZWRNZXRhdmFyaWFibGUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVTdHJpbmcgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHtkZWNsYXJlZE1ldGF2YXJpYWJsZVN0cmluZ30nIGRlY2xhcmVkIG1ldGF2YXJpYWJsZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gdGhpcy5nZXREZWNsYXJlZE1ldGF2YXJpYWJsZXMoKTtcblxuICAgIG1ldGF2YXJpYWJsZSA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlcy5maW5kKChkZWNsYXJlZE1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBydWxlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gYXhpb20ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbGVtbWEubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhlb3JlbS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gdGhpcy5nZXRDb25qZWN0dXJlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlcy5maW5kKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGNvbmplY3R1cmUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9XG5cbiAgZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5nZXRNZXRhTGVtbWFzKCk7XG5cbiAgICBmaWx0ZXIobWV0YUxlbW1hcywgKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbWV0YUxlbW1hLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gcmVmZXJlbmNlLmNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKTtcblxuICAgIGZpbHRlcihtZXRhdGhlb3JlbXMsIChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbWV0YXRoZW9yZW0sIC8vL1xuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMgPSByZWZlcmVuY2UuY29tcGFyZVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24pO1xuXG4gICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb20gPSB0aGlzLmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbGVtbWEgPSB0aGlzLmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoaXMuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSB0aGlzLmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IChheGlvbSB8fCBsZW1tYSB8fCB0aGVvcmVtIHx8IGNvbmplY3R1cmUpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYSA9IHRoaXMuZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSB0aGlzLmZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSB0aGlzLmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBbXG4gICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25zO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICB0eXBlcyA9IFtcbiAgICAgIC4uLnR5cGVzLFxuICAgICAgYmFzZVR5cGVcbiAgICBdO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVDb21wYXJlc1RvVHlwZU5hbWUgPSB0eXBlLmNvbXBhcmVUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlQ29tcGFyZXNUb1R5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICB0eXBlcyA9IFtcbiAgICAgIC4uLnR5cGVzLFxuICAgICAgYmFzZVR5cGVcbiAgICBdO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lID0gdHlwZS5jb21wYXJlTm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgY29uc3QgYmFzZVR5cGUgPSBiYXNlVHlwZUZyb21Ob3RoaW5nKCk7XG5cbiAgICB0eXBlcyA9IFtcbiAgICAgIC4uLnR5cGVzLFxuICAgICAgYmFzZVR5cGVcbiAgICBdO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVDb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSA9IHR5cGUuY29tcGFyZVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeGVzLmZpbmQoKHR5cGVQcmVmaXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXhDb21wYXJlc1RvVHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmNvbXBhcmVUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIoVmFyaWFibGVJZGVudGl0aWZlcikge1xuICAgIGNvbnN0IGRlY2xhcmVkVmFyaWFibGVzID0gdGhpcy5nZXREZWNsYXJlZFZhcmlhYmxlcygpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGUgPSBkZWNsYXJlZFZhcmlhYmxlcy5maW5kKChkZWNsYXJlZFZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJlZFZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpdGlmZXIgPSBkZWNsYXJlZFZhcmlhYmxlLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIoVmFyaWFibGVJZGVudGl0aWZlcik7XG5cbiAgICAgICAgICAgIGlmIChkZWNsYXJlZFZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpdGlmZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBkZWNsYXJlZFZhcmlhYmxlO1xuICB9XG5cbiAgZmluZERlY2xhcmVkTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBkZWNsYXJlZE1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldERlY2xhcmVkTWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gZGVjbGFyZWRNZXRhdmFyaWFibGVzLmZpbmQoKGRlY2xhcmVkTWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZWNsYXJlZE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gZGVjbGFyZWRNZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChkZWNsYXJlZE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRNZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kVGVybUJ5VGVybU5vZGUodGVybU5vZGUpIHtcbiAgICBjb25zdCB0ZXJtID0gbnVsbDtcblxuICAgIHJldHVybiB0ZXJtO1xuICB9XG5cbiAgZmluZFN0YXRlbWVudEJ5U3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7XG4gICAgY29uc3Qgc3RhdGVtZW50ID0gbnVsbDtcblxuICAgIHJldHVybiBzdGF0ZW1lbnQ7XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRTdWJzdGl0dXRpb25CeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZShzdWJzdGl0dXRpb25Ob2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBzaW1wbGVTdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHNpbXBsZVN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZShtZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IG1ldGFMZXZlbEFzc3VtcHRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbEFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gdGhpcy5nZXRQcm9jZWR1cmVzKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlcy5maW5kKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2NlZHVyZUNvbXBhcmVzVG9Qcm9jZWR1cmVOYW1lID0gcHJvY2VkdXJlLmNvbXBhcmVQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHsgcmV0dXJuIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7ICAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxOb2RlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChsYWJlbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeCA9IHRoaXMuZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9ICh0eXBlUHJlZml4ICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4UHJlc2VudDtcbiAgfVxuXG4gIGlzRGVjbGFyZWRWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBkZWNsYXJlZFZhcmlhYmxlID0gdGhpcy5maW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciksXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZVByZXNlbnQgPSAoZGVjbGFyZWRWYXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRWYXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSB0aGlzLmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnQgPSAoZGVjbGFyZWRNZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlID0gdGhpcy5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSAocHJvY2VkdXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhTGV2ZWwoKSB7XG4gICAgY29uc3QgbWV0YUxFdmVsID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YUxFdmVsO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50eXBlcyA9IFtdO1xuICAgIHRoaXMucnVsZXMgPSBbXTtcbiAgICB0aGlzLmF4aW9tcyA9IFtdO1xuICAgIHRoaXMubGVtbWFzID0gW107XG4gICAgdGhpcy50aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IFtdO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBbXTtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gW107XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSBbXTtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IFtdO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gW107XG4gICAgdGhpcy5kZWNsYXJlZFZhcmlhYmxlcyA9IFtdO1xuICAgIHRoaXMuZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gW107XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUZpbGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmaWxlTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBmaWxlVmVyaWZpZXMgPSBhd2FpdCB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmaWxlVmVyaWZpZXM7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLmdldEpTT04oKTtcblxuICAgIGlmIChqc29uID09PSBudWxsKSB7XG4gICAgICBzdXBlci5pbml0aWFsaXNlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy50eXBlcyA9IFtdO1xuXG4gICAgdHlwZXNGcm9tSlNPTihqc29uLCB0aGlzLnR5cGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmxlbW1hcyA9IFtdO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5kZWNsYXJlZE1ldGF2YXJpYWJsZXMgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5kZWNsYXJlZFZhcmlhYmxlcyA9IGRlY2xhcmVkVmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMucnVsZXMgPSBydWxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzVG9UeXBlc0pTT04odGhpcy50eXBlcyksXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXNUb1J1bGVzSlNPTih0aGlzLnJ1bGVzKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zVG9BeGlvbXNKU09OKHRoaXMuYXhpb21zKSxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoaXMudGhlb3JlbXMpLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04odGhpcy5jb25qZWN0dXJlcyksXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTih0aGlzLmNvbWJpbmF0b3JzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHRoaXMudHlwZVByZWZpeGVzKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKHRoaXMuY29uc3RydWN0b3JzKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKHRoaXMubWV0YXRoZW9yZW1zKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlc0pTT04gPSBkZWNsYXJlZFZhcmlhYmxlc1RvRGVjbGFyZWRWYXJpYWJsZXNKU09OKHRoaXMuZGVjbGFyZWRWYXJpYWJsZXMpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04gPSBkZWNsYXJlZE1ldGF2YXJpYWJsZXNUb0RlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04odGhpcy5kZWNsYXJlZE1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIGZpbGVDb250ZW50ID0gdGhpcy5maWxlQ29udGVudCxcbiAgICAgICAgICBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgdHlwZXMgPSB0eXBlc0pTT04sICAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tcyA9IGF4aW9tc0pTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IGRlY2xhcmVkVmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZUNvbnRlbnQsXG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICB0eXBlUHJlZml4ZXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyxcbiAgICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIoKSxcbiAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxMZXhlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbFBhcnNlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBsZXhlciA9IG5vbWluYWxMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbm9taW5hbFBhcnNlciwgLy8vXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG5vbWluYWxGaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKE5vbWluYWxGaWxlQ29udGV4dCwgZmlsZSwgbGV4ZXIsIHBhcnNlciwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgZGVjbGFyZWRWYXJpYWJsZXMsIGRlY2xhcmVkTWV0YXZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbm9taW5hbEZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpLFxuICAgICAgICAgIG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbExleGVyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsUGFyc2VyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgbGVtbWFzID0gbnVsbCxcbiAgICAgICAgICB0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IG51bGwsXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBudWxsLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gbnVsbCxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBudWxsLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG51bGwsXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbnVsbCxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBub21pbmFsRmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tSlNPTihOb21pbmFsRmlsZUNvbnRleHQsIGpzb24sIGxleGVyLCBwYXJzZXIsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIGRlY2xhcmVkVmFyaWFibGVzLCBkZWNsYXJlZE1ldGF2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxGaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vbWluYWxGaWxlQ29udGV4dCIsInB1c2giLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJGaWxlQ29udGV4dCIsImNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImpzb24iLCJsZXhlciIsInBhcnNlciIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJsZW1tYXMiLCJ0aGVvcmVtcyIsIm1ldGFMZW1tYXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwidHlwZVByZWZpeGVzIiwiY29uc3RydWN0b3JzIiwibWV0YXRoZW9yZW1zIiwiZGVjbGFyZWRWYXJpYWJsZXMiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJsZW1tYSIsImxlbW1hTGFiZWxzIiwidGhlb3JlbSIsInRoZW9yZW1MYWJlbHMiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUxhYmVscyIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1MYWJlbCIsImdldExhYmVsIiwiZ2V0VHlwZXMiLCJnZXRSdWxlcyIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsImdldERlY2xhcmVkVmFyaWFibGVzIiwiZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzIiwiZ2V0RGVjbGFyZWRKdWRnZW1lbnRzIiwiZGVjbGFyZWRKdWRnZW1lbnRzIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImZyYW1lcyIsImdldEVxdWFsaXRpZXMiLCJlcXVhbGl0aWVzIiwiZ2V0UHJvcGVydGllcyIsInByb3BlcnRpZXMiLCJnZXRKdWRnZW1lbnRzIiwianVkZ2VtZW50cyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiZ2V0U3RhdGVtZW50cyIsInN0YXRlbWVudHMiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImdldEFzc3VtcHRpb25zIiwiYXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZ2V0UHJvcGVydHlSZWxhdGlvbnMiLCJwcm9wZXJ0eVJlbGF0aW9ucyIsImdldERlcml2ZWRTdWJzdGl0dXRpb25zIiwiZGVyaXZlZFN1YnN0aXR1dGlvbnMiLCJhZGRUeXBlIiwidHlwZSIsImdldEZpbGVQYXRoIiwidHlwZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYWRkUnVsZSIsInJ1bGVTdHJpbmciLCJhZGRBeGlvbSIsImF4aW9tU3RyaW5nIiwiYWRkTGVtbWEiLCJsZW1tYVN0cmluZyIsImFkZFRoZW9yZW0iLCJ0aGVvcmVtU3RyaW5nIiwiYWRkTWV0YUxlbW1hIiwibWV0YUxlbW1hIiwibWV0YUxlbW1hU3RyaW5nIiwiYWRkQ29uamVjdHVyZSIsIm9jbmplY3R1cmVTdHJpbmciLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJhZGRUeXBlUHJlZml4IiwidHlwZVByZWZpeCIsInR5cGVQcmVmaXhTdHJpbmciLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JTdHJpbmciLCJhZGRNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtU3RyaW5nIiwiYWRkRGVjbGFyZWRWYXJpYWJsZSIsImRlY2xhcmVkVmFyaWFibGUiLCJkZWNsYXJlZFZhcmlhYmxlU3RyaW5nIiwiYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlU3RyaW5nIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImZpbmQiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlNZXRhdmFyaWFibGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyIsImNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUiLCJjb21wYXJlUHJlZml4ZWRUeXBlTmFtZSIsImZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeENvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSIsImNvbXBhcmVUeXBlUHJlZml4TmFtZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJWYXJpYWJsZUlkZW50aXRpZmVyIiwiZGVjbGFyZWRWYXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aXRpZmVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVGVybUJ5VGVybU5vZGUiLCJ0ZXJtTm9kZSIsInRlcm0iLCJmaW5kU3RhdGVtZW50QnlTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudCIsImZpbmRTdWJzdGl0dXRpb25CeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlTm9kZSIsInN1YnN0aXR1dGlvbiIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwiZmluZFN1YnN0aXR1dGlvbkJ5U3Vic3RpdHV0aW9uTm9kZSIsInN1YnN0aXR1dGlvbk5vZGUiLCJmaW5kU2ltcGxlU3Vic3RpdHV0aW9uQnlNZXRhdmFyaWFibGVOb2RlIiwic2ltcGxlU3Vic3RpdHV0aW9uIiwiZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSIsImNvbXBhcmVQcm9jZWR1cmVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImxhYmVsUHJlc2VudCIsInNvbWUiLCJsYWJlbCIsImxhYmVsVW5pZmllcyIsInVuaWZ5TGFiZWwiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwibGFiZWxOb2RlIiwibGFiZWxOb2RlTWF0Y2hlcyIsIm1hdGNoTGFiZWxOb2RlIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhQcmVzZW50IiwiaXNEZWNsYXJlZFZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZGVjbGFyZWRWYXJpYWJsZVByZXNlbnQiLCJpc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc01ldGFMZXZlbCIsIm1ldGFMRXZlbCIsImNsZWFyIiwiY29tcGxldGUiLCJ2ZXJpZnlGaWxlIiwiZ2V0Tm9kZSIsImZpbGVOb2RlIiwiZmlsZVZlcmlmaWVzIiwiaW5pdGlhbGlzZSIsImdldEpTT04iLCJmaWxlQ29udGV4dCIsInR5cGVzRnJvbUpTT04iLCJkZWNsYXJlZE1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsImRlY2xhcmVkVmFyaWFibGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJheGlvbXNGcm9tSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJ0b0pTT04iLCJ0eXBlc0pTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwicnVsZXNKU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsImF4aW9tc0pTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJ0eXBlUHJlZml4ZXNKU09OIiwidHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJkZWNsYXJlZFZhcmlhYmxlc0pTT04iLCJkZWNsYXJlZFZhcmlhYmxlc1RvRGVjbGFyZWRWYXJpYWJsZXNKU09OIiwiZGVjbGFyZWRNZXRhdmFyaWFibGVzSlNPTiIsImRlY2xhcmVkTWV0YXZhcmlhYmxlc1RvRGVjbGFyZWRNZXRhdmFyaWFibGVzSlNPTiIsImZyb21GaWxlIiwiZmlsZSIsInJlbGVhc2VDb250ZXh0IiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyIiwibm9taW5hbExleGVyIiwiTm9taW5hbExleGVyIiwibm9taW5hbFBh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