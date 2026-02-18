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
            node
        ]);
        _this.lexer = lexer;
        _this.parser = parser;
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
            key: "getLexer",
            value: function getLexer() {
                if (this.lexer === null) {
                    var combinedCustomGrammar = this.getCombinedCustomGrammar(), nominalLexer = nominalLexerFromCombinedCustomGrammar(_lexer.default, combinedCustomGrammar);
                    this.lexer = nominalLexer; ///
                }
                return this.lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
                if (this.parser === null) {
                    var combinedCustomGrammar = this.getCombinedCustomGrammar(), nominalParser = nominalParserFromCombinedCustomGrammar(_parser.default, combinedCustomGrammar);
                    this.parser = nominalParser; ///
                }
                return this.parser;
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
                var filePath = this.getFilePath(), typeString = type.toString();
                this.trace("Added the '".concat(typeString, "' type to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addRule",
            value: function addRule(rule) {
                this.rules.push(rule);
                var filePath = this.getFilePath(), ruleString = rule.toString();
                this.trace("Added the '".concat(ruleString, "' rule to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addAxiom",
            value: function addAxiom(axiom) {
                this.axioms.push(axiom);
                var filePath = this.getFilePath(), axiomString = axiom.toString();
                this.trace("Added the '".concat(axiomString, "' axiom to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addLemma",
            value: function addLemma(lemma) {
                this.lemmas.push(lemma);
                var filePath = this.getFilePath(), lemmaString = lemma.toString();
                this.trace("Added the '".concat(lemmaString, "' lemma to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addTheorem",
            value: function addTheorem(theorem) {
                this.theorems.push(theorem);
                var filePath = this.getFilePath(), theoremString = theorem.toString();
                this.trace("Added the '".concat(theoremString, "' theorem to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                this.variables.push(variable);
                var filePath = this.getFilePath(), variableString = variable.toString();
                this.trace("Added the '".concat(variableString, "' variable to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addMetaLemma",
            value: function addMetaLemma(metaLemma) {
                this.metaLemmas.push(metaLemma);
                var filePath = this.getFilePath(), metaLemmaString = metaLemma.toString();
                this.trace("Added the '".concat(metaLemmaString, "' meta-lemma to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addConjecture",
            value: function addConjecture(conjecture) {
                this.conjectures.push(conjecture);
                var filePath = this.getFilePath(), ocnjectureString = ocnjecture.toString();
                this.trace("Added the '".concat(ocnjectureString, "' ocnjecture to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addCombinator",
            value: function addCombinator(combinator) {
                this.combinators.push(combinator);
                var filePath = this.getFilePath(), combinatorString = combinator.toString();
                this.trace("Added the '".concat(combinatorString, "' combinator to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addTypePrefix",
            value: function addTypePrefix(typePrefix) {
                this.typePrefixes.push(typePrefix);
                var filePath = this.getFilePath(), typePrefixString = typePrefix.toString();
                this.trace("Added the '".concat(typePrefixString, "' type-prefix to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addConstructor",
            value: function addConstructor(constructor) {
                this.constructors.push(constructor);
                var filePath = this.getFilePath(), constructorString = constructor.toString();
                this.trace("Added the '".concat(constructorString, "' constructor to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addMetatheorem",
            value: function addMetatheorem(metatheorem) {
                this.metatheorems.push(metatheorem);
                var filePath = this.getFilePath(), metatheoremString = metatheorem.toString();
                this.trace("Added the '".concat(metatheoremString, "' metatheorem to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addMetavariable",
            value: function addMetavariable(metavariable) {
                this.metavariables.push(metavariable);
                var filePath = this.getFilePath(), metavariableString = metavariable.toString();
                this.trace("Added the '".concat(metavariableString, "' metavariable to the '").concat(filePath, "' file context."));
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
            key: "findJudgementByMetavariableName",
            value: function findJudgementByMetavariableName(metavariableName) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementMetavariableComparesToMetavariable = judgement.matchMetavariableName(metavariableName);
                    if (judgementMetavariableComparesToMetavariable) {
                        return true;
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
            key: "isMetavariablePresent",
            value: function isMetavariablePresent(metavariable) {
                metavariable = this.findMetavariable(metavariable);
                var metavariablePresent = metavariable !== null;
                return metavariablePresent;
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
                var lexer = null, parser = null, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], typePrefixes = [], constructors = [], metatheorems = [], metavariables = [], nominalFileContext = _occamlanguages.FileContext.fromFile(NominalFileContext, file, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables, context1);
                return nominalFileContext;
            }
        },
        {
            key: "fromFilePath",
            value: function fromFilePath(filePath, context1) {
                var lexer = null, parser = null, types = null, rules = null, axioms = null, lemmas = null, theorems = null, variables = null, metaLemmas = null, conjectures = null, combinators = null, typePrefixes = null, constructors = null, metatheorems = null, metavariables = null, nominalFileContext = _occamlanguages.FileContext.fromFilePath(NominalFileContext, filePath, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables, context1);
                return nominalFileContext;
            }
        }
    ]);
    return NominalFileContext;
}(_occamlanguages.FileContext);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ub21pbmFsXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBOb21pbmFsTGV4ZXIgZnJvbSBcIi4uLy4uL25vbWluYWwvbGV4ZXJcIjtcbmltcG9ydCBOb21pbmFsUGFyc2VyIGZyb20gXCIuLi8uLi9ub21pbmFsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlGaWxlIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyB0eXBlc0Zyb21KU09OLFxuICAgICAgICAgcnVsZXNGcm9tSlNPTixcbiAgICAgICAgIGF4aW9tc0Zyb21KU09OLFxuICAgICAgICAgdHlwZXNUb1R5cGVzSlNPTixcbiAgICAgICAgIHJ1bGVzVG9SdWxlc0pTT04sXG4gICAgICAgICB0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBsZW1tYXNGcm9tTm90aGluZyxcbiAgICAgICAgIGF4aW9tc1RvQXhpb21zSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzRnJvbUpTT04sXG4gICAgICAgICBjb21iaW5hdG9yc0Zyb21KU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzRnJvbUpTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNGcm9tSlNPTixcbiAgICAgICAgIG1ldGF0aGVvcmVtc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc0Zyb21KU09OLFxuICAgICAgICAgbWV0YUxlbW1hc0Zyb21Ob3RoaW5nLFxuICAgICAgICAgdGhlb3JlbXNUb1RoZW9yZW1zSlNPTixcbiAgICAgICAgIHZhcmlhYmxlc1RvVmFyaWFibGVzSlNPTixcbiAgICAgICAgIGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04sXG4gICAgICAgICBjb21iaW5hdG9yc1RvQ29tYmluYXRvcnNKU09OLFxuICAgICAgICAgdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OLFxuICAgICAgICAgY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OLFxuICAgICAgICAgbWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBwdXNoLCBmaWx0ZXIgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBsZXhlcnNVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxQYXJzZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIH0gPSBwYXJzZXJzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb21pbmFsRmlsZUNvbnRleHQgZXh0ZW5kcyBGaWxlQ29udGV4dCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUsIGxleGVyLCBwYXJzZXIsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIGZpbGVQYXRoLCB0b2tlbnMsIG5vZGUpO1xuXG4gICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgIHRoaXMucGFyc2VyID0gcGFyc2VyO1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5maWxlUGF0aCA9IGZpbGVQYXRoO1xuICAgIHRoaXMudG9rZW5zID0gdG9rZW5zO1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy50eXBlcyA9IHR5cGVzO1xuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgICB0aGlzLmF4aW9tcyA9IGF4aW9tcztcbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hcztcbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXM7XG4gICAgdGhpcy52YXJpYWJsZXMgPSB2YXJpYWJsZXM7XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gbWV0YUxlbW1hcztcbiAgICB0aGlzLmNvbmplY3R1cmVzID0gY29uamVjdHVyZXM7XG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzO1xuICAgIHRoaXMudHlwZVByZWZpeGVzID0gdHlwZVByZWZpeGVzO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzO1xuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zO1xuICAgIHRoaXMubWV0YXZhcmlhYmxlcyA9IG1ldGF2YXJpYWJsZXM7XG4gIH1cblxuICBnZXRMZXhlcigpIHtcbiAgICBpZiAodGhpcy5sZXhlciA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgY29tYmluZWRDdXN0b21HcmFtbWFyID0gdGhpcy5nZXRDb21iaW5lZEN1c3RvbUdyYW1tYXIoKSxcbiAgICAgICAgICAgIG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbExleGVyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpO1xuXG4gICAgICB0aGlzLmxleGVyID0gbm9taW5hbExleGVyOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5sZXhlcjtcbiAgfVxuXG4gIGdldFBhcnNlcigpIHtcbiAgICBpZiAodGhpcy5wYXJzZXIgPT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IHRoaXMuZ2V0Q29tYmluZWRDdXN0b21HcmFtbWFyKCksXG4gICAgICAgICAgICBub21pbmFsUGFyc2VyID0gbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbFBhcnNlciwgY29tYmluZWRDdXN0b21HcmFtbWFyKTtcblxuICAgICAgdGhpcy5wYXJzZXIgPSBub21pbmFsUGFyc2VyOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5wYXJzZXI7XG4gIH1cblxuICBnZXRKdWRnZW1lbnRzKCkge1xuICAgIGNvbnN0IGp1ZGdlbWVudHMgPSBbXTtcblxuICAgIHJldHVybiBqdWRnZW1lbnRzO1xuICB9XG5cbiAgZ2V0RXF1aXZhbGVuY2VzKCkge1xuICAgIGNvbnN0IHsgRXF1aXZhbGVuY2VzIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gW107XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLmNvbnRleHQuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlbW1hTGFiZWxzID0gbGVtbWEuZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIGxlbW1hTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgICAgY29uc3QgdGhlb3JlbUxhYmVscyA9IHRoZW9yZW0uZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY29uamVjdHVyZXMuZm9yRWFjaCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICBjb25zdCBjb25qZWN0dXJlTGFiZWxzID0gY29uamVjdHVyZS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgY29uamVjdHVyZUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5tZXRhdGhlb3JlbXMuZm9yRWFjaCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1MYWJlbCA9IG1ldGF0aGVvcmVtLmdldExhYmVsKCk7XG5cbiAgICAgICAgbGFiZWxzLnB1c2gobWV0YXRoZW9yZW1MYWJlbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlLCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcykgOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXM7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFJ1bGVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVsZXM7XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldEF4aW9tcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvbXM7XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVtbWFzO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVvcmVtcztcblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFByb2NlZHVyZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0TWV0YUxlbW1hcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YUxlbW1hcztcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRDb25qZWN0dXJlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmplY3R1cmVzO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbWJpbmF0b3JzO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRUeXBlUHJlZml4ZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZVByZWZpeGVzO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9ycztcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldE1ldGF0aGVvcmVtcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhdGhlb3JlbXM7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUudG9TdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt0eXBlU3RyaW5nfScgdHlwZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZFJ1bGUocnVsZSkge1xuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHJ1bGVTdHJpbmcgPSBydWxlLnRvU3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRBeGlvbShheGlvbSkge1xuICAgIHRoaXMuYXhpb21zLnB1c2goYXhpb20pO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgYXhpb21TdHJpbmcgPSBheGlvbS50b1N0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbGVtbWFTdHJpbmcgPSBsZW1tYS50b1N0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2xlbW1hU3RyaW5nfScgbGVtbWEgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRUaGVvcmVtKHRoZW9yZW0pIHtcbiAgICB0aGlzLnRoZW9yZW1zLnB1c2godGhlb3JlbSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICB0aGVvcmVtU3RyaW5nID0gdGhlb3JlbS50b1N0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke3RoZW9yZW1TdHJpbmd9JyB0aGVvcmVtIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkVmFyaWFibGUodmFyaWFibGUpIHtcbiAgICB0aGlzLnZhcmlhYmxlcy5wdXNoKHZhcmlhYmxlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIHZhcmlhYmxlU3RyaW5nID0gdmFyaWFibGUudG9TdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSkge1xuICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBtZXRhTGVtbWFTdHJpbmcgPSBtZXRhTGVtbWEudG9TdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHttZXRhTGVtbWFTdHJpbmd9JyBtZXRhLWxlbW1hIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkQ29uamVjdHVyZShjb25qZWN0dXJlKSB7XG4gICAgdGhpcy5jb25qZWN0dXJlcy5wdXNoKGNvbmplY3R1cmUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgb2NuamVjdHVyZVN0cmluZyA9IG9jbmplY3R1cmUudG9TdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHtvY25qZWN0dXJlU3RyaW5nfScgb2NuamVjdHVyZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZENvbWJpbmF0b3IoY29tYmluYXRvcikge1xuICAgIHRoaXMuY29tYmluYXRvcnMucHVzaChjb21iaW5hdG9yKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGNvbWJpbmF0b3JTdHJpbmcgPSBjb21iaW5hdG9yLnRvU3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRUeXBlUHJlZml4KHR5cGVQcmVmaXgpIHtcbiAgICB0aGlzLnR5cGVQcmVmaXhlcy5wdXNoKHR5cGVQcmVmaXgpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHR5cGVQcmVmaXgudG9TdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt0eXBlUHJlZml4U3RyaW5nfScgdHlwZS1wcmVmaXggdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRDb25zdHJ1Y3Rvcihjb25zdHJ1Y3Rvcikge1xuICAgIHRoaXMuY29uc3RydWN0b3JzLnB1c2goY29uc3RydWN0b3IpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgY29uc3RydWN0b3JTdHJpbmcgPSBjb25zdHJ1Y3Rvci50b1N0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2NvbnN0cnVjdG9yU3RyaW5nfScgY29uc3RydWN0b3IgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRNZXRhdGhlb3JlbShtZXRhdGhlb3JlbSkge1xuICAgIHRoaXMubWV0YXRoZW9yZW1zLnB1c2gobWV0YXRoZW9yZW0pO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbWV0YXRoZW9yZW1TdHJpbmcgPSBtZXRhdGhlb3JlbS50b1N0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke21ldGF0aGVvcmVtU3RyaW5nfScgbWV0YXRoZW9yZW0gdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS50b1N0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke21ldGF2YXJpYWJsZVN0cmluZ30nIG1ldGF2YXJpYWJsZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZVVuaWZpZXMgPSBsYWJlbC51bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmdldE1ldGFMZW1tYXMoKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBtZXRhTGVtbWFzLmZpbmQoKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YUxlbW1hQ29tcGFyZXNUb1JlZmVyZW5jZSA9IG1ldGFMZW1tYS5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhTGVtbWFDb21wYXJlc1RvUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gdGhpcy5nZXRNZXRhdGhlb3JlbXMoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtcy5maW5kKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1Db21wYXJlc1RvUmVmZXJlbmNlID0gbWV0YXRoZW9yZW0uY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXRoZW9yZW1Db21wYXJlc1RvUmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW07XG4gIH1cblxuICBmaW5kUnVsZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHJ1bGVzID0gdGhpcy5nZXRSdWxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBydWxlcy5maW5kKChydWxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydWxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBydWxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocnVsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tcyA9IHRoaXMuZ2V0QXhpb21zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgYXhpb20gPSBheGlvbXMuZmluZCgoYXhpb20pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF4aW9tQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBheGlvbS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGF4aW9tQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBheGlvbTtcbiAgfVxuXG4gIGZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IHRoaXMuZ2V0TGVtbWFzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgbGVtbWEgPSBsZW1tYXMuZmluZCgobGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxlbW1hQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBsZW1tYS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGxlbW1hQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsZW1tYTtcbiAgfVxuXG4gIGZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdGhlb3JlbXMgPSB0aGlzLmdldFRoZW9yZW1zKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoZW9yZW1zLmZpbmQoKHRoZW9yZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW9yZW1Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHRoZW9yZW0uY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGVvcmVtQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0aGVvcmVtO1xuICB9XG5cbiAgZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlcyA9IHRoaXMuZ2V0UHJvY2VkdXJlcygpLFxuICAgICAgICAgIHByb2NlZHVyZSA9IHByb2NlZHVyZXMuZmluZCgocHJvY2VkdXJlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuYW1lTWF0Y2hlcyA9IHByb2NlZHVyZS5tYXRjaE5hbWUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lTWF0Y2hlcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHByb2NlZHVyZTtcbiAgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSB0aGlzLmdldENvbmplY3R1cmVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVzLmZpbmQoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGNvbmplY3R1cmUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25qZWN0dXJlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9XG5cbiAgZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5nZXRNZXRhTGVtbWFzKCk7XG5cbiAgICBmaWx0ZXIobWV0YUxlbW1hcywgKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbWV0YUxlbW1hLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdGhlb3JlbXMgPSB0aGlzLmdldE1ldGF0aGVvcmVtcygpO1xuXG4gICAgZmlsdGVyKG1ldGF0aGVvcmVtcywgKG1ldGF0aGVvcmVtKSA9PiB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSBtZXRhdGhlb3JlbSwgLy8vXG4gICAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzID0gcmVmZXJlbmNlLnVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uKHRvcExldmVsTWV0YUFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmICh0b3BMZXZlbE1ldGFBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtcztcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWEgPSB0aGlzLmZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIG1ldGF0aGVvcmVtID0gdGhpcy5maW5kTWV0YXRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IChtZXRhTGVtbWEgfHwgbWV0YXRoZW9yZW0pOyAgLy8vXG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5maW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gdGhpcy5maW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25zID0gW1xuICAgICAgICAgICAgLi4ubWV0YUxlbW1hcyxcbiAgICAgICAgICAgIC4uLm1ldGF0aGVvcmVtc1xuICAgICAgICAgIF07XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGZpbmRUb3BMZXZlbEFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGF4aW9tID0gdGhpcy5maW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGxlbW1hID0gdGhpcy5maW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGlzLmZpbmRUaGVvcmVtQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBjb25qZWN0dXJlID0gdGhpcy5maW5kQ29uamVjdHVyZUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSAoYXhpb20gfHwgbGVtbWEgfHwgdGhlb3JlbSB8fCBjb25qZWN0dXJlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIGZpbmRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIHNwZWNpZmljTWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlOyAgLy8vXG5cbiAgICBtZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGVzLmZpbmQoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgZ2VuZXJhbE1ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZSwgLy8vXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gZ2VuZXJhbE1ldGF2YXJpYWJsZS51bmlmeU1ldGF2YXJpYWJsZShzcGVjaWZpY01ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgIHR5cGVzID0gW1xuICAgICAgLi4udHlwZXMsXG4gICAgICBiYXNlVHlwZVxuICAgIF07XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSA9IHR5cGUuY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVDb21wYXJlc1RvVHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgIHR5cGVzID0gW1xuICAgICAgLi4udHlwZXMsXG4gICAgICBiYXNlVHlwZVxuICAgIF07XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0eXBlLmNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgIHR5cGVzID0gW1xuICAgICAgLi4udHlwZXMsXG4gICAgICBiYXNlVHlwZVxuICAgIF07XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lID0gdHlwZS5jb21wYXJlUHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVDb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZVByZWZpeEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcygpLFxuICAgICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4ZXMuZmluZCgodHlwZVByZWZpeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeENvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXguY29tcGFyZVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVQcmVmaXhDb21wYXJlc1RvVHlwZVByZWZpeE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBsYWJlbC5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGxhYmVsLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IHRoaXMuZ2V0SnVkZ2VtZW50cygpLFxuICAgICAgICAgIGp1ZGdlbWVudCA9IGp1ZGdlbWVudHMuZmluZCgoanVkZ2VtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlID0ganVkZ2VtZW50Lm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBqdWRnZW1lbnQ7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UgPSB0cnVlLCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlUeXBlTmFtZSh0eXBlTmFtZSwgaW5jbHVkZVJlbGVhc2UsIGluY2x1ZGVEZXBlbmRlbmNpZXMpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5Tm9taW5hbFR5cGVOYW1lKG5vbWluYWxUeXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlc2VudCA9ICh0eXBlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSkge1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlZml4UHJlc2VudEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ID0gdGhpcy5maW5kVHlwZVByZWZpeEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVmaXhQcmVzZW50ID0gKHR5cGVQcmVmaXggIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhQcmVzZW50O1xuICB9XG5cbiAgaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpIHtcbiAgICBjb25zdCB2YXJpYWJsZSA9IHRoaXMuZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSxcbiAgICAgICAgICB2YXJpYWJsZVByZXNlbnQgPSAodmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIGxhYmVsUHJlc2VudCA9IChsYWJlbCAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpIHtcbiAgICBjb25zdCBsYWJlbCA9IHRoaXMuZmluZExhYmVsQnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSAobWV0YXZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50KG1ldGF2YXJpYWJsZSkge1xuICAgIG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUpO1xuXG4gICAgY29uc3QgbWV0YXZhcmlhYmxlUHJlc2VudCA9IChtZXRhdmFyaWFibGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUobmFtZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZSA9IHRoaXMuZmluZFByb2NlZHVyZUJ5TmFtZShuYW1lKSxcbiAgICAgICAgICBwcm9jZWR1cmVQcmVzZW50ID0gKHByb2NlZHVyZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gcHJvY2VkdXJlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbGFiZWxzID0gdGhpcy5nZXRMYWJlbHMoKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSBsYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgICAgICAgIGxhYmVsVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlUHJlc2VudCA9IG1ldGF2YXJpYWJsZXMuc29tZSgobWV0YXZhcmlhYmxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBtZXRhdmFyaWFibGVVbmlmaWVzID0gcmVmZXJlbmNlLnVuaWZ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChtZXRhdmFyaWFibGVVbmlmaWVzKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCB0b3BMZXZlbE1ldGFBc3NlcnRpb24gPSB0aGlzLmZpbmRUb3BMZXZlbE1ldGFBc3NlcnRpb25CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQgPSAodG9wTGV2ZWxNZXRhQXNzZXJ0aW9uICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50O1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50eXBlcyA9IFtdO1xuICAgIHRoaXMucnVsZXMgPSBbXTtcbiAgICB0aGlzLmF4aW9tcyA9IFtdO1xuICAgIHRoaXMubGVtbWFzID0gW107XG4gICAgdGhpcy50aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMudmFyaWFibGVzID0gW107XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gW107XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IFtdO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBbXTtcbiAgICB0aGlzLnR5cGVQcmVmaXhlcyA9IFtdO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gW107XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBbXTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBbXTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudHlwZXMgPSBbXTtcblxuICAgIHR5cGVzRnJvbUpTT04oanNvbiwgdGhpcy50eXBlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmxlbW1hcyA9IGxlbW1hc0Zyb21Ob3RoaW5nKCk7XG5cbiAgICB0aGlzLnRoZW9yZW1zID0gdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXNGcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IGNvbmplY3R1cmVzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5jb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICB0aGlzLmNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9yc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHRoaXMubWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeUZpbGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLFxuICAgICAgICAgIGZpbGVOb2RlID0gbm9kZSwgIC8vL1xuICAgICAgICAgIGZpbGVWZXJpZmllcyA9IGF3YWl0IHZlcmlmeUZpbGUoZmlsZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGZpbGVWZXJpZmllcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCB0eXBlc0pTT04gPSB0eXBlc1RvVHlwZXNKU09OKHRoaXMudHlwZXMpLFxuICAgICAgICAgIHJ1bGVzSlNPTiA9IHJ1bGVzVG9SdWxlc0pTT04odGhpcy5ydWxlcyksXG4gICAgICAgICAgYXhpb21zSlNPTiA9IGF4aW9tc1RvQXhpb21zSlNPTih0aGlzLmF4aW9tcyksXG4gICAgICAgICAgdGhlb3JlbXNKU09OID0gdGhlb3JlbXNUb1RoZW9yZW1zSlNPTih0aGlzLnRoZW9yZW1zKSxcbiAgICAgICAgICB2YXJpYWJsZXNKU09OID0gdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OKHRoaXMudmFyaWFibGVzKSxcbiAgICAgICAgICBjb25qZWN0dXJlc0pTT04gPSBjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OKHRoaXMuY29uamVjdHVyZXMpLFxuICAgICAgICAgIGNvbWJpbmF0b3JzSlNPTiA9IGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04odGhpcy5jb21iaW5hdG9ycyksXG4gICAgICAgICAgdHlwZVByZWZpeGVzSlNPTiA9IHR5cGVQcmVmaXhlc1RvVHlwZVByZWZpeGVzSlNPTih0aGlzLnR5cGVQcmVmaXhlcyksXG4gICAgICAgICAgY29uc3RydWN0b3JzSlNPTiA9IGNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTih0aGlzLmNvbnN0cnVjdG9ycyksXG4gICAgICAgICAgbWV0YXRoZW9yZW1zSlNPTiA9IG1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTih0aGlzLm1ldGF0aGVvcmVtcyksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlc0pTT04gPSBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTih0aGlzLm1ldGF2YXJpYWJsZXMpLFxuICAgICAgICAgIGZpbGVQYXRoID0gdGhpcy5maWxlUGF0aCxcbiAgICAgICAgICB0eXBlcyA9IHR5cGVzSlNPTiwgIC8vL1xuICAgICAgICAgIHJ1bGVzID0gcnVsZXNKU09OLCAgLy8vXG4gICAgICAgICAgYXhpb21zID0gYXhpb21zSlNPTiwgIC8vL1xuICAgICAgICAgIHRoZW9yZW1zID0gdGhlb3JlbXNKU09OLCAgLy8vXG4gICAgICAgICAgdmFyaWFibGVzID0gdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmplY3R1cmVzID0gY29uamVjdHVyZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBjb21iaW5hdG9yc0pTT04sICAvLy9cbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IG1ldGF0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgICAgICB0eXBlcyxcbiAgICAgICAgICAgIHJ1bGVzLFxuICAgICAgICAgICAgYXhpb21zLFxuICAgICAgICAgICAgdGhlb3JlbXMsXG4gICAgICAgICAgICB2YXJpYWJsZXMsXG4gICAgICAgICAgICBjb25qZWN0dXJlcyxcbiAgICAgICAgICAgIGNvbWJpbmF0b3JzLFxuICAgICAgICAgICAgdHlwZVByZWZpeGVzLFxuICAgICAgICAgICAgY29uc3RydWN0b3JzLFxuICAgICAgICAgICAgbWV0YXRoZW9yZW1zLFxuICAgICAgICAgICAgbWV0YXZhcmlhYmxlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZShmaWxlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGV4ZXIgPSBudWxsLFxuICAgICAgICAgIHBhcnNlciA9IG51bGwsXG4gICAgICAgICAgdHlwZXMgPSBbXSxcbiAgICAgICAgICBydWxlcyA9IFtdLFxuICAgICAgICAgIGF4aW9tcyA9IFtdLFxuICAgICAgICAgIGxlbW1hcyA9IFtdLFxuICAgICAgICAgIHRoZW9yZW1zID0gW10sXG4gICAgICAgICAgdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbWV0YUxlbW1hcyA9IFtdLFxuICAgICAgICAgIGNvbmplY3R1cmVzID0gW10sXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBbXSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXMgPSBbXSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBbXSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzID0gW10sXG4gICAgICAgICAgbm9taW5hbEZpbGVDb250ZXh0ID0gRmlsZUNvbnRleHQuZnJvbUZpbGUoTm9taW5hbEZpbGVDb250ZXh0LCBmaWxlLCBsZXhlciwgcGFyc2VyLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxGaWxlQ29udGV4dDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRmlsZVBhdGgoZmlsZVBhdGgsIGNvbnRleHQpIHtcbiAgICBjb25zdCBsZXhlciA9IG51bGwsXG4gICAgICAgICAgcGFyc2VyID0gbnVsbCxcbiAgICAgICAgICB0eXBlcyA9IG51bGwsXG4gICAgICAgICAgcnVsZXMgPSBudWxsLFxuICAgICAgICAgIGF4aW9tcyA9IG51bGwsXG4gICAgICAgICAgbGVtbWFzID0gbnVsbCxcbiAgICAgICAgICB0aGVvcmVtcyA9IG51bGwsXG4gICAgICAgICAgdmFyaWFibGVzID0gbnVsbCxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gbnVsbCxcbiAgICAgICAgICBjb25qZWN0dXJlcyA9IG51bGwsXG4gICAgICAgICAgY29tYmluYXRvcnMgPSBudWxsLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IG51bGwsXG4gICAgICAgICAgY29uc3RydWN0b3JzID0gbnVsbCxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSBudWxsLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBudWxsLFxuICAgICAgICAgIG5vbWluYWxGaWxlQ29udGV4dCA9IEZpbGVDb250ZXh0LmZyb21GaWxlUGF0aChOb21pbmFsRmlsZUNvbnRleHQsIGZpbGVQYXRoLCBsZXhlciwgcGFyc2VyLCB0eXBlcywgcnVsZXMsIGF4aW9tcywgbGVtbWFzLCB0aGVvcmVtcywgdmFyaWFibGVzLCBtZXRhTGVtbWFzLCBjb25qZWN0dXJlcywgY29tYmluYXRvcnMsIHR5cGVQcmVmaXhlcywgY29uc3RydWN0b3JzLCBtZXRhdGhlb3JlbXMsIG1ldGF2YXJpYWJsZXMsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIG5vbWluYWxGaWxlQ29udGV4dDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIk5vbWluYWxGaWxlQ29udGV4dCIsInB1c2giLCJhcnJheVV0aWxpdGllcyIsImZpbHRlciIsIm5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJsZXhlcnNVdGlsaXRpZXMiLCJub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsInBhcnNlcnNVdGlsaXRpZXMiLCJjb250ZXh0IiwiZmlsZVBhdGgiLCJ0b2tlbnMiLCJub2RlIiwibGV4ZXIiLCJwYXJzZXIiLCJ0eXBlcyIsInJ1bGVzIiwiYXhpb21zIiwibGVtbWFzIiwidGhlb3JlbXMiLCJ2YXJpYWJsZXMiLCJtZXRhTGVtbWFzIiwiY29uamVjdHVyZXMiLCJjb21iaW5hdG9ycyIsInR5cGVQcmVmaXhlcyIsImNvbnN0cnVjdG9ycyIsIm1ldGF0aGVvcmVtcyIsIm1ldGF2YXJpYWJsZXMiLCJnZXRMZXhlciIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImdldENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm5vbWluYWxMZXhlciIsIk5vbWluYWxMZXhlciIsImdldFBhcnNlciIsIm5vbWluYWxQYXJzZXIiLCJOb21pbmFsUGFyc2VyIiwiZ2V0SnVkZ2VtZW50cyIsImp1ZGdlbWVudHMiLCJnZXRFcXVpdmFsZW5jZXMiLCJFcXVpdmFsZW5jZXMiLCJlbGVtZW50cyIsImVxdWl2YWxlbmNlcyIsImZyb21Ob3RoaW5nIiwiZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJnZXRMYWJlbHMiLCJpbmNsdWRlUmVsZWFzZSIsImxhYmVscyIsInJlbGVhc2VDb250ZXh0TGFiZWxzIiwiZm9yRWFjaCIsInJ1bGUiLCJydWxlTGFiZWxzIiwiYXhpb20iLCJheGlvbUxhYmVscyIsImxlbW1hIiwibGVtbWFMYWJlbHMiLCJ0aGVvcmVtIiwidGhlb3JlbUxhYmVscyIsImNvbmplY3R1cmUiLCJjb25qZWN0dXJlTGFiZWxzIiwibWV0YXRoZW9yZW0iLCJtZXRhdGhlb3JlbUxhYmVsIiwiZ2V0TGFiZWwiLCJnZXRUeXBlcyIsImluY2x1ZGVEZXBlbmRlbmNpZXMiLCJnZXRSdWxlcyIsImdldEF4aW9tcyIsImdldExlbW1hcyIsImdldFRoZW9yZW1zIiwiZ2V0VmFyaWFibGVzIiwiZ2V0UHJvY2VkdXJlcyIsInByb2NlZHVyZXMiLCJnZXRNZXRhTGVtbWFzIiwiZ2V0Q29uamVjdHVyZXMiLCJnZXRDb21iaW5hdG9ycyIsImdldFR5cGVQcmVmaXhlcyIsImdldENvbnN0cnVjdG9ycyIsImdldE1ldGF0aGVvcmVtcyIsImdldE1ldGF2YXJpYWJsZXMiLCJhZGRUeXBlIiwidHlwZSIsImdldEZpbGVQYXRoIiwidHlwZVN0cmluZyIsInRvU3RyaW5nIiwidHJhY2UiLCJhZGRSdWxlIiwicnVsZVN0cmluZyIsImFkZEF4aW9tIiwiYXhpb21TdHJpbmciLCJhZGRMZW1tYSIsImxlbW1hU3RyaW5nIiwiYWRkVGhlb3JlbSIsInRoZW9yZW1TdHJpbmciLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVTdHJpbmciLCJhZGRNZXRhTGVtbWEiLCJtZXRhTGVtbWEiLCJtZXRhTGVtbWFTdHJpbmciLCJhZGRDb25qZWN0dXJlIiwib2NuamVjdHVyZVN0cmluZyIsIm9jbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJhZGRUeXBlUHJlZml4IiwidHlwZVByZWZpeCIsInR5cGVQcmVmaXhTdHJpbmciLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JTdHJpbmciLCJhZGRNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtU3RyaW5nIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZmluZExhYmVsQnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJsYWJlbCIsImZpbmQiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlSZWZlcmVuY2UiLCJmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFDb21wYXJlc1RvUmVmZXJlbmNlIiwiY29tcGFyZVJlZmVyZW5jZSIsImZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlIiwibWV0YXRoZW9yZW1Db21wYXJlc1RvUmVmZXJlbmNlIiwiZmluZFJ1bGVCeVJlZmVyZW5jZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJnZXRNZXRhdmFyaWFibGVOYW1lIiwicnVsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJmaW5kQXhpb21CeVJlZmVyZW5jZSIsImF4aW9tQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTGVtbWFCeVJlZmVyZW5jZSIsImxlbW1hQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlIiwidGhlb3JlbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZFByb2NlZHVyZUJ5TmFtZSIsIm5hbWUiLCJwcm9jZWR1cmUiLCJuYW1lTWF0Y2hlcyIsIm1hdGNoTmFtZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJjb25qZWN0dXJlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZ2VuZXJhbE1ldGF2YXJpYWJsZSIsInVuaWZ5TWV0YXZhcmlhYmxlIiwiZmluZFR5cGVCeVR5cGVOYW1lIiwidHlwZU5hbWUiLCJiYXNlVHlwZSIsImJhc2VUeXBlRnJvbU5vdGhpbmciLCJ0eXBlQ29tcGFyZXNUb1R5cGVOYW1lIiwiY29tcGFyZVR5cGVOYW1lIiwiZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZSIsIm5vbWluYWxUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lIiwiY29tcGFyZU5vbWluYWxUeXBlTmFtZSIsImZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lIiwicHJlZml4ZWRUeXBlTmFtZSIsInR5cGVDb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSIsImNvbXBhcmVQcmVmaXhlZFR5cGVOYW1lIiwiZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4Q29tcGFyZXNUb1R5cGVQcmVmaXhOYW1lIiwiY29tcGFyZVR5cGVQcmVmaXhOYW1lIiwiZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUlkZW50aWZpZXIiLCJ2YXJpYWJsZUNvbXBhcmVzVG9WYXJpYWJsZUlkZW50aWZpZXIiLCJjb21wYXJlVmFyaWFibGVJZGVudGlmaWVyIiwiZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lIiwibGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlIiwibGFiZWxNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImZpbmRKdWRnZW1lbnRCeU1ldGF2YXJpYWJsZU5hbWUiLCJqdWRnZW1lbnQiLCJqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwiZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJpc1R5cGVQcmVmaXhQcmVzZW50QnlUeXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhQcmVzZW50IiwiaXNWYXJpYWJsZVByZXNlbnRCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwibGFiZWxQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZVByZXNlbnQiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJpc1Byb2NlZHVyZVByZXNlbnRCeU5hbWUiLCJwcm9jZWR1cmVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeVJlZmVyZW5jZSIsInNvbWUiLCJsYWJlbFVuaWZpZXMiLCJ1bmlmeUxhYmVsIiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UiLCJpc1RvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnRCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvblByZXNlbnQiLCJjbGVhciIsImNvbXBsZXRlIiwiaW5pdGlhbGlzZSIsImpzb24iLCJmaWxlQ29udGV4dCIsInR5cGVzRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwiYXhpb21zRnJvbUpTT04iLCJsZW1tYXNGcm9tTm90aGluZyIsInRoZW9yZW1zRnJvbUpTT04iLCJ2YXJpYWJsZXNGcm9tSlNPTiIsIm1ldGFMZW1tYXNGcm9tTm90aGluZyIsImNvbmplY3R1cmVzRnJvbUpTT04iLCJjb21iaW5hdG9yc0Zyb21KU09OIiwidHlwZVByZWZpeGVzRnJvbUpTT04iLCJjb25zdHJ1Y3RvcnNGcm9tSlNPTiIsIm1ldGF0aGVvcmVtc0Zyb21KU09OIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwidmVyaWZ5RmlsZSIsImZpbGVOb2RlIiwiZmlsZVZlcmlmaWVzIiwiZ2V0Tm9kZSIsInRvSlNPTiIsInR5cGVzSlNPTiIsInR5cGVzVG9UeXBlc0pTT04iLCJydWxlc0pTT04iLCJydWxlc1RvUnVsZXNKU09OIiwiYXhpb21zSlNPTiIsImF4aW9tc1RvQXhpb21zSlNPTiIsInRoZW9yZW1zSlNPTiIsInRoZW9yZW1zVG9UaGVvcmVtc0pTT04iLCJ2YXJpYWJsZXNKU09OIiwidmFyaWFibGVzVG9WYXJpYWJsZXNKU09OIiwiY29uamVjdHVyZXNKU09OIiwiY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTiIsImNvbWJpbmF0b3JzSlNPTiIsImNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04iLCJ0eXBlUHJlZml4ZXNKU09OIiwidHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OIiwiY29uc3RydWN0b3JzSlNPTiIsImNvbnN0cnVjdG9yc1RvQ29uc3RydWN0b3JzSlNPTiIsIm1ldGF0aGVvcmVtc0pTT04iLCJtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04iLCJtZXRhdmFyaWFibGVzSlNPTiIsIm1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OIiwiZnJvbUZpbGUiLCJmaWxlIiwibm9taW5hbEZpbGVDb250ZXh0IiwiRmlsZUNvbnRleHQiLCJmcm9tRmlsZVBhdGgiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBeUNxQkE7Ozs4QkF2Q087eUJBQ0c7NEJBQ21COytEQUU3Qjs0REFDSTs2REFDQztzQkFFQztvQkFDUztvQkF3QmE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQVFDLE9BQWlCQyx5QkFBYyxDQUEvQkQsTUFBTUUsU0FBV0QseUJBQWMsQ0FBekJDLFFBQ1IsQUFBRUMsd0NBQTBDQyw2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