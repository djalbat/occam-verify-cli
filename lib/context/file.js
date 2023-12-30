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
var _type = /*#__PURE__*/ _interop_require_wildcard(require("../type"));
var _rule = /*#__PURE__*/ _interop_require_default(require("../rule"));
var _axiom = /*#__PURE__*/ _interop_require_default(require("../axiom"));
var _lemma = /*#__PURE__*/ _interop_require_default(require("../lemma"));
var _theorem = /*#__PURE__*/ _interop_require_default(require("../theorem"));
var _variable = /*#__PURE__*/ _interop_require_default(require("../variable"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../conjecture"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../metavariable"));
var _array = require("../utilities/array");
var _metaType = require("../metaType");
var _string = require("../utilities/string");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
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
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var metaTypes = [
    _metaType.statementMetaType
];
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, conjectures, combinators, constructors, metavariables) {
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
        this.conjectures = conjectures;
        this.combinators = combinators;
        this.constructors = constructors;
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
            key: "getEqualities",
            value: function getEqualities() {
                var equalities = []; ///
                return equalities;
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
            key: "getCollections",
            value: function getCollections() {
                var collections = []; ///
                return collections;
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
            key: "getMetaTypes",
            value: function getMetaTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return metaTypes;
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
            key: "getMetavariables",
            value: function getMetavariables() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                return this.metavariables;
            }
        },
        {
            key: "findLabelByLabelName",
            value: function findLabelByLabelName(labelName) {
                var name = labelName, labels = this.getLabels(), label = labels.find(function(label) {
                    var matches = label.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return label;
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var types = this.getTypes();
                types = _to_consumable_array(types).concat([
                    _type.objectType
                ]);
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
            key: "findRuleByReferenceName",
            value: function findRuleByReferenceName(referenceName) {
                var labelName = referenceName, rules = this.getRules(), rule = rules.find(function(rule) {
                    var ruleMatchesLabelName = rule.matchLabelName(labelName);
                    if (ruleMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return rule;
            }
        },
        {
            key: "findAxiomByReferenceName",
            value: function findAxiomByReferenceName(referenceName) {
                var labelName = referenceName, axioms = this.getAxioms(), axiom = axioms.find(function(axiom) {
                    var axiomMatchesLabelName = axiom.matchLabelName(labelName);
                    if (axiomMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return axiom;
            }
        },
        {
            key: "findLemmaByReferenceName",
            value: function findLemmaByReferenceName(referenceName) {
                var labelName = referenceName, lemmas = this.getLemmas(), lemma = lemmas.find(function(lemma) {
                    var lemmaMatchesLabelName = lemma.matchLabelName(labelName);
                    if (lemmaMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return lemma;
            }
        },
        {
            key: "findTheoremByReferenceName",
            value: function findTheoremByReferenceName(referenceName) {
                var labelName = referenceName, theorems = this.getTheorems(), theorem = theorems.find(function(theorem) {
                    var theoremMatchesLabelName = theorem.matchLabelName(labelName);
                    if (theoremMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return theorem;
            }
        },
        {
            key: "findVariableByVariableName",
            value: function findVariableByVariableName(variableName) {
                var name = variableName, variables = this.getVariables(), variable = variables.find(function(variable) {
                    var matches = variable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return variable;
            }
        },
        {
            key: "findMetaTypeByMetaTypeName",
            value: function findMetaTypeByMetaTypeName(metaTypeName) {
                var metaTypes = this.getMetaTypes(), metaType = metaTypes.find(function(metaType) {
                    var matches = metaType.matchMetaTypeName(metaTypeName);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metaType;
            }
        },
        {
            key: "findConjectureByReferenceName",
            value: function findConjectureByReferenceName(referenceName) {
                var labelName = referenceName, conjectures = this.getConjectures(), conjecture = conjectures.find(function(conjecture) {
                    var conjectureMatchesLabelName = conjecture.matchLabelName(labelName);
                    if (conjectureMatchesLabelName) {
                        return true;
                    }
                }) || null;
                return conjecture;
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var name = metavariableName, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var matches = metavariable.matchName(name);
                    if (matches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "isLabelPresentByLabelName",
            value: function isLabelPresentByLabelName(labelName) {
                var label = this.findLabelByLabelName(labelName), labelPresent = label !== null;
                return labelPresent;
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
                var variableName = variable.getName();
                (0, _array.filter)(this.variables, function(variable) {
                    var name = variable.getName(), nameVariableName = name === variableName;
                    if (!nameVariableName) {
                        return true;
                    }
                });
                this.variables.push(variable);
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
            key: "addMetavariable",
            value: function addMetavariable(metavariable) {
                var metavariableName = metavariable.getName();
                (0, _array.filter)(this.metavariables, function(metavariable) {
                    var name = metavariable.getName(), nameMetavariableName = name === metavariableName;
                    if (!nameMetavariableName) {
                        return true;
                    }
                });
                this.metavariables.push(metavariable);
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
                    conjectures: conjectures,
                    combinators: combinators,
                    constructors: constructors,
                    metavariables: metavariables
                };
                return json;
            }
        },
        {
            key: "initialise",
            value: function initialise(json) {
                var _this = this;
                var fileContext = this, types = json.types, rules = json.rules, axioms = json.axioms, lemmas = json.lemmas, theorems = json.theorems, variables = json.variables, conjectures = json.conjectures, combinators = json.combinators, constructors = json.constructors, metavariables = json.metavariables, typesJSON = types, rulesJSON = rules, axiomsJSON = axioms, lemmasJSON = lemmas, theoremsJSON = theorems, variablesJSON = variables, conjecturesJSON = conjectures, combinatorsJSON = combinators, constructorsJSON = constructors, metavariablesJSON = metavariables;
                typesJSON.forEach(function(typeJSON) {
                    var _$json = typeJSON, type = _type.default.fromJSONAndFileContext(_$json, fileContext);
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
                metavariablesJSON.forEach(function(metavariableJSON) {
                    var _$json = metavariableJSON, metavariable = _metavariable.default.fromJSONAndFileContext(_$json, fileContext);
                    _this.metavariables.push(metavariable);
                });
            }
        }
    ], [
        {
            key: "fromFilePathAndReleaseContext",
            value: function fromFilePathAndReleaseContext(filePath, releaseContext) {
                var file = releaseContext.getFile(filePath), content = file.getContent(), tokens = releaseContext.tokenise(content), node = releaseContext.parse(tokens), types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], conjectures = [], combinators = [], constructors = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, theorems, conjectures, combinators, constructors, metavariables);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUeXBlIGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuLi9heGlvbVwiO1xuaW1wb3J0IExlbW1hIGZyb20gXCIuLi9sZW1tYVwiO1xuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCBDb25qZWN0dXJlIGZyb20gXCIuLi9jb25qZWN0dXJlXCI7XG5pbXBvcnQgQ29tYmluYXRvciBmcm9tIFwiLi4vY29tYmluYXRvclwiO1xuaW1wb3J0IENvbnN0cnVjdG9yIGZyb20gXCIuLi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IE1ldGF2YXJpYWJsZSBmcm9tIFwiLi4vbWV0YXZhcmlhYmxlXCI7XG5cbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgcHVzaCwgZmlsdGVyIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50TWV0YVR5cGUgfSBmcm9tIFwiLi4vbWV0YVR5cGVcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IG1ldGFUeXBlcyA9IFtcbiAgc3RhdGVtZW50TWV0YVR5cGVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExleGVyKCk7IH1cblxuICBnZXRQYXJzZXIoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0RXF1YWxpdGllcygpIHtcbiAgICBjb25zdCBlcXVhbGl0aWVzID0gW107ICAvLy9cblxuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0Q29sbGVjdGlvbnMoKSB7XG4gICAgY29uc3QgY29sbGVjdGlvbnMgPSBbXTsgLy8vXG5cbiAgICByZXR1cm4gY29sbGVjdGlvbnM7XG4gIH1cblxuICBnZXRNZXRhcHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gbWV0YXByb29mU3RlcHM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlTGFiZWxzID0gY29uamVjdHVyZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gW107XG5cbiAgICBwdXNoKHR5cGVzLCB0aGlzLnR5cGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUeXBlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VHlwZXMoKTtcblxuICAgICAgcHVzaCh0eXBlcywgcmVsZWFzZUNvbnRleHRUeXBlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBbXVxuXG4gICAgcHVzaChydWxlcywgdGhpcy5ydWxlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UnVsZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFJ1bGVzKCk7XG5cbiAgICAgIHB1c2gocnVsZXMsIHJlbGVhc2VDb250ZXh0UnVsZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBbXTtcblxuICAgIHB1c2goYXhpb21zLCB0aGlzLmF4aW9tcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0QXhpb21zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRBeGlvbXMoKTtcblxuICAgICAgcHVzaChheGlvbXMsIHJlbGVhc2VDb250ZXh0QXhpb21zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IFtdO1xuXG4gICAgcHVzaChsZW1tYXMsIHRoaXMubGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMZW1tYXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExlbW1hcygpO1xuXG4gICAgICBwdXNoKGxlbW1hcywgcmVsZWFzZUNvbnRleHRMZW1tYXMpO1xuICAgIH1cblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaCh0aGVvcmVtcywgdGhpcy50aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFRoZW9yZW1zKCk7XG5cbiAgICAgIHB1c2godGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0VGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRNZXRhVHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIG1ldGFUeXBlcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICBwdXNoKGNvbmplY3R1cmVzLCB0aGlzLmNvbmplY3R1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbnN0cnVjdG9ycywgdGhpcy5jb25zdHJ1Y3RvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBsYWJlbE5hbWUsICAvLy9cbiAgICAgICAgICBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgdHlwZXMgPSBbIC8vL1xuICAgICAgLi4udHlwZXMsXG4gICAgICBvYmplY3RUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU1hdGNoZXNMYWJlbE5hbWUgPSBydWxlLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbU1hdGNoZXNMYWJlbE5hbWUgPSBheGlvbS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21NYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBsZW1tYXMgPSB0aGlzLmdldExlbW1hcygpLFxuICAgICAgICAgIGxlbW1hID0gbGVtbWFzLmZpbmQoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYU1hdGNoZXNMYWJlbE5hbWUgPSBsZW1tYS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGVtbWFNYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zID0gdGhpcy5nZXRUaGVvcmVtcygpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtcy5maW5kKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aGVvcmVtTWF0Y2hlc0xhYmVsTmFtZSA9IHRoZW9yZW0ubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHRoZW9yZW1NYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gdGhpcy5nZXRNZXRhVHlwZXMoKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlcy5maW5kKChtZXRhVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGFUeXBlLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzID0gdGhpcy5nZXRDb25qZWN0dXJlcygpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlcy5maW5kKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTmFtZSA9IGNvbmplY3R1cmUubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGNvbmplY3R1cmVNYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeUxhYmVsTmFtZShsYWJlbE5hbWUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBmaWx0ZXIodGhpcy52YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG5hbWVWYXJpYWJsZU5hbWUgPSAobmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKCFuYW1lVmFyaWFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgZmlsdGVyKHRoaXMubWV0YXZhcmlhYmxlcywgKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBuYW1lTWV0YXZhcmlhYmxlTmFtZSA9IChuYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKCFuYW1lTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQudHJhY2UobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQud2FybmluZyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZmF0YWwobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmZhdGFsKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9ICB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdGhpcy50eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IHRoaXMucnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgcnVsZSA9IHJ1bGVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5heGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgYXhpb20gPSBheGlvbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gYXhpb207XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGVtbWFzID0gdGhpcy5sZW1tYXMubWFwKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFKU09OID0gbGVtbWEudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbGVtbWEgPSBsZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbGVtbWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGlzLnRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB0aGVvcmVtO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IHRoaXMuY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSB0aGlzLmNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ySlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjb21iaW5hdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHRoaXMuY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5tZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICB0eXBlcyxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgbGVtbWFzLFxuICAgICAgICAgICAgdGhlb3JlbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb25qZWN0dXJlcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgeyB0eXBlcyxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgbGVtbWFzLFxuICAgICAgICAgICAgdGhlb3JlbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb25qZWN0dXJlcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlcyB9ID0ganNvbixcbiAgICAgICAgICB0eXBlc0pTT04gPSB0eXBlcyxcbiAgICAgICAgICBydWxlc0pTT04gPSBydWxlcyxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zLFxuICAgICAgICAgIGxlbW1hc0pTT04gPSBsZW1tYXMsXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMsXG4gICAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcyxcbiAgICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcyxcbiAgICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycyxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcztcblxuICAgIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICAgIH0pO1xuXG4gICAgcnVsZXNKU09OLmZvckVhY2goKHJ1bGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gICAgfSk7XG5cbiAgICBheGlvbXNKU09OLmZvckVhY2goKGF4aW9tSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gICAgfSk7XG5cbiAgICBsZW1tYXNKU09OLmZvckVhY2goKGxlbW1hSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxlbW1hSlNPTiwgIC8vL1xuICAgICAgICAgICAgbGVtbWEgPSBMZW1tYS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gICAgfSk7XG5cbiAgICB0aGVvcmVtc0pTT04uZm9yRWFjaCgodGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgICB9KTtcblxuICAgIHZhcmlhYmxlc0pTT04uZm9yRWFjaCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICB9KTtcblxuICAgIGNvbmplY3R1cmVzSlNPTi5mb3JFYWNoKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICAgIH0pO1xuXG4gICAgY29tYmluYXRvcnNKU09OLmZvckVhY2goKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gICAgfSk7XG5cbiAgICBjb25zdHJ1Y3RvcnNKU09OLmZvckVhY2goKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gICAgfSk7XG5cbiAgICBtZXRhdmFyaWFibGVzSlNPTi5mb3JFYWNoKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0KGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGUgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gcmVsZWFzZUNvbnRleHQudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0LnBhcnNlKHRva2VucyksXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdmFyaWFibGVzLCB0aGVvcmVtcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJtZXRhVHlwZXMiLCJzdGF0ZW1lbnRNZXRhVHlwZSIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwidmFyaWFibGVzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldExleGVyIiwiZ2V0UGFyc2VyIiwiZ2V0RXF1YWxpdGllcyIsImVxdWFsaXRpZXMiLCJnZXRQcm9vZlN0ZXBzIiwicHJvb2ZTdGVwcyIsImdldENvbGxlY3Rpb25zIiwiY29sbGVjdGlvbnMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJwdXNoIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJnZXRUeXBlcyIsInJlbGVhc2VDb250ZXh0VHlwZXMiLCJnZXRSdWxlcyIsInJlbGVhc2VDb250ZXh0UnVsZXMiLCJnZXRBeGlvbXMiLCJyZWxlYXNlQ29udGV4dEF4aW9tcyIsImdldExlbW1hcyIsInJlbGVhc2VDb250ZXh0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJyZWxlYXNlQ29udGV4dFRoZW9yZW1zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0TWV0YVR5cGVzIiwiZ2V0Q29uamVjdHVyZXMiLCJyZWxlYXNlQ29udGV4dENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJyZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzIiwiZ2V0Q29uc3RydWN0b3JzIiwicmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZmluZExhYmVsQnlMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJuYW1lIiwibGFiZWwiLCJmaW5kIiwibWF0Y2hlcyIsIm1hdGNoTmFtZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwib2JqZWN0VHlwZSIsInR5cGUiLCJtYXRjaFR5cGVOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwicnVsZU1hdGNoZXNMYWJlbE5hbWUiLCJtYXRjaExhYmVsTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZSIsImxlbW1hTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lIiwidGhlb3JlbU1hdGNoZXNMYWJlbE5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsIm1hdGNoTWV0YVR5cGVOYW1lIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUiLCJjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlIiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImxhYmVsUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwiYWRkVGhlb3JlbSIsImFkZFZhcmlhYmxlIiwiZ2V0TmFtZSIsImZpbHRlciIsIm5hbWVWYXJpYWJsZU5hbWUiLCJhZGRDb25qZWN0dXJlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiYWRkTWV0YXZhcmlhYmxlIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsInRvSlNPTiIsIm1hcCIsInR5cGVKU09OIiwicnVsZUpTT04iLCJheGlvbUpTT04iLCJsZW1tYUpTT04iLCJ0aGVvcmVtSlNPTiIsInZhcmlhYmxlSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29tYmluYXRvckpTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJtZXRhdmFyaWFibGVKU09OIiwianNvbiIsImluaXRpYWxpc2UiLCJmaWxlQ29udGV4dCIsInR5cGVzSlNPTiIsInJ1bGVzSlNPTiIsImF4aW9tc0pTT04iLCJsZW1tYXNKU09OIiwidGhlb3JlbXNKU09OIiwidmFyaWFibGVzSlNPTiIsImNvbmplY3R1cmVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbnN0cnVjdG9yc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsIlR5cGUiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiUnVsZSIsIkF4aW9tIiwiTGVtbWEiLCJUaGVvcmVtIiwiVmFyaWFibGUiLCJDb25qZWN0dXJlIiwiQ29tYmluYXRvciIsIkNvbnN0cnVjdG9yIiwiTWV0YXZhcmlhYmxlIiwiZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQiLCJmaWxlIiwiZ2V0RmlsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFzQnFCQTs7OzREQXBCSjsyREFDQTs0REFDQzs0REFDQTs4REFDRTsrREFDQztpRUFDRTtpRUFDQTtrRUFDQzttRUFDQztxQkFHSTt3QkFDSztzQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFNQyxZQUFZO0lBQ2hCQywyQkFBaUI7Q0FDbEI7QUFFYyxJQUFBLEFBQU1GLDRCQUFOO2FBQU1BLFlBQ1BHLGNBQWMsRUFBRUMsUUFBUSxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxLQUFLLEVBQUVDLE1BQU0sRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsYUFBYTtnQ0FEekloQjtRQUVqQixJQUFJLENBQUNHLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxR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