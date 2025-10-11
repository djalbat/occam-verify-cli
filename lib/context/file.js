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
var _equivalences = /*#__PURE__*/ _interop_require_default(require("../equivalences"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _topLevel = /*#__PURE__*/ _interop_require_default(require("../verifier/topLevel"));
var _type = require("../dom/type");
var _string = require("../utilities/string");
var _json = require("../utilities/json");
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
var push = _necessary.arrayUtilities.push, first = _necessary.arrayUtilities.first, filter = _necessary.arrayUtilities.filter;
var FileContext = /*#__PURE__*/ function() {
    function FileContext(releaseContext, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables) {
        _class_call_check(this, FileContext);
        this.releaseContext = releaseContext;
        this.filePath = filePath;
        this.lineIndex = lineIndex;
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
        this.typePrefixes = typePrefixes;
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
            key: "getLineIndex",
            value: function getLineIndex() {
                return this.lineIndex;
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
            key: "getMetaTypes",
            value: function getMetaTypes() {
                return this.releaseContext.getMetaTypes();
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
            key: "getEquivalences",
            value: function getEquivalences() {
                var equivalences = _equivalences.default.fromNothing();
                return equivalences;
            }
        },
        {
            key: "getStepsOrSubproofs",
            value: function getStepsOrSubproofs() {
                var stepsOrSubproofs = [];
                return stepsOrSubproofs;
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
                    var metatheoremLabel = metatheorem.getLabel();
                    labels.push(metatheoremLabel);
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
            key: "getProcedures",
            value: function getProcedures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var procedures = [];
                if (includeRelease) {
                    var releaseContextProcedures = this.releaseContext.getProcedures();
                    push(procedures, releaseContextProcedures);
                }
                return procedures;
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
            key: "getTypePrefixes",
            value: function getTypePrefixes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var typePrefixes = [];
                push(typePrefixes, this.typePrefixes);
                if (includeRelease) {
                    var releaseContextTypePrefixes = this.releaseContext.getTypePrefixes();
                    push(typePrefixes, releaseContextTypePrefixes);
                }
                return typePrefixes;
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
            key: "getFileContext",
            value: function getFileContext() {
                var fileContext = this; ///
                return fileContext;
            }
        },
        {
            key: "getTypePrefix",
            value: function getTypePrefix() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var typePrefix = null;
                if (typePrefix === null) {
                    var typePrefixesLength = this.typePrefixes.length;
                    if (typePrefixesLength === 1) {
                        var firstTypePrefix = first(this.typePrefixes);
                        typePrefix = firstTypePrefix; ///
                    }
                }
                if (typePrefix === null) {
                    if (includeRelease) {
                        typePrefix = this.releaseContext.getTypePrefix();
                    }
                }
                return typePrefix;
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
            key: "findLabelByReference",
            value: function findLabelByReference(reference, context) {
                var labels = this.getLabels(), label = labels.find(function(label) {
                    var metavariableUnifies = label.unifyReference(reference, context);
                    if (metavariableUnifies) {
                        return true;
                    }
                }) || null;
                return label;
            }
        },
        {
            key: "findMetaLemmaByReference",
            value: function findMetaLemmaByReference(reference) {
                var metaLemmas = this.getMetaLemmas(), metaLemma = metaLemmas.find(function(metaLemma) {
                    var referenceMatches = metaLemma.matchReference(reference);
                    if (referenceMatches) {
                        return true;
                    }
                }) || null;
                return metaLemma;
            }
        },
        {
            key: "findMetatheoremByReference",
            value: function findMetatheoremByReference(reference) {
                var metatheorems = this.getMetatheorems(), metatheorem = metatheorems.find(function(metatheorem) {
                    var referenceMatches = metatheorem.matchReference(reference);
                    if (referenceMatches) {
                        return true;
                    }
                }) || null;
                return metatheorem;
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
            key: "findProcedureByReference",
            value: function findProcedureByReference(reference) {
                var procedures = this.getProcedures(), name = reference.getName(), procedure = procedures.find(function(procedure) {
                    var nameMatches = procedure.matchName(name);
                    if (nameMatches) {
                        return true;
                    }
                }) || null;
                return procedure;
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
                    var context = _this, metaLemmaMetaTheorem = metaLemma, metaLemmaMetatheoremUnifies = reference.unifyMetaLemmaMetatheorem(metaLemmaMetaTheorem, context);
                    if (metaLemmaMetatheoremUnifies) {
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
                    var context = _this, metaLemmaMetaTheorem = metatheorem, metaLemmaMetatheoremUnifies = reference.unifyMetaLemmaMetatheorem(metaLemmaMetaTheorem, context);
                    if (metaLemmaMetatheoremUnifies) {
                        return true;
                    }
                });
                return metatheorems;
            }
        },
        {
            key: "findMetaLemmaMetatheoremByReference",
            value: function findMetaLemmaMetatheoremByReference(reference) {
                var metaLemma = this.findMetaLemmaByReference(reference), metatheorem = this.findMetatheoremByReference(reference), metaLemmaMetatheorem = metaLemma || metatheorem; ///
                return metaLemmaMetatheorem;
            }
        },
        {
            key: "findMetaLemmaMetatheoremsByReference",
            value: function findMetaLemmaMetatheoremsByReference(reference) {
                var metaLemmas = this.findMetaLemmasByReference(reference), metatheorems = this.findMetatheoremsByReference(reference), metaLemmaMetatheorems = _to_consumable_array(metaLemmas).concat(_to_consumable_array(metatheorems));
                return metaLemmaMetatheorems;
            }
        },
        {
            key: "findAxiomLemmaTheoremOrConjectureByReference",
            value: function findAxiomLemmaTheoremOrConjectureByReference(reference) {
                var axiom = this.findAxiomByReference(reference), lemma = this.findLemmaByReference(reference), theorem = this.findTheoremByReference(reference), conjecture = this.findConjectureByReference(reference), axiomLemmaTheoremOrConjecture = axiom || lemma || theorem || conjecture;
                return axiomLemmaTheoremOrConjecture;
            }
        },
        {
            key: "findMetavariable",
            value: function findMetavariable(metavariable, generalContext, specificContext) {
                var specificMetavariable = metavariable, metavariables = this.getMetavariables();
                metavariable = metavariables.find(function(metavariable) {
                    var generalMetavariable = metavariable; ///
                    metavariable = specificMetavariable; ///
                    var metavariableUnifies = generalMetavariable.unifyMetavariable(metavariable, generalContext, specificContext);
                    if (metavariableUnifies) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "findTypeByTypeName",
            value: function findTypeByTypeName(typeName) {
                var prefixed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var types = this.getTypes();
                types = _to_consumable_array(types).concat([
                    _type.objectType
                ]);
                var context = this, type = types.find(function(type) {
                    var typeNameMatches = type.matchTypeName(typeName, prefixed, context);
                    if (typeNameMatches) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "findTypePrefixByTypePrefixName",
            value: function findTypePrefixByTypePrefixName(typePrefixName) {
                var typePrefixes = this.getTypePrefixes(), typePrefix = typePrefixes.find(function(typePrefix) {
                    var typePrefixNameMatches = typePrefix.matchTypePrefixName(typePrefixName);
                    if (typePrefixNameMatches) {
                        return true;
                    }
                }) || null;
                return typePrefix;
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
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                var variables = this.getVariables(), variable = variables.find(function(variable) {
                    var variableIdentifierMatches = variable.matchVariableIdentifier(variableIdentifier);
                    if (variableIdentifierMatches) {
                        return true;
                    }
                }) || null;
                return variable;
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
            key: "findLabelByMetavariable",
            value: function findLabelByMetavariable(metavariable) {
                var labels = this.getLabels(), label = labels.find(function(label) {
                    var metavariableEqualToLabelMetavariable = label.isMetavariableEqualTo(metavariable);
                    if (metavariableEqualToLabelMetavariable) {
                        return true;
                    }
                }) || null;
                return label;
            }
        },
        {
            key: "findJudgementByMetavariable",
            value: function findJudgementByMetavariable(metavariable) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementSimple = judgement.isSimple();
                    if (judgementSimple) {
                        var judgementMetavariable = judgement.getMetavariable(), judgementMetavariableEqualToMetavariable = judgementMetavariable.isEqualTo(metavariable);
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
                var prefixed = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var type = this.findTypeByTypeName(typeName, prefixed), typePresent = type !== null;
                return typePresent;
            }
        },
        {
            key: "isTypePrefixPresentByTypePrefixName",
            value: function isTypePrefixPresentByTypePrefixName(typePrefixName) {
                var typePrefix = this.findTypePrefixByTypePrefixName(typePrefixName), typePrefixPresent = typePrefix !== null;
                return typePrefixPresent;
            }
        },
        {
            key: "isVariablePresentByVariableIdentifier",
            value: function isVariablePresentByVariableIdentifier(variableIdentifier) {
                var variable = this.findVariableByVariableIdentifier(variableIdentifier), variablePresent = variable !== null;
                return variablePresent;
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
            key: "isLabelPresentByMetavariable",
            value: function isLabelPresentByMetavariable(metavariable) {
                var label = this.findLabelByMetavariable(metavariable), labelPresent = label !== null;
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
            key: "isLabelPresentByReference",
            value: function isLabelPresentByReference(reference) {
                var _this = this;
                var labels = this.getLabels(), labelPresent = labels.some(function(label) {
                    var context = _this, substitutions = _substitutions.default.fromNothing(), labelUnifies = reference.unifyLabel(label, substitutions, context);
                    if (labelUnifies) {
                        return true;
                    }
                });
                return labelPresent;
            }
        },
        {
            key: "isProcedurePresentByReference",
            value: function isProcedurePresentByReference(reference) {
                var procedure = this.findProcedureByReference(reference), procedurePresent = procedure !== null;
                return procedurePresent;
            }
        },
        {
            key: "isMetavariablePresentByReference",
            value: function isMetavariablePresentByReference(reference) {
                var _this = this;
                var metavariables = this.getMetavariables(), metavariablePresent = metavariables.some(function(metavariable) {
                    var context = _this, metavariableUnifies = reference.unifyMetavariable(metavariable, context);
                    if (metavariableUnifies) {
                        return true;
                    }
                });
                return metavariablePresent;
            }
        },
        {
            key: "isMetaLemmaMetatheoremPresentByReference",
            value: function isMetaLemmaMetatheoremPresentByReference(reference) {
                var metaLemmaMetatheorem = this.findMetaLemmaMetatheoremByReference(reference), metaLemmaMetatheoremPresent = metaLemmaMetatheorem !== null;
                return metaLemmaMetatheoremPresent;
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
            key: "findFile",
            value: function findFile(filePath) {
                return this.releaseContext.findFile(filePath);
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.releaseContext.trace(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.releaseContext.debug(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.releaseContext.info(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.releaseContext.warning(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.releaseContext.error(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                this.prepare();
                if (this.node === null) {
                    this.warning("Unable to verify the '".concat(this.filePath, "' file because it cannot be parsed."));
                } else {
                    this.debug("Verifying the '".concat(this.filePath, "' file..."));
                    var fileContext = this, verifiesAtTopLevel = _topLevel.default.verify(this.node, fileContext);
                    if (verifiesAtTopLevel) {
                        verifies = true;
                    } else {
                        this.clear();
                    }
                    if (verifies) {
                        this.info("...verified the '".concat(this.filePath, "' file."));
                    }
                }
                return verifies;
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
                this.typePrefixes = [];
                this.constructors = [];
                this.metatheorems = [];
                this.metavariables = [];
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                this.lineIndex = null;
                if (this.tokens !== null) {
                    return;
                }
                var file = this.findFile(this.filePath), lexer = this.getLexer(), parser = this.getParser(), content = file.getContent();
                this.tokens = lexer.tokenise(content);
                this.node = parser.parse(this.tokens);
            }
        },
        {
            key: "initialise",
            value: function initialise(json) {
                var fileContext = this; ///
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
                this.typePrefixes = (0, _json.typePrefixesFromJSON)(json, fileContext);
                this.constructors = (0, _json.constructorsFromJSON)(json, fileContext);
                this.metatheorems = (0, _json.metatheoremsFromJSON)(json, fileContext);
                this.metavariables = (0, _json.metavariablesFromJSON)(json, fileContext);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var typesJSON = (0, _json.typesToTypesJSON)(this.types), rulesJSON = (0, _json.rulesToRulesJSON)(this.rules), axiomsJSON = (0, _json.axiomsToAxiomsJSON)(this.axioms), theoremsJSON = (0, _json.theoremsToTheoremsJSON)(this.theorems), variablesJSON = (0, _json.variablesToVariablesJSON)(this.variables), conjecturesJSON = (0, _json.conjecturesToConjecturesJSON)(this.conjectures), combinatorsJSON = (0, _json.combinatorsToCombinatorsJSON)(this.combinators), typePrefixesJSON = (0, _json.typePrefixesToTypePrefixesJSON)(this.typePrefixes), constructorsJSON = (0, _json.constructorsToConstructorsJSON)(this.constructors), metatheoremsJSON = (0, _json.metatheoremsToMetatheoremsJSON)(this.metatheorems), metavariablesJSON = (0, _json.metavariablesToMetavariablesJSON)(this.metavariables), filePath = this.filePath, types = typesJSON, rules = rulesJSON, axioms = axiomsJSON, theorems = theoremsJSON, variables = variablesJSON, conjectures = conjecturesJSON, combinators = combinatorsJSON, typePrefixes = typePrefixesJSON, constructors = constructorsJSON, metatheorems = metatheoremsJSON, metavariables = metavariablesJSON, json = {
                    filePath: filePath,
                    types: types,
                    rules: rules,
                    axioms: axioms,
                    theorems: theorems,
                    variables: variables,
                    conjectures: conjectures,
                    combinators: combinators,
                    typePrefixes: typePrefixes,
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
                var filePath = file.getPath(), lineIndex = null, tokens = null, node = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], typePrefixes = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(releaseContext, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);
                return fileContext;
            }
        },
        {
            key: "fromFilePathAndJSON",
            value: function fromFilePathAndJSON(filePath, json, releaseContext) {
                var lineIndex = null, tokens = null, node = null, types = null, rules = null, axioms = null, lemmas = null, theorems = null, variables = null, metaLemmas = null, conjectures = null, combinators = null, typePrefixes = null, constructors = null, metatheorems = null, metavariables = null, fileContext = new FileContext(releaseContext, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);
                fileContext.initialise(json);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();
function lineIndexFromNodeAndTokens(node, tokens, lineIndex) {
    if (node !== null) {
        lineIndex = 0;
        var firstSignificantTokenIndex = node.getFirstSignificantTokenIndex(tokens);
        tokens.some(function(token, tokenIndex) {
            var tokenEndOfLineToken = token.isEndOfLineToken();
            if (tokenEndOfLineToken) {
                lineIndex += 1;
            }
            if (tokenIndex === firstSignificantTokenIndex) {
                return true;
            }
        });
    }
    return lineIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRXF1aXZhbGVuY2VzIGZyb20gXCIuLi9lcXVpdmFsZW5jZXNcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgdG9wTGV2ZWxWZXJpZmllciBmcm9tIFwiLi4vdmVyaWZpZXIvdG9wTGV2ZWxcIjtcblxuaW1wb3J0IHsgb2JqZWN0VHlwZSB9IGZyb20gXCIuLi9kb20vdHlwZVwiO1xuaW1wb3J0IHsgbm9kZUFzVG9rZW5zLCBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcsIHRva2Vuc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9zdHJpbmdcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0eXBlc1RvVHlwZXNKU09OLFxuICAgICAgICAgcnVsZXNUb1J1bGVzSlNPTixcbiAgICAgICAgIHRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICB2YXJpYWJsZXNGcm9tSlNPTixcbiAgICAgICAgIGxlbW1hc0Zyb21Ob3RoaW5nLFxuICAgICAgICAgYXhpb21zVG9BeGlvbXNKU09OLFxuICAgICAgICAgY29uamVjdHVyZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzRnJvbUpTT04sXG4gICAgICAgICB0eXBlUHJlZml4ZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBtZXRhTGVtbWFzRnJvbU5vdGhpbmcsXG4gICAgICAgICB0aGVvcmVtc1RvVGhlb3JlbXNKU09OLFxuICAgICAgICAgdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OLFxuICAgICAgICAgY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04sXG4gICAgICAgICBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2gsIGZpcnN0LCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4LCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcykge1xuICAgIHRoaXMucmVsZWFzZUNvbnRleHQgPSByZWxlYXNlQ29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFJlbGVhc2VDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRMaW5lSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZUluZGV4O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldExleGVyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZXhlcigpOyB9XG5cbiAgZ2V0UGFyc2VyKCkgeyByZXR1cm4gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRQYXJzZXIoKTsgfVxuXG4gIGdldE1ldGFUeXBlcygpIHsgcmV0dXJuIHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0TWV0YVR5cGVzKCk7IH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSBbXTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZygpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN0ZXBzT3JTdWJwcm9vZnMoKSB7XG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mcyA9IFtdO1xuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICB9KTtcblxuICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICBjb25zdCBjb25qZWN0dXJlTGFiZWxzID0gY29uamVjdHVyZS5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tZXRhdGhlb3JlbXMuZm9yRWFjaCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IG1ldGF0aGVvcmVtTGFiZWwgPSBtZXRhdGhlb3JlbS5nZXRMYWJlbCgpO1xuXG4gICAgICBsYWJlbHMucHVzaChtZXRhdGhlb3JlbUxhYmVsKTtcbiAgICB9KTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IFtdO1xuXG4gICAgcHVzaCh0eXBlcywgdGhpcy50eXBlcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0VHlwZXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFR5cGVzKCk7XG5cbiAgICAgIHB1c2godHlwZXMsIHJlbGVhc2VDb250ZXh0VHlwZXMpO1xuICAgIH1cblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gW11cblxuICAgIHB1c2gocnVsZXMsIHRoaXMucnVsZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFJ1bGVzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRSdWxlcygpO1xuXG4gICAgICBwdXNoKHJ1bGVzLCByZWxlYXNlQ29udGV4dFJ1bGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gW107XG5cbiAgICBwdXNoKGF4aW9tcywgdGhpcy5heGlvbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dEF4aW9tcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0QXhpb21zKCk7XG5cbiAgICAgIHB1c2goYXhpb21zLCByZWxlYXNlQ29udGV4dEF4aW9tcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobGVtbWFzLCB0aGlzLmxlbW1hcyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRMZW1tYXMoKTtcblxuICAgICAgcHVzaChsZW1tYXMsIHJlbGVhc2VDb250ZXh0TGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBbXTtcblxuICAgIHB1c2godGhlb3JlbXMsIHRoaXMudGhlb3JlbXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFRoZW9yZW1zID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRUaGVvcmVtcygpO1xuXG4gICAgICBwdXNoKHRoZW9yZW1zLCByZWxlYXNlQ29udGV4dFRoZW9yZW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0UHJvY2VkdXJlcygpO1xuXG4gICAgICBwdXNoKHByb2NlZHVyZXMsIHJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBbXTtcblxuICAgIHB1c2gobWV0YUxlbW1hcywgdGhpcy5tZXRhTGVtbWFzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRNZXRhTGVtbWFzKCk7XG5cbiAgICAgIHB1c2gobWV0YUxlbW1hcywgcmVsZWFzZUNvbnRleHRNZXRhTGVtbWFzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gW107XG5cbiAgICBwdXNoKGNvbmplY3R1cmVzLCB0aGlzLmNvbmplY3R1cmVzKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKTtcblxuICAgICAgcHVzaChjb25qZWN0dXJlcywgcmVsZWFzZUNvbnRleHRDb25qZWN0dXJlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBbXTtcblxuICAgIHB1c2goY29tYmluYXRvcnMsIHRoaXMuY29tYmluYXRvcnMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb21iaW5hdG9ycygpO1xuXG4gICAgICBwdXNoKGNvbWJpbmF0b3JzLCByZWxlYXNlQ29udGV4dENvbWJpbmF0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gW107XG5cbiAgICBwdXNoKHR5cGVQcmVmaXhlcywgdGhpcy50eXBlUHJlZml4ZXMpO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyA9IHRoaXMucmVsZWFzZUNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKCk7XG5cbiAgICAgIHB1c2godHlwZVByZWZpeGVzLCByZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBbXTtcblxuICAgIHB1c2goY29uc3RydWN0b3JzLCB0aGlzLmNvbnN0cnVjdG9ycyk7XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzID0gdGhpcy5yZWxlYXNlQ29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKTtcblxuICAgICAgcHVzaChjb25zdHJ1Y3RvcnMsIHJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IFtdO1xuXG4gICAgcHVzaChtZXRhdGhlb3JlbXMsIHRoaXMubWV0YXRoZW9yZW1zKTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMgPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldE1ldGF0aGVvcmVtcygpO1xuXG4gICAgICBwdXNoKG1ldGF0aGVvcmVtcywgcmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMpO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeChpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBsZXQgdHlwZVByZWZpeCA9IG51bGw7XG5cbiAgICBpZiAodHlwZVByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZVByZWZpeGVzTGVuZ3RoID0gdGhpcy50eXBlUHJlZml4ZXMubGVuZ3RoO1xuXG4gICAgICBpZiAodHlwZVByZWZpeGVzTGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IGZpcnN0VHlwZVByZWZpeCA9IGZpcnN0KHRoaXMudHlwZVByZWZpeGVzKTtcblxuICAgICAgICB0eXBlUHJlZml4ID0gZmlyc3RUeXBlUHJlZml4OyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZVByZWZpeCA9PT0gbnVsbCkge1xuICAgICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICAgIHR5cGVQcmVmaXggPSB0aGlzLnJlbGVhc2VDb250ZXh0LmdldFR5cGVQcmVmaXgoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGFkZFR5cGUodHlwZSkge1xuICAgIHRoaXMudHlwZXMucHVzaCh0eXBlKTtcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcbiAgfVxuXG4gIGFkZE1ldGFMZW1tYShtZXRhTGVtbWEpIHtcbiAgICB0aGlzLm1ldGFMZW1tYXMucHVzaChtZXRhTGVtbWEpO1xuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgfVxuXG4gIGFkZE1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtKSB7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMucHVzaChtZXRhdGhlb3JlbSk7XG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBsYWJlbC51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBtZXRhTGVtbWFzLmZpbmQoKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlTWF0Y2hlcyA9IG1ldGFMZW1tYS5tYXRjaFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYTtcbiAgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSBtZXRhdGhlb3JlbXMuZmluZCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZU1hdGNoZXMgPSBtZXRhdGhlb3JlbS5tYXRjaFJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBydWxlLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gYXhpb20ubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGVtbWEubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhlb3JlbS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IHRoaXMuZ2V0UHJvY2VkdXJlcygpLFxuICAgICAgICAgIG5hbWUgPSByZWZlcmVuY2UuZ2V0TmFtZSgpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZXMuZmluZCgocHJvY2VkdXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IHByb2NlZHVyZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSB0aGlzLmdldENvbmplY3R1cmVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVzLmZpbmQoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gY29uamVjdHVyZS5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKTtcblxuICAgIGZpbHRlcihtZXRhTGVtbWFzLCAobWV0YUxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhVGhlb3JlbSA9IG1ldGFMZW1tYSwgLy8vXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlNZXRhTGVtbWFNZXRhdGhlb3JlbShtZXRhTGVtbWFNZXRhVGhlb3JlbSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSB0aGlzLmdldE1ldGF0aGVvcmVtcygpO1xuXG4gICAgZmlsdGVyKG1ldGF0aGVvcmVtcywgKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBtZXRhTGVtbWFNZXRhVGhlb3JlbSA9IG1ldGF0aGVvcmVtLCAvLy9cbiAgICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtKG1ldGFMZW1tYU1ldGFUaGVvcmVtLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGFMZW1tYU1ldGF0aGVvcmVtVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzLmZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gdGhpcy5maW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGFMZW1tYU1ldGF0aGVvcmVtID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgIHJldHVybiBtZXRhTGVtbWFNZXRhdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gdGhpcy5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbXMgPSBbXG4gICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFNZXRhdGhlb3JlbXM7XG4gIH1cblxuICBmaW5kQXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBheGlvbSA9IHRoaXMuZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBsZW1tYSA9IHRoaXMuZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhpcy5maW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgY29uamVjdHVyZSA9IHRoaXMuZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtT3JDb25qZWN0dXJlID0gKGF4aW9tIHx8IGxlbW1hIHx8IHRoZW9yZW0gfHwgY29uamVjdHVyZSk7XG5cbiAgICByZXR1cm4gYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGNvbnN0IHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAgLy8vXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpO1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGdlbmVyYWxNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7IC8vL1xuXG4gICAgICBtZXRhdmFyaWFibGUgPSBzcGVjaWZpY01ldGF2YXJpYWJsZTsgIC8vL1xuXG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVVbmlmaWVzID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSwgcHJlZml4ZWQgPSB0cnVlKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIG9iamVjdFR5cGVcbiAgICBdO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgIHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlTmFtZU1hdGNoZXMgPSB0eXBlLm1hdGNoVHlwZU5hbWUodHlwZU5hbWUsIHByZWZpeGVkLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHR5cGVOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZVByZWZpeEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcygpLFxuICAgICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4ZXMuZmluZCgodHlwZVByZWZpeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeE5hbWVNYXRjaGVzID0gdHlwZVByZWZpeC5tYXRjaFR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVQcmVmaXhOYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhVHlwZXMgPSB0aGlzLmdldE1ldGFUeXBlcygpLFxuICAgICAgICAgIG1ldGFUeXBlID0gbWV0YVR5cGVzLmZpbmQoKG1ldGFUeXBlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhVHlwZU5hbWVNYXRjaGVzID0gbWV0YVR5cGUubWF0Y2hNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGFUeXBlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhVHlwZTtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlSWRlbnRpZmllck1hdGNoZXMgPSB2YXJpYWJsZS5tYXRjaFZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVJZGVudGlmaWVyTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVFcXVhbFRvTGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5pc01ldGF2YXJpYWJsZUVxdWFsVG8obWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZUVxdWFsVG9MYWJlbE1ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50U2ltcGxlID0ganVkZ2VtZW50LmlzU2ltcGxlKCk7XG5cbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRTaW1wbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICAgICAgICBqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50TWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBtZXRhdmFyaWFibGUubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7ICAvLy9cblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIHByZWZpeGVkID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSwgcHJlZml4ZWQpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ID0gdGhpcy5maW5kVHlwZVByZWZpeEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVmaXhQcmVzZW50ID0gKHR5cGVQcmVmaXggIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IGxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBwcm9jZWR1cmUgPSB0aGlzLmZpbmRQcm9jZWR1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSAocHJvY2VkdXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBtZXRhdmFyaWFibGVzLnNvbWUoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFNZXRhdGhlb3JlbSA9IHRoaXMuZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnQgPSAobWV0YUxlbW1hTWV0YXRoZW9yZW0gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudDtcbiAgfVxuXG4gIG5vZGVBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZUFzU3RyaW5nKG5vZGUsIHRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlLCB0b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVBc1Rva2Vucyhub2RlLCB0b2tlbnMgPSBudWxsKSB7XG4gICAgaWYgKHRva2VucyA9PT0gbnVsbCkge1xuICAgICAgdG9rZW5zID0gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgdG9rZW5zID0gbm9kZUFzVG9rZW5zKG5vZGUsIHRva2Vucyk7ICAvLy9cblxuICAgIHJldHVybiB0b2tlbnM7XG4gIH1cblxuICBub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2VucyA9IG51bGwpIHtcbiAgICBpZiAodG9rZW5zID09PSBudWxsKSB7XG4gICAgICB0b2tlbnMgPSB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICB0b2tlbnMgPSBub2Rlc0FzVG9rZW5zKG5vZGUsIHRva2Vucyk7IC8vL1xuXG4gICAgcmV0dXJuIHRva2VucztcbiAgfVxuXG4gIHRva2Vuc0FzU3RyaW5nKHRva2VucykgeyByZXR1cm4gdG9rZW5zQXNTdHJpbmcodG9rZW5zKTsgfVxuXG4gIGZpbmRGaWxlKGZpbGVQYXRoKSB7IHJldHVybiB0aGlzLnJlbGVhc2VDb250ZXh0LmZpbmRGaWxlKGZpbGVQYXRoKTsgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucywgdGhpcy5saW5lSW5kZXgpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC50cmFjZShtZXNzYWdlLCB0aGlzLmZpbGVQYXRoLCB0aGlzLmxpbmVJbmRleCk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlID0gbnVsbCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMsIHRoaXMubGluZUluZGV4KTtcblxuICAgIHRoaXMucmVsZWFzZUNvbnRleHQuZGVidWcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCwgdGhpcy5saW5lSW5kZXgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlID0gbnVsbCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMsIHRoaXMubGluZUluZGV4KTtcblxuICAgIHRoaXMucmVsZWFzZUNvbnRleHQuaW5mbyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoLCB0aGlzLmxpbmVJbmRleCk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucywgdGhpcy5saW5lSW5kZXgpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC53YXJuaW5nKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0aGlzLnRva2VucywgdGhpcy5saW5lSW5kZXgpO1xuXG4gICAgdGhpcy5yZWxlYXNlQ29udGV4dC5lcnJvcihtZXNzYWdlLCB0aGlzLmZpbGVQYXRoLCB0aGlzLmxpbmVJbmRleCk7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXBhcmUoKTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybmluZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgYmVjYXVzZSBpdCBjYW5ub3QgYmUgcGFyc2VkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB2ZXJpZmllc0F0VG9wTGV2ZWwgPSB0b3BMZXZlbFZlcmlmaWVyLnZlcmlmeSh0aGlzLm5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKHZlcmlmaWVzQXRUb3BMZXZlbCkge1xuICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnR5cGVzID0gW107XG4gICAgdGhpcy5ydWxlcyA9IFtdO1xuICAgIHRoaXMuYXhpb21zID0gW107XG4gICAgdGhpcy5sZW1tYXMgPSBbXTtcbiAgICB0aGlzLnRoZW9yZW1zID0gW107XG4gICAgdGhpcy52YXJpYWJsZXMgPSBbXTtcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBbXTtcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gW107XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IFtdO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gW107XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IFtdO1xuICB9XG5cbiAgcHJlcGFyZSgpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy50b2tlbnMgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlID0gdGhpcy5maW5kRmlsZSh0aGlzLmZpbGVQYXRoKSxcbiAgICAgICAgICBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudHlwZXMgPSBbXTtcblxuICAgIHR5cGVzRnJvbUpTT04oanNvbiwgdGhpcy50eXBlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hc0Zyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXNGcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlc0pTT04gPSB0eXBlc1RvVHlwZXNKU09OKHRoaXMudHlwZXMpLFxuICAgICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzVG9SdWxlc0pTT04odGhpcy5ydWxlcyksXG4gICAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tc1RvQXhpb21zSlNPTih0aGlzLmF4aW9tcyksXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGlzLnRoZW9yZW1zKSxcbiAgICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHRoaXMudmFyaWFibGVzKSxcbiAgICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKHRoaXMuY29uamVjdHVyZXMpLFxuICAgICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04odGhpcy5jb21iaW5hdG9ycyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTih0aGlzLnR5cGVQcmVmaXhlcyksXG4gICAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTih0aGlzLmNvbnN0cnVjdG9ycyksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTih0aGlzLm1ldGF0aGVvcmVtcyksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTih0aGlzLm1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICB0eXBlcyA9IHR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNKU09OLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gYXhpb21zSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICB0eXBlcyxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgdGhlb3JlbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb25qZWN0dXJlcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgdHlwZVByZWZpeGVzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgbWV0YXRoZW9yZW1zLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCByZWxlYXNlQ29udGV4dCkge1xuICAgIGNvbnN0IGZpbGVQYXRoID0gZmlsZS5nZXRQYXRoKCksXG4gICAgICAgICAgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gW10sXG4gICAgICAgICAgcnVsZXMgPSBbXSxcbiAgICAgICAgICBheGlvbXMgPSBbXSxcbiAgICAgICAgICBsZW1tYXMgPSBbXSxcbiAgICAgICAgICB0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBbXSxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IFtdLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gW10sXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gW10sXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gW10sXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gW10sXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IFtdLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KHJlbGVhc2VDb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4LCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoQW5kSlNPTihmaWxlUGF0aCwganNvbiwgcmVsZWFzZUNvbnRleHQpIHtcbiAgICBjb25zdCBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBudWxsLFxuICAgICAgICAgIHJ1bGVzID0gbnVsbCxcbiAgICAgICAgICBheGlvbXMgPSBudWxsLFxuICAgICAgICAgIGxlbW1hcyA9IG51bGwsXG4gICAgICAgICAgdGhlb3JlbXMgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IG51bGwsXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBudWxsLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gbnVsbCxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBudWxsLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG51bGwsXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbnVsbCxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChyZWxlYXNlQ29udGV4dCwgZmlsZVBhdGgsIGxpbmVJbmRleCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgZmlsZUNvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMsIGxpbmVJbmRleCkge1xuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGxpbmVJbmRleCA9IDA7XG5cbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICAgIHRva2Vucy5zb21lKCh0b2tlbiwgdG9rZW5JbmRleCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW5FbmRPZkxpbmVUb2tlbiA9IHRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgaWYgKHRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgbGluZUluZGV4ICs9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbkluZGV4ID09PSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsaW5lSW5kZXg7XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImZpbHRlciIsInJlbGVhc2VDb250ZXh0IiwiZmlsZVBhdGgiLCJsaW5lSW5kZXgiLCJ0b2tlbnMiLCJub2RlIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwidmFyaWFibGVzIiwibWV0YUxlbW1hcyIsImNvbmplY3R1cmVzIiwiY29tYmluYXRvcnMiLCJ0eXBlUHJlZml4ZXMiLCJjb25zdHJ1Y3RvcnMiLCJtZXRhdGhlb3JlbXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0UmVsZWFzZUNvbnRleHQiLCJnZXRGaWxlUGF0aCIsImdldExpbmVJbmRleCIsImdldFRva2VucyIsImdldE5vZGUiLCJnZXRMZXhlciIsImdldFBhcnNlciIsImdldE1ldGFUeXBlcyIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiZXF1aXZhbGVuY2VzIiwiRXF1aXZhbGVuY2VzIiwiZnJvbU5vdGhpbmciLCJnZXRTdGVwc09yU3VicHJvb2ZzIiwic3RlcHNPclN1YnByb29mcyIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUxhYmVsIiwiZ2V0TGFiZWwiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImdldFR5cGVzIiwicmVsZWFzZUNvbnRleHRUeXBlcyIsImdldFJ1bGVzIiwicmVsZWFzZUNvbnRleHRSdWxlcyIsImdldEF4aW9tcyIsInJlbGVhc2VDb250ZXh0QXhpb21zIiwiZ2V0TGVtbWFzIiwicmVsZWFzZUNvbnRleHRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsInJlbGVhc2VDb250ZXh0VGhlb3JlbXMiLCJnZXRWYXJpYWJsZXMiLCJnZXRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsInJlbGVhc2VDb250ZXh0UHJvY2VkdXJlcyIsImdldE1ldGFMZW1tYXMiLCJyZWxlYXNlQ29udGV4dE1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsInJlbGVhc2VDb250ZXh0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsInJlbGVhc2VDb250ZXh0Q29tYmluYXRvcnMiLCJnZXRUeXBlUHJlZml4ZXMiLCJyZWxlYXNlQ29udGV4dFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsInJlbGVhc2VDb250ZXh0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwicmVsZWFzZUNvbnRleHRNZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0RmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImdldFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwidHlwZVByZWZpeGVzTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3RUeXBlUHJlZml4IiwiYWRkVHlwZSIsInR5cGUiLCJhZGRSdWxlIiwiYWRkQXhpb20iLCJhZGRMZW1tYSIsImFkZFRoZW9yZW0iLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwiYWRkTWV0YUxlbW1hIiwibWV0YUxlbW1hIiwiYWRkQ29uamVjdHVyZSIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImFkZE1ldGF0aGVvcmVtIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwibGFiZWwiLCJmaW5kIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlTWF0Y2hlcyIsIm1hdGNoUmVmZXJlbmNlIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwiZmluZFByb2NlZHVyZUJ5UmVmZXJlbmNlIiwibmFtZSIsImdldE5hbWUiLCJwcm9jZWR1cmUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTmFtZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwibWV0YUxlbW1hTWV0YVRoZW9yZW0iLCJtZXRhTGVtbWFNZXRhdGhlb3JlbVVuaWZpZXMiLCJ1bmlmeU1ldGFMZW1tYU1ldGF0aGVvcmVtIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYU1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFNZXRhdGhlb3JlbSIsImZpbmRNZXRhTGVtbWFNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtcyIsImZpbmRBeGlvbUxlbW1hVGhlb3JlbU9yQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiYXhpb21MZW1tYVRoZW9yZW1PckNvbmplY3R1cmUiLCJmaW5kTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwicHJlZml4ZWQiLCJvYmplY3RUeXBlIiwidHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlTmFtZSIsImZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWVNYXRjaGVzIiwibWF0Y2hUeXBlUHJlZml4TmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVzIiwibWV0YVR5cGUiLCJtZXRhVHlwZU5hbWVNYXRjaGVzIiwibWF0Y2hNZXRhVHlwZU5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllck1hdGNoZXMiLCJtYXRjaFZhcmlhYmxlSWRlbnRpZmllciIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlRXF1YWxUb0xhYmVsTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50IiwianVkZ2VtZW50U2ltcGxlIiwiaXNTaW1wbGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNFcXVhbFRvIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwic29tZSIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwibGFiZWxVbmlmaWVzIiwidW5pZnlMYWJlbCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5UmVmZXJlbmNlIiwicHJvY2VkdXJlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNNZXRhTGVtbWFNZXRhdGhlb3JlbVByZXNlbnRCeVJlZmVyZW5jZSIsIm1ldGFMZW1tYU1ldGF0aGVvcmVtUHJlc2VudCIsIm5vZGVBc1N0cmluZyIsInN0cmluZyIsIm5vZGVzQXNTdHJpbmciLCJub2RlQXNUb2tlbnMiLCJub2Rlc0FzVG9rZW5zIiwidG9rZW5zQXNTdHJpbmciLCJmaW5kRmlsZSIsInRyYWNlIiwibWVzc2FnZSIsImxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJwcmVwYXJlIiwidmVyaWZpZXNBdFRvcExldmVsIiwidG9wTGV2ZWxWZXJpZmllciIsImNsZWFyIiwiZmlsZSIsImxleGVyIiwicGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbmlzZSIsInBhcnNlIiwiaW5pdGlhbGlzZSIsImpzb24iLCJ0eXBlc0Zyb21KU09OIiwicnVsZXNGcm9tSlNPTiIsImF4aW9tc0Zyb21KU09OIiwibGVtbWFzRnJvbU5vdGhpbmciLCJ0aGVvcmVtc0Zyb21KU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJtZXRhTGVtbWFzRnJvbU5vdGhpbmciLCJjb25qZWN0dXJlc0Zyb21KU09OIiwiY29tYmluYXRvcnNGcm9tSlNPTiIsInR5cGVQcmVmaXhlc0Zyb21KU09OIiwiY29uc3RydWN0b3JzRnJvbUpTT04iLCJtZXRhdGhlb3JlbXNGcm9tSlNPTiIsIm1ldGF2YXJpYWJsZXNGcm9tSlNPTiIsInRvSlNPTiIsInR5cGVzSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJydWxlc0pTT04iLCJydWxlc1RvUnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJ0eXBlUHJlZml4ZXNKU09OIiwidHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwiZnJvbUZpbGUiLCJnZXRQYXRoIiwiZnJvbUZpbGVQYXRoQW5kSlNPTiIsImZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwiZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgiLCJ0b2tlbiIsInRva2VuSW5kZXgiLCJ0b2tlbkVuZE9mTGluZVRva2VuIiwiaXNFbmRPZkxpbmVUb2tlbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFxQ3FCQTs7O3lCQW5DVTttRUFFTjtvRUFDQzsrREFDRztvQkFFRjtzQkFDK0M7b0JBd0J6Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFBUUMsT0FBd0JDLHlCQUFjLENBQXRDRCxNQUFNRSxRQUFrQkQseUJBQWMsQ0FBaENDLE9BQU9DLFNBQVdGLHlCQUFjLENBQXpCRTtBQUVOLElBQUEsQUFBTUosNEJBQU47YUFBTUEsWUFDUEssY0FBYyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxZQUFZLEVBQUVDLGFBQWE7Z0NB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