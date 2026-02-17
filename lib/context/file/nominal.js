"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return NominalFileContext;
    }
});
var _occamlanguages = require("occam-languages");
var _necessary = require("necessary");
var _occamnominal = require("occam-nominal");
var _elements = /*#__PURE__*/ _interop_require_default(require("../../elements"));
var _lexer = /*#__PURE__*/ _interop_require_default(require("../../nominal/lexer"));
var _parser = /*#__PURE__*/ _interop_require_default(require("../../nominal/parser"));
var _verify = require("../../process/verify");
var _type = require("../../utilities/type");
var _json = require("../../utilities/json");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
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
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var push = _necessary.arrayUtilities.push, filter = _necessary.arrayUtilities.filter, nominalLexerFromCombinedCustomGrammar = _occamnominal.lexersUtilities.nominalLexerFromCombinedCustomGrammar, nominalParserFromCombinedCustomGrammar = _occamnominal.parsersUtilities.nominalParserFromCombinedCustomGrammar;
var NominalFileContext = /*#__PURE__*/ function(FileContext) {
    _inherits(NominalFileContext, FileContext);
    function NominalFileContext(context1, filePath, tokens, node, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables) {
        _class_call_check(this, NominalFileContext);
        var _this;
        _this = _call_super(this, NominalFileContext, [
            context1,
            filePath,
            tokens,
            node,
            lexer,
            parser
        ]);
        _this.context = context1;
        _this.filePath = filePath;
        _this.tokens = tokens;
        _this.node = node;
        _this.types = types;
        _this.rules = rules;
        _this.axioms = axioms;
        _this.lemmas = lemmas;
        _this.theorems = theorems;
        _this.variables = variables;
        _this.metaLemmas = metaLemmas;
        _this.conjectures = conjectures;
        _this.combinators = combinators;
        _this.typePrefixes = typePrefixes;
        _this.constructors = constructors;
        _this.metatheorems = metatheorems;
        _this.metavariables = metavariables;
        return _this;
    }
    _create_class(NominalFileContext, [
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
                var baseType = (0, _type.baseTypeFromNothing)();
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
                var baseType = (0, _type.baseTypeFromNothing)();
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
                var baseType = (0, _type.baseTypeFromNothing)();
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
                    var labelMetavariableComparesToMetavariable = label.compareMetavariable(metavariable);
                    if (labelMetavariableComparesToMetavariable) {
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
                        var judgementMetavariableComparesToMetavariable = judgement.compareMetavariable(metavariable);
                        if (judgementMetavariableComparesToMetavariable) {
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
            key: "getLexer",
            value: function getLexer() {
                var combinedCustomGrammar = this.getCombinedCustomGrammar(), nominalLexer = nominalLexerFromCombinedCustomGrammar(_lexer.default, combinedCustomGrammar), lexer = nominalLexer; ///
                return lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                var combinedCustomGrammar = this.getCombinedCustomGrammar(), nominalParser = nominalParserFromCombinedCustomGrammar(_parser.default, combinedCustomGrammar), parser = nominalParser; ///
                return parser;
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
            key: "complete",
            value: function complete() {
            ///
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
            key: "verifyFile",
            value: function verifyFile() {
                return _async_to_generator(function() {
                    var node, context1, fileNode, fileVerifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                node = this.getNode(), context1 = this, fileNode = node;
                                return [
                                    4,
                                    (0, _verify.verifyFile)(fileNode, context1)
                                ];
                            case 1:
                                fileVerifies = _state.sent();
                                return [
                                    2,
                                    fileVerifies
                                ];
                        }
                    });
                }).call(this);
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
                var lexer = null, parser = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], typePrefixes = [], constructors = [], metatheorems = [], metavariables = [], nominalFileContext = _occamlanguages.FileContext.fromFileLexerAndParser(NominalFileContext, file, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables, context1);
                return nominalFileContext;
            }
        },
        {
            key: "fromFilePath",
            value: function fromFilePath(filePath, context1) {
                var lexer = null, parser = null, types = null, rules = null, axioms = null, lemmas = null, theorems = null, variables = null, metaLemmas = null, conjectures = null, combinators = null, typePrefixes = null, constructors = null, metatheorems = null, metavariables = null, nominalFileContext = _occamlanguages.FileContext.fromFilePathLexerAndParser(NominalFileContext, filePath, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables, context1);
                return nominalFileContext;
            }
        }
    ]);
    return NominalFileContext;
}(_occamlanguages.FileContext);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ub21pbmFsXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBOb21pbmFsTGV4ZXIgZnJvbSBcIi4uLy4uL25vbWluYWwvbGV4ZXJcIjtcbmltcG9ydCBOb21pbmFsUGFyc2VyIGZyb20gXCIuLi8uLi9ub21pbmFsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlGaWxlIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyB0eXBlc0Zyb21KU09OLFxuICAgICAgICAgcnVsZXNGcm9tSlNPTixcbiAgICAgICAgIGF4aW9tc0Zyb21KU09OLFxuICAgICAgICAgdHlwZXNUb1R5cGVzSlNPTixcbiAgICAgICAgIHJ1bGVzVG9SdWxlc0pTT04sXG4gICAgICAgICB0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBsZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIGF4aW9tc1RvQXhpb21zSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzRnJvbUpTT04sXG4gICAgICAgICBjb21iaW5hdG9yc0Zyb21KU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzRnJvbUpTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNGcm9tSlNPTixcbiAgICAgICAgIG1ldGF0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc0Zyb21KU09OLFxuICAgICAgICAgbWV0YUxlbW1hc0Zyb21Ob3RoaW5nLFxuICAgICAgICAgdGhlb3JlbXNUb1RoZW9yZW1zSlNPTixcbiAgICAgICAgIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04sXG4gICAgICAgICBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb21pbmFsRmlsZUNvbnRleHQgZXh0ZW5kcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGxleGVyLCBwYXJzZXIsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGxleGVyLCBwYXJzZXIpO1xuXG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IFtdO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgY29uc3QgeyBFcXVpdmFsZW5jZXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIGVxdWl2YWxlbmNlcyA9IEVxdWl2YWxlbmNlcy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgIHJldHVybiBlcXVpdmFsZW5jZXM7XG4gIH1cblxuICBnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKCkge1xuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSBbXTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zO1xuICB9XG5cbiAgZ2V0TGFiZWxzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IFtdO1xuXG4gICAgaWYgKGluY2x1ZGVSZWxlYXNlKSB7XG4gICAgICBjb25zdCByZWxlYXNlQ29udGV4dExhYmVscyA9IHRoaXMuY29udGV4dC5nZXRMYWJlbHMoKTtcblxuICAgICAgcHVzaChsYWJlbHMsIHJlbGVhc2VDb250ZXh0TGFiZWxzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5ydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJ1bGVMYWJlbHMgPSBydWxlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBydWxlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLmF4aW9tcy5mb3JFYWNoKChheGlvbSkgPT4ge1xuICAgICAgICBjb25zdCBheGlvbUxhYmVscyA9IGF4aW9tLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBheGlvbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5sZW1tYXMuZm9yRWFjaCgobGVtbWEpID0+IHtcbiAgICAgICAgY29uc3QgbGVtbWFMYWJlbHMgPSBsZW1tYS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgbGVtbWFMYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMudGhlb3JlbXMuZm9yRWFjaCgodGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcmVtTGFiZWxzID0gdGhlb3JlbS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgdGhlb3JlbUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5jb25qZWN0dXJlcy5mb3JFYWNoKChjb25qZWN0dXJlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbmplY3R1cmVMYWJlbHMgPSBjb25qZWN0dXJlLmdldExhYmVscygpO1xuXG4gICAgICAgIHB1c2gobGFiZWxzLCBjb25qZWN0dXJlTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLm1ldGF0aGVvcmVtcy5mb3JFYWNoKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUxhYmVsID0gbWV0YXRoZW9yZW0uZ2V0TGFiZWwoKTtcblxuICAgICAgICBsYWJlbHMucHVzaChtZXRhdGhlb3JlbUxhYmVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHM7XG4gIH1cblxuICBnZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRUeXBlcyhpbmNsdWRlRGVwZW5kZW5jaWVzKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlcztcblxuICAgIHJldHVybiB0eXBlcztcbiAgfVxuXG4gIGdldFJ1bGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0UnVsZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ydWxlcztcblxuICAgIHJldHVybiBydWxlcztcbiAgfVxuXG4gIGdldEF4aW9tcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBheGlvbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0QXhpb21zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmF4aW9tcztcblxuICAgIHJldHVybiBheGlvbXM7XG4gIH1cblxuICBnZXRMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldExlbW1hcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW1tYXM7XG5cbiAgICByZXR1cm4gbGVtbWFzO1xuICB9XG5cbiAgZ2V0VGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRUaGVvcmVtcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRoZW9yZW1zO1xuXG4gICAgcmV0dXJuIHRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0VmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLnZhcmlhYmxlcztcbiAgfVxuXG4gIGdldFByb2NlZHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0UHJvY2VkdXJlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGw7ICAvLy9cblxuICAgIHJldHVybiBwcm9jZWR1cmVzO1xuICB9XG5cbiAgZ2V0TWV0YUxlbW1hcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRNZXRhTGVtbWFzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhTGVtbWFzO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYXM7XG4gIH1cblxuICBnZXRDb25qZWN0dXJlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbmplY3R1cmVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uamVjdHVyZXM7XG5cbiAgICByZXR1cm4gY29uamVjdHVyZXM7XG4gIH1cblxuICBnZXRDb21iaW5hdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb21iaW5hdG9ycyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldENvbWJpbmF0b3JzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tYmluYXRvcnM7XG5cbiAgICByZXR1cm4gY29tYmluYXRvcnM7XG4gIH1cblxuICBnZXRUeXBlUHJlZml4ZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFR5cGVQcmVmaXhlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50eXBlUHJlZml4ZXM7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeGVzO1xuICB9XG5cbiAgZ2V0Q29uc3RydWN0b3JzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNvbnN0cnVjdG9ycyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRDb25zdHJ1Y3RvcnMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3RydWN0b3JzO1xuXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9ycztcbiAgfVxuXG4gIGdldE1ldGF0aGVvcmVtcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0TWV0YXRoZW9yZW1zKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGF0aGVvcmVtcztcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbXM7XG4gIH1cblxuICBnZXRNZXRhdmFyaWFibGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIHJldHVybiB0aGlzLm1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBhZGRUeXBlKHR5cGUpIHtcbiAgICB0aGlzLnR5cGVzLnB1c2godHlwZSk7XG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuICB9XG5cbiAgYWRkTGVtbWEobGVtbWEpIHtcbiAgICB0aGlzLmxlbW1hcy5wdXNoKGxlbW1hKTtcbiAgfVxuXG4gIGFkZFRoZW9yZW0odGhlb3JlbSkge1xuICAgIHRoaXMudGhlb3JlbXMucHVzaCh0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZFZhcmlhYmxlKHZhcmlhYmxlKSB7XG4gICAgdGhpcy52YXJpYWJsZXMucHVzaCh2YXJpYWJsZSk7XG4gIH1cblxuICBhZGRNZXRhTGVtbWEobWV0YUxlbW1hKSB7XG4gICAgdGhpcy5tZXRhTGVtbWFzLnB1c2gobWV0YUxlbW1hKTtcbiAgfVxuXG4gIGFkZENvbmplY3R1cmUoY29uamVjdHVyZSkge1xuICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcbiAgfVxuXG4gIGFkZFR5cGVQcmVmaXgodHlwZVByZWZpeCkge1xuICAgIHRoaXMudHlwZVByZWZpeGVzLnB1c2godHlwZVByZWZpeCk7XG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuICB9XG5cbiAgYWRkTWV0YXRoZW9yZW0obWV0YXRoZW9yZW0pIHtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcy5wdXNoKG1ldGF0aGVvcmVtKTtcbiAgfVxuXG4gIGFkZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMucHVzaChtZXRhdmFyaWFibGUpO1xuICB9XG5cbiAgZmluZExhYmVsQnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGxhYmVsLnVuaWZ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IHRoaXMuZ2V0TWV0YUxlbW1hcygpLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG1ldGFMZW1tYXMuZmluZCgobWV0YUxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhTGVtbWFDb21wYXJlc1RvUmVmZXJlbmNlID0gbWV0YUxlbW1hLmNvbXBhcmVSZWZlcmVuY2UocmVmZXJlbmNlKTtcblxuICAgICAgICAgICAgaWYgKG1ldGFMZW1tYUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cblxuICBmaW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSB0aGlzLmdldE1ldGF0aGVvcmVtcygpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gbWV0YXRoZW9yZW1zLmZpbmQoKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUNvbXBhcmVzVG9SZWZlcmVuY2UgPSBtZXRhdGhlb3JlbS5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdGhlb3JlbUNvbXBhcmVzVG9SZWZlcmVuY2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRSdWxlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgcnVsZXMgPSB0aGlzLmdldFJ1bGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IHJ1bGVzLmZpbmQoKHJ1bGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHJ1bGUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChydWxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgZmluZEF4aW9tQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb21zID0gdGhpcy5nZXRBeGlvbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBheGlvbSA9IGF4aW9tcy5maW5kKChheGlvbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYXhpb21Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGF4aW9tLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoYXhpb21Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGF4aW9tO1xuICB9XG5cbiAgZmluZExlbW1hQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGVtbWFzID0gdGhpcy5nZXRMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBsZW1tYSA9IGxlbW1hcy5maW5kKChsZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVtbWFDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxlbW1hLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGVtbWFDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxlbW1hO1xuICB9XG5cbiAgZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0aGVvcmVtcyA9IHRoaXMuZ2V0VGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICB0aGVvcmVtID0gdGhlb3JlbXMuZmluZCgodGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGhlb3JlbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gdGhlb3JlbS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHRoZW9yZW1Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHRoZW9yZW07XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gdGhpcy5nZXRQcm9jZWR1cmVzKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlcy5maW5kKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVNYXRjaGVzID0gcHJvY2VkdXJlLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKG5hbWVNYXRjaGVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlO1xuICB9XG5cbiAgZmluZENvbmplY3R1cmVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBjb25qZWN0dXJlcyA9IHRoaXMuZ2V0Q29uamVjdHVyZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gY29uamVjdHVyZXMuZmluZCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29uamVjdHVyZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gY29uamVjdHVyZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGNvbmplY3R1cmVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmU7XG4gIH1cblxuICBmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKTtcblxuICAgIGZpbHRlcihtZXRhTGVtbWFzLCAobWV0YUxlbW1hKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBtZXRhTGVtbWEsIC8vL1xuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeVRvcExldmVsTWV0YUFzc2VydGlvbih0b3BMZXZlbE1ldGFBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCk7XG5cbiAgICBmaWx0ZXIobWV0YXRoZW9yZW1zLCAobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG1ldGF0aGVvcmVtLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYSA9IHRoaXMuZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSB0aGlzLmZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSB0aGlzLmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBbXG4gICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25zO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb20gPSB0aGlzLmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbGVtbWEgPSB0aGlzLmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoaXMuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSB0aGlzLmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IChheGlvbSB8fCBsZW1tYSB8fCB0aGVvcmVtIHx8IGNvbmplY3R1cmUpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgc3BlY2lmaWNNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGU7ICAvLy9cblxuICAgIG1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZXMuZmluZCgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICBnZW5lcmFsTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlLCAvLy9cbiAgICAgICAgICAgIG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBnZW5lcmFsTWV0YXZhcmlhYmxlLnVuaWZ5TWV0YXZhcmlhYmxlKHNwZWNpZmljTWV0YXZhcmlhYmxlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZVVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5VHlwZU5hbWUodHlwZU5hbWUsIGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSwgaW5jbHVkZURlcGVuZGVuY2llcyA9IHRydWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKGluY2x1ZGVSZWxlYXNlLCBpbmNsdWRlRGVwZW5kZW5jaWVzKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1R5cGVOYW1lID0gdHlwZS5jb21wYXJlVHlwZU5hbWUodHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9UeXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb05vbWluYWxUeXBlTmFtZSA9IHR5cGUuY29tcGFyZU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGxldCB0eXBlcyA9IHRoaXMuZ2V0VHlwZXMoKTtcblxuICAgIGNvbnN0IGJhc2VUeXBlID0gYmFzZVR5cGVGcm9tTm90aGluZygpO1xuXG4gICAgdHlwZXMgPSBbXG4gICAgICAuLi50eXBlcyxcbiAgICAgIGJhc2VUeXBlXG4gICAgXTtcblxuICAgIGNvbnN0IHR5cGUgPSB0eXBlcy5maW5kKCh0eXBlKSA9PiB7XG4gICAgICBjb25zdCB0eXBlQ29tcGFyZXNUb1ByZWZpeGVkVHlwZU5hbWUgPSB0eXBlLmNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpO1xuXG4gICAgICBpZiAodHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IHRoaXMuZ2V0VHlwZVByZWZpeGVzKCksXG4gICAgICAgICAgdHlwZVByZWZpeCA9IHR5cGVQcmVmaXhlcy5maW5kKCh0eXBlUHJlZml4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lID0gdHlwZVByZWZpeC5jb21wYXJlVHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZVByZWZpeENvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXg7XG4gIH1cblxuICBmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLmdldFZhcmlhYmxlcygpLFxuICAgICAgICAgIHZhcmlhYmxlID0gdmFyaWFibGVzLmZpbmQoKHZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIgPSB2YXJpYWJsZS5jb21wYXJlVmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcik7XG5cbiAgICAgICAgICAgIGlmICh2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxhYmVsLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbCA9IGxhYmVscy5maW5kKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0gbGFiZWwuY29tcGFyZU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgICAgICAgICBpZiAobGFiZWxNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRTaW5ndWxhciA9IGp1ZGdlbWVudC5pc1Npbmd1bGFyKCk7XG5cbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRTaW5ndWxhcikge1xuICAgICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50LmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgICBpZiAoanVkZ2VtZW50TWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXggPSB0aGlzLmZpbmRUeXBlUHJlZml4QnlUeXBlUHJlZml4TmFtZSh0eXBlUHJlZml4TmFtZSksXG4gICAgICAgICAgdHlwZVByZWZpeFByZXNlbnQgPSAodHlwZVByZWZpeCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZWZpeFByZXNlbnQ7XG4gIH1cblxuICBpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllcikge1xuICAgIGNvbnN0IHZhcmlhYmxlID0gdGhpcy5maW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpLFxuICAgICAgICAgIHZhcmlhYmxlUHJlc2VudCA9ICh2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maW5kTGFiZWxCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGUgPSB0aGlzLmZpbmRNZXRhdmFyaWFibGVCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gbGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBsYWJlbFVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlMYWJlbChsYWJlbCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNQcm9jZWR1cmVQcmVzZW50QnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmUgPSB0aGlzLmZpbmRQcm9jZWR1cmVCeU5hbWUobmFtZSksXG4gICAgICAgICAgcHJvY2VkdXJlUHJlc2VudCA9IChwcm9jZWR1cmUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IG1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gcmVmZXJlbmNlLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgZ2V0TGV4ZXIoKSB7XG4gICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gdGhpcy5nZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIoKSxcbiAgICAgICAgICBub21pbmFsTGV4ZXIgPSBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyKE5vbWluYWxMZXhlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBsZXhlciA9IG5vbWluYWxMZXhlcjsgLy8vXG5cbiAgICByZXR1cm4gbGV4ZXI7XG4gIH1cblxuICBnZXRQYXJzZXIoKSB7XG4gICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gdGhpcy5nZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIoKSxcbiAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbFBhcnNlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKSxcbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyOyAvLy9cblxuICAgIHJldHVybiBwYXJzZXI7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnR5cGVzID0gW107XG4gICAgdGhpcy5ydWxlcyA9IFtdO1xuICAgIHRoaXMuYXhpb21zID0gW107XG4gICAgdGhpcy5sZW1tYXMgPSBbXTtcbiAgICB0aGlzLnRoZW9yZW1zID0gW107XG4gICAgdGhpcy52YXJpYWJsZXMgPSBbXTtcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBbXTtcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gW107XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IFtdO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gW107XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBbXTtcbiAgICB0aGlzLm1ldGF0aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IFtdO1xuICB9XG5cbiAgY29tcGxldGUoKSB7XG4gICAgLy8vXG4gIH1cblxuICBpbml0aWFsaXNlKGpzb24pIHtcbiAgICBjb25zdCBmaWxlQ29udGV4dCA9IHRoaXM7IC8vL1xuXG4gICAgdGhpcy50eXBlcyA9IFtdO1xuXG4gICAgdHlwZXNGcm9tSlNPTihqc29uLCB0aGlzLnR5cGVzLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnJ1bGVzID0gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzRnJvbU5vdGhpbmcoKTtcblxuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMudmFyaWFibGVzID0gdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hc0Zyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RmlsZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMsXG4gICAgICAgICAgZmlsZU5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgZmlsZVZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZmlsZVZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzVG9UeXBlc0pTT04odGhpcy50eXBlcyksXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXNUb1J1bGVzSlNPTih0aGlzLnJ1bGVzKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zVG9BeGlvbXNKU09OKHRoaXMuYXhpb21zKSxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoaXMudGhlb3JlbXMpLFxuICAgICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odGhpcy52YXJpYWJsZXMpLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04odGhpcy5jb25qZWN0dXJlcyksXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTih0aGlzLmNvbWJpbmF0b3JzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHRoaXMudHlwZVByZWZpeGVzKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKHRoaXMuY29uc3RydWN0b3JzKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKHRoaXMubWV0YXRoZW9yZW1zKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKHRoaXMubWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0pTT04sICAvLy9cbiAgICAgICAgICBheGlvbXMgPSBheGlvbXNKU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICB0eXBlUHJlZml4ZXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGwsXG4gICAgICAgICAgcGFyc2VyID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBub21pbmFsRmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZUxleGVyQW5kUGFyc2VyKE5vbWluYWxGaWxlQ29udGV4dCwgZmlsZSwgbGV4ZXIsIHBhcnNlciwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBub21pbmFsRmlsZUNvbnRleHQ7XG4gIH1cblxuICBzdGF0aWMgZnJvbUZpbGVQYXRoKGZpbGVQYXRoLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsLFxuICAgICAgICAgIHBhcnNlciA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBudWxsLFxuICAgICAgICAgIHJ1bGVzID0gbnVsbCxcbiAgICAgICAgICBheGlvbXMgPSBudWxsLFxuICAgICAgICAgIGxlbW1hcyA9IG51bGwsXG4gICAgICAgICAgdGhlb3JlbXMgPSBudWxsLFxuICAgICAgICAgIHZhcmlhYmxlcyA9IG51bGwsXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IG51bGwsXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBudWxsLFxuICAgICAgICAgIGNvbWJpbmF0b3JzID0gbnVsbCxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBudWxsLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IG51bGwsXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbnVsbCxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBub21pbmFsRmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZVBhdGhMZXhlckFuZFBhcnNlcihOb21pbmFsRmlsZUNvbnRleHQsIGZpbGVQYXRoLCBsZXhlciwgcGFyc2VyLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxGaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vbWluYWxGaWxlQ29udGV4dCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJjb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwibGV4ZXIiLCJwYXJzZXIiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJtZXRhTGVtbWFzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsInR5cGVQcmVmaXhlcyIsImNvbnN0cnVjdG9ycyIsIm1ldGF0aGVvcmVtcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRKdWRnZW1lbnRzIiwianVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsIkVxdWl2YWxlbmNlcyIsImVsZW1lbnRzIiwiZXF1aXZhbGVuY2VzIiwiZnJvbU5vdGhpbmciLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJheGlvbSIsImF4aW9tTGFiZWxzIiwibGVtbWEiLCJsZW1tYUxhYmVscyIsInRoZW9yZW0iLCJ0aGVvcmVtTGFiZWxzIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVMYWJlbHMiLCJtZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtTGFiZWwiLCJnZXRMYWJlbCIsImdldFR5cGVzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImdldFJ1bGVzIiwiZ2V0QXhpb21zIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJnZXRWYXJpYWJsZXMiLCJnZXRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsImdldE1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0VHlwZVByZWZpeGVzIiwiZ2V0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImFkZFR5cGUiLCJ0eXBlIiwiYWRkUnVsZSIsImFkZEF4aW9tIiwiYWRkTGVtbWEiLCJhZGRUaGVvcmVtIiwiYWRkVmFyaWFibGUiLCJ2YXJpYWJsZSIsImFkZE1ldGFMZW1tYSIsIm1ldGFMZW1tYSIsImFkZENvbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImFkZFR5cGVQcmVmaXgiLCJ0eXBlUHJlZml4IiwiYWRkQ29uc3RydWN0b3IiLCJjb25zdHJ1Y3RvciIsImFkZE1ldGF0aGVvcmVtIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJsYWJlbCIsImZpbmQiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFDb21wYXJlc1RvUmVmZXJlbmNlIiwiY29tcGFyZVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwibWV0YXRoZW9yZW1Db21wYXJlc1RvUmVmZXJlbmNlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwicnVsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImxlbW1hQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwidGhlb3JlbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJwcm9jZWR1cmUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTmFtZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJjb25qZWN0dXJlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJ0eXBlQ29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSIsImNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lIiwiZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lIiwiY29tcGFyZVR5cGVQcmVmaXhOYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lIiwibGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlIiwibGFiZWxNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZSIsImp1ZGdlbWVudCIsImp1ZGdlbWVudFNpbmd1bGFyIiwiaXNTaW5ndWxhciIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJzb21lIiwibGFiZWxVbmlmaWVzIiwidW5pZnlMYWJlbCIsImlzUHJvY2VkdXJlUHJlc2VudEJ5TmFtZSIsInByb2NlZHVyZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZSIsImlzVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudEJ5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudCIsImdldExleGVyIiwiY29tYmluZWRDdXN0b21HcmFtbWFyIiwiZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyIiwibm9taW5hbExleGVyIiwiTm9taW5hbExleGVyIiwiZ2V0UGFyc2VyIiwibm9taW5hbFBhcnNlciIsIk5vbWluYWxQYXJzZXIiLCJjbGVhciIsImNvbXBsZXRlIiwiaW5pdGlhbGlzZSIsImpzb24iLCJmaWxlQ29udGV4dCIsInR5cGVzRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwiYXhpb21zRnJvbUpTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsInRoZW9yZW1zRnJvbUpTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwidmVyaWZ5RmlsZSIsImZpbGVOb2RlIiwiZmlsZVZlcmlmaWVzIiwiZ2V0Tm9kZSIsInRvSlNPTiIsInR5cGVzSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJydWxlc0pTT04iLCJydWxlc1RvUnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJ0eXBlUHJlZml4ZXNKU09OIiwidHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwiZnJvbUZpbGUiLCJmaWxlIiwibm9taW5hbEZpbGVDb250ZXh0IiwiRmlsZUNvbnRleHQiLCJmcm9tRmlsZUxleGVyQW5kUGFyc2VyIiwiZnJvbUZpbGVQYXRoIiwiZnJvbUZpbGVQYXRoTGV4ZXJBbmRQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBeUNxQkE7Ozs4QkF2Q087eUJBQ0c7NEJBQ21COytEQUU3Qjs0REFDSTs2REFDQztzQkFFQztvQkFDUztvQkF3QmE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQVFDLE9BQWlCQyx5QkFBYyxDQUEvQkQsTUFBTUUsU0FB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