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
                var _this = this;
                var verified = false;
                var ruleString = this.string; ///
                this.fileContext.trace("Verifying the '".concat(ruleString, "' rule..."));
                var labelsVerifiedWhenDeclared = this.labels.every(function(label) {
                    var labelVVerifiedWhenDeclared = label.verifyWhenDeclared(_this.fileContext);
                    if (labelVVerifiedWhenDeclared) {
                        return true;
                    }
                });
                if (labelsVerifiedWhenDeclared) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IHN0cmluZ0Zyb21MYWJlbHMgfSBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTixcbiAgICAgICAgIHByZW1pc2VzRnJvbUpTT04sXG4gICAgICAgICBjb25jbHVzaW9uRnJvbUpTT04sXG4gICAgICAgICBsYWJlbHNUb0xhYmVsc0pTT04sXG4gICAgICAgICBwcmVtaXNlc1RvUHJlbWlzZXNKU09OLFxuICAgICAgICAgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGV4dHJhY3QsIHJldmVyc2UsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbFwiKSxcbiAgICAgIHByZW1pc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL3ByZW1pc2VcIiksXG4gICAgICBjb25jbHVzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvY29uY2x1c2lvblwiKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHsgcmV0dXJuIHRoaXMuY29uY2x1c2lvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcHMoc3RhdGVtZW50LCBwcm9vZlN0ZXBzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkO1xuXG4gICAgY29uc3QgbG9jYWxDb250ZXh0ID0gTG9jYWxDb250ZXh0LmZyb21GaWxlQ29udGV4dCh0aGlzLmZpbGVDb250ZXh0KSxcbiAgICAgICAgICBnZW5lcmFsQ29udGV4dCA9IGxvY2FsQ29udGV4dCwgLy8vXG4gICAgICAgICAgc3BlY2lmaWNDb250ZXh0ID0gY29udGV4dDsgLy8vXG5cbiAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgc3Vic3RpdHV0aW9ucyA9IFN1YnN0aXR1dGlvbnMuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24gPSB0aGlzLnVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2VzID0gdGhpcy51bmlmeVByb29mU3RlcHNXaXRoUHJlbWlzZXMocHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlcykge1xuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zUmVzb2x2ZWQgPSBzdWJzdGl0dXRpb25zLmFyZVJlc29sdmVkKCk7XG5cbiAgICAgICAgc3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQgPSBzdWJzdGl0dXRpb25zUmVzb2x2ZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRBbmRQcm9vZlN0ZXBzVW5pZmllZDtcbiAgfVxuXG4gIHVuaWZ5U3RhdGVtZW50V2l0aENvbmNsdXNpb24oc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbjtcblxuICAgIGNvbnN0IHN0YXRlbWVudFVuaWZpZWQgPSB0aGlzLmNvbmNsdXNpb24udW5pZnlTdGF0ZW1lbnQoc3RhdGVtZW50LCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbiA9IHN0YXRlbWVudFVuaWZpZWQ7IC8vL1xuXG4gICAgcmV0dXJuIHN0YXRlbWVudFVuaWZpZWRXaXRoQ29uY2x1c2lvbjtcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwc1dpdGhQcmVtaXNlcyhwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KSB7XG4gICAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gICAgY29uc3QgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZXMgPSBiYWNrd2FyZHNFdmVyeSh0aGlzLnByZW1pc2VzLCAocHJlbWlzZSkgPT4ge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwVW5pZmllZFdpdGhQcmVtaXNlID0gdGhpcy51bmlmeVByb29mU3RlcHNXaXRoUHJlbWlzZShwcm9vZlN0ZXBzLCBwcmVtaXNlLCBzdWJzdGl0dXRpb25zLCBnZW5lcmFsQ29udGV4dCwgc3BlY2lmaWNDb250ZXh0KTtcblxuICAgICAgaWYgKHByb29mU3RlcFVuaWZpZWRXaXRoUHJlbWlzZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlcztcbiAgfVxuXG4gIHVuaWZ5UHJvb2ZTdGVwc1dpdGhQcmVtaXNlKHByb29mU3RlcHMsIHByZW1pc2UsIHN1YnN0aXR1dGlvbnMsIGdlbmVyYWxDb250ZXh0LCBzcGVjaWZpY0NvbnRleHQpIHtcbiAgICBsZXQgcHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZSAgPWZhbHNlO1xuXG4gICAgY29uc3QgcHJlbWlzZVVuaWZpZWRJbmRlcGVuZGVudGx5ID0gcHJlbWlzZS51bmlmeUluZGVwZW5kZW50bHkoc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZVVuaWZpZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwID0gZXh0cmFjdChwcm9vZlN0ZXBzLCAocHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcFVuaWZpZWQgPSBwcmVtaXNlLnVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZ2VuZXJhbENvbnRleHQsIHNwZWNpZmljQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcFVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgICAgICBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZTtcbiAgfVxuXG4gIHZlcmlmeSgpIHtcbiAgICBsZXQgdmVyaWZpZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHJ1bGVTdHJpbmcgPSB0aGlzLnN0cmluZzsgLy8vXG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke3J1bGVTdHJpbmd9JyBydWxlLi4uYCk7XG5cbiAgICBjb25zdCBsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSBsYWJlbC52ZXJpZnlXaGVuRGVjbGFyZWQodGhpcy5maWxlQ29udGV4dCk7XG5cbiAgICAgIGlmIChsYWJlbFZWZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCkge1xuICAgICAgY29uc3QgY29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBwcmVtaXNlc1ZlcmlmaWVkID0gdGhpcy5wcmVtaXNlcy5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmVtaXNlVmVyaWZpZWQgPSBwcmVtaXNlLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICAgICAgICBpZiAocHJlbWlzZVZlcmlmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAocHJlbWlzZXNWZXJpZmllZCkge1xuICAgICAgICBjb25zdCBjb25jbHVzaW9uVmVyaWZpZWQgPSB0aGlzLmNvbmNsdXNpb24udmVyaWZ5KGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChjb25jbHVzaW9uVmVyaWZpZWQpIHtcbiAgICAgICAgICBsZXQgcHJvb2ZWZXJpZmllZCA9IHRydWU7IC8vL1xuXG4gICAgICAgICAgaWYgKHRoaXMucHJvb2YgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgU3Vic3RpdHV0aW9ucyB9ID0gc2hpbSxcbiAgICAgICAgICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCk7XG5cbiAgICAgICAgICAgIHByb29mVmVyaWZpZWQgPSB0aGlzLnByb29mLnZlcmlmeShzdWJzdGl0dXRpb25zLCB0aGlzLmNvbmNsdXNpb24sIGNvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS5gKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmVyaWZpZWQ7XG4gIH1cblxuICB0b0pTT04oKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsc1RvTGFiZWxzSlNPTih0aGlzLmxhYmVscyksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gcHJlbWlzZXNUb1ByZW1pc2VzSlNPTih0aGlzLnByZW1pc2VzKSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OKHRoaXMuY29uY2x1c2lvbiksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgY29uc3QgcHJvb2YgPSBudWxsLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uRnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHN0cmluZyA9IHN0cmluZ0Zyb21MYWJlbHMobGFiZWxzKTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5vZGUocnVsZU5vZGUsIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgeyBMYWJlbCwgUHJvb2YsIFByZW1pc2UsIENvbmNsdXNpb24gfSA9IHNoaW0sXG4gICAgICAgICAgcHJvb2ZOb2RlID0gcHJvb2ZOb2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGxhYmVsTm9kZXMgPSBsYWJlbE5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIHByZW1pc2VOb2RlcyA9IHByZW1pc2VOb2Rlc1F1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBjb25jbHVzaW9uTm9kZSA9IGNvbmNsdXNpb25Ob2RlUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsTm9kZXMubWFwKChsYWJlbE5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gTGFiZWwuZnJvbUxhYmVsTm9kZShsYWJlbE5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZU5vZGVzLm1hcCgocHJlbWlzZU5vZGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2UgPSBQcmVtaXNlLmZyb21QcmVtaXNlTm9kZShwcmVtaXNlTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tQ29uY2x1c2lvbk5vZGUoY29uY2x1c2lvbk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyksXG4gICAgICAgICAgcHJvb2YgPSBQcm9vZi5mcm9tUHJvb2ZOb2RlKHByb29mTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHJ1bGUgPSBuZXcgUnVsZShmaWxlQ29udGV4dCwgc3RyaW5nLCBsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBwcm9vZik7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5PYmplY3QuYXNzaWduKHNoaW0sIHtcbiAgUnVsZVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFJ1bGU7XG4iXSwibmFtZXMiOlsiZXh0cmFjdCIsImFycmF5VXRpbGl0aWVzIiwicmV2ZXJzZSIsImJhY2t3YXJkc0V2ZXJ5IiwicHJvb2ZOb2RlUXVlcnkiLCJub2RlUXVlcnkiLCJsYWJlbE5vZGVzUXVlcnkiLCJub2Rlc1F1ZXJ5IiwicHJlbWlzZU5vZGVzUXVlcnkiLCJjb25jbHVzaW9uTm9kZVF1ZXJ5IiwiUnVsZSIsImZpbGVDb250ZXh0Iiwic3RyaW5nIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicHJvb2YiLCJnZXRGaWxlQ29udGV4dCIsImdldFN0cmluZyIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsImdldFByb29mIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXZhcmlhYmxlTmFtZSIsIm1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lTWF0Y2hlcyIsInNvbWUiLCJsYWJlbCIsInVuaWZ5U3RhdGVtZW50QW5kUHJvb2ZTdGVwcyIsInN0YXRlbWVudCIsInByb29mU3RlcHMiLCJjb250ZXh0Iiwic3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQiLCJsb2NhbENvbnRleHQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJnZW5lcmFsQ29udGV4dCIsInNwZWNpZmljQ29udGV4dCIsIlN1YnN0aXR1dGlvbnMiLCJzaGltIiwic3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwic3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uIiwidW5pZnlTdGF0ZW1lbnRXaXRoQ29uY2x1c2lvbiIsInByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2VzIiwidW5pZnlQcm9vZlN0ZXBzV2l0aFByZW1pc2VzIiwic3Vic3RpdHV0aW9uc1Jlc29sdmVkIiwiYXJlUmVzb2x2ZWQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwidW5pZnlTdGF0ZW1lbnQiLCJwcmVtaXNlIiwicHJvb2ZTdGVwVW5pZmllZFdpdGhQcmVtaXNlIiwidW5pZnlQcm9vZlN0ZXBzV2l0aFByZW1pc2UiLCJwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlIiwicHJlbWlzZVVuaWZpZWRJbmRlcGVuZGVudGx5IiwidW5pZnlJbmRlcGVuZGVudGx5IiwicHJvb2ZTdGVwIiwicHJvb2ZTdGVwVW5pZmllZCIsInVuaWZ5UHJvb2ZTdGVwIiwidmVyaWZ5IiwidmVyaWZpZWQiLCJydWxlU3RyaW5nIiwidHJhY2UiLCJsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCIsImV2ZXJ5IiwibGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJwcmVtaXNlc1ZlcmlmaWVkIiwicHJlbWlzZVZlcmlmaWVkIiwiY29uY2x1c2lvblZlcmlmaWVkIiwicHJvb2ZWZXJpZmllZCIsInJ1bGUiLCJhZGRSdWxlIiwiZGVidWciLCJ0b0pTT04iLCJsYWJlbHNKU09OIiwibGFiZWxzVG9MYWJlbHNKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZXNUb1ByZW1pc2VzSlNPTiIsImNvbmNsdXNpb25KU09OIiwiY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJsYWJlbHNGcm9tSlNPTiIsInByZW1pc2VzRnJvbUpTT04iLCJjb25jbHVzaW9uRnJvbUpTT04iLCJzdHJpbmdGcm9tTGFiZWxzIiwiZnJvbVJ1bGVOb2RlIiwicnVsZU5vZGUiLCJMYWJlbCIsIlByb29mIiwiUHJlbWlzZSIsIkNvbmNsdXNpb24iLCJwcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwicHJlbWlzZU5vZGVzIiwiY29uY2x1c2lvbk5vZGUiLCJtYXAiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwicHJlbWlzZU5vZGUiLCJmcm9tUHJlbWlzZU5vZGUiLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJmcm9tUHJvb2ZOb2RlIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFrUUE7OztlQUFBOzs7eUJBaFErQjsyREFFZDs0REFDUTtpQ0FFUTtxQkFDSztvQkFNSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUzQyxJQUFRQSxVQUFxQ0MseUJBQWMsQ0FBbkRELFNBQVNFLFVBQTRCRCx5QkFBYyxDQUExQ0MsU0FBU0MsaUJBQW1CRix5QkFBYyxDQUFqQ0U7QUFFMUIsSUFBTUMsaUJBQWlCQyxJQUFBQSxnQkFBUyxFQUFDLGdCQUMzQkMsa0JBQWtCQyxJQUFBQSxpQkFBVSxFQUFDLGdCQUM3QkMsb0JBQW9CRCxJQUFBQSxpQkFBVSxFQUFDLGtCQUMvQkUsc0JBQXNCSixJQUFBQSxnQkFBUyxFQUFDO0FBRXRDLElBQUEsQUFBTUsscUJBQU47YUFBTUEsS0FDUUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLEtBQUs7Z0NBRGhFTjtRQUVGLElBQUksQ0FBQ0MsV0FBVyxHQUFHQTtRQUNuQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTs7a0JBUFhOOztZQVVKTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFdBQVc7WUFDekI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLE1BQU07WUFDcEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFFBQVE7WUFDdEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLFVBQVU7WUFDeEI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNOLEtBQUs7WUFDbkI7OztZQUVBTyxLQUFBQTttQkFBQUEsU0FBQUEsbUJBQW1CQyxhQUFhO2dCQUFJLE9BQU8sSUFBSSxDQUFDVCxVQUFVLENBQUNRLGtCQUFrQixDQUFDQztZQUFnQjs7O1lBRTlGQyxLQUFBQTttQkFBQUEsU0FBQUEsc0JBQXNCQyxnQkFBZ0I7Z0JBQ3BDLElBQU1DLDBCQUEwQixJQUFJLENBQUNkLE1BQU0sQ0FBQ2UsSUFBSSxDQUFDLFNBQUNDO29CQUNoRCxJQUFNRiwwQkFBMEJFLE1BQU1KLHFCQUFxQixDQUFDQztvQkFFNUQsSUFBSUMseUJBQXlCO3dCQUMzQixPQUFPO29CQUNUO2dCQUNGO2dCQUVBLE9BQU9BO1lBQ1Q7OztZQUVBRyxLQUFBQTttQkFBQUEsU0FBQUEsNEJBQTRCQyxTQUFTLEVBQUVDLFVBQVUsRUFBRUMsT0FBTztnQkFDeEQsSUFBSUM7Z0JBRUosSUFBTUMsZUFBZUMsY0FBWSxDQUFDQyxlQUFlLENBQUMsSUFBSSxDQUFDMUIsV0FBVyxHQUM1RDJCLGlCQUFpQkgsY0FDakJJLGtCQUFrQk4sU0FBUyxHQUFHO2dCQUVwQyxJQUFNLEFBQUVPLGdCQUFrQkMsYUFBSSxDQUF0QkQsZUFDRkUsZ0JBQWdCRixjQUFjRyxXQUFXLElBQ3pDQyxpQ0FBaUMsSUFBSSxDQUFDQyw0QkFBNEIsQ0FBQ2QsV0FBV1csZUFBZUosZ0JBQWdCQztnQkFFbkgsSUFBSUssZ0NBQWdDO29CQUNsQyxJQUFNRSxnQ0FBZ0MsSUFBSSxDQUFDQywyQkFBMkIsQ0FBQ2YsWUFBWVUsZUFBZUosZ0JBQWdCQztvQkFFbEgsSUFBSU8sK0JBQStCO3dCQUNqQyxJQUFNRSx3QkFBd0JOLGNBQWNPLFdBQVc7d0JBRXZEZixnQ0FBZ0NjLHVCQUF1QixHQUFHO29CQUM1RDtnQkFDRjtnQkFFQSxPQUFPZDtZQUNUOzs7WUFFQVcsS0FBQUE7bUJBQUFBLFNBQUFBLDZCQUE2QmQsU0FBUyxFQUFFVyxhQUFhLEVBQUVKLGNBQWMsRUFBRUMsZUFBZTtnQkFDcEYsSUFBSUs7Z0JBRUosSUFBTU0sbUJBQW1CLElBQUksQ0FBQ25DLFVBQVUsQ0FBQ29DLGNBQWMsQ0FBQ3BCLFdBQVdXLGVBQWVKLGdCQUFnQkM7Z0JBRWxHSyxpQ0FBaUNNLGtCQUFrQixHQUFHO2dCQUV0RCxPQUFPTjtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLDRCQUE0QmYsVUFBVSxFQUFFVSxhQUFhLEVBQUVKLGNBQWMsRUFBRUMsZUFBZTs7Z0JBQ3BGUCxhQUFhOUIsUUFBUThCLGFBQWEsR0FBRztnQkFFckMsSUFBTWMsZ0NBQWdDM0MsZUFBZSxJQUFJLENBQUNXLFFBQVEsRUFBRSxTQUFDc0M7b0JBQ25FLElBQU1DLDhCQUE4QixNQUFLQywwQkFBMEIsQ0FBQ3RCLFlBQVlvQixTQUFTVixlQUFlSixnQkFBZ0JDO29CQUV4SCxJQUFJYyw2QkFBNkI7d0JBQy9CLE9BQU87b0JBQ1Q7Z0JBQ0Y7Z0JBRUEsT0FBT1A7WUFDVDs7O1lBRUFRLEtBQUFBO21CQUFBQSxTQUFBQSwyQkFBMkJ0QixVQUFVLEVBQUVvQixPQUFPLEVBQUVWLGFBQWEsRUFBRUosY0FBYyxFQUFFQyxlQUFlO2dCQUM1RixJQUFJZ0IsK0JBQStCO2dCQUVuQyxJQUFNQyw4QkFBOEJKLFFBQVFLLGtCQUFrQixDQUFDZixlQUFlSixnQkFBZ0JDO2dCQUU5RixJQUFJaUIsNkJBQTZCO29CQUMvQkQsK0JBQStCO2dCQUNqQyxPQUFPO29CQUNMLElBQU1HLFlBQVkxRCxRQUFRZ0MsWUFBWSxTQUFDMEI7d0JBQ3JDLElBQU1DLG1CQUFtQlAsUUFBUVEsY0FBYyxDQUFDRixXQUFXaEIsZUFBZUosZ0JBQWdCQzt3QkFFMUYsSUFBSW9CLGtCQUFrQjs0QkFDcEIsT0FBTzt3QkFDVDtvQkFDRixNQUFNO29CQUVOLElBQUlELGNBQWMsTUFBTTt3QkFDdEJILCtCQUErQjtvQkFDakM7Z0JBQ0Y7Z0JBRUEsT0FBT0E7WUFDVDs7O1lBRUFNLEtBQUFBO21CQUFBQSxTQUFBQTs7Z0JBQ0UsSUFBSUMsV0FBVztnQkFFZixJQUFNQyxhQUFhLElBQUksQ0FBQ25ELE1BQU0sRUFBRSxHQUFHO2dCQUVuQyxJQUFJLENBQUNELFdBQVcsQ0FBQ3FELEtBQUssQ0FBQyxBQUFDLGtCQUE0QixPQUFYRCxZQUFXO2dCQUVwRCxJQUFNRSw2QkFBNkIsSUFBSSxDQUFDcEQsTUFBTSxDQUFDcUQsS0FBSyxDQUFDLFNBQUNyQztvQkFDcEQsSUFBTXNDLDZCQUE2QnRDLE1BQU11QyxrQkFBa0IsQ0FBQyxNQUFLekQsV0FBVztvQkFFNUUsSUFBSXdELDRCQUE0Qjt3QkFDOUIsT0FBTztvQkFDVDtnQkFDRjtnQkFFQSxJQUFJRiw0QkFBNEI7b0JBQzlCLElBQU1oQyxVQUFVRyxjQUFZLENBQUNDLGVBQWUsQ0FBQyxJQUFJLENBQUMxQixXQUFXLEdBQ3ZEMEQsbUJBQW1CLElBQUksQ0FBQ3ZELFFBQVEsQ0FBQ29ELEtBQUssQ0FBQyxTQUFDZDt3QkFDdEMsSUFBTWtCLGtCQUFrQmxCLFFBQVFTLE1BQU0sQ0FBQzVCO3dCQUV2QyxJQUFJcUMsaUJBQWlCOzRCQUNuQixPQUFPO3dCQUNUO29CQUNGO29CQUVOLElBQUlELGtCQUFrQjt3QkFDcEIsSUFBTUUscUJBQXFCLElBQUksQ0FBQ3hELFVBQVUsQ0FBQzhDLE1BQU0sQ0FBQzVCO3dCQUVsRCxJQUFJc0Msb0JBQW9COzRCQUN0QixJQUFJQyxnQkFBZ0IsTUFBTSxHQUFHOzRCQUU3QixJQUFJLElBQUksQ0FBQ3hELEtBQUssS0FBSyxNQUFNO2dDQUN2QixJQUFNLEFBQUV3QixnQkFBa0JDLGFBQUksQ0FBdEJELGVBQ0ZFLGdCQUFnQkYsY0FBY0csV0FBVztnQ0FFL0M2QixnQkFBZ0IsSUFBSSxDQUFDeEQsS0FBSyxDQUFDNkMsTUFBTSxDQUFDbkIsZUFBZSxJQUFJLENBQUMzQixVQUFVLEVBQUVrQjs0QkFDcEU7NEJBRUEsSUFBSXVDLGVBQWU7Z0NBQ2pCLElBQU1DLE9BQU8sSUFBSSxFQUFHLEdBQUc7Z0NBRXZCLElBQUksQ0FBQzlELFdBQVcsQ0FBQytELE9BQU8sQ0FBQ0Q7Z0NBRXpCWCxXQUFXOzRCQUNiO3dCQUNGO29CQUNGO2dCQUNGO2dCQUVBLElBQUlBLFVBQVU7b0JBQ1osSUFBSSxDQUFDbkQsV0FBVyxDQUFDZ0UsS0FBSyxDQUFDLEFBQUMsb0JBQThCLE9BQVhaLFlBQVc7Z0JBQ3hEO2dCQUVBLE9BQU9EO1lBQ1Q7OztZQUVBYyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUMsYUFBYUMsSUFBQUEsd0JBQWtCLEVBQUMsSUFBSSxDQUFDakUsTUFBTSxHQUMzQ2tFLGVBQWVDLElBQUFBLDRCQUFzQixFQUFDLElBQUksQ0FBQ2xFLFFBQVEsR0FDbkRtRSxpQkFBaUJDLElBQUFBLGdDQUEwQixFQUFDLElBQUksQ0FBQ25FLFVBQVUsR0FDM0RGLFNBQVNnRSxZQUNUL0QsV0FBV2lFLGNBQ1hoRSxhQUFha0UsZ0JBQ2JFLE9BQU87b0JBQ0x0RSxRQUFBQTtvQkFDQUMsVUFBQUE7b0JBQ0FDLFlBQUFBO2dCQUNGO2dCQUVOLE9BQU9vRTtZQUNUOzs7O1lBRU9DLEtBQUFBO21CQUFQLFNBQU9BLFNBQVNELElBQUksRUFBRXhFLFdBQVc7Z0JBQy9CLElBQUk4RDtnQkFFSixJQUFNekQsUUFBUSxNQUNSSCxTQUFTd0UsSUFBQUEsb0JBQWMsRUFBQ0YsTUFBTXhFLGNBQzlCRyxXQUFXd0UsSUFBQUEsc0JBQWdCLEVBQUNILE1BQU14RSxjQUNsQ0ksYUFBYXdFLElBQUFBLHdCQUFrQixFQUFDSixNQUFNeEUsY0FDdENDLFNBQVM0RSxJQUFBQSxtQ0FBZ0IsRUFBQzNFO2dCQUVoQzRELE9BQU8sSUF6TUwvRCxLQXlNY0MsYUFBYUMsUUFBUUMsUUFBUUMsVUFBVUMsWUFBWUM7Z0JBRW5FLE9BQU95RDtZQUNUOzs7WUFFT2dCLEtBQUFBO21CQUFQLFNBQU9BLGFBQWFDLFFBQVEsRUFBRS9FLFdBQVc7Z0JBQ3ZDLElBQVFnRixRQUFzQ2xELGFBQUksQ0FBMUNrRCxPQUFPQyxRQUErQm5ELGFBQUksQ0FBbkNtRCxPQUFPQyxVQUF3QnBELGFBQUksQ0FBNUJvRCxTQUFTQyxhQUFlckQsYUFBSSxDQUFuQnFELFlBQ3pCQyxZQUFZM0YsZUFBZXNGLFdBQzNCTSxhQUFhMUYsZ0JBQWdCb0YsV0FDN0JPLGVBQWV6RixrQkFBa0JrRixXQUNqQ1EsaUJBQWlCekYsb0JBQW9CaUYsV0FDckM3RSxTQUFTbUYsV0FBV0csR0FBRyxDQUFDLFNBQUNDO29CQUN2QixJQUFNdkUsUUFBUThELE1BQU1VLGFBQWEsQ0FBQ0QsV0FBV3pGO29CQUU3QyxPQUFPa0I7Z0JBQ1QsSUFDQWYsV0FBV21GLGFBQWFFLEdBQUcsQ0FBQyxTQUFDRztvQkFDM0IsSUFBTWxELFVBQVV5QyxRQUFRVSxlQUFlLENBQUNELGFBQWEzRjtvQkFFckQsT0FBT3lDO2dCQUNULElBQ0FyQyxhQUFhK0UsV0FBV1Usa0JBQWtCLENBQUNOLGdCQUFnQnZGLGNBQzNEQyxTQUFTNEUsSUFBQUEsbUNBQWdCLEVBQUMzRSxTQUMxQkcsUUFBUTRFLE1BQU1hLGFBQWEsQ0FBQ1YsV0FBV3BGLGNBQ3ZDOEQsT0FBTyxJQWpPWC9ELEtBaU9vQkMsYUFBYUMsUUFBUUMsUUFBUUMsVUFBVUMsWUFBWUM7Z0JBRXpFLE9BQU95RDtZQUNUOzs7V0FwT0kvRDs7QUF1T05nRyxPQUFPQyxNQUFNLENBQUNsRSxhQUFJLEVBQUU7SUFDbEIvQixNQUFBQTtBQUNGO0lBRUEsV0FBZUEifQ==