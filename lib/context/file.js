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
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("../axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("../lemma"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("../theorem"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _metaTypes = /*#__PURE__*/ _interop_require_default(require("../metaTypes"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("../metaLemma"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../conjecture"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("../metatheorem"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../metavariable"));
var _array = require("../utilities/array");
var _type = require("../type");
var _string = require("../utilities/string");
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
            value: function getEquivalences(localContext) {
                var equivalences = []; ///
                return equivalences;
            }
        },
        {
            key: "getMetaproofSteps",
            value: function getMetaproofSteps() {
                var metaproofSteps = []; ///
                return metaproofSteps;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                this.rules.forEach(function(rule) {
                    var ruleLabels = rule.getLabels();
                    (0, _array.push)(labels, ruleLabels);
                });
                this.axioms.forEach(function(axiom) {
                    var axiomLabels = axiom.getLabels();
                    (0, _array.push)(labels, axiomLabels);
                });
                this.lemmas.forEach(function(lemma) {
                    var lemmaLabels = lemma.getLabels();
                    (0, _array.push)(labels, lemmaLabels);
                });
                this.theorems.forEach(function(theorem) {
                    var theoremLabels = theorem.getLabels();
                    (0, _array.push)(labels, theoremLabels);
                });
                this.conjectures.forEach(function(conjecture) {
                    var conjectureLabels = conjecture.getLabels();
                    (0, _array.push)(labels, conjectureLabels);
                });
                if (includeRelease) {
                    var releaseContextLabels = this.releaseContext.getLabels();
                    (0, _array.push)(labels, releaseContextLabels);
                }
                return labels;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var types = [];
                (0, _array.push)(types, this.types);
                if (includeRelease) {
                    var releaseContextTypes = this.releaseContext.getTypes();
                    (0, _array.push)(types, releaseContextTypes);
                }
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = [];
                (0, _array.push)(rules, this.rules);
                if (includeRelease) {
                    var releaseContextRules = this.releaseContext.getRules();
                    (0, _array.push)(rules, releaseContextRules);
                }
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = [];
                (0, _array.push)(axioms, this.axioms);
                if (includeRelease) {
                    var releaseContextAxioms = this.releaseContext.getAxioms();
                    (0, _array.push)(axioms, releaseContextAxioms);
                }
                return axioms;
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = [];
                (0, _array.push)(lemmas, this.lemmas);
                if (includeRelease) {
                    var releaseContextLemmas = this.releaseContext.getLemmas();
                    (0, _array.push)(lemmas, releaseContextLemmas);
                }
                return lemmas;
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems = [];
                (0, _array.push)(theorems, this.theorems);
                if (includeRelease) {
                    var releaseContextTheorems = this.releaseContext.getTheorems();
                    (0, _array.push)(theorems, releaseContextTheorems);
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
                (0, _array.push)(metaLemmas, this.metaLemmas);
                if (includeRelease) {
                    var releaseContextMetaLemmas = this.releaseContext.getMetaLemmas();
                    (0, _array.push)(metaLemmas, releaseContextMetaLemmas);
                }
                return metaLemmas;
            }
        },
        {
            key: "getMetaTypes",
            value: function getMetaTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return _metaTypes.default;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures = [];
                (0, _array.push)(conjectures, this.conjectures);
                if (includeRelease) {
                    var releaseContextConjectures = this.releaseContext.getConjectures();
                    (0, _array.push)(conjectures, releaseContextConjectures);
                }
                return conjectures;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = [];
                (0, _array.push)(combinators, this.combinators);
                if (includeRelease) {
                    var releaseContextCombinators = this.releaseContext.getCombinators();
                    (0, _array.push)(combinators, releaseContextCombinators);
                }
                return combinators;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = [];
                (0, _array.push)(constructors, this.constructors);
                if (includeRelease) {
                    var releaseContextConstructors = this.releaseContext.getConstructors();
                    (0, _array.push)(constructors, releaseContextConstructors);
                }
                return constructors;
            }
        },
        {
            key: "getMetatheorems",
            value: function getMetatheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metatheorems = [];
                (0, _array.push)(metatheorems, this.metatheorems);
                if (includeRelease) {
                    var releaseContextMetatheorems = this.releaseContext.getMetatheorems();
                    (0, _array.push)(metatheorems, releaseContextMetatheorems);
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
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types = this.getTypes();
                types.push(_type.objectType);
                var type = types.find(function(type) {
                    var matches = type.matchTypeName(typeName);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "findTypeByTypeNode",
            value: function findTypeByTypeNode(typeNode) {
                var types = this.getTypes();
                types.push(_type.objectType);
                var type = types.find(function(type) {
                    var matches = type.matchTypeNode(typeNode);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "findLabelByLabelNode",
            value: function findLabelByLabelNode(labelNode) {
                var name = labelNode, labels = this.getLabels(), label = labels.find(function(label) {
                    var matches = label.matchNode(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return label;
            }
        },
        {
            key: "findRuleByLabelNode",
            value: function findRuleByLabelNode(labelNode) {
                var rules = this.getRules(), rule = rules.find(function(rule) {
                    var ruleMatchesLabelNode = rule.matchLabelNode(labelNode);
                    if (ruleMatchesLabelNode) {
                        return true;
                    }
                }) || null;
                return rule;
            }
        },
        {
            key: "findAxiomByLabelNode",
            value: function findAxiomByLabelNode(labelNode) {
                var axioms = this.getAxioms(), axiom = axioms.find(function(axiom) {
                    var axiomMatchesLabelNode = axiom.matchLabelNode(labelNode);
                    if (axiomMatchesLabelNode) {
                        return true;
                    }
                }) || null;
                return axiom;
            }
        },
        {
            key: "findLemmaByLabelNode",
            value: function findLemmaByLabelNode(labelNode) {
                var lemmas = this.getLemmas(), lemma = lemmas.find(function(lemma) {
                    var lemmaMatchesLabelNode = lemma.matchLabelNode(labelNode);
                    if (lemmaMatchesLabelNode) {
                        return true;
                    }
                }) || null;
                return lemma;
            }
        },
        {
            key: "findTheoremByLabelNode",
            value: function findTheoremByLabelNode(labelNode) {
                var theorems = this.getTheorems(), theorem = theorems.find(function(theorem) {
                    var theoremMatchesLabelNode = theorem.matchLabelNode(labelNode);
                    if (theoremMatchesLabelNode) {
                        return true;
                    }
                }) || null;
                return theorem;
            }
        },
        {
            key: "findMetaLemmaByLabelNode",
            value: function findMetaLemmaByLabelNode(labelNode) {
                var metaLemmas = this.getMetaLemmas(), metaLemma = metaLemmas.find(function(metaLemma) {
                    var metaLemmaMatchesLabelNode = metaLemma.matchLabelNode(labelNode);
                    if (metaLemmaMatchesLabelNode) {
                        return true;
                    }
                }) || null;
                return metaLemma;
            }
        },
        {
            key: "findVariableByVariableNode",
            value: function findVariableByVariableNode(variableNode) {
                var node = variableNode, variables = this.getVariables(), variable = variables.find(function(variable) {
                    var nodeMatches = variable.matchNode(node);
                    if (nodeMatches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "findMetaTypeByMetaTypeNode",
            value: function findMetaTypeByMetaTypeNode(metaTypeNode) {
                var metaTypes = this.getMetaTypes(), metaType = metaTypes.find(function(metaType) {
                    var matches = metaType.matchMetaTypeNode(metaTypeNode);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metaType;
            }
        },
        {
            key: "findConjectureByLabelNode",
            value: function findConjectureByLabelNode(labelNode) {
                var conjectures = this.getConjectures(), conjecture = conjectures.find(function(conjecture) {
                    var conjectureMatchesLabelNode = conjecture.matchLabelNode(labelNode);
                    if (conjectureMatchesLabelNode) {
                        return true;
                    }
                }) || null;
                return conjecture;
            }
        },
        {
            key: "findMetavariableByMetavariableNode",
            value: function findMetavariableByMetavariableNode(metavariableNode) {
                var node = metavariableNode, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var matches = metavariable.matchNode(node);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "findMetatheoremByLabelNode",
            value: function findMetatheoremByLabelNode(labelNode) {
                var metatheorems = this.getMetatheorems(), metatheorem = metatheorems.find(function(metatheorem) {
                    var metatheoremMatchesLabelNode = metatheorem.matchLabelNode(labelNode);
                    if (metatheoremMatchesLabelNode) {
                        return true;
                    }
                }) || null;
                return metatheorem;
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
            key: "isTypePresentByTypeNode",
            value: function isTypePresentByTypeNode(typeNode) {
                var type = this.findTypeByTypeNode(typeNode), typePresent = type !== null;
                return typePresent;
            }
        },
        {
            key: "isLabelPresentByLabelNode",
            value: function isLabelPresentByLabelNode(labelNode) {
                var label = this.findLabelByLabelNode(labelNode), labelPresent = label !== null;
                return labelPresent;
            }
        },
        {
            key: "isVariablePresentByVariableNode",
            value: function isVariablePresentByVariableNode(variableNode) {
                var variable = this.findVariableByVariableNode(variableNode), variablePresent = variable !== null;
                return variablePresent;
            }
        },
        {
            key: "isMetavariablePresentByMetavariableNode",
            value: function isMetavariablePresentByMetavariableNode(metavariableNode) {
                var metavariable = this.findMetavariableByMetavariableNode(metavariableNode), metavariablePresent = metavariable !== null;
                return metavariablePresent;
            }
        },
        {
            key: "isTermGrounded",
            value: function isTermGrounded(term) {
                var termGrounded = false; ///
                return termGrounded;
            }
        },
        {
            key: "isVariableDefined",
            value: function isVariableDefined(variable) {
                var variableDefined = false; ///
                return variableDefined;
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode) {
                var statementMatches = false;
                return statementMatches;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var string = (0, _string.nodeAsString)(node, this.tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                var string = (0, _string.nodesAsString)(node, this.tokens);
                return string;
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
                var node = variable.getNode(), variablePresent = this.variables.some(function(variable) {
                    var nodeMatches = variable.matchNode(node);
                    if (nodeMatches) {
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
                var node = metavariable.getNode(), metavariablePresent = this.metavariables.some(function(metavariable) {
                    var nodeMatches = metavariable.matchNode(node);
                    if (nodeMatches) {
                        return true;
                    }
                });
                if (!metavariablePresent) {
                    this.metavariables.push(metavariable);
                    metavariableAdded = true;
                }
                return metavariableAdded;
            }
        },
        {
            key: "trace",
            value: function trace(message, node) {
                this.releaseContext.trace(message, node, this.tokens, this.filePath);
            }
        },
        {
            key: "debug",
            value: function debug(message, node) {
                this.releaseContext.debug(message, node, this.tokens, this.filePath);
            }
        },
        {
            key: "info",
            value: function info(message, node) {
                this.releaseContext.info(message, node, this.tokens, this.filePath);
            }
        },
        {
            key: "warning",
            value: function warning(message, node) {
                this.releaseContext.warning(message, node, this.tokens, this.filePath);
            }
        },
        {
            key: "error",
            value: function error(message, node) {
                this.releaseContext.error(message, node, this.tokens, this.filePath);
            }
        },
        {
            key: "fatal",
            value: function fatal(message, node) {
                this.releaseContext.fatal(message, node, this.tokens, this.filePath);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var _this = this;
                var filePath = this.filePath, types = this.types.map(function(type) {
                    var typeJSON = type.toJSON(_this.tokens);
                    type = typeJSON; ///
                    return type;
                }), rules = this.rules.map(function(rule) {
                    var ruleJSON = rule.toJSON(_this.tokens);
                    rule = ruleJSON; ///
                    return rule;
                }), axioms = this.axioms.map(function(axiom) {
                    var axiomJSON = axiom.toJSON(_this.tokens);
                    axiom = axiomJSON; ///
                    return axiom;
                }), lemmas = this.lemmas.map(function(lemma) {
                    var lemmaJSON = lemma.toJSON(_this.tokens);
                    lemma = lemmaJSON; ///
                    return lemma;
                }), theorems = this.theorems.map(function(theorem) {
                    var theoremJSON = theorem.toJSON(_this.tokens);
                    theorem = theoremJSON; ///
                    return theorem;
                }), variables = this.variables.map(function(variable) {
                    var variableJSON = variable.toJSON(_this.tokens);
                    variable = variableJSON; ///
                    return variable;
                }), metaLemmas = this.metaLemmas.map(function(metaLemma) {
                    var metaLemmaJSON = metaLemma.toJSON(_this.tokens);
                    metaLemma = metaLemmaJSON; ///
                    return metaLemma;
                }), conjectures = this.conjectures.map(function(conjecture) {
                    var conjectureJSON = conjecture.toJSON(_this.tokens);
                    conjecture = conjectureJSON; ///
                    return conjecture;
                }), combinators = this.combinators.map(function(combinator) {
                    var combinatorJSON = combinator.toJSON(_this.tokens);
                    combinator = combinatorJSON; ///
                    return combinator;
                }), constructors = this.constructors.map(function(constructor) {
                    var constructorJSON = constructor.toJSON(_this.tokens);
                    constructor = constructorJSON; ///
                    return constructor;
                }), metatheorems = this.metatheorems.map(function(metatheorem) {
                    var metatheoremJSON = metatheorem.toJSON(_this.tokens);
                    metatheorem = metatheoremJSON; ///
                    return metatheorem;
                }), metavariables = this.metavariables.map(function(metavariable) {
                    var metavariableJSON = metavariable.toJSON(_this.tokens);
                    metavariable = metavariableJSON; ///
                    return metavariable;
                }), json = {
                    filePath: filePath,
                    types: types,
                    rules: rules,
                    axioms: axioms,
                    lemmas: lemmas,
                    theorems: theorems,
                    variables: variables,
                    metaLemmas: metaLemmas,
                    conjectures: conjectures,
                    combinators: combinators,
                    constructors: constructors,
                    metatheorems: metatheorems,
                    metavariables: metavariables
                };
                return json;
            }
        },
        {
            key: "initialise",
            value: function initialise(json) {
                var _this = this;
                var types = json.types, rules = json.rules, axioms = json.axioms, lemmas = json.lemmas, theorems = json.theorems, metaLemmas = json.metaLemmas, variables = json.variables, conjectures = json.conjectures, combinators = json.combinators, constructors = json.constructors, metatheorems = json.metatheorems, metavariables = json.metavariables, fileContext = this, typesJSON = types, rulesJSON = rules, axiomsJSON = axioms, lemmasJSON = lemmas, theoremsJSON = theorems, variablesJSON = variables, metaLemmasJSON = metaLemmas || [], conjecturesJSON = conjectures, combinatorsJSON = combinators, constructorsJSON = constructors, metatheoremsJSON = metatheorems || [], metavariablesJSON = metavariables; ///
                typesJSON.forEach(function(typeJSON) {
                    var _$json = typeJSON, type = (0, _type.typeFromJSONAndFileContext)(_$json, fileContext);
                    _this.types.push(type);
                });
                rulesJSON.forEach(function(ruleJSON) {
                    var _$json = ruleJSON, rule = _rule.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.rules.push(rule);
                });
                axiomsJSON.forEach(function(axiomJSON) {
                    var _$json = axiomJSON, axiom = _axiom.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.axioms.push(axiom);
                });
                lemmasJSON.forEach(function(lemmaJSON) {
                    var _$json = lemmaJSON, lemma = _lemma.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.lemmas.push(lemma);
                });
                theoremsJSON.forEach(function(theoremJSON) {
                    var _$json = theoremJSON, theorem = _theorem.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.theorems.push(theorem);
                });
                variablesJSON.forEach(function(variableJSON) {
                    var _$json = variableJSON, variable = _variable.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.variables.push(variable);
                });
                metaLemmasJSON.forEach(function(metaLemmaJSON) {
                    var _$json = metaLemmaJSON, metaLemma = _metaLemma.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.metaLemmas.push(metaLemma);
                });
                conjecturesJSON.forEach(function(conjectureJSON) {
                    var _$json = conjectureJSON, conjecture = _conjecture.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.conjectures.push(conjecture);
                });
                combinatorsJSON.forEach(function(combinatorJSON) {
                    var _$json = combinatorJSON, combinator = _combinator.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.combinators.push(combinator);
                });
                constructorsJSON.forEach(function(constructorJSON) {
                    var _$json = constructorJSON, constructor = _constructor.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.constructors.push(constructor);
                });
                metatheoremsJSON.forEach(function(metatheoremJSON) {
                    var _$json = metatheoremJSON, metatheorem = _metatheorem.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.metatheorems.push(metatheorem);
                });
                metavariablesJSON.forEach(function(metavariableJSON) {
                    var _$json = metavariableJSON, metavariable = _metavariable.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.metavariables.push(metavariable);
                });
            }
        }
    ], [
        {
            key: "fromJSONAndReleaseContext",
            value: function fromJSONAndReleaseContext(json, releaseContext) {
                var filePath = json.filePath, tokens = null, node = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, metaLemmas, variables, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                fileContext.initialise(json);
                return fileContext;
            }
        },
        {
            key: "fromFilePathAndReleaseContext",
            value: function fromFilePathAndReleaseContext(filePath, releaseContext) {
                var file = releaseContext.getFile(filePath), content = file.getContent(), tokens = releaseContext.tokenise(content), node = releaseContext.parse(tokens), types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uL2F4aW9tXCI7XG5pbXBvcnQgTGVtbWEgZnJvbSBcIi4uL2xlbW1hXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi4vdGhlb3JlbVwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IG1ldGFUeXBlcyBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgTWV0YUxlbW1hIGZyb20gXCIuLi9tZXRhTGVtbWFcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuLi9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IE1ldGF0aGVvcmVtIGZyb20gXCIuLi9tZXRhdGhlb3JlbVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi4vbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExleGVyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldFRlcm1UeXBlKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IFtdOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlTGFiZWxzID0gY29uamVjdHVyZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICBwdXNoKHR5cGVzLCB0aGlzLnR5cGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoKTtcblxuICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcHVzaChydWxlcywgdGhpcy5ydWxlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKCk7XG5cbiAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHB1c2goYXhpb21zLCB0aGlzLmF4aW9tcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgcHVzaChsZW1tYXMsIHRoaXMubGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMZW1tYXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExlbW1hcygpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgcmVsZWFzZUNvbnRleHRMZW1tYXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaCh0aGVvcmVtcywgdGhpcy50aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKCk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobWV0YUxlbW1hcywgdGhpcy5tZXRhTGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhTGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldE1ldGFUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gbWV0YVR5cGVzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcygpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaChtZXRhdGhlb3JlbXMsIHRoaXMubWV0YXRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcygpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTGFiZWxCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBuYW1lID0gbGFiZWxOb2RlLCAgLy8vXG4gICAgICAgICAgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxhYmVsLm1hdGNoTm9kZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGZpbmRSdWxlQnlMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVNYXRjaGVzTGFiZWxOb2RlID0gcnVsZS5tYXRjaExhYmVsTm9kZShsYWJlbE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU1hdGNoZXNMYWJlbE5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3QgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21NYXRjaGVzTGFiZWxOb2RlID0gYXhpb20ubWF0Y2hMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tTWF0Y2hlc0xhYmVsTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFNYXRjaGVzTGFiZWxOb2RlID0gbGVtbWEubWF0Y2hMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGxlbW1hTWF0Y2hlc0xhYmVsTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbU1hdGNoZXNMYWJlbE5vZGUgPSB0aGVvcmVtLm1hdGNoTGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGVvcmVtTWF0Y2hlc0xhYmVsTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hQnlMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYXMuZmluZCgobWV0YUxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFNYXRjaGVzTGFiZWxOb2RlID0gbWV0YUxlbW1hLm1hdGNoTGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNYXRjaGVzTGFiZWxOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZU1hdGNoZXNMYWJlbE5vZGUgPSBjb25qZWN0dXJlLm1hdGNoTGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtQnlMYWJlbE5vZGUobGFiZWxOb2RlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtcy5maW5kKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1NYXRjaGVzTGFiZWxOb2RlID0gbWV0YXRoZW9yZW0ubWF0Y2hMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF0aGVvcmVtTWF0Y2hlc0xhYmVsTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlMYWJlbE5vZGUobGFiZWxOb2RlKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtR3JvdW5kZWQgPSBmYWxzZTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZURlZmluZWQgPSBmYWxzZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVmaW5lZDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgbGV0IHZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy52YXJpYWJsZXMuc29tZSgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSkge1xuICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZmF0YWwobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gIHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgdHlwZXMgPSB0aGlzLnR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVzID0gdGhpcy5ydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBydWxlID0gcnVsZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBheGlvbXMgPSB0aGlzLmF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBheGlvbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsZW1tYXMgPSB0aGlzLmxlbW1hcy5tYXAoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYUpTT04gPSBsZW1tYS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBsZW1tYSA9IGxlbW1hSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBsZW1tYTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aGVvcmVtcyA9IHRoaXMudGhlb3JlbXMubWFwKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1KU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHRoZW9yZW07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSB0aGlzLm1ldGFMZW1tYXMubWFwKChtZXRhTGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYUpTT04gPSBtZXRhTGVtbWEudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbWV0YUxlbW1hID0gbWV0YUxlbW1hSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhTGVtbWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uamVjdHVyZXMgPSB0aGlzLmNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjb25qZWN0dXJlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gdGhpcy5jb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB0aGlzLmNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9ySlNPTjsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gdGhpcy5tZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1KU09OID0gbWV0YXRoZW9yZW0udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMubWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIGxlbW1hcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgbWV0YUxlbW1hcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgeyB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgbWV0YUxlbW1hcywgdmFyaWFibGVzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzIH0gPSBqc29uLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdHlwZXNKU09OID0gdHlwZXMsICAvLy9cbiAgICAgICAgICBydWxlc0pTT04gPSBydWxlcywgIC8vL1xuICAgICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXMsICAvLy9cbiAgICAgICAgICBsZW1tYXNKU09OID0gbGVtbWFzLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hc0pTT04gPSBtZXRhTGVtbWFzIHx8IFtdLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMsICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycywgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMsICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zIHx8IFtdLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAgLy8vXG5cbiAgICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICAgIH0pO1xuXG4gICAgcnVsZXNKU09OLmZvckVhY2goKHJ1bGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gICAgfSk7XG5cbiAgICBheGlvbXNKU09OLmZvckVhY2goKGF4aW9tSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gICAgfSk7XG5cbiAgICBsZW1tYXNKU09OLmZvckVhY2goKGxlbW1hSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxlbW1hSlNPTiwgIC8vL1xuICAgICAgICAgICAgbGVtbWEgPSBMZW1tYS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gICAgfSk7XG5cbiAgICB0aGVvcmVtc0pTT04uZm9yRWFjaCgodGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgICB9KTtcblxuICAgIHZhcmlhYmxlc0pTT04uZm9yRWFjaCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICB9KTtcblxuICAgIG1ldGFMZW1tYXNKU09OLmZvckVhY2goKG1ldGFMZW1tYUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhTGVtbWFKU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhTGVtbWEgPSBNZXRhTGVtbWEuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gICAgfSk7XG5cbiAgICBjb25qZWN0dXJlc0pTT04uZm9yRWFjaCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcbiAgICB9KTtcblxuICAgIGNvbWJpbmF0b3JzSlNPTi5mb3JFYWNoKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICAgIH0pO1xuXG4gICAgY29uc3RydWN0b3JzSlNPTi5mb3JFYWNoKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH0pO1xuXG4gICAgbWV0YXRoZW9yZW1zSlNPTi5mb3JFYWNoKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubWV0YXRoZW9yZW1zLnB1c2gobWV0YXRoZW9yZW0pO1xuICAgIH0pO1xuXG4gICAgbWV0YXZhcmlhYmxlc0pTT04uZm9yRWFjaCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZFJlbGVhc2VDb250ZXh0KGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgeyBmaWxlUGF0aCB9ID0ganNvbixcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCBtZXRhTGVtbWFzLCB2YXJpYWJsZXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIGZpbGVDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZSA9IHJlbGVhc2VDb250ZXh0LmdldEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSByZWxlYXNlQ29udGV4dC50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcmVsZWFzZUNvbnRleHQucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCB0aGVvcmVtcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn0iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJsZW1tYXMiLCJ0aGVvcmVtcyIsInZhcmlhYmxlcyIsIm1ldGFMZW1tYXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwibWV0YXRoZW9yZW1zIiwibWV0YXZhcmlhYmxlcyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRUZXJtVHlwZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJnZXRQcm9vZlN0ZXBzIiwicHJvb2ZTdGVwcyIsImdldEVxdWl2YWxlbmNlcyIsImxvY2FsQ29udGV4dCIsImVxdWl2YWxlbmNlcyIsImdldE1ldGFwcm9vZlN0ZXBzIiwibWV0YXByb29mU3RlcHMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlUmVsZWFzZSIsImxhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsInB1c2giLCJheGlvbSIsImF4aW9tTGFiZWxzIiwibGVtbWEiLCJsZW1tYUxhYmVscyIsInRoZW9yZW0iLCJ0aGVvcmVtTGFiZWxzIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVMYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwicmVsZWFzZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRWYXJpYWJsZXMiLCJnZXRNZXRhTGVtbWFzIiwicmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzIiwiZ2V0TWV0YVR5cGVzIiwibWV0YVR5cGVzIiwiZ2V0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyIsImdldE1ldGF2YXJpYWJsZXMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm9iamVjdFR5cGUiLCJ0eXBlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOb2RlIiwidHlwZU5vZGUiLCJtYXRjaFR5cGVOb2RlIiwiZmluZExhYmVsQnlMYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJuYW1lIiwibGFiZWwiLCJtYXRjaE5vZGUiLCJmaW5kUnVsZUJ5TGFiZWxOb2RlIiwicnVsZU1hdGNoZXNMYWJlbE5vZGUiLCJtYXRjaExhYmVsTm9kZSIsImZpbmRBeGlvbUJ5TGFiZWxOb2RlIiwiYXhpb21NYXRjaGVzTGFiZWxOb2RlIiwiZmluZExlbW1hQnlMYWJlbE5vZGUiLCJsZW1tYU1hdGNoZXNMYWJlbE5vZGUiLCJmaW5kVGhlb3JlbUJ5TGFiZWxOb2RlIiwidGhlb3JlbU1hdGNoZXNMYWJlbE5vZGUiLCJmaW5kTWV0YUxlbW1hQnlMYWJlbE5vZGUiLCJtZXRhTGVtbWEiLCJtZXRhTGVtbWFNYXRjaGVzTGFiZWxOb2RlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsIm5vZGVNYXRjaGVzIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZSIsIm1hdGNoTWV0YVR5cGVOb2RlIiwiZmluZENvbmplY3R1cmVCeUxhYmVsTm9kZSIsImNvbmplY3R1cmVNYXRjaGVzTGFiZWxOb2RlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGUiLCJmaW5kTWV0YXRoZW9yZW1CeUxhYmVsTm9kZSIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1NYXRjaGVzTGFiZWxOb2RlIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOb2RlIiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZSIsImxhYmVsUHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNUZXJtR3JvdW5kZWQiLCJ0ZXJtR3JvdW5kZWQiLCJpc1ZhcmlhYmxlRGVmaW5lZCIsInZhcmlhYmxlRGVmaW5lZCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwiYWRkVGhlb3JlbSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGVBZGRlZCIsInNvbWUiLCJhZGRNZXRhTGVtbWEiLCJhZGRDb25qZWN0dXJlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiYWRkTWV0YXRoZW9yZW0iLCJhZGRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVBZGRlZCIsInRyYWNlIiwibWVzc2FnZSIsImRlYnVnIiwiaW5mbyIsIndhcm5pbmciLCJlcnJvciIsImZhdGFsIiwidG9KU09OIiwibWFwIiwidHlwZUpTT04iLCJydWxlSlNPTiIsImF4aW9tSlNPTiIsImxlbW1hSlNPTiIsInRoZW9yZW1KU09OIiwidmFyaWFibGVKU09OIiwibWV0YUxlbW1hSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29tYmluYXRvckpTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdmFyaWFibGVKU09OIiwianNvbiIsImluaXRpYWxpc2UiLCJmaWxlQ29udGV4dCIsInR5cGVzSlNPTiIsInJ1bGVzSlNPTiIsImF4aW9tc0pTT04iLCJsZW1tYXNKU09OIiwidGhlb3JlbXNKU09OIiwidmFyaWFibGVzSlNPTiIsIm1ldGFMZW1tYXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29tYmluYXRvcnNKU09OIiwiY29uc3RydWN0b3JzSlNPTiIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsInR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiUnVsZSIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJBeGlvbSIsIkxlbW1hIiwiVGhlb3JlbSIsIlZhcmlhYmxlIiwiTWV0YUxlbW1hIiwiQ29uamVjdHVyZSIsIkNvbWJpbmF0b3IiLCJDb25zdHJ1Y3RvciIsIk1ldGF0aGVvcmVtIiwiTWV0YXZhcmlhYmxlIiwiZnJvbUpTT05BbmRSZWxlYXNlQ29udGV4dCIsImZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0IiwiZmlsZSIsImdldEZpbGUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBb0JxQkE7OzsyREFsQko7NERBQ0M7NERBQ0E7OERBQ0U7K0RBQ0M7Z0VBQ0M7Z0VBQ0E7aUVBQ0M7aUVBQ0E7a0VBQ0M7a0VBQ0E7bUVBQ0M7cUJBRUo7b0JBQ007c0JBRWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdCLElBQUEsQUFBTUEsNEJBQUQsQUFBTDthQUFNQSxZQUNQQyxjQUFjLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJ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