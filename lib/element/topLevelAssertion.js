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
var _necessary = require("necessary");
var _element = /*#__PURE__*/ _interop_require_default(require("../element"));
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
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
                    context.trace("Correlating the hypotheses of the '".concat(topLevelAssertionString, "' top level assertion..."), this.node);
                    correlatesToHypotheses = correlate(this.hypotheses, proofAssertions, function(hypothesis, proofAssertion) {
                        var hypothesesComparesToStep = hypothesis.compareProofAssertion(proofAssertion, context);
                        if (hypothesesComparesToStep) {
                            return true;
                        }
                    });
                    if (correlatesToHypotheses) {
                        context.debug("...correlated the hypotheses of the '".concat(topLevelAssertionString, "' top level assertion."), this.node);
                    }
                } else {
                    correlatesToHypotheses = true;
                }
                return correlatesToHypotheses;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var _this = this;
                var verifies = false;
                var context = this.getContext();
                (0, _context.scope)(function(context) {
                    var labelsVerify = _this.verifyLabels();
                    if (labelsVerify) {
                        var suppositionsVerify = _this.verifySuppositions(context);
                        if (suppositionsVerify) {
                            var deductionVerifies = _this.verifyDeduction(context);
                            if (deductionVerifies) {
                                var proofVerifies = _this.verifyProof(context);
                                if (proofVerifies) {
                                    verifies = true;
                                }
                            }
                        }
                    }
                }, context);
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
                    var Substitutions = _elements.default.Substitutions, substitutions = Substitutions.fromNothing(context);
                    proofVerifies = this.proof.verify(substitutions, this.deduction, context);
                }
                return proofVerifies;
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
}(_wrap_native_super(_element.default));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4uL2VsZW1lbnRcIjtcbmltcG9ydCBlbGVtZW50cyBmcm9tIFwiLi4vZWxlbWVudHNcIjtcblxuaW1wb3J0IHsgc2NvcGUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2NvbnRleHRcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBleHRyYWN0LCByZXZlcnNlLCBjb3JyZWxhdGUsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24gZXh0ZW5kcyBFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgc3RyaW5nLCBub2RlLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKSB7XG4gICAgc3VwZXIoY29udGV4dCwgc3RyaW5nLCBub2RlKTtcblxuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgc2V0SHlwb3RoZXNlcyhoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpOyB9XG5cbiAgaXNIeXBvdGhldGljYWwoKSB7XG4gICAgY29uc3QgaHlwb3RoZXNlc0xlbmd0aCA9IHRoaXMuaHlwb3RoZXNlcy5sZW5ndGgsXG4gICAgICAgICAgaHlwb3RoZXRpY2FsID0gKGh5cG90aGVzZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBoeXBvdGhldGljYWw7XG4gIH1cblxuICBpc1VuY29uZGl0aW9uYWwoKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zTGVuZ3RoID0gdGhpcy5zdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHVuY29uZGl0aW9uYWwgPSAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiB1bmNvbmRpdGlvbmFsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb24oaW5kZXgpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMuc3VwcG9zaXRpb25zW2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IGNvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUgPSBsYWJlbC5jb21wYXJlTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKGxhYmVsQ29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWU7XG4gIH1cblxuICBjb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpIHtcbiAgICBsZXQgY29ycmVsYXRlc1RvSHlwb3RoZXNlcztcblxuICAgIGNvbnN0IGh5cG90aGV0aWNhbCA9IHRoaXMuaXNIeXBvdGhldGljYWwoKTtcblxuICAgIGlmIChoeXBvdGhldGljYWwpIHtcbiAgICAgIGNvbnN0IHByb29mQXNzZXJ0aW9ucyA9IGNvbnRleHQuZ2V0UHJvb2ZBc3NlcnRpb25zKCksXG4gICAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvblN0cmluZyA9IHRoaXMuZ2V0U3RyaW5nKCk7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgQ29ycmVsYXRpbmcgdGhlIGh5cG90aGVzZXMgb2YgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgdG9wIGxldmVsIGFzc2VydGlvbi4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICAgIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSBjb3JyZWxhdGUodGhpcy5oeXBvdGhlc2VzLCBwcm9vZkFzc2VydGlvbnMsIChoeXBvdGhlc2lzLCBwcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICBjb25zdCBoeXBvdGhlc2VzQ29tcGFyZXNUb1N0ZXAgPSBoeXBvdGhlc2lzLmNvbXBhcmVQcm9vZkFzc2VydGlvbihwcm9vZkFzc2VydGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGh5cG90aGVzZXNDb21wYXJlc1RvU3RlcCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMpIHtcbiAgICAgICAgY29udGV4dC5kZWJ1ZyhgLi4uY29ycmVsYXRlZCB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyB0b3AgbGV2ZWwgYXNzZXJ0aW9uLmAsIHRoaXMubm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvcnJlbGF0ZXNUb0h5cG90aGVzZXM7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5nZXRDb250ZXh0KCk7XG5cbiAgICBzY29wZSgoY29udGV4dCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeURlZHVjdGlvbihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBjb250ZXh0KTtcblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeURlZHVjdGlvbihjb250ZXh0KSB7XG4gICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gZWxlbWVudHMsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZyhjb250ZXh0KTtcblxuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRoaXMucHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIHRoaXMuZGVkdWN0aW9uLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZWZXJpZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvcnJlbGF0ZXNUb0h5cG90aGVzZXMgPSB0aGlzLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoY29ycmVsYXRlc1RvSHlwb3RoZXNlcykge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyA9IHRoaXMudW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSBmYWxzZTtcblxuICAgIGlmICghc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbiA9IGV4dHJhY3Qoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgKHN1YnByb29mT3JQcm9vZkFzc2VydGlvbikgPT4ge1xuICAgICAgICBjb25zdCBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25VbmlmaWVzID0gc3VwcG9zaXRpb24udW5pZnlTdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uICE9PSBudWxsKSB7XG4gICAgICAgIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gc3VwcG9zaXRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgICBzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyhzdWJwcm9vZk9yUHJvb2ZBc3NlcnRpb25zLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyA9IHJldmVyc2Uoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucyk7IC8vL1xuXG4gICAgY29uc3Qgc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24oc3VicHJvb2ZPclByb29mQXNzZXJ0aW9ucywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VicHJvb2ZPclByb29mQXNzZXJ0aW9uc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHRoaXMuc2lnbmF0dXJlKSxcbiAgICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKHRoaXMuaHlwb3RoZXNlcyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzaWduYXR1cmUsXG4gICAgICAgICAgICBoeXBvdGhlc2VzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIG5vZGUsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwiYmFja3dhcmRzRXZlcnkiLCJjb250ZXh0Iiwic3RyaW5nIiwibm9kZSIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0SHlwb3RoZXNlcyIsInNldEh5cG90aGVzZXMiLCJnZXRTdGF0ZW1lbnQiLCJpc0h5cG90aGV0aWNhbCIsImh5cG90aGVzZXNMZW5ndGgiLCJsZW5ndGgiLCJoeXBvdGhldGljYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJ1bmNvbmRpdGlvbmFsIiwiZ2V0U3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uIiwiY29tcGFyZU1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwiY29tcGFyZXNUb01ldGF2YXJpYWJsZU5hbWUiLCJzb21lIiwibGFiZWwiLCJsYWJlbENvbXBhcmVzVG9NZXRhdmFyaWFibGVOYW1lIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsImNvcnJlbGF0ZXNUb0h5cG90aGVzZXMiLCJwcm9vZkFzc2VydGlvbnMiLCJnZXRQcm9vZkFzc2VydGlvbnMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsImdldFN0cmluZyIsInRyYWNlIiwiaHlwb3RoZXNpcyIsInByb29mQXNzZXJ0aW9uIiwiaHlwb3RoZXNlc0NvbXBhcmVzVG9TdGVwIiwiY29tcGFyZVByb29mQXNzZXJ0aW9uIiwiZGVidWciLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImdldENvbnRleHQiLCJzY29wZSIsImxhYmVsc1ZlcmlmeSIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImRlZHVjdGlvblZlcmlmaWVzIiwidmVyaWZ5RGVkdWN0aW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwiZXZlcnkiLCJuYW1lT25seSIsImxhYmVsVmVyaWZpZXMiLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJTdWJzdGl0dXRpb25zIiwiZWxlbWVudHMiLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnMiLCJzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllcyIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN1YnByb29mT3JQcm9vZkFzc2VydGlvbnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VicHJvb2ZPclByb29mQXNzZXJ0aW9uVW5pZmllcyIsInVuaWZ5U3VicHJvb2ZPclByb29mQXNzZXJ0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInNpZ25hdHVyZUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJoeXBvdGhlc2VzSlNPTiIsImh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsImh5cG90aGVzZXNGcm9tSlNPTiIsInN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJ0b3BMZXZlbEFzc2VydGlvbiIsIkVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBcUJxQkE7Ozt5QkFuQlU7OERBRVg7K0RBQ0M7dUJBRUM7b0JBVXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFRQyxVQUFnREMseUJBQWMsQ0FBOURELFNBQVNFLFVBQXVDRCx5QkFBYyxDQUFyREMsU0FBU0MsWUFBOEJGLHlCQUFjLENBQTVDRSxXQUFXQyxpQkFBbUJILHlCQUFjLENBQWpDRztBQUV0QixJQUFBLEFBQU1MLGtDQUFOO2NBQU1BO2FBQUFBLGtCQUNQTSxPQUFPLEVBQUVDLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMsVUFBVTtnQ0FEN0VkOztnQkFFakIsa0JBRmlCQTtZQUVYTTtZQUFTQztZQUFRQzs7UUFFdkIsTUFBS0MsTUFBTSxHQUFHQTtRQUNkLE1BQUtDLFlBQVksR0FBR0E7UUFDcEIsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxLQUFLLEdBQUdBO1FBQ2IsTUFBS0MsU0FBUyxHQUFHQTtRQUNqQixNQUFLQyxVQUFVLEdBQUdBOzs7a0JBVERkOztZQVluQmUsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxD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