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
var _array = require("./utilities/array");
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
    function Rule(fileContext, labels, premises, conclusion, proof) {
        _class_call_check(this, Rule);
        this.fileContext = fileContext;
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
        this.proof = proof;
    }
    _create_class(Rule, [
        {
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
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
            key: "unifyStatement",
            value: function unifyStatement(statement, localContext) {
                var statementUnified = false;
                var proofSteps = localContext.getProofSteps(), substitutions = _substitutions.default.fromNothing(), proofStepsUnified = this.unifyProofSteps(proofSteps, substitutions, localContext);
                if (proofStepsUnified) {
                    statementUnified = this.conclusion.unifyStatement(statement, substitutions, localContext);
                }
                return statementUnified;
            }
        },
        {
            key: "unifyProofSteps",
            value: function unifyProofSteps(proofSteps, substitutions, localContext) {
                var proofStepsUnified;
                var premises = this.premises;
                premises = (0, _array.reverse)(premises); ///
                proofSteps = (0, _array.reverse)(proofSteps); ///
                proofStepsUnified = (0, _array.correlate)(premises, proofSteps, function(premise, proofStep) {
                    var proofStepUnified = premise.unifyProofStep(proofStep, substitutions, localContext);
                    if (proofStepUnified) {
                        return true;
                    }
                });
                return proofStepsUnified;
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
            value: function toJSON() {
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON();
                    return labelJSON;
                }), premisesJSON = this.premises.map(function(premise) {
                    var premiseJSON = premise.toJSON();
                    return premiseJSON;
                }), conclusionJSON = this.conclusion.toJSON(), labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
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
                rule = new Rule(fileContext, labels, premises, conclusion, proof);
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
                }), conclusion = _conclusion.default.fromConclusionNode(conclusionNode, fileContext), proof = _proof.default.fromProofNode(proofNode, fileContext), rule = new Rule(fileContext, labels, premises, conclusion, proof);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcm9vZiBmcm9tIFwiLi9wcm9vZlwiO1xuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4vcHJlbWlzZVwiO1xuaW1wb3J0IENvbmNsdXNpb24gZnJvbSBcIi4vY29uY2x1c2lvblwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IHJldmVyc2UsIGNvcnJlbGF0ZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvcHJvb2ZcIiksXG4gICAgICBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvbGFiZWxcIiksXG4gICAgICBwcmVtaXNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9wcmVtaXNlXCIpLFxuICAgICAgY29uY2x1c2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmNsdXNpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5wcmVtaXNlcyA9IHByZW1pc2VzO1xuICAgIHRoaXMuY29uY2x1c2lvbiA9IGNvbmNsdXNpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvb2ZTdGVwc1VuaWZpZWQgPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwcyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByb29mU3RlcHNVbmlmaWVkKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5jb25jbHVzaW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwcyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwc1VuaWZpZWQ7XG5cbiAgICBsZXQgcHJlbWlzZXMgPSB0aGlzLnByZW1pc2VzO1xuXG4gICAgcHJlbWlzZXMgPSByZXZlcnNlKHByZW1pc2VzKTsgLy8vXG5cbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBwcm9vZlN0ZXBzVW5pZmllZCA9IGNvcnJlbGF0ZShwcmVtaXNlcywgcHJvb2ZTdGVwcywgKHByZW1pc2UsIHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZCA9IHByZW1pc2UudW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeShmaWxlQ29udGV4dCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzU3RyaW5nID0gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyh0aGlzLmxhYmVscyk7XG5cbiAgICBmaWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWQgPSBsYWJlbC52ZXJpZnkoZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQoZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHRoaXMucHJlbWlzZXMuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVkID0gcHJlbWlzZS52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAocHJlbWlzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZWQgPSB0aGlzLmNvbmNsdXNpb24udmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKGNvbmNsdXNpb25WZXJpZmllZCkge1xuICAgICAgICAgIGxldCBwcm9vZlZlcmlmaWVkID0gdHJ1ZTsgLy8vXG5cbiAgICAgICAgICBpZiAodGhpcy5wcm9vZiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKTtcblxuICAgICAgICAgICAgcHJvb2ZWZXJpZmllZCA9IHRoaXMucHJvb2YudmVyaWZ5KHN1YnN0aXR1dGlvbnMsIHRoaXMuY29uY2x1c2lvbiwgbG9jYWxDb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgZmlsZUNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gdGhpcy5wcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gdGhpcy5jb25jbHVzaW9uLnRvSlNPTigpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gICAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBwcm9vZiA9IG51bGw7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUoZmlsZUNvbnRleHQsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTm9kZShydWxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgcHJlbWlzZU5vZGVzID0gcHJlbWlzZU5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gY29uY2x1c2lvbk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZSA9IFByZW1pc2UuZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoZmlsZUNvbnRleHQsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHJldHVybiBsYWJlbFN0cmluZztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsc1N0cmluZztcbn0iXSwibmFtZXMiOlsiUnVsZSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByZW1pc2VOb2Rlc1F1ZXJ5IiwiY29uY2x1c2lvbk5vZGVRdWVyeSIsImZpbGVDb250ZXh0IiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicHJvb2YiLCJnZXRGaWxlQ29udGV4dCIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsImdldFByb29mIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwicHJvb2ZTdGVwc1VuaWZpZWQiLCJ1bmlmeVByb29mU3RlcHMiLCJyZXZlcnNlIiwiY29ycmVsYXRlIiwicHJlbWlzZSIsInByb29mU3RlcCIsInByb29mU3RlcFVuaWZpZWQiLCJ1bmlmeVByb29mU3RlcCIsInZlcmlmeSIsInZlcmlmaWVkIiwibGFiZWxzU3RyaW5nIiwibGFiZWxzU3RyaW5nRnJvbUxhYmVscyIsInRyYWNlIiwibGFiZWxzVmVyaWZpZWQiLCJldmVyeSIsImxhYmVsVlZlcmlmaWVkIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwicHJlbWlzZXNWZXJpZmllZCIsInByZW1pc2VWZXJpZmllZCIsImNvbmNsdXNpb25WZXJpZmllZCIsInByb29mVmVyaWZpZWQiLCJydWxlIiwiYWRkUnVsZSIsImRlYnVnIiwidG9KU09OIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwiY29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJMYWJlbCIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwiZnJvbVJ1bGVOb2RlIiwicnVsZU5vZGUiLCJwcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwicHJlbWlzZU5vZGVzIiwiY29uY2x1c2lvbk5vZGUiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwicHJlbWlzZU5vZGUiLCJmcm9tUHJlbWlzZU5vZGUiLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJQcm9vZiIsImZyb21Qcm9vZk5vZGUiLCJsYWJlbFN0cmluZyIsImdldFN0cmluZyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFpQnFCQTs7OzREQWZIOzREQUNBOzhEQUNFO2lFQUNHOzREQUNFO29FQUNDO3FCQUVTO3FCQUNHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXRDLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxnQkFDN0JDLG9CQUFvQkQsSUFBQUEsaUJBQVUsRUFBQyxrQkFDL0JFLHNCQUFzQkosSUFBQUEsZ0JBQVMsRUFBQztBQUV2QixJQUFBLEFBQU1GLHFCQUFOO2FBQU1BLEtBQ1BPLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsS0FBSztnQ0FEekNYO1FBRWpCLElBQUksQ0FBQ08sV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFV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