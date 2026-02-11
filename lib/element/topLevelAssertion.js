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
            key: "unifyStatementAndStepsOrSubproofs",
            value: function unifyStatementAndStepsOrSubproofs(statement, subproofOrProofAssertions, substitutions, context) {
                var statementAndStepsOrSubproofsUnifies = false;
                var correlatesToHypotheses = this.correlateHypotheses(context);
                if (correlatesToHypotheses) {
                    var statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);
                    if (statementUnifiesWithDeduction) {
                        var subproofOrProofAssertionsUnifyWithSuppositions = this.unifyStepsOrSubproofsWithSuppositions(subproofOrProofAssertions, substitutions, context);
                        if (subproofOrProofAssertionsUnifyWithSuppositions) {
                            var substitutionsResolved = substitutions.areResolved();
                            if (substitutionsResolved) {
                                statementAndStepsOrSubproofsUnifies = true;
                            }
                        }
                    }
                }
                return statementAndStepsOrSubproofsUnifies;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithSupposition",
            value: function unifyStepsOrSubproofsWithSupposition(subproofOrProofAssertions, supposition, substitutions, generalContext, specificContext) {
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
            key: "unifyStepsOrSubproofsWithSuppositions",
            value: function unifyStepsOrSubproofsWithSuppositions(subproofOrProofAssertions, substitutions, generalContext, specificContext) {
                var _this = this;
                subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///
                var subproofOrProofAssertionsUnifyWithSuppositions = backwardsEvery(this.suppositions, function(supposition) {
                    var subproofOrProofAssertionsUnifiesWithSupposition = _this.unifyStepsOrSubproofsWithSupposition(subproofOrProofAssertions, supposition, substitutions, generalContext, specificContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5pbXBvcnQgeyBhc3luY2hyb25vdXNVdGlsaXRpZXMgfSBmcm9tIFwib2NjYW0tbGFuZ3VhZ2VzXCI7XG5cbmltcG9ydCB7IGFzeW5jU2NvcGUsIGFzeW5jQXR0ZW1wdCB9IGZyb20gXCIuLi91dGlsaXRpZXMvY29udGV4dFwiO1xuaW1wb3J0IHsgbGFiZWxzRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Gcm9tSlNPTixcbiAgICAgICAgIHNpZ25hdHVyZUZyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc0Zyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04sXG4gICAgICAgICBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04sXG4gICAgICAgICBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGFzeW5jRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcyxcbiAgICAgIHsgZXh0cmFjdCwgcmV2ZXJzZSwgY29ycmVsYXRlLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmRlZHVjdGlvbiA9IGRlZHVjdGlvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZHVjdGlvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgfVxuXG4gIGdldEh5cG90aGVzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHlwb3RoZXNlcztcbiAgfVxuXG4gIHNldEh5cG90aGVzZXMoaHlwb3RoZXNlcykge1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIGlzSHlwb3RoZXRpY2FsKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNMZW5ndGggPSB0aGlzLmh5cG90aGVzZXMubGVuZ3RoLFxuICAgICAgICAgIGh5cG90aGV0aWNhbCA9IChoeXBvdGhlc2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXRpY2FsO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uKGluZGV4KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLnN1cHBvc2l0aW9uc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbGFiZWwuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgY29ycmVsYXRlSHlwb3RoZXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IGNvcnJlbGF0ZXNUb0h5cG90aGVzZXM7XG5cbiAgICBjb25zdCBoeXBvdGhldGljYWwgPSB0aGlzLmlzSHlwb3RoZXRpY2FsKCk7XG5cbiAgICBpZiAoaHlwb3RoZXRpY2FsKSB7XG4gICAgICBjb25zdCBwcm9vZkFzc2VydGlvbnMgPSBjb250ZXh0LmdldFByb29mQXNzZXJ0aW9ucygpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYENvcnJlbGF0aW5nIHRoZSBoeXBvdGhlc2VzIG9mIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uLi5gKTtcblxuICAgICAgY29ycmVsYXRlc1RvSHlwb3RoZXNlcyA9IGNvcnJlbGF0ZSh0aGlzLmh5cG90aGVzZXMsIHByb29mQXNzZXJ0aW9ucywgKGh5cG90aGVzaXMsIHByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCA9IGh5cG90aGVzaXMuY29tcGFyZVByb29mQXNzZXJ0aW9uKHByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoaHlwb3RoZXNlc0NvbXBhcmVzVG9TdGVwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29ycmVsYXRlc1RvSHlwb3RoZXNlcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb3JyZWxhdGVkIHRoZSBoeXBvdGhlc2VzIG9mIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIHRvcCBsZXZlbCBhc3NlcnRpb24uYCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IHRydWUsXG4gICAgICAgICAgICBsYWJlbFZlcmlmaWVzID0gbGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgYXN5bmNTY29wZShhc3luYyAoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSBhd2FpdCB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeURlZHVjdGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gYXdhaXQgYXN5bmNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgYXN5bmMgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IGF3YWl0IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMuZGVkdWN0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcyA9IHRydWU7IC8vL1xuXG4gICAgaWYgKHRoaXMucHJvb2YgIT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSBhd2FpdCBhc3luY0F0dGVtcHQoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IGF3YWl0IHRoaXMucHJvb2YudmVyaWZ5KHRoaXMuZGVkdWN0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgICAgIH0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuZGVkdWN0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7ICAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29ycmVsYXRlc1RvSHlwb3RoZXNlcyA9IHRoaXMuY29ycmVsYXRlSHlwb3RoZXNlcyhjb250ZXh0KTtcblxuICAgIGlmIChjb3JyZWxhdGVzVG9IeXBvdGhlc2VzKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnlXaXRoU3VwcG9zaXRpb25zID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnlXaXRoU3VwcG9zaXRpb25zKSB7XG4gICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gc3Vic3RpdHV0aW9ucy5hcmVSZXNvbHZlZCgpO1xuXG4gICAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgICAgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gZXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBzdXBwb3NpdGlvbi51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBzdXBwb3NpdGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb247XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gcmV2ZXJzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTsgLy8vXG5cbiAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnlXaXRoU3VwcG9zaXRpb25zID0gYmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSB0aGlzLnVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnlXaXRoU3VwcG9zaXRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04odGhpcy5zaWduYXR1cmUpLFxuICAgICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04odGhpcy5oeXBvdGhlc2VzKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVKU09OLCAgLy8vXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHNpZ25hdHVyZSxcbiAgICAgICAgICAgIGh5cG90aGVzZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbEFzc2VydGlvbiIsImFzeW5jRXZlcnkiLCJhc3luY2hyb25vdXNVdGlsaXRpZXMiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwiYmFja3dhcmRzRXZlcnkiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0SHlwb3RoZXNlcyIsInNldEh5cG90aGVzZXMiLCJnZXRTdGF0ZW1lbnQiLCJpc0h5cG90aGV0aWNhbCIsImh5cG90aGVzZXNMZW5ndGgiLCJsZW5ndGgiLCJoeXBvdGhldGljYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJ1bmNvbmRpdGlvbmFsIiwiZ2V0U3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJzb21lIiwibGFiZWwiLCJsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsImNvcnJlbGF0ZXNUb0h5cG90aGVzZXMiLCJwcm9vZkFzc2VydGlvbnMiLCJnZXRQcm9vZkFzc2VydGlvbnMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiaHlwb3RoZXNpcyIsInByb29mQXNzZXJ0aW9uIiwiaHlwb3RoZXNlc0NvbXBhcmVzVG9TdGVwIiwiY29tcGFyZVByb29mQXNzZXJ0aW9uIiwiZGVidWciLCJ2ZXJpZnlMYWJlbHMiLCJsYWJlbHNWZXJpZnkiLCJldmVyeSIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllcyIsInZlcmlmeSIsInZlcmlmaWVzIiwiZ2V0Q29udGV4dCIsImFzeW5jU2NvcGUiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInByb29mVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbnMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJ2ZXJpZnlQcm9vZiIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsImFzeW5jQXR0ZW1wdCIsInVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbiIsInN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnMiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInNpZ25hdHVyZUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJoeXBvdGhlc2VzSlNPTiIsImh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsImh5cG90aGVzZXNGcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJ0b3BMZXZlbEFzc2VydGlvbiIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBcUJxQkE7Ozs4QkFuQkc7eUJBQ087dUJBR1U7b0JBVU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFNLEFBQUVDLGFBQWVDLHFDQUFxQixDQUFwQ0QsWUFDQUUsVUFBZ0RDLHlCQUFjLENBQTlERCxTQUFTRSxVQUF1Q0QseUJBQWMsQ0FBckRDLFNBQVNDLFlBQThCRix5QkFBYyxDQUE1Q0UsV0FBV0MsaUJBQW1CSCx5QkFBYyxDQUFqQ0c7QUFFdEIsSUFBQSxBQUFNUCxrQ0FBTjtjQUFNQTthQUFBQSxrQkFDUFEsT0FBTyxFQUFFQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVB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