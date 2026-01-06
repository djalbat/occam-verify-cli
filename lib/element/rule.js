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
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_wildcard(require("../elements"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
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
var reverse = _necessary.arrayUtilities.reverse, extract = _necessary.arrayUtilities.extract, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var _default = (0, _elements.define)((_Rule = /*#__PURE__*/ function(Element) {
    _inherits(Rule, Element);
    function Rule(context, string, node, labels, premises, conclusion, proof) {
        _class_call_check(this, Rule);
        var _this;
        _this = _call_super(this, Rule, [
            context,
            string,
            node
        ]);
        _this.labels = labels;
        _this.premises = premises;
        _this.conclusion = conclusion;
        _this.proof = proof;
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
            key: "getConclusion",
            value: function getConclusion() {
                return this.conclusion;
            }
        },
        {
            key: "getProof",
            value: function getProof() {
                return this.proof;
            }
        },
        {
            key: "matchMetavariableName",
            value: function matchMetavariableName(metavariableName) {
                var metavariableNameMatches = this.labels.some(function(label) {
                    var metavariableNameMatches = label.matchMetavariableName(metavariableName);
                    if (metavariableNameMatches) {
                        return true;
                    }
                });
                return metavariableNameMatches;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verifies = false;
                var ruleString = this.string; ///
                this.context.trace("Verifying the '".concat(ruleString, "' rule..."), this.node);
                var labelsVerify = this.verifyLabels();
                if (labelsVerify) {
                    var localContext = _local.default.fromNothing(this.context), context = localContext, premisesVerify = this.verifyPremises(context);
                    if (premisesVerify) {
                        var conclusionVerifies = this.verifyConclusion(context);
                        if (conclusionVerifies) {
                            var proofVerifies = this.verifyProof(context);
                            if (proofVerifies) {
                                var rule = this; ///
                                this.context.addRule(rule);
                                verifies = true;
                            }
                        }
                    }
                }
                if (verifies) {
                    this.context.debug("...verified the '".concat(ruleString, "' rule."), this.node);
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
                    var Substitutions = _elements.default.Substitutions, substitutions = Substitutions.fromNothing();
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
            key: "unifyStatementAndStepsOrSubproofs",
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, context) {
                var statementAndStepsOrSubproofsUnify = false;
                var Substitutions = _elements.default.Substitutions, substitutions = Substitutions.fromNothing(), statementUnifiesWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, context);
                if (statementUnifiesWithConclusion) {
                    var stepsOrSubproofsUnifiesWithPremises = this.unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, context);
                    if (stepsOrSubproofsUnifiesWithPremises) {
                        var substitutionsResolved = substitutions.areResolved();
                        if (substitutionsResolved) {
                            statementAndStepsOrSubproofsUnify = true;
                        }
                    }
                }
                return statementAndStepsOrSubproofsUnify;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithPremise",
            value: function unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, context) {
                var stepsOrSubproofsUnifiesWithPremise = false;
                if (!stepsOrSubproofsUnifiesWithPremise) {
                    var premiseUnifiesIndependently = premise.unifyIndependently(substitutions, context);
                    if (premiseUnifiesIndependently) {
                        stepsOrSubproofsUnifiesWithPremise = true;
                    }
                }
                if (!stepsOrSubproofsUnifiesWithPremise) {
                    var stepOrSubproof = extract(stepsOrSubproofs, function(stepOrSubproof) {
                        var stepOrSubproofUnifies = premise.unifyStepOrSubproof(stepOrSubproof, substitutions, context);
                        if (stepOrSubproofUnifies) {
                            return true;
                        }
                    }) || null;
                    if (stepOrSubproof !== null) {
                        stepsOrSubproofsUnifiesWithPremise = true;
                    }
                }
                return stepsOrSubproofsUnifiesWithPremise;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithPremises",
            value: function unifyStepsOrSubproofsWithPremises(stepsOrSubproofs, substitutions, context) {
                var _this = this;
                stepsOrSubproofs = reverse(stepsOrSubproofs); ///
                var stepsOrSubproofsUnifiesWithPremises = backwardsEvery(this.premises, function(premise) {
                    var stepUnifiesWithPremise = _this.unifyStepsOrSubproofsWithPremise(stepsOrSubproofs, premise, substitutions, context);
                    if (stepUnifiesWithPremise) {
                        return true;
                    }
                });
                return stepsOrSubproofsUnifiesWithPremises;
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
        },
        {
            key: "fromRuleNode",
            value: function fromRuleNode(ruleNode, context) {
                var node = ruleNode, proof = proofFromRuleNode(ruleNode, context), labels = labelsFromRuleNode(ruleNode, context), premises = premisesFromRuleNode(ruleNode, context), conclusion = conclusionFromRuleNode(ruleNode, context), string = stringFromLabelsPremisesAndConclusion(labels, premises, conclusion), rule = new Rule(context, string, node, labels, premises, conclusion, proof);
                return rule;
            }
        }
    ]);
    return Rule;
}(_wrap_native_super(_element.default)), _define_property(_Rule, "name", "Rule"), _Rule));
function proofFromRuleNode(ruleNode, context) {
    var Proof = _elements.default.Proof, proofNode = ruleNode.getProofNode(), proof = Proof.fromProofNode(proofNode, context);
    return proof;
}
function labelsFromRuleNode(ruleNode, context) {
    var Label = _elements.default.Label, labelNodes = ruleNode.getLabelNodes(), labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, context);
        return label;
    });
    return labels;
}
function premisesFromRuleNode(ruleNode, context) {
    var Premise = _elements.default.Premise, premiseNodes = ruleNode.getPremiseNodes(), premises = premiseNodes.map(function(premiseNode) {
        var premise = Premise.fromPremiseNode(premiseNode, context);
        return premise;
    });
    return premises;
}
function conclusionFromRuleNode(ruleNode, context) {
    var Conclusion = _elements.default.Conclusion, conclusionNode = ruleNode.getConclusionNode(), conclusion = Conclusion.fromConclusionNode(conclusionNode, context);
    return conclusion;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3J1bGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi4vZWxlbWVudFwiO1xuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBkZWZpbmUgfSBmcm9tIFwiLi4vZWxlbWVudHNcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgcHJlbWlzZXNGcm9tSlNPTixcbiAgICAgICAgIGNvbmNsdXNpb25Gcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHByZW1pc2VzVG9QcmVtaXNlc0pTT04sXG4gICAgICAgICBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lKGNsYXNzIFJ1bGUgZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZikge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTm90aGluZyh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlc1ZlcmlmeSA9IHRoaXMudmVyaWZ5UHJlbWlzZXMoY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeUNvbmNsdXNpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVzKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gLCB0aGlzLm5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcmVtaXNlcyhjb250ZXh0KSB7XG4gICAgY29uc3QgcHJlbWlzZXNWZXJpZnkgPSB0aGlzLnByZW1pc2VzLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBwcmVtaXNlVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByZW1pc2UocHJlbWlzZSwgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcmVtaXNlVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJlbWlzZXNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlQcmVtaXNlKHByZW1pc2UsIGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVtaXNlVmVyaWZpZXMgPSBwcmVtaXNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBwcmVtaXNlVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlDb25jbHVzaW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZXMgPSB0aGlzLmNvbmNsdXNpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGNvbmNsdXNpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmNvbmNsdXNpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5jb25jbHVzaW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhDb25jbHVzaW9uO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzKHN0YXRlbWVudCwgc3RlcHNPclN1YnByb29mcywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnkgPSBmYWxzZTtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFByZW1pc2VzID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZXMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhQcmVtaXNlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFByZW1pc2Uoc3RlcHNPclN1YnByb29mcywgcHJlbWlzZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhQcmVtaXNlID0gZmFsc2U7XG5cbiAgICBpZiAoIXN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgIGNvbnN0IHByZW1pc2VVbmlmaWVzSW5kZXBlbmRlbnRseSA9IHByZW1pc2UudW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghc3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoUHJlbWlzZSkge1xuICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBleHRyYWN0KHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBwcmVtaXNlLnVuaWZ5U3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN0ZXBPclN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFByZW1pc2UgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhQcmVtaXNlO1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFByZW1pc2VzKHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBzdGVwc09yU3VicHJvb2ZzID0gcmV2ZXJzZShzdGVwc09yU3VicHJvb2ZzKTsgLy8vXG5cbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhQcmVtaXNlcyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMucHJlbWlzZXMsIChwcmVtaXNlKSA9PiB7XG4gICAgICBjb25zdCBzdGVwVW5pZmllc1dpdGhQcmVtaXNlID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoUHJlbWlzZShzdGVwc09yU3VicHJvb2ZzLCBwcmVtaXNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBVbmlmaWVzV2l0aFByZW1pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoUHJlbWlzZXM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTih0aGlzLnByZW1pc2VzKSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKHRoaXMuY29uY2x1c2lvbiksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBuYW1lID0gXCJSdWxlXCI7XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGNvbnN0IG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcnVsZSA9IG5ldyBSdWxlKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgbm9kZSA9IHJ1bGVOb2RlLCAgLy8vXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIHByb29mRnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvb2YgfSA9IGVsZW1lbnRzLFxuICAgICAgICBwcm9vZk5vZGUgPSBydWxlTm9kZS5nZXRQcm9vZk5vZGUoKSxcbiAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5mdW5jdGlvbiBsYWJlbHNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZWxlbWVudHMsXG4gICAgICAgIGxhYmVsTm9kZXMgPSBydWxlTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZnVuY3Rpb24gcHJlbWlzZXNGcm9tUnVsZU5vZGUocnVsZU5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcmVtaXNlIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJlbWlzZU5vZGVzID0gcnVsZU5vZGUuZ2V0UHJlbWlzZU5vZGVzKCksXG4gICAgICAgIHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwcmVtaXNlID0gUHJlbWlzZS5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlcztcbn1cblxuZnVuY3Rpb24gY29uY2x1c2lvbkZyb21SdWxlTm9kZShydWxlTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IENvbmNsdXNpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBjb25jbHVzaW9uTm9kZSA9IHJ1bGVOb2RlLmdldENvbmNsdXNpb25Ob2RlKCksXG4gICAgICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGNvbmNsdXNpb247XG59XG5cbiJdLCJuYW1lcyI6WyJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiYmFja3dhcmRzRXZlcnkiLCJkZWZpbmUiLCJSdWxlIiwiY29udGV4dCIsInN0cmluZyIsIm5vZGUiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJwcm9vZiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsImdldFByb29mIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJydWxlU3RyaW5nIiwidHJhY2UiLCJsYWJlbHNWZXJpZnkiLCJ2ZXJpZnlMYWJlbHMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tTm90aGluZyIsInByZW1pc2VzVmVyaWZ5IiwidmVyaWZ5UHJlbWlzZXMiLCJjb25jbHVzaW9uVmVyaWZpZXMiLCJ2ZXJpZnlDb25jbHVzaW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwicnVsZSIsImFkZFJ1bGUiLCJkZWJ1ZyIsImV2ZXJ5IiwibmFtZU9ubHkiLCJsYWJlbFZlcmlmaWVzIiwicHJlbWlzZSIsInByZW1pc2VWZXJpZmllcyIsInZlcmlmeVByZW1pc2UiLCJTdWJzdGl0dXRpb25zIiwiZWxlbWVudHMiLCJzdWJzdGl0dXRpb25zIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbiIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXNXaXRoQ29uY2x1c2lvbiIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnkiLCJzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhQcmVtaXNlcyIsInVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhQcmVtaXNlcyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVJlc29sdmVkIiwidW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFByZW1pc2UiLCJzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhQcmVtaXNlIiwicHJlbWlzZVVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwic3RlcFVuaWZpZXNXaXRoUHJlbWlzZSIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlc1RvUHJlbWlzZXNKU09OIiwiY29uY2x1c2lvbkpTT04iLCJjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsImxhYmVsc0Zyb21KU09OIiwicHJlbWlzZXNGcm9tSlNPTiIsImNvbmNsdXNpb25Gcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJmcm9tUnVsZU5vZGUiLCJydWxlTm9kZSIsInByb29mRnJvbVJ1bGVOb2RlIiwibGFiZWxzRnJvbVJ1bGVOb2RlIiwicHJlbWlzZXNGcm9tUnVsZU5vZGUiLCJjb25jbHVzaW9uRnJvbVJ1bGVOb2RlIiwiRWxlbWVudCIsIm5hbWUiLCJQcm9vZiIsInByb29mTm9kZSIsImdldFByb29mTm9kZSIsImZyb21Qcm9vZk5vZGUiLCJMYWJlbCIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsIlByZW1pc2UiLCJwcmVtaXNlTm9kZXMiLCJnZXRQcmVtaXNlTm9kZXMiLCJwcmVtaXNlTm9kZSIsImZyb21QcmVtaXNlTm9kZSIsIkNvbmNsdXNpb24iLCJjb25jbHVzaW9uTm9kZSIsImdldENvbmNsdXNpb25Ob2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrQkE7OztlQUFBOzs7eUJBaEIrQjs4REFFWDtnRUFDQzs0REFDSTtvQkFRa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFRQSxVQUFxQ0MseUJBQWMsQ0FBbkRELFNBQVNFLFVBQTRCRCx5QkFBYyxDQUExQ0MsU0FBU0MsaUJBQW1CRix5QkFBYyxDQUFqQ0U7SUFFMUIsV0FBZUMsSUFBQUEsZ0JBQU0seUJBQUM7O2FBQU1DLEtBQ2RDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRDVDUDs7Z0JBRXhCLGtCQUZ3QkE7WUFFbEJDO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxNQUFNLEdBQUdBO1FBQ2QsTUFBS0MsUUFBUSxHQUFHQTtRQUNoQixNQUFLQyxVQUFVLEdBQUdBO1FBQ2xCLE1BQUtDLEtBQUssR0FBR0E7Ozs7O1lBR2ZDLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osUUFBUTtZQUN0Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osVUFBVTtZQUN4Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osS0FBSztZQUNuQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQSxzQkFBc0JDLGdCQUFnQjtnQkFDcEMsSUFBTUMsMEJBQTBCLElBQUksQ0FBQ1YsTUFBTSxDQUFDVyxJQUFJLENBQUMsU0FBQ0M7b0JBQ2hELElBQU1GLDBCQUEwQkUsTUFBTUoscUJBQXFCLENBQUNDO29CQUU1RCxJQUFJQyx5QkFBeUI7d0JBQzNCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxXQUFXO2dCQUVmLElBQU1DLGFBQWEsSUFBSSxDQUFDakIsTUFBTSxFQUFFLEdBQUc7Z0JBRW5DLElBQUksQ0FBQ0QsT0FBTyxDQUFDbUIsS0FBSyxDQUFDLEFBQUMsa0JBQTRCLE9BQVhELFlBQVcsY0FBWSxJQUFJLENBQUNoQixJQUFJO2dCQUVyRSxJQUFNa0IsZUFBZSxJQUFJLENBQUNDLFlBQVk7Z0JBRXRDLElBQUlELGNBQWM7b0JBQ2hCLElBQU1FLGVBQWVDLGNBQVksQ0FBQ0MsV0FBVyxDQUFDLElBQUksQ0FBQ3hCLE9BQU8sR0FDcERBLFVBQVVzQixjQUNWRyxpQkFBaUIsSUFBSSxDQUFDQyxjQUFjLENBQUMxQjtvQkFFM0MsSUFBSXlCLGdCQUFnQjt3QkFDbEIsSUFBTUUscUJBQXFCLElBQUksQ0FBQ0MsZ0JBQWdCLENBQUM1Qjt3QkFFakQsSUFBSTJCLG9CQUFvQjs0QkFDdEIsSUFBTUUsZ0JBQWdCLElBQUksQ0FBQ0MsV0FBVyxDQUFDOUI7NEJBRXZDLElBQUk2QixlQUFlO2dDQUNqQixJQUFNRSxPQUFPLElBQUksRUFBRyxHQUFHO2dDQUV2QixJQUFJLENBQUMvQixPQUFPLENBQUNnQyxPQUFPLENBQUNEO2dDQUVyQmQsV0FBVzs0QkFDYjt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaLElBQUksQ0FBQ2pCLE9BQU8sQ0FBQ2lDLEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYZixZQUFXLFlBQVUsSUFBSSxDQUFDaEIsSUFBSTtnQkFDdkU7Z0JBRUEsT0FBT2U7WUFDVDs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNRCxlQUFlLElBQUksQ0FBQ2pCLE1BQU0sQ0FBQytCLEtBQUssQ0FBQyxTQUFDbkI7b0JBQ3RDLElBQU1vQixXQUFXLE1BQ1hDLGdCQUFnQnJCLE1BQU1DLE1BQU0sQ0FBQ21CO29CQUVuQyxJQUFJQyxlQUFlO3dCQUNqQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9oQjtZQUNUOzs7WUFFQU0sS0FBQUE7bUJBQUFBLFNBQUFBLGVBQWUxQixPQUFPOztnQkFDcEIsSUFBTXlCLGlCQUFpQixJQUFJLENBQUNyQixRQUFRLENBQUM4QixLQUFLLENBQUMsU0FBQ0c7b0JBQzFDLElBQU1DLGtCQUFrQixNQUFLQyxhQUFhLENBQUNGLFNBQVNyQztvQkFFcEQsSUFBSXNDLGlCQUFpQjt3QkFDbkIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPYjtZQUNUOzs7WUFFQWMsS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWNGLE9BQU8sRUFBRXJDLE9BQU87Z0JBQzVCLElBQU1zQyxrQkFBa0JELFFBQVFyQixNQUFNLENBQUNoQjtnQkFFdkMsT0FBT3NDO1lBQ1Q7OztZQUVBVixLQUFBQTttQkFBQUEsU0FBQUEsaUJBQWlCNUIsT0FBTztnQkFDdEIsSUFBTTJCLHFCQUFxQixJQUFJLENBQUN0QixVQUFVLENBQUNXLE1BQU0sQ0FBQ2hCO2dCQUVsRCxPQUFPMkI7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxZQUFZOUIsT0FBTztnQkFDakIsSUFBSTZCO2dCQUVKLElBQUksSUFBSSxDQUFDdkIsS0FBSyxLQUFLLE1BQU07b0JBQ3ZCdUIsZ0JBQWdCO2dCQUNsQixPQUFPO29CQUNMLElBQU0sQUFBRVcsZ0JBQWtCQyxpQkFBUSxDQUExQkQsZUFDRkUsZ0JBQWdCRixjQUFjaEIsV0FBVztvQkFFL0NLLGdCQUFnQixJQUFJLENBQUN2QixLQUFLLENBQUNVLE1BQU0sQ0FBQzBCLGVBQWUsSUFBSSxDQUFDckMsVUFBVSxFQUFFTDtnQkFDcEU7Z0JBRUEsT0FBTzZCO1lBQ1Q7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUEsNkJBQTZCQyxTQUFTLEVBQUVGLGFBQWEsRUFBRTFDLE9BQU87Z0JBQzVELElBQUk2QyxpQ0FBaUM7Z0JBRXJDLElBQU1DLG1CQUFtQixJQUFJLENBQUN6QyxVQUFVLENBQUMwQyxjQUFjLENBQUNILFdBQVdGLGVBQWUxQztnQkFFbEYsSUFBSThDLGtCQUFrQjtvQkFDcEJELGlDQUFpQztnQkFDbkM7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxrQ0FBa0NKLFNBQVMsRUFBRUssZ0JBQWdCLEVBQUVqRCxPQUFPO2dCQUNwRSxJQUFJa0Qsb0NBQW9DO2dCQUV4QyxJQUFNLEFBQUVWLGdCQUFrQkMsaUJBQVEsQ0FBMUJELGVBQ0ZFLGdCQUFnQkYsY0FBY2hCLFdBQVcsSUFDekNxQixpQ0FBaUMsSUFBSSxDQUFDRiw0QkFBNEIsQ0FBQ0MsV0FBV0YsZUFBZTFDO2dCQUVuRyxJQUFJNkMsZ0NBQWdDO29CQUNsQyxJQUFNTSxzQ0FBc0MsSUFBSSxDQUFDQyxpQ0FBaUMsQ0FBQ0gsa0JBQWtCUCxlQUFlMUM7b0JBRXBILElBQUltRCxxQ0FBcUM7d0JBQ3ZDLElBQU1FLHdCQUF3QlgsY0FBY1ksV0FBVzt3QkFFdkQsSUFBSUQsdUJBQXVCOzRCQUN6Qkgsb0NBQW9DO3dCQUN0QztvQkFDRjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBLGlDQUFpQ04sZ0JBQWdCLEVBQUVaLE9BQU8sRUFBRUssYUFBYSxFQUFFMUMsT0FBTztnQkFDaEYsSUFBSXdELHFDQUFxQztnQkFFekMsSUFBSSxDQUFDQSxvQ0FBb0M7b0JBQ3ZDLElBQU1DLDhCQUE4QnBCLFFBQVFxQixrQkFBa0IsQ0FBQ2hCLGVBQWUxQztvQkFFOUUsSUFBSXlELDZCQUE2Qjt3QkFDL0JELHFDQUFxQztvQkFDdkM7Z0JBQ0Y7Z0JBRUEsSUFBSSxDQUFDQSxvQ0FBb0M7b0JBQ3ZDLElBQU1HLGlCQUFpQi9ELFFBQVFxRCxrQkFBa0IsU0FBQ1U7d0JBQ2hELElBQU1DLHdCQUF3QnZCLFFBQVF3QixtQkFBbUIsQ0FBQ0YsZ0JBQWdCakIsZUFBZTFDO3dCQUV6RixJQUFJNEQsdUJBQXVCOzRCQUN6QixPQUFPO3dCQUNUO29CQUNGLE1BQU07b0JBRU4sSUFBSUQsbUJBQW1CLE1BQU07d0JBQzNCSCxxQ0FBcUM7b0JBQ3ZDO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBSixLQUFBQTttQkFBQUEsU0FBQUEsa0NBQWtDSCxnQkFBZ0IsRUFBRVAsYUFBYSxFQUFFMUMsT0FBTzs7Z0JBQ3hFaUQsbUJBQW1CdkQsUUFBUXVELG1CQUFtQixHQUFHO2dCQUVqRCxJQUFNRSxzQ0FBc0N0RCxlQUFlLElBQUksQ0FBQ08sUUFBUSxFQUFFLFNBQUNpQztvQkFDekUsSUFBTXlCLHlCQUF5QixNQUFLUCxnQ0FBZ0MsQ0FBQ04sa0JBQWtCWixTQUFTSyxlQUFlMUM7b0JBRS9HLElBQUk4RCx3QkFBd0I7d0JBQzFCLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT1g7WUFDVDs7O1lBRUFZLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFNQyxhQUFhQyxJQUFBQSx3QkFBa0IsRUFBQyxJQUFJLENBQUM5RCxNQUFNLEdBQzNDK0QsZUFBZUMsSUFBQUEsNEJBQXNCLEVBQUMsSUFBSSxDQUFDL0QsUUFBUSxHQUNuRGdFLGlCQUFpQkMsSUFBQUEsZ0NBQTBCLEVBQUMsSUFBSSxDQUFDaEUsVUFBVSxHQUMzREYsU0FBUzZELFlBQ1Q1RCxXQUFXOEQsY0FDWDdELGFBQWErRCxnQkFDYkUsT0FBTztvQkFDTG5FLFFBQUFBO29CQUNBQyxVQUFBQTtvQkFDQUMsWUFBQUE7Z0JBQ0Y7Z0JBRU4sT0FBT2lFO1lBQ1Q7Ozs7WUFJT0MsS0FBQUE7bUJBQVAsU0FBT0EsU0FBU0QsSUFBSSxFQUFFdEUsT0FBTztnQkFDM0IsSUFBSStCO2dCQUVKLElBQU03QixPQUFPLE1BQ1BJLFFBQVEsTUFDUkgsU0FBU3FFLElBQUFBLG9CQUFjLEVBQUNGLE1BQU10RSxVQUM5QkksV0FBV3FFLElBQUFBLHNCQUFnQixFQUFDSCxNQUFNdEUsVUFDbENLLGFBQWFxRSxJQUFBQSx3QkFBa0IsRUFBQ0osTUFBTXRFLFVBQ3RDQyxTQUFTMEUsc0NBQXNDeEUsUUFBUUMsVUFBVUM7Z0JBRXZFMEIsT0FBTyxJQUFJaEMsS0FBS0MsU0FBU0MsUUFBUUMsTUFBTUMsUUFBUUMsVUFBVUMsWUFBWUM7Z0JBRXJFLE9BQU95QjtZQUNUOzs7WUFFTzZDLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRTdFLE9BQU87Z0JBQ25DLElBQU1FLE9BQU8yRSxVQUNQdkUsUUFBUXdFLGtCQUFrQkQsVUFBVTdFLFVBQ3BDRyxTQUFTNEUsbUJBQW1CRixVQUFVN0UsVUFDdENJLFdBQVc0RSxxQkFBcUJILFVBQVU3RSxVQUMxQ0ssYUFBYTRFLHVCQUF1QkosVUFBVTdFLFVBQzlDQyxTQUFTMEUsc0NBQXNDeEUsUUFBUUMsVUFBVUMsYUFDakUwQixPQUFPLElBQUloQyxLQUFLQyxTQUFTQyxRQUFRQyxNQUFNQyxRQUFRQyxVQUFVQyxZQUFZQztnQkFFM0UsT0FBT3lCO1lBQ1Q7Ozs7cUJBdlB1Q21ELGdCQUFPLElBNE45Qyx3QkFBT0MsUUFBTztBQThCaEIsU0FBU0wsa0JBQWtCRCxRQUFRLEVBQUU3RSxPQUFPO0lBQzFDLElBQU0sQUFBRW9GLFFBQVUzQyxpQkFBUSxDQUFsQjJDLE9BQ0ZDLFlBQVlSLFNBQVNTLFlBQVksSUFDakNoRixRQUFROEUsTUFBTUcsYUFBYSxDQUFDRixXQUFXckY7SUFFN0MsT0FBT007QUFDVDtBQUVBLFNBQVN5RSxtQkFBbUJGLFFBQVEsRUFBRTdFLE9BQU87SUFDM0MsSUFBTSxBQUFFd0YsUUFBVS9DLGlCQUFRLENBQWxCK0MsT0FDRkMsYUFBYVosU0FBU2EsYUFBYSxJQUNuQ3ZGLFNBQVNzRixXQUFXRSxHQUFHLENBQUMsU0FBQ0M7UUFDdkIsSUFBTTdFLFFBQVF5RSxNQUFNSyxhQUFhLENBQUNELFdBQVc1RjtRQUU3QyxPQUFPZTtJQUNUO0lBRU4sT0FBT1o7QUFDVDtBQUVBLFNBQVM2RSxxQkFBcUJILFFBQVEsRUFBRTdFLE9BQU87SUFDN0MsSUFBTSxBQUFFOEYsVUFBWXJELGlCQUFRLENBQXBCcUQsU0FDRkMsZUFBZWxCLFNBQVNtQixlQUFlLElBQ3ZDNUYsV0FBVzJGLGFBQWFKLEdBQUcsQ0FBQyxTQUFDTTtRQUMzQixJQUFNNUQsVUFBVXlELFFBQVFJLGVBQWUsQ0FBQ0QsYUFBYWpHO1FBRXJELE9BQU9xQztJQUNUO0lBRU4sT0FBT2pDO0FBQ1Q7QUFFQSxTQUFTNkUsdUJBQXVCSixRQUFRLEVBQUU3RSxPQUFPO0lBQy9DLElBQU0sQUFBRW1HLGFBQWUxRCxpQkFBUSxDQUF2QjBELFlBQ0ZDLGlCQUFpQnZCLFNBQVN3QixpQkFBaUIsSUFDM0NoRyxhQUFhOEYsV0FBV0csa0JBQWtCLENBQUNGLGdCQUFnQnBHO0lBRWpFLE9BQU9LO0FBQ1QifQ==