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
var _label = /*#__PURE__*/ _interopRequireDefault(require("./label"));
var _premise = /*#__PURE__*/ _interopRequireDefault(require("./premise"));
var _conclusion = /*#__PURE__*/ _interopRequireDefault(require("./conclusion"));
var _array = require("./utilities/array");
var _kinds = require("./kinds");
function _classCallCheck(instance, Constructor) {
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
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var Rule = /*#__PURE__*/ function() {
    function Rule(labels, premises, conclusion, fileContext) {
        _classCallCheck(this, Rule);
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
        this.fileContext = fileContext;
    }
    _createClass(Rule, [
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
                var matchesLabelName = this.labels.some(function(label) {
                    var name = labelName, labelMatchesName = label.matchName(name);
                    if (labelMatchesName) {
                        return true;
                    }
                });
                return matchesLabelName;
            }
        },
        {
            key: "matchStatement",
            value: function matchStatement(statementNode, statementProofContext) {
                var _this = this;
                var statementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var substitutions = [], conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, this.fileContext, statementProofContext);
                    statementNatches = conclusionMatches; ///
                } else {
                    var proofSteps = statementProofContext.getProofSteps();
                    statementNatches = (0, _array.someSubArray)(proofSteps, premisesLength, function(proofSteps) {
                        var premisesMatchConclusion = false;
                        var substitutions = [], premisesMatch = matchPremises(_this.premises, proofSteps, substitutions, _this.fileContext, statementProofContext);
                        if (premisesMatch) {
                            var conclusionMatches = matchConclusion(_this.conclusion, statementNode, substitutions, _this.fileContext, statementProofContext);
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
            value: function matchMetastatement(metastatementNode, metastatementMetaproofContext) {
                var _this = this;
                var metastatementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var substitutions = [], conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, this.fileContext, metastatementMetaproofContext);
                    metastatementNatches = conclusionMatches; ///
                } else {
                    var metaproofSteps = metastatementMetaproofContext.getMetaproofSteps();
                    metastatementNatches = (0, _array.someSubArray)(metaproofSteps, premisesLength, function(metaproofSteps) {
                        var premisesMatchConclusion = false;
                        var substitutions = [], premisesMatch = metaMatchPremises(_this.premises, metaproofSteps, substitutions, _this.fileContext, metastatementMetaproofContext);
                        if (premisesMatch) {
                            var conclusionMatches = metaMatchConclusion(_this.conclusion, metastatementNode, substitutions, _this.fileContext, metastatementMetaproofContext);
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
                }), conclusionJSON = this.conclusion.toJSON(tokens), kind = _kinds.RULE_KIND, labels = labelsJSON, premises = premisesJSON, conclusion = conclusionJSON, json = {
                    kind: kind,
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
function matchPremise(premise, proofSteps, substitutions, fileContext, statementProofContext) {
    var proofStep = (0, _array.prune)(proofSteps, function(proofStep) {
        var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
        if (subproofNode !== null) {
            var subProofNodeMatches = premise.matchSubproofNode(subproofNode, substitutions, fileContext, statementProofContext);
            if (!subProofNodeMatches) {
                return true;
            }
        }
        if (statementNode !== null) {
            var statementNodeMatches = premise.matchStatementNode(statementNode, substitutions, fileContext, statementProofContext);
            if (!statementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = proofStep !== null;
    return premiseMatches;
}
function matchPremises(premise, proofSteps, substitutions, fileContext, statementProofContext) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = matchPremise(premise, proofSteps, substitutions, fileContext, statementProofContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function matchConclusion(conclusion, statementNode, substitutions, fileContext, statementProofContext) {
    var statementNodeMatches = conclusion.matchStatementNode(statementNode, substitutions, fileContext, statementProofContext), conclusionMatches = statementNodeMatches; ///
    return conclusionMatches;
}
function metaMatchPremise(premise, metaproofSteps, substitutions, fileContext, metastatementMetaproofContext) {
    var metaproofStep = (0, _array.prune)(metaproofSteps, function(metaproofStep) {
        var ruleSubproofNode = metaproofStep.getRuleSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
        if (ruleSubproofNode !== null) {
            var ruleSubProofNodeMatches = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, metastatementMetaproofContext);
            if (!ruleSubProofNodeMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementMetaproofContext);
            if (!metastatementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = metaproofStep !== null;
    return premiseMatches;
}
function metaMatchPremises(premise, metaproofSteps, substitutions, fileContext, metastatementMetaproofContext) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = metaMatchPremise(premise, metaproofSteps, substitutions, fileContext, metastatementMetaproofContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function metaMatchConclusion(conclusion, metastatementNode, substitutions, fileContext, metastatementMetaproofContext) {
    var metastatementNodeMatches = conclusion.matchMetastatementNode(metastatementNode, substitutions, fileContext, metastatementMetaproofContext), conclusionMatches = metastatementNodeMatches; ///
    return conclusionMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFJVTEVfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBzb21lU3ViQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24sIGZpbGVDb250ZXh0KSB7XG4gICAgdGhpcy5sYWJlbHMgPSBsYWJlbHM7XG4gICAgdGhpcy5wcmVtaXNlcyA9IHByZW1pc2VzO1xuICAgIHRoaXMuY29uY2x1c2lvbiA9IGNvbmNsdXNpb247XG4gICAgdGhpcy5maWxlQ29udGV4dCA9IGZpbGVDb250ZXh0O1xuICB9XG5cbiAgZ2V0TGFiZWxzKCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVscztcbiAgfVxuXG4gIGdldFByZW1pc2VzKCkge1xuICAgIHJldHVybiB0aGlzLnByZW1pc2VzO1xuICB9XG5cbiAgZ2V0Q29uY2x1c2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jb25jbHVzaW9uO1xuICB9XG5cbiAgZ2V0RmlsZUNvbnRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZmlsZUNvbnRleHQ7XG4gIH1cblxuICBtYXRjaExhYmVsTmFtZShsYWJlbE5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzTGFiZWxOYW1lID0gdGhpcy5sYWJlbHMuc29tZSgobGFiZWwpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBsYWJlbE5hbWUsIC8vL1xuICAgICAgICAgICAgbGFiZWxNYXRjaGVzTmFtZSA9IGxhYmVsLm1hdGNoTmFtZShuYW1lKTtcblxuICAgICAgaWYgKGxhYmVsTWF0Y2hlc05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlc0xhYmVsTmFtZTtcbiAgfVxuXG4gIG1hdGNoU3RhdGVtZW50KHN0YXRlbWVudE5vZGUsIHN0YXRlbWVudFByb29mQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgcHJlbWlzZXNMZW5ndGggPSB0aGlzLnByZW1pc2VzLmxlbmd0aDtcblxuICAgIGlmIChwcmVtaXNlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBtYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gY29uY2x1c2lvbk1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9vZlN0ZXBzID0gc3RhdGVtZW50UHJvb2ZDb250ZXh0LmdldFByb29mU3RlcHMoKTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShwcm9vZlN0ZXBzLCBwcmVtaXNlc0xlbmd0aCwgKHByb29mU3RlcHMpID0+IHtcbiAgICAgICAgbGV0IHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgICBwcmVtaXNlc01hdGNoID0gbWF0Y2hQcmVtaXNlcyh0aGlzLnByZW1pc2VzLCBwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcmVtaXNlc01hdGNoKSB7XG4gICAgICAgICAgY29uc3QgY29uY2x1c2lvbk1hdGNoZXMgPSBtYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBjb25jbHVzaW9uTWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhc3RhdGVtZW50KG1ldGFzdGF0ZW1lbnROb2RlLCBtZXRhc3RhdGVtZW50TWV0YXByb29mQ29udGV4dCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHByZW1pc2VzTGVuZ3RoID0gdGhpcy5wcmVtaXNlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlbWlzZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbWV0YU1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gY29uY2x1c2lvbk1hdGNoZXM7IC8vL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXRhcHJvb2ZTdGVwcyA9IG1ldGFzdGF0ZW1lbnRNZXRhcHJvb2ZDb250ZXh0LmdldE1ldGFwcm9vZlN0ZXBzKCk7XG5cbiAgICAgIG1ldGFzdGF0ZW1lbnROYXRjaGVzID0gc29tZVN1YkFycmF5KG1ldGFwcm9vZlN0ZXBzLCBwcmVtaXNlc0xlbmd0aCwgKG1ldGFwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGxldCBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgcHJlbWlzZXNNYXRjaCA9IG1ldGFNYXRjaFByZW1pc2VzKHRoaXMucHJlbWlzZXMsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjb25jbHVzaW9uTWF0Y2hlcyA9IG1ldGFNYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudE1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgICAgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBjb25jbHVzaW9uTWF0Y2hlczsgIC8vL1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBtZXRhc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gdGhpcy5wcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gdGhpcy5jb25jbHVzaW9uLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGtpbmQgPSBSVUxFX0tJTkQsXG4gICAgICAgICAgbGFiZWxzID0gbGFiZWxzSlNPTiwgIC8vL1xuICAgICAgICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLCAgLy8vXG4gICAgICAgICAgY29uY2x1c2lvbiA9IGNvbmNsdXNpb25KU09OLCAgLy8vXG4gICAgICAgICAganNvbiA9IHtcbiAgICAgICAgICAgIGtpbmQsXG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gICAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpIHtcbiAgY29uc3QgcHJvb2ZTdGVwID0gcHJ1bmUocHJvb2ZTdGVwcywgKHByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHByb29mU3RlcC5nZXRTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKVxuXG4gICAgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ViUHJvb2ZOb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgc3RhdGVtZW50UHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKCFzdWJQcm9vZk5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZS5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICghc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSAocHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gcHJlbWlzZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZXMocHJlbWlzZSwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlc01hdGNoID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudFByb29mQ29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGNvbmNsdXNpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRQcm9vZkNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2UocHJlbWlzZSwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TWV0YXByb29mQ29udGV4dCkge1xuICBjb25zdCBtZXRhcHJvb2ZTdGVwID0gcHJ1bmUobWV0YXByb29mU3RlcHMsIChtZXRhcHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3QgcnVsZVN1YnByb29mTm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0UnVsZVN1YnByb29mTm9kZSgpLFxuICAgICAgICAgIG1ldGFzdGF0ZW1lbnROb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhc3RhdGVtZW50Tm9kZSgpXG5cbiAgICBpZiAocnVsZVN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcnVsZVN1YlByb29mTm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoUnVsZVN1YnByb29mTm9kZShydWxlU3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbWV0YXN0YXRlbWVudE1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgICBpZiAoIXJ1bGVTdWJQcm9vZk5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMgPSBwcmVtaXNlLm1hdGNoTWV0YXN0YXRlbWVudE5vZGUobWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICghbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gKG1ldGFwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBwcmVtaXNlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZXMocHJlbWlzZSwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBtZXRhc3RhdGVtZW50TWV0YXByb29mQ29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlc01hdGNoID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWV0YU1hdGNoUHJlbWlzZShwcmVtaXNlLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRNZXRhcHJvb2ZDb250ZXh0KTtcblxuICAgIGlmIChwcmVtaXNlTWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcHJlbWlzZXNNYXRjaDtcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoQ29uY2x1c2lvbihjb25jbHVzaW9uLCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRNZXRhcHJvb2ZDb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGNvbmNsdXNpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIG1ldGFzdGF0ZW1lbnRNZXRhcHJvb2ZDb250ZXh0KSxcbiAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXM7IC8vL1xuXG4gIHJldHVybiBjb25jbHVzaW9uTWF0Y2hlcztcbn1cbiJdLCJuYW1lcyI6WyJSdWxlIiwibGFiZWxzIiwicHJlbWlzZXMiLCJjb25jbHVzaW9uIiwiZmlsZUNvbnRleHQiLCJnZXRMYWJlbHMiLCJnZXRQcmVtaXNlcyIsImdldENvbmNsdXNpb24iLCJnZXRGaWxlQ29udGV4dCIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwic3RhdGVtZW50UHJvb2ZDb250ZXh0Iiwic3RhdGVtZW50TmF0Y2hlcyIsInByZW1pc2VzTGVuZ3RoIiwibGVuZ3RoIiwic3Vic3RpdHV0aW9ucyIsImNvbmNsdXNpb25NYXRjaGVzIiwibWF0Y2hDb25jbHVzaW9uIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzb21lU3ViQXJyYXkiLCJwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiIsInByZW1pc2VzTWF0Y2giLCJtYXRjaFByZW1pc2VzIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJtZXRhc3RhdGVtZW50TWV0YXByb29mQ29udGV4dCIsIm1ldGFzdGF0ZW1lbnROYXRjaGVzIiwibWV0YU1hdGNoQ29uY2x1c2lvbiIsIm1ldGFwcm9vZlN0ZXBzIiwiZ2V0TWV0YXByb29mU3RlcHMiLCJtZXRhTWF0Y2hQcmVtaXNlcyIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImtpbmQiLCJSVUxFX0tJTkQiLCJqc29uIiwiZnJvbUpTT05BbmRGaWxlQ29udGV4dCIsInJ1bGUiLCJMYWJlbCIsIlByZW1pc2UiLCJDb25jbHVzaW9uIiwiZnJvbUxhYmVsc1ByZW1pc2VzQ29uY2x1c2lvbkFuZEZpbGVDb250ZXh0IiwibWF0Y2hQcmVtaXNlIiwicHJvb2ZTdGVwIiwicHJ1bmUiLCJzdWJwcm9vZk5vZGUiLCJnZXRTdWJwcm9vZk5vZGUiLCJnZXRTdGF0ZW1lbnROb2RlIiwic3ViUHJvb2ZOb2RlTWF0Y2hlcyIsIm1hdGNoU3VicHJvb2ZOb2RlIiwic3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaFN0YXRlbWVudE5vZGUiLCJwcmVtaXNlTWF0Y2hlcyIsImV2ZXJ5IiwibWV0YU1hdGNoUHJlbWlzZSIsIm1ldGFwcm9vZlN0ZXAiLCJydWxlU3VicHJvb2ZOb2RlIiwiZ2V0UnVsZVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwicnVsZVN1YlByb29mTm9kZU1hdGNoZXMiLCJtYXRjaFJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhc3RhdGVtZW50Tm9kZU1hdGNoZXMiLCJtYXRjaE1ldGFzdGF0ZW1lbnROb2RlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztlQVVxQkE7OzswREFSSDs0REFDRTsrREFDRztxQkFFRDtxQkFDSTs7Ozs7Ozs7Ozs7Ozs7Ozs7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