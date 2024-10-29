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
                var Substitutions = _shim.default.Substitutions, substitutions = Substitutions.fromNothing(), statementUnifiedWithConclusion = this.unifyStatementWithConclusion(statement, substitutions, context);
                if (statementUnifiedWithConclusion) {
                    var proofStepsUnifiedWithPremises = this.unifyProofStepsWithPremises(proofSteps, substitutions, context);
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
            value: function unifyStatementWithConclusion(statement, substitutions, context) {
                var statementUnifiedWithConclusion;
                var statementString = statement.getString(), conclusionString = this.conclusion.getString();
                context.trace("Unifying the '".concat(statementString, "' statement with the ").concat(conclusionString, "' conclusion..."));
                var statementUnified = this.conclusion.unifyStatement(statement, substitutions, context); ///
                statementUnifiedWithConclusion = statementUnified; ///
                if (statementUnifiedWithConclusion) {
                    context.debug("...unified the '".concat(statementString, "' statement with the '").concat(conclusionString, "' conclusion"));
                }
                return statementUnifiedWithConclusion;
            }
        },
        {
            key: "unifyProofStepsWithPremises",
            value: function unifyProofStepsWithPremises(proofSteps, substitutions, context) {
                var _this = this;
                proofSteps = reverse(proofSteps); ///
                var proofStepsUnifiedWithPremises = backwardsEvery(this.premises, function(premise) {
                    var proofStepUnifiedWithPremise = _this.unifyProofStepsWithPremise(proofSteps, premise, substitutions, context);
                    if (proofStepUnifiedWithPremise) {
                        return true;
                    }
                });
                return proofStepsUnifiedWithPremises;
            }
        },
        {
            key: "unifyProofStepsWithPremise",
            value: function unifyProofStepsWithPremise(proofSteps, premise, substitutions, context) {
                var proofStepsUnifiedWithPremise = false;
                var premiseString = premise.getString();
                context.trace("Unifying the '".concat(premiseString, "' premise..."));
                var premiseResolvedIndependently = premise.resolveIndependently(substitutions, context);
                if (premiseResolvedIndependently) {
                    proofStepsUnifiedWithPremise = true;
                } else {
                    var proofStep = extract(proofSteps, function(proofStep) {
                        var proofStepUnified = premise.unifyProofStep(proofStep, substitutions, context);
                        if (proofStepUnified) {
                            return true;
                        }
                    }) || null;
                    if (proofStep !== null) {
                        proofStepsUnifiedWithPremise = true;
                    }
                }
                if (proofStepsUnifiedWithPremise) {
                    context.debug("...unified the '".concat(premiseString, "' premise."));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IHNoaW0gZnJvbSBcIi4vc2hpbVwiO1xuaW1wb3J0IExvY2FsQ29udGV4dCBmcm9tIFwiLi9jb250ZXh0L2xvY2FsXCI7XG5cbmltcG9ydCB7IHN0cmluZ0Zyb21MYWJlbHMgfSBmcm9tIFwiLi90b3BMZXZlbEFzc2VydGlvblwiO1xuaW1wb3J0IHsgbm9kZVF1ZXJ5LCBub2Rlc1F1ZXJ5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL3F1ZXJ5XCI7XG5pbXBvcnQgeyBsYWJlbHNGcm9tSlNPTixcbiAgICAgICAgIHByZW1pc2VzRnJvbUpTT04sXG4gICAgICAgICBjb25jbHVzaW9uRnJvbUpTT04sXG4gICAgICAgICBsYWJlbHNUb0xhYmVsc0pTT04sXG4gICAgICAgICBwcmVtaXNlc1RvUHJlbWlzZXNKU09OLFxuICAgICAgICAgY29uY2x1c2lvblRvQ29uY2x1c2lvbkpTT04gfSBmcm9tIFwiLi91dGlsaXRpZXMvanNvblwiO1xuXG5jb25zdCB7IGV4dHJhY3QsIHJldmVyc2UsIGJhY2t3YXJkc0V2ZXJ5IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgcHJvb2ZOb2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9wcm9vZlwiKSxcbiAgICAgIGxhYmVsTm9kZXNRdWVyeSA9IG5vZGVzUXVlcnkoXCIvcnVsZS9sYWJlbFwiKSxcbiAgICAgIHByZW1pc2VOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL3ByZW1pc2VcIiksXG4gICAgICBjb25jbHVzaW9uTm9kZVF1ZXJ5ID0gbm9kZVF1ZXJ5KFwiL3J1bGUvY29uY2x1c2lvblwiKTtcblxuY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGZpbGVDb250ZXh0LCBzdHJpbmcsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMuc3RyaW5nID0gc3RyaW5nO1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldFByb29mKCkge1xuICAgIHJldHVybiB0aGlzLnByb29mO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUpIHsgcmV0dXJuIHRoaXMuY29uY2x1c2lvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSk7IH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5hbWUobWV0YXZhcmlhYmxlTmFtZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5hbWVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOYW1lKG1ldGF2YXJpYWJsZU5hbWUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTmFtZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcHMoc3RhdGVtZW50LCBwcm9vZlN0ZXBzLCBjb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkO1xuXG4gICAgY29uc3QgeyBTdWJzdGl0dXRpb25zIH0gPSBzaGltLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBTdWJzdGl0dXRpb25zLmZyb21Ob3RoaW5nKCksXG4gICAgICAgICAgc3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uID0gdGhpcy51bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICBpZiAoc3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uKSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlcyA9IHRoaXMudW5pZnlQcm9vZlN0ZXBzV2l0aFByZW1pc2VzKHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpO1xuXG4gICAgICBpZiAocHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZXMpIHtcbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9uc1Jlc29sdmVkID0gc3Vic3RpdHV0aW9ucy5hcmVSZXNvbHZlZCgpO1xuXG4gICAgICAgIHN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkID0gc3Vic3RpdHV0aW9uc1Jlc29sdmVkOyAvLy9cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50QW5kUHJvb2ZTdGVwc1VuaWZpZWQ7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uKHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb247XG5cbiAgICBjb25zdCBzdGF0ZW1lbnRTdHJpbmcgPSBzdGF0ZW1lbnQuZ2V0U3RyaW5nKCksXG4gICAgICAgICAgY29uY2x1c2lvblN0cmluZyA9IHRoaXMuY29uY2x1c2lvbi5nZXRTdHJpbmcoKTtcblxuICAgIGNvbnRleHQudHJhY2UoYFVuaWZ5aW5nIHRoZSAnJHtzdGF0ZW1lbnRTdHJpbmd9JyBzdGF0ZW1lbnQgd2l0aCB0aGUgJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbi4uLmApO1xuXG4gICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZCA9IHRoaXMuY29uY2x1c2lvbi51bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIHN1YnN0aXR1dGlvbnMsIGNvbnRleHQpOyAgLy8vXG5cbiAgICBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24gPSBzdGF0ZW1lbnRVbmlmaWVkOyAvLy9cblxuICAgIGlmIChzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24pIHtcbiAgICAgIGNvbnRleHQuZGVidWcoYC4uLnVuaWZpZWQgdGhlICcke3N0YXRlbWVudFN0cmluZ30nIHN0YXRlbWVudCB3aXRoIHRoZSAnJHtjb25jbHVzaW9uU3RyaW5nfScgY29uY2x1c2lvbmApO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb247XG4gIH1cblxuICB1bmlmeVByb29mU3RlcHNXaXRoUHJlbWlzZXMocHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgY29udGV4dCkge1xuICAgIHByb29mU3RlcHMgPSByZXZlcnNlKHByb29mU3RlcHMpOyAvLy9cblxuICAgIGNvbnN0IHByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2VzID0gYmFja3dhcmRzRXZlcnkodGhpcy5wcmVtaXNlcywgKHByZW1pc2UpID0+IHtcbiAgICAgIGNvbnN0IHByb29mU3RlcFVuaWZpZWRXaXRoUHJlbWlzZSA9IHRoaXMudW5pZnlQcm9vZlN0ZXBzV2l0aFByZW1pc2UocHJvb2ZTdGVwcywgcHJlbWlzZSwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBVbmlmaWVkV2l0aFByZW1pc2UpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZXM7XG4gIH1cblxuICB1bmlmeVByb29mU3RlcHNXaXRoUHJlbWlzZShwcm9vZlN0ZXBzLCBwcmVtaXNlLCBzdWJzdGl0dXRpb25zLCBjb250ZXh0KSB7XG4gICAgbGV0IHByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2UgID1mYWxzZTtcblxuICAgIGNvbnN0IHByZW1pc2VTdHJpbmcgPSBwcmVtaXNlLmdldFN0cmluZygpO1xuXG4gICAgY29udGV4dC50cmFjZShgVW5pZnlpbmcgdGhlICcke3ByZW1pc2VTdHJpbmd9JyBwcmVtaXNlLi4uYCk7XG5cbiAgICBjb25zdCBwcmVtaXNlUmVzb2x2ZWRJbmRlcGVuZGVudGx5ID0gcHJlbWlzZS5yZXNvbHZlSW5kZXBlbmRlbnRseShzdWJzdGl0dXRpb25zLCBjb250ZXh0KTtcblxuICAgIGlmIChwcmVtaXNlUmVzb2x2ZWRJbmRlcGVuZGVudGx5KSB7XG4gICAgICBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwID0gZXh0cmFjdChwcm9vZlN0ZXBzLCAocHJvb2ZTdGVwKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb29mU3RlcFVuaWZpZWQgPSBwcmVtaXNlLnVuaWZ5UHJvb2ZTdGVwKHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByb29mU3RlcFVuaWZpZWQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSkgfHwgbnVsbDtcblxuICAgICAgaWYgKHByb29mU3RlcCAhPT0gbnVsbCkge1xuICAgICAgICBwcm9vZlN0ZXBzVW5pZmllZFdpdGhQcmVtaXNlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZSkge1xuICAgICAgY29udGV4dC5kZWJ1ZyhgLi4udW5pZmllZCB0aGUgJyR7cHJlbWlzZVN0cmluZ30nIHByZW1pc2UuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb29mU3RlcHNVbmlmaWVkV2l0aFByZW1pc2U7XG4gIH1cblxuICB2ZXJpZnkoKSB7XG4gICAgbGV0IHZlcmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBydWxlU3RyaW5nID0gdGhpcy5zdHJpbmc7IC8vL1xuXG4gICAgdGhpcy5maWxlQ29udGV4dC50cmFjZShgVmVyaWZ5aW5nIHRoZSAnJHtydWxlU3RyaW5nfScgcnVsZS4uLmApO1xuXG4gICAgY29uc3QgbGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQgPSB0aGlzLmxhYmVscy5ldmVyeSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IGxhYmVsVlZlcmlmaWVkV2hlbkRlY2xhcmVkID0gbGFiZWwudmVyaWZ5V2hlbkRlY2xhcmVkKHRoaXMuZmlsZUNvbnRleHQpO1xuXG4gICAgICBpZiAobGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAobGFiZWxzVmVyaWZpZWRXaGVuRGVjbGFyZWQpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBMb2NhbENvbnRleHQuZnJvbUZpbGVDb250ZXh0KHRoaXMuZmlsZUNvbnRleHQpLFxuICAgICAgICAgICAgcHJlbWlzZXNWZXJpZmllZCA9IHRoaXMucHJlbWlzZXMuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcHJlbWlzZVZlcmlmaWVkID0gcHJlbWlzZS52ZXJpZnkoY29udGV4dCk7XG5cbiAgICAgICAgICAgICAgaWYgKHByZW1pc2VWZXJpZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKHByZW1pc2VzVmVyaWZpZWQpIHtcbiAgICAgICAgY29uc3QgY29uY2x1c2lvblZlcmlmaWVkID0gdGhpcy5jb25jbHVzaW9uLnZlcmlmeShjb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVkKSB7XG4gICAgICAgICAgbGV0IHByb29mVmVyaWZpZWQgPSB0cnVlOyAvLy9cblxuICAgICAgICAgIGlmICh0aGlzLnByb29mICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB7IFN1YnN0aXR1dGlvbnMgfSA9IHNoaW0sXG4gICAgICAgICAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICAgICAgICBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5jb25jbHVzaW9uLCBjb250ZXh0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAocHJvb2ZWZXJpZmllZCkge1xuICAgICAgICAgICAgY29uc3QgcnVsZSA9IHRoaXM7ICAvLy9cblxuICAgICAgICAgICAgdGhpcy5maWxlQ29udGV4dC5hZGRSdWxlKHJ1bGUpO1xuXG4gICAgICAgICAgICB2ZXJpZmllZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHZlcmlmaWVkKSB7XG4gICAgICB0aGlzLmZpbGVDb250ZXh0LmRlYnVnKGAuLi52ZXJpZmllZCB0aGUgJyR7cnVsZVN0cmluZ30nIHJ1bGUuYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlcmlmaWVkO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHNUb0xhYmVsc0pTT04odGhpcy5sYWJlbHMpLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHByZW1pc2VzVG9QcmVtaXNlc0pTT04odGhpcy5wcmVtaXNlcyksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uVG9Db25jbHVzaW9uSlNPTih0aGlzLmNvbmNsdXNpb24pLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGNvbnN0IHByb29mID0gbnVsbCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNGcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0Zyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkZyb21KU09OKGpzb24sIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmdGcm9tTGFiZWxzKGxhYmVscyk7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOb2RlKHJ1bGVOb2RlLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHsgTGFiZWwsIFByb29mLCBQcmVtaXNlLCBDb25jbHVzaW9uIH0gPSBzaGltLFxuICAgICAgICAgIHByb29mTm9kZSA9IHByb29mTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBsYWJlbE5vZGVzID0gbGFiZWxOb2Rlc1F1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBwcmVtaXNlTm9kZXMgPSBwcmVtaXNlTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgY29uY2x1c2lvbk5vZGUgPSBjb25jbHVzaW9uTm9kZVF1ZXJ5KHJ1bGVOb2RlKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbE5vZGVzLm1hcCgobGFiZWxOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IExhYmVsLmZyb21MYWJlbE5vZGUobGFiZWxOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbDtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VOb2Rlcy5tYXAoKHByZW1pc2VOb2RlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlID0gUHJlbWlzZS5mcm9tUHJlbWlzZU5vZGUocHJlbWlzZU5vZGUsIGZpbGVDb250ZXh0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUNvbmNsdXNpb25Ob2RlKGNvbmNsdXNpb25Ob2RlLCBmaWxlQ29udGV4dCksXG4gICAgICAgICAgc3RyaW5nID0gc3RyaW5nRnJvbUxhYmVscyhsYWJlbHMpLFxuICAgICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoZmlsZUNvbnRleHQsIHN0cmluZywgbGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgcHJvb2YpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuT2JqZWN0LmFzc2lnbihzaGltLCB7XG4gIFJ1bGVcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBSdWxlO1xuIl0sIm5hbWVzIjpbImV4dHJhY3QiLCJhcnJheVV0aWxpdGllcyIsInJldmVyc2UiLCJiYWNrd2FyZHNFdmVyeSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByZW1pc2VOb2Rlc1F1ZXJ5IiwiY29uY2x1c2lvbk5vZGVRdWVyeSIsIlJ1bGUiLCJmaWxlQ29udGV4dCIsInN0cmluZyIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsInByb29mIiwiZ2V0RmlsZUNvbnRleHQiLCJnZXRTdHJpbmciLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldENvbmNsdXNpb24iLCJnZXRQcm9vZiIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGF2YXJpYWJsZU5hbWUiLCJtZXRhdmFyaWFibGVOYW1lIiwibWV0YXZhcmlhYmxlTmFtZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJ1bmlmeVN0YXRlbWVudEFuZFByb29mU3RlcHMiLCJzdGF0ZW1lbnQiLCJwcm9vZlN0ZXBzIiwiY29udGV4dCIsInN0YXRlbWVudEFuZFByb29mU3RlcHNVbmlmaWVkIiwiU3Vic3RpdHV0aW9ucyIsInNoaW0iLCJzdWJzdGl0dXRpb25zIiwiZnJvbU5vdGhpbmciLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24iLCJ1bmlmeVN0YXRlbWVudFdpdGhDb25jbHVzaW9uIiwicHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZXMiLCJ1bmlmeVByb29mU3RlcHNXaXRoUHJlbWlzZXMiLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJhcmVSZXNvbHZlZCIsInN0YXRlbWVudFN0cmluZyIsImNvbmNsdXNpb25TdHJpbmciLCJ0cmFjZSIsInN0YXRlbWVudFVuaWZpZWQiLCJ1bmlmeVN0YXRlbWVudCIsImRlYnVnIiwicHJlbWlzZSIsInByb29mU3RlcFVuaWZpZWRXaXRoUHJlbWlzZSIsInVuaWZ5UHJvb2ZTdGVwc1dpdGhQcmVtaXNlIiwicHJvb2ZTdGVwc1VuaWZpZWRXaXRoUHJlbWlzZSIsInByZW1pc2VTdHJpbmciLCJwcmVtaXNlUmVzb2x2ZWRJbmRlcGVuZGVudGx5IiwicmVzb2x2ZUluZGVwZW5kZW50bHkiLCJwcm9vZlN0ZXAiLCJwcm9vZlN0ZXBVbmlmaWVkIiwidW5pZnlQcm9vZlN0ZXAiLCJ2ZXJpZnkiLCJ2ZXJpZmllZCIsInJ1bGVTdHJpbmciLCJsYWJlbHNWZXJpZmllZFdoZW5EZWNsYXJlZCIsImV2ZXJ5IiwibGFiZWxWVmVyaWZpZWRXaGVuRGVjbGFyZWQiLCJ2ZXJpZnlXaGVuRGVjbGFyZWQiLCJMb2NhbENvbnRleHQiLCJmcm9tRmlsZUNvbnRleHQiLCJwcmVtaXNlc1ZlcmlmaWVkIiwicHJlbWlzZVZlcmlmaWVkIiwiY29uY2x1c2lvblZlcmlmaWVkIiwicHJvb2ZWZXJpZmllZCIsInJ1bGUiLCJhZGRSdWxlIiwidG9KU09OIiwibGFiZWxzSlNPTiIsImxhYmVsc1RvTGFiZWxzSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2VzVG9QcmVtaXNlc0pTT04iLCJjb25jbHVzaW9uSlNPTiIsImNvbmNsdXNpb25Ub0NvbmNsdXNpb25KU09OIiwianNvbiIsImZyb21KU09OIiwibGFiZWxzRnJvbUpTT04iLCJwcmVtaXNlc0Zyb21KU09OIiwiY29uY2x1c2lvbkZyb21KU09OIiwic3RyaW5nRnJvbUxhYmVscyIsImZyb21SdWxlTm9kZSIsInJ1bGVOb2RlIiwiTGFiZWwiLCJQcm9vZiIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwicHJvb2ZOb2RlIiwibGFiZWxOb2RlcyIsInByZW1pc2VOb2RlcyIsImNvbmNsdXNpb25Ob2RlIiwibWFwIiwibGFiZWxOb2RlIiwiZnJvbUxhYmVsTm9kZSIsInByZW1pc2VOb2RlIiwiZnJvbVByZW1pc2VOb2RlIiwiZnJvbUNvbmNsdXNpb25Ob2RlIiwiZnJvbVByb29mTm9kZSIsIk9iamVjdCIsImFzc2lnbiJd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