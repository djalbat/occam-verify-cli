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
                    context.debug("...verified the '".concat(ruleString, "' rule's labels."));
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
                    var _this, verifies, context, ruleString, rule;
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
                                            var labelsVerify, premisesVerify, conclusionVerifies, proofVerifies;
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
                                    rule = this;
                                    context.addRule(rule);
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
                                            var premiseVerifies, subproofOrProofAssertion;
                                            return _ts_generator(this, function(_state) {
                                                switch(_state.label){
                                                    case 0:
                                                        return [
                                                            4,
                                                            premise.verify(context)
                                                        ];
                                                    case 1:
                                                        premiseVerifies = _state.sent();
                                                        if (premiseVerifies) {
                                                            subproofOrProofAssertion = premise; ////
                                                            context.assignAssignments();
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
                var node = null, proof = null, string = null, labels = (0, _json.labelsFromJSON)(json, context), premises = (0, _json.premisesFromJSON)(json, context), conclusion = (0, _json.conclusionFromJSON)(json, context), rule = new Rule(context, string, node, proof, labels, premises, conclusion);
                return rule;
            }
        }
    ]);
    return Rule;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Rule, "name", "Rule"), _Rule));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGFzeW5jU2NvcGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLCBwcmVtaXNlc0Zyb21KU09OLCBjb25jbHVzaW9uRnJvbUpTT04sIGxhYmVsc1RvTGFiZWxzSlNPTiwgcHJlbWlzZXNUb1ByZW1pc2VzSlNPTiwgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyByZXZlcnNlLCBleHRyYWN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgYXN5bmNGb3J3YXJkc0V2ZXJ5LCBhc3luY0JhY2t3YXJkc0V2ZXJ5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSdWxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFByZW1pc2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZW1pc2VzO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRSdWxlTm9kZSgpIHtcbiAgICBjb25zdCBub2RlID0gdGhpcy5nZXROb2RlKCksXG4gICAgICAgICAgcnVsZU5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICByZXR1cm4gcnVsZU5vZGU7XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxhYmVsLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBsZXQgbGFiZWxzVmVyaWZ5O1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpLFxuICAgICAgICAgIHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgbGFiZWxzLi4uYCk7XG5cbiAgICBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGxhYmVscy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuY29uY2x1c2lvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllcyA9IHRoaXMuY29uY2x1c2lvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbjtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBhd2FpdCBhc3luY1Njb3BlKGFzeW5jIChjb250ZXh0KSA9PiB7XG4gICAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IHByZW1pc2VzVmVyaWZ5ID0gYXdhaXQgdGhpcy52ZXJpZnlQcmVtaXNlcyhjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJlbWlzZXNWZXJpZnkpIHtcbiAgICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeUNvbmNsdXNpb24oY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gYXdhaXQgdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIGNvbnRleHQpO1xuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICBjb25zdCBydWxlID0gdGhpcztcblxuICAgICAgY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJvb2YuLi5gKTtcblxuICAgICAgY29uc3Qgc3RhdGVtZW50ID0gdGhpcy5jb25jbHVzaW9uLmdldFN0YXRlbWVudCgpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJvb2YuYCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcmVtaXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IHByZW1pc2VzVmVyaWZ5O1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcmVtaXNlcy4uLmApO1xuXG4gICAgcHJlbWlzZXNWZXJpZnkgPSBhd2FpdCBhc3luY0ZvcndhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgYXN5bmMgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IGF3YWl0IHByZW1pc2UudmVyaWZ5KGNvbnRleHQpXG5cbiAgICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gcHJlbWlzZTsgIC8vLy9cblxuICAgICAgICBjb250ZXh0LmFzc2lnbkFzc2lnbm1lbnRzKCk7XG5cbiAgICAgICAgY29udGV4dC5hZGRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgcHJlbWlzZXMuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZW1pc2VzVmVyaWZ5O1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KSB7XG4gICAgbGV0IGNvbmNsdXNpb25WZXJpZmllcztcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uY2x1c2lvblZlcmlmaWVzID0gYXdhaXQgdGhpcy5jb25jbHVzaW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIGNvbmNsdXNpb24uYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25WZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBjb250ZXh0LmFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzO1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHJldmVyc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyk7IC8vL1xuXG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMgPSBhc3luY0JhY2t3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIGFzeW5jIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBzdGVwVW5pZmllc1dpdGhQcmVtaXNlID0gYXdhaXQgdGhpcy51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXM7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBwcmVtaXNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSBmYWxzZTtcblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uID0gZXh0cmFjdChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMgPSBwcmVtaXNlLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgICAgICAgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dDsgIC8vL1xuXG4gICAgICAgICAgY29udGV4dC5yZXNvbHZlU3Vic3RpdHV0aW9ucyhnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3QgcHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5ID0gYXdhaXQgcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2U7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTih0aGlzLnByZW1pc2VzKSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKHRoaXMuY29uY2x1c2lvbiksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSdWxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9vZiwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImFzeW5jRm9yd2FyZHNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImFzeW5jQmFja3dhcmRzRXZlcnkiLCJkZWZpbmUiLCJSdWxlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0UHJvb2YiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UnVsZU5vZGUiLCJnZXROb2RlIiwicnVsZU5vZGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsInNvbWUiLCJsYWJlbCIsImxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJ2ZXJpZnlMYWJlbHMiLCJsYWJlbHNWZXJpZnkiLCJnZXRDb250ZXh0IiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZXZlcnkiLCJuYW1lT25seSIsImxhYmVsVmVyaWZpZXMiLCJ2ZXJpZnkiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJjb25jbHVzaW9uU3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidmVyaWZpZXMiLCJydWxlIiwiYnJlYWsiLCJhc3luY1Njb3BlIiwicHJlbWlzZXNWZXJpZnkiLCJjb25jbHVzaW9uVmVyaWZpZXMiLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJlbWlzZXMiLCJ2ZXJpZnlDb25jbHVzaW9uIiwidmVyaWZ5UHJvb2YiLCJhZGRSdWxlIiwiZ2V0U3RhdGVtZW50IiwicHJlbWlzZSIsInByZW1pc2VWZXJpZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzIiwiYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwic3RlcFVuaWZpZXNXaXRoUHJlbWlzZSIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSIsInByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwicmVzb2x2ZVN1YnN0aXR1dGlvbnMiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsImNvbmNsdXNpb25KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJj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