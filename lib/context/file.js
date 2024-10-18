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
var push = _necessary.arrayUtilities.push;
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
            key: "setNode",
            value: function setNode(node) {
                this.node = node;
            }
        },
        {
            key: "setTypes",
            value: function setTypes(types) {
                this.types = types;
            }
        },
        {
            key: "setRules",
            value: function setRules(rules) {
                this.rules = rules;
            }
        },
        {
            key: "setAxioms",
            value: function setAxioms(axioms) {
                this.axioms = axioms;
            }
        },
        {
            key: "setLemmas",
            value: function setLemmas(lemmas) {
                this.lemmas = lemmas;
            }
        },
        {
            key: "setTheorems",
            value: function setTheorems(theorems) {
                this.theorems = theorems;
            }
        },
        {
            key: "setVariables",
            value: function setVariables(variables) {
                this.variables = variables;
            }
        },
        {
            key: "setMetaLemmas",
            value: function setMetaLemmas(metaLemmas) {
                this.metaLemmas = metaLemmas;
            }
        },
        {
            key: "setConjectures",
            value: function setConjectures(conjectures) {
                this.conjectures = conjectures;
            }
        },
        {
            key: "setCombinators",
            value: function setCombinators(combinators) {
                this.combinators = combinators;
            }
        },
        {
            key: "setConstructors",
            value: function setConstructors(constructors) {
                this.constructors = constructors;
            }
        },
        {
            key: "setMetatheorems",
            value: function setMetatheorems(metatheorems) {
                this.metatheorems = metatheorems;
            }
        },
        {
            key: "setMetavariables",
            value: function setMetavariables(metavariables) {
                this.metavariables = metavariables;
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
                    var metaTypeNodeMatches = metaType.matchMetaTypeName(metaTypeName);
                    if (metaTypeNodeMatches) {
                        return true;
                    }
                }) || null;
                return metaType;
            }
        },
        {
            key: "findLabelByMetavariableNode",
            value: function findLabelByMetavariableNode(metavariableNode) {
                var labels = this.getLabels(), label = labels.find(function(label) {
                    var metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return label;
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
            key: "isLabelPresentByMetavariableNode",
            value: function isLabelPresentByMetavariableNode(metavariableNode) {
                var label = this.findLabelByMetavariableNode(metavariableNode), labelPresent = label !== null;
                return labelPresent;
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
            key: "findRuleByReference",
            value: function findRuleByReference(reference) {
                var rules = this.getRules(), metavariableNode = reference.getMetavariableNode(), rule = rules.find(function(rule) {
                    var metavariableNodeMatches = rule.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return rule;
            }
        },
        {
            key: "findAxiomByReference",
            value: function findAxiomByReference(reference) {
                var axioms = this.getAxioms(), metavariableNode = reference.getMetavariableNode(), axiom = axioms.find(function(axiom) {
                    var metavariableNodeMatches = axiom.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return axiom;
            }
        },
        {
            key: "findLemmaByReference",
            value: function findLemmaByReference(reference) {
                var lemmas = this.getLemmas(), metavariableNode = reference.getMetavariableNode(), lemma = lemmas.find(function(lemma) {
                    var metavariableNodeMatches = lemma.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return lemma;
            }
        },
        {
            key: "findTheoremByReference",
            value: function findTheoremByReference(reference) {
                var theorems = this.getTheorems(), metavariableNode = reference.getMetavariableNode(), theorem = theorems.find(function(theorem) {
                    var metavariableNodeMatches = theorem.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return theorem;
            }
        },
        {
            key: "findMetaLemmaByReference",
            value: function findMetaLemmaByReference(reference) {
                var metaLemmas = this.getMetaLemmas(), metavariableNode = reference.getMetavariableNode(), metaLemma = metaLemmas.find(function(metaLemma) {
                    var metavariableNodeMatches = metaLemma.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return metaLemma;
            }
        },
        {
            key: "findConjectureByReference",
            value: function findConjectureByReference(reference) {
                var conjectures = this.getConjectures(), metavariableNode = reference.getMetavariableNode(), conjecture = conjectures.find(function(conjecture) {
                    var metavariableNodeMatches = conjecture.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return conjecture;
            }
        },
        {
            key: "findMetatheoremByReference",
            value: function findMetatheoremByReference(reference) {
                var metatheorems = this.getMetatheorems(), metavariableNode = reference.getMetavariableNode(), metatheorem = metatheorems.find(function(metatheorem) {
                    var metavariableNodeMatches = metatheorem.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return metatheorem;
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var variables = this.getVariables(), variable = variables.find(function(variable) {
                    var nameMatches = variable.matchVariableName(variableName);
                    if (nameMatches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "findJudgementByMetavariableName",
            value: function findJudgementByMetavariableName(metavariableName) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementMatchesMetavariableName = judgement.matchMetavariableName(metavariableName);
                    if (judgementMatchesMetavariableName) {
                        return true;
                    }
                }) || null;
                return judgement;
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var nameMatches = metavariable.matchMetavariableName(metavariableName);
                    if (nameMatches) {
                        return true;
                    }
                }) || null;
                return metavariable;
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
                var variableAdded = false;
                var variableNode = variable.getNode(), variablePresent = this.variables.some(function(variable) {
                    var variableMatchesNode = variable.matchVariableNode(variableNode);
                    if (variableMatchesNode) {
                        return true;
                    }
                });
                if (!variablePresent) {
                    this.variables.push(variable);
                    variableAdded = true;
                }
                return variableAdded;
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
                var metavariableAdded = false;
                var metavariableName = metavariable.getName(), metavariablePresent = this.isMetavariablePresentByMetavariableName(metavariableName);
                if (!metavariablePresent) {
                    this.metavariables.push(metavariable);
                    metavariableAdded = true;
                }
                return metavariableAdded;
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
                this.types - (0, _json.typesFromJSON)(json, fileContext);
                this.rules = (0, _json.rulesFromJSON)(json, fileContext);
                this.axioms = (0, _json.axiomsFromJSON)(json, fileContext);
                this.theorems = (0, _json.theoremsFromJSON)(json, fileContext);
                this.variables = (0, _json.variablesFromJSON)(json, fileContext);
                this.conjectures = (0, _json.conjecturesFromJSON)(json, fileContext);
                this.combinators = (0, _json.combinatorsFromJSON)(json, fileContext);
                this.constructors = (0, _json.constructorsFromJSON)(json, fileContext);
                this.metatheorems = (0, _json.metatheoremsFromJSON)(json, fileContext);
                this.metavariables = (0, _json.metavariablesFromJSON)(json, fileContext);
            }
        },
        {
            key: "reset",
            value: function reset() {
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
                var filePath = this.filePath, typesJSON = (0, _json.typesToTypesJSON)(this.types), rulesJSON = (0, _json.rulesToRulesJSON)(this.rules), axiomsJSON = (0, _json.axiomsToAxiomsJSON)(this.axioms), theoremsJSON = (0, _json.theoremsToTheoremsJSON)(this.theorems), variablesJSON = (0, _json.variablesToVariablesJSON)(this.variables), conjecturesJSON = (0, _json.conjecturesToConjecturesJSON)(this.conjectures), combinatorsJSON = (0, _json.combinatorsToCombinatorsJSON)(this.combinators), constructorsJSON = (0, _json.constructorsToConstructorsJSON)(this.constructors), metatheoremsJSON = (0, _json.metatheoremsToMetatheoremsJSON)(this.metatheorems), metavariablesJSON = (0, _json.metavariablesToMetavariablesJSON)(this.metavariables), types = typesJSON, rules = rulesJSON, axioms = axiomsJSON, theorems = theoremsJSON, variables = variablesJSON, conjectures = conjecturesJSON, combinators = combinatorsJSON, constructors = constructorsJSON, metatheorems = metatheoremsJSON, metavariables = metavariablesJSON, json = {
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
            key: "fromFileAndJSON",
            value: function fromFileAndJSON(file, json, releaseContext) {
                var filePath = file.getPath(), tokens = null, node = null, types = null, rules = null, axioms = null, lemmas = [], theorems = null, variables = null, metaLemmas = [], conjectures = null, combinators = null, constructors = null, metatheorems = null, metavariables = null, fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                fileContext.initialise(json);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IGZyYW1lTWV0YVR5cGUsIHJlZmVyZW5jZU1ldGFUeXBlLCBzdGF0ZW1lbnRNZXRhVHlwZSB9IGZyb20gXCIuLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbm9kZUFzVG9rZW5zLCBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcsIHRva2Vuc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBjb25qZWN0dXJlc0Zyb21KU09OLFxuICAgICAgICAgY29tYmluYXRvcnNGcm9tSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICB0eXBlc1RvVHlwZXNKU09OLFxuICAgICAgICAgcnVsZXNUb1J1bGVzSlNPTixcbiAgICAgICAgIGF4aW9tc1RvQXhpb21zSlNPTixcbiAgICAgICAgIHRoZW9yZW1zVG9UaGVvcmVtc0pTT04sXG4gICAgICAgICB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04sXG4gICAgICAgICBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OLFxuICAgICAgICAgY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTixcbiAgICAgICAgIG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTixcbiAgICAgICAgIG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcHVzaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGZpbmRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmZpbmRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIGdldExleGVyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldFRlcm1UeXBlKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IFtdOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSBbXTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbW1hcy5mb3JFYWNoKChsZW1tYSkgPT4ge1xuICAgICAgY29uc3QgbGVtbWFMYWJlbHMgPSBsZW1tYS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGxlbW1hTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgdGhlb3JlbUxhYmVscyA9IHRoZW9yZW0uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCB0aGVvcmVtTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29uamVjdHVyZXMuZm9yRWFjaCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgY29uc3QgY29uamVjdHVyZUxhYmVscyA9IGNvbmplY3R1cmUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBjb25qZWN0dXJlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubWV0YXRoZW9yZW1zLmZvckVhY2goKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdGhlb3JlbUxhYmVscyA9IG1ldGF0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbWV0YXRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICBwdXNoKHR5cGVzLCB0aGlzLnR5cGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoKTtcblxuICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcHVzaChydWxlcywgdGhpcy5ydWxlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKCk7XG5cbiAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHB1c2goYXhpb21zLCB0aGlzLmF4aW9tcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgcHVzaChsZW1tYXMsIHRoaXMubGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMZW1tYXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExlbW1hcygpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgcmVsZWFzZUNvbnRleHRMZW1tYXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaCh0aGVvcmVtcywgdGhpcy50aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKCk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobWV0YUxlbW1hcywgdGhpcy5tZXRhTGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhTGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldE1ldGFUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSBbXG4gICAgICBmcmFtZU1ldGFUeXBlLFxuICAgICAgcmVmZXJlbmNlTWV0YVR5cGUsXG4gICAgICBzdGF0ZW1lbnRNZXRhVHlwZVxuICAgIF07XG5cbiAgICByZXR1cm4gbWV0YVR5cGVzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcygpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaChtZXRhdGhlb3JlbXMsIHRoaXMubWV0YXRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcygpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBzZXRSZWxlYXNlQ29udGV4dChyZWxlYXNlQ29udGV4dCkge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIHNldEZpbGVQYXRoKGZpbGVQYXRoKSB7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICB9XG5cbiAgc2V0VG9rZW5zKHRva2Vucykge1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICB9XG5cbiAgc2V0Tm9kZShub2RlKSB7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgfVxuXG4gIHNldFR5cGVzKHR5cGVzKSB7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICB9XG5cbiAgc2V0UnVsZXMocnVsZXMpIHtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gIH1cblxuICBzZXRBeGlvbXMoYXhpb21zKSB7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gIH1cblxuICBzZXRMZW1tYXMobGVtbWFzKSB7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gIH1cblxuICBzZXRUaGVvcmVtcyh0aGVvcmVtcykge1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgfVxuXG4gIHNldFZhcmlhYmxlcyh2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgfVxuXG4gIHNldE1ldGFMZW1tYXMobWV0YUxlbW1hcykge1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXM7XG4gIH1cblxuICBzZXRDb25qZWN0dXJlcyhjb25qZWN0dXJlcykge1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgfVxuXG4gIHNldENvbWJpbmF0b3JzKGNvbWJpbmF0b3JzKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgc2V0Q29uc3RydWN0b3JzKGNvbnN0cnVjdG9ycykge1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgc2V0TWV0YXRoZW9yZW1zKG1ldGF0aGVvcmVtcykge1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgc2V0TWV0YXZhcmlhYmxlcyhtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIHR5cGVzLnB1c2gob2JqZWN0VHlwZSk7XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZU5hbWVNYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSB0aGlzLmdldE1ldGFUeXBlcygpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVzLmZpbmQoKG1ldGFUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhVHlwZU5vZGVNYXRjaGVzID0gbWV0YVR5cGUubWF0Y2hNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGFUeXBlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHJ1bGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBheGlvbS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsZW1tYS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGVvcmVtLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5nZXRNZXRhTGVtbWFzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YUxlbW1hID0gbWV0YUxlbW1hcy5maW5kKChtZXRhTGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbWV0YUxlbW1hLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBjb25qZWN0dXJlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbXMuZmluZCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbWV0YXRoZW9yZW0ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1hdGNoZXNNZXRhdmFyaWFibGVOYW1lID0ganVkZ2VtZW50Lm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1hdGNoZXNNZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSBub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2Vucyk7IC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKHRva2VucykgeyByZXR1cm4gdG9rZW5zQXNTdHJpbmcodG9rZW5zKTsgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgdmFyaWFibGVOb2RlID0gdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9IHRoaXMudmFyaWFibGVzLnNvbWUoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZU1hdGNoZXNOb2RlID0gdmFyaWFibGUubWF0Y2hWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTWF0Y2hlc05vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSkge1xuICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGRlYnVnKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5kZWJ1ZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSwgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZXJyb3IobWVzc2FnZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmVycm9yKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzO1xuXG4gICAgdGhpcy50eXBlcyAtIHR5cGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50eXBlcyA9IFtdO1xuICAgIHRoaXMucnVsZXMgPSBbXTtcbiAgICB0aGlzLmF4aW9tcyA9IFtdO1xuICAgIHRoaXMubGVtbWFzID0gW107XG4gICAgdGhpcy50aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMudmFyaWFibGVzID0gW107XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gW107XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IFtdO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBbXTtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IFtdO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gW107XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gW107XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSAgdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICB0eXBlc0pTT04gPSB0eXBlc1RvVHlwZXNKU09OKHRoaXMudHlwZXMpLFxuICAgICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzVG9SdWxlc0pTT04odGhpcy5ydWxlcyksXG4gICAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tc1RvQXhpb21zSlNPTih0aGlzLmF4aW9tcyksXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGlzLnRoZW9yZW1zKSxcbiAgICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHRoaXMudmFyaWFibGVzKSxcbiAgICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKHRoaXMuY29uamVjdHVyZXMpLFxuICAgICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04odGhpcy5jb21iaW5hdG9ycyksXG4gICAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTih0aGlzLmNvbnN0cnVjdG9ycyksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTih0aGlzLm1ldGF0aGVvcmVtcyksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTih0aGlzLm1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIHR5cGVzID0gdHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0pTT04sICAvLy9cbiAgICAgICAgICBheGlvbXMgPSBheGlvbXNKU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgY29uamVjdHVyZXMsXG4gICAgICAgICAgICBjb21iaW5hdG9ycyxcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyxcbiAgICAgICAgICAgIG1ldGF0aGVvcmVtcyxcbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGUoZmlsZSwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IHJlbGVhc2VDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gcmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBmaWxlQ29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlQ29udGVudCwgIC8vLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQW5kSlNPTihmaWxlLCBqc29uLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gbnVsbCxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IG51bGwsXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gbnVsbCxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBudWxsLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIGZpbGVDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwidmFyaWFibGVzIiwibWV0YUxlbW1hcyIsImNvbmplY3R1cmVzIiwiY29tYmluYXRvcnMiLCJjb25zdHJ1Y3RvcnMiLCJtZXRhdGhlb3JlbXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJmaW5kRmlsZSIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0VGVybVR5cGUiLCJ0ZXJtIiwidGVybVR5cGUiLCJnZXRUeXBlIiwiZ2V0UHJvb2ZTdGVwcyIsInByb29mU3RlcHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJlcXVpdmFsZW5jZXMiLCJnZXRKdWRnZW1lbnRzIiwianVkZ2VtZW50cyIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldE1ldGFMZW1tYXMiLCJyZWxlYXNlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRNZXRhVHlwZXMiLCJtZXRhVHlwZXMiLCJmcmFtZU1ldGFUeXBlIiwicmVmZXJlbmNlTWV0YVR5cGUiLCJzdGF0ZW1lbnRNZXRhVHlwZSIsImdldENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwic2V0UmVsZWFzZUNvbnRleHQiLCJzZXRGaWxlUGF0aCIsInNldFRva2VucyIsInNldE5vZGUiLCJzZXRUeXBlcyIsInNldFJ1bGVzIiwic2V0QXhpb21zIiwic2V0TGVtbWFzIiwic2V0VGhlb3JlbXMiLCJzZXRWYXJpYWJsZXMiLCJzZXRNZXRhTGVtbWFzIiwic2V0Q29uamVjdHVyZXMiLCJzZXRDb21iaW5hdG9ycyIsInNldENvbnN0cnVjdG9ycyIsInNldE1ldGF0aGVvcmVtcyIsInNldE1ldGF2YXJpYWJsZXMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm9iamVjdFR5cGUiLCJ0eXBlIiwiZmluZCIsInR5cGVOYW1lTWF0Y2hlcyIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlTmFtZSIsIm1ldGFUeXBlIiwibWV0YVR5cGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YVR5cGVOYW1lIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsImxhYmVsUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWEiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoVmFyaWFibGVOYW1lIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImp1ZGdlbWVudCIsImp1ZGdlbWVudE1hdGNoZXNNZXRhdmFyaWFibGVOYW1lIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsIm5vZGVBc1Rva2VucyIsIm5vZGVzQXNUb2tlbnMiLCJ0b2tlbnNBc1N0cmluZyIsImFkZFR5cGUiLCJhZGRSdWxlIiwiYWRkQXhpb20iLCJhZGRMZW1tYSIsImFkZFRoZW9yZW0iLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlQWRkZWQiLCJ2YXJpYWJsZU5vZGUiLCJzb21lIiwidmFyaWFibGVNYXRjaGVzTm9kZSIsIm1hdGNoVmFyaWFibGVOb2RlIiwiYWRkTWV0YUxlbW1hIiwiYWRkQ29uamVjdHVyZSIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImFkZE1ldGF0aGVvcmVtIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlQWRkZWQiLCJnZXROYW1lIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiaW5pdGlhbGlzZSIsImpzb24iLCJmaWxlQ29udGV4dCIsInR5cGVzRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwiYXhpb21zRnJvbUpTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJtZXRhdmFyaWFibGVzRnJvbUpTT04iLCJyZXNldCIsInRvSlNPTiIsInR5cGVzSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJydWxlc0pTT04iLCJydWxlc1RvUnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJmcm9tRmlsZSIsImZpbGUiLCJsZXhlciIsInBhcnNlciIsImdldFBhdGgiLCJmaWxlQ29udGVudCIsImdldENvbnRlbnQiLCJjb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsImZyb21GaWxlQW5kSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUE4QnFCQTs7O3lCQTVCVTtvQkFFSjt3QkFDeUM7c0JBQ007b0JBb0J6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBTSxBQUFFQyxPQUFTQyx5QkFBYyxDQUF2QkQ7QUFFTyxJQUFBLEFBQU1ELDRCQUFOO2FBQU1BLFlBQ1BHLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRG5LbEI7UUFFakIsSUFBSSxDQUFDRyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENB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