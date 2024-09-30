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
            key: "unifyStatement",
            value: function unifyStatement(statementNode, localContext) {
                var statementUnified = false;
                var substitutions = _substitutions.default.fromNothing(), proofSteps = localContext.getProofSteps(), premisesA = this.premises, proofStepsB = proofSteps, fileContextA = this.fileContext, localContextB = localContext, premisesUnified = (0, _premisesWithProofSteps.default)(premisesA, proofStepsB, substitutions, fileContextA, localContextB);
                if (premisesUnified) {
                    var conclusionA = this.conclusion, conclusionUnified = (0, _conclusionWithStatement.default)(conclusionA, statementNode, substitutions, fileContextA, localContextB);
                    if (conclusionUnified) {
                        var substitutionsResolved = (0, _substitutions1.default)(substitutions, fileContextA, localContextB);
                        statementUnified = substitutionsResolved; ///
                    }
                }
                return statementUnified;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.labels.some(function(label) {
                    var metavariableNodeMatches = label.matchMetavariableNode(metavariableNode);
                    if (metavariableNodeMatches) {
                        return true;
                    }
                });
                return metavariableNodeMatches;
            }
        },
        {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcm9vZiBmcm9tIFwiLi9wcm9vZlwiO1xuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4vcHJlbWlzZVwiO1xuaW1wb3J0IENvbmNsdXNpb24gZnJvbSBcIi4vY29uY2x1c2lvblwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgcmVzb2x2ZVN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vcmVzb2x2ZS9zdWJzdGl0dXRpb25zXCI7XG5pbXBvcnQgdW5pZnlQcmVtaXNlc1dpdGhQcm9vZlN0ZXBzIGZyb20gXCIuL3VuaWZ5L3ByZW1pc2VzV2l0aFByb29mU3RlcHNcIjtcbmltcG9ydCB1bmlmeUNvbmNsdXNpb25XaXRoU3RhdGVtZW50IGZyb20gXCIuL3VuaWZ5L2NvbmNsdXNpb25XaXRoU3RhdGVtZW50XCI7XG5cbmltcG9ydCB7IG5vZGVRdWVyeSwgbm9kZXNRdWVyeSB9IGZyb20gXCIuL3V0aWxpdGllcy9xdWVyeVwiO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL2xhYmVsXCIpLFxuICAgICAgcHJlbWlzZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvcHJlbWlzZVwiKSxcbiAgICAgIGNvbmNsdXNpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9jb25jbHVzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgICB0aGlzLnByb29mID0gcHJvb2Y7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHByZW1pc2VzQSA9IHRoaXMucHJlbWlzZXMsXG4gICAgICAgICAgcHJvb2ZTdGVwc0IgPSBwcm9vZlN0ZXBzLCAvLy9cbiAgICAgICAgICBmaWxlQ29udGV4dEEgPSB0aGlzLmZpbGVDb250ZXh0LCAgLy8vXG4gICAgICAgICAgbG9jYWxDb250ZXh0QiA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgcHJlbWlzZXNVbmlmaWVkID0gdW5pZnlQcmVtaXNlc1dpdGhQcm9vZlN0ZXBzKHByZW1pc2VzQSwgcHJvb2ZTdGVwc0IsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICBpZiAocHJlbWlzZXNVbmlmaWVkKSB7XG4gICAgICBjb25zdCBjb25jbHVzaW9uQSA9IHRoaXMuY29uY2x1c2lvbiwgIC8vL1xuICAgICAgICAgICAgY29uY2x1c2lvblVuaWZpZWQgPSB1bmlmeUNvbmNsdXNpb25XaXRoU3RhdGVtZW50KGNvbmNsdXNpb25BLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICBpZiAoY29uY2x1c2lvblVuaWZpZWQpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gcmVzb2x2ZVN1YnN0aXR1dGlvbnMoc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1Jlc29sdmVkOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHZlcmlmeShmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzU3RyaW5nID0gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyh0aGlzLmxhYmVscyk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWQgPSBsYWJlbC52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHRoaXMucHJlbWlzZXMuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVkID0gcHJlbWlzZS52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAocHJlbWlzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZWQgPSB0aGlzLmNvbmNsdXNpb24udmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllZCkge1xuICAgICAgICAgIGxldCBwcm9vZlZlcmlmaWVkID0gdHJ1ZTsgLy8vXG5cbiAgICAgICAgICBpZiAodGhpcy5wcm9vZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgICAgICAgcHJvb2ZWZXJpZmllZCA9IHRoaXMucHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIHRoaXMuY29uY2x1c2lvbiwgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgZmlsZUNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTihmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHRoaXMucHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gdGhpcy5jb25jbHVzaW9uLnRvSlNPTihmaWxlQ29udGV4dCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAgICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHByb29mID0gbnVsbDtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5vZGUocnVsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VOb2Rlc1F1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBjb25jbHVzaW9uTm9kZSA9IGNvbmNsdXNpb25Ob2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2UgPSBQcmVtaXNlLmZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcm9vZiA9IFByb29mLmZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHJldHVybiBsYWJlbFN0cmluZztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsc1N0cmluZztcbn0iXSwibmFtZXMiOlsiUnVsZSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByZW1pc2VOb2Rlc1F1ZXJ5IiwiY29uY2x1c2lvbk5vZGVRdWVyeSIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsInByb29mIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UHJvb2YiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwic3Vic3RpdHV0aW9ucyIsIlN1YnN0aXR1dGlvbnMiLCJmcm9tTm90aGluZyIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwicHJlbWlzZXNBIiwicHJvb2ZTdGVwc0IiLCJmaWxlQ29udGV4dEEiLCJmaWxlQ29udGV4dCIsImxvY2FsQ29udGV4dEIiLCJwcmVtaXNlc1VuaWZpZWQiLCJ1bmlmeVByZW1pc2VzV2l0aFByb29mU3RlcHMiLCJjb25jbHVzaW9uQSIsImNvbmNsdXNpb25VbmlmaWVkIiwidW5pZnlDb25jbHVzaW9uV2l0aFN0YXRlbWVudCIsInN1YnN0aXR1dGlvbnNSZXNvbHZlZCIsInJlc29sdmVTdWJzdGl0dXRpb25zIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJsYWJlbHNTdHJpbmciLCJsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIiwidHJhY2UiLCJsYWJlbHNWZXJpZmllZCIsImV2ZXJ5IiwibGFiZWxWVmVyaWZpZWQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJwcmVtaXNlc1ZlcmlmaWVkIiwicHJlbWlzZSIsInByZW1pc2VWZXJpZmllZCIsImNvbmNsdXNpb25WZXJpZmllZCIsInByb29mVmVyaWZpZWQiLCJydWxlIiwiYWRkUnVsZSIsImRlYnVnIiwidG9KU09OIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwiY29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJMYWJlbCIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwiZnJvbVJ1bGVOb2RlIiwicnVsZU5vZGUiLCJwcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwicHJlbWlzZU5vZGVzIiwiY29uY2x1c2lvbk5vZGUiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwicHJlbWlzZU5vZGUiLCJmcm9tUHJlbWlzZU5vZGUiLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJQcm9vZiIsImZyb21Qcm9vZk5vZGUiLCJsYWJlbFN0cmluZyIsImdldFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFtQnFCQTs7OzREQWpCSDs0REFDQTs4REFDRTtpRUFDRzs0REFDRTtvRUFDQztxRUFDTzs2RUFDTzs4RUFDQztxQkFFSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV0QyxJQUFNQyxpQkFBaUJDLElBQUFBLGdCQUFTLEVBQUMsZ0JBQzNCQyxrQkFBa0JDLElBQUFBLGlCQUFVLEVBQUMsZ0JBQzdCQyxvQkFBb0JELElBQUFBLGlCQUFVLEVBQUMsa0JBQy9CRSxzQkFBc0JKLElBQUFBLGdCQUFTLEVBQUM7QUFFdkIsSUFBQSxBQUFNRixxQkFBTjthQUFN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