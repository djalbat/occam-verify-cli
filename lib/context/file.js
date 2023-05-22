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
var _occamgrammarutilities = require("occam-grammar-utilities");
var _type = /*#__PURE__*/ _interop_require_default(require("../type"));
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
            key: "getEqualities",
            value: function getEqualities() {
                var equalities = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
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
                var types = this.getTypes(), type = types.find(function(type) {
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
                var file = releaseContext.getFile(filePath), content = file.getContent(), tokens = releaseContext.tokenise(content), node = releaseContext.parse(tokens);
                if (node !== null) {
                    var nonTerminalNode = node; ///
                    (0, _occamgrammarutilities.rewriteNodes)(nonTerminalNode);
                }
                var types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], conjectures = [], combinators = [], constructors = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, tokens, node, types, rules, axioms, lemmas, variables, theorems, conjectures, combinators, constructors, metavariables);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IHJld3JpdGVOb2RlcyB9IGZyb20gXCJvY2NhbS1ncmFtbWFyLXV0aWxpdGllc1wiO1xuXG5pbXBvcnQgVHlwZSBmcm9tIFwiLi4vdHlwZVwiO1xuaW1wb3J0IFJ1bGUgZnJvbSBcIi4uL3J1bGVcIjtcbmltcG9ydCBBeGlvbSBmcm9tIFwiLi4vYXhpb21cIjtcbmltcG9ydCBMZW1tYSBmcm9tIFwiLi4vbGVtbWFcIjtcbmltcG9ydCBUaGVvcmVtIGZyb20gXCIuLi90aGVvcmVtXCI7XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4uL3ZhcmlhYmxlXCI7XG5pbXBvcnQgQ29uamVjdHVyZSBmcm9tIFwiLi4vY29uamVjdHVyZVwiO1xuaW1wb3J0IENvbWJpbmF0b3IgZnJvbSBcIi4uL2NvbWJpbmF0b3JcIjtcbmltcG9ydCBDb25zdHJ1Y3RvciBmcm9tIFwiLi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCBNZXRhdmFyaWFibGUgZnJvbSBcIi4uL21ldGF2YXJpYWJsZVwiO1xuXG5pbXBvcnQgeyBwdXNoLCBmaWx0ZXIgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBzdGF0ZW1lbnRNZXRhVHlwZSB9IGZyb20gXCIuLi9tZXRhVHlwZVwiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcblxuY29uc3QgbWV0YVR5cGVzID0gW1xuICBzdGF0ZW1lbnRNZXRhVHlwZVxuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3RvcihyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIHZhcmlhYmxlcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCBjb25zdHJ1Y3RvcnMsIG1ldGF2YXJpYWJsZXMpIHtcbiAgICB0aGlzLnJlbGVhc2VDb250ZXh0ID0gcmVsZWFzZUNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBjb21iaW5hdG9ycztcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycztcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UmVsZWFzZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldFRva2VucygpIHtcbiAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRMZXhlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TGV4ZXIoKTsgfVxuXG4gIGdldFBhcnNlcigpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UGFyc2VyKCk7IH1cblxuICBnZXRFcXVhbGl0aWVzKGVxdWFsaXRpZXMgPSBbXSkge1xuICAgIHJldHVybiBlcXVhbGl0aWVzO1xuICB9XG5cbiAgZ2V0UHJvb2ZTdGVwcygpIHtcbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gW107ICAvLy9cblxuICAgIHJldHVybiBwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0TWV0YXByb29mU3RlcHMoKSB7XG4gICAgY29uc3QgbWV0YXByb29mU3RlcHMgPSBbXTsgIC8vL1xuXG4gICAgcmV0dXJuIG1ldGFwcm9vZlN0ZXBzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmxlbW1hcy5mb3JFYWNoKChsZW1tYSkgPT4ge1xuICAgICAgY29uc3QgbGVtbWFMYWJlbHMgPSBsZW1tYS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGxlbW1hTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgY29uc3QgdGhlb3JlbUxhYmVscyA9IHRoZW9yZW0uZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCB0aGVvcmVtTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMuY29uamVjdHVyZXMuZm9yRWFjaCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgY29uc3QgY29uamVjdHVyZUxhYmVscyA9IGNvbmplY3R1cmUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCBjb25qZWN0dXJlTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFR5cGVzKCk7XG5cbiAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHB1c2gocnVsZXMsIHRoaXMucnVsZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRSdWxlcygpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICBwdXNoKGF4aW9tcywgdGhpcy5heGlvbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKCk7XG5cbiAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobGVtbWFzLCB0aGlzLmxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZW1tYXMoKTtcblxuICAgICAgcHVzaChsZW1tYXMsIHJlbGVhc2VDb250ZXh0TGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2godGhlb3JlbXMsIHRoaXMudGhlb3JlbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcygpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0TWV0YVR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiBtZXRhVHlwZXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IFtdO1xuXG4gICAgcHVzaChjb25qZWN0dXJlcywgdGhpcy5jb25qZWN0dXJlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbmplY3R1cmVzKCk7XG5cbiAgICAgIHB1c2goY29uamVjdHVyZXMsIHJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gW107XG5cbiAgICBwdXNoKGNvbWJpbmF0b3JzLCB0aGlzLmNvbWJpbmF0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKTtcblxuICAgICAgcHVzaChjb21iaW5hdG9ycywgcmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IFtdO1xuXG4gICAgcHVzaChjb25zdHJ1Y3RvcnMsIHRoaXMuY29uc3RydWN0b3JzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldENvbnN0cnVjdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbnN0cnVjdG9ycywgcmVsZWFzZUNvbnRleHRDb25zdHJ1Y3RvcnMpO1xuICAgIH1cblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBmaW5kTGFiZWxCeUxhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gbGFiZWxOYW1lLCAgLy8vXG4gICAgICAgICAgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IGxhYmVsLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpLFxuICAgICAgICAgIHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdHlwZS5tYXRjaFR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZU1hdGNoZXNMYWJlbE5hbWUgPSBydWxlLm1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTWF0Y2hlc0xhYmVsTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbU1hdGNoZXNMYWJlbE5hbWUgPSBheGlvbS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21NYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZU5hbWUocmVmZXJlbmNlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZSA9IHJlZmVyZW5jZU5hbWUsICAvLy9cbiAgICAgICAgICBsZW1tYXMgPSB0aGlzLmdldExlbW1hcygpLFxuICAgICAgICAgIGxlbW1hID0gbGVtbWFzLmZpbmQoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYU1hdGNoZXNMYWJlbE5hbWUgPSBsZW1tYS5tYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGVtbWFNYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zID0gdGhpcy5nZXRUaGVvcmVtcygpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtcy5maW5kKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aGVvcmVtTWF0Y2hlc0xhYmVsTmFtZSA9IHRoZW9yZW0ubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHRoZW9yZW1NYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVOYW1lKHZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSB2YXJpYWJsZU5hbWUsICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gdmFyaWFibGUubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YVR5cGVzID0gdGhpcy5nZXRNZXRhVHlwZXMoKSxcbiAgICAgICAgICBtZXRhVHlwZSA9IG1ldGFUeXBlcy5maW5kKChtZXRhVHlwZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2hlcyA9IG1ldGFUeXBlLm1hdGNoTWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YVR5cGU7XG4gIH1cblxuICBmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlTmFtZShyZWZlcmVuY2VOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxOYW1lID0gcmVmZXJlbmNlTmFtZSwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzID0gdGhpcy5nZXRDb25qZWN0dXJlcygpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSBjb25qZWN0dXJlcy5maW5kKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTmFtZSA9IGNvbmplY3R1cmUubWF0Y2hMYWJlbE5hbWUobGFiZWxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGNvbmplY3R1cmVNYXRjaGVzTGFiZWxOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZTtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG5hbWUgPSBtZXRhdmFyaWFibGVOYW1lLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaGVzID0gbWV0YXZhcmlhYmxlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeUxhYmVsTmFtZShsYWJlbE5hbWUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlTmFtZSh2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZU5hbWUodmFyaWFibGVOYW1lKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSkge1xuICAgIGNvbnN0IHN0YXRlbWVudE1hdGNoZXMgPSBmYWxzZTtcblxuICAgIHJldHVybiBzdGF0ZW1lbnRNYXRjaGVzO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICBjb25zdCB2YXJpYWJsZU5hbWUgPSB2YXJpYWJsZS5nZXROYW1lKCk7XG5cbiAgICBmaWx0ZXIodGhpcy52YXJpYWJsZXMsICh2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHZhcmlhYmxlLmdldE5hbWUoKSxcbiAgICAgICAgICAgIG5hbWVWYXJpYWJsZU5hbWUgPSAobmFtZSA9PT0gdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKCFuYW1lVmFyaWFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRDb25qZWN0dXJlKGNvbmplY3R1cmUpIHtcbiAgICB0aGlzLmNvbmplY3R1cmVzLnB1c2goY29uamVjdHVyZSk7XG4gIH1cblxuICBhZGRDb21iaW5hdG9yKGNvbWJpbmF0b3IpIHtcbiAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuZ2V0TmFtZSgpO1xuXG4gICAgZmlsdGVyKHRoaXMubWV0YXZhcmlhYmxlcywgKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IG1ldGF2YXJpYWJsZS5nZXROYW1lKCksXG4gICAgICAgICAgICBuYW1lTWV0YXZhcmlhYmxlTmFtZSA9IChuYW1lID09PSBtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKCFuYW1lTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMubWV0YXZhcmlhYmxlcy5wdXNoKG1ldGF2YXJpYWJsZSk7XG4gIH1cblxuICB0cmFjZShtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQudHJhY2UobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmRlYnVnKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIGluZm8obWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmluZm8obWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgd2FybmluZyhtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQud2FybmluZyhtZXNzYWdlLCBub2RlLCB0aGlzLnRva2VucywgdGhpcy5maWxlUGF0aCk7IH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlKSB7IHRoaXMucmVsZWFzZUNvbnRleHQuZXJyb3IobWVzc2FnZSwgbm9kZSwgdGhpcy50b2tlbnMsIHRoaXMuZmlsZVBhdGgpOyB9XG5cbiAgZmF0YWwobWVzc2FnZSwgbm9kZSkgeyB0aGlzLnJlbGVhc2VDb250ZXh0LmZhdGFsKG1lc3NhZ2UsIG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmZpbGVQYXRoKTsgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9ICB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdGhpcy50eXBlcy5tYXAoKHR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVKU09OID0gdHlwZS50b0pTT04odGhpcy50b2tlbnMpO1xuXG4gICAgICAgICAgICB0eXBlID0gdHlwZUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBydWxlcyA9IHRoaXMucnVsZXMubWFwKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlSlNPTiA9IHJ1bGUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgcnVsZSA9IHJ1bGVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgYXhpb21zID0gdGhpcy5heGlvbXMubWFwKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21KU09OID0gYXhpb20udG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgYXhpb20gPSBheGlvbUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gYXhpb207XG4gICAgICAgICAgfSksXG4gICAgICAgICAgbGVtbWFzID0gdGhpcy5sZW1tYXMubWFwKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFKU09OID0gbGVtbWEudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgbGVtbWEgPSBsZW1tYUpTT047IC8vL1xuXG4gICAgICAgICAgICByZXR1cm4gbGVtbWE7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGlzLnRoZW9yZW1zLm1hcCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUpTT04gPSB0aGVvcmVtLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtSlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB0aGVvcmVtO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IHRoaXMudmFyaWFibGVzLm1hcCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlSlNPTiA9IHZhcmlhYmxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiB2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IHRoaXMuY29uamVjdHVyZXMubWFwKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb25qZWN0dXJlSlNPTiA9IGNvbmplY3R1cmUudG9KU09OKHRoaXMudG9rZW5zKTtcblxuICAgICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVKU09OOyAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29tYmluYXRvcnMgPSB0aGlzLmNvbWJpbmF0b3JzLm1hcCgoY29tYmluYXRvcikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29tYmluYXRvckpTT04gPSBjb21iaW5hdG9yLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGNvbWJpbmF0b3IgPSBjb21iaW5hdG9ySlNPTjsgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjb21iaW5hdG9yO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHRoaXMuY29uc3RydWN0b3JzLm1hcCgoY29uc3RydWN0b3IpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnN0cnVjdG9ySlNPTiA9IGNvbnN0cnVjdG9yLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JKU09OOyAgLy8vXG5cbiAgICAgICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gdGhpcy5tZXRhdmFyaWFibGVzLm1hcCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVKU09OID0gbWV0YXZhcmlhYmxlLnRvSlNPTih0aGlzLnRva2Vucyk7XG5cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZUpTT047ICAvLy9cblxuICAgICAgICAgICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICB0eXBlcyxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgbGVtbWFzLFxuICAgICAgICAgICAgdGhlb3JlbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb25qZWN0dXJlcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIGluaXRpYWxpc2UoanNvbikge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgeyB0eXBlcyxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgbGVtbWFzLFxuICAgICAgICAgICAgdGhlb3JlbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb25qZWN0dXJlcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlcyB9ID0ganNvbixcbiAgICAgICAgICB0eXBlc0pTT04gPSB0eXBlcyxcbiAgICAgICAgICBydWxlc0pTT04gPSBydWxlcyxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zLFxuICAgICAgICAgIGxlbW1hc0pTT04gPSBsZW1tYXMsXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXMsXG4gICAgICAgICAgdmFyaWFibGVzSlNPTiA9IHZhcmlhYmxlcyxcbiAgICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlcyxcbiAgICAgICAgICBjb21iaW5hdG9yc0pTT04gPSBjb21iaW5hdG9ycyxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXNKU09OID0gbWV0YXZhcmlhYmxlcztcblxuICAgIHR5cGVzSlNPTi5mb3JFYWNoKCh0eXBlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHR5cGVKU09OLCAgLy8vXG4gICAgICAgICAgICB0eXBlID0gVHlwZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuICAgIH0pO1xuXG4gICAgcnVsZXNKU09OLmZvckVhY2goKHJ1bGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcnVsZUpTT04sICAvLy9cbiAgICAgICAgICAgIHJ1bGUgPSBSdWxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gICAgfSk7XG5cbiAgICBheGlvbXNKU09OLmZvckVhY2goKGF4aW9tSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGF4aW9tSlNPTiwgIC8vL1xuICAgICAgICAgICAgYXhpb20gPSBBeGlvbS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gICAgfSk7XG5cbiAgICBsZW1tYXNKU09OLmZvckVhY2goKGxlbW1hSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxlbW1hSlNPTiwgIC8vL1xuICAgICAgICAgICAgbGVtbWEgPSBMZW1tYS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5sZW1tYXMucHVzaChsZW1tYSk7XG4gICAgfSk7XG5cbiAgICB0aGVvcmVtc0pTT04uZm9yRWFjaCgodGhlb3JlbUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSB0aGVvcmVtSlNPTiwgIC8vL1xuICAgICAgICAgICAgdGhlb3JlbSA9IFRoZW9yZW0uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgICB9KTtcblxuICAgIHZhcmlhYmxlc0pTT04uZm9yRWFjaCgodmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gdmFyaWFibGVKU09OLCAgLy8vXG4gICAgICAgICAgICB2YXJpYWJsZSA9IFZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgICB9KTtcblxuICAgIGNvbmplY3R1cmVzSlNPTi5mb3JFYWNoKChjb25qZWN0dXJlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbmplY3R1cmVKU09OLCAgLy8vXG4gICAgICAgICAgICBjb25qZWN0dXJlID0gQ29uamVjdHVyZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICAgIH0pO1xuXG4gICAgY29tYmluYXRvcnNKU09OLmZvckVhY2goKGNvbWJpbmF0b3JKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gY29tYmluYXRvckpTT04sICAvLy9cbiAgICAgICAgICAgIGNvbWJpbmF0b3IgPSBDb21iaW5hdG9yLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLmNvbWJpbmF0b3JzLnB1c2goY29tYmluYXRvcik7XG4gICAgfSk7XG5cbiAgICBjb25zdHJ1Y3RvcnNKU09OLmZvckVhY2goKGNvbnN0cnVjdG9ySlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGNvbnN0cnVjdG9ySlNPTiwgIC8vL1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBDb25zdHJ1Y3Rvci5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgdGhpcy5jb25zdHJ1Y3RvcnMucHVzaChjb25zdHJ1Y3Rvcik7XG4gICAgfSk7XG5cbiAgICBtZXRhdmFyaWFibGVzSlNPTi5mb3JFYWNoKChtZXRhdmFyaWFibGVKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbWV0YXZhcmlhYmxlSlNPTiwgIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlID0gTWV0YXZhcmlhYmxlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aEFuZFJlbGVhc2VDb250ZXh0KGZpbGVQYXRoLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGUgPSByZWxlYXNlQ29udGV4dC5nZXRGaWxlKGZpbGVQYXRoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gcmVsZWFzZUNvbnRleHQudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IHJlbGVhc2VDb250ZXh0LnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgLy8vXG5cbiAgICAgIHJld3JpdGVOb2Rlcyhub25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQocmVsZWFzZUNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHZhcmlhYmxlcywgdGhlb3JlbXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgY29uc3RydWN0b3JzLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJGaWxlQ29udGV4dCIsIm1ldGFUeXBlcyIsInN0YXRlbWVudE1ldGFUeXBlIiwicmVsZWFzZUNvbnRleHQiLCJmaWxlUGF0aCIsInRva2VucyIsIm5vZGUiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJjb25qZWN0dXJlcyIsImNvbWJpbmF0b3JzIiwiY29uc3RydWN0b3JzIiwibWV0YXZhcmlhYmxlcyIsImdldFJlbGVhc2VDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRFcXVhbGl0aWVzIiwiZXF1YWxpdGllcyIsImdldFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJtZXRhcHJvb2ZTdGVwcyIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwicHVzaCIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJsZW1tYSIsImxlbW1hTGFiZWxzIiwidGhlb3JlbSIsInRoZW9yZW1MYWJlbHMiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZ2V0VHlwZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVzIiwiZ2V0UnVsZXMiLCJyZWxlYXNlQ29udGV4dFJ1bGVzIiwiZ2V0QXhpb21zIiwicmVsZWFzZUNvbnRleHRBeGlvbXMiLCJnZXRMZW1tYXMiLCJyZWxlYXNlQ29udGV4dExlbW1hcyIsImdldFRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldE1ldGFUeXBlcyIsImdldENvbmplY3R1cmVzIiwicmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwicmVsZWFzZUNvbnRleHRDb21iaW5hdG9ycyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImZpbmRMYWJlbEJ5TGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibmFtZSIsImxhYmVsIiwiZmluZCIsIm1hdGNoZXMiLCJtYXRjaE5hbWUiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsInR5cGUiLCJtYXRjaFR5cGVOYW1lIiwiZmluZFJ1bGVCeVJlZmVyZW5jZU5hbWUiLCJyZWZlcmVuY2VOYW1lIiwicnVsZU1hdGNoZXNMYWJlbE5hbWUiLCJtYXRjaExhYmVsTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlTmFtZSIsImF4aW9tTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlTmFtZSIsImxlbW1hTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2VOYW1lIiwidGhlb3JlbU1hdGNoZXNMYWJlbE5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlTmFtZSIsInZhcmlhYmxlTmFtZSIsInZhcmlhYmxlIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZSIsIm1hdGNoTWV0YVR5cGVOYW1lIiwiZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZU5hbWUiLCJjb25qZWN0dXJlTWF0Y2hlc0xhYmVsTmFtZSIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlIiwiaXNMYWJlbFByZXNlbnRCeUxhYmVsTmFtZSIsImxhYmVsUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVOYW1lIiwidmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlUHJlc2VudCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE1hdGNoZXMiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwiYWRkVHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwiYWRkVGhlb3JlbSIsImFkZFZhcmlhYmxlIiwiZ2V0TmFtZSIsImZpbHRlciIsIm5hbWVWYXJpYWJsZU5hbWUiLCJhZGRDb25qZWN0dXJlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiYWRkTWV0YXZhcmlhYmxlIiwibmFtZU1ldGF2YXJpYWJsZU5hbWUiLCJ0cmFjZSIsIm1lc3NhZ2UiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJmYXRhbCIsInRvSlNPTiIsIm1hcCIsInR5cGVKU09OIiwicnVsZUpTT04iLCJheGlvbUpTT04iLCJsZW1tYUpTT04iLCJ0aGVvcmVtSlNPTiIsInZhcmlhYmxlSlNPTiIsImNvbmplY3R1cmVKU09OIiwiY29tYmluYXRvckpTT04iLCJjb25zdHJ1Y3RvckpTT04iLCJtZXRhdmFyaWFibGVKU09OIiwianNvbiIsImluaXRpYWxpc2UiLCJmaWxlQ29udGV4dCIsInR5cGVzSlNPTiIsInJ1bGVzSlNPTiIsImF4aW9tc0pTT04iLCJsZW1tYXNKU09OIiwidGhlb3JlbXNKU09OIiwidmFyaWFibGVzSlNPTiIsImNvbmplY3R1cmVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbnN0cnVjdG9yc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsIlR5cGUiLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwiUnVsZSIsIkF4aW9tIiwiTGVtbWEiLCJUaGVvcmVtIiwiVmFyaWFibGUiLCJDb25qZWN0dXJlIiwiQ29tYmluYXRvciIsIkNvbnN0cnVjdG9yIiwiTWV0YXZhcmlhYmxlIiwiZnJvbUZpbGVQYXRoQW5kUmVsZWFzZUNvbnRleHQiLCJmaWxlIiwiZ2V0RmlsZSIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5pc2UiLCJwYXJzZSIsIm5vblRlcm1pbmFsTm9kZSIsInJld3JpdGVOb2RlcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUF1QnFCQTs7O3FDQXJCUTsyREFFWjsyREFDQTs0REFDQzs0REFDQTs4REFDRTsrREFDQztpRUFDRTtpRUFDQTtrRUFDQzttRUFDQztxQkFFSTt3QkFDSztzQkFDVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1QyxJQUFNQyxZQUFZO0lBQ2hCQztDQUNEO0FBRWMsSUFBQSxBQUFNRiw0QkFBTjthQUFNQSxZQUNQRyxjQUFjLEVBQUVDLFFBQVEsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsV0FBVyxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NBRHpJaEI7UUFFakIsSUFBSSxDQUFDRyxpQkFBaUJBO1FBQ3RCLElBQUksQ0FBQ0MsV0FBV0E7UUFDaEIsSUFBSSxDQUFDQyxTQUFTQTtRQUNkLElBQUksQ0FBQ0MsT0FBT0E7UUFDWixJQUFJLENBQUNDLFFB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