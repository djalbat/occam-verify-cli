"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get deductionFromDeductionNode () {
        return deductionFromDeductionNode;
    },
    get default () {
        return TopLevelAssertion;
    },
    get labelsFromLabelNodes () {
        return labelsFromLabelNodes;
    },
    get labelsStringFromLabels () {
        return labelsStringFromLabels;
    },
    get proofFromProofNode () {
        return proofFromProofNode;
    },
    get signatureFromSignatureNode () {
        return signatureFromSignatureNode;
    },
    get stringFromLabelsSuppositionsAndDeduction () {
        return stringFromLabelsSuppositionsAndDeduction;
    },
    get suppositionsFromSuppositionNodes () {
        return suppositionsFromSuppositionNodes;
    },
    get suppositionsStringFromSuppositions () {
        return suppositionsStringFromSuppositions;
    }
});
var _necessary = require("necessary");
var _elements = /*#__PURE__*/ _interop_require_default(require("../elements"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _json = require("../utilities/json");
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
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
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var extract = _necessary.arrayUtilities.extract, reverse = _necessary.arrayUtilities.reverse, correlate = _necessary.arrayUtilities.correlate, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var TopLevelAssertion = /*#__PURE__*/ function() {
    function TopLevelAssertion(context, node, string, labels, suppositions, deduction, proof, signature, hypotheses) {
        _class_call_check(this, TopLevelAssertion);
        this.context = context;
        this.node = node;
        this.string = string;
        this.labels = labels;
        this.suppositions = suppositions;
        this.deduction = deduction;
        this.proof = proof;
        this.signature = signature;
        this.hypotheses = hypotheses;
    }
    _create_class(TopLevelAssertion, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
            }
        },
        {
            key: "getNode",
            value: function getNode() {
                return this.node;
            }
        },
        {
            key: "getString",
            value: function getString() {
                return this.string;
            }
        },
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
                var labels = (0, _json.labelsFromJSON)(json, context), deduction = (0, _json.deductionFromJSON)(json, context), suppositions = (0, _json.suppositionsFromJSON)(json, context), signature = (0, _json.signatureFromJSON)(json, context), hypotheses = (0, _json.hypothesesFromJSON)(json, context), node = null, proof = null, string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction), topLevelAssertion = new Class(context, node, string, labels, suppositions, deduction, proof, signature, hypotheses);
                return topLevelAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, context) {
                var topLevelAssertionNode = node, proofNode = topLevelAssertionNode.getProofNode(), labelNodes = topLevelAssertionNode.getLabelNodes(), deductionNode = topLevelAssertionNode.getDeductionNode(), suppositionNodes = topLevelAssertionNode.getSuppositionNodes(), signatureNode = topLevelAssertionNode.getSignatureNode(), proof = proofFromProofNode(proofNode, context), labels = labelsFromLabelNodes(labelNodes, context), deduction = deductionFromDeductionNode(deductionNode, context), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context), signature = signatureFromSignatureNode(signatureNode, context), hypotheses = [], string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction), topLevelAssertion = new Class(context, node, string, labels, suppositions, deduction, proof, signature, hypotheses);
                return topLevelAssertion;
            }
        }
    ]);
    return TopLevelAssertion;
}();
function proofFromProofNode(proofNode, context) {
    var Proof = _elements.default.Proof, proof = Proof.fromProofNode(proofNode, context);
    return proof;
}
function labelsFromLabelNodes(labelNodes, context) {
    var Label = _elements.default.Label, labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, context);
        return label;
    });
    return labels;
}
function signatureFromSignatureNode(signatureNode, context) {
    var signature = null;
    if (signatureNode !== null) {
        var Signature = _elements.default.Signature;
        signature = Signature.fromSignatureNode(signatureNode, context);
    }
    return signature;
}
function deductionFromDeductionNode(deductionNode, context) {
    var Deduction = _elements.default.Deduction, deduction = Deduction.fromDeductionNode(deductionNode, context);
    return deduction;
}
function suppositionsFromSuppositionNodes(suppositionNodes, context) {
    var Supposition = _elements.default.Supposition, suppositions = suppositionNodes.map(function(suppositionNode) {
        var supposition = Supposition.fromSuppositionNode(suppositionNode, context);
        return supposition;
    });
    return suppositions;
}
function labelsStringFromLabels(labels) {
    var labelsString = labels.reduce(function(labelsString, label) {
        var labelString = label.getString();
        labelsString = labelsString === null ? labelString : "".concat(labelsString, ", ").concat(labelString);
        return labelsString;
    }, null);
    return labelsString;
}
function suppositionsStringFromSuppositions(suppositions) {
    var suppositionsString = suppositions.reduce(function(suppositionsString, supposition) {
        var suppositionString = supposition.getString();
        suppositionsString = suppositionsString !== null ? "".concat(suppositionsString, ", ").concat(suppositionString) : suppositionString; ///
        return suppositionsString;
    }, null);
    return suppositionsString;
}
function stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction) {
    var string;
    var suppositionsString = suppositionsStringFromSuppositions(suppositions), deductionString = deduction.getString(), labelsString = labelsStringFromLabels(labels);
    if (labelsString !== null) {
        string = suppositionsString !== null ? "".concat(labelsString, " :: [").concat(suppositionsString, "] ... ").concat(deductionString) : "".concat(labelsString, " :: ").concat(deductionString);
    } else {
        string = suppositionsString !== null ? "[".concat(suppositionsString, "] ... ").concat(deductionString) : deductionString;
    }
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbGVtZW50L3RvcExldmVsQXNzZXJ0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IGVsZW1lbnRzIGZyb20gXCIuLi9lbGVtZW50c1wiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTixcbiAgICAgICAgIGRlZHVjdGlvbkZyb21KU09OLFxuICAgICAgICAgc2lnbmF0dXJlRnJvbUpTT04sXG4gICAgICAgICBsYWJlbHNUb0xhYmVsc0pTT04sXG4gICAgICAgICBoeXBvdGhlc2VzRnJvbUpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTixcbiAgICAgICAgIHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgZXh0cmFjdCwgcmV2ZXJzZSwgY29ycmVsYXRlLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLm5vZGUgPSBub2RlO1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcbiAgICB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0Tm9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ub2RlO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZHVjdGlvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgfVxuXG4gIGdldEh5cG90aGVzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaHlwb3RoZXNlcztcbiAgfVxuXG4gIHNldEh5cG90aGVzZXMoaHlwb3RoZXNlcykge1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIGlzSHlwb3RoZXRpY2FsKCkge1xuICAgIGNvbnN0IGh5cG90aGVzZXNMZW5ndGggPSB0aGlzLmh5cG90aGVzZXMubGVuZ3RoLFxuICAgICAgICAgIGh5cG90aGV0aWNhbCA9IChoeXBvdGhlc2VzTGVuZ3RoID4gMCk7XG5cbiAgICByZXR1cm4gaHlwb3RoZXRpY2FsO1xuICB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uKGluZGV4KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLnN1cHBvc2l0aW9uc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbU5vdGhpbmcodGhpcy5jb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZ5ID0gdGhpcy52ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeURlZHVjdGlvbihjb250ZXh0KTtcblxuICAgICAgICBpZiAoZGVkdWN0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVzID0gdGhpcy52ZXJpZnlQcm9vZihjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVzKSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeShuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zVmVyaWZ5ID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gdGhpcy52ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1ZlcmlmeTtcbiAgfVxuXG4gIHZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpIHtcbiAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IHRoaXMuZGVkdWN0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgIHJldHVybiBkZWR1Y3Rpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeVByb29mKGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZWZXJpZmllcztcblxuICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICBwcm9vZlZlcmlmaWVzID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBlbGVtZW50cyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmRlZHVjdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBjb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpIHtcbiAgICBsZXQgaHlwb3RoZXNlc0NvcnJlbGF0ZTtcblxuICAgIGNvbnN0IGh5cG90aGV0aWNhbCA9IHRoaXMuaXNIeXBvdGhldGljYWwoKTtcblxuICAgIGlmIChoeXBvdGhldGljYWwpIHtcbiAgICAgIGNvbnN0IHN0ZXBzID0gY29udGV4dC5nZXRTdGVwcygpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICAgIGh5cG90aGVzZXNDb3JyZWxhdGUgPSBjb3JyZWxhdGUodGhpcy5oeXBvdGhlc2VzLCBzdGVwcywgKGh5cG90aGVzaXMsIHN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgaHlwb3RoZXNlc0VxdWFsVG9TdGVwID0gaHlwb3RoZXNpcy5pc0VxdWFsVG9TdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChoeXBvdGhlc2VzRXF1YWxUb1N0ZXApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChoeXBvdGhlc2VzQ29ycmVsYXRlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlIGh5cG90aGVzZXMgb2YgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCwgdGhpcy5ub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaHlwb3RoZXNlc0NvcnJlbGF0ZSA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gaHlwb3RoZXNlc0NvcnJlbGF0ZTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGh5cG90aGVzZXNDb3JyZWxhdGUgPSB0aGlzLmNvcnJlbGF0ZUh5cG90aGVzZXMoY29udGV4dCk7XG5cbiAgICBpZiAoaHlwb3RoZXNlc0NvcnJlbGF0ZSkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyA9IHRoaXMudW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24oc3RlcHNPclN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gc3VwcG9zaXRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBleHRyYWN0KHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdXBwb3NpdGlvbi51bmlmeVN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdGVwT3JTdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgICBzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgc3RlcHNPclN1YnByb29mcyA9IHJldmVyc2Uoc3RlcHNPclN1YnByb29mcyk7IC8vL1xuXG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24oc3RlcHNPclN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHRoaXMuc2lnbmF0dXJlKSxcbiAgICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKHRoaXMuaHlwb3RoZXNlcyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzaWduYXR1cmUsXG4gICAgICAgICAgICBoeXBvdGhlc2VzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKENsYXNzLCBub2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcHJvb2ZOb2RlID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldFByb29mTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBlbGVtZW50cyxcbiAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBlbGVtZW50cyxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBlbGVtZW50cztcblxuICAgIHNpZ25hdHVyZSA9IFNpZ25hdHVyZS5mcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBlbGVtZW50cyxcbiAgICAgICAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGVsZW1lbnRzLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVscy5yZWR1Y2UoKGxhYmVsc1N0cmluZywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgbGFiZWxzU3RyaW5nID0gKGxhYmVsc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30sICR7bGFiZWxTdHJpbmd9YDtcblxuICAgIHJldHVybiBsYWJlbHNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBsYWJlbHNTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNTdHJpbmdGcm9tU3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNTdHJpbmcgPSBzdXBwb3NpdGlvbnMucmVkdWNlKChzdXBwb3NpdGlvbnNTdHJpbmcsIHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHN1cHBvc2l0aW9uc1N0cmluZyA9IChzdXBwb3NpdGlvbnNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1cHBvc2l0aW9uc1N0cmluZ30sICR7c3VwcG9zaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgc3VwcG9zaXRpb25zU3RyaW5nID0gc3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMpLFxuICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKTtcblxuICBpZiAobGFiZWxzU3RyaW5nICE9PSBudWxsKSB7XG4gICAgc3RyaW5nID0gKHN1cHBvc2l0aW9uc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgYCR7bGFiZWxzU3RyaW5nfSA6OiBbJHtzdXBwb3NpdGlvbnNTdHJpbmd9XSAuLi4gJHtkZWR1Y3Rpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30gOjogJHtkZWR1Y3Rpb25TdHJpbmd9YDtcbiAgfSBlbHNlIHtcbiAgICBzdHJpbmcgPSAoc3VwcG9zaXRpb25zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICBgWyR7c3VwcG9zaXRpb25zU3RyaW5nfV0gLi4uICR7ZGVkdWN0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmc7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJsYWJlbHNGcm9tTGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZ0Zyb21MYWJlbHMiLCJwcm9vZkZyb21Qcm9vZk5vZGUiLCJzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZSIsInN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1N0cmluZ0Zyb21TdXBwb3NpdGlvbnMiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwiYmFja3dhcmRzRXZlcnkiLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0RGVkdWN0aW9uIiwiZ2V0UHJvb2YiLCJnZXRTaWduYXR1cmUiLCJnZXRIeXBvdGhlc2VzIiwic2V0SHlwb3RoZXNlcyIsImdldFN0YXRlbWVudCIsImlzSHlwb3RoZXRpY2FsIiwiaHlwb3RoZXNlc0xlbmd0aCIsImxlbmd0aCIsImh5cG90aGV0aWNhbCIsImlzVW5jb25kaXRpb25hbCIsInN1cHBvc2l0aW9uc0xlbmd0aCIsInVuY29uZGl0aW9uYWwiLCJnZXRTdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb24iLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImxhYmVsc1ZlcmlmeSIsInZlcmlmeUxhYmVscyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Ob3RoaW5nIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJldmVyeSIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllcyIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsIlN1YnN0aXR1dGlvbnMiLCJlbGVtZW50cyIsInN1YnN0aXR1dGlvbnMiLCJjb3JyZWxhdGVIeXBvdGhlc2VzIiwiaHlwb3RoZXNlc0NvcnJlbGF0ZSIsInN0ZXBzIiwiZ2V0U3RlcHMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsInRyYWNlIiwiaHlwb3RoZXNpcyIsInN0ZXAiLCJoeXBvdGhlc2VzRXF1YWxUb1N0ZXAiLCJpc0VxdWFsVG9TdGVwIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllcyIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24iLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwidW5pZnlTdGVwT3JTdWJwcm9vZiIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInNpZ25hdHVyZUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJoeXBvdGhlc2VzSlNPTiIsImh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsImh5cG90aGVzZXNGcm9tSlNPTiIsInRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU5vZGUiLCJ0b3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZk5vZGUiLCJnZXRQcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsImRlZHVjdGlvbk5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJzaWduYXR1cmVOb2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsIlByb29mIiwiZnJvbVByb29mTm9kZSIsIkxhYmVsIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsIlNpZ25hdHVyZSIsImZyb21TaWduYXR1cmVOb2RlIiwiRGVkdWN0aW9uIiwiZnJvbURlZHVjdGlvbk5vZGUiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJsYWJlbHNTdHJpbmciLCJyZWR1Y2UiLCJsYWJlbFN0cmluZyIsInN1cHBvc2l0aW9uc1N0cmluZyIsInN1cHBvc2l0aW9uU3RyaW5nIiwiZGVkdWN0aW9uU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUF1WGdCQTtlQUFBQTs7O2VBbldLQzs7UUE0VUxDO2VBQUFBOztRQXlDQUM7ZUFBQUE7O1FBaERBQztlQUFBQTs7UUFrQkFDO2VBQUFBOztRQTBEQUM7ZUFBQUE7O1FBdkNBQztlQUFBQTs7UUF5QkFDO2VBQUFBOzs7eUJBclplOytEQUVW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