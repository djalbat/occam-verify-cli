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
                    var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, context);
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
                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), statementUnifiedWithConsequent = this.unifyStatementWithConsequent(statement, substitutions, context);
                if (statementUnifiedWithConsequent) {
                    var proofStepsUnifiedWithSuppositions = this.unifyProofStepsWithSuppositions(proofSteps, substitutions, context);
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
            value: function unifyStatementWithConsequent(statement, substitutions, context) {
                var consequentUnified;
                var consequentString = this.consequent.getString();
                context.trace("Unifying the '".concat(consequentString, "' consequent..."));
                var statementUnified = this.consequent.unifyStatement(statement, substitutions, context); ///
                consequentUnified = statementUnified; ///
                if (consequentUnified) {
                    context.debug("...unified the '".concat(consequentString, "' consequent"));
                }
                return consequentUnified;
            }
        },
        {
            key: "unifyProofStepsWithSuppositions",
            value: function unifyProofStepsWithSuppositions(proofSteps, substitutions, context) {
                var _this = this;
                proofSteps = reverse(proofSteps); ///
                var proofStepsUnifiedWithSuppositions = backwardsEvery(this.suppositions, function(supposition) {
                    var proofStepsUnifiedWithSupposition = _this.unifyProofStepsWithSupposition(proofSteps, supposition, substitutions, context);
                    if (proofStepsUnifiedWithSupposition) {
                        return true;
                    }
                });
                return proofStepsUnifiedWithSuppositions;
            }
        },
        {
            key: "unifyProofStepsWithSupposition",
            value: function unifyProofStepsWithSupposition(proofSteps, supposition, substitutions, context) {
                var proofStepsUnifiedWithSupposition = false;
                var suppositionString = supposition.getString();
                context.trace("Unifying with the '".concat(suppositionString, "' supposition..."));
                var suppositionResolvedIndependently = supposition.resolveIndependently(substitutions, context);
                if (suppositionResolvedIndependently) {
                    proofStepsUnifiedWithSupposition = true;
                } else {
                    var proofStep = extract(proofSteps, function(proofStep) {
                        var proofStepUnified = supposition.unifyProofStep(proofStep, substitutions, context);
                        if (proofStepUnified) {
                            return true;
                        }
                    }) || null;
                    if (proofStep !== null) {
                        proofStepsUnifiedWithSupposition = true;
                    }
                }
                if (proofStepsUnifiedWithSupposition) {
                    context.debug("...unified with the '".concat(suppositionString, "' supposition."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90b3BMZXZlbEFzc2VydGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCBzaGltIGZyb20gXCIuL3NoaW1cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuXG5pbXBvcnQgeyBFTVBUWV9TVFJJTkcgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuaW1wb3J0IHsgbGFiZWxzRnJvbUpTT04sXG4gICAgICAgICBsYWJlbHNUb0xhYmVsc0pTT04sXG4gICAgICAgICBjb25zZXF1ZW50RnJvbUpTT04sXG4gICAgICAgICBzdXBwb3NpdGlvbnNGcm9tSlNPTixcbiAgICAgICAgIHN1YnN0aXR1dGlvbnNGcm9tSlNPTixcbiAgICAgICAgIGNvbnNlcXVlbnRUb0NvbnNlcXVlbnRKU09OLFxuICAgICAgICAgc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OLFxuICAgICAgICAgc3Vic3RpdHV0aW9uc1RvU3Vic3RpdHV0aW9uc0pTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGV4dHJhY3QsIHJldmVyc2UsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvKi9sYWJlbFwiKSxcbiAgICAgIGNvbnNlcXVlbnROb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvKi9jb25zZXF1ZW50XCIpLFxuICAgICAgc3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi8qL3N1cHBvc2l0aW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb3BMZXZlbEFzc2VydGlvbiB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3Vic3RpdHV0aW9ucywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZikge1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgICB0aGlzLnN0cmluZyA9IHN0cmluZztcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnN1YnN0aXR1dGlvbnMgPSBzdWJzdGl0dXRpb25zO1xuICAgIHRoaXMuc3VwcG9zaXRpb25zID0gc3VwcG9zaXRpb25zO1xuICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyaW5nO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFN1YnN0aXR1dGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic3RpdHV0aW9ucztcbiAgfVxuXG4gIGdldFN1cHBvc2l0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5zdXBwb3NpdGlvbnM7XG4gIH1cblxuICBnZXRDb25zZXF1ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnNlcXVlbnQ7XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlKSB7IHJldHVybiB0aGlzLmNvbnNlcXVlbnQubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpOyB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTmFtZShtZXRhdmFyaWFibGVOYW1lKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzO1xuICB9XG5cbiAgdW5pZnlSZWZlcmVuY2UocmVmZXJlbmNlLCBjb250ZXh0KSB7XG4gICAgbGV0IHJlZmVyZW5jZVVuaWZpZWQ7XG5cbiAgICBjb25zdCByZWZlcmVuY2VTdHJpbmcgPSByZWZlcmVuY2UuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlID0gdGhpcywgLy8vXG4gICAgICAgICAgYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nID0gYXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3JlZmVyZW5jZVN0cmluZ30nIHJlZmVyZW5jZSB3aXRoIHRoZSAnJHtheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmd9JyBheGlvbSwgbGVtbWEsIHRoZW9yZW0gb3IgY29uamVjdHVyZS4uLmApO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgZmlsZUNvbnRleHQgPSB0aGlzLmdldEZpbGVDb250ZXh0KCksXG4gICAgICAgICAgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgZ2VuZXJhbENvbnRleHQgPSBsb2NhbENvbnRleHQsICAvLy9cbiAgICAgICAgICBzcGVjaWZpY0NvbnRleHQgPSBjb250ZXh0LCAvLy9cbiAgICAgICAgICBsYWJlbFVuaWZpZWQgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgc3Vic3RpdHV0aW9ucy5jbGVhcigpO1xuXG4gICAgICAgICAgICBjb25zdCByZWZlcmVuY2VVbmlmaWVkID0gcmVmZXJlbmNlLnVuaWZ5TGFiZWwobGFiZWwsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpO1xuXG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlVW5pZmllZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgIHJlZmVyZW5jZVVuaWZpZWQgPSBsYWJlbFVuaWZpZWQ7ICAvLy9cblxuICAgIGlmIChyZWZlcmVuY2VVbmlmaWVkKSB7XG4gICAgICBjb250ZXh0LmRlYnVnKGAuLi51bmlmaWVkIHRoZSAnJHtyZWZlcmVuY2VTdHJpbmd9JyByZWZlcmVuY2Ugd2l0aCB0aGUgJyR7YXhpb21MZW1tYVRoZW9yZW1Db25qZWN0dXJlU3RyaW5nfScgYXhpb20sIGxlbW1hLCB0aGVvcmVtIG9yIGNvbmplY3R1cmUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZmVyZW5jZVVuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICBsZXQgc3RhdGVtZW50VW5pZmllZDtcblxuICAgIGNvbnN0IHN0YXRlbWVudFN0cmluZyA9IHN0YXRlbWVudC5nZXRTdHJpbmcoKSxcbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUgPSB0aGlzLCAvLy9cbiAgICAgICAgICBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmcgPSBheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUuZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLi4uYCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvbnMgPSB0aGlzLmdldFN1cHBvc2l0aW9ucygpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uc0xlbmd0aCA9IHN1cHBvc2l0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoc3VwcG9zaXRpb25zTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb25zZXF1ZW50ID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhDb25zZXF1ZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbnNlcXVlbnQ7ICAvLy9cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZCkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7c3RhdGVtZW50U3RyaW5nfScgc3RhdGVtZW50IHdpdGggdGhlICcke2F4aW9tTGVtbWFUaGVvcmVtQ29uamVjdHVyZVN0cmluZ30nIGF4aW9tLCBsZW1tYSwgdGhlb3JlbSBvciBjb25qZWN0dXJlLmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzKHN0YXRlbWVudCwgcHJvb2ZTdGVwcywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZDtcblxuICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudCA9IHRoaXMudW5pZnlTdGF0ZW1lbnRXaXRoQ29uc2VxdWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uc2VxdWVudCkge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zID0gdGhpcy51bmlmeVByb29mU3RlcHNXaXRoU3VwcG9zaXRpb25zKHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMuYXJlUmVzb2x2ZWQoKTtcblxuICAgICAgICBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCA9IHN1YnN0aXR1dGlvbnNSZXNvbHZlZDsgLy8vXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnRXaXRoQ29uc2VxdWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgY29uc2VxdWVudFVuaWZpZWQ7XG5cbiAgICBjb25zdCBjb25zZXF1ZW50U3RyaW5nID0gdGhpcy5jb25zZXF1ZW50LmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50Li4uYCk7XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5jb25zZXF1ZW50LnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7ICAvLy9cblxuICAgIGNvbnNlcXVlbnRVbmlmaWVkID0gc3RhdGVtZW50VW5pZmllZDsgLy8vXG5cbiAgICBpZiAoY29uc2VxdWVudFVuaWZpZWQpIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke2NvbnNlcXVlbnRTdHJpbmd9JyBjb25zZXF1ZW50YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnNlcXVlbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXBzV2l0aFN1cHBvc2l0aW9ucyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb25zID0gYmFja3dhcmRzRXZlcnkodGhpcy5zdXBwb3NpdGlvbnMsIChzdXBwb3NpdGlvbikgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwc1dpdGhTdXBwb3NpdGlvbihwcm9vZlN0ZXBzLCBzdXBwb3NpdGlvbiwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbnM7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcHNXaXRoU3VwcG9zaXRpb24ocHJvb2ZTdGVwcywgc3VwcG9zaXRpb24sIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24gID1mYWxzZTtcblxuICAgIGNvbnN0IHN1cHBvc2l0aW9uU3RyaW5nID0gc3VwcG9zaXRpb24uZ2V0U3RyaW5nKCk7XG5cbiAgICBjb250ZXh0LnRyYWNlKGBVbmlmeWluZyB3aXRoIHRoZSAnJHtzdXBwb3NpdGlvblN0cmluZ30nIHN1cHBvc2l0aW9uLi4uYCk7XG5cbiAgICBjb25zdCBzdXBwb3NpdGlvblJlc29sdmVkSW5kZXBlbmRlbnRseSA9IHN1cHBvc2l0aW9uLnJlc29sdmVJbmRlcGVuZGVudGx5KHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgaWYgKHN1cHBvc2l0aW9uUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBwcm9vZlN0ZXBzVW5pZmllZFdpdGhTdXBwb3NpdGlvbiA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcCA9IGV4dHJhY3QocHJvb2ZTdGVwcywgKHByb29mU3RlcCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9vZlN0ZXBVbmlmaWVkID0gc3VwcG9zaXRpb24udW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAocHJvb2ZTdGVwVW5pZmllZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KSB8fCBudWxsO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwICE9PSBudWxsKSB7XG4gICAgICAgIHByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9uID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgd2l0aCB0aGUgJyR7c3VwcG9zaXRpb25TdHJpbmd9JyBzdXBwb3NpdGlvbi5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb247XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSBsYWJlbC52ZXJpZnlXaGVuRGVjbGFyZWQodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIGNvbnRleHQgPSBsb2NhbENvbnRleHQsIC8vL1xuICAgICAgICAgICAgc3VwcG9zaXRpb25zVmVyaWZpZWQgPSB0aGlzLnN1cHBvc2l0aW9ucy5ldmVyeSgoc3VwcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgc3VwcG9zaXRpb25WZXJpZmllZCA9IHN1cHBvc2l0aW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAoc3VwcG9zaXRpb25WZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHN1cHBvc2l0aW9uc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGNvbnNlcXVlbnRWZXJpZmllZCA9IHRoaXMuY29uc2VxdWVudC52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbnNlcXVlbnRWZXJpZmllZCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb29mID09PSBudWxsKSB7XG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeSh0aGlzLnN1YnN0aXR1dGlvbnMsIHRoaXMuY29uc2VxdWVudCwgY29udGV4dCk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gcHJvb2ZWZXJpZmllZDsgLy8vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIGNvbnNlcXVlbnRKU09OID0gY29uc2VxdWVudFRvQ29uc2VxdWVudEpTT04odGhpcy5jb25zZXF1ZW50KSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnNKU09OID0gc3VwcG9zaXRpb25zVG9TdXBwb3NpdGlvbnNKU09OKHRoaXMuc3VwcG9zaXRpb25zKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zSlNPTiA9IHN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OKHRoaXMuc3Vic3RpdHV0aW9ucyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50SlNPTiwgIC8vL1xuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0pTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgY29uc2VxdWVudCxcbiAgICAgICAgICAgIHN1cHBvc2l0aW9ucyxcbiAgICAgICAgICAgIHN1YnN0aXR1dGlvbnNcbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oQ2xhc3MsIGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbnNlcXVlbnQgPSBjb25zZXF1ZW50RnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN1cHBvc2l0aW9ucyA9IHN1cHBvc2l0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gc3Vic3RpdHV0aW9uc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIHRvcExldmVsQXNzZXJ0aW9uID0gbmV3IENsYXNzKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgc3Vic3RpdHV0aW9ucywgc3VwcG9zaXRpb25zLCBjb25zZXF1ZW50LCBwcm9vZik7XG5cbiAgICByZXR1cm4gdG9wTGV2ZWxBc3NlcnRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbU5vZGUoQ2xhc3MsIG5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBMYWJlbCwgUHJvb2YsIENvbnNlcXVlbnQsIFN1cHBvc2l0aW9uLCBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgIHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgY29uc2VxdWVudE5vZGUgPSBjb25zZXF1ZW50Tm9kZVF1ZXJ5KG5vZGUpLFxuICAgICAgICAgIHN1cHBvc2l0aW9uTm9kZXMgPSBzdXBwb3NpdGlvbk5vZGVzUXVlcnkobm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdXBwb3NpdGlvbnMgPSBzdXBwb3NpdGlvbk5vZGVzLm1hcCgoc3VwcG9zaXRpb25Ob2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdXBwb3NpdGlvbiA9IFN1cHBvc2l0aW9uLmZyb21TdXBwb3NpdGlvbk5vZGUoc3VwcG9zaXRpb25Ob2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdXBwb3NpdGlvbjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25zZXF1ZW50ID0gQ29uc2VxdWVudC5mcm9tQ29uc2VxdWVudE5vZGUoY29uc2VxdWVudE5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IFByb29mLmZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIG1ldGFMZW1tYSA9IG5ldyBDbGFzcyhmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHN1YnN0aXR1dGlvbnMsIHN1cHBvc2l0aW9ucywgY29uc2VxdWVudCwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIG1ldGFMZW1tYTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpIHtcbiAgY29uc3Qgc3RyaW5nID0gbGFiZWxzLnJlZHVjZSgoc3RyaW5nLCBsYWJlbCkgPT4ge1xuICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICBzdHJpbmcgPSAoc3RyaW5nID09PSBFTVBUWV9TVFJJTkcpID9cbiAgICAgICAgICAgICAgIGxhYmVsU3RyaW5nOiAvLy9cbiAgICAgICAgICAgICAgICAgYCR7bGFiZWxTdHJpbmd9LCAke2xhYmVsU3RyaW5nfWA7XG5cbiAgICByZXR1cm4gc3RyaW5nO1xuICB9LCBFTVBUWV9TVFJJTkcpO1xuXG4gIHJldHVybiBzdHJpbmc7XG59XG5cbiJdLCJuYW1lcyI6WyJUb3BMZXZlbEFzc2VydGlvbiIsInN0cmluZ0Zyb21MYWJlbHMiLCJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXZlcnNlIiwiYmFja3dhcmRzRXZlcnkiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJjb25zZXF1ZW50Tm9kZVF1ZXJ5Iiwic3VwcG9zaXRpb25Ob2Rlc1F1ZXJ5IiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJzdWJzdGl0dXRpb25zIiwic3VwcG9zaXRpb25zIiwiY29uc2VxdWVudCIsInByb29mIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRMYWJlbHMiLCJnZXRTdWJzdGl0dXRpb25zIiwiZ2V0U3VwcG9zaXRpb25zIiwiZ2V0Q29uc2VxdWVudCIsImdldFByb29mIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInVuaWZ5UmVmZXJlbmNlIiwicmVmZXJlbmNlIiwiY29udGV4dCIsInJlZmVyZW5jZVVuaWZpZWQiLCJyZWZlcmVuY2VTdHJpbmciLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmUiLCJheGlvbUxlbW1hVGhlb3JlbUNvbmplY3R1cmVTdHJpbmciLCJ0cmFjZSIsIlN1YnN0aXR1dGlvbnMiLCJzaGltIiwiZnJvbU5vdGhpbmciLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsImxhYmVsVW5pZmllZCIsImNsZWFyIiwidW5pZnlMYWJlbCIsImRlYnVnIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3RhdGVtZW50U3RyaW5nIiwic3VwcG9zaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwic3RhdGVtZW50VW5pZmllZFdpdGhDb25zZXF1ZW50IiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uc2VxdWVudCIsInVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwcyIsInByb29mU3RlcHMiLCJzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCIsInByb29mU3RlcHNVbmlmaWVkV2l0aFN1cHBvc2l0aW9ucyIsInVuaWZ5UHJvb2ZTdGVwc1dpdGhTdXBwb3NpdGlvbnMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsImNvbnNlcXVlbnRVbmlmaWVkIiwiY29uc2VxdWVudFN0cmluZyIsInN1cHBvc2l0aW9uIiwicHJvb2ZTdGVwc1VuaWZpZWRXaXRoU3VwcG9zaXRpb24iLCJ1bmlmeVByb29mU3RlcHNXaXRoU3VwcG9zaXRpb24iLCJzdXBwb3NpdGlvblN0cmluZyIsInN1cHBvc2l0aW9uUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwicmVzb2x2ZUluZGVwZW5kZW50bHkiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXAiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsImxhYmVsc1ZlcmlmaWVkV2hlbkRlY2xhcmVkIiwiZXZlcnkiLCJsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCIsInZlcmlmeVdoZW5EZWNsYXJlZCIsInN1cHBvc2l0aW9uc1ZlcmlmaWVkIiwic3VwcG9zaXRpb25WZXJpZmllZCIsImNvbnNlcXVlbnRWZXJpZmllZCIsInByb29mVmVyaWZpZWQiLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwiY29uc2VxdWVudEpTT04iLCJjb25zZXF1ZW50VG9Db25zZXF1ZW50SlNPTiIsInN1cHBvc2l0aW9uc0pTT04iLCJzdXBwb3NpdGlvbnNUb1N1cHBvc2l0aW9uc0pTT04iLCJzdWJzdGl0dXRpb25zSlNPTiIsInN1YnN0aXR1dGlvbnNUb1N1YnN0aXR1dGlvbnNKU09OIiwianNvbiIsImZyb21KU09OIiwiQ2xhc3MiLCJsYWJlbHNGcm9tSlNPTiIsImNvbnNlcXVlbnRGcm9tSlNPTiIsInN1cHBvc2l0aW9uc0Zyb21KU09OIiwic3Vic3RpdHV0aW9uc0Zyb21KU09OIiwidG9wTGV2ZWxBc3NlcnRpb24iLCJmcm9tTm9kZSIsIm5vZGUiLCJMYWJlbCIsIlByb29mIiwiQ29uc2VxdWVudCIsIlN1cHBvc2l0aW9uIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsImNvbnNlcXVlbnROb2RlIiwic3VwcG9zaXRpb25Ob2RlcyIsIm1hcCIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJzdXBwb3NpdGlvbk5vZGUiLCJmcm9tU3VwcG9zaXRpb25Ob2RlIiwiZnJvbUNvbnNlcXVlbnROb2RlIiwiZnJvbVByb29mTm9kZSIsIm1ldGFMZW1tYSIsInJlZHVjZSIsImxhYmVsU3RyaW5nIiwiRU1QVFlfU1RSSU5HIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O2VBeUJxQkE7O0lBdVNMQyxnQkFBZ0I7ZUFBaEJBOzs7eUJBOVRlOzJEQUVkOzREQUNRO3lCQUVJO3FCQUNTO29CQVFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpELElBQVFDLFVBQXFDQyx5QkFBYyxDQUFuREQsU0FBU0UsVUFBNEJELHlCQUFjLENBQTFDQyxTQUFTQyxpQkFBbUJGLHlCQUFjLENBQWpDRTtBQUUx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