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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzaWduYXR1cmVGcm9tSlNPTixcbiAgICAgICAgIGxhYmVsc1RvTGFiZWxzSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc0Zyb21KU09OLFxuICAgICAgICAgZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OLFxuICAgICAgICAgc2lnbmF0dXJlVG9TaWduYXR1cmVKU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcmV2ZXJzZSwgZXh0cmFjdCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICAgIHRoaXMuc2lnbmF0dXJlID0gc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTaWduYXR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2lnbmF0dXJlO1xuICB9XG5cbiAgZ2V0U3RhdGVtZW50KCkgeyByZXR1cm4gdGhpcy5kZWR1Y3Rpb24uZ2V0U3RhdGVtZW50KCk7IH1cblxuICBpc1VuY29uZGl0aW9uYWwoKSB7XG4gICAgY29uc3Qgc3VwcG9zaXRpb25zTGVuZ3RoID0gdGhpcy5zdXBwb3NpdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIHVuY29uZGl0aW9uYWwgPSAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKTtcblxuICAgIHJldHVybiB1bmNvbmRpdGlvbmFsO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb24oaW5kZXgpIHtcbiAgICBjb25zdCBzdXBwb3NpdGlvbiA9IHRoaXMuc3VwcG9zaXRpb25zW2luZGV4XSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllcyA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZ5ID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgIGlmIChsYWJlbHNWZXJpZnkpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmeSA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVzID0gc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZ5KSB7XG4gICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllcykge1xuICAgICAgICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJpZmllcyA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICAgICAgICBwcm9vZlZlcmlmaWVzID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5kZWR1Y3Rpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB2ZXJpZmllcyA9IHByb29mVmVyaWZpZXM7IC8vL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllcztcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHNWZXJpZnkgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVmVyaWZpZXMgPSBsYWJlbC52ZXJpZnkobmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWZXJpZmllcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbHNWZXJpZnk7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVzID0gdGhpcy5kZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXMpIHtcbiAgICAgIHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb247XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllc1dpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uKSB7XG4gICAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb25zID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zKHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgaWYgKHN1YnN0aXR1dGlvbnNSZXNvbHZlZCkge1xuICAgICAgICAgIHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZ5O1xuICB9XG5cbiAgdW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uKHN0ZXBzT3JTdWJwcm9vZnMsIHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uVW5pZmllc0luZGVwZW5kZW50bHkgPSBzdXBwb3NpdGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVzSW5kZXBlbmRlbnRseSkge1xuICAgICAgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RlcE9yU3VicHJvb2YgPSBleHRyYWN0KHN0ZXBzT3JTdWJwcm9vZnMsIChzdGVwT3JTdWJwcm9vZikgPT4ge1xuICAgICAgICBjb25zdCBzdGVwT3JTdWJwcm9vZlVuaWZpZXMgPSBzdXBwb3NpdGlvbi51bmlmeVN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcE9yU3VicHJvb2ZVbmlmaWVzKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChzdGVwT3JTdWJwcm9vZiAhPT0gbnVsbCkge1xuICAgICAgICBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb247XG4gIH1cblxuICB1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zKHN0ZXBzT3JTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBzdGVwc09yU3VicHJvb2ZzID0gcmV2ZXJzZShzdGVwc09yU3VicHJvb2ZzKTsgLy8vXG5cbiAgICBjb25zdCBzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb25zID0gYmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3Qgc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9uID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24oc3RlcHNPclN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcHNPclN1YnByb29mc1VuaWZ5V2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnM7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgZGVkdWN0aW9uSlNPTiA9IGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTih0aGlzLmRlZHVjdGlvbiksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc2lnbmF0dXJlSlNPTiA9IHNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTih0aGlzLnNpZ25hdHVyZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc2lnbmF0dXJlID0gc2lnbmF0dXJlSlNPTixcbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzaWduYXR1cmUgPSBzaWduYXR1cmVGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNTdXBwb3NpdGlvbnNBbmREZWR1Y3Rpb24obGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YsIHNpZ25hdHVyZSk7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgdG9wTGV2ZWxBc3NlcnRpb25Ob2RlID0gbm9kZSwgLy8vXG4gICAgICAgICAgcHJvb2ZOb2RlID0gdG9wTGV2ZWxBc3NlcnRpb25Ob2RlLmdldFByb29mTm9kZSgpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0TGFiZWxOb2RlcygpLFxuICAgICAgICAgIGRlZHVjdGlvbk5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0RGVkdWN0aW9uTm9kZSgpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0U3VwcG9zaXRpb25Ob2RlcygpLFxuICAgICAgICAgIHNpZ25hdHVyZU5vZGUgPSB0b3BMZXZlbEFzc2VydGlvbk5vZGUuZ2V0U2lnbmF0dXJlTm9kZSgpLFxuICAgICAgICAgIHByb29mID0gcHJvb2ZGcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21MYWJlbE5vZGVzKGxhYmVsTm9kZXMsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbVN1cHBvc2l0aW9uTm9kZXMoc3VwcG9zaXRpb25Ob2RlcywgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlKHNpZ25hdHVyZU5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mLCBzaWduYXR1cmUpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9vZkZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBkb20sXG4gICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gcHJvb2Y7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsYWJlbHNGcm9tTGFiZWxOb2RlcyhsYWJlbE5vZGVzLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBkb20sXG4gICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaWduYXR1cmVGcm9tU2lnbmF0dXJlTm9kZShzaWduYXR1cmVOb2RlLCBmaWxlQ29udGV4dCkge1xuICBsZXQgc2lnbmF0dXJlID0gbnVsbDtcblxuICBpZiAoc2lnbmF0dXJlTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHsgU2lnbmF0dXJlIH0gPSBkb207XG5cbiAgICBzaWduYXR1cmUgPSBTaWduYXR1cmUuZnJvbVNpZ25hdHVyZU5vZGUoc2lnbmF0dXJlTm9kZSwgZmlsZUNvbnRleHQpO1xuICB9XG5cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBkb20sXG4gICAgICAgIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzKHN1cHBvc2l0aW9uTm9kZXMsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGRvbSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzU3RyaW5nID0gbGFiZWxzLnJlZHVjZSgobGFiZWxzU3RyaW5nLCBsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICBsYWJlbHNTdHJpbmcgPSAobGFiZWxzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7bGFiZWxzU3RyaW5nfSwgJHtsYWJlbFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIGxhYmVsc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGxhYmVsc1N0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc1N0cmluZ0Zyb21TdXBwb3NpdGlvbnMoc3VwcG9zaXRpb25zKSB7XG4gIGNvbnN0IHN1cHBvc2l0aW9uc1N0cmluZyA9IHN1cHBvc2l0aW9ucy5yZWR1Y2UoKHN1cHBvc2l0aW9uc1N0cmluZywgc3VwcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBzdXBwb3NpdGlvblN0cmluZyA9IHN1cHBvc2l0aW9uLmdldFN0cmluZygpO1xuXG4gICAgc3VwcG9zaXRpb25zU3RyaW5nID0gKHN1cHBvc2l0aW9uc1N0cmluZyAhPT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgYCR7c3VwcG9zaXRpb25zU3RyaW5nfSwgJHtzdXBwb3NpdGlvblN0cmluZ31gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9zaXRpb25TdHJpbmc7ICAvLy9cblxuICAgIHJldHVybiBzdXBwb3NpdGlvbnNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBzdXBwb3NpdGlvbnNTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tTGFiZWxzU3VwcG9zaXRpb25zQW5kRGVkdWN0aW9uKGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24pIHtcbiAgY29uc3Qgc3VwcG9zaXRpb25zU3RyaW5nID0gc3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyhzdXBwb3NpdGlvbnMpLFxuICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgPSBkZWR1Y3Rpb24uZ2V0U3RyaW5nKCksXG4gICAgICAgIGxhYmVsc1N0cmluZyA9IGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgc3RyaW5nID0gKGxhYmVsc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgIGRlZHVjdGlvblN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9IDo6IFske3N1cHBvc2l0aW9uc1N0cmluZ31dIC4uLiAke2RlZHVjdGlvblN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVkdWN0aW9uRnJvbURlZHVjdGlvbk5vZGUiLCJUb3BMZXZlbEFzc2VydGlvbiIsImxhYmVsc0Zyb21MYWJlbE5vZGVzIiwibGFiZWxzU3RyaW5nRnJvbUxhYmVscyIsInByb29mRnJvbVByb29mTm9kZSIsInNpZ25hdHVyZUZyb21TaWduYXR1cmVOb2RlIiwic3RyaW5nRnJvbUxhYmVsc1N1cHBvc2l0aW9uc0FuZERlZHVjdGlvbiIsInN1cHBvc2l0aW9uc0Zyb21TdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25zU3RyaW5nRnJvbVN1cHBvc2l0aW9ucyIsInJldmVyc2UiLCJhcnJheVV0aWxpdGllcyIsImV4dHJhY3QiLCJiYWNrd2FyZHNFdmVyeSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibGFiZWxzIiwic3VwcG9zaXRpb25zIiwiZGVkdWN0aW9uIiwicHJvb2YiLCJzaWduYXR1cmUiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldERlZHVjdGlvbiIsImdldFByb29mIiwiZ2V0U2lnbmF0dXJlIiwiZ2V0U3RhdGVtZW50IiwiaXNVbmNvbmRpdGlvbmFsIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwidW5jb25kaXRpb25hbCIsImdldFN1cHBvc2l0aW9uIiwiaW5kZXgiLCJzdXBwb3NpdGlvbiIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInZlcmlmeSIsInZlcmlmaWVzIiwibGFiZWxzVmVyaWZ5IiwidmVyaWZ5TGFiZWxzIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiY29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmeSIsImV2ZXJ5Iiwic3VwcG9zaXRpb25WZXJpZmllcyIsImRlZHVjdGlvblZlcmlmaWVzIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInByb29mVmVyaWZpZXMiLCJuYW1lT25seSIsImxhYmVsVmVyaWZpZXMiLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJzdGF0ZW1lbnQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZXNXaXRoRGVkdWN0aW9uIiwic3RhdGVtZW50VW5pZmllcyIsInVuaWZ5U3RhdGVtZW50IiwidW5pZnlTdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzIiwic3RlcHNPclN1YnByb29mcyIsInN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmeSIsInN0ZXBzT3JTdWJwcm9vZnNVbmlmeVdpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24iLCJzdGVwc09yU3VicHJvb2ZzVW5pZnlXaXRoU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZXNJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5Iiwic3RlcE9yU3VicHJvb2YiLCJzdGVwT3JTdWJwcm9vZlVuaWZpZXMiLCJ1bmlmeVN0ZXBPclN1YnByb29mIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic2lnbmF0dXJlSlNPTiIsInNpZ25hdHVyZVRvU2lnbmF0dXJlSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwibGFiZWxzRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic2lnbmF0dXJlRnJvbUpTT04iLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZyb21Ob2RlIiwibm9kZSIsInRvcExldmVsQXNzZXJ0aW9uTm9kZSIsInByb29mTm9kZSIsImdldFByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJnZXRMYWJlbE5vZGVzIiwiZGVkdWN0aW9uTm9kZSIsImdldERlZHVjdGlvbk5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwiZ2V0U3VwcG9zaXRpb25Ob2RlcyIsInNpZ25hdHVyZU5vZGUiLCJnZXRTaWduYXR1cmVOb2RlIiwiUHJvb2YiLCJkb20iLCJmcm9tUHJvb2ZOb2RlIiwiTGFiZWwiLCJtYXAiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwiU2lnbmF0dXJlIiwiZnJvbVNpZ25hdHVyZU5vZGUiLCJEZWR1Y3Rpb24iLCJmcm9tRGVkdWN0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsImxhYmVsc1N0cmluZyIsInJlZHVjZSIsImxhYmVsU3RyaW5nIiwic3VwcG9zaXRpb25zU3RyaW5nIiwic3VwcG9zaXRpb25TdHJpbmciLCJkZWR1Y3Rpb25TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztRQStSZ0JBO2VBQUFBOzs7ZUE1UUtDOztRQXFQTEM7ZUFBQUE7O1FBeUNBQztlQUFBQTs7UUFoREFDO2VBQUFBOztRQWtCQUM7ZUFBQUE7O1FBMERBQztlQUFBQTs7UUF2Q0FDO2VBQUFBOztR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