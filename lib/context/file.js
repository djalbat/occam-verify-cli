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
            key: "findRuleByReferenceNode",
            value: function findRuleByReferenceNode(referenceNode) {
                var labelNode = referenceNode, rules = this.getRules(), rule = rules.find(function(rule) {
                    var ruleMatchesLabelNode = rule.matchLabelNode(labelNode);
                    if (ruleMatchesLabelNode) {
                        return true;
                    }
                }) || null;
                return rule;
            }
        },
        {
            key: "findAxiomByReferenceNode",
            value: function findAxiomByReferenceNode(referenceNode) {
                var labelNode = referenceNode, axioms = this.getAxioms(), axiom = axioms.find(function(axiom) {
                    var axiomMatchesLabelNode = axiom.matchLabelNode(labelNode);
                    if (axiomMatchesLabelNode) {
                        return true;
                    }
                }) || null;
                return axiom;
            }
        },
        {
            key: "findLemmaByReferenceNode",
            value: function findLemmaByReferenceNode(referenceNode) {
                var labelNode = referenceNode, lemmas = this.getLemmas(), lemma = lemmas.find(function(lemma) {
                    var lemmaMatchesLabelNode = lemma.matchLabelNode(labelNode);
                    if (lemmaMatchesLabelNode) {
                        return true;
                    }
                }) || null;
                return lemma;
            }
        },
        {
            key: "findTheoremByReferenceNode",
            value: function findTheoremByReferenceNode(referenceNode) {
                var labelNode = referenceNode, theorems = this.getTheorems(), theorem = theorems.find(function(theorem) {
                    var theoremMatchesLabelNode = theorem.matchLabelNode(labelNode);
                    if (theoremMatchesLabelNode) {
                        return true;
                    }
                }) || null;
                return theorem;
            }
        },
        {
            key: "findMetaLemmaByReferenceNode",
            value: function findMetaLemmaByReferenceNode(referenceNode) {
                var labelNode = referenceNode, metaLemmas = this.getMetaLemmas(), metaLemma = metaLemmas.find(function(metaLemma) {
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
            key: "findConjectureByReferenceNode",
            value: function findConjectureByReferenceNode(referenceNode) {
                var labelNode = referenceNode, conjectures = this.getConjectures(), conjecture = conjectures.find(function(conjecture) {
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
            key: "findMetatheoremByReferenceNode",
            value: function findMetatheoremByReferenceNode(referenceNode) {
                var labelNode = referenceNode, metatheorems = this.getMetatheorems(), metatheorem = metatheorems.find(function(metatheorem) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uL2F4aW9tXCI7XG5pbXBvcnQgTGVtbWEgZnJvbSBcIi4uL2xlbW1hXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi4vdGhlb3JlbVwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IG1ldGFUeXBlcyBmcm9tIFwiLi4vbWV0YVR5cGVzXCI7XG5pbXBvcnQgTWV0YUxlbW1hIGZyb20gXCIuLi9tZXRhTGVtbWFcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuLi9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IE1ldGF0aGVvcmVtIGZyb20gXCIuLi9tZXRhdGhlb3JlbVwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi4vbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRSZWxlYXNlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dDtcbiAgfVxuXG4gIGdldEZpbGVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVQYXRoO1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExleGVyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldFRlcm1UeXBlKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtVHlwZSA9IHRlcm0uZ2V0VHlwZSgpO1xuXG4gICAgcmV0dXJuIHRlcm1UeXBlO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKGxvY2FsQ29udGV4dCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IFtdOyAvLy9cblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlTGFiZWxzID0gY29uamVjdHVyZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICBwdXNoKHR5cGVzLCB0aGlzLnR5cGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoKTtcblxuICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcHVzaChydWxlcywgdGhpcy5ydWxlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKCk7XG5cbiAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHB1c2goYXhpb21zLCB0aGlzLmF4aW9tcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgcHVzaChsZW1tYXMsIHRoaXMubGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMZW1tYXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExlbW1hcygpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgcmVsZWFzZUNvbnRleHRMZW1tYXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaCh0aGVvcmVtcywgdGhpcy50aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKCk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobWV0YUxlbW1hcywgdGhpcy5tZXRhTGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhTGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldE1ldGFUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gbWV0YVR5cGVzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcygpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaChtZXRhdGhlb3JlbXMsIHRoaXMubWV0YXRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcygpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kTGFiZWxCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBuYW1lID0gbGFiZWxOb2RlLCAgLy8vXG4gICAgICAgICAgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxhYmVsLm1hdGNoTm9kZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbE5vZGUgPSByZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVNYXRjaGVzTGFiZWxOb2RlID0gcnVsZS5tYXRjaExhYmVsTm9kZShsYWJlbE5vZGUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZU1hdGNoZXNMYWJlbE5vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbE5vZGUgPSByZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21NYXRjaGVzTGFiZWxOb2RlID0gYXhpb20ubWF0Y2hMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tTWF0Y2hlc0xhYmVsTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbE5vZGUgPSByZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgICAgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFNYXRjaGVzTGFiZWxOb2RlID0gbGVtbWEubWF0Y2hMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgICAgICAgICAgaWYgKGxlbW1hTWF0Y2hlc0xhYmVsTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IGxhYmVsTm9kZSA9IHJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgICB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbU1hdGNoZXNMYWJlbE5vZGUgPSB0aGVvcmVtLm1hdGNoTGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGVvcmVtTWF0Y2hlc0xhYmVsTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbE5vZGUgPSByZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYXMuZmluZCgobWV0YUxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFNYXRjaGVzTGFiZWxOb2RlID0gbWV0YUxlbW1hLm1hdGNoTGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhTGVtbWFNYXRjaGVzTGFiZWxOb2RlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5vZGUocmVmZXJlbmNlTm9kZSkge1xuICAgIGNvbnN0IGxhYmVsTm9kZSA9IHJlZmVyZW5jZU5vZGUsICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZU1hdGNoZXNMYWJlbE5vZGUgPSBjb25qZWN0dXJlLm1hdGNoTGFiZWxOb2RlKGxhYmVsTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2VOb2RlKHJlZmVyZW5jZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbE5vZGUgPSByZWZlcmVuY2VOb2RlLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtcy5maW5kKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1NYXRjaGVzTGFiZWxOb2RlID0gbWV0YXRoZW9yZW0ubWF0Y2hMYWJlbE5vZGUobGFiZWxOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF0aGVvcmVtTWF0Y2hlc0xhYmVsTm9kZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5vZGUodHlwZU5vZGUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5vZGUodHlwZU5vZGUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTm9kZShsYWJlbE5vZGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlMYWJlbE5vZGUobGFiZWxOb2RlKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzVGVybUdyb3VuZGVkKHRlcm0pIHtcbiAgICBjb25zdCB0ZXJtR3JvdW5kZWQgPSBmYWxzZTsgLy8vXG5cbiAgICByZXR1cm4gdGVybUdyb3VuZGVkO1xuICB9XG5cbiAgaXNWYXJpYWJsZURlZmluZWQodmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZURlZmluZWQgPSBmYWxzZTsgIC8vL1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlRGVmaW5lZDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgbGV0IHZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy52YXJpYWJsZXMuc29tZSgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSkge1xuICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZmF0YWwobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gIHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgdHlwZXMgPSB0aGlzLnR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVzID0gdGhpcy5ydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBydWxlID0gcnVsZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBheGlvbXMgPSB0aGlzLmF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBheGlvbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsZW1tYXMgPSB0aGlzLmxlbW1hcy5tYXAoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYUpTT04gPSBsZW1tYS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBsZW1tYSA9IGxlbW1hSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBsZW1tYTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aGVvcmVtcyA9IHRoaXMudGhlb3JlbXMubWFwKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1KU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHRoZW9yZW07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSB0aGlzLm1ldGFMZW1tYXMubWFwKChtZXRhTGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYUpTT04gPSBtZXRhTGVtbWEudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbWV0YUxlbW1hID0gbWV0YUxlbW1hSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhTGVtbWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uamVjdHVyZXMgPSB0aGlzLmNvbmplY3R1cmVzLm1hcCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZUpTT04gPSBjb25qZWN0dXJlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjb25qZWN0dXJlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gdGhpcy5jb21iaW5hdG9ycy5tYXAoKGNvbWJpbmF0b3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmF0b3JKU09OID0gY29tYmluYXRvci50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB0aGlzLmNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IGNvbnN0cnVjdG9ySlNPTjsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gdGhpcy5tZXRhdGhlb3JlbXMubWFwKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1KU09OID0gbWV0YXRoZW9yZW0udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMubWV0YXZhcmlhYmxlcy5tYXAoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlSlNPTiA9IG1ldGF2YXJpYWJsZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIGxlbW1hcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgbWV0YUxlbW1hcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgeyB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgbWV0YUxlbW1hcywgdmFyaWFibGVzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzIH0gPSBqc29uLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgdHlwZXNKU09OID0gdHlwZXMsICAvLy9cbiAgICAgICAgICBydWxlc0pTT04gPSBydWxlcywgIC8vL1xuICAgICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXMsICAvLy9cbiAgICAgICAgICBsZW1tYXNKU09OID0gbGVtbWFzLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzLCAgLy8vXG4gICAgICAgICAgbWV0YUxlbW1hc0pTT04gPSBtZXRhTGVtbWFzIHx8IFtdLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXNKU09OID0gY29uamVjdHVyZXMsICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycywgIC8vL1xuICAgICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMsICAvLy9cbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zIHx8IFtdLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzOyAgLy8vXG5cbiAgICB0eXBlc0pTT04uZm9yRWFjaCgodHlwZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0eXBlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdHlwZSA9IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICAgIH0pO1xuXG4gICAgcnVsZXNKU09OLmZvckVhY2goKHJ1bGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gICAgfSk7XG5cbiAgICBheGlvbXNKU09OLmZvckVhY2goKGF4aW9tSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gICAgfSk7XG5cbiAgICBsZW1tYXNKU09OLmZvckVhY2goKGxlbW1hSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxlbW1hSlNPTiwgIC8vL1xuICAgICAgICAgICAgbGVtbWEgPSBMZW1tYS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gICAgfSk7XG5cbiAgICB0aGVvcmVtc0pTT04uZm9yRWFjaCgodGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgICB9KTtcblxuICAgIHZhcmlhYmxlc0pTT04uZm9yRWFjaCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICB9KTtcblxuICAgIG1ldGFMZW1tYXNKU09OLmZvckVhY2goKG1ldGFMZW1tYUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhTGVtbWFKU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhTGVtbWEgPSBNZXRhTGVtbWEuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gICAgfSk7XG5cbiAgICBjb25qZWN0dXJlc0pTT04uZm9yRWFjaCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcbiAgICB9KTtcblxuICAgIGNvbWJpbmF0b3JzSlNPTi5mb3JFYWNoKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICAgIH0pO1xuXG4gICAgY29uc3RydWN0b3JzSlNPTi5mb3JFYWNoKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH0pO1xuXG4gICAgbWV0YXRoZW9yZW1zSlNPTi5mb3JFYWNoKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubWV0YXRoZW9yZW1zLnB1c2gobWV0YXRoZW9yZW0pO1xuICAgIH0pO1xuXG4gICAgbWV0YXZhcmlhYmxlc0pTT04uZm9yRWFjaCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZFJlbGVhc2VDb250ZXh0KGpzb24sIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgeyBmaWxlUGF0aCB9ID0ganNvbixcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCBtZXRhTGVtbWFzLCB2YXJpYWJsZXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIGZpbGVDb250ZXh0LmluaXRpYWxpc2UoanNvbik7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQoZmlsZVBhdGgsIHJlbGVhc2VDb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZSA9IHJlbGVhc2VDb250ZXh0LmdldEZpbGUoZmlsZVBhdGgpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSByZWxlYXNlQ29udGV4dC50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcmVsZWFzZUNvbnRleHQucGFyc2UodG9rZW5zKSxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCB0aGVvcmVtcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cbn0iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJsZW1tYXMiLCJ0aGVvcmVtcyIsInZhcmlhYmxlcyIsIm1ldGFMZW1tYXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwibWV0YXRoZW9yZW1zIiwibWV0YXZhcmlhYmxlcyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRUZXJtVHlwZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJnZXRQcm9vZlN0ZXBzIiwicHJvb2ZTdGVwcyIsImdldEVxdWl2YWxlbmNlcyIsImxvY2FsQ29udGV4dCIsImVxdWl2YWxlbmNlcyIsImdldE1ldGFwcm9vZlN0ZXBzIiwibWV0YXByb29mU3RlcHMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlUmVsZWFzZSIsImxhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsInB1c2giLCJheGlvbSIsImF4aW9tTGFiZWxzIiwibGVtbWEiLCJsZW1tYUxhYmVscyIsInRoZW9yZW0iLCJ0aGVvcmVtTGFiZWxzIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVMYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwicmVsZWFzZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRWYXJpYWJsZXMiLCJnZXRNZXRhTGVtbWFzIiwicmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzIiwiZ2V0TWV0YVR5cGVzIiwibWV0YVR5cGVzIiwiZ2V0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dE1ldGF0aGVvcmVtcyIsImdldE1ldGF2YXJpYWJsZXMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsIm9iamVjdFR5cGUiLCJ0eXBlIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaFR5cGVOYW1lIiwiZmluZFR5cGVCeVR5cGVOb2RlIiwidHlwZU5vZGUiLCJtYXRjaFR5cGVOb2RlIiwiZmluZExhYmVsQnlMYWJlbE5vZGUiLCJsYWJlbE5vZGUiLCJuYW1lIiwibGFiZWwiLCJtYXRjaE5vZGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTm9kZSIsInJlZmVyZW5jZU5vZGUiLCJydWxlTWF0Y2hlc0xhYmVsTm9kZSIsIm1hdGNoTGFiZWxOb2RlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2VOb2RlIiwiYXhpb21NYXRjaGVzTGFiZWxOb2RlIiwiZmluZExlbW1hQnlSZWZlcmVuY2VOb2RlIiwibGVtbWFNYXRjaGVzTGFiZWxOb2RlIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5vZGUiLCJ0aGVvcmVtTWF0Y2hlc0xhYmVsTm9kZSIsImZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZU5vZGUiLCJtZXRhTGVtbWEiLCJtZXRhTGVtbWFNYXRjaGVzTGFiZWxOb2RlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsIm5vZGVNYXRjaGVzIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5vZGUiLCJtZXRhVHlwZU5vZGUiLCJtZXRhVHlwZSIsIm1hdGNoTWV0YVR5cGVOb2RlIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5vZGUiLCJjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTm9kZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2VOb2RlIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbU1hdGNoZXNMYWJlbE5vZGUiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5vZGUiLCJpc0xhYmVsUHJlc2VudEJ5TGFiZWxOb2RlIiwibGFiZWxQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc1Rlcm1Hcm91bmRlZCIsInRlcm1Hcm91bmRlZCIsImlzVmFyaWFibGVEZWZpbmVkIiwidmFyaWFibGVEZWZpbmVkIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50TWF0Y2hlcyIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJhZGRUeXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkTGVtbWEiLCJhZGRUaGVvcmVtIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwic29tZSIsImFkZE1ldGFMZW1tYSIsImFkZENvbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJhZGRNZXRhdGhlb3JlbSIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJ0b0pTT04iLCJtYXAiLCJ0eXBlSlNPTiIsInJ1bGVKU09OIiwiYXhpb21KU09OIiwibGVtbWFKU09OIiwidGhlb3JlbUpTT04iLCJ2YXJpYWJsZUpTT04iLCJtZXRhTGVtbWFKU09OIiwiY29uamVjdHVyZUpTT04iLCJjb21iaW5hdG9ySlNPTiIsImNvbnN0cnVjdG9ySlNPTiIsIm1ldGF0aGVvcmVtSlNPTiIsIm1ldGF2YXJpYWJsZUpTT04iLCJqc29uIiwiaW5pdGlhbGlzZSIsImZpbGVDb250ZXh0IiwidHlwZXNKU09OIiwicnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImxlbW1hc0pTT04iLCJ0aGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwibWV0YUxlbW1hc0pTT04iLCJjb25qZWN0dXJlc0pTT04iLCJjb21iaW5hdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwidHlwZUZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJSdWxlIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIkF4aW9tIiwiTGVtbWEiLCJUaGVvcmVtIiwiVmFyaWFibGUiLCJNZXRhTGVtbWEiLCJDb25qZWN0dXJlIiwiQ29tYmluYXRvciIsIkNvbnN0cnVjdG9yIiwiTWV0YXRoZW9yZW0iLCJNZXRhdmFyaWFibGUiLCJmcm9tSlNPTkFuZFJlbGVhc2VDb250ZXh0IiwiZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQiLCJmaWxlIiwiZ2V0RmlsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFvQnFCQTs7OzJEQWxCSjs0REFDQzs0REFDQTs4REFDRTsrREFDQztnRUFDQztnRUFDQTtpRUFDQztpRUFDQTtrRUFDQztrRUFDQTttRUFDQztxQkFFSjtvQkFDTTtzQkFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsSUFBQSxBQUFNQSw0QkFBRCxBQUFMO2FBQU1BLFlBQ1BDLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsVUFBVSxFQUFFQyxXQUFXLEVBQUVDLFdBQVcsRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRG5LaEI7UUFFakIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBO1FBQ3RCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTLEdBQUdBO1FBQ2pCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxXQUFXLEdBQUdB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