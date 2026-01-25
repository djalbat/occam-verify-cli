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
var _occamfurtle = require("occam-furtle");
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _constants = require("../constants");
var _verify = require("../process/verify");
var _types = require("../types");
var _node = require("../utilities/node");
var _json = require("../utilities/json");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
var push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter, chainContext = _occamfurtle.contextUtilities.chainContext, lineIndexFromNodeAndTokens = _occamfurtle.contextUtilities.lineIndexFromNodeAndTokens, _LEVELS = _sliced_to_array(_constants.LEVELS, 5), TRACE_LEVEL = _LEVELS[0], DEBUG_LEVEL = _LEVELS[1], INFO_LEVEL = _LEVELS[2], WARNING_LEVEL = _LEVELS[3], ERROR_LEVEL = _LEVELS[4];
var FileContext = /*#__PURE__*/ function() {
    function FileContext(context1, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables) {
        _class_call_check(this, FileContext);
        this.context = context1;
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
        return chainContext(this);
    }
    _create_class(FileContext, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
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
            key: "getJudgements",
            value: function getJudgements() {
                var judgements = [];
                return judgements;
            }
        },
        {
            key: "getEquivalences",
            value: function getEquivalences() {
                var Equivalences = _elements.default.Equivalences, equivalences = Equivalences.fromNothing(context);
                return equivalences;
            }
        },
        {
            key: "getSubproofOrProofAssertions",
            value: function getSubproofOrProofAssertions() {
                var subproofOrProofAssertions = [];
                return subproofOrProofAssertions;
            }
        },
        {
            key: "getLabels",
            value: function getLabels() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var labels = [];
                if (includeRelease) {
                    var releaseContextLabels = this.context.getLabels();
                    push(labels, releaseContextLabels);
                } else {
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
                }
                return labels;
            }
        },
        {
            key: "getTypes",
            value: function getTypes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true, includeDependencies = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
                var types = includeRelease ? this.context.getTypes(includeDependencies) : this.types;
                return types;
            }
        },
        {
            key: "getRules",
            value: function getRules() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var rules = includeRelease ? this.context.getRules() : this.rules;
                return rules;
            }
        },
        {
            key: "getAxioms",
            value: function getAxioms() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var axioms = includeRelease ? this.context.getAxioms() : this.axioms;
                return axioms;
            }
        },
        {
            key: "getLemmas",
            value: function getLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var lemmas = includeRelease ? this.context.getLemmas() : this.lemmas;
                return lemmas;
            }
        },
        {
            key: "getTheorems",
            value: function getTheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var theorems = includeRelease ? this.context.getTheorems() : this.theorems;
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
                var procedures = includeRelease ? this.context.getProcedures() : null; ///
                return procedures;
            }
        },
        {
            key: "getMetaLemmas",
            value: function getMetaLemmas() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metaLemmas = includeRelease ? this.context.getMetaLemmas() : this.metaLemmas;
                return metaLemmas;
            }
        },
        {
            key: "getConjectures",
            value: function getConjectures() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var conjectures = includeRelease ? this.context.getConjectures() : this.conjectures;
                return conjectures;
            }
        },
        {
            key: "getCombinators",
            value: function getCombinators() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var combinators = includeRelease ? this.context.getCombinators() : this.combinators;
                return combinators;
            }
        },
        {
            key: "getTypePrefixes",
            value: function getTypePrefixes() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var typePrefixes = includeRelease ? this.context.getTypePrefixes() : this.typePrefixes;
                return typePrefixes;
            }
        },
        {
            key: "getConstructors",
            value: function getConstructors() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var constructors = includeRelease ? this.context.getConstructors() : this.constructors;
                return constructors;
            }
        },
        {
            key: "getMetatheorems",
            value: function getMetatheorems() {
                var includeRelease = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
                var metatheorems = includeRelease ? this.context.getMetatheorems() : this.metatheorems;
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
            key: "addTypePrefix",
            value: function addTypePrefix(typePrefix) {
                this.typePrefixes.push(typePrefix);
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
            value: function findLabelByReference(reference, context1) {
                var labels = this.getLabels(), label = labels.find(function(label) {
                    var metavariableUnifies = label.unifyReference(reference, context1);
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
                    var metaLemmaComparesToReference = metaLemma.compareReference(reference);
                    if (metaLemmaComparesToReference) {
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
                    var metatheoremComparesToReference = metatheorem.compareReference(reference);
                    if (metatheoremComparesToReference) {
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
                    var ruleComparesToMetavariableName = rule.compareMetavariableName(metavariableName);
                    if (ruleComparesToMetavariableName) {
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
                    var axiomComparesToMetavariableName = axiom.compareMetavariableName(metavariableName);
                    if (axiomComparesToMetavariableName) {
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
                    var lemmaComparesToMetavariableName = lemma.compareMetavariableName(metavariableName);
                    if (lemmaComparesToMetavariableName) {
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
                    var theoremComparesToMetavariableName = theorem.compareMetavariableName(metavariableName);
                    if (theoremComparesToMetavariableName) {
                        return true;
                    }
                }) || null;
                return theorem;
            }
        },
        {
            key: "findProcedureByName",
            value: function findProcedureByName(name) {
                var procedures = this.getProcedures(), procedure = procedures.find(function(procedure) {
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
                    var conjectureComparesToMetavariableName = conjecture.compareMetavariableName(metavariableName);
                    if (conjectureComparesToMetavariableName) {
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
                    var context1 = _this, topLevelMetaAssertion = metaLemma, topLevelMetaAssertionUnifies = reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context1);
                    if (topLevelMetaAssertionUnifies) {
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
                    var context1 = _this, topLevelMetaAssertion = metatheorem, topLevelMetaAssertionUnifies = reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context1);
                    if (topLevelMetaAssertionUnifies) {
                        return true;
                    }
                });
                return metatheorems;
            }
        },
        {
            key: "findTopLevelMetaAssertionByReference",
            value: function findTopLevelMetaAssertionByReference(reference) {
                var metaLemma = this.findMetaLemmaByReference(reference), metatheorem = this.findMetatheoremByReference(reference), topLevelMetaAssertion = metaLemma || metatheorem; ///
                return topLevelMetaAssertion;
            }
        },
        {
            key: "findTopLevelMetaAssertionsByReference",
            value: function findTopLevelMetaAssertionsByReference(reference) {
                var metaLemmas = this.findMetaLemmasByReference(reference), metatheorems = this.findMetatheoremsByReference(reference), topLevelMetaAssertions = _to_consumable_array(metaLemmas).concat(_to_consumable_array(metatheorems));
                return topLevelMetaAssertions;
            }
        },
        {
            key: "findTopLevelAssertionByReference",
            value: function findTopLevelAssertionByReference(reference) {
                var axiom = this.findAxiomByReference(reference), lemma = this.findLemmaByReference(reference), theorem = this.findTheoremByReference(reference), conjecture = this.findConjectureByReference(reference), topLevelAssertion = axiom || lemma || theorem || conjecture;
                return topLevelAssertion;
            }
        },
        {
            key: "findMetavariable",
            value: function findMetavariable(metavariable) {
                var _this = this;
                var metavariables = this.getMetavariables(), specificMetavariable = metavariable; ///
                metavariable = metavariables.find(function(metavariable) {
                    var context1 = _this, generalMetavariable = metavariable, metavariableUnifies = generalMetavariable.unifyMetavariable(specificMetavariable, context1);
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
                var includeRelease = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, includeDependencies = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                var types = this.getTypes(includeRelease, includeDependencies);
                var baseType = (0, _types.baseTypeFromNothing)();
                types = _to_consumable_array(types).concat([
                    baseType
                ]);
                var type = types.find(function(type) {
                    var typeComparesToTypeName = type.compareTypeName(typeName);
                    if (typeComparesToTypeName) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "findTypeByNominalTypeName",
            value: function findTypeByNominalTypeName(nominalTypeName) {
                var types = this.getTypes();
                var baseType = (0, _types.baseTypeFromNothing)();
                types = _to_consumable_array(types).concat([
                    baseType
                ]);
                var type = types.find(function(type) {
                    var typeComparesToNominalTypeName = type.compareNominalTypeName(nominalTypeName);
                    if (typeComparesToNominalTypeName) {
                        return true;
                    }
                }) || null;
                return type;
            }
        },
        {
            key: "findTypeByPrefixedTypeName",
            value: function findTypeByPrefixedTypeName(prefixedTypeName) {
                var types = this.getTypes();
                var baseType = (0, _types.baseTypeFromNothing)();
                types = _to_consumable_array(types).concat([
                    baseType
                ]);
                var type = types.find(function(type) {
                    var typeComparesToPrefixedTypeName = type.comparePrefixedTypeName(prefixedTypeName);
                    if (typeComparesToPrefixedTypeName) {
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
                    var metaTypeComparesToMetaTypeName = metaType.compareMetaTypeName(metaTypeName);
                    if (metaTypeComparesToMetaTypeName) {
                        return true;
                    }
                }) || null;
                return metaType;
            }
        },
        {
            key: "findTypePrefixByTypePrefixName",
            value: function findTypePrefixByTypePrefixName(typePrefixName) {
                var typePrefixes = this.getTypePrefixes(), typePrefix = typePrefixes.find(function(typePrefix) {
                    var typePrefixComparesToTypePrefixName = typePrefix.compareTypePrefixName(typePrefixName);
                    if (typePrefixComparesToTypePrefixName) {
                        return true;
                    }
                }) || null;
                return typePrefix;
            }
        },
        {
            key: "findVariableByVariableIdentifier",
            value: function findVariableByVariableIdentifier(variableIdentifier) {
                var variables = this.getVariables(), variable = variables.find(function(variable) {
                    var variableComparesToVariableIdentifier = variable.compareVariableIdentifier(variableIdentifier);
                    if (variableComparesToVariableIdentifier) {
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
                    var labelComparesToMetavariableName = label.compareMetavariableName(metavariableName);
                    if (labelComparesToMetavariableName) {
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
                    var metavariableEqualToLabelMetavariable = label.isMetavariableEqualToMetavariable(metavariable);
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
                    var judgementSingular = judgement.isSingular();
                    if (judgementSingular) {
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
                    var metavariableComparesToMetavariableName = metavariable.compareMetavariableName(metavariableName);
                    if (metavariableComparesToMetavariableName) {
                        return true;
                    }
                }) || null;
                return metavariable;
            }
        },
        {
            key: "isMetavariablePresent",
            value: function isMetavariablePresent(metavariable) {
                metavariable = this.findMetavariable(metavariable);
                var metavariablePresent = metavariable !== null;
                return metavariablePresent;
            }
        },
        {
            key: "isTypePresentByTypeName",
            value: function isTypePresentByTypeName(typeName) {
                var includeRelease = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, includeDependencies = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                var type = this.findTypeByTypeName(typeName, includeRelease, includeDependencies), typePresent = type !== null;
                return typePresent;
            }
        },
        {
            key: "isTypePresentByNominalTypeName",
            value: function isTypePresentByNominalTypeName(nominalTypeName) {
                var type = this.findTypeByNominalTypeName(nominalTypeName), typePresent = type !== null;
                return typePresent;
            }
        },
        {
            key: "isTypePresentByPrefixedTypeName",
            value: function isTypePresentByPrefixedTypeName(prefixedTypeName) {
                var type = this.findTypeByPrefixedTypeName(prefixedTypeName), typePresent = type !== null;
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
                    var context1 = _this, labelUnifies = reference.unifyLabel(label, context1);
                    if (labelUnifies) {
                        return true;
                    }
                });
                return labelPresent;
            }
        },
        {
            key: "isProcedurePresentByName",
            value: function isProcedurePresentByName(name) {
                var procedure = this.findProcedureByName(name), procedurePresent = procedure !== null;
                return procedurePresent;
            }
        },
        {
            key: "isMetavariablePresentByReference",
            value: function isMetavariablePresentByReference(reference) {
                var _this = this;
                var metavariables = this.getMetavariables(), metavariablePresent = metavariables.some(function(metavariable) {
                    var context1 = _this, metavariableUnifies = reference.unifyMetavariable(metavariable, context1);
                    if (metavariableUnifies) {
                        return true;
                    }
                });
                return metavariablePresent;
            }
        },
        {
            key: "isTopLevelMetaAssertionPresentByReference",
            value: function isTopLevelMetaAssertionPresentByReference(reference) {
                var topLevelMetaAssertion = this.findTopLevelMetaAssertionByReference(reference), topLevelMetaAssertionPresent = topLevelMetaAssertion !== null;
                return topLevelMetaAssertionPresent;
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
            key: "getDepth",
            value: function getDepth() {
                var depth = this.context.getDepth();
                depth++;
                return depth;
            }
        },
        {
            key: "nodeAsString",
            value: function nodeAsString(node) {
                var string = (0, _node.nodeAsString)(node, this.tokens);
                return string;
            }
        },
        {
            key: "nodesAsString",
            value: function nodesAsString(node) {
                var string = (0, _node.nodesAsString)(node, this.tokens);
                return string;
            }
        },
        {
            key: "trace",
            value: function trace(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = TRACE_LEVEL;
                this.writeToLog(level, message, node);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = DEBUG_LEVEL;
                this.writeToLog(level, message, node);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = INFO_LEVEL;
                this.writeToLog(level, message, node);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = WARNING_LEVEL;
                this.writeToLog(level, message, node);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                var level = ERROR_LEVEL;
                this.writeToLog(level, message, node);
            }
        },
        {
            key: "writeToLog",
            value: function writeToLog(level, message, node) {
                var lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex), filePath = lineIndex === null ? this.filePath : null;
                this.context.writeToLog(level, message, filePath, lineIndex);
                this.lineIndex = lineIndex;
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
                    var context1 = this, fileNode = this.node; ///
                    verifies = (0, _verify.verifyFile)(fileNode, context1);
                    verifies ? this.complete() : this.clear();
                    if (verifies) {
                        this.info("...verified the '".concat(this.filePath, "' file."));
                    }
                }
                return verifies;
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                if (this.tokens !== null) {
                    return;
                }
                var file = this.findFile(this.filePath), lexer = this.getLexer(), parser = this.getParser(), content = file.getContent();
                this.tokens = lexer.tokenise(content);
                this.node = parser.parse(this.tokens);
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.lineIndex = null;
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
            key: "complete",
            value: function complete() {
                this.lineIndex = null;
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
            value: function fromFile(file, context1) {
                var filePath = file.getPath(), lineIndex = null, tokens = null, node = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], typePrefixes = [], constructors = [], metatheorems = [], metavariables = [], fileContext = new FileContext(context1, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);
                return fileContext;
            }
        },
        {
            key: "fromFilePath",
            value: function fromFilePath(filePath, context1) {
                var lineIndex = null, tokens = null, node = null, types = null, rules = null, axioms = null, lemmas = null, theorems = null, variables = null, metaLemmas = null, conjectures = null, combinators = null, typePrefixes = null, constructors = null, metatheorems = null, metavariables = null, fileContext = new FileContext(context1, filePath, lineIndex, tokens, node, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables);
                return fileContext;
            }
        }
    ]);
    return FileContext;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgY29udGV4dFV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1mdXJ0bGVcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuXG5pbXBvcnQgeyBMRVZFTFMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyB2ZXJpZnlGaWxlIH0gZnJvbSBcIi4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBub2RlQXNTdHJpbmcsIG5vZGVzQXNTdHJpbmcgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL25vZGVcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0eXBlc1RvVHlwZXNKU09OLFxuICAgICAgICAgcnVsZXNUb1J1bGVzSlNPTixcbiAgICAgICAgIHRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICB2YXJpYWJsZXNGcm9tSlNPTixcbiAgICAgICAgIGxlbW1hc0Zyb21Ob3RoaW5nLFxuICAgICAgICAgYXhpb21zVG9BeGlvbXNKU09OLFxuICAgICAgICAgY29uamVjdHVyZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzRnJvbUpTT04sXG4gICAgICAgICB0eXBlUHJlZml4ZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBtZXRhTGVtbWFzRnJvbU5vdGhpbmcsXG4gICAgICAgICB0aGVvcmVtc1RvVGhlb3JlbXNKU09OLFxuICAgICAgICAgdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OLFxuICAgICAgICAgY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04sXG4gICAgICAgICB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04sXG4gICAgICAgICBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2gsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGNoYWluQ29udGV4dCwgbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMgfSA9IGNvbnRleHRVdGlsaXRpZXMsXG4gICAgICBbIFRSQUNFX0xFVkVMLCBERUJVR19MRVZFTCwgSU5GT19MRVZFTCwgV0FSTklOR19MRVZFTCwgRVJST1JfTEVWRUwgXSA9IExFVkVMUztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZUNvbnRleHQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4LCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMubGluZUluZGV4ID0gbGluZUluZGV4O1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG5cbiAgICByZXR1cm4gY2hhaW5Db250ZXh0KHRoaXMpO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0RmlsZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZVBhdGg7XG4gIH1cblxuICBnZXRMaW5lSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZUluZGV4O1xuICB9XG5cbiAgZ2V0VG9rZW5zKCkge1xuICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgfVxuXG4gIGdldE5vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IFtdO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgY29uc3QgeyBFcXVpdmFsZW5jZXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbXTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMuY29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgICAgY29uc3QgbGVtbWFMYWJlbHMgPSBsZW1tYS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBjb25qZWN0dXJlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1ldGF0aGVvcmVtcy5mb3JFYWNoKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUxhYmVsID0gbWV0YXRoZW9yZW0uZ2V0TGFiZWwoKTtcblxuICAgICAgICBsYWJlbHMucHVzaChtZXRhdGhlb3JlbUxhYmVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlcztcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0UnVsZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWxlcztcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9tcztcblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldExlbW1hcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW1tYXM7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRUaGVvcmVtcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW9yZW1zO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0UHJvY2VkdXJlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRNZXRhTGVtbWFzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhTGVtbWFzO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uamVjdHVyZXM7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tYmluYXRvcnM7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFR5cGVQcmVmaXhlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlUHJlZml4ZXM7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3JzO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGF0aGVvcmVtcztcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRNZXRhTGVtbWEobWV0YUxlbW1hKSB7XG4gICAgdGhpcy5tZXRhTGVtbWFzLnB1c2gobWV0YUxlbW1hKTtcbiAgfVxuXG4gIGFkZENvbmplY3R1cmUoY29uamVjdHVyZSkge1xuICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgfVxuXG4gIGFkZFR5cGVQcmVmaXgodHlwZVByZWZpeCkge1xuICAgIHRoaXMudHlwZVByZWZpeGVzLnB1c2godHlwZVByZWZpeCk7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGxhYmVsLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYXMuZmluZCgobWV0YUxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFDb21wYXJlc1RvUmVmZXJlbmNlID0gbWV0YUxlbW1hLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGFMZW1tYUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cblxuICBmaW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSB0aGlzLmdldE1ldGF0aGVvcmVtcygpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1zLmZpbmQoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUNvbXBhcmVzVG9SZWZlcmVuY2UgPSBtZXRhdGhlb3JlbS5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdGhlb3JlbUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHJ1bGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGF4aW9tLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxlbW1hLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGVtbWFDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gdGhlb3JlbS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHRoZW9yZW1Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gdGhpcy5nZXRQcm9jZWR1cmVzKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlcy5maW5kKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gcHJvY2VkdXJlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gY29uamVjdHVyZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGNvbmplY3R1cmVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKTtcblxuICAgIGZpbHRlcihtZXRhTGVtbWFzLCAobWV0YUxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBtZXRhTGVtbWEsIC8vL1xuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCk7XG5cbiAgICBmaWx0ZXIobWV0YXRoZW9yZW1zLCAobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG1ldGF0aGVvcmVtLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYSA9IHRoaXMuZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSB0aGlzLmZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSB0aGlzLmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBbXG4gICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25zO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb20gPSB0aGlzLmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbGVtbWEgPSB0aGlzLmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoaXMuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSB0aGlzLmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IChheGlvbSB8fCBsZW1tYSB8fCB0aGVvcmVtIHx8IGNvbmplY3R1cmUpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLnVuaWZ5TWV0YXZhcmlhYmxlKHNwZWNpZmljTWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSB0eXBlLmNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmNvbXBhcmVNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeGVzLmZpbmQoKHR5cGVQcmVmaXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXhDb21wYXJlc1RvVHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmNvbXBhcmVUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbGFiZWwuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVFcXVhbFRvTGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZUVxdWFsVG9MYWJlbE1ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50U2luZ3VsYXIgPSBqdWRnZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50U2luZ3VsYXIpIHtcbiAgICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICAgICAgICBqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50TWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpIHtcbiAgICBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeCA9IHRoaXMuZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9ICh0eXBlUHJlZml4ICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4UHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZSA9IHRoaXMuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gKHByb2NlZHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gbWV0YXZhcmlhYmxlcy5zb21lKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRoaXMuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCA9ICh0b3BMZXZlbE1ldGFBc3NlcnRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0RGVwdGgoKSB7XG4gICAgbGV0IGRlcHRoID0gdGhpcy5jb250ZXh0LmdldERlcHRoKCk7XG5cbiAgICBkZXB0aCsrO1xuXG4gICAgcmV0dXJuIGRlcHRoO1xuICB9XG5cbiAgbm9kZUFzU3RyaW5nKG5vZGUpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBub2RlQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIG5vZGVzQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVzQXNTdHJpbmcobm9kZSwgdGhpcy50b2tlbnMpO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfVxuXG4gIHRyYWNlKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBUUkFDRV9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgbm9kZSk7XG4gIH1cblxuICBkZWJ1ZyhtZXNzYWdlLCBub2RlID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gREVCVUdfTEVWRUw7XG5cbiAgICB0aGlzLndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIG5vZGUpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlID0gbnVsbCkge1xuICAgIGNvbnN0IGxldmVsID0gSU5GT19MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgbm9kZSk7XG4gIH1cblxuICB3YXJuaW5nKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBXQVJOSU5HX0xFVkVMO1xuXG4gICAgdGhpcy53cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBub2RlKTtcbiAgfVxuXG4gIGVycm9yKG1lc3NhZ2UsIG5vZGUgPSBudWxsKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBFUlJPUl9MRVZFTDtcblxuICAgIHRoaXMud3JpdGVUb0xvZyhsZXZlbCwgbWVzc2FnZSwgbm9kZSk7XG4gIH1cblxuICB3cml0ZVRvTG9nKGxldmVsLCBtZXNzYWdlLCBub2RlKSB7XG4gICAgY29uc3QgbGluZUluZGV4ID0gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMsIHRoaXMubGluZUluZGV4KSxcbiAgICAgICAgICBmaWxlUGF0aCA9IChsaW5lSW5kZXggPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZVBhdGggOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgdGhpcy5jb250ZXh0LndyaXRlVG9Mb2cobGV2ZWwsIG1lc3NhZ2UsIGZpbGVQYXRoLCBsaW5lSW5kZXgpO1xuXG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXg7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXBhcmUoKTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybmluZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgYmVjYXVzZSBpdCBjYW5ub3QgYmUgcGFyc2VkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGZpbGVOb2RlID0gdGhpcy5ub2RlOyAvLy9cblxuICAgICAgdmVyaWZpZXMgPSB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgdmVyaWZpZXMgP1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCkgOlxuICAgICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICAgIHRoaXMuaW5mbyhgLi4udmVyaWZpZWQgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHByZXBhcmUoKSB7XG4gICAgaWYgKHRoaXMudG9rZW5zICE9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuZmluZEZpbGUodGhpcy5maWxlUGF0aCksXG4gICAgICAgICAgbGV4ZXIgPSB0aGlzLmdldExleGVyKCksXG4gICAgICAgICAgcGFyc2VyID0gdGhpcy5nZXRQYXJzZXIoKSxcbiAgICAgICAgICBjb250ZW50ID0gZmlsZS5nZXRDb250ZW50KCk7XG5cbiAgICB0aGlzLnRva2VucyA9IGxleGVyLnRva2VuaXNlKGNvbnRlbnQpO1xuXG4gICAgdGhpcy5ub2RlID0gcGFyc2VyLnBhcnNlKHRoaXMudG9rZW5zKTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbnVsbDtcblxuICAgIHRoaXMudHlwZXMgPSBbXTtcbiAgICB0aGlzLnJ1bGVzID0gW107XG4gICAgdGhpcy5heGlvbXMgPSBbXTtcbiAgICB0aGlzLmxlbW1hcyA9IFtdO1xuICAgIHRoaXMudGhlb3JlbXMgPSBbXTtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IFtdO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IFtdO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBbXTtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gW107XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSBbXTtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IFtdO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gW107XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gW107XG4gIH1cblxuICBjb21wbGV0ZSgpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IG51bGw7XG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy50eXBlcyA9IFtdO1xuXG4gICAgdHlwZXNGcm9tSlNPTihqc29uLCB0aGlzLnR5cGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnJ1bGVzID0gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzRnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzVG9UeXBlc0pTT04odGhpcy50eXBlcyksXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXNUb1J1bGVzSlNPTih0aGlzLnJ1bGVzKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zVG9BeGlvbXNKU09OKHRoaXMuYXhpb21zKSxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoaXMudGhlb3JlbXMpLFxuICAgICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odGhpcy52YXJpYWJsZXMpLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04odGhpcy5jb25qZWN0dXJlcyksXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTih0aGlzLmNvbWJpbmF0b3JzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHRoaXMudHlwZVByZWZpeGVzKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKHRoaXMuY29uc3RydWN0b3JzKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKHRoaXMubWV0YXRoZW9yZW1zKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKHRoaXMubWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0pTT04sICAvLy9cbiAgICAgICAgICBheGlvbXMgPSBheGlvbXNKU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICB0eXBlUHJlZml4ZXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGZpbGUuZ2V0UGF0aCgpLFxuICAgICAgICAgIGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IG5ldyBGaWxlQ29udGV4dChjb250ZXh0LCBmaWxlUGF0aCwgbGluZUluZGV4LCB0b2tlbnMsIG5vZGUsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcyk7XG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGluZUluZGV4ID0gbnVsbCxcbiAgICAgICAgICB0b2tlbnMgPSBudWxsLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHR5cGVzID0gbnVsbCxcbiAgICAgICAgICBydWxlcyA9IG51bGwsXG4gICAgICAgICAgYXhpb21zID0gbnVsbCxcbiAgICAgICAgICBsZW1tYXMgPSBudWxsLFxuICAgICAgICAgIHRoZW9yZW1zID0gbnVsbCxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBudWxsLFxuICAgICAgICAgIG1ldGFMZW1tYXMgPSBudWxsLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gbnVsbCxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IG51bGwsXG4gICAgICAgICAgdHlwZVByZWZpeGVzID0gbnVsbCxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBudWxsLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgbWV0YXZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQoY29udGV4dCwgZmlsZVBhdGgsIGxpbmVJbmRleCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJjaGFpbkNvbnRleHQiLCJjb250ZXh0VXRpbGl0aWVzIiwibGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJMRVZFTFMiLCJUUkFDRV9MRVZFTCIsIkRFQlVHX0xFVkVMIiwiSU5GT19MRVZFTCIsIldBUk5JTkdfTEVWRUwiLCJFUlJPUl9MRVZFTCIsImNvbnRleHQiLCJmaWxlUGF0aCIsImxpbmVJbmRleCIsInRva2VucyIsIm5vZGUiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJtZXRhTGVtbWFzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsInR5cGVQcmVmaXhlcyIsImNvbnN0cnVjdG9ycyIsIm1ldGF0aGVvcmVtcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRDb250ZXh0IiwiZ2V0RmlsZVBhdGgiLCJnZXRMaW5lSW5kZXgiLCJnZXRUb2tlbnMiLCJnZXROb2RlIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJFcXVpdmFsZW5jZXMiLCJlbGVtZW50cyIsImVxdWl2YWxlbmNlcyIsImZyb21Ob3RoaW5nIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlUmVsZWFzZSIsImxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUxhYmVsIiwiZ2V0TGFiZWwiLCJnZXRUeXBlcyIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJnZXRSdWxlcyIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsImdldE1ldGF2YXJpYWJsZXMiLCJhZGRUeXBlIiwidHlwZSIsImFkZFJ1bGUiLCJhZGRBeGlvbSIsImFkZExlbW1hIiwiYWRkVGhlb3JlbSIsImFkZFZhcmlhYmxlIiwidmFyaWFibGUiLCJhZGRNZXRhTGVtbWEiLCJtZXRhTGVtbWEiLCJhZGRDb25qZWN0dXJlIiwiYWRkQ29tYmluYXRvciIsImNvbWJpbmF0b3IiLCJhZGRUeXBlUHJlZml4IiwidHlwZVByZWZpeCIsImFkZENvbnN0cnVjdG9yIiwiY29uc3RydWN0b3IiLCJhZGRNZXRhdGhlb3JlbSIsImFkZE1ldGF2YXJpYWJsZSIsIm1ldGF2YXJpYWJsZSIsImZpbmRMYWJlbEJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwibGFiZWwiLCJmaW5kIiwibWV0YXZhcmlhYmxlVW5pZmllcyIsInVuaWZ5UmVmZXJlbmNlIiwiZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlIiwibWV0YUxlbW1hQ29tcGFyZXNUb1JlZmVyZW5jZSIsImNvbXBhcmVSZWZlcmVuY2UiLCJmaW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZSIsIm1ldGF0aGVvcmVtQ29tcGFyZXNUb1JlZmVyZW5jZSIsImZpbmRSdWxlQnlSZWZlcmVuY2UiLCJtZXRhdmFyaWFibGVOYW1lIiwiZ2V0TWV0YXZhcmlhYmxlTmFtZSIsInJ1bGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwiZmluZEF4aW9tQnlSZWZlcmVuY2UiLCJheGlvbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZExlbW1hQnlSZWZlcmVuY2UiLCJsZW1tYUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZFRoZW9yZW1CeVJlZmVyZW5jZSIsInRoZW9yZW1Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRQcm9jZWR1cmVCeU5hbWUiLCJuYW1lIiwicHJvY2VkdXJlIiwibmFtZU1hdGNoZXMiLCJtYXRjaE5hbWUiLCJmaW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlIiwiY29uamVjdHVyZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbiIsInRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbiIsImZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZSIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZSIsImZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25zQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25zIiwiZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UiLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZpbmRNZXRhdmFyaWFibGUiLCJzcGVjaWZpY01ldGF2YXJpYWJsZSIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJ1bmlmeU1ldGF2YXJpYWJsZSIsImZpbmRUeXBlQnlUeXBlTmFtZSIsInR5cGVOYW1lIiwiYmFzZVR5cGUiLCJiYXNlVHlwZUZyb21Ob3RoaW5nIiwidHlwZUNvbXBhcmVzVG9UeXBlTmFtZSIsImNvbXBhcmVUeXBlTmFtZSIsImZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUiLCJub21pbmFsVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSIsImNvbXBhcmVOb21pbmFsVHlwZU5hbWUiLCJmaW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZSIsInByZWZpeGVkVHlwZU5hbWUiLCJ0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUiLCJjb21wYXJlUHJlZml4ZWRUeXBlTmFtZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGVzIiwiZ2V0TWV0YVR5cGVzIiwibWV0YVR5cGUiLCJtZXRhVHlwZUNvbXBhcmVzVG9NZXRhVHlwZU5hbWUiLCJjb21wYXJlTWV0YVR5cGVOYW1lIiwiZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lIiwiY29tcGFyZVR5cGVQcmVmaXhOYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lIiwibGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlRXF1YWxUb0xhYmVsTWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50IiwianVkZ2VtZW50U2luZ3VsYXIiLCJpc1Npbmd1bGFyIiwianVkZ2VtZW50TWV0YXZhcmlhYmxlIiwiZ2V0TWV0YXZhcmlhYmxlIiwianVkZ2VtZW50TWV0YXZhcmlhYmxlRXF1YWxUb01ldGF2YXJpYWJsZSIsImlzRXF1YWxUbyIsImZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudCIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSIsInR5cGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZSIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeFByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJsYWJlbFByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsInNvbWUiLCJsYWJlbFVuaWZpZXMiLCJ1bmlmeUxhYmVsIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50IiwiZ2V0RmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImdldERlcHRoIiwiZGVwdGgiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwibGV2ZWwiLCJ3cml0ZVRvTG9nIiwiZGVidWciLCJpbmZvIiwid2FybmluZyIsImVycm9yIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJwcmVwYXJlIiwiZmlsZU5vZGUiLCJ2ZXJpZnlGaWxlIiwiY29tcGxldGUiLCJjbGVhciIsImZpbGUiLCJmaW5kRmlsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJpbml0aWFsaXNlIiwianNvbiIsInR5cGVzRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwiYXhpb21zRnJvbUpTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsInRoZW9yZW1zRnJvbUpTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwidG9KU09OIiwidHlwZXNKU09OIiwidHlwZXNUb1R5cGVzSlNPTiIsInJ1bGVzSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJheGlvbXNKU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJmcm9tRmlsZSIsImdldFBhdGgiLCJmcm9tRmlsZVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBd0NxQkE7Ozt5QkF0Q1U7MkJBQ0U7K0RBRVo7eUJBRUU7c0JBQ0k7cUJBQ1M7b0JBQ1E7b0JBd0JLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFRQyxPQUFpQkMseUJBQWMsQ0FBL0JELE1BQU1FLFNBQVdELHlCQUFjLENBQXpCQyxRQUNOQyxlQUE2Q0MsNkJBQWdCLENBQTdERCxjQUFjRSw2QkFBK0JELDZCQUFnQixDQUEvQ0MsNEJBQ3VEQywyQkFBQUEsaUJBQU0sTUFBM0VDLGNBQXFFRCxZQUF4REUsY0FBd0RGLFlBQTNDRyxhQUEyQ0gsWUFBL0JJLGdCQUErQkosWUFBaEJLLGNBQWdCTDtBQUU5RCxJQUFBLEFBQU1QLDRCQUFOO2FBQU1BLFlBQ1BhLFFBQU8sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFB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