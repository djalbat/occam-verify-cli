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
    isLabelPresentByReference(reference) {
        const labels = this.getLabels(), labelPresent = labels.some((label)=>{
            const labelUnifies = reference.unifyLabel(label);
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
        this.lemmas = (0, _json.lemmasFromJSON)(json, fileContext);
        this.metaLemmas = (0, _json.metaLemmasFromJSON)(json, fileContext);
        this.declaredMetavariables = (0, _json.declaredMetavariablesFromJSON)(json, fileContext);
        this.declaredVariables = (0, _json.declaredVariablesFromJSON)(json, fileContext);
        this.typePrefixes = (0, _json.typePrefixesFromJSON)(json, fileContext);
        this.combinators = (0, _json.combinatorsFromJSON)(json, fileContext);
        this.constructors = (0, _json.constructorsFromJSON)(json, fileContext);
        this.rules = (0, _json.rulesFromJSON)(json, fileContext);
        this.axioms = (0, _json.axiomsFromJSON)(json, fileContext);
        this.theorems = (0, _json.theoremsFromJSON)(json, fileContext);
        this.conjectures = [
            (0, _json.conjecturesFromJSON)(json, fileContext)
        ];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ub21pbmFsXCI7XG5cbmltcG9ydCBOb21pbmFsTGV4ZXIgZnJvbSBcIi4uLy4uL25vbWluYWwvbGV4ZXJcIjtcbmltcG9ydCBOb21pbmFsUGFyc2VyIGZyb20gXCIuLi8uLi9ub21pbmFsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlGaWxlIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSB9IGZyb20gXCIuLi8uLi9tZXRhVHlwZXNcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICBsZW1tYXNGcm9tSlNPTixcbiAgICAgICAgIHR5cGVzVG9UeXBlc0pTT04sXG4gICAgICAgICB0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgcnVsZXNUb1J1bGVzSlNPTixcbiAgICAgICAgIGF4aW9tc1RvQXhpb21zSlNPTixcbiAgICAgICAgIG1ldGFMZW1tYXNGcm9tSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzRnJvbUpTT04sXG4gICAgICAgICBjb21iaW5hdG9yc0Zyb21KU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzRnJvbUpTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNGcm9tSlNPTixcbiAgICAgICAgIG1ldGF0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgdGhlb3JlbXNUb1RoZW9yZW1zSlNPTixcbiAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OLFxuICAgICAgICAgY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTixcbiAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc0Zyb21KU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OLFxuICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZXNUb0RlY2xhcmVkVmFyaWFibGVzSlNPTixcbiAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc1RvRGVjbGFyZWRNZXRhdmFyaWFibGVzSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2gsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vbWluYWxGaWxlQ29udGV4dCBleHRlbmRzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGpzb24sIGxleGVyLCBwYXJzZXIsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIGRlY2xhcmVkVmFyaWFibGVzLCBkZWNsYXJlZE1ldGF2YXJpYWJsZXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwganNvbik7XG5cbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gICAgdGhpcy5kZWNsYXJlZFZhcmlhYmxlcyA9IGRlY2xhcmVkVmFyaWFibGVzO1xuICAgIHRoaXMuZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gZGVjbGFyZWRNZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IFtdO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IFtdO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5jb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxlbW1hcy5mb3JFYWNoKChsZW1tYSkgPT4ge1xuICAgICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCB0aGVvcmVtTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZUxhYmVscyA9IGNvbmplY3R1cmUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubWV0YXRoZW9yZW1zLmZvckVhY2goKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtTGFiZWwgPSBtZXRhdGhlb3JlbS5nZXRMYWJlbCgpO1xuXG4gICAgICAgIGxhYmVscy5wdXNoKG1ldGF0aGVvcmVtTGFiZWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VHlwZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlcztcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0UnVsZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWxlcztcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9tcztcblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldExlbW1hcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW1tYXM7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRUaGVvcmVtcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW9yZW1zO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRQcm9jZWR1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldE1ldGFMZW1tYXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFMZW1tYXM7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25qZWN0dXJlcztcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21iaW5hdG9ycztcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVQcmVmaXhlcztcblxuICAgIHJldHVybiB0eXBlUHJlZml4ZXM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcnM7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRNZXRhdGhlb3JlbXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YXRoZW9yZW1zO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGdldERlY2xhcmVkVmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmVkVmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmVkTWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIGNvbnN0IHRlcm1zID0gW107XG5cbiAgICByZXR1cm4gdGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgY29uc3QgZnJhbWVzID0gW107XG5cbiAgICByZXR1cm4gZnJhbWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICBjb25zdCBlcXVhbGl0aWVzID0gW107XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IFtdO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGFzc2VydGlvbnMgPSBbXTtcblxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRzID0gW107XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7XG4gICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBsZW1tYVN0cmluZyA9IGxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2xlbW1hU3RyaW5nfScgbGVtbWEgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHtcbiAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICB0aGVvcmVtU3RyaW5nID0gdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt0aGVvcmVtU3RyaW5nfScgdGhlb3JlbSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZE1ldGFMZW1tYShtZXRhTGVtbWEpIHtcbiAgICB0aGlzLm1ldGFMZW1tYXMucHVzaChtZXRhTGVtbWEpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbWV0YUxlbW1hU3RyaW5nID0gbWV0YUxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGEtbGVtbWEgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBvY25qZWN0dXJlU3RyaW5nID0gb2NuamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHtvY25qZWN0dXJlU3RyaW5nfScgb2NuamVjdHVyZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSBjb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkVHlwZVByZWZpeCh0eXBlUHJlZml4KSB7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMucHVzaCh0eXBlUHJlZml4KTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhTdHJpbmcgPSB0eXBlUHJlZml4LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlLXByZWZpeCB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRNZXRhdGhlb3JlbShtZXRhdGhlb3JlbSkge1xuICAgIHRoaXMubWV0YXRoZW9yZW1zLnB1c2gobWV0YXRoZW9yZW0pO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHttZXRhdGhlb3JlbVN0cmluZ30nIG1ldGF0aGVvcmVtIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkRGVjbGFyZWRWYXJpYWJsZShkZWNsYXJlZFZhcmlhYmxlKSB7XG4gICAgdGhpcy5kZWNsYXJlZFZhcmlhYmxlcy5wdXNoKGRlY2xhcmVkVmFyaWFibGUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZVN0cmluZyA9IGRlY2xhcmVkVmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7ZGVjbGFyZWRWYXJpYWJsZVN0cmluZ30nIGRlY2xhcmVkIHZhcmlhYmxlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUoZGVjbGFyZWRNZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLmRlY2xhcmVkTWV0YXZhcmlhYmxlcy5wdXNoKGRlY2xhcmVkTWV0YXZhcmlhYmxlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlU3RyaW5nID0gZGVjbGFyZWRNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7ZGVjbGFyZWRNZXRhdmFyaWFibGVTdHJpbmd9JyBkZWNsYXJlZCBtZXRhdmFyaWFibGUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZXMuZmluZCgoZGVjbGFyZWRNZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZS51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gcnVsZS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGF4aW9tLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsZW1tYXMgPSB0aGlzLmdldExlbW1hcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIGxlbW1hID0gbGVtbWFzLmZpbmQoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGxlbW1hLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gdGhpcy5nZXRUaGVvcmVtcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtcy5maW5kKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoZW9yZW0ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBjb25qZWN0dXJlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgZmlsdGVyKG1ldGFMZW1tYXMsIChtZXRhTGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG1ldGFMZW1tYSwgLy8vXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyA9IHJlZmVyZW5jZS5jb21wYXJlVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbik7XG5cbiAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCk7XG5cbiAgICBmaWx0ZXIobWV0YXRoZW9yZW1zLCAobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG1ldGF0aGVvcmVtLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gcmVmZXJlbmNlLmNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tID0gdGhpcy5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGxlbW1hID0gdGhpcy5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGlzLmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gdGhpcy5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzLmZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gdGhpcy5maW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gdGhpcy5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gW1xuICAgICAgICAgICAgLi4ubWV0YUxlbW1hcyxcbiAgICAgICAgICAgIC4uLm1ldGF0aGVvcmVtc1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSB0eXBlLmNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhlcy5maW5kKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeC5jb21wYXJlVHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZVByZWZpeENvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKFZhcmlhYmxlSWRlbnRpdGlmZXIpIHtcbiAgICBjb25zdCBkZWNsYXJlZFZhcmlhYmxlcyA9IHRoaXMuZ2V0RGVjbGFyZWRWYXJpYWJsZXMoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlID0gZGVjbGFyZWRWYXJpYWJsZXMuZmluZCgoZGVjbGFyZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyZWRWYXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aXRpZmVyID0gZGVjbGFyZWRWYXJpYWJsZS5jb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKFZhcmlhYmxlSWRlbnRpdGlmZXIpO1xuXG4gICAgICAgICAgICBpZiAoZGVjbGFyZWRWYXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aXRpZmVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRWYXJpYWJsZTtcbiAgfVxuXG4gIGZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gdGhpcy5nZXREZWNsYXJlZE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlcy5maW5kKChkZWNsYXJlZE1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZGVjbGFyZWRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKG1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YUxldmVsQXNzdW1wdGlvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YUxldmVsQXNzdW1wdGlvbjtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSB0aGlzLmdldFByb2NlZHVyZXMoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBwcm9jZWR1cmVzLmZpbmQoKHByb2NlZHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUgPSBwcm9jZWR1cmUuY29tcGFyZVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkgeyByZXR1cm4gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gbGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbFVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlMYWJlbChsYWJlbCk7XG5cbiAgICAgICAgICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdGhpcy5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50ID0gKHRvcExldmVsTWV0YUFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaExhYmVsTm9kZShsYWJlbE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobGFiZWxOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXggPSB0aGlzLmZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSksXG4gICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSAodHlwZVByZWZpeCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeFByZXNlbnQ7XG4gIH1cblxuICBpc0RlY2xhcmVkVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgZGVjbGFyZWRWYXJpYWJsZSA9IHRoaXMuZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVQcmVzZW50ID0gKGRlY2xhcmVkVmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gdGhpcy5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50ID0gKGRlY2xhcmVkTWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBkZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZSA9IHRoaXMuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gKHByb2NlZHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YUxldmVsKCkge1xuICAgIGNvbnN0IG1ldGFMRXZlbCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1ldGFMRXZlbDtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudHlwZXMgPSBbXTtcbiAgICB0aGlzLnJ1bGVzID0gW107XG4gICAgdGhpcy5heGlvbXMgPSBbXTtcbiAgICB0aGlzLmxlbW1hcyA9IFtdO1xuICAgIHRoaXMudGhlb3JlbXMgPSBbXTtcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBbXTtcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gW107XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IFtdO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gW107XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMuZGVjbGFyZWRWYXJpYWJsZXMgPSBbXTtcbiAgICB0aGlzLmRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IFtdO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgLy8vXG4gIH1cblxuICBhc3luYyB2ZXJpZnlGaWxlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZmlsZU5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgZmlsZVZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZmlsZVZlcmlmaWVzO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICBjb25zdCBqc29uID0gdGhpcy5nZXRKU09OKCk7XG5cbiAgICBpZiAoanNvbiA9PT0gbnVsbCkge1xuICAgICAgc3VwZXIuaW5pdGlhbGlzZSgpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudHlwZXMgPSBbXTtcblxuICAgIHR5cGVzRnJvbUpTT04oanNvbiwgdGhpcy50eXBlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMuZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gZGVjbGFyZWRNZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMuZGVjbGFyZWRWYXJpYWJsZXMgPSBkZWNsYXJlZFZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLnR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnJ1bGVzID0gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBbY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCldO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzVG9UeXBlc0pTT04odGhpcy50eXBlcyksXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXNUb1J1bGVzSlNPTih0aGlzLnJ1bGVzKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zVG9BeGlvbXNKU09OKHRoaXMuYXhpb21zKSxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoaXMudGhlb3JlbXMpLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04odGhpcy5jb25qZWN0dXJlcyksXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTih0aGlzLmNvbWJpbmF0b3JzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHRoaXMudHlwZVByZWZpeGVzKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKHRoaXMuY29uc3RydWN0b3JzKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKHRoaXMubWV0YXRoZW9yZW1zKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlc0pTT04gPSBkZWNsYXJlZFZhcmlhYmxlc1RvRGVjbGFyZWRWYXJpYWJsZXNKU09OKHRoaXMuZGVjbGFyZWRWYXJpYWJsZXMpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04gPSBkZWNsYXJlZE1ldGF2YXJpYWJsZXNUb0RlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04odGhpcy5kZWNsYXJlZE1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIGZpbGVDb250ZW50ID0gdGhpcy5maWxlQ29udGVudCxcbiAgICAgICAgICBmaWxlUGF0aCA9IHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgdHlwZXMgPSB0eXBlc0pTT04sICAvLy9cbiAgICAgICAgICBydWxlcyA9IHJ1bGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGF4aW9tcyA9IGF4aW9tc0pTT04sICAvLy9cbiAgICAgICAgICB0aGVvcmVtcyA9IHRoZW9yZW1zSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IGRlY2xhcmVkVmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZUNvbnRlbnQsXG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICB0eXBlUHJlZml4ZXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyxcbiAgICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIoKSxcbiAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxMZXhlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbFBhcnNlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBsZXhlciA9IG5vbWluYWxMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbm9taW5hbFBhcnNlciwgLy8vXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG5vbWluYWxGaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKE5vbWluYWxGaWxlQ29udGV4dCwgZmlsZSwgbGV4ZXIsIHBhcnNlciwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgZGVjbGFyZWRWYXJpYWJsZXMsIGRlY2xhcmVkTWV0YXZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbm9taW5hbEZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpLFxuICAgICAgICAgIG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbExleGVyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsUGFyc2VyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgbGVtbWFzID0gbnVsbCxcbiAgICAgICAgICB0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IG51bGwsXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBudWxsLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gbnVsbCxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBudWxsLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG51bGwsXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbnVsbCxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBub21pbmFsRmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tSlNPTihOb21pbmFsRmlsZUNvbnRleHQsIGpzb24sIGxleGVyLCBwYXJzZXIsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIGRlY2xhcmVkVmFyaWFibGVzLCBkZWNsYXJlZE1ldGF2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxGaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vbWluYWxGaWxlQ29udGV4dCIsInB1c2giLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJGaWxlQ29udGV4dCIsImNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImpzb24iLCJsZXhlciIsInBhcnNlciIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJsZW1tYXMiLCJ0aGVvcmVtcyIsIm1ldGFMZW1tYXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwidHlwZVByZWZpeGVzIiwiY29uc3RydWN0b3JzIiwibWV0YXRoZW9yZW1zIiwiZGVjbGFyZWRWYXJpYWJsZXMiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZXMiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJsZW1tYSIsImxlbW1hTGFiZWxzIiwidGhlb3JlbSIsInRoZW9yZW1MYWJlbHMiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUxhYmVscyIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1MYWJlbCIsImdldExhYmVsIiwiZ2V0VHlwZXMiLCJnZXRSdWxlcyIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsImdldERlY2xhcmVkVmFyaWFibGVzIiwiZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzIiwiZ2V0VGVybXMiLCJ0ZXJtcyIsImdldEZyYW1lcyIsImZyYW1lcyIsImdldEVxdWFsaXRpZXMiLCJlcXVhbGl0aWVzIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRBc3NlcnRpb25zIiwiYXNzZXJ0aW9ucyIsImdldFN0YXRlbWVudHMiLCJzdGF0ZW1lbnRzIiwiZ2V0UmVmZXJlbmNlcyIsInJlZmVyZW5jZXMiLCJnZXRBc3N1bXB0aW9ucyIsImFzc3VtcHRpb25zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRTdWJzdGl0dXRpb25zIiwic3Vic3RpdHV0aW9ucyIsImFkZFR5cGUiLCJ0eXBlIiwiZ2V0RmlsZVBhdGgiLCJ0eXBlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhZGRSdWxlIiwicnVsZVN0cmluZyIsImFkZEF4aW9tIiwiYXhpb21TdHJpbmciLCJhZGRMZW1tYSIsImxlbW1hU3RyaW5nIiwiYWRkVGhlb3JlbSIsInRoZW9yZW1TdHJpbmciLCJhZGRNZXRhTGVtbWEiLCJtZXRhTGVtbWEiLCJtZXRhTGVtbWFTdHJpbmciLCJhZGRDb25qZWN0dXJlIiwib2NuamVjdHVyZVN0cmluZyIsIm9jbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJhZGRUeXBlUHJlZml4IiwidHlwZVByZWZpeCIsInR5cGVQcmVmaXhTdHJpbmciLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JTdHJpbmciLCJhZGRNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtU3RyaW5nIiwiYWRkRGVjbGFyZWRWYXJpYWJsZSIsImRlY2xhcmVkVmFyaWFibGUiLCJkZWNsYXJlZFZhcmlhYmxlU3RyaW5nIiwiYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlU3RyaW5nIiwiZmluZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImZpbmQiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlNZXRhdmFyaWFibGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTm9kZSIsImdldE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb24iLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyIsImNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24iLCJmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUiLCJjb21wYXJlUHJlZml4ZWRUeXBlTmFtZSIsImZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeENvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSIsImNvbXBhcmVUeXBlUHJlZml4TmFtZSIsImZpbmREZWNsYXJlZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJWYXJpYWJsZUlkZW50aXRpZmVyIiwiZGVjbGFyZWRWYXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aXRpZmVyIiwiY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllciIsImZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YUxldmVsQXNzdW1wdGlvbkJ5TWV0YUxldmVsQXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uTm9kZSIsIm1ldGFMZXZlbEFzc3VtcHRpb24iLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZSIsInByb2NlZHVyZUNvbXBhcmVzVG9Qcm9jZWR1cmVOYW1lIiwiY29tcGFyZVByb2NlZHVyZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwibGFiZWxQcmVzZW50Iiwic29tZSIsImxhYmVsIiwibGFiZWxVbmlmaWVzIiwidW5pZnlMYWJlbCIsImlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJsYWJlbE5vZGVNYXRjaGVzIiwibWF0Y2hMYWJlbE5vZGUiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeFByZXNlbnQiLCJpc0RlY2xhcmVkVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJkZWNsYXJlZFZhcmlhYmxlUHJlc2VudCIsImlzRGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiZGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50IiwiaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImlzTWV0YUxldmVsIiwibWV0YUxFdmVsIiwiY2xlYXIiLCJjb21wbGV0ZSIsInZlcmlmeUZpbGUiLCJnZXROb2RlIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJpbml0aWFsaXNlIiwiZ2V0SlNPTiIsImZpbGVDb250ZXh0IiwidHlwZXNGcm9tSlNPTiIsImxlbW1hc0Zyb21KU09OIiwibWV0YUxlbW1hc0Zyb21KU09OIiwiZGVjbGFyZWRNZXRhdmFyaWFibGVzRnJvbUpTT04iLCJkZWNsYXJlZFZhcmlhYmxlc0Zyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwiYXhpb21zRnJvbUpTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwidG9KU09OIiwidHlwZXNKU09OIiwidHlwZXNUb1R5cGVzSlNPTiIsInJ1bGVzSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJheGlvbXNKU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsImNvbmplY3R1cmVzSlNPTiIsImNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04iLCJjb21iaW5hdG9yc0pTT04iLCJjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OIiwidHlwZVByZWZpeGVzSlNPTiIsInR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTiIsImNvbnN0cnVjdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04iLCJtZXRhdGhlb3JlbXNKU09OIiwibWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OIiwiZGVjbGFyZWRWYXJpYWJsZXNKU09OIiwiZGVjbGFyZWRWYXJpYWJsZXNUb0RlY2xhcmVkVmFyaWFibGVzSlNPTiIsImRlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04iLCJkZWNsYXJlZE1ldGF2YXJpYWJsZXNUb0RlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04iLCJmcm9tRmlsZSIsImZpbGUiLCJyZWxlYXNlQ29udGV4dCIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImdldENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm5vbWluYWxMZXhlciIsIk5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJOb21pbmFsUGFyc2VyIiwibm9taW5hbEZpbGVDb250ZXh0IiwiZnJvbUpTT04iXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXlDQTs7O2VBQXFCQTs7O2dDQXZDTzsyQkFDRzs4QkFDbUI7OERBRXpCOytEQUNDO3dCQUVDO3NCQUNTOzJCQUNPO3NCQXdCc0I7Ozs7OztBQUVqRSxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFLEdBQUdDLHlCQUFjLEVBQ2pDLEVBQUVDLHFDQUFxQyxFQUFFLEdBQUdDLDZCQUFlLEVBQzNELEVBQUVDLHNDQUFzQyxFQUFFLEdBQUdDLDhCQUFnQjtBQUVwRCxNQUFNUCwyQkFBMkJRLDJCQUFXO0lBQ3pELFlBQVlDLE9BQU8sRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVD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