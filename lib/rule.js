"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _necessary = require("necessary");
var _shim = /*#__PURE__*/ _interop_require_default(require("./shim"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _topLevelAssertion = require("./topLevelAssertion");
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
var proofNodeQuery = (0, _query.nodeQuery)("/rule/proof"), labelNodesQuery = (0, _query.nodesQuery)("/rule/label"), premiseNodesQuery = (0, _query.nodesQuery)("/rule/premise"), conclusionNodeQuery = (0, _query.nodeQuery)("/rule/conclusion");
var Rule = /*#__PURE__*/ function() {
    function Rule(fileContext, string, labels, premises, conclusion, proof) {
        _class_call_check(this, Rule);
        this.fileContext = fileContext;
        this.string = string;
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
            key: "matchStatementNode",
            value: function matchStatementNode(statementNode) {
                return this.conclusion.matchStatementNode(statementNode);
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
            key: "unifyStatementAndProofSteps",
            value: function unifyStatementAndProofSteps(statement, proofSteps, context) {
                var statementAndProofStepsUnified;
                var localContext = _local.default.fromFileContext(this.fileContext), generalContext = localContext, specificContext = context; ///
                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), statementUnifiedWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext);
                if (statementUnifiedWithConclusion) {
                    var proofStepsUnifiedWithPremises = this.unifyProofStepsWithPremises(proofSteps, substitutions, generalContext, specificContext);
                    if (proofStepsUnifiedWithPremises) {
                        var substitutionsResolved = substitutions.areResolved();
                        statementAndProofStepsUnified = substitutionsResolved; ///
                    }
                }
                return statementAndProofStepsUnified;
            }
        },
        {
            key: "unifyStatementWithConclusion",
            value: function unifyStatementWithConclusion(statement, substitutions, generalContext, specificContext) {
                var statementUnifiedWithConclusion;
                var statementUnified = this.conclusion.unifyStatement(statement, substitutions, generalContext, specificContext);
                statementUnifiedWithConclusion = statementUnified; ///
                return statementUnifiedWithConclusion;
            }
        },
        {
            key: "unifyProofStepsWithPremises",
            value: function unifyProofStepsWithPremises(proofSteps, substitutions, generalContext, specificContext) {
                var _this = this;
                proofSteps = reverse(proofSteps); ///
                var proofStepsUnifiedWithPremises = backwardsEvery(this.premises, function(premise) {
                    var proofStepUnifiedWithPremise = _this.unifyProofStepsWithPremise(proofSteps, premise, substitutions, generalContext, specificContext);
                    if (proofStepUnifiedWithPremise) {
                        return true;
                    }
                });
                return proofStepsUnifiedWithPremises;
            }
        },
        {
            key: "unifyProofStepsWithPremise",
            value: function unifyProofStepsWithPremise(proofSteps, premise, substitutions, generalContext, specificContext) {
                var proofStepsUnifiedWithPremise = false;
                var premiseUnifiedIndependently = premise.unifyIndependently(substitutions, generalContext, specificContext);
                if (premiseUnifiedIndependently) {
                    proofStepsUnifiedWithPremise = true;
                } else {
                    var proofStep = extract(proofSteps, function(proofStep) {
                        var proofStepUnified = premise.unifyProofStep(proofStep, substitutions, generalContext, specificContext);
                        if (proofStepUnified) {
                            return true;
                        }
                    }) || null;
                    if (proofStep !== null) {
                        proofStepsUnifiedWithPremise = true;
                    }
                }
                return proofStepsUnifiedWithPremise;
            }
        },
        {
            key: "verify",
            value: function verify() {
                var verified = false;
                var ruleString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(ruleString, "' rule..."));
                var labelsVerified = this.verifyLabels();
                if (labelsVerified) {
                    var context = _local.default.fromFileContext(this.fileContext), premisesVerified = this.premises.every(function(premise) {
                        var premiseVerified = premise.verify(context);
                        if (premiseVerified) {
                            return true;
                        }
                    });
                    if (premisesVerified) {
                        var conclusionVerified = this.conclusion.verify(context);
                        if (conclusionVerified) {
                            var proofVerified = true; ///
                            if (this.proof !== null) {
                                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing();
                                proofVerified = this.proof.verify(substitutions, this.conclusion, context);
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
                    this.fileContext.debug("...verified the '".concat(ruleString, "' rule."));
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
                var labelsJSON = (0, _json.labelsToLabelsJSON)(this.labels), premisesJSON = (0, _json.premisesToPremisesJSON)(this.premises), conclusionJSON = (0, _json.conclusionToConclusionJSON)(this.conclusion), labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
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
                var proof = null, labels = (0, _json.labelsFromJSON)(json, fileContext), premises = (0, _json.premisesFromJSON)(json, fileContext), conclusion = (0, _json.conclusionFromJSON)(json, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels);
                rule = new Rule(fileContext, string, labels, premises, conclusion, proof);
                return rule;
            }
        },
        {
            key: "fromRuleNode",
            value: function fromRuleNode(ruleNode, fileContext) {
                var Label = _shim.default.Label, Proof = _shim.default.Proof, Premise = _shim.default.Premise, Conclusion = _shim.default.Conclusion, proofNode = proofNodeQuery(ruleNode), labelNodes = labelNodesQuery(ruleNode), premiseNodes = premiseNodesQuery(ruleNode), conclusionNode = conclusionNodeQuery(ruleNode), labels = labelNodes.map(function(labelNode) {
                    var label = Label.fromLabelNode(labelNode, fileContext);
                    return label;
                }), premises = premiseNodes.map(function(premiseNode) {
                    var premise = Premise.fromPremiseNode(premiseNode, fileContext);
                    return premise;
                }), conclusion = Conclusion.fromConclusionNode(conclusionNode, fileContext), string = (0, _topLevelAssertion.stringFromLabels)(labels), proof = Proof.fromProofNode(proofNode, fileContext), rule = new Rule(fileContext, string, labels, premises, conclusion, proof);
                return rule;
            }
        }
    ]);
    return Rule;
}();
Object.assign(_shim.default, {
    Rule: Rule
});
var _default = Rule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IHN0cmluZ0Zyb21MYWJlbHMgfSBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTixcbiAgICAgICAgIHByZW1pc2VzRnJvbUpTT04sXG4gICAgICAgICBjb25jbHVzaW9uRnJvbUpTT04sXG4gICAgICAgICBsYWJlbHNUb0xhYmVsc0pTT04sXG4gICAgICAgICBwcmVtaXNlc1RvUHJlbWlzZXNKU09OLFxuICAgICAgICAgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGV4dHJhY3QsIHJldmVyc2UsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbFwiKSxcbiAgICAgIHByZW1pc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL3ByZW1pc2VcIiksXG4gICAgICBjb25jbHVzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvY29uY2x1c2lvblwiKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHsgcmV0dXJuIHRoaXMuY29uY2x1c2lvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcHMoc3RhdGVtZW50LCBwcm9vZlN0ZXBzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2VzID0gdGhpcy51bmlmeVByb29mU3RlcHNXaXRoUHJlbWlzZXMocHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgc3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zUmVzb2x2ZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbjtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLmNvbmNsdXNpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbiA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbjtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwc1dpdGhQcmVtaXNlcyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZXMgPSBiYWNrd2FyZHNFdmVyeSh0aGlzLnByZW1pc2VzLCAocHJlbWlzZSkgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZFdpdGhQcmVtaXNlID0gdGhpcy51bmlmeVByb29mU3RlcHNXaXRoUHJlbWlzZShwcm9vZlN0ZXBzLCBwcmVtaXNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcFVuaWZpZWRXaXRoUHJlbWlzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlcztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwc1dpdGhQcmVtaXNlKHByb29mU3RlcHMsIHByZW1pc2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZSAgPWZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVVuaWZpZWRJbmRlcGVuZGVudGx5ID0gcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZVVuaWZpZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwID0gZXh0cmFjdChwcm9vZlN0ZXBzLCAocHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcFVuaWZpZWQgPSBwcmVtaXNlLnVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcFVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgICAgICBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZCA9IHRoaXMudmVyaWZ5TGFiZWxzKCk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHRoaXMucHJlbWlzZXMuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVkID0gcHJlbWlzZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByZW1pc2VzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uY2x1c2lvblZlcmlmaWVkID0gdGhpcy5jb25jbHVzaW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVkKSB7XG4gICAgICAgICAgbGV0IHByb29mVmVyaWZpZWQgPSB0cnVlOyAvLy9cblxuICAgICAgICAgIGlmICh0aGlzLnByb29mICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICAgICAgICBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5jb25jbHVzaW9uLCBjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5TGFiZWxzKCkge1xuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkID0gdGhpcy5sYWJlbHMuZXZlcnkoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBuYW1lT25seSA9IHRydWUsXG4gICAgICAgICAgICBsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCA9IGxhYmVsLnZlcmlmeVdoZW5EZWNsYXJlZCh0aGlzLmZpbGVDb250ZXh0LCBuYW1lT25seSk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbHNWZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzVG9MYWJlbHNKU09OKHRoaXMubGFiZWxzKSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSBwcmVtaXNlc1RvUHJlbWlzZXNKU09OKHRoaXMucHJlbWlzZXMpLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04odGhpcy5jb25jbHVzaW9uKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHJ1bGU7XG5cbiAgICBjb25zdCBwcm9vZiA9IG51bGwsXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25Gcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpO1xuXG4gICAgcnVsZSA9IG5ldyBSdWxlKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTm9kZShydWxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCB7IExhYmVsLCBQcm9vZiwgUHJlbWlzZSwgQ29uY2x1c2lvbiB9ID0gc2hpbSxcbiAgICAgICAgICBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgcHJlbWlzZU5vZGVzID0gcHJlbWlzZU5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gY29uY2x1c2lvbk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZSA9IFByZW1pc2UuZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSxcbiAgICAgICAgICBwcm9vZiA9IFByb29mLmZyb21Qcm9vZk5vZGUocHJvb2ZOb2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcnVsZSA9IG5ldyBSdWxlKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oc2hpbSwge1xuICBSdWxlXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUnVsZTtcbiJdLCJuYW1lcyI6WyJleHRyYWN0IiwiYXJyYXlVdGlsaXRpZXMiLCJyZXZlcnNlIiwiYmFja3dhcmRzRXZlcnkiLCJwcm9vZk5vZGVRdWVyeSIsIm5vZGVRdWVyeSIsImxhYmVsTm9kZXNRdWVyeSIsIm5vZGVzUXVlcnkiLCJwcmVtaXNlTm9kZXNRdWVyeSIsImNvbmNsdXNpb25Ob2RlUXVlcnkiLCJSdWxlIiwiZmlsZUNvbnRleHQiLCJzdHJpbmciLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJwcm9vZiIsImdldEZpbGVDb250ZXh0IiwiZ2V0U3RyaW5nIiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwiZ2V0UHJvb2YiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnROb2RlIiwibWF0Y2hNZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidW5pZnlTdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzIiwic3RhdGVtZW50IiwicHJvb2ZTdGVwcyIsImNvbnRleHQiLCJzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZCIsImxvY2FsQ29udGV4dCIsIkxvY2FsQ29udGV4dCIsImZyb21GaWxlQ29udGV4dCIsImdlbmVyYWxDb250ZXh0Iiwic3BlY2lmaWNDb250ZXh0IiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24iLCJ1bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uIiwicHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZXMiLCJ1bmlmeVByb29mU3RlcHNXaXRoUHJlbWlzZXMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsInByZW1pc2UiLCJwcm9vZlN0ZXBVbmlmaWVkV2l0aFByZW1pc2UiLCJ1bmlmeVByb29mU3RlcHNXaXRoUHJlbWlzZSIsInByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2UiLCJwcmVtaXNlVW5pZmllZEluZGVwZW5kZW50bHkiLCJ1bmlmeUluZGVwZW5kZW50bHkiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXAiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInJ1bGVTdHJpbmciLCJ0cmFjZSIsImxhYmVsc1ZlcmlmaWVkIiwidmVyaWZ5TGFiZWxzIiwicHJlbWlzZXNWZXJpZmllZCIsImV2ZXJ5IiwicHJlbWlzZVZlcmlmaWVkIiwiY29uY2x1c2lvblZlcmlmaWVkIiwicHJvb2ZWZXJpZmllZCIsInJ1bGUiLCJhZGRSdWxlIiwiZGVidWciLCJuYW1lT25seSIsImxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkIiwidmVyaWZ5V2hlbkRlY2xhcmVkIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJjb25jbHVzaW9uSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwianNvbiIsImZyb21KU09OIiwibGFiZWxzRnJvbUpTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwic3RyaW5nRnJvbUxhYmVscyIsImZyb21SdWxlTm9kZSIsInJ1bGVOb2RlIiwiTGFiZWwiLCJQcm9vZiIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsInByZW1pc2VOb2RlcyIsImNvbmNsdXNpb25Ob2RlIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsInByZW1pc2VOb2RlIiwiZnJvbVByZW1pc2VOb2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwiZnJvbVByb29mTm9kZSIsIk9iamVjdCIsImFzc2lnbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBeVFBOzs7ZUFBQTs7O3lCQXZRK0I7MkRBRWQ7NERBQ1E7aUNBRVE7cUJBQ0s7b0JBTUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFM0MsSUFBUUEsVUFBcUNDLHlCQUFjLENBQW5ERCxTQUFTRSxVQUE0QkQseUJBQWMsQ0FBMUNDLFNBQVNDLGlCQUFtQkYseUJBQWMsQ0FBakNFO0FBRTFCLElBQU1DLGlCQUFpQkMsSUFBQUEsZ0JBQVMsRUFBQyxnQkFDM0JDLGtCQUFrQkMsSUFBQUEsaUJBQVUsRUFBQyxnQkFDN0JDLG9CQUFvQkQsSUFBQUEsaUJBQVUsRUFBQyxrQkFDL0JFLHNCQUFzQkosSUFBQUEsZ0JBQVMsRUFBQztBQUV0QyxJQUFBLEFBQU1LLHFCQUFOO2FBQU1BLEtBQ1FDLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxLQUFLO2dDQURoRU47UUFFRixJQUFJLENBQUNDLFdBQVcsR0FBR0E7UUFDbkIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLEtBQUssR0FBR0E7O2tCQVBYTjs7WUFVSk8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixXQUFXO1lBQ3pCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixNQUFNO1lBQ3BCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixRQUFRO1lBQ3RCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixVQUFVO1lBQ3hCOzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLE9BQU8sSUFBSSxDQUFDTixLQUFLO1lBQ25COzs7WUFFQU8sS0FBQUE7bUJBQUFBLFNBQUFBLG1CQUFtQkMsYUFBYTtnQkFBSSxPQUFPLElBQUksQ0FBQ1QsVUFBVSxDQUFDUSxrQkFBa0IsQ0FBQ0M7WUFBZ0I7OztZQUU5RkMsS0FBQUE7bUJBQUFBLFNBQUFBLHNCQUFzQkMsZ0JBQWdCO2dCQUNwQyxJQUFNQywwQkFBMEIsSUFBSSxDQUFDZCxNQUFNLENBQUNlLElBQUksQ0FBQyxTQUFDQztvQkFDaEQsSUFBTUYsMEJBQTBCRSxNQUFNSixxQkFBcUIsQ0FBQ0M7b0JBRTVELElBQUlDLHlCQUF5Qjt3QkFDM0IsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QkMsU0FBUyxFQUFFQyxVQUFVLEVBQUVDLE9BQU87Z0JBQ3hELElBQUlDO2dCQUVKLElBQU1DLGVBQWVDLGNBQVksQ0FBQ0MsZUFBZSxDQUFDLElBQUksQ0FBQzFCLFdBQVcsR0FDNUQyQixpQkFBaUJILGNBQ2pCSSxrQkFBa0JOLFNBQVMsR0FBRztnQkFFcEMsSUFBTSxBQUFFTyxnQkFBa0JDLGFBQUksQ0FBdEJELGVBQ0ZFLGdCQUFnQkYsY0FBY0csV0FBVyxJQUN6Q0MsaUNBQWlDLElBQUksQ0FBQ0MsNEJBQTRCLENBQUNkLFdBQVdXLGVBQWVKLGdCQUFnQkM7Z0JBRW5ILElBQUlLLGdDQUFnQztvQkFDbEMsSUFBTUUsZ0NBQWdDLElBQUksQ0FBQ0MsMkJBQTJCLENBQUNmLFlBQVlVLGVBQWVKLGdCQUFnQkM7b0JBRWxILElBQUlPLCtCQUErQjt3QkFDakMsSUFBTUUsd0JBQXdCTixjQUFjTyxXQUFXO3dCQUV2RGYsZ0NBQWdDYyx1QkFBdUIsR0FBRztvQkFDNUQ7Z0JBQ0Y7Z0JBRUEsT0FBT2Q7WUFDVDs7O1lBRUFXLEtBQUFBO21CQUFBQSxTQUFBQSw2QkFBNkJkLFNBQVMsRUFBRVcsYUFBYSxFQUFFSixjQUFjLEVBQUVDLGVBQWU7Z0JBQ3BGLElBQUlLO2dCQUVKLElBQU1NLG1CQUFtQixJQUFJLENBQUNuQyxVQUFVLENBQUNvQyxjQUFjLENBQUNwQixXQUFXVyxlQUFlSixnQkFBZ0JDO2dCQUVsR0ssaUNBQWlDTSxrQkFBa0IsR0FBRztnQkFFdEQsT0FBT047WUFDVDs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSw0QkFBNEJmLFVBQVUsRUFBRVUsYUFBYSxFQUFFSixjQUFjLEVBQUVDLGVBQWU7O2dCQUNwRlAsYUFBYTlCLFFBQVE4QixhQUFhLEdBQUc7Z0JBRXJDLElBQU1jLGdDQUFnQzNDLGVBQWUsSUFBSSxDQUFDVyxRQUFRLEVBQUUsU0FBQ3NDO29CQUNuRSxJQUFNQyw4QkFBOEIsTUFBS0MsMEJBQTBCLENBQUN0QixZQUFZb0IsU0FBU1YsZUFBZUosZ0JBQWdCQztvQkFFeEgsSUFBSWMsNkJBQTZCO3dCQUMvQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9QO1lBQ1Q7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUEsMkJBQTJCdEIsVUFBVSxFQUFFb0IsT0FBTyxFQUFFVixhQUFhLEVBQUVKLGNBQWMsRUFBRUMsZUFBZTtnQkFDNUYsSUFBSWdCLCtCQUErQjtnQkFFbkMsSUFBTUMsOEJBQThCSixRQUFRSyxrQkFBa0IsQ0FBQ2YsZUFBZUosZ0JBQWdCQztnQkFFOUYsSUFBSWlCLDZCQUE2QjtvQkFDL0JELCtCQUErQjtnQkFDakMsT0FBTztvQkFDTCxJQUFNRyxZQUFZMUQsUUFBUWdDLFlBQVksU0FBQzBCO3dCQUNyQyxJQUFNQyxtQkFBbUJQLFFBQVFRLGNBQWMsQ0FBQ0YsV0FBV2hCLGVBQWVKLGdCQUFnQkM7d0JBRTFGLElBQUlvQixrQkFBa0I7NEJBQ3BCLE9BQU87d0JBQ1Q7b0JBQ0YsTUFBTTtvQkFFTixJQUFJRCxjQUFjLE1BQU07d0JBQ3RCSCwrQkFBK0I7b0JBQ2pDO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBTSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxhQUFhLElBQUksQ0FBQ25ELE1BQU0sRUFBRSxHQUFHO2dCQUVuQyxJQUFJLENBQUNELFdBQVcsQ0FBQ3FELEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRCxZQUFXO2dCQUVwRCxJQUFNRSxpQkFBaUIsSUFBSSxDQUFDQyxZQUFZO2dCQUV4QyxJQUFJRCxnQkFBZ0I7b0JBQ2xCLElBQU1oQyxVQUFVRyxjQUFZLENBQUNDLGVBQWUsQ0FBQyxJQUFJLENBQUMxQixXQUFXLEdBQ3ZEd0QsbUJBQW1CLElBQUksQ0FBQ3JELFFBQVEsQ0FBQ3NELEtBQUssQ0FBQyxTQUFDaEI7d0JBQ3RDLElBQU1pQixrQkFBa0JqQixRQUFRUyxNQUFNLENBQUM1Qjt3QkFFdkMsSUFBSW9DLGlCQUFpQjs0QkFDbkIsT0FBTzt3QkFDVDtvQkFDRjtvQkFFTixJQUFJRixrQkFBa0I7d0JBQ3BCLElBQU1HLHFCQUFxQixJQUFJLENBQUN2RCxVQUFVLENBQUM4QyxNQUFNLENBQUM1Qjt3QkFFbEQsSUFBSXFDLG9CQUFvQjs0QkFDdEIsSUFBSUMsZ0JBQWdCLE1BQU0sR0FBRzs0QkFFN0IsSUFBSSxJQUFJLENBQUN2RCxLQUFLLEtBQUssTUFBTTtnQ0FDdkIsSUFBTSxBQUFFd0IsZ0JBQWtCQyxhQUFJLENBQXRCRCxlQUNGRSxnQkFBZ0JGLGNBQWNHLFdBQVc7Z0NBRS9DNEIsZ0JBQWdCLElBQUksQ0FBQ3ZELEtBQUssQ0FBQzZDLE1BQU0sQ0FBQ25CLGVBQWUsSUFBSSxDQUFDM0IsVUFBVSxFQUFFa0I7NEJBQ3BFOzRCQUVBLElBQUlzQyxlQUFlO2dDQUNqQixJQUFNQyxPQUFPLElBQUksRUFBRyxHQUFHO2dDQUV2QixJQUFJLENBQUM3RCxXQUFXLENBQUM4RCxPQUFPLENBQUNEO2dDQUV6QlYsV0FBVzs0QkFDYjt3QkFDRjtvQkFDRjtnQkFDRjtnQkFFQSxJQUFJQSxVQUFVO29CQUNaLElBQUksQ0FBQ25ELFdBQVcsQ0FBQytELEtBQUssQ0FBQyxBQUFDLG9CQUE4QixPQUFYWCxZQUFXO2dCQUN4RDtnQkFFQSxPQUFPRDtZQUNUOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBOztnQkFDRSxJQUFNRCxpQkFBaUIsSUFBSSxDQUFDcEQsTUFBTSxDQUFDdUQsS0FBSyxDQUFDLFNBQUN2QztvQkFDeEMsSUFBTThDLFdBQVcsTUFDWEMsNkJBQTZCL0MsTUFBTWdELGtCQUFrQixDQUFDLE1BQUtsRSxXQUFXLEVBQUVnRTtvQkFFOUUsSUFBSUMsNEJBQTRCO3dCQUM5QixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9YO1lBQ1Q7OztZQUVBYSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYUMsSUFBQUEsd0JBQWtCLEVBQUMsSUFBSSxDQUFDbkUsTUFBTSxHQUMzQ29FLGVBQWVDLElBQUFBLDRCQUFzQixFQUFDLElBQUksQ0FBQ3BFLFFBQVEsR0FDbkRxRSxpQkFBaUJDLElBQUFBLGdDQUEwQixFQUFDLElBQUksQ0FBQ3JFLFVBQVUsR0FDM0RGLFNBQVNrRSxZQUNUakUsV0FBV21FLGNBQ1hsRSxhQUFhb0UsZ0JBQ2JFLE9BQU87b0JBQ0x4RSxRQUFBQTtvQkFDQUMsVUFBQUE7b0JBQ0FDLFlBQUFBO2dCQUNGO2dCQUVOLE9BQU9zRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRTFFLFdBQVc7Z0JBQy9CLElBQUk2RDtnQkFFSixJQUFNeEQsUUFBUSxNQUNSSCxTQUFTMEUsSUFBQUEsb0JBQWMsRUFBQ0YsTUFBTTFFLGNBQzlCRyxXQUFXMEUsSUFBQUEsc0JBQWdCLEVBQUNILE1BQU0xRSxjQUNsQ0ksYUFBYTBFLElBQUFBLHdCQUFrQixFQUFDSixNQUFNMUUsY0FDdENDLFNBQVM4RSxJQUFBQSxtQ0FBZ0IsRUFBQzdFO2dCQUVoQzJELE9BQU8sSUFoTkw5RCxLQWdOY0MsYUFBYUMsUUFBUUMsUUFBUUMsVUFBVUMsWUFBWUM7Z0JBRW5FLE9BQU93RDtZQUNUOzs7WUFFT21CLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRWpGLFdBQVc7Z0JBQ3ZDLElBQVFrRixRQUFzQ3BELGFBQUksQ0FBMUNvRCxPQUFPQyxRQUErQnJELGFBQUksQ0FBbkNxRCxPQUFPQyxVQUF3QnRELGFBQUksQ0FBNUJzRCxTQUFTQyxhQUFldkQsYUFBSSxDQUFuQnVELFlBQ3pCQyxZQUFZN0YsZUFBZXdGLFdBQzNCTSxhQUFhNUYsZ0JBQWdCc0YsV0FDN0JPLGVBQWUzRixrQkFBa0JvRixXQUNqQ1EsaUJBQWlCM0Ysb0JBQW9CbUYsV0FDckMvRSxTQUFTcUYsV0FBV0csR0FBRyxDQUFDLFNBQUNDO29CQUN2QixJQUFNekUsUUFBUWdFLE1BQU1VLGFBQWEsQ0FBQ0QsV0FBVzNGO29CQUU3QyxPQUFPa0I7Z0JBQ1QsSUFDQWYsV0FBV3FGLGFBQWFFLEdBQUcsQ0FBQyxTQUFDRztvQkFDM0IsSUFBTXBELFVBQVUyQyxRQUFRVSxlQUFlLENBQUNELGFBQWE3RjtvQkFFckQsT0FBT3lDO2dCQUNULElBQ0FyQyxhQUFhaUYsV0FBV1Usa0JBQWtCLENBQUNOLGdCQUFnQnpGLGNBQzNEQyxTQUFTOEUsSUFBQUEsbUNBQWdCLEVBQUM3RSxTQUMxQkcsUUFBUThFLE1BQU1hLGFBQWEsQ0FBQ1YsV0FBV3RGLGNBQ3ZDNkQsT0FBTyxJQXhPWDlELEtBd09vQkMsYUFBYUMsUUFBUUMsUUFBUUMsVUFBVUMsWUFBWUM7Z0JBRXpFLE9BQU93RDtZQUNUOzs7V0EzT0k5RDs7QUE4T05rRyxPQUFPQyxNQUFNLENBQUNwRSxhQUFJLEVBQUU7SUFDbEIvQixNQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==