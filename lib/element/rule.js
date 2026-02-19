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
            key: "getRuleNode",
            value: function getRuleNode() {
                var node = this.getNode(), ruleNode = node; ///
                return ruleNode;
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
                var labelsVerify;
                var context = this.getContext(), ruleString = this.getString(); ///
                context.trace("Verifying the '".concat(ruleString, "' rule's labels..."));
                labelsVerify = this.labels.every(function(label) {
                    var nameOnly = true, labelVerifies = label.verify(nameOnly);
                    if (labelVerifies) {
                        return true;
                    }
                });
                if (labelsVerify) {
                    context.trace("...verified the '".concat(ruleString, "' rule's labels."));
                }
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
                                                            assignmentsAssigned = (0, _assign.default)(assignments);
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
                                ruleString = this.getString(); ///
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
                    var _this, subproofOrProofAssertionsUnifiesWithPremise, subproofOrProofAssertion, premiseUnifiesIndependently;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                subproofOrProofAssertionsUnifiesWithPremise = false;
                                if (!subproofOrProofAssertionsUnifiesWithPremise) {
                                    subproofOrProofAssertion = extract(subproofOrProofAssertions, function(subproofOrProofAssertion) {
                                        var subproofOrProofAssertionUnifies = premise.unifySubproofOrProofAssertion(subproofOrProofAssertion, context);
                                        if (subproofOrProofAssertionUnifies) {
                                            var specificContext = context; ///
                                            context = _this.getContext();
                                            var generalContext = context; ///
                                            context = specificContext; ///
                                            context.resolveSubstitutions(generalContext, specificContext);
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
                }).call(this);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgYXNzaWduQXNzaWdubWVudHMgZnJvbSBcIi4uL3Byb2Nlc3MvYXNzaWduXCI7XG5cbmltcG9ydCB7IGRlZmluZSB9IGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IHsgYXN5bmNTY29wZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgbGFiZWxzRnJvbUpTT04sXG4gICAgICAgICBwcmVtaXNlc0Zyb21KU09OLFxuICAgICAgICAgY29uY2x1c2lvbkZyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgcHJlbWlzZXNUb1ByZW1pc2VzSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcmV2ZXJzZSwgZXh0cmFjdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFzeW5jRm9yd2FyZHNFdmVyeSwgYXN5bmNCYWNrd2FyZHNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmUoY2xhc3MgUnVsZSBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIHByb29mLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0UnVsZU5vZGUoKSB7XG4gICAgY29uc3Qgbm9kZSA9IHRoaXMuZ2V0Tm9kZSgpLFxuICAgICAgICAgIHJ1bGVOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgcmV0dXJuIHJ1bGVOb2RlO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBsYWJlbC5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgbGV0IGxhYmVsc1ZlcmlmeTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKSxcbiAgICAgICAgICBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGxhYmVscy4uLmApO1xuXG4gICAgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IHRydWUsXG4gICAgICAgICAgICBsYWJlbFZlcmlmaWVzID0gbGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LnRyYWNlKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBsYWJlbHMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb247XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmJyZWFrKGNvbnRleHQpO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgYXdhaXQgYXN5bmNTY29wZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBwcmVtaXNlc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5UHJlbWlzZXMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgY29uY2x1c2lvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgICAgY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIHByb29mLi4uYCk7XG5cbiAgICAgIGNvbnN0IHN0YXRlbWVudCA9IHRoaXMuY29uY2x1c2lvbi5nZXRTdGF0ZW1lbnQoKTtcblxuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRoaXMucHJvb2YudmVyaWZ5KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIHByb29mLmApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJlbWlzZXMoY29udGV4dCkge1xuICAgIGxldCBwcmVtaXNlc1ZlcmlmeTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJlbWlzZXMuLi5gKTtcblxuICAgIHByZW1pc2VzVmVyaWZ5ID0gYXdhaXQgYXN5bmNGb3J3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIGFzeW5jIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBhc3NpZ25tZW50cyA9IFtdLFxuICAgICAgICAgICAgcHJlbWlzZVZlcmlmaWVzID0gYXdhaXQgcHJlbWlzZS52ZXJpZnkoYXNzaWdubWVudHMsIGNvbnRleHQpXG5cbiAgICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3QgYXNzaWdubWVudHNBc3NpZ25lZCA9IGFzc2lnbkFzc2lnbm1lbnRzKGFzc2lnbm1lbnRzKTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudHNBc3NpZ25lZCkge1xuICAgICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IHByZW1pc2U7ICAvLy8vXG5cbiAgICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJlbWlzZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZW1pc2VzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KSB7XG4gICAgbGV0IGNvbmNsdXNpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uY2x1c2lvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5jb25jbHVzaW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb250ZXh0LmFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHJldmVyc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyk7IC8vL1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMgPSBhc3luY0JhY2t3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIGFzeW5jIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBzdGVwVW5pZmllc1dpdGhQcmVtaXNlID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSBmYWxzZTtcblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gZXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBwcmVtaXNlLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5yZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3QgcHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2U7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTih0aGlzLnByZW1pc2VzKSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKHRoaXMuY29uY2x1c2lvbiksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSdWxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn0pO1xuIl0sIm5hbWVzIjpbInJldmVyc2UiLCJhcnJheVV0aWxpdGllcyIsImV4dHJhY3QiLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJhc3luY0JhY2t3YXJkc0V2ZXJ5IiwiZGVmaW5lIiwiUnVsZSIsImNvbnRleHQiLCJzdHJpbmciLCJub2RlIiwicHJvb2YiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldFByb29mIiwiZ2V0Q29uY2x1c2lvbiIsImdldFJ1bGVOb2RlIiwiZ2V0Tm9kZSIsInJ1bGVOb2RlIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJzb21lIiwibGFiZWwiLCJsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwidmVyaWZ5TGFiZWxzIiwibGFiZWxzVmVyaWZ5IiwiZ2V0Q29udGV4dCIsInJ1bGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImV2ZXJ5IiwibmFtZU9ubHkiLCJsYWJlbFZlcmlmaWVzIiwidmVyaWZ5IiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbiIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiIsInN0YXRlbWVudFN0cmluZyIsImNvbmNsdXNpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJkZWJ1ZyIsInZlcmlmaWVzIiwiYnJlYWsiLCJhc3luY1Njb3BlIiwicHJlbWlzZXNWZXJpZnkiLCJjb25jbHVzaW9uVmVyaWZpZXMiLCJwcm9vZlZlcmlmaWVzIiwicnVsZSIsInZlcmlmeVByZW1pc2VzIiwidmVyaWZ5Q29uY2x1c2lvbiIsInZlcmlmeVByb29mIiwiYWRkUnVsZSIsImdldFN0YXRlbWVudCIsInByZW1pc2UiLCJhc3NpZ25tZW50cyIsInByZW1pc2VWZXJpZmllcyIsImFzc2lnbm1lbnRzQXNzaWduZWQiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJhc3NpZ25Bc3NpZ25tZW50cyIsImFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyIsImFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInN0ZXBVbmlmaWVzV2l0aFByZW1pc2UiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UiLCJwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwidW5pZnlJbmRlcGVuZGVudGx5IiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJjb25jbHVzaW9uSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwianNvbiIsImZyb21KU09OIiwibGFiZWxzRnJvbUpTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwic3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtQkE7OztlQUFBOzs7eUJBakIrQjs4QkFDZ0I7NkRBRWpCO3dCQUVQO3VCQUNJO29CQU1nQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFRQSxVQUFxQkMseUJBQWMsQ0FBbkNELFNBQVNFLFVBQVlELHlCQUFjLENBQTFCQyxTQUNUQyxxQkFBNENDLHFDQUFxQixDQUFqRUQsb0JBQW9CRSxzQkFBd0JELHFDQUFxQixDQUE3Q0M7SUFFNUIs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