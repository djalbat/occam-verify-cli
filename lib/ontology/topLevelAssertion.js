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
var _ontology = /*#__PURE__*/ _interop_require_default(require("../ontology"));
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
    var Proof = _ontology.default.Proof, proof = Proof.fromProofNode(proofNode, context);
    return proof;
}
function labelsFromLabelNodes(labelNodes, context) {
    var Label = _ontology.default.Label, labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, context);
        return label;
    });
    return labels;
}
function signatureFromSignatureNode(signatureNode, context) {
    var signature = null;
    if (signatureNode !== null) {
        var Signature = _ontology.default.Signature;
        signature = Signature.fromSignatureNode(signatureNode, context);
    }
    return signature;
}
function deductionFromDeductionNode(deductionNode, context) {
    var Deduction = _ontology.default.Deduction, deduction = Deduction.fromDeductionNode(deductionNode, context);
    return deduction;
}
function suppositionsFromSuppositionNodes(suppositionNodes, context) {
    var Supposition = _ontology.default.Supposition, suppositions = suppositionNodes.map(function(suppositionNode) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBleHRyYWN0LCByZXZlcnNlLCBjb3JyZWxhdGUsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgc2V0SHlwb3RoZXNlcyhoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpOyB9XG5cbiAgaXNIeXBvdGhldGljYWwoKSB7XG4gICAgY29uc3QgaHlwb3RoZXNlc0xlbmd0aCA9IHRoaXMuaHlwb3RoZXNlcy5sZW5ndGgsXG4gICAgICAgICAgaHlwb3RoZXRpY2FsID0gKGh5cG90aGVzZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBoeXBvdGhldGljYWw7XG4gIH1cblxuICBpc1VuY29uZGl0aW9uYWwoKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zTGVuZ3RoID0gdGhpcy5zdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHVuY29uZGl0aW9uYWwgPSAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiB1bmNvbmRpdGlvbmFsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb24oaW5kZXgpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMuc3VwcG9zaXRpb25zW2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tTm90aGluZyh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IHRydWUsXG4gICAgICAgICAgICBsYWJlbFZlcmlmaWVzID0gbGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5kZWR1Y3Rpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgY29ycmVsYXRlSHlwb3RoZXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IGh5cG90aGVzZXNDb3JyZWxhdGU7XG5cbiAgICBjb25zdCBoeXBvdGhldGljYWwgPSB0aGlzLmlzSHlwb3RoZXRpY2FsKCk7XG5cbiAgICBpZiAoaHlwb3RoZXRpY2FsKSB7XG4gICAgICBjb25zdCBzdGVwcyA9IGNvbnRleHQuZ2V0U3RlcHMoKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgQ29ycmVsYXRpbmcgdGhlIGh5cG90aGVzZXMgb2YgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgICBoeXBvdGhlc2VzQ29ycmVsYXRlID0gY29ycmVsYXRlKHRoaXMuaHlwb3RoZXNlcywgc3RlcHMsIChoeXBvdGhlc2lzLCBzdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IGh5cG90aGVzZXNFcXVhbFRvU3RlcCA9IGh5cG90aGVzaXMuaXNFcXVhbFRvU3RlcChzdGVwLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoaHlwb3RoZXNlc0VxdWFsVG9TdGVwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaHlwb3RoZXNlc0NvcnJlbGF0ZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb3JyZWxhdGVkIHRoZSBoeXBvdGhlc2VzIG9mIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLmAsIHRoaXMubm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGh5cG90aGVzZXNDb3JyZWxhdGUgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGh5cG90aGVzZXNDb3JyZWxhdGU7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb247XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBoeXBvdGhlc2VzQ29ycmVsYXRlID0gdGhpcy5jb3JyZWxhdGVIeXBvdGhlc2VzKGNvbnRleHQpO1xuXG4gICAgaWYgKGh5cG90aGVzZXNDb3JyZWxhdGUpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMgPSB0aGlzLnVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzO1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uKHN0ZXBzT3JTdWJwcm9vZnMsIHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN1cHBvc2l0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gZXh0cmFjdChzdGVwc09yU3VicHJvb2ZzLCAoc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3VwcG9zaXRpb24udW5pZnlTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3RlcE9yU3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgICAgc3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhTdXBwb3NpdGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSByZXZlcnNlKHN0ZXBzT3JTdWJwcm9vZnMpOyAvLy9cblxuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMgPSBiYWNrd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzVW5pZmllc1dpdGhTdXBwb3NpdGlvbiA9IHRoaXMudW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uKHN0ZXBzT3JTdWJwcm9vZnMsIHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTih0aGlzLnNpZ25hdHVyZSksXG4gICAgICAgICAgaHlwb3RoZXNlc0pTT04gPSBoeXBvdGhlc2VzVG9IeXBvdGhlc2VzSlNPTih0aGlzLmh5cG90aGVzZXMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUpTT04sICAvLy9cbiAgICAgICAgICBoeXBvdGhlc2VzID0gaHlwb3RoZXNlc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICAgICAgaHlwb3RoZXNlc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGNvbnRleHQpLFxuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgbm9kZSA9IG51bGwsXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgY29udGV4dCkge1xuICAgIGNvbnN0IHRvcExldmVsQXNzZXJ0aW9uTm9kZSA9IG5vZGUsIC8vL1xuICAgICAgICAgIHByb29mTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRQcm9vZk5vZGUoKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldExhYmVsTm9kZXMoKSxcbiAgICAgICAgICBkZWR1Y3Rpb25Ob2RlID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldERlZHVjdGlvbk5vZGUoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldFN1cHBvc2l0aW9uTm9kZXMoKSxcbiAgICAgICAgICBzaWduYXR1cmVOb2RlID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldFNpZ25hdHVyZU5vZGUoKSxcbiAgICAgICAgICBwcm9vZiA9IHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGNvbnRleHQpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpLFxuICAgICAgICAgIGh5cG90aGVzZXMgPSBbXSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGNvbnRleHQsIG5vZGUsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSwgaHlwb3RoZXNlcyk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gb250b2xvZ3ksXG4gICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gb250b2xvZ3ksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgaWYgKHNpZ25hdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gb250b2xvZ3k7XG5cbiAgICBzaWduYXR1cmUgPSBTaWduYXR1cmUuZnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IERlZHVjdGlvbiB9ID0gb250b2xvZ3ksXG4gICAgICAgIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IFN1cHBvc2l0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNTdHJpbmcgPSBsYWJlbHMucmVkdWNlKChsYWJlbHNTdHJpbmcsIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgIGxhYmVsc1N0cmluZyA9IChsYWJlbHNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9LCAke2xhYmVsU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gbGFiZWxzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbGFiZWxzU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zU3RyaW5nID0gc3VwcG9zaXRpb25zLnJlZHVjZSgoc3VwcG9zaXRpb25zU3RyaW5nLCBzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdXBwb3NpdGlvbnNTdHJpbmcgPSAoc3VwcG9zaXRpb25zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdXBwb3NpdGlvbnNTdHJpbmd9LCAke3N1cHBvc2l0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc1N0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbikge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uc1N0cmluZyA9IHN1cHBvc2l0aW9uc1N0cmluZ0Zyb21TdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zKSxcbiAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscyk7XG5cbiAgaWYgKGxhYmVsc1N0cmluZyAhPT0gbnVsbCkge1xuICAgIHN0cmluZyA9IChzdXBwb3NpdGlvbnNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30gOjogWyR7c3VwcG9zaXRpb25zU3RyaW5nfV0gLi4uICR7ZGVkdWN0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9IDo6ICR7ZGVkdWN0aW9uU3RyaW5nfWA7XG4gIH0gZWxzZSB7XG4gICAgc3RyaW5nID0gKHN1cHBvc2l0aW9uc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgYFske3N1cHBvc2l0aW9uc1N0cmluZ31dIC4uLiAke2RlZHVjdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgZGVkdWN0aW9uU3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsIlRvcExldmVsQXNzZXJ0aW9uIiwibGFiZWxzRnJvbUxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNTdHJpbmdGcm9tU3VwcG9zaXRpb25zIiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwicmV2ZXJzZSIsImNvcnJlbGF0ZSIsImJhY2t3YXJkc0V2ZXJ5IiwiY29udGV4dCIsIm5vZGUiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsInNpZ25hdHVyZSIsImh5cG90aGVzZXMiLCJnZXRDb250ZXh0IiwiZ2V0Tm9kZSIsImdldFN0cmluZyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0SHlwb3RoZXNlcyIsInNldEh5cG90aGVzZXMiLCJnZXRTdGF0ZW1lbnQiLCJpc0h5cG90aGV0aWNhbCIsImh5cG90aGVzZXNMZW5ndGgiLCJsZW5ndGgiLCJoeXBvdGhldGljYWwiLCJpc1VuY29uZGl0aW9uYWwiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJ1bmNvbmRpdGlvbmFsIiwiZ2V0U3VwcG9zaXRpb24iLCJpbmRleCIsInN1cHBvc2l0aW9uIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidmVyaWZ5IiwidmVyaWZpZXMiLCJsYWJlbHNWZXJpZnkiLCJ2ZXJpZnlMYWJlbHMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tTm90aGluZyIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsInZlcmlmeVN1cHBvc2l0aW9ucyIsImRlZHVjdGlvblZlcmlmaWVzIiwidmVyaWZ5RGVkdWN0aW9uIiwicHJvb2ZWZXJpZmllcyIsInZlcmlmeVByb29mIiwiZXZlcnkiLCJuYW1lT25seSIsImxhYmVsVmVyaWZpZXMiLCJzdXBwb3NpdGlvblZlcmlmaWVzIiwidmVyaWZ5U3VwcG9zaXRpb24iLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImNvcnJlbGF0ZUh5cG90aGVzZXMiLCJoeXBvdGhlc2VzQ29ycmVsYXRlIiwic3RlcHMiLCJnZXRTdGVwcyIsInRvcExldmVsQXNzZXJ0aW9uU3RyaW5nIiwidHJhY2UiLCJoeXBvdGhlc2lzIiwic3RlcCIsImh5cG90aGVzZXNFcXVhbFRvU3RlcCIsImlzRXF1YWxUb1N0ZXAiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbiIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwic3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVzIiwic3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyIsInVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsInVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbiIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RlcHNPclN1YnByb29mc1VuaWZpZXNXaXRoU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic2lnbmF0dXJlSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tTm9kZSIsInRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInByb29mTm9kZSIsImdldFByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwiZGVkdWN0aW9uTm9kZSIsImdldERlZHVjdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsInNpZ25hdHVyZU5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwiUHJvb2YiLCJvbnRvbG9neSIsImZyb21Qcm9vZk5vZGUiLCJMYWJlbCIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJTaWduYXR1cmUiLCJmcm9tU2lnbmF0dXJlTm9kZSIsIkRlZHVjdGlvbiIsImZyb21EZWR1Y3Rpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwibGFiZWxzU3RyaW5nIiwicmVkdWNlIiwibGFiZWxTdHJpbmciLCJzdXBwb3NpdGlvbnNTdHJpbmciLCJzdXBwb3NpdGlvblN0cmluZyIsImRlZHVjdGlvblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBdVhnQkE7ZUFBQUE7OztlQWxXS0M7O1FBMlVMQztlQUFBQTs7UUF5Q0FDO2VBQUFBOztRQWhEQUM7ZUFBQUE7O1FBa0JBQztlQUFBQTs7UUEwREFDO2VBQUFBOztRQXZDQUM7ZUFBQUE7O1FBeUJBQztlQUFBQTs7O3lCQXJa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