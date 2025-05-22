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
    get deductionFromNode () {
        return deductionFromNode;
    },
    get default () {
        return TopLevelAssertion;
    },
    get labelsFromNode () {
        return labelsFromNode;
    },
    get labelsStringFromLabels () {
        return labelsStringFromLabels;
    },
    get proofFromNode () {
        return proofFromNode;
    },
    get stringFromLabelsAndDeduction () {
        return stringFromLabelsAndDeduction;
    },
    get suppositionsFromNode () {
        return suppositionsFromNode;
    }
});
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _query = require("../utilities/query");
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
var proofNodeQuery = (0, _query.nodeQuery)("/*/proof"), labelNodesQuery = (0, _query.nodesQuery)("/*/parenthesisedLabels/labels/label"), deductionNodeQuery = (0, _query.nodeQuery)("/*/deduction"), suppositionNodesQuery = (0, _query.nodesQuery)("/*/supposition");
var TopLevelAssertion = /*#__PURE__*/ function() {
    function TopLevelAssertion(fileContext, string, labels, suppositions, deduction, proof) {
        _class_call_check(this, TopLevelAssertion);
        this.fileContext = fileContext;
        this.string = string;
        this.labels = labels;
        this.suppositions = suppositions;
        this.deduction = deduction;
        this.proof = proof;
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
            key: "getStatement",
            value: function getStatement() {
                return this.deduction.getStatement();
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
                var verified = false;
                var labelsVerified = this.verifyLabels();
                if (labelsVerified) {
                    var localContext = _local.default.fromFileContext(this.fileContext), context = localContext, suppositionsVerified = this.suppositions.every(function(supposition) {
                        var suppositionVerified = supposition.verify(context);
                        if (suppositionVerified) {
                            return true;
                        }
                    });
                    if (suppositionsVerified) {
                        var deductionVerified = this.deduction.verify(context);
                        if (deductionVerified) {
                            if (this.proof === null) {
                                verified = true;
                            } else {
                                var substitutions = _substitutions.default.fromNothing(), proofVerified = this.proof.verify(substitutions, this.deduction, context);
                                verified = proofVerified; ///
                            }
                        }
                    }
                }
                return verified;
            }
        },
        {
            key: "verifyLabels",
            value: function verifyLabels() {
                var labelsVerified = this.labels.every(function(label) {
                    var nameOnly = true, labelVerified = label.verify(nameOnly);
                    if (labelVerified) {
                        return true;
                    }
                });
                return labelsVerified;
            }
        },
        {
            key: "unifyStatement",
            value: function unifyStatement(statement, context) {
                var statementUnified;
                var statementString = statement.getString(), axiomLemmaTheoremConjecture = this, axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture..."));
                var suppositions = this.getSuppositions(), suppositionsLength = suppositions.length;
                if (suppositionsLength === 0) {
                    var substitutions = _substitutions.default.fromNothing(), localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context, statementUnifiedWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
                    statementUnified = statementUnifiedWithDeduction; ///
                }
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyStatementWithDeduction",
            value: function unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext) {
                var deductionUnified;
                var statementUnified = this.deduction.unifyStatement(statement, substitutions, generalContext, specificContext); ///
                deductionUnified = statementUnified; ///
                return deductionUnified;
            }
        },
        {
            key: "unifyStatementAndStepsOrSubproofs",
            value: function unifyStatementAndStepsOrSubproofs(statement, stepsOrSubproofs, substitutions, context) {
                var statementAndStepsOrSubproofsUnified = false;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context, statementUnifiedWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
                if (statementUnifiedWithDeduction) {
                    var stepsOrSubproofsUnifiedWithSuppositions = this.unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, generalContext, specificContext);
                    if (stepsOrSubproofsUnifiedWithSuppositions) {
                        var substitutionsResolved = substitutions.areResolved();
                        statementAndStepsOrSubproofsUnified = substitutionsResolved; ///
                    }
                }
                return statementAndStepsOrSubproofsUnified;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithSupposition",
            value: function unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext) {
                var stepsOrSubproofsUnifiedWithSupposition = false;
                var context = specificContext, suppositionUnifiedIndependently = supposition.unifyIndependently(substitutions, context);
                if (suppositionUnifiedIndependently) {
                    stepsOrSubproofsUnifiedWithSupposition = true;
                } else {
                    var step = extract(stepsOrSubproofs, function(stepOrSubproof) {
                        var stepUnified = supposition.unifyStepOrSubproof(stepOrSubproof, substitutions, generalContext, specificContext);
                        if (stepUnified) {
                            return true;
                        }
                    }) || null;
                    if (step !== null) {
                        stepsOrSubproofsUnifiedWithSupposition = true;
                    }
                }
                return stepsOrSubproofsUnifiedWithSupposition;
            }
        },
        {
            key: "unifyStepsOrSubproofsWithSuppositions",
            value: function unifyStepsOrSubproofsWithSuppositions(stepsOrSubproofs, substitutions, generalContext, specificContext) {
                var _this = this;
                stepsOrSubproofs = reverse(stepsOrSubproofs); ///
                var stepsOrSubproofsUnifiedWithSuppositions = backwardsEvery(this.suppositions, function(supposition) {
                    var stepsOrSubproofsUnifiedWithSupposition = _this.unifyStepsOrSubproofsWithSupposition(stepsOrSubproofs, supposition, substitutions, generalContext, specificContext);
                    if (stepsOrSubproofsUnifiedWithSupposition) {
                        return true;
                    }
                });
                return stepsOrSubproofsUnifiedWithSuppositions;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), deductionJSON = (0, _json.deductionToDeductionJSON)(this.deduction), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), labels = labelsJSON, deduction = deductionJSON, suppositions = suppositionsJSON, json = {
                    labels: labels,
                    deduction: deduction,
                    suppositions: suppositions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), deduction = (0, _json.deductionFromJSON)(json, fileContext), proof = null, string = stringFromLabelsAndDeduction(labels, deduction), topLevelAssertion = new Class(fileContext, string, labels, suppositions, deduction, proof);
                return topLevelAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, fileContext) {
                var labels = labelsFromNode(node, fileContext), suppositions = suppositionsFromNode(node, fileContext), deduction = deductionFromNode(node, fileContext), proof = proofFromNode(node, fileContext), string = stringFromLabelsAndDeduction(labels, deduction), topLevelAssertion = new Class(fileContext, string, labels, suppositions, deduction, proof);
                return topLevelAssertion;
            }
        }
    ]);
    return TopLevelAssertion;
}();
function proofFromNode(node, fileContext) {
    var Proof = _dom.default.Proof, proofNode = proofNodeQuery(node), proof = Proof.fromProofNode(proofNode, fileContext);
    return proof;
}
function labelsFromNode(node, fileContext) {
    var Label = _dom.default.Label, labelNodes = labelNodesQuery(node), labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, fileContext);
        return label;
    });
    return labels;
}
function deductionFromNode(node, fileContext) {
    var Deduction = _dom.default.Deduction, deductionNode = deductionNodeQuery(node), deduction = Deduction.fromDeductionNode(deductionNode, fileContext);
    return deduction;
}
function suppositionsFromNode(node, fileContext) {
    var Supposition = _dom.default.Supposition, suppositionNodes = suppositionNodesQuery(node), suppositions = suppositionNodes.map(function(suppositionNode) {
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
function stringFromLabelsAndDeduction(labels, deduction) {
    var deductionString = deduction.getString(), labelsString = labelsStringFromLabels(labels), string = labelsString === null ? deductionString : "".concat(labelsString, " :: ").concat(deductionString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9wYXJlbnRoZXNpc2VkTGFiZWxzL2xhYmVscy9sYWJlbFwiKSxcbiAgICAgIGRlZHVjdGlvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL2RlZHVjdGlvblwiKSxcbiAgICAgIHN1cHBvc2l0aW9uTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9zdXBwb3NpdGlvblwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wTGV2ZWxBc3NlcnRpb24ge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmRlZHVjdGlvbiA9IGRlZHVjdGlvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldERlZHVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWR1Y3Rpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIGdldFN0YXRlbWVudCgpIHsgcmV0dXJuIHRoaXMuZGVkdWN0aW9uLmdldFN0YXRlbWVudCgpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgZGVkdWN0aW9uVmVyaWZpZWQgPSB0aGlzLmRlZHVjdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGRlZHVjdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmRlZHVjdGlvbiwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gcHJvb2ZWZXJpZmllZDsgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IHRydWUsXG4gICAgICAgICAgICBsYWJlbFZlcmlmaWVkID0gbGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0xlbmd0aCA9IHN1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkV2l0aERlZHVjdGlvbjsgIC8vL1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGRlZHVjdGlvblVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5kZWR1Y3Rpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgZGVkdWN0aW9uVW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIGRlZHVjdGlvblVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMoc3RhdGVtZW50LCBzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aERlZHVjdGlvbiA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZFdpdGhEZWR1Y3Rpb24pIHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucyA9IHRoaXMudW5pZnlTdGVwc09yU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9ucyhzdGVwc09yU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgc3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zUmVzb2x2ZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRTdGVwc09yU3VicHJvb2ZzVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbihzdGVwc09yU3VicHJvb2ZzLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBzdGVwc09yU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiAgPWZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uVW5pZmllZEluZGVwZW5kZW50bHkgPSBzdXBwb3NpdGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgc3RlcHNPclN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdGVwID0gZXh0cmFjdChzdGVwc09yU3VicHJvb2ZzLCAoc3RlcE9yU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3Qgc3RlcFVuaWZpZWQgPSBzdXBwb3NpdGlvbi51bmlmeVN0ZXBPclN1YnByb29mKHN0ZXBPclN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAoc3RlcFVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHN0ZXAgIT09IG51bGwpIHtcbiAgICAgICAgc3RlcHNPclN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGVwc09yU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbjtcbiAgfVxuXG4gIHVuaWZ5U3RlcHNPclN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMoc3RlcHNPclN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIHN0ZXBzT3JTdWJwcm9vZnMgPSByZXZlcnNlKHN0ZXBzT3JTdWJwcm9vZnMpOyAvLy9cblxuICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHN0ZXBzT3JTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9uID0gdGhpcy51bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24oc3RlcHNPclN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAoc3RlcHNPclN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc3RlcHNPclN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGRlZHVjdGlvbkpTT04gPSBkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04odGhpcy5kZWR1Y3Rpb24pLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25KU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBkZWR1Y3Rpb24sXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24obGFiZWxzLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGRlZHVjdGlvbiA9IGRlZHVjdGlvbkZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IHByb29mRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24obGFiZWxzLCBkZWR1Y3Rpb24pLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBkZWR1Y3Rpb24sIHByb29mKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBkb20sXG4gICAgICAgIHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICBwcm9vZiA9IFByb29mLmZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZG9tLFxuICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVkdWN0aW9uRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBEZWR1Y3Rpb24gfSA9IGRvbSxcbiAgICAgICAgZGVkdWN0aW9uTm9kZSA9IGRlZHVjdGlvbk5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgZGVkdWN0aW9uID0gRGVkdWN0aW9uLmZyb21EZWR1Y3Rpb25Ob2RlKGRlZHVjdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gZGVkdWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZG9tLFxuICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzU3RyaW5nID0gbGFiZWxzLnJlZHVjZSgobGFiZWxzU3RyaW5nLCBsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICBsYWJlbHNTdHJpbmcgPSAobGFiZWxzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7bGFiZWxzU3RyaW5nfSwgJHtsYWJlbFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIGxhYmVsc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGxhYmVsc1N0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHNBbmREZWR1Y3Rpb24obGFiZWxzLCBkZWR1Y3Rpb24pIHtcbiAgY29uc3QgZGVkdWN0aW9uU3RyaW5nID0gZGVkdWN0aW9uLmdldFN0cmluZygpLFxuICAgICAgICBsYWJlbHNTdHJpbmcgPSBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgIHN0cmluZyA9IChsYWJlbHNTdHJpbmcgPT09IG51bGwpID9cbiAgICAgICAgICAgICAgICAgICBkZWR1Y3Rpb25TdHJpbmcgOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgYCR7bGFiZWxzU3RyaW5nfSA6OiAke2RlZHVjdGlvblN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiZGVkdWN0aW9uRnJvbU5vZGUiLCJUb3BMZXZlbEFzc2VydGlvbiIsImxhYmVsc0Zyb21Ob2RlIiwibGFiZWxzU3RyaW5nRnJvbUxhYmVscyIsInByb29mRnJvbU5vZGUiLCJzdHJpbmdGcm9tTGFiZWxzQW5kRGVkdWN0aW9uIiwic3VwcG9zaXRpb25zRnJvbU5vZGUiLCJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiYmFja3dhcmRzRXZlcnkiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJkZWR1Y3Rpb25Ob2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInN1cHBvc2l0aW9ucyIsImRlZHVjdGlvbiIsInByb29mIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRMYWJlbHMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXREZWR1Y3Rpb24iLCJnZXRQcm9vZiIsImdldFN0YXRlbWVudCIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInZlcmlmeSIsInZlcmlmaWVkIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJjb250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImRlZHVjdGlvblZlcmlmaWVkIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInByb29mVmVyaWZpZWQiLCJuYW1lT25seSIsImxhYmVsVmVyaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsInN0YXRlbWVudFVuaWZpZWQiLCJzdGF0ZW1lbnRTdHJpbmciLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmciLCJ0cmFjZSIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZFdpdGhEZWR1Y3Rpb24iLCJ1bmlmeVN0YXRlbWVudFdpdGhEZWR1Y3Rpb24iLCJkZWJ1ZyIsImRlZHVjdGlvblVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudEFuZFN0ZXBzT3JTdWJwcm9vZnMiLCJzdGVwc09yU3VicHJvb2ZzIiwic3RhdGVtZW50QW5kU3RlcHNPclN1YnByb29mc1VuaWZpZWQiLCJzdGVwc09yU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJ1bmlmeVN0ZXBzT3JTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24iLCJzdGVwc09yU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllZEluZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJzdGVwIiwic3RlcE9yU3VicHJvb2YiLCJzdGVwVW5pZmllZCIsInVuaWZ5U3RlcE9yU3VicHJvb2YiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiZGVkdWN0aW9uSlNPTiIsImRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJkZWR1Y3Rpb25Gcm9tSlNPTiIsInRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU5vZGUiLCJub2RlIiwiUHJvb2YiLCJkb20iLCJwcm9vZk5vZGUiLCJmcm9tUHJvb2ZOb2RlIiwiTGFiZWwiLCJsYWJlbE5vZGVzIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsIkRlZHVjdGlvbiIsImRlZHVjdGlvbk5vZGUiLCJmcm9tRGVkdWN0aW9uTm9kZSIsIlN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25Ob2RlcyIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJsYWJlbHNTdHJpbmciLCJyZWR1Y2UiLCJsYWJlbFN0cmluZyIsImRlZHVjdGlvblN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBcVJnQkE7ZUFBQUE7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