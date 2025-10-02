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
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
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
            key: "setContext",
            value: function setContext(context) {
                this.context = context;
            }
        },
        {
            key: "setString",
            value: function setString(string) {
                this.string = string;
            }
        },
        {
            key: "setLabels",
            value: function setLabels(labels) {
                this.labels = labels;
            }
        },
        {
            key: "setSuppositions",
            value: function setSuppositions(suppositions) {
                this.suppositions = suppositions;
            }
        },
        {
            key: "setDeduction",
            value: function setDeduction(deduction) {
                this.deduction = deduction;
            }
        },
        {
            key: "setProof",
            value: function setProof(proof) {
                this.proof = proof;
            }
        },
        {
            key: "setSignature",
            value: function setSignature(signature) {
                this.signature = signature;
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
                    var localContext = _local.default.fromContext(this.context), context = localContext, suppositionsVerify = this.verifySuppositions(context);
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
                    var substitutions = _substitutions.default.fromNothing();
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
            value: function unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext) {
                var statementUnifiesWithDeduction = false;
                var statementUnifies = this.deduction.unifyStatement(statement, substitutions, generalContext, specificContext); ///
                if (statementUnifies) {
                    statementUnifiesWithDeduction = true;
                }
                return statementUnifiesWithDeduction;
            }
        },
        {
            key: "unifyStatementAndStepsOrSubproofs",
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context) {
                var statementAndStepsOrSubproofsUnify = false;
                var hypothesesCorrelate = this.correlateHypotheses(context);
                if (hypothesesCorrelate) {
                    var generalContext = this.context, specificContext = context, statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
                    if (statementUnifiesWithDeduction) {
                        var stepsOrSubproofsUnifyWithSuppositions = this.unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, generalContext, specificContext);
                        if (stepsOrSubproofsUnifyWithSuppositions) {
                            var substitutionsResolved = substitutions.areResolved();
                            if (substitutionsResolved) {
                                statementAndStepsOrSubproofsUnify = true;
                            }
                        }
                    }
                }
                return statementAndStepsOrSubproofsUnify;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithSupposition",
            value: function unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext) {
                var stepsOrSubproofsUnifyWithSupposition = false;
                var context = specificContext, suppositionUnifiesIndependently = supposition.unifyIndependently(substitutions, context);
                if (suppositionUnifiesIndependently) {
                    stepsOrSubproofsUnifyWithSupposition = true;
                } else {
                    var stepOrSubproof = extract(stepsOrSubproofs, function(stepOrSubproof) {
                        var stepOrSubproofUnifies = supposition.unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext);
                        if (stepOrSubproofUnifies) {
                            return true;
                        }
                    }) || null;
                    if (stepOrSubproof !== null) {
                        stepsOrSubproofsUnifyWithSupposition = true;
                    }
                }
                return stepsOrSubproofsUnifyWithSupposition;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithSuppositions",
            value: function unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, generalContext, specificContext) {
                var _this = this;
                stepsOrSubproofs = reverse(stepsOrSubproofs); ///
                var stepsOrSubproofsUnifyWithSuppositions = backwardsEvery(this.suppositions, function(supposition) {
                    var stepsOrSubproofsUnifyWithSupposition = _this.unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext);
                    if (stepsOrSubproofsUnifyWithSupposition) {
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
    var Proof = _dom.default.Proof, proof = Proof.fromProofNode(proofNode, context);
    return proof;
}
function labelsFromLabelNodes(labelNodes, context) {
    var Label = _dom.default.Label, labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, context);
        return label;
    });
    return labels;
}
function signatureFromSignatureNode(signatureNode, context) {
    var signature = null;
    if (signatureNode !== null) {
        var Signature = _dom.default.Signature;
        signature = Signature.fromSignatureNode(signatureNode, context);
    }
    return signature;
}
function deductionFromDeductionNode(deductionNode, context) {
    var Deduction = _dom.default.Deduction, deduction = Deduction.fromDeductionNode(deductionNode, context);
    return deduction;
}
function suppositionsFromSuppositionNodes(suppositionNodes, context) {
    var Supposition = _dom.default.Supposition, suppositions = suppositionNodes.map(function(suppositionNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBleHRyYWN0LCByZXZlcnNlLCBjb3JyZWxhdGUsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgc2V0Q29udGV4dChjb250ZXh0KSB7IHRoaXMuY29udGV4dCA9IGNvbnRleHQ7IH1cblxuICBzZXRTdHJpbmcoc3RyaW5nKSB7IHRoaXMuc3RyaW5nID0gc3RyaW5nOyB9XG5cbiAgc2V0TGFiZWxzKGxhYmVscykgeyB0aGlzLmxhYmVscyA9IGxhYmVsczsgfVxuXG4gIHNldFN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMpIHsgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7IH1cblxuICBzZXREZWR1Y3Rpb24oZGVkdWN0aW9uKSB7IHRoaXMuZGVkdWN0aW9uID0gZGVkdWN0aW9uOyB9XG5cbiAgc2V0UHJvb2YocHJvb2YpIHsgdGhpcy5wcm9vZiA9IHByb29mOyB9XG5cbiAgc2V0U2lnbmF0dXJlKHNpZ25hdHVyZSkgeyB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTsgfVxuXG4gIHNldEh5cG90aGVzZXMoaHlwb3RoZXNlcykgeyB0aGlzLmh5cG90aGVzZXMgPSBoeXBvdGhlc2VzOyB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7IH1cblxuICBpc0h5cG90aGV0aWNhbCgpIHtcbiAgICBjb25zdCBoeXBvdGhlc2VzTGVuZ3RoID0gdGhpcy5oeXBvdGhlc2VzLmxlbmd0aCxcbiAgICAgICAgICBoeXBvdGhldGljYWwgPSAoaHlwb3RoZXNlc0xlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIGh5cG90aGV0aWNhbDtcbiAgfVxuXG4gIGlzVW5jb25kaXRpb25hbCgpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnNMZW5ndGggPSB0aGlzLnN1cHBvc2l0aW9ucy5sZW5ndGgsXG4gICAgICAgICAgdW5jb25kaXRpb25hbCA9IChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApO1xuXG4gICAgcmV0dXJuIHVuY29uZGl0aW9uYWw7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbihpbmRleCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcy5zdXBwb3NpdGlvbnNbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21Db250ZXh0KHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMudmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeURlZHVjdGlvbihjb250ZXh0KSB7XG4gICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmRlZHVjdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICBjb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpIHtcbiAgICBsZXQgaHlwb3RoZXNlc0NvcnJlbGF0ZTtcblxuICAgIGNvbnN0IGh5cG90aGV0aWNhbCA9IHRoaXMuaXNIeXBvdGhldGljYWwoKTtcblxuICAgIGlmIChoeXBvdGhldGljYWwpIHtcbiAgICAgIGNvbnN0IHN0ZXBzID0gY29udGV4dC5nZXRTdGVwcygpLFxuICAgICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb25TdHJpbmcgPSB0aGlzLnN0cmluZzsgIC8vL1xuXG4gICAgICBjb250ZXh0LnRyYWNlKGBDb3JyZWxhdGluZyB0aGUgaHlwb3RoZXNlcyBvZiB0aGUgJyR7dG9wTGV2ZWxBc3NlcnRpb25TdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmAsIHRoaXMubm9kZSk7XG5cbiAgICAgIGh5cG90aGVzZXNDb3JyZWxhdGUgPSBjb3JyZWxhdGUodGhpcy5oeXBvdGhlc2VzLCBzdGVwcywgKGh5cG90aGVzaXMsIHN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgaHlwb3RoZXNlc0VxdWFsVG9TdGVwID0gaHlwb3RoZXNpcy5pc0VxdWFsVG9TdGVwKHN0ZXAsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChoeXBvdGhlc2VzRXF1YWxUb1N0ZXApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChoeXBvdGhlc2VzQ29ycmVsYXRlKSB7XG4gICAgICAgIGNvbnRleHQuZGVidWcoYC4uLmNvcnJlbGF0ZWQgdGhlIGh5cG90aGVzZXMgb2YgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCwgdGhpcy5ub2RlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaHlwb3RoZXNlc0NvcnJlbGF0ZSA9IHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gaHlwb3RoZXNlc0NvcnJlbGF0ZTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllcykge1xuICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBoeXBvdGhlc2VzQ29ycmVsYXRlID0gdGhpcy5jb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNDb3JyZWxhdGUpIHtcbiAgICAgIGNvbnN0IGdlbmVyYWxDb250ZXh0ID0gdGhpcy5jb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyA9IHRoaXMudW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbihzdGVwc09yU3VicHJvb2ZzLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gc3VwcG9zaXRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gZXh0cmFjdChzdGVwc09yU3VicHJvb2ZzLCAoc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3VwcG9zaXRpb24udW5pZnlTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3RlcE9yU3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgICAgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgc3RlcHNPclN1YnByb29mcyA9IHJldmVyc2Uoc3RlcHNPclN1YnByb29mcyk7IC8vL1xuXG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbiA9IHRoaXMudW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uKHN0ZXBzT3JTdWJwcm9vZnMsIHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04odGhpcy5zaWduYXR1cmUpLFxuICAgICAgICAgIGh5cG90aGVzZXNKU09OID0gaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04odGhpcy5oeXBvdGhlc2VzKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVKU09OLCAgLy8vXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHNpZ25hdHVyZSxcbiAgICAgICAgICAgIGh5cG90aGVzZXNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIG5vZGUgPSBudWxsLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIG5vZGUsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIGNvbnRleHQpIHtcbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvbk5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBwcm9vZk5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0UHJvb2ZOb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KSxcbiAgICAgICAgICBoeXBvdGhlc2VzID0gW10sXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvb2YgfSA9IGRvbSxcbiAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBkb20sXG4gICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgaWYgKHNpZ25hdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZG9tO1xuXG4gICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGRvbSxcbiAgICAgICAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGRvbSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNTdHJpbmcgPSBsYWJlbHMucmVkdWNlKChsYWJlbHNTdHJpbmcsIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgIGxhYmVsc1N0cmluZyA9IChsYWJlbHNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9LCAke2xhYmVsU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gbGFiZWxzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbGFiZWxzU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zU3RyaW5nID0gc3VwcG9zaXRpb25zLnJlZHVjZSgoc3VwcG9zaXRpb25zU3RyaW5nLCBzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdXBwb3NpdGlvbnNTdHJpbmcgPSAoc3VwcG9zaXRpb25zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdXBwb3NpdGlvbnNTdHJpbmd9LCAke3N1cHBvc2l0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc1N0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbikge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uc1N0cmluZyA9IHN1cHBvc2l0aW9uc1N0cmluZ0Zyb21TdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zKSxcbiAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscyk7XG5cbiAgaWYgKGxhYmVsc1N0cmluZyAhPT0gbnVsbCkge1xuICAgIHN0cmluZyA9IChzdXBwb3NpdGlvbnNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30gOjogWyR7c3VwcG9zaXRpb25zU3RyaW5nfV0gLi4uICR7ZGVkdWN0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9IDo6ICR7ZGVkdWN0aW9uU3RyaW5nfWA7XG4gIH0gZWxzZSB7XG4gICAgc3RyaW5nID0gKHN1cHBvc2l0aW9uc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgYFske3N1cHBvc2l0aW9uc1N0cmluZ31dIC4uLiAke2RlZHVjdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgZGVkdWN0aW9uU3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsIlRvcExldmVsQXNzZXJ0aW9uIiwibGFiZWxzRnJvbUxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNTdHJpbmdGcm9tU3VwcG9zaXRpb25zIiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwicmV2ZXJzZSIsImNvcnJlbGF0ZSIsImJhY2t3YXJkc0V2ZXJ5IiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsInNpZ25hdHVyZSIsImh5cG90aGVzZXMiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0SHlwb3RoZXNlcyIsInNldENvbnRleHQiLCJzZXRTdHJpbmciLCJzZXRMYWJlbHMiLCJzZXRTdXBwb3NpdGlvbnMiLCJzZXREZWR1Y3Rpb24iLCJzZXRQcm9vZiIsInNldFNpZ25hdHVyZSIsInNldEh5cG90aGVzZXMiLCJnZXRTdGF0ZW1lbnQiLCJpc0h5cG90aGV0aWNhbCIsImh5cG90aGVzZXNMZW5ndGgiLCJsZW5ndGgiLCJoeXBvdGhldGljYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJ1bmNvbmRpdGlvbmFsIiwiZ2V0U3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJsYWJlbHNWZXJpZnkiLCJ2ZXJpZnlMYWJlbHMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tQ29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImRlZHVjdGlvblZlcmlmaWVzIiwidmVyaWZ5RGVkdWN0aW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwiZXZlcnkiLCJuYW1lT25seSIsImxhYmVsVmVyaWZpZXMiLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwiY29ycmVsYXRlSHlwb3RoZXNlcyIsImh5cG90aGVzZXNDb3JyZWxhdGUiLCJzdGVwcyIsImdldFN0ZXBzIiwidG9wTGV2ZWxBc3NlcnRpb25TdHJpbmciLCJ0cmFjZSIsImh5cG90aGVzaXMiLCJzdGVwIiwiaHlwb3RoZXNlc0VxdWFsVG9TdGVwIiwiaXNFcXVhbFRvU3RlcCIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwic3RhdGVtZW50IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiIsInN0YXRlbWVudFVuaWZpZXMiLCJ1bmlmeVN0YXRlbWVudCIsInVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyIsInN0ZXBzT3JTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnkiLCJzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb25zIiwidW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsImFyZVJlc29sdmVkIiwidW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uIiwic3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInN0ZXBPclN1YnByb29mIiwic3RlcE9yU3VicHJvb2ZVbmlmaWVzIiwidW5pZnlTdGVwT3JTdWJwcm9vZiIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJkZWR1Y3Rpb25KU09OIiwiZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInNpZ25hdHVyZUpTT04iLCJzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04iLCJoeXBvdGhlc2VzSlNPTiIsImh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsImh5cG90aGVzZXNGcm9tSlNPTiIsInRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU5vZGUiLCJ0b3BMZXZlbEFzc2VydGlvbk5vZGUiLCJwcm9vZk5vZGUiLCJnZXRQcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwiZ2V0TGFiZWxOb2RlcyIsImRlZHVjdGlvbk5vZGUiLCJnZXREZWR1Y3Rpb25Ob2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsImdldFN1cHBvc2l0aW9uTm9kZXMiLCJzaWduYXR1cmVOb2RlIiwiZ2V0U2lnbmF0dXJlTm9kZSIsIlByb29mIiwiZG9tIiwiZnJvbVByb29mTm9kZSIsIkxhYmVsIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsIlNpZ25hdHVyZSIsImZyb21TaWduYXR1cmVOb2RlIiwiRGVkdWN0aW9uIiwiZnJvbURlZHVjdGlvbk5vZGUiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJsYWJlbHNTdHJpbmciLCJyZWR1Y2UiLCJsYWJlbFN0cmluZyIsInN1cHBvc2l0aW9uc1N0cmluZyIsInN1cHBvc2l0aW9uU3RyaW5nIiwiZGVkdWN0aW9uU3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7UUFxWWdCQTtlQUFBQTs7O2VBaFhLQzs7UUF5VkxDO2VBQUFBOztRQXlDQUM7ZUFBQUE7O1FBaERBQztlQUFBQTs7UUFrQkFDO2VBQUFBOztRQTBEQUM7ZUFBQUE7O1FBdkNBQztlQUFBQTs7UUF5QkFDO2VBQUFBOzs7eUJBbmFlOzBEQUVmOzREQUNTO29FQUNDO29CQVdxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvQyxJQUFRQyxVQUFnREMseUJBQWMsQ0FBOURELFNBQVNFLFVBQXVDRCx5QkFBYyxDQUFyREMsU0FBU0MsWUFBOEJGLHlCQUFjLENBQTVDRSxXQUFXQyxpQkFBbUJILHlCQUFjLENBQWpDRztBQUV0QixJQUFBLEFBQU1aLGtDQUFOO2FBQU1BLGtCQUNQYSxPQUFPLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLFNBQVMsRUFBRUMs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