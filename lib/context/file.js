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
var _metaTypes = /*#__PURE__*/ _interop_require_default(require("../metaTypes"));
var _metaLemma = /*#__PURE__*/ _interop_require_default(require("../metaLemma"));
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../conjecture"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _metatheorem = /*#__PURE__*/ _interop_require_default(require("../metatheorem"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../metavariable"));
var _topLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/topLevel"));
var _array = require("../utilities/array");
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
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, fileContent, filePath, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, constructors, metatheorems, metavariables) {
        _class_call_check(this, FileContext);
        this.releaseContext = releaseContext;
        this.fileContent = fileContent;
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
            key: "getFileContent",
            value: function getFileContent() {
                return this.fileContent;
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
                this.metatheorems.forEach(function(metatheorem) {
                    var metatheoremLabels = metatheorem.getLabels();
                    (0, _array.push)(labels, metatheoremLabels);
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
                    var typeNameMatches = type.matchTypeName(typeName);
                    if (typeNameMatches) {
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
                    var nodeMatches = type.matchTypeNode(typeNode);
                    if (nodeMatches) {
                        return true;
                    }
                }) || null;
                return type;
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
                    var metaTypeNodeMatches = metaType.matchMetaTypeNode(metaTypeNode);
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
            key: "findMetavariableByMetavariableNode",
            value: function findMetavariableByMetavariableNode(metavariableNode) {
                var metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var metavariableNodeMatches = metavariable.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "findMetavariableByMetavariableName",
            value: function findMetavariableByMetavariableName(metavariableName) {
                var name = metavariableName, metavariables = this.getMetavariables(), metavariable = metavariables.find(function(metavariable) {
                    var nameMatches = metavariable.matchName(name);
                    if (nameMatches) {
                        return true;
                    }
                }) || null;
                return metavariable;
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
            key: "isVariablePresentByVariableNode",
            value: function isVariablePresentByVariableNode(variableNode) {
                var variable = this.findVariableByVariableNode(variableNode), variablePresent = variable !== null;
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
            value: function isMetavariablePresentByMetavariableName(metavariablename) {
                var metavariable = this.findMetavariableByMetavariableName(metavariablename), metavariablePresent = metavariable !== null;
                return metavariablePresent;
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
                    var variableMatchesNode = variable.matchNode(node);
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
            key: "verify",
            value: function verify() {
                var verified = false;
                if (this.tokens === null) {
                    var lexer = this.getLexer(), parser = this.getParser(), content = this.fileContent; ///
                    this.tokens = lexer.tokenise(content);
                    this.node = parser.parse(this.tokens);
                }
                if (this.node !== null) {
                    this.reset();
                    var fileContext = this; ///
                    verified = _topLevel.default.verify(this.node, fileContext);
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var filePath = this.filePath, types = this.types.map(function(type) {
                    var typeJSON = type.toJSON();
                    type = typeJSON; ///
                    return type;
                }), rules = this.rules.map(function(rule) {
                    var ruleJSON = rule.toJSON();
                    rule = ruleJSON; ///
                    return rule;
                }), axioms = this.axioms.map(function(axiom) {
                    var axiomJSON = axiom.toJSON();
                    axiom = axiomJSON; ///
                    return axiom;
                }), lemmas = this.lemmas.map(function(lemma) {
                    var lemmaJSON = lemma.toJSON();
                    lemma = lemmaJSON; ///
                    return lemma;
                }), theorems = this.theorems.map(function(theorem) {
                    var theoremJSON = theorem.toJSON();
                    theorem = theoremJSON; ///
                    return theorem;
                }), variables = this.variables.map(function(variable) {
                    var variableJSON = variable.toJSON();
                    variable = variableJSON; ///
                    return variable;
                }), metaLemmas = this.metaLemmas.map(function(metaLemma) {
                    var metaLemmaJSON = metaLemma.toJSON();
                    metaLemma = metaLemmaJSON; ///
                    return metaLemma;
                }), conjectures = this.conjectures.map(function(conjecture) {
                    var conjectureJSON = conjecture.toJSON();
                    conjecture = conjectureJSON; ///
                    return conjecture;
                }), combinators = this.combinators.map(function(combinator) {
                    var combinatorJSON = combinator.toJSON();
                    combinator = combinatorJSON; ///
                    return combinator;
                }), constructors = this.constructors.map(function(constructor) {
                    var constructorJSON = constructor.toJSON();
                    constructor = constructorJSON; ///
                    return constructor;
                }), metatheorems = this.metatheorems.map(function(metatheorem) {
                    var metatheoremJSON = metatheorem.toJSON();
                    metatheorem = metatheoremJSON; ///
                    return metatheorem;
                }), metavariables = this.metavariables.map(function(metavariable) {
                    var metavariableJSON = metavariable.toJSON();
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
            key: "fromJSON",
            value: function fromJSON(json) {
                var _this = this;
                var types = json.types, rules = json.rules, axioms = json.axioms, lemmas = json.lemmas, theorems = json.theorems, metaLemmas = json.metaLemmas, variables = json.variables, conjectures = json.conjectures, combinators = json.combinators, constructors = json.constructors, metatheorems = json.metatheorems, metavariables = json.metavariables, fileContext = this, typesJSON = types, rulesJSON = rules, axiomsJSON = axioms, lemmasJSON = lemmas, theoremsJSON = theorems, variablesJSON = variables, metaLemmasJSON = metaLemmas, conjecturesJSON = conjectures, combinatorsJSON = combinators, constructorsJSON = constructors, metatheoremsJSON = metatheorems, metavariablesJSON = metavariables; ///
                typesJSON.forEach(function(typeJSON) {
                    var _$json = typeJSON, type = _type.default.fromJSON(_$json, fileContext);
                    _this.types.push(type);
                });
                rulesJSON.forEach(function(ruleJSON) {
                    var _$json = ruleJSON, rule = _rule.default.fromJSON(_$json, fileContext);
                    _this.rules.push(rule);
                });
                axiomsJSON.forEach(function(axiomJSON) {
                    var _$json = axiomJSON, axiom = _axiom.default.fromJSON(_$json, fileContext);
                    _this.axioms.push(axiom);
                });
                lemmasJSON.forEach(function(lemmaJSON) {
                    var _$json = lemmaJSON, lemma = _lemma.default.fromJSON(_$json, fileContext);
                    _this.lemmas.push(lemma);
                });
                theoremsJSON.forEach(function(theoremJSON) {
                    var _$json = theoremJSON, theorem = _theorem.default.fromJSON(_$json, fileContext);
                    _this.theorems.push(theorem);
                });
                variablesJSON.forEach(function(variableJSON) {
                    var _$json = variableJSON, variable = _variable.default.fromJSON(_$json, fileContext);
                    _this.variables.push(variable);
                });
                metaLemmasJSON.forEach(function(metaLemmaJSON) {
                    var _$json = metaLemmaJSON, metaLemma = _metaLemma.default.fromJSON(_$json, fileContext);
                    _this.metaLemmas.push(metaLemma);
                });
                conjecturesJSON.forEach(function(conjectureJSON) {
                    var _$json = conjectureJSON, conjecture = _conjecture.default.fromJSON(_$json, fileContext);
                    _this.conjectures.push(conjecture);
                });
                combinatorsJSON.forEach(function(combinatorJSON) {
                    var _$json = combinatorJSON, combinator = _combinator.default.fromJSON(_$json, fileContext);
                    _this.combinators.push(combinator);
                });
                constructorsJSON.forEach(function(constructorJSON) {
                    var _$json = constructorJSON, constructor = _constructor.default.fromJSON(_$json, fileContext);
                    _this.constructors.push(constructor);
                });
                metatheoremsJSON.forEach(function(metatheoremJSON) {
                    var _$json = metatheoremJSON, metatheorem = _metatheorem.default.fromJSON(_$json, fileContext);
                    _this.metatheorems.push(metatheorem);
                });
                metavariablesJSON.forEach(function(metavariableJSON) {
                    var _$json = metavariableJSON, metavariable = _metavariable.default.fromJSON(_$json, fileContext);
                    _this.metavariables.push(metavariable);
                });
            }
        }
    ], [
        {
            key: "fromFileAndReleaseContext",
            value: function fromFileAndReleaseContext(file, releaseContext) {
                var fileContent = file.getContent(), filePath = file.getPath(), tokens = null, node = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, fileContent, filePath, tokens, node, types, rules, axioms, lemmas, metaLemmas, variables, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                return fileContext;
            }
        },
        {
            key: "fromFilePathAndReleaseContext",
            value: function fromFilePathAndReleaseContext(filePath, releaseContext) {
                var file = releaseContext.getFile(filePath), lexer = releaseContext.getLexer(), parser = releaseContext.getParser(), fileContent = file.getContent(), content = fileContent, tokens = lexer.tokenise(content), node = parser.parse(tokens), types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, fileContent, filePath, tokens, node, types, rules, axioms, lemmas, variables, metaLemmas, theorems, conjectures, combinators, constructors, metatheorems, metavariables);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUeXBlIGZyb20gXCIuLi90eXBlXCI7XG5pbXBvcnQgUnVsZSBmcm9tIFwiLi4vcnVsZVwiO1xuaW1wb3J0IEF4aW9tIGZyb20gXCIuLi9heGlvbVwiO1xuaW1wb3J0IExlbW1hIGZyb20gXCIuLi9sZW1tYVwiO1xuaW1wb3J0IFRoZW9yZW0gZnJvbSBcIi4uL3RoZW9yZW1cIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vdmFyaWFibGVcIjtcbmltcG9ydCBtZXRhVHlwZXMgZnJvbSBcIi4uL21ldGFUeXBlc1wiO1xuaW1wb3J0IE1ldGFMZW1tYSBmcm9tIFwiLi4vbWV0YUxlbW1hXCI7XG5pbXBvcnQgQ29uamVjdHVyZSBmcm9tIFwiLi4vY29uamVjdHVyZVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBNZXRhdGhlb3JlbSBmcm9tIFwiLi4vbWV0YXRoZW9yZW1cIjtcbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4uL21ldGF2YXJpYWJsZVwiO1xuaW1wb3J0IHRvcExldmVsVmVyaWZpZXIgZnJvbSBcIi4uL3ZlcmlmaWVyL3RvcExldmVsXCI7XG5cbmltcG9ydCB7IHB1c2ggfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBvYmplY3RUeXBlIH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMuZmlsZUNvbnRlbnQgPSBmaWxlQ29udGVudDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRlbnQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCk7IH1cblxuICBnZXRUZXJtVHlwZSh0ZXJtKSB7XG4gICAgY29uc3QgdGVybVR5cGUgPSB0ZXJtLmdldFR5cGUoKTtcblxuICAgIHJldHVybiB0ZXJtVHlwZTtcbiAgfVxuXG4gIGdldFByb29mU3RlcHMoKSB7XG4gICAgY29uc3QgcHJvb2ZTdGVwcyA9IFtdOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSBbXTsgLy8vXG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gW107XG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGxlbW1hTGFiZWxzID0gbGVtbWEuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgY29uamVjdHVyZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5mb3JFYWNoKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgbWV0YXRoZW9yZW1MYWJlbHMgPSBtZXRhdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIG1ldGF0aGVvcmVtTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFR5cGVzKCk7XG5cbiAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHB1c2gocnVsZXMsIHRoaXMucnVsZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRSdWxlcygpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICBwdXNoKGF4aW9tcywgdGhpcy5heGlvbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKCk7XG5cbiAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobGVtbWFzLCB0aGlzLmxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZW1tYXMoKTtcblxuICAgICAgcHVzaChsZW1tYXMsIHJlbGVhc2VDb250ZXh0TGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2godGhlb3JlbXMsIHRoaXMudGhlb3JlbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcygpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gW107XG5cbiAgICBwdXNoKG1ldGFMZW1tYXMsIHRoaXMubWV0YUxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YUxlbW1hcygpO1xuXG4gICAgICBwdXNoKG1ldGFMZW1tYXMsIHJlbGVhc2VDb250ZXh0TWV0YUxlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRNZXRhVHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIG1ldGFUeXBlcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICBwdXNoKGNvbmplY3R1cmVzLCB0aGlzLmNvbmplY3R1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbnN0cnVjdG9ycywgdGhpcy5jb25zdHJ1Y3RvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCk7XG5cbiAgICAgIHB1c2goY29uc3RydWN0b3JzLCByZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2gobWV0YXRoZW9yZW1zLCB0aGlzLm1ldGF0aGVvcmVtcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhdGhlb3JlbXMoKTtcblxuICAgICAgcHVzaChtZXRhdGhlb3JlbXMsIHJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgdHlwZXMucHVzaChvYmplY3RUeXBlKTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIHR5cGVzLnB1c2gob2JqZWN0VHlwZSk7XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3Qgbm9kZU1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5vZGUodHlwZU5vZGUpO1xuXG4gICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOb2RlKG1ldGFUeXBlTm9kZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFUeXBlTm9kZU1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTm9kZShtZXRhVHlwZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YVR5cGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5vZGUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTm9kZSgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHJ1bGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBheGlvbS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsZW1tYS5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGVvcmVtLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5nZXRNZXRhTGVtbWFzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YUxlbW1hID0gbWV0YUxlbW1hcy5maW5kKChtZXRhTGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbWV0YUxlbW1hLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOb2RlID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5vZGUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBjb25qZWN0dXJlLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTm9kZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOb2RlKCksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbXMuZmluZCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbWV0YXRoZW9yZW0ubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbWV0YXZhcmlhYmxlTmFtZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmFtZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTm9kZSh0eXBlTm9kZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTm9kZSh0eXBlTm9kZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlTm9kZSh2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlbmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVuYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBsZXQgdmFyaWFibGVBZGRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlLmdldE5vZGUoKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSB0aGlzLnZhcmlhYmxlcy5zb21lKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVNYXRjaGVzTm9kZSA9IHZhcmlhYmxlLm1hdGNoTm9kZShub2RlKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlTWF0Y2hlc05vZGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSkge1xuICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLmlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZmF0YWwobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy50eXBlcyA9IFtdO1xuICAgIHRoaXMucnVsZXMgPSBbXTtcbiAgICB0aGlzLmF4aW9tcyA9IFtdO1xuICAgIHRoaXMubGVtbWFzID0gW107XG4gICAgdGhpcy50aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMudmFyaWFibGVzID0gW107XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gW107XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IFtdO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBbXTtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IFtdO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gW107XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gW107XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy50b2tlbnMgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxleGVyID0gdGhpcy5nZXRMZXhlcigpLFxuICAgICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmZpbGVDb250ZW50OyAvLy9cblxuICAgICAgdGhpcy50b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KTtcblxuICAgICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5ub2RlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnJlc2V0KCk7XG5cbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICAgIHZlcmlmaWVkID0gdG9wTGV2ZWxWZXJpZmllci52ZXJpZnkodGhpcy5ub2RlLCBmaWxlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gIHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgdHlwZXMgPSB0aGlzLnR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTigpO1xuXG4gICAgICAgICAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IHRoaXMucnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJ1bGUgPSBydWxlSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBydWxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuYXhpb21zLm1hcCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tSlNPTiA9IGF4aW9tLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBheGlvbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsZW1tYXMgPSB0aGlzLmxlbW1hcy5tYXAoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYUpTT04gPSBsZW1tYS50b0pTT04oKTtcblxuICAgICAgICAgICAgbGVtbWEgPSBsZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbGVtbWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGlzLnRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdGhlb3JlbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLnZhcmlhYmxlcy5tYXAoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUpTT04gPSB2YXJpYWJsZS50b0pTT04oKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSB0aGlzLm1ldGFMZW1tYXMubWFwKChtZXRhTGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYUpTT04gPSBtZXRhTGVtbWEudG9KU09OKCk7XG5cbiAgICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YUxlbW1hO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gdGhpcy5jb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04oKTtcblxuICAgICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSB0aGlzLmNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBjb21iaW5hdG9yID0gY29tYmluYXRvckpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29tYmluYXRvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB0aGlzLmNvbnN0cnVjdG9ycy5tYXAoKGNvbnN0cnVjdG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25zdHJ1Y3RvckpTT04gPSBjb25zdHJ1Y3Rvci50b0pTT04oKTtcblxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IHRoaXMubWV0YXRoZW9yZW1zLm1hcCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtSlNPTiA9IG1ldGF0aGVvcmVtLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5tZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTigpO1xuXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGZpbGVQYXRoLFxuICAgICAgICAgICAgdHlwZXMsXG4gICAgICAgICAgICBydWxlcyxcbiAgICAgICAgICAgIGF4aW9tcyxcbiAgICAgICAgICAgIGxlbW1hcyxcbiAgICAgICAgICAgIHRoZW9yZW1zLFxuICAgICAgICAgICAgdmFyaWFibGVzLFxuICAgICAgICAgICAgbWV0YUxlbW1hcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgZnJvbUpTT04oanNvbikge1xuICAgIGNvbnN0IHsgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIG1ldGFMZW1tYXMsIHZhcmlhYmxlcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcyB9ID0ganNvbixcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHR5cGVzSlNPTiA9IHR5cGVzLCAgLy8vXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXMsICAvLy9cbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zLCAgLy8vXG4gICAgICAgICAgbGVtbWFzSlNPTiA9IGxlbW1hcywgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zSlNPTiA9IHRoZW9yZW1zLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcywgIC8vL1xuICAgICAgICAgIG1ldGFMZW1tYXNKU09OID0gbWV0YUxlbW1hcywgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnMsICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtcywgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlczsgIC8vL1xuXG4gICAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSBUeXBlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICAgIH0pO1xuXG4gICAgcnVsZXNKU09OLmZvckVhY2goKHJ1bGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICAgIH0pO1xuXG4gICAgYXhpb21zSlNPTi5mb3JFYWNoKChheGlvbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmF4aW9tcy5wdXNoKGF4aW9tKTtcbiAgICB9KTtcblxuICAgIGxlbW1hc0pTT04uZm9yRWFjaCgobGVtbWFKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGVtbWFKU09OLCAgLy8vXG4gICAgICAgICAgICBsZW1tYSA9IExlbW1hLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gICAgfSk7XG5cbiAgICB0aGVvcmVtc0pTT04uZm9yRWFjaCgodGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG4gICAgfSk7XG5cbiAgICB2YXJpYWJsZXNKU09OLmZvckVhY2goKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuICAgIH0pO1xuXG4gICAgbWV0YUxlbW1hc0pTT04uZm9yRWFjaCgobWV0YUxlbW1hSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGFMZW1tYUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGFMZW1tYSA9IE1ldGFMZW1tYS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG4gICAgfSk7XG5cbiAgICBjb25qZWN0dXJlc0pTT04uZm9yRWFjaCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gICAgfSk7XG5cbiAgICBjb21iaW5hdG9yc0pTT04uZm9yRWFjaCgoY29tYmluYXRvckpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb21iaW5hdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29tYmluYXRvciA9IENvbWJpbmF0b3IuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gICAgfSk7XG5cbiAgICBjb25zdHJ1Y3RvcnNKU09OLmZvckVhY2goKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH0pO1xuXG4gICAgbWV0YXRoZW9yZW1zSlNPTi5mb3JFYWNoKChtZXRhdGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGF0aGVvcmVtID0gTWV0YXRoZW9yZW0uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgICB9KTtcblxuICAgIG1ldGF2YXJpYWJsZXNKU09OLmZvckVhY2goKG1ldGF2YXJpYWJsZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBtZXRhdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGUgPSBNZXRhdmFyaWFibGUuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlQW5kUmVsZWFzZUNvbnRleHQoZmlsZSwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlQ29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZUNvbnRlbnQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIG1ldGFMZW1tYXMsIHZhcmlhYmxlcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0KGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGUgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBsZXhlciA9IHJlbGVhc2VDb250ZXh0LmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gcmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCksXG4gICAgICAgICAgZmlsZUNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZUNvbnRlbnQsICAvLy9cbiAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gcGFyc2VyLnBhcnNlKHRva2VucyksXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVDb250ZW50LCBmaWxlUGF0aCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIHRoZW9yZW1zLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufSJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsInJlbGVhc2VDb250ZXh0IiwiZmlsZUNvbnRlbnQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJtZXRhTGVtbWFzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsImNvbnN0cnVjdG9ycyIsIm1ldGF0aGVvcmVtcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRSZWxlYXNlQ29udGV4dCIsImdldEZpbGVDb250ZW50IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRUZXJtVHlwZSIsInRlcm0iLCJ0ZXJtVHlwZSIsImdldFR5cGUiLCJnZXRQcm9vZlN0ZXBzIiwicHJvb2ZTdGVwcyIsImdldEVxdWl2YWxlbmNlcyIsImVxdWl2YWxlbmNlcyIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJwdXNoIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldE1ldGFMZW1tYXMiLCJyZWxlYXNlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRNZXRhVHlwZXMiLCJtZXRhVHlwZXMiLCJnZXRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsInJlbGVhc2VDb250ZXh0TWV0YXRoZW9yZW1zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwib2JqZWN0VHlwZSIsInR5cGUiLCJmaW5kIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImZpbmRUeXBlQnlUeXBlTm9kZSIsInR5cGVOb2RlIiwibm9kZU1hdGNoZXMiLCJtYXRjaFR5cGVOb2RlIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUiLCJ2YXJpYWJsZU5vZGUiLCJ2YXJpYWJsZSIsIm1hdGNoTm9kZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOb2RlIiwibWV0YVR5cGVOb2RlIiwibWV0YVR5cGUiLCJtZXRhVHlwZU5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhVHlwZU5vZGUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibGFiZWwiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJnZXRNZXRhdmFyaWFibGVOb2RlIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWEiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJuYW1lIiwibmFtZU1hdGNoZXMiLCJtYXRjaE5hbWUiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5vZGUiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUiLCJsYWJlbFByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVuYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJhZGRUeXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkTGVtbWEiLCJhZGRUaGVvcmVtIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZUFkZGVkIiwic29tZSIsInZhcmlhYmxlTWF0Y2hlc05vZGUiLCJhZGRNZXRhTGVtbWEiLCJhZGRDb25qZWN0dXJlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiYWRkTWV0YXRoZW9yZW0iLCJhZGRNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVBZGRlZCIsImdldE5hbWUiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsInJlc2V0IiwidmVyaWZ5IiwidmVyaWZpZWQiLCJsZXhlciIsInBhcnNlciIsImNvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiZmlsZUNvbnRleHQiLCJ0b3BMZXZlbFZlcmlmaWVyIiwidG9KU09OIiwibWFwIiwidHlwZUpTT04iLCJydWxlSlNPTiIsImF4aW9tSlNPTiIsImxlbW1hSlNPTiIsInRoZW9yZW1KU09OIiwidmFyaWFibGVKU09OIiwibWV0YUxlbW1hSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29tYmluYXRvckpTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJtZXRhdGhlb3JlbUpTT04iLCJtZXRhdmFyaWFibGVKU09OIiwianNvbiIsImZyb21KU09OIiwidHlwZXNKU09OIiwicnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImxlbW1hc0pTT04iLCJ0aGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwibWV0YUxlbW1hc0pTT04iLCJjb25qZWN0dXJlc0pTT04iLCJjb21iaW5hdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwiVHlwZSIsIlJ1bGUiLCJBeGlvbSIsIkxlbW1hIiwiVGhlb3JlbSIsIlZhcmlhYmxlIiwiTWV0YUxlbW1hIiwiQ29uamVjdHVyZSIsIkNvbWJpbmF0b3IiLCJDb25zdHJ1Y3RvciIsIk1ldGF0aGVvcmVtIiwiTWV0YXZhcmlhYmxlIiwiZnJvbUZpbGVBbmRSZWxlYXNlQ29udGV4dCIsImZpbGUiLCJnZXRDb250ZW50IiwiZ2V0UGF0aCIsImZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFxQnFCQTs7OzREQW5CSjsyREFDQTs0REFDQzs0REFDQTs4REFDRTsrREFDQztnRUFDQztnRUFDQTtpRUFDQztpRUFDQTtrRUFDQztrRUFDQTttRUFDQzsrREFDSTtxQkFFUjtzQkFFdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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