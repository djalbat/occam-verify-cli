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
                var statementNatches = false;
                var proofSteps = localContext.getProofSteps(), substitutions = [], premisesMatch = matchPremises(this.premises, proofSteps, substitutions, this.fileContext, localContext);
                if (premisesMatch) {
                    var conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, this.fileContext, localContext);
                    statementNatches = conclusionMatches; ///
                }
                return statementNatches;
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode, localMetaContext) {
                var metastatementNatches = false;
                var metaproofSteps = localMetaContext.getMetaproofSteps(), substitutions = [], premisesMatch = metaMatchPremises(this.premises, metaproofSteps, substitutions, this.fileContext, localMetaContext);
                if (premisesMatch) {
                    var conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, this.fileContext, localMetaContext);
                    metastatementNatches = conclusionMatches; ///
                }
                return metastatementNatches;
            }
        },
        {
            key: "matchMetavariableNode",
            value: function matchMetavariableNode(metavariableNode) {
                var metavariableNodeMatches = this.labels.some(function(label) {
                    var labelMatchesMetavariableNode = label.matchMetavariableNode(metavariableNode);
                    if (labelMatchesMetavariableNode) {
                        return true;
                    }
                });
                return metavariableNodeMatches;
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
        var subproofNodeMatches = premise.matchSubproofNode(subproofNode, substitutions, fileContext, localContext);
        premiseMatches = subproofNodeMatches; ///
    }
    if (statementNode !== null) {
        var statementNodeMatches = premise.matchStatementNode(statementNode, substitutions, fileContext, localContext);
        premiseMatches = statementNodeMatches; ///
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
    var statementNodeMatches = conclusion.matchStatementNode(statementNode, substitutions, fileContext, localContext), conclusionMatches = statementNodeMatches; ///
    return conclusionMatches;
}
function metaMatchPremise(premise, metaproofStep, substitutions, fileContext, localMetaContext) {
    var premiseMatches = false;
    var ruleSubproofNode = metaproofStep.getRuleSubproofNode(), metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
    if (ruleSubproofNode !== null) {
        var ruleSubProofNodeMatches = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, localMetaContext);
        premiseMatches = ruleSubProofNodeMatches; ///
    }
    if (metaSubproofNode !== null) {
        var metaSubProofNodeMatches = premise.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext);
        premiseMatches = metaSubProofNodeMatches; ///
    }
    if (metastatementNode !== null) {
        var metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext);
        premiseMatches = metastatementNodeMatches; ///
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
    var metastatementNodeMatches = conclusion.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext), conclusionMatches = metastatementNodeMatches; ///
    return conclusionMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcmV2ZXJzZSwgY29ycmVsYXRlIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IHByb29mU3RlcHMgPSBsb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWF0Y2hQcmVtaXNlcyh0aGlzLnByZW1pc2VzLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgICBsZXQgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBmYWxzZTtcblxuICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbG9jYWxNZXRhQ29udGV4dC5nZXRNZXRhcHJvb2ZTdGVwcygpLFxuICAgICAgICAgIHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWV0YU1hdGNoUHJlbWlzZXModGhpcy5wcmVtaXNlcywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWV0YU1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgIC8vL1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHRoaXMucHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IHRoaXMuY29uY2x1c2lvbi50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICB9KTtcblxuICAgIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICAgIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0KGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgbGV0IHByZW1pc2VNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3Qgc3VicHJvb2ZOb2RlID0gcHJvb2ZTdGVwLmdldFN1YnByb29mTm9kZSgpLFxuICAgICAgICBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKTtcblxuICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxDb250ZXh0KTtcblxuICAgIHByZW1pc2VNYXRjaGVzID0gc3VicHJvb2ZOb2RlTWF0Y2hlczsgLy8vXG4gIH1cblxuICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZS5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCk7XG5cbiAgICBwcmVtaXNlTWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAgLy8vXG4gIH1cblxuICByZXR1cm4gcHJlbWlzZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZXMocHJlbWlzZXMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpIHtcbiAgcHJlbWlzZXMgPSByZXZlcnNlKHByZW1pc2VzKTsgLy8vXG5cbiAgcHJvb2ZTdGVwcyA9IHJldmVyc2UocHJvb2ZTdGVwcyk7IC8vL1xuXG4gIGNvbnN0IHByZW1pc2VzTWF0Y2ggPSBjb3JyZWxhdGUocHJlbWlzZXMsIHByb29mU3RlcHMsIChwcmVtaXNlLCBwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBwcmVtaXNlTWF0Y2hlcyA9IG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXAsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsQ29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGNvbmNsdXNpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbENvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2UocHJlbWlzZSwgbWV0YXByb29mU3RlcCwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpIHtcbiAgbGV0IHByZW1pc2VNYXRjaGVzID0gZmFsc2U7XG5cbiAgY29uc3QgcnVsZVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0UnVsZVN1YnByb29mTm9kZSgpLFxuICAgICAgICBtZXRhU3VicHJvb2ZOb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhU3VicHJvb2ZOb2RlKCksXG4gICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpXG5cbiAgaWYgKHJ1bGVTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBydWxlU3ViUHJvb2ZOb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hSdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIHByZW1pc2VNYXRjaGVzID0gcnVsZVN1YlByb29mTm9kZU1hdGNoZXM7IC8vL1xuICB9XG5cbiAgaWYgKG1ldGFTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICBjb25zdCBtZXRhU3ViUHJvb2ZOb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhU3VicHJvb2ZOb2RlKG1ldGFTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIHByZW1pc2VNYXRjaGVzID0gbWV0YVN1YlByb29mTm9kZU1hdGNoZXM7IC8vL1xuICB9XG5cbiAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZS5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBwcmVtaXNlTWF0Y2hlcyA9IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlczsgIC8vL1xuICB9XG5cbiAgcmV0dXJuIHByZW1pc2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlcyhwcmVtaXNlcywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIHByZW1pc2VzID0gcmV2ZXJzZShwcmVtaXNlcyk7IC8vL1xuXG4gIG1ldGFwcm9vZlN0ZXBzID0gcmV2ZXJzZShtZXRhcHJvb2ZTdGVwcyk7IC8vL1xuXG4gIGNvbnN0IHByZW1pc2VzTWF0Y2ggPSBjb3JyZWxhdGUocHJlbWlzZXMsIG1ldGFwcm9vZlN0ZXBzLCAocHJlbWlzZSwgbWV0YXByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhcHJvb2ZTdGVwLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGNvbmNsdXNpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJmaWxlQ29udGV4dCIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsImdldEZpbGVDb250ZXh0IiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50TmF0Y2hlcyIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic3Vic3RpdHV0aW9ucyIsInByZW1pc2VzTWF0Y2giLCJtYXRjaFByZW1pc2VzIiwiY29uY2x1c2lvbk1hdGNoZXMiLCJtYXRjaENvbmNsdXNpb24iLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsImxvY2FsTWV0YUNvbnRleHQiLCJtZXRhc3RhdGVtZW50TmF0Y2hlcyIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJtZXRhTWF0Y2hQcmVtaXNlcyIsIm1ldGFNYXRjaENvbmNsdXNpb24iLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2UiLCJwcmVtaXNlSlNPTiIsImNvbmNsdXNpb25KU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJydWxlIiwiTGFiZWwiLCJQcmVtaXNlIiwiQ29uY2x1c2lvbiIsImZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dCIsIm1hdGNoUHJlbWlzZSIsInByb29mU3RlcCIsInByZW1pc2VNYXRjaGVzIiwic3VicHJvb2ZOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN1YnByb29mTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnByb29mTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwicmV2ZXJzZSIsImNvcnJlbGF0ZSIsIm1ldGFNYXRjaFByZW1pc2UiLCJtZXRhcHJvb2ZTdGVwIiwicnVsZVN1YnByb29mTm9kZSIsImdldFJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwicnVsZVN1YlByb29mTm9kZU1hdGNoZXMiLCJtYXRjaFJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhU3ViUHJvb2ZOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBUXFCQTs7OzREQU5IOzhEQUNFO2lFQUNHO3FCQUVZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXBCLElBQUEsQUFBTUEscUJBQUQsQUFBTDthQUFNQSxLQUNQQyxNQUFNLEVBQUVDLFFBQVEsRUFBRUMsVUFBVSxFQUFFQyxXQUFXO2dDQURsQ0o7UUFFakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBO1FBQ2QsSUFBSSxDQUFDQyxRQUFRLEdBQUdBO1FBQ2hCLElBQUksQ0FBQ0MsVUFBVSxHQUFHQTtRQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0E7O2tCQUxGSjs7WUFRbkJLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osTUFBTTtZQUNwQjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osUUFBUTtZQUN0Qjs7O1lBRUFLLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxPQUFPLElBQUksQ0FBQ0osVUFBVTtZQUN4Qjs7O1lBRUFL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