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
            key: "unifyStatementAndProofSteps",
            value: function unifyStatementAndProofSteps(statement, proofSteps, context) {
                var statementAndProofStepsUnified = false;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
                var substitutions = _substitutions.default.fromNothing(), statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext);
                if (statementUnifiedWithConsequent) {
                    var proofStepsUnifiedWithSuppositions = this.unifyProofStepsWithSuppositions(proofSteps, substitutions, generalContext, specificContext);
                    if (proofStepsUnifiedWithSuppositions) {
                        var substitutionsResolved = substitutions.areResolved();
                        statementAndProofStepsUnified = substitutionsResolved; ///
                    }
                }
                return statementAndProofStepsUnified;
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
            key: "unifyProofStepsWithSuppositions",
            value: function unifyProofStepsWithSuppositions(proofSteps, substitutions, generalContext, specificContext) {
                var _this = this;
                proofSteps = reverse(proofSteps); ///
                var proofStepsUnifiedWithSuppositions = backwardsEvery(this.suppositions, function(supposition) {
                    var proofStepsUnifiedWithSupposition = _this.unifyProofStepsWithSupposition(proofSteps, supposition, substitutions, generalContext, specificContext);
                    if (proofStepsUnifiedWithSupposition) {
                        return true;
                    }
                });
                return proofStepsUnifiedWithSuppositions;
            }
        },
        {
            key: "unifyProofStepsWithSupposition",
            value: function unifyProofStepsWithSupposition(proofSteps, supposition, substitutions, generalContext, specificContext) {
                var proofStepsUnifiedWithSupposition = false;
                var suppositionUnifiedIndependently = supposition.unifyIndependently(substitutions, generalContext, specificContext);
                if (suppositionUnifiedIndependently) {
                    proofStepsUnifiedWithSupposition = true;
                } else {
                    var proofStep = extract(proofSteps, function(proofStep) {
                        var proofStepUnified = supposition.unifyProofStep(proofStep, substitutions, generalContext, specificContext);
                        if (proofStepUnified) {
                            return true;
                        }
                    }) || null;
                    if (proofStep !== null) {
                        proofStepsUnifiedWithSupposition = true;
                    }
                }
                return proofStepsUnifiedWithSupposition;
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
                var Label = _dom.default.Label, Proof = _dom.default.Proof, Consequent = _dom.default.Consequent, Supposition = _dom.default.Supposition, proofNode = proofNodeQuery(node), labelNodes = labelNodesQuery(node), consequentNode = consequentNodeQuery(node), suppositionNodes = suppositionNodesQuery(node), labels = labelNodes.map(function(labelNode) {
                    var label = Label.fromLabelNode(labelNode, fileContext);
                    return label;
                }), substitutions = _substitutions.default.fromNothing(), suppositions = suppositionNodes.map(function(suppositionNode) {
                    var supposition = Supposition.fromSuppositionNode(suppositionNode, fileContext);
                    return supposition;
                }), consequent = Consequent.fromConsequentNode(consequentNode, fileContext), proof = Proof.fromProofNode(proofNode, fileContext), string = stringFromLabels(labels), metaLemma = new Class(fileContext, string, labels, substitutions, suppositions, consequent, proof);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgY29uc2VxdWVudEZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcmV2ZXJzZSwgZXh0cmFjdCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL2xhYmVscy9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3Vic3RpdHV0aW9ucywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7IHJldHVybiB0aGlzLmNvbnNlcXVlbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVVuaWZpZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gdGhpcywgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmApO1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBmaWxlQ29udGV4dCA9IHRoaXMuZ2V0RmlsZUNvbnRleHQoKSxcbiAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsIC8vL1xuICAgICAgICAgIGxhYmVsVW5pZmllZCA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zLmNsZWFyKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHJlZmVyZW5jZVVuaWZpZWQgPSByZWZlcmVuY2UudW5pZnlMYWJlbChsYWJlbCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VVbmlmaWVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgcmVmZXJlbmNlVW5pZmllZCA9IGxhYmVsVW5pZmllZDsgIC8vL1xuXG4gICAgaWYgKHJlZmVyZW5jZVVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVmZXJlbmNlVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50U3RyaW5nID0gc3RhdGVtZW50LmdldFN0cmluZygpLFxuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSA9IHRoaXMsIC8vL1xuICAgICAgICAgIGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyA9IGF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZS5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuLi5gKTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9ucyA9IHRoaXMuZ2V0U3VwcG9zaXRpb25zKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zTGVuZ3RoID0gc3VwcG9zaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChzdXBwb3NpdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgICBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQsICAvLy9cbiAgICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudCA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoQ29uc2VxdWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZFdpdGhDb25zZXF1ZW50OyAgLy8vXG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwcyhzdGF0ZW1lbnQsIHByb29mU3RlcHMsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgIHNwZWNpZmljQ29udGV4dCA9IGNvbnRleHQ7IC8vL1xuXG4gICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucyA9IHRoaXMudW5pZnlQcm9vZlN0ZXBzV2l0aFN1cHBvc2l0aW9ucyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgc3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zUmVzb2x2ZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGNvbnNlcXVlbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuY29uc2VxdWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnNlcXVlbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXBzV2l0aFN1cHBvc2l0aW9ucyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zID0gYmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwc1dpdGhTdXBwb3NpdGlvbihwcm9vZlN0ZXBzLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbnM7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcHNXaXRoU3VwcG9zaXRpb24ocHJvb2ZTdGVwcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gID1mYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllZEluZGVwZW5kZW50bHkgPSBzdXBwb3NpdGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXAgPSBleHRyYWN0KHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZCA9IHN1cHBvc2l0aW9uLnVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcFVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgICAgICBwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWQgPSB0aGlzLnZlcmlmeUxhYmVscygpO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgY29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnNWZXJpZmllZCA9IHRoaXMuc3VwcG9zaXRpb25zLmV2ZXJ5KChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvblZlcmlmaWVkID0gc3VwcG9zaXRpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChzdXBwb3NpdGlvblZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoc3VwcG9zaXRpb25zVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uc2VxdWVudFZlcmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uc2VxdWVudFZlcmlmaWVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvb2YgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgcHJvb2ZWZXJpZmllZCA9IHRoaXMucHJvb2YudmVyaWZ5KHRoaXMuc3Vic3RpdHV0aW9ucywgdGhpcy5jb25zZXF1ZW50LCBjb250ZXh0KTtcblxuICAgICAgICAgICAgdmVyaWZpZWQgPSBwcm9vZlZlcmlmaWVkOyAvLy9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB2ZXJpZnlMYWJlbHMoKSB7XG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWVPbmx5ID0gdHJ1ZSxcbiAgICAgICAgICAgIGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkID0gbGFiZWwudmVyaWZ5V2hlbkRlY2xhcmVkKHRoaXMuZmlsZUNvbnRleHQsIG5hbWVPbmx5KTtcblxuICAgICAgaWYgKGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGxhYmVsc1ZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04odGhpcy5jb25zZXF1ZW50KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHRoaXMuc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3Vic3RpdHV0aW9ucywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZik7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBMYWJlbCwgUHJvb2YsIENvbnNlcXVlbnQsIFN1cHBvc2l0aW9uIH0gPSBkb20sXG4gICAgICAgICAgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkobm9kZSksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBjb25zZXF1ZW50Tm9kZSA9IGNvbnNlcXVlbnROb2RlUXVlcnkobm9kZSksXG4gICAgICAgICAgc3VwcG9zaXRpb25Ob2RlcyA9IHN1cHBvc2l0aW9uTm9kZXNRdWVyeShub2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uTm9kZXMubWFwKChzdXBwb3NpdGlvbk5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uID0gU3VwcG9zaXRpb24uZnJvbVN1cHBvc2l0aW9uTm9kZShzdXBwb3NpdGlvbk5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHN1cHBvc2l0aW9uO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBDb25zZXF1ZW50LmZyb21Db25zZXF1ZW50Tm9kZShjb25zZXF1ZW50Tm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgbWV0YUxlbW1hID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3Vic3RpdHV0aW9ucywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZik7XG5cbiAgICByZXR1cm4gbWV0YUxlbW1hO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscykge1xuICBjb25zdCBzdHJpbmcgPSBsYWJlbHMucmVkdWNlKChzdHJpbmcsIGxhYmVsKSA9PiB7XG4gICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgIHN0cmluZyA9IChzdHJpbmcgPT09IEVNUFRZX1NUUklORykgP1xuICAgICAgICAgICAgICAgbGFiZWxTdHJpbmc6IC8vL1xuICAgICAgICAgICAgICAgICBgJHtzdHJpbmd9LCR7bGFiZWxTdHJpbmd9YDtcblxuICAgIHJldHVybiBzdHJpbmc7XG4gIH0sIEVNUFRZX1NUUklORyk7XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuIl0sIm5hbWVzIjpbIlRvcExldmVsQXNzZXJ0aW9uIiwic3RyaW5nRnJvbUxhYmVscyIsInJldmVyc2UiLCJhcnJheVV0aWxpdGllcyIsImV4dHJhY3QiLCJiYWNrd2FyZHNFdmVyeSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsImNvbnNlcXVlbnROb2RlUXVlcnkiLCJzdXBwb3NpdGlvbk5vZGVzUXVlcnkiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInN1YnN0aXR1dGlvbnMiLCJzdXBwb3NpdGlvbnMiLCJjb25zZXF1ZW50IiwicHJvb2YiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldExhYmVscyIsImdldFN1YnN0aXR1dGlvbnMiLCJnZXRTdXBwb3NpdGlvbnMiLCJnZXRDb25zZXF1ZW50IiwiZ2V0UHJvb2YiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidW5pZnlSZWZlcmVuY2UiLCJyZWZlcmVuY2UiLCJjb250ZXh0IiwicmVmZXJlbmNlVW5pZmllZCIsInJlZmVyZW5jZVN0cmluZyIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZSIsImF4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZyIsInRyYWNlIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJsYWJlbFVuaWZpZWQiLCJjbGVhciIsInVuaWZ5TGFiZWwiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudCIsInVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQiLCJ1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzIiwic3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQiLCJwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVByb29mU3RlcHNXaXRoU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb25zZXF1ZW50VW5pZmllZCIsInN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24iLCJ1bmlmeVByb29mU3RlcHNXaXRoU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZWRJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5IiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVW5pZmllZCIsInVuaWZ5UHJvb2ZTdGVwIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJsYWJlbHNWZXJpZmllZCIsInZlcmlmeUxhYmVscyIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwiZXZlcnkiLCJzdXBwb3NpdGlvblZlcmlmaWVkIiwiY29uc2VxdWVudFZlcmlmaWVkIiwicHJvb2ZWZXJpZmllZCIsIm5hbWVPbmx5IiwibGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiY29uc2VxdWVudEpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsImNvbnNlcXVlbnRGcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tTm9kZSIsIm5vZGUiLCJMYWJlbCIsImRvbSIsIlByb29mIiwiQ29uc2VxdWVudCIsIlN1cHBvc2l0aW9uIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwiZnJvbUNvbnNlcXVlbnROb2RlIiwiZnJvbVByb29mTm9kZSIsIm1ldGFMZW1tYSIsInJlZHVjZSIsImxhYmVsU3RyaW5nIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBMEJxQkE7O0lBa1NMQyxnQkFBZ0I7ZUFBaEJBOzs7eUJBMVRlOzBEQUVmOzREQUNTO29FQUNDO3lCQUVHO3FCQUNTO29CQVFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FB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