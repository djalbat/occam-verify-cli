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
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _constants = require("./constants");
var _query = require("./utilities/query");
var _json = require("./utilities/json");
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
var extract = _necessary.arrayUtilities.extract, reverse = _necessary.arrayUtilities.reverse, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
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
                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), fileContext = this.getFileContext(), localContext = _local.default.fromFileContext(fileContext), generalContext = localContext, specificContext = context, labelUnified = this.labels.some(function(label) {
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
                    var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context, statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext);
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
                var statementAndProofStepsUnified;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, generalContext, specificContext);
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
                var _this = this;
                var verified = false;
                var labelsVerifiedWhenDeclared = this.labels.every(function(label) {
                    var labelVVerifiedWhenDeclared = label.verifyWhenDeclared(_this.fileContext);
                    if (labelVVerifiedWhenDeclared) {
                        return true;
                    }
                });
                if (labelsVerifiedWhenDeclared) {
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
                var Label = _shim.default.Label, Proof = _shim.default.Proof, Consequent = _shim.default.Consequent, Supposition = _shim.default.Supposition, Substitutions = _shim.default.Substitutions, proofNode = proofNodeQuery(node), labelNodes = labelNodesQuery(node), consequentNode = consequentNodeQuery(node), suppositionNodes = suppositionNodesQuery(node), labels = labelNodes.map(function(labelNode) {
                    var label = Label.fromLabelNode(labelNode, fileContext);
                    return label;
                }), substitutions = Substitutions.fromNothing(), suppositions = suppositionNodes.map(function(suppositionNode) {
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
        string = string === _constants.EMPTY_STRING ? labelString : "".concat(labelString, ", ").concat(labelString);
        return string;
    }, _constants.EMPTY_STRING);
    return string;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbGFiZWxzRnJvbUpTT04sXG4gICAgICAgICBsYWJlbHNUb0xhYmVsc0pTT04sXG4gICAgICAgICBjb25zZXF1ZW50RnJvbUpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGV4dHJhY3QsIHJldmVyc2UsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3Vic3RpdHV0aW9ucywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7IHJldHVybiB0aGlzLmNvbnNlcXVlbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVVuaWZpZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gdGhpcywgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmApO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFVuaWZpZWQgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucy5jbGVhcigpO1xuXG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VVbmlmaWVkID0gcmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJlZmVyZW5jZVVuaWZpZWQgPSBsYWJlbFVuaWZpZWQ7ICAvLy9cblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0xlbmd0aCA9IHN1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGdlbmVyYWxDb250ZXh0ID0gbG9jYWxDb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAgLy8vXG4gICAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudDsgIC8vL1xuICAgIH1cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcHMoc3RhdGVtZW50LCBwcm9vZlN0ZXBzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQgPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQpIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucyA9IHRoaXMudW5pZnlQcm9vZlN0ZXBzV2l0aFN1cHBvc2l0aW9ucyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgc3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zUmVzb2x2ZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IGNvbnNlcXVlbnRVbmlmaWVkO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuY29uc2VxdWVudC51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpOyAgLy8vXG5cbiAgICBjb25zZXF1ZW50VW5pZmllZCA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIGNvbnNlcXVlbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXBzV2l0aFN1cHBvc2l0aW9ucyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zID0gYmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwc1dpdGhTdXBwb3NpdGlvbihwcm9vZlN0ZXBzLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbnM7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcHNXaXRoU3VwcG9zaXRpb24ocHJvb2ZTdGVwcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gID1mYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uVW5pZmllZEluZGVwZW5kZW50bHkgPSBzdXBwb3NpdGlvbi51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25VbmlmaWVkSW5kZXBlbmRlbnRseSkge1xuICAgICAgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXAgPSBleHRyYWN0KHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZCA9IHN1cHBvc2l0aW9uLnVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcFVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgICAgICBwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9uO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkID0gbGFiZWwudmVyaWZ5V2hlbkRlY2xhcmVkKHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBjb250ZXh0ID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICAgIHN1cHBvc2l0aW9uc1ZlcmlmaWVkID0gdGhpcy5zdXBwb3NpdGlvbnMuZXZlcnkoKHN1cHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHN1cHBvc2l0aW9uVmVyaWZpZWQgPSBzdXBwb3NpdGlvbi52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHN1cHBvc2l0aW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChzdXBwb3NpdGlvbnNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25zZXF1ZW50VmVyaWZpZWQgPSB0aGlzLmNvbnNlcXVlbnQudmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25zZXF1ZW50VmVyaWZpZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5wcm9vZiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkodGhpcy5zdWJzdGl0dXRpb25zLCB0aGlzLmNvbnNlcXVlbnQsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHByb29mVmVyaWZpZWQ7IC8vL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBjb25zZXF1ZW50SlNPTiA9IGNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OKHRoaXMuY29uc2VxdWVudCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zSlNPTiA9IHN1cHBvc2l0aW9uc1RvU3VwcG9zaXRpb25zSlNPTih0aGlzLnN1cHBvc2l0aW9ucyksXG4gICAgICAgICAgc3Vic3RpdHV0aW9uc0pTT04gPSBzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTih0aGlzLnN1YnN0aXR1dGlvbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEpTT04sICAvLy9cbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNKU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIGNvbnNlcXVlbnQsXG4gICAgICAgICAgICBzdXBwb3NpdGlvbnMsXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKENsYXNzLCBqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gY29uc2VxdWVudEZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IHN1YnN0aXR1dGlvbnNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIHByb29mID0gbnVsbCxcbiAgICAgICAgICB0b3BMZXZlbEFzc2VydGlvbiA9IG5ldyBDbGFzcyhmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1YnN0aXR1dGlvbnMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHRvcExldmVsQXNzZXJ0aW9uO1xuICB9XG5cbiAgc3RhdGljIGZyb21Ob2RlKENsYXNzLCBub2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTGFiZWwsIFByb29mLCBDb25zZXF1ZW50LCBTdXBwb3NpdGlvbiwgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGNvbnNlcXVlbnROb2RlID0gY29uc2VxdWVudE5vZGVRdWVyeShub2RlKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbk5vZGVzID0gc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25Ob2Rlcy5tYXAoKHN1cHBvc2l0aW9uTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb24gPSBTdXBwb3NpdGlvbi5mcm9tU3VwcG9zaXRpb25Ob2RlKHN1cHBvc2l0aW9uTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gc3VwcG9zaXRpb247XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uc2VxdWVudCA9IENvbnNlcXVlbnQuZnJvbUNvbnNlcXVlbnROb2RlKGNvbnNlcXVlbnROb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBtZXRhTGVtbWEgPSBuZXcgQ2xhc3MoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBzdWJzdGl0dXRpb25zLCBzdXBwb3NpdGlvbnMsIGNvbnNlcXVlbnQsIHByb29mKTtcblxuICAgIHJldHVybiBtZXRhTGVtbWE7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IHN0cmluZyA9IGxhYmVscy5yZWR1Y2UoKHN0cmluZywgbGFiZWwpID0+IHtcbiAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgc3RyaW5nID0gKHN0cmluZyA9PT0gRU1QVFlfU1RSSU5HKSA/XG4gICAgICAgICAgICAgICBsYWJlbFN0cmluZzogLy8vXG4gICAgICAgICAgICAgICAgIGAke2xhYmVsU3RyaW5nfSwgJHtsYWJlbFN0cmluZ31gO1xuXG4gICAgcmV0dXJuIHN0cmluZztcbiAgfSwgRU1QVFlfU1RSSU5HKTtcblxuICByZXR1cm4gc3RyaW5nO1xufVxuXG4iXSwibmFtZXMiOlsiVG9wTGV2ZWxBc3NlcnRpb24iLCJzdHJpbmdGcm9tTGFiZWxzIiwiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwicmV2ZXJzZSIsImJhY2t3YXJkc0V2ZXJ5IiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwiY29uc2VxdWVudE5vZGVRdWVyeSIsInN1cHBvc2l0aW9uTm9kZXNRdWVyeSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibGFiZWxzIiwic3Vic3RpdHV0aW9ucyIsInN1cHBvc2l0aW9ucyIsImNvbnNlcXVlbnQiLCJwcm9vZiIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0U3Vic3RpdHV0aW9ucyIsImdldFN1cHBvc2l0aW9ucyIsImdldENvbnNlcXVlbnQiLCJnZXRQcm9vZiIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ1bmlmeVJlZmVyZW5jZSIsInJlZmVyZW5jZSIsImNvbnRleHQiLCJyZWZlcmVuY2VVbmlmaWVkIiwicmVmZXJlbmNlU3RyaW5nIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlIiwiYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nIiwidHJhY2UiLCJTdWJzdGl0dXRpb25zIiwic2hpbSIsImZyb21Ob3RoaW5nIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwiZ2VuZXJhbENvbnRleHQiLCJzcGVjaWZpY0NvbnRleHQiLCJsYWJlbFVuaWZpZWQiLCJjbGVhciIsInVuaWZ5TGFiZWwiLCJkZWJ1ZyIsInVuaWZ5U3RhdGVtZW50Iiwic3RhdGVtZW50Iiwic3RhdGVtZW50VW5pZmllZCIsInN0YXRlbWVudFN0cmluZyIsInN1cHBvc2l0aW9uc0xlbmd0aCIsImxlbmd0aCIsInN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudCIsInVuaWZ5U3RhdGVtZW50V2l0aENvbnNlcXVlbnQiLCJ1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcHMiLCJwcm9vZlN0ZXBzIiwic3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQiLCJwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbnMiLCJ1bmlmeVByb29mU3RlcHNXaXRoU3VwcG9zaXRpb25zIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJjb25zZXF1ZW50VW5pZmllZCIsInN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24iLCJ1bmlmeVByb29mU3RlcHNXaXRoU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblVuaWZpZWRJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5IiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVW5pZmllZCIsInVuaWZ5UHJvb2ZTdGVwIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCIsImV2ZXJ5IiwibGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJzdXBwb3NpdGlvbnNWZXJpZmllZCIsInN1cHBvc2l0aW9uVmVyaWZpZWQiLCJjb25zZXF1ZW50VmVyaWZpZWQiLCJwcm9vZlZlcmlmaWVkIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsImNvbnNlcXVlbnRKU09OIiwiY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04iLCJzdXBwb3NpdGlvbnNKU09OIiwic3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OIiwic3Vic3RpdHV0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zVG9TdWJzdGl0dXRpb25zSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkNsYXNzIiwibGFiZWxzRnJvbUpTT04iLCJjb25zZXF1ZW50RnJvbUpTT04iLCJzdXBwb3NpdGlvbnNGcm9tSlNPTiIsInN1YnN0aXR1dGlvbnNGcm9tSlNPTiIsInRvcExldmVsQXNzZXJ0aW9uIiwiZnJvbU5vZGUiLCJub2RlIiwiTGFiZWwiLCJQcm9vZiIsIkNvbnNlcXVlbnQiLCJTdXBwb3NpdGlvbiIsInByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJjb25zZXF1ZW50Tm9kZSIsInN1cHBvc2l0aW9uTm9kZXMiLCJtYXAiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwic3VwcG9zaXRpb25Ob2RlIiwiZnJvbVN1cHBvc2l0aW9uTm9kZSIsImZyb21Db25zZXF1ZW50Tm9kZSIsImZyb21Qcm9vZk5vZGUiLCJtZXRhTGVtbWEiLCJyZWR1Y2UiLCJsYWJlbFN0cmluZyIsIkVNUFRZX1NUUklORyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztlQXlCcUJBOztJQThSTEMsZ0JBQWdCO2VBQWhCQTs7O3lCQXJUZTsyREFFZDs0REFDUTt5QkFFSTtxQkFDUztvQkFRVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVqRCxJQUFRQyxVQUFxQ0MseUJBQWMsQ0FBbkRELFNBQVNFLFVBQTRCRCx5QkFBYyxDQUExQ0MsU0FBU0MsaUJBQW1CRix5QkFBYyxDQUFq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