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
var reverse = _necessary.arrayUtilities.reverse, extract = _necessary.arrayUtilities.extract, asyncBackwardsEvery = _occamlanguages.asynchronousUtilities.asyncBackwardsEvery;
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
            key: "verifyPremises",
            value: function verifyPremises(context) {
                var _this = this;
                var premisesVerify = this.premises.every(function(premise) {
                    var premiseVerifies = _this.verifyPremise(premise, context);
                    if (premiseVerifies) {
                        return true;
                    }
                });
                return premisesVerify;
            }
        },
        {
            key: "verifyPremise",
            value: function verifyPremise(premise, context) {
                var premiseVerifies = premise.verify(context);
                return premiseVerifies;
            }
        },
        {
            key: "verifyConclusion",
            value: function verifyConclusion(context) {
                var conclusionVerifies = this.conclusion.verify(context);
                return conclusionVerifies;
            }
        },
        {
            key: "verifyProof",
            value: function verifyProof(context) {
                var proofVerifies;
                if (this.proof === null) {
                    proofVerifies = true;
                } else {
                    var substitutions = [];
                    proofVerifies = this.proof.verify(substitutions, this.conclusion, context);
                }
                return proofVerifies;
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
                                scope(function(context) {
                                    var labelsVerify = _this.verifyLabels();
                                    if (labelsVerify) {
                                        var premisesVerify = _this.verifyPremises(context);
                                        if (premisesVerify) {
                                            var conclusionVerifies = _this.verifyConclusion(context);
                                            if (conclusionVerifies) {
                                                var proofVerifies = _this.verifyProof(context);
                                                if (proofVerifies) {
                                                    verifies = true;
                                                }
                                            }
                                        }
                                    }
                                }, context);
                                if (verifies) {
                                    rule = this; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgYXN5bmNocm9ub3VzVXRpbGl0aWVzIH0gZnJvbSBcIm9jY2FtLWxhbmd1YWdlc1wiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgcHJlbWlzZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Gcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHByZW1pc2VzVG9QcmVtaXNlc0pTT04sXG4gICAgICAgICBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QgfSA9IGFycmF5VXRpbGl0aWVzLFxuICAgICAgeyBhc3luY0JhY2t3YXJkc0V2ZXJ5IH0gPSBhc3luY2hyb25vdXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSdWxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFByZW1pc2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZW1pc2VzO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxhYmVsLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcmVtaXNlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlbWlzZXNWZXJpZnkgPSB0aGlzLnByZW1pc2VzLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBwcmVtaXNlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcmVtaXNlKHByZW1pc2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVtaXNlVmVyaWZpZXMgPSBwcmVtaXNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5jb25jbHVzaW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGNvbmNsdXNpb25TdHJpbmcgPSB0aGlzLmNvbmNsdXNpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke3J1bGVTdHJpbmd9JyBydWxlJ3MgJyR7Y29uY2x1c2lvblN0cmluZ30nIGNvbmNsdXNpb24uLi5gKTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZSdzICcke2NvbmNsdXNpb25TdHJpbmd9JyBjb25jbHVzaW9uLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb247XG4gIH1cblxuICBhc3luYyB1bmlmeVN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMoc3RhdGVtZW50LCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uKHN0YXRlbWVudCwgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gY29udGV4dC5hcmVTdWJzdGl0dXRpb25zUmVzb2x2ZWQoKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgc3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnk7XG4gIH1cblxuICBhc3luYyB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcztcblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSByZXZlcnNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpOyAvLy9cblxuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYXN5bmNCYWNrd2FyZHNFdmVyeSh0aGlzLnByZW1pc2VzLCBhc3luYyAocHJlbWlzZSkgPT4ge1xuICAgICAgY29uc3Qgc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSA9IGF3YWl0IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgcHJlbWlzZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwVW5pZmllc1dpdGhQcmVtaXNlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzO1xuICB9XG5cbiAgYXN5bmMgdW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgcHJlbWlzZSwgY29udGV4dCkge1xuICAgIGxldCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlID0gZmFsc2U7XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGV4dHJhY3Qoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gcHJlbWlzZS51bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbihzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24sIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gIT09IG51bGwpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlKSB7XG4gICAgICBjb25zdCBwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkgPSBhd2FpdCBwcmVtaXNlLnVuaWZ5SW5kZXBlbmRlbnRseShjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZTtcbiAgfVxuXG4gIGFzeW5jIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmdldENvbnRleHQoKTtcblxuICAgIGF3YWl0IHRoaXMuYnJlYWsoY29udGV4dCk7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5nZXRTdHJpbmcoKTsgLy8vXG5cbiAgICBjb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBzY29wZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBwcmVtaXNlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJlbWlzZXMoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgY29uY2x1c2lvblZlcmlmaWVzID0gdGhpcy52ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzVG9QcmVtaXNlc0pTT04odGhpcy5wcmVtaXNlcyksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTih0aGlzLmNvbmNsdXNpb24pLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgbmFtZSA9IFwiUnVsZVwiO1xuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHJ1bGU7XG5cbiAgICBjb25zdCBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiYXN5bmNCYWNrd2FyZHNFdmVyeSIsImFzeW5jaHJvbm91c1V0aWxpdGllcyIsImRlZmluZSIsIlJ1bGUiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsInByb29mIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRQcm9vZiIsImdldENvbmNsdXNpb24iLCJjb21wYXJlTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSIsInNvbWUiLCJsYWJlbCIsImxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJ2ZXJpZnlMYWJlbHMiLCJsYWJlbHNWZXJpZnkiLCJldmVyeSIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllcyIsInZlcmlmeSIsInZlcmlmeVByZW1pc2VzIiwicHJlbWlzZXNWZXJpZnkiLCJwcmVtaXNlIiwicHJlbWlzZVZlcmlmaWVzIiwidmVyaWZ5UHJlbWlzZSIsInZlcmlmeUNvbmNsdXNpb24iLCJjb25jbHVzaW9uVmVyaWZpZXMiLCJ2ZXJpZnlQcm9vZiIsInByb29mVmVyaWZpZXMiLCJzdWJzdGl0dXRpb25zIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbiIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiIsInJ1bGVTdHJpbmciLCJnZXRTdHJpbmciLCJzdGF0ZW1lbnRTdHJpbmciLCJjb25jbHVzaW9uU3RyaW5nIiwidHJhY2UiLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50QW5kU3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlcyIsImFyZVN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInN0ZXBVbmlmaWVzV2l0aFByZW1pc2UiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJ2ZXJpZmllcyIsInJ1bGUiLCJnZXRDb250ZXh0IiwiYnJlYWsiLCJzY29wZSIsImFkZFJ1bGUiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsImNvbmNsdXNpb25KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwiRWxlbWVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQWdCQTs7O2VBQUE7Ozt5QkFkK0I7OEJBQ2dCO3dCQUV4QjtvQkFNb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTNDLElBQVFBLFVBQXFCQyx5QkFBYyxDQUFuQ0QsU0FBU0UsVUFBWUQseUJBQWMsQ0FBMUJDLFNBQ1gsQUFBRUMsc0JBQXdCQyxxQ0FBcUIsQ0FBN0NEO0lBRVIsV0FBZUUsSUFBQUEsZ0JBQU0seUJBQUM7O2FBQU1DLEtBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVU7Z0NBRDVDUDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxLQUFLLEdBQUdBO1FBQ2IsTUFBS0MsTUFBTSxHQUFHQTtRQUNkLE1BQUtDLFFBQVEsR0FBR0E7UUFDaEIsTUFBS0MsVUFBVSxHQUFHQTs7Ozs7WUFHcEJD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