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
            value: function matchStatement(statementNode, statementLocalContext) {
                var _this = this;
                var statementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var substitutions = [], conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, this.fileContext, statementLocalContext);
                    statementNatches = conclusionMatches; ///
                } else {
                    var proofSteps = statementLocalContext.getProofSteps();
                    statementNatches = (0, _array.someSubArray)(proofSteps, premisesLength, function(proofSteps) {
                        var premisesMatchConclusion = false;
                        var substitutions = [], premisesMatch = matchPremises(_this.premises, proofSteps, substitutions, _this.fileContext, statementLocalContext);
                        if (premisesMatch) {
                            var conclusionMatches = matchConclusion(_this.conclusion, statementNode, substitutions, _this.fileContext, statementLocalContext);
                            premisesMatchConclusion = conclusionMatches; ///
                        }
                        if (premisesMatchConclusion) {
                            return true;
                        }
                    });
                }
                return statementNatches;
            }
        },
        {
            key: "matchMetastatement",
            value: function matchMetastatement(metastatementNode, metastatementLocalMetaContext) {
                var _this = this;
                var metastatementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var substitutions = [], conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, this.fileContext, metastatementLocalMetaContext);
                    metastatementNatches = conclusionMatches; ///
                } else {
                    var metaproofSteps = metastatementLocalMetaContext.getMetaproofSteps();
                    metastatementNatches = (0, _array.someSubArray)(metaproofSteps, premisesLength, function(metaproofSteps) {
                        var premisesMatchConclusion = false;
                        var substitutions = [], premisesMatch = metaMatchPremises(_this.premises, metaproofSteps, substitutions, _this.fileContext, metastatementLocalMetaContext);
                        if (premisesMatch) {
                            var conclusionMatches = metaMatchConclusion(_this.conclusion, metastatementNode, substitutions, _this.fileContext, metastatementLocalMetaContext);
                            premisesMatchConclusion = conclusionMatches; ///
                        }
                        if (premisesMatchConclusion) {
                            return true;
                        }
                    });
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
function matchPremise(premise, proofSteps, substitutions, fileContext, statementLocalContext) {
    var proofStep = (0, _array.prune)(proofSteps, function(proofStep) {
        var statementNode = proofStep.getStatementNode();
        if (statementNode !== null) {
            var statementNodeMatches = premise.matchStatementNode(statementNode, substitutions, fileContext, statementLocalContext);
            if (!statementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = proofStep !== null;
    return premiseMatches;
}
function matchPremises(premise, proofSteps, substitutions, fileContext, statementLocalContext) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = matchPremise(premise, proofSteps, substitutions, fileContext, statementLocalContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function matchConclusion(conclusion, statementNode, substitutions, fileContext, statementLocalContext) {
    var statementNodeMatches = conclusion.matchStatementNode(statementNode, substitutions, fileContext, statementLocalContext), conclusionMatches = statementNodeMatches; ///
    return conclusionMatches;
}
function metaMatchPremise(premise, metaproofSteps, substitutions, fileContext, metastatementLocalMetaContext) {
    var metaproofStep = (0, _array.prune)(metaproofSteps, function(metaproofStep) {
        var ruleSubproofNode = metaproofStep.getRuleSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
        if (ruleSubproofNode !== null) {
            var ruleSubProofNodeMatches = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, metastatementLocalMetaContext);
            if (!ruleSubProofNodeMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementLocalMetaContext);
            if (!metastatementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = metaproofStep !== null;
    return premiseMatches;
}
function metaMatchPremises(premise, metaproofSteps, substitutions, fileContext, metastatementLocalMetaContext) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = metaMatchPremise(premise, metaproofSteps, substitutions, fileContext, metastatementLocalMetaContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function metaMatchConclusion(conclusion, metastatementNode, substitutions, fileContext, metastatementLocalMetaContext) {
    var metastatementNodeMatches = conclusion.matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementLocalMetaContext), conclusionMatches = metastatementNodeMatches; ///
    return conclusionMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgcHJlbWlzZXNMZW5ndGggPSB0aGlzLnByZW1pc2VzLmxlbmd0aDtcblxuICAgIGlmIChwcmVtaXNlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBtYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gY29uY2x1c2lvbk1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzID0gc3RhdGVtZW50TG9jYWxDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShwcm9vZlN0ZXBzLCBwcmVtaXNlc0xlbmd0aCwgKHByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWF0Y2hQcmVtaXNlcyh0aGlzLnByZW1pc2VzLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcmVtaXNlc01hdGNoKSB7XG4gICAgICAgICAgY29uc3QgY29uY2x1c2lvbk1hdGNoZXMgPSBtYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICAgICAgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBjb25jbHVzaW9uTWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHByZW1pc2VzTGVuZ3RoID0gdGhpcy5wcmVtaXNlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlbWlzZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbWV0YU1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gY29uY2x1c2lvbk1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0LmdldE1ldGFwcm9vZlN0ZXBzKCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gc29tZVN1YkFycmF5KG1ldGFwcm9vZlN0ZXBzLCBwcmVtaXNlc0xlbmd0aCwgKG1ldGFwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGxldCBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgcHJlbWlzZXNNYXRjaCA9IG1ldGFNYXRjaFByZW1pc2VzKHRoaXMucHJlbWlzZXMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjb25jbHVzaW9uTWF0Y2hlcyA9IG1ldGFNYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICAgICAgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBjb25jbHVzaW9uTWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKSB7XG4gICAgY29uc3QgbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSA9IGxhYmVsLm1hdGNoTWV0YXZhcmlhYmxlTm9kZShtZXRhdmFyaWFibGVOb2RlKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc01ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWV0YXZhcmlhYmxlTm9kZU1hdGNoZXM7XG4gIH1cblxuICB0b0pTT04odG9rZW5zKSB7XG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IHRoaXMubGFiZWxzLm1hcCgobGFiZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsSlNPTiA9IGxhYmVsLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gbGFiZWxKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIHByZW1pc2VzSlNPTiA9IHRoaXMucHJlbWlzZXMubWFwKChwcmVtaXNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcmVtaXNlSlNPTiA9IHByZW1pc2UudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVtaXNlSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjb25jbHVzaW9uSlNPTiA9IHRoaXMuY29uY2x1c2lvbi50b0pTT04odG9rZW5zKSxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAgbGFiZWxzLFxuICAgICAgICAgICAgcHJlbWlzZXMsXG4gICAgICAgICAgICBjb25jbHVzaW9uXG4gICAgICAgICAgfTtcblxuICAgIHJldHVybiBqc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBsZXQgcnVsZTtcblxuICAgIGxldCB7IGxhYmVscyB9ID0ganNvbjtcblxuICAgIGNvbnN0IGxhYmVsc0pTT04gPSBsYWJlbHM7ICAvLy9cblxuICAgIGxhYmVscyA9IGxhYmVsc0pTT04ubWFwKChsYWJlbEpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBsYWJlbEpTT04sIC8vL1xuICAgICAgICAgICAgbGFiZWwgPSBMYWJlbC5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIGxhYmVsO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgcHJlbWlzZXMgfSA9IGpzb247XG5cbiAgICBjb25zdCBwcmVtaXNlc0pTT04gPSBwcmVtaXNlczsgIC8vL1xuXG4gICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04ubWFwKChwcmVtaXNlSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IHByZW1pc2VKU09OLCAvLy9cbiAgICAgICAgICAgIHByZW1pc2UgPSBQcmVtaXNlLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gcHJlbWlzZTtcbiAgICB9KTtcblxuICAgIGxldCB7IGNvbmNsdXNpb24gfSA9IGpzb247XG5cbiAgICBjb25zdCBjb25jbHVzaW9uSlNPTiA9IGNvbmNsdXNpb247ICAvLy9cblxuICAgIGpzb24gPSBjb25jbHVzaW9uSlNPTjsgIC8vL1xuXG4gICAgY29uY2x1c2lvbiA9IENvbmNsdXNpb24uZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0KGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZShwcmVtaXNlLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IHByb29mU3RlcCA9IHBydW5lKHByb29mU3RlcHMsIChwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKVxuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZS5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgIGlmICghc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSAocHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gcHJlbWlzZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZXMocHJlbWlzZSwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlc01hdGNoID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGNvbmNsdXNpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2UocHJlbWlzZSwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCkge1xuICBjb25zdCBtZXRhcHJvb2ZTdGVwID0gcHJ1bmUobWV0YXByb29mU3RlcHMsIChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3QgcnVsZVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0UnVsZVN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpXG5cbiAgICBpZiAocnVsZVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN1YlByb29mTm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJ1bGVTdWJQcm9vZk5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIGlmICghbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gKG1ldGFwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBwcmVtaXNlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZXMocHJlbWlzZSwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlc01hdGNoID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoQ29uY2x1c2lvbihjb25jbHVzaW9uLCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGNvbmNsdXNpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25jbHVzaW9uTWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldENvbmNsdXNpb24iLCJnZXRGaWxlQ29udGV4dCIsIm1hdGNoU3RhdGVtZW50Iiwic3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudExvY2FsQ29udGV4dCIsInN0YXRlbWVudE5hdGNoZXMiLCJwcmVtaXNlc0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbnMiLCJjb25jbHVzaW9uTWF0Y2hlcyIsIm1hdGNoQ29uY2x1c2lvbiIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZVN1YkFycmF5IiwicHJlbWlzZXNNYXRjaENvbmNsdXNpb24iLCJwcmVtaXNlc01hdGNoIiwibWF0Y2hQcmVtaXNlcyIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQiLCJtZXRhc3RhdGVtZW50TmF0Y2hlcyIsIm1ldGFNYXRjaENvbmNsdXNpb24iLCJtZXRhcHJvb2ZTdGVwcyIsImdldE1ldGFwcm9vZlN0ZXBzIiwibWV0YU1hdGNoUHJlbWlzZXMiLCJtYXRjaE1ldGF2YXJpYWJsZU5vZGUiLCJtZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZU1hdGNoZXMiLCJzb21lIiwibGFiZWwiLCJsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2UiLCJwcmVtaXNlSlNPTiIsImNvbmNsdXNpb25KU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJydWxlIiwiTGFiZWwiLCJQcmVtaXNlIiwiQ29uY2x1c2lvbiIsImZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dCIsIm1hdGNoUHJlbWlzZSIsInByb29mU3RlcCIsInBydW5lIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1hdGNoZXMiLCJldmVyeSIsIm1ldGFNYXRjaFByZW1pc2UiLCJtZXRhcHJvb2ZTdGVwIiwicnVsZVN1YnByb29mTm9kZSIsImdldFJ1bGVTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsInJ1bGVTdWJQcm9vZk5vZGVNYXRjaGVzIiwibWF0Y2hSdWxlU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NERBUEg7OERBQ0U7aUVBQ0c7cUJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUCxJQUFBLEFBQU1BLHFCQUFELEFBQUw7YUFBTUEsS0FDUEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEbENKO1FBRWpCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQTtRQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHQTtRQUNoQixJQUFJLENBQUNDLFVBQVUsR0FBR0E7UUFDbEIsSUFBSSxDQUFDQyxXQUFXLEdBQUdBOztrQkFMRko7O1lBUW5CSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLE1BQU07WUFDcEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFFBQVE7WUFDdEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJQUFJLENBQUNKLFVBQVU7WUFDeEI7OztZQUVBSyxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsT0FBTyxJ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