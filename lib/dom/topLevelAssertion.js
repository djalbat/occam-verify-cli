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
var proofNodeQuery = (0, _query.nodeQuery)("/*/proof"), labelNodesQuery = (0, _query.nodesQuery)("/*/label"), consequentNodeQuery = (0, _query.nodeQuery)("/*/consequent"), suppositionNodesQuery = (0, _query.nodesQuery)("/*/supposition");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kb20vdG9wTGV2ZWxBc3NlcnRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgZG9tIGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvbG9jYWxcIjtcbmltcG9ydCBTdWJzdGl0dXRpb25zIGZyb20gXCIuLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcXVlcnlcIjtcbmltcG9ydCB7IGxhYmVsc0Zyb21KU09OLFxuICAgICAgICAgbGFiZWxzVG9MYWJlbHNKU09OLFxuICAgICAgICAgY29uc2VxdWVudEZyb21KU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zRnJvbUpTT04sXG4gICAgICAgICBzdWJzdGl0dXRpb25zRnJvbUpTT04sXG4gICAgICAgICBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTixcbiAgICAgICAgIHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9qc29uXCI7XG5cbmNvbnN0IHsgcmV2ZXJzZSwgZXh0cmFjdCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL2xhYmVsXCIpLFxuICAgICAgY29uc2VxdWVudE5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi8qL2NvbnNlcXVlbnRcIiksXG4gICAgICBzdXBwb3NpdGlvbk5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiLyovc3VwcG9zaXRpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvcExldmVsQXNzZXJ0aW9uIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdWJzdGl0dXRpb25zLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMuc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnM7XG4gICAgdGhpcy5zdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnM7XG4gICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldFN0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdHJpbmc7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0U3Vic3RpdHV0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJzdGl0dXRpb25zO1xuICB9XG5cbiAgZ2V0U3VwcG9zaXRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIGdldENvbnNlcXVlbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uc2VxdWVudDtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHsgcmV0dXJuIHRoaXMuY29uc2VxdWVudC5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVJlZmVyZW5jZShyZWZlcmVuY2UsIGNvbnRleHQpIHtcbiAgICBsZXQgcmVmZXJlbmNlVW5pZmllZDtcblxuICAgIGNvbnN0IHJlZmVyZW5jZVN0cmluZyA9IHJlZmVyZW5jZS5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGZpbGVDb250ZXh0ID0gdGhpcy5nZXRGaWxlQ29udGV4dCgpLFxuICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgLy8vXG4gICAgICAgICAgbGFiZWxVbmlmaWVkID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMuY2xlYXIoKTtcblxuICAgICAgICAgICAgY29uc3QgcmVmZXJlbmNlVW5pZmllZCA9IHJlZmVyZW5jZS51bmlmeUxhYmVsKGxhYmVsLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHJlZmVyZW5jZVVuaWZpZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICByZWZlcmVuY2VVbmlmaWVkID0gbGFiZWxVbmlmaWVkOyAgLy8vXG5cbiAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cmVmZXJlbmNlU3RyaW5nfScgcmVmZXJlbmNlIHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiByZWZlcmVuY2VVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gdGhpcywgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmApO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25zID0gdGhpcy5nZXRTdXBwb3NpdGlvbnMoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNMZW5ndGggPSBzdXBwb3NpdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICAgIGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dCwgIC8vL1xuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb25zZXF1ZW50ID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhDb25zZXF1ZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzKHN0YXRlbWVudCwgcHJvb2ZTdGVwcywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudCA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoQ29uc2VxdWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudCkge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zID0gdGhpcy51bmlmeVByb29mU3RlcHNXaXRoU3VwcG9zaXRpb25zKHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCA9IHN1YnN0aXR1dGlvbnNSZXNvbHZlZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoQ29uc2VxdWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgY29uc2VxdWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7ICAvLy9cblxuICAgIGNvbnNlcXVlbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgLy8vXG5cbiAgICByZXR1cm4gY29uc2VxdWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcHNXaXRoU3VwcG9zaXRpb25zKHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbnMgPSBiYWNrd2FyZHNFdmVyeSh0aGlzLnN1cHBvc2l0aW9ucywgKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiA9IHRoaXMudW5pZnlQcm9vZlN0ZXBzV2l0aFN1cHBvc2l0aW9uKHByb29mU3RlcHMsIHN1cHBvc2l0aW9uLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwc1dpdGhTdXBwb3NpdGlvbihwcm9vZlN0ZXBzLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiAgPWZhbHNlO1xuXG4gICAgY29uc3Qgc3VwcG9zaXRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSA9IHN1cHBvc2l0aW9uLnVuaWZ5SW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdXBwb3NpdGlvblVuaWZpZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcCA9IGV4dHJhY3QocHJvb2ZTdGVwcywgKHByb29mU3RlcCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXBVbmlmaWVkID0gc3VwcG9zaXRpb24udW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgICAgIHByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb247XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZCA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkodGhpcy5zdWJzdGl0dXRpb25zLCB0aGlzLmNvbnNlcXVlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHByb29mVmVyaWZpZWQ7IC8vL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHZlcmlmeUxhYmVscygpIHtcbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZU9ubHkgPSB0cnVlLFxuICAgICAgICAgICAgbGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSBsYWJlbC52ZXJpZnlXaGVuRGVjbGFyZWQodGhpcy5maWxlQ29udGV4dCwgbmFtZU9ubHkpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbGFiZWxzVmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgY29uc2VxdWVudEpTT04gPSBjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTih0aGlzLmNvbnNlcXVlbnQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0pTT04gPSBzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04odGhpcy5zdXBwb3NpdGlvbnMpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnNKU09OID0gc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04odGhpcy5zdWJzdGl0dXRpb25zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRKU09OLCAgLy8vXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBjb25zZXF1ZW50LFxuICAgICAgICAgICAgc3VwcG9zaXRpb25zLFxuICAgICAgICAgICAgc3Vic3RpdHV0aW9uc1xuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihDbGFzcywganNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uc2VxdWVudCA9IGNvbnNlcXVlbnRGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgdG9wTGV2ZWxBc3NlcnRpb24gPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdWJzdGl0dXRpb25zLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHJldHVybiB0b3BMZXZlbEFzc2VydGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTm9kZShDbGFzcywgbm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IExhYmVsLCBQcm9vZiwgQ29uc2VxdWVudCwgU3VwcG9zaXRpb24gfSA9IGRvbSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdWJzdGl0dXRpb25zLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IHN0cmluZyA9IGxhYmVscy5yZWR1Y2UoKHN0cmluZywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICBsYWJlbFN0cmluZzogLy8vXG4gICAgICAgICAgICAgICAgIGAke3N0cmluZ30sJHtsYWJlbFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJzdHJpbmdGcm9tTGFiZWxzIiwicmV2ZXJzZSIsImFycmF5VXRpbGl0aWVzIiwiZXh0cmFjdCIsImJhY2t3YXJkc0V2ZXJ5IiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVudE5vZGVRdWVyeSIsInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibGFiZWxzIiwic3Vic3RpdHV0aW9ucyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJwcm9vZiIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbnQiLCJnZXRQcm9vZiIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJyZWZlcmVuY2VVbmlmaWVkIiwicmVmZXJlbmNlU3RyaW5nIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwidHJhY2UiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImxhYmVsVW5pZmllZCIsImNsZWFyIiwidW5pZnlMYWJlbCIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3RhdGVtZW50VW5pZmllZFdpdGhDb25zZXF1ZW50IiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uc2VxdWVudCIsInVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwcyIsInByb29mU3RlcHMiLCJzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCIsInByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucyIsInVuaWZ5UHJvb2ZTdGVwc1dpdGhTdXBwb3NpdGlvbnMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsImNvbnNlcXVlbnRVbmlmaWVkIiwic3VwcG9zaXRpb24iLCJwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiIsInVuaWZ5UHJvb2ZTdGVwc1dpdGhTdXBwb3NpdGlvbiIsInN1cHBvc2l0aW9uVW5pZmllZEluZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXAiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwic3VwcG9zaXRpb25zVmVyaWZpZWQiLCJldmVyeSIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJwcm9vZlZlcmlmaWVkIiwibmFtZU9ubHkiLCJsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsInRvSlNPTiIsImxhYmVsc0pTT04iLCJsYWJlbHNUb0xhYmVsc0pTT04iLCJjb25zZXF1ZW50SlNPTiIsImNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OIiwic3VwcG9zaXRpb25zSlNPTiIsInN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04iLCJqc29uIiwiZnJvbUpTT04iLCJDbGFzcyIsImxhYmVsc0Zyb21KU09OIiwiY29uc2VxdWVudEZyb21KU09OIiwic3VwcG9zaXRpb25zRnJvbUpTT04iLCJzdWJzdGl0dXRpb25zRnJvbUpTT04iLCJ0b3BMZXZlbEFzc2VydGlvbiIsImZyb21Ob2RlIiwibm9kZSIsIkxhYmVsIiwiZG9tIiwiUHJvb2YiLCJDb25zZXF1ZW50IiwiU3VwcG9zaXRpb24iLCJwcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwiY29uc2VxdWVudE5vZGUiLCJzdXBwb3NpdGlvbk5vZGVzIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsInN1cHBvc2l0aW9uTm9kZSIsImZyb21TdXBwb3NpdGlvbk5vZGUiLCJmcm9tQ29uc2VxdWVudE5vZGUiLCJmcm9tUHJvb2ZOb2RlIiwibWV0YUxlbW1hIiwicmVkdWNlIiwibGFiZWxTdHJpbmciLCJFTVBUWV9TVFJJTkciXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7ZUEwQnFCQTs7SUFrU0xDLGdCQUFnQjtlQUFoQkE7Ozt5QkExVGU7MERBRWY7NERBQ1M7b0VBQ0M7eUJBRUc7cUJBQ1M7b0JBUVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFakQsSUFB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