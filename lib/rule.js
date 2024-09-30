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
var labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), premiseNodesQuery = (0, _query.nodesQuery)("/rule/premise"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion");
var Rule = /*#__PURE__*/ function() {
    function Rule(labels1, premises1, conclusion) {
        _class_call_check(this, Rule);
        this.labels = labels1;
        this.premises = premises1;
        this.conclusion = conclusion;
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
                var veriried = false;
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
                        var premiseVerified = premise.verify(fileContext);
                        if (premiseVerified) {
                            return true;
                        }
                    });
                    if (premisesVerified) {
                        var conclusions = [], conclusionNode = conclusionNodeQuery(ruleNode), conclusionVerified = verifyConclusion(conclusionNode, conclusions, localContext);
                        if (conclusionVerified) {
                            var proofVerified = true; ///
                            var firstConclusion = first(conclusions), proofNode = proofNodeQuery(ruleNode), conclusion = firstConclusion; ///
                            if (proofNode !== null) {
                                var substitutions = _substitutions.default.fromNothing(), statementNode = conclusion.getStatementNode();
                                proofVerified = verifyProof(proofNode, statementNode, substitutions, localContext);
                            }
                            if (proofVerified) {
                                var rule = Rule.fromRuleNodeLabelsPremisesAndConclusion(ruleNode, labels, premises, conclusion);
                                fileContext.addRule(rule);
                                veriried = true;
                            }
                        }
                    }
                }
                if (veriried) {
                    fileContext.debug("...verified the '".concat(labelsString, "' rule."), ruleNode);
                }
                return veriried;
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
                }), conclusionJSON = this.conclusion.toJSON(fileContext), labels1 = labelsJSON, premises1 = premisesJSON, conclusion = conclusionJSON, json = {
                    labels: labels1,
                    premises: premises1,
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
                var labels1 = json.labels;
                var labelsJSON = labels1; ///
                labels1 = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, fileContext);
                    return label;
                });
                var premises1 = json.premises;
                var premisesJSON = premises1; ///
                premises1 = premisesJSON.map(function(premiseJSON) {
                    var _$json = premiseJSON, premise = _premise.default.fromJSON(_$json, fileContext);
                    return premise;
                });
                var conclusion = json.conclusion;
                var conclusionJSON = conclusion; ///
                json = conclusionJSON; ///
                conclusion = _conclusion.default.fromJSON(json, fileContext);
                rule = new Rule(labels1, premises1, conclusion);
                return rule;
            }
        },
        {
            key: "fromRuleNode",
            value: function fromRuleNode(ruleNode1, fileContext) {
                var labelNodes = labelNodesQuery(ruleNode1), premiseNodes = premiseNodesQuery(ruleNode1), conclusionNode = conclusionNodeQuery(ruleNode1), labels1 = labelNodes.map(function(labelNode) {
                    var label = _label.default.fromLabelNode(labelNode, fileContext);
                    return label;
                }), premises1 = premiseNodes.map(function(premiseNode) {
                    var premise = _premise.default.fromPremiseNode(premiseNode, fileContext);
                    return premise;
                }), conclusion = _conclusion.default.fromConclusionNode(conclusionNode, fileContext), rule = new Rule(labels1, premises1, conclusion);
                return rule;
            }
        },
        {
            key: "fromRuleNodeLabelsPremisesAndConclusion",
            value: function fromRuleNodeLabelsPremisesAndConclusion(ruleNode1, labels1, premises1, conclusion) {
                var rule = new Rule(labels1, premises1, conclusion);
                return rule;
            }
        }
    ]);
    return Rule;
}();
function labelsStringFromLabels(labels1) {
    var labelsString = labels1.map(function(label) {
        var labelString = label.getString();
        return labelString;
    });
    return labelsString;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IHJlc29sdmVTdWJzdGl0dXRpb25zIGZyb20gXCIuL3Jlc29sdmUvc3Vic3RpdHV0aW9uc1wiO1xuaW1wb3J0IHVuaWZ5UHJlbWlzZXNXaXRoUHJvb2ZTdGVwcyBmcm9tIFwiLi91bmlmeS9wcmVtaXNlc1dpdGhQcm9vZlN0ZXBzXCI7XG5pbXBvcnQgdW5pZnlDb25jbHVzaW9uV2l0aFN0YXRlbWVudCBmcm9tIFwiLi91bmlmeS9jb25jbHVzaW9uV2l0aFN0YXRlbWVudFwiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL2xhYmVsXCIpLFxuICAgICAgcHJlbWlzZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvcHJlbWlzZVwiKSxcbiAgICAgIGNvbmNsdXNpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9jb25jbHVzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbikge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFByZW1pc2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZW1pc2VzO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25jbHVzaW9uO1xuICB9XG5cbiAgdW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgcHJvb2ZTdGVwcyA9IGxvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCksXG4gICAgICAgICAgcHJlbWlzZXNBID0gdGhpcy5wcmVtaXNlcyxcbiAgICAgICAgICBwcm9vZlN0ZXBzQiA9IHByb29mU3RlcHMsIC8vL1xuICAgICAgICAgIGZpbGVDb250ZXh0QSA9IHRoaXMuZmlsZUNvbnRleHQsICAvLy9cbiAgICAgICAgICBsb2NhbENvbnRleHRCID0gbG9jYWxDb250ZXh0LCAvLy9cbiAgICAgICAgICBwcmVtaXNlc1VuaWZpZWQgPSB1bmlmeVByZW1pc2VzV2l0aFByb29mU3RlcHMocHJlbWlzZXNBLCBwcm9vZlN0ZXBzQiwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHRBLCBsb2NhbENvbnRleHRCKTtcblxuICAgIGlmIChwcmVtaXNlc1VuaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25BID0gdGhpcy5jb25jbHVzaW9uLCAgLy8vXG4gICAgICAgICAgICBjb25jbHVzaW9uVW5pZmllZCA9IHVuaWZ5Q29uY2x1c2lvbldpdGhTdGF0ZW1lbnQoY29uY2x1c2lvbkEsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0QSwgbG9jYWxDb250ZXh0Qik7XG5cbiAgICAgIGlmIChjb25jbHVzaW9uVW5pZmllZCkge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSByZXNvbHZlU3Vic3RpdHV0aW9ucyhzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dEEsIGxvY2FsQ29udGV4dEIpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdWJzdGl0dXRpb25zUmVzb2x2ZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzO1xuICB9XG5cbiAgdmVyaWZ5KGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHZlcmlyaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBsYWJlbHNTdHJpbmcgPSBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKHRoaXMubGFiZWxzKTtcblxuICAgIGZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbFZWZXJpZmllZCA9IGxhYmVsLnZlcmlmeShmaWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZCkge1xuICAgICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dChmaWxlQ29udGV4dCksXG4gICAgICAgICAgICBwcmVtaXNlc1ZlcmlmaWVkID0gdGhpcy5wcmVtaXNlcy5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmVtaXNlVmVyaWZpZWQgPSBwcmVtaXNlLnZlcmlmeShmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByZW1pc2VzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uY2x1c2lvbnMgPSBbXSxcbiAgICAgICAgICBjb25jbHVzaW9uTm9kZSA9IGNvbmNsdXNpb25Ob2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGNvbmNsdXNpb25WZXJpZmllZCA9IHZlcmlmeUNvbmNsdXNpb24oY29uY2x1c2lvbk5vZGUsIGNvbmNsdXNpb25zLCBsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICBsZXQgcHJvb2ZWZXJpZmllZCA9IHRydWU7IC8vL1xuXG4gICAgICAgICAgY29uc3QgZmlyc3RDb25jbHVzaW9uID0gZmlyc3QoY29uY2x1c2lvbnMpLFxuICAgICAgICAgICAgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgICAgY29uY2x1c2lvbiA9IGZpcnN0Q29uY2x1c2lvbjsgLy8vXG5cbiAgICAgICAgICBpZiAocHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lvbi5nZXRTdGF0ZW1lbnROb2RlKCk7XG5cbiAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB2ZXJpZnlQcm9vZihwcm9vZk5vZGUsIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHByb29mVmVyaWZpZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGUgPSBSdWxlLmZyb21SdWxlTm9kZUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihydWxlTm9kZSwgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICAgICAgICAgIGZpbGVDb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICAgIHZlcmlyaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaXJpZWQpIHtcbiAgICAgIGZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7bGFiZWxzU3RyaW5nfScgcnVsZS5gLCBydWxlTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlyaWVkO1xuICB9XG5cbiAgdG9KU09OKGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTihmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gdGhpcy5wcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04oZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSB0aGlzLmNvbmNsdXNpb24udG9KU09OKGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHJ1bGU7XG5cbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICB9KTtcblxuICAgIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICAgIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VOb2Rlc1F1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBjb25jbHVzaW9uTm9kZSA9IGNvbmNsdXNpb25Ob2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2UgPSBQcmVtaXNlLmZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5vZGVMYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24ocnVsZU5vZGUsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICBjb25zdCBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYWJlbHNTdHJpbmdGcm9tTGFiZWxzKGxhYmVscykge1xuICBjb25zdCBsYWJlbHNTdHJpbmcgPSBsYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGxhYmVsU3RyaW5nID0gbGFiZWwuZ2V0U3RyaW5nKCk7XG5cbiAgICAgICAgICByZXR1cm4gbGFiZWxTdHJpbmc7XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBsYWJlbHNTdHJpbmc7XG59Il0sIm5hbWVzIjpbIlJ1bGUiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZU5vZGVzUXVlcnkiLCJjb25jbHVzaW9uTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50VW5pZmllZCIsInN1YnN0aXR1dGlvbnMiLCJTdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInByZW1pc2VzQSIsInByb29mU3RlcHNCIiwiZmlsZUNvbnRleHRBIiwiZmlsZUNvbnRleHQiLCJsb2NhbENvbnRleHRCIiwicHJlbWlzZXNVbmlmaWVkIiwidW5pZnlQcmVtaXNlc1dpdGhQcm9vZlN0ZXBzIiwiY29uY2x1c2lvbkEiLCJjb25jbHVzaW9uVW5pZmllZCIsInVuaWZ5Q29uY2x1c2lvbldpdGhTdGF0ZW1lbnQiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJyZXNvbHZlU3Vic3RpdHV0aW9ucyIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInZlcmlmeSIsInZlcmlyaWVkIiwibGFiZWxzU3RyaW5nIiwibGFiZWxzU3RyaW5nRnJvbUxhYmVscyIsInRyYWNlIiwibGFiZWxzVmVyaWZpZWQiLCJldmVyeSIsImxhYmVsVlZlcmlmaWVkIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwicHJlbWlzZXNWZXJpZmllZCIsInByZW1pc2UiLCJwcmVtaXNlVmVyaWZpZWQiLCJjb25jbHVzaW9ucyIsImNvbmNsdXNpb25Ob2RlIiwicnVsZU5vZGUiLCJjb25jbHVzaW9uVmVyaWZpZWQiLCJ2ZXJpZnlDb25jbHVzaW9uIiwicHJvb2ZWZXJpZmllZCIsImZpcnN0Q29uY2x1c2lvbiIsImZpcnN0IiwicHJvb2ZOb2RlIiwicHJvb2ZOb2RlUXVlcnkiLCJnZXRTdGF0ZW1lbnROb2RlIiwidmVyaWZ5UHJvb2YiLCJydWxlIiwiZnJvbVJ1bGVOb2RlTGFiZWxzUHJlbWlzZXNBbmRDb25jbHVzaW9uIiwiYWRkUnVsZSIsImRlYnVnIiwidG9KU09OIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwiY29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJMYWJlbCIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwiZnJvbVJ1bGVOb2RlIiwibGFiZWxOb2RlcyIsInByZW1pc2VOb2RlcyIsImxhYmVsTm9kZSIsImZyb21MYWJlbE5vZGUiLCJwcmVtaXNlTm9kZSIsImZyb21QcmVtaXNlTm9kZSIsImZyb21Db25jbHVzaW9uTm9kZSIsImxhYmVsU3RyaW5nIiwiZ2V0U3RyaW5nIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQWlCcUJBOzs7NERBZkg7OERBQ0U7aUVBQ0c7NERBQ0U7b0VBQ0M7cUVBQ087NkVBQ087OEVBQ0M7cUJBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsSUFBTUMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGdCQUM3QkMsb0JBQW9CRCxJQUFBQSxpQkFBVSxFQUFDLGtCQUMvQkUsc0JBQXNCQyxJQUFBQSxnQkFBUyxFQUFDO0FBRXZCLElBQUEsQUFBTUwscUJBQU47YUFBTUEsS0FDUE0sT0FBTSxFQUFFQyxTQUFRLEVBQUVDLFVBQVU7Z0NBRHJCUjtRQUVqQixJQUFJLENBQUNNLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBOztrQkFKRFI7O1lBT25CUyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILE1BQU07WUFDcEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFFBQVE7WUFDdEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsZUFBZUMsYUFBYSxFQUFFQyxZQUFZO2dCQUN4QyxJQUFJQyxtQkFBbUI7Z0JBRXZCLElBQU1DLGdCQUFnQkMsc0JBQWEsQ0FBQ0MsV0FBVyxJQUN6Q0MsYUFBYUwsYUFBYU0sYUFBYSxJQUN2Q0MsWUFBWSxJQUFJLENBQUNkLFFBQVEsRUFDekJlLGNBQWNILFlBQ2RJLGVBQWUsSUFBSSxDQUFDQyxXQUFXLEVBQy9CQyxnQkFBZ0JYLGNBQ2hCWSxrQkFBa0JDLElBQUFBLCtCQUEyQixFQUFDTixXQUFXQyxhQUFhTixl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