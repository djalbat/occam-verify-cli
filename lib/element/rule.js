"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _occamlanguages = require("occam-languages");
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
var _elements = require("../elements");
var _context = require("../utilities/context");
var _json = require("../utilities/json");
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
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
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
var _Rule;
var reverse = _necessary.arrayUtilities.reverse, extract = _necessary.arrayUtilities.extract, asyncForwardsEvery = _occamlanguages.asynchronousUtilities.asyncForwardsEvery, asyncBackwardsEvery = _occamlanguages.asynchronousUtilities.asyncBackwardsEvery;
var _default = (0, _elements.define)((_Rule = /*#__PURE__*/ function(Element) {
    _inherits(Rule, Element);
    function Rule(context, string, node, proof, labels, premises, conclusion) {
        _class_call_check(this, Rule);
        var _this;
        _this = _call_super(this, Rule, [
            context,
            string,
            node
        ]);
        _this.proof = proof;
        _this.labels = labels;
        _this.premises = premises;
        _this.conclusion = conclusion;
        return _this;
    }
    _create_class(Rule, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getPremises",
            value: function getPremises() {
                return this.premises;
            }
        },
        {
            key: "getProof",
            value: function getProof() {
                return this.proof;
            }
        },
        {
            key: "getConclusion",
            value: function getConclusion() {
                return this.conclusion;
            }
        },
        {
            key: "compareMetavariableName",
            value: function compareMetavariableName(metavariableName) {
                var comparesToMetavariableName = this.labels.some(function(label) {
                    var labelComparesToMetavariableName = label.compareMetavariableName(metavariableName);
                    if (labelComparesToMetavariableName) {
                        return true;
                    }
                });
                return comparesToMetavariableName;
            }
        },
        {
            key: "verifyLabels",
            value: function verifyLabels() {
                var labelsVerify = this.labels.every(function(label) {
                    var nameOnly = true, labelVerifies = label.verify(nameOnly);
                    if (labelVerifies) {
                        return true;
                    }
                });
                return labelsVerify;
            }
        },
        {
            key: "unifyStatementWithConclusion",
            value: function unifyStatementWithConclusion(statement, context) {
                var statementUnifiesWithConclusion = false;
                var ruleString = this.getString(), statementString = statement.getString(), conclusionString = this.conclusion.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule's '").concat(conclusionString, "' conclusion..."));
                var statementUnifies = this.conclusion.unifyStatement(statement, context);
                if (statementUnifies) {
                    statementUnifiesWithConclusion = true;
                }
                if (statementUnifiesWithConclusion) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(ruleString, "' rule's '").concat(conclusionString, "' conclusion."));
                }
                return statementUnifiesWithConclusion;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var _this, verifies, context, ruleString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                verifies = false;
                                context = this.getContext();
                                return [
                                    4,
                                    this.break(context)
                                ];
                            case 1:
                                _state.sent();
                                ruleString = this.getString(); ///
                                context.trace("Verifying the '".concat(ruleString, "' rule..."));
                                return [
                                    4,
                                    (0, _context.asyncScope)(function(context) {
                                        return _async_to_generator(function() {
                                            var labelsVerify, premisesVerify, conclusionVerifies, proofVerifies, rule;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        labelsVerify = this.verifyLabels();
                                                        if (!labelsVerify) return [
                                                            3,
                                                            4
                                                        ];
                                                        return [
                                                            4,
                                                            this.verifyPremises(context)
                                                        ];
                                                    case 1:
                                                        premisesVerify = _state.sent();
                                                        if (!premisesVerify) return [
                                                            3,
                                                            4
                                                        ];
                                                        return [
                                                            4,
                                                            this.verifyConclusion(context)
                                                        ];
                                                    case 2:
                                                        conclusionVerifies = _state.sent();
                                                        if (!conclusionVerifies) return [
                                                            3,
                                                            4
                                                        ];
                                                        return [
                                                            4,
                                                            this.verifyProof(context)
                                                        ];
                                                    case 3:
                                                        proofVerifies = _state.sent();
                                                        if (proofVerifies) {
                                                            rule = this; ///
                                                            context.addRule(rule);
                                                            verifies = true;
                                                        }
                                                        _state.label = 4;
                                                    case 4:
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        }).call(_this);
                                    }, context)
                                ];
                            case 2:
                                _state.sent();
                                if (verifies) {
                                    context.debug("...verified the '".concat(ruleString, "' rule."));
                                }
                                return [
                                    2,
                                    verifies
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "verifyProof",
            value: function verifyProof(context) {
                return _async_to_generator(function() {
                    var proofVerifies, ruleString, statement;
                    return _ts_generator(this, function(_state) {
                        if (this.proof === null) {
                            proofVerifies = true;
                        } else {
                            ruleString = this.getString(); ///
                            context.trace("Verifying the '".concat(ruleString, "' rule's proof..."));
                            statement = this.conclusion.getStatement();
                            proofVerifies = this.proof.verify(statement, context);
                            if (proofVerifies) {
                                context.debug("...verified the '".concat(ruleString, "' rule's proof."));
                            }
                        }
                        return [
                            2,
                            proofVerifies
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "verifyPremises",
            value: function verifyPremises(context) {
                return _async_to_generator(function() {
                    var premisesVerify, ruleString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                ruleString = this.getString(); ///
                                context.trace("Verifying the '".concat(ruleString, "' rule's premises..."));
                                return [
                                    4,
                                    asyncForwardsEvery(this.premises, function(premise) {
                                        return _async_to_generator(function() {
                                            var assignments, premiseVerifies, assignmentsAssigned, subproofOrProofAssertion;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        assignments = [];
                                                        return [
                                                            4,
                                                            premise.verify(assignments, context)
                                                        ];
                                                    case 1:
                                                        premiseVerifies = _state.sent();
                                                        if (premiseVerifies) {
                                                            assignmentsAssigned = (0, _assign.default)(assignments, context);
                                                            if (assignmentsAssigned) {
                                                                subproofOrProofAssertion = premise; ////
                                                                context.addSubproofOrProofAssertion(subproofOrProofAssertion);
                                                                return [
                                                                    2,
                                                                    true
                                                                ];
                                                            }
                                                        }
                                                        return [
                                                            2
                                                        ];
                                                }
                                            });
                                        })();
                                    })
                                ];
                            case 1:
                                premisesVerify = _state.sent();
                                if (premisesVerify) {
                                    context.debug("...verified the '".concat(ruleString, "' rule's premises."));
                                }
                                return [
                                    2,
                                    premisesVerify
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "verifyConclusion",
            value: function verifyConclusion(context) {
                return _async_to_generator(function() {
                    var conclusionVerifies, ruleString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                ruleString = this.getString();
                                context.trace("Verifying the '".concat(ruleString, "' rule's conclusion..."));
                                return [
                                    4,
                                    this.conclusion.verify(context)
                                ];
                            case 1:
                                conclusionVerifies = _state.sent();
                                if (conclusionVerifies) {
                                    context.debug("...verified the '".concat(ruleString, "' rule's conclusion."));
                                }
                                return [
                                    2,
                                    conclusionVerifies
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "unifyStatementAndSubproofOrProofAssertions",
            value: function unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context) {
                return _async_to_generator(function() {
                    var statementAndSubproofOrProofAssertionsUnify, statementUnifiesWithConclusion, subproofOrProofAssertionsUnifiesWithPremises, substitutionsResolved;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                statementAndSubproofOrProofAssertionsUnify = false;
                                statementUnifiesWithConclusion = this.unifyStatementWithConclusion(statement, context);
                                if (!statementUnifiesWithConclusion) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    this.unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, context)
                                ];
                            case 1:
                                subproofOrProofAssertionsUnifiesWithPremises = _state.sent();
                                if (subproofOrProofAssertionsUnifiesWithPremises) {
                                    substitutionsResolved = context.areSubstitutionsResolved();
                                    if (substitutionsResolved) {
                                        statementAndSubproofOrProofAssertionsUnify = true;
                                    }
                                }
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    statementAndSubproofOrProofAssertionsUnify
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "unifySubproofOrProofAssertionsWithPremises",
            value: function unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, context) {
                return _async_to_generator(function() {
                    var _this, subproofOrProofAssertionsUnifiesWithPremises;
                    return _ts_generator(this, function(_state) {
                        _this = this;
                        subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///
                        subproofOrProofAssertionsUnifiesWithPremises = asyncBackwardsEvery(this.premises, function(premise) {
                            return _async_to_generator(function() {
                                var stepUnifiesWithPremise;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                this.unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, context)
                                            ];
                                        case 1:
                                            stepUnifiesWithPremise = _state.sent();
                                            if (stepUnifiesWithPremise) {
                                                return [
                                                    2,
                                                    true
                                                ];
                                            }
                                            return [
                                                2
                                            ];
                                    }
                                });
                            }).call(_this);
                        });
                        return [
                            2,
                            subproofOrProofAssertionsUnifiesWithPremises
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "unifySubproofOrProofAssertionsWithPremise",
            value: function unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, context) {
                return _async_to_generator(function() {
                    var subproofOrProofAssertionsUnifiesWithPremise, subproofOrProofAssertion, premiseUnifiesIndependently;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                subproofOrProofAssertionsUnifiesWithPremise = false;
                                if (!subproofOrProofAssertionsUnifiesWithPremise) {
                                    subproofOrProofAssertion = extract(subproofOrProofAssertions, function(subproofOrProofAssertion) {
                                        var subproofOrProofAssertionUnifies = premise.unifySubproofOrProofAssertion(subproofOrProofAssertion, context);
                                        if (subproofOrProofAssertionUnifies) {
                                            context.resolveSubstitutions();
                                            return true;
                                        }
                                    }) || null;
                                    if (subproofOrProofAssertion !== null) {
                                        subproofOrProofAssertionsUnifiesWithPremise = true;
                                    }
                                }
                                if (!!subproofOrProofAssertionsUnifiesWithPremise) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    premise.unifyIndependently(context)
                                ];
                            case 1:
                                premiseUnifiesIndependently = _state.sent();
                                if (premiseUnifiesIndependently) {
                                    subproofOrProofAssertionsUnifiesWithPremise = true;
                                }
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    subproofOrProofAssertionsUnifiesWithPremise
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), premisesJSON = (0, _json.premisesToPremisesJSON)(this.premises), conclusionJSON = (0, _json.conclusionToConclusionJSON)(this.conclusion), labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
                    labels: labels,
                    premises: premises,
                    conclusion: conclusion
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var rule;
                var node = null, proof = null, labels = (0, _json.labelsFromJSON)(json, context), premises = (0, _json.premisesFromJSON)(json, context), conclusion = (0, _json.conclusionFromJSON)(json, context), string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion);
                rule = new Rule(context, string, node, labels, premises, conclusion, proof);
                return rule;
            }
        }
    ]);
    return Rule;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Rule, "name", "Rule"), _Rule));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXN5bmNTY29wZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgbGFiZWxzRnJvbUpTT04sXG4gICAgICAgICBwcmVtaXNlc0Zyb21KU09OLFxuICAgICAgICAgY29uY2x1c2lvbkZyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgcHJlbWlzZXNUb1ByZW1pc2VzSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcmV2ZXJzZSwgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFzeW5jRm9yd2FyZHNFdmVyeSwgYXN5bmNCYWNrd2FyZHNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUnVsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25jbHVzaW9uO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBsYWJlbC5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IHRydWUsXG4gICAgICAgICAgICBsYWJlbFZlcmlmaWVzID0gbGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuY29uY2x1c2lvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuY29uY2x1c2lvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbjtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBhd2FpdCBhc3luY1Njb3BlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VzVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlQcmVtaXNlcyhjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJlbWlzZXNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUNvbmNsdXNpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgICBjb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJvb2YuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5jb25jbHVzaW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcmVtaXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IHByZW1pc2VzVmVyaWZ5O1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcmVtaXNlcy4uLmApO1xuXG4gICAgcHJlbWlzZXNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgYXN5bmMgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBwcmVtaXNlVmVyaWZpZXMgPSBhd2FpdCBwcmVtaXNlLnZlcmlmeShhc3NpZ25tZW50cywgY29udGV4dClcblxuICAgICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgICBjb25zdCBhc3NpZ25tZW50c0Fzc2lnbmVkID0gYXNzaWduQXNzaWdubWVudHMoYXNzaWdubWVudHMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50c0Fzc2lnbmVkKSB7XG4gICAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gcHJlbWlzZTsgIC8vLy9cblxuICAgICAgICAgIGNvbnRleHQuYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHByZW1pc2VzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcmVtaXNlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlbWlzZXNWZXJpZnk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpIHtcbiAgICBsZXQgY29uY2x1c2lvblZlcmlmaWVzO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uY2x1c2lvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5jb25jbHVzaW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb250ZXh0LmFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHJldmVyc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyk7IC8vL1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMgPSBhc3luY0JhY2t3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIGFzeW5jIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBzdGVwVW5pZmllc1dpdGhQcmVtaXNlID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSBmYWxzZTtcblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gZXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBwcmVtaXNlLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb250ZXh0LnJlc29sdmVTdWJzdGl0dXRpb25zKCk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IHByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSA9IGF3YWl0IHByZW1pc2UudW5pZnlJbmRlcGVuZGVudGx5KGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzVG9QcmVtaXNlc0pTT04odGhpcy5wcmVtaXNlcyksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTih0aGlzLmNvbmNsdXNpb24pLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUnVsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHJ1bGU7XG5cbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiYXN5bmNGb3J3YXJkc0V2ZXJ5IiwiYXN5bmNocm9ub3VzVXRpbGl0aWVzIiwiYXN5bmNCYWNrd2FyZHNFdmVyeSIsImRlZmluZSIsIlJ1bGUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInByb29mIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRQcm9vZiIsImdldENvbmNsdXNpb24iLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsInNvbWUiLCJsYWJlbCIsImxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJ2ZXJpZnlMYWJlbHMiLCJsYWJlbHNWZXJpZnkiLCJldmVyeSIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllcyIsInZlcmlmeSIsInVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24iLCJydWxlU3RyaW5nIiwiZ2V0U3RyaW5nIiwic3RhdGVtZW50U3RyaW5nIiwiY29uY2x1c2lvblN0cmluZyIsInRyYWNlIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwiZGVidWciLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJicmVhayIsImFzeW5jU2NvcGUiLCJwcmVtaXNlc1ZlcmlmeSIsImNvbmNsdXNpb25WZXJpZmllcyIsInByb29mVmVyaWZpZXMiLCJydWxlIiwidmVyaWZ5UHJlbWlzZXMiLCJ2ZXJpZnlDb25jbHVzaW9uIiwidmVyaWZ5UHJvb2YiLCJhZGRSdWxlIiwiZ2V0U3RhdGVtZW50IiwicHJlbWlzZSIsImFzc2lnbm1lbnRzIiwicHJlbWlzZVZlcmlmaWVzIiwiYXNzaWdubWVudHNBc3NpZ25lZCIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzIiwiYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwic3RlcFVuaWZpZXNXaXRoUHJlbWlzZSIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSIsInByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJjb25jbHVzaW9uSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwianNvbiIsImZyb21KU09OIiwibGFiZWxzRnJvbUpTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwic3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7eUJBakIrQjs4QkFDZ0I7NkRBRWpCO3dCQUVQO3VCQUNJO29CQU1nQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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