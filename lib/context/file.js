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
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _verify = require("../process/verify");
var _context = require("../utilities/context");
var _types = require("../types");
var _node = require("../utilities/node");
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
var push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter;
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
        return (0, _context.chainContext)(this);
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
            key: "getFileContext",
            value: function getFileContext() {
                var fileContext = this; ///
                return fileContext;
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
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.context.trace(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "debug",
            value: function debug(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.context.debug(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "info",
            value: function info(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.context.info(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "warning",
            value: function warning(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.context.warning(message, this.filePath, this.lineIndex);
            }
        },
        {
            key: "error",
            value: function error(message) {
                var node = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
                this.lineIndex = lineIndexFromNodeAndTokens(node, this.tokens, this.lineIndex);
                this.context.error(message, this.filePath, this.lineIndex);
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
                    if (!verifies) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0L2ZpbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5cbmltcG9ydCB7IHZlcmlmeUZpbGUgfSBmcm9tIFwiLi4vcHJvY2Vzcy92ZXJpZnlcIjtcbmltcG9ydCB7IGNoYWluQ29udGV4dCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgYmFzZVR5cGVGcm9tTm90aGluZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgbm9kZUFzU3RyaW5nLCBub2Rlc0FzU3RyaW5nIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ub2RlXCI7XG5pbXBvcnQgeyB0eXBlc0Zyb21KU09OLFxuICAgICAgICAgcnVsZXNGcm9tSlNPTixcbiAgICAgICAgIGF4aW9tc0Zyb21KU09OLFxuICAgICAgICAgdHlwZXNUb1R5cGVzSlNPTixcbiAgICAgICAgIHJ1bGVzVG9SdWxlc0pTT04sXG4gICAgICAgICB0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBsZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIGF4aW9tc1RvQXhpb21zSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzRnJvbUpTT04sXG4gICAgICAgICBjb21iaW5hdG9yc0Zyb21KU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzRnJvbUpTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNGcm9tSlNPTixcbiAgICAgICAgIG1ldGF0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc0Zyb21KU09OLFxuICAgICAgICAgbWV0YUxlbW1hc0Zyb21Ob3RoaW5nLFxuICAgICAgICAgdGhlb3JlbXNUb1RoZW9yZW1zSlNPTixcbiAgICAgICAgIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04sXG4gICAgICAgICBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy5saW5lSW5kZXggPSBsaW5lSW5kZXg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcblxuICAgIHJldHVybiBjaGFpbkNvbnRleHQodGhpcyk7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXRGaWxlUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlUGF0aDtcbiAgfVxuXG4gIGdldExpbmVJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lSW5kZXg7XG4gIH1cblxuICBnZXRUb2tlbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0SnVkZ2VtZW50cygpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gW107XG5cbiAgICByZXR1cm4ganVkZ2VtZW50cztcbiAgfVxuXG4gIGdldEVxdWl2YWxlbmNlcygpIHtcbiAgICBjb25zdCB7IEVxdWl2YWxlbmNlcyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgZXF1aXZhbGVuY2VzID0gRXF1aXZhbGVuY2VzLmZyb21Ob3RoaW5nKGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgfVxuXG4gIGdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IFtdO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnM7XG4gIH1cblxuICBnZXRMYWJlbHMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gW107XG5cbiAgICBpZiAoaW5jbHVkZVJlbGVhc2UpIHtcbiAgICAgIGNvbnN0IHJlbGVhc2VDb250ZXh0TGFiZWxzID0gdGhpcy5jb250ZXh0LmdldExhYmVscygpO1xuXG4gICAgICBwdXNoKGxhYmVscywgcmVsZWFzZUNvbnRleHRMYWJlbHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzLmZvckVhY2goKHJ1bGUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZUxhYmVscyA9IHJ1bGUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHJ1bGVMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuYXhpb21zLmZvckVhY2goKGF4aW9tKSA9PiB7XG4gICAgICAgIGNvbnN0IGF4aW9tTGFiZWxzID0gYXhpb20uZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIGF4aW9tTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmxlbW1hcy5mb3JFYWNoKChsZW1tYSkgPT4ge1xuICAgICAgICBjb25zdCBsZW1tYUxhYmVscyA9IGxlbW1hLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBsZW1tYUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy50aGVvcmVtcy5mb3JFYWNoKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW9yZW1MYWJlbHMgPSB0aGVvcmVtLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCB0aGVvcmVtTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmNvbmplY3R1cmVzLmZvckVhY2goKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgY29uc3QgY29uamVjdHVyZUxhYmVscyA9IGNvbmplY3R1cmUuZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIGNvbmplY3R1cmVMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubWV0YXRoZW9yZW1zLmZvckVhY2goKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1ldGF0aGVvcmVtTGFiZWwgPSBtZXRhdGhlb3JlbS5nZXRMYWJlbCgpO1xuXG4gICAgICAgIGxhYmVscy5wdXNoKG1ldGF0aGVvcmVtTGFiZWwpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVscztcbiAgfVxuXG4gIGdldFR5cGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFR5cGVzKGluY2x1ZGVEZXBlbmRlbmNpZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVzO1xuXG4gICAgcmV0dXJuIHR5cGVzO1xuICB9XG5cbiAgZ2V0UnVsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcnVsZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRSdWxlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bGVzO1xuXG4gICAgcmV0dXJuIHJ1bGVzO1xuICB9XG5cbiAgZ2V0QXhpb21zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRBeGlvbXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXhpb21zO1xuXG4gICAgcmV0dXJuIGF4aW9tcztcbiAgfVxuXG4gIGdldExlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsZW1tYXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0TGVtbWFzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxlbW1hcztcblxuICAgIHJldHVybiBsZW1tYXM7XG4gIH1cblxuICBnZXRUaGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFRoZW9yZW1zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhlb3JlbXM7XG5cbiAgICByZXR1cm4gdGhlb3JlbXM7XG4gIH1cblxuICBnZXRWYXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMudmFyaWFibGVzO1xuICB9XG5cbiAgZ2V0UHJvY2VkdXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRQcm9jZWR1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbDsgIC8vL1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZXM7XG4gIH1cblxuICBnZXRNZXRhTGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldE1ldGFMZW1tYXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFMZW1tYXM7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGdldENvbmplY3R1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbmplY3R1cmVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0Q29uamVjdHVyZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25qZWN0dXJlcztcblxuICAgIHJldHVybiBjb25qZWN0dXJlcztcbiAgfVxuXG4gIGdldENvbWJpbmF0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbWJpbmF0b3JzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0Q29tYmluYXRvcnMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21iaW5hdG9ycztcblxuICAgIHJldHVybiBjb21iaW5hdG9ycztcbiAgfVxuXG4gIGdldFR5cGVQcmVmaXhlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VHlwZVByZWZpeGVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnR5cGVQcmVmaXhlcztcblxuICAgIHJldHVybiB0eXBlUHJlZml4ZXM7XG4gIH1cblxuICBnZXRDb25zdHJ1Y3RvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uc3RydWN0b3JzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbnN0cnVjdG9ycygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcnM7XG5cbiAgICByZXR1cm4gY29uc3RydWN0b3JzO1xuICB9XG5cbiAgZ2V0TWV0YXRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRNZXRhdGhlb3JlbXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YXRoZW9yZW1zO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGdldE1ldGF2YXJpYWJsZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgcmV0dXJuIHRoaXMubWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIGNvbnN0IGZpbGVDb250ZXh0ID0gdGhpczsgLy8vXG5cbiAgICByZXR1cm4gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRNZXRhTGVtbWEobWV0YUxlbW1hKSB7XG4gICAgdGhpcy5tZXRhTGVtbWFzLnB1c2gobWV0YUxlbW1hKTtcbiAgfVxuXG4gIGFkZENvbmplY3R1cmUoY29uamVjdHVyZSkge1xuICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgfVxuXG4gIGFkZFR5cGVQcmVmaXgodHlwZVByZWZpeCkge1xuICAgIHRoaXMudHlwZVByZWZpeGVzLnB1c2godHlwZVByZWZpeCk7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGxhYmVsLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYXMuZmluZCgobWV0YUxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFDb21wYXJlc1RvUmVmZXJlbmNlID0gbWV0YUxlbW1hLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGFMZW1tYUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cblxuICBmaW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSB0aGlzLmdldE1ldGF0aGVvcmVtcygpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1zLmZpbmQoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUNvbXBhcmVzVG9SZWZlcmVuY2UgPSBtZXRhdGhlb3JlbS5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdGhlb3JlbUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHJ1bGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGF4aW9tLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxlbW1hLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGVtbWFDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gdGhlb3JlbS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHRoZW9yZW1Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gdGhpcy5nZXRQcm9jZWR1cmVzKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlcy5maW5kKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gcHJvY2VkdXJlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gY29uamVjdHVyZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGNvbmplY3R1cmVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKTtcblxuICAgIGZpbHRlcihtZXRhTGVtbWFzLCAobWV0YUxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBtZXRhTGVtbWEsIC8vL1xuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCk7XG5cbiAgICBmaWx0ZXIobWV0YXRoZW9yZW1zLCAobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG1ldGF0aGVvcmVtLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYSA9IHRoaXMuZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSB0aGlzLmZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSB0aGlzLmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBbXG4gICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25zO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb20gPSB0aGlzLmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbGVtbWEgPSB0aGlzLmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoaXMuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSB0aGlzLmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IChheGlvbSB8fCBsZW1tYSB8fCB0aGVvcmVtIHx8IGNvbmplY3R1cmUpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLnVuaWZ5TWV0YXZhcmlhYmxlKHNwZWNpZmljTWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSB0eXBlLmNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lKG1ldGFUeXBlTmFtZSkge1xuICAgIGNvbnN0IG1ldGFUeXBlcyA9IHRoaXMuZ2V0TWV0YVR5cGVzKCksXG4gICAgICAgICAgbWV0YVR5cGUgPSBtZXRhVHlwZXMuZmluZCgobWV0YVR5cGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSA9IG1ldGFUeXBlLmNvbXBhcmVNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKG1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gdGhpcy5nZXRUeXBlUHJlZml4ZXMoKSxcbiAgICAgICAgICB0eXBlUHJlZml4ID0gdHlwZVByZWZpeGVzLmZpbmQoKHR5cGVQcmVmaXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVQcmVmaXhDb21wYXJlc1RvVHlwZVByZWZpeE5hbWUgPSB0eXBlUHJlZml4LmNvbXBhcmVUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeDtcbiAgfVxuXG4gIGZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuZ2V0VmFyaWFibGVzKCksXG4gICAgICAgICAgdmFyaWFibGUgPSB2YXJpYWJsZXMuZmluZCgodmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciA9IHZhcmlhYmxlLmNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKTtcblxuICAgICAgICAgICAgaWYgKHZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbGFiZWwuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdmFyaWFibGVFcXVhbFRvTGFiZWxNZXRhdmFyaWFibGUgPSBsYWJlbC5pc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZUVxdWFsVG9MYWJlbE1ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSB0aGlzLmdldEp1ZGdlbWVudHMoKSxcbiAgICAgICAgICBqdWRnZW1lbnQgPSBqdWRnZW1lbnRzLmZpbmQoKGp1ZGdlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QganVkZ2VtZW50U2luZ3VsYXIgPSBqdWRnZW1lbnQuaXNTaW5ndWxhcigpO1xuXG4gICAgICAgICAgICBpZiAoanVkZ2VtZW50U2luZ3VsYXIpIHtcbiAgICAgICAgICAgICAgY29uc3QganVkZ2VtZW50TWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmdldE1ldGF2YXJpYWJsZSgpLFxuICAgICAgICAgICAgICAgICAgICBqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50TWV0YXZhcmlhYmxlLmlzRXF1YWxUbyhtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudDtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBtZXRhdmFyaWFibGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudChtZXRhdmFyaWFibGUpIHtcbiAgICBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgIGNvbnN0IG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBjb25zdCB0eXBlID0gdGhpcy5maW5kVHlwZUJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeCA9IHRoaXMuZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9ICh0eXBlUHJlZml4ICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4UHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZSA9IHRoaXMuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gKHByb2NlZHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gbWV0YXZhcmlhYmxlcy5zb21lKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHRvcExldmVsTWV0YUFzc2VydGlvbiA9IHRoaXMuZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCA9ICh0b3BMZXZlbE1ldGFBc3NlcnRpb24gIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQ7XG4gIH1cblxuICBub2RlQXNTdHJpbmcobm9kZSkge1xuICAgIGNvbnN0IHN0cmluZyA9IG5vZGVBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgbm9kZXNBc1N0cmluZyhub2RlKSB7XG4gICAgY29uc3Qgc3RyaW5nID0gbm9kZXNBc1N0cmluZyhub2RlLCB0aGlzLnRva2Vucyk7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG5cbiAgdHJhY2UobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UobWVzc2FnZSwgdGhpcy5maWxlUGF0aCwgdGhpcy5saW5lSW5kZXgpO1xuICB9XG5cbiAgZGVidWcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmNvbnRleHQuZGVidWcobWVzc2FnZSwgdGhpcy5maWxlUGF0aCwgdGhpcy5saW5lSW5kZXgpO1xuICB9XG5cbiAgaW5mbyhtZXNzYWdlLCBub2RlID0gbnVsbCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMsIHRoaXMubGluZUluZGV4KTtcblxuICAgIHRoaXMuY29udGV4dC5pbmZvKG1lc3NhZ2UsIHRoaXMuZmlsZVBhdGgsIHRoaXMubGluZUluZGV4KTtcbiAgfVxuXG4gIHdhcm5pbmcobWVzc2FnZSwgbm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IGxpbmVJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRoaXMudG9rZW5zLCB0aGlzLmxpbmVJbmRleCk7XG5cbiAgICB0aGlzLmNvbnRleHQud2FybmluZyhtZXNzYWdlLCB0aGlzLmZpbGVQYXRoLCB0aGlzLmxpbmVJbmRleCk7XG4gIH1cblxuICBlcnJvcihtZXNzYWdlLCBub2RlID0gbnVsbCkge1xuICAgIHRoaXMubGluZUluZGV4ID0gbGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdGhpcy50b2tlbnMsIHRoaXMubGluZUluZGV4KTtcblxuICAgIHRoaXMuY29udGV4dC5lcnJvcihtZXNzYWdlLCB0aGlzLmZpbGVQYXRoLCB0aGlzLmxpbmVJbmRleCk7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICB0aGlzLnByZXBhcmUoKTtcblxuICAgIGlmICh0aGlzLm5vZGUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMud2FybmluZyhgVW5hYmxlIHRvIHZlcmlmeSB0aGUgJyR7dGhpcy5maWxlUGF0aH0nIGZpbGUgYmVjYXVzZSBpdCBjYW5ub3QgYmUgcGFyc2VkLmApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRlYnVnKGBWZXJpZnlpbmcgdGhlICcke3RoaXMuZmlsZVBhdGh9JyBmaWxlLi4uYCk7XG5cbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGZpbGVOb2RlID0gdGhpcy5ub2RlOyAvLy9cblxuICAgICAgdmVyaWZpZXMgPSB2ZXJpZnlGaWxlKGZpbGVOb2RlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKCF2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgICB0aGlzLmluZm8oYC4uLnZlcmlmaWVkIHRoZSAnJHt0aGlzLmZpbGVQYXRofScgZmlsZS5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnR5cGVzID0gW107XG4gICAgdGhpcy5ydWxlcyA9IFtdO1xuICAgIHRoaXMuYXhpb21zID0gW107XG4gICAgdGhpcy5sZW1tYXMgPSBbXTtcbiAgICB0aGlzLnRoZW9yZW1zID0gW107XG4gICAgdGhpcy52YXJpYWJsZXMgPSBbXTtcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBbXTtcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gW107XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IFtdO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gW107XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IFtdO1xuICB9XG5cbiAgcHJlcGFyZSgpIHtcbiAgICB0aGlzLmxpbmVJbmRleCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy50b2tlbnMgIT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlID0gdGhpcy5maW5kRmlsZSh0aGlzLmZpbGVQYXRoKSxcbiAgICAgICAgICBsZXhlciA9IHRoaXMuZ2V0TGV4ZXIoKSxcbiAgICAgICAgICBwYXJzZXIgPSB0aGlzLmdldFBhcnNlcigpLFxuICAgICAgICAgIGNvbnRlbnQgPSBmaWxlLmdldENvbnRlbnQoKTtcblxuICAgIHRoaXMudG9rZW5zID0gbGV4ZXIudG9rZW5pc2UoY29udGVudCk7XG5cbiAgICB0aGlzLm5vZGUgPSBwYXJzZXIucGFyc2UodGhpcy50b2tlbnMpO1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudHlwZXMgPSBbXTtcblxuICAgIHR5cGVzRnJvbUpTT04oanNvbiwgdGhpcy50eXBlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hc0Zyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXNGcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlc0pTT04gPSB0eXBlc1RvVHlwZXNKU09OKHRoaXMudHlwZXMpLFxuICAgICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzVG9SdWxlc0pTT04odGhpcy5ydWxlcyksXG4gICAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tc1RvQXhpb21zSlNPTih0aGlzLmF4aW9tcyksXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGlzLnRoZW9yZW1zKSxcbiAgICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHRoaXMudmFyaWFibGVzKSxcbiAgICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKHRoaXMuY29uamVjdHVyZXMpLFxuICAgICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04odGhpcy5jb21iaW5hdG9ycyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTih0aGlzLnR5cGVQcmVmaXhlcyksXG4gICAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTih0aGlzLmNvbnN0cnVjdG9ycyksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTih0aGlzLm1ldGF0aGVvcmVtcyksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTih0aGlzLm1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICB0eXBlcyA9IHR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNKU09OLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gYXhpb21zSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICB0eXBlcyxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgdGhlb3JlbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb25qZWN0dXJlcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgdHlwZVByZWZpeGVzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgbWV0YXRoZW9yZW1zLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgZmlsZVBhdGggPSBmaWxlLmdldFBhdGgoKSxcbiAgICAgICAgICBsaW5lSW5kZXggPSBudWxsLFxuICAgICAgICAgIHRva2VucyA9IG51bGwsXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSBuZXcgRmlsZUNvbnRleHQoY29udGV4dCwgZmlsZVBhdGgsIGxpbmVJbmRleCwgdG9rZW5zLCBub2RlLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMpO1xuXG4gICAgcmV0dXJuIGZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlUGF0aChmaWxlUGF0aCwgY29udGV4dCkge1xuICAgIGNvbnN0IGxpbmVJbmRleCA9IG51bGwsXG4gICAgICAgICAgdG9rZW5zID0gbnVsbCxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgbGVtbWFzID0gbnVsbCxcbiAgICAgICAgICB0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gbnVsbCxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IG51bGwsXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBudWxsLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IG51bGwsXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gbnVsbCxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBudWxsLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gbmV3IEZpbGVDb250ZXh0KGNvbnRleHQsIGZpbGVQYXRoLCBsaW5lSW5kZXgsIHRva2Vucywgbm9kZSwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKTtcblxuICAgIHJldHVybiBmaWxlQ29udGV4dDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaW5lSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMsIGxpbmVJbmRleCkge1xuICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgIGxpbmVJbmRleCA9IDA7XG5cbiAgICBjb25zdCBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCA9IG5vZGUuZ2V0Rmlyc3RTaWduaWZpY2FudFRva2VuSW5kZXgodG9rZW5zKTtcblxuICAgIHRva2Vucy5zb21lKCh0b2tlbiwgdG9rZW5JbmRleCkgPT4ge1xuICAgICAgY29uc3QgdG9rZW5FbmRPZkxpbmVUb2tlbiA9IHRva2VuLmlzRW5kT2ZMaW5lVG9rZW4oKTtcblxuICAgICAgaWYgKHRva2VuRW5kT2ZMaW5lVG9rZW4pIHtcbiAgICAgICAgbGluZUluZGV4ICs9IDE7XG4gICAgICB9XG5cbiAgICAgIGlmICh0b2tlbkluZGV4ID09PSBmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsaW5lSW5kZXg7XG59XG4iXSwibmFtZXMiOlsiRmlsZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJjb250ZXh0IiwiZmlsZVBhdGgiLCJsaW5lSW5kZXgiLCJ0b2tlbnMiLCJub2RlIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwidmFyaWFibGVzIiwibWV0YUxlbW1hcyIsImNvbmplY3R1cmVzIiwiY29tYmluYXRvcnMiLCJ0eXBlUHJlZml4ZXMiLCJjb25zdHJ1Y3RvcnMiLCJtZXRhdGhlb3JlbXMiLCJtZXRhdmFyaWFibGVzIiwiY2hhaW5Db250ZXh0IiwiZ2V0Q29udGV4dCIsImdldEZpbGVQYXRoIiwiZ2V0TGluZUluZGV4IiwiZ2V0VG9rZW5zIiwiZ2V0Tm9kZSIsImdldEp1ZGdlbWVudHMiLCJqdWRnZW1lbnRzIiwiZ2V0RXF1aXZhbGVuY2VzIiwiRXF1aXZhbGVuY2VzIiwiZWxlbWVudHMiLCJlcXVpdmFsZW5jZXMiLCJmcm9tTm90aGluZyIsImdldFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwiZ2V0TGFiZWxzIiwiaW5jbHVkZVJlbGVhc2UiLCJsYWJlbHMiLCJyZWxlYXNlQ29udGV4dExhYmVscyIsImZvckVhY2giLCJydWxlIiwicnVsZUxhYmVscyIsImF4aW9tIiwiYXhpb21MYWJlbHMiLCJsZW1tYSIsImxlbW1hTGFiZWxzIiwidGhlb3JlbSIsInRoZW9yZW1MYWJlbHMiLCJjb25qZWN0dXJlIiwiY29uamVjdHVyZUxhYmVscyIsIm1ldGF0aGVvcmVtIiwibWV0YXRoZW9yZW1MYWJlbCIsImdldExhYmVsIiwiZ2V0VHlwZXMiLCJpbmNsdWRlRGVwZW5kZW5jaWVzIiwiZ2V0UnVsZXMiLCJnZXRBeGlvbXMiLCJnZXRMZW1tYXMiLCJnZXRUaGVvcmVtcyIsImdldFZhcmlhYmxlcyIsImdldFByb2NlZHVyZXMiLCJwcm9jZWR1cmVzIiwiZ2V0TWV0YUxlbW1hcyIsImdldENvbmplY3R1cmVzIiwiZ2V0Q29tYmluYXRvcnMiLCJnZXRUeXBlUHJlZml4ZXMiLCJnZXRDb25zdHJ1Y3RvcnMiLCJnZXRNZXRhdGhlb3JlbXMiLCJnZXRNZXRhdmFyaWFibGVzIiwiZ2V0RmlsZUNvbnRleHQiLCJmaWxlQ29udGV4dCIsImFkZFR5cGUiLCJ0eXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkTGVtbWEiLCJhZGRUaGVvcmVtIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsImFkZE1ldGFMZW1tYSIsIm1ldGFMZW1tYSIsImFkZENvbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImFkZE1ldGF0aGVvcmVtIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJsYWJlbCIsImZpbmQiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFDb21wYXJlc1RvUmVmZXJlbmNlIiwiY29tcGFyZVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwibWV0YXRoZW9yZW1Db21wYXJlc1RvUmVmZXJlbmNlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwicnVsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImxlbW1hQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwidGhlb3JlbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJwcm9jZWR1cmUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTmFtZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJjb25qZWN0dXJlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJ0eXBlQ29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSIsImNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lIiwiZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUiLCJtZXRhVHlwZU5hbWUiLCJtZXRhVHlwZXMiLCJnZXRNZXRhVHlwZXMiLCJtZXRhVHlwZSIsIm1ldGFUeXBlQ29tcGFyZXNUb01ldGFUeXBlTmFtZSIsImNvbXBhcmVNZXRhVHlwZU5hbWUiLCJmaW5kVHlwZVByZWZpeEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhDb21wYXJlc1RvVHlwZVByZWZpeE5hbWUiLCJjb21wYXJlVHlwZVByZWZpeE5hbWUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUiLCJsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVFcXVhbFRvTGFiZWxNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZUVxdWFsVG9NZXRhdmFyaWFibGUiLCJmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRTaW5ndWxhciIsImlzU2luZ3VsYXIiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGUiLCJnZXRNZXRhdmFyaWFibGUiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVFcXVhbFRvTWV0YXZhcmlhYmxlIiwiaXNFcXVhbFRvIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50IiwibWV0YXZhcmlhYmxlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeVR5cGVOYW1lIiwidHlwZVByZXNlbnQiLCJpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUiLCJpc1R5cGVQcmVzZW50QnlQcmVmaXhlZFR5cGVOYW1lIiwiaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4UHJlc2VudCIsImlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZVByZXNlbnQiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlIiwic29tZSIsImxhYmVsVW5pZmllcyIsInVuaWZ5TGFiZWwiLCJpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUiLCJwcm9jZWR1cmVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJub2RlQXNTdHJpbmciLCJzdHJpbmciLCJub2Rlc0FzU3RyaW5nIiwidHJhY2UiLCJtZXNzYWdlIiwibGluZUluZGV4RnJvbU5vZGVBbmRUb2tlbnMiLCJkZWJ1ZyIsImluZm8iLCJ3YXJuaW5nIiwiZXJyb3IiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsInByZXBhcmUiLCJmaWxlTm9kZSIsInZlcmlmeUZpbGUiLCJjbGVhciIsImZpbGUiLCJmaW5kRmlsZSIsImxleGVyIiwiZ2V0TGV4ZXIiLCJwYXJzZXIiLCJnZXRQYXJzZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VuaXNlIiwicGFyc2UiLCJpbml0aWFsaXNlIiwianNvbiIsInR5cGVzRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwiYXhpb21zRnJvbUpTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsInRoZW9yZW1zRnJvbUpTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwidG9KU09OIiwidHlwZXNKU09OIiwidHlwZXNUb1R5cGVzSlNPTiIsInJ1bGVzSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJheGlvbXNKU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJmcm9tRmlsZSIsImdldFBhdGgiLCJmcm9tRmlsZVBhdGgiLCJmaXJzdFNpZ25pZmljYW50VG9rZW5JbmRleCIsImdldEZpcnN0U2lnbmlmaWNhbnRUb2tlbkluZGV4IiwidG9rZW4iLCJ0b2tlbkluZGV4IiwidG9rZW5FbmRPZkxpbmVUb2tlbiIsImlzRW5kT2ZMaW5lVG9rZW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBcUNxQkE7Ozt5QkFuQ1U7K0RBRVY7c0JBRU07dUJBQ0U7cUJBQ087b0JBQ1E7b0JBd0JLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFRQyxPQUFpQkMseUJBQWMsQ0FBL0JELE1BQU1FLFNBQVdELHlCQUFjLENBQXpCQztBQUVDLElBQUEsQUFBTUgsNEJBQU47YUFBTUEsWUFDUEksUUFBTyxFQUFFQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxXQUFXLEVBQUVDLFlBQVksRUFB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