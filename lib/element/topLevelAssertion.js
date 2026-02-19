"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return TopLevelAssertion;
    }
});
var _occamlanguages = require("occam-languages");
var _necessary = require("necessary");
var _assign = /*#__PURE__*/ _interop_require_default(require("../process/assign"));
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
var extract = _necessary.arrayUtilities.extract, reverse = _necessary.arrayUtilities.reverse, correlate = _necessary.arrayUtilities.correlate, asyncForwardsEvery = _occamlanguages.asynchronousUtilities.asyncForwardsEvery, asyncBackwardsEvery = _occamlanguages.asynchronousUtilities.asyncBackwardsEvery;
var TopLevelAssertion = /*#__PURE__*/ function(Element) {
    _inherits(TopLevelAssertion, Element);
    function TopLevelAssertion(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses) {
        _class_call_check(this, TopLevelAssertion);
        var _this;
        _this = _call_super(this, TopLevelAssertion, [
            context,
            string,
            node
        ]);
        _this.labels = labels;
        _this.suppositions = suppositions;
        _this.deduction = deduction;
        _this.proof = proof;
        _this.signature = signature;
        _this.hypotheses = hypotheses;
        return _this;
    }
    _create_class(TopLevelAssertion, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getSuppositions",
            value: function getSuppositions() {
                return this.suppositions;
            }
        },
        {
            key: "getDeduction",
            value: function getDeduction() {
                return this.deduction;
            }
        },
        {
            key: "getProof",
            value: function getProof() {
                return this.proof;
            }
        },
        {
            key: "getSignature",
            value: function getSignature() {
                return this.signature;
            }
        },
        {
            key: "getHypotheses",
            value: function getHypotheses() {
                return this.hypotheses;
            }
        },
        {
            key: "setHypotheses",
            value: function setHypotheses(hypotheses) {
                this.hypotheses = hypotheses;
            }
        },
        {
            key: "getStatement",
            value: function getStatement() {
                return this.deduction.getStatement();
            }
        },
        {
            key: "isHypothetical",
            value: function isHypothetical() {
                var hypothesesLength = this.hypotheses.length, hypothetical = hypothesesLength > 0;
                return hypothetical;
            }
        },
        {
            key: "isUnconditional",
            value: function isUnconditional() {
                var suppositionsLength = this.suppositions.length, unconditional = suppositionsLength === 0;
                return unconditional;
            }
        },
        {
            key: "getSupposition",
            value: function getSupposition(index) {
                var supposition = this.suppositions[index] || null;
                return supposition;
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
            key: "correlateHypotheses",
            value: function correlateHypotheses(context) {
                var correlatesToHypotheses;
                var hypothetical = this.isHypothetical();
                if (hypothetical) {
                    var proofAssertions = context.getProofAssertions(), topLevelAssertionString = this.getString(); ///
                    context.trace("Correlating the hypotheses of the '".concat(topLevelAssertionString, "' top level assertion..."));
                    correlatesToHypotheses = correlate(this.hypotheses, proofAssertions, function(hypothesis, proofAssertion) {
                        var hypothesesComparesToStep = hypothesis.compareProofAssertion(proofAssertion, context);
                        if (hypothesesComparesToStep) {
                            return true;
                        }
                    });
                    if (correlatesToHypotheses) {
                        context.debug("...correlated the hypotheses of the '".concat(topLevelAssertionString, "' top level assertion."));
                    }
                } else {
                    correlatesToHypotheses = true;
                }
                return correlatesToHypotheses;
            }
        },
        {
            key: "verifyLabels",
            value: function verifyLabels() {
                var labelsVerify;
                var context = this.getContext(), topLevelAssertionString = this.getString();
                context.trace("Verifying the '".concat(topLevelAssertionString, "' top level assertion's labels..."));
                labelsVerify = this.labels.every(function(label) {
                    var nameOnly = true, labelVerifies = label.verify(nameOnly);
                    if (labelVerifies) {
                        return true;
                    }
                });
                if (labelsVerify) {
                    context.trace("...verified the '".concat(topLevelAssertionString, "' top level assertion's labels."));
                }
                return labelsVerify;
            }
        },
        {
            key: "unifyStatementWithDeduction",
            value: function unifyStatementWithDeduction(statement, context) {
                var statementUnifiesWithDeduction = false;
                var statementString = statement.getString(), deductionString = this.deduction.getString(), topLevelAssertionString = this.getString(); ///
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(topLevelAssertionString, "' top level assertion's '").concat(deductionString, "' deduction..."));
                var statementUnifies = this.deduction.unifyStatement(statement, context);
                if (statementUnifies) {
                    statementUnifiesWithDeduction = true;
                }
                if (statementUnifiesWithDeduction) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(topLevelAssertionString, "' top level assertion's '").concat(deductionString, "' deduction."));
                }
                return statementUnifiesWithDeduction;
            }
        },
        {
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var _this, verifies, context, topLevelAssertionString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                verifies = false;
                                context = this.getContext(), topLevelAssertionString = this.getString(); ///
                                context.trace("Verifying the '".concat(topLevelAssertionString, "' top level assertion..."));
                                return [
                                    4,
                                    (0, _context.asyncScope)(function(context) {
                                        return _async_to_generator(function() {
                                            var labelsVerify, suppositionsVerify, deductionVerifies, proofVerifies;
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
                                                            this.verifySuppositions(context)
                                                        ];
                                                    case 1:
                                                        suppositionsVerify = _state.sent();
                                                        if (!suppositionsVerify) return [
                                                            3,
                                                            4
                                                        ];
                                                        return [
                                                            4,
                                                            this.verifyDeduction(context)
                                                        ];
                                                    case 2:
                                                        deductionVerifies = _state.sent();
                                                        if (!deductionVerifies) return [
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
                            case 1:
                                _state.sent();
                                if (verifies) {
                                    context.debug("...verified the '".concat(topLevelAssertionString, "' top level assertion."));
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
                    var proofVerifies, topLevelAssertionString, statement;
                    return _ts_generator(this, function(_state) {
                        if (this.proof === null) {
                            proofVerifies = true;
                        } else {
                            topLevelAssertionString = this.getString(); ///
                            context.trace("Verifying the '".concat(topLevelAssertionString, "' top level assertion's proof..."));
                            statement = this.deduction.getStatement();
                            proofVerifies = this.proof.verify(statement, context);
                            if (proofVerifies) {
                                context.debug("...verified the '".concat(topLevelAssertionString, "' top level assertion's proof."));
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
            key: "verifyDeduction",
            value: function verifyDeduction(context) {
                return _async_to_generator(function() {
                    var deductionVerifies, topLevelAssertionString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                topLevelAssertionString = this.getString(); ///
                                context.trace("Verifying the '".concat(topLevelAssertionString, "' top level assertion's deduction..."));
                                return [
                                    4,
                                    this.deduction.verify(context)
                                ];
                            case 1:
                                deductionVerifies = _state.sent();
                                if (deductionVerifies) {
                                    context.debug("...verified the '".concat(topLevelAssertionString, "' top level assertion's deduction."));
                                }
                                return [
                                    2,
                                    deductionVerifies
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "verifySuppositions",
            value: function verifySuppositions(context) {
                return _async_to_generator(function() {
                    var suppositionsVerify, topLevelAssertionString;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                topLevelAssertionString = this.getString(); ///
                                context.trace("Verifying the '".concat(topLevelAssertionString, "' top level assertion's suppositions..."));
                                return [
                                    4,
                                    asyncForwardsEvery(this.suppositions, function(supposition) {
                                        return _async_to_generator(function() {
                                            var assignments, suppositionVerifies, subproofOrProofAssertion;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        assignments = [];
                                                        return [
                                                            4,
                                                            supposition.verify(assignments, context)
                                                        ];
                                                    case 1:
                                                        suppositionVerifies = _state.sent();
                                                        if (suppositionVerifies) {
                                                            (0, _assign.default)(assignments, context);
                                                            subproofOrProofAssertion = supposition; ////
                                                            context.addSubproofOrProofAssertion(subproofOrProofAssertion);
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
                                        })();
                                    })
                                ];
                            case 1:
                                suppositionsVerify = _state.sent();
                                if (suppositionsVerify) {
                                    context.debug("...verified the '".concat(topLevelAssertionString, "' top level assertion's suppositions."));
                                }
                                return [
                                    2,
                                    suppositionsVerify
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
                    var statementAndSubproofOrProofAssertionsUnify, correlatesToHypotheses, statementUnifiesWithDeduction, subproofOrProofAssertionsUnifiesWithSuppositions, substitutionsResolved;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                statementAndSubproofOrProofAssertionsUnify = false;
                                correlatesToHypotheses = this.correlateHypotheses(context);
                                if (!correlatesToHypotheses) return [
                                    3,
                                    2
                                ];
                                statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, context);
                                if (!statementUnifiesWithDeduction) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    this.unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, context)
                                ];
                            case 1:
                                subproofOrProofAssertionsUnifiesWithSuppositions = _state.sent();
                                if (subproofOrProofAssertionsUnifiesWithSuppositions) {
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
            key: "unifySubproofOrProofAssertionsWithSupposition",
            value: function unifySubproofOrProofAssertionsWithSupposition(subproofOrProofAssertions, supposition, context) {
                return _async_to_generator(function() {
                    var _this, subproofOrProofAssertionsUnifiesWithSupposition, subproofOrProofAssertion, suppositionUnifiesIndependently;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                subproofOrProofAssertionsUnifiesWithSupposition = false;
                                if (!subproofOrProofAssertionsUnifiesWithSupposition) {
                                    subproofOrProofAssertion = extract(subproofOrProofAssertions, function(subproofOrProofAssertion) {
                                        var subproofOrProofAssertionUnifies = supposition.unifySubproofOrProofAssertion(subproofOrProofAssertion, context);
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
                                        subproofOrProofAssertionsUnifiesWithSupposition = true;
                                    }
                                }
                                if (!!subproofOrProofAssertionsUnifiesWithSupposition) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    supposition.unifyIndependently(context)
                                ];
                            case 1:
                                suppositionUnifiesIndependently = _state.sent();
                                if (suppositionUnifiesIndependently) {
                                    subproofOrProofAssertionsUnifiesWithSupposition = true;
                                }
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    subproofOrProofAssertionsUnifiesWithSupposition
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "unifySubproofOrProofAssertionsWithSuppositions",
            value: function unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, context) {
                return _async_to_generator(function() {
                    var _this, subproofOrProofAssertionsUnifiesWithSuppositions;
                    return _ts_generator(this, function(_state) {
                        _this = this;
                        subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///
                        subproofOrProofAssertionsUnifiesWithSuppositions = asyncBackwardsEvery(this.suppositions, function(supposition) {
                            return _async_to_generator(function() {
                                var stepUnifiesWithSupposition;
                                return _ts_generator(this, function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                this.unifySubproofOrProofAssertionsWithSupposition(subproofOrProofAssertions, supposition, context)
                                            ];
                                        case 1:
                                            stepUnifiesWithSupposition = _state.sent();
                                            if (stepUnifiesWithSupposition) {
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
                            subproofOrProofAssertionsUnifiesWithSuppositions
                        ];
                    });
                }).call(this);
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), signatureJSON = (0, _json.signatureToSignatureJSON)(this.signature), hypothesesJSON = (0, _json.hypothesesToHypothesesJSON)(this.hypotheses), labels = labelsJSON, deduction = deductionJSON, suppositions = suppositionsJSON, signature = signatureJSON, hypotheses = hypothesesJSON, json = {
                    labels: labels,
                    deduction: deduction,
                    suppositions: suppositions,
                    signature: signature,
                    hypotheses: hypotheses
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, context) {
                var labels = (0, _json.labelsFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), signature = (0, _json.signatureFromJSON)(json, context), hypotheses = (0, _json.hypothesesFromJSON)(json, context), node = null, proof = null, string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction), topLevelAssertion = new Class(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
                return topLevelAssertion;
            }
        }
    ]);
    return TopLevelAssertion;
}(_wrap_native_super(_occamlanguages.Element));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCBhc3NpZ25Bc3NpZ25tZW50cyBmcm9tIFwiLi4vcHJvY2Vzcy9hc3NpZ25cIjtcblxuaW1wb3J0IHsgYXN5bmNTY29wZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgbGFiZWxzRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Gcm9tSlNPTixcbiAgICAgICAgIHNpZ25hdHVyZUZyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc0Zyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04sXG4gICAgICAgICBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04sXG4gICAgICAgICBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGV4dHJhY3QsIHJldmVyc2UsIGNvcnJlbGF0ZSB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IGFzeW5jRm9yd2FyZHNFdmVyeSwgYXN5bmNCYWNrd2FyZHNFdmVyeSB9ID0gYXN5bmNocm9ub3VzVXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiBleHRlbmRzIEVsZW1lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldERlZHVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWR1Y3Rpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldFNpZ25hdHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaWduYXR1cmU7XG4gIH1cblxuICBnZXRIeXBvdGhlc2VzKCkge1xuICAgIHJldHVybiB0aGlzLmh5cG90aGVzZXM7XG4gIH1cblxuICBzZXRIeXBvdGhlc2VzKGh5cG90aGVzZXMpIHtcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7IH1cblxuICBpc0h5cG90aGV0aWNhbCgpIHtcbiAgICBjb25zdCBoeXBvdGhlc2VzTGVuZ3RoID0gdGhpcy5oeXBvdGhlc2VzLmxlbmd0aCxcbiAgICAgICAgICBoeXBvdGhldGljYWwgPSAoaHlwb3RoZXNlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGh5cG90aGV0aWNhbDtcbiAgfVxuXG4gIGlzVW5jb25kaXRpb25hbCgpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnNMZW5ndGggPSB0aGlzLnN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgdW5jb25kaXRpb25hbCA9IChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIHVuY29uZGl0aW9uYWw7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbihpbmRleCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcy5zdXBwb3NpdGlvbnNbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxhYmVsLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIGNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCkge1xuICAgIGxldCBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzO1xuXG4gICAgY29uc3QgaHlwb3RoZXRpY2FsID0gdGhpcy5pc0h5cG90aGV0aWNhbCgpO1xuXG4gICAgaWYgKGh5cG90aGV0aWNhbCkge1xuICAgICAgY29uc3QgcHJvb2ZBc3NlcnRpb25zID0gY29udGV4dC5nZXRQcm9vZkFzc2VydGlvbnMoKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICAgIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSBjb3JyZWxhdGUodGhpcy5oeXBvdGhlc2VzLCBwcm9vZkFzc2VydGlvbnMsIChoeXBvdGhlc2lzLCBwcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICBjb25zdCBoeXBvdGhlc2VzQ29tcGFyZXNUb1N0ZXAgPSBoeXBvdGhlc2lzLmNvbXBhcmVQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29ycmVsYXRlZCB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzID0gdHJ1ZVxuICAgIH1cblxuICAgIHJldHVybiBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGxldCBsYWJlbHNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBsYWJlbHMuLi5gKTtcblxuICAgIGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeShuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC50cmFjZShgLi4udmVyaWZpZWQgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGxhYmVscy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA9IHRoaXMuZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuZGVkdWN0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzICcke2RlZHVjdGlvblN0cmluZ30nIGRlZHVjdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb247XG4gIH1cblxuICBhc3luYyB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLi4uYCk7XG5cbiAgICBhd2FpdCBhc3luY1Njb3BlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IGF3YWl0IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uJ3MgcHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIGRlZHVjdGlvbi4uLmApO1xuXG4gICAgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBkZWR1Y3Rpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlZHVjdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBsZXQgc3VwcG9zaXRpb25zVmVyaWZ5O1xuXG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbidzIHN1cHBvc2l0aW9ucy4uLmApO1xuXG4gICAgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgYXN5bmNGb3J3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCBhc3luYyAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGFzc2lnbm1lbnRzID0gW10sXG4gICAgICAgICAgICBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgc3VwcG9zaXRpb24udmVyaWZ5KGFzc2lnbm1lbnRzLCBjb250ZXh0KVxuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICBhc3NpZ25Bc3NpZ25tZW50cyhhc3NpZ25tZW50cywgY29udGV4dCk7XG5cbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gc3VwcG9zaXRpb247ICAvLy8vXG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24ncyBzdXBwb3NpdGlvbnMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb3JyZWxhdGVzVG9IeXBvdGhlc2VzID0gdGhpcy5jb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpO1xuXG4gICAgaWYgKGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29udGV4dC5hcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQoKTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gZXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBzdXBwb3NpdGlvbi51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgY29uc3Qgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgICAgICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSBjb250ZXh0OyAvLy9cblxuICAgICAgICAgIGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIGNvbnRleHQucmVzb2x2ZVN1YnN0aXR1dGlvbnMoZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiAhPT0gbnVsbCkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IGF3YWl0IHN1cHBvc2l0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbjtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnM7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gcmV2ZXJzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTsgLy8vXG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbnMgPSBhc3luY0JhY2t3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCBhc3luYyAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04odGhpcy5zaWduYXR1cmUpLFxuICAgICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04odGhpcy5oeXBvdGhlc2VzKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVKU09OLCAgLy8vXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHNpZ25hdHVyZSxcbiAgICAgICAgICAgIGh5cG90aGVzZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbEFzc2VydGlvbiIsImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsInJldmVyc2UiLCJjb3JyZWxhdGUiLCJhc3luY0ZvcndhcmRzRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJhc3luY0JhY2t3YXJkc0V2ZXJ5IiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsInNpZ25hdHVyZSIsImh5cG90aGVzZXMiLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXREZWR1Y3Rpb24iLCJnZXRQcm9vZiIsImdldFNpZ25hdHVyZSIsImdldEh5cG90aGVzZXMiLCJzZXRIeXBvdGhlc2VzIiwiZ2V0U3RhdGVtZW50IiwiaXNIeXBvdGhldGljYWwiLCJoeXBvdGhlc2VzTGVuZ3RoIiwibGVuZ3RoIiwiaHlwb3RoZXRpY2FsIiwiaXNVbmNvbmRpdGlvbmFsIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwidW5jb25kaXRpb25hbCIsImdldFN1cHBvc2l0aW9uIiwiaW5kZXgiLCJzdXBwb3NpdGlvbiIsImNvbXBhcmVNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsImNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwic29tZSIsImxhYmVsIiwibGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsImNvcnJlbGF0ZUh5cG90aGVzZXMiLCJjb3JyZWxhdGVzVG9IeXBvdGhlc2VzIiwicHJvb2ZBc3NlcnRpb25zIiwiZ2V0UHJvb2ZBc3NlcnRpb25zIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzaXMiLCJwcm9vZkFzc2VydGlvbiIsImh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCIsImNvbXBhcmVQcm9vZkFzc2VydGlvbiIsImRlYnVnIiwidmVyaWZ5TGFiZWxzIiwibGFiZWxzVmVyaWZ5IiwiZ2V0Q29udGV4dCIsImV2ZXJ5IiwibmFtZU9ubHkiLCJsYWJlbFZlcmlmaWVzIiwidmVyaWZ5IiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJkZWR1Y3Rpb25TdHJpbmciLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ2ZXJpZmllcyIsImFzeW5jU2NvcGUiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJ2ZXJpZnlQcm9vZiIsImFzc2lnbm1lbnRzIiwic3VwcG9zaXRpb25WZXJpZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9ucyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbnMiLCJhcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzcGVjaWZpY0NvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcFVuaWZpZXNXaXRoU3VwcG9zaXRpb24iLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzaWduYXR1cmVKU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwibGFiZWxzRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXVCcUJBOzs7OEJBckJHO3lCQUNPOzZEQUdEO3VCQUVIO29CQVVvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBUUMsVUFBZ0NDLHlCQUFjLENBQTlDRCxTQUFTRSxVQUF1QkQseUJBQWMsQ0FBckNDLFNBQVNDLFlBQWNGLHlCQUFjLENBQTVCRSxXQUNsQkMscUJBQTRDQyxxQ0FBcUIsQ0FBakVELG9CQUFvQkUsc0JBQXdCRCxxQ0FBcUIsQ0FBN0NDO0FBRWIsSUFBQSxBQUFNUCxrQ0FBTjtjQUFNQTthQUFBQSxrQkFDUFEsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVDLFVBQVU7Z0NBRDdFaEI7O2dCQUVqQixrQkFGaUJBO1lBRVhRO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxNQUFNLEdBQUdBO1FBQ2QsTUFBS0MsWUFBWSxHQUFHQTtRQUNwQixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFVBQVUsR0FBR0E7OztrQkFURGhCOztZQVluQmlCLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sTUFBTTtZQUNwQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sWUFBWTtZQUMxQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sU0FBUztZQUN2Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sS0FBSztZQUNuQjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sU0FBUztZQUN2Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ04sVUFBVTtZQUN4Qjs7O1lBRUFPLEtBQUFBO21CQUFBQSxTQUFBQSxjQUFjUCxVQUFVO2dCQUN0QixJQUFJLENBQUNBLFVBQVUsR0FBR0E7WUFDcEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQWlCLE9BQU8sSUFBSSxDQUFDWCxTQUFTLENBQUNXLFlBQVk7WUFBSTs7O1lBRXZEQyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsbUJBQW1CLElBQUksQ0FBQ1YsVUFBVSxDQUFDVyxNQUFNLEVBQ3pDQyxlQUFnQkYsbUJBQW1CO2dCQUV6QyxPQUFPRTtZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLHFCQUFxQixJQUFJLENBQUNsQixZQUFZLENBQUNlLE1BQU0sRUFDN0NJLGdCQUFpQkQsdUJBQXVCO2dCQUU5QyxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWVDLEtBQUs7Z0JBQ2xCLElBQU1DLGNBQWMsSUFBSSxDQUFDdEIsWUFBWSxDQUFDcUIsTUFBTSxJQUFJO2dCQUVoRCxPQUFPQztZQUNUOzs7WUFFQUMsS0FBQUE7bUJBQUFBLFNBQUFBLHdCQUF3QkMsZ0JBQWdCO2dCQUN0QyxJQUFNQyw2QkFBNkIsSUFBSSxDQUFDMUIsTUFBTSxDQUFDMkIsSUFBSSxDQUFDLFNBQUNDO29CQUNuRCxJQUFNQyxrQ0FBa0NELE1BQU1KLHVCQUF1QixDQUFDQztvQkFFdEUsSUFBSUksaUNBQWlDO3dCQUNuQyxPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9IO1lBQ1Q7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CakMsT0FBTztnQkFDekIsSUFBSWtDO2dCQUVKLElBQU1kLGVBQWUsSUFBSSxDQUFDSCxjQUFjO2dCQUV4QyxJQUFJRyxjQUFjO29CQUNoQixJQUFNZSxrQkFBa0JuQyxRQUFRb0Msa0JBQWtCLElBQzVDQywwQkFBMEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztvQkFFdER0QyxRQUFRdUMsS0FBSyxDQUFDLEFBQUMsc0NBQTZELE9BQXhCRix5QkFBd0I7b0JBRTVFSCx5QkFBeUJ0QyxVQUFVLElBQUksQ0FBQ1ksVUFBVSxFQUFFMkIsaUJBQWlCLFNBQUNLLFlBQVlDO3dCQUNoRixJQUFNQywyQkFBMkJGLFdBQVdHLHFCQUFxQixDQUFDRixnQkFBZ0J6Qzt3QkFFbEYsSUFBSTBDLDBCQUEwQjs0QkFDNUIsT0FBTzt3QkFDVDtvQkFDRjtvQkFFQSxJQUFJUix3QkFBd0I7d0JBQzFCbEMsUUFBUTRDLEtBQUssQ0FBQyxBQUFDLHdDQUErRCxPQUF4QlAseUJBQXdCO29CQUNoRjtnQkFDRixPQUFPO29CQUNMSCx5QkFBeUI7Z0JBQzNCO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBVyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUM7Z0JBRUosSUFBTTlDLFVBQVUsSUFBSSxDQUFDK0MsVUFBVSxJQUN6QlYsMEJBQTBCLElBQUksQ0FBQ0MsU0FBUztnQkFFOUN0QyxRQUFRdUMsS0FBSyxDQUFDLEFBQUMsa0JBQXlDLE9BQXhCRix5QkFBd0I7Z0JBRXhEUyxlQUFlLElBQUksQ0FBQzNDLE1BQU0sQ0FBQzZDLEtBQUssQ0FBQyxTQUFDakI7b0JBQ2hDLElBQU1rQixXQUFXLE1BQ1hDLGdCQUFnQm5CLE1BQU1vQixNQUFNLENBQUNGO29CQUVuQyxJQUFJQyxlQUFlO3dCQUNqQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLElBQUlKLGNBQWM7b0JBQ2hCOUMsUUFBUXVDLEtBQUssQ0FBQyxBQUFDLG9CQUEyQyxPQUF4QkYseUJBQXdCO2dCQUM1RDtnQkFFQSxPQUFPUztZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkMsU0FBUyxFQUFFckQsT0FBTztnQkFDNUMsSUFBSXNELGdDQUFnQztnQkFFcEMsSUFBTUMsa0JBQWtCRixVQUFVZixTQUFTLElBQ3JDa0Isa0JBQWtCLElBQUksQ0FBQ25ELFNBQVMsQ0FBQ2lDLFNBQVMsSUFDMUNELDBCQUEwQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dCQUVyRHRDLFFBQVF1QyxLQUFLLENBQUMsQUFBQyxpQkFBd0RGLE9BQXhDa0IsaUJBQWdCLDBCQUEyRUMsT0FBbkRuQix5QkFBd0IsNkJBQTJDLE9BQWhCbUIsaUJBQWdCO2dCQUUxSSxJQUFNQyxtQkFBbUIsSUFBSSxDQUFDcEQsU0FBUyxDQUFDcUQsY0FBYyxDQUFDTCxXQUFXckQ7Z0JBRWxFLElBQUl5RCxrQkFBa0I7b0JBQ3BCSCxnQ0FBZ0M7Z0JBQ2xDO2dCQUVBLElBQUlBLCtCQUErQjtvQkFDakN0RCxRQUFRNEMsS0FBSyxDQUFDLEFBQUMsbUJBQTBEUCxPQUF4Q2tCLGlCQUFnQiwwQkFBMkVDLE9BQW5EbkIseUJBQXdCLDZCQUEyQyxPQUFoQm1CLGlCQUFnQjtnQkFDOUk7Z0JBRUEsT0FBT0Y7WUFDVDs7O1lBRU1ILEtBQUFBO21CQUFOLFNBQU1BOzsrQkFDQVEsVUFFRTNELFNBQ0FxQzs7Ozs7Z0NBSEZzQixXQUFXO2dDQUVUM0QsVUFBVSxJQUFJLENBQUMrQyxVQUFVLElBQ3pCViwwQkFBMEIsSUFBSSxDQUFDQyxTQUFTLElBQUksR0FBRztnQ0FFckR0QyxRQUFRdUMsS0FBSyxDQUFDLEFBQUMsa0JBQXlDLE9BQXhCRix5QkFBd0I7Z0NBRXhEOztvQ0FBTXVCLElBQUFBLG1CQUFVLEVBQUMsU0FBTzVEOztnREFDaEI4QyxjQUdFZSxvQkFHRUMsbUJBR0VDOzs7O3dEQVROakIsZUFBZSxJQUFJLENBQUNELFlBQVk7NkRBRWxDQyxjQUFBQTs7Ozt3REFDeUI7OzREQUFNLElBQUksQ0FBQ2tCLGtCQUFrQixDQUFDaEU7Ozt3REFBbkQ2RCxxQkFBcUI7NkRBRXZCQSxvQkFBQUE7Ozs7d0RBQ3dCOzs0REFBTSxJQUFJLENBQUNJLGVBQWUsQ0FBQ2pFOzs7d0RBQS9DOEQsb0JBQW9COzZEQUV0QkEsbUJBQUFBOzs7O3dEQUNvQjs7NERBQU0sSUFBSSxDQUFDSSxXQUFXLENBQUNsRTs7O3dEQUF2QytELGdCQUFnQjt3REFFdEIsSUFBSUEsZUFBZTs0REFDakJKLFdBQVc7d0RBQ2I7Ozs7Ozs7O3dDQUlSO3VDQUFHM0Q7OztnQ0FsQkg7Z0NBb0JBLElBQUkyRCxVQUFVO29DQUNaM0QsUUFBUTRDLEtBQUssQ0FBQyxBQUFDLG9CQUEyQyxPQUF4QlAseUJBQXdCO2dDQUM1RDtnQ0FFQTs7b0NBQU9zQjs7OztnQkFDVDs7OztZQUVNTyxLQUFBQTttQkFBTixTQUFNQSxZQUFZbEUsT0FBTzs7d0JBQ25CK0QsZUFLSTFCLHlCQUlBZ0I7O3dCQVBSLElBQUksSUFBSSxDQUFDL0MsS0FBSyxLQUFLLE1BQU07NEJBQ3ZCeUQsZ0JBQWdCO3dCQUNsQixPQUFPOzRCQUNDMUIsMEJBQTBCLElBQUksQ0FBQ0MsU0FBUyxJQUFLLEdBQUc7NEJBRXREdEMsUUFBUXVDLEtBQUssQ0FBQyxBQUFDLGtCQUF5QyxPQUF4QkYseUJBQXdCOzRCQUVsRGdCLFlBQVksSUFBSSxDQUFDaEQsU0FBUyxDQUFDVyxZQUFZOzRCQUU3QytDLGdCQUFnQixJQUFJLENBQUN6RCxLQUFLLENBQUM2QyxNQUFNLENBQUNFLFdBQVdyRDs0QkFFN0MsSUFBSStELGVBQWU7Z0NBQ2pCL0QsUUFBUTRDLEtBQUssQ0FBQyxBQUFDLG9CQUEyQyxPQUF4QlAseUJBQXdCOzRCQUM1RDt3QkFDRjt3QkFFQTs7NEJBQU8wQjs7O2dCQUNUOzs7O1lBRU1FLEtBQUFBO21CQUFOLFNBQU1BLGdCQUFnQmpFLE9BQU87O3dCQUN2QjhELG1CQUVFekI7Ozs7Z0NBQUFBLDBCQUEwQixJQUFJLENBQUNDLFNBQVMsSUFBSSxHQUFHO2dDQUVyRHRDLFFBQVF1QyxLQUFLLENBQUMsQUFBQyxrQkFBeUMsT0FBeEJGLHlCQUF3QjtnQ0FFcEM7O29DQUFNLElBQUksQ0FBQ2hDLFNBQVMsQ0FBQzhDLE1BQU0sQ0FBQ25EOzs7Z0NBQWhEOEQsb0JBQW9CO2dDQUVwQixJQUFJQSxtQkFBbUI7b0NBQ3JCOUQsUUFBUTRDLEtBQUssQ0FBQyxBQUFDLG9CQUEyQyxPQUF4QlAseUJBQXdCO2dDQUM1RDtnQ0FFQTs7b0NBQU95Qjs7OztnQkFDVDs7OztZQUVNRSxLQUFBQTttQkFBTixTQUFNQSxtQkFBbUJoRSxPQUFPOzt3QkFDMUI2RCxvQkFFRXhCOzs7O2dDQUFBQSwwQkFBMEIsSUFBSSxDQUFDQyxTQUFTLElBQUssR0FBRztnQ0FFdER0QyxRQUFRdUMsS0FBSyxDQUFDLEFBQUMsa0JBQXlDLE9BQXhCRix5QkFBd0I7Z0NBRW5DOztvQ0FBTXhDLG1CQUFtQixJQUFJLENBQUNPLFlBQVksRUFBRSxTQUFPc0I7O2dEQUNoRXlDLGFBQ0FDLHFCQUtFQzs7Ozt3REFORkY7d0RBQ3NCOzs0REFBTXpDLFlBQVl5QixNQUFNLENBQUNnQixhQUFhbkU7Ozt3REFBNURvRSxzQkFBc0I7d0RBRTVCLElBQUlBLHFCQUFxQjs0REFDdkJFLElBQUFBLGVBQWlCLEVBQUNILGFBQWFuRTs0REFFekJxRSwyQkFBMkIzQyxhQUFjLElBQUk7NERBRW5EMUIsUUFBUXVFLDJCQUEyQixDQUFDRjs0REFFcEM7O2dFQUFPOzt3REFDVDs7Ozs7O3dDQUNGOzs7O2dDQWJBUixxQkFBcUI7Z0NBZXJCLElBQUlBLG9CQUFvQjtvQ0FDdEI3RCxRQUFRNEMsS0FBSyxDQUFDLEFBQUMsb0JBQTJDLE9BQXhCUCx5QkFBd0I7Z0NBQzVEO2dDQUVBOztvQ0FBT3dCOzs7O2dCQUNUOzs7O1lBRU1XLEtBQUFBO21CQUFOLFNBQU1BLDJDQUEyQ25CLFNBQVMsRUFBRW9CLHlCQUF5QixFQUFFekUsT0FBTzs7d0JBQ3hGMEUsNENBRUV4Qyx3QkFHRW9CLCtCQUdFcUIsa0RBR0VDOzs7O2dDQVhSRiw2Q0FBNkM7Z0NBRTNDeEMseUJBQXlCLElBQUksQ0FBQ0QsbUJBQW1CLENBQUNqQztxQ0FFcERrQyx3QkFBQUE7Ozs7Z0NBQ0lvQixnQ0FBZ0MsSUFBSSxDQUFDRiwyQkFBMkIsQ0FBQ0MsV0FBV3JEO3FDQUU5RXNELCtCQUFBQTs7OztnQ0FDdUQ7O29DQUFNLElBQUksQ0FBQ3VCLDhDQUE4QyxDQUFDSiwyQkFBMkJ6RTs7O2dDQUF4STJFLG1EQUFtRDtnQ0FFekQsSUFBSUEsa0RBQWtEO29DQUM5Q0Msd0JBQXdCNUUsUUFBUThFLHdCQUF3QjtvQ0FFOUQsSUFBSUYsdUJBQXVCO3dDQUN6QkYsNkNBQTZDO29DQUMvQztnQ0FDRjs7O2dDQUlKOztvQ0FBT0E7Ozs7Z0JBQ1Q7Ozs7WUFFTUssS0FBQUE7bUJBQU4sU0FBTUEsOENBQThDTix5QkFBeUIsRUFBRS9DLFdBQVcsRUFBRTFCLE9BQU87OytCQUM3RmdGLGlEQUdJWCwwQkF3QkFZOzs7OztnQ0EzQkpELGtEQUFrRDtnQ0FFdEQsSUFBSSxDQUFDQSxpREFBaUQ7b0NBQzlDWCwyQkFBMkI1RSxRQUFRZ0YsMkJBQTJCLFNBQUNKO3dDQUNuRSxJQUFNYSxrQ0FBa0N4RCxZQUFZeUQsNkJBQTZCLENBQUNkLDBCQUEwQnJFO3dDQUU1RyxJQUFJa0YsaUNBQWlDOzRDQUNuQyxJQUFNRSxrQkFBa0JwRixTQUFVLEdBQUc7NENBRXJDQSxVQUFVLE1BQUsrQyxVQUFVOzRDQUV6QixJQUFNc0MsaUJBQWlCckYsU0FBUyxHQUFHOzRDQUVuQ0EsVUFBVW9GLGlCQUFrQixHQUFHOzRDQUUvQnBGLFFBQVFzRixvQkFBb0IsQ0FBQ0QsZ0JBQWdCRDs0Q0FFN0MsT0FBTzt3Q0FDVDtvQ0FDRixNQUFNO29DQUVOLElBQUlmLDZCQUE2QixNQUFNO3dDQUNyQ1csa0RBQWtEO29DQUNwRDtnQ0FDRjtxQ0FFSSxDQUFDQSxpREFBRDs7OztnQ0FDc0M7O29DQUFNdEQsWUFBWTZELGtCQUFrQixDQUFDdkY7OztnQ0FBdkVpRixrQ0FBa0M7Z0NBRXhDLElBQUlBLGlDQUFpQztvQ0FDbkNELGtEQUFrRDtnQ0FDcEQ7OztnQ0FHRjs7b0NBQU9BOzs7O2dCQUNUOzs7O1lBRU1ILEtBQUFBO21CQUFOLFNBQU1BLCtDQUErQ0oseUJBQXlCLEVBQUV6RSxPQUFPOzsrQkFDakYyRTs7O3dCQUVKRiw0QkFBNEI5RSxRQUFROEUsNEJBQTRCLEdBQUc7d0JBRW5FRSxtREFBbUQ1RSxvQkFBb0IsSUFBSSxDQUFDSyxZQUFZLEVBQUUsU0FBT3NCOztvQ0FDekY4RDs7Ozs0Q0FBNkI7O2dEQUFNLElBQUksQ0FBQ1QsNkNBQTZDLENBQUNOLDJCQUEyQi9DLGFBQWExQjs7OzRDQUE5SHdGLDZCQUE2Qjs0Q0FFbkMsSUFBSUEsNEJBQTRCO2dEQUM5Qjs7b0RBQU87OzRDQUNUOzs7Ozs7NEJBQ0Y7O3dCQUVBOzs0QkFBT2I7OztnQkFDVDs7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYUMsSUFBQUEsd0JBQWtCLEVBQUMsSUFBSSxDQUFDeEYsTUFBTSxHQUMzQ3lGLGdCQUFnQkMsSUFBQUEsOEJBQXdCLEVBQUMsSUFBSSxDQUFDeEYsU0FBUyxHQUN2RHlGLG1CQUFtQkMsSUFBQUEsb0NBQThCLEVBQUMsSUFBSSxDQUFDM0YsWUFBWSxHQUNuRTRGLGdCQUFnQkMsSUFBQUEsOEJBQXdCLEVBQUMsSUFBSSxDQUFDMUYsU0FBUyxHQUN2RDJGLGlCQUFpQkMsSUFBQUEsZ0NBQTBCLEVBQUMsSUFBSSxDQUFDM0YsVUFBVSxHQUMzREwsU0FBU3VGLFlBQ1RyRixZQUFZdUYsZUFDWnhGLGVBQWUwRixrQkFDZnZGLFlBQVl5RixlQUNaeEYsYUFBYTBGLGdCQUNiRSxPQUFPO29CQUNMakcsUUFBQUE7b0JBQ0FFLFdBQUFBO29CQUNBRCxjQUFBQTtvQkFDQUcsV0FBQUE7b0JBQ0FDLFlBQUFBO2dCQUNGO2dCQUVOLE9BQU80RjtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNDLEtBQUssRUFBRUYsSUFBSSxFQUFFcEcsT0FBTztnQkFDbEMsSUFBTUcsU0FBU29HLElBQUFBLG9CQUFjLEVBQUNILE1BQU1wRyxVQUM5QkssWUFBWW1HLElBQUFBLHVCQUFpQixFQUFDSixNQUFNcEcsVUFDcENJLGVBQWVxRyxJQUFBQSwwQkFBb0IsRUFBQ0wsTUFBTXBHLFVBQzFDTyxZQUFZbUcsSUFBQUEsdUJBQWlCLEVBQUNOLE1BQU1wRyxVQUNwQ1EsYUFBYW1HLElBQUFBLHdCQUFrQixFQUFDUCxNQUFNcEcsVUFDdENFLE9BQU8sTUFDUEksUUFBUSxNQUNSTCxTQUFTMkcseUNBQXlDekcsUUFBUUMsY0FBY0MsWUFDeEV3RyxvQkFBb0IsSUFBSVAsTUFBTXRHLFNBQVNDLFFBQVFDLE1BQU1DLFFBQVFDLGNBQWNDLFdBQVdDLE9BQU9DLFdBQVdDO2dCQUU5RyxPQUFPcUc7WUFDVDs7O1dBM1dtQnJIO3FCQUEwQnNILHVCQUFPIn0=