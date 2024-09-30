"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return Rule;
    }
});
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _proof = /*#__PURE__*/ _interop_require_default(require("./proof"));
var _premise = /*#__PURE__*/ _interop_require_default(require("./premise"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./conclusion"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
var _substitutions1 = /*#__PURE__*/ _interop_require_default(require("./resolve/substitutions"));
var _premisesWithProofSteps = /*#__PURE__*/ _interop_require_default(require("./unify/premisesWithProofSteps"));
var _conclusionWithStatement = /*#__PURE__*/ _interop_require_default(require("./unify/conclusionWithStatement"));
var _query = require("./utilities/query");
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
var proofNodeQuery = (0, _query.nodeQuery)("/rule/proof"), labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), premiseNodesQuery = (0, _query.nodesQuery)("/rule/premise"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion");
var Rule = /*#__PURE__*/ function() {
    function Rule(labels, premises, conclusion, proof) {
        _class_call_check(this, Rule);
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
        this.proof = proof;
    }
    _create_class(Rule, [
        {
            key: "getLabels",
            value: function getLabels() {
                return this.labels;
            }
        },
        {
            key: "getPremises",
            value: function getPremises() {
                return this.premises;
            }
        },
        {
            key: "getConclusion",
            value: function getConclusion() {
                return this.conclusion;
            }
        },
        {
            key: "getProof",
            value: function getProof() {
                return this.proof;
            }
        },
        {
            // unifyStatement(statementNode, localContext) {
            //   let statementUnified = false;
            //
            //   const substitutions = Substitutions.fromNothing(),
            //         proofSteps = localContext.getProofSteps(),
            //         premisesA = this.premises,
            //         proofStepsB = proofSteps, ///
            //         fileContextA = this.fileContext,  ///
            //         localContextB = localContext, ///
            //         premisesUnified = unifyPremisesWithProofSteps(premisesA, proofStepsB, substitutions, fileContextA, localContextB);
            //
            //   if (premisesUnified) {
            //     const conclusionA = this.conclusion,  ///
            //           conclusionUnified = unifyConclusionWithStatement(conclusionA, statementNode, substitutions, fileContextA, localContextB);
            //
            //     if (conclusionUnified) {
            //       const substitutionsResolved = resolveSubstitutions(substitutions, fileContextA, localContextB);
            //
            //       statementUnified = substitutionsResolved; ///
            //     }
            //   }
            //
            //   return statementUnified;
            // }
            // matchMetavariableNode(metavariableNode) {
            //   const metavariableNodeMatches = this.labels.some((label) => {
            //     const metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);
            //
            //     if (metavariableNodeMatches) {
            //       return true;
            //     }
            //   });
            //
            //   return metavariableNodeMatches;
            // }
            key: "verify",
            value: function verify(fileContext) {
                var verified = false;
                var labelsString = labelsStringFromLabels(this.labels);
                fileContext.trace("Verifying the '".concat(labelsString, "' rule..."));
                var labelsVerified = this.labels.every(function(label) {
                    var labelVVerified = label.verify(fileContext);
                    if (labelVVerified) {
                        return true;
                    }
                });
                if (labelsVerified) {
                    var localContext = _local.default.fromFileContext(fileContext), premisesVerified = this.premises.every(function(premise) {
                        var premiseVerified = premise.verify(localContext);
                        if (premiseVerified) {
                            return true;
                        }
                    });
                    if (premisesVerified) {
                        var conclusionVerified = this.conclusion.verify(localContext);
                        if (conclusionVerified) {
                            var proofVerified = true; ///
                            if (this.proof !== null) {
                                var substitutions = _substitutions.default.fromNothing();
                                proofVerified = this.proof.verify(substitutions, this.conclusion, localContext);
                            }
                            if (proofVerified) {
                                var rule = this; ///
                                fileContext.addRule(rule);
                                verified = true;
                            }
                        }
                    }
                }
                if (verified) {
                    fileContext.debug("...verified the '".concat(labelsString, "' rule."));
                }
                return verified;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(fileContext) {
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON(fileContext);
                    return labelJSON;
                }), premisesJSON = this.premises.map(function(premise) {
                    var premiseJSON = premise.toJSON(fileContext);
                    return premiseJSON;
                }), conclusionJSON = this.conclusion.toJSON(fileContext), labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
                    labels: labels,
                    premises: premises,
                    conclusion: conclusion
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSON",
            value: function fromJSON(json, fileContext) {
                var rule;
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, fileContext);
                    return label;
                });
                var premises = json.premises;
                var premisesJSON = premises; ///
                premises = premisesJSON.map(function(premiseJSON) {
                    var _$json = premiseJSON, premise = _premise.default.fromJSON(_$json, fileContext);
                    return premise;
                });
                var conclusion = json.conclusion;
                var conclusionJSON = conclusion; ///
                json = conclusionJSON; ///
                conclusion = _conclusion.default.fromJSON(json, fileContext);
                var proof = null;
                rule = new Rule(labels, premises, conclusion, proof);
                return rule;
            }
        },
        {
            key: "fromRuleNode",
            value: function fromRuleNode(ruleNode, fileContext) {
                var proofNode = proofNodeQuery(ruleNode), labelNodes = labelNodesQuery(ruleNode), premiseNodes = premiseNodesQuery(ruleNode), conclusionNode = conclusionNodeQuery(ruleNode), labels = labelNodes.map(function(labelNode) {
                    var label = _label.default.fromLabelNode(labelNode, fileContext);
                    return label;
                }), premises = premiseNodes.map(function(premiseNode) {
                    var premise = _premise.default.fromPremiseNode(premiseNode, fileContext);
                    return premise;
                }), conclusion = _conclusion.default.fromConclusionNode(conclusionNode, fileContext), proof = _proof.default.fromProofNode(proofNode, fileContext), rule = new Rule(labels, premises, conclusion, proof);
                return rule;
            }
        }
    ]);
    return Rule;
}();
function labelsStringFromLabels(labels) {
    var labelsString = labels.map(function(label) {
        var labelString = label.getString();
        return labelString;
    });
    return labelsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcm9vZiBmcm9tIFwiLi9wcm9vZlwiO1xuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4vcHJlbWlzZVwiO1xuaW1wb3J0IENvbmNsdXNpb24gZnJvbSBcIi4vY29uY2x1c2lvblwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgcmVzb2x2ZVN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vcmVzb2x2ZS9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgdW5pZnlQcmVtaXNlc1dpdGhQcm9vZlN0ZXBzIGZyb20gXCIuL3VuaWZ5L3ByZW1pc2VzV2l0aFByb29mU3RlcHNcIjtcbmltcG9ydCB1bmlmeUNvbmNsdXNpb25XaXRoU3RhdGVtZW50IGZyb20gXCIuL3VuaWZ5L2NvbmNsdXNpb25XaXRoU3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL2xhYmVsXCIpLFxuICAgICAgcHJlbWlzZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvcHJlbWlzZVwiKSxcbiAgICAgIGNvbmNsdXNpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9jb25jbHVzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIC8vIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAvLyAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG4gIC8vXG4gIC8vICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgLy8gICAgICAgICBwcm9vZlN0ZXBzID0gbG9jYWxDb250ZXh0LmdldFByb29mU3RlcHMoKSxcbiAgLy8gICAgICAgICBwcmVtaXNlc0EgPSB0aGlzLnByZW1pc2VzLFxuICAvLyAgICAgICAgIHByb29mU3RlcHNCID0gcHJvb2ZTdGVwcywgLy8vXG4gIC8vICAgICAgICAgZmlsZUNvbnRleHRBID0gdGhpcy5maWxlQ29udGV4dCwgIC8vL1xuICAvLyAgICAgICAgIGxvY2FsQ29udGV4dEIgPSBsb2NhbENvbnRleHQsIC8vL1xuICAvLyAgICAgICAgIHByZW1pc2VzVW5pZmllZCA9IHVuaWZ5UHJlbWlzZXNXaXRoUHJvb2ZTdGVwcyhwcmVtaXNlc0EsIHByb29mU3RlcHNCLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuICAvL1xuICAvLyAgIGlmIChwcmVtaXNlc1VuaWZpZWQpIHtcbiAgLy8gICAgIGNvbnN0IGNvbmNsdXNpb25BID0gdGhpcy5jb25jbHVzaW9uLCAgLy8vXG4gIC8vICAgICAgICAgICBjb25jbHVzaW9uVW5pZmllZCA9IHVuaWZ5Q29uY2x1c2lvbldpdGhTdGF0ZW1lbnQoY29uY2x1c2lvbkEsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG4gIC8vXG4gIC8vICAgICBpZiAoY29uY2x1c2lvblVuaWZpZWQpIHtcbiAgLy8gICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gcmVzb2x2ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcbiAgLy9cbiAgLy8gICAgICAgc3RhdGVtZW50VW5pZmllZCA9IHN1YnN0aXR1dGlvbnNSZXNvbHZlZDsgLy8vXG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvL1xuICAvLyAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICAvLyB9XG5cbiAgLy8gbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgLy8gICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gIC8vICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcbiAgLy9cbiAgLy8gICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAvLyAgICAgICByZXR1cm4gdHJ1ZTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy9cbiAgLy8gICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIC8vIH1cblxuICB2ZXJpZnkoZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVsc1N0cmluZ0Zyb21MYWJlbHModGhpcy5sYWJlbHMpO1xuXG4gICAgZmlsZUNvbnRleHQudHJhY2UoYFZlcmlmeWluZyB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkID0gbGFiZWwudmVyaWZ5KGZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVlZlcmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGxhYmVsc1ZlcmlmaWVkKSB7XG4gICAgICBjb25zdCBsb2NhbENvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KGZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHByZW1pc2VzVmVyaWZpZWQgPSB0aGlzLnByZW1pc2VzLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllZCA9IHByZW1pc2UudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByZW1pc2VzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uY2x1c2lvblZlcmlmaWVkID0gdGhpcy5jb25jbHVzaW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICBsZXQgcHJvb2ZWZXJpZmllZCA9IHRydWU7IC8vL1xuXG4gICAgICAgICAgaWYgKHRoaXMucHJvb2YgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmNvbmNsdXNpb24sIGxvY2FsQ29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgIGZpbGVDb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSB0aGlzLnByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTihmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IHRoaXMuY29uY2x1c2lvbi50b0pTT04oZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gICAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBwcm9vZiA9IG51bGw7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBjb25jbHVzaW9uTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VOb2Rlcy5tYXAoKHByZW1pc2VOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlID0gUHJlbWlzZS5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNTdHJpbmcgPSBsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICByZXR1cm4gbGFiZWxTdHJpbmc7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBsYWJlbHNTdHJpbmc7XG59Il0sIm5hbWVzIjpbIlJ1bGUiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcmVtaXNlTm9kZXNRdWVyeSIsImNvbmNsdXNpb25Ob2RlUXVlcnkiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJwcm9vZiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsImdldFByb29mIiwidmVyaWZ5IiwiZmlsZUNvbnRleHQiLCJ2ZXJpZmllZCIsImxhYmVsc1N0cmluZyIsImxhYmVsc1N0cmluZ0Zyb21MYWJlbHMiLCJ0cmFjZSIsImxhYmVsc1ZlcmlmaWVkIiwiZXZlcnkiLCJsYWJlbCIsImxhYmVsVlZlcmlmaWVkIiwibG9jYWxDb250ZXh0IiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwicHJlbWlzZXNWZXJpZmllZCIsInByZW1pc2UiLCJwcmVtaXNlVmVyaWZpZWQiLCJjb25jbHVzaW9uVmVyaWZpZWQiLCJwcm9vZlZlcmlmaWVkIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInJ1bGUiLCJhZGRSdWxlIiwiZGVidWciLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkxhYmVsIiwiUHJlbWlzZSIsIkNvbmNsdXNpb24iLCJmcm9tUnVsZU5vZGUiLCJydWxlTm9kZSIsInByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJjb25jbHVzaW9uTm9kZSIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJwcmVtaXNlTm9kZSIsImZyb21QcmVtaXNlTm9kZSIsImZyb21Db25jbHVzaW9uTm9kZSIsIlByb29mIiwiZnJvbVByb29mTm9kZSIsImxhYmVsU3RyaW5nIiwiZ2V0U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQW1CcUJBOzs7NERBakJIOzREQUNBOzhEQUNFO2lFQUNHOzREQUNFO29FQUNDO3FFQUNPOzZFQUNPOzhFQUNDO3FCQUVIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxnQkFDN0JDLG9CQUFvQkQsSUFBQUEsaUJBQVUsRUFBQyxrQkFDL0JFLHNCQUFzQkosSUFBQUEsZ0JBQVMsRUFBQztBQUV2QixJQUFBLEFBQU1GLHFCQUFOO2FBQU1BLEtBQ1BPLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRDVCVjtRQUVqQixJQUFJLENBQUNPLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7a0JBTElWOztZQVFuQlcsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDSixNQUFNO1lBQ3BCOzs7WUFFQUssS0FBQUE7bUJBQUFBLFNBQUFBO2dC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