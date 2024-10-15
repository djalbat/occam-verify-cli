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
var _necessary = require("necessary");
var _label = /*#__PURE__*/ _interop_require_default(require("./label"));
var _proof = /*#__PURE__*/ _interop_require_default(require("./proof"));
var _premise = /*#__PURE__*/ _interop_require_default(require("./premise"));
var _conclusion = /*#__PURE__*/ _interop_require_default(require("./conclusion"));
var _local = /*#__PURE__*/ _interop_require_default(require("./context/local"));
var _substitutions = /*#__PURE__*/ _interop_require_default(require("./substitutions"));
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
var reverse = _necessary.arrayUtilities.reverse, correlate = _necessary.arrayUtilities.correlate;
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
                    var statementUnifiedWithConclusion = this.conclusion.unifyStatement(statement, substitutions, localContext); ///
                    if (statementUnifiedWithConclusion) {
                        var substitutionsResolved = substitutions.resolve(localContext);
                        statementUnified = substitutionsResolved; ///
                    }
                }
                return statementUnified;
            }
        },
        {
            key: "unifyProofSteps",
            value: function unifyProofSteps(proofSteps, substitutions, localContext) {
                var proofStepsUnified;
                var premises = this.premises;
                premises = reverse(premises); ///
                proofSteps = reverse(proofSteps); ///
                proofStepsUnified = correlate(premises, proofSteps, function(premise, proofStep) {
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
                var labelsVerifiedAtTopLevel = this.labels.every(function(label) {
                    var labelVVerifiedAtTopLevel = label.verifyAtTopLevel(_this.fileContext);
                    if (labelVVerifiedAtTopLevel) {
                        return true;
                    }
                });
                if (labelsVerifiedAtTopLevel) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExhYmVsIGZyb20gXCIuL2xhYmVsXCI7XG5pbXBvcnQgUHJvb2YgZnJvbSBcIi4vcHJvb2ZcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcbmltcG9ydCBMb2NhbENvbnRleHQgZnJvbSBcIi4vY29udGV4dC9sb2NhbFwiO1xuaW1wb3J0IFN1YnN0aXR1dGlvbnMgZnJvbSBcIi4vc3Vic3RpdHV0aW9uc1wiO1xuXG5pbXBvcnQgeyBub2RlUXVlcnksIG5vZGVzUXVlcnkgfSBmcm9tIFwiLi91dGlsaXRpZXMvcXVlcnlcIjtcblxuY29uc3QgeyByZXZlcnNlLCBjb3JyZWxhdGUgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCBwcm9vZk5vZGVRdWVyeSA9IG5vZGVRdWVyeShcIi9ydWxlL3Byb29mXCIpLFxuICAgICAgbGFiZWxOb2Rlc1F1ZXJ5ID0gbm9kZXNRdWVyeShcIi9ydWxlL2xhYmVsXCIpLFxuICAgICAgcHJlbWlzZU5vZGVzUXVlcnkgPSBub2Rlc1F1ZXJ5KFwiL3J1bGUvcHJlbWlzZVwiKSxcbiAgICAgIGNvbmNsdXNpb25Ob2RlUXVlcnkgPSBub2RlUXVlcnkoXCIvcnVsZS9jb25jbHVzaW9uXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IoZmlsZUNvbnRleHQsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKSB7XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMucHJvb2YgPSBwcm9vZjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFByZW1pc2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZW1pc2VzO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0UHJvb2YoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvb2Y7XG4gIH1cblxuICBtYXRjaE1ldGF2YXJpYWJsZU5vZGUobWV0YXZhcmlhYmxlTm9kZSkge1xuICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB1bmlmeVN0YXRlbWVudChzdGF0ZW1lbnQsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnRVbmlmaWVkID0gZmFsc2U7XG5cbiAgICBjb25zdCBwcm9vZlN0ZXBzID0gbG9jYWxDb250ZXh0LmdldFByb29mU3RlcHMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpLFxuICAgICAgICAgIHByb29mU3RlcHNVbmlmaWVkID0gdGhpcy51bmlmeVByb29mU3RlcHMocHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChwcm9vZlN0ZXBzVW5pZmllZCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uID0gdGhpcy5jb25jbHVzaW9uLnVuaWZ5U3RhdGVtZW50KHN0YXRlbWVudCwgc3Vic3RpdHV0aW9ucywgbG9jYWxDb250ZXh0KTsgIC8vL1xuXG4gICAgICBpZiAoc3RhdGVtZW50VW5pZmllZFdpdGhDb25jbHVzaW9uKSB7XG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnNSZXNvbHZlZCA9IHN1YnN0aXR1dGlvbnMucmVzb2x2ZShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgIHN0YXRlbWVudFVuaWZpZWQgPSBzdWJzdGl0dXRpb25zUmVzb2x2ZWQ7IC8vL1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnRVbmlmaWVkO1xuICB9XG5cbiAgdW5pZnlQcm9vZlN0ZXBzKHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBwcm9vZlN0ZXBzVW5pZmllZDtcblxuICAgIGxldCBwcmVtaXNlcyA9IHRoaXMucHJlbWlzZXM7XG5cbiAgICBwcmVtaXNlcyA9IHJldmVyc2UocHJlbWlzZXMpOyAvLy9cblxuICAgIHByb29mU3RlcHMgPSByZXZlcnNlKHByb29mU3RlcHMpOyAvLy9cblxuICAgIHByb29mU3RlcHNVbmlmaWVkID0gY29ycmVsYXRlKHByZW1pc2VzLCBwcm9vZlN0ZXBzLCAocHJlbWlzZSwgcHJvb2ZTdGVwKSA9PiB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBVbmlmaWVkID0gcHJlbWlzZS51bmlmeVByb29mU3RlcChwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGxvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmIChwcm9vZlN0ZXBVbmlmaWVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHByb29mU3RlcHNVbmlmaWVkO1xuICB9XG5cbiAgdmVyaWZ5KCkge1xuICAgIGxldCB2ZXJpZmllZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbGFiZWxzU3RyaW5nID0gbGFiZWxzU3RyaW5nRnJvbUxhYmVscyh0aGlzLmxhYmVscyk7XG5cbiAgICB0aGlzLmZpbGVDb250ZXh0LnRyYWNlKGBWZXJpZnlpbmcgdGhlICcke2xhYmVsc1N0cmluZ30nIHJ1bGUuLi5gKTtcblxuICAgIGNvbnN0IGxhYmVsc1ZlcmlmaWVkQXRUb3BMZXZlbCA9IHRoaXMubGFiZWxzLmV2ZXJ5KChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxWVmVyaWZpZWRBdFRvcExldmVsID0gbGFiZWwudmVyaWZ5QXRUb3BMZXZlbCh0aGlzLmZpbGVDb250ZXh0KTtcblxuICAgICAgaWYgKGxhYmVsVlZlcmlmaWVkQXRUb3BMZXZlbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChsYWJlbHNWZXJpZmllZEF0VG9wTGV2ZWwpIHtcbiAgICAgIGNvbnN0IGxvY2FsQ29udGV4dCA9IExvY2FsQ29udGV4dC5mcm9tRmlsZUNvbnRleHQodGhpcy5maWxlQ29udGV4dCksXG4gICAgICAgICAgICBwcmVtaXNlc1ZlcmlmaWVkID0gdGhpcy5wcmVtaXNlcy5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwcmVtaXNlVmVyaWZpZWQgPSBwcmVtaXNlLnZlcmlmeShsb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgICAgIGlmIChwcmVtaXNlVmVyaWZpZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGlmIChwcmVtaXNlc1ZlcmlmaWVkKSB7XG4gICAgICAgIGNvbnN0IGNvbmNsdXNpb25WZXJpZmllZCA9IHRoaXMuY29uY2x1c2lvbi52ZXJpZnkobG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAoY29uY2x1c2lvblZlcmlmaWVkKSB7XG4gICAgICAgICAgbGV0IHByb29mVmVyaWZpZWQgPSB0cnVlOyAvLy9cblxuICAgICAgICAgIGlmICh0aGlzLnByb29mICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gU3Vic3RpdHV0aW9ucy5mcm9tTm90aGluZygpO1xuXG4gICAgICAgICAgICBwcm9vZlZlcmlmaWVkID0gdGhpcy5wcm9vZi52ZXJpZnkoc3Vic3RpdHV0aW9ucywgdGhpcy5jb25jbHVzaW9uLCBsb2NhbENvbnRleHQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwcm9vZlZlcmlmaWVkKSB7XG4gICAgICAgICAgICBjb25zdCBydWxlID0gdGhpczsgIC8vL1xuXG4gICAgICAgICAgICB0aGlzLmZpbGVDb250ZXh0LmFkZFJ1bGUocnVsZSk7XG5cbiAgICAgICAgICAgIHZlcmlmaWVkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgIHRoaXMuZmlsZUNvbnRleHQuZGVidWcoYC4uLnZlcmlmaWVkIHRoZSAnJHtsYWJlbHNTdHJpbmd9JyBydWxlLmApO1xuICAgIH1cblxuICAgIHJldHVybiB2ZXJpZmllZDtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKCk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gdGhpcy5wcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04oKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gdGhpcy5jb25jbHVzaW9uLnRvSlNPTigpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gICAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTihqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBjb25zdCBwcm9vZiA9IG51bGw7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUoZmlsZUNvbnRleHQsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTm9kZShydWxlTm9kZSwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBwcm9vZk5vZGUgPSBwcm9vZk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgbGFiZWxOb2RlcyA9IGxhYmVsTm9kZXNRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgcHJlbWlzZU5vZGVzID0gcHJlbWlzZU5vZGVzUXVlcnkocnVsZU5vZGUpLFxuICAgICAgICAgIGNvbmNsdXNpb25Ob2RlID0gY29uY2x1c2lvbk5vZGVRdWVyeShydWxlTm9kZSksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxOb2Rlcy5tYXAoKGxhYmVsTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBMYWJlbC5mcm9tTGFiZWxOb2RlKGxhYmVsTm9kZSwgZmlsZUNvbnRleHQpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWw7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlTm9kZXMubWFwKChwcmVtaXNlTm9kZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZSA9IFByZW1pc2UuZnJvbVByZW1pc2VOb2RlKHByZW1pc2VOb2RlLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21Db25jbHVzaW9uTm9kZShjb25jbHVzaW9uTm9kZSwgZmlsZUNvbnRleHQpLFxuICAgICAgICAgIHByb29mID0gUHJvb2YuZnJvbVByb29mTm9kZShwcm9vZk5vZGUsIGZpbGVDb250ZXh0KSxcbiAgICAgICAgICBydWxlID0gbmV3IFJ1bGUoZmlsZUNvbnRleHQsIGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIHByb29mKTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxhYmVsc1N0cmluZ0Zyb21MYWJlbHMobGFiZWxzKSB7XG4gIGNvbnN0IGxhYmVsc1N0cmluZyA9IGxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGFiZWxTdHJpbmcgPSBsYWJlbC5nZXRTdHJpbmcoKTtcblxuICAgICAgICAgIHJldHVybiBsYWJlbFN0cmluZztcbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsc1N0cmluZztcbn0iXSwibmFtZXMiOlsiUnVsZSIsInJldmVyc2UiLCJhcnJheVV0aWxpdGllcyIsImNvcnJlbGF0ZSIsInByb29mTm9kZVF1ZXJ5Iiwibm9kZVF1ZXJ5IiwibGFiZWxOb2Rlc1F1ZXJ5Iiwibm9kZXNRdWVyeSIsInByZW1pc2VOb2Rlc1F1ZXJ5IiwiY29uY2x1c2lvbk5vZGVRdWVyeSIsImZpbGVDb250ZXh0IiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwicHJvb2YiLCJnZXRGaWxlQ29udGV4dCIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsImdldFByb29mIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwidW5pZnlTdGF0ZW1lbnQiLCJzdGF0ZW1lbnQiLCJsb2NhbENvbnRleHQiLCJzdGF0ZW1lbnRVbmlmaWVkIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzdWJzdGl0dXRpb25zIiwiU3Vic3RpdHV0aW9ucyIsImZyb21Ob3RoaW5nIiwicHJvb2ZTdGVwc1VuaWZpZWQiLCJ1bmlmeVByb29mU3RlcHMiLCJzdGF0ZW1lbnRVbmlmaWVkV2l0aENvbmNsdXNpb24iLCJzdWJzdGl0dXRpb25zUmVzb2x2ZWQiLCJyZXNvbHZlIiwicHJlbWlzZSIsInByb29mU3RlcCIsInByb29mU3RlcFVuaWZpZWQiLCJ1bmlmeVByb29mU3RlcCIsInZlcmlmeSIsInZlcmlmaWVkIiwibGFiZWxzU3RyaW5nIiwibGFiZWxzU3RyaW5nRnJvbUxhYmVscyIsInRyYWNlIiwibGFiZWxzVmVyaWZpZWRBdFRvcExldmVsIiwiZXZlcnkiLCJsYWJlbFZWZXJpZmllZEF0VG9wTGV2ZWwiLCJ2ZXJpZnlBdFRvcExldmVsIiwiTG9jYWxDb250ZXh0IiwiZnJvbUZpbGVDb250ZXh0IiwicHJlbWlzZXNWZXJpZmllZCIsInByZW1pc2VWZXJpZmllZCIsImNvbmNsdXNpb25WZXJpZmllZCIsInByb29mVmVyaWZpZWQiLCJydWxlIiwiYWRkUnVsZSIsImRlYnVnIiwidG9KU09OIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2VKU09OIiwiY29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT04iLCJMYWJlbCIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwiZnJvbVJ1bGVOb2RlIiwicnVsZU5vZGUiLCJwcm9vZk5vZGUiLCJsYWJlbE5vZGVzIiwicHJlbWlzZU5vZGVzIiwiY29uY2x1c2lvbk5vZGUiLCJsYWJlbE5vZGUiLCJmcm9tTGFiZWxOb2RlIiwicHJlbWlzZU5vZGUiLCJmcm9tUHJlbWlzZU5vZGUiLCJmcm9tQ29uY2x1c2lvbk5vZGUiLCJQcm9vZiIsImZyb21Qcm9vZk5vZGUiLCJsYWJlbFN0cmluZyIsImdldFN0cmlu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