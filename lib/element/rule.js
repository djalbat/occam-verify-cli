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
var _occamfurtle = require("occam-furtle");
var _context = require("../utilities/context");
var _json = require("../utilities/json");
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
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
var _Rule;
var define = _occamfurtle.elements.define, reverse = _necessary.arrayUtilities.reverse, extract = _necessary.arrayUtilities.extract, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var _default = define((_Rule = /*#__PURE__*/ function(Element) {
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
            key: "verify",
            value: function verify() {
                var _this = this;
                var verifies = false;
                var node = this.getNode(), context = this.getContext(), ruleString = this.getString(); ///
                context.trace("Verifying the '".concat(ruleString, "' rule..."), node);
                (0, _context.scope)(function(context) {
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
                    var rule = this; ///
                    context.addRule(rule);
                    context.debug("...verified the '".concat(ruleString, "' rule."), node);
                }
                return verifies;
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
                    var Substitutions = _occamfurtle.elements.Substitutions, substitutions = Substitutions.fromNothing(context);
                    proofVerifies = this.proof.verify(substitutions, this.conclusion, context);
                }
                return proofVerifies;
            }
        },
        {
            key: "unifyStatementWithConclusion",
            value: function unifyStatementWithConclusion(statement, substitutions, context) {
                var statementUnifiesWithConclusion = false;
                var statementUnifies = this.conclusion.unifyStatement(statement, substitutions, context);
                if (statementUnifies) {
                    statementUnifiesWithConclusion = true;
                }
                return statementUnifiesWithConclusion;
            }
        },
        {
            key: "unifyStatementAndSubproofOrProofAssertions",
            value: function unifyStatementAndSubproofOrProofAssertions(statement, subproofOrProofAssertions, context) {
                var statementAndSubproofOrProofAssertionsUnify = false;
                var Substitutions = _occamfurtle.elements.Substitutions, substitutions = Substitutions.fromNothing(context), statementUnifiesWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, context);
                if (statementUnifiesWithConclusion) {
                    var subproofOrProofAssertionsUnifiesWithPremises = this.unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, substitutions, context);
                    if (subproofOrProofAssertionsUnifiesWithPremises) {
                        var substitutionsResolved = substitutions.areResolved();
                        if (substitutionsResolved) {
                            statementAndSubproofOrProofAssertionsUnify = true;
                        }
                    }
                }
                return statementAndSubproofOrProofAssertionsUnify;
            }
        },
        {
            key: "unifySubproofOrProofAssertionsWithPremise",
            value: function unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, substitutions, context) {
                var subproofOrProofAssertionsUnifiesWithPremise = false;
                if (!subproofOrProofAssertionsUnifiesWithPremise) {
                    var subproofOrProofAssertion = extract(subproofOrProofAssertions, function(subproofOrProofAssertion) {
                        var subproofOrProofAssertionUnifies = premise.unifySubproofOrProofAssertion(subproofOrProofAssertion, substitutions, context);
                        if (subproofOrProofAssertionUnifies) {
                            return true;
                        }
                    }) || null;
                    if (subproofOrProofAssertion !== null) {
                        subproofOrProofAssertionsUnifiesWithPremise = true;
                    }
                }
                if (!subproofOrProofAssertionsUnifiesWithPremise) {
                    var premiseUnifiesIndependently = premise.unifyIndependently(substitutions, context);
                    if (premiseUnifiesIndependently) {
                        subproofOrProofAssertionsUnifiesWithPremise = true;
                    }
                }
                return subproofOrProofAssertionsUnifiesWithPremise;
            }
        },
        {
            key: "unifySubproofOrProofAssertionsWithPremises",
            value: function unifySubproofOrProofAssertionsWithPremises(subproofOrProofAssertions, substitutions, context) {
                var _this = this;
                subproofOrProofAssertions = reverse(subproofOrProofAssertions); ///
                var subproofOrProofAssertionsUnifiesWithPremises = backwardsEvery(this.premises, function(premise) {
                    var stepUnifiesWithPremise = _this.unifySubproofOrProofAssertionsWithPremise(subproofOrProofAssertions, premise, substitutions, context);
                    if (stepUnifiesWithPremise) {
                        return true;
                    }
                });
                return subproofOrProofAssertionsUnifiesWithPremises;
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
}(_wrap_native_super(_occamfurtle.Element)), _define_property(_Rule, "name", "Rule"), _Rule));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRWxlbWVudCwgZWxlbWVudHMgfSBmcm9tIFwib2NjYW0tZnVydGxlXCI7XG5cbmltcG9ydCB7IHNjb3BlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9jb250ZXh0XCI7XG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTixcbiAgICAgICAgIHByZW1pc2VzRnJvbUpTT04sXG4gICAgICAgICBjb25jbHVzaW9uRnJvbUpTT04sXG4gICAgICAgICBsYWJlbHNUb0xhYmVsc0pTT04sXG4gICAgICAgICBwcmVtaXNlc1RvUHJlbWlzZXNKU09OLFxuICAgICAgICAgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBkZWZpbmUgfSA9IGVsZW1lbnRzLFxuICAgICAgeyByZXZlcnNlLCBleHRyYWN0LCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZShjbGFzcyBSdWxlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgcHJvb2YsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICBzdXBlcihjb250ZXh0LCBzdHJpbmcsIG5vZGUpO1xuXG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFByZW1pc2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZW1pc2VzO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBjb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSA9IGxhYmVsLmNvbXBhcmVNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxDb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBjb21wYXJlc1RvTWV0YXZhcmlhYmxlTmFtZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG5vZGUgPSB0aGlzLmdldE5vZGUoKSxcbiAgICAgICAgICBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCksXG4gICAgICAgICAgcnVsZVN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7IC8vL1xuXG4gICAgY29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmAsIG5vZGUpO1xuXG4gICAgc2NvcGUoKGNvbnRleHQpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgcHJlbWlzZXNWZXJpZnkgPSB0aGlzLnZlcmlmeVByZW1pc2VzKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgICAgIGNvbnN0IGNvbmNsdXNpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5Q29uY2x1c2lvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIGlmICh2ZXJpZmllcykge1xuICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCwgbm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeShuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByZW1pc2VzKGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVtaXNlc1ZlcmlmeSA9IHRoaXMucHJlbWlzZXMuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJlbWlzZShwcmVtaXNlLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHByZW1pc2VWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcmVtaXNlc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHByZW1pc2VWZXJpZmllcyA9IHByZW1pc2UudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHByZW1pc2VWZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUNvbmNsdXNpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGNvbmNsdXNpb25WZXJpZmllcyA9IHRoaXMuY29uY2x1c2lvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gY29uY2x1c2lvblZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IGVsZW1lbnRzLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoY29udGV4dCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmNvbmNsdXNpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5jb25jbHVzaW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zKHN0YXRlbWVudCwgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoY29udGV4dCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcyA9IHRoaXMudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gc3Vic3RpdHV0aW9ucy5hcmVSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHByZW1pc2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IGZhbHNlO1xuXG4gICAgaWYgKCFzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlKSB7XG4gICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24gPSBleHRyYWN0KHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIChzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24pID0+IHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyA9IHByZW1pc2UudW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3QgcHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5ID0gcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoUHJlbWlzZSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2U7XG4gIH1cblxuICB1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZXMoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMgPSByZXZlcnNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMpOyAvLy9cblxuICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzID0gYmFja3dhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UgPSB0aGlzLnVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1dpdGhQcmVtaXNlKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHByZW1pc2UsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcFVuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhQcmVtaXNlcztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHRoaXMucHJlbWlzZXMpLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04odGhpcy5jb25jbHVzaW9uKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIG5hbWUgPSBcIlJ1bGVcIjtcblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgY29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgY29uc3Qgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24obGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiZGVmaW5lIiwiZWxlbWVudHMiLCJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiYmFja3dhcmRzRXZlcnkiLCJSdWxlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJwcm9vZiIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0UHJvb2YiLCJnZXRDb25jbHVzaW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJzb21lIiwibGFiZWwiLCJsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJnZXROb2RlIiwiZ2V0Q29udGV4dCIsInJ1bGVTdHJpbmciLCJnZXRTdHJpbmciLCJ0cmFjZSIsInNjb3BlIiwibGFiZWxzVmVyaWZ5IiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXNWZXJpZnkiLCJ2ZXJpZnlQcmVtaXNlcyIsImNvbmNsdXNpb25WZXJpZmllcyIsInZlcmlmeUNvbmNsdXNpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJydWxlIiwiYWRkUnVsZSIsImRlYnVnIiwiZXZlcnkiLCJuYW1lT25seSIsImxhYmVsVmVyaWZpZXMiLCJwcmVtaXNlIiwicHJlbWlzZVZlcmlmaWVzIiwidmVyaWZ5UHJlbWlzZSIsIlN1YnN0aXR1dGlvbnMiLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJ1bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uIiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBbmRTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyIsInN0YXRlbWVudEFuZFN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2VzIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zV2l0aFByZW1pc2VzIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJ1bmlmeVN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNXaXRoUHJlbWlzZSIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFByZW1pc2UiLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzIiwidW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24iLCJwcmVtaXNlVW5pZmllc0luZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdGVwVW5pZmllc1dpdGhQcmVtaXNlIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJjb25jbHVzaW9uSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwianNvbiIsImZyb21KU09OIiwibGFiZWxzRnJvbUpTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwic3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbiIsIkVsZW1lbnQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFnQkE7OztlQUFBOzs7eUJBZCtCOzJCQUNHO3VCQUVaO29CQU1xQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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