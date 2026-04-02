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
    findSubstitutionByVariableNode(variableNode) {
        const substitution = null;
        return substitution;
    }
    findSubstitutionByMetavariableNode(metavariableNode) {
        const substitution = null;
        return substitution;
    }
    findSubstitutionBySubstitutionNode(substitutionNode) {
        const substitution = null;
        return substitution;
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
    isTypePresentByTypeName(typeName, includeRelease = true) {
        const type = this.findTypeByTypeName(typeName, includeRelease), typePresent = type !== null;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ub21pbmFsXCI7XG5cbmltcG9ydCBOb21pbmFsTGV4ZXIgZnJvbSBcIi4uLy4uL25vbWluYWwvbGV4ZXJcIjtcbmltcG9ydCBOb21pbmFsUGFyc2VyIGZyb20gXCIuLi8uLi9ub21pbmFsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlGaWxlIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSB9IGZyb20gXCIuLi8uLi9tZXRhVHlwZXNcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0eXBlc1RvVHlwZXNKU09OLFxuICAgICAgICAgdGhlb3JlbXNGcm9tSlNPTixcbiAgICAgICAgIHJ1bGVzVG9SdWxlc0pTT04sXG4gICAgICAgICBheGlvbXNUb0F4aW9tc0pTT04sXG4gICAgICAgICBjb25qZWN0dXJlc0Zyb21KU09OLFxuICAgICAgICAgY29tYmluYXRvcnNGcm9tSlNPTixcbiAgICAgICAgIHR5cGVQcmVmaXhlc0Zyb21KU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzRnJvbUpTT04sXG4gICAgICAgICBtZXRhdGhlb3JlbXNGcm9tSlNPTixcbiAgICAgICAgIHRoZW9yZW1zVG9UaGVvcmVtc0pTT04sXG4gICAgICAgICBkZWNsYXJlZFZhcmlhYmxlc0Zyb21KU09OLFxuICAgICAgICAgY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04sXG4gICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZXNGcm9tSlNPTixcbiAgICAgICAgIHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTixcbiAgICAgICAgIG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTixcbiAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVzVG9EZWNsYXJlZFZhcmlhYmxlc0pTT04sXG4gICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZXNUb0RlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb21pbmFsRmlsZUNvbnRleHQgZXh0ZW5kcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCBqc29uLCBsZXhlciwgcGFyc2VyLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBkZWNsYXJlZFZhcmlhYmxlcywgZGVjbGFyZWRNZXRhdmFyaWFibGVzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGpzb24pO1xuXG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXM7XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zO1xuICAgIHRoaXMuZGVjbGFyZWRWYXJpYWJsZXMgPSBkZWNsYXJlZFZhcmlhYmxlcztcbiAgICB0aGlzLmRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBbXTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbXTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMuY29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgICAgY29uc3QgbGVtbWFMYWJlbHMgPSBsZW1tYS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBjb25qZWN0dXJlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1ldGF0aGVvcmVtcy5mb3JFYWNoKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUxhYmVsID0gbWV0YXRoZW9yZW0uZ2V0TGFiZWwoKTtcblxuICAgICAgICBsYWJlbHMucHVzaChtZXRhdGhlb3JlbUxhYmVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFR5cGVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXM7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFJ1bGVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVsZXM7XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldEF4aW9tcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvbXM7XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVtbWFzO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVvcmVtcztcblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0UHJvY2VkdXJlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRNZXRhTGVtbWFzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhTGVtbWFzO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uamVjdHVyZXM7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tYmluYXRvcnM7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFR5cGVQcmVmaXhlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlUHJlZml4ZXM7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3JzO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGF0aGVvcmVtcztcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXREZWNsYXJlZFZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJlZFZhcmlhYmxlcztcbiAgfVxuXG4gIGdldERlY2xhcmVkTWV0YXZhcmlhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kZWNsYXJlZE1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXREZWNsYXJlZEp1ZGdlbWVudHMoKSB7XG4gICAgY29uc3QgZGVjbGFyZWRKdWRnZW1lbnRzID0gW107XG5cbiAgICByZXR1cm4gZGVjbGFyZWRKdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0VGVybXModGVybXMgPSBbXSkge1xuICAgIHJldHVybiB0ZXJtcztcbiAgfVxuXG4gIGdldEZyYW1lcyhmcmFtZXMgPSBbXSkge1xuICAgIHJldHVybiBmcmFtZXM7XG4gIH1cblxuICBnZXRFcXVhbGl0aWVzKGVxdWFsaXRpZXMgPSBbXSkge1xuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cyhqdWRnZW1lbnRzID0gW10pIHtcbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldEFzc2VydGlvbnMoYXNzZXJ0aW9ucyA9IFtdKSB7XG4gICAgcmV0dXJuIGFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnRzKHN0YXRlbWVudHMgPSBbXSkge1xuICAgIHJldHVybiBzdGF0ZW1lbnRzO1xuICB9XG5cbiAgZ2V0UmVmZXJlbmNlcyhyZWZlcmVuY2VzID0gW10pIHtcbiAgICByZXR1cm4gcmVmZXJlbmNlcztcbiAgfVxuXG4gIGdldEFzc3VtcHRpb25zKGFzc3VtcHRpb25zID0gW10pIHtcbiAgICByZXR1cm4gYXNzdW1wdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKG1ldGF2YXJpYWJsZXMgPSBbXSkge1xuICAgIHJldHVybiBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zID0gW10pIHtcbiAgICByZXR1cm4gc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldERlcml2ZWRTdWJzdGl0dXRpb25zKGRlcml2ZWRTdWJzdGl0dXRpb25zID0gW10pIHtcbiAgICByZXR1cm4gZGVyaXZlZFN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7XG4gICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBsZW1tYVN0cmluZyA9IGxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2xlbW1hU3RyaW5nfScgbGVtbWEgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHtcbiAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICB0aGVvcmVtU3RyaW5nID0gdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt0aGVvcmVtU3RyaW5nfScgdGhlb3JlbSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZE1ldGFMZW1tYShtZXRhTGVtbWEpIHtcbiAgICB0aGlzLm1ldGFMZW1tYXMucHVzaChtZXRhTGVtbWEpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbWV0YUxlbW1hU3RyaW5nID0gbWV0YUxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGEtbGVtbWEgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBvY25qZWN0dXJlU3RyaW5nID0gb2NuamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHtvY25qZWN0dXJlU3RyaW5nfScgb2NuamVjdHVyZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSBjb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkVHlwZVByZWZpeCh0eXBlUHJlZml4KSB7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMucHVzaCh0eXBlUHJlZml4KTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhTdHJpbmcgPSB0eXBlUHJlZml4LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlLXByZWZpeCB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRNZXRhdGhlb3JlbShtZXRhdGhlb3JlbSkge1xuICAgIHRoaXMubWV0YXRoZW9yZW1zLnB1c2gobWV0YXRoZW9yZW0pO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHttZXRhdGhlb3JlbVN0cmluZ30nIG1ldGF0aGVvcmVtIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkRGVjbGFyZWRWYXJpYWJsZShkZWNsYXJlZFZhcmlhYmxlKSB7XG4gICAgdGhpcy5kZWNsYXJlZFZhcmlhYmxlcy5wdXNoKGRlY2xhcmVkVmFyaWFibGUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZVN0cmluZyA9IGRlY2xhcmVkVmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7ZGVjbGFyZWRWYXJpYWJsZVN0cmluZ30nIGRlY2xhcmVkIHZhcmlhYmxlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUoZGVjbGFyZWRNZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLmRlY2xhcmVkTWV0YXZhcmlhYmxlcy5wdXNoKGRlY2xhcmVkTWV0YXZhcmlhYmxlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlU3RyaW5nID0gZGVjbGFyZWRNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7ZGVjbGFyZWRNZXRhdmFyaWFibGVTdHJpbmd9JyBkZWNsYXJlZCBtZXRhdmFyaWFibGUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZXMuZmluZCgoZGVjbGFyZWRNZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZS51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gcnVsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGF4aW9tLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsZW1tYXMgPSB0aGlzLmdldExlbW1hcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGxlbW1hID0gbGVtbWFzLmZpbmQoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGxlbW1hLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gdGhpcy5nZXRUaGVvcmVtcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtcy5maW5kKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoZW9yZW0ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBjb25qZWN0dXJlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgZmlsdGVyKG1ldGFMZW1tYXMsIChtZXRhTGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG1ldGFMZW1tYSwgLy8vXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyA9IHJlZmVyZW5jZS5jb21wYXJlVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbik7XG5cbiAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCk7XG5cbiAgICBmaWx0ZXIobWV0YXRoZW9yZW1zLCAobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG1ldGF0aGVvcmVtLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gcmVmZXJlbmNlLmNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tID0gdGhpcy5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGxlbW1hID0gdGhpcy5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGlzLmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gdGhpcy5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzLmZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gdGhpcy5maW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gdGhpcy5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gW1xuICAgICAgICAgICAgLi4ubWV0YUxlbW1hcyxcbiAgICAgICAgICAgIC4uLm1ldGF0aGVvcmVtc1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSB0eXBlLmNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhlcy5maW5kKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeC5jb21wYXJlVHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZVByZWZpeENvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKFZhcmlhYmxlSWRlbnRpdGlmZXIpIHtcbiAgICBjb25zdCBkZWNsYXJlZFZhcmlhYmxlcyA9IHRoaXMuZ2V0RGVjbGFyZWRWYXJpYWJsZXMoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlID0gZGVjbGFyZWRWYXJpYWJsZXMuZmluZCgoZGVjbGFyZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyZWRWYXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aXRpZmVyID0gZGVjbGFyZWRWYXJpYWJsZS5jb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKFZhcmlhYmxlSWRlbnRpdGlmZXIpO1xuXG4gICAgICAgICAgICBpZiAoZGVjbGFyZWRWYXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aXRpZmVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRWYXJpYWJsZTtcbiAgfVxuXG4gIGZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gdGhpcy5nZXREZWNsYXJlZE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlcy5maW5kKChkZWNsYXJlZE1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZGVjbGFyZWRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHN1YnN0aXR1dGlvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICB9XG5cbiAgZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9uID0gbnVsbDtcblxuICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gIH1cblxuICBmaW5kU3Vic3RpdHV0aW9uQnlTdWJzdGl0dXRpb25Ob2RlKHN1YnN0aXR1dGlvbk5vZGUpIHtcbiAgICBjb25zdCBzdWJzdGl0dXRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbjtcbiAgfVxuXG4gIGZpbmRNZXRhTGV2ZWxBc3N1bXB0aW9uQnlNZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZShtZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSkge1xuICAgIGNvbnN0IG1ldGFMZXZlbEFzc3VtcHRpb24gPSBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFMZXZlbEFzc3VtcHRpb247XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gdGhpcy5nZXRQcm9jZWR1cmVzKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlcy5maW5kKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2NlZHVyZUNvbXBhcmVzVG9Qcm9jZWR1cmVOYW1lID0gcHJvY2VkdXJlLmNvbXBhcmVQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHsgcmV0dXJuIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7IH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBjb250ZXh0KSB7XG4gICAgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7ICAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQgPSBudWxsKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxOb2RlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChsYWJlbE5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeCA9IHRoaXMuZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9ICh0eXBlUHJlZml4ICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4UHJlc2VudDtcbiAgfVxuXG4gIGlzRGVjbGFyZWRWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCBkZWNsYXJlZFZhcmlhYmxlID0gdGhpcy5maW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciksXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZVByZXNlbnQgPSAoZGVjbGFyZWRWYXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRWYXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGUgPSB0aGlzLmZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnQgPSAoZGVjbGFyZWRNZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlID0gdGhpcy5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSAocHJvY2VkdXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhTGV2ZWwoKSB7XG4gICAgY29uc3QgbWV0YUxFdmVsID0gZmFsc2U7XG5cbiAgICByZXR1cm4gbWV0YUxFdmVsO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50eXBlcyA9IFtdO1xuICAgIHRoaXMucnVsZXMgPSBbXTtcbiAgICB0aGlzLmF4aW9tcyA9IFtdO1xuICAgIHRoaXMubGVtbWFzID0gW107XG4gICAgdGhpcy50aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IFtdO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBbXTtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gW107XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSBbXTtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IFtdO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gW107XG4gICAgdGhpcy5kZWNsYXJlZFZhcmlhYmxlcyA9IFtdO1xuICAgIHRoaXMuZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gW107XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICAvLy9cbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUZpbGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBmaWxlTm9kZSA9IG5vZGUsICAvLy9cbiAgICAgICAgICBmaWxlVmVyaWZpZXMgPSBhd2FpdCB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBmaWxlVmVyaWZpZXM7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIGNvbnN0IGpzb24gPSB0aGlzLmdldEpTT04oKTtcblxuICAgIGlmIChqc29uID09PSBudWxsKSB7XG4gICAgICBzdXBlci5pbml0aWFsaXNlKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy50eXBlcyA9IFtdO1xuXG4gICAgdHlwZXNGcm9tSlNPTihqc29uLCB0aGlzLnR5cGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmxlbW1hcyA9IFtdO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IFtdO1xuXG4gICAgdGhpcy5kZWNsYXJlZE1ldGF2YXJpYWJsZXMgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5kZWNsYXJlZFZhcmlhYmxlcyA9IGRlY2xhcmVkVmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMucnVsZXMgPSBydWxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzVG9UeXBlc0pTT04odGhpcy50eXBlcyksXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXNUb1J1bGVzSlNPTih0aGlzLnJ1bGVzKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zVG9BeGlvbXNKU09OKHRoaXMuYXhpb21zKSxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoaXMudGhlb3JlbXMpLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04odGhpcy5jb25qZWN0dXJlcyksXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTih0aGlzLmNvbWJpbmF0b3JzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHRoaXMudHlwZVByZWZpeGVzKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKHRoaXMuY29uc3RydWN0b3JzKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKHRoaXMubWV0YXRoZW9yZW1zKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlc0pTT04gPSBkZWNsYXJlZFZhcmlhYmxlc1RvRGVjbGFyZWRWYXJpYWJsZXNKU09OKHRoaXMuZGVjbGFyZWRWYXJpYWJsZXMpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04gPSBkZWNsYXJlZE1ldGF2YXJpYWJsZXNUb0RlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04odGhpcy5kZWNsYXJlZE1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIGZpbGVDb250ZW50ID0gdGhpcy5maWxlQ29udGVudCxcbiAgICAgICAgICBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgdHlwZXMgPSB0eXBlc0pTT04sICAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tcyA9IGF4aW9tc0pTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IGRlY2xhcmVkVmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZUNvbnRlbnQsXG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICB0eXBlUHJlZml4ZXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyxcbiAgICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIoKSxcbiAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxMZXhlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbFBhcnNlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBsZXhlciA9IG5vbWluYWxMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbm9taW5hbFBhcnNlciwgLy8vXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG5vbWluYWxGaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKE5vbWluYWxGaWxlQ29udGV4dCwgZmlsZSwgbGV4ZXIsIHBhcnNlciwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgZGVjbGFyZWRWYXJpYWJsZXMsIGRlY2xhcmVkTWV0YXZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbm9taW5hbEZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpLFxuICAgICAgICAgIG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbExleGVyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsUGFyc2VyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgbGVtbWFzID0gbnVsbCxcbiAgICAgICAgICB0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IG51bGwsXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBudWxsLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gbnVsbCxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBudWxsLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG51bGwsXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbnVsbCxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBub21pbmFsRmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tSlNPTihOb21pbmFsRmlsZUNvbnRleHQsIGpzb24sIGxleGVyLCBwYXJzZXIsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIGRlY2xhcmVkVmFyaWFibGVzLCBkZWNsYXJlZE1ldGF2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxGaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vbWluYWxGaWxlQ29udGV4dCIsInB1c2giLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJGaWxlQ29udGV4dCIsImNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImpzb24iLCJsZXhlciIsInBhcnNlciIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJsZW1tYXMiLCJ0aGVvcmVtcyIsIm1ldGFMZW1tYXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwidHlwZVByZWZpeGVzIiwiY29uc3RydWN0b3JzIiwibWV0YXRoZW9yZW1zIiwiZGVjbGFyZWRWYXJpYWJsZXMiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJsZW1tYSIsImxlbW1hTGFiZWxzIiwidGhlb3JlbSIsInRoZW9yZW1MYWJlbHMiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUxhYmVscyIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1MYWJlbCIsImdldExhYmVsIiwiZ2V0VHlwZXMiLCJnZXRSdWxlcyIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsImdldERlY2xhcmVkVmFyaWFibGVzIiwiZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzIiwiZ2V0RGVjbGFyZWRKdWRnZW1lbnRzIiwiZGVjbGFyZWRKdWRnZW1lbnRzIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImZyYW1lcyIsImdldEVxdWFsaXRpZXMiLCJlcXVhbGl0aWVzIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRBc3NlcnRpb25zIiwiYXNzZXJ0aW9ucyIsImdldFN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImdldERlcml2ZWRTdWJzdGl0dXRpb25zIiwiZGVyaXZlZFN1YnN0aXR1dGlvbnMiLCJhZGRUeXBlIiwidHlwZSIsImdldEZpbGVQYXRoIiwidHlwZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiYWRkUnVsZSIsInJ1bGVTdHJpbmciLCJhZGRBeGlvbSIsImF4aW9tU3RyaW5nIiwiYWRkTGVtbWEiLCJsZW1tYVN0cmluZyIsImFkZFRoZW9yZW0iLCJ0aGVvcmVtU3RyaW5nIiwiYWRkTWV0YUxlbW1hIiwibWV0YUxlbW1hIiwibWV0YUxlbW1hU3RyaW5nIiwiYWRkQ29uamVjdHVyZSIsIm9jbmplY3R1cmVTdHJpbmciLCJvY25qZWN0dXJlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJjb21iaW5hdG9yU3RyaW5nIiwiYWRkVHlwZVByZWZpeCIsInR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4U3RyaW5nIiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yU3RyaW5nIiwiYWRkTWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbVN0cmluZyIsImFkZERlY2xhcmVkVmFyaWFibGUiLCJkZWNsYXJlZFZhcmlhYmxlIiwiZGVjbGFyZWRWYXJpYWJsZVN0cmluZyIsImFkZERlY2xhcmVkTWV0YXZhcmlhYmxlIiwiZGVjbGFyZWRNZXRhdmFyaWFibGUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZVN0cmluZyIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5TWV0YXZhcmlhYmxlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMiLCJjb21wYXJlVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lIiwiY29tcGFyZVByZWZpeGVkVHlwZU5hbWUiLCJmaW5kVHlwZVByZWZpeEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhDb21wYXJlc1RvVHlwZVByZWZpeE5hbWUiLCJjb21wYXJlVHlwZVByZWZpeE5hbWUiLCJmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwiVmFyaWFibGVJZGVudGl0aWZlciIsImRlY2xhcmVkVmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGl0aWZlciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZGVjbGFyZWRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiZmluZFN1YnN0aXR1dGlvbkJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwic3Vic3RpdHV0aW9uIiwiZmluZFN1YnN0aXR1dGlvbkJ5TWV0YXZhcmlhYmxlTm9kZSIsImZpbmRTdWJzdGl0dXRpb25CeVN1YnN0aXR1dGlvbk5vZGUiLCJzdWJzdGl0dXRpb25Ob2RlIiwiZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSIsImNvbXBhcmVQcm9jZWR1cmVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImxhYmVsUHJlc2VudCIsInNvbWUiLCJsYWJlbCIsImxhYmVsVW5pZmllcyIsInVuaWZ5TGFiZWwiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwibGFiZWxOb2RlIiwibGFiZWxOb2RlTWF0Y2hlcyIsIm1hdGNoTGFiZWxOb2RlIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhQcmVzZW50IiwiaXNEZWNsYXJlZFZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZGVjbGFyZWRWYXJpYWJsZVByZXNlbnQiLCJpc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc01ldGFMZXZlbCIsIm1ldGFMRXZlbCIsImNsZWFyIiwiY29tcGxldGUiLCJ2ZXJpZnlGaWxlIiwiZ2V0Tm9kZSIsImZpbGVOb2RlIiwiZmlsZVZlcmlmaWVzIiwiaW5pdGlhbGlzZSIsImdldEpTT04iLCJmaWxlQ29udGV4dCIsInR5cGVzRnJvbUpTT04iLCJkZWNsYXJlZE1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsImRlY2xhcmVkVmFyaWFibGVzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJheGlvbXNGcm9tSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJ0b0pTT04iLCJ0eXBlc0pTT04iLCJ0eXBlc1RvVHlwZXNKU09OIiwicnVsZXNKU09OIiwicnVsZXNUb1J1bGVzSlNPTiIsImF4aW9tc0pTT04iLCJheGlvbXNUb0F4aW9tc0pTT04iLCJ0aGVvcmVtc0pTT04iLCJ0aGVvcmVtc1RvVGhlb3JlbXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJ0eXBlUHJlZml4ZXNKU09OIiwidHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJkZWNsYXJlZFZhcmlhYmxlc0pTT04iLCJkZWNsYXJlZFZhcmlhYmxlc1RvRGVjbGFyZWRWYXJpYWJsZXNKU09OIiwiZGVjbGFyZWRNZXRhdmFyaWFibGVzSlNPTiIsImRlY2xhcmVkTWV0YXZhcmlhYmxlc1RvRGVjbGFyZWRNZXRhdmFyaWFibGVzSlNPTiIsImZyb21GaWxlIiwiZmlsZSIsInJlbGVhc2VDb250ZXh0IiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyIiwibm9taW5hbExleGVyIiwiTm9taW5hbExleGVyIiwibm9taW5hbFBhcnNlciIsIk5vbWluYWxQYXJzZXIiLCJub21pbmFsRmlsZUNvbnRleHQiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBdUNBOzs7ZUFBcUJBOzs7Z0NBckNPOzJCQUNHOzhCQUNtQjs4REFFekI7K0RBQ0M7d0JBRUM7c0JBQ1M7MkJBQ087c0JBc0JzQjs7Ozs7O0FBRWpFLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUUsR0FBR0MseUJBQWMsRUFDakMsRUFBRUMscUNBQXFDLEVBQUUsR0FBR0MsNkJBQWUsRUFDM0QsRUFBRUMsc0NBQXNDLEVBQUUsR0FBR0MsOEJBQWdCO0FBRXBELE1BQU1QLDJCQUEyQlEsMkJBQVc7SUFDekQsWUFBWUMsT0FBTyxFQUFFQyxXQUFXLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxpQkFBaUIsRUFBRUMscUJBQXFCLENBQUU7UUFDL08sS0FBSyxDQUFDcEIsU0FBU0MsYUFBYUMsVUFBVUMsUUFBUUMsTUFBTUM7UUFFcEQsSUFBSSxDQUFDQyxLQUFLLEdBQUdBO1FBQ2IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDUCxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDRSxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtRQUNaLElBQUksQ0FBQ0ksS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtRQUNiLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLFlBQVksR0FBR0E7UUFDcEIsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLGlCQUFpQixHQUFHQTtRQUN6QixJQUFJLENBQUNDLHFCQUFxQixHQUFHQTtJQUMvQjtJQUVBQyxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUNmLEtBQUs7SUFDbkI7SUFFQWdCLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQ2YsTUFBTTtJQUNwQjtJQUVBZ0Isa0JBQWtCO1FBQ2hCLE1BQU1DLGVBQWUsRUFBRTtRQUV2QixPQUFPQTtJQUNUO0lBRUFDLCtCQUErQjtRQUM3QixNQUFNQyw0QkFBNEIsRUFBRTtRQUVwQyxPQUFPQTtJQUNUO0lBRUFDLFVBQVVDLGlCQUFpQixJQUFJLEVBQUU7UUFDL0IsTUFBTUMsU0FBUyxFQUFFO1FBRWpCLElBQUlELGdCQUFnQjtZQUNsQixNQUFNRSx1QkFBdUIsSUFBSSxDQUFDOUIsT0FBTyxDQUFDMkIsU0FBUztZQUVuRG5DLEtBQUtxQyxRQUFRQztRQUNmLE9BQU87WUFDTCxJQUFJLENBQUNyQixLQUFLLENBQUNzQixPQUFPLENBQUMsQ0FBQ0M7Z0JBQ2xCLE1BQU1DLGFBQWFELEtBQUtMLFNBQVM7Z0JBRWpDbkMsS0FBS3FDLFFBQVFJO1lBQ2Y7WUFFQSxJQUFJLENBQUN2QixNQUFNLENBQUNxQixPQUFPLENBQUMsQ0FBQ0c7Z0JBQ25CLE1BQU1DLGNBQWNELE1BQU1QLFNBQVM7Z0JBRW5DbkMsS0FBS3FDLFFBQVFNO1lBQ2Y7WUFFQSxJQUFJLENBQUN4QixNQUFNLENBQUNvQixPQUFPLENBQUMsQ0FBQ0s7Z0JBQ25CLE1BQU1DLGNBQWNELE1BQU1ULFNBQVM7Z0JBRW5DbkMsS0FBS3FDLFFBQVFRO1lBQ2Y7WUFFQSxJQUFJLENBQUN6QixRQUFRLENBQUNtQixPQUFPLENBQUMsQ0FBQ087Z0JBQ3JCLE1BQU1DLGdCQUFnQkQsUUFBUVgsU0FBUztnQkFFdkNuQyxLQUFLcUMsUUFBUVU7WUFDZjtZQUVBLElBQUksQ0FBQ3pCLFdBQVcsQ0FBQ2lCLE9BQU8sQ0FBQyxDQUFDUztnQkFDeEIsTUFBTUMsbUJBQW1CRCxXQUFXYixTQUFTO2dCQUU3Q25DLEtBQUtxQyxRQUFRWTtZQUNmO1lBRUEsSUFBSSxDQUFDdkIsWUFBWSxDQUFDYSxPQUFPLENBQUMsQ0FBQ1c7Z0JBQ3pCLE1BQU1DLG1CQUFtQkQsWUFBWUUsUUFBUTtnQkFFN0NmLE9BQU9yQyxJQUFJLENBQUNtRDtZQUNkO1FBQ0Y7UUFFQSxPQUFPZDtJQUNUO0lBRUFnQixTQUFTakIsaUJBQWlCLElBQUksRUFBRTtRQUM5QixNQUFNcEIsUUFBUW9CLGlCQUNFLElBQUksQ0FBQzVCLE9BQU8sQ0FBQzZDLFFBQVEsS0FDbkIsSUFBSSxDQUFDckMsS0FBSztRQUU1QixPQUFPQTtJQUNUO0lBRUFzQyxTQUFTbEIsaUJBQWlCLElBQUksRUFBRTtRQUM5QixNQUFNbkIsUUFBUW1CLGlCQUNFLElBQUksQ0FBQzVCLE9BQU8sQ0FBQzhDLFFBQVEsS0FDbkIsSUFBSSxDQUFDckMsS0FBSztRQUU1QixPQUFPQTtJQUNUO0lBRUFzQyxVQUFVbkIsaUJBQWlCLElBQUksRUFBRTtRQUMvQixNQUFNbEIsU0FBU2tCLGlCQUNFLElBQUksQ0FBQzVCLE9BQU8sQ0FBQytDLFNBQVMsS0FDcEIsSUFBSSxDQUFDckMsTUFBTTtRQUU5QixPQUFPQTtJQUNUO0lBRUFzQyxVQUFVcEIsaUJBQWlCLElBQUksRUFBRTtRQUMvQixNQUFNakIsU0FBU2lCLGlCQUNFLElBQUksQ0FBQzVCLE9BQU8sQ0FBQ2dELFNBQVMsS0FDcEIsSUFBSSxDQUFDckMsTUFBTTtRQUU5QixPQUFPQTtJQUNUO0lBRUFzQyxZQUFZckIsaUJBQWlCLElBQUksRUFBRTtRQUNqQyxNQUFNaEIsV0FBV2dCLGlCQUNFLElBQUksQ0FBQzVCLE9BQU8sQ0FBQ2lELFdBQVcsS0FDdEIsSUFBSSxDQUFDckMsUUFBUTtRQUVsQyxPQUFPQTtJQUNUO0lBRUFzQyxjQUFjdEIsaUJBQWlCLElBQUksRUFBRTtRQUNuQyxNQUFNdUIsYUFBYXZCLGlCQUNFLElBQUksQ0FBQzVCLE9BQU8sQ0FBQ2tELGFBQWEsS0FDeEIsTUFBTyxHQUFHO1FBRWpDLE9BQU9DO0lBQ1Q7SUFFQUMsY0FBY3hCLGlCQUFpQixJQUFJLEVBQUU7UUFDbkMsTUFBTWYsYUFBYWUsaUJBQ0UsSUFBSSxDQUFDNUIsT0FBTyxDQUFDb0QsYUFBYSxLQUN4QixJQUFJLENBQUN2QyxVQUFVO1FBRXRDLE9BQU9BO0lBQ1Q7SUFFQXdDLGVBQWV6QixpQkFBaUIsSUFBSSxFQUFFO1FBQ3BDLE1BQU1kLGNBQWNjLGlCQUNFLElBQUksQ0FBQzVCLE9BQU8sQ0FBQ3FELGNBQWMsS0FDekIsSUFBSSxDQUFDdkMsV0FBVztRQUV4QyxPQUFPQTtJQUNUO0lBRUF3QyxlQUFlMUIsaUJBQWlCLElBQUksRUFBRTtRQUNwQyxNQUFNYixjQUFjYSxpQkFDRSxJQUFJLENBQUM1QixPQUFPLENBQUNzRCxjQUFjLEtBQ3pCLElBQUksQ0FBQ3ZDLFdBQVc7UUFFeEMsT0FBT0E7SUFDVDtJQUVBd0MsZ0JBQWdCM0IsaUJBQWlCLElBQUksRUFBRTtRQUNyQyxNQUFNWixlQUFlWSxpQkFDRSxJQUFJLENBQUM1QixPQUFPLENBQUN1RCxlQUFlLEtBQzFCLElBQUksQ0FBQ3ZDLFlBQVk7UUFFMUMsT0FBT0E7SUFDVDtJQUVBd0MsZ0JBQWdCNUIsaUJBQWlCLElBQUksRUFBRTtRQUNyQyxNQUFNWCxlQUFlVyxpQkFDRSxJQUFJLENBQUM1QixPQUFPLENBQUN3RCxlQUFlLEtBQzFCLElBQUksQ0FBQ3ZDLFlBQVk7UUFFMUMsT0FBT0E7SUFDVDtJQUVBd0MsZ0JBQWdCN0IsaUJBQWlCLElBQUksRUFBRTtRQUNyQyxNQUFNVixlQUFlVSxpQkFDRSxJQUFJLENBQUM1QixPQUFPLENBQUN5RCxlQUFlLEtBQzFCLElBQUksQ0FBQ3ZDLFlBQVk7UUFFMUMsT0FBT0E7SUFDVDtJQUVBd0MsdUJBQXVCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDdkMsaUJBQWlCO0lBQy9CO0lBRUF3QywyQkFBMkI7UUFDekIsT0FBTyxJQUFJLENBQUN2QyxxQkFBcUI7SUFDbkM7SUFFQXdDLHdCQUF3QjtRQUN0QixNQUFNQyxxQkFBcUIsRUFBRTtRQUU3QixPQUFPQTtJQUNUO0lBRUFDLFNBQVNDLFFBQVEsRUFBRSxFQUFFO1FBQ25CLE9BQU9BO0lBQ1Q7SUFFQUMsVUFBVUMsU0FBUyxFQUFFLEVBQUU7UUFDckIsT0FBT0E7SUFDVDtJQUVBQyxjQUFjQyxhQUFhLEVBQUUsRUFBRTtRQUM3QixPQUFPQTtJQUNUO0lBRUFDLGNBQWNDLGFBQWEsRUFBRSxFQUFFO1FBQzdCLE9BQU9BO0lBQ1Q7SUFFQUMsY0FBY0MsYUFBYSxFQUFFLEVBQUU7UUFDN0IsT0FBT0E7SUFDVDtJQUVBQyxjQUFjQyxhQUFhLEVBQUUsRUFBRTtRQUM3QixPQUFPQTtJQUNUO0lBRUFDLGNBQWNDLGFBQWEsRUFBRSxFQUFFO1FBQzdCLE9BQU9BO0lBQ1Q7SUFFQUMsZUFBZUMsY0FBYyxFQUFFLEVBQUU7UUFDL0IsT0FBT0E7SUFDVDtJQUVBQyxpQkFBaUJDLGdCQUFnQixFQUFFLEVBQUU7UUFDbkMsT0FBT0E7SUFDVDtJQUVBQyxpQkFBaUJDLGdCQUFnQixFQUFFLEVBQUU7UUFDbkMsT0FBT0E7SUFDVDtJQUVBQyx3QkFBd0JDLHVCQUF1QixFQUFFLEVBQUU7UUFDakQsT0FBT0E7SUFDVDtJQUVBQyxRQUFRQyxJQUFJLEVBQUU7UUFDWixJQUFJLENBQUM3RSxLQUFLLENBQUNoQixJQUFJLENBQUM2RjtRQUVoQixNQUFNbkYsV0FBVyxJQUFJLENBQUNvRixXQUFXLElBQzNCQyxhQUFhRixLQUFLRyxTQUFTO1FBRWpDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFRixXQUFXLGVBQWUsRUFBRXJGLFNBQVMsZUFBZSxDQUFDO0lBQ2hGO0lBRUF3RixRQUFRMUQsSUFBSSxFQUFFO1FBQ1osSUFBSSxDQUFDdkIsS0FBSyxDQUFDakIsSUFBSSxDQUFDd0M7UUFFaEIsTUFBTTlCLFdBQVcsSUFBSSxDQUFDb0YsV0FBVyxJQUMzQkssYUFBYTNELEtBQUt3RCxTQUFTO1FBRWpDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFRSxXQUFXLGVBQWUsRUFBRXpGLFNBQVMsZUFBZSxDQUFDO0lBQ2hGO0lBRUEwRixTQUFTMUQsS0FBSyxFQUFFO1FBQ2QsSUFBSSxDQUFDeEIsTUFBTSxDQUFDbEIsSUFBSSxDQUFDMEM7UUFFakIsTUFBTWhDLFdBQVcsSUFBSSxDQUFDb0YsV0FBVyxJQUMzQk8sY0FBYzNELE1BQU1zRCxTQUFTO1FBRW5DLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFSSxZQUFZLGdCQUFnQixFQUFFM0YsU0FBUyxlQUFlLENBQUM7SUFDbEY7SUFFQTRGLFNBQVMxRCxLQUFLLEVBQUU7UUFDZCxJQUFJLENBQUN6QixNQUFNLENBQUNuQixJQUFJLENBQUM0QztRQUVqQixNQUFNbEMsV0FBVyxJQUFJLENBQUNvRixXQUFXLElBQzNCUyxjQUFjM0QsTUFBTW9ELFNBQVM7UUFFbkMsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUVNLFlBQVksZ0JBQWdCLEVBQUU3RixTQUFTLGVBQWUsQ0FBQztJQUNsRjtJQUVBOEYsV0FBVzFELE9BQU8sRUFBRTtRQUNsQixJQUFJLENBQUMxQixRQUFRLENBQUNwQixJQUFJLENBQUM4QztRQUVuQixNQUFNcEMsV0FBVyxJQUFJLENBQUNvRixXQUFXLElBQzNCVyxnQkFBZ0IzRCxRQUFRa0QsU0FBUztRQUV2QyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRVEsY0FBYyxrQkFBa0IsRUFBRS9GLFNBQVMsZUFBZSxDQUFDO0lBQ3RGO0lBRUFnRyxhQUFhQyxTQUFTLEVBQUU7UUFDdEIsSUFBSSxDQUFDdEYsVUFBVSxDQUFDckIsSUFBSSxDQUFDMkc7UUFFckIsTUFBTWpHLFdBQVcsSUFBSSxDQUFDb0YsV0FBVyxJQUMzQmMsa0JBQWtCRCxVQUFVWCxTQUFTO1FBRTNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFVyxnQkFBZ0IscUJBQXFCLEVBQUVsRyxTQUFTLGVBQWUsQ0FBQztJQUMzRjtJQUVBbUcsY0FBYzdELFVBQVUsRUFBRTtRQUN4QixJQUFJLENBQUMxQixXQUFXLENBQUN0QixJQUFJLENBQUNnRDtRQUV0QixNQUFNdEMsV0FBVyxJQUFJLENBQUNvRixXQUFXLElBQzNCZ0IsbUJBQW1CQyxXQUFXZixTQUFTO1FBRTdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFYSxpQkFBaUIscUJBQXFCLEVBQUVwRyxTQUFTLGVBQWUsQ0FBQztJQUM1RjtJQUVBc0csY0FBY0MsVUFBVSxFQUFFO1FBQ3hCLElBQUksQ0FBQzFGLFdBQVcsQ0FBQ3ZCLElBQUksQ0FBQ2lIO1FBRXRCLE1BQU12RyxXQUFXLElBQUksQ0FBQ29GLFdBQVcsSUFDM0JvQixtQkFBbUJELFdBQVdqQixTQUFTO1FBRTdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFaUIsaUJBQWlCLHFCQUFxQixFQUFFeEcsU0FBUyxlQUFlLENBQUM7SUFDNUY7SUFFQXlHLGNBQWNDLFVBQVUsRUFBRTtRQUN4QixJQUFJLENBQUM1RixZQUFZLENBQUN4QixJQUFJLENBQUNvSDtRQUV2QixNQUFNMUcsV0FBVyxJQUFJLENBQUNvRixXQUFXLElBQzNCdUIsbUJBQW1CRCxXQUFXcEIsU0FBUztRQUU3QyxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRW9CLGlCQUFpQixzQkFBc0IsRUFBRTNHLFNBQVMsZUFBZSxDQUFDO0lBQzdGO0lBRUE0RyxlQUFlQyxXQUFXLEVBQUU7UUFDMUIsSUFBSSxDQUFDOUYsWUFBWSxDQUFDekIsSUFBSSxDQUFDdUg7UUFFdkIsTUFBTTdHLFdBQVcsSUFBSSxDQUFDb0YsV0FBVyxJQUMzQjBCLG9CQUFvQkQsWUFBWXZCLFNBQVM7UUFFL0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUV1QixrQkFBa0Isc0JBQXNCLEVBQUU5RyxTQUFTLGVBQWUsQ0FBQztJQUM5RjtJQUVBK0csZUFBZXZFLFdBQVcsRUFBRTtRQUMxQixJQUFJLENBQUN4QixZQUFZLENBQUMxQixJQUFJLENBQUNrRDtRQUV2QixNQUFNeEMsV0FBVyxJQUFJLENBQUNvRixXQUFXLElBQzNCNEIsb0JBQW9CeEUsWUFBWThDLFNBQVM7UUFFL0MsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUV5QixrQkFBa0Isc0JBQXNCLEVBQUVoSCxTQUFTLGVBQWUsQ0FBQztJQUM5RjtJQUVBaUgsb0JBQW9CQyxnQkFBZ0IsRUFBRTtRQUNwQyxJQUFJLENBQUNqRyxpQkFBaUIsQ0FBQzNCLElBQUksQ0FBQzRIO1FBRTVCLE1BQU1sSCxXQUFXLElBQUksQ0FBQ29GLFdBQVcsSUFDM0IrQix5QkFBeUJELGlCQUFpQjVCLFNBQVM7UUFFekQsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUU0Qix1QkFBdUIsNEJBQTRCLEVBQUVuSCxTQUFTLGVBQWUsQ0FBQztJQUN6RztJQUVBb0gsd0JBQXdCQyxvQkFBb0IsRUFBRTtRQUM1QyxJQUFJLENBQUNuRyxxQkFBcUIsQ0FBQzVCLElBQUksQ0FBQytIO1FBRWhDLE1BQU1ySCxXQUFXLElBQUksQ0FBQ29GLFdBQVcsSUFDM0JrQyw2QkFBNkJELHFCQUFxQi9CLFNBQVM7UUFFakUsSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUrQiwyQkFBMkIsZ0NBQWdDLEVBQUV0SCxTQUFTLGVBQWUsQ0FBQztJQUNqSDtJQUVBdUgsaUJBQWlCQyxZQUFZLEVBQUUxSCxPQUFPLEVBQUU7UUFDdEMsTUFBTW9CLHdCQUF3QixJQUFJLENBQUN1Qyx3QkFBd0I7UUFFM0QrRCxlQUFldEcsc0JBQXNCdUcsSUFBSSxDQUFDLENBQUNKO1lBQ3pDLE1BQU1LLHNCQUFzQkwscUJBQXFCTSxpQkFBaUIsQ0FBQ0gsY0FBYzFIO1lBRWpGLElBQUk0SCxxQkFBcUI7Z0JBQ3ZCLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixPQUFPRjtJQUNUO0lBRUFJLG9CQUFvQkMsU0FBUyxFQUFFO1FBQzdCLE1BQU10SCxRQUFRLElBQUksQ0FBQ3FDLFFBQVEsSUFDckJrRixtQkFBbUJELFVBQVVFLG1CQUFtQixJQUNoRGpHLE9BQU92QixNQUFNa0gsSUFBSSxDQUFDLENBQUMzRjtZQUNqQixNQUFNa0csMEJBQTBCbEcsS0FBS21HLHFCQUFxQixDQUFDSDtZQUUzRCxJQUFJRSx5QkFBeUI7Z0JBQzNCLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFWixPQUFPbEc7SUFDVDtJQUVBb0cscUJBQXFCTCxTQUFTLEVBQUU7UUFDOUIsTUFBTXJILFNBQVMsSUFBSSxDQUFDcUMsU0FBUyxJQUN2QmlGLG1CQUFtQkQsVUFBVUUsbUJBQW1CLElBQ2hEL0YsUUFBUXhCLE9BQU9pSCxJQUFJLENBQUMsQ0FBQ3pGO1lBQ25CLE1BQU1nRywwQkFBMEJoRyxNQUFNaUcscUJBQXFCLENBQUNIO1lBRTVELElBQUlFLHlCQUF5QjtnQkFDM0IsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVaLE9BQU9oRztJQUNUO0lBRUFtRyxxQkFBcUJOLFNBQVMsRUFBRTtRQUM5QixNQUFNcEgsU0FBUyxJQUFJLENBQUNxQyxTQUFTLElBQ3ZCZ0YsbUJBQW1CRCxVQUFVRSxtQkFBbUIsSUFDaEQ3RixRQUFRekIsT0FBT2dILElBQUksQ0FBQyxDQUFDdkY7WUFDbkIsTUFBTThGLDBCQUEwQjlGLE1BQU0rRixxQkFBcUIsQ0FBQ0g7WUFFNUQsSUFBSUUseUJBQXlCO2dCQUMzQixPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosT0FBTzlGO0lBQ1Q7SUFFQWtHLHVCQUF1QlAsU0FBUyxFQUFFO1FBQ2hDLE1BQU1uSCxXQUFXLElBQUksQ0FBQ3FDLFdBQVcsSUFDM0IrRSxtQkFBbUJELFVBQVVFLG1CQUFtQixJQUNoRDNGLFVBQVUxQixTQUFTK0csSUFBSSxDQUFDLENBQUNyRjtZQUN2QixNQUFNNEYsMEJBQTBCNUYsUUFBUTZGLHFCQUFxQixDQUFDSDtZQUU5RCxJQUFJRSx5QkFBeUI7Z0JBQzNCLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFWixPQUFPNUY7SUFDVDtJQUVBaUcsMEJBQTBCUixTQUFTLEVBQUU7UUFDbkMsTUFBTWpILGNBQWMsSUFBSSxDQUFDdUMsY0FBYyxJQUNqQzJFLG1CQUFtQkQsVUFBVUUsbUJBQW1CLElBQ2hEekYsYUFBYTFCLFlBQVk2RyxJQUFJLENBQUMsQ0FBQ25GO1lBQzdCLE1BQU0wRiwwQkFBMEIxRixXQUFXMkYscUJBQXFCLENBQUNIO1lBRWpFLElBQUlFLHlCQUF5QjtnQkFDM0IsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVaLE9BQU8xRjtJQUNUO0lBRUFnRywwQkFBMEJULFNBQVMsRUFBRTtRQUNuQyxNQUFNbEgsYUFBYSxJQUFJLENBQUN1QyxhQUFhO1FBRXJDM0QsT0FBT29CLFlBQVksQ0FBQ3NGO1lBQ2xCLE1BQU1zQyx3QkFBd0J0QyxXQUN4QnVDLGdDQUFnQ1gsVUFBVVksNEJBQTRCLENBQUNGO1lBRTdFLElBQUlDLCtCQUErQjtnQkFDakMsT0FBTztZQUNUO1FBQ0Y7UUFFQSxPQUFPN0g7SUFDVDtJQUVBK0gsNEJBQTRCYixTQUFTLEVBQUU7UUFDckMsTUFBTTdHLGVBQWUsSUFBSSxDQUFDdUMsZUFBZTtRQUV6Q2hFLE9BQU95QixjQUFjLENBQUN3QjtZQUNwQixNQUFNK0Ysd0JBQXdCL0YsYUFDeEJnRyxnQ0FBZ0NYLFVBQVVZLDRCQUE0QixDQUFDRjtZQUU3RSxJQUFJQywrQkFBK0I7Z0JBQ2pDLE9BQU87WUFDVDtRQUNGO1FBRUEsT0FBT3hIO0lBQ1Q7SUFFQTJILGlDQUFpQ2QsU0FBUyxFQUFFO1FBQzFDLE1BQU03RixRQUFRLElBQUksQ0FBQ2tHLG9CQUFvQixDQUFDTCxZQUNsQzNGLFFBQVEsSUFBSSxDQUFDaUcsb0JBQW9CLENBQUNOLFlBQ2xDekYsVUFBVSxJQUFJLENBQUNnRyxzQkFBc0IsQ0FBQ1AsWUFDdEN2RixhQUFhLElBQUksQ0FBQytGLHlCQUF5QixDQUFDUixZQUM1Q2Usb0JBQXFCNUcsU0FBU0UsU0FBU0UsV0FBV0U7UUFFeEQsT0FBT3NHO0lBQ1Q7SUFFQUMscUNBQXFDaEIsU0FBUyxFQUFFO1FBQzlDLE1BQU01QixZQUFZLElBQUksQ0FBQzZDLHdCQUF3QixDQUFDakIsWUFDMUNyRixjQUFjLElBQUksQ0FBQ3VHLDBCQUEwQixDQUFDbEIsWUFDOUNVLHdCQUF5QnRDLGFBQWF6RCxhQUFlLEdBQUc7UUFFOUQsT0FBTytGO0lBQ1Q7SUFFQVMsc0NBQXNDbkIsU0FBUyxFQUFFO1FBQy9DLE1BQU1sSCxhQUFhLElBQUksQ0FBQzJILHlCQUF5QixDQUFDVCxZQUM1QzdHLGVBQWUsSUFBSSxDQUFDMEgsMkJBQTJCLENBQUNiLFlBQ2hEb0IseUJBQXlCO2VBQ3BCdEk7ZUFDQUs7U0FDSjtRQUVQLE9BQU9pSTtJQUNUO0lBRUFDLG1CQUFtQkMsUUFBUSxFQUFFO1FBQzNCLElBQUk3SSxRQUFRLElBQUksQ0FBQ3FDLFFBQVE7UUFFekIsTUFBTXlHLFdBQVdDLElBQUFBLHlCQUFtQjtRQUVwQy9JLFFBQVE7ZUFDSEE7WUFDSDhJO1NBQ0Q7UUFFRCxNQUFNakUsT0FBTzdFLE1BQU1tSCxJQUFJLENBQUMsQ0FBQ3RDO1lBQ3ZCLE1BQU1tRSx5QkFBeUJuRSxLQUFLb0UsZUFBZSxDQUFDSjtZQUVwRCxJQUFJRyx3QkFBd0I7Z0JBQzFCLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFTixPQUFPbkU7SUFDVDtJQUVBcUUsMEJBQTBCQyxlQUFlLEVBQUU7UUFDekMsSUFBSW5KLFFBQVEsSUFBSSxDQUFDcUMsUUFBUTtRQUV6QixNQUFNeUcsV0FBV0MsSUFBQUEseUJBQW1CO1FBRXBDL0ksUUFBUTtlQUNIQTtZQUNIOEk7U0FDRDtRQUVELE1BQU1qRSxPQUFPN0UsTUFBTW1ILElBQUksQ0FBQyxDQUFDdEM7WUFDdkIsTUFBTXVFLGdDQUFnQ3ZFLEtBQUt3RSxzQkFBc0IsQ0FBQ0Y7WUFFbEUsSUFBSUMsK0JBQStCO2dCQUNqQyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sT0FBT3ZFO0lBQ1Q7SUFFQXlFLDJCQUEyQkMsZ0JBQWdCLEVBQUU7UUFDM0MsSUFBSXZKLFFBQVEsSUFBSSxDQUFDcUMsUUFBUTtRQUV6QixNQUFNeUcsV0FBV0MsSUFBQUEseUJBQW1CO1FBRXBDL0ksUUFBUTtlQUNIQTtZQUNIOEk7U0FDRDtRQUVELE1BQU1qRSxPQUFPN0UsTUFBTW1ILElBQUksQ0FBQyxDQUFDdEM7WUFDdkIsTUFBTTJFLGlDQUFpQzNFLEtBQUs0RSx1QkFBdUIsQ0FBQ0Y7WUFFcEUsSUFBSUMsZ0NBQWdDO2dCQUNsQyxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRU4sT0FBTzNFO0lBQ1Q7SUFFQTZFLCtCQUErQkMsY0FBYyxFQUFFO1FBQzdDLE1BQU1uSixlQUFlLElBQUksQ0FBQ3VDLGVBQWUsSUFDbkNxRCxhQUFhNUYsYUFBYTJHLElBQUksQ0FBQyxDQUFDZjtZQUM5QixNQUFNd0QscUNBQXFDeEQsV0FBV3lELHFCQUFxQixDQUFDRjtZQUU1RSxJQUFJQyxvQ0FBb0M7Z0JBQ3RDLE9BQU87WUFDVDtRQUNGLE1BQU07UUFFWixPQUFPeEQ7SUFDVDtJQUVBMEQseUNBQXlDQyxtQkFBbUIsRUFBRTtRQUM1RCxNQUFNcEosb0JBQW9CLElBQUksQ0FBQ3VDLG9CQUFvQixJQUM3QzBELG1CQUFtQmpHLGtCQUFrQndHLElBQUksQ0FBQyxDQUFDUDtZQUN6QyxNQUFNb0QsZ0RBQWdEcEQsaUJBQWlCcUQseUJBQXlCLENBQUNGO1lBRWpHLElBQUlDLCtDQUErQztnQkFDakQsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVaLE9BQU9wRDtJQUNUO0lBRUFzRCwyQ0FBMkNDLGdCQUFnQixFQUFFO1FBQzNELE1BQU12Six3QkFBd0IsSUFBSSxDQUFDdUMsd0JBQXdCLElBQ3JENEQsdUJBQXVCbkcsc0JBQXNCdUcsSUFBSSxDQUFDLENBQUNKO1lBQ2pELE1BQU1xRCxpREFBaURyRCxxQkFBcUJzRCx1QkFBdUIsQ0FBQ0Y7WUFFcEcsSUFBSUMsZ0RBQWdEO2dCQUNsRCxPQUFPO1lBQ1Q7UUFDRixNQUFNO1FBRVosT0FBT3JEO0lBQ1Q7SUFFQXVELCtCQUErQkMsWUFBWSxFQUFFO1FBQzNDLE1BQU1DLGVBQWU7UUFFckIsT0FBT0E7SUFDVDtJQUVBQyxtQ0FBbUNqRCxnQkFBZ0IsRUFBRTtRQUNuRCxNQUFNZ0QsZUFBZTtRQUVyQixPQUFPQTtJQUNUO0lBRUFFLG1DQUFtQ0MsZ0JBQWdCLEVBQUU7UUFDbkQsTUFBTUgsZUFBZTtRQUVyQixPQUFPQTtJQUNUO0lBRUFJLGlEQUFpREMsdUJBQXVCLEVBQUU7UUFDeEUsTUFBTUMsc0JBQXNCO1FBRTVCLE9BQU9BO0lBQ1Q7SUFFQUMsNkJBQTZCQyxhQUFhLEVBQUU7UUFDMUMsTUFBTXJJLGFBQWEsSUFBSSxDQUFDRCxhQUFhLElBQy9CdUksWUFBWXRJLFdBQVd3RSxJQUFJLENBQUMsQ0FBQzhEO1lBQzNCLE1BQU1DLG1DQUFtQ0QsVUFBVUUsb0JBQW9CLENBQUNIO1lBRXhFLElBQUlFLGtDQUFrQztnQkFDcEMsT0FBTztZQUNUO1FBQ0YsTUFBTTtRQUVaLE9BQU9EO0lBQ1Q7SUFFQUcsMkJBQTJCQyxZQUFZLEVBQUU7UUFBRSxPQUFPRCxJQUFBQSxxQ0FBMEIsRUFBQ0M7SUFBZTtJQUU1RkMsc0JBQXNCcEUsWUFBWSxFQUFFMUgsT0FBTyxFQUFFO1FBQzNDMEgsZUFBZSxJQUFJLENBQUNELGdCQUFnQixDQUFDQyxjQUFjMUgsVUFBVyxHQUFHO1FBRWpFLE1BQU0rTCxzQkFBdUJyRSxpQkFBaUI7UUFFOUMsT0FBT3FFO0lBQ1Q7SUFFQUMsMEJBQTBCakUsU0FBUyxFQUFFL0gsVUFBVSxJQUFJLEVBQUU7UUFDbkQsTUFBTTZCLFNBQVMsSUFBSSxDQUFDRixTQUFTLElBQ3ZCc0ssZUFBZXBLLE9BQU9xSyxJQUFJLENBQUMsQ0FBQ0M7WUFDMUIsTUFBTUMsZUFBZXJFLFVBQVVzRSxVQUFVLENBQUNGLE9BQU9uTTtZQUVqRCxJQUFJb00sY0FBYztnQkFDaEIsT0FBTztZQUNUO1FBQ0Y7UUFFTixPQUFPSDtJQUNUO0lBRUFLLDBDQUEwQ3ZFLFNBQVMsRUFBRTtRQUNuRCxNQUFNVSx3QkFBd0IsSUFBSSxDQUFDTSxvQ0FBb0MsQ0FBQ2hCLFlBQ2xFd0UsK0JBQWdDOUQsMEJBQTBCO1FBRWhFLE9BQU84RDtJQUNUO0lBRUFDLDBCQUEwQkMsU0FBUyxFQUFFO1FBQ25DLE1BQU01SyxTQUFTLElBQUksQ0FBQ0YsU0FBUyxJQUN2QnNLLGVBQWVwSyxPQUFPcUssSUFBSSxDQUFDLENBQUNDO1lBQzFCLE1BQU1PLG1CQUFtQlAsTUFBTVEsY0FBYyxDQUFDRjtZQUU5QyxJQUFJQyxrQkFBa0I7Z0JBQ3BCLE9BQU87WUFDVDtRQUNGO1FBRU4sT0FBT1Q7SUFDVDtJQUVBVyx3QkFBd0J2RCxRQUFRLEVBQUV6SCxpQkFBaUIsSUFBSSxFQUFFO1FBQ3ZELE1BQU15RCxPQUFPLElBQUksQ0FBQytELGtCQUFrQixDQUFDQyxVQUFVekgsaUJBQ3pDaUwsY0FBZXhILFNBQVM7UUFFOUIsT0FBT3dIO0lBQ1Q7SUFFQUMsK0JBQStCbkQsZUFBZSxFQUFFO1FBQzlDLE1BQU10RSxPQUFPLElBQUksQ0FBQ3FFLHlCQUF5QixDQUFDQyxrQkFDdENrRCxjQUFleEgsU0FBUztRQUU5QixPQUFPd0g7SUFDVDtJQUVBRSxnQ0FBZ0NoRCxnQkFBZ0IsRUFBRTtRQUNoRCxNQUFNMUUsT0FBTyxJQUFJLENBQUN5RSwwQkFBMEIsQ0FBQ0MsbUJBQ3ZDOEMsY0FBZXhILFNBQVM7UUFFOUIsT0FBT3dIO0lBQ1Q7SUFFQUcsb0NBQW9DN0MsY0FBYyxFQUFFO1FBQ2xELE1BQU12RCxhQUFhLElBQUksQ0FBQ3NELDhCQUE4QixDQUFDQyxpQkFDakQ4QyxvQkFBcUJyRyxlQUFlO1FBRTFDLE9BQU9xRztJQUNUO0lBRUFDLDhDQUE4Q0Msa0JBQWtCLEVBQUU7UUFDaEUsTUFBTS9GLG1CQUFtQixJQUFJLENBQUNrRCx3Q0FBd0MsQ0FBQzZDLHFCQUNqRUMsMEJBQTJCaEcscUJBQXFCO1FBRXRELE9BQU9nRztJQUNUO0lBRUFDLGdEQUFnRDFDLGdCQUFnQixFQUFFO1FBQ2hFLE1BQU1wRCx1QkFBdUIsSUFBSSxDQUFDbUQsMENBQTBDLENBQUNDLG1CQUN2RTJDLDhCQUErQi9GLHlCQUF5QjtRQUU5RCxPQUFPK0Y7SUFDVDtJQUVBQyxrQ0FBa0MvQixhQUFhLEVBQUU7UUFDL0MsTUFBTUMsWUFBWSxJQUFJLENBQUNGLDRCQUE0QixDQUFDQyxnQkFDOUNnQyxtQkFBb0IvQixjQUFjO1FBRXhDLE9BQU8rQjtJQUNUO0lBRUFDLGNBQWM7UUFDWixNQUFNQyxZQUFZO1FBRWxCLE9BQU9BO0lBQ1Q7SUFFQUMsUUFBUTtRQUNOLElBQUksQ0FBQ25OLEtBQUssR0FBRyxFQUFFO1FBQ2YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtRQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7UUFDaEIsSUFBSSxDQUFDQyxNQUFNLEdBQUcsRUFBRTtRQUNoQixJQUFJLENBQUNDLFFBQVEsR0FBRyxFQUFFO1FBQ2xCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLEVBQUU7UUFDcEIsSUFBSSxDQUFDQyxXQUFXLEdBQUcsRUFBRTtRQUNyQixJQUFJLENBQUNDLFdBQVcsR0FBRyxFQUFFO1FBQ3JCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLEVBQUU7UUFDdEIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsRUFBRTtRQUN0QixJQUFJLENBQUNDLFlBQVksR0FBRyxFQUFFO1FBQ3RCLElBQUksQ0FBQ0MsaUJBQWlCLEdBQUcsRUFBRTtRQUMzQixJQUFJLENBQUNDLHFCQUFxQixHQUFHLEVBQUU7SUFDakM7SUFFQXdNLFdBQVc7SUFDVCxHQUFHO0lBQ0w7SUFFQSxNQUFNQyxhQUFhO1FBQ2pCLE1BQU16TixPQUFPLElBQUksQ0FBQzBOLE9BQU8sSUFDbkI5TixVQUFVLElBQUksRUFDZCtOLFdBQVczTixNQUNYNE4sZUFBZSxNQUFNSCxJQUFBQSxrQkFBVSxFQUFDRSxVQUFVL047UUFFaEQsT0FBT2dPO0lBQ1Q7SUFFQUMsYUFBYTtRQUNYLE1BQU01TixPQUFPLElBQUksQ0FBQzZOLE9BQU87UUFFekIsSUFBSTdOLFNBQVMsTUFBTTtZQUNqQixLQUFLLENBQUM0TjtZQUVOO1FBQ0Y7UUFFQSxNQUFNRSxjQUFjLElBQUksRUFBRSxHQUFHO1FBRTdCLElBQUksQ0FBQzNOLEtBQUssR0FBRyxFQUFFO1FBRWY0TixJQUFBQSxtQkFBYSxFQUFDL04sTUFBTSxJQUFJLENBQUNHLEtBQUssRUFBRTJOO1FBRWhDLElBQUksQ0FBQ3hOLE1BQU0sR0FBRyxFQUFFO1FBQ2hCLElBQUksQ0FBQ0UsVUFBVSxHQUFHLEVBQUU7UUFFcEIsSUFBSSxDQUFDTyxxQkFBcUIsR0FBR2lOLElBQUFBLG1DQUE2QixFQUFDaE8sTUFBTThOO1FBQ2pFLElBQUksQ0FBQ2hOLGlCQUFpQixHQUFHbU4sSUFBQUEsK0JBQXlCLEVBQUNqTyxNQUFNOE47UUFDekQsSUFBSSxDQUFDbk4sWUFBWSxHQUFHdU4sSUFBQUEsMEJBQW9CLEVBQUNsTyxNQUFNOE47UUFDL0MsSUFBSSxDQUFDcE4sV0FBVyxHQUFHeU4sSUFBQUEseUJBQW1CLEVBQUNuTyxNQUFNOE47UUFDN0MsSUFBSSxDQUFDbE4sWUFBWSxHQUFHd04sSUFBQUEsMEJBQW9CLEVBQUNwTyxNQUFNOE47UUFFL0MsSUFBSSxDQUFDMU4sS0FBSyxHQUFHaU8sSUFBQUEsbUJBQWEsRUFBQ3JPLE1BQU04TjtRQUNqQyxJQUFJLENBQUN6TixNQUFNLEdBQUdpTyxJQUFBQSxvQkFBYyxFQUFDdE8sTUFBTThOO1FBQ25DLElBQUksQ0FBQ3ZOLFFBQVEsR0FBR2dPLElBQUFBLHNCQUFnQixFQUFDdk8sTUFBTThOO1FBQ3ZDLElBQUksQ0FBQ3JOLFdBQVcsR0FBRytOLElBQUFBLHlCQUFtQixFQUFDeE8sTUFBTThOO1FBQzdDLElBQUksQ0FBQ2pOLFlBQVksR0FBRzROLElBQUFBLDBCQUFvQixFQUFDek8sTUFBTThOO0lBQ2pEO0lBRUFZLFNBQVM7UUFDUCxNQUFNQyxZQUFZQyxJQUFBQSxzQkFBZ0IsRUFBQyxJQUFJLENBQUN6TyxLQUFLLEdBQ3ZDME8sWUFBWUMsSUFBQUEsc0JBQWdCLEVBQUMsSUFBSSxDQUFDMU8sS0FBSyxHQUN2QzJPLGFBQWFDLElBQUFBLHdCQUFrQixFQUFDLElBQUksQ0FBQzNPLE1BQU0sR0FDM0M0TyxlQUFlQyxJQUFBQSw0QkFBc0IsRUFBQyxJQUFJLENBQUMzTyxRQUFRLEdBQ25ENE8sa0JBQWtCQyxJQUFBQSxrQ0FBNEIsRUFBQyxJQUFJLENBQUMzTyxXQUFXLEdBQy9ENE8sa0JBQWtCQyxJQUFBQSxrQ0FBNEIsRUFBQyxJQUFJLENBQUM1TyxXQUFXLEdBQy9ENk8sbUJBQW1CQyxJQUFBQSxvQ0FBOEIsRUFBQyxJQUFJLENBQUM3TyxZQUFZLEdBQ25FOE8sbUJBQW1CQyxJQUFBQSxvQ0FBOEIsRUFBQyxJQUFJLENBQUM5TyxZQUFZLEdBQ25FK08sbUJBQW1CQyxJQUFBQSxvQ0FBOEIsRUFBQyxJQUFJLENBQUMvTyxZQUFZLEdBQ25FZ1Asd0JBQXdCQyxJQUFBQSw4Q0FBd0MsRUFBQyxJQUFJLENBQUNoUCxpQkFBaUIsR0FDdkZpUCw0QkFBNEJDLElBQUFBLHNEQUFnRCxFQUFDLElBQUksQ0FBQ2pQLHFCQUFxQixHQUN2R25CLGNBQWMsSUFBSSxDQUFDQSxXQUFXLEVBQzlCQyxXQUFXLElBQUksQ0FBQ0EsUUFBUSxFQUN4Qk0sUUFBUXdPLFdBQ1J2TyxRQUFReU8sV0FDUnhPLFNBQVMwTyxZQUNUeE8sV0FBVzBPLGNBQ1h4TyxjQUFjME8saUJBQ2R6TyxjQUFjMk8saUJBQ2QxTyxlQUFlNE8sa0JBQ2YzTyxlQUFlNk8sa0JBQ2Y1TyxlQUFlOE8sa0JBQ2Y3TyxvQkFBb0IrTyx1QkFDcEI5Tyx3QkFBd0JnUCwyQkFDeEIvUCxPQUFPO1lBQ0xKO1lBQ0FDO1lBQ0FNO1lBQ0FDO1lBQ0FDO1lBQ0FFO1lBQ0FFO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1FBQ0Y7UUFFTixPQUFPZjtJQUNUO0lBRUEsT0FBT2lRLFNBQVNDLElBQUksRUFBRXZRLE9BQU8sRUFBRTtRQUM3QixNQUFNd1EsaUJBQWlCeFEsU0FDakJ5USx3QkFBd0JELGVBQWVFLHdCQUF3QixJQUMvREMsZUFBZWhSLHNDQUFzQ2lSLGNBQVksRUFBRUgsd0JBQ25FSSxnQkFBZ0JoUix1Q0FBdUNpUixlQUFhLEVBQUVMLHdCQUN0RW5RLFFBQVFxUSxjQUNScFEsU0FBU3NRLGVBQ1RyUSxRQUFRLEVBQUUsRUFDVkMsUUFBUSxFQUFFLEVBQ1ZDLFNBQVMsRUFBRSxFQUNYQyxTQUFTLEVBQUUsRUFDWEMsV0FBVyxFQUFFLEVBQ2JDLGFBQWEsRUFBRSxFQUNmQyxjQUFjLEVBQUUsRUFDaEJDLGNBQWMsRUFBRSxFQUNoQkMsZUFBZSxFQUFFLEVBQ2pCQyxlQUFlLEVBQUUsRUFDakJDLGVBQWUsRUFBRSxFQUNqQkMsb0JBQW9CLEVBQUUsRUFDdEJDLHdCQUF3QixFQUFFLEVBQzFCMlAscUJBQXFCaFIsMkJBQVcsQ0FBQ3VRLFFBQVEsQ0FBQy9RLG9CQUFvQmdSLE1BQU1qUSxPQUFPQyxRQUFRQyxPQUFPQyxPQUFPQyxRQUFRQyxRQUFRQyxVQUFVQyxZQUFZQyxhQUFhQyxhQUFhQyxjQUFjQyxjQUFjQyxjQUFjQyxtQkFBbUJDLHVCQUF1QnBCO1FBRTNQLE9BQU8rUTtJQUNUO0lBRUEsT0FBT0MsU0FBUzNRLElBQUksRUFBRUwsT0FBTyxFQUFFO1FBQzdCLE1BQU13USxpQkFBaUJ4USxTQUNqQnlRLHdCQUF3QkQsZUFBZUUsd0JBQXdCLElBQy9EQyxlQUFlaFIsc0NBQXNDaVIsY0FBWSxFQUFFSCx3QkFDbkVJLGdCQUFnQmhSLHVDQUF1Q2lSLGVBQWEsRUFBRUwsd0JBQ3RFblEsUUFBUXFRLGNBQ1JwUSxTQUFTc1EsZUFDVHJRLFFBQVEsTUFDUkMsUUFBUSxNQUNSQyxTQUFTLE1BQ1RDLFNBQVMsTUFDVEMsV0FBVyxNQUNYQyxhQUFhLE1BQ2JDLGNBQWMsTUFDZEMsY0FBYyxNQUNkQyxlQUFlLE1BQ2ZDLGVBQWUsTUFDZkMsZUFBZSxNQUNmQyxvQkFBb0IsTUFDcEJDLHdCQUF3QixNQUN4QjJQLHFCQUFxQmhSLDJCQUFXLENBQUNpUixRQUFRLENBQUN6UixvQkFBb0JjLE1BQU1DLE9BQU9DLFFBQVFDLE9BQU9DLE9BQU9DLFFBQVFDLFFBQVFDLFVBQVVDLFlBQVlDLGFBQWFDLGFBQWFDLGNBQWNDLGNBQWNDLGNBQWNDLG1CQUFtQkMsdUJBQXVCcEI7UUFFM1AsT0FBTytRO0lBQ1Q7QUFDRiJ9