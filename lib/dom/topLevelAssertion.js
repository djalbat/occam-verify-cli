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
    consequentFromNode: function() {
        return consequentFromNode;
    },
    default: function() {
        return TopLevelAssertion;
    },
    labelsStringFromLabels: function() {
        return labelsStringFromLabels;
    },
    proofFromNode: function() {
        return proofFromNode;
    },
    stringFromLabelsAndConsequent: function() {
        return stringFromLabelsAndConsequent;
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
var proofNodeQuery = (0, _query.nodeQuery)("/*/proof"), labelNodesQuery = (0, _query.nodesQuery)("/*/labels/label"), consequentNodeQuery = (0, _query.nodeQuery)("/*/consequent"), suppositionNodesQuery = (0, _query.nodesQuery)("/*/supposition");
var TopLevelAssertion = /*#__PURE__*/ function() {
    function TopLevelAssertion(fileContext, string, labels, suppositions, consequent, proof) {
        _class_call_check(this, TopLevelAssertion);
        this.fileContext = fileContext;
        this.string = string;
        this.labels = labels;
        this.suppositions = suppositions;
        this.consequent = consequent;
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
            key: "getConsequent",
            value: function getConsequent() {
                return this.consequent;
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
                return this.consequent.getStatement();
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
                        var consequentVerified = this.consequent.verify(context);
                        if (consequentVerified) {
                            if (this.proof === null) {
                                verified = true;
                            } else {
                                var substitutions = _substitutions.default.fromNothing(), proofVerified = this.proof.verify(substitutions, this.consequent, context);
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
                    var substitutions = _substitutions.default.fromNothing(), localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context, statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext);
                    statementUnified = statementUnifiedWithConsequent; ///
                }
                if (statementUnified) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture."));
                }
                return statementUnified;
            }
        },
        {
            key: "unifyStatementWithConsequent",
            value: function unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext) {
                var consequentUnified;
                var statementUnified = this.consequent.unifyStatement(statement, substitutions, generalContext, specificContext); ///
                consequentUnified = statementUnified; ///
                return consequentUnified;
            }
        },
        {
            key: "unifyStatementAndProofStepSubproofs",
            value: function unifyStatementAndProofStepSubproofs(statement, proofStepSubproofs, context) {
                var statementAndProofStepSubproofsUnified = false;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
                var substitutions = _substitutions.default.fromNothing(), statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext);
                if (statementUnifiedWithConsequent) {
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
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), consequentJSON = (0, _json.consequentToConsequentJSON)(this.consequent), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), labels = labelsJSON, consequent = consequentJSON, suppositions = suppositionsJSON, json = {
                    labels: labels,
                    consequent: consequent,
                    suppositions: suppositions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), consequent = (0, _json.consequentFromJSON)(json, fileContext), proof = null, string = stringFromLabelsAndConsequent(labels, consequent), topLevelAssertion = new Class(fileContext, string, labels, suppositions, consequent, proof);
                return topLevelAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, fileContext) {
                var labels = labelsFromNode(node, fileContext), suppositions = suppositionsFromNode(node, fileContext), consequent = consequentFromNode(node, fileContext), proof = proofFromNode(node, fileContext), string = stringFromLabelsAndConsequent(labels, consequent), metaLemma = new Class(fileContext, string, labels, suppositions, consequent, proof);
                return metaLemma;
            }
        }
    ]);
    return TopLevelAssertion;
}();
function labelsFromNode(node, fileContext) {
    var Label = _dom.default.Label, labelNodes = labelNodesQuery(node), labels = labelNodes.map(function(labelNode) {
        var label = Label.fromLabelNode(labelNode, fileContext);
        return label;
    });
    return labels;
}
function proofFromNode(node, fileContext) {
    var Proof = _dom.default.Proof, proofNode = proofNodeQuery(node), proof = Proof.fromProofNode(proofNode, fileContext);
    return proof;
}
function consequentFromNode(node, fileContext) {
    var Consequent = _dom.default.Consequent, consequentNode = consequentNodeQuery(node), consequent = Consequent.fromConsequentNode(consequentNode, fileContext);
    return consequent;
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
function stringFromLabelsAndConsequent(labels, consequent) {
    var consequentString = consequent.getString(), labelsString = labelsStringFromLabels(labels), string = labelsString === null ? consequentString : "".concat(labelsString, " :: ").concat(consequentString);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgY29uc2VxdWVudEZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcmV2ZXJzZSwgZXh0cmFjdCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL2xhYmVscy9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9ucztcbiAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRTdXBwb3NpdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9zaXRpb25zO1xuICB9XG5cbiAgZ2V0Q29uc2VxdWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb25zZXF1ZW50O1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBnZXRTdGF0ZW1lbnQoKSB7IHJldHVybiB0aGlzLmNvbnNlcXVlbnQuZ2V0U3RhdGVtZW50KCk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZCA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICAgICAgcHJvb2ZWZXJpZmllZCA9IHRoaXMucHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIHRoaXMuY29uc2VxdWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gcHJvb2ZWZXJpZmllZDsgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IHRydWUsXG4gICAgICAgICAgICBsYWJlbFZlcmlmaWVkID0gbGFiZWwudmVyaWZ5KG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0xlbmd0aCA9IHN1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudDsgIC8vL1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhDb25zZXF1ZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBjb25zZXF1ZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTsgIC8vL1xuXG4gICAgY29uc2VxdWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkOyAvLy9cblxuICAgIHJldHVybiBjb25zZXF1ZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzKHN0YXRlbWVudCwgcHJvb2ZTdGVwU3VicHJvb2ZzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mc1VuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zID0gdGhpcy51bmlmeVByb29mU3RlcFN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMocHJvb2ZTdGVwU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1Jlc29sdmVkOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uKHByb29mU3RlcFN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiAgPWZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uVW5pZmllZEluZGVwZW5kZW50bHkgPSBzdXBwb3NpdGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgcHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcCA9IGV4dHJhY3QocHJvb2ZTdGVwU3VicHJvb2ZzLCAocHJvb2ZTdGVwU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZCA9IHN1cHBvc2l0aW9uLnVuaWZ5UHJvb2ZTdGVwU3VicHJvb2YocHJvb2ZTdGVwU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9vZlN0ZXBVbmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXAgIT09IG51bGwpIHtcbiAgICAgICAgcHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb247XG4gIH1cblxuICB1bmlmeVByb29mU3RlcFN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMocHJvb2ZTdGVwU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgcHJvb2ZTdGVwU3VicHJvb2ZzID0gcmV2ZXJzZShwcm9vZlN0ZXBTdWJwcm9vZnMpOyAvLy9cblxuICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zID0gYmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiA9IHRoaXMudW5pZnlQcm9vZlN0ZXBTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb24ocHJvb2ZTdGVwU3VicHJvb2ZzLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04odGhpcy5jb25zZXF1ZW50KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHNBbmRDb25zZXF1ZW50KGxhYmVscywgY29uc2VxdWVudCksXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50RnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gcHJvb2ZGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVsc0FuZENvbnNlcXVlbnQobGFiZWxzLCBjb25zZXF1ZW50KSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGFiZWxzRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBMYWJlbCB9ID0gZG9tLFxuICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbGFiZWxzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJvb2ZGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBkb20sXG4gICAgICAgIHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICBwcm9vZiA9IFByb29mLmZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uc2VxdWVudEZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gIGNvbnN0IHsgQ29uc2VxdWVudCB9ID0gZG9tLFxuICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkobm9kZSksXG4gICAgICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21Db25zZXF1ZW50Tm9kZShjb25zZXF1ZW50Tm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gIHJldHVybiBjb25zZXF1ZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZG9tLFxuICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzU3RyaW5nID0gbGFiZWxzLnJlZHVjZSgobGFiZWxzU3RyaW5nLCBsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICBsYWJlbHNTdHJpbmcgPSAobGFiZWxzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IC8vL1xuICAgICAgICAgICAgICAgICAgICAgICAgYCR7bGFiZWxzU3RyaW5nfSwgJHtsYWJlbFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIGxhYmVsc1N0cmluZztcbiAgfSwgbnVsbCk7XG5cbiAgcmV0dXJuIGxhYmVsc1N0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHNBbmRDb25zZXF1ZW50KGxhYmVscywgY29uc2VxdWVudCkge1xuICBjb25zdCBjb25zZXF1ZW50U3RyaW5nID0gY29uc2VxdWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgbGFiZWxzU3RyaW5nID0gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICBzdHJpbmcgPSAobGFiZWxzU3RyaW5nID09PSBudWxsKSA/XG4gICAgICAgICAgICAgICAgICAgY29uc2VxdWVudFN0cmluZyA6IC8vL1xuICAgICAgICAgICAgICAgICAgICBgJHtsYWJlbHNTdHJpbmd9IDo6ICR7Y29uc2VxdWVudFN0cmluZ31gO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG4iXSwibmFtZXMiOlsiY29uc2VxdWVudEZyb21Ob2RlIiwiVG9wTGV2ZWxBc3NlcnRpb24iLCJsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIiwicHJvb2ZGcm9tTm9kZSIsInN0cmluZ0Zyb21MYWJlbHNBbmRDb25zZXF1ZW50Iiwic3VwcG9zaXRpb25zRnJvbU5vZGUiLCJyZXZlcnNlIiwiYXJyYXlVdGlsaXRpZXMiLCJleHRyYWN0IiwiYmFja3dhcmRzRXZlcnkiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50IiwicHJvb2YiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldExhYmVscyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbnQiLCJnZXRQcm9vZiIsImdldFN0YXRlbWVudCIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInZlcmlmeSIsInZlcmlmaWVkIiwibGFiZWxzVmVyaWZpZWQiLCJ2ZXJpZnlMYWJlbHMiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJjb250ZXh0Iiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImNvbnNlcXVlbnRWZXJpZmllZCIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJwcm9vZlZlcmlmaWVkIiwibmFtZU9ubHkiLCJsYWJlbFZlcmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwidHJhY2UiLCJzdXBwb3NpdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudCIsInVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQiLCJkZWJ1ZyIsImNvbnNlcXVlbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnMiLCJwcm9vZlN0ZXBTdWJwcm9vZnMiLCJzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkIiwicHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVByb29mU3RlcFN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsInVuaWZ5UHJvb2ZTdGVwU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllZEluZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBTdWJwcm9vZiIsInByb29mU3RlcFVuaWZpZWQiLCJ1bmlmeVByb29mU3RlcFN1YnByb29mIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImNvbnNlcXVlbnRKU09OIiwiY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwiY29uc2VxdWVudEZyb21KU09OIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tTm9kZSIsIm5vZGUiLCJsYWJlbHNGcm9tTm9kZSIsIm1ldGFMZW1tYSIsIkxhYmVsIiwiZG9tIiwibGFiZWxOb2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJQcm9vZiIsInByb29mTm9kZSIsImZyb21Qcm9vZk5vZGUiLCJDb25zZXF1ZW50IiwiY29uc2VxdWVudE5vZGUiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uTm9kZXMiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwibGFiZWxzU3RyaW5nIiwicmVkdWNlIiwibGFiZWxTdHJpbmciLCJjb25zZXF1ZW50U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUF5UmdCQSxrQkFBa0I7ZUFBbEJBOzs7ZUFoUUtDOztJQW9STEMsc0JBQXNCO2VBQXRCQTs7SUE1QkFDLGFBQWE7ZUFBYkE7O0lBMENBQyw2QkFBNkI7ZUFBN0JBOztJQTFCQUMsb0JBQW9CO2VBQXBCQTs7O3lCQS9SZTswREFFZjs0REFDUztvRUFDQztxQkFFWTtvQkFRVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFRQyxVQUFxQ0MseUJBQWMsQ0FBbkRELFNBQVNFLFVBQTRCRCx5QkFBYyxDQUExQ0MsU0FBU0MsaUJBQW1CRix5QkFBYyxDQUFqQ0U7QUFFMUIsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLGFBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsb0JBQzdCQyxzQkFBc0JILElBQUFBLGdCQUFTLEVBQUMsa0JBQ2hDSSx3QkFBd0JGLElBQUFBLGlCQUFVLEVBQUM7QUFFMUIsSUFBQSxBQUFNWixrQ0FBTjthQUFNQSxrQkFDUGUsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsWUFBWSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRHJEcEI7UUFFakIsSUFBSSxDQUFDZSxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsWUFBWSxHQUFHQTtRQUNwQixJQUFJLENBQUNDLFVBQVUsR0FB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