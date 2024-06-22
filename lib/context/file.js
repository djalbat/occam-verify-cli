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
var _conjecture = /*#__PURE__*/ _interop_require_default(require("../conjecture"));
var _combinator = /*#__PURE__*/ _interop_require_default(require("../combinator"));
var _constructor = /*#__PURE__*/ _interop_require_default(require("../constructor"));
var _metavariable = /*#__PURE__*/ _interop_require_default(require("../metavariable"));
var _array = require("../utilities/array");
var _type = require("../type");
var _metaType = require("../metaType");
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
            key: "getCollections",
            value: function getCollections(localContext) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBSdWxlIGZyb20gXCIuLi9ydWxlXCI7XG5pbXBvcnQgQXhpb20gZnJvbSBcIi4uL2F4aW9tXCI7XG5pbXBvcnQgTGVtbWEgZnJvbSBcIi4uL2xlbW1hXCI7XG5pbXBvcnQgVGhlb3JlbSBmcm9tIFwiLi4vdGhlb3JlbVwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi92YXJpYWJsZVwiO1xuaW1wb3J0IENvbmplY3R1cmUgZnJvbSBcIi4uL2NvbmplY3R1cmVcIjtcbmltcG9ydCBDb21iaW5hdG9yIGZyb20gXCIuLi9jb21iaW5hdG9yXCI7XG5pbXBvcnQgQ29uc3RydWN0b3IgZnJvbSBcIi4uL2NvbnN0cnVjdG9yXCI7XG5pbXBvcnQgTWV0YXZhcmlhYmxlIGZyb20gXCIuLi9tZXRhdmFyaWFibGVcIjtcblxuaW1wb3J0IHsgcHVzaCB9IGZyb20gXCIuLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IG9iamVjdFR5cGUgfSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IHsgc3RhdGVtZW50TWV0YVR5cGUgfSBmcm9tIFwiLi4vbWV0YVR5cGVcIjtcbmltcG9ydCB7IHR5cGVGcm9tSlNPTkFuZEZpbGVDb250ZXh0IH0gZnJvbSBcIi4uL3R5cGVcIjtcbmltcG9ydCB7IG5vZGVBc1N0cmluZywgbm9kZXNBc1N0cmluZyB9IGZyb20gXCIuLi91dGlsaXRpZXMvc3RyaW5nXCI7XG5cbmNvbnN0IG1ldGFUeXBlcyA9IFtcbiAgc3RhdGVtZW50TWV0YVR5cGVcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dCA9IHJlbGVhc2VDb250ZXh0O1xuICAgIHRoaXMuZmlsZVBhdGggPSBmaWxlUGF0aDtcbiAgICB0aGlzLnRva2VucyA9IHRva2VucztcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMudHlwZXMgPSB0eXBlcztcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXM7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXM7XG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXM7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zO1xuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExleGVyKCk7IH1cblxuICBnZXRQYXJzZXIoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFBhcnNlcigpOyB9XG5cbiAgZ2V0VGVybVR5cGUodGVybSkge1xuICAgIGNvbnN0IHRlcm1UeXBlID0gdGVybS5nZXRUeXBlKCk7XG5cbiAgICByZXR1cm4gdGVybVR5cGU7XG4gIH1cblxuICBnZXRQcm9vZlN0ZXBzKCkge1xuICAgIGNvbnN0IHByb29mU3RlcHMgPSBbXTsgIC8vL1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHM7XG4gIH1cblxuICBnZXRDb2xsZWN0aW9ucyhsb2NhbENvbnRleHQpIHtcbiAgICBjb25zdCBjb2xsZWN0aW9ucyA9IFtdOyAvLy9cblxuICAgIHJldHVybiBjb2xsZWN0aW9ucztcbiAgfVxuXG4gIGdldE1ldGFwcm9vZlN0ZXBzKCkge1xuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBtZXRhcHJvb2ZTdGVwcztcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgIGNvbnN0IGxlbW1hTGFiZWxzID0gbGVtbWEuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgY29uamVjdHVyZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBbXTtcblxuICAgIHB1c2godHlwZXMsIHRoaXMudHlwZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUeXBlcygpO1xuXG4gICAgICBwdXNoKHR5cGVzLCByZWxlYXNlQ29udGV4dFR5cGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IFtdXG5cbiAgICBwdXNoKHJ1bGVzLCB0aGlzLnJ1bGVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRSdWxlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UnVsZXMoKTtcblxuICAgICAgcHVzaChydWxlcywgcmVsZWFzZUNvbnRleHRSdWxlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IFtdO1xuXG4gICAgcHVzaChheGlvbXMsIHRoaXMuYXhpb21zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRBeGlvbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldEF4aW9tcygpO1xuXG4gICAgICBwdXNoKGF4aW9tcywgcmVsZWFzZUNvbnRleHRBeGlvbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gW107XG5cbiAgICBwdXNoKGxlbW1hcywgdGhpcy5sZW1tYXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExlbW1hcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobGVtbWFzLCByZWxlYXNlQ29udGV4dExlbW1hcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gW107XG5cbiAgICBwdXNoKHRoZW9yZW1zLCB0aGlzLnRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VGhlb3JlbXMoKTtcblxuICAgICAgcHVzaCh0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRUaGVvcmVtcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldE1ldGFUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gbWV0YVR5cGVzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBbXTtcblxuICAgIHB1c2goY29uamVjdHVyZXMsIHRoaXMuY29uamVjdHVyZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25qZWN0dXJlcygpO1xuXG4gICAgICBwdXNoKGNvbmplY3R1cmVzLCByZWxlYXNlQ29udGV4dENvbmplY3R1cmVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb21iaW5hdG9ycywgdGhpcy5jb21iaW5hdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbWJpbmF0b3JzKCk7XG5cbiAgICAgIHB1c2goY29tYmluYXRvcnMsIHJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZmluZExhYmVsQnlMYWJlbE5hbWUobGFiZWxOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgIC8vL1xuICAgICAgICAgIGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBsYWJlbC5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICB0eXBlcy5wdXNoKG9iamVjdFR5cGUpO1xuXG4gICAgY29uc3QgdHlwZSA9IHR5cGVzLmZpbmQoKHR5cGUpID0+IHtcbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlTWF0Y2hlc0xhYmVsTmFtZSA9IHJ1bGUubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVNYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tTWF0Y2hlc0xhYmVsTmFtZSA9IGF4aW9tLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChheGlvbU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbW1hTWF0Y2hlc0xhYmVsTmFtZSA9IGxlbW1hLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChsZW1tYU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lKHJlZmVyZW5jZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbE5hbWUgPSByZWZlcmVuY2VOYW1lLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW9yZW1NYXRjaGVzTGFiZWxOYW1lID0gdGhlb3JlbS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodGhlb3JlbU1hdGNoZXNMYWJlbE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3Qgbm9kZSA9IHZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBtZXRhVHlwZS5tYXRjaE1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZU1hdGNoZXNMYWJlbE5hbWUgPSBjb25qZWN0dXJlLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBub2RlID0gbWV0YXZhcmlhYmxlTm9kZSwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlMYWJlbE5hbWUobGFiZWxOYW1lKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZU5vZGUodmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlKHZhcmlhYmxlTm9kZSksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUpIHtcbiAgICBjb25zdCBzdGF0ZW1lbnRNYXRjaGVzID0gZmFsc2U7XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TWF0Y2hlcztcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBub2Rlc0FzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2Rlc0FzU3RyaW5nKG5vZGUsIHRoaXMudG9rZW5zKTtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgbGV0IHZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB2YXJpYWJsZS5nZXROb2RlKCksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gdGhpcy52YXJpYWJsZXMuc29tZSgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5vZGVNYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOb2RlKG5vZGUpO1xuXG4gICAgICAgICAgICBpZiAobm9kZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICBpZiAoIXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG5cbiAgICAgIHZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YXJpYWJsZUFkZGVkO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBsZXQgbWV0YXZhcmlhYmxlQWRkZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSBtZXRhdmFyaWFibGUuZ2V0Tm9kZSgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSB0aGlzLm1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBub2RlTWF0Y2hlcyA9IG1ldGF2YXJpYWJsZS5tYXRjaE5vZGUobm9kZSk7XG5cbiAgICAgICAgICAgIGlmIChub2RlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIGlmICghbWV0YXZhcmlhYmxlUHJlc2VudCkge1xuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgICAgbWV0YXZhcmlhYmxlQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVBZGRlZDtcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZGVidWcobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUpIHsgdGhpcy5yZWxlYXNlQ29udGV4dC5lcnJvcihtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBmYXRhbChtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZmF0YWwobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gIHRoaXMuZmlsZVBhdGgsXG4gICAgICAgICAgdHlwZXMgPSB0aGlzLnR5cGVzLm1hcCgodHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZUpTT04gPSB0eXBlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHJ1bGVzID0gdGhpcy5ydWxlcy5tYXAoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVKU09OID0gcnVsZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBydWxlID0gcnVsZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gcnVsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBheGlvbXMgPSB0aGlzLmF4aW9tcy5tYXAoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbUpTT04gPSBheGlvbS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBheGlvbSA9IGF4aW9tSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBheGlvbTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBsZW1tYXMgPSB0aGlzLmxlbW1hcy5tYXAoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYUpTT04gPSBsZW1tYS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBsZW1tYSA9IGxlbW1hSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBsZW1tYTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB0aGVvcmVtcyA9IHRoaXMudGhlb3JlbXMubWFwKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aGVvcmVtSlNPTiA9IHRoZW9yZW0udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1KU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHRoZW9yZW07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdmFyaWFibGVzID0gdGhpcy52YXJpYWJsZXMubWFwKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVKU09OID0gdmFyaWFibGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZUpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gdGhpcy5jb25qZWN0dXJlcy5tYXAoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVKU09OID0gY29uamVjdHVyZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IHRoaXMuY29tYmluYXRvcnMubWFwKChjb21iaW5hdG9yKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb21iaW5hdG9ySlNPTiA9IGNvbWJpbmF0b3IudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgY29tYmluYXRvciA9IGNvbWJpbmF0b3JKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmF0b3I7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gdGhpcy5jb25zdHJ1Y3RvcnMubWFwKChjb25zdHJ1Y3RvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uc3RydWN0b3JKU09OID0gY29uc3RydWN0b3IudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBjb25zdHJ1Y3RvckpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSB0aGlzLm1ldGF2YXJpYWJsZXMubWFwKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUpTT04gPSBtZXRhdmFyaWFibGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlSlNPTjsgIC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICBsZW1tYXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICB7IHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICBsZW1tYXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzIH0gPSBqc29uLFxuICAgICAgICAgIHR5cGVzSlNPTiA9IHR5cGVzLFxuICAgICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzLFxuICAgICAgICAgIGF4aW9tc0pTT04gPSBheGlvbXMsXG4gICAgICAgICAgbGVtbWFzSlNPTiA9IGxlbW1hcyxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtcyxcbiAgICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzLFxuICAgICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzLFxuICAgICAgICAgIGNvbnN0cnVjdG9yc0pTT04gPSBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzO1xuXG4gICAgdHlwZXNKU09OLmZvckVhY2goKHR5cGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdHlwZUpTT04sICAvLy9cbiAgICAgICAgICAgIHR5cGUgPSB0eXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgICB9KTtcblxuICAgIHJ1bGVzSlNPTi5mb3JFYWNoKChydWxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHJ1bGVKU09OLCAgLy8vXG4gICAgICAgICAgICBydWxlID0gUnVsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICAgIH0pO1xuXG4gICAgYXhpb21zSlNPTi5mb3JFYWNoKChheGlvbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBheGlvbUpTT04sICAvLy9cbiAgICAgICAgICAgIGF4aW9tID0gQXhpb20uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICAgIH0pO1xuXG4gICAgbGVtbWFzSlNPTi5mb3JFYWNoKChsZW1tYUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsZW1tYUpTT04sICAvLy9cbiAgICAgICAgICAgIGxlbW1hID0gTGVtbWEuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuICAgIH0pO1xuXG4gICAgdGhlb3JlbXNKU09OLmZvckVhY2goKHRoZW9yZW1KU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdGhlb3JlbUpTT04sICAvLy9cbiAgICAgICAgICAgIHRoZW9yZW0gPSBUaGVvcmVtLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG4gICAgfSk7XG5cbiAgICB2YXJpYWJsZXNKU09OLmZvckVhY2goKHZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgdmFyaWFibGUgPSBWYXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gICAgfSk7XG5cbiAgICBjb25qZWN0dXJlc0pTT04uZm9yRWFjaCgoY29uamVjdHVyZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb25qZWN0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uamVjdHVyZSA9IENvbmplY3R1cmUuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcbiAgICB9KTtcblxuICAgIGNvbWJpbmF0b3JzSlNPTi5mb3JFYWNoKChjb21iaW5hdG9ySlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbWJpbmF0b3JKU09OLCAgLy8vXG4gICAgICAgICAgICBjb21iaW5hdG9yID0gQ29tYmluYXRvci5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICAgIH0pO1xuXG4gICAgY29uc3RydWN0b3JzSlNPTi5mb3JFYWNoKChjb25zdHJ1Y3RvckpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBjb25zdHJ1Y3RvckpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3IuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH0pO1xuXG4gICAgbWV0YXZhcmlhYmxlc0pTT04uZm9yRWFjaCgobWV0YXZhcmlhYmxlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IG1ldGF2YXJpYWJsZUpTT04sICAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IE1ldGF2YXJpYWJsZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dChmaWxlUGF0aCwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlID0gcmVsZWFzZUNvbnRleHQuZ2V0RmlsZShmaWxlUGF0aCksXG4gICAgICAgICAgY29udGVudCA9IGZpbGUuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IHJlbGVhc2VDb250ZXh0LnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSByZWxlYXNlQ29udGV4dC5wYXJzZSh0b2tlbnMpLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHZhcmlhYmxlcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkZpbGVDb250ZXh0IiwibWV0YVR5cGVzIiwic3RhdGVtZW50TWV0YVR5cGUiLCJyZWxlYXNlQ29udGV4dCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsInR5cGVzIiwicnVsZXMiLCJheGlvbXMiLCJsZW1tYXMiLCJ0aGVvcmVtcyIsInZhcmlhYmxlcyIsImNvbmplY3R1cmVzIiwiY29tYmluYXRvcnMiLCJjb25zdHJ1Y3RvcnMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRGaWxlUGF0aCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldFRlcm1UeXBlIiwidGVybSIsInRlcm1UeXBlIiwiZ2V0VHlwZSIsImdldFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzIiwiZ2V0Q29sbGVjdGlvbnMiLCJsb2NhbENvbnRleHQiLCJjb2xsZWN0aW9ucyIsImdldE1ldGFwcm9vZlN0ZXBzIiwibWV0YXByb29mU3RlcHMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlUmVsZWFzZSIsImxhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsInB1c2giLCJheGlvbSIsImF4aW9tTGFiZWxzIiwibGVtbWEiLCJsZW1tYUxhYmVscyIsInRoZW9yZW0iLCJ0aGVvcmVtTGFiZWxzIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVMYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwicmVsZWFzZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRWYXJpYWJsZXMiLCJnZXRNZXRhVHlwZXMiLCJnZXRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJyZWxlYXNlQ29udGV4dENvbnN0cnVjdG9ycyIsImdldE1ldGF2YXJpYWJsZXMiLCJmaW5kTGFiZWxCeUxhYmVsTmFtZSIsImxhYmVsTmFtZSIsIm5hbWUiLCJsYWJlbCIsImZpbmQiLCJtYXRjaGVzIiwibWF0Y2hOYW1lIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJvYmplY3RUeXBlIiwidHlwZSIsIm1hdGNoVHlwZU5hbWUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlTmFtZSIsInJlZmVyZW5jZU5hbWUiLCJydWxlTWF0Y2hlc0xhYmVsTmFtZSIsIm1hdGNoTGFiZWxOYW1lIiwiZmluZEF4aW9tQnlSZWZlcmVuY2VOYW1lIiwiYXhpb21NYXRjaGVzTGFiZWxOYW1lIiwiZmluZExlbW1hQnlSZWZlcmVuY2VOYW1lIiwibGVtbWFNYXRjaGVzTGFiZWxOYW1lIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZU5hbWUiLCJ0aGVvcmVtTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOb2RlIiwidmFyaWFibGVOb2RlIiwidmFyaWFibGUiLCJub2RlTWF0Y2hlcyIsIm1hdGNoTm9kZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJtYXRjaE1ldGFUeXBlTmFtZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2VOYW1lIiwiY29uamVjdHVyZU1hdGNoZXNMYWJlbE5hbWUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZSIsImlzTGFiZWxQcmVzZW50QnlMYWJlbE5hbWUiLCJsYWJlbFByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTm9kZSIsInZhcmlhYmxlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRNYXRjaGVzIiwibm9kZUFzU3RyaW5nIiwic3RyaW5nIiwibm9kZXNBc1N0cmluZyIsImFkZFR5cGUiLCJhZGRSdWxlIiwiYWRkQXhpb20iLCJhZGRMZW1tYSIsImFkZFRoZW9yZW0iLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlQWRkZWQiLCJzb21lIiwiYWRkQ29uamVjdHVyZSIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZUFkZGVkIiwidHJhY2UiLCJtZXNzYWdlIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwiZmF0YWwiLCJ0b0pTT04iLCJtYXAiLCJ0eXBlSlNPTiIsInJ1bGVKU09OIiwiYXhpb21KU09OIiwibGVtbWFKU09OIiwidGhlb3JlbUpTT04iLCJ2YXJpYWJsZUpTT04iLCJjb25qZWN0dXJlSlNPTiIsImNvbWJpbmF0b3JKU09OIiwiY29uc3RydWN0b3JKU09OIiwibWV0YXZhcmlhYmxlSlNPTiIsImpzb24iLCJpbml0aWFsaXNlIiwiZmlsZUNvbnRleHQiLCJ0eXBlc0pTT04iLCJydWxlc0pTT04iLCJheGlvbXNKU09OIiwibGVtbWFzSlNPTiIsInRoZW9yZW1zSlNPTiIsInZhcmlhYmxlc0pTT04iLCJjb25qZWN0dXJlc0pTT04iLCJjb21iaW5hdG9yc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwibWV0YXZhcmlhYmxlc0pTT04iLCJ0eXBlRnJvbUpTT05BbmRGaWxlQ29udGV4dCIsIlJ1bGUiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiQXhpb20iLCJMZW1tYSIsIlRoZW9yZW0iLCJWYXJpYWJsZSIsIkNvbmplY3R1cmUiLCJDb21iaW5hdG9yIiwiQ29uc3RydWN0b3IiLCJNZXRhdmFyaWFibGUiLCJmcm9tRmlsZVBhdGhBbmRSZWxlYXNlQ29udGV4dCIsImZpbGUiLCJnZXRGaWxlIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXNCcUJBOzs7MkRBcEJKOzREQUNDOzREQUNBOzhEQUNFOytEQUNDO2lFQUNFO2lFQUNBO2tFQUNDO21FQUNDO3FCQUVKO29CQUNNO3dCQUNPO3NCQUVVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVDLElBQU1DLFlBQVk7SUFDaEJDLDJCQUFpQjtDQUNsQjtBQUVjLElBQUEsQUFBTUYs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