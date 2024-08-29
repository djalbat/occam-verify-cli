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
                var _this = this;
                var statementNatches;
                var premisesLength = this.premises.length, statementLocalContext = localContext; ///
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
            value: function matchMetastatement(metastatementNode, localMetaContext) {
                var _this = this;
                var metastatementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var substitutions = [], conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, this.fileContext, localMetaContext);
                    metastatementNatches = conclusionMatches; ///
                } else {
                    var metaproofSteps = localMetaContext.getMetaproofSteps();
                    metastatementNatches = (0, _array.someSubArray)(metaproofSteps, premisesLength, function(metaproofSteps) {
                        var premisesMatchConclusion = false;
                        var substitutions = [], premisesMatch = metaMatchPremises(_this.premises, metaproofSteps, substitutions, _this.fileContext, localMetaContext);
                        if (premisesMatch) {
                            var conclusionMatches = metaMatchConclusion(_this.conclusion, metastatementNode, substitutions, _this.fileContext, localMetaContext);
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
    var proofStep = (0, _array.extract)(proofSteps, function(proofStep) {
        var statementNode = proofStep.getStatementNode();
        if (statementNode !== null) {
            var statementNodeMatches = premise.matchStatementNode(statementNode, substitutions, fileContext, statementLocalContext);
            if (statementNodeMatches) {
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
function metaMatchPremise(premise, metaproofSteps, substitutions, fileContext, localMetaContext) {
    var metaproofStep = (0, _array.extract)(metaproofSteps, function(metaproofStep) {
        var ruleSubproofNode = metaproofStep.getRuleSubproofNode(), metaSubproofNode = metaproofStep.getMetaSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
        if (ruleSubproofNode !== null) {
            var ruleSubProofNodeMatches = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions, fileContext, localMetaContext);
            if (ruleSubProofNodeMatches) {
                return true;
            }
        }
        if (metaSubproofNode !== null) {
            var metaSubProofNodeMatches = premise.matchMetaSubproofNode(metaSubproofNode, substitutions, fileContext, localMetaContext);
            if (metaSubProofNodeMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, substitutions, fileContext, localMetaContext);
            if (metastatementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = metaproofStep !== null;
    return premiseMatches;
}
function metaMatchPremises(premise, metaproofSteps, substitutions, fileContext, localMetaContext) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = metaMatchPremise(premise, metaproofSteps, substitutions, fileContext, localMetaContext);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgZXh0cmFjdCB9IGZyb20gXCIuL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgc29tZVN1YkFycmF5IH0gZnJvbSBcIi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJ1bGUge1xuICBjb25zdHJ1Y3RvcihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCkge1xuICAgIHRoaXMubGFiZWxzID0gbGFiZWxzO1xuICAgIHRoaXMucHJlbWlzZXMgPSBwcmVtaXNlcztcbiAgICB0aGlzLmNvbmNsdXNpb24gPSBjb25jbHVzaW9uO1xuICAgIHRoaXMuZmlsZUNvbnRleHQgPSBmaWxlQ29udGV4dDtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldEZpbGVDb250ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLmZpbGVDb250ZXh0O1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbG9jYWxDb250ZXh0KSB7XG4gICAgbGV0IHN0YXRlbWVudE5hdGNoZXM7XG5cbiAgICBjb25zdCBwcmVtaXNlc0xlbmd0aCA9IHRoaXMucHJlbWlzZXMubGVuZ3RoLFxuICAgICAgICAgIHN0YXRlbWVudExvY2FsQ29udGV4dCA9IGxvY2FsQ29udGV4dDsgLy8vXG5cbiAgICBpZiAocHJlbWlzZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IGNvbmNsdXNpb25NYXRjaGVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwcyA9IHN0YXRlbWVudExvY2FsQ29udGV4dC5nZXRQcm9vZlN0ZXBzKCk7XG5cbiAgICAgIHN0YXRlbWVudE5hdGNoZXMgPSBzb21lU3ViQXJyYXkocHJvb2ZTdGVwcywgcHJlbWlzZXNMZW5ndGgsIChwcm9vZlN0ZXBzKSA9PiB7XG4gICAgICAgIGxldCBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgICAgcHJlbWlzZXNNYXRjaCA9IG1hdGNoUHJlbWlzZXModGhpcy5wcmVtaXNlcywgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IGNvbmNsdXNpb25NYXRjaGVzID0gbWF0Y2hDb25jbHVzaW9uKHRoaXMuY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgc3RhdGVtZW50TG9jYWxDb250ZXh0KTtcblxuICAgICAgICAgIHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gY29uY2x1c2lvbk1hdGNoZXM7ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmVtaXNlc01hdGNoQ29uY2x1c2lvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSwgbG9jYWxNZXRhQ29udGV4dCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHByZW1pc2VzTGVuZ3RoID0gdGhpcy5wcmVtaXNlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlbWlzZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbWV0YU1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCB0aGlzLmZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbG9jYWxNZXRhQ29udGV4dC5nZXRNZXRhcHJvb2ZTdGVwcygpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShtZXRhcHJvb2ZTdGVwcywgcHJlbWlzZXNMZW5ndGgsIChtZXRhcHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBsZXQgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICAgIHByZW1pc2VzTWF0Y2ggPSBtZXRhTWF0Y2hQcmVtaXNlcyh0aGlzLnByZW1pc2VzLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjb25jbHVzaW9uTWF0Y2hlcyA9IG1ldGFNYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgdGhpcy5maWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICAgICAgICBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgbWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpIHtcbiAgICBjb25zdCBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcyA9IHRoaXMubGFiZWxzLnNvbWUoKGxhYmVsKSA9PiB7XG4gICAgICBjb25zdCBsYWJlbE1hdGNoZXNNZXRhdmFyaWFibGVOb2RlID0gbGFiZWwubWF0Y2hNZXRhdmFyaWFibGVOb2RlKG1ldGF2YXJpYWJsZU5vZGUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtZXRhdmFyaWFibGVOb2RlTWF0Y2hlcztcbiAgfVxuXG4gIHRvSlNPTih0b2tlbnMpIHtcbiAgICBjb25zdCBsYWJlbHNKU09OID0gdGhpcy5sYWJlbHMubWFwKChsYWJlbCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGFiZWxKU09OID0gbGFiZWwudG9KU09OKHRva2Vucyk7XG5cbiAgICAgICAgICAgIHJldHVybiBsYWJlbEpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcHJlbWlzZXNKU09OID0gdGhpcy5wcmVtaXNlcy5tYXAoKHByZW1pc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByZW1pc2VKU09OID0gcHJlbWlzZS50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIHByZW1pc2VKU09OO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNvbmNsdXNpb25KU09OID0gdGhpcy5jb25jbHVzaW9uLnRvSlNPTih0b2tlbnMpLFxuICAgICAgICAgIGxhYmVscyA9IGxhYmVsc0pTT04sICAvLy9cbiAgICAgICAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTiwgIC8vL1xuICAgICAgICAgIGNvbmNsdXNpb24gPSBjb25jbHVzaW9uSlNPTiwgIC8vL1xuICAgICAgICAgIGpzb24gPSB7XG4gICAgICAgICAgICBsYWJlbHMsXG4gICAgICAgICAgICBwcmVtaXNlcyxcbiAgICAgICAgICAgIGNvbmNsdXNpb25cbiAgICAgICAgICB9O1xuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCkge1xuICAgIGxldCBydWxlO1xuXG4gICAgbGV0IHsgbGFiZWxzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgbGFiZWxzSlNPTiA9IGxhYmVsczsgIC8vL1xuXG4gICAgbGFiZWxzID0gbGFiZWxzSlNPTi5tYXAoKGxhYmVsSlNPTikgPT4ge1xuICAgICAgY29uc3QganNvbiA9IGxhYmVsSlNPTiwgLy8vXG4gICAgICAgICAgICBsYWJlbCA9IExhYmVsLmZyb21KU09OQW5kRmlsZUNvbnRleHQoanNvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBwcmVtaXNlcyB9ID0ganNvbjtcblxuICAgIGNvbnN0IHByZW1pc2VzSlNPTiA9IHByZW1pc2VzOyAgLy8vXG5cbiAgICBwcmVtaXNlcyA9IHByZW1pc2VzSlNPTi5tYXAoKHByZW1pc2VKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gcHJlbWlzZUpTT04sIC8vL1xuICAgICAgICAgICAgcHJlbWlzZSA9IFByZW1pc2UuZnJvbUpTT05BbmRGaWxlQ29udGV4dChqc29uLCBmaWxlQ29udGV4dCk7XG5cbiAgICAgIHJldHVybiBwcmVtaXNlO1xuICAgIH0pO1xuXG4gICAgbGV0IHsgY29uY2x1c2lvbiB9ID0ganNvbjtcblxuICAgIGNvbnN0IGNvbmNsdXNpb25KU09OID0gY29uY2x1c2lvbjsgIC8vL1xuXG4gICAganNvbiA9IGNvbmNsdXNpb25KU09OOyAgLy8vXG5cbiAgICBjb25jbHVzaW9uID0gQ29uY2x1c2lvbi5mcm9tSlNPTkFuZEZpbGVDb250ZXh0KGpzb24sIGZpbGVDb250ZXh0KTtcblxuICAgIHJ1bGUgPSBuZXcgUnVsZShsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uLCBmaWxlQ29udGV4dCk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpIHtcbiAgICBjb25zdCBydWxlID0gbmV3IFJ1bGUobGFiZWxzLCBwcmVtaXNlcywgY29uY2x1c2lvbiwgZmlsZUNvbnRleHQpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpIHtcbiAgY29uc3QgcHJvb2ZTdGVwID0gZXh0cmFjdChwcm9vZlN0ZXBzLCAocHJvb2ZTdGVwKSA9PiB7XG4gICAgY29uc3Qgc3RhdGVtZW50Tm9kZSA9IHByb29mU3RlcC5nZXRTdGF0ZW1lbnROb2RlKClcblxuICAgIGlmIChzdGF0ZW1lbnROb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgICBpZiAoc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSAocHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gcHJlbWlzZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZXMocHJlbWlzZSwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlc01hdGNoID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIHN0YXRlbWVudExvY2FsQ29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGNvbmNsdXNpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBzdGF0ZW1lbnRMb2NhbENvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2UocHJlbWlzZSwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFwcm9vZlN0ZXAgPSBleHRyYWN0KG1ldGFwcm9vZlN0ZXBzLCAobWV0YXByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldFJ1bGVTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBtZXRhU3VicHJvb2ZOb2RlID0gbWV0YXByb29mU3RlcC5nZXRNZXRhU3VicHJvb2ZOb2RlKCksXG4gICAgICAgICAgbWV0YXN0YXRlbWVudE5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldE1ldGFzdGF0ZW1lbnROb2RlKClcblxuICAgIGlmIChydWxlU3VicHJvb2ZOb2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBydWxlU3ViUHJvb2ZOb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hSdWxlU3VicHJvb2ZOb2RlKHJ1bGVTdWJwcm9vZk5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KTtcblxuICAgICAgaWYgKHJ1bGVTdWJQcm9vZk5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGFTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFTdWJQcm9vZk5vZGVNYXRjaGVzID0gcHJlbWlzZS5tYXRjaE1ldGFTdWJwcm9vZk5vZGUobWV0YVN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YVN1YlByb29mTm9kZU1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpO1xuXG4gICAgICBpZiAobWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gKG1ldGFwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBwcmVtaXNlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZXMocHJlbWlzZSwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGNvbnN0IHByZW1pc2VzTWF0Y2ggPSBwcmVtaXNlLmV2ZXJ5KChwcmVtaXNlKSA9PiB7XG4gICAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSBtZXRhTWF0Y2hQcmVtaXNlKHByZW1pc2UsIG1ldGFwcm9vZlN0ZXBzLCBzdWJzdGl0dXRpb25zLCBmaWxlQ29udGV4dCwgbG9jYWxNZXRhQ29udGV4dCk7XG5cbiAgICBpZiAocHJlbWlzZU1hdGNoZXMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHByZW1pc2VzTWF0Y2g7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgbWV0YXN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIGZpbGVDb250ZXh0LCBsb2NhbE1ldGFDb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGNvbmNsdXNpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgZmlsZUNvbnRleHQsIGxvY2FsTWV0YUNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlczsgLy8vXG5cbiAgcmV0dXJuIGNvbmNsdXNpb25NYXRjaGVzO1xufVxuIl0sIm5hbWVzIjpbIlJ1bGUiLCJsYWJlbHMiLCJwcmVtaXNlcyIsImNvbmNsdXNpb24iLCJmaWxlQ29udGV4dCIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsImdldEZpbGVDb250ZXh0IiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibG9jYWxDb250ZXh0Iiwic3RhdGVtZW50TmF0Y2hlcyIsInByZW1pc2VzTGVuZ3RoIiwibGVuZ3RoIiwic3RhdGVtZW50TG9jYWxDb250ZXh0Iiwic3Vic3RpdHV0aW9ucyIsImNvbmNsdXNpb25NYXRjaGVzIiwibWF0Y2hDb25jbHVzaW9uIiwicHJvb2ZTdGVwcyIsImdldFByb29mU3RlcHMiLCJzb21lU3ViQXJyYXkiLCJwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiIsInByZW1pc2VzTWF0Y2giLCJtYXRjaFByZW1pc2VzIiwibWF0Y2hNZXRhc3RhdGVtZW50IiwibWV0YXN0YXRlbWVudE5vZGUiLCJsb2NhbE1ldGFDb250ZXh0IiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJtZXRhTWF0Y2hDb25jbHVzaW9uIiwibWV0YXByb29mU3RlcHMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsIm1ldGFNYXRjaFByZW1pc2VzIiwibWF0Y2hNZXRhdmFyaWFibGVOb2RlIiwibWV0YXZhcmlhYmxlTm9kZSIsIm1ldGF2YXJpYWJsZU5vZGVNYXRjaGVzIiwic29tZSIsImxhYmVsIiwibGFiZWxNYXRjaGVzTWV0YXZhcmlhYmxlTm9kZSIsInRvSlNPTiIsInRva2VucyIsImxhYmVsc0pTT04iLCJtYXAiLCJsYWJlbEpTT04iLCJwcmVtaXNlc0pTT04iLCJwcmVtaXNlIiwicHJlbWlzZUpTT04iLCJjb25jbHVzaW9uSlNPTiIsImpzb24iLCJmcm9tSlNPTkFuZEZpbGVDb250ZXh0IiwicnVsZSIsIkxhYmVsIiwiUHJlbWlzZSIsIkNvbmNsdXNpb24iLCJmcm9tTGFiZWxzUHJlbWlzZXNDb25jbHVzaW9uQW5kRmlsZUNvbnRleHQiLCJtYXRjaFByZW1pc2UiLCJwcm9vZlN0ZXAiLCJleHRyYWN0IiwiZ2V0U3RhdGVtZW50Tm9kZSIsInN0YXRlbWVudE5vZGVNYXRjaGVzIiwibWF0Y2hTdGF0ZW1lbnROb2RlIiwicHJlbWlzZU1hdGNoZXMiLCJldmVyeSIsIm1ldGFNYXRjaFByZW1pc2UiLCJtZXRhcHJvb2ZTdGVwIiwicnVsZVN1YnByb29mTm9kZSIsImdldFJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YVN1YnByb29mTm9kZSIsImdldE1ldGFzdGF0ZW1lbnROb2RlIiwicnVsZVN1YlByb29mTm9kZU1hdGNoZXMiLCJtYXRjaFJ1bGVTdWJwcm9vZk5vZGUiLCJtZXRhU3ViUHJvb2ZOb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YVN1YnByb29mTm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBU3FCQTs7OzREQVBIOzhEQUNFO2lFQUNHO3FCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1QsSUFBQSxBQUFNQSxxQkFBRCxBQUFMO2FBQU1BLEtBQ1BDLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLFdBQVc7Z0NBRGxDSjtRQUVqQixJQUFJLENBQUNDLE1BQU0sR0FBR0E7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