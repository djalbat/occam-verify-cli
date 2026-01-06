"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return AxiomLemmaTheoremConjecture;
    }
});
var _necessary = require("necessary");
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
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
var extract = _necessary.arrayUtilities.extract, reverse = _necessary.arrayUtilities.reverse, correlate = _necessary.arrayUtilities.correlate, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var AxiomLemmaTheoremConjecture = /*#__PURE__*/ function(Element) {
    _inherits(AxiomLemmaTheoremConjecture, Element);
    function AxiomLemmaTheoremConjecture(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses) {
        _class_call_check(this, AxiomLemmaTheoremConjecture);
        var _this;
        _this = _call_super(this, AxiomLemmaTheoremConjecture, [
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
    _create_class(AxiomLemmaTheoremConjecture, [
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
                var labelsVerify = this.verifyLabels();
                if (labelsVerify) {
                    var localContext = _local.default.fromNothing(this.context), context = localContext, suppositionsVerify = this.verifySuppositions(context);
                    if (suppositionsVerify) {
                        var deductionVerifies = this.verifyDeduction(context);
                        if (deductionVerifies) {
                            var proofVerifies = this.verifyProof(context);
                            if (proofVerifies) {
                                verifies = true;
                            }
                        }
                    }
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
            key: "verifySuppositions",
            value: function verifySuppositions(context) {
                var _this = this;
                var suppositionsVerify = this.suppositions.every(function(supposition) {
                    var suppositionVerifies = _this.verifySupposition(supposition, context);
                    if (suppositionVerifies) {
                        return true;
                    }
                });
                return suppositionsVerify;
            }
        },
        {
            key: "verifySupposition",
            value: function verifySupposition(supposition, context) {
                var suppositionVerifies = supposition.verify(context);
                return suppositionVerifies;
            }
        },
        {
            key: "verifyDeduction",
            value: function verifyDeduction(context) {
                var deductionVerifies = this.deduction.verify(context);
                return deductionVerifies;
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
                    proofVerifies = this.proof.verify(substitutions, this.deduction, context);
                }
                return proofVerifies;
            }
        },
        {
            key: "correlateHypotheses",
            value: function correlateHypotheses(context) {
                var hypothesesCorrelate;
                var hypothetical = this.isHypothetical();
                if (hypothetical) {
                    var steps = context.getSteps(), topLevelAssertionString = this.string; ///
                    context.trace("Correlating the hypotheses of the '".concat(topLevelAssertionString, "' axiom, lemma, theorem or conjecture..."), this.node);
                    hypothesesCorrelate = correlate(this.hypotheses, steps, function(hypothesis, step) {
                        var hypothesesEqualToStep = hypothesis.isEqualToStep(step, context);
                        if (hypothesesEqualToStep) {
                            return true;
                        }
                    });
                    if (hypothesesCorrelate) {
                        context.debug("...correlated the hypotheses of the '".concat(topLevelAssertionString, "' axiom, lemma, theorem or conjecture."), this.node);
                    }
                } else {
                    hypothesesCorrelate = true;
                }
                return hypothesesCorrelate;
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
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context) {
                var statementAndStepsOrSubproofsUnifies = false;
                var hypothesesCorrelate = this.correlateHypotheses(context);
                if (hypothesesCorrelate) {
                    var statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, context);
                    if (statementUnifiesWithDeduction) {
                        var stepsOrSubproofsUnifyWithSuppositions = this.unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, context);
                        if (stepsOrSubproofsUnifyWithSuppositions) {
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
            value: function unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext) {
                var stepsOrSubproofsUnifiesWithSupposition = false;
                var context = specificContext, suppositionUnifiesIndependently = supposition.unifyIndependently(substitutions, context);
                if (suppositionUnifiesIndependently) {
                    stepsOrSubproofsUnifiesWithSupposition = true;
                } else {
                    var stepOrSubproof = extract(stepsOrSubproofs, function(stepOrSubproof) {
                        var stepOrSubproofUnifies = supposition.unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext);
                        if (stepOrSubproofUnifies) {
                            return true;
                        }
                    }) || null;
                    if (stepOrSubproof !== null) {
                        stepsOrSubproofsUnifiesWithSupposition = true;
                    }
                }
                return stepsOrSubproofsUnifiesWithSupposition;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithSuppositions",
            value: function unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, generalContext, specificContext) {
                var _this = this;
                stepsOrSubproofs = reverse(stepsOrSubproofs); ///
                var stepsOrSubproofsUnifyWithSuppositions = backwardsEvery(this.suppositions, function(supposition) {
                    var stepsOrSubproofsUnifiesWithSupposition = _this.unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext);
                    if (stepsOrSubproofsUnifiesWithSupposition) {
                        return true;
                    }
                });
                return stepsOrSubproofsUnifyWithSuppositions;
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
                var labels = (0, _json.labelsFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), signature = (0, _json.signatureFromJSON)(json, context), hypotheses = (0, _json.hypothesesFromJSON)(json, context), node = null, proof = null, string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction), axiomLemmaTheoremConjecture = new Class(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
                return axiomLemmaTheoremConjecture;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, context) {
                var topLevelAssertionNode = node, proofNode = topLevelAssertionNode.getProofNode(), labelNodes = topLevelAssertionNode.getLabelNodes(), deductionNode = topLevelAssertionNode.getDeductionNode(), suppositionNodes = topLevelAssertionNode.getSuppositionNodes(), signatureNode = topLevelAssertionNode.getSignatureNode(), proof = proofFromProofNode(proofNode, context), labels = labelsFromLabelNodes(labelNodes, context), deduction = deductionFromDeductionNode(deductionNode, context), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context), signature = signatureFromSignatureNode(signatureNode, context), hypotheses = [], string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction), axiomLemmaTheoremConjecture = new Class(context, string, node, labels, suppositions, deduction, proof, signature, hypotheses);
                return axiomLemmaTheoremConjecture;
            }
        }
    ]);
    return AxiomLemmaTheoremConjecture;
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBFbGVtZW50IGZyb20gXCIuLi9lbGVtZW50XCI7XG5pbXBvcnQgZWxlbWVudHMgZnJvbSBcIi4uL2VsZW1lbnRzXCI7XG5pbXBvcnQgTG9jYWxDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBleHRyYWN0LCByZXZlcnNlLCBjb3JyZWxhdGUsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIGV4dGVuZHMgRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbm9kZSwgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcykge1xuICAgIHN1cGVyKGNvbnRleHQsIHN0cmluZywgbm9kZSk7XG5cbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmRlZHVjdGlvbiA9IGRlZHVjdGlvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZHVjdGlvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgfVxuXG4gIGdldEh5cG90aGVzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHlwb3RoZXNlcztcbiAgfVxuXG4gIHNldEh5cG90aGVzZXMoaHlwb3RoZXNlcykge1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIGlzSHlwb3RoZXRpY2FsKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNMZW5ndGggPSB0aGlzLmh5cG90aGVzZXMubGVuZ3RoLFxuICAgICAgICAgIGh5cG90aGV0aWNhbCA9IChoeXBvdGhlc2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXRpY2FsO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uKGluZGV4KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLnN1cHBvc2l0aW9uc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbU5vdGhpbmcodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeURlZHVjdGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeShuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IHRoaXMuZGVkdWN0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmRlZHVjdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBjb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpIHtcbiAgICBsZXQgaHlwb3RoZXNlc0NvcnJlbGF0ZTtcblxuICAgIGNvbnN0IGh5cG90aGV0aWNhbCA9IHRoaXMuaXNIeXBvdGhldGljYWwoKTtcblxuICAgIGlmIChoeXBvdGhldGljYWwpIHtcbiAgICAgIGNvbnN0IHN0ZXBzID0gY29udGV4dC5nZXRTdGVwcygpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICAgIGh5cG90aGVzZXNDb3JyZWxhdGUgPSBjb3JyZWxhdGUodGhpcy5oeXBvdGhlc2VzLCBzdGVwcywgKGh5cG90aGVzaXMsIHN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgaHlwb3RoZXNlc0VxdWFsVG9TdGVwID0gaHlwb3RoZXNpcy5pc0VxdWFsVG9TdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChoeXBvdGhlc2VzRXF1YWxUb1N0ZXApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChoeXBvdGhlc2VzQ29ycmVsYXRlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlIGh5cG90aGVzZXMgb2YgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCwgdGhpcy5ub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaHlwb3RoZXNlc0NvcnJlbGF0ZSA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gaHlwb3RoZXNlc0NvcnJlbGF0ZTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGh5cG90aGVzZXNDb3JyZWxhdGUgPSB0aGlzLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc0NvcnJlbGF0ZSkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyA9IHRoaXMudW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24oc3RlcHNPclN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gc3VwcG9zaXRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBleHRyYWN0KHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdXBwb3NpdGlvbi51bmlmeVN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdGVwT3JTdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgICBzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgc3RlcHNPclN1YnByb29mcyA9IHJldmVyc2Uoc3RlcHNPclN1YnByb29mcyk7IC8vL1xuXG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24oc3RlcHNPclN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHRoaXMuc2lnbmF0dXJlKSxcbiAgICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKHRoaXMuaHlwb3RoZXNlcyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzaWduYXR1cmUsXG4gICAgICAgICAgICBoeXBvdGhlc2VzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSBuZXcgQ2xhc3MoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvbk5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBwcm9vZk5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0UHJvb2ZOb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSBuZXcgQ2xhc3MoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICAgIHJldHVybiBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmU7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJBeGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwiYmFja3dhcmRzRXZlcnkiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0SHlwb3RoZXNlcyIsInNldEh5cG90aGVzZXMiLCJnZXRTdGF0ZW1lbnQiLCJpc0h5cG90aGV0aWNhbCIsImh5cG90aGVzZXNMZW5ndGgiLCJsZW5ndGgiLCJoeXBvdGhldGljYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJ1bmNvbmRpdGlvbmFsIiwiZ2V0U3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJsYWJlbHNWZXJpZnkiLCJ2ZXJpZnlMYWJlbHMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tTm90aGluZyIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImRlZHVjdGlvblZlcmlmaWVzIiwidmVyaWZ5RGVkdWN0aW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwiZXZlcnkiLCJuYW1lT25seSIsImxhYmVsVmVyaWZpZXMiLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJTdWJzdGl0dXRpb25zIiwiZWxlbWVudHMiLCJzdWJzdGl0dXRpb25zIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsImh5cG90aGVzZXNDb3JyZWxhdGUiLCJzdGVwcyIsImdldFN0ZXBzIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzaXMiLCJzdGVwIiwiaHlwb3RoZXNlc0VxdWFsVG9TdGVwIiwiaXNFcXVhbFRvU3RlcCIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24iLCJzdGF0ZW1lbnRVbmlmaWVzIiwidW5pZnlTdGF0ZW1lbnQiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZXMiLCJzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb25zIiwidW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVJlc29sdmVkIiwidW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uIiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdGVwT3JTdWJwcm9vZiIsInN0ZXBPclN1YnByb29mVW5pZmllcyIsInVuaWZ5U3RlcE9yU3VicHJvb2YiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzaWduYXR1cmVKU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwiaHlwb3RoZXNlc0pTT04iLCJoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwibGFiZWxzRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJoeXBvdGhlc2VzRnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiZnJvbU5vZGUiLCJ0b3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZk5vZGUiLCJnZXRQcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsImRlZHVjdGlvbk5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJzaWduYXR1cmVOb2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsInByb29mRnJvbVByb29mTm9kZSIsImxhYmVsc0Zyb21MYWJlbE5vZGVzIiwiZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUiLCJzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyIsInNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIiwiRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFxQnFCQTs7O3lCQW5CVTs4REFFWDsrREFDQzs0REFDSTtvQkFXc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQVFDLFVBQWdEQyx5QkFBYyxDQUE5REQsU0FBU0UsVUFBdUNELHlCQUFjLENBQXJEQyxTQUFTQyxZQUE4QkYseUJBQWMsQ0FBNUNFLFdBQVdDLGlCQUFtQkgseUJBQWMsQ0FBakNHO0FBRXRCLElBQUEsQUFBTUwsNENBQU47Y0FBTUE7YUFBQUEsNEJBQ1BNLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxVQUFVO2dDQUQ3RWQ7O2dCQUVqQixrQkFGaUJBO1lBRVhNO1lBQVNDO1lBQVFDOztRQUV2QixNQUFLQyxNQUFNLEdBQUdBO1FBQ2QsTUFBS0MsWUFBWSxHQUFHQTtRQUNwQixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLEtBQUssR0FBR0E7UUFDYixNQUFLQyxTQUFTLEdBQUdBO1FBQ2pCLE1BQUtDLFVBQVUsR0FBR0E7OztrQkFURGQ7O1lBWW5CZSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFlBQVk7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