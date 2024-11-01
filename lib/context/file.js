"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return FileContext;
    }
});
var _necessary = require("necessary");
var _shim = /*#__PURE__*/ _interop_require_default(require("../shim"));
var _type = require("../type");
var _metaType = require("../metaType");
var _string = require("../utilities/string");
var _json = require("../utilities/json");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter;
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, constructors, metatheorems, metavariables) {
        _class_call_check(this, FileContext);
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
    _create_class(FileContext, [
        {
            key: "getReleaseContext",
            value: function getReleaseContext() {
                return this.releaseContext;
            }
        },
        {
            key: "getFilePath",
            value: function getFilePath() {
                return this.filePath;
            }
        },
        {
            key: "getTokens",
            value: function getTokens() {
                return this.tokens;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "findFile",
            value: function findFile(filePath) {
                return this.releaseContext.findFile(filePath);
            }
        },
        {
            key: "getLexer",
            value: function getLexer() {
                return this.releaseContext.getLexer();
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                return this.releaseContext.getParser();
            }
        },
        {
            key: "getTermType",
            value: function getTermType(term) {
                var termType = term.getType();
                return termType;
            }
        },
        {
            key: "getProofSteps",
            value: function getProofSteps() {
                var proofSteps = []; ///
                return proofSteps;
            }
        },
        {
            key: "getEquivalences",
            value: function getEquivalences() {
                var equivalences = []; ///
                return equivalences;
            }
        },
        {
            key: "getJudgements",
            value: function getJudgements() {
                var judgements = [];
                return judgements;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                this.rules.forEach(function(rule) {
                    var ruleLabels = rule.getLabels();
                    push(labels, ruleLabels);
                });
                this.axioms.forEach(function(axiom) {
                    var axiomLabels = axiom.getLabels();
                    push(labels, axiomLabels);
                });
                this.lemmas.forEach(function(lemma) {
                    var lemmaLabels = lemma.getLabels();
                    push(labels, lemmaLabels);
                });
                this.theorems.forEach(function(theorem) {
                    var theoremLabels = theorem.getLabels();
                    push(labels, theoremLabels);
                });
                this.conjectures.forEach(function(conjecture) {
                    var conjectureLabels = conjecture.getLabels();
                    push(labels, conjectureLabels);
                });
                this.metatheorems.forEach(function(metatheorem) {
                    var metatheoremLabels = metatheorem.getLabels();
                    push(labels, metatheoremLabels);
                });
                if (includeRelease) {
                    var releaseContextLabels = this.releaseContext.getLabels();
                    push(labels, releaseContextLabels);
                }
                return labels;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var types = [];
                push(types, this.types);
                if (includeRelease) {
                    var releaseContextTypes = this.releaseContext.getTypes();
                    push(types, releaseContextTypes);
                }
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = [];
                push(rules, this.rules);
                if (includeRelease) {
                    var releaseContextRules = this.releaseContext.getRules();
                    push(rules, releaseContextRules);
                }
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = [];
                push(axioms, this.axioms);
                if (includeRelease) {
                    var releaseContextAxioms = this.releaseContext.getAxioms();
                    push(axioms, releaseContextAxioms);
                }
                return axioms;
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = [];
                push(lemmas, this.lemmas);
                if (includeRelease) {
                    var releaseContextLemmas = this.releaseContext.getLemmas();
                    push(lemmas, releaseContextLemmas);
                }
                return lemmas;
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems = [];
                push(theorems, this.theorems);
                if (includeRelease) {
                    var releaseContextTheorems = this.releaseContext.getTheorems();
                    push(theorems, releaseContextTheorems);
                }
                return theorems;
            }
        },
        {
            key: "getVariables",
            value: function getVariables() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return this.variables;
            }
        },
        {
            key: "getMetaLemmas",
            value: function getMetaLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metaLemmas = [];
                push(metaLemmas, this.metaLemmas);
                if (includeRelease) {
                    var releaseContextMetaLemmas = this.releaseContext.getMetaLemmas();
                    push(metaLemmas, releaseContextMetaLemmas);
                }
                return metaLemmas;
            }
        },
        {
            key: "getMetaTypes",
            value: function getMetaTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metaTypes = [
                    _metaType.frameMetaType,
                    _metaType.referenceMetaType,
                    _metaType.statementMetaType
                ];
                return metaTypes;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures = [];
                push(conjectures, this.conjectures);
                if (includeRelease) {
                    var releaseContextConjectures = this.releaseContext.getConjectures();
                    push(conjectures, releaseContextConjectures);
                }
                return conjectures;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = [];
                push(combinators, this.combinators);
                if (includeRelease) {
                    var releaseContextCombinators = this.releaseContext.getCombinators();
                    push(combinators, releaseContextCombinators);
                }
                return combinators;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = [];
                push(constructors, this.constructors);
                if (includeRelease) {
                    var releaseContextConstructors = this.releaseContext.getConstructors();
                    push(constructors, releaseContextConstructors);
                }
                return constructors;
            }
        },
        {
            key: "getMetatheorems",
            value: function getMetatheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metatheorems = [];
                push(metatheorems, this.metatheorems);
                if (includeRelease) {
                    var releaseContextMetatheorems = this.releaseContext.getMetatheorems();
                    push(metatheorems, releaseContextMetatheorems);
                }
                return metatheorems;
            }
        },
        {
            key: "getMetavariables",
            value: function getMetavariables() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return this.metavariables;
            }
        },
        {
            key: "getMetavariableNames",
            value: function getMetavariableNames() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metavariableNames = this.metavariables.map(function(metavariable) {
                    var metavariableName = metavariable.getName();
                    return metavariableName;
                });
                return metavariableNames;
            }
        },
        {
            key: "setReleaseContext",
            value: function setReleaseContext(releaseContext) {
                this.releaseContext = releaseContext;
            }
        },
        {
            key: "setFilePath",
            value: function setFilePath(filePath) {
                this.filePath = filePath;
            }
        },
        {
            key: "setTokens",
            value: function setTokens(tokens) {
                this.tokens = tokens;
            }
        },
        {
            key: "isMetavariablePresent",
            value: function isMetavariablePresent(metavariable, generalContext, specificContext) {
                metavariable = this.findMetavariable(metavariable, generalContext, specificContext); ///
                var metavariablePresent = metavariable !== null;
                return metavariablePresent;
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                var type = this.findTypeByTypeName(typeName), typePresent = type !== null;
                return typePresent;
            }
        },
        {
            key: "isVariablePresentByVariableName",
            value: function isVariablePresentByVariableName(variableName) {
                var variable = this.findVariableByVariableName(variableName), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "isMetavariablePresentByMetavariableName",
            value: function isMetavariablePresentByMetavariableName(metavariableName) {
                var metavariable = this.findMetavariableByMetavariableName(metavariableName), metavariablePresent = metavariable !== null;
                return metavariablePresent;
            }
        },
        {
            key: "isLabelPresentByMetavariableName",
            value: function isLabelPresentByMetavariableName(metavariableName) {
                var label = this.findLabelByMetavariableName(metavariableName), labelPresent = label !== null;
                return labelPresent;
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types = this.getTypes();
                types.push(_type.objectType);
                var type = types.find(function(type) {
                    var typeNameMatches = type.matchTypeName(typeName);
                    if (typeNameMatches) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "findMetaTypeByMetaTypeName",
            value: function findMetaTypeByMetaTypeName(metaTypeName) {
                var metaTypes = this.getMetaTypes(), metaType = metaTypes.find(function(metaType) {
                    var metaTypeNameMatches = metaType.matchMetaTypeName(metaTypeName);
                    if (metaTypeNameMatches) {
                        return true;
                    }
                }) || null;
                return metaType;
            }
        },
        {
            key: "findLabelByMetavariableName",
            value: function findLabelByMetavariableName(metavariableName) {
                var labels = this.getLabels(), label = labels.find(function(label) {
                    var metavariableNameMatches = label.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return label;
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var variables = this.getVariables(), variable = variables.find(function(variable) {
                    var variableNameMatches = variable.matchVariableName(variableName);
                    if (variableNameMatches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "findRuleByReference",
            value: function findRuleByReference(reference) {
                var rules = this.getRules(), metavariableName = reference.getMetavariableName(), rule = rules.find(function(rule) {
                    var metavariableNameMatches = rule.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return rule;
            }
        },
        {
            key: "findAxiomByReference",
            value: function findAxiomByReference(reference) {
                var axioms = this.getAxioms(), metavariableName = reference.getMetavariableName(), axiom = axioms.find(function(axiom) {
                    var metavariableNameMatches = axiom.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return axiom;
            }
        },
        {
            key: "findLemmaByReference",
            value: function findLemmaByReference(reference) {
                var lemmas = this.getLemmas(), metavariableName = reference.getMetavariableName(), lemma = lemmas.find(function(lemma) {
                    var metavariableNameMatches = lemma.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return lemma;
            }
        },
        {
            key: "findTheoremByReference",
            value: function findTheoremByReference(reference) {
                var theorems = this.getTheorems(), metavariableName = reference.getMetavariableName(), theorem = theorems.find(function(theorem) {
                    var metavariableNameMatches = theorem.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return theorem;
            }
        },
        {
            key: "findConjectureByReference",
            value: function findConjectureByReference(reference) {
                var conjectures = this.getConjectures(), metavariableName = reference.getMetavariableName(), conjecture = conjectures.find(function(conjecture) {
                    var metavariableNameMatches = conjecture.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return conjecture;
            }
        },
        {
            key: "findMetaLemmasByReference",
            value: function findMetaLemmasByReference(reference) {
                var _this = this;
                var metaLemmas = this.getMetaLemmas();
                filter(metaLemmas, function(metaLemma) {
                    var Substitutions = _shim.default.Substitutions, context = _this, substitutions = Substitutions.fromNothing(), referenceUnified = metaLemma.unifyReference(reference, substitutions, context);
                    if (referenceUnified) {
                        return true;
                    }
                });
                return metaLemmas;
            }
        },
        {
            key: "findMetatheoremsByReference",
            value: function findMetatheoremsByReference(reference) {
                var _this = this;
                var metatheorems = this.getMetatheorems();
                filter(metatheorems, function(metatheorem) {
                    var Substitutions = _shim.default.Substitutions, context = _this, substitutions = Substitutions.fromNothing(), referenceUnified = metatheorem.unifyReference(reference, substitutions, context);
                    if (referenceUnified) {
                        return true;
                    }
                });
                return metatheorems;
            }
        },
        {
            key: "findVariable",
            value: function findVariable(variable) {
                var specificVariable = variable, variables = this.getVariables();
                variable = variables.find(function(variable) {
                    var generalVariable = variable, generalVariableEqualToSpecificVariable = generalVariable.isEqualTo(specificVariable);
                    if (generalVariableEqualToSpecificVariable) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "findJudgementByMetavariable",
            value: function findJudgementByMetavariable(metavariable) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementMetavariable = judgement.getMetavariable();
                    if (judgementMetavariable !== null) {
                        var judgementMetavariableEqualToMetavariable = judgementMetavariable.isEqualTo(metavariable);
                        if (judgementMetavariableEqualToMetavariable) {
                            return true;
                        }
                    }
                }) || null;
                return judgement;
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var metavariableNameMatches = metavariable.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "findMetavariable",
            value: function findMetavariable(metavariable, generalContext, specificContext) {
                var specificMetavariable = metavariable, metavariables = this.getMetavariables();
                metavariable = metavariables.find(function(metavariable) {
                    var generalMetavariable = metavariable; ///
                    metavariable = specificMetavariable; ///
                    var metavariableUnified = generalMetavariable.unifyMetavariable(metavariable, generalContext, specificContext);
                    if (metavariableUnified) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "isAxiomPresentByReference",
            value: function isAxiomPresentByReference(reference) {
                var axiom = this.findAxiomByReference(reference), axiomPresent = axiom !== null;
                return axiomPresent;
            }
        },
        {
            key: "isLemmaPresentByReference",
            value: function isLemmaPresentByReference(reference) {
                var lemma = this.findLemmaByReference(reference), lemmaPresent = lemma !== null;
                return lemmaPresent;
            }
        },
        {
            key: "isTheoremPresentByReference",
            value: function isTheoremPresentByReference(reference) {
                var theorem = this.findTheoremByReference(reference), theoremPresent = theorem !== null;
                return theoremPresent;
            }
        },
        {
            key: "isConjecturePresentByReference",
            value: function isConjecturePresentByReference(reference) {
                var conjecture = this.findConjectureByReference(reference), conjecturePresent = conjecture !== null;
                return conjecturePresent;
            }
        },
        {
            key: "areMetaLemmaPresentByReference",
            value: function areMetaLemmaPresentByReference(reference) {
                var metaLemmas = this.findMetaLemmasByReference(reference), metaLemmasLength = metaLemmas.length, metaLemmasPresent = metaLemmasLength > 0;
                return metaLemmasPresent;
            }
        },
        {
            key: "areMetatheoremPresentByReference",
            value: function areMetatheoremPresentByReference(reference) {
                var metatheorems = this.findMetatheoremsByReference(reference), metatheoremsLength = metatheorems.length, metatheoremsPresent = metatheoremsLength > 0;
                return metatheoremsPresent;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var tokens = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens === null) {
                    tokens = this.tokens;
                }
                var string = (0, _string.nodeAsString)(node, tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                var tokens = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens === null) {
                    tokens = this.tokens;
                }
                var string = (0, _string.nodesAsString)(node, tokens);
                return string;
            }
        },
        {
            key: "nodeAsTokens",
            value: function nodeAsTokens(node) {
                var tokens = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens === null) {
                    tokens = this.tokens;
                }
                tokens = (0, _string.nodeAsTokens)(node, tokens); ///
                return tokens;
            }
        },
        {
            key: "nodesAsTokens",
            value: function nodesAsTokens1(node) {
                var tokens = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                if (tokens === null) {
                    tokens = this.tokens;
                }
                tokens = nodesAsTokens(node, tokens); ///
                return tokens;
            }
        },
        {
            key: "tokensAsString",
            value: function tokensAsString(tokens) {
                return (0, _string.tokensAsString)(tokens);
            }
        },
        {
            key: "addType",
            value: function addType(type) {
                this.types.push(type);
            }
        },
        {
            key: "addRule",
            value: function addRule(rule) {
                this.rules.push(rule);
            }
        },
        {
            key: "addAxiom",
            value: function addAxiom(axiom) {
                this.axioms.push(axiom);
            }
        },
        {
            key: "addLemma",
            value: function addLemma(lemma) {
                this.lemmas.push(lemma);
            }
        },
        {
            key: "addTheorem",
            value: function addTheorem(theorem) {
                this.theorems.push(theorem);
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                this.variables.push(variable);
            }
        },
        {
            key: "addMetaLemma",
            value: function addMetaLemma(metaLemma) {
                this.metaLemmas.push(metaLemma);
            }
        },
        {
            key: "addConjecture",
            value: function addConjecture(conjecture) {
                this.conjectures.push(conjecture);
            }
        },
        {
            key: "addCombinator",
            value: function addCombinator(combinator) {
                this.combinators.push(combinator);
            }
        },
        {
            key: "addConstructor",
            value: function addConstructor(constructor) {
                this.constructors.push(constructor);
            }
        },
        {
            key: "addMetatheorem",
            value: function addMetatheorem(metatheorem) {
                this.metatheorems.push(metatheorem);
            }
        },
        {
            key: "addMetavariable",
            value: function addMetavariable(metavariable) {
                this.metavariables.push(metavariable);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                this.releaseContext.trace(message, this.filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                this.releaseContext.debug(message, this.filePath);
            }
        },
        {
            key: "info",
            value: function info(message) {
                this.releaseContext.info(message, this.filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                this.releaseContext.warning(message, this.filePath);
            }
        },
        {
            key: "error",
            value: function error(message) {
                this.releaseContext.error(message, this.filePath);
            }
        },
        {
            key: "initialise",
            value: function initialise(json) {
                var fileContext = this;
                this.types = [];
                (0, _json.typesFromJSON)(json, this.types, fileContext);
                this.rules = (0, _json.rulesFromJSON)(json, fileContext);
                this.axioms = (0, _json.axiomsFromJSON)(json, fileContext);
                this.lemmas = (0, _json.lemmasFromNothing)();
                this.theorems = (0, _json.theoremsFromJSON)(json, fileContext);
                this.variables = (0, _json.variablesFromJSON)(json, fileContext);
                this.metaLemmas = (0, _json.metaLemmasFromNothing)();
                this.conjectures = (0, _json.conjecturesFromJSON)(json, fileContext);
                this.combinators = (0, _json.combinatorsFromJSON)(json, fileContext);
                this.constructors = (0, _json.constructorsFromJSON)(json, fileContext);
                this.metatheorems = (0, _json.metatheoremsFromJSON)(json, fileContext);
                this.metavariables = (0, _json.metavariablesFromJSON)(json, fileContext);
            }
        },
        {
            key: "clear",
            value: function clear() {
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
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typesJSON = (0, _json.typesToTypesJSON)(this.types), rulesJSON = (0, _json.rulesToRulesJSON)(this.rules), axiomsJSON = (0, _json.axiomsToAxiomsJSON)(this.axioms), theoremsJSON = (0, _json.theoremsToTheoremsJSON)(this.theorems), variablesJSON = (0, _json.variablesToVariablesJSON)(this.variables), conjecturesJSON = (0, _json.conjecturesToConjecturesJSON)(this.conjectures), combinatorsJSON = (0, _json.combinatorsToCombinatorsJSON)(this.combinators), constructorsJSON = (0, _json.constructorsToConstructorsJSON)(this.constructors), metatheoremsJSON = (0, _json.metatheoremsToMetatheoremsJSON)(this.metatheorems), metavariablesJSON = (0, _json.metavariablesToMetavariablesJSON)(this.metavariables), filePath = this.filePath, types = typesJSON, rules = rulesJSON, axioms = axiomsJSON, theorems = theoremsJSON, variables = variablesJSON, conjectures = conjecturesJSON, combinators = combinatorsJSON, constructors = constructorsJSON, metatheorems = metatheoremsJSON, metavariables = metavariablesJSON, json = {
                    filePath: filePath,
                    types: types,
                    rules: rules,
                    axioms: axioms,
                    theorems: theorems,
                    variables: variables,
                    conjectures: conjectures,
                    combinators: combinators,
                    constructors: constructors,
                    metatheorems: metatheorems,
                    metavariables: metavariables
                };
                return json;
            }
        }
    ], [
        {
            key: "fromFile",
            value: function fromFile(file, releaseContext) {
                var lexer = releaseContext.getLexer(), parser = releaseContext.getParser(), filePath = file.getPath(), fileContent = file.getContent(), content = fileContent, tokens = lexer.tokenise(content), node = parser.parse(tokens), types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                return fileContext;
            }
        },
        {
            key: "fromFilePathAndJSON",
            value: function fromFilePathAndJSON(filePath, json, releaseContext) {
                var tokens = null, node = null, types = null, rules = null, axioms = null, lemmas = null, theorems = null, variables = null, metaLemmas = null, conjectures = null, combinators = null, constructors = null, metatheorems = null, metavariables = null, fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                fileContext.initialise(json);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgc2hpbSBmcm9tIFwiLi4vc2hpbVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGZyYW1lTWV0YVR5cGUsIHJlZmVyZW5jZU1ldGFUeXBlLCBzdGF0ZW1lbnRNZXRhVHlwZSB9IGZyb20gXCIuLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbm9kZUFzVG9rZW5zLCBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcsIHRva2Vuc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBjb25qZWN0dXJlc0Zyb21KU09OLFxuICAgICAgICAgY29tYmluYXRvcnNGcm9tSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBsZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIG1ldGFMZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIHR5cGVzVG9UeXBlc0pTT04sXG4gICAgICAgICBydWxlc1RvUnVsZXNKU09OLFxuICAgICAgICAgYXhpb21zVG9BeGlvbXNKU09OLFxuICAgICAgICAgdGhlb3JlbXNUb1RoZW9yZW1zSlNPTixcbiAgICAgICAgIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04sXG4gICAgICAgICBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXM7XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycztcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtcztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBmaW5kRmlsZShmaWxlUGF0aCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5maW5kRmlsZShmaWxlUGF0aCk7IH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCk7IH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIHJldHVybiB0ZXJtVHlwZTtcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgY29uc3QgcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBbXTsgLy8vXG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gW107XG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGxlbW1hTGFiZWxzID0gbGVtbWEuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgY29uamVjdHVyZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5mb3JFYWNoKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgbWV0YXRoZW9yZW1MYWJlbHMgPSBtZXRhdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIG1ldGF0aGVvcmVtTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFR5cGVzKCk7XG5cbiAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHB1c2gocnVsZXMsIHRoaXMucnVsZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRSdWxlcygpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICBwdXNoKGF4aW9tcywgdGhpcy5heGlvbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKCk7XG5cbiAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobGVtbWFzLCB0aGlzLmxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZW1tYXMoKTtcblxuICAgICAgcHVzaChsZW1tYXMsIHJlbGVhc2VDb250ZXh0TGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2godGhlb3JlbXMsIHRoaXMudGhlb3JlbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcygpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICBwdXNoKG1ldGFMZW1tYXMsIHRoaXMubWV0YUxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIHJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRNZXRhVHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gW1xuICAgICAgZnJhbWVNZXRhVHlwZSxcbiAgICAgIHJlZmVyZW5jZU1ldGFUeXBlLFxuICAgICAgc3RhdGVtZW50TWV0YVR5cGVcbiAgICBdO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICBwdXNoKGNvbmplY3R1cmVzLCB0aGlzLmNvbmplY3R1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbnN0cnVjdG9ycywgdGhpcy5jb25zdHJ1Y3RvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2gobWV0YXRoZW9yZW1zLCB0aGlzLm1ldGF0aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoKTtcblxuICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlTmFtZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZXMgPSB0aGlzLm1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lcztcbiAgfVxuXG4gIHNldFJlbGVhc2VDb250ZXh0KHJlbGVhc2VDb250ZXh0KSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgc2V0RmlsZVBhdGgoZmlsZVBhdGgpIHtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gIH1cblxuICBzZXRUb2tlbnModG9rZW5zKSB7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7ICAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IHR5cGVOYW1lTWF0Y2hlcyA9IHR5cGUubWF0Y2hUeXBlTmFtZSh0eXBlTmFtZSk7XG5cbiAgICAgIGlmICh0eXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gdGhpcy5nZXRNZXRhVHlwZXMoKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlcy5maW5kKChtZXRhVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YVR5cGVOYW1lTWF0Y2hlcyA9IG1ldGFUeXBlLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhVHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZU1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaFZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gcnVsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGF4aW9tLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsZW1tYXMgPSB0aGlzLmdldExlbW1hcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIGxlbW1hID0gbGVtbWFzLmZpbmQoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxlbW1hLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gdGhpcy5nZXRUaGVvcmVtcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtcy5maW5kKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoZW9yZW0ubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBjb25qZWN0dXJlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgZmlsdGVyKG1ldGFMZW1tYXMsIChtZXRhTGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICByZWZlcmVuY2VVbmlmaWVkID0gbWV0YUxlbW1hLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKTtcblxuICAgIGZpbHRlcihtZXRhdGhlb3JlbXMsIChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgICAgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIHJlZmVyZW5jZVVuaWZpZWQgPSBtZXRhdGhlb3JlbS51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBmaW5kVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCBzcGVjaWZpY1ZhcmlhYmxlID0gdmFyaWFibGUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpO1xuXG4gICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxWYXJpYWJsZSA9IHZhcmlhYmxlLFxuICAgICAgICAgICAgZ2VuZXJhbFZhcmlhYmxlRXF1YWxUb1NwZWNpZmljVmFyaWFibGUgPSBnZW5lcmFsVmFyaWFibGUuaXNFcXVhbFRvKHNwZWNpZmljVmFyaWFibGUpO1xuXG4gICAgICBpZiAoZ2VuZXJhbFZhcmlhYmxlRXF1YWxUb1NwZWNpZmljVmFyaWFibGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZSA9IGp1ZGdlbWVudC5nZXRNZXRhdmFyaWFibGUoKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50TWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZTsgIC8vL1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVkID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzQXhpb21QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb20gPSB0aGlzLmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgYXhpb21QcmVzZW50ID0gKGF4aW9tICE9PSBudWxsKTtcblxuICAgIHJldHVybiBheGlvbVByZXNlbnQ7XG4gIH1cblxuICBpc0xlbW1hUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxlbW1hID0gdGhpcy5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGxlbW1hUHJlc2VudCA9IChsZW1tYSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGVtbWFQcmVzZW50O1xuICB9XG5cbiAgaXNUaGVvcmVtUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHRoZW9yZW0gPSB0aGlzLmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0aGVvcmVtUHJlc2VudCA9ICh0aGVvcmVtICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0aGVvcmVtUHJlc2VudDtcbiAgfVxuXG4gIGlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlID0gdGhpcy5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgY29uamVjdHVyZVByZXNlbnQgPSAoY29uamVjdHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZVByZXNlbnQ7XG4gIH1cblxuICBhcmVNZXRhTGVtbWFQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGFMZW1tYXNMZW5ndGggPSBtZXRhTGVtbWFzLmxlbmd0aCxcbiAgICAgICAgICBtZXRhTGVtbWFzUHJlc2VudCA9IChtZXRhTGVtbWFzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hc1ByZXNlbnQ7XG4gIH1cblxuICBhcmVNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSB0aGlzLmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtc0xlbmd0aCA9IG1ldGF0aGVvcmVtcy5sZW5ndGgsIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtc1ByZXNlbnQgPSAobWV0YXRoZW9yZW1zTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zUHJlc2VudDtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSBub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2Vucyk7IC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKHRva2VucykgeyByZXR1cm4gdG9rZW5zQXNTdHJpbmcodG9rZW5zKTsgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZE1ldGFMZW1tYShtZXRhTGVtbWEpIHtcbiAgICB0aGlzLm1ldGFMZW1tYXMucHVzaChtZXRhTGVtbWEpO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGFkZE1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtKSB7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMucHVzaChtZXRhdGhlb3JlbSk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzO1xuXG4gICAgdGhpcy50eXBlcyA9IFtdO1xuXG4gICAgdHlwZXNGcm9tSlNPTihqc29uLCB0aGlzLnR5cGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnJ1bGVzID0gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzRnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMudHlwZXMgPSBbXTtcbiAgICB0aGlzLnJ1bGVzID0gW107XG4gICAgdGhpcy5heGlvbXMgPSBbXTtcbiAgICB0aGlzLmxlbW1hcyA9IFtdO1xuICAgIHRoaXMudGhlb3JlbXMgPSBbXTtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IFtdO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IFtdO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBbXTtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gW107XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IFtdO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzVG9UeXBlc0pTT04odGhpcy50eXBlcyksXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXNUb1J1bGVzSlNPTih0aGlzLnJ1bGVzKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zVG9BeGlvbXNKU09OKHRoaXMuYXhpb21zKSxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoaXMudGhlb3JlbXMpLFxuICAgICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odGhpcy52YXJpYWJsZXMpLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04odGhpcy5jb25qZWN0dXJlcyksXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTih0aGlzLmNvbWJpbmF0b3JzKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKHRoaXMuY29uc3RydWN0b3JzKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKHRoaXMubWV0YXRoZW9yZW1zKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKHRoaXMubWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0pTT04sICAvLy9cbiAgICAgICAgICBheGlvbXMgPSBheGlvbXNKU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29uamVjdHVyZXMsXG4gICAgICAgICAgICBjb21iaW5hdG9ycyxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtcyxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IHJlbGVhc2VDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gcmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlQ29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlQ29udGVudCwgIC8vLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aEFuZEpTT04oZmlsZVBhdGgsIGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgbGVtbWFzID0gbnVsbCxcbiAgICAgICAgICB0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gbnVsbCxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IG51bGwsXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBudWxsLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG51bGwsXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbnVsbCxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCB0aGVvcmVtcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICBmaWxlQ29udGV4dC5pbml0aWFsaXNlKGpzb24pO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJsZW1tYXMiLCJ0aGVvcmVtcyIsInZhcmlhYmxlcyIsIm1ldGFMZW1tYXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwibWV0YXRoZW9yZW1zIiwibWV0YXZhcmlhYmxlcyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZmluZEZpbGUiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldFRlcm1UeXBlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsImdldFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlUmVsZWFzZSIsImxhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJsZW1tYSIsImxlbW1hTGFiZWxzIiwidGhlb3JlbSIsInRoZW9yZW1MYWJlbHMiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUxhYmVscyIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1MYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwicmVsZWFzZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRWYXJpYWJsZXMiLCJnZXRNZXRhTGVtbWFzIiwicmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzIiwiZ2V0TWV0YVR5cGVzIiwibWV0YVR5cGVzIiwiZnJhbWVNZXRhVHlwZSIsInJlZmVyZW5jZU1ldGFUeXBlIiwic3RhdGVtZW50TWV0YVR5cGUiLCJnZXRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImdldE1ldGF2YXJpYWJsZU5hbWVzIiwibWV0YXZhcmlhYmxlTmFtZXMiLCJtYXAiLCJtZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TmFtZSIsInNldFJlbGVhc2VDb250ZXh0Iiwic2V0RmlsZVBhdGgiLCJzZXRUb2tlbnMiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImZpbmRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibGFiZWwiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUiLCJsYWJlbFByZXNlbnQiLCJvYmplY3RUeXBlIiwiZmluZCIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YVR5cGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJ2YXJpYWJsZU5hbWVNYXRjaGVzIiwibWF0Y2hWYXJpYWJsZU5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZSIsImZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWEiLCJTdWJzdGl0dXRpb25zIiwic2hpbSIsImNvbnRleHQiLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJyZWZlcmVuY2VVbmlmaWVkIiwidW5pZnlSZWZlcmVuY2UiLCJmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kVmFyaWFibGUiLCJzcGVjaWZpY1ZhcmlhYmxlIiwiZ2VuZXJhbFZhcmlhYmxlIiwiZ2VuZXJhbFZhcmlhYmxlRXF1YWxUb1NwZWNpZmljVmFyaWFibGUiLCJpc0VxdWFsVG8iLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwic3BlY2lmaWNNZXRhdmFyaWFibGUiLCJnZW5lcmFsTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlVW5pZmllZCIsInVuaWZ5TWV0YXZhcmlhYmxlIiwiaXNBeGlvbVByZXNlbnRCeVJlZmVyZW5jZSIsImF4aW9tUHJlc2VudCIsImlzTGVtbWFQcmVzZW50QnlSZWZlcmVuY2UiLCJsZW1tYVByZXNlbnQiLCJpc1RoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJ0aGVvcmVtUHJlc2VudCIsImlzQ29uamVjdHVyZVByZXNlbnRCeVJlZmVyZW5jZSIsImNvbmplY3R1cmVQcmVzZW50IiwiYXJlTWV0YUxlbW1hUHJlc2VudEJ5UmVmZXJlbmNlIiwibWV0YUxlbW1hc0xlbmd0aCIsImxlbmd0aCIsIm1ldGFMZW1tYXNQcmVzZW50IiwiYXJlTWV0YXRoZW9yZW1QcmVzZW50QnlSZWZlcmVuY2UiLCJtZXRhdGhlb3JlbXNMZW5ndGgiLCJtZXRhdGhlb3JlbXNQcmVzZW50Iiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsImFkZFR5cGUiLCJhZGRSdWxlIiwiYWRkQXhpb20iLCJhZGRMZW1tYSIsImFkZFRoZW9yZW0iLCJhZGRWYXJpYWJsZSIsImFkZE1ldGFMZW1tYSIsImFkZENvbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJhZGRNZXRhdGhlb3JlbSIsImFkZE1ldGF2YXJpYWJsZSIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImluaXRpYWxpc2UiLCJqc29uIiwiZmlsZUNvbnRleHQiLCJ0eXBlc0Zyb21KU09OIiwicnVsZXNGcm9tSlNPTiIsImF4aW9tc0Zyb21KU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJ0aGVvcmVtc0Zyb21KU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJjbGVhciIsInRvSlNPTiIsInR5cGVzSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJydWxlc0pTT04iLCJydWxlc1RvUnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJmcm9tRmlsZSIsImZpbGUiLCJsZXhlciIsInBhcnNlciIsImdldFBhdGgiLCJmaWxlQ29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImZyb21GaWxlUGF0aEFuZEpTT04iXSwibWFwcGluZ3MiOiJBQUFB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