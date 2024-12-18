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
    default: function() {
        return TopLevelAssertion;
    },
    stringFromLabels: function() {
        return stringFromLabels;
    }
});
var _necessary = require("necessary");
var _dom = /*#__PURE__*/ _interop_require_default(require("../dom"));
var _local = /*#__PURE__*/ _interop_require_default(require("../context/local"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("../substitutions"));
var _constants = require("../constants");
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
    function TopLevelAssertion(fileContext, string, labels, substitutions, suppositions, consequent, proof) {
        _class_call_check(this, TopLevelAssertion);
        this.fileContext = fileContext;
        this.string = string;
        this.labels = labels;
        this.substitutions = substitutions;
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
            key: "getSubstitutions",
            value: function getSubstitutions() {
                return this.substitutions;
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
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                return this.consequent.matchStatementNode(statementNode);
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
            key: "unifyReference",
            value: function unifyReference(reference, context) {
                var referenceUnified;
                var referenceString = reference.getString(), axiomLemmaTheoremConjecture = this, axiomLemmaTheoremConjectureString = axiomLemmaTheoremConjecture.getString();
                context.trace("Unifying the '".concat(referenceString, "' reference with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture..."));
                var substitutions = _substitutions.default.fromNothing(), fileContext = this.getFileContext(), localContext = _local.default.fromFileContext(fileContext), generalContext = localContext, specificContext = context, labelUnified = this.labels.some(function(label) {
                    substitutions.clear();
                    var referenceUnified = reference.unifyLabel(label, substitutions, generalContext, specificContext);
                    if (referenceUnified) {
                        return true;
                    }
                });
                referenceUnified = labelUnified; ///
                if (referenceUnified) {
                    context.debug("...unified the '".concat(referenceString, "' reference with the '").concat(axiomLemmaTheoremConjectureString, "' axiom, lemma, theorem or conjecture."));
                }
                return referenceUnified;
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
            key: "unifyStatementWithConsequent",
            value: function unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext) {
                var consequentUnified;
                var statementUnified = this.consequent.unifyStatement(statement, substitutions, generalContext, specificContext); ///
                consequentUnified = statementUnified; ///
                return consequentUnified;
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
                                var proofVerified = this.proof.verify(this.substitutions, this.consequent, context);
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
                var _this = this;
                var labelsVerified = this.labels.every(function(label) {
                    var nameOnly = true, labelVVerifiedWhenDeclared = label.verifyWhenDeclared(_this.fileContext, nameOnly);
                    if (labelVVerifiedWhenDeclared) {
                        return true;
                    }
                });
                return labelsVerified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON() {
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), consequentJSON = (0, _json.consequentToConsequentJSON)(this.consequent), suppositionsJSON = (0, _json.suppositionsToSuppositionsJSON)(this.suppositions), substitutionsJSON = (0, _json.substitutionsToSubstitutionsJSON)(this.substitutions), labels = labelsJSON, consequent = consequentJSON, suppositions = suppositionsJSON, substitutions = substitutionsJSON, json = {
                    labels: labels,
                    consequent: consequent,
                    suppositions: suppositions,
                    substitutions: substitutions
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(Class, json, fileContext) {
                var labels = (0, _json.labelsFromJSON)(json, fileContext), consequent = (0, _json.consequentFromJSON)(json, fileContext), suppositions = (0, _json.suppositionsFromJSON)(json, fileContext), substitutions = (0, _json.substitutionsFromJSON)(json, fileContext), string = stringFromLabels(labels), proof = null, topLevelAssertion = new Class(fileContext, string, labels, substitutions, suppositions, consequent, proof);
                return topLevelAssertion;
            }
        },
        {
            key: "fromNode",
            value: function fromNode(Class, node, fileContext) {
                var labels = labelsFromNode(node, fileContext), substitutions = _substitutions.default.fromNothing(), suppositions = suppositionsFromNode(node, fileContext), consequent = consequentFromNode(node, fileContext), proof = proofFromNode(node, fileContext), string = stringFromLabels(labels), metaLemma = new Class(fileContext, string, labels, substitutions, suppositions, consequent, proof);
                return metaLemma;
            }
        }
    ]);
    return TopLevelAssertion;
}();
function stringFromLabels(labels) {
    var string = labels.reduce(function(string, label) {
        var labelString = label.getString();
        string = string === _constants.EMPTY_STRING ? labelString : "".concat(string, ",").concat(labelString);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgY29uc2VxdWVudEZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcmV2ZXJzZSwgZXh0cmFjdCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL2xhYmVscy9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3Vic3RpdHV0aW9ucywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7IHJldHVybiB0aGlzLmNvbnNlcXVlbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVVuaWZpZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gdGhpcywgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllZCA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVVuaWZpZWQgPSByZWZlcmVuY2UudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmVmZXJlbmNlVW5pZmllZCA9IGxhYmVsVW5pZmllZDsgIC8vL1xuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuLi5gKTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zTGVuZ3RoID0gc3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudCA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoQ29uc2VxdWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZFdpdGhDb25zZXF1ZW50OyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzKHN0YXRlbWVudCwgcHJvb2ZTdGVwU3VicHJvb2ZzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFByb29mU3RlcFN1YnByb29mc1VuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zID0gdGhpcy51bmlmeVByb29mU3RlcFN1YnByb29mc1dpdGhTdXBwb3NpdGlvbnMocHJvb2ZTdGVwU3VicHJvb2ZzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1Jlc29sdmVkOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGNvbnNlcXVlbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuY29uc2VxdWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnNlcXVlbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXBTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zKHByb29mU3RlcFN1YnByb29mcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIHByb29mU3RlcFN1YnByb29mcyA9IHJldmVyc2UocHJvb2ZTdGVwU3VicHJvb2ZzKTsgLy8vXG5cbiAgICBjb25zdCBwcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucyA9IGJhY2t3YXJkc0V2ZXJ5KHRoaXMuc3VwcG9zaXRpb25zLCAoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uKHByb29mU3RlcFN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBTdWJwcm9vZnNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uKHByb29mU3RlcFN1YnByb29mcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiAgPWZhbHNlO1xuXG4gICAgY29uc3QgY29udGV4dCA9IHNwZWNpZmljQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9uVW5pZmllZEluZGVwZW5kZW50bHkgPSBzdXBwb3NpdGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgcHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcCA9IGV4dHJhY3QocHJvb2ZTdGVwU3VicHJvb2ZzLCAocHJvb2ZTdGVwU3VicHJvb2YpID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZCA9IHN1cHBvc2l0aW9uLnVuaWZ5UHJvb2ZTdGVwU3VicHJvb2YocHJvb2ZTdGVwU3VicHJvb2YsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcm9vZlN0ZXBVbmlmaWVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pIHx8IG51bGw7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXAgIT09IG51bGwpIHtcbiAgICAgICAgcHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb247XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZCA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkodGhpcy5zdWJzdGl0dXRpb25zLCB0aGlzLmNvbnNlcXVlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHByb29mVmVyaWZpZWQ7IC8vL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSBsYWJlbC52ZXJpZnlXaGVuRGVjbGFyZWQodGhpcy5maWxlQ29udGV4dCwgbmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTih0aGlzLmNvbnNlcXVlbnQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdWJzdGl0dXRpb25zLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBwcm9vZkZyb21Ob2RlKG5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgbWV0YUxlbW1hID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3Vic3RpdHV0aW9ucywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZik7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscykge1xuICBjb25zdCBzdHJpbmcgPSBsYWJlbHMucmVkdWNlKChzdHJpbmcsIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IChzdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IC8vL1xuICAgICAgICAgICAgICAgICBgJHtzdHJpbmd9LCR7bGFiZWxTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gcHJvb2ZGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IFByb29mIH0gPSBkb20sXG4gICAgICAgIHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICBwcm9vZiA9IFByb29mLmZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgcmV0dXJuIHByb29mO1xufVxuXG5mdW5jdGlvbiBsYWJlbHNGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IExhYmVsIH0gPSBkb20sXG4gICAgICAgIGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBsYWJlbHM7XG59XG5cbmZ1bmN0aW9uIGNvbnNlcXVlbnRGcm9tTm9kZShub2RlLCBmaWxlQ29udGV4dCkge1xuICBjb25zdCB7IENvbnNlcXVlbnQgfSA9IGRvbSxcbiAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICByZXR1cm4gY29uc2VxdWVudDtcbn1cblxuZnVuY3Rpb24gc3VwcG9zaXRpb25zRnJvbU5vZGUobm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgY29uc3QgeyBTdXBwb3NpdGlvbiB9ID0gZG9tLFxuICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gc3VwcG9zaXRpb25zO1xufVxuXG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJzdHJpbmdGcm9tTGFiZWxzIiwicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImJhY2t3YXJkc0V2ZXJ5IiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVudE5vZGVRdWVyeSIsInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibGFiZWxzIiwic3Vic3RpdHV0aW9ucyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJwcm9vZiIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbnQiLCJnZXRQcm9vZiIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJyZWZlcmVuY2VVbmlmaWVkIiwicmVmZXJlbmNlU3RyaW5nIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwidHJhY2UiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImxhYmVsVW5pZmllZCIsImNsZWFyIiwidW5pZnlMYWJlbCIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3RhdGVtZW50VW5pZmllZFdpdGhDb25zZXF1ZW50IiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uc2VxdWVudCIsInVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzIiwicHJvb2ZTdGVwU3VicHJvb2ZzIiwic3RhdGVtZW50QW5kUHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZCIsInByb29mU3RlcFN1YnByb29mc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zIiwidW5pZnlQcm9vZlN0ZXBTdWJwcm9vZnNXaXRoU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb25zZXF1ZW50VW5pZmllZCIsInN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwU3VicHJvb2ZzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiIsInVuaWZ5UHJvb2ZTdGVwU3VicHJvb2ZzV2l0aFN1cHBvc2l0aW9uIiwic3VwcG9zaXRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSIsInVuaWZ5SW5kZXBlbmRlbnRseSIsInByb29mU3RlcCIsInByb29mU3RlcFN1YnByb29mIiwicHJvb2ZTdGVwVW5pZmllZCIsInVuaWZ5UHJvb2ZTdGVwU3VicHJvb2YiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJwcm9vZlZlcmlmaWVkIiwibmFtZU9ubHkiLCJsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJjb25zZXF1ZW50SlNPTiIsImNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwiY29uc2VxdWVudEZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZyb21Ob2RlIiwibm9kZSIsImxhYmVsc0Zyb21Ob2RlIiwic3VwcG9zaXRpb25zRnJvbU5vZGUiLCJjb25zZXF1ZW50RnJvbU5vZGUiLCJwcm9vZkZyb21Ob2RlIiwibWV0YUxlbW1hIiwicmVkdWNlIiwibGFiZWxTdHJpbmciLCJFTVBUWV9TVFJJTkciLCJQcm9vZiIsImRvbSIsInByb29mTm9kZSIsImZyb21Qcm9vZk5vZGUiLCJMYWJlbCIsImxhYmVsTm9kZXMiLCJtYXAiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwiQ29uc2VxdWVudCIsImNvbnNlcXVlbnROb2RlIiwiZnJvbUNvbnNlcXVlbnROb2RlIiwiU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvbk5vZGVzIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQTBCcUJBOztJQXNSTEMsZ0JBQWdC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