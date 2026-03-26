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
    constructor(context, fileContent, filePath, tokens, node, lexer, parser, types, rules, axioms, lemmas, theorems, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, declaredVariables, declaredMetavariables){
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
    initialise(json) {
        const fileContext = this; ///
        this.types = [];
        (0, _json.typesFromJSON)(json, this.types, fileContext);
        this.lemmas = (0, _json.lemmasFromNothing)();
        this.metaLemmas = (0, _json.metaLemmasFromNothing)();
        this.declaredMetavariables = (0, _json.declaredMetavariablesFromJSON)(json, fileContext);
        this.declaredVariables = (0, _json.declaredVariablesFromJSON)(json, fileContext);
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
        const typesJSON = (0, _json.typesToTypesJSON)(this.types), rulesJSON = (0, _json.rulesToRulesJSON)(this.rules), axiomsJSON = (0, _json.axiomsToAxiomsJSON)(this.axioms), theoremsJSON = (0, _json.theoremsToTheoremsJSON)(this.theorems), conjecturesJSON = (0, _json.conjecturesToConjecturesJSON)(this.conjectures), combinatorsJSON = (0, _json.combinatorsToCombinatorsJSON)(this.combinators), typePrefixesJSON = (0, _json.typePrefixesToTypePrefixesJSON)(this.typePrefixes), constructorsJSON = (0, _json.constructorsToConstructorsJSON)(this.constructors), metatheoremsJSON = (0, _json.metatheoremsToMetatheoremsJSON)(this.metatheorems), declaredVariablesJSON = (0, _json.declaredVariablesToDeclaredVariablesJSON)(this.declaredVariables), declaredMetavariablesJSON = (0, _json.declaredMetavariablesToDeclaredMetavariablesJSON)(this.declaredMetavariables), filePath = this.filePath, types = typesJSON, rules = rulesJSON, axioms = axiomsJSON, theorems = theoremsJSON, conjectures = conjecturesJSON, combinators = combinatorsJSON, typePrefixes = typePrefixesJSON, constructors = constructorsJSON, metatheorems = metatheoremsJSON, declaredVariables = declaredVariablesJSON, declaredMetavariables = declaredMetavariablesJSON, json = {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ub21pbmFsXCI7XG5cbmltcG9ydCBOb21pbmFsTGV4ZXIgZnJvbSBcIi4uLy4uL25vbWluYWwvbGV4ZXJcIjtcbmltcG9ydCBOb21pbmFsUGFyc2VyIGZyb20gXCIuLi8uLi9ub21pbmFsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlGaWxlIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSB9IGZyb20gXCIuLi8uLi9tZXRhVHlwZXNcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0eXBlc1RvVHlwZXNKU09OLFxuICAgICAgICAgcnVsZXNUb1J1bGVzSlNPTixcbiAgICAgICAgIHRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICBsZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIGF4aW9tc1RvQXhpb21zSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzRnJvbUpTT04sXG4gICAgICAgICBjb21iaW5hdG9yc0Zyb21KU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzRnJvbUpTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNGcm9tSlNPTixcbiAgICAgICAgIG1ldGF0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgbWV0YUxlbW1hc0Zyb21Ob3RoaW5nLFxuICAgICAgICAgdGhlb3JlbXNUb1RoZW9yZW1zSlNPTixcbiAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OLFxuICAgICAgICAgY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTixcbiAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc0Zyb21KU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OLFxuICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZXNUb0RlY2xhcmVkVmFyaWFibGVzSlNPTixcbiAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc1RvRGVjbGFyZWRNZXRhdmFyaWFibGVzSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2gsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vbWluYWxGaWxlQ29udGV4dCBleHRlbmRzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGxleGVyLCBwYXJzZXIsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIGRlY2xhcmVkVmFyaWFibGVzLCBkZWNsYXJlZE1ldGF2YXJpYWJsZXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBmaWxlQ29udGVudCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSk7XG5cbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gICAgdGhpcy5kZWNsYXJlZFZhcmlhYmxlcyA9IGRlY2xhcmVkVmFyaWFibGVzO1xuICAgIHRoaXMuZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gZGVjbGFyZWRNZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMubGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyc2VyO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IFtdO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IFtdO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5jb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxlbW1hcy5mb3JFYWNoKChsZW1tYSkgPT4ge1xuICAgICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCB0aGVvcmVtTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZUxhYmVscyA9IGNvbmplY3R1cmUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubWV0YXRoZW9yZW1zLmZvckVhY2goKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtTGFiZWwgPSBtZXRhdGhlb3JlbS5nZXRMYWJlbCgpO1xuXG4gICAgICAgIGxhYmVscy5wdXNoKG1ldGF0aGVvcmVtTGFiZWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VHlwZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlcztcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0UnVsZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWxlcztcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9tcztcblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldExlbW1hcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW1tYXM7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRUaGVvcmVtcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW9yZW1zO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRQcm9jZWR1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldE1ldGFMZW1tYXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFMZW1tYXM7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25qZWN0dXJlcztcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21iaW5hdG9ycztcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVQcmVmaXhlcztcblxuICAgIHJldHVybiB0eXBlUHJlZml4ZXM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcnM7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRNZXRhdGhlb3JlbXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YXRoZW9yZW1zO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGdldERlY2xhcmVkVmFyaWFibGVzKCkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmVkVmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLmRlY2xhcmVkTWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFRlcm1zKCkge1xuICAgIGNvbnN0IHRlcm1zID0gW107XG5cbiAgICByZXR1cm4gdGVybXM7XG4gIH1cblxuICBnZXRGcmFtZXMoKSB7XG4gICAgY29uc3QgZnJhbWVzID0gW107XG5cbiAgICByZXR1cm4gZnJhbWVzO1xuICB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICBjb25zdCBlcXVhbGl0aWVzID0gW107XG5cbiAgICByZXR1cm4gZXF1YWxpdGllcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IFtdO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IGFzc2VydGlvbnMgPSBbXTtcblxuICAgIHJldHVybiBhc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50cygpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRzID0gW107XG5cbiAgICByZXR1cm4gc3RhdGVtZW50cztcbiAgfVxuXG4gIGdldFJlZmVyZW5jZXMoKSB7XG4gICAgY29uc3QgcmVmZXJlbmNlcyA9IFtdO1xuXG4gICAgcmV0dXJuIHJlZmVyZW5jZXM7XG4gIH1cblxuICBnZXRBc3N1bXB0aW9ucygpIHtcbiAgICBjb25zdCBhc3N1bXB0aW9ucyA9IFtdO1xuXG4gICAgcmV0dXJuIGFzc3VtcHRpb25zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcygpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gW107XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdO1xuXG4gICAgcmV0dXJuIHN1YnN0aXR1dGlvbnM7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICB0eXBlU3RyaW5nID0gdHlwZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHJ1bGVTdHJpbmcgPSBydWxlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkQXhpb20oYXhpb20pIHtcbiAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGF4aW9tU3RyaW5nID0gYXhpb20uZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7YXhpb21TdHJpbmd9JyBheGlvbSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZExlbW1hKGxlbW1hKSB7XG4gICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBsZW1tYVN0cmluZyA9IGxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2xlbW1hU3RyaW5nfScgbGVtbWEgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHtcbiAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICB0aGVvcmVtU3RyaW5nID0gdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt0aGVvcmVtU3RyaW5nfScgdGhlb3JlbSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZE1ldGFMZW1tYShtZXRhTGVtbWEpIHtcbiAgICB0aGlzLm1ldGFMZW1tYXMucHVzaChtZXRhTGVtbWEpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbWV0YUxlbW1hU3RyaW5nID0gbWV0YUxlbW1hLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke21ldGFMZW1tYVN0cmluZ30nIG1ldGEtbGVtbWEgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBvY25qZWN0dXJlU3RyaW5nID0gb2NuamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHtvY25qZWN0dXJlU3RyaW5nfScgb2NuamVjdHVyZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSBjb21iaW5hdG9yLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2NvbWJpbmF0b3JTdHJpbmd9JyBjb21iaW5hdG9yIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkVHlwZVByZWZpeCh0eXBlUHJlZml4KSB7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMucHVzaCh0eXBlUHJlZml4KTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHR5cGVQcmVmaXhTdHJpbmcgPSB0eXBlUHJlZml4LmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke3R5cGVQcmVmaXhTdHJpbmd9JyB0eXBlLXByZWZpeCB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZENvbnN0cnVjdG9yKGNvbnN0cnVjdG9yKSB7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvclN0cmluZyA9IGNvbnN0cnVjdG9yLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRNZXRhdGhlb3JlbShtZXRhdGhlb3JlbSkge1xuICAgIHRoaXMubWV0YXRoZW9yZW1zLnB1c2gobWV0YXRoZW9yZW0pO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhdGhlb3JlbS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHttZXRhdGhlb3JlbVN0cmluZ30nIG1ldGF0aGVvcmVtIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkRGVjbGFyZWRWYXJpYWJsZShkZWNsYXJlZFZhcmlhYmxlKSB7XG4gICAgdGhpcy5kZWNsYXJlZFZhcmlhYmxlcy5wdXNoKGRlY2xhcmVkVmFyaWFibGUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgZGVjbGFyZWRWYXJpYWJsZVN0cmluZyA9IGRlY2xhcmVkVmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7ZGVjbGFyZWRWYXJpYWJsZVN0cmluZ30nIGRlY2xhcmVkIHZhcmlhYmxlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkRGVjbGFyZWRNZXRhdmFyaWFibGUoZGVjbGFyZWRNZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLmRlY2xhcmVkTWV0YXZhcmlhYmxlcy5wdXNoKGRlY2xhcmVkTWV0YXZhcmlhYmxlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlU3RyaW5nID0gZGVjbGFyZWRNZXRhdmFyaWFibGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7ZGVjbGFyZWRNZXRhdmFyaWFibGVTdHJpbmd9JyBkZWNsYXJlZCBtZXRhdmFyaWFibGUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0RGVjbGFyZWRNZXRhdmFyaWFibGVzKCk7XG5cbiAgICBtZXRhdmFyaWFibGUgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZXMuZmluZCgoZGVjbGFyZWRNZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZS51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHJ1bGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGF4aW9tLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxlbW1hLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGVtbWFDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gdGhlb3JlbS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHRoZW9yZW1Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gdGhpcy5nZXRDb25qZWN0dXJlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlcy5maW5kKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25qZWN0dXJlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBjb25qZWN0dXJlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoY29uamVjdHVyZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgZmlsdGVyKG1ldGFMZW1tYXMsIChtZXRhTGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG1ldGFMZW1tYSwgLy8vXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcyA9IHJlZmVyZW5jZS5jb21wYXJlVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbik7XG5cbiAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25Db21wYXJlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCk7XG5cbiAgICBmaWx0ZXIobWV0YXRoZW9yZW1zLCAobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG1ldGF0aGVvcmVtLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzID0gcmVmZXJlbmNlLmNvbXBhcmVUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvbkNvbXBhcmVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tID0gdGhpcy5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGxlbW1hID0gdGhpcy5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGlzLmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gdGhpcy5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzLmZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gdGhpcy5maW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gdGhpcy5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gW1xuICAgICAgICAgICAgLi4ubWV0YUxlbW1hcyxcbiAgICAgICAgICAgIC4uLm1ldGF0aGVvcmVtc1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSB0eXBlLmNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhlcy5maW5kKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeC5jb21wYXJlVHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZVByZWZpeENvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKFZhcmlhYmxlSWRlbnRpdGlmZXIpIHtcbiAgICBjb25zdCBkZWNsYXJlZFZhcmlhYmxlcyA9IHRoaXMuZ2V0RGVjbGFyZWRWYXJpYWJsZXMoKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlID0gZGVjbGFyZWRWYXJpYWJsZXMuZmluZCgoZGVjbGFyZWRWYXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyZWRWYXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aXRpZmVyID0gZGVjbGFyZWRWYXJpYWJsZS5jb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKFZhcmlhYmxlSWRlbnRpdGlmZXIpO1xuXG4gICAgICAgICAgICBpZiAoZGVjbGFyZWRWYXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aXRpZmVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gZGVjbGFyZWRWYXJpYWJsZTtcbiAgfVxuXG4gIGZpbmREZWNsYXJlZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gdGhpcy5nZXREZWNsYXJlZE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBkZWNsYXJlZE1ldGF2YXJpYWJsZSA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlcy5maW5kKChkZWNsYXJlZE1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVjbGFyZWRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGRlY2xhcmVkTWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoZGVjbGFyZWRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkTWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKG1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlKSB7XG4gICAgY29uc3QgbWV0YUxldmVsQXNzdW1wdGlvbiA9IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YUxldmVsQXNzdW1wdGlvbjtcbiAgfVxuXG4gIGZpbmRQcm9jZWR1cmVCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSB0aGlzLmdldFByb2NlZHVyZXMoKSxcbiAgICAgICAgICBwcm9jZWR1cmUgPSBwcm9jZWR1cmVzLmZpbmQoKHByb2NlZHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUgPSBwcm9jZWR1cmUuY29tcGFyZVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkgeyByZXR1cm4gZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTsgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUsIGNvbnRleHQpIHtcbiAgICBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gbGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbFVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlMYWJlbChsYWJlbCk7XG5cbiAgICAgICAgICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdGhpcy5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50ID0gKHRvcExldmVsTWV0YUFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaExhYmVsTm9kZShsYWJlbE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobGFiZWxOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXggPSB0aGlzLmZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSksXG4gICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSAodHlwZVByZWZpeCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeFByZXNlbnQ7XG4gIH1cblxuICBpc0RlY2xhcmVkVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgZGVjbGFyZWRWYXJpYWJsZSA9IHRoaXMuZmluZERlY2xhcmVkVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpLFxuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVQcmVzZW50ID0gKGRlY2xhcmVkVmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGRlY2xhcmVkVmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNEZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGRlY2xhcmVkTWV0YXZhcmlhYmxlID0gdGhpcy5maW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVQcmVzZW50ID0gKGRlY2xhcmVkTWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBkZWNsYXJlZE1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVByb2NlZHVyZU5hbWUocHJvY2VkdXJlTmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZSA9IHRoaXMuZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gKHByb2NlZHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YUxldmVsKCkge1xuICAgIGNvbnN0IG1ldGFMRXZlbCA9IGZhbHNlO1xuXG4gICAgcmV0dXJuIG1ldGFMRXZlbDtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudHlwZXMgPSBbXTtcbiAgICB0aGlzLnJ1bGVzID0gW107XG4gICAgdGhpcy5heGlvbXMgPSBbXTtcbiAgICB0aGlzLmxlbW1hcyA9IFtdO1xuICAgIHRoaXMudGhlb3JlbXMgPSBbXTtcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBbXTtcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gW107XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IFtdO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gW107XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMuZGVjbGFyZWRWYXJpYWJsZXMgPSBbXTtcbiAgICB0aGlzLmRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IFtdO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgLy8vXG4gIH1cblxuICBhc3luYyB2ZXJpZnlGaWxlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZmlsZU5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgZmlsZVZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZmlsZVZlcmlmaWVzO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudHlwZXMgPSBbXTtcblxuICAgIHR5cGVzRnJvbUpTT04oanNvbiwgdGhpcy50eXBlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXNGcm9tTm90aGluZygpO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXNGcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5kZWNsYXJlZE1ldGF2YXJpYWJsZXMgPSBkZWNsYXJlZE1ldGF2YXJpYWJsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5kZWNsYXJlZFZhcmlhYmxlcyA9IGRlY2xhcmVkVmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzVG9UeXBlc0pTT04odGhpcy50eXBlcyksXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXNUb1J1bGVzSlNPTih0aGlzLnJ1bGVzKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zVG9BeGlvbXNKU09OKHRoaXMuYXhpb21zKSxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoaXMudGhlb3JlbXMpLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04odGhpcy5jb25qZWN0dXJlcyksXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTih0aGlzLmNvbWJpbmF0b3JzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHRoaXMudHlwZVByZWZpeGVzKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKHRoaXMuY29uc3RydWN0b3JzKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKHRoaXMubWV0YXRoZW9yZW1zKSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlc0pTT04gPSBkZWNsYXJlZFZhcmlhYmxlc1RvRGVjbGFyZWRWYXJpYWJsZXNKU09OKHRoaXMuZGVjbGFyZWRWYXJpYWJsZXMpLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04gPSBkZWNsYXJlZE1ldGF2YXJpYWJsZXNUb0RlY2xhcmVkTWV0YXZhcmlhYmxlc0pTT04odGhpcy5kZWNsYXJlZE1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICB0eXBlcyA9IHR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNKU09OLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gYXhpb21zSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTiwgIC8vL1xuICAgICAgICAgIGRlY2xhcmVkVmFyaWFibGVzID0gZGVjbGFyZWRWYXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gZGVjbGFyZWRNZXRhdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICB0eXBlUHJlZml4ZXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyxcbiAgICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgcmVsZWFzZUNvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBjb21iaW5lZEN1c3RvbUdyYW1tYXIgPSByZWxlYXNlQ29udGV4dC5nZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIoKSxcbiAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxMZXhlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbFBhcnNlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBsZXhlciA9IG5vbWluYWxMZXhlciwgLy8vXG4gICAgICAgICAgcGFyc2VyID0gbm9taW5hbFBhcnNlciwgLy8vXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGRlY2xhcmVkTWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG5vbWluYWxGaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlKE5vbWluYWxGaWxlQ29udGV4dCwgZmlsZSwgbGV4ZXIsIHBhcnNlciwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgZGVjbGFyZWRWYXJpYWJsZXMsIGRlY2xhcmVkTWV0YXZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbm9taW5hbEZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpLFxuICAgICAgICAgIG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbExleGVyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsUGFyc2VyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgbGVtbWFzID0gbnVsbCxcbiAgICAgICAgICB0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IG51bGwsXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBudWxsLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gbnVsbCxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBudWxsLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG51bGwsXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbnVsbCxcbiAgICAgICAgICBkZWNsYXJlZFZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgZGVjbGFyZWRNZXRhdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBub21pbmFsRmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tSlNPTihOb21pbmFsRmlsZUNvbnRleHQsIGpzb24sIGxleGVyLCBwYXJzZXIsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIGRlY2xhcmVkVmFyaWFibGVzLCBkZWNsYXJlZE1ldGF2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxGaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vbWluYWxGaWxlQ29udGV4dCIsInB1c2giLCJmaWx0ZXIiLCJhcnJheVV0aWxpdGllcyIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJGaWxlQ29udGV4dCIsImNvbnRleHQiLCJmaWxlQ29udGVudCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImxleGVyIiwicGFyc2VyIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwibWV0YUxlbW1hcyIsImNvbmplY3R1cmVzIiwiY29tYmluYXRvcnMiLCJ0eXBlUHJlZml4ZXMiLCJjb25zdHJ1Y3RvcnMiLCJtZXRhdGhlb3JlbXMiLCJkZWNsYXJlZFZhcmlhYmxlcyIsImRlY2xhcmVkTWV0YXZhcmlhYmxlcyIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlUmVsZWFzZSIsImxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUxhYmVsIiwiZ2V0TGFiZWwiLCJnZXRUeXBlcyIsImdldFJ1bGVzIiwiZ2V0QXhpb21zIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJnZXRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsImdldE1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0VHlwZVByZWZpeGVzIiwiZ2V0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwiZ2V0RGVjbGFyZWRWYXJpYWJsZXMiLCJnZXREZWNsYXJlZE1ldGF2YXJpYWJsZXMiLCJnZXRUZXJtcyIsInRlcm1zIiwiZ2V0RnJhbWVzIiwiZnJhbWVzIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXRpZXMiLCJnZXRKdWRnZW1lbnRzIiwianVkZ2VtZW50cyIsImdldEFzc2VydGlvbnMiLCJhc3NlcnRpb25zIiwiZ2V0U3RhdGVtZW50cyIsInN0YXRlbWVudHMiLCJnZXRSZWZlcmVuY2VzIiwicmVmZXJlbmNlcyIsImdldEFzc3VtcHRpb25zIiwiYXNzdW1wdGlvbnMiLCJnZXRNZXRhdmFyaWFibGVzIiwibWV0YXZhcmlhYmxlcyIsImdldFN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiYWRkVHlwZSIsInR5cGUiLCJnZXRGaWxlUGF0aCIsInR5cGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImFkZFJ1bGUiLCJydWxlU3RyaW5nIiwiYWRkQXhpb20iLCJheGlvbVN0cmluZyIsImFkZExlbW1hIiwibGVtbWFTdHJpbmciLCJhZGRUaGVvcmVtIiwidGhlb3JlbVN0cmluZyIsImFkZE1ldGFMZW1tYSIsIm1ldGFMZW1tYSIsIm1ldGFMZW1tYVN0cmluZyIsImFkZENvbmplY3R1cmUiLCJvY25qZWN0dXJlU3RyaW5nIiwib2NuamVjdHVyZSIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiY29tYmluYXRvclN0cmluZyIsImFkZFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwidHlwZVByZWZpeFN0cmluZyIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvclN0cmluZyIsImFkZE1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1TdHJpbmciLCJhZGREZWNsYXJlZFZhcmlhYmxlIiwiZGVjbGFyZWRWYXJpYWJsZSIsImRlY2xhcmVkVmFyaWFibGVTdHJpbmciLCJhZGREZWNsYXJlZE1ldGF2YXJpYWJsZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlIiwiZGVjbGFyZWRNZXRhdmFyaWFibGVTdHJpbmciLCJmaW5kTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZmluZCIsIm1ldGF2YXJpYWJsZVVuaWZpZXMiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInJ1bGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJsZW1tYUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsInRoZW9yZW1Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJjb25qZWN0dXJlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQ29tcGFyZXMiLCJjb21wYXJlVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lIiwiY29tcGFyZVByZWZpeGVkVHlwZU5hbWUiLCJmaW5kVHlwZVByZWZpeEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhDb21wYXJlc1RvVHlwZVByZWZpeE5hbWUiLCJjb21wYXJlVHlwZVByZWZpeE5hbWUiLCJmaW5kRGVjbGFyZWRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyIiwiVmFyaWFibGVJZGVudGl0aWZlciIsImRlY2xhcmVkVmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGl0aWZlciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kRGVjbGFyZWRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJkZWNsYXJlZE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZE1ldGFMZXZlbEFzc3VtcHRpb25CeU1ldGFMZXZlbEFzc3VtcHRpb25Ob2RlIiwibWV0YUxldmVsQXNzdW1wdGlvbk5vZGUiLCJtZXRhTGV2ZWxBc3N1bXB0aW9uIiwiZmluZFByb2NlZHVyZUJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZU5hbWUiLCJwcm9jZWR1cmUiLCJwcm9jZWR1cmVDb21wYXJlc1RvUHJvY2VkdXJlTmFtZSIsImNvbXBhcmVQcm9jZWR1cmVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsImxhYmVsUHJlc2VudCIsInNvbWUiLCJsYWJlbCIsImxhYmVsVW5pZmllcyIsInVuaWZ5TGFiZWwiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwibGFiZWxOb2RlIiwibGFiZWxOb2RlTWF0Y2hlcyIsIm1hdGNoTGFiZWxOb2RlIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhQcmVzZW50IiwiaXNEZWNsYXJlZFZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVJZGVudGlmaWVyIiwiZGVjbGFyZWRWYXJpYWJsZVByZXNlbnQiLCJpc0RlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImRlY2xhcmVkTWV0YXZhcmlhYmxlUHJlc2VudCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc01ldGFMZXZlbCIsIm1ldGFMRXZlbCIsImNsZWFyIiwiY29tcGxldGUiLCJ2ZXJpZnlGaWxlIiwiZ2V0Tm9kZSIsImZpbGVOb2RlIiwiZmlsZVZlcmlmaWVzIiwiaW5pdGlhbGlzZSIsImpzb24iLCJmaWxlQ29udGV4dCIsInR5cGVzRnJvbUpTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsImRlY2xhcmVkTWV0YXZhcmlhYmxlc0Zyb21KU09OIiwiZGVjbGFyZWRWYXJpYWJsZXNGcm9tSlNPTiIsInJ1bGVzRnJvbUpTT04iLCJheGlvbXNGcm9tSlNPTiIsInRoZW9yZW1zRnJvbUpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsInR5cGVQcmVmaXhlc0Zyb21KU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNGcm9tSlNPTiIsInRvSlNPTiIsInR5cGVzSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJydWxlc0pTT04iLCJydWxlc1RvUnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsImRlY2xhcmVkVmFyaWFibGVzSlNPTiIsImRlY2xhcmVkVmFyaWFibGVzVG9EZWNsYXJlZFZhcmlhYmxlc0pTT04iLCJkZWNsYXJlZE1ldGF2YXJpYWJsZXNKU09OIiwiZGVjbGFyZWRNZXRhdmFyaWFibGVzVG9EZWNsYXJlZE1ldGF2YXJpYWJsZXNKU09OIiwiZnJvbUZpbGUiLCJmaWxlIiwicmVsZWFzZUNvbnRleHQiLCJjb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJnZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIiLCJub21pbmFsTGV4ZXIiLCJOb21pbmFsTGV4ZXIiLCJub21pbmFsUGFyc2VyIiwiTm9taW5hbFBhcnNlciIsIm5vbWluYWxGaWxlQ29udGV4dCIsImZyb21KU09OIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkF5Q0E7OztlQUFxQkE7OztnQ0F2Q087MkJBQ0c7OEJBQ21COzhEQUV6QjsrREFDQzt3QkFFQztzQkFDUzsyQkFDTztzQkF3QnNCOzs7Ozs7QUFFakUsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHQyx5QkFBYyxFQUNqQyxFQUFFQyxxQ0FBcUMsRUFBRSxHQUFHQyw2QkFBZSxFQUMzRCxFQUFFQyxzQ0FBc0MsRUFBRSxHQUFHQyw4QkFBZ0I7QUFFcEQsTUFBTVAsMkJBQTJCUSwyQkFBVztJQUN6RCxZQUFZQyxPQUFPLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVD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