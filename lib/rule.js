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
var _array = require("./utilities/array");
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
var Rule = /*#__PURE__*/ function() {
    function Rule(labels, premises, conclusion, fileContext) {
        _class_call_check(this, Rule);
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
        this.fileContext = fileContext;
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
            key: "getFileContext",
            value: function getFileContext() {
                return this.fileContext;
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode, localContext) {
                var matchesStatement = false;
                var proofSteps = localContext.getProofSteps(), substitutions = [], premisesMatch = matchPremises(this.premises, proofSteps, substitutions, this.fileContext, localContext);
                if (premisesMatch) {
                    var conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, this.fileContext, localContext);
                    matchesStatement = conclusionMatches; ///
                }
                return matchesStatement;
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode, localMetaContext) {
                var matchesMetastatement = false;
                var metaproofSteps = localMetaContext.getMetaproofSteps(), substitutions = [], premisesMatch = metaMatchPremises(this.premises, metaproofSteps, substitutions, this.fileContext, localMetaContext);
                if (premisesMatch) {
                    var conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, this.fileContext, localMetaContext);
                    matchesMetastatement = conclusionMatches; ///
                }
                return matchesMetastatement;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var matchesMetavariableNode = this.labels.some(function(label) {
                    var labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);
                    if (labelMatchesMetavariableNode) {
                        return true;
                    }
                });
                return matchesMetavariableNode;
            }
        },
        {
            key: "toJSON",
            value: function toJSON(tokens) {
                var labelsJSON = this.labels.map(function(label) {
                    var labelJSON = label.toJSON(tokens);
                    return labelJSON;
                }), premisesJSON = this.premises.map(function(premise) {
                    var premiseJSON = premise.toJSON(tokens);
                    return premiseJSON;
                }), conclusionJSON = this.conclusion.toJSON(tokens), labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
                    labels: labels,
                    premises: premises,
                    conclusion: conclusion
                };
                return json;
            }
        }
    ], [
        {
            key: "fromJSONAndFileContext",
            value: function fromJSONAndFileContext(json, fileContext) {
                var rule;
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSONAndFileContext(_$json, fileContext);
                    return label;
                });
                var premises = json.premises;
                var premisesJSON = premises; ///
                premises = premisesJSON.map(function(premiseJSON) {
                    var _$json = premiseJSON, premise = _premise.default.fromJSONAndFileContext(_$json, fileContext);
                    return premise;
                });
                var conclusion = json.conclusion;
                var conclusionJSON = conclusion; ///
                json = conclusionJSON; ///
                conclusion = _conclusion.default.fromJSONAndFileContext(json, fileContext);
                rule = new Rule(labels, premises, conclusion, fileContext);
                return rule;
            }
        },
        {
            key: "fromLabelsPremisesConclusionAndFileContext",
            value: function fromLabelsPremisesConclusionAndFileContext(labels, premises, conclusion, fileContext) {
                var rule = new Rule(labels, premises, conclusion, fileContext);
                return rule;
            }
        }
    ]);
    return Rule;
}();
function matchPremise(premise, proofStep, substitutions, fileContext, localContext) {
    var premiseMatches = false;
    var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
    if (subproofNode !== null) {
        var premiseMatchesSubproofNode = premise.matchSubproofNode(subproofNode, substitutions, fileContext, localContext);
        premiseMatches = premiseMatchesSubproofNode; ///
    }
    if (statementNode !== null) {
        var premiseMatchesStatementNode = premise.matchStatementNode(statementNode, substitutions, fileContext, localContext);
        premiseMatches = premiseMatchesStatementNode; ///
    }
    return premiseMatches;
}
function matchPremises(premises, proofSteps, substitutions, fileContext, localContext) {
    premises = (0, _array.reverse)(premises); ///
    proofSteps = (0, _array.reverse)(proofSteps); ///
    var premisesMatch = (0, _array.correlate)(premises, proofSteps, function(premise, proofStep) {
        var premiseMatches = matchPremise(premise, proofStep, substitutions, fileContext, localContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function matchConclusion(conclusion, statementNode, substitutions, fileContext, localContext) {
    var conclusionMatchesStatementNode = conclusion.matchStatementNode(statementNode, substitutions, fileContext, localContext), conclusionMatches = conclusionMatchesStatementNode; ///
    return conclusionMatches;
}
function metaMatchPremise(premise, metaproofStep, substitutions, fileContext, localMetaContext) {
    var premiseMatches = false;
    var ruleSubproofNode = metaproofStep.getRuleSubproofNode(), metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
    if (ruleSubproofNode !== null) {
        var premiseMatchesRuleSubproofNode = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, localMetaContext);
        premiseMatches = premiseMatchesRuleSubproofNode; ///
    }
    if (metaSubproofNode !== null) {
        var premiseMatchesMetaSubproofNode = premise.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext);
        premiseMatches = premiseMatchesMetaSubproofNode; ///
    }
    if (metastatementNode !== null) {
        var premiseMatchesMetastatementNode = premise.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext);
        premiseMatches = premiseMatchesMetastatementNode; ///
    }
    return premiseMatches;
}
function metaMatchPremises(premises, metaproofSteps, substitutions, fileContext, localMetaContext) {
    premises = (0, _array.reverse)(premises); ///
    metaproofSteps = (0, _array.reverse)(metaproofSteps); ///
    var premisesMatch = (0, _array.correlate)(premises, metaproofSteps, function(premise, metaproofStep) {
        var premiseMatches = metaMatchPremise(premise, metaproofStep, substitutions, fileContext, localMetaContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function metaMatchConclusion(conclusion, metastatementNode, substitutions, fileContext, localMetaContext) {
    var conclusionMatchesMetastatementNode = conclusion.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext), conclusionMatches = conclusionMatchesMetastatementNode; ///
    return conclusionMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcmV2ZXJzZSwgY29ycmVsYXRlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG1hdGNoZXNTdGF0ZW1lbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWF0Y2hQcmVtaXNlcyh0aGlzLnByZW1pc2VzLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgbWF0Y2hlc1N0YXRlbWVudCA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNTdGF0ZW1lbnQ7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbG9jYWxNZXRhQ29udGV4dC5nZXRNZXRhcHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWV0YU1hdGNoUHJlbWlzZXModGhpcy5wcmVtaXNlcywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWV0YU1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgbWF0Y2hlc01ldGFzdGF0ZW1lbnQgPSBjb25jbHVzaW9uTWF0Y2hlczsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXN0YXRlbWVudDtcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc01ldGF2YXJpYWJsZU5vZGU7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHRoaXMucHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IHRoaXMuY29uY2x1c2lvbi50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICB9KTtcblxuICAgIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICAgIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0KGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHByZW1pc2VNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgc3VicHJvb2ZOb2RlID0gcHJvb2ZTdGVwLmdldFN1YnByb29mTm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXNTdWJwcm9vZk5vZGUgPSBwcmVtaXNlLm1hdGNoU3VicHJvb2ZOb2RlKHN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBwcmVtaXNlTWF0Y2hlcyA9IHByZW1pc2VNYXRjaGVzU3VicHJvb2ZOb2RlOyAvLy9cbiAgfVxuXG4gIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXNTdGF0ZW1lbnROb2RlID0gcHJlbWlzZS5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBwcmVtaXNlTWF0Y2hlcyA9IHByZW1pc2VNYXRjaGVzU3RhdGVtZW50Tm9kZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2VzKHByZW1pc2VzLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIHByZW1pc2VzID0gcmV2ZXJzZShwcmVtaXNlcyk7IC8vL1xuXG4gIHByb29mU3RlcHMgPSByZXZlcnNlKHByb29mU3RlcHMpOyAvLy9cblxuICBjb25zdCBwcmVtaXNlc01hdGNoID0gY29ycmVsYXRlKHByZW1pc2VzLCBwcm9vZlN0ZXBzLCAocHJlbWlzZSwgcHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSBtYXRjaFByZW1pc2UocHJlbWlzZSwgcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgY29uc3QgY29uY2x1c2lvbk1hdGNoZXNTdGF0ZW1lbnROb2RlID0gY29uY2x1c2lvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gY29uY2x1c2lvbk1hdGNoZXNTdGF0ZW1lbnROb2RlOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2UocHJlbWlzZSwgbWV0YXByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IHByZW1pc2VNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0UnVsZVN1YnByb29mTm9kZSgpLFxuICAgICAgICBtZXRhU3VicHJvb2ZOb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhU3VicHJvb2ZOb2RlKCksXG4gICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpXG5cbiAgaWYgKHJ1bGVTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmVtaXNlTWF0Y2hlc1J1bGVTdWJwcm9vZk5vZGUgPSBwcmVtaXNlLm1hdGNoUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBwcmVtaXNlTWF0Y2hlcyA9IHByZW1pc2VNYXRjaGVzUnVsZVN1YnByb29mTm9kZTsgLy8vXG4gIH1cblxuICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzTWV0YVN1YnByb29mTm9kZSA9IHByZW1pc2UubWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIHByZW1pc2VNYXRjaGVzID0gcHJlbWlzZU1hdGNoZXNNZXRhU3VicHJvb2ZOb2RlOyAvLy9cbiAgfVxuXG4gIGlmIChtZXRhc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBwcmVtaXNlLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIHByZW1pc2VNYXRjaGVzID0gcHJlbWlzZU1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZTsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlcyhwcmVtaXNlcywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIHByZW1pc2VzID0gcmV2ZXJzZShwcmVtaXNlcyk7IC8vL1xuXG4gIG1ldGFwcm9vZlN0ZXBzID0gcmV2ZXJzZShtZXRhcHJvb2ZTdGVwcyk7IC8vL1xuXG4gIGNvbnN0IHByZW1pc2VzTWF0Y2ggPSBjb3JyZWxhdGUocHJlbWlzZXMsIG1ldGFwcm9vZlN0ZXBzLCAocHJlbWlzZSwgbWV0YXByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiUnVsZSIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImZpbGVDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwiZ2V0RmlsZUNvbnRleHQiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJtYXRjaGVzU3RhdGVtZW50IiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzdWJzdGl0dXRpb25zIiwicHJlbWlzZXNNYXRjaCIsIm1hdGNoUHJlbWlzZXMiLCJjb25jbHVzaW9uTWF0Y2hlcyIsIm1hdGNoQ29uY2x1c2lvbiIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibG9jYWxNZXRhQ29udGV4dCIsIm1hdGNoZXNNZXRhc3RhdGVtZW50IiwibWV0YXByb29mU3RlcHMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsIm1ldGFNYXRjaFByZW1pc2VzIiwibWV0YU1hdGNoQ29uY2x1c2lvbiIsIm1hdGNoTWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGUiLCJtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInNvbWUiLCJsYWJlbCIsImxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUiLCJ0b0pTT04iLCJ0b2tlbnMiLCJsYWJlbHNKU09OIiwibWFwIiwibGFiZWxKU09OIiwicHJlbWlzZXNKU09OIiwicHJlbWlzZSIsInByZW1pc2VKU09OIiwiY29uY2x1c2lvbkpTT04iLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsInJ1bGUiLCJMYWJlbCIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwiZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0IiwibWF0Y2hQcmVtaXNlIiwicHJvb2ZTdGVwIiwicHJlbWlzZU1hdGNoZXMiLCJzdWJwcm9vZk5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1hdGNoZXNTdWJwcm9vZk5vZGUiLCJtYXRjaFN1YnByb29mTm9kZSIsInByZW1pc2VNYXRjaGVzU3RhdGVtZW50Tm9kZSIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInJldmVyc2UiLCJjb3JyZWxhdGUiLCJjb25jbHVzaW9uTWF0Y2hlc1N0YXRlbWVudE5vZGUiLCJtZXRhTWF0Y2hQcmVtaXNlIiwibWV0YXByb29mU3RlcCIsInJ1bGVTdWJwcm9vZk5vZGUiLCJnZXRSdWxlU3VicHJvb2ZOb2RlIiwibWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsInByZW1pc2VNYXRjaGVzUnVsZVN1YnByb29mTm9kZSIsIm1hdGNoUnVsZVN1YnByb29mTm9kZSIsInByZW1pc2VNYXRjaGVzTWV0YVN1YnByb29mTm9kZSIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsInByZW1pc2VNYXRjaGVzTWV0YXN0YXRlbWVudE5vZGUiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIiwiY29uY2x1c2lvbk1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFRcUJBOzs7NERBTkg7OERBQ0U7aUVBQ0c7cUJBRVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFcEIsSUFBQSxBQUFNQSxxQkFBRCxBQUFMO2FBQU1BLEtBQ1BDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRGxDSjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7UUFDZCxJQUFJLENBQUNDLFFBQVEsR0FBR0E7UUFDaEIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElB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