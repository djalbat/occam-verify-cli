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
            key: "matchLabelName",
            value: function matchLabelName(labelName) {
                var labelNameMatches = this.labels.some(function(label) {
                    var name = labelName, labelMatchesName = label.matchName(name);
                    if (labelMatchesName) {
                        return true;
                    }
                });
                return labelNameMatches;
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
        var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
        if (subproofNode !== null) {
            var subProofNodeMatches = premise.matchSubproofNode(subproofNode, substitutions, fileContext, statementLocalContext);
            if (!subProofNodeMatches) {
                return true;
            }
        }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IHNvbWVTdWJBcnJheSB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlIHtcbiAgY29uc3RydWN0b3IobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgICB0aGlzLmZpbGVDb250ZXh0ID0gZmlsZUNvbnRleHQ7XG4gIH1cblxuICBnZXRMYWJlbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubGFiZWxzO1xuICB9XG5cbiAgZ2V0UHJlbWlzZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJlbWlzZXM7XG4gIH1cblxuICBnZXRDb25jbHVzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmNsdXNpb247XG4gIH1cblxuICBnZXRGaWxlQ29udGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5maWxlQ29udGV4dDtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IGxhYmVsTmFtZU1hdGNoZXMgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBsYWJlbE5hbWVNYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlc0xlbmd0aCA9IHRoaXMucHJlbWlzZXMubGVuZ3RoO1xuXG4gICAgaWYgKHByZW1pc2VzTGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb29mU3RlcHMgPSBzdGF0ZW1lbnRMb2NhbENvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gc29tZVN1YkFycmF5KHByb29mU3RlcHMsIHByZW1pc2VzTGVuZ3RoLCAocHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBsZXQgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICAgIHByZW1pc2VzTWF0Y2ggPSBtYXRjaFByZW1pc2VzKHRoaXMucHJlbWlzZXMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjb25jbHVzaW9uTWF0Y2hlcyA9IG1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICAgICAgICBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0YXRlbWVudE5hdGNoZXM7XG4gIH1cblxuICBtYXRjaE1ldGFzdGF0ZW1lbnQobWV0YXN0YXRlbWVudE5vZGUsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KSB7XG4gICAgbGV0IG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgcHJlbWlzZXNMZW5ndGggPSB0aGlzLnByZW1pc2VzLmxlbmd0aDtcblxuICAgIGlmIChwcmVtaXNlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBtZXRhTWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQuZ2V0TWV0YXByb29mU3RlcHMoKTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkobWV0YXByb29mU3RlcHMsIHByZW1pc2VzTGVuZ3RoLCAobWV0YXByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWV0YU1hdGNoUHJlbWlzZXModGhpcy5wcmVtaXNlcywgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIHRoaXMuZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWV0YU1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgICBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSB0aGlzLnByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSB0aGlzLmNvbmNsdXNpb24udG9KU09OKHRva2VucyksXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KSB7XG4gICAgbGV0IHJ1bGU7XG5cbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAgICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJldHVybiBydWxlO1xuICB9XG5cbiAgc3RhdGljIGZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dChsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIGNvbnN0IHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXRjaFByZW1pc2UocHJlbWlzZSwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBwcm9vZlN0ZXAgPSBwcnVuZShwcm9vZlN0ZXBzLCAocHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3Qgc3VicHJvb2ZOb2RlID0gcHJvb2ZTdGVwLmdldFN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIHN0YXRlbWVudE5vZGUgPSBwcm9vZlN0ZXAuZ2V0U3RhdGVtZW50Tm9kZSgpXG5cbiAgICBpZiAoc3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdWJQcm9vZk5vZGVNYXRjaGVzID0gcHJlbWlzZS5tYXRjaFN1YnByb29mTm9kZShzdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoIXN1YlByb29mTm9kZU1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc3RhdGVtZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoU3RhdGVtZW50Tm9kZShzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgaWYgKCFzdGF0ZW1lbnROb2RlTWF0Y2hlcykgeyAgLy8vXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSkgfHwgbnVsbDtcblxuICBjb25zdCBwcmVtaXNlTWF0Y2hlcyA9IChwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBwcmVtaXNlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlcyhwcmVtaXNlLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VzTWF0Y2ggPSBwcmVtaXNlLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSBtYXRjaFByZW1pc2UocHJlbWlzZSwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1hdGNoQ29uY2x1c2lvbihjb25jbHVzaW9uLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KSB7XG4gIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gY29uY2x1c2lvbi5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gc3RhdGVtZW50Tm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25jbHVzaW9uTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFwcm9vZlN0ZXAgPSBwcnVuZShtZXRhcHJvb2ZTdGVwcywgKG1ldGFwcm9vZlN0ZXApID0+IHtcbiAgICBjb25zdCBydWxlU3VicHJvb2ZOb2RlID0gbWV0YXByb29mU3RlcC5nZXRSdWxlU3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldE1ldGFzdGF0ZW1lbnROb2RlKClcblxuICAgIGlmIChydWxlU3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3ViUHJvb2ZOb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hSdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgIGlmICghcnVsZVN1YlByb29mTm9kZU1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKCFtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSAobWV0YXByb29mU3RlcCAhPT0gbnVsbCk7XG5cbiAgcmV0dXJuIHByZW1pc2VNYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hQcmVtaXNlcyhwcmVtaXNlLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VzTWF0Y2ggPSBwcmVtaXNlLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzID0gY29uY2x1c2lvbi5tYXRjaE1ldGFzdGF0ZW1lbnROb2RlKG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudExvY2FsTWV0YUNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJmaWxlQ29udGV4dCIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsImdldEZpbGVDb250ZXh0IiwibWF0Y2hMYWJlbE5hbWUiLCJsYWJlbE5hbWUiLCJsYWJlbE5hbWVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwibmFtZSIsImxhYmVsTWF0Y2hlc05hbWUiLCJtYXRjaE5hbWUiLCJtYXRjaFN0YXRlbWVudCIsInN0YXRlbWVudE5vZGUiLCJzdGF0ZW1lbnRMb2NhbENvbnRleHQiLCJzdGF0ZW1lbnROYXRjaGVzIiwicHJlbWlzZXNMZW5ndGgiLCJsZW5ndGgiLCJzdWJzdGl0dXRpb25zIiwiY29uY2x1c2lvbk1hdGNoZXMiLCJtYXRjaENvbmNsdXNpb24iLCJwcm9vZlN0ZXBzIiwiZ2V0UHJvb2ZTdGVwcyIsInNvbWVTdWJBcnJheSIsInByZW1pc2VzTWF0Y2hDb25jbHVzaW9uIiwicHJlbWlzZXNNYXRjaCIsIm1hdGNoUHJlbWlzZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnQiLCJtZXRhc3RhdGVtZW50Tm9kZSIsIm1ldGFzdGF0ZW1lbnRMb2NhbE1ldGFDb250ZXh0IiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJtZXRhTWF0Y2hDb25jbHVzaW9uIiwibWV0YXByb29mU3RlcHMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsIm1ldGFNYXRjaFByZW1pc2VzIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2UiLCJwcmVtaXNlSlNPTiIsImNvbmNsdXNpb25KU09OIiwianNvbiIsImZyb21KU09OQW5kRmlsZUNvbnRleHQiLCJydWxlIiwiTGFiZWwiLCJQcmVtaXNlIiwiQ29uY2x1c2lvbiIsImZyb21MYWJlbHNQcmVtaXNlc0NvbmNsdXNpb25BbmRGaWxlQ29udGV4dCIsIm1hdGNoUHJlbWlzZSIsInByb29mU3RlcCIsInBydW5lIiwic3VicHJvb2ZOb2RlIiwiZ2V0U3VicHJvb2ZOb2RlIiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN1YlByb29mTm9kZU1hdGNoZXMiLCJtYXRjaFN1YnByb29mTm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1hdGNoZXMiLCJldmVyeSIsIm1ldGFNYXRjaFByZW1pc2UiLCJtZXRhcHJvb2ZTdGVwIiwicnVsZVN1YnByb29mTm9kZSIsImdldFJ1bGVTdWJwcm9vZk5vZGUiLCJnZXRNZXRhc3RhdGVtZW50Tm9kZSIsInJ1bGVTdWJQcm9vZk5vZGVNYXRjaGVzIiwibWF0Y2hSdWxlU3VicHJvb2ZOb2RlIiwibWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hNZXRhc3RhdGVtZW50Tm9kZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFTcUJBOzs7NERBUEg7OERBQ0U7aUVBQ0c7cUJBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHUCxJQUFBLEFBQU1BLHFCQUFELEFBQUw7YUFBTUEsS0FDUEMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRUMsV0FBVztnQ0FEbENKO1FBRWpCLElBQUksQ0FBQ0MsTUFB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