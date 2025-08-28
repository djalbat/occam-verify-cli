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
    function TopLevelAssertion(context1, string, labels, suppositions, deduction, proof, signature) {
        _class_call_check(this, TopLevelAssertion);
        this.context = context1;
        this.string = string;
        this.labels = labels;
        this.suppositions = suppositions;
        this.deduction = deduction;
        this.proof = proof;
        this.signature = signature;
    }
    _create_class(TopLevelAssertion, [
        {
            key: "getContext",
            value: function getContext() {
                return this.context;
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
                    var suppositionsVerify = this.verifySuppositions(this.context);
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
            value: function verifySuppositions(context1) {
                var _this = this;
                var suppositionsVerify = this.suppositions.every(function(supposition) {
                    var suppositionVerifies = _this.verifySupposition(supposition, context1);
                    if (suppositionVerifies) {
                        return true;
                    }
                });
                return suppositionsVerify;
            }
        },
        {
            key: "verifySupposition",
            value: function verifySupposition(supposition, context1) {
                var suppositionVerifies = supposition.verify(context1);
                return suppositionVerifies;
            }
        },
        {
            key: "verifyDeduction",
            value: function verifyDeduction(context1) {
                var deductionVerifies = this.deduction.verify(context1);
                return deductionVerifies;
            }
        },
        {
            key: "verifyProof",
            value: function verifyProof(context1) {
                var proofVerifies;
                if (this.proof === null) {
                    proofVerifies = true;
                } else {
                    var substitutions = _substitutions.default.fromNothing();
                    proofVerifies = this.proof.verify(substitutions, this.deduction, context1);
                }
                return proofVerifies;
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
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context1) {
                var statementAndStepsOrSubproofsUnify = false;
                var generalContext = this.context, specificContext = context1, statementUnifiesWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
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
                var context1 = specificContext, suppositionUnifiesIndependently = supposition.unifyIndependently(substitutions, context1);
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
            value: function fromJSON(Class, json, context1) {
                var labels = (0, _json.labelsFromJSON)(json, context1), deduction = (0, _json.deductionFromJSON)(json, context1), suppositions = (0, _json.suppositionsFromJSON)(json, context1), signature = (0, _json.signatureFromJSON)(json, context1), proof = null, string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction), topLevelAssertion = new Class(context1, string, labels, suppositions, deduction, proof, signature);
                return topLevelAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, context1) {
                var topLevelAssertionNode = node, proofNode = topLevelAssertionNode.getProofNode(), labelNodes = topLevelAssertionNode.getLabelNodes(), deductionNode = topLevelAssertionNode.getDeductionNode(), suppositionNodes = topLevelAssertionNode.getSuppositionNodes(), signatureNode = topLevelAssertionNode.getSignatureNode(), proof = proofFromProofNode(proofNode, context1), labels = labelsFromLabelNodes(labelNodes, context1), deduction = deductionFromDeductionNode(deductionNode, context1), suppositions = suppositionsFromSuppositionNodes(suppositionNodes, context1), signature = signatureFromSignatureNode(signatureNode, context1), string = stringFromLabelsSuppositionsAndDeduction(labels, suppositions, deduction), topLevelAssertion = new Class(context1, string, labels, suppositions, deduction, proof, signature);
                return topLevelAssertion;
            }
        }
    ]);
    return TopLevelAssertion;
}();
function proofFromProofNode(proofNode, context1) {
    var Proof = _dom.default.Proof, proof = Proof.fromProofNode(proofNode, context1);
    return proof;
}
function labelsFromLabelNodes(labelNodes, context1) {
    var Label = _dom.default.Label, labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, context1);
        return label;
    });
    return labels;
}
function signatureFromSignatureNode(signatureNode, context1) {
    var signature = null;
    if (signatureNode !== null) {
        var Signature = _dom.default.Signature;
        signature = Signature.fromSignatureNode(signatureNode, context1);
    }
    return signature;
}
function deductionFromDeductionNode(deductionNode, context1) {
    var Deduction = _dom.default.Deduction, deduction = Deduction.fromDeductionNode(deductionNode, context1);
    return deduction;
}
function suppositionsFromSuppositionNodes(suppositionNodes, context1) {
    var Supposition = _dom.default.Supposition, suppositions = suppositionNodes.map(function(suppositionNode) {
        var supposition = Supposition.fromSuppositionNode(suppositionNode, context1);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcmV2ZXJzZSwgZXh0cmFjdCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0Q29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0RGVkdWN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZHVjdGlvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgZ2V0U2lnbmF0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25hdHVyZTtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpOyB9XG5cbiAgaXNVbmNvbmRpdGlvbmFsKCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc0xlbmd0aCA9IHRoaXMuc3VwcG9zaXRpb25zLmxlbmd0aCxcbiAgICAgICAgICB1bmNvbmRpdGlvbmFsID0gKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCk7XG5cbiAgICByZXR1cm4gdW5jb25kaXRpb25hbDtcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9uKGluZGV4KSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb24gPSB0aGlzLnN1cHBvc2l0aW9uc1tpbmRleF0gfHwgbnVsbDtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmeSA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZ5KSB7XG4gICAgICBjb25zdCBzdXBwb3NpdGlvbnNWZXJpZnkgPSB0aGlzLnZlcmlmeVN1cHBvc2l0aW9ucyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gdGhpcy52ZXJpZnlEZWR1Y3Rpb24oY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllcyA9IHRoaXMudmVyaWZ5UHJvb2YoY29udGV4dCk7XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllcykge1xuICAgICAgICAgICAgdmVyaWZpZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlTdXBwb3NpdGlvbnMoY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllcyA9IHRoaXMudmVyaWZ5U3VwcG9zaXRpb24oc3VwcG9zaXRpb24sIGNvbnRleHQpO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNWZXJpZnk7XG4gIH1cblxuICB2ZXJpZnlTdXBwb3NpdGlvbihzdXBwb3NpdGlvbiwgY29udGV4dCkge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZXMgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25WZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeURlZHVjdGlvbihjb250ZXh0KSB7XG4gICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZXMgPSB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICByZXR1cm4gZGVkdWN0aW9uVmVyaWZpZXM7XG4gIH1cblxuICB2ZXJpZnlQcm9vZihjb250ZXh0KSB7XG4gICAgbGV0IHByb29mVmVyaWZpZXM7XG5cbiAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgcHJvb2ZWZXJpZmllcyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgIHByb29mVmVyaWZpZXMgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmRlZHVjdGlvbiwgY29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mVmVyaWZpZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb247XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3QgZ2VuZXJhbENvbnRleHQgPSB0aGlzLmNvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVzV2l0aERlZHVjdGlvbikge1xuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyA9IHRoaXMudW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gc3Vic3RpdHV0aW9ucy5hcmVSZXNvbHZlZCgpO1xuXG4gICAgICAgIGlmIChzdWJzdGl0dXRpb25zUmVzb2x2ZWQpIHtcbiAgICAgICAgICBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZnkgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeTtcbiAgfVxuXG4gIHVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbihzdGVwc09yU3VicHJvb2ZzLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24gPSBmYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5ID0gc3VwcG9zaXRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkpIHtcbiAgICAgIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHN0ZXBPclN1YnByb29mID0gZXh0cmFjdChzdGVwc09yU3VicHJvb2ZzLCAoc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2ZVbmlmaWVzID0gc3VwcG9zaXRpb24udW5pZnlTdGVwT3JTdWJwcm9vZihzdGVwT3JTdWJwcm9vZiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHN0ZXBPclN1YnByb29mVW5pZmllcykge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAoc3RlcE9yU3VicHJvb2YgIT09IG51bGwpIHtcbiAgICAgICAgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgc3RlcHNPclN1YnByb29mcyA9IHJldmVyc2Uoc3RlcHNPclN1YnByb29mcyk7IC8vL1xuXG4gICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbiA9IHRoaXMudW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uKHN0ZXBzT3JTdWJwcm9vZnMsIHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHNpZ25hdHVyZUpTT04gPSBzaWduYXR1cmVUb1NpZ25hdHVyZUpTT04odGhpcy5zaWduYXR1cmUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUpTT04sXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGRlZHVjdGlvbixcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHNpZ25hdHVyZSxcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBjb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKENsYXNzLCBub2RlLCBjb250ZXh0KSB7XG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcHJvb2ZOb2RlID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldFByb29mTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUoZGVkdWN0aW9uTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgY29udGV4dCksXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgY29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbihsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhjb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgUHJvb2YgfSA9IGRvbSxcbiAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbUxhYmVsTm9kZXMobGFiZWxOb2RlcywgY29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBkb20sXG4gICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBjb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpIHtcbiAgbGV0IHNpZ25hdHVyZSA9IG51bGw7XG5cbiAgaWYgKHNpZ25hdHVyZU5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCB7IFNpZ25hdHVyZSB9ID0gZG9tO1xuXG4gICAgc2lnbmF0dXJlID0gU2lnbmF0dXJlLmZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGRvbSxcbiAgICAgICAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gIHJldHVybiBkZWR1Y3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdXBwb3NpdGlvbnNGcm9tU3VwcG9zaXRpb25Ob2RlcyhzdXBwb3NpdGlvbk5vZGVzLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGRvbSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNTdHJpbmcgPSBsYWJlbHMucmVkdWNlKChsYWJlbHNTdHJpbmcsIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgIGxhYmVsc1N0cmluZyA9IChsYWJlbHNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbFN0cmluZzogLy8vXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9LCAke2xhYmVsU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gbGFiZWxzU3RyaW5nO1xuICB9LCBudWxsKTtcblxuICByZXR1cm4gbGFiZWxzU3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMpIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zU3RyaW5nID0gc3VwcG9zaXRpb25zLnJlZHVjZSgoc3VwcG9zaXRpb25zU3RyaW5nLCBzdXBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBzdXBwb3NpdGlvbnNTdHJpbmcgPSAoc3VwcG9zaXRpb25zU3RyaW5nICE9PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtzdXBwb3NpdGlvbnNTdHJpbmd9LCAke3N1cHBvc2l0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3NpdGlvblN0cmluZzsgIC8vL1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9uc1N0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbikge1xuICBsZXQgc3RyaW5nO1xuXG4gIGNvbnN0IHN1cHBvc2l0aW9uc1N0cmluZyA9IHN1cHBvc2l0aW9uc1N0cmluZ0Zyb21TdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zKSxcbiAgICAgICAgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscyk7XG5cbiAgaWYgKGxhYmVsc1N0cmluZyAhPT0gbnVsbCkge1xuICAgIHN0cmluZyA9IChzdXBwb3NpdGlvbnNTdHJpbmcgIT09IG51bGwpID9cbiAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30gOjogWyR7c3VwcG9zaXRpb25zU3RyaW5nfV0gLi4uICR7ZGVkdWN0aW9uU3RyaW5nfWAgOlxuICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9IDo6ICR7ZGVkdWN0aW9uU3RyaW5nfWA7XG4gIH0gZWxzZSB7XG4gICAgc3RyaW5nID0gKHN1cHBvc2l0aW9uc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgYFske3N1cHBvc2l0aW9uc1N0cmluZ31dIC4uLiAke2RlZHVjdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgZGVkdWN0aW9uU3RyaW5nO1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cbiJdLCJuYW1lcyI6WyJkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZSIsIlRvcExldmVsQXNzZXJ0aW9uIiwibGFiZWxzRnJvbUxhYmVsTm9kZXMiLCJsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIiwicHJvb2ZGcm9tUHJvb2ZOb2RlIiwic2lnbmF0dXJlRnJvbVNpZ25hdHVyZU5vZGUiLCJzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uIiwic3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbnNTdHJpbmdGcm9tU3VwcG9zaXRpb25zIiwicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImJhY2t3YXJkc0V2ZXJ5IiwiY29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwic2lnbmF0dXJlIiwiZ2V0Q29udGV4dCIsImdldFN0cmluZyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0U3RhdGVtZW50IiwiaXNVbmNvbmRpdGlvbmFsIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwidW5jb25kaXRpb25hbCIsImdldFN1cHBvc2l0aW9uIiwiaW5kZXgiLCJzdXBwb3NpdGlvbiIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInZlcmlmeSIsInZlcmlmaWVzIiwibGFiZWxzVmVyaWZ5IiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zVmVyaWZ5IiwidmVyaWZ5U3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlEZWR1Y3Rpb24iLCJwcm9vZlZlcmlmaWVzIiwidmVyaWZ5UHJvb2YiLCJldmVyeSIsIm5hbWVPbmx5IiwibGFiZWxWZXJpZmllcyIsInN1cHBvc2l0aW9uVmVyaWZpZXMiLCJ2ZXJpZnlTdXBwb3NpdGlvbiIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJzdGF0ZW1lbnQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwic3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24iLCJzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic2lnbmF0dXJlSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwibGFiZWxzRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZyb21Ob2RlIiwibm9kZSIsInRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInByb29mTm9kZSIsImdldFByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwiZGVkdWN0aW9uTm9kZSIsImdldERlZHVjdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsInNpZ25hdHVyZU5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwiUHJvb2YiLCJkb20iLCJmcm9tUHJvb2ZOb2RlIiwiTGFiZWwiLCJtYXAiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwiU2lnbmF0dXJlIiwiZnJvbVNpZ25hdHVyZU5vZGUiLCJEZWR1Y3Rpb24iLCJmcm9tRGVkdWN0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsImxhYmVsc1N0cmluZyIsInJlZHVjZSIsImxhYmVsU3RyaW5nIiwic3VwcG9zaXRpb25zU3RyaW5nIiwic3VwcG9zaXRpb25TdHJpbmciLCJkZWR1Y3Rpb25TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQXdUZ0JBO2VBQUFBOzs7ZUF0U0tDOztRQStRTEM7ZUFBQUE7O1FBeUNBQztlQUFBQTs7UUFoREFDO2VBQUFBOztRQWtCQUM7ZUFBQUE7O1FBMERBQztlQUFBQTs7UUF2Q0FDO2VBQUFBOztRQXlCQUM7ZUFBQUE7Ozt5QkF0VmU7MERBRWY7b0VBQ1U7b0JBU3FCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQVFDLFVBQXFDQyx5QkFBYyxDQUFuREQsU0FBU0UsVUFBNEJELHlCQUFjLENBQTFDQyxTQUFTQyxpQkFBbUJGLHlCQUFjLENBQWpDRTtBQUVYLElBQUEsQUFBTVgsa0NBQU47YUFBTUEsa0JBQ1BZLFFBQU8sRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFlBQVksRUFBRUMsU0FBUyxFQUFFQyxLQUFLLEVBQUVDLFNBQVM7Z0NBRDNEbEI7UUFFakIsSUFBSSxDQUFDWSxPQUFPLEdBQUdBO1FBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxZQUFZLEdBQUdBO1FBQ3BCLElBQUksQ0FBQ0MsU0FBUyxHQUFHQTtRQUNqQixJQUFJLENBQUNDLEtBQUssR0FBR0E7UUFDYixJQUFJLENBQUNDLFNBQVMsR0FBR0E7O2tCQVJBbEI7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