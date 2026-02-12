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
var asyncEvery = _occamlanguages.asynchronousUtilities.asyncEvery, extract = _necessary.arrayUtilities.extract, reverse = _necessary.arrayUtilities.reverse, correlate = _necessary.arrayUtilities.correlate, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
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
            key: "verify",
            value: function verify() {
                return _async_to_generator(function() {
                    var _this, verifies, context;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                verifies = false;
                                context = this.getContext();
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
            key: "verifySuppositions",
            value: function verifySuppositions(context) {
                return _async_to_generator(function() {
                    var _this, suppositionsVerify;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                return [
                                    4,
                                    asyncEvery(this.suppositions, function(supposition) {
                                        return _async_to_generator(function() {
                                            var suppositionVerifies;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            this.verifySupposition(supposition, context)
                                                        ];
                                                    case 1:
                                                        suppositionVerifies = _state.sent();
                                                        if (suppositionVerifies) {
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
                                    })
                                ];
                            case 1:
                                suppositionsVerify = _state.sent();
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
            key: "verifySupposition",
            value: function verifySupposition(supposition, context) {
                return _async_to_generator(function() {
                    var suppositionVerifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    supposition.verify(context)
                                ];
                            case 1:
                                suppositionVerifies = _state.sent();
                                return [
                                    2,
                                    suppositionVerifies
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "verifyDeduction",
            value: function verifyDeduction(context) {
                return _async_to_generator(function() {
                    var deductionVerifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                return [
                                    4,
                                    this.deduction.verify(context)
                                ];
                            case 1:
                                deductionVerifies = _state.sent();
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
            key: "verifyProof",
            value: function verifyProof(context) {
                return _async_to_generator(function() {
                    var _this, proofVerifies;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                _this = this;
                                proofVerifies = true; ///
                                if (!(this.proof !== null)) return [
                                    3,
                                    2
                                ];
                                return [
                                    4,
                                    (0, _context.asyncAttempt)(function(context) {
                                        return _async_to_generator(function() {
                                            var proofVerifies;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            this.proof.verify(this.deduction, context)
                                                        ];
                                                    case 1:
                                                        proofVerifies = _state.sent();
                                                        return [
                                                            2,
                                                            proofVerifies
                                                        ];
                                                }
                                            });
                                        }).call(_this);
                                    }, context)
                                ];
                            case 1:
                                proofVerifies = _state.sent();
                                _state.label = 2;
                            case 2:
                                return [
                                    2,
                                    proofVerifies
                                ];
                        }
                    });
                }).call(this);
            }
        },
        {
            key: "unifyStatementWithDeduction",
            value: function unifyStatementWithDeduction(statement, substitutions, context) {
                var statementUnifiesWithDeduction = false;
                var statementUnifies = this.deduction.unifyStatement(statement, substitutions, context); ///
                if (statementUnifies) {
                    statementUnifiesWithDeduction = true;
                }
                return statementUnifiesWithDeduction;
            }
        },
        {
            key: "unifyStatementAndSubproofOrProofAssertions",
            value: function unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, substitutions, context) {
                var statementAndSubproofOrProofAssertionsUnify = false;
                var correlatesToHypotheses = this.correlateHypotheses(context);
                if (correlatesToHypotheses) {
                    var statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);
                    if (statementUnifiesWithDeduction) {
                        var subproofOrProofAssertionsUnifyWithSuppositions = this.unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, substitutions, context);
                        if (subproofOrProofAssertionsUnifyWithSuppositions) {
                            var substitutionsResolved = substitutions.areResolved();
                            if (substitutionsResolved) {
                                statementAndSubproofOrProofAssertionsUnify = true;
                            }
                        }
                    }
                }
                return statementAndSubproofOrProofAssertionsUnify;
            }
        },
        {
            key: "unifySubproofOrProofAssertionsWithSupposition",
            value: function unifySubproofOrProofAssertionsWithSupposition(subproofOrProofAssertions, supposition, substitutions, generalContext, specificContext) {
                var subproofOrProofAssertionsUnifiesWithSupposition = false;
                if (!subproofOrProofAssertionsUnifiesWithSupposition) {
                    var subproofOrProofAssertion = extract(subproofOrProofAssertions, function(subproofOrProofAssertion) {
                        var subproofOrProofAssertionUnifies = supposition.unifySubproofOrProofAssertion(subproofOrProofAssertion, substitutions, generalContext, specificContext);
                        if (subproofOrProofAssertionUnifies) {
                            return true;
                        }
                    }) || null;
                    if (subproofOrProofAssertion !== null) {
                        subproofOrProofAssertionsUnifiesWithSupposition = true;
                    }
                }
                if (!subproofOrProofAssertionsUnifiesWithSupposition) {
                    var context = specificContext, suppositionUnifiesIndependently = supposition.unifyIndependently(substitutions, context);
                    if (suppositionUnifiesIndependently) {
                        subproofOrProofAssertionsUnifiesWithSupposition = true;
                    }
                }
                return subproofOrProofAssertionsUnifiesWithSupposition;
            }
        },
        {
            key: "unifySubproofOrProofAssertionsWithSuppositions",
            value: function unifySubproofOrProofAssertionsWithSuppositions(subproofOrProofAssertions, substitutions, generalContext, specificContext) {
                var _this = this;
                subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///
                var subproofOrProofAssertionsUnifyWithSuppositions = backwardsEvery(this.suppositions, function(supposition) {
                    var subproofOrProofAssertionsUnifiesWithSupposition = _this.unifySubproofOrProofAssertionsWithSupposition(subproofOrProofAssertions, supposition, substitutions, generalContext, specificContext);
                    if (subproofOrProofAssertionsUnifiesWithSupposition) {
                        return true;
                    }
                });
                return subproofOrProofAssertionsUnifyWithSuppositions;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGFzeW5jU2NvcGUsIGFzeW5jQXR0ZW1wdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgbGFiZWxzRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Gcm9tSlNPTixcbiAgICAgICAgIHNpZ25hdHVyZUZyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc0Zyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04sXG4gICAgICAgICBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04sXG4gICAgICAgICBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgZXh0cmFjdCwgcmV2ZXJzZSwgY29ycmVsYXRlLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmRlZHVjdGlvbiA9IGRlZHVjdGlvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZHVjdGlvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgfVxuXG4gIGdldEh5cG90aGVzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHlwb3RoZXNlcztcbiAgfVxuXG4gIHNldEh5cG90aGVzZXMoaHlwb3RoZXNlcykge1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIGlzSHlwb3RoZXRpY2FsKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNMZW5ndGggPSB0aGlzLmh5cG90aGVzZXMubGVuZ3RoLFxuICAgICAgICAgIGh5cG90aGV0aWNhbCA9IChoeXBvdGhlc2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXRpY2FsO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uKGluZGV4KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLnN1cHBvc2l0aW9uc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbGFiZWwuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29ycmVsYXRlSHlwb3RoZXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IGNvcnJlbGF0ZXNUb0h5cG90aGVzZXM7XG5cbiAgICBjb25zdCBoeXBvdGhldGljYWwgPSB0aGlzLmlzSHlwb3RoZXRpY2FsKCk7XG5cbiAgICBpZiAoaHlwb3RoZXRpY2FsKSB7XG4gICAgICBjb25zdCBwcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYENvcnJlbGF0aW5nIHRoZSBoeXBvdGhlc2VzIG9mIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29ycmVsYXRlc1RvSHlwb3RoZXNlcyA9IGNvcnJlbGF0ZSh0aGlzLmh5cG90aGVzZXMsIHByb29mQXNzZXJ0aW9ucywgKGh5cG90aGVzaXMsIHByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCA9IGh5cG90aGVzaXMuY29tcGFyZVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoaHlwb3RoZXNlc0NvbXBhcmVzVG9TdGVwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29ycmVsYXRlc1RvSHlwb3RoZXNlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb3JyZWxhdGVkIHRoZSBoeXBvdGhlc2VzIG9mIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IHRydWUsXG4gICAgICAgICAgICBsYWJlbFZlcmlmaWVzID0gbGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgYXN5bmNTY29wZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeURlZHVjdGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgYXN5bmNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuZGVkdWN0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcyA9IHRydWU7IC8vL1xuXG4gICAgaWYgKHRoaXMucHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSBhd2FpdCBhc3luY0F0dGVtcHQoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMucHJvb2YudmVyaWZ5KHRoaXMuZGVkdWN0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuZGVkdWN0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSB0aGlzLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoY29ycmVsYXRlc1RvSHlwb3RoZXNlcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyA9IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gZXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBzdXBwb3NpdGlvbi51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBzdXBwb3NpdGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb247XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoU3VwcG9zaXRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gcmV2ZXJzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTsgLy8vXG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnlXaXRoU3VwcG9zaXRpb25zID0gYmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnlXaXRoU3VwcG9zaXRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04odGhpcy5zaWduYXR1cmUpLFxuICAgICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04odGhpcy5oeXBvdGhlc2VzKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVKU09OLCAgLy8vXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHNpZ25hdHVyZSxcbiAgICAgICAgICAgIGh5cG90aGVzZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbEFzc2VydGlvbiIsImFzeW5jRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwiYmFja3dhcmRzRXZlcnkiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0SHlwb3RoZXNlcyIsInNldEh5cG90aGVzZXMiLCJnZXRTdGF0ZW1lbnQiLCJpc0h5cG90aGV0aWNhbCIsImh5cG90aGVzZXNMZW5ndGgiLCJsZW5ndGgiLCJoeXBvdGhldGljYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJ1bmNvbmRpdGlvbmFsIiwiZ2V0U3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJzb21lIiwibGFiZWwiLCJsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsImNvcnJlbGF0ZXNUb0h5cG90aGVzZXMiLCJwcm9vZkFzc2VydGlvbnMiLCJnZXRQcm9vZkFzc2VydGlvbnMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiaHlwb3RoZXNpcyIsInByb29mQXNzZXJ0aW9uIiwiaHlwb3RoZXNlc0NvbXBhcmVzVG9TdGVwIiwiY29tcGFyZVByb29mQXNzZXJ0aW9uIiwiZGVidWciLCJ2ZXJpZnlMYWJlbHMiLCJsYWJlbHNWZXJpZnkiLCJldmVyeSIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllcyIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImFzeW5jU2NvcGUiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJ2ZXJpZnlQcm9vZiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsImFzeW5jQXR0ZW1wdCIsInVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbiIsInN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnlXaXRoU3VwcG9zaXRpb25zIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9ucyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVJlc29sdmVkIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFN1cHBvc2l0aW9uIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzaWduYXR1cmVKU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwibGFiZWxzRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJFbGVtZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQXFCcUJBOzs7OEJBbkJHO3lCQUNPO3VCQUdVO29CQVVNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBTSxBQUFFQyxhQUFlQyxxQ0FBcUIsQ0FBcENELFlBQ0FFLFVBQWdEQyx5QkFBYyxDQUE5REQsU0FBU0UsVUFBdUNELHlCQUFjLENBQXJEQyxTQUFTQyxZQUE4QkYseUJBQWMsQ0FBNUNFLFdBQVdDLGlCQUFtQkgseUJBQWMsQ0FBakNHO0FBRXRCLElBQUEsQUFBTVAsa0NBQU47Y0FB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