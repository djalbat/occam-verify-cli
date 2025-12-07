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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vbnRvbG9neS90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBvbnRvbG9neSBmcm9tIFwiLi4vb250b2xvZ3lcIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIGh5cG90aGVzZXNGcm9tSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2pzb25cIjtcblxuY29uc3QgeyBleHRyYWN0LCByZXZlcnNlLCBjb3JyZWxhdGUsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMubm9kZSA9IG5vZGU7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICAgIHRoaXMuaHlwb3RoZXNlcyA9IGh5cG90aGVzZXM7XG4gIH1cblxuICBnZXRDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XG4gIH1cblxuICBnZXROb2RlKCkge1xuICAgIHJldHVybiB0aGlzLm5vZGU7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0SHlwb3RoZXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5oeXBvdGhlc2VzO1xuICB9XG5cbiAgc2V0SHlwb3RoZXNlcyhoeXBvdGhlc2VzKSB7XG4gICAgdGhpcy5oeXBvdGhlc2VzID0gaHlwb3RoZXNlcztcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpOyB9XG5cbiAgaXNIeXBvdGhldGljYWwoKSB7XG4gICAgY29uc3QgaHlwb3RoZXNlc0xlbmd0aCA9IHRoaXMuaHlwb3RoZXNlcy5sZW5ndGgsXG4gICAgICAgICAgaHlwb3RoZXRpY2FsID0gKGh5cG90aGVzZXNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBoeXBvdGhldGljYWw7XG4gIH1cblxuICBpc1VuY29uZGl0aW9uYWwoKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zTGVuZ3RoID0gdGhpcy5zdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHVuY29uZGl0aW9uYWwgPSAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiB1bmNvbmRpdGlvbmFsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb24oaW5kZXgpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMuc3VwcG9zaXRpb25zW2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tQ29udGV4dCh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyhjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmeSkge1xuICAgICAgICBjb25zdCBkZWR1Y3Rpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5RGVkdWN0aW9uKGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVByb29mKGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZXMpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IHRydWUsXG4gICAgICAgICAgICBsYWJlbFZlcmlmaWVzID0gbGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5U3VwcG9zaXRpb25zKGNvbnRleHQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSB0aGlzLnZlcmlmeVN1cHBvc2l0aW9uKHN1cHBvc2l0aW9uLCBjb250ZXh0KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zVmVyaWZ5O1xuICB9XG5cbiAgdmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCkge1xuICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvblZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5UHJvb2YoY29udGV4dCkge1xuICAgIGxldCBwcm9vZlZlcmlmaWVzO1xuXG4gICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgIHByb29mVmVyaWZpZXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5kZWR1Y3Rpb24sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlZlcmlmaWVzO1xuICB9XG5cbiAgY29ycmVsYXRlSHlwb3RoZXNlcyhjb250ZXh0KSB7XG4gICAgbGV0IGh5cG90aGVzZXNDb3JyZWxhdGU7XG5cbiAgICBjb25zdCBoeXBvdGhldGljYWwgPSB0aGlzLmlzSHlwb3RoZXRpY2FsKCk7XG5cbiAgICBpZiAoaHlwb3RoZXRpY2FsKSB7XG4gICAgICBjb25zdCBzdGVwcyA9IGNvbnRleHQuZ2V0U3RlcHMoKSxcbiAgICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uU3RyaW5nID0gdGhpcy5zdHJpbmc7ICAvLy9cblxuICAgICAgY29udGV4dC50cmFjZShgQ29ycmVsYXRpbmcgdGhlIGh5cG90aGVzZXMgb2YgdGhlICcke3RvcExldmVsQXNzZXJ0aW9uU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuLi5gLCB0aGlzLm5vZGUpO1xuXG4gICAgICBoeXBvdGhlc2VzQ29ycmVsYXRlID0gY29ycmVsYXRlKHRoaXMuaHlwb3RoZXNlcywgc3RlcHMsIChoeXBvdGhlc2lzLCBzdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IGh5cG90aGVzZXNFcXVhbFRvU3RlcCA9IGh5cG90aGVzaXMuaXNFcXVhbFRvU3RlcChzdGVwLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAoaHlwb3RoZXNlc0VxdWFsVG9TdGVwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaHlwb3RoZXNlc0NvcnJlbGF0ZSkge1xuICAgICAgICBjb250ZXh0LmRlYnVnKGAuLi5jb3JyZWxhdGVkIHRoZSBoeXBvdGhlc2VzIG9mIHRoZSAnJHt0b3BMZXZlbEFzc2VydGlvblN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLmAsIHRoaXMubm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGh5cG90aGVzZXNDb3JyZWxhdGUgPSB0cnVlXG4gICAgfVxuXG4gICAgcmV0dXJuIGh5cG90aGVzZXNDb3JyZWxhdGU7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb247XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3QgaHlwb3RoZXNlc0NvcnJlbGF0ZSA9IHRoaXMuY29ycmVsYXRlSHlwb3RoZXNlcyhjb250ZXh0KTtcblxuICAgIGlmIChoeXBvdGhlc2VzQ29ycmVsYXRlKSB7XG4gICAgICBjb25zdCBnZW5lcmFsQ29udGV4dCA9IHRoaXMuY29udGV4dCwgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMgPSB0aGlzLnVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMpIHtcbiAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgICBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnkgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnk7XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24oc3RlcHNPclN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN1cHBvc2l0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IGV4dHJhY3Qoc3RlcHNPclN1YnByb29mcywgKHN0ZXBPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mVW5pZmllcyA9IHN1cHBvc2l0aW9uLnVuaWZ5U3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN0ZXBPclN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSByZXZlcnNlKHN0ZXBzT3JTdWJwcm9vZnMpOyAvLy9cblxuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMgPSBiYWNrd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24gPSB0aGlzLnVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbihzdGVwc09yU3VicHJvb2ZzLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHRoaXMuc2lnbmF0dXJlKSxcbiAgICAgICAgICBoeXBvdGhlc2VzSlNPTiA9IGh5cG90aGVzZXNUb0h5cG90aGVzZXNKU09OKHRoaXMuaHlwb3RoZXNlcyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlSlNPTiwgIC8vL1xuICAgICAgICAgIGh5cG90aGVzZXMgPSBoeXBvdGhlc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzaWduYXR1cmUsXG4gICAgICAgICAgICBoeXBvdGhlc2VzXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBjb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbUpTT04oanNvbiwgY29udGV4dCksXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IGh5cG90aGVzZXNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBub2RlID0gbnVsbCxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBub2RlLCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUsIGh5cG90aGVzZXMpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKENsYXNzLCBub2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcHJvb2ZOb2RlID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldFByb29mTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgaHlwb3RoZXNlcyA9IFtdLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoY29udGV4dCwgbm9kZSwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlLCBoeXBvdGhlc2VzKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBvbnRvbG9neSxcbiAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBvbnRvbG9neSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCkge1xuICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBvbnRvbG9neTtcblxuICAgIHNpZ25hdHVyZSA9IFNpZ25hdHVyZS5mcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBjb250ZXh0KTtcbiAgfVxuXG4gIHJldHVybiBzaWduYXR1cmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBvbnRvbG9neSxcbiAgICAgICAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IG9udG9sb2d5LFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgY29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVscy5yZWR1Y2UoKGxhYmVsc1N0cmluZywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgbGFiZWxzU3RyaW5nID0gKGxhYmVsc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30sICR7bGFiZWxTdHJpbmd9YDtcblxuICAgIHJldHVybiBsYWJlbHNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBsYWJlbHNTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNTdHJpbmdGcm9tU3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucykge1xuICBjb25zdCBzdXBwb3NpdGlvbnNTdHJpbmcgPSBzdXBwb3NpdGlvbnMucmVkdWNlKChzdXBwb3NpdGlvbnNTdHJpbmcsIHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25TdHJpbmcgPSBzdXBwb3NpdGlvbi5nZXRTdHJpbmcoKTtcblxuICAgIHN1cHBvc2l0aW9uc1N0cmluZyA9IChzdXBwb3NpdGlvbnNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3N1cHBvc2l0aW9uc1N0cmluZ30sICR7c3VwcG9zaXRpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvc2l0aW9uU3RyaW5nOyAgLy8vXG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSB7XG4gIGxldCBzdHJpbmc7XG5cbiAgY29uc3Qgc3VwcG9zaXRpb25zU3RyaW5nID0gc3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMpLFxuICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKTtcblxuICBpZiAobGFiZWxzU3RyaW5nICE9PSBudWxsKSB7XG4gICAgc3RyaW5nID0gKHN1cHBvc2l0aW9uc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgYCR7bGFiZWxzU3RyaW5nfSA6OiBbJHtzdXBwb3NpdGlvbnNTdHJpbmd9XSAuLi4gJHtkZWR1Y3Rpb25TdHJpbmd9YCA6XG4gICAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30gOjogJHtkZWR1Y3Rpb25TdHJpbmd9YDtcbiAgfSBlbHNlIHtcbiAgICBzdHJpbmcgPSAoc3VwcG9zaXRpb25zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICBgWyR7c3VwcG9zaXRpb25zU3RyaW5nfV0gLi4uICR7ZGVkdWN0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmc7XG4gIH1cblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJsYWJlbHNGcm9tTGFiZWxOb2RlcyIsImxhYmVsc1N0cmluZ0Zyb21MYWJlbHMiLCJwcm9vZkZyb21Qcm9vZk5vZGUiLCJzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZSIsInN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24iLCJzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uc1N0cmluZ0Zyb21TdXBwb3NpdGlvbnMiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwiYmFja3dhcmRzRXZlcnkiLCJjb250ZXh0Iiwibm9kZSIsInN0cmluZyIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2lnbmF0dXJlIiwiaHlwb3RoZXNlcyIsImdldENvbnRleHQiLCJnZXROb2RlIiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0RGVkdWN0aW9uIiwiZ2V0UHJvb2YiLCJnZXRTaWduYXR1cmUiLCJnZXRIeXBvdGhlc2VzIiwic2V0SHlwb3RoZXNlcyIsImdldFN0YXRlbWVudCIsImlzSHlwb3RoZXRpY2FsIiwiaHlwb3RoZXNlc0xlbmd0aCIsImxlbmd0aCIsImh5cG90aGV0aWNhbCIsImlzVW5jb25kaXRpb25hbCIsInN1cHBvc2l0aW9uc0xlbmd0aCIsInVuY29uZGl0aW9uYWwiLCJnZXRTdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb24iLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImxhYmVsc1ZlcmlmeSIsInZlcmlmeUxhYmVscyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21Db250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJldmVyeSIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllcyIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJjb3JyZWxhdGVIeXBvdGhlc2VzIiwiaHlwb3RoZXNlc0NvcnJlbGF0ZSIsInN0ZXBzIiwiZ2V0U3RlcHMiLCJ0b3BMZXZlbEFzc2VydGlvblN0cmluZyIsInRyYWNlIiwiaHlwb3RoZXNpcyIsInN0ZXAiLCJoeXBvdGhlc2VzRXF1YWxUb1N0ZXAiLCJpc0VxdWFsVG9TdGVwIiwiZGVidWciLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJzdGF0ZW1lbnQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwic3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24iLCJzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic2lnbmF0dXJlSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsImh5cG90aGVzZXNKU09OIiwiaHlwb3RoZXNlc1RvSHlwb3RoZXNlc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInNpZ25hdHVyZUZyb21KU09OIiwiaHlwb3RoZXNlc0Zyb21KU09OIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tTm9kZSIsInRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInByb29mTm9kZSIsImdldFByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwiZGVkdWN0aW9uTm9kZSIsImdldERlZHVjdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsInNpZ25hdHVyZU5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwiUHJvb2YiLCJvbnRvbG9neSIsImZyb21Qcm9vZk5vZGUiLCJMYWJlbCIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJTaWduYXR1cmUiLCJmcm9tU2lnbmF0dXJlTm9kZSIsIkRlZHVjdGlvbiIsImZyb21EZWR1Y3Rpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwibGFiZWxzU3RyaW5nIiwicmVkdWNlIiwibGFiZWxTdHJpbmciLCJzdXBwb3NpdGlvbnNTdHJpbmciLCJzdXBwb3NpdGlvblN0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