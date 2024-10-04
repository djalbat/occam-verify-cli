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
            value: function verify() {
                var _this = this;
                var verified = false;
                var labelsString = labelsStringFromLabels(this.labels);
                this.fileContext.trace("Verifying the '".concat(labelsString, "' rule..."));
                var labelsVerified = this.labels.every(function(label) {
                    var labelVVerified = label.verify(_this.fileContext);
                    if (labelVVerified) {
                        return true;
                    }
                });
                if (labelsVerified) {
                    var localContext = _local.default.fromFileContext(this.fileContext), premisesVerified = this.premises.every(function(premise) {
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
                                this.fileContext.addRule(rule);
                                verified = true;
                            }
                        }
                    }
                }
                if (verified) {
                    this.fileContext.debug("...verified the '".concat(labelsString, "' rule."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcm9vZiBmcm9tIFwiLi9wcm9vZlwiO1xuaW1wb3J0IFByZW1pc2UgZnJvbSBcIi4vcHJlbWlzZVwiO1xuaW1wb3J0IENvbmNsdXNpb24gZnJvbSBcIi4vY29uY2x1c2lvblwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5pbXBvcnQgU3Vic3RpdHV0aW9ucyBmcm9tIFwiLi9zdWJzdGl0dXRpb25zXCI7XG5cbmltcG9ydCB7IHJldmVyc2UsIGNvcnJlbGF0ZSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5cbmNvbnN0IHByb29mTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvcHJvb2ZcIiksXG4gICAgICBsYWJlbE5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvbGFiZWxcIiksXG4gICAgICBwcmVtaXNlTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9wcmVtaXNlXCIpLFxuICAgICAgY29uY2x1c2lvbk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL2NvbmNsdXNpb25cIik7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihmaWxlQ29udGV4dCwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpIHtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5wcmVtaXNlcyA9IHByZW1pc2VzO1xuICAgIHRoaXMuY29uY2x1c2lvbiA9IGNvbmNsdXNpb247XG4gICAgdGhpcy5wcm9vZiA9IHByb29mO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRQcm9vZigpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9vZjtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSBsYWJlbC5tYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSk7XG5cbiAgICAgIGlmIChtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvb2ZTdGVwc1VuaWZpZWQgPSB0aGlzLnVuaWZ5UHJvb2ZTdGVwcyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByb29mU3RlcHNVbmlmaWVkKSB7XG4gICAgICBzdGF0ZW1lbnRVbmlmaWVkID0gdGhpcy5jb25jbHVzaW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50VW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwcyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwc1VuaWZpZWQ7XG5cbiAgICBsZXQgcHJlbWlzZXMgPSB0aGlzLnByZW1pc2VzO1xuXG4gICAgcHJlbWlzZXMgPSByZXZlcnNlKHByZW1pc2VzKTsgLy8vXG5cbiAgICBwcm9vZlN0ZXBzID0gcmV2ZXJzZShwcm9vZlN0ZXBzKTsgLy8vXG5cbiAgICBwcm9vZlN0ZXBzVW5pZmllZCA9IGNvcnJlbGF0ZShwcmVtaXNlcywgcHJvb2ZTdGVwcywgKHByZW1pc2UsIHByb29mU3RlcCkgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZCA9IHByZW1pc2UudW5pZnlQcm9vZlN0ZXAocHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwVW5pZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzVW5pZmllZDtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVsc1N0cmluZ0Zyb21MYWJlbHModGhpcy5sYWJlbHMpO1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWQgPSBsYWJlbC52ZXJpZnkodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICAgIHByZW1pc2VzVmVyaWZpZWQgPSB0aGlzLnByZW1pc2VzLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHByZW1pc2VWZXJpZmllZCA9IHByZW1pc2UudmVyaWZ5KGxvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByZW1pc2VzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uY2x1c2lvblZlcmlmaWVkID0gdGhpcy5jb25jbHVzaW9uLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICBsZXQgcHJvb2ZWZXJpZmllZCA9IHRydWU7IC8vL1xuXG4gICAgICAgICAgaWYgKHRoaXMucHJvb2YgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmNvbmNsdXNpb24sIGxvY2FsQ29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSB0aGlzOyAgLy8vXG5cbiAgICAgICAgICAgIHRoaXMuZmlsZUNvbnRleHQuYWRkUnVsZShydWxlKTtcblxuICAgICAgICAgICAgdmVyaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2ZXJpZmllZCkge1xuICAgICAgdGhpcy5maWxlQ29udGV4dC5kZWJ1ZyhgLi4udmVyaWZpZWQgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSB0aGlzLnByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTigpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSB0aGlzLmNvbmNsdXNpb24udG9KU09OKCksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAgICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIGNvbnN0IHByb29mID0gbnVsbDtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShmaWxlQ29udGV4dCwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBjb25jbHVzaW9uTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VOb2Rlcy5tYXAoKHByZW1pc2VOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlID0gUHJlbWlzZS5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShmaWxlQ29udGV4dCwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpIHtcbiAgY29uc3QgbGFiZWxzU3RyaW5nID0gbGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICBjb25zdCBsYWJlbFN0cmluZyA9IGxhYmVsLmdldFN0cmluZygpO1xuXG4gICAgICAgICAgcmV0dXJuIGxhYmVsU3RyaW5nO1xuICAgICAgICB9KTtcblxuICByZXR1cm4gbGFiZWxzU3RyaW5nO1xufSJdLCJuYW1lcyI6WyJSdWxlIiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZU5vZGVzUXVlcnkiLCJjb25jbHVzaW9uTm9kZVF1ZXJ5IiwiZmlsZUNvbnRleHQiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJwcm9vZiIsImdldEZpbGVDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UHJvb2YiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ1bmlmeVN0YXRlbWVudCIsInN0YXRlbWVudCIsImxvY2FsQ29udGV4dCIsInN0YXRlbWVudFVuaWZpZWQiLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJwcm9vZlN0ZXBzVW5pZmllZCIsInVuaWZ5UHJvb2ZTdGVwcyIsInJldmVyc2UiLCJjb3JyZWxhdGUiLCJwcmVtaXNlIiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVW5pZmllZCIsInVuaWZ5UHJvb2ZTdGVwIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJsYWJlbHNTdHJpbmciLCJsYWJlbHNTdHJpbmdGcm9tTGFiZWxzIiwidHJhY2UiLCJsYWJlbHNWZXJpZmllZCIsImV2ZXJ5IiwibGFiZWxWVmVyaWZpZWQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJwcmVtaXNlc1ZlcmlmaWVkIiwicHJlbWlzZVZlcmlmaWVkIiwiY29uY2x1c2lvblZlcmlmaWVkIiwicHJvb2ZWZXJpZmllZCIsInJ1bGUiLCJhZGRSdWxlIiwiZGVidWciLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTiIsIkxhYmVsIiwiUHJlbWlzZSIsIkNvbmNsdXNpb24iLCJmcm9tUnVsZU5vZGUiLCJydWxlTm9kZSIsInByb29mTm9kZSIsImxhYmVsTm9kZXMiLCJwcmVtaXNlTm9kZXMiLCJjb25jbHVzaW9uTm9kZSIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJwcmVtaXNlTm9kZSIsImZyb21QcmVtaXNlTm9kZSIsImZyb21Db25jbHVzaW9uTm9kZSIsIlByb29mIiwiZnJvbVByb29mTm9kZSIsImxhYmVsU3RyaW5nIiwiZ2V0U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7NERBZkg7NERBQ0E7OERBQ0U7aUVBQ0c7NERBQ0U7b0VBQ0M7cUJBRVM7cUJBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLGdCQUMzQkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGdCQUM3QkMsb0JBQW9CRCxJQUFBQSxpQkFBVSxFQUFDLGtCQUMvQkUsc0JBQXNCSixJQUFBQSxnQkFBUyxFQUFDO0FBRXZCLElBQUEsQUFBTUYscUJBQU47YUFBTUEsS0FDUE8sV0FBVyxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxLQUFLO2dDQUR6Q1g7UUFFakIsSUFBSSxDQUFDTyxXQUFXLEdBQUdBO1FBQ25CLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJ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