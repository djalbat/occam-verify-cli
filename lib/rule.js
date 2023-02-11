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
    function Rule(labels, premises, conclusion) {
        _classCallCheck(this, Rule);
        this.labels = labels;
        this.premises = premises;
        this.conclusion = conclusion;
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
            value: function matchStatement(statementNode, metaproofContext) {
                var _this = this;
                var statementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var substitutions = [], conclusionMatches = matchConclusion(this.conclusion, statementNode, substitutions, metaproofContext);
                    statementNatches = conclusionMatches; ///
                } else {
                    var proofSteps = metaproofContext.getProofSteps();
                    statementNatches = (0, _array.someSubArray)(proofSteps, premisesLength, function(proofSteps) {
                        var premisesMatchConclusion = false;
                        var substitutions = [], premisesMatch = matchPremises(_this.premises, proofSteps, substitutions, metaproofContext);
                        if (premisesMatch) {
                            var conclusionMatches = matchConclusion(_this.conclusion, statementNode, substitutions, metaproofContext);
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
            value: function matchMetastatement(metastatementNode, metaproofContext) {
                var _this = this;
                var metastatementNatches;
                var premisesLength = this.premises.length;
                if (premisesLength === 0) {
                    var substitutions = [], conclusionMatches = metaMatchConclusion(this.conclusion, metastatementNode, substitutions, metaproofContext);
                    metastatementNatches = conclusionMatches; ///
                } else {
                    var metaproofSteps = metaproofContext.getMetaproofSteps();
                    metastatementNatches = (0, _array.someSubArray)(metaproofSteps, premisesLength, function(metaproofSteps) {
                        var premisesMatchConclusion = false;
                        var substitutions = [], premisesMatch = metaMatchPremises(_this.premises, metaproofSteps, substitutions, metaproofContext);
                        if (premisesMatch) {
                            var conclusionMatches = metaMatchConclusion(_this.conclusion, metastatementNode, substitutions, metaproofContext);
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
            key: "fromJSON",
            value: function fromJSON(json, context) {
                var rule;
                var labels = json.labels;
                var labelsJSON = labels; ///
                labels = labelsJSON.map(function(labelJSON) {
                    var _$json = labelJSON, label = _label.default.fromJSON(_$json, context);
                    return label;
                });
                var premises = json.premises;
                var premisesJSON = premises; ///
                premises = premisesJSON.map(function(premiseJSON) {
                    var _$json = premiseJSON, premise = _premise.default.fromJSON(_$json, context);
                    return premise;
                });
                var conclusion = json.conclusion;
                var conclusionJSON = conclusion; ///
                json = conclusionJSON; ///
                conclusion = _conclusion.default.fromJSON(json, context);
                rule = new Rule(labels, premises, conclusion);
                return rule;
            }
        },
        {
            key: "fromLabelsPremisesAndConclusion",
            value: function fromLabelsPremisesAndConclusion(labels, premises, conclusion) {
                var rule = new Rule(labels, premises, conclusion);
                return rule;
            }
        }
    ]);
    return Rule;
}();
function matchPremise(premise, proofSteps, substitutions, metaproofContext) {
    var proofStep = (0, _array.prune)(proofSteps, function(proofStep) {
        var subproofNode = proofStep.getSubproofNode(), statementNode = proofStep.getStatementNode();
        if (subproofNode !== null) {
            var subProofNodeMatches = premise.matchSubproofNode(subproofNode, substitutions, metaproofContext);
            if (!subProofNodeMatches) {
                return true;
            }
        }
        if (statementNode !== null) {
            var statementNodeMatches = premise.matchStatementNode(statementNode, substitutions, metaproofContext);
            if (!statementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = proofStep !== null;
    return premiseMatches;
}
function matchPremises(premise, proofSteps, substitutions, metaproofContext) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = matchPremise(premise, proofSteps, substitutions, metaproofContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function matchConclusion(conclusion, statementNode, substitutions, metaproofContext) {
    var statementNodeMatches = conclusion.matchStatementNode(statementNode, substitutions, metaproofContext), conclusionMatches = statementNodeMatches; ///
    return conclusionMatches;
}
function metaMatchPremise(premise, metaproofSteps, substitutions, metaproofContext) {
    var metaproofStep = (0, _array.prune)(metaproofSteps, function(metaproofStep) {
        var ruleSubproofNode = metaproofStep.getRuleSubproofNode(), metastatementNode = metaproofStep.getMetastatementNode();
        if (ruleSubproofNode !== null) {
            var ruleSubProofNodeMatches = premise.matchRuleSubproofNode(ruleSubproofNode, substitutions, metaproofContext);
            if (!ruleSubProofNodeMatches) {
                return true;
            }
        }
        if (metastatementNode !== null) {
            var metastatementNodeMatches = premise.matchMetastatementNode(metastatementNode, substitutions, metaproofContext);
            if (!metastatementNodeMatches) {
                return true;
            }
        }
    }) || null;
    var premiseMatches = metaproofStep !== null;
    return premiseMatches;
}
function metaMatchPremises(premise, metaproofSteps, substitutions, metaproofContext) {
    var premisesMatch = premise.every(function(premise) {
        var premiseMatches = metaMatchPremise(premise, metaproofSteps, substitutions, metaproofContext);
        if (premiseMatches) {
            return true;
        }
    });
    return premisesMatch;
}
function metaMatchConclusion(conclusion, metastatementNode, substitutions, metaproofContext) {
    var metastatementNodeMatches = conclusion.matchMetastatementNode(metastatementNode, substitutions, metaproofContext), conclusionMatches = metastatementNodeMatches; ///
    return conclusionMatches;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vbGFiZWxcIjtcbmltcG9ydCBQcmVtaXNlIGZyb20gXCIuL3ByZW1pc2VcIjtcbmltcG9ydCBDb25jbHVzaW9uIGZyb20gXCIuL2NvbmNsdXNpb25cIjtcblxuaW1wb3J0IHsgcHJ1bmUgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcbmltcG9ydCB7IFJVTEVfS0lORCB9IGZyb20gXCIuL2tpbmRzXCI7XG5pbXBvcnQgeyBzb21lU3ViQXJyYXkgfSBmcm9tIFwiLi91dGlsaXRpZXMvYXJyYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUnVsZSB7XG4gIGNvbnN0cnVjdG9yKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pIHtcbiAgICB0aGlzLmxhYmVscyA9IGxhYmVscztcbiAgICB0aGlzLnByZW1pc2VzID0gcHJlbWlzZXM7XG4gICAgdGhpcy5jb25jbHVzaW9uID0gY29uY2x1c2lvbjtcbiAgfVxuXG4gIGdldExhYmVscygpIHtcbiAgICByZXR1cm4gdGhpcy5sYWJlbHM7XG4gIH1cblxuICBnZXRQcmVtaXNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5wcmVtaXNlcztcbiAgfVxuXG4gIGdldENvbmNsdXNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29uY2x1c2lvbjtcbiAgfVxuXG4gIG1hdGNoTGFiZWxOYW1lKGxhYmVsTmFtZSkge1xuICAgIGNvbnN0IG1hdGNoZXNMYWJlbE5hbWUgPSB0aGlzLmxhYmVscy5zb21lKChsYWJlbCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IGxhYmVsTmFtZSwgLy8vXG4gICAgICAgICAgICBsYWJlbE1hdGNoZXNOYW1lID0gbGFiZWwubWF0Y2hOYW1lKG5hbWUpO1xuXG4gICAgICBpZiAobGFiZWxNYXRjaGVzTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBtYXRjaGVzTGFiZWxOYW1lO1xuICB9XG5cbiAgbWF0Y2hTdGF0ZW1lbnQoc3RhdGVtZW50Tm9kZSwgbWV0YXByb29mQ29udGV4dCkge1xuICAgIGxldCBzdGF0ZW1lbnROYXRjaGVzO1xuXG4gICAgY29uc3QgcHJlbWlzZXNMZW5ndGggPSB0aGlzLnByZW1pc2VzLmxlbmd0aDtcblxuICAgIGlmIChwcmVtaXNlc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgc3Vic3RpdHV0aW9ucyA9IFtdLFxuICAgICAgICAgICAgY29uY2x1c2lvbk1hdGNoZXMgPSBtYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBtZXRhcHJvb2ZDb250ZXh0KTtcblxuICAgICAgc3RhdGVtZW50TmF0Y2hlcyA9IGNvbmNsdXNpb25NYXRjaGVzOyAvLy9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvb2ZTdGVwcyA9IG1ldGFwcm9vZkNvbnRleHQuZ2V0UHJvb2ZTdGVwcygpO1xuXG4gICAgICBzdGF0ZW1lbnROYXRjaGVzID0gc29tZVN1YkFycmF5KHByb29mU3RlcHMsIHByZW1pc2VzTGVuZ3RoLCAocHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBsZXQgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICAgIHByZW1pc2VzTWF0Y2ggPSBtYXRjaFByZW1pc2VzKHRoaXMucHJlbWlzZXMsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIG1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgICAgIGlmIChwcmVtaXNlc01hdGNoKSB7XG4gICAgICAgICAgY29uc3QgY29uY2x1c2lvbk1hdGNoZXMgPSBtYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBtZXRhcHJvb2ZDb250ZXh0KTtcblxuICAgICAgICAgIHByZW1pc2VzTWF0Y2hDb25jbHVzaW9uID0gY29uY2x1c2lvbk1hdGNoZXM7ICAvLy9cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmVtaXNlc01hdGNoQ29uY2x1c2lvbikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RhdGVtZW50TmF0Y2hlcztcbiAgfVxuXG4gIG1hdGNoTWV0YXN0YXRlbWVudChtZXRhc3RhdGVtZW50Tm9kZSwgbWV0YXByb29mQ29udGV4dCkge1xuICAgIGxldCBtZXRhc3RhdGVtZW50TmF0Y2hlcztcblxuICAgIGNvbnN0IHByZW1pc2VzTGVuZ3RoID0gdGhpcy5wcmVtaXNlcy5sZW5ndGg7XG5cbiAgICBpZiAocHJlbWlzZXNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IHN1YnN0aXR1dGlvbnMgPSBbXSxcbiAgICAgICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbWV0YU1hdGNoQ29uY2x1c2lvbih0aGlzLmNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBtZXRhcHJvb2ZDb250ZXh0KTtcblxuICAgICAgbWV0YXN0YXRlbWVudE5hdGNoZXMgPSBjb25jbHVzaW9uTWF0Y2hlczsgLy8vXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1ldGFwcm9vZlN0ZXBzID0gbWV0YXByb29mQ29udGV4dC5nZXRNZXRhcHJvb2ZTdGVwcygpO1xuXG4gICAgICBtZXRhc3RhdGVtZW50TmF0Y2hlcyA9IHNvbWVTdWJBcnJheShtZXRhcHJvb2ZTdGVwcywgcHJlbWlzZXNMZW5ndGgsIChtZXRhcHJvb2ZTdGVwcykgPT4ge1xuICAgICAgICBsZXQgcHJlbWlzZXNNYXRjaENvbmNsdXNpb24gPSBmYWxzZTtcblxuICAgICAgICBjb25zdCBzdWJzdGl0dXRpb25zID0gW10sXG4gICAgICAgICAgICAgIHByZW1pc2VzTWF0Y2ggPSBtZXRhTWF0Y2hQcmVtaXNlcyh0aGlzLnByZW1pc2VzLCBtZXRhcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgICAgaWYgKHByZW1pc2VzTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBjb25jbHVzaW9uTWF0Y2hlcyA9IG1ldGFNYXRjaENvbmNsdXNpb24odGhpcy5jb25jbHVzaW9uLCBtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgICAgICBwcmVtaXNlc01hdGNoQ29uY2x1c2lvbiA9IGNvbmNsdXNpb25NYXRjaGVzOyAgLy8vXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJlbWlzZXNNYXRjaENvbmNsdXNpb24pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFzdGF0ZW1lbnROYXRjaGVzO1xuICB9XG5cbiAgdG9KU09OKHRva2Vucykge1xuICAgIGNvbnN0IGxhYmVsc0pTT04gPSB0aGlzLmxhYmVscy5tYXAoKGxhYmVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbEpTT04gPSBsYWJlbC50b0pTT04odG9rZW5zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGxhYmVsSlNPTjtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBwcmVtaXNlc0pTT04gPSB0aGlzLnByZW1pc2VzLm1hcCgocHJlbWlzZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJlbWlzZUpTT04gPSBwcmVtaXNlLnRvSlNPTih0b2tlbnMpO1xuXG4gICAgICAgICAgICByZXR1cm4gcHJlbWlzZUpTT047XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY29uY2x1c2lvbkpTT04gPSB0aGlzLmNvbmNsdXNpb24udG9KU09OKHRva2VucyksXG4gICAgICAgICAga2luZCA9IFJVTEVfS0lORCxcbiAgICAgICAgICBsYWJlbHMgPSBsYWJlbHNKU09OLCAgLy8vXG4gICAgICAgICAgcHJlbWlzZXMgPSBwcmVtaXNlc0pTT04sICAvLy9cbiAgICAgICAgICBjb25jbHVzaW9uID0gY29uY2x1c2lvbkpTT04sICAvLy9cbiAgICAgICAgICBqc29uID0ge1xuICAgICAgICAgICAga2luZCxcbiAgICAgICAgICAgIGxhYmVscyxcbiAgICAgICAgICAgIHByZW1pc2VzLFxuICAgICAgICAgICAgY29uY2x1c2lvblxuICAgICAgICAgIH07XG5cbiAgICByZXR1cm4ganNvbjtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uLCBjb250ZXh0KSB7XG4gICAgbGV0IHJ1bGU7XG5cbiAgICBsZXQgeyBsYWJlbHMgfSA9IGpzb247XG5cbiAgICBjb25zdCBsYWJlbHNKU09OID0gbGFiZWxzOyAgLy8vXG5cbiAgICBsYWJlbHMgPSBsYWJlbHNKU09OLm1hcCgobGFiZWxKU09OKSA9PiB7XG4gICAgICBjb25zdCBqc29uID0gbGFiZWxKU09OLCAvLy9cbiAgICAgICAgICAgIGxhYmVsID0gTGFiZWwuZnJvbUpTT04oanNvbiwgY29udGV4dCk7XG5cbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9KTtcblxuICAgIGxldCB7IHByZW1pc2VzIH0gPSBqc29uO1xuXG4gICAgY29uc3QgcHJlbWlzZXNKU09OID0gcHJlbWlzZXM7ICAvLy9cblxuICAgIHByZW1pc2VzID0gcHJlbWlzZXNKU09OLm1hcCgocHJlbWlzZUpTT04pID0+IHtcbiAgICAgIGNvbnN0IGpzb24gPSBwcmVtaXNlSlNPTiwgLy8vXG4gICAgICAgICAgICBwcmVtaXNlID0gUHJlbWlzZS5mcm9tSlNPTihqc29uLCBjb250ZXh0KTtcblxuICAgICAgcmV0dXJuIHByZW1pc2U7XG4gICAgfSk7XG5cbiAgICBsZXQgeyBjb25jbHVzaW9uIH0gPSBqc29uO1xuXG4gICAgY29uc3QgY29uY2x1c2lvbkpTT04gPSBjb25jbHVzaW9uOyAgLy8vXG5cbiAgICBqc29uID0gY29uY2x1c2lvbkpTT047ICAvLy9cblxuICAgIGNvbmNsdXNpb24gPSBDb25jbHVzaW9uLmZyb21KU09OKGpzb24sIGNvbnRleHQpO1xuXG4gICAgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUxhYmVsc1ByZW1pc2VzQW5kQ29uY2x1c2lvbihsYWJlbHMsIHByZW1pc2VzLCBjb25jbHVzaW9uKSB7XG4gICAgY29uc3QgcnVsZSA9IG5ldyBSdWxlKGxhYmVscywgcHJlbWlzZXMsIGNvbmNsdXNpb24pO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgY29uc3QgcHJvb2ZTdGVwID0gcHJ1bmUocHJvb2ZTdGVwcywgKHByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHN1YnByb29mTm9kZSA9IHByb29mU3RlcC5nZXRTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBzdGF0ZW1lbnROb2RlID0gcHJvb2ZTdGVwLmdldFN0YXRlbWVudE5vZGUoKVxuXG4gICAgaWYgKHN1YnByb29mTm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3Qgc3ViUHJvb2ZOb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hTdWJwcm9vZk5vZGUoc3VicHJvb2ZOb2RlLCBzdWJzdGl0dXRpb25zLCBtZXRhcHJvb2ZDb250ZXh0KTtcblxuICAgICAgaWYgKCFzdWJQcm9vZk5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHN0YXRlbWVudE5vZGVNYXRjaGVzID0gcHJlbWlzZS5tYXRjaFN0YXRlbWVudE5vZGUoc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICghc3RhdGVtZW50Tm9kZU1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pIHx8IG51bGw7XG5cbiAgY29uc3QgcHJlbWlzZU1hdGNoZXMgPSAocHJvb2ZTdGVwICE9PSBudWxsKTtcblxuICByZXR1cm4gcHJlbWlzZU1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1hdGNoUHJlbWlzZXMocHJlbWlzZSwgcHJvb2ZTdGVwcywgc3Vic3RpdHV0aW9ucywgbWV0YXByb29mQ29udGV4dCkge1xuICBjb25zdCBwcmVtaXNlc01hdGNoID0gcHJlbWlzZS5ldmVyeSgocHJlbWlzZSkgPT4ge1xuICAgIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gbWF0Y2hQcmVtaXNlKHByZW1pc2UsIHByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIG1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtYXRjaENvbmNsdXNpb24oY29uY2x1c2lvbiwgc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbWV0YXByb29mQ29udGV4dCkge1xuICBjb25zdCBzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGNvbmNsdXNpb24ubWF0Y2hTdGF0ZW1lbnROb2RlKHN0YXRlbWVudE5vZGUsIHN1YnN0aXR1dGlvbnMsIG1ldGFwcm9vZkNvbnRleHQpLFxuICAgICAgICBjb25jbHVzaW9uTWF0Y2hlcyA9IHN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG5cbmZ1bmN0aW9uIG1ldGFNYXRjaFByZW1pc2UocHJlbWlzZSwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgY29uc3QgbWV0YXByb29mU3RlcCA9IHBydW5lKG1ldGFwcm9vZlN0ZXBzLCAobWV0YXByb29mU3RlcCkgPT4ge1xuICAgIGNvbnN0IHJ1bGVTdWJwcm9vZk5vZGUgPSBtZXRhcHJvb2ZTdGVwLmdldFJ1bGVTdWJwcm9vZk5vZGUoKSxcbiAgICAgICAgICBtZXRhc3RhdGVtZW50Tm9kZSA9IG1ldGFwcm9vZlN0ZXAuZ2V0TWV0YXN0YXRlbWVudE5vZGUoKVxuXG4gICAgaWYgKHJ1bGVTdWJwcm9vZk5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJ1bGVTdWJQcm9vZk5vZGVNYXRjaGVzID0gcHJlbWlzZS5tYXRjaFJ1bGVTdWJwcm9vZk5vZGUocnVsZVN1YnByb29mTm9kZSwgc3Vic3RpdHV0aW9ucywgbWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICghcnVsZVN1YlByb29mTm9kZU1hdGNoZXMpIHsgIC8vL1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0YXN0YXRlbWVudE5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IHByZW1pc2UubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbWV0YXByb29mQ29udGV4dCk7XG5cbiAgICAgIGlmICghbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzKSB7ICAvLy9cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9KSB8fCBudWxsO1xuXG4gIGNvbnN0IHByZW1pc2VNYXRjaGVzID0gKG1ldGFwcm9vZlN0ZXAgIT09IG51bGwpO1xuXG4gIHJldHVybiBwcmVtaXNlTWF0Y2hlcztcbn1cblxuZnVuY3Rpb24gbWV0YU1hdGNoUHJlbWlzZXMocHJlbWlzZSwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIG1ldGFwcm9vZkNvbnRleHQpIHtcbiAgY29uc3QgcHJlbWlzZXNNYXRjaCA9IHByZW1pc2UuZXZlcnkoKHByZW1pc2UpID0+IHtcbiAgICBjb25zdCBwcmVtaXNlTWF0Y2hlcyA9IG1ldGFNYXRjaFByZW1pc2UocHJlbWlzZSwgbWV0YXByb29mU3RlcHMsIHN1YnN0aXR1dGlvbnMsIG1ldGFwcm9vZkNvbnRleHQpO1xuXG4gICAgaWYgKHByZW1pc2VNYXRjaGVzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwcmVtaXNlc01hdGNoO1xufVxuXG5mdW5jdGlvbiBtZXRhTWF0Y2hDb25jbHVzaW9uKGNvbmNsdXNpb24sIG1ldGFzdGF0ZW1lbnROb2RlLCBzdWJzdGl0dXRpb25zLCBtZXRhcHJvb2ZDb250ZXh0KSB7XG4gIGNvbnN0IG1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyA9IGNvbmNsdXNpb24ubWF0Y2hNZXRhc3RhdGVtZW50Tm9kZShtZXRhc3RhdGVtZW50Tm9kZSwgc3Vic3RpdHV0aW9ucywgbWV0YXByb29mQ29udGV4dCksXG4gICAgICAgIGNvbmNsdXNpb25NYXRjaGVzID0gbWV0YXN0YXRlbWVudE5vZGVNYXRjaGVzOyAvLy9cblxuICByZXR1cm4gY29uY2x1c2lvbk1hdGNoZXM7XG59XG4iXSwibmFtZXMiOlsiUnVsZSIsImxhYmVscyIsInByZW1pc2VzIiwiY29uY2x1c2lvbiIsImdldExhYmVscyIsImdldFByZW1pc2VzIiwiZ2V0Q29uY2x1c2lvbiIsIm1hdGNoTGFiZWxOYW1lIiwibGFiZWxOYW1lIiwibWF0Y2hlc0xhYmVsTmFtZSIsInNvbWUiLCJsYWJlbCIsIm5hbWUiLCJsYWJlbE1hdGNoZXNOYW1lIiwibWF0Y2hOYW1lIiwibWF0Y2hTdGF0ZW1lbnQiLCJzdGF0ZW1lbnROb2RlIiwibWV0YXByb29mQ29udGV4dCIsInN0YXRlbWVudE5hdGNoZXMiLCJwcmVtaXNlc0xlbmd0aCIsImxlbmd0aCIsInN1YnN0aXR1dGlvbnMiLCJjb25jbHVzaW9uTWF0Y2hlcyIsIm1hdGNoQ29uY2x1c2lvbiIsInByb29mU3RlcHMiLCJnZXRQcm9vZlN0ZXBzIiwic29tZVN1YkFycmF5IiwicHJlbWlzZXNNYXRjaENvbmNsdXNpb24iLCJwcmVtaXNlc01hdGNoIiwibWF0Y2hQcmVtaXNlcyIsIm1hdGNoTWV0YXN0YXRlbWVudCIsIm1ldGFzdGF0ZW1lbnROb2RlIiwibWV0YXN0YXRlbWVudE5hdGNoZXMiLCJtZXRhTWF0Y2hDb25jbHVzaW9uIiwibWV0YXByb29mU3RlcHMiLCJnZXRNZXRhcHJvb2ZTdGVwcyIsIm1ldGFNYXRjaFByZW1pc2VzIiwidG9KU09OIiwidG9rZW5zIiwibGFiZWxzSlNPTiIsIm1hcCIsImxhYmVsSlNPTiIsInByZW1pc2VzSlNPTiIsInByZW1pc2UiLCJwcmVtaXNlSlNPTiIsImNvbmNsdXNpb25KU09OIiwia2luZCIsIlJVTEVfS0lORCIsImpzb24iLCJmcm9tSlNPTiIsImNvbnRleHQiLCJydWxlIiwiTGFiZWwiLCJQcmVtaXNlIiwiQ29uY2x1c2lvbiIsImZyb21MYWJlbHNQcmVtaXNlc0FuZENvbmNsdXNpb24iLCJtYXRjaFByZW1pc2UiLCJwcm9vZlN0ZXAiLCJwcnVuZSIsInN1YnByb29mTm9kZSIsImdldFN1YnByb29mTm9kZSIsImdldFN0YXRlbWVudE5vZGUiLCJzdWJQcm9vZk5vZGVNYXRjaGVzIiwibWF0Y2hTdWJwcm9vZk5vZGUiLCJzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoU3RhdGVtZW50Tm9kZSIsInByZW1pc2VNYXRjaGVzIiwiZXZlcnkiLCJtZXRhTWF0Y2hQcmVtaXNlIiwibWV0YXByb29mU3RlcCIsInJ1bGVTdWJwcm9vZk5vZGUiLCJnZXRSdWxlU3VicHJvb2ZOb2RlIiwiZ2V0TWV0YXN0YXRlbWVudE5vZGUiLCJydWxlU3ViUHJvb2ZOb2RlTWF0Y2hlcyIsIm1hdGNoUnVsZVN1YnByb29mTm9kZSIsIm1ldGFzdGF0ZW1lbnROb2RlTWF0Y2hlcyIsIm1hdGNoTWV0YXN0YXRlbWVudE5vZGUi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