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
var reverse = _necessary.arrayUtilities.reverse, extract = _necessary.arrayUtilities.extract, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var TopLevelAssertion = /*#__PURE__*/ function() {
    function TopLevelAssertion(fileContext, string, labels, suppositions, deduction, proof, signature) {
        _class_call_check(this, TopLevelAssertion);
        this.fileContext = fileContext;
        this.string = string;
        this.labels = labels;
        this.suppositions = suppositions;
        this.deduction = deduction;
        this.proof = proof;
        this.signature = signature;
    }
    _create_class(TopLevelAssertion, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
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
            key: "getStatement",
            value: function getStatement() {
                return this.deduction.getStatement();
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
                    var localContext = _local.default.fromFileContext(this.fileContext), context = localContext, suppositionsVerify = this.suppositions.every(function(supposition) {
                        var suppositionVerifies = supposition.verify(context);
                        if (suppositionVerifies) {
                            return true;
                        }
                    });
                    if (suppositionsVerify) {
                        var deductionVerifies = this.deduction.verify(context);
                        if (deductionVerifies) {
                            if (this.proof === null) {
                                verifies = true;
                            } else {
                                var substitutions = _substitutions.default.fromNothing(), proofVerifies = this.proof.verify(substitutions, this.deduction, context);
                                verifies = proofVerifies; ///
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
            key: "unifyStatementWithDeduction",
            value: function unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext) {
                var deductionUnifies;
                var statementUnifies = this.deduction.unifyStatement(statement, substitutions, generalContext, specificContext); ///
                deductionUnifies = statementUnifies; ///
                return deductionUnifies;
            }
        },
        {
            key: "unifyStatementAndStepsOrSubproofs",
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context) {
                var statementAndStepsOrSubproofsUnify = false;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context, statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
                if (statementUnifiesWithDeduction) {
                    var stepsOrSubproofsUnifyWithSuppositions = this.unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, generalContext, specificContext);
                    if (stepsOrSubproofsUnifyWithSuppositions) {
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
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), signatureJSON = (0, _json.signatureToSignatureJSON)(this.signature), labels = labelsJSON, deduction = deductionJSON, suppositions = suppositionsJSON, signature = signatureJSON, json = {
                    labels: labels,
                    deduction: deduction,
                    suppositions: suppositions,
                    signature: signature
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), deduction = (0, _json.deductionFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), signature = (0, _json.signatureFromJSON)(json, fileContext), proof = null, string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction), topLevelAssertion = new Class(fileContext, string, labels, suppositions, deduction, proof, signature);
                return topLevelAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, fileContext) {
                var topLevelAssertionNode = node, proofNode = topLevelAssertionNode.getProofNode(), labelNodes = topLevelAssertionNode.getLabelNodes(), deductionNode = topLevelAssertionNode.getDeductionNode(), suppositionNodes = topLevelAssertionNode.getSuppositionNodes(), signatureNode = topLevelAssertionNode.getSignatureNode(), proof = proofFromProofNode(proofNode, fileContext), labels = labelsFromLabelNodes(labelNodes, fileContext), deduction = deductionFromDeductionNode(deductionNode, fileContext), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, fileContext), signature = signatureFromSignatureNode(signatureNode, fileContext), string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction), topLevelAssertion = new Class(fileContext, string, labels, suppositions, deduction, proof, signature);
                return topLevelAssertion;
            }
        }
    ]);
    return TopLevelAssertion;
}();
function proofFromProofNode(proofNode, fileContext) {
    var Proof = _dom.default.Proof, proof = Proof.fromProofNode(proofNode, fileContext);
    return proof;
}
function labelsFromLabelNodes(labelNodes, fileContext) {
    var Label = _dom.default.Label, labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, fileContext);
        return label;
    });
    return labels;
}
function signatureFromSignatureNode(signatureNode, fileContext) {
    var signature = null;
    if (signatureNode !== null) {
        var Signature = _dom.default.Signature;
        signature = Signature.fromSignatureNode(signatureNode, fileContext);
    }
    return signature;
}
function deductionFromDeductionNode(deductionNode, fileContext) {
    var Deduction = _dom.default.Deduction, deduction = Deduction.fromDeductionNode(deductionNode, fileContext);
    return deduction;
}
function suppositionsFromSuppositionNodes(suppositionNodes, fileContext) {
    var Supposition = _dom.default.Supposition, suppositions = suppositionNodes.map(function(suppositionNode) {
        var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
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
    var suppositionsString = suppositionsStringFromSuppositions(suppositions), deductionString = deduction.getString(), labelsString = labelsStringFromLabels(labels), string = labelsString === null ? deductionString : "".concat(labelsString, " :: [").concat(suppositionsString, "] ... ").concat(deductionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcmV2ZXJzZSwgZXh0cmFjdCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7IH1cblxuICBnZXRTdXBwb3NpdGlvbihpbmRleCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gdGhpcy5zdXBwb3NpdGlvbnNbaW5kZXhdIHx8IG51bGw7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVzID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmeSkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZ5ID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZnkpIHtcbiAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZlcmlmaWVzID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmRlZHVjdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVzID0gcHJvb2ZWZXJpZmllczsgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVzO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWZXJpZmllcyA9IGxhYmVsLnZlcmlmeShuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmeTtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgZGVkdWN0aW9uVW5pZmllcztcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICBkZWR1Y3Rpb25VbmlmaWVzID0gc3RhdGVtZW50VW5pZmllczsgLy8vXG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVW5pZmllcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mcyhzdGF0ZW1lbnQsIHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24pIHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMgPSB0aGlzLnVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb25zKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICBpZiAoc3Vic3RpdHV0aW9uc1Jlc29sdmVkKSB7XG4gICAgICAgICAgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnk7XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24oc3RlcHNPclN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc3BlY2lmaWNDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSA9IHN1cHBvc2l0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5KSB7XG4gICAgICBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZiA9IGV4dHJhY3Qoc3RlcHNPclN1YnByb29mcywgKHN0ZXBPclN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mVW5pZmllcyA9IHN1cHBvc2l0aW9uLnVuaWZ5U3RlcE9yU3VicHJvb2Yoc3RlcE9yU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChzdGVwT3JTdWJwcm9vZlVuaWZpZXMpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN0ZXBPclN1YnByb29mICE9PSBudWxsKSB7XG4gICAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSByZXZlcnNlKHN0ZXBzT3JTdWJwcm9vZnMpOyAvLy9cblxuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMgPSBiYWNrd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24gPSB0aGlzLnVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbihzdGVwc09yU3VicHJvb2ZzLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzaWduYXR1cmVKU09OID0gc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OKHRoaXMuc2lnbmF0dXJlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVKU09OLFxuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzaWduYXR1cmUsXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZiwgc2lnbmF0dXJlKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB0b3BMZXZlbEFzc2VydGlvbk5vZGUgPSBub2RlLCAvLy9cbiAgICAgICAgICBwcm9vZk5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0UHJvb2ZOb2RlKCksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRMYWJlbE5vZGVzKCksXG4gICAgICAgICAgZGVkdWN0aW9uTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXREZWR1Y3Rpb25Ob2RlKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRTdXBwb3NpdGlvbk5vZGVzKCksXG4gICAgICAgICAgc2lnbmF0dXJlTm9kZSA9IHRvcExldmVsQXNzZXJ0aW9uTm9kZS5nZXRTaWduYXR1cmVOb2RlKCksXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvb2YgfSA9IGRvbSxcbiAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGRvbSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGxldCBzaWduYXR1cmUgPSBudWxsO1xuXG4gIGlmIChzaWduYXR1cmVOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgeyBTaWduYXR1cmUgfSA9IGRvbTtcblxuICAgIHNpZ25hdHVyZSA9IFNpZ25hdHVyZS5mcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBmaWxlQ29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gc2lnbmF0dXJlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGRvbSxcbiAgICAgICAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZG9tLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNTdHJpbmcgPSBsYWJlbHMucmVkdWNlKChsYWJlbHNTdHJpbmcsIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgIGxhYmVsc1N0cmluZyA9IChsYWJlbHNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9LCAke2xhYmVsU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gbGFiZWxzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbGFiZWxzU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zU3RyaW5nID0gc3VwcG9zaXRpb25zLnJlZHVjZSgoc3VwcG9zaXRpb25zU3RyaW5nLCBzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdXBwb3NpdGlvbnNTdHJpbmcgPSAoc3VwcG9zaXRpb25zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdXBwb3NpdGlvbnNTdHJpbmd9LCAke3N1cHBvc2l0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc1N0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbikge1xuICBjb25zdCBzdXBwb3NpdGlvbnNTdHJpbmcgPSBzdXBwb3NpdGlvbnNTdHJpbmdGcm9tU3VwcG9zaXRpb25zKHN1cHBvc2l0aW9ucyksXG4gICAgICAgIGRlZHVjdGlvblN0cmluZyA9IGRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICBzdHJpbmcgPSAobGFiZWxzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgZGVkdWN0aW9uU3RyaW5nIDogLy8vXG4gICAgICAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30gOjogWyR7c3VwcG9zaXRpb25zU3RyaW5nfV0gLi4uICR7ZGVkdWN0aW9uU3RyaW5nfWA7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsIlRvcExldmVsQXNzZXJ0aW9uIiwibGFiZWxzRnJvbUxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNTdHJpbmdGcm9tU3VwcG9zaXRpb25zIiwicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImJhY2t3YXJkc0V2ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsInNpZ25hdHVyZSIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0RGVkdWN0aW9uIiwiZ2V0UHJvb2YiLCJnZXRTaWduYXR1cmUiLCJnZXRTdGF0ZW1lbnQiLCJnZXRTdXBwb3NpdGlvbiIsImluZGV4Iiwic3VwcG9zaXRpb24iLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ2ZXJpZnkiLCJ2ZXJpZmllcyIsImxhYmVsc1ZlcmlmeSIsInZlcmlmeUxhYmVscyIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImNvbnRleHQiLCJzdXBwb3NpdGlvbnNWZXJpZnkiLCJldmVyeSIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJkZWR1Y3Rpb25WZXJpZmllcyIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJwcm9vZlZlcmlmaWVzIiwibmFtZU9ubHkiLCJsYWJlbFZlcmlmaWVzIiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwic3RhdGVtZW50IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJkZWR1Y3Rpb25VbmlmaWVzIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwic3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSIsInN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwic3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyIsInVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsInVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbiIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdGVwT3JTdWJwcm9vZiIsInN0ZXBPclN1YnByb29mVW5pZmllcyIsInVuaWZ5U3RlcE9yU3VicHJvb2YiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzaWduYXR1cmVKU09OIiwic2lnbmF0dXJlVG9TaWduYXR1cmVKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsImRlZHVjdGlvbkZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzaWduYXR1cmVGcm9tSlNPTiIsInRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU5vZGUiLCJub2RlIiwidG9wTGV2ZWxBc3NlcnRpb25Ob2RlIiwicHJvb2ZOb2RlIiwiZ2V0UHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImdldExhYmVsTm9kZXMiLCJkZWR1Y3Rpb25Ob2RlIiwiZ2V0RGVkdWN0aW9uTm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJnZXRTdXBwb3NpdGlvbk5vZGVzIiwic2lnbmF0dXJlTm9kZSIsImdldFNpZ25hdHVyZU5vZGUiLCJQcm9vZiIsImRvbSIsImZyb21Qcm9vZk5vZGUiLCJMYWJlbCIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJTaWduYXR1cmUiLCJmcm9tU2lnbmF0dXJlTm9kZSIsIkRlZHVjdGlvbiIsImZyb21EZWR1Y3Rpb25Ob2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwibGFiZWxzU3RyaW5nIiwicmVkdWNlIiwibGFiZWxTdHJpbmciLCJzdXBwb3NpdGlvbnNTdHJpbmciLCJzdXBwb3NpdGlvblN0cmluZyIsImRlZHVjdGlvblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBc1JnQkE7ZUFBQUE7OztlQW5RS0M7O1FBNE9MQztlQUFBQTs7UUF5Q0FDO2VBQUFBOztRQWhEQUM7ZUFBQUE7O1FBa0JBQztlQUFBQTs7UUEwREFDO2VBQUFBOztRQXZDQUM7ZUFBQUE7O1FBeUJBQztlQUFBQTs7O3lCQXBUZTswREFFZjs0REFDUztvRUFDQztvQkFTcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0MsSUFBUUMsVUFBcUNDLHlCQUFjLENBQW5ERCxTQUFTRSxVQUE0QkQseUJBQWMsQ0FBMUNDLFNBQVNDLGlCQUFtQkYseUJBQWMsQ0FBakNFO0FBRVgsSUFBQSxBQUFNWCxrQ0FBTjthQUFNQSxrQkFDUFksV0FBVyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxTQUFTLEVBQUVDLEtBQUssRUFBRUMsU0FBUztnQ0FEL0RsQjtRQUVqQixJQUFJLENBQUNZ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