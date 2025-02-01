"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    deductionFromNode: function() {
        return deductionFromNode;
    },
    default: function() {
        return TopLevelAssertion;
    },
    labelsFromNode: function() {
        return labelsFromNode;
    },
    labelsStringFromLabels: function() {
        return labelsStringFromLabels;
    },
    proofFromNode: function() {
        return proofFromNode;
    },
    stringFromLabelsAndDeduction: function() {
        return stringFromLabelsAndDeduction;
    },
    suppositionsFromNode: function() {
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
var proofNodeQuery = (0, _query.nodeQuery)("/*/proof"), labelNodesQuery = (0, _query.nodesQuery)("/*/labels/label"), deductionNodeQuery = (0, _query.nodeQuery)("/*/deduction"), suppositionNodesQuery = (0, _query.nodesQuery)("/*/supposition");
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
            key: "unifyStatementAndProofStepSubproofs",
            value: function unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, substitutions, context) {
                var statementAndProofStepSubproofsUnified = false;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context, statementUnifiedWithDeduction = this.unifyStatementWithDeduction(statement, substitutions, generalContext, specificContext);
                if (statementUnifiedWithDeduction) {
                    var proofStepSubproofsUnifiedWithSuppositions = this.unifyProofStepSubproofsWithSuppositions(proofStepSubproofs, substitutions, generalContext, specificContext);
                    if (proofStepSubproofsUnifiedWithSuppositions) {
                        var substitutionsResolved = substitutions.areResolved();
                        statementAndProofStepSubproofsUnified = substitutionsResolved; ///
                    }
                }
                return statementAndProofStepSubproofsUnified;
            }
        },
        {
            key: "unifyProofStepSubproofsWithSupposition",
            value: function unifyProofStepSubproofsWithSupposition(proofStepSubproofs, supposition, substitutions, generalContext, specificContext) {
                var proofStepSubproofsUnifiedWithSupposition = false;
                var context = specificContext, suppositionUnifiedIndependently = supposition.unifyIndependently(substitutions, context);
                if (suppositionUnifiedIndependently) {
                    proofStepSubproofsUnifiedWithSupposition = true;
                } else {
                    var proofStep = extract(proofStepSubproofs, function(proofStepSubproof) {
                        var proofStepUnified = supposition.unifyProofStepSubproof(proofStepSubproof, substitutions, generalContext, specificContext);
                        if (proofStepUnified) {
                            return true;
                        }
                    }) || null;
                    if (proofStep !== null) {
                        proofStepSubproofsUnifiedWithSupposition = true;
                    }
                }
                return proofStepSubproofsUnifiedWithSupposition;
            }
        },
        {
            key: "unifyProofStepSubproofsWithSuppositions",
            value: function unifyProofStepSubproofsWithSuppositions(proofStepSubproofs, substitutions, generalContext, specificContext) {
                var _this = this;
                proofStepSubproofs = reverse(proofStepSubproofs); ///
                var proofStepSubproofsUnifiedWithSuppositions = backwardsEvery(this.suppositions, function(supposition) {
                    var proofStepSubproofsUnifiedWithSupposition = _this.unifyProofStepSubproofsWithSupposition(proofStepSubproofs, supposition, substitutions, generalContext, specificContext);
                    if (proofStepSubproofsUnifiedWithSupposition) {
                        return true;
                    }
                });
                return proofStepSubproofsUnifiedWithSuppositions;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgZGVkdWN0aW9uRnJvbUpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGRlZHVjdGlvblRvRGVkdWN0aW9uSlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiB9IGZyb20gXCIuLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IHJldmVyc2UsIGV4dHJhY3QsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9sYWJlbHMvbGFiZWxcIiksXG4gICAgICBkZWR1Y3Rpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9kZWR1Y3Rpb25cIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLyovc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGRlZHVjdGlvbiwgcHJvb2YpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5kZWR1Y3Rpb24gPSBkZWR1Y3Rpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXREZWR1Y3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVkdWN0aW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLmRlZHVjdGlvbi5nZXRTdGF0ZW1lbnQoKTsgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkID0gdGhpcy52ZXJpZnlMYWJlbHMoKTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGRlZHVjdGlvblZlcmlmaWVkID0gdGhpcy5kZWR1Y3Rpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChkZWR1Y3Rpb25WZXJpZmllZCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICAgICAgICBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5kZWR1Y3Rpb24sIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHByb29mVmVyaWZpZWQ7IC8vL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWZXJpZmllZCA9IGxhYmVsLnZlcmlmeShuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gdGhpcywgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmApO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNMZW5ndGggPSBzdXBwb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZFdpdGhEZWR1Y3Rpb247ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBkZWR1Y3Rpb25VbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuZGVkdWN0aW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7ICAvLy9cblxuICAgIGRlZHVjdGlvblVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBkZWR1Y3Rpb25VbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnMoc3RhdGVtZW50LCBwcm9vZlN0ZXBTdWJwcm9vZnMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhEZWR1Y3Rpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aERlZHVjdGlvbihzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWRXaXRoRGVkdWN0aW9uKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucyA9IHRoaXMudW5pZnlQcm9vZlN0ZXBTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zKHByb29mU3RlcFN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgc3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZCA9IHN1YnN0aXR1dGlvbnNSZXNvbHZlZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mc1VuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcFN1YnByb29mc1dpdGhTdXBwb3NpdGlvbihwcm9vZlN0ZXBTdWJwcm9vZnMsIHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gID1mYWxzZTtcblxuICAgIGNvbnN0IGNvbnRleHQgPSBzcGVjaWZpY0NvbnRleHQsICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvblVuaWZpZWRJbmRlcGVuZGVudGx5ID0gc3VwcG9zaXRpb24udW5pZnlJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uVW5pZmllZEluZGVwZW5kZW50bHkpIHtcbiAgICAgIHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXAgPSBleHRyYWN0KHByb29mU3RlcFN1YnByb29mcywgKHByb29mU3RlcFN1YnByb29mKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcFVuaWZpZWQgPSBzdXBwb3NpdGlvbi51bmlmeVByb29mU3RlcFN1YnByb29mKHByb29mU3RlcFN1YnByb29mLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgICAgIHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXBTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zKHByb29mU3RlcFN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIHByb29mU3RlcFN1YnByb29mcyA9IHJldmVyc2UocHJvb2ZTdGVwU3VicHJvb2ZzKTsgLy8vXG5cbiAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uKHByb29mU3RlcFN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBkZWR1Y3Rpb25KU09OID0gZGVkdWN0aW9uVG9EZWR1Y3Rpb25KU09OKHRoaXMuZGVkdWN0aW9uKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uSlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgZGVkdWN0aW9uLFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgZGVkdWN0aW9uID0gZGVkdWN0aW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzQW5kRGVkdWN0aW9uKGxhYmVscywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBkZWR1Y3Rpb24gPSBkZWR1Y3Rpb25Gcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzQW5kRGVkdWN0aW9uKGxhYmVscywgZGVkdWN0aW9uKSxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1cHBvc2l0aW9ucywgZGVkdWN0aW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb29mRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBQcm9vZiB9ID0gZG9tLFxuICAgICAgICBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBwcm9vZjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc0Zyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgTGFiZWwgfSA9IGRvbSxcbiAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxhYmVscztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZHVjdGlvbkZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgRGVkdWN0aW9uIH0gPSBkb20sXG4gICAgICAgIGRlZHVjdGlvbk5vZGUgPSBkZWR1Y3Rpb25Ob2RlUXVlcnkobm9kZSksXG4gICAgICAgIGRlZHVjdGlvbiA9IERlZHVjdGlvbi5mcm9tRGVkdWN0aW9uTm9kZShkZWR1Y3Rpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIGRlZHVjdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1cHBvc2l0aW9uc0Zyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgU3VwcG9zaXRpb24gfSA9IGRvbSxcbiAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHN1cHBvc2l0aW9ucztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVscy5yZWR1Y2UoKGxhYmVsc1N0cmluZywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgbGFiZWxzU3RyaW5nID0gKGxhYmVsc1N0cmluZyA9PT0gbnVsbCkgP1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAvLy9cbiAgICAgICAgICAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30sICR7bGFiZWxTdHJpbmd9YDtcblxuICAgIHJldHVybiBsYWJlbHNTdHJpbmc7XG4gIH0sIG51bGwpO1xuXG4gIHJldHVybiBsYWJlbHNTdHJpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tTGFiZWxzQW5kRGVkdWN0aW9uKGxhYmVscywgZGVkdWN0aW9uKSB7XG4gIGNvbnN0IGRlZHVjdGlvblN0cmluZyA9IGRlZHVjdGlvbi5nZXRTdHJpbmcoKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICBzdHJpbmcgPSAobGFiZWxzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgZGVkdWN0aW9uU3RyaW5nIDogLy8vXG4gICAgICAgICAgICAgICAgICAgIGAke2xhYmVsc1N0cmluZ30gOjogJHtkZWR1Y3Rpb25TdHJpbmd9YDtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuIl0sIm5hbWVzIjpbImRlZHVjdGlvbkZyb21Ob2RlIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJsYWJlbHNGcm9tTm9kZSIsImxhYmVsc1N0cmluZ0Zyb21MYWJlbHMiLCJwcm9vZkZyb21Ob2RlIiwic3RyaW5nRnJvbUxhYmVsc0FuZERlZHVjdGlvbiIsInN1cHBvc2l0aW9uc0Zyb21Ob2RlIiwicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImJhY2t3YXJkc0V2ZXJ5IiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiZGVkdWN0aW9uTm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJkZWR1Y3Rpb24iLCJwcm9vZiIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0RGVkdWN0aW9uIiwiZ2V0UHJvb2YiLCJnZXRTdGF0ZW1lbnQiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiY29udGV4dCIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJzdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJkZWR1Y3Rpb25WZXJpZmllZCIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJwcm9vZlZlcmlmaWVkIiwibmFtZU9ubHkiLCJsYWJlbFZlcmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwidHJhY2UiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWRXaXRoRGVkdWN0aW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoRGVkdWN0aW9uIiwiZGVidWciLCJkZWR1Y3Rpb25VbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnMiLCJwcm9vZlN0ZXBTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkIiwicHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVByb29mU3RlcFN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsInVuaWZ5UHJvb2ZTdGVwU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllZEluZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBTdWJwcm9vZiIsInByb29mU3RlcFVuaWZpZWQiLCJ1bmlmeVByb29mU3RlcFN1YnByb29mIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImRlZHVjdGlvbkpTT04iLCJkZWR1Y3Rpb25Ub0RlZHVjdGlvbkpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwiZGVkdWN0aW9uRnJvbUpTT04iLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZyb21Ob2RlIiwibm9kZSIsIlByb29mIiwiZG9tIiwicHJvb2ZOb2RlIiwiZnJvbVByb29mTm9kZSIsIkxhYmVsIiwibGFiZWxOb2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJEZWR1Y3Rpb24iLCJkZWR1Y3Rpb25Ob2RlIiwiZnJvbURlZHVjdGlvbk5vZGUiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwibGFiZWxz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