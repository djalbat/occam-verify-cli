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
                var node = null, proof = null, string = null, labels = (0, _json.labelsFromJSON)(json, context), premises = (0, _json.premisesFromJSON)(json, context), conclusion = (0, _json.conclusionFromJSON)(json, context), ephemeralContext = (0, _json.ephemeralContextFromJSON)(json, context);
                context = ephemeralContext; ///
                var rule = new Rule(context, string, node, proof, labels, premises, conclusion);
                return rule;
            }
        }
    ]);
    return Rule;
}(_wrap_native_super(_occamlanguages.Element)), _define_property(_Rule, "name", "Rule"), _Rule));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGFzeW5jU2NvcGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgcHJlbWlzZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Gcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHByZW1pc2VzVG9QcmVtaXNlc0pTT04sXG4gICAgICAgICBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04sXG4gICAgICAgICBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc3luY0ZvcndhcmRzRXZlcnksIGFzeW5jQmFja3dhcmRzRXZlcnkgfSA9IGFzeW5jaHJvbm91c1V0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJ1bGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9vZiwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5wcmVtaXNlcyA9IHByZW1pc2VzO1xuICAgIHRoaXMuY29uY2x1c2lvbiA9IGNvbmNsdXNpb247XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldFJ1bGVOb2RlKCkge1xuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBydWxlTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHJldHVybiBydWxlTm9kZTtcbiAgfVxuXG4gIGNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gbGFiZWwuY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGxldCBsYWJlbHNWZXJpZnk7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBsYWJlbHMuLi5gKTtcblxuICAgIGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeShuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgbGFiZWxzLmApO1xuICAgIH1cblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uKHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBjb25jbHVzaW9uU3RyaW5nID0gdGhpcy5jb25jbHVzaW9uLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5jb25jbHVzaW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uO1xuICB9XG5cbiAgYXN5bmMgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xuXG4gICAgYXdhaXQgdGhpcy5icmVhayhjb250ZXh0KTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgIGF3YWl0IGFzeW5jU2NvcGUoYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgcHJlbWlzZXNWZXJpZnkgPSBhd2FpdCB0aGlzLnZlcmlmeVByZW1pc2VzKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGNvbmNsdXNpb25WZXJpZmllcyA9IGF3YWl0IHRoaXMudmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSBhd2FpdCB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgY29udGV4dCk7XG5cbiAgICBpZiAodmVyaWZpZXMpIHtcbiAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzO1xuXG4gICAgICBjb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLmdldFN0cmluZygpOyAgLy8vXG5cbiAgICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcm9vZi4uLmApO1xuXG4gICAgICBjb25zdCBzdGF0ZW1lbnQgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RhdGVtZW50KCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeShzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcm9vZi5gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeVByZW1pc2VzKGNvbnRleHQpIHtcbiAgICBsZXQgcHJlbWlzZXNWZXJpZnk7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgIC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzIHByZW1pc2VzLi4uYCk7XG5cbiAgICBwcmVtaXNlc1ZlcmlmeSA9IGF3YWl0IGFzeW5jRm9yd2FyZHNFdmVyeSh0aGlzLnByZW1pc2VzLCBhc3luYyAocHJlbWlzZSkgPT4ge1xuICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVzID0gYXdhaXQgcHJlbWlzZS52ZXJpZnkoY29udGV4dClcblxuICAgICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBwcmVtaXNlOyAgLy8vL1xuXG4gICAgICAgIGNvbnRleHQuYXNzaWduQXNzaWdubWVudHMoKTtcblxuICAgICAgICBjb250ZXh0LmFkZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHByZW1pc2VzVmVyaWZ5KSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBwcmVtaXNlcy5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJlbWlzZXNWZXJpZnk7XG4gIH1cblxuICBhc3luYyB2ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpIHtcbiAgICBsZXQgY29uY2x1c2lvblZlcmlmaWVzO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgIGNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUncyBjb25jbHVzaW9uLi4uYCk7XG5cbiAgICBjb25jbHVzaW9uVmVyaWZpZXMgPSBhd2FpdCB0aGlzLmNvbmNsdXNpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgaWYgKGNvbmNsdXNpb25WZXJpZmllcykge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgY29uY2x1c2lvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29uY2x1c2lvblZlcmlmaWVzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbikge1xuICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMgPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IGNvbnRleHQuYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkKCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5O1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXM7XG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zID0gcmV2ZXJzZShzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKTsgLy8vXG5cbiAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyA9IGFzeW5jQmFja3dhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgYXN5bmMgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UgPSBhd2FpdCB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHByZW1pc2UsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcztcbiAgfVxuXG4gIGFzeW5jIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHByZW1pc2UsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBleHRyYWN0KHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHByZW1pc2UudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgIGNvbnN0IHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7ICAvLy9cblxuICAgICAgICAgIGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgICAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICAgICAgICBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0OyAgLy8vXG5cbiAgICAgICAgICBjb250ZXh0LnJlc29sdmVTdWJzdGl0dXRpb25zKGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlKSB7XG4gICAgICBjb25zdCBwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkgPSBhd2FpdCBwcmVtaXNlLnVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHRoaXMucHJlbWlzZXMpLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04odGhpcy5jb25jbHVzaW9uKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJ1bGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBudWxsLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGVwaGVtZXJhbENvbnRleHQgPSBlcGhlbWVyYWxDb250ZXh0RnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICBjb250ZXh0ID0gZXBoZW1lcmFsQ29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBwcm9vZiwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImFzeW5jRm9yd2FyZHNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImFzeW5jQmFja3dhcmRzRXZlcnkiLCJkZWZpbmUiLCJSdWxlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0UHJvb2YiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UnVsZU5vZGUiLCJnZXROb2RlIiwicnVsZU5vZGUiLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsInNvbWUiLCJsYWJlbCIsImxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJ2ZXJpZnlMYWJlbHMiLCJsYWJlbHNWZXJpZnkiLCJnZXRDb250ZXh0IiwicnVsZVN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiZXZlcnkiLCJuYW1lT25seSIsImxhYmVsVmVyaWZpZXMiLCJ2ZXJpZnkiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24iLCJzdGF0ZW1lbnRTdHJpbmciLCJjb25jbHVzaW9uU3RyaW5nIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidmVyaWZpZXMiLCJydWxlIiwiYnJlYWsiLCJhc3luY1Njb3BlIiwicHJlbWlzZXNWZXJpZnkiLCJjb25jbHVzaW9uVmVyaWZpZXMiLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJlbWlzZXMiLCJ2ZXJpZnlDb25jbHVzaW9uIiwidmVyaWZ5UHJvb2YiLCJhZGRSdWxlIiwiZ2V0U3RhdGVtZW50IiwicHJlbWlzZSIsInByZW1pc2VWZXJpZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsImFzc2lnbkFzc2lnbm1lbnRzIiwiYWRkU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwidW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzIiwiYXJlU3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwic3RlcFVuaWZpZXNXaXRoUHJlbWlzZSIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSIsInByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvblVuaWZpZXMiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbiIsInNwZWNpZmljQ29udGV4dCIsImdlbmVyYWxDb250ZXh0IiwicmVzb2x2ZVN1YnN0aXR1dGlvbnMiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsImNvbmNsdXNpb25KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJlcGhlbWVyYWxDb250ZXh0IiwiZXBoZW1lcmFsQ29udGV4dEZyb21KU09OIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWtCQTs7O2VBQUE7Ozt5QkFoQitCOzhCQUNnQjt3QkFFeEI7dUJBQ0k7b0JBT2dCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFRQSxVQUFxQkMseUJBQWMsQ0FBbkNELFNBQVNFLFVBQVlELHlCQUFjLENBQTFCQyxTQUNUQyxxQkFBNENDLHFDQUFxQixDQUFqRUQsb0JBQW9CRSxzQkFBd0JELHFDQUFxQixDQUE3Q0M7SUFFNUIsV0FBZUMsSUFBQUEsZ0JBQU0seUJBQUM7O2FBQU1DLEtBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7Z0NBRDVDUDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxLQUFLLEdBQUdB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