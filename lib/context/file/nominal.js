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
var _metaTypes = require("../../metaTypes");
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
    function NominalFileContext(context, filePath, tokens, node, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables) {
        _class_call_check(this, NominalFileContext);
        var _this;
        _this = _call_super(this, NominalFileContext, [
            context,
            filePath,
            tokens,
            node
        ]);
        _this.lexer = lexer;
        _this.parser = parser;
        _this.context = context;
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
                return this.lexer;
            }
        },
        {
            key: "getParser",
            value: function getParser() {
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
                var Equivalences = _elements.default.Equivalences, context = this, equivalences = Equivalences.fromNothing(context);
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
                var filePath = this.getFilePath(), typeString = type.getString();
                this.trace("Added the '".concat(typeString, "' type to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addRule",
            value: function addRule(rule) {
                this.rules.push(rule);
                var filePath = this.getFilePath(), ruleString = rule.getString();
                this.trace("Added the '".concat(ruleString, "' rule to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addAxiom",
            value: function addAxiom(axiom) {
                this.axioms.push(axiom);
                var filePath = this.getFilePath(), axiomString = axiom.getString();
                this.trace("Added the '".concat(axiomString, "' axiom to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addLemma",
            value: function addLemma(lemma) {
                this.lemmas.push(lemma);
                var filePath = this.getFilePath(), lemmaString = lemma.getString();
                this.trace("Added the '".concat(lemmaString, "' lemma to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addTheorem",
            value: function addTheorem(theorem) {
                this.theorems.push(theorem);
                var filePath = this.getFilePath(), theoremString = theorem.getString();
                this.trace("Added the '".concat(theoremString, "' theorem to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addVariable",
            value: function addVariable(variable) {
                this.variables.push(variable);
                var filePath = this.getFilePath(), variableString = variable.getString();
                this.trace("Added the '".concat(variableString, "' variable to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addMetaLemma",
            value: function addMetaLemma(metaLemma) {
                this.metaLemmas.push(metaLemma);
                var filePath = this.getFilePath(), metaLemmaString = metaLemma.getString();
                this.trace("Added the '".concat(metaLemmaString, "' meta-lemma to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addConjecture",
            value: function addConjecture(conjecture) {
                this.conjectures.push(conjecture);
                var filePath = this.getFilePath(), ocnjectureString = ocnjecture.getString();
                this.trace("Added the '".concat(ocnjectureString, "' ocnjecture to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addCombinator",
            value: function addCombinator(combinator) {
                this.combinators.push(combinator);
                var filePath = this.getFilePath(), combinatorString = combinator.getString();
                this.trace("Added the '".concat(combinatorString, "' combinator to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addTypePrefix",
            value: function addTypePrefix(typePrefix) {
                this.typePrefixes.push(typePrefix);
                var filePath = this.getFilePath(), typePrefixString = typePrefix.getString();
                this.trace("Added the '".concat(typePrefixString, "' type-prefix to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addConstructor",
            value: function addConstructor(constructor) {
                this.constructors.push(constructor);
                var filePath = this.getFilePath(), constructorString = constructor.getString();
                this.trace("Added the '".concat(constructorString, "' constructor to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addMetatheorem",
            value: function addMetatheorem(metatheorem) {
                this.metatheorems.push(metatheorem);
                var filePath = this.getFilePath(), metatheoremString = metatheorem.getString();
                this.trace("Added the '".concat(metatheoremString, "' metatheorem to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "addMetavariable",
            value: function addMetavariable(metavariable) {
                this.metavariables.push(metavariable);
                var filePath = this.getFilePath(), metavariableString = metavariable.getString();
                this.trace("Added the '".concat(metavariableString, "' metavariable to the '").concat(filePath, "' file context."));
            }
        },
        {
            key: "findMetavariable",
            value: function findMetavariable(metavariable) {
                var _this = this;
                var metavariables = this.getMetavariables(), specificMetavariable = metavariable; ///
                metavariable = metavariables.find(function(metavariable) {
                    var context = _this, generalMetavariable = metavariable, metavariableUnifies = generalMetavariable.unifyMetavariable(specificMetavariable, context);
                    if (metavariableUnifies) {
                        return true;
                    }
                }) || null;
                return metavariable;
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
            key: "findMetaTypeByMetaTypeName",
            value: function findMetaTypeByMetaTypeName(metaTypeName) {
                var metaType = (0, _metaTypes.findMetaTypeByMetaTypeName)(metaTypeName);
                return metaType;
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
                    var context = _this, topLevelMetaAssertion = metaLemma, topLevelMetaAssertionUnifies = reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
                    if (topLevelMetaAssertionUnifies) {
                        return true;
                    }
                });
                return metaLemmas;
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
            key: "findMetatheoremsByReference",
            value: function findMetatheoremsByReference(reference) {
                var _this = this;
                var metatheorems = this.getMetatheorems();
                filter(metatheorems, function(metatheorem) {
                    var context = _this, topLevelMetaAssertion = metatheorem, topLevelMetaAssertionUnifies = reference.unifyTopLevelMetaAssertion(topLevelMetaAssertion, context);
                    if (topLevelMetaAssertionUnifies) {
                        return true;
                    }
                });
                return metatheorems;
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
            key: "findJudgementByMetavariableName",
            value: function findJudgementByMetavariableName(metavariableName) {
                var judgements = this.getJudgements(), judgement = judgements.find(function(judgement) {
                    var judgementMetavariableComparesToMetavariable = judgement.compareMetavariableName(metavariableName);
                    if (judgementMetavariableComparesToMetavariable) {
                        return true;
                    }
                }) || null;
                return judgement;
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
            key: "findProcedureByProcedureName",
            value: function findProcedureByProcedureName(procedureName) {
                var procedures = this.getProcedures(), procedure = procedures.find(function(procedure) {
                    var procedureComparesToProcedureName = procedure.compareProcedureName(procedureName);
                    if (procedureComparesToProcedureName) {
                        return true;
                    }
                }) || null;
                return procedure;
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
            key: "isLabelPresentByMetavariable",
            value: function isLabelPresentByMetavariable(metavariable) {
                var label = this.findLabelByMetavariable(metavariable), labelPresent = label !== null;
                return labelPresent;
            }
        },
        {
            key: "isLabelPresentByReference",
            value: function isLabelPresentByReference(reference) {
                var _this = this;
                var labels = this.getLabels(), labelPresent = labels.some(function(label) {
                    var context = _this, labelUnifies = reference.unifyLabel(label, context);
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
                    var context = _this, metavariableUnifies = reference.unifyMetavariable(metavariable, context);
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
            key: "isLabelPresentByMetavariableName",
            value: function isLabelPresentByMetavariableName(metavariableName) {
                var label = this.findLabelByMetavariableName(metavariableName), labelPresent = label !== null;
                return labelPresent;
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
            key: "isMetavariablePresentByMetavariableName",
            value: function isMetavariablePresentByMetavariableName(metavariableName) {
                var metavariable = this.findMetavariableByMetavariableName(metavariableName), metavariablePresent = metavariable !== null;
                return metavariablePresent;
            }
        },
        {
            key: "isProcedurePresentByProcedureName",
            value: function isProcedurePresentByProcedureName(procedureName) {
                var procedure = this.findProcedureByProcedureName(procedureName), procedurePresent = procedure !== null;
                return procedurePresent;
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
                this.lemmas = (0, _json.lemmasFromNothing)();
                this.metaLemmas = (0, _json.metaLemmasFromNothing)();
                this.metavariables = (0, _json.metavariablesFromJSON)(json, fileContext);
                this.variables = (0, _json.variablesFromJSON)(json, fileContext);
                this.rules = (0, _json.rulesFromJSON)(json, fileContext);
                this.axioms = (0, _json.axiomsFromJSON)(json, fileContext);
                this.theorems = (0, _json.theoremsFromJSON)(json, fileContext);
                this.conjectures = (0, _json.conjecturesFromJSON)(json, fileContext);
                this.combinators = (0, _json.combinatorsFromJSON)(json, fileContext);
                this.typePrefixes = (0, _json.typePrefixesFromJSON)(json, fileContext);
                this.constructors = (0, _json.constructorsFromJSON)(json, fileContext);
                this.metatheorems = (0, _json.metatheoremsFromJSON)(json, fileContext);
            }
        },
        {
            key: "verifyFile",
            value: function verifyFile() {
                return _async_to_generator(function() {
                    var node, context, fileNode, fileVerifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                node = this.getNode(), context = this, fileNode = node;
                                return [
                                    4,
                                    (0, _verify.verifyFile)(fileNode, context)
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
            value: function fromFile(file, context) {
                var releaseContext = context, combinedCustomGrammar = releaseContext.getCombinedCustomGrammar(), nominalLexer = nominalLexerFromCombinedCustomGrammar(_lexer.default, combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(_parser.default, combinedCustomGrammar), lexer = nominalLexer, parser = nominalParser, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], typePrefixes = [], constructors = [], metatheorems = [], metavariables = [], nominalFileContext = _occamlanguages.FileContext.fromFile(NominalFileContext, file, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables, context);
                return nominalFileContext;
            }
        },
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var releaseContext = context, combinedCustomGrammar = releaseContext.getCombinedCustomGrammar(), nominalLexer = nominalLexerFromCombinedCustomGrammar(_lexer.default, combinedCustomGrammar), nominalParser = nominalParserFromCombinedCustomGrammar(_parser.default, combinedCustomGrammar), lexer = nominalLexer, parser = nominalParser, types = [], rules = [], axioms = [], lemmas = [], theorems = [], variables = [], metaLemmas = [], conjectures = [], combinators = [], typePrefixes = [], constructors = [], metatheorems = [], metavariables = [], nominalFileContext = _occamlanguages.FileContext.fromJSON(NominalFileContext, json, lexer, parser, types, rules, axioms, lemmas, theorems, variables, metaLemmas, conjectures, combinators, typePrefixes, constructors, metatheorems, metavariables, context);
                nominalFileContext.initialise(json);
                return nominalFileContext;
            }
        }
    ]);
    return NominalFileContext;
}(_occamlanguages.FileContext);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250ZXh0L2ZpbGUvbm9taW5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRmlsZUNvbnRleHQgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IGxleGVyc1V0aWxpdGllcywgcGFyc2Vyc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1ub21pbmFsXCI7XG5cbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vLi4vZWxlbWVudHNcIjtcbmltcG9ydCBOb21pbmFsTGV4ZXIgZnJvbSBcIi4uLy4uL25vbWluYWwvbGV4ZXJcIjtcbmltcG9ydCBOb21pbmFsUGFyc2VyIGZyb20gXCIuLi8uLi9ub21pbmFsL3BhcnNlclwiO1xuXG5pbXBvcnQgeyB2ZXJpZnlGaWxlIH0gZnJvbSBcIi4uLy4uL3Byb2Nlc3MvdmVyaWZ5XCI7XG5pbXBvcnQgeyBiYXNlVHlwZUZyb21Ob3RoaW5nIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlXCI7XG5pbXBvcnQgeyBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZSB9IGZyb20gXCIuLi8uLi9tZXRhVHlwZXNcIjtcbmltcG9ydCB7IHR5cGVzRnJvbUpTT04sXG4gICAgICAgICBydWxlc0Zyb21KU09OLFxuICAgICAgICAgYXhpb21zRnJvbUpTT04sXG4gICAgICAgICB0eXBlc1RvVHlwZXNKU09OLFxuICAgICAgICAgcnVsZXNUb1J1bGVzSlNPTixcbiAgICAgICAgIHRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICB2YXJpYWJsZXNGcm9tSlNPTixcbiAgICAgICAgIGxlbW1hc0Zyb21Ob3RoaW5nLFxuICAgICAgICAgYXhpb21zVG9BeGlvbXNKU09OLFxuICAgICAgICAgY29uamVjdHVyZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzRnJvbUpTT04sXG4gICAgICAgICB0eXBlUHJlZml4ZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbnN0cnVjdG9yc0Zyb21KU09OLFxuICAgICAgICAgbWV0YXRoZW9yZW1zRnJvbUpTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzRnJvbUpTT04sXG4gICAgICAgICBtZXRhTGVtbWFzRnJvbU5vdGhpbmcsXG4gICAgICAgICB0aGVvcmVtc1RvVGhlb3JlbXNKU09OLFxuICAgICAgICAgdmFyaWFibGVzVG9WYXJpYWJsZXNKU09OLFxuICAgICAgICAgY29uamVjdHVyZXNUb0NvbmplY3R1cmVzSlNPTixcbiAgICAgICAgIGNvbWJpbmF0b3JzVG9Db21iaW5hdG9yc0pTT04sXG4gICAgICAgICB0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04sXG4gICAgICAgICBjb25zdHJ1Y3RvcnNUb0NvbnN0cnVjdG9yc0pTT04sXG4gICAgICAgICBtZXRhdGhlb3JlbXNUb01ldGF0aGVvcmVtc0pTT04sXG4gICAgICAgICBtZXRhdmFyaWFibGVzVG9NZXRhdmFyaWFibGVzSlNPTiB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHB1c2gsIGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IGxleGVyc1V0aWxpdGllcyxcbiAgICAgIHsgbm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIgfSA9IHBhcnNlcnNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vbWluYWxGaWxlQ29udGV4dCBleHRlbmRzIEZpbGVDb250ZXh0IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSwgbGV4ZXIsIHBhcnNlciwgdHlwZXMsIHJ1bGVzLCBheGlvbXMsIGxlbW1hcywgdGhlb3JlbXMsIHZhcmlhYmxlcywgbWV0YUxlbW1hcywgY29uamVjdHVyZXMsIGNvbWJpbmF0b3JzLCB0eXBlUHJlZml4ZXMsIGNvbnN0cnVjdG9ycywgbWV0YXRoZW9yZW1zLCBtZXRhdmFyaWFibGVzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgZmlsZVBhdGgsIHRva2Vucywgbm9kZSk7XG5cbiAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgdGhpcy5wYXJzZXIgPSBwYXJzZXI7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmZpbGVQYXRoID0gZmlsZVBhdGg7XG4gICAgdGhpcy50b2tlbnMgPSB0b2tlbnM7XG4gICAgdGhpcy5ub2RlID0gbm9kZTtcbiAgICB0aGlzLnR5cGVzID0gdHlwZXM7XG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICAgIHRoaXMuYXhpb21zID0gYXhpb21zO1xuICAgIHRoaXMubGVtbWFzID0gbGVtbWFzO1xuICAgIHRoaXMudGhlb3JlbXMgPSB0aGVvcmVtcztcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlcztcbiAgICB0aGlzLm1ldGFMZW1tYXMgPSBtZXRhTGVtbWFzO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlcztcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnM7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXM7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnM7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXM7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlcztcbiAgfVxuXG4gIGdldExleGVyKCkge1xuICAgIHJldHVybiB0aGlzLmxleGVyO1xuICB9XG5cbiAgZ2V0UGFyc2VyKCkge1xuICAgIHJldHVybiB0aGlzLnBhcnNlcjtcbiAgfVxuXG4gIGdldEp1ZGdlbWVudHMoKSB7XG4gICAgY29uc3QganVkZ2VtZW50cyA9IFtdO1xuXG4gICAgcmV0dXJuIGp1ZGdlbWVudHM7XG4gIH1cblxuICBnZXRFcXVpdmFsZW5jZXMoKSB7XG4gICAgY29uc3QgeyBFcXVpdmFsZW5jZXMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICBlcXVpdmFsZW5jZXMgPSBFcXVpdmFsZW5jZXMuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZXF1aXZhbGVuY2VzO1xuICB9XG5cbiAgZ2V0U3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucygpIHtcbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gW107XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucztcbiAgfVxuXG4gIGdldExhYmVscyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcblxuICAgIGlmIChpbmNsdWRlUmVsZWFzZSkge1xuICAgICAgY29uc3QgcmVsZWFzZUNvbnRleHRMYWJlbHMgPSB0aGlzLmNvbnRleHQuZ2V0TGFiZWxzKCk7XG5cbiAgICAgIHB1c2gobGFiZWxzLCByZWxlYXNlQ29udGV4dExhYmVscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucnVsZXMuZm9yRWFjaCgocnVsZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTGFiZWxzID0gcnVsZS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgcnVsZUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5heGlvbXMuZm9yRWFjaCgoYXhpb20pID0+IHtcbiAgICAgICAgY29uc3QgYXhpb21MYWJlbHMgPSBheGlvbS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgYXhpb21MYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMubGVtbWFzLmZvckVhY2goKGxlbW1hKSA9PiB7XG4gICAgICAgIGNvbnN0IGxlbW1hTGFiZWxzID0gbGVtbWEuZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIGxlbW1hTGFiZWxzKTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnRoZW9yZW1zLmZvckVhY2goKHRoZW9yZW0pID0+IHtcbiAgICAgICAgY29uc3QgdGhlb3JlbUxhYmVscyA9IHRoZW9yZW0uZ2V0TGFiZWxzKCk7XG5cbiAgICAgICAgcHVzaChsYWJlbHMsIHRoZW9yZW1MYWJlbHMpO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY29uamVjdHVyZXMuZm9yRWFjaCgoY29uamVjdHVyZSkgPT4ge1xuICAgICAgICBjb25zdCBjb25qZWN0dXJlTGFiZWxzID0gY29uamVjdHVyZS5nZXRMYWJlbHMoKTtcblxuICAgICAgICBwdXNoKGxhYmVscywgY29uamVjdHVyZUxhYmVscyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5tZXRhdGhlb3JlbXMuZm9yRWFjaCgobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgICAgY29uc3QgbWV0YXRoZW9yZW1MYWJlbCA9IG1ldGF0aGVvcmVtLmdldExhYmVsKCk7XG5cbiAgICAgICAgbGFiZWxzLnB1c2gobWV0YXRoZW9yZW1MYWJlbCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzO1xuICB9XG5cbiAgZ2V0VHlwZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlLCBpbmNsdWRlRGVwZW5kZW5jaWVzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVzID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VHlwZXMoaW5jbHVkZURlcGVuZGVuY2llcykgOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZXM7XG5cbiAgICByZXR1cm4gdHlwZXM7XG4gIH1cblxuICBnZXRSdWxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBydWxlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFJ1bGVzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucnVsZXM7XG5cbiAgICByZXR1cm4gcnVsZXM7XG4gIH1cblxuICBnZXRBeGlvbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgYXhpb21zID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldEF4aW9tcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5heGlvbXM7XG5cbiAgICByZXR1cm4gYXhpb21zO1xuICB9XG5cbiAgZ2V0TGVtbWFzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGxlbW1hcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRMZW1tYXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGVtbWFzO1xuXG4gICAgcmV0dXJuIGxlbW1hcztcbiAgfVxuXG4gIGdldFRoZW9yZW1zKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0VGhlb3JlbXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aGVvcmVtcztcblxuICAgIHJldHVybiB0aGVvcmVtcztcbiAgfVxuXG4gIGdldFZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy52YXJpYWJsZXM7XG4gIH1cblxuICBnZXRQcm9jZWR1cmVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHByb2NlZHVyZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldFByb2NlZHVyZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsOyAgLy8vXG5cbiAgICByZXR1cm4gcHJvY2VkdXJlcztcbiAgfVxuXG4gIGdldE1ldGFMZW1tYXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YUxlbW1hcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0TWV0YUxlbW1hcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWV0YUxlbW1hcztcblxuICAgIHJldHVybiBtZXRhTGVtbWFzO1xuICB9XG5cbiAgZ2V0Q29uamVjdHVyZXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRDb25qZWN0dXJlcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmplY3R1cmVzO1xuXG4gICAgcmV0dXJuIGNvbmplY3R1cmVzO1xuICB9XG5cbiAgZ2V0Q29tYmluYXRvcnMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgY29tYmluYXRvcnMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRDb21iaW5hdG9ycygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbWJpbmF0b3JzO1xuXG4gICAgcmV0dXJuIGNvbWJpbmF0b3JzO1xuICB9XG5cbiAgZ2V0VHlwZVByZWZpeGVzKGluY2x1ZGVSZWxlYXNlID0gdHJ1ZSkge1xuICAgIGNvbnN0IHR5cGVQcmVmaXhlcyA9IGluY2x1ZGVSZWxlYXNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dC5nZXRUeXBlUHJlZml4ZXMoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHlwZVByZWZpeGVzO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVmaXhlcztcbiAgfVxuXG4gIGdldENvbnN0cnVjdG9ycyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICBjb25zdCBjb25zdHJ1Y3RvcnMgPSBpbmNsdWRlUmVsZWFzZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2V0Q29uc3RydWN0b3JzKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN0cnVjdG9ycztcblxuICAgIHJldHVybiBjb25zdHJ1Y3RvcnM7XG4gIH1cblxuICBnZXRNZXRhdGhlb3JlbXMoaW5jbHVkZVJlbGVhc2UgPSB0cnVlKSB7XG4gICAgY29uc3QgbWV0YXRoZW9yZW1zID0gaW5jbHVkZVJlbGVhc2UgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0LmdldE1ldGF0aGVvcmVtcygpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhdGhlb3JlbXM7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZ2V0TWV0YXZhcmlhYmxlcyhpbmNsdWRlUmVsZWFzZSA9IHRydWUpIHtcbiAgICByZXR1cm4gdGhpcy5tZXRhdmFyaWFibGVzO1xuICB9XG5cbiAgYWRkVHlwZSh0eXBlKSB7XG4gICAgdGhpcy50eXBlcy5wdXNoKHR5cGUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgdHlwZVN0cmluZyA9IHR5cGUuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7dHlwZVN0cmluZ30nIHR5cGUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRSdWxlKHJ1bGUpIHtcbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBydWxlU3RyaW5nID0gcnVsZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZEF4aW9tKGF4aW9tKSB7XG4gICAgdGhpcy5heGlvbXMucHVzaChheGlvbSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBheGlvbVN0cmluZyA9IGF4aW9tLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke2F4aW9tU3RyaW5nfScgYXhpb20gdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRMZW1tYShsZW1tYSkge1xuICAgIHRoaXMubGVtbWFzLnB1c2gobGVtbWEpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgbGVtbWFTdHJpbmcgPSBsZW1tYS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHtsZW1tYVN0cmluZ30nIGxlbW1hIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkVGhlb3JlbSh0aGVvcmVtKSB7XG4gICAgdGhpcy50aGVvcmVtcy5wdXNoKHRoZW9yZW0pO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgdGhlb3JlbVN0cmluZyA9IHRoZW9yZW0uZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7dGhlb3JlbVN0cmluZ30nIHRoZW9yZW0gdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRWYXJpYWJsZSh2YXJpYWJsZSkge1xuICAgIHRoaXMudmFyaWFibGVzLnB1c2godmFyaWFibGUpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgdmFyaWFibGVTdHJpbmcgPSB2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHt2YXJpYWJsZVN0cmluZ30nIHZhcmlhYmxlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkTWV0YUxlbW1hKG1ldGFMZW1tYSkge1xuICAgIHRoaXMubWV0YUxlbW1hcy5wdXNoKG1ldGFMZW1tYSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBtZXRhTGVtbWFTdHJpbmcgPSBtZXRhTGVtbWEuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7bWV0YUxlbW1hU3RyaW5nfScgbWV0YS1sZW1tYSB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZENvbmplY3R1cmUoY29uamVjdHVyZSkge1xuICAgIHRoaXMuY29uamVjdHVyZXMucHVzaChjb25qZWN0dXJlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIG9jbmplY3R1cmVTdHJpbmcgPSBvY25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke29jbmplY3R1cmVTdHJpbmd9JyBvY25qZWN0dXJlIHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkQ29tYmluYXRvcihjb21iaW5hdG9yKSB7XG4gICAgdGhpcy5jb21iaW5hdG9ycy5wdXNoKGNvbWJpbmF0b3IpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgY29tYmluYXRvclN0cmluZyA9IGNvbWJpbmF0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7Y29tYmluYXRvclN0cmluZ30nIGNvbWJpbmF0b3IgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRUeXBlUHJlZml4KHR5cGVQcmVmaXgpIHtcbiAgICB0aGlzLnR5cGVQcmVmaXhlcy5wdXNoKHR5cGVQcmVmaXgpO1xuXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLmdldEZpbGVQYXRoKCksXG4gICAgICAgICAgdHlwZVByZWZpeFN0cmluZyA9IHR5cGVQcmVmaXguZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7dHlwZVByZWZpeFN0cmluZ30nIHR5cGUtcHJlZml4IHRvIHRoZSAnJHtmaWxlUGF0aH0nIGZpbGUgY29udGV4dC5gKVxuICB9XG5cbiAgYWRkQ29uc3RydWN0b3IoY29uc3RydWN0b3IpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9ycy5wdXNoKGNvbnN0cnVjdG9yKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIGNvbnN0cnVjdG9yU3RyaW5nID0gY29uc3RydWN0b3IuZ2V0U3RyaW5nKCk7XG5cbiAgICB0aGlzLnRyYWNlKGBBZGRlZCB0aGUgJyR7Y29uc3RydWN0b3JTdHJpbmd9JyBjb25zdHJ1Y3RvciB0byB0aGUgJyR7ZmlsZVBhdGh9JyBmaWxlIGNvbnRleHQuYClcbiAgfVxuXG4gIGFkZE1ldGF0aGVvcmVtKG1ldGF0aGVvcmVtKSB7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMucHVzaChtZXRhdGhlb3JlbSk7XG5cbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuZ2V0RmlsZVBhdGgoKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbVN0cmluZyA9IG1ldGF0aGVvcmVtLmdldFN0cmluZygpO1xuXG4gICAgdGhpcy50cmFjZShgQWRkZWQgdGhlICcke21ldGF0aGVvcmVtU3RyaW5nfScgbWV0YXRoZW9yZW0gdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBhZGRNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgdGhpcy5tZXRhdmFyaWFibGVzLnB1c2gobWV0YXZhcmlhYmxlKTtcblxuICAgIGNvbnN0IGZpbGVQYXRoID0gdGhpcy5nZXRGaWxlUGF0aCgpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVN0cmluZyA9IG1ldGF2YXJpYWJsZS5nZXRTdHJpbmcoKTtcblxuICAgIHRoaXMudHJhY2UoYEFkZGVkIHRoZSAnJHttZXRhdmFyaWFibGVTdHJpbmd9JyBtZXRhdmFyaWFibGUgdG8gdGhlICcke2ZpbGVQYXRofScgZmlsZSBjb250ZXh0LmApXG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZXMgPSB0aGlzLmdldE1ldGF2YXJpYWJsZXMoKSxcbiAgICAgICAgICBzcGVjaWZpY01ldGF2YXJpYWJsZSA9IG1ldGF2YXJpYWJsZTsgIC8vL1xuXG4gICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIGdlbmVyYWxNZXRhdmFyaWFibGUgPSBtZXRhdmFyaWFibGUsIC8vL1xuICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IGdlbmVyYWxNZXRhdmFyaWFibGUudW5pZnlNZXRhdmFyaWFibGUoc3BlY2lmaWNNZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZTtcbiAgfVxuXG4gIGZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWwgPSBsYWJlbHMuZmluZCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSA9IGxhYmVsLmNvbXBhcmVNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKTtcblxuICAgICAgICAgICAgaWYgKGxhYmVsTWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIGxhYmVsO1xuICB9XG5cbiAgZmluZE1ldGFUeXBlQnlNZXRhVHlwZU5hbWUobWV0YVR5cGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YVR5cGUgPSBmaW5kTWV0YVR5cGVCeU1ldGFUeXBlTmFtZShtZXRhVHlwZU5hbWUpO1xuXG4gICAgcmV0dXJuIG1ldGFUeXBlO1xuICB9XG5cbiAgZmluZFJ1bGVCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBydWxlcyA9IHRoaXMuZ2V0UnVsZXMoKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVOYW1lID0gcmVmZXJlbmNlLmdldE1ldGF2YXJpYWJsZU5hbWUoKSxcbiAgICAgICAgICBydWxlID0gcnVsZXMuZmluZCgocnVsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnVsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gcnVsZS5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmaW5kQXhpb21CeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBheGlvbXMgPSB0aGlzLmdldEF4aW9tcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIGF4aW9tID0gYXhpb21zLmZpbmQoKGF4aW9tKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBheGlvbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gYXhpb20uY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChheGlvbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gYXhpb207XG4gIH1cblxuICBmaW5kTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBsZW1tYXMgPSB0aGlzLmdldExlbW1hcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIGxlbW1hID0gbGVtbWFzLmZpbmQoKGxlbW1hKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZW1tYUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbGVtbWEuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChsZW1tYUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGVtbWE7XG4gIH1cblxuICBmaW5kVGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHRoZW9yZW1zID0gdGhpcy5nZXRUaGVvcmVtcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZU5hbWUgPSByZWZlcmVuY2UuZ2V0TWV0YXZhcmlhYmxlTmFtZSgpLFxuICAgICAgICAgIHRoZW9yZW0gPSB0aGVvcmVtcy5maW5kKCh0aGVvcmVtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0aGVvcmVtQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGVvcmVtLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAodGhlb3JlbUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdGhlb3JlbTtcbiAgfVxuXG4gIGZpbmRNZXRhTGVtbWFCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5nZXRNZXRhTGVtbWFzKCksXG4gICAgICAgICAgbWV0YUxlbW1hID0gbWV0YUxlbW1hcy5maW5kKChtZXRhTGVtbWEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGFMZW1tYUNvbXBhcmVzVG9SZWZlcmVuY2UgPSBtZXRhTGVtbWEuY29tcGFyZVJlZmVyZW5jZShyZWZlcmVuY2UpO1xuXG4gICAgICAgICAgICBpZiAobWV0YUxlbW1hQ29tcGFyZXNUb1JlZmVyZW5jZSkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYTtcbiAgfVxuXG4gIGZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29uamVjdHVyZXMgPSB0aGlzLmdldENvbmplY3R1cmVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlTmFtZSA9IHJlZmVyZW5jZS5nZXRNZXRhdmFyaWFibGVOYW1lKCksXG4gICAgICAgICAgY29uamVjdHVyZSA9IGNvbmplY3R1cmVzLmZpbmQoKGNvbmplY3R1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmplY3R1cmVDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGNvbmplY3R1cmUuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25qZWN0dXJlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBjb25qZWN0dXJlO1xuICB9XG5cbiAgZmluZE1ldGFMZW1tYXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpIHtcbiAgICBjb25zdCBtZXRhTGVtbWFzID0gdGhpcy5nZXRNZXRhTGVtbWFzKCk7XG5cbiAgICBmaWx0ZXIobWV0YUxlbW1hcywgKG1ldGFMZW1tYSkgPT4ge1xuICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gbWV0YUxlbW1hLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hcztcbiAgfVxuXG4gIGZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCksXG4gICAgICBtZXRhdGhlb3JlbSA9IG1ldGF0aGVvcmVtcy5maW5kKChtZXRhdGhlb3JlbSkgPT4ge1xuICAgICAgICBjb25zdCBtZXRhdGhlb3JlbUNvbXBhcmVzVG9SZWZlcmVuY2UgPSBtZXRhdGhlb3JlbS5jb21wYXJlUmVmZXJlbmNlKHJlZmVyZW5jZSk7XG5cbiAgICAgICAgaWYgKG1ldGF0aGVvcmVtQ29tcGFyZXNUb1JlZmVyZW5jZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIG1ldGF0aGVvcmVtO1xuICB9XG5cbiAgZmluZE1ldGF0aGVvcmVtc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGF0aGVvcmVtcyA9IHRoaXMuZ2V0TWV0YXRoZW9yZW1zKCk7XG5cbiAgICBmaWx0ZXIobWV0YXRoZW9yZW1zLCAobWV0YXRoZW9yZW0pID0+IHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbiA9IG1ldGF0aGVvcmVtLCAvLy9cbiAgICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlUb3BMZXZlbE1ldGFBc3NlcnRpb24odG9wTGV2ZWxNZXRhQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHRvcExldmVsTWV0YUFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXRoZW9yZW1zO1xuICB9XG5cbiAgZmluZFRvcExldmVsQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgYXhpb20gPSB0aGlzLmZpbmRBeGlvbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbGVtbWEgPSB0aGlzLmZpbmRMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdGhlb3JlbSA9IHRoaXMuZmluZFRoZW9yZW1CeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIGNvbmplY3R1cmUgPSB0aGlzLmZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IChheGlvbSB8fCBsZW1tYSB8fCB0aGVvcmVtIHx8IGNvbmplY3R1cmUpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYSA9IHRoaXMuZmluZE1ldGFMZW1tYUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgbWV0YXRoZW9yZW0gPSB0aGlzLmZpbmRNZXRhdGhlb3JlbUJ5UmVmZXJlbmNlKHJlZmVyZW5jZSksXG4gICAgICAgICAgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gKG1ldGFMZW1tYSB8fCBtZXRhdGhlb3JlbSk7ICAvLy9cblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb247XG4gIH1cblxuICBmaW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uc0J5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IG1ldGFMZW1tYXMgPSB0aGlzLmZpbmRNZXRhTGVtbWFzQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXMgPSB0aGlzLmZpbmRNZXRhdGhlb3JlbXNCeVJlZmVyZW5jZShyZWZlcmVuY2UpLFxuICAgICAgICAgIHRvcExldmVsTWV0YUFzc2VydGlvbnMgPSBbXG4gICAgICAgICAgICAuLi5tZXRhTGVtbWFzLFxuICAgICAgICAgICAgLi4ubWV0YXRoZW9yZW1zXG4gICAgICAgICAgXTtcblxuICAgIHJldHVybiB0b3BMZXZlbE1ldGFBc3NlcnRpb25zO1xuICB9XG5cbiAgZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgbGV0IHR5cGVzID0gdGhpcy5nZXRUeXBlcyhpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyk7XG5cbiAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgIHR5cGVzID0gW1xuICAgICAgLi4udHlwZXMsXG4gICAgICBiYXNlVHlwZVxuICAgIF07XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZUNvbXBhcmVzVG9UeXBlTmFtZSA9IHR5cGUuY29tcGFyZVR5cGVOYW1lKHR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVDb21wYXJlc1RvVHlwZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgIHR5cGVzID0gW1xuICAgICAgLi4udHlwZXMsXG4gICAgICBiYXNlVHlwZVxuICAgIF07XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUgPSB0eXBlLmNvbXBhcmVOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVDb21wYXJlc1RvTm9taW5hbFR5cGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIGZpbmRUeXBlQnlQcmVmaXhlZFR5cGVOYW1lKHByZWZpeGVkVHlwZU5hbWUpIHtcbiAgICBsZXQgdHlwZXMgPSB0aGlzLmdldFR5cGVzKCk7XG5cbiAgICBjb25zdCBiYXNlVHlwZSA9IGJhc2VUeXBlRnJvbU5vdGhpbmcoKTtcblxuICAgIHR5cGVzID0gW1xuICAgICAgLi4udHlwZXMsXG4gICAgICBiYXNlVHlwZVxuICAgIF07XG5cbiAgICBjb25zdCB0eXBlID0gdHlwZXMuZmluZCgodHlwZSkgPT4ge1xuICAgICAgY29uc3QgdHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lID0gdHlwZS5jb21wYXJlUHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKTtcblxuICAgICAgaWYgKHR5cGVDb21wYXJlc1RvUHJlZml4ZWRUeXBlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBmaW5kVHlwZVByZWZpeEJ5VHlwZVByZWZpeE5hbWUodHlwZVByZWZpeE5hbWUpIHtcbiAgICBjb25zdCB0eXBlUHJlZml4ZXMgPSB0aGlzLmdldFR5cGVQcmVmaXhlcygpLFxuICAgICAgICAgIHR5cGVQcmVmaXggPSB0eXBlUHJlZml4ZXMuZmluZCgodHlwZVByZWZpeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZVByZWZpeENvbXBhcmVzVG9UeXBlUHJlZml4TmFtZSA9IHR5cGVQcmVmaXguY29tcGFyZVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVQcmVmaXhDb21wYXJlc1RvVHlwZVByZWZpeE5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiB0eXBlUHJlZml4O1xuICB9XG5cbiAgZmluZExhYmVsQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBsYWJlbHMgPSB0aGlzLmdldExhYmVscygpLFxuICAgICAgICAgIGxhYmVsID0gbGFiZWxzLmZpbmQoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbGFiZWwuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gbGFiZWw7XG4gIH1cblxuICBmaW5kSnVkZ2VtZW50QnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBqdWRnZW1lbnRzID0gdGhpcy5nZXRKdWRnZW1lbnRzKCksXG4gICAgICAgICAganVkZ2VtZW50ID0ganVkZ2VtZW50cy5maW5kKChqdWRnZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUgPSBqdWRnZW1lbnQuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChqdWRnZW1lbnRNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4ganVkZ2VtZW50O1xuICB9XG5cbiAgZmluZFZhcmlhYmxlQnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5nZXRWYXJpYWJsZXMoKSxcbiAgICAgICAgICB2YXJpYWJsZSA9IHZhcmlhYmxlcy5maW5kKCh2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyID0gdmFyaWFibGUuY29tcGFyZVZhcmlhYmxlSWRlbnRpZmllcih2YXJpYWJsZUlkZW50aWZpZXIpO1xuXG4gICAgICAgICAgICBpZiAodmFyaWFibGVDb21wYXJlc1RvVmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pIHx8IG51bGw7XG5cbiAgICByZXR1cm4gdmFyaWFibGU7XG4gIH1cblxuICBmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVzID0gdGhpcy5nZXRNZXRhdmFyaWFibGVzKCksXG4gICAgICAgICAgbWV0YXZhcmlhYmxlID0gbWV0YXZhcmlhYmxlcy5maW5kKChtZXRhdmFyaWFibGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbWV0YXZhcmlhYmxlLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGU7XG4gIH1cblxuICBmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpIHtcbiAgICBjb25zdCBwcm9jZWR1cmVzID0gdGhpcy5nZXRQcm9jZWR1cmVzKCksXG4gICAgICAgICAgcHJvY2VkdXJlID0gcHJvY2VkdXJlcy5maW5kKChwcm9jZWR1cmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2NlZHVyZUNvbXBhcmVzVG9Qcm9jZWR1cmVOYW1lID0gcHJvY2VkdXJlLmNvbXBhcmVQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpO1xuXG4gICAgICAgICAgICBpZiAocHJvY2VkdXJlQ29tcGFyZXNUb1Byb2NlZHVyZU5hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkgfHwgbnVsbDtcblxuICAgIHJldHVybiBwcm9jZWR1cmU7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnQobWV0YXZhcmlhYmxlKSB7XG4gICAgbWV0YXZhcmlhYmxlID0gdGhpcy5maW5kTWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSk7XG5cbiAgICBjb25zdCBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzTGFiZWxQcmVzZW50QnlNZXRhdmFyaWFibGUobWV0YXZhcmlhYmxlKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlKG1ldGF2YXJpYWJsZSksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gKGxhYmVsICE9PSBudWxsKTtcblxuICAgIHJldHVybiBsYWJlbFByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5UmVmZXJlbmNlKHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IGxhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKCksXG4gICAgICAgICAgbGFiZWxQcmVzZW50ID0gbGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgICAgICAgICBsYWJlbFVuaWZpZXMgPSByZWZlcmVuY2UudW5pZnlMYWJlbChsYWJlbCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChsYWJlbFVuaWZpZXMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxQcmVzZW50O1xuICB9XG5cbiAgaXNNZXRhdmFyaWFibGVQcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlcyA9IHRoaXMuZ2V0TWV0YXZhcmlhYmxlcygpLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZVByZXNlbnQgPSBtZXRhdmFyaWFibGVzLnNvbWUoKG1ldGF2YXJpYWJsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMsIC8vL1xuICAgICAgICAgICAgICAgICAgbWV0YXZhcmlhYmxlVW5pZmllcyA9IHJlZmVyZW5jZS51bmlmeU1ldGF2YXJpYWJsZShtZXRhdmFyaWFibGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAobWV0YXZhcmlhYmxlVW5pZmllcykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVQcmVzZW50O1xuICB9XG5cbiAgaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uID0gdGhpcy5maW5kVG9wTGV2ZWxNZXRhQXNzZXJ0aW9uQnlSZWZlcmVuY2UocmVmZXJlbmNlKSxcbiAgICAgICAgICB0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50ID0gKHRvcExldmVsTWV0YUFzc2VydGlvbiAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxNZXRhQXNzZXJ0aW9uUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZXNlbnRCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSA9IHRydWUsIGluY2x1ZGVEZXBlbmRlbmNpZXMgPSB0cnVlKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVR5cGVOYW1lKHR5cGVOYW1lLCBpbmNsdWRlUmVsZWFzZSwgaW5jbHVkZURlcGVuZGVuY2llcyksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc1R5cGVQcmVzZW50QnlOb21pbmFsVHlwZU5hbWUobm9taW5hbFR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeU5vbWluYWxUeXBlTmFtZShub21pbmFsVHlwZU5hbWUpLFxuICAgICAgICAgIHR5cGVQcmVzZW50ID0gKHR5cGUgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIHR5cGVQcmVzZW50O1xuICB9XG5cbiAgaXNUeXBlUHJlc2VudEJ5UHJlZml4ZWRUeXBlTmFtZShwcmVmaXhlZFR5cGVOYW1lKSB7XG4gICAgY29uc3QgdHlwZSA9IHRoaXMuZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUocHJlZml4ZWRUeXBlTmFtZSksXG4gICAgICAgICAgdHlwZVByZXNlbnQgPSAodHlwZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gdHlwZVByZXNlbnQ7XG4gIH1cblxuICBpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLmZpbmRMYWJlbEJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBsYWJlbFByZXNlbnQgPSAobGFiZWwgIT09IG51bGwpO1xuXG4gICAgcmV0dXJuIGxhYmVsUHJlc2VudDtcbiAgfVxuXG4gIGlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSB7XG4gICAgY29uc3QgdHlwZVByZWZpeCA9IHRoaXMuZmluZFR5cGVQcmVmaXhCeVR5cGVQcmVmaXhOYW1lKHR5cGVQcmVmaXhOYW1lKSxcbiAgICAgICAgICB0eXBlUHJlZml4UHJlc2VudCA9ICh0eXBlUHJlZml4ICE9PSBudWxsKTtcblxuICAgIHJldHVybiB0eXBlUHJlZml4UHJlc2VudDtcbiAgfVxuXG4gIGlzVmFyaWFibGVQcmVzZW50QnlWYXJpYWJsZUlkZW50aWZpZXIodmFyaWFibGVJZGVudGlmaWVyKSB7XG4gICAgY29uc3QgdmFyaWFibGUgPSB0aGlzLmZpbmRWYXJpYWJsZUJ5VmFyaWFibGVJZGVudGlmaWVyKHZhcmlhYmxlSWRlbnRpZmllciksXG4gICAgICAgICAgdmFyaWFibGVQcmVzZW50ID0gKHZhcmlhYmxlICE9PSBudWxsKTtcblxuICAgIHJldHVybiB2YXJpYWJsZVByZXNlbnQ7XG4gIH1cblxuICBpc01ldGF2YXJpYWJsZVByZXNlbnRCeU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZSA9IHRoaXMuZmluZE1ldGF2YXJpYWJsZUJ5TWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVQcmVzZW50ID0gKG1ldGF2YXJpYWJsZSAhPT0gbnVsbCk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlUHJlc2VudDtcbiAgfVxuXG4gIGlzUHJvY2VkdXJlUHJlc2VudEJ5UHJvY2VkdXJlTmFtZShwcm9jZWR1cmVOYW1lKSB7XG4gICAgY29uc3QgcHJvY2VkdXJlID0gdGhpcy5maW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lKHByb2NlZHVyZU5hbWUpLFxuICAgICAgICAgIHByb2NlZHVyZVByZXNlbnQgPSAocHJvY2VkdXJlICE9PSBudWxsKTtcblxuICAgIHJldHVybiBwcm9jZWR1cmVQcmVzZW50O1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy50eXBlcyA9IFtdO1xuICAgIHRoaXMucnVsZXMgPSBbXTtcbiAgICB0aGlzLmF4aW9tcyA9IFtdO1xuICAgIHRoaXMubGVtbWFzID0gW107XG4gICAgdGhpcy50aGVvcmVtcyA9IFtdO1xuICAgIHRoaXMudmFyaWFibGVzID0gW107XG4gICAgdGhpcy5tZXRhTGVtbWFzID0gW107XG4gICAgdGhpcy5jb25qZWN0dXJlcyA9IFtdO1xuICAgIHRoaXMuY29tYmluYXRvcnMgPSBbXTtcbiAgICB0aGlzLnR5cGVQcmVmaXhlcyA9IFtdO1xuICAgIHRoaXMuY29uc3RydWN0b3JzID0gW107XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBbXTtcbiAgICB0aGlzLm1ldGF2YXJpYWJsZXMgPSBbXTtcbiAgfVxuXG4gIGNvbXBsZXRlKCkge1xuICAgIC8vL1xuICB9XG5cbiAgaW5pdGlhbGlzZShqc29uKSB7XG4gICAgY29uc3QgZmlsZUNvbnRleHQgPSB0aGlzOyAvLy9cblxuICAgIHRoaXMudHlwZXMgPSBbXTtcblxuICAgIHR5cGVzRnJvbUpTT04oanNvbiwgdGhpcy50eXBlcywgZmlsZUNvbnRleHQpO1xuXG4gICAgdGhpcy5sZW1tYXMgPSBsZW1tYXNGcm9tTm90aGluZygpO1xuICAgIHRoaXMubWV0YUxlbW1hcyA9IG1ldGFMZW1tYXNGcm9tTm90aGluZygpO1xuXG4gICAgdGhpcy5tZXRhdmFyaWFibGVzID0gbWV0YXZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLnZhcmlhYmxlcyA9IHZhcmlhYmxlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLnJ1bGVzID0gcnVsZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5heGlvbXMgPSBheGlvbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy50aGVvcmVtcyA9IHRoZW9yZW1zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuICAgIHRoaXMuY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcbiAgICB0aGlzLmNvbWJpbmF0b3JzID0gY29tYmluYXRvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy50eXBlUHJlZml4ZXMgPSB0eXBlUHJlZml4ZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5jb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gICAgdGhpcy5tZXRhdGhlb3JlbXMgPSBtZXRhdGhlb3JlbXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlGaWxlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcywgLy8vXG4gICAgICAgICAgZmlsZU5vZGUgPSBub2RlLCAgLy8vXG4gICAgICAgICAgZmlsZVZlcmlmaWVzID0gYXdhaXQgdmVyaWZ5RmlsZShmaWxlTm9kZSwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZmlsZVZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IHR5cGVzSlNPTiA9IHR5cGVzVG9UeXBlc0pTT04odGhpcy50eXBlcyksXG4gICAgICAgICAgcnVsZXNKU09OID0gcnVsZXNUb1J1bGVzSlNPTih0aGlzLnJ1bGVzKSxcbiAgICAgICAgICBheGlvbXNKU09OID0gYXhpb21zVG9BeGlvbXNKU09OKHRoaXMuYXhpb21zKSxcbiAgICAgICAgICB0aGVvcmVtc0pTT04gPSB0aGVvcmVtc1RvVGhlb3JlbXNKU09OKHRoaXMudGhlb3JlbXMpLFxuICAgICAgICAgIHZhcmlhYmxlc0pTT04gPSB2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04odGhpcy52YXJpYWJsZXMpLFxuICAgICAgICAgIGNvbmplY3R1cmVzSlNPTiA9IGNvbmplY3R1cmVzVG9Db25qZWN0dXJlc0pTT04odGhpcy5jb25qZWN0dXJlcyksXG4gICAgICAgICAgY29tYmluYXRvcnNKU09OID0gY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTih0aGlzLmNvbWJpbmF0b3JzKSxcbiAgICAgICAgICB0eXBlUHJlZml4ZXNKU09OID0gdHlwZVByZWZpeGVzVG9UeXBlUHJlZml4ZXNKU09OKHRoaXMudHlwZVByZWZpeGVzKSxcbiAgICAgICAgICBjb25zdHJ1Y3RvcnNKU09OID0gY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OKHRoaXMuY29uc3RydWN0b3JzKSxcbiAgICAgICAgICBtZXRhdGhlb3JlbXNKU09OID0gbWV0YXRoZW9yZW1zVG9NZXRhdGhlb3JlbXNKU09OKHRoaXMubWV0YXRoZW9yZW1zKSxcbiAgICAgICAgICBtZXRhdmFyaWFibGVzSlNPTiA9IG1ldGF2YXJpYWJsZXNUb01ldGF2YXJpYWJsZXNKU09OKHRoaXMubWV0YXZhcmlhYmxlcyksXG4gICAgICAgICAgZmlsZVBhdGggPSB0aGlzLmZpbGVQYXRoLFxuICAgICAgICAgIHR5cGVzID0gdHlwZXNKU09OLCAgLy8vXG4gICAgICAgICAgcnVsZXMgPSBydWxlc0pTT04sICAvLy9cbiAgICAgICAgICBheGlvbXMgPSBheGlvbXNKU09OLCAgLy8vXG4gICAgICAgICAgdGhlb3JlbXMgPSB0aGVvcmVtc0pTT04sICAvLy9cbiAgICAgICAgICB2YXJpYWJsZXMgPSB2YXJpYWJsZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBjb25qZWN0dXJlc0pTT04sICAvLy9cbiAgICAgICAgICBjb21iaW5hdG9ycyA9IGNvbWJpbmF0b3JzSlNPTiwgIC8vL1xuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IHR5cGVQcmVmaXhlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnNKU09OLCAgLy8vXG4gICAgICAgICAgbWV0YXRoZW9yZW1zID0gbWV0YXRoZW9yZW1zSlNPTiwgIC8vL1xuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBtZXRhdmFyaWFibGVzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgICAgIHR5cGVzLFxuICAgICAgICAgICAgcnVsZXMsXG4gICAgICAgICAgICBheGlvbXMsXG4gICAgICAgICAgICB0aGVvcmVtcyxcbiAgICAgICAgICAgIHZhcmlhYmxlcyxcbiAgICAgICAgICAgIGNvbmplY3R1cmVzLFxuICAgICAgICAgICAgY29tYmluYXRvcnMsXG4gICAgICAgICAgICB0eXBlUHJlZml4ZXMsXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMsXG4gICAgICAgICAgICBtZXRhdGhlb3JlbXMsXG4gICAgICAgICAgICBtZXRhdmFyaWFibGVzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21GaWxlKGZpbGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpLFxuICAgICAgICAgIG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbExleGVyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsUGFyc2VyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBub21pbmFsRmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tRmlsZShOb21pbmFsRmlsZUNvbnRleHQsIGZpbGUsIGxleGVyLCBwYXJzZXIsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICByZXR1cm4gbm9taW5hbEZpbGVDb250ZXh0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCByZWxlYXNlQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGNvbWJpbmVkQ3VzdG9tR3JhbW1hciA9IHJlbGVhc2VDb250ZXh0LmdldENvbWJpbmVkQ3VzdG9tR3JhbW1hcigpLFxuICAgICAgICAgIG5vbWluYWxMZXhlciA9IG5vbWluYWxMZXhlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIoTm9taW5hbExleGVyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIG5vbWluYWxQYXJzZXIgPSBub21pbmFsUGFyc2VyRnJvbUNvbWJpbmVkQ3VzdG9tR3JhbW1hcihOb21pbmFsUGFyc2VyLCBjb21iaW5lZEN1c3RvbUdyYW1tYXIpLFxuICAgICAgICAgIGxleGVyID0gbm9taW5hbExleGVyLCAvLy9cbiAgICAgICAgICBwYXJzZXIgPSBub21pbmFsUGFyc2VyLCAvLy9cbiAgICAgICAgICB0eXBlcyA9IFtdLFxuICAgICAgICAgIHJ1bGVzID0gW10sXG4gICAgICAgICAgYXhpb21zID0gW10sXG4gICAgICAgICAgbGVtbWFzID0gW10sXG4gICAgICAgICAgdGhlb3JlbXMgPSBbXSxcbiAgICAgICAgICB2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBtZXRhTGVtbWFzID0gW10sXG4gICAgICAgICAgY29uamVjdHVyZXMgPSBbXSxcbiAgICAgICAgICBjb21iaW5hdG9ycyA9IFtdLFxuICAgICAgICAgIHR5cGVQcmVmaXhlcyA9IFtdLFxuICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IFtdLFxuICAgICAgICAgIG1ldGF0aGVvcmVtcyA9IFtdLFxuICAgICAgICAgIG1ldGF2YXJpYWJsZXMgPSBbXSxcbiAgICAgICAgICBub21pbmFsRmlsZUNvbnRleHQgPSBGaWxlQ29udGV4dC5mcm9tSlNPTihOb21pbmFsRmlsZUNvbnRleHQsIGpzb24sIGxleGVyLCBwYXJzZXIsIHR5cGVzLCBydWxlcywgYXhpb21zLCBsZW1tYXMsIHRoZW9yZW1zLCB2YXJpYWJsZXMsIG1ldGFMZW1tYXMsIGNvbmplY3R1cmVzLCBjb21iaW5hdG9ycywgdHlwZVByZWZpeGVzLCBjb25zdHJ1Y3RvcnMsIG1ldGF0aGVvcmVtcywgbWV0YXZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICBub21pbmFsRmlsZUNvbnRleHQuaW5pdGlhbGlzZShqc29uKTtcblxuICAgIHJldHVybiBub21pbmFsRmlsZUNvbnRleHQ7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOb21pbmFsRmlsZUNvbnRleHQiLCJwdXNoIiwiYXJyYXlVdGlsaXRpZXMiLCJmaWx0ZXIiLCJub21pbmFsTGV4ZXJGcm9tQ29tYmluZWRDdXN0b21HcmFtbWFyIiwibGV4ZXJzVXRpbGl0aWVzIiwibm9taW5hbFBhcnNlckZyb21Db21iaW5lZEN1c3RvbUdyYW1tYXIiLCJwYXJzZXJzVXRpbGl0aWVzIiwiY29udGV4dCIsImZpbGVQYXRoIiwidG9rZW5zIiwibm9kZSIsImxleGVyIiwicGFyc2VyIiwidHlwZXMiLCJydWxlcyIsImF4aW9tcyIsImxlbW1hcyIsInRoZW9yZW1zIiwidmFyaWFibGVzIiwibWV0YUxlbW1hcyIsImNvbmplY3R1cmVzIiwiY29tYmluYXRvcnMiLCJ0eXBlUHJlZml4ZXMiLCJjb25zdHJ1Y3RvcnMiLCJtZXRhdGhlb3JlbXMiLCJtZXRhdmFyaWFibGVzIiwiZ2V0TGV4ZXIiLCJnZXRQYXJzZXIiLCJnZXRKdWRnZW1lbnRzIiwianVkZ2VtZW50cyIsImdldEVxdWl2YWxlbmNlcyIsIkVxdWl2YWxlbmNlcyIsImVsZW1lbnRzIiwiZXF1aXZhbGVuY2VzIiwiZnJvbU5vdGhpbmciLCJnZXRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsImdldExhYmVscyIsImluY2x1ZGVSZWxlYXNlIiwibGFiZWxzIiwicmVsZWFzZUNvbnRleHRMYWJlbHMiLCJmb3JFYWNoIiwicnVsZSIsInJ1bGVMYWJlbHMiLCJheGlvbSIsImF4aW9tTGFiZWxzIiwibGVtbWEiLCJsZW1tYUxhYmVscyIsInRoZW9yZW0iLCJ0aGVvcmVtTGFiZWxzIiwiY29uamVjdHVyZSIsImNvbmplY3R1cmVMYWJlbHMiLCJtZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtTGFiZWwiLCJnZXRMYWJlbCIsImdldFR5cGVzIiwiaW5jbHVkZURlcGVuZGVuY2llcyIsImdldFJ1bGVzIiwiZ2V0QXhpb21zIiwiZ2V0TGVtbWFzIiwiZ2V0VGhlb3JlbXMiLCJnZXRWYXJpYWJsZXMiLCJnZXRQcm9jZWR1cmVzIiwicHJvY2VkdXJlcyIsImdldE1ldGFMZW1tYXMiLCJnZXRDb25qZWN0dXJlcyIsImdldENvbWJpbmF0b3JzIiwiZ2V0VHlwZVByZWZpeGVzIiwiZ2V0Q29uc3RydWN0b3JzIiwiZ2V0TWV0YXRoZW9yZW1zIiwiZ2V0TWV0YXZhcmlhYmxlcyIsImFkZFR5cGUiLCJ0eXBlIiwiZ2V0RmlsZVBhdGgiLCJ0eXBlU3RyaW5nIiwiZ2V0U3RyaW5nIiwidHJhY2UiLCJhZGRSdWxlIiwicnVsZVN0cmluZyIsImFkZEF4aW9tIiwiYXhpb21TdHJpbmciLCJhZGRMZW1tYSIsImxlbW1hU3RyaW5nIiwiYWRkVGhlb3JlbSIsInRoZW9yZW1TdHJpbmciLCJhZGRWYXJpYWJsZSIsInZhcmlhYmxlIiwidmFyaWFibGVTdHJpbmciLCJhZGRNZXRhTGVtbWEiLCJtZXRhTGVtbWEiLCJtZXRhTGVtbWFTdHJpbmciLCJhZGRDb25qZWN0dXJlIiwib2NuamVjdHVyZVN0cmluZyIsIm9jbmplY3R1cmUiLCJhZGRDb21iaW5hdG9yIiwiY29tYmluYXRvciIsImNvbWJpbmF0b3JTdHJpbmciLCJhZGRUeXBlUHJlZml4IiwidHlwZVByZWZpeCIsInR5cGVQcmVmaXhTdHJpbmciLCJhZGRDb25zdHJ1Y3RvciIsImNvbnN0cnVjdG9yIiwiY29uc3RydWN0b3JTdHJpbmciLCJhZGRNZXRhdGhlb3JlbSIsIm1ldGF0aGVvcmVtU3RyaW5nIiwiYWRkTWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlIiwibWV0YXZhcmlhYmxlU3RyaW5nIiwiZmluZE1ldGF2YXJpYWJsZSIsInNwZWNpZmljTWV0YXZhcmlhYmxlIiwiZmluZCIsImdlbmVyYWxNZXRhdmFyaWFibGUiLCJtZXRhdmFyaWFibGVVbmlmaWVzIiwidW5pZnlNZXRhdmFyaWFibGUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZSIsImxhYmVsIiwibGFiZWxNZXRhdmFyaWFibGVDb21wYXJlc1RvTWV0YXZhcmlhYmxlIiwiY29tcGFyZU1ldGF2YXJpYWJsZSIsImZpbmRNZXRhVHlwZUJ5TWV0YVR5cGVOYW1lIiwibWV0YVR5cGVOYW1lIiwibWV0YVR5cGUiLCJmaW5kUnVsZUJ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwibWV0YXZhcmlhYmxlTmFtZSIsImdldE1ldGF2YXJpYWJsZU5hbWUiLCJydWxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRBeGlvbUJ5UmVmZXJlbmNlIiwiYXhpb21Db21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRMZW1tYUJ5UmVmZXJlbmNlIiwibGVtbWFDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImZpbmRUaGVvcmVtQnlSZWZlcmVuY2UiLCJ0aGVvcmVtQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YUxlbW1hQnlSZWZlcmVuY2UiLCJtZXRhTGVtbWFDb21wYXJlc1RvUmVmZXJlbmNlIiwiY29tcGFyZVJlZmVyZW5jZSIsImZpbmRDb25qZWN0dXJlQnlSZWZlcmVuY2UiLCJjb25qZWN0dXJlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kTWV0YUxlbW1hc0J5UmVmZXJlbmNlIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwidG9wTGV2ZWxNZXRhQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5VG9wTGV2ZWxNZXRhQXNzZXJ0aW9uIiwiZmluZE1ldGF0aGVvcmVtQnlSZWZlcmVuY2UiLCJtZXRhdGhlb3JlbUNvbXBhcmVzVG9SZWZlcmVuY2UiLCJmaW5kTWV0YXRoZW9yZW1zQnlSZWZlcmVuY2UiLCJmaW5kVG9wTGV2ZWxBc3NlcnRpb25CeVJlZmVyZW5jZSIsInRvcExldmVsQXNzZXJ0aW9uIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbkJ5UmVmZXJlbmNlIiwiZmluZFRvcExldmVsTWV0YUFzc2VydGlvbnNCeVJlZmVyZW5jZSIsInRvcExldmVsTWV0YUFzc2VydGlvbnMiLCJmaW5kVHlwZUJ5VHlwZU5hbWUiLCJ0eXBlTmFtZSIsImJhc2VUeXBlIiwiYmFzZVR5cGVGcm9tTm90aGluZyIsInR5cGVDb21wYXJlc1RvVHlwZU5hbWUiLCJjb21wYXJlVHlwZU5hbWUiLCJmaW5kVHlwZUJ5Tm9taW5hbFR5cGVOYW1lIiwibm9taW5hbFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9Ob21pbmFsVHlwZU5hbWUiLCJjb21wYXJlTm9taW5hbFR5cGVOYW1lIiwiZmluZFR5cGVCeVByZWZpeGVkVHlwZU5hbWUiLCJwcmVmaXhlZFR5cGVOYW1lIiwidHlwZUNvbXBhcmVzVG9QcmVmaXhlZFR5cGVOYW1lIiwiY29tcGFyZVByZWZpeGVkVHlwZU5hbWUiLCJmaW5kVHlwZVByZWZpeEJ5VHlwZVByZWZpeE5hbWUiLCJ0eXBlUHJlZml4TmFtZSIsInR5cGVQcmVmaXhDb21wYXJlc1RvVHlwZVByZWZpeE5hbWUiLCJjb21wYXJlVHlwZVByZWZpeE5hbWUiLCJmaW5kTGFiZWxCeU1ldGF2YXJpYWJsZU5hbWUiLCJsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiZmluZEp1ZGdlbWVudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImp1ZGdlbWVudCIsImp1ZGdlbWVudE1ldGF2YXJpYWJsZUNvbXBhcmVzVG9NZXRhdmFyaWFibGUiLCJmaW5kVmFyaWFibGVCeVZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlSWRlbnRpZmllciIsInZhcmlhYmxlQ29tcGFyZXNUb1ZhcmlhYmxlSWRlbnRpZmllciIsImNvbXBhcmVWYXJpYWJsZUlkZW50aWZpZXIiLCJmaW5kTWV0YXZhcmlhYmxlQnlNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJmaW5kUHJvY2VkdXJlQnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlTmFtZSIsInByb2NlZHVyZSIsInByb2NlZHVyZUNvbXBhcmVzVG9Qcm9jZWR1cmVOYW1lIiwiY29tcGFyZVByb2NlZHVyZU5hbWUiLCJpc01ldGF2YXJpYWJsZVByZXNlbnQiLCJtZXRhdmFyaWFibGVQcmVzZW50IiwiaXNMYWJlbFByZXNlbnRCeU1ldGF2YXJpYWJsZSIsImxhYmVsUHJlc2VudCIsImlzTGFiZWxQcmVzZW50QnlSZWZlcmVuY2UiLCJzb21lIiwibGFiZWxVbmlmaWVzIiwidW5pZnlMYWJlbCIsImlzTWV0YXZhcmlhYmxlUHJlc2VudEJ5UmVmZXJlbmNlIiwiaXNUb3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50QnlSZWZlcmVuY2UiLCJ0b3BMZXZlbE1ldGFBc3NlcnRpb25QcmVzZW50IiwiaXNUeXBlUHJlc2VudEJ5VHlwZU5hbWUiLCJ0eXBlUHJlc2VudCIsImlzVHlwZVByZXNlbnRCeU5vbWluYWxUeXBlTmFtZSIsImlzVHlwZVByZXNlbnRCeVByZWZpeGVkVHlwZU5hbWUiLCJpc0xhYmVsUHJlc2VudEJ5TWV0YXZhcmlhYmxlTmFtZSIsImlzVHlwZVByZWZpeFByZXNlbnRCeVR5cGVQcmVmaXhOYW1lIiwidHlwZVByZWZpeFByZXNlbnQiLCJpc1ZhcmlhYmxlUHJlc2VudEJ5VmFyaWFibGVJZGVudGlmaWVyIiwidmFyaWFibGVQcmVzZW50IiwiaXNNZXRhdmFyaWFibGVQcmVzZW50QnlNZXRhdmFyaWFibGVOYW1lIiwiaXNQcm9jZWR1cmVQcmVzZW50QnlQcm9jZWR1cmVOYW1lIiwicHJvY2VkdXJlUHJlc2VudCIsImNsZWFyIiwiY29tcGxldGUiLCJpbml0aWFsaXNlIiwianNvbiIsImZpbGVDb250ZXh0IiwidHlwZXNGcm9tSlNPTiIsImxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YUxlbW1hc0Zyb21Ob3RoaW5nIiwibWV0YXZhcmlhYmxlc0Zyb21KU09OIiwidmFyaWFibGVzRnJvbUpTT04iLCJydWxlc0Zyb21KU09OIiwiYXhpb21zRnJvbUpTT04iLCJ0aGVvcmVtc0Zyb21KU09OIiwiY29uamVjdHVyZXNGcm9tSlNPTiIsImNvbWJpbmF0b3JzRnJvbUpTT04iLCJ0eXBlUHJlZml4ZXNGcm9tSlNPTiIsImNvbnN0cnVjdG9yc0Zyb21KU09OIiwibWV0YXRoZW9yZW1zRnJvbUpTT04iLCJ2ZXJpZnlGaWxlIiwiZmlsZU5vZGUiLCJmaWxlVmVyaWZpZXMiLCJnZXROb2RlIiwidG9KU09OIiwidHlwZXNKU09OIiwidHlwZXNUb1R5cGVzSlNPTiIsInJ1bGVzSlNPTiIsInJ1bGVzVG9SdWxlc0pTT04iLCJheGlvbXNKU09OIiwiYXhpb21zVG9BeGlvbXNKU09OIiwidGhlb3JlbXNKU09OIiwidGhlb3JlbXNUb1RoZW9yZW1zSlNPTiIsInZhcmlhYmxlc0pTT04iLCJ2YXJpYWJsZXNUb1ZhcmlhYmxlc0pTT04iLCJjb25qZWN0dXJlc0pTT04iLCJjb25qZWN0dXJlc1RvQ29uamVjdHVyZXNKU09OIiwiY29tYmluYXRvcnNKU09OIiwiY29tYmluYXRvcnNUb0NvbWJpbmF0b3JzSlNPTiIsInR5cGVQcmVmaXhlc0pTT04iLCJ0eXBlUHJlZml4ZXNUb1R5cGVQcmVmaXhlc0pTT04iLCJjb25zdHJ1Y3RvcnNKU09OIiwiY29uc3RydWN0b3JzVG9Db25zdHJ1Y3RvcnNKU09OIiwibWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF0aGVvcmVtc1RvTWV0YXRoZW9yZW1zSlNPTiIsIm1ldGF2YXJpYWJsZXNKU09OIiwibWV0YXZhcmlhYmxlc1RvTWV0YXZhcmlhYmxlc0pTT04iLCJmcm9tRmlsZSIsImZpbGUiLCJyZWxlYXNlQ29udGV4dCIsImNvbWJpbmVkQ3VzdG9tR3JhbW1hciIsImdldENvbWJpbmVkQ3VzdG9tR3JhbW1hciIsIm5vbWluYWxMZXhlciIsIk5vbWluYWxMZXhlciIsIm5vbWluYWxQYXJzZXIiLCJOb21pbmFsUGFyc2VyIiwibm9taW5hbEZpbGVDb250ZXh0IiwiRmlsZUNvbnRleHQiLCJmcm9tSlNPTiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUEwQ3FCQTs7OzhCQXhDTzt5QkFDRzs0QkFDbUI7K0RBRTdCOzREQUNJOzZEQUNDO3NCQUVDO29CQUNTO3lCQUNPO29CQXdCTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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