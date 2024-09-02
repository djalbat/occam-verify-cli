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
            value: function matchMetastatement(metastatementNode, localContext) {
                var matchesMetastatement = false;
                var metaproofSteps = localContext.getMetaproofSteps(), substitutions = [], premisesMatch = metaMatchPremises(this.premises, metaproofSteps, substitutions, this.fileContext, localContext);
                if (premisesMatch) {
                    var conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, this.fileContext, localContext);
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
function metaMatchPremise(premise, metaproofStep, substitutions, fileContext, localContext) {
    var premiseMatches = false;
    var ruleSubproofNode = metaproofStep.getRuleSubproofNode(), metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
    if (ruleSubproofNode !== null) {
        var premiseMatchesRuleSubproofNode = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, localContext);
        premiseMatches = premiseMatchesRuleSubproofNode; ///
    }
    if (metaSubproofNode !== null) {
        var premiseMatchesMetaSubproofNode = premise.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localContext);
        premiseMatches = premiseMatchesMetaSubproofNode; ///
    }
    if (metastatementNode !== null) {
        var premiseMatchesMetastatementNode = premise.matchMetastatementNode(metastatementNode, substitutions, fileContext, localContext);
        premiseMatches = premiseMatchesMetastatementNode; ///
    }
    return premiseMatches;
}
function metaMatchPremises(premises, metaproofSteps, substitutions, fileContext, localContext) {
    premises = (0, _array.reverse)(premises); ///
    metaproofSteps = (0, _array.reverse)(metaproofSteps); ///
    var premisesMatch = (0, _array.correlate)(premises, metaproofSteps, function(premise, metaproofStep) {
        var premiseMatches = metaMatchPremise(premise, metaproofStep, substitutions, fileContext, localContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function metaMatchConclusion(conclusion, metastatementNode, substitutions, fileContext, localContext) {
    var conclusionMatchesMetastatementNode = conclusion.matchMetastatementNode(metastatementNode, substitutions, fileContext, localContext), conclusionMatches = conclusionMatchesMetastatementNode; ///
    return conclusionMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcmV2ZXJzZSwgY29ycmVsYXRlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IG1hdGNoZXNTdGF0ZW1lbnQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWF0Y2hQcmVtaXNlcyh0aGlzLnByZW1pc2VzLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgbWF0Y2hlc1N0YXRlbWVudCA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNTdGF0ZW1lbnQ7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGxvY2FsQ29udGV4dCkge1xuICAgIGxldCBtYXRjaGVzTWV0YXN0YXRlbWVudCA9IGZhbHNlO1xuXG4gICAgY29uc3QgbWV0YXByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0TWV0YXByb29mU3RlcHMoKSxcbiAgICAgICAgICBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgcHJlbWlzZXNNYXRjaCA9IG1ldGFNYXRjaFByZW1pc2VzKHRoaXMucHJlbWlzZXMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWV0YU1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgICBtYXRjaGVzTWV0YXN0YXRlbWVudCA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIG1hdGNoZXNNZXRhc3RhdGVtZW50O1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTWV0YXZhcmlhYmxlTm9kZTtcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gdGhpcy5wcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gdGhpcy5jb25jbHVzaW9uLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gICAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIHByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBsZXQgcHJlbWlzZU1hdGNoZXMgPSBmYWxzZTtcblxuICBjb25zdCBzdWJwcm9vZk5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3VicHJvb2ZOb2RlKCksXG4gICAgICAgIHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpO1xuXG4gIGlmIChzdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmVtaXNlTWF0Y2hlc1N1YnByb29mTm9kZSA9IHByZW1pc2UubWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHByZW1pc2VNYXRjaGVzID0gcHJlbWlzZU1hdGNoZXNTdWJwcm9vZk5vZGU7IC8vL1xuICB9XG5cbiAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBwcmVtaXNlTWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBwcmVtaXNlLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHByZW1pc2VNYXRjaGVzID0gcHJlbWlzZU1hdGNoZXNTdGF0ZW1lbnROb2RlOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZXMocHJlbWlzZXMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgcHJlbWlzZXMgPSByZXZlcnNlKHByZW1pc2VzKTsgLy8vXG5cbiAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gIGNvbnN0IHByZW1pc2VzTWF0Y2ggPSBjb3JyZWxhdGUocHJlbWlzZXMsIHByb29mU3RlcHMsIChwcmVtaXNlLCBwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBwcmVtaXNlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCBjb25jbHVzaW9uTWF0Y2hlc1N0YXRlbWVudE5vZGUgPSBjb25jbHVzaW9uLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlc1N0YXRlbWVudE5vZGU7IC8vL1xuXG4gIHJldHVybiBjb25jbHVzaW9uTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIGxldCBwcmVtaXNlTWF0Y2hlcyA9IGZhbHNlO1xuXG4gIGNvbnN0IHJ1bGVTdWJwcm9vZk5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldFJ1bGVTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgbWV0YVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YVN1YnByb29mTm9kZSgpLFxuICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YXN0YXRlbWVudE5vZGUoKVxuXG4gIGlmIChydWxlU3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXNSdWxlU3VicHJvb2ZOb2RlID0gcHJlbWlzZS5tYXRjaFJ1bGVTdWJwcm9vZk5vZGUocnVsZVN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBwcmVtaXNlTWF0Y2hlcyA9IHByZW1pc2VNYXRjaGVzUnVsZVN1YnByb29mTm9kZTsgLy8vXG4gIH1cblxuICBpZiAobWV0YVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzTWV0YVN1YnByb29mTm9kZSA9IHByZW1pc2UubWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgcHJlbWlzZU1hdGNoZXMgPSBwcmVtaXNlTWF0Y2hlc01ldGFTdWJwcm9vZk5vZGU7IC8vL1xuICB9XG5cbiAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSA9IHByZW1pc2UubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBwcmVtaXNlTWF0Y2hlcyA9IHByZW1pc2VNYXRjaGVzTWV0YXN0YXRlbWVudE5vZGU7ICAvLy9cbiAgfVxuXG4gIHJldHVybiBwcmVtaXNlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZXMocHJlbWlzZXMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSB7XG4gIHByZW1pc2VzID0gcmV2ZXJzZShwcmVtaXNlcyk7IC8vL1xuXG4gIG1ldGFwcm9vZlN0ZXBzID0gcmV2ZXJzZShtZXRhcHJvb2ZTdGVwcyk7IC8vL1xuXG4gIGNvbnN0IHByZW1pc2VzTWF0Y2ggPSBjb3JyZWxhdGUocHJlbWlzZXMsIG1ldGFwcm9vZlN0ZXBzLCAocHJlbWlzZSwgbWV0YXByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoQ29uY2x1c2lvbihjb25jbHVzaW9uLCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCBjb25jbHVzaW9uTWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlID0gY29uY2x1c2lvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiUnVsZSIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImZpbGVDb250ZXh0IiwiZ2V0TGFiZWxzIiwiZ2V0UHJlbWlzZXMiLCJnZXRDb25jbHVzaW9uIiwiZ2V0RmlsZUNvbnRleHQiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJsb2NhbENvbnRleHQiLCJtYXRjaGVzU3RhdGVtZW50IiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzdWJzdGl0dXRpb25zIiwicHJlbWlzZXNNYXRjaCIsIm1hdGNoUHJlbWlzZXMiLCJjb25jbHVzaW9uTWF0Y2hlcyIsIm1hdGNoQ29uY2x1c2lvbiIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWF0Y2hlc01ldGFzdGF0ZW1lbnQiLCJtZXRhcHJvb2ZTdGVwcyIsImdldE1ldGFwcm9vZlN0ZXBzIiwibWV0YU1hdGNoUHJlbWlzZXMiLCJtZXRhTWF0Y2hDb25jbHVzaW9uIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwicnVsZSIsIkxhYmVsIiwiUHJlbWlzZSIsIkNvbmNsdXNpb24iLCJmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQiLCJtYXRjaFByZW1pc2UiLCJwcm9vZlN0ZXAiLCJwcmVtaXNlTWF0Y2hlcyIsInN1YnByb29mTm9kZSIsImdldFN1YnByb29mTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJwcmVtaXNlTWF0Y2hlc1N1YnByb29mTm9kZSIsIm1hdGNoU3VicHJvb2ZOb2RlIiwicHJlbWlzZU1hdGNoZXNTdGF0ZW1lbnROb2RlIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwicmV2ZXJzZSIsImNvcnJlbGF0ZSIsImNvbmNsdXNpb25NYXRjaGVzU3RhdGVtZW50Tm9kZSIsIm1ldGFNYXRjaFByZW1pc2UiLCJtZXRhcHJvb2ZTdGVwIiwicnVsZVN1YnByb29mTm9kZSIsImdldFJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1hdGNoZXNSdWxlU3VicHJvb2ZOb2RlIiwibWF0Y2hSdWxlU3VicHJvb2ZOb2RlIiwicHJlbWlzZU1hdGNoZXNNZXRhU3VicHJvb2ZOb2RlIiwibWF0Y2hNZXRhU3VicHJvb2ZOb2RlIiwicHJlbWlzZU1hdGNoZXNNZXRhc3RhdGVtZW50Tm9kZSIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiLCJjb25jbHVzaW9uTWF0Y2hlc01ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVFxQkE7Ozs0REFOSDs4REFDRTtpRUFDRztxQkFFWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwQixJQUFBLEFBQU1BLHFCQUFELEFBQUw7YUFBTUEsS0FDUEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEbENKO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFMRko7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJ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